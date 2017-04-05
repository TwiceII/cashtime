(ns cashtime.calendar.main
  (:require [cashtime.calendar.logic :as l]
            [cashtime.calendar.view :as v]
            [rum.core :as rum]))

(enable-console-print!)
(println "hey there, cash time!")


(defn init
  "Инициализация модуля Платежный календарь"
  []
  (println "init core")
  (l/init-watchers)
  (l/refresh-random-data)
  (.locale js/moment "ru")
  (rum/mount (v/main-view) (.getElementById js/document "main")))

(init)
