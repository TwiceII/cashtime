(defproject cashtime "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]]
  :plugins [[lein-figwheel "0.5.7"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "cashtime.core"
                         :asset-path "js/out"
                         :output-to  "resources/js/main.js"
                         :output-dir "resources/js/out"}
             }]
   }
  :figwheel {:css-dirs ["resources/css"]}

  )
