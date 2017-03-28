(ns cashtime.core
  (:require [cashtime.moment-utils :as mu]
            [cashtime.random-utils :as rnd]
            [cashtime.dom-utils :as dom]
            [clojure.string :as cs]
            [cashtime.utils :as u]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")

(defonce appstate (atom
                    {:plain-entries [] ;; плоские данные, рандомно

                     :inflow-entries [] ; записи притоков (поступлений)
                     :outflow-entries [] ; записи оттоков (выплат)

                     :avail-dim-groups {1 {:id 1
                                           :order-index 1 ; каким отображать по счету начиная слева
                                           :name "Контрагенты"
                                           :css-class "dim-1"
                                           :dims {1 {:id 1 :name "Халык Банк"}
                                                  2 {:id 2 :name "Реклама.кз"}
                                                  3 {:id 3 :name "TOO Вектор"}
                                                  4 {:id 4 :name "ИП Иванов"}
                                                  5 {:id 5 :name "Асылханов М.А."}
                                                  6 {:id 6 :name "ТОО Декор"}
                                                  7 {:id 7 :name "Landing Ltd."}}
                                           ;; доп. для сортировки, группировки
                                           ;; :sorted false
                                           ;; :grouped false
                                           }
                                        2 {:id 2
                                           :order-index 2
                                           :name "Договоры"
                                           :css-class "dim-2"
                                           :dims {1 {:id 1 :name "договор 1"}
                                                  2 {:id 2 :name "договор 2"}
                                                  3 {:id 3 :name "дог. от 20.03.17"}
                                                  4 {:id 4 :name "11042015 дог."}
                                                  5 {:id 5 :name "договор №4342"}}}
                                        3 {:id 3
                                           :order-index 3
                                           :name "Счета"
                                           :css-class "dim-3"
                                           :dims {1 {:id 1 :name "Qazkom"}
                                                  2 {:id 2 :name "Основной счет"}
                                                  3 {:id 3 :name "Валютный счет"}}}

                                         4 {:id 4
                                            :order-index 4
                                            :name "Статьи"
                                            :css-class "dim-4"
                                            :dims {1 {:id 1 :name "Статья 1"}
                                                   2 {:id 2 :name "Статья 2"}}}

                                        }
                     ;; активные (отображаемые) id групп измерений
                     :active-dim-group-ids #{2 3}

                     ;; значение поисковой строки
                     :search-dim-str nil

                     ;; сортировка для измерений
                     :sort-dim-params {:group-id 1 ; по какой группе измерений сортируем
                                       :desc? false}

                     ;; параметры для дат
                     :date-params {:grouping-mode :by-day ; варианты: :by-day :by-month :by-year
                                   }
                     }))

(def state-cursor (partial rum/cursor-in appstate))

;; параметры для рандомизации данных
(def randomizer-params {:from-d (js/Date. 2016 2 1)
                        :to-d (js/Date.)
                        :max-row-amount 10
                        :max-vals-amount 20
                        :max-entries 200
                        :min-summ 100
                        :max-summ 100000})

(defn random-plain-entry
  "Получить случайную плоскую запись"
  [dim-group-options from-d to-d min-summ max-summ]
  (-> {:dims (rand-nth dim-group-options)
       :date (rnd/random-iso-date from-d to-d)
       :v-type (rnd/rand-nth-by-percentage {:fact 95 :plan 5})
       :v-flow (rnd/rand-nth-by-percentage {:inflow 40 :outflow 60})
       :v-summ (rnd/rand-from-to min-summ max-summ)}))

(defn random-plain-entries
  "Получить случайные плоские данные по записям"
  [dim-groups {:keys [from-d to-d max-row-amount  min-summ max-summ max-entries]}]
  (let [dim-group-options (-> (repeatedly (rnd/rand-1-to max-row-amount)
                                          #(rnd/random-tuple dim-groups)))]
    (-> (repeatedly (rnd/rand-1-to max-entries)
                    #(random-plain-entry dim-group-options
                                         from-d
                                         to-d
                                         min-summ
                                         max-summ)))))


;;;; ---------------------------------------------------------------------------

(def test-plain-entries
  "Записи в негруп.виде"
  [{:dims {1 2}
    :date "2017-07-01T00:00:00Z"
    :v-type :fact
    :v-flow :outflow
    :v-summ 10000}
   {:dims {1 2, 2 1}
    :date "2017-07-01T00:00:00Z"
    :v-type :plan
    :v-flow :inflow
    :v-summ 5000}
   {:dims {1 2, 2 3}
    :date "2017-07-07T00:00:00Z"
    :v-type :fact
    :v-flow :inflow
    :v-summ 25000}
   {:dims {1 2, 2 3}
    :date "2017-02-01T00:00:00Z"
    :v-type :plan
    :v-flow :outflow
    :v-summ 1111}
   {:dims {1 3, 2 3}
    :date "2017-02-03T00:00:00Z"
    :v-type :fact
    :v-flow :outflow
    :v-summ 3333}
   {:dims {2 1}
    :date "2017-07-07T00:00:00Z"
    :v-type :fact
    :v-flow :outflow
    :v-summ 2200}
   ])




(def test-entries
  [{:tuple {1 2, 2 3}
    :date-values {"2017-07-01T00:00:00Z" {:fact 10000 :plan 5000}
                  "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}
                  "2017-07-03T00:00:00Z" {:fact 18000 :plan 2000}}}
   {:tuple {1 3, 3 1}
    :date-values {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}}])


(defn tuples-from-entries
  "Получить список всех таплов измерений внутри записей"
  [entries]
  (mapv :tuple entries))

(defn pair->dim
  [pair]
  (let [group-id (first pair)
        dim-id (second pair)]
    (get-in @(state-cursor [:avail-dim-groups]) [group-id :dims dim-id])))

(defn pair-from-tuple
  [tuple group-id]
  (when (and group-id tuple)
    (if-let [dim-id (get tuple group-id)]
      [group-id dim-id])))


(defn update-plain-entry-date-for-group
  "Обновить дату внутри плоских данных чтобы сгруппировать по дням/месяцам/годам и т.д."
  [plain-entry d-group-mode]
  (case d-group-mode
    :by-month (assoc plain-entry :date (mu/iso-date-by-month (:date plain-entry)))
    :by-year (assoc plain-entry :date (mu/iso-date-by-year (:date plain-entry)))
    :by-day plain-entry
    plain-entry))

(defn update-plain-entry-dims-for-avails
  "Обновить измерения внутри плоских данных чтобы сгруппировать по доступным измерениям"
  [plain-entry active-dim-group-ids]
  (update plain-entry :dims (fn[t](select-keys t active-dim-group-ids))))

(defn plain-entries->entries
  "Конвертировать плоские данные по записям в форматированные"
  [plain-entries d-group-mode active-dim-group-ids]
  (->> plain-entries
       (map #(-> %
                 (update-plain-entry-date-for-group d-group-mode)
                 (update-plain-entry-dims-for-avails active-dim-group-ids)))
       (reduce (fn [m e]
                 (if-not (u/nil-or-empty? (:dims e))
                   (update-in m [(:dims e) (:date e) (:v-type e)]
                              + (or (:v-summ e) 0))
                   m))
               {})
       (reduce-kv (fn [vc tuple d-values]
                  (conj vc {:tuple tuple :date-values d-values}))
                [])))

;; (plain-entries->entries test-plain-entries :by-month [2])


(defn tuple-w-ids->tuple-w-names
  "Таплы с id измерений в таплы с названиями измерений"
  [all-dim-groups tuple-w-ids]
  (->> tuple-w-ids
     (reduce-kv (fn [m k v]
                  (assoc m k (-> (get-in all-dim-groups [k :dims v])
                                 :name)))
                {})))

;; (tuple-w-ids->tuple-w-names test-dim-groups {1 2, 2 3})
;; => {1 "Визитки", 2 "Bestprofi.kz"}

(defn sort-tuples
  "Сортировать список таплов по названиям в измерении"
  [tuples dim-groups sort-gr-id desc?]
  (-> {}
      (assoc :tuples-w-ids tuples)
      (#(assoc % :tuples-w-names-map (reduce (fn[m tuple]
                                           (assoc m tuple (tuple-w-ids->tuple-w-names dim-groups tuple)))
                                         {} (:tuples-w-ids %))))
      (#(assoc % :sorted-tuples-w-names (->> (:tuples-w-names-map %)
                                             vals
                                             (sort (fn[t1 t2]
                                                     ((if desc? > <)
                                                      (or (get t1 sort-gr-id) "")
                                                      (or (get t2 sort-gr-id) "")))))))
      (#(assoc % :sorted-tuples-w-ids (->> (:sorted-tuples-w-names %)
                                           (map (fn[t](u/k-of-v (:tuples-w-names-map %) t))))))
      :sorted-tuples-w-ids))


(defn get-sorted-entries
  "Получить отсортированные записи по названиям измерений в нужной группе"
  [entries dim-groups sort-gr-id desc?]
  (if sort-gr-id
    (-> entries
        tuples-from-entries
        (sort-tuples dim-groups sort-gr-id desc?)
        u/indexed-hashmap-of-coll
        ((fn[ind-hm] (sort-by :tuple (fn[t1 t2]
                                       (< (get ind-hm t1) (get ind-hm t2)))
                              entries))))
    entries))

;; (get-sorted-entries [{:tuple {1 4, 3 1}
;;                 :date-values {"2017-07-01T00:00:00Z" {:fact 10000 :plan 5000}
;;                               "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}
;;                               "2017-07-03T00:00:00Z" {:fact 18000 :plan 2000}}}
;;                {:tuple {1 2, 2 3}
;;                 :date-values {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}}]
;;               test-dim-groups
;;               1 false)

(defn get-search-tuple-with-substr
  "Получить хмэп вида {id-группы [id-измерений]}, у которых есть в названиях подстрока"
  [dim-groups ss]
  ;; (get-search-tuple-with-substr test-dim-groups "го")
  ;; => {1 (4 7), 2 (4)}
  (->> dim-groups
       vals
       (reduce (fn [m dg]
                 (let [ids (->> dg
                                :dims
                                vals
                                (filter #(u/has-substr? (:name %) ss))
                                (map :id))]
                   (if-not (u/nil-or-empty? ids) (assoc m (:id dg) ids)
                     m)))
               {})))


(defn pair-in-search-tuple?
  "Находится ли пара в тапле для поиска
  пример: (pair-in-search-tuples? [1 7] {1 [4 7], 2 [4]}) - true"
  [pair search-tuples]
  (when pair
    (boolean (u/in? (get search-tuples (first pair))
                    (second pair)))))

(defn tuple-in-search-tuple?
  "Содержится ли в тапле хоть одна пара удовл. таплу поиска"
  [tuple search-tuple]
  (->> tuple
       vec
       (some #(pair-in-search-tuple? % search-tuple))
       boolean))

(defn get-used-dims-ids
  "Получить из всех записей id используемых измерений"
  [entries]
  (->> entries
       (map :tuple)
       (mapcat keys)
       distinct))

;; (defn get-first-group-id-sorted-by-index
;;   "Получить первый доступный самый левый (по order-index)
;;   id группы измерений (из существующих)"
;;   [used-group-ids]
;;   (->> used-group-ids
;;        (sort #(< (get-in test-avail-dim-groups [%1 :order-index])
;;                  (get-in test-avail-dim-groups [%2 :order-index])))
;;        first))

(defn sort-entries!
  "Отсортировать строки записей согласно настройкам сортировки групп
  (отдельно записи оттоков и притоков)"
  []
  (let [sort-dim-params @(state-cursor [:sort-dim-params])
        avail-dim-groups @(state-cursor [:avail-dim-groups])]
    (swap! (state-cursor [:inflow-entries]) (fn [prev-e]
                                              (get-sorted-entries prev-e
                                                                  avail-dim-groups
                                                                  (:group-id sort-dim-params) (:desc? sort-dim-params))))
    (swap! (state-cursor [:outflow-entries]) (fn [prev-e]
                                              (get-sorted-entries prev-e
                                                                  avail-dim-groups
                                                                  (:group-id sort-dim-params) (:desc? sort-dim-params))))))


(defn filter-plain-entries
  "Отфильтровать (если нужно) плоские данные"
  [plain-entries search-tuple]
  (->> plain-entries
       ;; если нужно фильтровать по поисковой строке
       ((fn[pe](if search-tuple
                 (filter #(tuple-in-search-tuple? (:dims %) search-tuple) pe)
                 pe)))))

(defn update-entries!
  "Обновить записи в формат.виде"
  []
  (let [plain-entries @(state-cursor [:plain-entries])
        active-dim-group-ids @(state-cursor [:active-dim-group-ids])
        search-str @(state-cursor [:search-dim-str])
        search-tuple (when search-str (get-search-tuple-with-substr @(state-cursor [:avail-dim-groups]) search-str))
        result-plain-entries (filter-plain-entries plain-entries search-tuple)
        sort-dim-params @(state-cursor [:sort-dim-params])]
    ;; отдельно конвертируем в записи оттоков и притоков
    (reset! (state-cursor [:inflow-entries])
            (plain-entries->entries (filter #(= (:v-flow %) :inflow) result-plain-entries)
                                    @(state-cursor [:date-params :grouping-mode])
                                    active-dim-group-ids))
    (reset! (state-cursor [:outflow-entries])
            (plain-entries->entries (filter #(= (:v-flow %) :outflow) result-plain-entries)
                                    @(state-cursor [:date-params :grouping-mode])
                                    active-dim-group-ids))
    ;; CONSIDER: если изменилось кол-во измерений, то устанавливать новое значение сортировки по умолчанию
    ;; сортируем
    (sort-entries!)))


(defn refresh-random-data
  "Обновить случайные данные записей"
  []
  (let [plain-entries (random-plain-entries @(state-cursor [:avail-dim-groups])
                                            randomizer-params)]
    (reset! (state-cursor [:plain-entries]) plain-entries)
    ;; группируем формат.записи по дате
    (update-entries!)))

(defn row-totals-from-entries
  "Посчитать итого для каждой строки"
  [entries]
  (->> entries
       (map #(reduce-kv (fn [totals k-date v-sum]
                          (-> totals
                              (update :fact + (or (:fact v-sum) 0))
                              (update :plan + (or (:plan v-sum) 0))))
                        {:fact 0 :plan 0}
                        (:date-values %)))))


(defn distinct-dates-from-entries
  "Получить сортированный список уникальных дат из списка записей"
  [entries]
  (->> entries
       (map :date-values)
       (map keys)
       (reduce (fn [coll dates]
                 (apply conj (cons coll dates)))
                  #{})
       (into [])
       mu/sort-dates))

(defn date-totals-from-entries
  "Получить итого по датам (по столбцу т.е.)"
  [dates entries]
  (->> dates
       (map (fn [d]
              (reduce (fn [m {:keys [tuple date-values]}]
                        (-> m
                            (update :fact + (or (get-in date-values [d :fact]) 0))
                            (update :plan + (or (get-in date-values [d :plan]) 0))))
                      {:fact 0 :plan 0} entries)))))

;;;
;;; Watchers
;;;
(defn init-watchers
  "Иниц. всех вотчеров"
  []
  ;; при изменении группировки дат
  (add-watch (state-cursor [:date-params :grouping-mode]) :d-group-mode-watch
             (fn [k a old-s new-s]
               (println "watch group mode")
               (when-not (= old-s new-s)
                 (update-entries!))))
  ;; при изменения значения в поисковой строке
  (add-watch (state-cursor [:search-dim-str]) :search-str-watch
             (fn [k a old-s new-s]
               (when-not (= old-s new-s)
                 (update-entries!))))
  ;; при изменении настроек сортировки групп измерений
  (add-watch (state-cursor [:sort-dim-params]) :sort-dim-params-watch
             (fn [k a old-s new-s]
               (when-not (= old-s new-s)
                 (sort-entries!))))
  ;; при изменении фильтрации потока (только расходы/доходы)
  (add-watch (state-cursor [:flow-filter-type]) :flow-filter-type-watch
             (fn [k a old-s new-s]
               (when-not (= old-s new-s)
                 (update-entries!))))
  ;; при изменении переключателя активных групп измерений
  (add-watch (state-cursor [:active-dim-group-ids]) :active-dim-group-ids-watch
             (fn [k a old-s new-s]
               (when-not (= old-s new-s)
                 (update-entries!)))))

;;; ---------------------------------------------------------------------------
;;; Методы для вьюшек
;;; ---------------------------------------------------------------------------
(defn print-appstate
  "Распечатать в лог текущее содержимое appstate"
  []
  (println @appstate))

(defn set-dates-group-mode
  "Установить новый режим группировки дат"
  [group-mode]
  (reset! (state-cursor [:date-params :grouping-mode]) group-mode))

(defn set-search-str
  "Новое значение в поисковой строке"
  [s]
  (reset! (state-cursor [:search-dim-str]) s))

(defn set-dim-group-sort
  "Сортировать по группе измерения"
  [dim-group-id]
  (let [sort-params-c (state-cursor [:sort-dim-params])]
    (if (= (:group-id @sort-params-c) dim-group-id)
      (swap! sort-params-c (fn[p] (assoc p :desc? (not (:desc? p)))))
      (reset! sort-params-c {:group-id dim-group-id :desc? false}))))

(defn set-flow-filter-type
  "Отфильтровать тип потока (все/только расходы/только доходы)"
  [flow-type]
  (println "filter flow type: " flow-type)
  (reset! (state-cursor [:flow-filter-type]) flow-type))

(disj #{4 5 3} 4)
(conj #{4 5 3} 6)

(defn toggle-dimension-group
  "Переключить группу измерений (вкл/откл)"
  [dim-group]
  (println "toggle-dimension-group: " (:id dim-group))
  (swap! (state-cursor [:active-dim-group-ids])
         (fn [active-dims]
           (if (contains? active-dims (:id dim-group))
             (disj active-dims (:id dim-group))
             (conj active-dims (:id dim-group))))))

;;; ---------------------------------------------------------------------------
;;; Вьюшки
;;; ---------------------------------------------------------------------------
;;;
;;; Измерения и группировки (левая часть)
;;;
(rum/defc dim-td-view
  "Ячейка с измерением"
  [dim-group dim]
  [:td {:class (when dim (:css-class dim-group))}
   (:name dim)])


(rum/defc tuple-tr-view
  "Строка названий конкретных измерений"
  [dim-groups tuple]
  [:tr
   (map (fn [dim-group]
          (let [dim-group-id (:id dim-group)
                pair (pair-from-tuple tuple dim-group-id)]
            (rum/with-key (dim-td-view dim-group (pair->dim pair))
                          [dim-group-id (second pair)])))
        dim-groups)])


(rum/defc dim-group-header-view
  "Заголовок для группы измерений"
  [dim-group sort-params]
  (let [gr-id (:id dim-group)]
    [:th {:class (when (= (:group-id sort-params) gr-id)
                   (str "sorted " (if (:desc? sort-params) "descending" "ascending")))
          :on-click #(set-dim-group-sort gr-id)}
     (:name dim-group)]))


(rum/defc dimensions-view
  "Вьюшка для измерений (левой части)
  used-dim-groups - используются только видимые справочники измерений"
  [used-dim-groups outflow-tuples inflow-tuples sort-params]
  (let [ordered-dim-groups (sort-by :order-index used-dim-groups)]
    [:div
     [:table.ui.very.basic.padded.sortable.table
      [:thead
       [:tr
        (map #(rum/with-key (dim-group-header-view % sort-params)
                            (:id %))
             ordered-dim-groups)]]
      [:tbody
       ;; измерения оттоков
       (map #(rum/with-key (tuple-tr-view ordered-dim-groups %)
                           %) outflow-tuples)
       ;; итого оттоков
       [:tr
        [:td.total-cell {:colSpan (count ordered-dim-groups)
                         :style {:font-weight "bold"}} "Итого выплат"]]
       ;; измерения притоков
       (map #(rum/with-key (tuple-tr-view ordered-dim-groups %)
                           %) inflow-tuples)
       ;; итого притоков
       [:tr
        [:td.total-cell {:colSpan (count ordered-dim-groups)
                         :style {:font-weight "bold"}} "Итого поступлений"]]
       ]]]))

;;;
;;; Записи с датами (центральная часть)
;;;
(rum/defc date-header-th-view
  [date d-group-mode]
  [:th (mu/print-date-in-needed-format date d-group-mode)])

(rum/defc date-headers-tr-view
  [dates d-group-mode]
  [:tr
   (map #(rum/with-key (date-header-th-view % d-group-mode) %)
        dates)])

(rum/defc entry-value-view
  "Вьюшка для вывода суммы записи"
  [value flow-type]
  (if (not (nil? value))
    [:div.value-cell
     (when (:fact value) [:span.fact-value
                          {:class (case flow-type
                                    :inflow "positive"
                                    :outflow "negative"
                                    "")}
                          (u/money-str-with-zero (:fact value))])
     (when (and (:plan value) (not= 0 (:plan value))) [:span.plan-value
                                                       (u/money-str-with-zero (:plan value))])]
     [:div.value-cell " "]))


(rum/defc value-cell-td-view
  [value flow-type]
  [:td
   (entry-value-view value flow-type)])


(rum/defc values-row-tr-view
  [dates date-values flow-type]
  [:tr
   (map (fn [d]
          (rum/with-key (value-cell-td-view (get date-values d) flow-type) d))
        dates)])


(rum/defc date-total-td-view
  "Вьюшка для итого по столбцу (дате)"
  [date-total flow-type]
  [:td.total-cell (entry-value-view date-total flow-type)])


(rum/defc entries-view
  "Вьюшка для записей и дат (основная часть)"
  [outflow-entries inflow-entries d-params]
  (let [dates (distinct-dates-from-entries (concat outflow-entries inflow-entries))
        d-group-mode (:grouping-mode d-params)]
    [:table.ui.very.basic.padded.celled.single.line.table
;;      {:style {:width "1200px"}}
     [:thead
      ;; заголовки с датами
      (date-headers-tr-view dates d-group-mode)]
     [:tbody
      ;; строки оттоков
      (map (fn[{:keys [tuple date-values]}]
             (rum/with-key (values-row-tr-view dates date-values :outflow) tuple))
           outflow-entries)
      ;; строка итого оттоков
      [:tr
       (map #(date-total-td-view % :outflow)
            (date-totals-from-entries dates outflow-entries))]
      ;; строки притоков
      (map (fn[{:keys [tuple date-values]}]
             (rum/with-key (values-row-tr-view dates date-values :inflow) tuple))
           inflow-entries)
      ;; строка итого притоков
      [:tr
       (map #(date-total-td-view % :inflow)
            (date-totals-from-entries dates inflow-entries))]
      ]]))

;;;
;;; Остальные вьюшки
;;;
(rum/defc row-total-tr-view
  "Вьюшка для итого по строке"
  [total flow-type]
  [:tr [:td.total-cell (entry-value-view total flow-type)]])

(rum/defc row-totals-view
  "Вьюшка для Итого по строкам"
  [outflow-totals inflow-totals]
  [:table.ui.very.basic.padded.table
   [:thead
    [:tr
     [:th "Итого"]]]
   [:tbody
    ;; сами строки
    (map #(rum/with-key (row-total-tr-view % :outflow) %)
         outflow-totals)
    ;; итого
    [:tr
     [:td.total-cell (entry-value-view (reduce (fn [m v]
                                                 (-> m
                                                     (update :fact + (:fact v))
                                                     (update :plan + (:plan v))))
                                               {:fact 0 :plan 0} outflow-totals)
                                       :outflow)]]
    ;; сами строки
    (map #(rum/with-key (row-total-tr-view % :inflow) %)
         inflow-totals)
    ;; итого
    [:tr
     [:td.total-cell (entry-value-view (reduce (fn [m v]
                                                 (-> m
                                                     (update :fact + (:fact v))
                                                     (update :plan + (:plan v))))
                                               {:fact 0 :plan 0} inflow-totals)
                                       :inflow)]]
    ]])


(rum/defc timeline-panel-view
  "Вьюшка для управления временем"
  [date-params]
  (let [d-group-mode (:grouping-mode date-params)
        get-group-params (fn[gm] (dom/menu-item-props (= d-group-mode gm)
                                                      set-dates-group-mode
                                                      gm))]
    [:div
     [:a.ui.labeled.icon.tiny.button
      [:i.left.arrow.icon]
      "загрузить старее"]
     [:div.ui.text.right.floated.compact.menu
      [:div.header.item "Показать по "]
      [:a.item (get-group-params :by-day) "дням"]
      [:a.item (get-group-params :by-month) "месяцам"]
      [:a.item (get-group-params :by-year) "годам"]]
     ]))


(rum/defc bottom-menu-view
  "Нижняя часть фильтров "
  [flow-filter-type]
  (let [get-filter-props (fn [k] (dom/menu-item-props (= flow-filter-type k)
                                                      set-flow-filter-type
                                                      k))]
    [:div.ui.text.right.floated.compact.menu
     [:a.item (get-filter-props :all) "Все"]
     [:a.item (get-filter-props :only-outflows) "расходы"]
     [:a.item (get-filter-props :only-inflows) "доходы"]]))


(rum/defc dimension-toggler-item-view < {:did-update (fn[state]
                                                       (.checkbox (.find (dom/rcomp->js$ (:rum/react-component state))
                                                                         ".ui.checkbox"))
                                                       state)}
  [dim-group active?]
  [:div.item
   [:div.ui.checkbox {:class (when active? "checked")
                      :on-click #(toggle-dimension-group dim-group)
;;                       :style {:margin-right "10px" :margin-bottom "5px"}
                      }
    [:input {:type "checkbox"
             :checked active?}]
    [:label (:name dim-group)]]])


(rum/defc dimensions-toggler-view
  "Вьюшка переключателя измерений"
  [avail-dim-groups active-dim-group-ids]
  [:div.ui.horizontal.list
   (map #(rum/with-key (let[dim-group (second %)]
                         (dimension-toggler-item-view dim-group
                                                      (contains? active-dim-group-ids
                                                                 (:id dim-group)))) %)
        avail-dim-groups)])

;;;
;;; Главная вьюшка
;;;
(rum/defc main-view < rum/reactive
  []
  (let [inflow-entries (rum/react (state-cursor [:inflow-entries]))
        outflow-entries (rum/react (state-cursor [:outflow-entries]))
        avail-dim-groups (rum/react (state-cursor [:avail-dim-groups]))
        active-dim-group-ids (rum/react (state-cursor [:active-dim-group-ids]))
        used-dim-groups (select-keys avail-dim-groups (get-used-dims-ids (concat outflow-entries inflow-entries)))
        row-outflow-totals (row-totals-from-entries outflow-entries)
        row-inflow-totals (row-totals-from-entries inflow-entries)
        d-params (rum/react (state-cursor [:date-params]))
        sort-dim-params (rum/react (state-cursor [:sort-dim-params]))
        flow-filter-type (rum/react (state-cursor [:flow-filter-type]))]
    [:div.ui.padded.grid
     [:div.row
      [:div.column
       [:div.ui.button {:on-click #(refresh-random-data)} "Обновить данные"]
       [:div.ui.button {:on-click #(print-appstate)} "Распечатать"]
       ]]
     ;; панель управления временем c поиском
     [:div.row {:style {:padding-bottom "0"}}
      [:div.four.wide.column
       [:div.search-div
        [:div.ui.fluid.input
         [:input {:type "text"
                  :on-change #(set-search-str (dom/value-of-input %))
                  }]]]]
      [:div.ten.wide.column
       (timeline-panel-view d-params)]
      [:div.two.wide.column]]
     ;; переключатель измерений
     [:div.row {:style {:padding-bottom "0"}}
      [:div.four.wide.column
       (dimensions-toggler-view avail-dim-groups
                                active-dim-group-ids)]
      [:div.twelve.wide.column]]
     ;; сама таблица
     [:div.stretched.bottom.aligned.row
      [:div.four.wide.column
       [:div.dimensions-div
        ;; измерения
        (dimensions-view (vals used-dim-groups)
                         (tuples-from-entries outflow-entries)
                         (tuples-from-entries inflow-entries)
                         sort-dim-params)]]
      [:div.ten.wide.column
       [:div.values-div
        ;; записи
        (entries-view outflow-entries
                      inflow-entries
                      d-params)]]
      ;; столбец итого по строкам
      [:div.two.wide.column
       [:div.row-totals-div
        ;; итого по строкам
        (row-totals-view row-outflow-totals row-inflow-totals)]]]
     ;; нижняя строка под таблицей
;;      [:div.row
;;       [:div.column
;;        (bottom-menu-view flow-filter-type)]]
     ]))

(rum/mount (main-view) (.getElementById js/document "main"))

(defn init
  []
  (println "init core")
  (refresh-random-data)
  (init-watchers)
  (.locale js/moment "ru")
  (rum/mount (main-view) (.getElementById js/document "main")))

(init)

;; (defonce appdata (atom
;;                    {:dimensions [{:id 1
;;                                   :name "Статьи"
;;                                   :entries [{:id 1 :name "Сайты"}
;;                                             {:id 2 :name "Визитки"}
;;                                             {:id 3 :name "Маркетинг"}]}
;;                                  {:id 2
;;                                   :name "Контрагенты"
;;                                   :entries [{:id 1 :name "Nova Med"}
;;                                             {:id 2 :name "GCC"}
;;                                             {:id 3 :name "Bestprofi.kz"}
;;                                             {:id 4 :name "Иванов Игорь"}]}]
;;                     :values [ ;; факт: визитка для Bestprofi.kz за 40000 ТГ, 1 июня 2016
;;                               {:dims [{:d-id 1 :e-id 2}
;;                                       {:d-id 2 :e-id 3}]
;;                                :date "2017-06-01T00:00:00Z"
;;                                :pay-type :fact
;;                                :flow-type :income
;;                                :value {:summ 40000 :c-id 2}}
;;                               ;; план: безымянная (без статьи) расход на Nova Med за 20000 ТГ, 15 июня 2016
;;                               {:dims [{:d-id 2 :e-id 1}]
;;                                :date "2017-06-15T00:00:00Z"
;;                                :pay-type :plan
;;                                :flow-type :expense
;;                                :value {:summ 20000 :c-id 2}}
;;                               {:dims [{:d-id 2 :e-id 1}]
;;                                :date "2017-06-18T00:00:00Z"
;;                                :pay-type :plan
;;                                :flow-type :expense
;;                                :value {:summ 10000 :c-id 2}}]
;;                     }))














