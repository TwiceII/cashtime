;;;; ==========================================================================
;;;; Логика для календаря платежей
;;;; ==========================================================================
(ns cashtime.calendar.logic
  (:require [cashtime.tuples :as tp]
            [cashtime.moment-utils :as mu]
            [cashtime.random-utils :as rnd]
            [cashtime.utils :as u]
            [rum.core :as rum]))

(def default-entry-params
  {:v-type :plan :v-flow :inflow :v-summ 0
   :dims {1 1 2 3}
   :date (js/Date.)})

(defonce appstate (atom
                    {:plain-entries [] ;; плоские данные, рандомно

                     :inflow-entries [] ; записи притоков (поступлений)
                     :outflow-entries [] ; записи оттоков (выплат)

                     :avail-dim-groups tp/test-avail-dim-groups
                     ;; активные (отображаемые) id групп измерений
                     :active-dim-group-ids #{1 2}

                     ;; значение поисковой строки
                     :search-dim-str nil

                     ;; сортировка для измерений
                     :sort-dim-params {:group-id 1 ; по какой группе измерений сортируем
                                       :desc? false}

                     ;; параметры для дат
                     :date-params {:grouping-mode :by-day ; варианты: :by-day :by-month :by-year
                                   }

                     :current-entry-params default-entry-params
                     :entry-modal-params {:mode :add-item
                                          :title "Добавить запись"}

                     }))

(def state-cursor (partial rum/cursor-in appstate))

;; параметры для рандомизации данных
(def randomizer-params {:from-d (js/Date. 2016 2 1)
                        ; добавляем 2 месяца от текущей
                        :to-d (-> (js/moment.) (.add 2 "M") .toDate)
                        :max-row-amount 10
                        :max-vals-amount 20
                        :max-entries 200
                        :min-summ 100
                        :max-summ 100000})

(defn random-plain-entry
  "Получить случайную плоскую запись"
  [dim-group-options from-d to-d min-summ max-summ]
  (let [date (rnd/random-iso-date from-d to-d)]
    (-> {:dims (rand-nth dim-group-options)
         :date date
         ;:v-type (rnd/rand-nth-by-percentage {:fact 95 :plan 5})
         :v-flow (rnd/rand-nth-by-percentage {:inflow 40 :outflow 60})
         :v-summ (rnd/rand-from-to min-summ max-summ)}
        ;; если дата позже текущей
        (#(if (mu/after-today? date)
            (assoc % :v-type :plan)
            (assoc % :v-type (rnd/rand-nth-by-percentage {:fact 97 :plan 3}))))
        )))

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

;;; ---------------------------------------------------------------------------
;;; Вьюшки
;;; ---------------------------------------------------------------------------
(defn sort-entries!
  "Отсортировать строки записей согласно настройкам сортировки групп
  (отдельно записи оттоков и притоков)"
  []
  (let [sort-dim-params @(state-cursor [:sort-dim-params])
        avail-dim-groups @(state-cursor [:avail-dim-groups])]
    (swap! (state-cursor [:inflow-entries]) (fn [prev-e]
                                              (tp/get-sorted-entries prev-e
                                                                     avail-dim-groups
                                                                     (:group-id sort-dim-params) (:desc? sort-dim-params))))
    (swap! (state-cursor [:outflow-entries]) (fn [prev-e]
                                               (tp/get-sorted-entries prev-e
                                                                      avail-dim-groups
                                                                      (:group-id sort-dim-params) (:desc? sort-dim-params))))))

(defn update-entries!
  "Обновить записи в формат.виде"
  []
  (let [plain-entries (-> @(state-cursor [:plain-entries])
                          ;; добавляем пустую запись за сегодня, чтобы всегда отображалась
;;                           (conj {:dims {1 1} :date (mu/current-date-iso-str) :v-summ 0 :v-type :plan :v-flow :inflow})
                          )
        active-dim-group-ids @(state-cursor [:active-dim-group-ids])
        search-str @(state-cursor [:search-dim-str])
        search-tuple (when search-str (tp/get-search-tuple-with-substr @(state-cursor [:avail-dim-groups]) search-str))
        result-plain-entries (tp/filter-plain-entries plain-entries search-tuple)
        sort-dim-params @(state-cursor [:sort-dim-params])]
    ;; отдельно конвертируем в записи оттоков и притоков
    (reset! (state-cursor [:inflow-entries])
            (tp/plain-entries->entries (filter #(= (:v-flow %) :inflow) result-plain-entries)
                                       @(state-cursor [:date-params :grouping-mode])
                                       active-dim-group-ids))
    (reset! (state-cursor [:outflow-entries])
            (tp/plain-entries->entries (filter #(= (:v-flow %) :outflow) result-plain-entries)
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
    (reset! (state-cursor [:plain-entries]) plain-entries)))


;;; ---------------------------------------------------------------------------
;;; Watchers
;;; ---------------------------------------------------------------------------
(defn init-watchers
  "Иниц. всех вотчеров"
  []
  ;; при изменении начальных плоских данных
  (add-watch (state-cursor [:plain-entries]) :plain-entries-watch
             (fn [k a old-s new-s]
               (println "plain-entries watch")
               (update-entries!)))
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
;;; Вспомог.ф-ции для вьюшек (получать какие-то данные)
;;; ---------------------------------------------------------------------------
(defn pair->dim
  [pair]
  (let [group-id (first pair)
        dim-id (second pair)]
    (get-in @(state-cursor [:avail-dim-groups]) [group-id :dims dim-id])))

(defn get-used-dims-ids
  "Получить из всех записей id используемых измерений"
  [entries]
  (->> entries
       (map :tuple)
       (mapcat keys)
       distinct))

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
;;        ;; добавляем сегодняшнюю дату, если её нет
;;        (cons (mu/current-date-iso-str))
;;        ;; убираем если уже были повторы
;;        distinct
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

(defn is-current-date?
  "Проверка, что дата является текущей (с учетом группировки по дням/месяцам/годам)"
  [d d-group-mode]
  (let [current-iso-str-d (mu/current-date-iso-str)]
    (case d-group-mode
      :by-day (= d current-iso-str-d)
      :by-month (and (= (.year (js/moment. d)) (.year (js/moment. current-iso-str-d)))
                     (= (.month (js/moment. d)) (.month (js/moment. current-iso-str-d))))
      :by-year (= (.year (js/moment. d)) (.year (js/moment. current-iso-str-d)))
      false)))

;;; ---------------------------------------------------------------------------
;;; Функции при событии для вьюшек, связанные с изменением state-а
;;; ---------------------------------------------------------------------------
(defn ^:export print-appstate
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

(defn toggle-dimension-group
  "Переключить группу измерений (вкл/откл)"
  [dim-group]
  (println "toggle-dimension-group: " (:id dim-group))
  (swap! (state-cursor [:active-dim-group-ids])
         (fn [active-dims]
           (if (contains? active-dims (:id dim-group))
             (disj active-dims (:id dim-group))
             (conj active-dims (:id dim-group))))))

(defn add-new-item
  "Открыть модальное окно добавления новой записи"
  []
  (println "add-new-item")
  (.modal (-> "#entry-modal"
              js/$) "show"))


(defn set-current-v-summ
  "Установить значение суммы в модальном окне"
  [v-summ]
  (println "set-current-v-summ " v-summ)
  (reset! (state-cursor [:current-entry-params :v-summ])
          v-summ))


(defn set-current-date
  "Установить значение даты в модальном окне"
  [date]
  (println "set-current-date " date)
  (reset! (state-cursor [:current-entry-params :date])
          date))


(defn toggle-current-v-type
  "Поменять режим план/факт в модальном окне"
  [v-type]
  (println "toggle-current-v-type " v-type)
  (reset! (state-cursor [:current-entry-params :v-type])
          v-type))


(defn toggle-current-v-flow
  "Поменять режим приток/отток в модальном окне"
  [v-flow]
  (println "toggle-current-v-flow " v-flow)
  (reset! (state-cursor [:current-entry-params :v-flow])
          v-flow))


(defn change-modal-dim-to
  "Изменить значение в дропдауне для измерения в модальном окне"
  [dim-group-id dim-id]
  (println "change modal dim to :" dim-group-id ", " dim-id)
  (swap! (state-cursor [:current-entry-params :dims])
         (fn[d] (assoc d dim-group-id dim-id))))


(defn save-item-from-modal
  "Сохранить запись через модальное окно"
  []
  (println "saved item from modal")
  (let [entry-params @(state-cursor [:current-entry-params])
        modal-params @(state-cursor [:entry-modal-params])
        ;; чистим конечную запись
        result-entry (-> entry-params
                         (update :dims
                                 (fn[dims]
                                   (reduce-kv (fn[m k v]
                                                (if v (assoc m k v) m))
                                              {} dims)))
                         (update :date #(.toISOString %))
                         (update :v-summ #(js/parseFloat %)))]
    (println entry-params)
    ;; TODO: перенести логику добавления в другое место?
    (when (= (:mode modal-params) :add-item)
      (swap! (state-cursor [:plain-entries])
             (fn [pe] (conj pe result-entry))))))





