(ns cashtime.core
  (:require [cashtime.moment-utils :as mu]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")

(def avail-dim-groups
  "Тестовые группы измерений"
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

(def randomizer-params {:from-d (js/Date. 2017 2 1)
                        :to-d (js/Date.)
                        :max-row-amount 10
                        :max-vals-amount 20
                        :min-summ -7000
                        :max-summ 10000})


;;; =================================
;;; Randomizer of entries
;;; =================================
(defn random-dim-id
  "Получить рандомный id измерения из группы"
  [all-dim-groups dim-group-id]
  (-> all-dim-groups
      (get dim-group-id)
      :dims
      keys
      rand-nth))

(defn rand-1-to
  "Рандомное число от 1 до Х (включительно)"
  [x]
  (-> x
      rand-int
      inc))

(defn rand-if
  "Вернуть значение value только если выпала вероятность указанная в success-percent"
  [success-percent value]
  (when (<= (rand-1-to 100) success-percent) value))

(defn rand-from-to
  "Рандомное число от Х до Y (включительно, можно использовать отриц.числа)"
  [from to]
  ;; REFACTOR: странный алгоритм
  (-> (+ (Math/abs from) (inc to))
      rand-int
      (+ (dec from))
      inc))

(defn random-group-ids
  "Получить рандомное кол-во рандомных id групп измерений"
  [all-dim-groups]
  (->> all-dim-groups
       keys
       (into [])
       shuffle
       (take (-> all-dim-groups
                 keys
                 count
                 rand-1-to))
       ))

(defn random-tuple
  "Рандомный тапл измерений для записи"
  [dim-groups]
  (->> dim-groups
       random-group-ids
       (reduce (fn [m group-id]
                 (assoc m group-id (random-dim-id dim-groups group-id)))
               {})))

(defn random-iso-date
  "Рандомная дата в строчном iso формате"
  [from-d to-d]
  (-> (mu/random-date-between from-d to-d)
      (#(js/Date. (.getYear %) (.getMonth %) (.getDate %)))
      (.toISOString)))


(defn random-date-value-pair
  "Рандомная пара [дата - факт-план]"
  [from-d to-d min-summ max-summ]
  [(random-iso-date from-d to-d)
   {:fact (rand-from-to min-summ max-summ)
    :plan (rand-if 20 (rand-from-to min-summ max-summ))}])


(defn repeat-and-get-map
  [max-count val-pair-fn]
  (->> (repeatedly (rand-1-to max-count)
                   val-pair-fn)
       (reduce (fn [m [k v]]
                 (if-not (contains? m k)
                   (assoc m k v)
                   m))
               {})))


(defn random-date-values
  "Рандомный хм дат и факт-планов"
  [from-d to-d max-amount min-summ max-summ]
  (repeat-and-get-map max-amount
                      #(random-date-value-pair from-d to-d min-summ max-summ)))


(defn random-tuple-pair
  "Рандомная пара [тапл - суммы по датам]"
  [all-dim-groups from-d to-d max-vals-amount min-summ max-summ]
  [(random-tuple all-dim-groups)
   (random-date-values from-d to-d max-vals-amount min-summ max-summ)])


(defn random-entries
  "Получить рандомные записи"
  [all-dim-groups from-d to-d max-row-amount max-vals-amount min-summ max-summ]
  (repeat-and-get-map max-row-amount
                      #(random-tuple-pair all-dim-groups
                                          from-d
                                          to-d
                                          max-vals-amount
                                          min-summ
                                          max-summ)))

;;;; ---------------------------------------------------------------------------

(def entries
  "Тестовые используемые записи"
  {{1 2, 2 3} {"2017-06-05T00:00:00Z" {:fact 10000 :plan 5000}
               "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}}
   {1 3, 2 3} {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}
   {2 1} {"2017-06-01T00:00:00Z" {:fact -3000 :plan nil :comment "some comment"}}})

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

(tuples-from-entries entries)

(defn pair->dim
  [pair]
  (let [group-id (first pair)
        dim-id (second pair)]
    (get-in avail-dim-groups [group-id :dims dim-id])))

(defn pair-from-tuple
  [tuple group-id]
  (when (and group-id tuple)
    (if-let [dim-id (get tuple group-id)]
      [group-id dim-id])))


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
   [:table.ui.very.basic.celled.compact.table
    [:thead
     [:tr
      (map #(rum/with-key (dim-group-header-view %)
                          (:id %))
           dim-groups)]]
    [:tbody
     (map #(rum/with-key (tuple-tr-view dim-groups %)
                         %) tuples)
     [:tr
      [:td {:colSpan (count dim-groups)} "Итого"]]]]])


;;;
;;; Записи с датами (центральная часть)
;;;
(rum/defc date-header-th-view
  [date]
  [:th (mu/to-print-date date)])

(rum/defc date-headers-tr-view
  [dates]
  [:tr
   (map #(rum/with-key (date-header-th-view %) %)
        dates)])

(rum/defc entry-value-view
  "Вьюшка для вывода суммы записи"
  [value]
  [:div.value-cell

;;    (when-not (= 0 (:fact value)) [:div.ui.small.label (:fact value)])
;;    (when (and (:plan value) (not= 0 (:plan value))) [:div.ui.blue.small.label (:plan value)])

   [:span.fact-value (when-not (= 0 (:fact value)) (:fact value))]
   [:span.plan-value (when-not (= 0 (:plan value)) (:plan value))]

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
  (let [dates (distinct-dates-from-entries entries)]
    [:table.ui.very.basic.celled.compact.table
;;      {:style {:width "1200px"}}
     [:thead
      ;; заголовки с датами
      (date-headers-tr-view dates)]
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
  [:table.ui.very.basic.celled.compact.table
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
  []
  [:div
   [:a.ui.labeled.icon.tiny.button
    [:i.left.arrow.icon]
    "загрузить старее"]
   [:div.ui.text.right.floated.compact.menu
    [:div.header.item "Показать по "]
    [:a.active.item "дням"]
    [:a.item "месяцам"]
    [:a.item "годам"]]
   ])

;;;
;;; Главная вьюшка
;;;
(rum/defc main-view
  []
  (let [entries (random-entries avail-dim-groups
                                (:from-d randomizer-params)
                                (:to-d randomizer-params)
                                (:max-row-amount randomizer-params)
                                (:max-vals-amount randomizer-params)
                                (:min-summ randomizer-params)
                                (:max-summ randomizer-params))
        row-totals (row-totals-from-entries entries)]
    [:div.ui.padded.grid
     ;; панель управления временем
     [:div.row {:style {:padding-bottom "0"}}
      [:div.four.wide.column
       [:div.search-div
        [:div.ui.fluid.input
         [:input {:type "text"}]]]]
      [:div.ten.wide.column
       (timeline-panel-view)]
      [:div.two.wide.column]]
     ;;
     [:div.stretched.bottom.aligned.row
      [:div.four.wide.column
       [:div
        (dimensions-view (vals avail-dim-groups)
                         (tuples-from-entries entries))]]
      [:div.ten.wide.column
       [:div.values-div
        (entries-view entries)]]
      [:div.two.wide.column
       [:div.row-totals-div
        (row-totals-view row-totals)]]
      ]]))

(rum/mount (main-view) (.getElementById js/document "main"))




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














