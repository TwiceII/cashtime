(ns cashtime.utils
  (:require [clojure.string :as cs]))

;; ================= Базовые функции ================
(defn nil-or-empty? [x]
  (or (nil? x) (empty? x)))

(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(defn find-some
  "Найти в векторе/списке элемент,
  который удовлетв. условию"
  [pred-fn l]
  (some #(when (pred-fn %) %) l))


(defn get-number-with-decimals-str
  "Вывести число с разделениями, запятой и т.д"
  ([input] (get-number-with-decimals-str input false))
  ([input show-dash-if-zero?]
   (if (nil? input)
     ""
     (if (and show-dash-if-zero? (= input 0))
      "-"
       (let [js-reg (js/RegExp. "\\B(?=(\\d{3})+(?!\\d))" "g")
            n (.replace (.toString input) js-reg " ")]
        n)))))


(defn money-str
  "Основной способ отображения денег (для поступления денег)
  с '-' вместо 0"
  [input]
  (get-number-with-decimals-str (when input (js/Math.round input))
                                true))


(defn money-str-with-zero
  "Отображение денег с 0"
  [input]
  (get-number-with-decimals-str (js/Math.round input)
                                false))


(defn get-map-by-key
  "Найти хм с нужным ключом и значением в списке хм"
  [allmaps mkey mvalue]
  (first(filter (fn [m] (= (mkey m) mvalue)) allmaps)))


(defn get-map-by-id
  "Найти хм с нужным id в списке хм"
  [allmaps id]
  (get-map-by-key allmaps :id id))


(defn in-list?
  "Проверка, находится ли элемент в векторе или списке"
  [l value]
  (not (nil? (some #{value} l))))


(defn when-or-skip
  "Для -> макроса: если условие выполнилось,
  то применить ф-цию, иначе вернуть старое значение"
  [prev condition cond-fn]
  (if condition
    (cond-fn prev)
    prev))


(defn rename-keys-in-map
  [map kmap]
  (reduce
     (fn [m [old new]]
       (if (contains? map old)
         (assoc m new (get map old))
         m))
     (apply dissoc map (keys kmap)) kmap))


(defn map-index-by
  "Сгруппировать в хм по какому-то полю
  замена для group-id, когда предполагается,
  что одному ключу одно значение"
  [k seq-of-maps]
  (reduce (fn [res-m iter-m]
            (if-let [v (get iter-m k)]
              (assoc res-m v iter-m)
              res-m))
          {} seq-of-maps))

















