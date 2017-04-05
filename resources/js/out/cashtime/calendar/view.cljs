;;;; ==========================================================================
;;;; Вьюшки для календаря платежей
;;;; ==========================================================================
(ns cashtime.calendar.view
  (:require [cashtime.tuples :as tp]
            [cashtime.calendar.logic :as l]
            [cashtime.moment-utils :as mu]
            [cashtime.dom-utils :as dom]
            [cashtime.utils :as u]
            [rum.core :as rum]))

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
            (dim-td-view dim-group (l/pair->dim pair))))
        dim-groups)])


(rum/defc dim-group-header-view
  "Заголовок для группы измерений"
  [dim-group sort-params]
  (let [gr-id (:id dim-group)]
    [:th {:class (when (= (:group-id sort-params) gr-id)
                   (str "sorted " (if (:desc? sort-params) "descending" "ascending")))
          :on-click #(l/set-dim-group-sort gr-id)}
     (:name dim-group)]))


(rum/defc dimensions-view < rum/reactive rum/static
  "Вьюшка для измерений (левой части)
  used-dim-groups - используются только видимые справочники измерений"
  [used-dim-groups sort-params]
  (let [outflow-tuples (tp/tuples-from-entries (rum/react (l/state-cursor [:outflow-entries])))
        inflow-tuples (tp/tuples-from-entries (rum/react (l/state-cursor [:inflow-entries])))
        ordered-dim-groups (sort-by :order-index used-dim-groups)]
    [:div
     [:table.ui.very.basic.sortable.table
      [:thead
       [:tr
        (map #(rum/with-key (dim-group-header-view % sort-params)
                            (:id %))
             ordered-dim-groups)]]
      [:tbody
       ;; измерения оттоков
       (map #(tuple-tr-view ordered-dim-groups %)
            outflow-tuples)
       ;; итого оттоков
       [:tr
        [:td.total-cell {:colSpan (count ordered-dim-groups)
                         :style {:font-weight "bold"}} "Итого выплат"]]
       ;; измерения притоков
       (map #(tuple-tr-view ordered-dim-groups %) inflow-tuples)
       ;; итого притоков
       [:tr
        [:td.total-cell {:colSpan (count ordered-dim-groups)
                         :style {:font-weight "bold"}} "Итого поступлений"]]
       ]]]))

;;;
;;; Записи с датами (центральная часть)
;;;
(rum/defc date-header-th-view
  [date current-d? d-group-mode]
  [:th {:class (when current-d? "today-cell")}
   (mu/print-date-in-needed-format date d-group-mode)])

(rum/defc date-headers-tr-view
  [dates d-group-mode]
  [:tr
   (map #(rum/with-key (date-header-th-view %
                                            (l/is-current-date? % d-group-mode)
                                            d-group-mode) %)
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
  [value flow-type current-d?]
  [:td {:class (when current-d? "today-cell")}
   (entry-value-view value flow-type)])

(rum/defc values-row-tr-view
  [dates date-values flow-type d-group-mode]
  [:tr
   (map (fn [d]
          (rum/with-key (value-cell-td-view (get date-values d)
                                            flow-type
                                            (l/is-current-date? d d-group-mode)) d))
        dates)])

(rum/defc date-total-td-view
  "Вьюшка для итого по столбцу (дате)"
  [date-total flow-type current-d?]
  [:td.total-cell {:class (when current-d? "today-cell")}
   (entry-value-view date-total flow-type)])


(rum/defc entries-view < rum/static
  "Вьюшка для записей и дат (основная часть)"
  [outflow-entries inflow-entries d-params]
  (let [dates (l/distinct-dates-from-entries (concat outflow-entries inflow-entries))
        d-group-mode (:grouping-mode d-params)]
    [:table.ui.very.basic.celled.single.line.table
;;      {:style {:width "1200px"}}
     [:thead
      ;; заголовки с датами
      (date-headers-tr-view dates d-group-mode)]
     [:tbody
      ;; строки оттоков
      (map (fn[{:keys [tuple date-values]}]
             (rum/with-key (values-row-tr-view dates
                                               date-values
                                               :outflow
                                               d-group-mode) tuple))
           outflow-entries)
      ;; строка итого оттоков
      [:tr
       (map #(date-total-td-view % :outflow false)
            (l/date-totals-from-entries dates outflow-entries))]
      ;; строки притоков
      (map (fn[{:keys [tuple date-values]}]
             (rum/with-key (values-row-tr-view dates
                                               date-values
                                               :inflow
                                               d-group-mode) tuple))
           inflow-entries)
      ;; строка итого притоков
      [:tr
       (map #(date-total-td-view % :inflow false)
            (l/date-totals-from-entries dates inflow-entries))]
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
  [:table.ui.very.basic.table
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


(rum/defc timeline-panel-view < rum/static
  "Вьюшка для управления временем"
  [date-params]
  (let [d-group-mode (:grouping-mode date-params)
        get-group-params (fn[gm] (dom/menu-item-props (= d-group-mode gm)
                                                      l/set-dates-group-mode
                                                      gm))]
    [:div
     [:a.ui.labeled.icon.tiny.button
      {:on-click #(l/add-new-item)}
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
                                                      l/set-flow-filter-type
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
                      :on-click #(l/toggle-dimension-group dim-group)
;;                       :style {:margin-right "10px" :margin-bottom "5px"}
                      }
    [:input {:type "checkbox"
             :checked active?}]
    [:label (:name dim-group)]]])


(rum/defc dimensions-toggler-view < rum/static
  "Вьюшка переключателя измерений"
  [avail-dim-groups active-dim-group-ids]
  [:div.ui.horizontal.list
   (map #(rum/with-key (let[dim-group (second %)]
                         (dimension-toggler-item-view dim-group
                                                      (contains? active-dim-group-ids
                                                                 (:id dim-group)))) %)
        avail-dim-groups)])

;;;
;;; Модальное окно добавления/редактирования записи
;;;
(defn on-update-dim-chooser
  [st]
  (println "on-update-dim-chooser")
  (let [dim-group (nth (:rum/args st) 1)
        dropdown-el (-> st
                        (:rum/react-component)
                        (dom/find-in-rcomp ".ui.dropdown")
                        js/$)]
    (.dropdown dropdown-el #js {:onChange (fn [val text _]
                                            (println "change to " val)
                                            (l/change-modal-dim-to (:id dim-group) val))
                                :fullTextSearch true}))
  st)

(rum/defcc dimension-chooser-view < rum/static {:after-render on-update-dim-chooser}
  "Вьюшка для выбора измерения в группе"
  [rcomp dims dim-group]
  [:div.ui.fluid.input
   [:div.ui.fluid.search.selection.dropdown
    [:input {:type "hidden"
             :default-value (get dims (:id dim-group))}]
    [:i.dropdown.icon]
    [:div.default.text (:name dim-group)]
    [:div.menu
     (map #(-> [:div.item {:data-value (:id %)} (:name %)])
          (-> dim-group
              :dims
              vals))]]
   ; иконка для очищения поля
   [:i.remove.icon.link.icon-near-dropdown
      {:title "Очистить поле"
       :on-click #(let [el (js/$ (.find (js/$ (.findDOMNode js/ReactDOM rcomp)) ".dropdown"))]
;;                     (.dropdown el "restore placeholder text")
                    (.dropdown el "clear"))}]
   ])


(defn on-modal-mount
  [st]
  (do
    (println "on modal mount")
    (let [rcomp (:rum/react-component st)]
      (.modal (dom/rcomp->js$ rcomp) #js {:onApprove #(do
                                                        (l/save-item-from-modal))})
      (js/Pikaday. (clj->js {:field (.getElementById js/document "dateinput")
                             :format "DD.MM.YYYY"
                             :i18n mu/pikaday-i18n-params
                             :firstDay 1
                             ;; в дальнейшейм добавить minDate для ограничения
                             :onSelect (fn [d]
                                         (println "pikaday!")
                                         (l/set-current-date d))})))
    st))


(rum/defc entry-modal-view < rum/reactive rum/static {:did-mount on-modal-mount}
  "Модальное окно для добавления/редактирования записи"
  []
  (println "entry-modal-view rebuild")
  (let [modal-params (rum/react (l/state-cursor [:entry-modal-params]))
        entry-params (rum/react (l/state-cursor [:current-entry-params]))
        all-dim-groups (vals (rum/react (l/state-cursor [:avail-dim-groups])))
        {:keys [dims date v-type v-flow v-summ]} entry-params
        ]
    [:div.ui.modal {:id "entry-modal"}
     [:i.close.icon]
     [:div.header (:title modal-params)]
     [:div.content
      [:div.ui.horizontal.list
       [:div.item
        [:div.ui.small.secondary.compact.menu
         [:a.item {:class (when (= v-flow :inflow) "active")
                   :on-click #(l/toggle-current-v-flow :inflow)} "Поступление"]
         [:a.item {:class (when (= v-flow :outflow) "active")
                   :on-click #(l/toggle-current-v-flow :outflow)} "Выплата"]]]
       [:div.item
        [:div.ui.small.secondary.compact.menu
         [:a.item {:class (when (= v-type :plan) "active")
                   :on-click #(l/toggle-current-v-type :plan)} "План"]
         [:a.item {:class (when (= v-type :fact) "active")
                   :on-click #(l/toggle-current-v-type :fact)} "Факт"]]]]
      [:div.ui.form
       [:div.two.fields
        [:div.field
         [:label "Сумма"]
         [:input {:type "number"
                  :style {:text-align "right"}
                  :on-change #(l/set-current-v-summ (dom/value-of-input %))
                  :default-value v-summ}]]
        [:div.field
         [:label "Дата"]
         [:input.date-input {:type "text"
                             :id "dateinput"
                             :read-only "readonly"
                             :default-value (when-let [v date]
                                              (mu/to-print-date date))
                             }]]]]
      [:div.ui.three.stackable.cards.dim-chooser-list
       (map #(-> [:div.card (dimension-chooser-view dims %)])
            all-dim-groups)]
;;       (all-dimensions-chooser-view)
      [:div.actions
       [:div.ui.deny.button "Отмена"]
       [:div.ui.positive.button "Добавить"]]]]))


;;;
;;; Главная вьюшка
;;;
(rum/defc main-view < rum/reactive
  []
  (let [inflow-entries (rum/react (l/state-cursor [:inflow-entries]))
        outflow-entries (rum/react (l/state-cursor [:outflow-entries]))
        avail-dim-groups (rum/react (l/state-cursor [:avail-dim-groups]))
        active-dim-group-ids (rum/react (l/state-cursor [:active-dim-group-ids]))
        used-dim-groups (select-keys avail-dim-groups (l/get-used-dims-ids (concat outflow-entries inflow-entries)))
        row-outflow-totals (l/row-totals-from-entries outflow-entries)
        row-inflow-totals (l/row-totals-from-entries inflow-entries)
        d-params (rum/react (l/state-cursor [:date-params]))
        sort-dim-params (rum/react (l/state-cursor [:sort-dim-params]))
        flow-filter-type (rum/react (l/state-cursor [:flow-filter-type]))]
    [:div.ui.padded.grid
     [:div.row
      [:div.column
       [:div.ui.button {:on-click #(l/refresh-random-data)} "Обновить данные"]
       [:div.ui.button {:on-click #(l/print-appstate)} "Распечатать"]
       ]]
     ;; панель управления временем c поиском
     [:div.row {:style {:padding-bottom "0"}}
      [:div.four.wide.column
       [:div.search-div
        [:div.ui.fluid.input
         [:input {:type "text"
                  :placeholder "Введите часть названия для поиска"
                  :on-change #(l/set-search-str (dom/value-of-input %))
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
     (entry-modal-view)
     ]))
