// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.core');
goog.require('cljs.core');
goog.require('cashtime.utils');
goog.require('cashtime.moment_utils');
goog.require('cashtime.dom_utils');
goog.require('cashtime.random_utils');
goog.require('rum.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"hey there, cash time!");
if(typeof cashtime.core.appstate !== 'undefined'){
} else {
cashtime.core.appstate = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111),new cljs.core.PersistentArrayMap(null, 4, [(1),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-1",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0425\u0430\u043B\u044B\u043A \u0411\u0430\u043D\u043A"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0420\u0435\u043A\u043B\u0430\u043C\u0430.\u043A\u0437"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"TOO \u0412\u0435\u043A\u0442\u043E\u0440"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0418\u041F \u0418\u0432\u0430\u043D\u043E\u0432"], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0410\u0441\u044B\u043B\u0445\u0430\u043D\u043E\u0432 \u041C.\u0410."], null),(6),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"name","name",1843675177),"\u0422\u041E\u041E \u0414\u0435\u043A\u043E\u0440"], null),(7),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"name","name",1843675177),"Landing Ltd."], null)], null)], null),(2),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u044B",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-2",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 5, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 1"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 2"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433. \u043E\u0442 20.03.17"], null),(4),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"11042015 \u0434\u043E\u0433."], null),(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"name","name",1843675177),"\u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u21164342"], null)], null)], null),(3),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0447\u0435\u0442\u0430",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-3",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Qazkom"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0447\u0435\u0442"], null),(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"\u0412\u0430\u043B\u044E\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"], null)], null)], null),(4),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"order-index","order-index",-1483984839),(4),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u0438",new cljs.core.Keyword(null,"css-class","css-class",-919455334),"dim-4",new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u044F 1"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"\u0421\u0442\u0430\u0442\u044C\u044F 2"], null)], null)], null)], null),new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null),new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764),null,new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-id","group-id",-1316082778),(1),new cljs.core.Keyword(null,"desc?","desc?",-713120712),false], null),new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006),new cljs.core.Keyword(null,"by-day","by-day",-1253777753)], null)], null));
}
cashtime.core.state_cursor = cljs.core.partial.call(null,rum.core.cursor_in,cashtime.core.appstate);
cashtime.core.randomizer_params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"from-d","from-d",1878394019),(new Date((2016),(2),(1))),new cljs.core.Keyword(null,"to-d","to-d",1644536766),(new Date()),new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226),(10),new cljs.core.Keyword(null,"max-vals-amount","max-vals-amount",748056679),(20),new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195),(200),new cljs.core.Keyword(null,"min-summ","min-summ",804503238),(100),new cljs.core.Keyword(null,"max-summ","max-summ",1898652840),(100000)], null);
/**
 * Получить случайную плоскую запись
 */
cashtime.core.random_plain_entry = (function cashtime$core$random_plain_entry(dim_group_options,from_d,to_d,min_summ,max_summ){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),cljs.core.rand_nth.call(null,dim_group_options),new cljs.core.Keyword(null,"date","date",-1463434462),cashtime.random_utils.random_iso_date.call(null,from_d,to_d),new cljs.core.Keyword(null,"v-type","v-type",-140288412),cashtime.random_utils.rand_nth_by_percentage.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(95),new cljs.core.Keyword(null,"plan","plan",1118952668),(5)], null)),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),cashtime.random_utils.rand_nth_by_percentage.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inflow","inflow",-967791552),(40),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),(60)], null)),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),cashtime.random_utils.rand_from_to.call(null,min_summ,max_summ)], null);
});
/**
 * Получить случайные плоские данные по записям
 */
cashtime.core.random_plain_entries = (function cashtime$core$random_plain_entries(dim_groups,p__37185){
var map__37188 = p__37185;
var map__37188__$1 = ((((!((map__37188 == null)))?((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37188):map__37188);
var from_d = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"from-d","from-d",1878394019));
var to_d = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"to-d","to-d",1644536766));
var max_row_amount = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"max-row-amount","max-row-amount",2058588226));
var min_summ = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"min-summ","min-summ",804503238));
var max_summ = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"max-summ","max-summ",1898652840));
var max_entries = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"max-entries","max-entries",-1907149195));
var dim_group_options = cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_row_amount),((function (map__37188,map__37188__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.random_utils.random_tuple.call(null,dim_groups);
});})(map__37188,map__37188__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
return cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_entries),((function (dim_group_options,map__37188,map__37188__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries){
return (function (){
return cashtime.core.random_plain_entry.call(null,dim_group_options,from_d,to_d,min_summ,max_summ);
});})(dim_group_options,map__37188,map__37188__$1,from_d,to_d,max_row_amount,min_summ,max_summ,max_entries))
);
});
/**
 * Записи в негруп.виде
 */
cashtime.core.test_plain_entries = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 1, [(1),(2)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-07-01T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(10000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(1)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-07-01T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"inflow","inflow",-967791552),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(5000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(3)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-07-07T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"inflow","inflow",-967791552),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(25000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(3)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-02-01T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(1111)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 2, [(1),(3),(2),(3)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-02-03T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(3333)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentArrayMap(null, 1, [(2),(1)], null),new cljs.core.Keyword(null,"date","date",-1463434462),"2017-07-07T00:00:00Z",new cljs.core.Keyword(null,"v-type","v-type",-140288412),new cljs.core.Keyword(null,"fact","fact",-799816531),new cljs.core.Keyword(null,"v-flow","v-flow",1040340532),new cljs.core.Keyword(null,"outflow","outflow",-2135051524),new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754),(2200)], null)], null);
cashtime.core.test_entries = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 2, [(1),(2),(2),(3)], null),new cljs.core.Keyword(null,"date-values","date-values",194611847),new cljs.core.PersistentArrayMap(null, 3, ["2017-07-01T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(10000),new cljs.core.Keyword(null,"plan","plan",1118952668),(5000)], null),"2017-06-08T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(8000),new cljs.core.Keyword(null,"plan","plan",1118952668),null], null),"2017-07-03T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(18000),new cljs.core.Keyword(null,"plan","plan",1118952668),(2000)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 2, [(1),(3),(3),(1)], null),new cljs.core.Keyword(null,"date-values","date-values",194611847),new cljs.core.PersistentArrayMap(null, 1, ["2017-06-05T00:00:00Z",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(4000),new cljs.core.Keyword(null,"plan","plan",1118952668),(-15000)], null)], null)], null)], null);
/**
 * Получить список всех таплов измерений внутри записей
 */
cashtime.core.tuples_from_entries = (function cashtime$core$tuples_from_entries(entries){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),entries);
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
 * Обновить дату внутри плоских данных чтобы сгруппировать по дням/месяцам/годам и т.д.
 */
cashtime.core.update_plain_entry_date_for_group = (function cashtime$core$update_plain_entry_date_for_group(plain_entry,d_group_mode){
var G__37191 = (((d_group_mode instanceof cljs.core.Keyword))?d_group_mode.fqn:null);
switch (G__37191) {
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
cashtime.core.update_plain_entry_dims_for_avails = (function cashtime$core$update_plain_entry_dims_for_avails(plain_entry,active_dim_group_ids){
return cljs.core.update.call(null,plain_entry,new cljs.core.Keyword(null,"dims","dims",-466522889),(function (t){
return cljs.core.select_keys.call(null,t,active_dim_group_ids);
}));
});
/**
 * Конвертировать плоские данные по записям в форматированные
 */
cashtime.core.plain_entries__GT_entries = (function cashtime$core$plain_entries__GT_entries(plain_entries,d_group_mode,active_dim_group_ids){
return cljs.core.reduce_kv.call(null,(function (vc,tuple,d_values){
return cljs.core.conj.call(null,vc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),tuple,new cljs.core.Keyword(null,"date-values","date-values",194611847),d_values], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (m,e){
if(cljs.core.not.call(null,cashtime.utils.nil_or_empty_QMARK_.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(e)))){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"v-type","v-type",-140288412).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core._PLUS_,(function (){var or__24762__auto__ = new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return (0);
}
})());
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__37193_SHARP_){
return cashtime.core.update_plain_entry_dims_for_avails.call(null,cashtime.core.update_plain_entry_date_for_group.call(null,p1__37193_SHARP_,d_group_mode),active_dim_group_ids);
}),plain_entries)));
});
/**
 * Таплы с id измерений в таплы с названиями измерений
 */
cashtime.core.tuple_w_ids__GT_tuple_w_names = (function cashtime$core$tuple_w_ids__GT_tuple_w_names(all_dim_groups,tuple_w_ids){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,all_dim_groups,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"dims","dims",-466522889),v], null))));
}),cljs.core.PersistentArrayMap.EMPTY,tuple_w_ids);
});
/**
 * Сортировать список таплов по названиям в измерении
 */
cashtime.core.sort_tuples = (function cashtime$core$sort_tuples(tuples,dim_groups,sort_gr_id,desc_QMARK_){
return new cljs.core.Keyword(null,"sorted-tuples-w-ids","sorted-tuples-w-ids",-1171863308).cljs$core$IFn$_invoke$arity$1((function (p1__37196_SHARP_){
return cljs.core.assoc.call(null,p1__37196_SHARP_,new cljs.core.Keyword(null,"sorted-tuples-w-ids","sorted-tuples-w-ids",-1171863308),cljs.core.map.call(null,(function (t){
return cashtime.utils.k_of_v.call(null,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500).cljs$core$IFn$_invoke$arity$1(p1__37196_SHARP_),t);
}),new cljs.core.Keyword(null,"sorted-tuples-w-names","sorted-tuples-w-names",-100667312).cljs$core$IFn$_invoke$arity$1(p1__37196_SHARP_)));
}).call(null,(function (p1__37195_SHARP_){
return cljs.core.assoc.call(null,p1__37195_SHARP_,new cljs.core.Keyword(null,"sorted-tuples-w-names","sorted-tuples-w-names",-100667312),cljs.core.sort.call(null,(function (t1,t2){
return (cljs.core.truth_(desc_QMARK_)?cljs.core._GT_:cljs.core._LT_).call(null,(function (){var or__24762__auto__ = cljs.core.get.call(null,t1,sort_gr_id);
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return "";
}
})(),(function (){var or__24762__auto__ = cljs.core.get.call(null,t2,sort_gr_id);
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return "";
}
})());
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500).cljs$core$IFn$_invoke$arity$1(p1__37195_SHARP_))));
}).call(null,(function (p1__37194_SHARP_){
return cljs.core.assoc.call(null,p1__37194_SHARP_,new cljs.core.Keyword(null,"tuples-w-names-map","tuples-w-names-map",1079788500),cljs.core.reduce.call(null,(function (m,tuple){
return cljs.core.assoc.call(null,m,tuple,cashtime.core.tuple_w_ids__GT_tuple_w_names.call(null,dim_groups,tuple));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tuples-w-ids","tuples-w-ids",-72323961).cljs$core$IFn$_invoke$arity$1(p1__37194_SHARP_)));
}).call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tuples-w-ids","tuples-w-ids",-72323961),tuples)))));
});
/**
 * Получить отсортированные записи по названиям измерений в нужной группе
 */
cashtime.core.get_sorted_entries = (function cashtime$core$get_sorted_entries(entries,dim_groups,sort_gr_id,desc_QMARK_){
if(cljs.core.truth_(sort_gr_id)){
return (function (ind_hm){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (t1,t2){
return (cljs.core.get.call(null,ind_hm,t1) < cljs.core.get.call(null,ind_hm,t2));
}),entries);
}).call(null,cashtime.utils.indexed_hashmap_of_coll.call(null,cashtime.core.sort_tuples.call(null,cashtime.core.tuples_from_entries.call(null,entries),dim_groups,sort_gr_id,desc_QMARK_)));
} else {
return entries;
}
});
/**
 * Получить хмэп вида {id-группы [id-измерений]}, у которых есть в названиях подстрока
 */
cashtime.core.get_search_tuple_with_substr = (function cashtime$core$get_search_tuple_with_substr(dim_groups,ss){
return cljs.core.reduce.call(null,(function (m,dg){
var ids = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,(function (p1__37197_SHARP_){
return cashtime.utils.has_substr_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__37197_SHARP_),ss);
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
cashtime.core.pair_in_search_tuple_QMARK_ = (function cashtime$core$pair_in_search_tuple_QMARK_(pair,search_tuples){
if(cljs.core.truth_(pair)){
return cljs.core.boolean$.call(null,cashtime.utils.in_QMARK_.call(null,cljs.core.get.call(null,search_tuples,cljs.core.first.call(null,pair)),cljs.core.second.call(null,pair)));
} else {
return null;
}
});
/**
 * Содержится ли в тапле хоть одна пара удовл. таплу поиска
 */
cashtime.core.tuple_in_search_tuple_QMARK_ = (function cashtime$core$tuple_in_search_tuple_QMARK_(tuple,search_tuple){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__37198_SHARP_){
return cashtime.core.pair_in_search_tuple_QMARK_.call(null,p1__37198_SHARP_,search_tuple);
}),cljs.core.vec.call(null,tuple)));
});
/**
 * Получить из всех записей id используемых измерений
 */
cashtime.core.get_used_dims_ids = (function cashtime$core$get_used_dims_ids(entries){
return cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.map.call(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),entries)));
});
/**
 * Отсортировать строки записей согласно настройкам сортировки групп
 *   (отдельно записи оттоков и притоков)
 */
cashtime.core.sort_entries_BANG_ = (function cashtime$core$sort_entries_BANG_(){
var sort_dim_params = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
var avail_dim_groups = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null)));
cljs.core.swap_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)),((function (sort_dim_params,avail_dim_groups){
return (function (prev_e){
return cashtime.core.get_sorted_entries.call(null,prev_e,avail_dim_groups,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_dim_params),new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_dim_params));
});})(sort_dim_params,avail_dim_groups))
);

return cljs.core.swap_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)),((function (sort_dim_params,avail_dim_groups){
return (function (prev_e){
return cashtime.core.get_sorted_entries.call(null,prev_e,avail_dim_groups,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_dim_params),new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_dim_params));
});})(sort_dim_params,avail_dim_groups))
);
});
/**
 * Отфильтровать (если нужно) плоские данные
 */
cashtime.core.filter_plain_entries = (function cashtime$core$filter_plain_entries(plain_entries,search_tuple){
return (function (pe){
if(cljs.core.truth_(search_tuple)){
return cljs.core.filter.call(null,(function (p1__37199_SHARP_){
return cashtime.core.tuple_in_search_tuple_QMARK_.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(p1__37199_SHARP_),search_tuple);
}),pe);
} else {
return pe;
}
}).call(null,plain_entries);
});
/**
 * Обновить записи в формат.виде
 */
cashtime.core.update_entries_BANG_ = (function cashtime$core$update_entries_BANG_(){
var plain_entries = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain-entries","plain-entries",1293256175)], null)));
var active_dim_group_ids = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)));
var search_str = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)));
var search_tuple = (cljs.core.truth_(search_str)?cashtime.core.get_search_tuple_with_substr.call(null,cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null))),search_str):null);
var result_plain_entries = cashtime.core.filter_plain_entries.call(null,plain_entries,search_tuple);
var sort_dim_params = cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)),cashtime.core.plain_entries__GT_entries.call(null,cljs.core.filter.call(null,((function (plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params){
return (function (p1__37200_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532).cljs$core$IFn$_invoke$arity$1(p1__37200_SHARP_),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params))
,result_plain_entries),cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null))),active_dim_group_ids));

cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)),cashtime.core.plain_entries__GT_entries.call(null,cljs.core.filter.call(null,((function (plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params){
return (function (p1__37201_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532).cljs$core$IFn$_invoke$arity$1(p1__37201_SHARP_),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(plain_entries,active_dim_group_ids,search_str,search_tuple,result_plain_entries,sort_dim_params))
,result_plain_entries),cljs.core.deref.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null))),active_dim_group_ids));

return cashtime.core.sort_entries_BANG_.call(null);
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
 * Посчитать итого для каждой строки
 */
cashtime.core.row_totals_from_entries = (function cashtime$core$row_totals_from_entries(entries){
return cljs.core.map.call(null,(function (p1__37202_SHARP_){
return cljs.core.reduce_kv.call(null,(function (totals,k_date,v_sum){
return cljs.core.update.call(null,cljs.core.update.call(null,totals,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,(function (){var or__24762__auto__ = new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v_sum);
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,(function (){var or__24762__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v_sum);
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return (0);
}
})());
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),new cljs.core.Keyword(null,"date-values","date-values",194611847).cljs$core$IFn$_invoke$arity$1(p1__37202_SHARP_));
}),entries);
});
/**
 * Получить сортированный список уникальных дат из списка записей
 */
cashtime.core.distinct_dates_from_entries = (function cashtime$core$distinct_dates_from_entries(entries){
return cashtime.moment_utils.sort_dates.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (coll,dates){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.cons.call(null,coll,dates));
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.keys,cljs.core.map.call(null,new cljs.core.Keyword(null,"date-values","date-values",194611847),entries)))));
});
/**
 * Получить итого по датам (по столбцу т.е.)
 */
cashtime.core.date_totals_from_entries = (function cashtime$core$date_totals_from_entries(dates,entries){
return cljs.core.map.call(null,(function (d){
return cljs.core.reduce.call(null,(function (m,p__37206){
var map__37207 = p__37206;
var map__37207__$1 = ((((!((map__37207 == null)))?((((map__37207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37207):map__37207);
var tuple = cljs.core.get.call(null,map__37207__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__37207__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,(function (){var or__24762__auto__ = cljs.core.get_in.call(null,date_values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"fact","fact",-799816531)], null));
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,(function (){var or__24762__auto__ = cljs.core.get_in.call(null,date_values,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.Keyword(null,"plan","plan",1118952668)], null));
if(cljs.core.truth_(or__24762__auto__)){
return or__24762__auto__;
} else {
return (0);
}
})());
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),entries);
}),dates);
});
/**
 * Иниц. всех вотчеров
 */
cashtime.core.init_watchers = (function cashtime$core$init_watchers(){
cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560),new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006)], null)),new cljs.core.Keyword(null,"d-group-mode-watch","d-group-mode-watch",712212220),(function (k,a,old_s,new_s){
cljs.core.println.call(null,"watch group mode");

if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.update_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)),new cljs.core.Keyword(null,"search-str-watch","search-str-watch",-1177097673),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.update_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)),new cljs.core.Keyword(null,"sort-dim-params-watch","sort-dim-params-watch",1516643479),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.sort_entries_BANG_.call(null);
}
}));

cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)),new cljs.core.Keyword(null,"flow-filter-type-watch","flow-filter-type-watch",1557534140),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.update_entries_BANG_.call(null);
}
}));

return cljs.core.add_watch.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)),new cljs.core.Keyword(null,"active-dim-group-ids-watch","active-dim-group-ids-watch",-563053546),(function (k,a,old_s,new_s){
if(cljs.core._EQ_.call(null,old_s,new_s)){
return null;
} else {
return cashtime.core.update_entries_BANG_.call(null);
}
}));
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
/**
 * Новое значение в поисковой строке
 */
cashtime.core.set_search_str = (function cashtime$core$set_search_str(s){
return cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-dim-str","search-dim-str",1189403764)], null)),s);
});
/**
 * Сортировать по группе измерения
 */
cashtime.core.set_dim_group_sort = (function cashtime$core$set_dim_group_sort(dim_group_id){
var sort_params_c = cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null));
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
cashtime.core.set_flow_filter_type = (function cashtime$core$set_flow_filter_type(flow_type){
cljs.core.println.call(null,"filter flow type: ",flow_type);

return cljs.core.reset_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)),flow_type);
});
cljs.core.disj.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(5),null], null), null),(4));
cljs.core.conj.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(5),null], null), null),(6));
/**
 * Переключить группу измерений (вкл/откл)
 */
cashtime.core.toggle_dimension_group = (function cashtime$core$toggle_dimension_group(dim_group){
cljs.core.println.call(null,"toggle-dimension-group: ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));

return cljs.core.swap_BANG_.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)),(function (active_dims){
if(cljs.core.contains_QMARK_.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group))){
return cljs.core.disj.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));
} else {
return cljs.core.conj.call(null,active_dims,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group));
}
}));
});
/**
 * Ячейка с измерением
 */
cashtime.core.dim_td_view = rum.core.build_defc.call(null,(function (dim_group,dim){
return React.createElement("td",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(dim)?new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(dim_group):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim)));
}),null,"dim-td-view");
/**
 * Строка названий конкретных измерений
 */
cashtime.core.tuple_tr_view = rum.core.build_defc.call(null,(function (dim_groups,tuple){
var attrs37209 = cljs.core.map.call(null,(function (dim_group){
var dim_group_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
var pair = cashtime.core.pair_from_tuple.call(null,tuple,dim_group_id);
return rum.core.with_key.call(null,cashtime.core.dim_td_view.call(null,dim_group,cashtime.core.pair__GT_dim.call(null,pair)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim_group_id,cljs.core.second.call(null,pair)], null));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37209))?sablono.interpreter.attributes.call(null,attrs37209):null),((cljs.core.map_QMARK_.call(null,attrs37209))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37209)], null)));
}),null,"tuple-tr-view");
/**
 * Заголовок для группы измерений
 */
cashtime.core.dim_group_header_view = rum.core.build_defc.call(null,(function (dim_group,sort_params){
var gr_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
return React.createElement("th",({"onClick": ((function (gr_id){
return (function (){
return cashtime.core.set_dim_group_sort.call(null,gr_id);
});})(gr_id))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_params),gr_id))?[cljs.core.str("sorted "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_params))?"descending":"ascending"))].join(''):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group)));
}),null,"dim-group-header-view");
/**
 * Вьюшка для измерений (левой части)
 *   used-dim-groups - используются только видимые справочники измерений
 */
cashtime.core.dimensions_view = rum.core.build_defc.call(null,(function (used_dim_groups,outflow_tuples,inflow_tuples,sort_params){
var ordered_dim_groups = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order-index","order-index",-1483984839),used_dim_groups);
return React.createElement("div",null,React.createElement("table",({"className": "ui very basic padded sortable table"}),React.createElement("thead",null,(function (){var attrs37214 = cljs.core.map.call(null,((function (ordered_dim_groups){
return (function (p1__37210_SHARP_){
return rum.core.with_key.call(null,cashtime.core.dim_group_header_view.call(null,p1__37210_SHARP_,sort_params),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37210_SHARP_));
});})(ordered_dim_groups))
,ordered_dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37214))?sablono.interpreter.attributes.call(null,attrs37214):null),((cljs.core.map_QMARK_.call(null,attrs37214))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37214)], null)));
})()),(function (){var attrs37213 = cljs.core.map.call(null,((function (ordered_dim_groups){
return (function (p1__37211_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,ordered_dim_groups,p1__37211_SHARP_),p1__37211_SHARP_);
});})(ordered_dim_groups))
,outflow_tuples);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs37213))?sablono.interpreter.attributes.call(null,attrs37213):null),((cljs.core.map_QMARK_.call(null,attrs37213))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u0432\u044B\u043F\u043B\u0430\u0442")),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37213,ordered_dim_groups){
return (function (p1__37212_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,ordered_dim_groups,p1__37212_SHARP_),p1__37212_SHARP_);
});})(attrs37213,ordered_dim_groups))
,inflow_tuples)),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439"))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37213),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u0432\u044B\u043F\u043B\u0430\u0442")),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37213,ordered_dim_groups){
return (function (p1__37212_SHARP_){
return rum.core.with_key.call(null,cashtime.core.tuple_tr_view.call(null,ordered_dim_groups,p1__37212_SHARP_),p1__37212_SHARP_);
});})(attrs37213,ordered_dim_groups))
,inflow_tuples)),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439"))], null)));
})()));
}),null,"dimensions-view");
cashtime.core.date_header_th_view = rum.core.build_defc.call(null,(function (date,d_group_mode){
var attrs37215 = cashtime.moment_utils.print_date_in_needed_format.call(null,date,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs37215))?sablono.interpreter.attributes.call(null,attrs37215):null),((cljs.core.map_QMARK_.call(null,attrs37215))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37215)], null)));
}),null,"date-header-th-view");
cashtime.core.date_headers_tr_view = rum.core.build_defc.call(null,(function (dates,d_group_mode){
var attrs37217 = cljs.core.map.call(null,(function (p1__37216_SHARP_){
return rum.core.with_key.call(null,cashtime.core.date_header_th_view.call(null,p1__37216_SHARP_,d_group_mode),p1__37216_SHARP_);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37217))?sablono.interpreter.attributes.call(null,attrs37217):null),((cljs.core.map_QMARK_.call(null,attrs37217))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37217)], null)));
}),null,"date-headers-tr-view");
/**
 * Вьюшка для вывода суммы записи
 */
cashtime.core.entry_value_view = rum.core.build_defc.call(null,(function (value,flow_type){
if(!((value == null))){
var attrs37218 = (cljs.core.truth_(new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fact-value","span.fact-value",-1007752615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__37221 = (((flow_type instanceof cljs.core.Keyword))?flow_type.fqn:null);
switch (G__37221) {
case "inflow":
return "positive";

break;
case "outflow":
return "negative";

break;
default:
return "";

}
})()], null),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value))], null):null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37218))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value-cell"], null)], null),attrs37218)):({"className": "value-cell"})),((cljs.core.map_QMARK_.call(null,attrs37218))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plan-value","span.plan-value",1675314184),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value))], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37218),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plan-value","span.plan-value",1675314184),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value))], null):null))], null)));
} else {
return React.createElement("div",({"className": "value-cell"})," ");
}
}),null,"entry-value-view");
cashtime.core.value_cell_td_view = rum.core.build_defc.call(null,(function (value,flow_type){
var attrs37223 = cashtime.core.entry_value_view.call(null,value,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37223))?sablono.interpreter.attributes.call(null,attrs37223):null),((cljs.core.map_QMARK_.call(null,attrs37223))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37223)], null)));
}),null,"value-cell-td-view");
cashtime.core.values_row_tr_view = rum.core.build_defc.call(null,(function (dates,date_values,flow_type){
var attrs37224 = cljs.core.map.call(null,(function (d){
return rum.core.with_key.call(null,cashtime.core.value_cell_td_view.call(null,cljs.core.get.call(null,date_values,d),flow_type),d);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37224))?sablono.interpreter.attributes.call(null,attrs37224):null),((cljs.core.map_QMARK_.call(null,attrs37224))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37224)], null)));
}),null,"values-row-tr-view");
/**
 * Вьюшка для итого по столбцу (дате)
 */
cashtime.core.date_total_td_view = rum.core.build_defc.call(null,(function (date_total,flow_type){
var attrs37225 = cashtime.core.entry_value_view.call(null,date_total,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37225))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37225)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37225))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37225)], null)));
}),null,"date-total-td-view");
/**
 * Вьюшка для записей и дат (основная часть)
 */
cashtime.core.entries_view = rum.core.build_defc.call(null,(function (outflow_entries,inflow_entries,d_params){
var dates = cashtime.core.distinct_dates_from_entries.call(null,cljs.core.concat.call(null,outflow_entries,inflow_entries));
var d_group_mode = new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006).cljs$core$IFn$_invoke$arity$1(d_params);
return React.createElement("table",({"className": "ui very basic padded celled single line table"}),(function (){var attrs37228 = cashtime.core.date_headers_tr_view.call(null,dates,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"thead",((cljs.core.map_QMARK_.call(null,attrs37228))?sablono.interpreter.attributes.call(null,attrs37228):null),((cljs.core.map_QMARK_.call(null,attrs37228))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37228)], null)));
})(),(function (){var attrs37229 = cljs.core.map.call(null,((function (dates,d_group_mode){
return (function (p__37234){
var map__37235 = p__37234;
var map__37235__$1 = ((((!((map__37235 == null)))?((((map__37235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37235):map__37235);
var tuple = cljs.core.get.call(null,map__37235__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__37235__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"outflow","outflow",-2135051524)),tuple);
});})(dates,d_group_mode))
,outflow_entries);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs37229))?sablono.interpreter.attributes.call(null,attrs37229):null),((cljs.core.map_QMARK_.call(null,attrs37229))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37230 = cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p1__37226_SHARP_){
return cashtime.core.date_total_td_view.call(null,p1__37226_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(attrs37229,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,dates,outflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37230))?sablono.interpreter.attributes.call(null,attrs37230):null),((cljs.core.map_QMARK_.call(null,attrs37230))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37230)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p__37237){
var map__37238 = p__37237;
var map__37238__$1 = ((((!((map__37238 == null)))?((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37238):map__37238);
var tuple = cljs.core.get.call(null,map__37238__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__37238__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),tuple);
});})(attrs37229,dates,d_group_mode))
,inflow_entries)),(function (){var attrs37231 = cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p1__37227_SHARP_){
return cashtime.core.date_total_td_view.call(null,p1__37227_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(attrs37229,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,dates,inflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37231))?sablono.interpreter.attributes.call(null,attrs37231):null),((cljs.core.map_QMARK_.call(null,attrs37231))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37231)], null)));
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37229),(function (){var attrs37232 = cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p1__37226_SHARP_){
return cashtime.core.date_total_td_view.call(null,p1__37226_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(attrs37229,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,dates,outflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37232))?sablono.interpreter.attributes.call(null,attrs37232):null),((cljs.core.map_QMARK_.call(null,attrs37232))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37232)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p__37240){
var map__37241 = p__37240;
var map__37241__$1 = ((((!((map__37241 == null)))?((((map__37241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37241):map__37241);
var tuple = cljs.core.get.call(null,map__37241__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__37241__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.core.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),tuple);
});})(attrs37229,dates,d_group_mode))
,inflow_entries)),(function (){var attrs37233 = cljs.core.map.call(null,((function (attrs37229,dates,d_group_mode){
return (function (p1__37227_SHARP_){
return cashtime.core.date_total_td_view.call(null,p1__37227_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(attrs37229,dates,d_group_mode))
,cashtime.core.date_totals_from_entries.call(null,dates,inflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs37233))?sablono.interpreter.attributes.call(null,attrs37233):null),((cljs.core.map_QMARK_.call(null,attrs37233))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37233)], null)));
})()], null)));
})());
}),null,"entries-view");
/**
 * Вьюшка для итого по строке
 */
cashtime.core.row_total_tr_view = rum.core.build_defc.call(null,(function (total,flow_type){
return React.createElement("tr",null,(function (){var attrs37243 = cashtime.core.entry_value_view.call(null,total,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37243))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37243)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37243))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37243)], null)));
})());
}),null,"row-total-tr-view");
/**
 * Вьюшка для Итого по строкам
 */
cashtime.core.row_totals_view = rum.core.build_defc.call(null,(function (outflow_totals,inflow_totals){
return React.createElement("table",({"className": "ui very basic padded table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u0418\u0442\u043E\u0433\u043E"))),(function (){var attrs37248 = cljs.core.map.call(null,(function (p1__37244_SHARP_){
return rum.core.with_key.call(null,cashtime.core.row_total_tr_view.call(null,p1__37244_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524)),p1__37244_SHARP_);
}),outflow_totals);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs37248))?sablono.interpreter.attributes.call(null,attrs37248):null),((cljs.core.map_QMARK_.call(null,attrs37248))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,(function (){var attrs37249 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs37248){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs37248))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),outflow_totals),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37249))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37249)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37249)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37248){
return (function (p1__37245_SHARP_){
return rum.core.with_key.call(null,cashtime.core.row_total_tr_view.call(null,p1__37245_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),p1__37245_SHARP_);
});})(attrs37248))
,inflow_totals)),React.createElement("tr",null,(function (){var attrs37250 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs37248){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs37248))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),inflow_totals),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37250))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37250)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37250))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37250)], null)));
})())], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37248),React.createElement("tr",null,(function (){var attrs37251 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs37248){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs37248))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),outflow_totals),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37251))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37251)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37251))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37251)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs37248){
return (function (p1__37245_SHARP_){
return rum.core.with_key.call(null,cashtime.core.row_total_tr_view.call(null,p1__37245_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),p1__37245_SHARP_);
});})(attrs37248))
,inflow_totals)),React.createElement("tr",null,(function (){var attrs37252 = cashtime.core.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs37248){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs37248))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),inflow_totals),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs37252))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs37252)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs37252))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37252)], null)));
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
return cashtime.dom_utils.menu_item_props.call(null,cljs.core._EQ_.call(null,d_group_mode,gm),cashtime.core.set_dates_group_mode,gm);
});})(d_group_mode))
;
return React.createElement("div",null,React.createElement("a",({"className": "ui labeled icon tiny button"}),React.createElement("i",({"className": "left arrow icon"})),"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0440\u0435\u0435"),React.createElement("div",({"className": "ui text right floated compact menu"}),React.createElement("div",({"className": "header item"}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E "),(function (){var attrs37257 = get_group_params.call(null,new cljs.core.Keyword(null,"by-day","by-day",-1253777753));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37257))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37257)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37257))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043D\u044F\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37257),"\u0434\u043D\u044F\u043C"], null)));
})(),(function (){var attrs37258 = get_group_params.call(null,new cljs.core.Keyword(null,"by-month","by-month",542266331));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37258))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37258)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37258))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37258),"\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null)));
})(),(function (){var attrs37259 = get_group_params.call(null,new cljs.core.Keyword(null,"by-year","by-year",-655938968));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37259))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37259)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37259))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0433\u043E\u0434\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37259),"\u0433\u043E\u0434\u0430\u043C"], null)));
})()));
}),null,"timeline-panel-view");
/**
 * Нижняя часть фильтров 
 */
cashtime.core.bottom_menu_view = rum.core.build_defc.call(null,(function (flow_filter_type){
var get_filter_props = (function (k){
return cashtime.dom_utils.menu_item_props.call(null,cljs.core._EQ_.call(null,flow_filter_type,k),cashtime.core.set_flow_filter_type,k);
});
return React.createElement("div",({"className": "ui text right floated compact menu"}),(function (){var attrs37260 = get_filter_props.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37260))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37260)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37260))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0412\u0441\u0435"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37260),"\u0412\u0441\u0435"], null)));
})(),(function (){var attrs37261 = get_filter_props.call(null,new cljs.core.Keyword(null,"only-outflows","only-outflows",1781489591));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37261))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37261)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37261))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0440\u0430\u0441\u0445\u043E\u0434\u044B"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37261),"\u0440\u0430\u0441\u0445\u043E\u0434\u044B"], null)));
})(),(function (){var attrs37262 = get_filter_props.call(null,new cljs.core.Keyword(null,"only-inflows","only-inflows",-247649294));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs37262))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs37262)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs37262))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043E\u0445\u043E\u0434\u044B"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37262),"\u0434\u043E\u0445\u043E\u0434\u044B"], null)));
})());
}),null,"bottom-menu-view");
cashtime.core.dimension_toggler_item_view = rum.core.build_defc.call(null,(function (dim_group,active_QMARK_){
return React.createElement("div",({"className": "item"}),React.createElement("div",({"onClick": (function (){
return cashtime.core.toggle_dimension_group.call(null,dim_group);
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","checkbox",(cljs.core.truth_(active_QMARK_)?"checked":null)], null))}),sablono.interpreter.create_element.call(null,"input",({"type": "checkbox", "checked": active_QMARK_})),(function (){var attrs37263 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group);
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs37263))?sablono.interpreter.attributes.call(null,attrs37263):null),((cljs.core.map_QMARK_.call(null,attrs37263))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37263)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cashtime.dom_utils.rcomp__GT_js$.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)).find(".ui.checkbox").checkbox();

return state;
})], null)], null),"dimension-toggler-item-view");
/**
 * Вьюшка переключателя измерений
 */
cashtime.core.dimensions_toggler_view = rum.core.build_defc.call(null,(function (avail_dim_groups,active_dim_group_ids){
var attrs37265 = cljs.core.map.call(null,(function (p1__37264_SHARP_){
return rum.core.with_key.call(null,(function (){var dim_group = cljs.core.second.call(null,p1__37264_SHARP_);
return cashtime.core.dimension_toggler_item_view.call(null,dim_group,cljs.core.contains_QMARK_.call(null,active_dim_group_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group)));
})(),p1__37264_SHARP_);
}),avail_dim_groups);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37265))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","horizontal","list"], null)], null),attrs37265)):({"className": "ui horizontal list"})),((cljs.core.map_QMARK_.call(null,attrs37265))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37265)], null)));
}),null,"dimensions-toggler-view");
cashtime.core.main_view = rum.core.build_defc.call(null,(function (){
var inflow_entries = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)));
var outflow_entries = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)));
var avail_dim_groups = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null)));
var active_dim_group_ids = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)));
var used_dim_groups = cljs.core.select_keys.call(null,avail_dim_groups,cashtime.core.get_used_dims_ids.call(null,cljs.core.concat.call(null,outflow_entries,inflow_entries)));
var row_outflow_totals = cashtime.core.row_totals_from_entries.call(null,outflow_entries);
var row_inflow_totals = cashtime.core.row_totals_from_entries.call(null,inflow_entries);
var d_params = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560)], null)));
var sort_dim_params = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
var flow_filter_type = rum.core.react.call(null,cashtime.core.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)));
return React.createElement("div",({"className": "ui padded grid"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "column"}),React.createElement("div",({"onClick": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type){
return (function (){
return cashtime.core.refresh_random_data.call(null);
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type))
, "className": "ui button"}),"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435"),React.createElement("div",({"onClick": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type){
return (function (){
return cashtime.core.print_appstate.call(null);
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type))
, "className": "ui button"}),"\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C"))),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),React.createElement("div",({"className": "four wide column"}),React.createElement("div",({"className": "search-div"}),React.createElement("div",({"className": "ui fluid input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "onChange": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type){
return (function (p1__37266_SHARP_){
return cashtime.core.set_search_str.call(null,cashtime.dom_utils.value_of_input.call(null,p1__37266_SHARP_));
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type))
}))))),(function (){var attrs37267 = cashtime.core.timeline_panel_view.call(null,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37267))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ten","wide","column"], null)], null),attrs37267)):({"className": "ten wide column"})),((cljs.core.map_QMARK_.call(null,attrs37267))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37267)], null)));
})(),React.createElement("div",({"className": "two wide column"}))),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),(function (){var attrs37270 = cashtime.core.dimensions_toggler_view.call(null,avail_dim_groups,active_dim_group_ids);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37270))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["four","wide","column"], null)], null),attrs37270)):({"className": "four wide column"})),((cljs.core.map_QMARK_.call(null,attrs37270))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37270)], null)));
})(),React.createElement("div",({"className": "twelve wide column"}))),React.createElement("div",({"className": "stretched bottom aligned row"}),React.createElement("div",({"className": "four wide column"}),(function (){var attrs37273 = cashtime.core.dimensions_view.call(null,cljs.core.vals.call(null,used_dim_groups),cashtime.core.tuples_from_entries.call(null,outflow_entries),cashtime.core.tuples_from_entries.call(null,inflow_entries),sort_dim_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37273))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dimensions-div"], null)], null),attrs37273)):({"className": "dimensions-div"})),((cljs.core.map_QMARK_.call(null,attrs37273))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37273)], null)));
})()),React.createElement("div",({"className": "ten wide column"}),(function (){var attrs37274 = cashtime.core.entries_view.call(null,outflow_entries,inflow_entries,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37274))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["values-div"], null)], null),attrs37274)):({"className": "values-div"})),((cljs.core.map_QMARK_.call(null,attrs37274))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37274)], null)));
})()),React.createElement("div",({"className": "two wide column"}),(function (){var attrs37275 = cashtime.core.row_totals_view.call(null,row_outflow_totals,row_inflow_totals);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37275))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row-totals-div"], null)], null),attrs37275)):({"className": "row-totals-div"})),((cljs.core.map_QMARK_.call(null,attrs37275))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37275)], null)));
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

//# sourceMappingURL=core.js.map?rel=1490705968714