// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.core');
goog.require('cljs.core');
goog.require('cashtime.moment_utils');
goog.require('cashtime.random_utils');
goog.require('cashtime.utils');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hey there, cash time!");
if(typeof cashtime.core.appstate !== 'undefined'){
} else {
cashtime.core.appstate = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-1",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0430\u0439\u0442"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0438\u0437\u0438\u0442\u043A\u0438"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u043E\u0433\u043E\u0442\u0438\u043F"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C"], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"\u041B\u044D\u043D\u0434\u0438\u043D\u0433"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"\u0414\u0440\u0443\u0433\u043E\u0435"], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-2",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Nova Med"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"GCC"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Bestprofi.kz"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u0433\u043E\u0440\u044C"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"Luxor"], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-3",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"DIIS"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"BRK"], null)], null)], null)], null),new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006),new cljs.core.Keyword(null,"by-day","by-day",-1253777753)], null)], null));
}
cashtime.core.state_cursor = cljs.core.partial.call(null,rum.core.cursor_in,cashtime.core.appstate);
cashtime.core.randomizer_params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"from-d","from-d",1878394019),(new Date((2016),(2),(1))),new cljs.core.Keyword(null,"to-d","to-d",1644536766),(new Date()),new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226),(10),new cljs.core.Keyword(null,"max-vals-amount","max-vals-amount",748056679),(20),new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195),(200),new cljs.core.Keyword(null,"min-summ","min-summ",804503238),(-70000),new cljs.core.Keyword(null,"max-summ","max-summ",1898652840),(100000)], null);
/**
 * Получить случайную плоскую запись
 */
cashtime.core.random_plain_entry = (function cashtime$core$random_plain_entry(dim_group_options,from_d,to_d,min_summ,max_summ){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dims","dims",-466522889),cljs.core.rand_nth.call(null,dim_group_options),new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.random_utils.random_iso_date.call(null,from_d,to_d),new cljs.core.Keyword(null,"v-type","v-type",-140288412),cashtime.random_utils.rand_nth_by_percentage.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(90),new cljs.core.Keyword(null,"plan","plan",1118952668),(10)], null)),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),cashtime.random_utils.rand_from_to.call(null,min_summ,max_summ)], null);
});
/**
 * Получить случайные плоские данные по записям
 */
cashtime.core.random_plain_entries = (function cashtime$core$random_plain_entries(dim_groups,p__34284){
var map__34287 = p__34284;
var map__34287__$1 = ((((!((map__34287 == null)))?((((map__34287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34287):map__34287);
var from_d = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"from-d","from-d",1878394019));
var to_d = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"to-d","to-d",1644536766));
var max_row_amount = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226));
var min_summ = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"min-summ","min-summ",804503238));
var max_summ = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"max-summ","max-summ",1898652840));
var max_entries = cljs.core.get.call(null,map__34287__$1,new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195));
var dim_group_options = cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_row_amount),((function (map__34287,map__34287__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.random_utils.random_tuple.call(null,dim_groups);
});})(map__34287,map__34287__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
return cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_entries),((function (dim_group_options,map__34287,map__34287__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.core.random_plain_entry.call(null,dim_group_options,from_d,to_d,min_summ,max_summ);
});})(dim_group_options,map__34287,map__34287__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
});
cashtime.core.moment__GT_iso_str = (function cashtime$core$moment__GT_iso_str(md){
return [cljs.core.str(md.format("YYYY-MM-DD")),cljs.core.str("T00:00:00Z")].join('');
});
cashtime.core.iso_date_by_month = (function cashtime$core$iso_date_by_month(iso_str){
return cashtime.core.moment__GT_iso_str.call(null,(function (p1__34289_SHARP_){
return (new moment([p1__34289_SHARP_.year(),p1__34289_SHARP_.month()]));
}).call(null,cashtime.moment_utils.iso_str__GT_moment.call(null,iso_str)));
});
cashtime.core.iso_date_by_year = (function cashtime$core$iso_date_by_year(iso_str){
return cashtime.core.moment__GT_iso_str.call(null,(function (p1__34290_SHARP_){
return (new moment([p1__34290_SHARP_.year()]));
}).call(null,cashtime.moment_utils.iso_str__GT_moment.call(null,iso_str)));
});
cashtime.core.update_plain_entry_date_for_group = (function cashtime$core$update_plain_entry_date_for_group(plain_entry,d_group_mode){
var G__34292 = (((d_group_mode instanceof cljs.core.Keyword))?d_group_mode.fqn:null);
switch (G__34292) {
case "by-month":
return cljs.core.assoc.call(null,plain_entry,new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.core.iso_date_by_month.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(plain_entry)));

break;
case "by-year":
return cljs.core.assoc.call(null,plain_entry,new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.core.iso_date_by_year.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(plain_entry)));

break;
case "by-day":
return plain_entry;

break;
default:
return plain_entry;

}
});
/**
 * Конвертировать плоские данные по записям в форматированные
 */
cashtime.core.plain_entries__GT_entries = (function cashtime$core$plain_entries__GT_entries(plain_entries,d_group_mode){
return cljs.core.reduce.call(null,(function (m,e){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"v-type","v-type",-140288412).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core._PLUS_,(function (){var or__24760__auto__ = new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__34294_SHARP_){
return cashtime.core.update_plain_entry_date_for_group.call(null,p1__34294_SHARP_,d_group_mode);
}),plain_entries));
});
/**
 * Обновить записи в формат.виде
 */
cashtime.core.update_entries_BANG_ = (function cashtime$core$update_entries_BANG_(){
return cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries","entries",-86943161)], null)),cashtime.core.plain_entries__GT_entries.call(null,cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null))),cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)))));
});
/**
 * Обновить случайные данные записей
 */
cashtime.core.refresh_random_data = (function cashtime$core$refresh_random_data(){
var plain_entries = cashtime.core.random_plain_entries.call(null,cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),cashtime.core.randomizer_params);
cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)),plain_entries);

return cashtime.core.update_entries_BANG_.call(null);
});
/**
 * Иниц. всех вотчеров
 */
cashtime.core.init_watchers = (function cashtime$core$init_watchers(){
return cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)),new cljs.core.Keyword(null,"d-group-mode-watch","d-group-mode-watch",712212220),(function (k,a,old_s,new_s){
cljs.core.println.call(null,"watch group mode");

if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.update_entries_BANG_.call(null);
}
}));
});
/**
 * Посчитать итого для каждой строки
 */
cashtime.core.row_totals_from_entries = (function cashtime$core$row_totals_from_entries(entries){
return cljs.core.map.call(null,(function (p1__34295_SHARP_){
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
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),cljs.core.second.call(null,p1__34295_SHARP_));
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
cashtime.core.pair__GT_dim = (function cashtime$core$pair__GT_dim(pair){
var group_id = cljs.core.first.call(null,pair);
var dim_id = cljs.core.second.call(null,pair);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id,new cljs.core.Keyword(null,"dims","dims",-466522889),dim_id], null));
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
/**
 * Распечатать в лог текущее содержимое appstate
 */
cashtime.core.print_appstate = (function cashtime$core$print_appstate(){
return cljs.core.println.call(null,cljs.core.deref.call(null,cashtime.core.appstate));
});
/**
 * Установить новый режим группировки дат
 */
cashtime.core.set_dates_group_mode = (function cashtime$core$set_dates_group_mode(group_mode){
return cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)),group_mode);
});
cashtime.core.dim_td_view = rum.core.build_defc.call(null,(function (dim_group,dim){
return React.createElement("td",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(dim)?new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(dim_group):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim)));
}),null,"dim-td-view");
cashtime.core.tuple_tr_view = rum.core.build_defc.call(null,(function (dim_groups,tuple){
var attrs34296 = cljs.core.map.call(null,(function (dim_group){
var dim_group_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
var pair = cashtime.core.pair_from_tuple.call(null,tuple,dim_group_id);
return rum.core.with_key.call(null,cashtime.core.dim_td_view.call(null,dim_group,cashtime.core.pair__GT_dim.call(null,pair)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim_group_id,cljs.core.second.call(null,pair)], null));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34296))?sablono.interpreter.attributes.call(null,attrs34296):null),((cljs.core.map_QMARK_.call(null,attrs34296))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34296)], null)));
}),null,"tuple-tr-view");
cashtime.core.dim_group_header_view = rum.core.build_defc.call(null,(function (dim_group){
var attrs34297 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs34297))?sablono.interpreter.attributes.call(null,attrs34297):null),((cljs.core.map_QMARK_.call(null,attrs34297))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34297)], null)));
}),null,"dim-group-header-view");
/**
 * Вьюшка для измерений (левой части)
 */
cashtime.core.dimensions_view = rum.core.build_defc.call(null,(function (dim_groups,tuples){
return React.createElement("div",null,React.createElement("table",({"className": "ui very basic padded table"}),React.createElement("thead",null,(function (){var attrs34301 = cljs.core.map.call(null,(function (p1__34298_SHARP_){
return rum.core.with_key.call(null,cashtime.core.dim_group_header_view.call(null,p1__34298_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34298_SHARP_));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34301))?sablono.interpreter.attributes.call(null,attrs34301):null),((cljs.core.map_QMARK_.call(null,attrs34301))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34301)], null)));
})()),(function (){var attrs34300 = cljs.core.map.call(null,(function (p1__34299_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,dim_groups,p1__34299_SHARP_),p1__34299_SHARP_);
}),tuples);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs34300))?sablono.interpreter.attributes.call(null,attrs34300):null),((cljs.core.map_QMARK_.call(null,attrs34300))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,dim_groups), "style": ({"fontWeight": "bold"})}),"\u0418\u0442\u043E\u0433\u043E"))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34300),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,dim_groups), "style": ({"fontWeight": "bold"})}),"\u0418\u0442\u043E\u0433\u043E"))], null)));
})()));
}),null,"dimensions-view");
cashtime.core.date_header_th_view = rum.core.build_defc.call(null,(function (date,d_group_mode){
var attrs34302 = cashtime.moment_utils.print_date_in_needed_format.call(null,date,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs34302))?sablono.interpreter.attributes.call(null,attrs34302):null),((cljs.core.map_QMARK_.call(null,attrs34302))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34302)], null)));
}),null,"date-header-th-view");
cashtime.core.date_headers_tr_view = rum.core.build_defc.call(null,(function (dates,d_group_mode){
var attrs34304 = cljs.core.map.call(null,(function (p1__34303_SHARP_){
return rum.core.with_key.call(null,cashtime.core.date_header_th_view.call(null,p1__34303_SHARP_,d_group_mode),p1__34303_SHARP_);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34304))?sablono.interpreter.attributes.call(null,attrs34304):null),((cljs.core.map_QMARK_.call(null,attrs34304))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34304)], null)));
}),null,"date-headers-tr-view");
/**
 * Вьюшка для вывода суммы записи
 */
cashtime.core.entry_value_view = rum.core.build_defc.call(null,(function (value){
var attrs34305 = (cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fact-value","span.fact-value",-1007752615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value) > (0)))?"positive":"negative")], null),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value))], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34305))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value-cell"], null)], null),attrs34305)):({"className": "value-cell"})),((cljs.core.map_QMARK_.call(null,attrs34305))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plan-value","span.plan-value",1675314184),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value))], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34305),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plan-value","span.plan-value",1675314184),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value))], null):null))], null)));
}),null,"entry-value-view");
cashtime.core.value_cell_td_view = rum.core.build_defc.call(null,(function (value){
var attrs34306 = (cljs.core.truth_(value)?cashtime.core.entry_value_view.call(null,value):null);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs34306))?sablono.interpreter.attributes.call(null,attrs34306):null),((cljs.core.map_QMARK_.call(null,attrs34306))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34306)], null)));
}),null,"value-cell-td-view");
cashtime.core.values_row_tr_view = rum.core.build_defc.call(null,(function (dates,date_values){
var attrs34307 = cljs.core.map.call(null,(function (d){
return rum.core.with_key.call(null,cashtime.core.value_cell_td_view.call(null,cljs.core.get.call(null,date_values,d)),d);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34307))?sablono.interpreter.attributes.call(null,attrs34307):null),((cljs.core.map_QMARK_.call(null,attrs34307))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34307)], null)));
}),null,"values-row-tr-view");
/**
 * Вьюшка для записей и дат (основная часть)
 */
cashtime.core.entries_view = rum.core.build_defc.call(null,(function (entries,d_params){
var dates = cashtime.core.distinct_dates_from_entries.call(null,entries);
var d_group_mode = new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006).cljs$core$IFn$_invoke$arity$1(d_params);
return React.createElement("table",({"className": "ui very basic padded celled single line table"}),(function (){var attrs34309 = cashtime.core.date_headers_tr_view.call(null,dates,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"thead",((cljs.core.map_QMARK_.call(null,attrs34309))?sablono.interpreter.attributes.call(null,attrs34309):null),((cljs.core.map_QMARK_.call(null,attrs34309))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34309)], null)));
})(),(function (){var attrs34310 = cljs.core.map.call(null,((function (dates,d_group_mode){
return (function (p__34313){
var vec__34314 = p__34313;
var tuple = cljs.core.nth.call(null,vec__34314,(0),null);
var date_values = cljs.core.nth.call(null,vec__34314,(1),null);
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values),tuple);
});})(dates,d_group_mode))
,entries);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs34310))?sablono.interpreter.attributes.call(null,attrs34310):null),((cljs.core.map_QMARK_.call(null,attrs34310))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34311 = cljs.core.map.call(null,((function (attrs34310,dates,d_group_mode){
return (function (p1__34308_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__34308_SHARP_)], null);
});})(attrs34310,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34311))?sablono.interpreter.attributes.call(null,attrs34311):null),((cljs.core.map_QMARK_.call(null,attrs34311))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34311)], null)));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34310),(function (){var attrs34312 = cljs.core.map.call(null,((function (attrs34310,dates,d_group_mode){
return (function (p1__34308_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__34308_SHARP_)], null);
});})(attrs34310,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs34312))?sablono.interpreter.attributes.call(null,attrs34312):null),((cljs.core.map_QMARK_.call(null,attrs34312))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34312)], null)));
})()], null)));
})());
}),null,"entries-view");
/**
 * Вьюшка для Итого по строкам
 */
cashtime.core.row_totals_view = rum.core.build_defc.call(null,(function (totals){
return React.createElement("table",({"className": "ui very basic padded table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u0418\u0442\u043E\u0433\u043E \u0437\u0430 \u043C\u0435\u0441\u044F\u0446"))),(function (){var attrs34320 = cljs.core.map.call(null,(function (p1__34317_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.total-cell","td.total-cell",-858845168),cashtime.core.entry_value_view.call(null,p1__34317_SHARP_)], null)], null);
}),totals);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs34320))?sablono.interpreter.attributes.call(null,attrs34320):null),((cljs.core.map_QMARK_.call(null,attrs34320))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,(function (){var attrs34321 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs34320){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs34320))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),totals));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs34321))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs34321)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs34321))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34321)], null)));
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34320),React.createElement("tr",null,(function (){var attrs34322 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs34320){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs34320))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),totals));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs34322))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs34322)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs34322))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34322)], null)));
})())], null)));
})());
}),null,"row-totals-view");
/**
 * Вьюшка для управления временем
 */
cashtime.core.timeline_panel_view = rum.core.build_defc.call(null,(function (date_params){
var d_group_mode = new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006).cljs$core$IFn$_invoke$arity$1(date_params);
var get_group_params = ((function (d_group_mode){
return (function (gm){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,d_group_mode,gm))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (d_group_mode){
return (function (){
return cashtime.core.set_dates_group_mode.call(null,gm);
});})(d_group_mode))
], null);
});})(d_group_mode))
;
return React.createElement("div",null,React.createElement("a",({"className": "ui labeled icon tiny button"}),React.createElement("i",({"className": "left arrow icon"})),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0440\u0435\u0435"),React.createElement("div",({"className": "ui text right floated compact menu"}),React.createElement("div",({"className": "header item"}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E "),(function (){var attrs34327 = get_group_params.call(null,new cljs.core.Keyword(null,"by-day","by-day",-1253777753));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs34327))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs34327)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs34327))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043D\u044F\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34327),"\u0434\u043D\u044F\u043C"], null)));
})(),(function (){var attrs34328 = get_group_params.call(null,new cljs.core.Keyword(null,"by-month","by-month",542266331));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs34328))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs34328)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs34328))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34328),"\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null)));
})(),(function (){var attrs34329 = get_group_params.call(null,new cljs.core.Keyword(null,"by-year","by-year",-655938968));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs34329))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs34329)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs34329))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0433\u043E\u0434\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34329),"\u0433\u043E\u0434\u0430\u043C"], null)));
})()));
}),null,"timeline-panel-view");
cashtime.core.main_view = rum.core.build_defc.call(null,(function (){
var entries = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries","entries",-86943161)], null)));
var row_totals = cashtime.core.row_totals_from_entries.call(null,entries);
var d_params = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560)], null)));
return React.createElement("div",({"className": "ui padded grid"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "column"}),React.createElement("div",({"onClick": ((function (entries,row_totals,d_params){
return (function (){
return cashtime.core.refresh_random_data.call(null);
});})(entries,row_totals,d_params))
, "className": "ui button"}),"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435"),React.createElement("div",({"onClick": ((function (entries,row_totals,d_params){
return (function (){
return cashtime.core.print_appstate.call(null);
});})(entries,row_totals,d_params))
, "className": "ui button"}),"\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C"))),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),React.createElement("div",({"className": "four wide column"}),React.createElement("div",({"className": "search-div"}),React.createElement("div",({"className": "ui fluid input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text"}))))),(function (){var attrs34332 = cashtime.core.timeline_panel_view.call(null,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34332))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ten","wide","column"], null)], null),attrs34332)):({"className": "ten wide column"})),((cljs.core.map_QMARK_.call(null,attrs34332))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34332)], null)));
})(),React.createElement("div",({"className": "two wide column"}))),React.createElement("div",({"className": "stretched bottom aligned row"}),React.createElement("div",({"className": "four wide column"}),(function (){var attrs34335 = cashtime.core.dimensions_view.call(null,cljs.core.vals.call(null,rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null)))),cashtime.core.tuples_from_entries.call(null,entries));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34335))?sablono.interpreter.attributes.call(null,attrs34335):null),((cljs.core.map_QMARK_.call(null,attrs34335))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34335)], null)));
})()),React.createElement("div",({"className": "ten wide column"}),(function (){var attrs34336 = cashtime.core.entries_view.call(null,entries,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34336))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["values-div"], null)], null),attrs34336)):({"className": "values-div"})),((cljs.core.map_QMARK_.call(null,attrs34336))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34336)], null)));
})()),React.createElement("div",({"className": "two wide column"}),(function (){var attrs34337 = cashtime.core.row_totals_view.call(null,row_totals);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34337))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row-totals-div"], null)], null),attrs34337)):({"className": "row-totals-div"})),((cljs.core.map_QMARK_.call(null,attrs34337))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34337)], null)));
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"main-view");
rum.core.mount.call(null,cashtime.core.main_view.call(null),document.getElementById("main"));
cashtime.core.init = (function cashtime$core$init(){
cljs.core.println.call(null,"init core");

cashtime.core.refresh_random_data.call(null);

cashtime.core.init_watchers.call(null);

moment.locale("ru");

return rum.core.mount.call(null,cashtime.core.main_view.call(null),document.getElementById("main"));
});
cashtime.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1489668912734