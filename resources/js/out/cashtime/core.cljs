(ns cashtime.core
  (:require [cashtime.moment-utils :as mu]
            [cashtime.random-utils :as rnd]
            [cashtime.utils :as u]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")

(defonce appstate (atom
                    {:plain-entries [] ;; плоские данные, рандомно
                     :entries [] ; записи в формат.виде для отображения в таблице
                     :avail-dim-groups {1 {:id 1
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
                                        }
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

;; (def entries
;;   "Тестовые используемые записи"
;;   {{1 2, 2 3} {"2017-07-01T00:00:00Z" {:fact 10000 :plan 5000}
;;                "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}
;;                "2017-07-03T00:00:00Z" {:fact 18000 :plan 2000}}
;;    {1 3, 2 3} {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}
;;    {2 1} {"2017-06-01T00:00:00Z" {:fact -3000 :plan nil :comment "some comment"}}})


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
  (reset! (state-cursor [:entries])
          (plain-entries->entries @(state-cursor [:plain-entries])
                                  @(state-cursor [:date-params :grouping-mode]))))

(defn refresh-random-data
  "Обновить случайные данные записей"
  []
  (let [plain-entries (random-plain-entries @(state-cursor [:avail-dim-groups])
                                            randomizer-params)]
    (reset! (state-cursor [:plain-entries]) plain-entries)
    ;; группируем формат.записи по дате
    (update-entries!)))


(defn init-watchers
  "Иниц. всех вотчеров"
  []
  (add-watch (state-cursor [:date-params :grouping-mode]) :d-group-mode-watch
             (fn [k a old-s new-s]
               (println "watch group mode")
               (when-not (= old-s new-s)
                 (update-entries!)))))

;; (defn group-entries-by-dates
;;   [entries]
;;   (->> entries
;;        (reduce-kv (fn [m tuple d-values]
;;                     (assoc m tuple (reduce-kv (fn [dm d value]
;;                                                 (-> dm
;;                                                     (update-in [d :fact] + (or (:fact value) 0))
;;                                                     (update-in [d :plan] + (or (:plan value) 0))))
;;                                               {} d-values)))
;;                   {})))

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


;;; ---------------------------------------------------------------------------
;;; Вьюшки
;;; ---------------------------------------------------------------------------
;;;
;;; Измерения и группировки (левая часть)
;;;
(rum/defc dim-td-view
  [dim-group dim]
  [:td {:class (when dim (:css-class dim-group))}
   (:name dim)])


(rum/defc tuple-tr-view
  [dim-groups tuple]
  [:tr
   (map (fn [dim-group]
          (let [dim-group-id (:id dim-group)
                pair (pair-from-tuple tuple dim-group-id)]
            (rum/with-key (dim-td-view dim-group (pair->dim pair))
                          [dim-group-id (second pair)])))
        dim-groups)])


(rum/defc dim-group-header-view
  [dim-group]
  [:th (:name dim-group)])


(rum/defc dimensions-view
  "Вьюшка для измерений (левой части)"
  [dim-groups tuples]
  [:div
   [:table.ui.very.basic.padded.table
    [:thead
     [:tr
      (map #(rum/with-key (dim-group-header-view %)
                          (:id %))
           dim-groups)]]
    [:tbody
     (map #(rum/with-key (tuple-tr-view dim-groups %)
                         %) tuples)
     [:tr
      [:td {:colSpan (count dim-groups)
            :style {:font-weight "bold"}} "Итого"]]]]])


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
       (map #(-> [:td.total-cell (entry-value-view %)])
            (date-totals-from-entries entries))]]]))

;;;
;;; Остальные вьюшки
;;;
(rum/defc row-totals-view
  "Вьюшка для Итого по строкам"
  [totals]
  [:table.ui.very.basic.padded.table
   [:thead
    [:tr
     [:th "Итого за месяц"]]]
   [:tbody
    ;; сами строки
    (map #(->[:tr
              [:td.total-cell (entry-value-view %)]])
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
         [:input {:type "text"}]]]]
      [:div.ten.wide.column
       (timeline-panel-view d-params)]
      [:div.two.wide.column]]
     ;;
     [:div.stretched.bottom.aligned.row
      [:div.four.wide.column
       [:div
        (dimensions-view (vals (rum/react (state-cursor [:avail-dim-groups])))
                         (tuples-from-entries entries))]]
      [:div.ten.wide.column
       [:div.values-div
        (entries-view entries d-params)]]
      [:div.two.wide.column
       [:div.row-totals-div
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














