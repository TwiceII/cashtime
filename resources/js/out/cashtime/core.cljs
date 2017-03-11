(ns cashtime.core
  (:require [cashtime.moment-utils :as mu]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")

(defonce appdata (atom
                   {:dimensions [{:id 1
                                  :name "Статьи"
                                  :entries [{:id 1 :name "Сайты"}
                                            {:id 2 :name "Визитки"}
                                            {:id 3 :name "Маркетинг"}]}
                                 {:id 2
                                  :name "Контрагенты"
                                  :entries [{:id 1 :name "Nova Med"}
                                            {:id 2 :name "GCC"}
                                            {:id 3 :name "Bestprofi.kz"}
                                            {:id 4 :name "Иванов Игорь"}]}]
                    :values [ ;; факт: визитка для Bestprofi.kz за 40000 ТГ, 1 июня 2016
                              {:dims [{:d-id 1 :e-id 2}
                                      {:d-id 2 :e-id 3}]
                               :date "2017-06-01T00:00:00Z"
                               :pay-type :fact
                               :flow-type :income
                               :value {:summ 40000 :c-id 2}}
                              ;; план: безымянная (без статьи) расход на Nova Med за 20000 ТГ, 15 июня 2016
                              {:dims [{:d-id 2 :e-id 1}]
                               :date "2017-06-15T00:00:00Z"
                               :pay-type :plan
                               :flow-type :expense
                               :value {:summ 20000 :c-id 2}}
                              {:dims [{:d-id 2 :e-id 1}]
                               :date "2017-06-18T00:00:00Z"
                               :pay-type :plan
                               :flow-type :expense
                               :value {:summ 10000 :c-id 2}}]
                    }))

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

(defn rand-from-to
  "Рандомное число от Х до Y (включительно, можно использовать отриц.числа)"
  [from to]
  ;; REFACTOR: странный алгоритм
  (-> (+ (Math/abs from) (inc to))
      rand-int
      (+ (dec from))
      inc))

(rand-from-to -3 10)

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
               {})
       ))

(defn random-iso-date
  "Рандомная дата"
  []
  (let [rand-day (rand-1-to 30)]
    (str "2017-06-" (if (< rand-day 10) (str "0" rand-day) rand-day) "T00:00:00Z")))

(defn random-date-value-pair
  "Рандомная пара [дата - факт-план]"
  [min-summ max-summ]
  [(random-iso-date) {:fact (rand-from-to min-summ max-summ)
                      :plan (rand-from-to min-summ max-summ)}])

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
  [max-amount min-summ max-summ]
  (repeat-and-get-map max-amount
                      #(random-date-value-pair min-summ max-summ)))

(defn random-tuple-pair
  "Рандомная пара [тапл - суммы по датам]"
  [all-dim-groups max-vals-amount min-summ max-summ]
  [(random-tuple all-dim-groups)
   (random-date-values max-vals-amount min-summ max-summ)])


(defn random-entries
  "Получить рандомные записи"
  [all-dim-groups max-row-amount max-vals-amount min-summ max-summ]
  (repeat-and-get-map max-row-amount
                      #(random-tuple-pair all-dim-groups max-vals-amount min-summ max-summ)))

(random-entries avail-dim-groups 5 15 -3000 5000)


(def entries
  "Тестовые используемые записи"
  {{1 2, 2 3} {"2017-06-05T00:00:00Z" {:fact 10000 :plan 5000}
               "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}}
   {1 3, 2 3} {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}
   {2 1} {"2017-06-01T00:00:00Z" {:fact -3000 :plan nil :comment "some comment"}}})




(defn distinct-dates-from-entries
  "Получить сортированный список уникальных дат из списка записей"
  [entries]
  (->> entries
       (reduce-kv (fn [coll k v]
                    (apply conj (cons coll (keys v))))
                  #{})
       (into [])
       mu/sort-dates))

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
(rum/defc dim-td-view
  [dim-group dim]
  [:td {:class (when dim (:css-class dim-group))}
   (:name dim)])


(rum/defc tuple-tr-view
  [dim-groups tuple]
  [:tr
   (map (fn [dim-group]
          (let [pair (pair-from-tuple tuple (:id dim-group))]
            (rum/with-key (dim-td-view dim-group (pair->dim pair))
                          pair)))
        dim-groups)])


(rum/defc dimension-header-view
  [dimension]
  [:th (:name dimension)])


(rum/defc dimensions-view
  "Вьюшка для измерений (левой части)"
  [dimensions tuples]
  [:div
   [:table.ui.very.basic.celled.compact.table
    [:thead
     [:tr
      (map #(rum/with-key (dimension-header-view %)
                          (:id %))
           dimensions)]]
    [:tbody
     (map #(rum/with-key (tuple-tr-view dimensions %)
                         %) tuples)]]])


(rum/defc date-header-th-view
  [date]
  [:th (mu/to-print-date date)])

(rum/defc date-headers-tr-view
  [dates]
  [:tr
   (map #(rum/with-key (date-header-th-view %) %)
        dates)])

(rum/defc value-cell-td-view
  [value]
  [:td (:fact value)])


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
     {:style {:width "1200px"}}
     [:thead
      (date-headers-tr-view dates)]
     [:tbody
      (map (fn[[tuple date-values]]
             (rum/with-key (values-row-tr-view dates date-values) tuple))
           entries)]
     ]))


(rum/defc main-view
  []
  (let [entries (random-entries avail-dim-groups 10 15 -7000 10000)]
    [:div.ui.padded.grid
     [:div.row
      [:div.four.wide.column
       [:div.ui.fluid.input
        [:input {:type "text"}]]]]
     [:div.stretched.bottom.aligned.row
      [:div.four.wide.column
       [:div
        (dimensions-view (vals avail-dim-groups)
                         (tuples-from-entries entries))]]
      [:div.twelve.wide.column
       [:div.values-div
        (entries-view entries)
        ]]]]))

(rum/mount (main-view) (.getElementById js/document "main"))



















