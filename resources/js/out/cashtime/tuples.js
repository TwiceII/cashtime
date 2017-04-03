// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.tuples');
goog.require('cljs.core');
goog.require('cashtime.utils');
goog.require('cashtime.moment_utils');
/**
 * Тестовые значения для групп измерений
 */
cashtime.tuples.test_avail_dim_groups = new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-1",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0425\u0430\u043B\u044B\u043A \u0411\u0430\u043D\u043A"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0420\u0435\u043A\u043B\u0430\u043C\u0430.\u043A\u0437"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"TOO \u0412\u0435\u043A\u0442\u043E\u0440"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u041F \u0418\u0432\u0430\u043D\u043E\u0432"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0441\u044B\u043B\u0445\u0430\u043D\u043E\u0432 \u041C.\u0410."], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"\u0422\u041E\u041E \u0414\u0435\u043A\u043E\u0440"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"Landing Ltd."], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-2",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 1"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 2"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433. \u043E\u0442 20.03.17"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"11042015 \u0434\u043E\u0433."], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u21164342"], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0447\u0435\u0442\u0430",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-3",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Qazkom"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0447\u0435\u0442"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0430\u043B\u044E\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"], null)], null)], null),(4),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-4",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u044F 1"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u044F 2"], null)], null)], null)], null);
/**
 * Получить список всех таплов измерений внутри записей
 */
cashtime.tuples.tuples_from_entries = (function cashtime$tuples$tuples_from_entries(entries){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),entries);
});
cashtime.tuples.pair_from_tuple = (function cashtime$tuples$pair_from_tuple(tuple,group_id){
if(cljs.core.truth_((function (){var and__24748__auto__ = group_id;
if(cljs.core.truth_(and__24748__auto__)){
return tuple;
} else {
return and__24748__auto__;
}
})())){
var temp__4655__auto__ = cljs.core.get.call(null,tuple,group_id);
if(cljs.core.truth_(temp__4655__auto__)){
var dim_id = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id,dim_id], null);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Обновить дату внутри плоских данных чтобы сгруппировать по дням/месяцам/годам и т.д.
 */
cashtime.tuples.update_plain_entry_date_for_group = (function cashtime$tuples$update_plain_entry_date_for_group(plain_entry,d_group_mode){
var G__33899 = (((d_group_mode instanceof cljs.core.Keyword))?d_group_mode.fqn:null);
switch (G__33899) {
case "by-month":
return cljs.core.assoc.call(null,plain_entry,new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.moment_utils.iso_date_by_month.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(plain_entry)));

break;
case "by-year":
return cljs.core.assoc.call(null,plain_entry,new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.moment_utils.iso_date_by_year.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(plain_entry)));

break;
case "by-day":
return plain_entry;

break;
default:
return plain_entry;

}
});
/**
 * Обновить измерения внутри плоских данных чтобы сгруппировать по доступным измерениям
 */
cashtime.tuples.update_plain_entry_dims_for_avails = (function cashtime$tuples$update_plain_entry_dims_for_avails(plain_entry,active_dim_group_ids){
return cljs.core.update.call(null,plain_entry,new cljs.core.Keyword(null,"dims","dims",-466522889),(function (t){
return cljs.core.select_keys.call(null,t,active_dim_group_ids);
}));
});
/**
 * Конвертировать плоские данные по записям в форматированные
 */
cashtime.tuples.plain_entries__GT_entries = (function cashtime$tuples$plain_entries__GT_entries(plain_entries,d_group_mode,active_dim_group_ids){
return cljs.core.reduce_kv.call(null,(function (vc,tuple,d_values){
return cljs.core.conj.call(null,vc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),tuple,new cljs.core.Keyword(null,"date-values","date-values",194611847),d_values], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (m,e){
if(cljs.core.not.call(null,cashtime.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(e)))){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"v-type","v-type",-140288412).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core._PLUS_,(function (){var or__24760__auto__ = new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})());
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__33901_SHARP_){
return cashtime.tuples.update_plain_entry_dims_for_avails.call(null,cashtime.tuples.update_plain_entry_date_for_group.call(null,p1__33901_SHARP_,d_group_mode),active_dim_group_ids);
}),plain_entries)));
});
/**
 * Таплы с id измерений в таплы с названиями измерений
 */
cashtime.tuples.tuple_w_ids__GT_tuple_w_names = (function cashtime$tuples$tuple_w_ids__GT_tuple_w_names(all_dim_groups,tuple_w_ids){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,all_dim_groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"dims","dims",-466522889),v], null))));
}),cljs.core.PersistentArrayMap.EMPTY,tuple_w_ids);
});
/**
 * Сортировать список таплов по названиям в измерении
 */
cashtime.tuples.sort_tuples = (function cashtime$tuples$sort_tuples(tuples,dim_groups,sort_gr_id,desc_QMARK_){
return new cljs.core.Keyword(null,"sorted-tuples-w-ids","sorted-tuples-w-ids",-1171863308).cljs$core$IFn$_invoke$arity$1((function (p1__33904_SHARP_){
return cljs.core.assoc.call(null,p1__33904_SHARP_,new cljs.core.Keyword(null,"sorted-tuples-w-ids","sorted-tuples-w-ids",-1171863308),cljs.core.map.call(null,(function (t){
return cashtime.utils.k_of_v.call(null,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500).cljs$core$IFn$_invoke$arity$1(p1__33904_SHARP_),t);
}),new cljs.core.Keyword(null,"sorted-tuples-w-names","sorted-tuples-w-names",-100667312).cljs$core$IFn$_invoke$arity$1(p1__33904_SHARP_)));
}).call(null,(function (p1__33903_SHARP_){
return cljs.core.assoc.call(null,p1__33903_SHARP_,new cljs.core.Keyword(null,"sorted-tuples-w-names","sorted-tuples-w-names",-100667312),cljs.core.sort.call(null,(function (t1,t2){
return (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_).call(null,(function (){var or__24760__auto__ = cljs.core.get.call(null,t1,sort_gr_id);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "";
}
})(),(function (){var or__24760__auto__ = cljs.core.get.call(null,t2,sort_gr_id);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "";
}
})());
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500).cljs$core$IFn$_invoke$arity$1(p1__33903_SHARP_))));
}).call(null,(function (p1__33902_SHARP_){
return cljs.core.assoc.call(null,p1__33902_SHARP_,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500),cljs.core.reduce.call(null,(function (m,tuple){
return cljs.core.assoc.call(null,m,tuple,cashtime.tuples.tuple_w_ids__GT_tuple_w_names.call(null,dim_groups,tuple));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tuples-w-ids","tuples-w-ids",-72323961).cljs$core$IFn$_invoke$arity$1(p1__33902_SHARP_)));
}).call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tuples-w-ids","tuples-w-ids",-72323961),tuples)))));
});
/**
 * Получить отсортированные записи по названиям измерений в нужной группе
 */
cashtime.tuples.get_sorted_entries = (function cashtime$tuples$get_sorted_entries(entries,dim_groups,sort_gr_id,desc_QMARK_){
if(cljs.core.truth_(sort_gr_id)){
return (function (ind_hm){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (t1,t2){
return (cljs.core.get.call(null,ind_hm,t1) < cljs.core.get.call(null,ind_hm,t2));
}),entries);
}).call(null,cashtime.utils.indexed_hashmap_of_coll.call(null,cashtime.tuples.sort_tuples.call(null,cashtime.tuples.tuples_from_entries.call(null,entries),dim_groups,sort_gr_id,desc_QMARK_)));
} else {
return entries;
}
});
/**
 * Получить хмэп вида {id-группы [id-измерений]}, у которых есть в названиях подстрока
 */
cashtime.tuples.get_search_tuple_with_substr = (function cashtime$tuples$get_search_tuple_with_substr(dim_groups,ss){
return cljs.core.reduce.call(null,(function (m,dg){
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,(function (p1__33905_SHARP_){
return cashtime.utils.has_substr_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__33905_SHARP_),ss);
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(dg))));
if(cljs.core.not.call(null,cashtime.utils.nil_or_empty_QMARK_.call(null,ids))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dg),ids);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dim_groups));
});
/**
 * Находится ли пара в тапле для поиска
 *   пример: (pair-in-search-tuples? [1 7] {1 [4 7], 2 [4]}) - true
 */
cashtime.tuples.pair_in_search_tuple_QMARK_ = (function cashtime$tuples$pair_in_search_tuple_QMARK_(pair,search_tuples){
if(cljs.core.truth_(pair)){
return cljs.core.boolean$.call(null,cashtime.utils.in_QMARK_.call(null,cljs.core.get.call(null,search_tuples,cljs.core.first.call(null,pair)),cljs.core.second.call(null,pair)));
} else {
return null;
}
});
/**
 * Содержится ли в тапле хоть одна пара удовл. таплу поиска
 */
cashtime.tuples.tuple_in_search_tuple_QMARK_ = (function cashtime$tuples$tuple_in_search_tuple_QMARK_(tuple,search_tuple){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__33906_SHARP_){
return cashtime.tuples.pair_in_search_tuple_QMARK_.call(null,p1__33906_SHARP_,search_tuple);
}),cljs.core.vec.call(null,tuple)));
});
/**
 * Отфильтровать (если нужно) плоские данные
 */
cashtime.tuples.filter_plain_entries = (function cashtime$tuples$filter_plain_entries(plain_entries,search_tuple){
return (function (pe){
if(cljs.core.truth_(search_tuple)){
return cljs.core.filter.call(null,(function (p1__33907_SHARP_){
return cashtime.tuples.tuple_in_search_tuple_QMARK_.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(p1__33907_SHARP_),search_tuple);
}),pe);
} else {
return pe;
}
}).call(null,plain_entries);
});

//# sourceMappingURL=tuples.js.map?rel=1491221332630