;;;; =================================
;;;; Работа с рандомом
;;;; =================================
(ns cashtime.random-utils
  (:require [cashtime.moment-utils :as mu]))

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

;; --- получение варианта по вероятности
(defn options->ranges
  [options]
  (->> options
       (reduce-kv (fn [total-m k p]
                    (-> total-m
                        (#(update % :ranges (fn [m] (assoc m [(inc (:last-v %)) (+ p (:last-v %))] k))))
                        (#(assoc % :last-v (+ p (:last-v %))))))
                  {:ranges nil :last-v 0})
       :ranges))

(defn opt-for-number
  [rngs number]
  (->> rngs
       vec
       (some #(when (and (<= (first (first %)) number)
                         (>= (second (first %)) number))
                (second %)))))

(defn rand-nth-by-percentage
  [options-w-percents]
  (let [rngs (options->ranges options-w-percents)
        r-number (rand-1-to 100)]
    (opt-for-number rngs r-number)))

;; получение варианта по вероятности ---

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
      (#(js/Date. (.getFullYear %) (.getMonth %) (.getDate %)))
      (.toISOString)
      ))

(defn random-date-value-pair
  "Рандомная пара [дата - факт-план]"
  [from-d to-d min-summ max-summ]
  [(random-iso-date from-d to-d)
   {:fact (rand-from-to min-summ max-summ)
    :plan (rand-if 5 (rand-from-to min-summ max-summ))}])


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
