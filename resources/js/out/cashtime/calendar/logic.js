// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.calendar.logic');
goog.require('cljs.core');
goog.require('cashtime.utils');
goog.require('cashtime.moment_utils');
goog.require('cashtime.random_utils');
goog.require('rum.core');
goog.require('cashtime.tuples');
cashtime.calendar.logic.default_entry_params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"inflow","inflow",-967791552),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(0),new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),(1),(2),(3)], null),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date())], null);
if(typeof cashtime.calendar.logic.appstate !== 'undefined'){
} else {
cashtime.calendar.logic.appstate = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503),new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175),new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446),new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764),new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140),new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111),new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396),new cljs.core.Keyword(null,"entry-modal-params","entry-modal-params",1196129116)],[cashtime.calendar.logic.default_entry_params,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),(1),new cljs.core.Keyword(null,"desc?","desc?",-713120712),false], null),null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006),new cljs.core.Keyword(null,"by-day","by-day",-1253777753)], null),cashtime.tuples.test_avail_dim_groups,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"add-item","add-item",715813891),new cljs.core.Keyword(null,"title","title",636505583),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"], null)]));
}
cashtime.calendar.logic.state_cursor = cljs.core.partial.call(null,rum.core.cursor_in,cashtime.calendar.logic.appstate);
cashtime.calendar.logic.randomizer_params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"from-d","from-d",1878394019),(new Date((2016),(2),(1))),new cljs.core.Keyword(null,"to-d","to-d",1644536766),(new moment()).add((2),"M").toDate(),new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226),(10),new cljs.core.Keyword(null,"max-vals-amount","max-vals-amount",748056679),(20),new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195),(200),new cljs.core.Keyword(null,"min-summ","min-summ",804503238),(100),new cljs.core.Keyword(null,"max-summ","max-summ",1898652840),(100000)], null);
/**
 * Получить случайную плоскую запись
 */
cashtime.calendar.logic.random_plain_entry = (function cashtime$calendar$logic$random_plain_entry(dim_group_options,from_d,to_d,min_summ,max_summ){
var date = cashtime.random_utils.random_iso_date.call(null,from_d,to_d);
return ((function (date){
return (function (p1__56133_SHARP_){
if(cljs.core.truth_(cashtime.moment_utils.after_today_QMARK_.call(null,date))){
return cljs.core.assoc.call(null,p1__56133_SHARP_,new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"plan","plan",1118952668));
} else {
return cljs.core.assoc.call(null,p1__56133_SHARP_,new cljs.core.Keyword(null,"v-type","v-type",-140288412),cashtime.random_utils.rand_nth_by_percentage.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(97),new cljs.core.Keyword(null,"plan","plan",1118952668),(3)], null)));
}
});})(date))
.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dims","dims",-466522889),cljs.core.rand_nth.call(null,dim_group_options),new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),cashtime.random_utils.rand_nth_by_percentage.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inflow","inflow",-967791552),(40),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),(60)], null)),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),cashtime.random_utils.rand_from_to.call(null,min_summ,max_summ)], null));
});
/**
 * Получить случайные плоские данные по записям
 */
cashtime.calendar.logic.random_plain_entries = (function cashtime$calendar$logic$random_plain_entries(dim_groups,p__56134){
var map__56137 = p__56134;
var map__56137__$1 = ((((!((map__56137 == null)))?((((map__56137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56137):map__56137);
var from_d = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"from-d","from-d",1878394019));
var to_d = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"to-d","to-d",1644536766));
var max_row_amount = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226));
var min_summ = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"min-summ","min-summ",804503238));
var max_summ = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"max-summ","max-summ",1898652840));
var max_entries = cljs.core.get.call(null,map__56137__$1,new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195));
var dim_group_options = cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_row_amount),((function (map__56137,map__56137__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.random_utils.random_tuple.call(null,dim_groups);
});})(map__56137,map__56137__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
return cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_entries),((function (dim_group_options,map__56137,map__56137__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.calendar.logic.random_plain_entry.call(null,dim_group_options,from_d,to_d,min_summ,max_summ);
});})(dim_group_options,map__56137,map__56137__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
});
/**
 * Отсортировать строки записей согласно настройкам сортировки групп
 *   (отдельно записи оттоков и притоков)
 */
cashtime.calendar.logic.sort_entries_BANG_ = (function cashtime$calendar$logic$sort_entries_BANG_(){
var sort_dim_params = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
var avail_dim_groups = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null)));
cljs.core.swap_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)),((function (sort_dim_params,avail_dim_groups){
return (function (prev_e){
return cashtime.tuples.get_sorted_entries.call(null,prev_e,avail_dim_groups,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_dim_params),new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_dim_params));
});})(sort_dim_params,avail_dim_groups))
);

return cljs.core.swap_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)),((function (sort_dim_params,avail_dim_groups){
return (function (prev_e){
return cashtime.tuples.get_sorted_entries.call(null,prev_e,avail_dim_groups,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_dim_params),new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_dim_params));
});})(sort_dim_params,avail_dim_groups))
);
});
/**
 * Обновить записи в формат.виде
 */
cashtime.calendar.logic.update_entries_BANG_ = (function cashtime$calendar$logic$update_entries_BANG_(){
var plain_entries = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)));
var active_dim_group_ids = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)));
var search_str = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)));
var search_tuple = (cljs.core.truth_(search_str)?cashtime.tuples.get_search_tuple_with_substr.call(null,cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),search_str):null);
var result_plain_entries = cashtime.tuples.filter_plain_entries.call(null,plain_entries,search_tuple);
var sort_dim_params = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)),cashtime.tuples.plain_entries__GT_entries.call(null,cljs.core.filter.call(null,((function (plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params){
return (function (p1__56139_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532).cljs$core$IFn$_invoke$arity$1(p1__56139_SHARP_),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params))
,result_plain_entries),cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null))),active_dim_group_ids));

cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)),cashtime.tuples.plain_entries__GT_entries.call(null,cljs.core.filter.call(null,((function (plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params){
return (function (p1__56140_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532).cljs$core$IFn$_invoke$arity$1(p1__56140_SHARP_),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params))
,result_plain_entries),cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null))),active_dim_group_ids));

return cashtime.calendar.logic.sort_entries_BANG_.call(null);
});
/**
 * Обновить случайные данные записей
 */
cashtime.calendar.logic.refresh_random_data = (function cashtime$calendar$logic$refresh_random_data(){
var plain_entries = cashtime.calendar.logic.random_plain_entries.call(null,cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),cashtime.calendar.logic.randomizer_params);
return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)),plain_entries);
});
/**
 * Иниц. всех вотчеров
 */
cashtime.calendar.logic.init_watchers = (function cashtime$calendar$logic$init_watchers(){
cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)),new cljs.core.Keyword(null,"plain-entries-watch","plain-entries-watch",-1339776669),(function (k,a,old_s,new_s){
cljs.core.println.call(null,"plain-entries watch");

return cashtime.calendar.logic.update_entries_BANG_.call(null);
}));

cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)),new cljs.core.Keyword(null,"d-group-mode-watch","d-group-mode-watch",712212220),(function (k,a,old_s,new_s){
cljs.core.println.call(null,"watch group mode");

if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.calendar.logic.update_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)),new cljs.core.Keyword(null,"search-str-watch","search-str-watch",-1177097673),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.calendar.logic.update_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)),new cljs.core.Keyword(null,"sort-dim-params-watch","sort-dim-params-watch",1516643479),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.calendar.logic.sort_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)),new cljs.core.Keyword(null,"flow-filter-type-watch","flow-filter-type-watch",1557534140),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.calendar.logic.update_entries_BANG_.call(null);
}
}));

return cljs.core.add_watch.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)),new cljs.core.Keyword(null,"active-dim-group-ids-watch","active-dim-group-ids-watch",-563053546),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.calendar.logic.update_entries_BANG_.call(null);
}
}));
});
cashtime.calendar.logic.pair__GT_dim = (function cashtime$calendar$logic$pair__GT_dim(pair){
var group_id = cljs.core.first.call(null,pair);
var dim_id = cljs.core.second.call(null,pair);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id,new cljs.core.Keyword(null,"dims","dims",-466522889),dim_id], null));
});
/**
 * Получить из всех записей id используемых измерений
 */
cashtime.calendar.logic.get_used_dims_ids = (function cashtime$calendar$logic$get_used_dims_ids(entries){
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.map.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),entries)));
});
/**
 * Посчитать итого для каждой строки
 */
cashtime.calendar.logic.row_totals_from_entries = (function cashtime$calendar$logic$row_totals_from_entries(entries){
return cljs.core.map.call(null,(function (p1__56141_SHARP_){
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
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),new cljs.core.Keyword(null,"date-values","date-values",194611847).cljs$core$IFn$_invoke$arity$1(p1__56141_SHARP_));
}),entries);
});
/**
 * Получить сортированный список уникальных дат из списка записей
 */
cashtime.calendar.logic.distinct_dates_from_entries = (function cashtime$calendar$logic$distinct_dates_from_entries(entries){
return cashtime.moment_utils.sort_dates.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (coll,dates){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.cons.call(null,coll,dates));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.keys,cljs.core.map.call(null,new cljs.core.Keyword(null,"date-values","date-values",194611847),entries)))));
});
/**
 * Получить итого по датам (по столбцу т.е.)
 */
cashtime.calendar.logic.date_totals_from_entries = (function cashtime$calendar$logic$date_totals_from_entries(dates,entries){
return cljs.core.map.call(null,(function (d){
return cljs.core.reduce.call(null,(function (m,p__56145){
var map__56146 = p__56145;
var map__56146__$1 = ((((!((map__56146 == null)))?((((map__56146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56146):map__56146);
var tuple = cljs.core.get.call(null,map__56146__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__56146__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,(function (){var or__24760__auto__ = cljs.core.get_in.call(null,date_values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"fact","fact",-799816531)], null));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,(function (){var or__24760__auto__ = cljs.core.get_in.call(null,date_values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"plan","plan",1118952668)], null));
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (0);
}
})());
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),entries);
}),dates);
});
/**
 * Проверка, что дата является текущей (с учетом группировки по дням/месяцам/годам)
 */
cashtime.calendar.logic.is_current_date_QMARK_ = (function cashtime$calendar$logic$is_current_date_QMARK_(d,d_group_mode){
var current_iso_str_d = cashtime.moment_utils.current_date_iso_str.call(null);
var G__56149 = (((d_group_mode instanceof cljs.core.Keyword))?d_group_mode.fqn:null);
switch (G__56149) {
case "by-day":
return cljs.core._EQ_.call(null,d,current_iso_str_d);

break;
case "by-month":
return (cljs.core._EQ_.call(null,(new moment(d)).year(),(new moment(current_iso_str_d)).year())) && (cljs.core._EQ_.call(null,(new moment(d)).month(),(new moment(current_iso_str_d)).month()));

break;
case "by-year":
return cljs.core._EQ_.call(null,(new moment(d)).year(),(new moment(current_iso_str_d)).year());

break;
default:
return false;

}
});
/**
 * Распечатать в лог текущее содержимое appstate
 */
cashtime.calendar.logic.print_appstate = (function cashtime$calendar$logic$print_appstate(){
return cljs.core.println.call(null,cljs.core.deref.call(null,cashtime.calendar.logic.appstate));
});
goog.exportSymbol('cashtime.calendar.logic.print_appstate', cashtime.calendar.logic.print_appstate);
/**
 * Установить новый режим группировки дат
 */
cashtime.calendar.logic.set_dates_group_mode = (function cashtime$calendar$logic$set_dates_group_mode(group_mode){
return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)),group_mode);
});
/**
 * Новое значение в поисковой строке
 */
cashtime.calendar.logic.set_search_str = (function cashtime$calendar$logic$set_search_str(s){
return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)),s);
});
/**
 * Сортировать по группе измерения
 */
cashtime.calendar.logic.set_dim_group_sort = (function cashtime$calendar$logic$set_dim_group_sort(dim_group_id){
var sort_params_c = cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_params_c)),dim_group_id)){
return cljs.core.swap_BANG_.call(null,sort_params_c,((function (sort_params_c){
return (function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"desc?","desc?",-713120712),cljs.core.not.call(null,new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(p)));
});})(sort_params_c))
);
} else {
return cljs.core.reset_BANG_.call(null,sort_params_c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),dim_group_id,new cljs.core.Keyword(null,"desc?","desc?",-713120712),false], null));
}
});
/**
 * Отфильтровать тип потока (все/только расходы/только доходы)
 */
cashtime.calendar.logic.set_flow_filter_type = (function cashtime$calendar$logic$set_flow_filter_type(flow_type){
cljs.core.println.call(null,"filter flow type: ",flow_type);

return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)),flow_type);
});
/**
 * Переключить группу измерений (вкл/откл)
 */
cashtime.calendar.logic.toggle_dimension_group = (function cashtime$calendar$logic$toggle_dimension_group(dim_group){
cljs.core.println.call(null,"toggle-dimension-group: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));

return cljs.core.swap_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)),(function (active_dims){
if(cljs.core.contains_QMARK_.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group))){
return cljs.core.disj.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));
} else {
return cljs.core.conj.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));
}
}));
});
/**
 * Открыть модальное окно добавления новой записи
 */
cashtime.calendar.logic.add_new_item = (function cashtime$calendar$logic$add_new_item(){
cljs.core.println.call(null,"add-new-item");

return $("#entry-modal").modal("show");
});
/**
 * Установить значение суммы в модальном окне
 */
cashtime.calendar.logic.set_current_v_summ = (function cashtime$calendar$logic$set_current_v_summ(v_summ){
cljs.core.println.call(null,"set-current-v-summ ",v_summ);

return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754)], null)),v_summ);
});
/**
 * Установить значение даты в модальном окне
 */
cashtime.calendar.logic.set_current_date = (function cashtime$calendar$logic$set_current_date(date){
cljs.core.println.call(null,"set-current-date ",date);

return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"date","date",-1463434462)], null)),date);
});
/**
 * Поменять режим план/факт в модальном окне
 */
cashtime.calendar.logic.toggle_current_v_type = (function cashtime$calendar$logic$toggle_current_v_type(v_type){
cljs.core.println.call(null,"toggle-current-v-type ",v_type);

return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"v-type","v-type",-140288412)], null)),v_type);
});
/**
 * Поменять режим приток/отток в модальном окне
 */
cashtime.calendar.logic.toggle_current_v_flow = (function cashtime$calendar$logic$toggle_current_v_flow(v_flow){
cljs.core.println.call(null,"toggle-current-v-flow ",v_flow);

return cljs.core.reset_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532)], null)),v_flow);
});
/**
 * Изменить значение в дропдауне для измерения в модальном окне
 */
cashtime.calendar.logic.change_modal_dim_to = (function cashtime$calendar$logic$change_modal_dim_to(dim_group_id,dim_id){
cljs.core.println.call(null,"change modal dim to :",dim_group_id,", ",dim_id);

return cljs.core.swap_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999),new cljs.core.Keyword(null,"dims","dims",-466522889)], null)),(function (d){
return cljs.core.assoc.call(null,d,dim_group_id,dim_id);
}));
});
/**
 * Сохранить запись через модальное окно
 */
cashtime.calendar.logic.save_item_from_modal = (function cashtime$calendar$logic$save_item_from_modal(){
cljs.core.println.call(null,"saved item from modal");

var entry_params = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999)], null)));
var modal_params = cljs.core.deref.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entry-modal-params","entry-modal-params",1196129116)], null)));
var result_entry = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,entry_params,new cljs.core.Keyword(null,"dims","dims",-466522889),((function (entry_params,modal_params){
return (function (dims){
return cljs.core.reduce_kv.call(null,((function (entry_params,modal_params){
return (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(entry_params,modal_params))
,cljs.core.PersistentArrayMap.EMPTY,dims);
});})(entry_params,modal_params))
),new cljs.core.Keyword(null,"date","date",-1463434462),((function (entry_params,modal_params){
return (function (p1__56151_SHARP_){
return p1__56151_SHARP_.toISOString();
});})(entry_params,modal_params))
),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),((function (entry_params,modal_params){
return (function (p1__56152_SHARP_){
return parseFloat(p1__56152_SHARP_);
});})(entry_params,modal_params))
);
cljs.core.println.call(null,entry_params);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(modal_params),new cljs.core.Keyword(null,"add-item","add-item",715813891))){
return cljs.core.swap_BANG_.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)),((function (entry_params,modal_params,result_entry){
return (function (pe){
return cljs.core.conj.call(null,pe,result_entry);
});})(entry_params,modal_params,result_entry))
);
} else {
return null;
}
});

//# sourceMappingURL=logic.js.map?rel=1491387772716