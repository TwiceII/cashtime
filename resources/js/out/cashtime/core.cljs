(ns cashtime.core
  (:require [cashtime.tuples :as tp]
            [cashtime.moment-utils :as mu]
            [cashtime.random-utils :as rnd]
            [cashtime.dom-utils :as dom]
            [clojure.string :as cs]
            [cashtime.utils :as u]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")

(def default-entry-params
  {:v-type :plan :v-flow :inflow :v-summ 0
   :dims [] :date (js/Date.)})

(defonce appstate (atom
                    {:plain-entries [] ;; плоские данные, рандомно

                     :inflow-entries [] ; записи притоков (поступлений)
                     :outflow-entries [] ; записи оттоков (выплат)

                     :avail-dim-groups tp/test-avail-dim-groups
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

                     :current-entry-params default-entry-params

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


(defn get-used-dims-ids
  "Получить из всех записей id используемых измерений"
  [entries]
  (->> entries
       (map :tuple)
       (mapcat keys)
       distinct))

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
  (let [plain-entries @(state-cursor [:plain-entries])
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
  []
  (println "add-new-item")
  (.modal (-> "#entry-modal"
              js/$
              (.modal)) "show"))

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
                pair (tp/pair-from-tuple tuple dim-group-id)]
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
      {:on-click #(add-new-item)}
      [:i.add.icon]
      "добавить запись"]
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


(rum/defcc dimension-chooser-view < {:did-update (fn[st]
                                                   (.dropdown
                                                     (-> st
                                                         (:rum/react-component)
                                                         (dom/find-in-rcomp ".ui.dropdown")
                                                         js/$))
                                                   st)}
  "Вьюшка для выбора измерения в группе"
  [rcomp dim-group]
  [:div.ui.fluid.input
   [:div.ui.fluid.search.selection.dropdown
    [:input {:type "hidden"}]
    [:i.dropdown.icon]
    [:div.default.text (:name dim-group)]
    [:div.menu
     (map #(-> [:div.item (:name %)])
          (-> dim-group
              :dims
              vals))]]
   ; иконка для очищения поля
   [:i.remove.icon.link.icon-near-dropdown
      {:title "Очистить поле"
       :on-click #(.dropdown (js/$ (.find (js/$ (.findDOMNode js/ReactDOM rcomp)) ".dropdown"))
                             "clear")}]
   ])

(rum/defc entry-modal-view < {:after-render (fn[st]
                                              (do
                                                (let [rcomp (:rum/react-component st)
                                                      pickmeup-config #js {:format "d.m.Y"
                                                                           :default_date false
                                                                           :hide_on_select true}]
                                                  (.pickmeup (js/$ (dom/find-in-rcomp rcomp ".date-input")) pickmeup-config))
                                                st))}
  "Модальное окно для добавления/редактирования записи"
  [title entry-params dim-groups]
  (let [{:keys [dims date v-type v-flow v-summ]} entry-params]
    [:div.ui.modal {:id "entry-modal"}
     [:i.close.icon]
     [:div.header title]
     [:div.content
      [:div.ui.horizontal.list
       [:div.item
        [:div.ui.small.secondary.compact.menu
         [:a.item {:class (when (= v-flow :inflow) "active")} "Поступление"]
         [:a.item {:class (when (= v-flow :outflow) "active")} "Выплата"]]]
       [:div.item
        [:div.ui.small.secondary.compact.menu
         [:a.item {:class (when (= v-type :plan) "active")} "План"]
         [:a.item {:class (when (= v-flow :fact) "active")} "Факт"]]]]
      [:div.ui.form
       [:div.two.fields
        [:div.field
         [:label "Сумма"]
         [:input {:type "number"
                  :default-value v-summ}]]
        [:div.field
         [:label "Дата"]
         [:input.date-input {:type "text"
                             :read-only "readonly"
                             :default-value (when-let [v date]
                                              (mu/to-print-date date))}]]]]
      [:div.ui.three.stackable.cards.dim-chooser-list
       (map #(-> [:div.card (dimension-chooser-view %)])
            dim-groups)]
      [:div.actions
       [:div.ui.deny.button "Отмена"]
       [:div.ui.positive.button "Добавить"]]]]))


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
        flow-filter-type (rum/react (state-cursor [:flow-filter-type]))
        current-entry-params (rum/react (state-cursor [:current-entry-params]))]
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
     ;; модальное окно для записи (добавления/редактирования)
     (entry-modal-view "Добавление записи"
                       current-entry-params
                       (vals avail-dim-groups))
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














