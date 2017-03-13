// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.core');
goog.require('cljs.core');
goog.require('cashtime.moment_utils');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hey there, cash time!");
/**
 * Тестовые группы измерений
 */
cashtime.core.avail_dim_groups = new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-1",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0430\u0439\u0442"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0438\u0437\u0438\u0442\u043A\u0438"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u043E\u0433\u043E\u0442\u0438\u043F"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C"], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u044D\u043D\u0434\u0438\u043D\u0433"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"\u0414\u0440\u0443\u0433\u043E\u0435"], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-2",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Nova Med"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"GCC"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Bestprofi.kz"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u0433\u043E\u0440\u044C"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Luxor"], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-3",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"DIIS"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"BRK"], null)], null)], null)], null);
cashtime.core.randomizer_params = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"from-d","from-d",1878394019),(new Date((2017),(2),(1))),new cljs.core.Keyword(null,"to-d","to-d",1644536766),(new Date()),new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226),(10),new cljs.core.Keyword(null,"max-vals-amount","max-vals-amount",748056679),(20),new cljs.core.Keyword(null,"min-summ","min-summ",804503238),(-7000),new cljs.core.Keyword(null,"max-summ","max-summ",1898652840),(10000)], null);
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
 * Вернуть значение value только если выпала вероятность указанная в success-percent
 */
cashtime.core.rand_if = (function cashtime$core$rand_if(success_percent,value){
if((cashtime.core.rand_1_to.call(null,(100)) <= success_percent)){
return value;
} else {
return null;
}
});
/**
 * Рандомное число от Х до Y (включительно, можно использовать отриц.числа)
 */
cashtime.core.rand_from_to = (function cashtime$core$rand_from_to(from,to){
return ((cljs.core.rand_int.call(null,(Math.abs(from) + (to + (1)))) + (from - (1))) + (1));
});
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
 * Рандомная дата в строчном iso формате
 */
cashtime.core.random_iso_date = (function cashtime$core$random_iso_date(from_d,to_d){
return (function (p1__39182_SHARP_){
return (new Date(p1__39182_SHARP_.getYear(),p1__39182_SHARP_.getMonth(),p1__39182_SHARP_.getDate()));
}).call(null,cashtime.moment_utils.random_date_between.call(null,from_d,to_d)).toISOString();
});
/**
 * Рандомная пара [дата - факт-план]
 */
cashtime.core.random_date_value_pair = (function cashtime$core$random_date_value_pair(from_d,to_d,min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.core.random_iso_date.call(null,from_d,to_d),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),cashtime.core.rand_from_to.call(null,min_summ,max_summ),new cljs.core.Keyword(null,"plan","plan",1118952668),cashtime.core.rand_if.call(null,(20),cashtime.core.rand_from_to.call(null,min_summ,max_summ))], null)], null);
});
cashtime.core.repeat_and_get_map = (function cashtime$core$repeat_and_get_map(max_count,val_pair_fn){
return cljs.core.reduce.call(null,(function (m,p__39187){
var vec__39188 = p__39187;
var k = cljs.core.nth.call(null,vec__39188,(0),null);
var v = cljs.core.nth.call(null,vec__39188,(1),null);
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
cashtime.core.random_date_values = (function cashtime$core$random_date_values(from_d,to_d,max_amount,min_summ,max_summ){
return cashtime.core.repeat_and_get_map.call(null,max_amount,(function (){
return cashtime.core.random_date_value_pair.call(null,from_d,to_d,min_summ,max_summ);
}));
});
/**
 * Рандомная пара [тапл - суммы по датам]
 */
cashtime.core.random_tuple_pair = (function cashtime$core$random_tuple_pair(all_dim_groups,from_d,to_d,max_vals_amount,min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.core.random_tuple.call(null,all_dim_groups),cashtime.core.random_date_values.call(null,from_d,to_d,max_vals_amount,min_summ,max_summ)], null);
});
/**
 * Получить рандомные записи
 */
cashtime.core.random_entries = (function cashtime$core$random_entries(all_dim_groups,from_d,to_d,max_row_amount,max_vals_amount,min_summ,max_summ){
return cashtime.core.repeat_and_get_map.call(null,max_row_amount,(function (){
return cashtime.core.random_tuple_pair.call(null,all_dim_groups,from_d,to_d,max_vals_amount,min_summ,max_summ);
}));
});
/**
 * Тестовые используемые записи
 */
cashtime.core.entries = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 2, ["2017-06-05T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(10000),new cljs.core.Keyword(null,"plan","plan",1118952668),(5000)], null),"2017-06-08T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(8000),new cljs.core.Keyword(null,"plan","plan",1118952668),null], null)], null),new cljs.core.PersistentArrayMap(null, 2, [(1),(3),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 1, ["2017-06-05T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(4000),new cljs.core.Keyword(null,"plan","plan",1118952668),(-15000)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [(2),(1)], null),new cljs.core.PersistentArrayMap(null, 1, ["2017-06-01T00:00:00Z",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fact","fact",-799816531),(-3000),new cljs.core.Keyword(null,"plan","plan",1118952668),null,new cljs.core.Keyword(null,"comment","comment",532206069),"some comment"], null)], null)], true, false);
/**
 * Посчитать итого для каждой строки
 */
cashtime.core.row_totals_from_entries = (function cashtime$core$row_totals_from_entries(entries){
return cljs.core.map.call(null,(function (p1__39191_SHARP_){
return cljs.core.reduce_kv.call(null,(function (totals,k_date,v_sum){
return cljs.core.update.call(null,cljs.core.update.call(null,totals,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,(function (){var or__24760__auto__ = new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v_sum);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,(function (){var or__24760__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v_sum);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})());
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),cljs.core.second.call(null,p1__39191_SHARP_));
}),entries);
});
/**
 * Получить сортированный список уникальных дат из списка записей
 */
cashtime.core.distinct_dates_from_entries = (function cashtime$core$distinct_dates_from_entries(entries){
return cashtime.moment_utils.sort_dates.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce_kv.call(null,(function (coll,k,v){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.cons.call(null,coll,cljs.core.keys.call(null,v)));
}),cljs.core.PersistentHashSet.EMPTY,entries)));
});
/**
 * Получить итого по датам
 */
cashtime.core.date_totals_from_entries = (function cashtime$core$date_totals_from_entries(entries){
var dates = cashtime.core.distinct_dates_from_entries.call(null,entries);
return cljs.core.map.call(null,((function (dates){
return (function (d){
return cljs.core.reduce_kv.call(null,((function (dates){
return (function (m,k,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,(function (){var or__24760__auto__ = cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"fact","fact",-799816531)], null));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,(function (){var or__24760__auto__ = cljs.core.get_in.call(null,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"plan","plan",1118952668)], null));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})());
});})(dates))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),entries);
});})(dates))
,dates);
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
var attrs39192 = cljs.core.map.call(null,(function (dim_group){
var dim_group_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
var pair = cashtime.core.pair_from_tuple.call(null,tuple,dim_group_id);
return rum.core.with_key.call(null,cashtime.core.dim_td_view.call(null,dim_group,cashtime.core.pair__GT_dim.call(null,pair)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim_group_id,cljs.core.second.call(null,pair)], null));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39192))?sablono.interpreter.attributes.call(null,attrs39192):null),((cljs.core.map_QMARK_.call(null,attrs39192))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39192)], null)));
}),null,"tuple-tr-view");
cashtime.core.dim_group_header_view = rum.core.build_defc.call(null,(function (dim_group){
var attrs39193 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs39193))?sablono.interpreter.attributes.call(null,attrs39193):null),((cljs.core.map_QMARK_.call(null,attrs39193))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39193)], null)));
}),null,"dim-group-header-view");
/**
 * Вьюшка для измерений (левой части)
 */
cashtime.core.dimensions_view = rum.core.build_defc.call(null,(function (dim_groups,tuples){
return React.createElement("div",null,React.createElement("table",({"className": "ui very basic celled compact table"}),React.createElement("thead",null,(function (){var attrs39197 = cljs.core.map.call(null,(function (p1__39194_SHARP_){
return rum.core.with_key.call(null,cashtime.core.dim_group_header_view.call(null,p1__39194_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__39194_SHARP_));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39197))?sablono.interpreter.attributes.call(null,attrs39197):null),((cljs.core.map_QMARK_.call(null,attrs39197))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39197)], null)));
})()),(function (){var attrs39196 = cljs.core.map.call(null,(function (p1__39195_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,dim_groups,p1__39195_SHARP_),p1__39195_SHARP_);
}),tuples);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs39196))?sablono.interpreter.attributes.call(null,attrs39196):null),((cljs.core.map_QMARK_.call(null,attrs39196))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,dim_groups)}),"\u0418\u0442\u043E\u0433\u043E"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39196),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,dim_groups)}),"\u0418\u0442\u043E\u0433\u043E"))], null)));
})()));
}),null,"dimensions-view");
cashtime.core.date_header_th_view = rum.core.build_defc.call(null,(function (date){
var attrs39198 = cashtime.moment_utils.to_print_date.call(null,date);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs39198))?sablono.interpreter.attributes.call(null,attrs39198):null),((cljs.core.map_QMARK_.call(null,attrs39198))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39198)], null)));
}),null,"date-header-th-view");
cashtime.core.date_headers_tr_view = rum.core.build_defc.call(null,(function (dates){
var attrs39200 = cljs.core.map.call(null,(function (p1__39199_SHARP_){
return rum.core.with_key.call(null,cashtime.core.date_header_th_view.call(null,p1__39199_SHARP_),p1__39199_SHARP_);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39200))?sablono.interpreter.attributes.call(null,attrs39200):null),((cljs.core.map_QMARK_.call(null,attrs39200))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39200)], null)));
}),null,"date-headers-tr-view");
/**
 * Вьюшка для вывода суммы записи
 */
cashtime.core.entry_value_view = rum.core.build_defc.call(null,(function (value){
return React.createElement("div",({"className": "value-cell"}),(function (){var attrs39201 = ((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value)))?null:new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39201))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fact-value"], null)], null),attrs39201)):({"className": "fact-value"})),((cljs.core.map_QMARK_.call(null,attrs39201))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39201)], null)));
})(),(function (){var attrs39202 = ((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value)))?null:new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs39202))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["plan-value"], null)], null),attrs39202)):({"className": "plan-value"})),((cljs.core.map_QMARK_.call(null,attrs39202))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39202)], null)));
})());
}),null,"entry-value-view");
cashtime.core.value_cell_td_view = rum.core.build_defc.call(null,(function (value){
var attrs39203 = (cljs.core.truth_(value)?cashtime.core.entry_value_view.call(null,value):null);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39203))?sablono.interpreter.attributes.call(null,attrs39203):null),((cljs.core.map_QMARK_.call(null,attrs39203))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39203)], null)));
}),null,"value-cell-td-view");
cashtime.core.values_row_tr_view = rum.core.build_defc.call(null,(function (dates,date_values){
var attrs39204 = cljs.core.map.call(null,(function (d){
return rum.core.with_key.call(null,cashtime.core.value_cell_td_view.call(null,cljs.core.get.call(null,date_values,d)),d);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39204))?sablono.interpreter.attributes.call(null,attrs39204):null),((cljs.core.map_QMARK_.call(null,attrs39204))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39204)], null)));
}),null,"values-row-tr-view");
/**
 * Вьюшка для записей и дат (основная часть)
 */
cashtime.core.entries_view = rum.core.build_defc.call(null,(function (entries,d_params){
var dates = cashtime.core.distinct_dates_from_entries.call(null,entries);
return React.createElement("table",({"className": "ui very basic celled compact table"}),(function (){var attrs39206 = cashtime.core.date_headers_tr_view.call(null,dates);
return cljs.core.apply.call(null,React.createElement,"thead",((cljs.core.map_QMARK_.call(null,attrs39206))?sablono.interpreter.attributes.call(null,attrs39206):null),((cljs.core.map_QMARK_.call(null,attrs39206))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39206)], null)));
})(),(function (){var attrs39207 = cljs.core.map.call(null,((function (dates){
return (function (p__39210){
var vec__39211 = p__39210;
var tuple = cljs.core.nth.call(null,vec__39211,(0),null);
var date_values = cljs.core.nth.call(null,vec__39211,(1),null);
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values),tuple);
});})(dates))
,entries);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs39207))?sablono.interpreter.attributes.call(null,attrs39207):null),((cljs.core.map_QMARK_.call(null,attrs39207))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39208 = cljs.core.map.call(null,((function (attrs39207,dates){
return (function (p1__39205_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__39205_SHARP_)], null);
});})(attrs39207,dates))
,cashtime.core.date_totals_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39208))?sablono.interpreter.attributes.call(null,attrs39208):null),((cljs.core.map_QMARK_.call(null,attrs39208))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39208)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39207),(function (){var attrs39209 = cljs.core.map.call(null,((function (attrs39207,dates){
return (function (p1__39205_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__39205_SHARP_)], null);
});})(attrs39207,dates))
,cashtime.core.date_totals_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs39209))?sablono.interpreter.attributes.call(null,attrs39209):null),((cljs.core.map_QMARK_.call(null,attrs39209))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39209)], null)));
})()], null)));
})());
}),null,"entries-view");
/**
 * Вьюшка для Итого по строкам
 */
cashtime.core.row_totals_view = rum.core.build_defc.call(null,(function (totals){
return React.createElement("table",({"className": "ui very basic celled compact table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u0418\u0442\u043E\u0433\u043E \u0437\u0430 \u043C\u0435\u0441\u044F\u0446"))),(function (){var attrs39217 = cljs.core.map.call(null,(function (p1__39214_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__39214_SHARP_)], null)], null);
}),totals);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs39217))?sablono.interpreter.attributes.call(null,attrs39217):null),((cljs.core.map_QMARK_.call(null,attrs39217))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,(function (){var attrs39218 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs39217){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs39217))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),totals));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39218))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs39218)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs39218))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39218)], null)));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39217),React.createElement("tr",null,(function (){var attrs39219 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs39217){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs39217))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),totals));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs39219))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs39219)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs39219))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39219)], null)));
})())], null)));
})());
}),null,"row-totals-view");
/**
 * Вьюшка для управления временем
 */
cashtime.core.timeline_panel_view = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,React.createElement("a",({"className": "ui labeled icon tiny button"}),React.createElement("i",({"className": "left arrow icon"})),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0440\u0435\u0435"),React.createElement("div",({"className": "ui text right floated compact menu"}),React.createElement("div",({"className": "header item"}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E "),React.createElement("a",({"className": "active item"}),"\u0434\u043D\u044F\u043C"),React.createElement("a",({"className": "item"}),"\u043C\u0435\u0441\u044F\u0446\u0430\u043C"),React.createElement("a",({"className": "item"}),"\u0433\u043E\u0434\u0430\u043C")));
}),null,"timeline-panel-view");
cashtime.core.main_view = rum.core.build_defc.call(null,(function (){
var entries = cashtime.core.random_entries.call(null,cashtime.core.avail_dim_groups,new cljs.core.Keyword(null,"from-d","from-d",1878394019).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params),new cljs.core.Keyword(null,"to-d","to-d",1644536766).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params),new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params),new cljs.core.Keyword(null,"max-vals-amount","max-vals-amount",748056679).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params),new cljs.core.Keyword(null,"min-summ","min-summ",804503238).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params),new cljs.core.Keyword(null,"max-summ","max-summ",1898652840).cljs$core$IFn$_invoke$arity$1(cashtime.core.randomizer_params));
var row_totals = cashtime.core.row_totals_from_entries.call(null,entries);
return React.createElement("div",({"className": "ui padded grid"}),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),React.createElement("div",({"className": "four wide column"}),React.createElement("div",({"className": "search-div"}),React.createElement("div",({"className": "ui fluid input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text"}))))),(function (){var attrs39224 = cashtime.core.timeline_panel_view.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39224))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ten","wide","column"], null)], null),attrs39224)):({"className": "ten wide column"})),((cljs.core.map_QMARK_.call(null,attrs39224))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39224)], null)));
})(),React.createElement("div",({"className": "two wide column"}))),React.createElement("div",({"className": "stretched bottom aligned row"}),React.createElement("div",({"className": "four wide column"}),(function (){var attrs39227 = cashtime.core.dimensions_view.call(null,cljs.core.vals.call(null,cashtime.core.avail_dim_groups),cashtime.core.tuples_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39227))?sablono.interpreter.attributes.call(null,attrs39227):null),((cljs.core.map_QMARK_.call(null,attrs39227))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39227)], null)));
})()),React.createElement("div",({"className": "ten wide column"}),(function (){var attrs39228 = cashtime.core.entries_view.call(null,entries);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39228))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["values-div"], null)], null),attrs39228)):({"className": "values-div"})),((cljs.core.map_QMARK_.call(null,attrs39228))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39228)], null)));
})()),React.createElement("div",({"className": "two wide column"}),(function (){var attrs39229 = cashtime.core.row_totals_view.call(null,row_totals);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs39229))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row-totals-div"], null)], null),attrs39229)):({"className": "row-totals-div"})),((cljs.core.map_QMARK_.call(null,attrs39229))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39229)], null)));
})())));
}),null,"main-view");
rum.core.mount.call(null,cashtime.core.main_view.call(null),document.getElementById("main"));

//# sourceMappingURL=core.js.map?rel=1489413629111