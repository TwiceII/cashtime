(ns cashtime.core
  (:require [rum.core :as rum]))

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

(def avail-dimensions
  {1 {:id 1
      :name "Статьи"
      :css-class "dim-1"
      :entries {1 {:id 1 :name "Сайты"}
                2 {:id 2 :name "Визитки"}
                3 {:id 3 :name "Маркетинг"}}
      ;; доп. для сортировки, группировки
      ;; :sorted false
      ;; :grouped false
      }
   2 {:id 2
      :name "Контрагенты"
      :css-class "dim-2"
      :entries {1 {:id 1 :name "Nova Med"}
                2 {:id 2 :name "GCC"}
                3 {:id 3 :name "Bestprofi.kz"}
                4 {:id 4 :name "Иванов Игорь"}}}
   })

(def avail-dim-tuples
  [{1 2, 2 3}
   {1 3, 2 3}
   ;; пример одного измерения
   {2 1}])

(get-in avail-dimensions [2 :entries 1])

(let [tuple {2 3, 1 2}
      dimensions (vals avail-dimensions)]
  (map (fn [dim]
         (println dim)
         (let [dim-id (:id dim)]
           (get-in avail-dimensions [dim-id :entries (get tuple dim-id)])))
       dimensions))

(defn names-for-tuple
  [tuple]
  (map (fn[[k v]]
         (-> (get-in avail-dimensions [k :entries v])
             :name)) tuple))

(defn name-by-dim-ent
  [dim-id ent-id]
  (-> (get-in avail-dimensions [dim-id :entries ent-id])
      :name))

(names-for-tuple {1 2, 2 3})

(->> avail-dim-tuples
     (map names-for-tuple))

(rum/defc tuple-tr-view
  [dimensions tuple]
  [:tr
   (map (fn [dim]
          (let [dim-id (:id dim)]
            [:td (name-by-dim-ent dim-id (get tuple dim-id))]
            ))
        dimensions)])


(rum/defc dimensions-view
  [dimensions tuples]
  [:div
   [:table.ui.very.basic.celled.compact.table
    [:thead
     [:tr
      (map #(-> [:th (:name %)]) dimensions)]]
    [:tbody
     (map #(tuple-tr-view dimensions %) tuples)]]])

(rum/defc main-view
  []
  [:div.ui.padded.grid
   [:div.row
    [:div.four.wide.column
     [:div.ui.fluid.input
      [:input {:type "text"}]]]]
   [:div.stretched.bottom.aligned.row
    [:div.four.wide.column
     [:div
      (dimensions-view (vals avail-dimensions)
                       avail-dim-tuples)]]
    [:div.twelve.wide.column
     [:div.values-div
      ;; table
      ]]]])

(rum/mount (main-view) (.getElementById js/document "main"))



















