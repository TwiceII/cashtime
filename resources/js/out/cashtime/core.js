// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.core');
goog.require('cljs.core');
goog.require('cashtime.moment_utils');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hey there, cash time!");
if(typeof cashtime.core.appdata !== 'undefined'){
} else {
cashtime.core.appdata = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0430\u0439\u0442\u044B"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0438\u0437\u0438\u0442\u043A\u0438"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Nova Med"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"GCC"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Bestprofi.kz"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0433\u043E\u0440\u044C"], null)], null)], null)], null),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d-id","d-id",-12557353),(1),new cljs.core.Keyword(null,"e-id","e-id",-1539811502),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d-id","d-id",-12557353),(2),new cljs.core.Keyword(null,"e-id","e-id",-1539811502),(3)], null)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-06-01T00:00:00Z",new cljs.core.Keyword(null,"pay-type","pay-type",-1399742542),new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"flow-type","flow-type",-723881198),new cljs.core.Keyword(null,"income","income",654385502),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summ","summ",-1220398077),(40000),new cljs.core.Keyword(null,"c-id","c-id",372955961),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d-id","d-id",-12557353),(2),new cljs.core.Keyword(null,"e-id","e-id",-1539811502),(1)], null)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-06-15T00:00:00Z",new cljs.core.Keyword(null,"pay-type","pay-type",-1399742542),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword(null,"flow-type","flow-type",-723881198),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summ","summ",-1220398077),(20000),new cljs.core.Keyword(null,"c-id","c-id",372955961),(2)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d-id","d-id",-12557353),(2),new cljs.core.Keyword(null,"e-id","e-id",-1539811502),(1)], null)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-06-18T00:00:00Z",new cljs.core.Keyword(null,"pay-type","pay-type",-1399742542),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword(null,"flow-type","flow-type",-723881198),new cljs.core.Keyword(null,"expense","expense",1909150212),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summ","summ",-1220398077),(10000),new cljs.core.Keyword(null,"c-id","c-id",372955961),(2)], null)], null)], null)], null));
}
/**
 * Тестовые группы измерений
 */
cashtime.core.avail_dim_groups = new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-1",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0430\u0439\u0442"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0438\u0437\u0438\u0442\u043A\u0438"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u043E\u0433\u043E\u0442\u0438\u043F"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C"], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u044D\u043D\u0434\u0438\u043D\u0433"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"\u0414\u0440\u0443\u0433\u043E\u0435"], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-2",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Nova Med"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"GCC"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Bestprofi.kz"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u0433\u043E\u0440\u044C"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Luxor"], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-3",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"DIIS"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"BRK"], null)], null)], null)], null);
/**
 * Получить рандомный id измерения из группы
 */
cashtime.core.random_dim_id = (function cashtime$core$random_dim_id(all_dim_groups,dim_group_id){
return cljs.core.rand_nth.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,all_dim_groups,dim_group_id))));
});
/**
 * Рандомное число от 1 до Х (включительно)
 */
cashtime.core.rand_1_to = (function cashtime$core$rand_1_to(x){
return (cljs.core.rand_int.call(null,x) + (1));
});
/**
 * Рандомное число от Х до Y (включительно, можно использовать отриц.числа)
 */
cashtime.core.rand_from_to = (function cashtime$core$rand_from_to(from,to){
return ((cljs.core.rand_int.call(null,(Math.abs(from) + (to + (1)))) + (from - (1))) + (1));
});
cashtime.core.rand_from_to.call(null,(-3),(10));
/**
 * Получить рандомное кол-во рандомных id групп измерений
 */
cashtime.core.random_group_ids = (function cashtime$core$random_group_ids(all_dim_groups){
return cljs.core.take.call(null,cashtime.core.rand_1_to.call(null,cljs.core.count.call(null,cljs.core.keys.call(null,all_dim_groups))),cljs.core.shuffle.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,all_dim_groups))));
});
/**
 * Рандомный тапл измерений для записи
 */
cashtime.core.random_tuple = (function cashtime$core$random_tuple(dim_groups){
return cljs.core.reduce.call(null,(function (m,group_id){
return cljs.core.assoc.call(null,m,group_id,cashtime.core.random_dim_id.call(null,dim_groups,group_id));
}),cljs.core.PersistentArrayMap.EMPTY,cashtime.core.random_group_ids.call(null,dim_groups));
});
/**
 * Рандомная дата
 */
cashtime.core.random_iso_date = (function cashtime$core$random_iso_date(){
var rand_day = cashtime.core.rand_1_to.call(null,(30));
return [cljs.core.str("2017-06-"),cljs.core.str((((rand_day < (10)))?[cljs.core.str("0"),cljs.core.str(rand_day)].join(''):rand_day)),cljs.core.str("T00:00:00Z")].join('');
});
/**
 * Рандомная пара [дата - факт-план]
 */
cashtime.core.random_date_value_pair = (function cashtime$core$random_date_value_pair(min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.core.random_iso_date.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),cashtime.core.rand_from_to.call(null,min_summ,max_summ),new cljs.core.Keyword(null,"plan","plan",1118952668),cashtime.core.rand_from_to.call(null,min_summ,max_summ)], null)], null);
});
cashtime.core.repeat_and_get_map = (function cashtime$core$repeat_and_get_map(max_count,val_pair_fn){
return cljs.core.reduce.call(null,(function (m,p__36838){
var vec__36839 = p__36838;
var k = cljs.core.nth.call(null,vec__36839,(0),null);
var v = cljs.core.nth.call(null,vec__36839,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.repeatedly.call(null,cashtime.core.rand_1_to.call(null,max_count),val_pair_fn));
});
/**
 * Рандомный хм дат и факт-планов
 */
cashtime.core.random_date_values = (function cashtime$core$random_date_values(max_amount,min_summ,max_summ){
return cashtime.core.repeat_and_get_map.call(null,max_amount,(function (){
return cashtime.core.random_date_value_pair.call(null,min_summ,max_summ);
}));
});
/**
 * Рандомная пара [тапл - суммы по датам]
 */
cashtime.core.random_tuple_pair = (function cashtime$core$random_tuple_pair(all_dim_groups,max_vals_amount,min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.core.random_tuple.call(null,all_dim_groups),cashtime.core.random_date_values.call(null,max_vals_amount,min_summ,max_summ)], null);
});
/**
 * Получить рандомные записи
 */
cashtime.core.random_entries = (function cashtime$core$random_entries(all_dim_groups,max_row_amount,max_vals_amount,min_summ,max_summ){
return cashtime.core.repeat_and_get_map.call(null,max_row_amount,(function (){
return cashtime.core.random_tuple_pair.call(null,all_dim_groups,max_vals_amount,min_summ,max_summ);
}));
});
cashtime.core.random_entries.call(null,cashtime.core.avail_dim_groups,(5),(15),(-3000),(5000));
/**
 * Тестовые используемые записи
 */
cashtime.core.entries = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 2, ["2017-06-05T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(10000),new cljs.core.Keyword(null,"plan","plan",1118952668),(5000)], null),"2017-06-08T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(8000),new cljs.core.Keyword(null,"plan","plan",1118952668),null], null)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(3),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 1, ["2017-06-05T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(4000),new cljs.core.Keyword(null,"plan","plan",1118952668),(-15000)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [(2),(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["2017-06-01T00:00:00Z",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fact","fact",-799816531),(-3000),new cljs.core.Keyword(null,"plan","plan",1118952668),null,new cljs.core.Keyword(null,"comment","comment",532206069),"some comment"], null)], null)], true, false);
/**
 * Получить сортированный список уникальных дат из списка записей
 */
cashtime.core.distinct_dates_from_entries = (function cashtime$core$distinct_dates_from_entries(entries){
return cashtime.moment_utils.sort_dates.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce_kv.call(null,(function (coll,k,v){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.cons.call(null,coll,cljs.core.keys.call(null,v)));
}),cljs.core.PersistentHashSet.EMPTY,entries)));
});
/**
 * Получить список всех таплов измерений внутри записей
 */
cashtime.core.tuples_from_entries = (function cashtime$core$tuples_from_entries(entries){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,entries));
});
cashtime.core.tuples_from_entries.call(null,cashtime.core.entries);
cashtime.core.pair__GT_dim = (function cashtime$core$pair__GT_dim(pair){
var group_id = cljs.core.first.call(null,pair);
var dim_id = cljs.core.second.call(null,pair);
return cljs.core.get_in.call(null,cashtime.core.avail_dim_groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id,new cljs.core.Keyword(null,"dims","dims",-466522889),dim_id], null));
});
cashtime.core.pair_from_tuple = (function cashtime$core$pair_from_tuple(tuple,group_id){
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
cashtime.core.dim_td_view = rum.core.build_defc.call(null,(function (dim_group,dim){
return React.createElement("td",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(dim)?new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(dim_group):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim)));
}),null,"dim-td-view");
cashtime.core.tuple_tr_view = rum.core.build_defc.call(null,(function (dim_groups,tuple){
var attrs36842 = cljs.core.map.call(null,(function (dim_group){
var pair = cashtime.core.pair_from_tuple.call(null,tuple,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));
return rum.core.with_key.call(null,cashtime.core.dim_td_view.call(null,dim_group,cashtime.core.pair__GT_dim.call(null,pair)),pair);
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs36842))?sablono.interpreter.attributes.call(null,attrs36842):null),((cljs.core.map_QMARK_.call(null,attrs36842))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36842)], null)));
}),null,"tuple-tr-view");
cashtime.core.dimension_header_view = rum.core.build_defc.call(null,(function (dimension){
var attrs36843 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dimension);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs36843))?sablono.interpreter.attributes.call(null,attrs36843):null),((cljs.core.map_QMARK_.call(null,attrs36843))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36843)], null)));
}),null,"dimension-header-view");
/**
 * Вьюшка для измерений (левой части)
 */
cashtime.core.dimensions_view = rum.core.build_defc.call(null,(function (dimensions,tuples){
return React.createElement("div",null,React.createElement("table",({"className": "ui very basic celled compact table"}),React.createElement("thead",null,(function (){var attrs36847 = cljs.core.map.call(null,(function (p1__36844_SHARP_){
return rum.core.with_key.call(null,cashtime.core.dimension_header_view.call(null,p1__36844_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36844_SHARP_));
}),dimensions);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs36847))?sablono.interpreter.attributes.call(null,attrs36847):null),((cljs.core.map_QMARK_.call(null,attrs36847))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36847)], null)));
})()),(function (){var attrs36846 = cljs.core.map.call(null,(function (p1__36845_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,dimensions,p1__36845_SHARP_),p1__36845_SHARP_);
}),tuples);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs36846))?sablono.interpreter.attributes.call(null,attrs36846):null),((cljs.core.map_QMARK_.call(null,attrs36846))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36846)], null)));
})()));
}),null,"dimensions-view");
cashtime.core.date_header_th_view = rum.core.build_defc.call(null,(function (date){
var attrs36848 = cashtime.moment_utils.to_print_date.call(null,date);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs36848))?sablono.interpreter.attributes.call(null,attrs36848):null),((cljs.core.map_QMARK_.call(null,attrs36848))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36848)], null)));
}),null,"date-header-th-view");
cashtime.core.date_headers_tr_view = rum.core.build_defc.call(null,(function (dates){
var attrs36850 = cljs.core.map.call(null,(function (p1__36849_SHARP_){
return rum.core.with_key.call(null,cashtime.core.date_header_th_view.call(null,p1__36849_SHARP_),p1__36849_SHARP_);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs36850))?sablono.interpreter.attributes.call(null,attrs36850):null),((cljs.core.map_QMARK_.call(null,attrs36850))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36850)], null)));
}),null,"date-headers-tr-view");
cashtime.core.value_cell_td_view = rum.core.build_defc.call(null,(function (value){
var attrs36851 = new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs36851))?sablono.interpreter.attributes.call(null,attrs36851):null),((cljs.core.map_QMARK_.call(null,attrs36851))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36851)], null)));
}),null,"value-cell-td-view");
cashtime.core.values_row_tr_view = rum.core.build_defc.call(null,(function (dates,date_values){
var attrs36852 = cljs.core.map.call(null,(function (d){
return rum.core.with_key.call(null,cashtime.core.value_cell_td_view.call(null,cljs.core.get.call(null,date_values,d)),d);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs36852))?sablono.interpreter.attributes.call(null,attrs36852):null),((cljs.core.map_QMARK_.call(null,attrs36852))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36852)], null)));
}),null,"values-row-tr-view");
/**
 * Вьюшка для записей и дат (основная часть)
 */
cashtime.core.entries_view = rum.core.build_defc.call(null,(function (entries,d_params){
var dates = cashtime.core.distinct_dates_from_entries.call(null,entries);
return React.createElement("table",({"style": ({"width": "1200px"}), "className": "ui very basic celled compact table"}),(function (){var attrs36853 = cashtime.core.date_headers_tr_view.call(null,dates);
return cljs.core.apply.call(null,React.createElement,"thead",((cljs.core.map_QMARK_.call(null,attrs36853))?sablono.interpreter.attributes.call(null,attrs36853):null),((cljs.core.map_QMARK_.call(null,attrs36853))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36853)], null)));
})(),(function (){var attrs36854 = cljs.core.map.call(null,((function (dates){
return (function (p__36855){
var vec__36856 = p__36855;
var tuple = cljs.core.nth.call(null,vec__36856,(0),null);
var date_values = cljs.core.nth.call(null,vec__36856,(1),null);
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values),tuple);
});})(dates))
,entries);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs36854))?sablono.interpreter.attributes.call(null,attrs36854):null),((cljs.core.map_QMARK_.call(null,attrs36854))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36854)], null)));
})());
}),null,"entries-view");
cashtime.core.main_view = rum.core.build_defc.call(null,(function (){
var entries = cashtime.core.random_entries.call(null,cashtime.core.avail_dim_groups,(10),(15),(-7000),(10000));
return React.createElement("div",({"className": "ui padded grid"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "four wide column"}),React.createElement("div",({"className": "ui fluid input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text"}))))),React.createElement("div",({"className": "stretched bottom aligned row"}),React.createElement("div",({"className": "four wide column"}),(function (){var attrs36861 = cashtime.core.dimensions_view.call(null,cljs.core.vals.call(null,cashtime.core.avail_dim_groups),cashtime.core.tuples_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36861))?sablono.interpreter.attributes.call(null,attrs36861):null),((cljs.core.map_QMARK_.call(null,attrs36861))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36861)], null)));
})()),React.createElement("div",({"className": "twelve wide column"}),(function (){var attrs36862 = cashtime.core.entries_view.call(null,entries);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36862))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["values-div"], null)], null),attrs36862)):({"className": "values-div"})),((cljs.core.map_QMARK_.call(null,attrs36862))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36862)], null)));
})())));
}),null,"main-view");
rum.core.mount.call(null,cashtime.core.main_view.call(null),document.getElementById("main"));

//# sourceMappingURL=core.js.map?rel=1489238445072