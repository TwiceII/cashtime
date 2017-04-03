(ns cashtime.tuples
  (:require [cashtime.utils :as u]
            [cashtime.moment-utils :as mu]))

(def test-avail-dim-groups
  "Тестовые значения для групп измерений"
  {1 {:id 1
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

;;    5 {:id 5
;;       :order-index 5
;;       :name "Еще измерение"
;;       :css-class "dim-5"
;;       :dims {1 {:id 1 :name "Значение 1"}}}

   })


(defn tuples-from-entries
  "Получить список всех таплов измерений внутри записей"
  [entries]
  (mapv :tuple entries))

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

(defn filter-plain-entries
  "Отфильтровать (если нужно) плоские данные"
  [plain-entries search-tuple]
  (->> plain-entries
       ;; если нужно фильтровать по поисковой строке
       ((fn[pe](if search-tuple
                 (filter #(tuple-in-search-tuple? (:dims %) search-tuple) pe)
                 pe)))))

;; (def test-plain-entries
;;   "Записи в негруп.виде"
;;   [{:dims {1 2}
;;     :date "2017-07-01T00:00:00Z"
;;     :v-type :fact
;;     :v-flow :outflow
;;     :v-summ 10000}
;;    {:dims {1 2, 2 1}
;;     :date "2017-07-01T00:00:00Z"
;;     :v-type :plan
;;     :v-flow :inflow
;;     :v-summ 5000}
;;    {:dims {1 2, 2 3}
;;     :date "2017-07-07T00:00:00Z"
;;     :v-type :fact
;;     :v-flow :inflow
;;     :v-summ 25000}
;;    {:dims {1 2, 2 3}
;;     :date "2017-02-01T00:00:00Z"
;;     :v-type :plan
;;     :v-flow :outflow
;;     :v-summ 1111}
;;    {:dims {1 3, 2 3}
;;     :date "2017-02-03T00:00:00Z"
;;     :v-type :fact
;;     :v-flow :outflow
;;     :v-summ 3333}
;;    {:dims {2 1}
;;     :date "2017-07-07T00:00:00Z"
;;     :v-type :fact
;;     :v-flow :outflow
;;     :v-summ 2200}
;;    ])


;; (def test-entries
;;   [{:tuple {1 2, 2 3}
;;     :date-values {"2017-07-01T00:00:00Z" {:fact 10000 :plan 5000}
;;                   "2017-06-08T00:00:00Z" {:fact 8000 :plan nil}
;;                   "2017-07-03T00:00:00Z" {:fact 18000 :plan 2000}}}
;;    {:tuple {1 3, 3 1}
;;     :date-values {"2017-06-05T00:00:00Z" {:fact 4000 :plan -15000}}}])

