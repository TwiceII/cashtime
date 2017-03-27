// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.dom_utils');
goog.require('cljs.core');
goog.require('clojure.string');
cashtime.dom_utils.q = (function cashtime$dom_utils$q(selector){
return document.querySelector(selector);
});
cashtime.dom_utils.rcomp__GT_js$ = (function cashtime$dom_utils$rcomp__GT_js$(react_comp){
return $(ReactDOM.findDOMNode(react_comp));
});
cashtime.dom_utils.find_in_rcomp = (function cashtime$dom_utils$find_in_rcomp(react_comp,sel_str){
var elem = cashtime.dom_utils.rcomp__GT_js$.call(null,react_comp).find(sel_str);
return (elem[(0)]);
});
cashtime.dom_utils.set_value_BANG_ = (function cashtime$dom_utils$set_value_BANG_(el,value){
return el.value = value;
});
cashtime.dom_utils.value = (function cashtime$dom_utils$value(el){
if((el == null)){
return null;
} else {
var val = el.value;
if(clojure.string.blank_QMARK_.call(null,val)){
return null;
} else {
return clojure.string.trim.call(null,val);
}
}
});
cashtime.dom_utils.value_of_input = (function cashtime$dom_utils$value_of_input(el){
if((el == null)){
return null;
} else {
return cashtime.dom_utils.value.call(null,el.target);
}
});
cashtime.dom_utils.date_value = (function cashtime$dom_utils$date_value(el){
var temp__4657__auto__ = cashtime.dom_utils.value.call(null,el);
if(cljs.core.truth_(temp__4657__auto__)){
var val = temp__4657__auto__;
var val__$1 = Date.parse(val);
if(cljs.core.truth_(isNaN(val__$1))){
return null;
} else {
return (new Date(val__$1));
}
} else {
return null;
}
});
cashtime.dom_utils.array_value = (function cashtime$dom_utils$array_value(el){
var temp__4657__auto__ = cashtime.dom_utils.value.call(null,el);
if(cljs.core.truth_(temp__4657__auto__)){
var val = temp__4657__auto__;
return clojure.string.split.call(null,val,/\s+/);
} else {
return null;
}
});
cashtime.dom_utils.value_from_dom = (function cashtime$dom_utils$value_from_dom(selector){
return cashtime.dom_utils.value.call(null,cashtime.dom_utils.q.call(null,selector));
});
/**
 * Проверка что dom элемент содержит в себе какой-то класс
 */
cashtime.dom_utils.dom_has_class_QMARK_ = (function cashtime$dom_utils$dom_has_class_QMARK_(selector,class$){
return $(cashtime.dom_utils.q.call(null,selector)).hasClass(class$);
});
cashtime.dom_utils.greet = (function cashtime$dom_utils$greet(){
return console.log("Hello world!");
});
goog.exportSymbol('cashtime.dom_utils.greet', cashtime.dom_utils.greet);
/**
 * Получить типичные для пункта меню настройки
 *   (признак, что пункт активен и событие при щелчке на нем)
 */
cashtime.dom_utils.menu_item_props = (function cashtime$dom_utils$menu_item_props(active_QMARK_,on_click_fn,item_key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return on_click_fn.call(null,item_key);
})], null);
});

//# sourceMappingURL=dom_utils.js.map?rel=1490597384440