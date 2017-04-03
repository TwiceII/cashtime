// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.calendar.main');
goog.require('cljs.core');
goog.require('cashtime.calendar.logic');
goog.require('cashtime.calendar.view');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hey there, cash time!");
/**
 * Инициализация модуля Платежный календарь
 */
cashtime.calendar.main.init = (function cashtime$calendar$main$init(){
cljs.core.println.call(null,"init core");

cashtime.calendar.logic.refresh_random_data.call(null);

cashtime.calendar.logic.init_watchers.call(null);

moment.locale("ru");

return rum.core.mount.call(null,cashtime.calendar.view.main_view.call(null),document.getElementById("main"));
});
cashtime.calendar.main.init.call(null);

//# sourceMappingURL=main.js.map?rel=1491223906869