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
                     :entries [] ; записи в формат.виде для отображения в таблице
                     :avail-dim-groups {1 {:id 1
                                           :order-index 1 ; каким отображать по счету начиная слева
                                           :name "Статьи"
                                           :css-class "dim-1"
                                           :dims {1 {:id 1 :name "Сайт"}
                                                  2 {:id 2 :name "Визитки"}
                                                  3 {:id 3 :name "Маркетинг"}
                                                  4 {:id 4 :name "Логотип"}
                                                  5 {:id 5 :name "Фирменный стиль"}
                                                  6 {:id 6 :name "Лэндинг"}
                                                  7 {:id 7 :name "Другое"}}
                                           ;; доп. для сортировки, группировки
                                           ;; :sorted false
                                           ;; :grouped false
                                           }
                                        2 {:id 2
                                           :order-index 2
                                           :name "Контрагенты"
                                           :css-class "dim-2"
                                           :dims {1 {:id 1 :name "Nova Med"}
                                                  2 {:id 2 :name "GCC"}
                                                  3 {:id 3 :name "Bestprofi.kz"}
                                                  4 {:id 4 :name "Игорь"}
                                                  5 {:id 5 :name "Luxor"}}}
                                        3 {:id 3
                                           :order-index 3
                                           :name "Компания"
                                           :css-class "dim-3"
                                           :dims {1 {:id 1 :name "DIIS"}
                                                  2 {:id 2 :name "BRK"}}}}
                     ;; значение поисковой строки
                     :search-dim-str nil

                     ;; сортировка для измерений
                     :sort-dim-params {:group-id nil ; по какой группе измерений сортируем
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
                        :min-summ -70000
                        :max-summ 100000})

(select-keys {1 {:a 34234} 2 {:x 342} 3 {:x 45453}}
             [1 2])

(defn random-plain-entry
  "Получить случайную плоскую запись"
  [dim-group-options from-d to-d min-summ max-summ]
  (-> {:dims (rand-nth dim-group-options)
       :date (rnd/random-iso-date from-d to-d)
       :v-type (rnd/rand-nth-by-percentage {:fact 90 :plan 10})
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

;; (def plain-entries
;;   "Записи в негруп.виде"
;;   [{:dims {1 2, 2 3}
;;     :date "2017-07-01T00:00:00Z"
;;     :v-type :fact
;;     :v-summ 10000}
;;    {:dims {1 2, 2 3}
;;     :date "2017-07-01T00:00:00Z"
;;     :v-type :plan
;;     :v-summ 5000}
;;    {:dims {1 2, 2 3}
;;     :date "2017-07-07T00:00:00Z"
;;     :v-type :fact
;;     :v-summ 25000}
;;    {:dims {1 2, 2 3}
;;     :date "2017-02-01T00:00:00Z"
;;     :v-type :plan
;;     :v-summ 1111}
;;    {:dims {2 1}
;;     :date "2017-07-07T00:00:00Z"
;;     :v-type :fact
;;     :v-summ 2200}
;;    ])

(def entries
  "Тестовые используемые записи"
  {{1 2, 2 3} {"2017-07-01T00:00:00Z" {:fact 10000 :plan 5000}
               "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}
               "2017-07-03T00:00:00Z" {:fact 18000 :plan 2000}}
   {1 3, 2 3} {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}
   {2 1} {"2017-06-01T00:00:00Z" {:fact -3000 :plan nil :comment "some comment"}}})

(def test-dim-groups
  {1 {:id 1
      :name "Статьи"
      :css-class "dim-1"
      :dims {1 {:id 1 :name "Сайт"}
             2 {:id 2 :name "Визитки"}
             3 {:id 3 :name "Маркетинг"}
             4 {:id 4 :name "Логотип"}
             5 {:id 5 :name "Фирменный стиль"}
             6 {:id 6 :name "Лэндинг"}
             7 {:id 7 :name "Другое"}}
      ;; доп. для сортировки, группировки
      ;; :sorted false
      ;; :grouped false
      }
   2 {:id 2
      :name "Контрагенты"
      :css-class "dim-2"
      :dims {1 {:id 1 :name "Nova Med"}
             2 {:id 2 :name "GCC"}
             3 {:id 3 :name "Bestprofi.kz"}
             4 {:id 4 :name "Игорь"}
             5 {:id 5 :name "Luxor"}}}
   3 {:id 3
      :name "Компания"
      :css-class "dim-3"
      :dims {1 {:id 1 :name "DIIS"}
             2 {:id 2 :name "BRK"}}}
   })

(defn tuple-w-ids->tuple-w-names
  "Таплы с id измерений в таплы с названиями измерений"
  [all-dim-groups tuple-w-ids]
  (->> tuple-w-ids
     (reduce-kv (fn [m k v]
                  (assoc m k (-> (get-in all-dim-groups [k :dims v])
                                 :name)))
                {})))

;; (tuple-w-ids->tuple-w-names test-dim-groups {1 2, 2 3})

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
                                                     ((if desc? < >)
                                                      (or (get t1 sort-gr-id) "")
                                                      (or (get t2 sort-gr-id) "")))))))
      (#(assoc % :sorted-tuples-w-ids (->> (:sorted-tuples-w-names %)
                                           (map (fn[t](u/k-of-v (:tuples-w-names-map %) t))))))
      :sorted-tuples-w-ids))

(sort-tuples [{1 4, 3 1}
              {2 5}
              {1 2, 2 3}] test-dim-groups 2 false)




;; (let [sort-gr-id 1
;;       desc? true]
;;   (->> [{1 "Логотип", 3 "DIIS"}
;;         {2 "Luxor"}
;;         {1 "Визитки", 2 "Bestprofi.kz"}]
;;        (sort #((if desc? < >)
;;                (or (get %1 sort-gr-id) "")
;;                (or (get %2 sort-gr-id) "")))))








(defn get-search-tuple-with-substr
  "Получить хмэп вида {id-группы [id-измерений]}, у которых есть в названиях подстрока"
  [dim-groups ss]
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


(get-search-tuple-with-substr test-dim-groups "го")


(defn pair-in-search-tuple?
  "Находится ли пара в тапле для поиска
  пример: (pair-in-search-tuples? [1 7] {1 [4 7], 2 [4]}) - true"
  [pair search-tuples]
  (when pair
    (boolean (u/in? (get search-tuples (first pair))
                    (second pair)))))

(pair-in-search-tuple? [2 3] {1 [4 7], 2 [4]})

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
       keys
       (mapcat keys)
       distinct))

(defn moment->iso-str
  [md]
  (str (.format md "YYYY-MM-DD") "T00:00:00Z"))

(defn iso-date-by-month
  [iso-str]
  (-> (mu/iso-str->moment iso-str)
      (#(js/moment. #js [(.year %) (.month %)]))
      moment->iso-str
      ))

(defn iso-date-by-year
  [iso-str]
  (-> (mu/iso-str->moment iso-str)
      (#(js/moment. #js [(.year %)]))
      moment->iso-str
      ))

(defn update-plain-entry-date-for-group
  [plain-entry d-group-mode]
  (case d-group-mode
    :by-month (assoc plain-entry :date (iso-date-by-month (:date plain-entry)))
    :by-year (assoc plain-entry :date (iso-date-by-year (:date plain-entry)))
    :by-day plain-entry
    plain-entry))

(defn plain-entries->entries
  "Конвертировать плоские данные по записям в форматированные"
  [plain-entries d-group-mode]
  (->> plain-entries
       (map #(update-plain-entry-date-for-group % d-group-mode))
       (reduce (fn [m e]
                 (update-in m [(:dims e) (:date e) (:v-type e)]
                            + (or (:v-summ e) 0)))
               {})))


(defn update-entries!
  "Обновить записи в формат.виде"
  []
  (let [plain-entries @(state-cursor [:plain-entries])
        search-str @(state-cursor [:search-dim-str])
        search-tuple (when search-str (get-search-tuple-with-substr @(state-cursor [:avail-dim-groups]) search-str))
        result-plain-entries (if search-tuple ; если нужно фильтровать
                               (filter (fn[pe] (tuple-in-search-tuple? (:dims pe) search-tuple))
                                       plain-entries)
                               plain-entries)]
    (reset! (state-cursor [:entries])
            (plain-entries->entries result-plain-entries
                                    @(state-cursor [:date-params :grouping-mode])))))

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
                        (second %)))))

(defn distinct-dates-from-entries
  "Получить сортированный список уникальных дат из списка записей"
  [entries]
  (->> entries
       (reduce-kv (fn [coll k v]
                    (apply conj (cons coll (keys v))))
                  #{})
       (into [])
       mu/sort-dates))

(defn date-totals-from-entries
  "Получить итого по датам"
  [entries]
  (let [dates (-> entries
                  distinct-dates-from-entries)]
    (->> dates
         (map (fn [d]
                (reduce-kv (fn [m k v]
                             (-> m
                                 (update :fact + (or (get-in v [d :fact]) 0))
                                 (update :plan + (or (get-in v [d :plan]) 0))))
                           {:fact 0 :plan 0} entries))))))

;;; TODO: изменить структуру данных entries из хм в вектор
(defn tuples-from-entries
  "Получить список всех таплов измерений внутри записей"
  [entries]
  (->> entries
       keys
       (into [])))

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

;;;
;;; Watchers
;;;
(defn init-watchers
  "Иниц. всех вотчеров"
  []
  (add-watch (state-cursor [:date-params :grouping-mode]) :d-group-mode-watch
             (fn [k a old-s new-s]
               (println "watch group mode")
               (when-not (= old-s new-s)
                 (update-entries!))))
  (add-watch (state-cursor [:search-dim-str]) :search-str-watch
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
  [dim-group]
  [:th (:name dim-group)])


(rum/defc dimensions-view
  "Вьюшка для измерений (левой части)
  used-dim-groups - используются только видимые справочники измерений"
  [used-dim-groups tuples]
  (let [ordered-dim-groups (sort-by :order-index used-dim-groups)]
    [:div
     [:table.ui.very.basic.padded.sortable.table
      [:thead
       [:tr
        (map #(rum/with-key (dim-group-header-view %)
                            (:id %))
             ordered-dim-groups)]]
      [:tbody
       (map #(rum/with-key (tuple-tr-view ordered-dim-groups %)
                           %) tuples)
       [:tr
        [:td {:colSpan (count ordered-dim-groups)
              :style {:font-weight "bold"}} "Итого"]]]]]))


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
  [value]
  [:div.value-cell
   (when (and (:fact value) (not= 0 (:fact value))) [:span.fact-value
                                                     {:class (if (pos? (:fact value)) "positive" "negative")}
                                                     (u/money-str-with-zero (:fact value))])
   (when (and (:plan value) (not= 0 (:plan value))) [:span.plan-value
                                                     (u/money-str-with-zero (:plan value))])

   ])


(rum/defc value-cell-td-view
  [value]
  [:td
   (when value
     (entry-value-view value))])


(rum/defc values-row-tr-view
  [dates date-values]
  [:tr
   (map (fn [d]
          (rum/with-key (value-cell-td-view (get date-values d)) d))
        dates)])

(rum/defc date-total-td-view
  "Вьюшка для итого по столбцу (дате)"
  [date-total]
  [:td.total-cell (entry-value-view date-total)])

(rum/defc entries-view
  "Вьюшка для записей и дат (основная часть)"
  [entries d-params]
  (let [dates (distinct-dates-from-entries entries)
        d-group-mode (:grouping-mode d-params)]
    [:table.ui.very.basic.padded.celled.single.line.table
;;      {:style {:width "1200px"}}
     [:thead
      ;; заголовки с датами
      (date-headers-tr-view dates d-group-mode)]
     [:tbody
      ;; сами строки
      (map (fn[[tuple date-values]]
             (rum/with-key (values-row-tr-view dates date-values) tuple))
           entries)
      ;; итого
      [:tr
       (map #(rum/with-key (date-total-td-view %)%)
            (date-totals-from-entries entries))]]]))

;;;
;;; Остальные вьюшки
;;;
(rum/defc row-total-tr-view
  "Вьюшка для итого по строке"
  [total]
  [:tr [:td.total-cell (entry-value-view total)]])

(rum/defc row-totals-view
  "Вьюшка для Итого по строкам"
  [totals]
  [:table.ui.very.basic.padded.table
   [:thead
    [:tr
     [:th "Итого за месяц"]]]
   [:tbody
    ;; сами строки
    (map #(rum/with-key (row-total-tr-view %) %)
         totals)
    ;; итого
    [:tr
     [:td.total-cell (entry-value-view (reduce (fn [m v]
                                                 (-> m
                                                     (update :fact + (:fact v))
                                                     (update :plan + (:plan v))))
                                               {:fact 0 :plan 0} totals))]]
    ]])


(rum/defc timeline-panel-view
  "Вьюшка для управления временем"
  [date-params]
  (let [d-group-mode (:grouping-mode date-params)
        get-group-params (fn[gm] (-> {:class (when (= d-group-mode gm) "active")
                                      :on-click #(set-dates-group-mode gm)}))]
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


;;;
;;; Главная вьюшка
;;;
(rum/defc main-view < rum/reactive
  []
  (let [entries (rum/react (state-cursor [:entries]))
        avail-dim-groups (rum/react (state-cursor [:avail-dim-groups]))
        used-dim-groups (select-keys avail-dim-groups (get-used-dims-ids entries))
        row-totals (row-totals-from-entries entries)
        d-params (rum/react (state-cursor [:date-params]))]
    [:div.ui.padded.grid
     [:div.row
      [:div.column
       [:div.ui.button {:on-click #(refresh-random-data)} "Обновить данные"]
       [:div.ui.button {:on-click #(print-appstate)} "Распечатать"]]]
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
     ;; сама таблица
     [:div.stretched.bottom.aligned.row
      [:div.four.wide.column
       [:div.dimensions-div
        ;; измерения
        (dimensions-view (vals used-dim-groups)
                         (tuples-from-entries entries))]]
      [:div.ten.wide.column
       [:div.values-div
        ;; записи
        (entries-view entries d-params)]]
      [:div.two.wide.column
       [:div.row-totals-div
        ;; итого по строкам
        (row-totals-view row-totals)]]
      ]]))

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














