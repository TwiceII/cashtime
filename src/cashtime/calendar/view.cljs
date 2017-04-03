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
            (rum/with-key (dim-td-view dim-group (l/pair->dim pair))
                          [dim-group-id (second pair)])))
        dim-groups)])


(rum/defc dim-group-header-view
  "Заголовок для группы измерений"
  [dim-group sort-params]
  (let [gr-id (:id dim-group)]
    [:th {:class (when (= (:group-id sort-params) gr-id)
                   (str "sorted " (if (:desc? sort-params) "descending" "ascending")))
          :on-click #(l/set-dim-group-sort gr-id)}
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
  (let [dates (l/distinct-dates-from-entries (concat outflow-entries inflow-entries))
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
            (l/date-totals-from-entries dates outflow-entries))]
      ;; строки притоков
      (map (fn[{:keys [tuple date-values]}]
             (rum/with-key (values-row-tr-view dates date-values :inflow) tuple))
           inflow-entries)
      ;; строка итого притоков
      [:tr
       (map #(date-total-td-view % :inflow)
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
  (let [inflow-entries (rum/react (l/state-cursor [:inflow-entries]))
        outflow-entries (rum/react (l/state-cursor [:outflow-entries]))
        avail-dim-groups (rum/react (l/state-cursor [:avail-dim-groups]))
        active-dim-group-ids (rum/react (l/state-cursor [:active-dim-group-ids]))
        used-dim-groups (select-keys avail-dim-groups (l/get-used-dims-ids (concat outflow-entries inflow-entries)))
        row-outflow-totals (l/row-totals-from-entries outflow-entries)
        row-inflow-totals (l/row-totals-from-entries inflow-entries)
        d-params (rum/react (l/state-cursor [:date-params]))
        sort-dim-params (rum/react (l/state-cursor [:sort-dim-params]))
        flow-filter-type (rum/react (l/state-cursor [:flow-filter-type]))
        current-entry-params (rum/react (l/state-cursor [:current-entry-params]))]
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
                         (tp/tuples-from-entries outflow-entries)
                         (tp/tuples-from-entries inflow-entries)
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
