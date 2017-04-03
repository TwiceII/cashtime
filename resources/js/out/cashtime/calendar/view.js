// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.calendar.view');
goog.require('cljs.core');
goog.require('cashtime.utils');
goog.require('cashtime.moment_utils');
goog.require('cashtime.calendar.logic');
goog.require('cashtime.dom_utils');
goog.require('rum.core');
goog.require('cashtime.tuples');
/**
 * Ячейка с измерением
 */
cashtime.calendar.view.dim_td_view = rum.core.build_defc.call(null,(function (dim_group,dim){
return React.createElement("td",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(dim)?new cljs.core.Keyword(null,"css-class","css-class",-919455334).cljs$core$IFn$_invoke$arity$1(dim_group):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim)));
}),null,"dim-td-view");
/**
 * Строка названий конкретных измерений
 */
cashtime.calendar.view.tuple_tr_view = rum.core.build_defc.call(null,(function (dim_groups,tuple){
var attrs38097 = cljs.core.map.call(null,(function (dim_group){
var dim_group_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
var pair = cashtime.tuples.pair_from_tuple.call(null,tuple,dim_group_id);
return rum.core.with_key.call(null,cashtime.calendar.view.dim_td_view.call(null,dim_group,cashtime.calendar.logic.pair__GT_dim.call(null,pair)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim_group_id,cljs.core.second.call(null,pair)], null));
}),dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38097))?sablono.interpreter.attributes.call(null,attrs38097):null),((cljs.core.map_QMARK_.call(null,attrs38097))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38097)], null)));
}),null,"tuple-tr-view");
/**
 * Заголовок для группы измерений
 */
cashtime.calendar.view.dim_group_header_view = rum.core.build_defc.call(null,(function (dim_group,sort_params){
var gr_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group);
return React.createElement("th",({"onClick": ((function (gr_id){
return (function (){
return cashtime.calendar.logic.set_dim_group_sort.call(null,gr_id);
});})(gr_id))
, "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(sort_params),gr_id))?[cljs.core.str("sorted "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"desc?","desc?",-713120712).cljs$core$IFn$_invoke$arity$1(sort_params))?"descending":"ascending"))].join(''):null)], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group)));
}),null,"dim-group-header-view");
/**
 * Вьюшка для измерений (левой части)
 *   used-dim-groups - используются только видимые справочники измерений
 */
cashtime.calendar.view.dimensions_view = rum.core.build_defc.call(null,(function (used_dim_groups,outflow_tuples,inflow_tuples,sort_params){
var ordered_dim_groups = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order-index","order-index",-1483984839),used_dim_groups);
return React.createElement("div",null,React.createElement("table",({"className": "ui very basic padded sortable table"}),React.createElement("thead",null,(function (){var attrs38102 = cljs.core.map.call(null,((function (ordered_dim_groups){
return (function (p1__38098_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.dim_group_header_view.call(null,p1__38098_SHARP_,sort_params),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38098_SHARP_));
});})(ordered_dim_groups))
,ordered_dim_groups);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38102))?sablono.interpreter.attributes.call(null,attrs38102):null),((cljs.core.map_QMARK_.call(null,attrs38102))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38102)], null)));
})()),(function (){var attrs38101 = cljs.core.map.call(null,((function (ordered_dim_groups){
return (function (p1__38099_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.tuple_tr_view.call(null,ordered_dim_groups,p1__38099_SHARP_),p1__38099_SHARP_);
});})(ordered_dim_groups))
,outflow_tuples);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs38101))?sablono.interpreter.attributes.call(null,attrs38101):null),((cljs.core.map_QMARK_.call(null,attrs38101))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u0432\u044B\u043F\u043B\u0430\u0442")),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38101,ordered_dim_groups){
return (function (p1__38100_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.tuple_tr_view.call(null,ordered_dim_groups,p1__38100_SHARP_),p1__38100_SHARP_);
});})(attrs38101,ordered_dim_groups))
,inflow_tuples)),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439"))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38101),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u0432\u044B\u043F\u043B\u0430\u0442")),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38101,ordered_dim_groups){
return (function (p1__38100_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.tuple_tr_view.call(null,ordered_dim_groups,p1__38100_SHARP_),p1__38100_SHARP_);
});})(attrs38101,ordered_dim_groups))
,inflow_tuples)),React.createElement("tr",null,React.createElement("td",({"colSpan": cljs.core.count.call(null,ordered_dim_groups), "style": ({"fontWeight": "bold"}), "className": "total-cell"}),"\u0418\u0442\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439"))], null)));
})()));
}),null,"dimensions-view");
cashtime.calendar.view.date_header_th_view = rum.core.build_defc.call(null,(function (date,d_group_mode){
var attrs38103 = cashtime.moment_utils.print_date_in_needed_format.call(null,date,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"th",((cljs.core.map_QMARK_.call(null,attrs38103))?sablono.interpreter.attributes.call(null,attrs38103):null),((cljs.core.map_QMARK_.call(null,attrs38103))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38103)], null)));
}),null,"date-header-th-view");
cashtime.calendar.view.date_headers_tr_view = rum.core.build_defc.call(null,(function (dates,d_group_mode){
var attrs38105 = cljs.core.map.call(null,(function (p1__38104_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.date_header_th_view.call(null,p1__38104_SHARP_,d_group_mode),p1__38104_SHARP_);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38105))?sablono.interpreter.attributes.call(null,attrs38105):null),((cljs.core.map_QMARK_.call(null,attrs38105))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38105)], null)));
}),null,"date-headers-tr-view");
/**
 * Вьюшка для вывода суммы записи
 */
cashtime.calendar.view.entry_value_view = rum.core.build_defc.call(null,(function (value,flow_type){
if(!((value == null))){
var attrs38106 = (cljs.core.truth_(new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(value))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fact-value","span.fact-value",-1007752615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__38109 = (((flow_type instanceof cljs.core.Keyword))?flow_type.fqn:null);
switch (G__38109) {
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
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38106))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["value-cell"], null)], null),attrs38106)):({"className": "value-cell"})),((cljs.core.map_QMARK_.call(null,attrs38106))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value));
} else {
return and__24748__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.plan-value","span.plan-value",1675314184),cashtime.utils.money_str_with_zero.call(null,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value))], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38106),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(value);
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
cashtime.calendar.view.value_cell_td_view = rum.core.build_defc.call(null,(function (value,flow_type){
var attrs38111 = cashtime.calendar.view.entry_value_view.call(null,value,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38111))?sablono.interpreter.attributes.call(null,attrs38111):null),((cljs.core.map_QMARK_.call(null,attrs38111))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38111)], null)));
}),null,"value-cell-td-view");
cashtime.calendar.view.values_row_tr_view = rum.core.build_defc.call(null,(function (dates,date_values,flow_type){
var attrs38112 = cljs.core.map.call(null,(function (d){
return rum.core.with_key.call(null,cashtime.calendar.view.value_cell_td_view.call(null,cljs.core.get.call(null,date_values,d),flow_type),d);
}),dates);
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38112))?sablono.interpreter.attributes.call(null,attrs38112):null),((cljs.core.map_QMARK_.call(null,attrs38112))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38112)], null)));
}),null,"values-row-tr-view");
/**
 * Вьюшка для итого по столбцу (дате)
 */
cashtime.calendar.view.date_total_td_view = rum.core.build_defc.call(null,(function (date_total,flow_type){
var attrs38113 = cashtime.calendar.view.entry_value_view.call(null,date_total,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38113))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38113)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38113))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38113)], null)));
}),null,"date-total-td-view");
/**
 * Вьюшка для записей и дат (основная часть)
 */
cashtime.calendar.view.entries_view = rum.core.build_defc.call(null,(function (outflow_entries,inflow_entries,d_params){
var dates = cashtime.calendar.logic.distinct_dates_from_entries.call(null,cljs.core.concat.call(null,outflow_entries,inflow_entries));
var d_group_mode = new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006).cljs$core$IFn$_invoke$arity$1(d_params);
return React.createElement("table",({"className": "ui very basic padded celled single line table"}),(function (){var attrs38116 = cashtime.calendar.view.date_headers_tr_view.call(null,dates,d_group_mode);
return cljs.core.apply.call(null,React.createElement,"thead",((cljs.core.map_QMARK_.call(null,attrs38116))?sablono.interpreter.attributes.call(null,attrs38116):null),((cljs.core.map_QMARK_.call(null,attrs38116))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38116)], null)));
})(),(function (){var attrs38117 = cljs.core.map.call(null,((function (dates,d_group_mode){
return (function (p__38122){
var map__38123 = p__38122;
var map__38123__$1 = ((((!((map__38123 == null)))?((((map__38123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38123):map__38123);
var tuple = cljs.core.get.call(null,map__38123__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__38123__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.calendar.view.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"outflow","outflow",-2135051524)),tuple);
});})(dates,d_group_mode))
,outflow_entries);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs38117))?sablono.interpreter.attributes.call(null,attrs38117):null),((cljs.core.map_QMARK_.call(null,attrs38117))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38118 = cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p1__38114_SHARP_){
return cashtime.calendar.view.date_total_td_view.call(null,p1__38114_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(attrs38117,dates,d_group_mode))
,cashtime.calendar.logic.date_totals_from_entries.call(null,dates,outflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38118))?sablono.interpreter.attributes.call(null,attrs38118):null),((cljs.core.map_QMARK_.call(null,attrs38118))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38118)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p__38125){
var map__38126 = p__38125;
var map__38126__$1 = ((((!((map__38126 == null)))?((((map__38126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38126):map__38126);
var tuple = cljs.core.get.call(null,map__38126__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__38126__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.calendar.view.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),tuple);
});})(attrs38117,dates,d_group_mode))
,inflow_entries)),(function (){var attrs38119 = cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p1__38115_SHARP_){
return cashtime.calendar.view.date_total_td_view.call(null,p1__38115_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(attrs38117,dates,d_group_mode))
,cashtime.calendar.logic.date_totals_from_entries.call(null,dates,inflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38119))?sablono.interpreter.attributes.call(null,attrs38119):null),((cljs.core.map_QMARK_.call(null,attrs38119))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38119)], null)));
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38117),(function (){var attrs38120 = cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p1__38114_SHARP_){
return cashtime.calendar.view.date_total_td_view.call(null,p1__38114_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
});})(attrs38117,dates,d_group_mode))
,cashtime.calendar.logic.date_totals_from_entries.call(null,dates,outflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38120))?sablono.interpreter.attributes.call(null,attrs38120):null),((cljs.core.map_QMARK_.call(null,attrs38120))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38120)], null)));
})(),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p__38128){
var map__38129 = p__38128;
var map__38129__$1 = ((((!((map__38129 == null)))?((((map__38129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38129):map__38129);
var tuple = cljs.core.get.call(null,map__38129__$1,new cljs.core.Keyword(null,"tuple","tuple",-472667284));
var date_values = cljs.core.get.call(null,map__38129__$1,new cljs.core.Keyword(null,"date-values","date-values",194611847));
return rum.core.with_key.call(null,cashtime.calendar.view.values_row_tr_view.call(null,dates,date_values,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),tuple);
});})(attrs38117,dates,d_group_mode))
,inflow_entries)),(function (){var attrs38121 = cljs.core.map.call(null,((function (attrs38117,dates,d_group_mode){
return (function (p1__38115_SHARP_){
return cashtime.calendar.view.date_total_td_view.call(null,p1__38115_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552));
});})(attrs38117,dates,d_group_mode))
,cashtime.calendar.logic.date_totals_from_entries.call(null,dates,inflow_entries));
return cljs.core.apply.call(null,React.createElement,"tr",((cljs.core.map_QMARK_.call(null,attrs38121))?sablono.interpreter.attributes.call(null,attrs38121):null),((cljs.core.map_QMARK_.call(null,attrs38121))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38121)], null)));
})()], null)));
})());
}),null,"entries-view");
/**
 * Вьюшка для итого по строке
 */
cashtime.calendar.view.row_total_tr_view = rum.core.build_defc.call(null,(function (total,flow_type){
return React.createElement("tr",null,(function (){var attrs38131 = cashtime.calendar.view.entry_value_view.call(null,total,flow_type);
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38131))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38131)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38131))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38131)], null)));
})());
}),null,"row-total-tr-view");
/**
 * Вьюшка для Итого по строкам
 */
cashtime.calendar.view.row_totals_view = rum.core.build_defc.call(null,(function (outflow_totals,inflow_totals){
return React.createElement("table",({"className": "ui very basic padded table"}),React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,"\u0418\u0442\u043E\u0433\u043E"))),(function (){var attrs38136 = cljs.core.map.call(null,(function (p1__38132_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.row_total_tr_view.call(null,p1__38132_SHARP_,new cljs.core.Keyword(null,"outflow","outflow",-2135051524)),p1__38132_SHARP_);
}),outflow_totals);
return cljs.core.apply.call(null,React.createElement,"tbody",((cljs.core.map_QMARK_.call(null,attrs38136))?sablono.interpreter.attributes.call(null,attrs38136):null),((cljs.core.map_QMARK_.call(null,attrs38136))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("tr",null,(function (){var attrs38137 = cashtime.calendar.view.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs38136){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs38136))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),outflow_totals),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38137))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38137)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38137))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38137)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38136){
return (function (p1__38133_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.row_total_tr_view.call(null,p1__38133_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),p1__38133_SHARP_);
});})(attrs38136))
,inflow_totals)),React.createElement("tr",null,(function (){var attrs38138 = cashtime.calendar.view.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs38136){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs38136))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),inflow_totals),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38138))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38138)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38138))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38138)], null)));
})())], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38136),React.createElement("tr",null,(function (){var attrs38139 = cashtime.calendar.view.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs38136){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs38136))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),outflow_totals),new cljs.core.Keyword(null,"outflow","outflow",-2135051524));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38139))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38139)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38139))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38139)], null)));
})()),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (attrs38136){
return (function (p1__38133_SHARP_){
return rum.core.with_key.call(null,cashtime.calendar.view.row_total_tr_view.call(null,p1__38133_SHARP_,new cljs.core.Keyword(null,"inflow","inflow",-967791552)),p1__38133_SHARP_);
});})(attrs38136))
,inflow_totals)),React.createElement("tr",null,(function (){var attrs38140 = cashtime.calendar.view.entry_value_view.call(null,cljs.core.reduce.call(null,((function (attrs38136){
return (function (m,v){
return cljs.core.update.call(null,cljs.core.update.call(null,m,new cljs.core.Keyword(null,"fact","fact",-799816531),cljs.core._PLUS_,new cljs.core.Keyword(null,"fact","fact",-799816531).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core._PLUS_,new cljs.core.Keyword(null,"plan","plan",1118952668).cljs$core$IFn$_invoke$arity$1(v));
});})(attrs38136))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),(0),new cljs.core.Keyword(null,"plan","plan",1118952668),(0)], null),inflow_totals),new cljs.core.Keyword(null,"inflow","inflow",-967791552));
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs38140))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["total-cell"], null)], null),attrs38140)):({"className": "total-cell"})),((cljs.core.map_QMARK_.call(null,attrs38140))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38140)], null)));
})())], null)));
})());
}),null,"row-totals-view");
/**
 * Вьюшка для управления временем
 */
cashtime.calendar.view.timeline_panel_view = rum.core.build_defc.call(null,(function (date_params){
var d_group_mode = new cljs.core.Keyword(null,"grouping-mode","grouping-mode",1777533006).cljs$core$IFn$_invoke$arity$1(date_params);
var get_group_params = ((function (d_group_mode){
return (function (gm){
return cashtime.dom_utils.menu_item_props.call(null,cljs.core._EQ_.call(null,d_group_mode,gm),cashtime.calendar.logic.set_dates_group_mode,gm);
});})(d_group_mode))
;
return React.createElement("div",null,React.createElement("a",({"onClick": ((function (d_group_mode,get_group_params){
return (function (){
return cashtime.calendar.logic.add_new_item.call(null);
});})(d_group_mode,get_group_params))
, "className": "ui labeled icon tiny button"}),React.createElement("i",({"className": "add icon"})),"\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"),React.createElement("div",({"className": "ui text right floated compact menu"}),React.createElement("div",({"className": "header item"}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E "),(function (){var attrs38145 = get_group_params.call(null,new cljs.core.Keyword(null,"by-day","by-day",-1253777753));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38145))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38145)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38145))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043D\u044F\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38145),"\u0434\u043D\u044F\u043C"], null)));
})(),(function (){var attrs38146 = get_group_params.call(null,new cljs.core.Keyword(null,"by-month","by-month",542266331));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38146))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38146)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38146))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38146),"\u043C\u0435\u0441\u044F\u0446\u0430\u043C"], null)));
})(),(function (){var attrs38147 = get_group_params.call(null,new cljs.core.Keyword(null,"by-year","by-year",-655938968));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38147))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38147)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38147))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0433\u043E\u0434\u0430\u043C"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38147),"\u0433\u043E\u0434\u0430\u043C"], null)));
})()));
}),null,"timeline-panel-view");
/**
 * Нижняя часть фильтров 
 */
cashtime.calendar.view.bottom_menu_view = rum.core.build_defc.call(null,(function (flow_filter_type){
var get_filter_props = (function (k){
return cashtime.dom_utils.menu_item_props.call(null,cljs.core._EQ_.call(null,flow_filter_type,k),cashtime.calendar.logic.set_flow_filter_type,k);
});
return React.createElement("div",({"className": "ui text right floated compact menu"}),(function (){var attrs38148 = get_filter_props.call(null,new cljs.core.Keyword(null,"all","all",892129742));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38148))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38148)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38148))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0412\u0441\u0435"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38148),"\u0412\u0441\u0435"], null)));
})(),(function (){var attrs38149 = get_filter_props.call(null,new cljs.core.Keyword(null,"only-outflows","only-outflows",1781489591));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38149))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38149)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38149))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0440\u0430\u0441\u0445\u043E\u0434\u044B"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38149),"\u0440\u0430\u0441\u0445\u043E\u0434\u044B"], null)));
})(),(function (){var attrs38150 = get_filter_props.call(null,new cljs.core.Keyword(null,"only-inflows","only-inflows",-247649294));
return cljs.core.apply.call(null,React.createElement,"a",((cljs.core.map_QMARK_.call(null,attrs38150))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item"], null)], null),attrs38150)):({"className": "item"})),((cljs.core.map_QMARK_.call(null,attrs38150))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043E\u0445\u043E\u0434\u044B"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38150),"\u0434\u043E\u0445\u043E\u0434\u044B"], null)));
})());
}),null,"bottom-menu-view");
cashtime.calendar.view.dimension_toggler_item_view = rum.core.build_defc.call(null,(function (dim_group,active_QMARK_){
return React.createElement("div",({"className": "item"}),React.createElement("div",({"onClick": (function (){
return cashtime.calendar.logic.toggle_dimension_group.call(null,dim_group);
}), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","checkbox",(cljs.core.truth_(active_QMARK_)?"checked":null)], null))}),sablono.interpreter.create_element.call(null,"input",({"type": "checkbox", "checked": active_QMARK_})),(function (){var attrs38151 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group);
return cljs.core.apply.call(null,React.createElement,"label",((cljs.core.map_QMARK_.call(null,attrs38151))?sablono.interpreter.attributes.call(null,attrs38151):null),((cljs.core.map_QMARK_.call(null,attrs38151))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38151)], null)));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cashtime.dom_utils.rcomp__GT_js$.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)).find(".ui.checkbox").checkbox();

return state;
})], null)], null),"dimension-toggler-item-view");
/**
 * Вьюшка переключателя измерений
 */
cashtime.calendar.view.dimensions_toggler_view = rum.core.build_defc.call(null,(function (avail_dim_groups,active_dim_group_ids){
var attrs38153 = cljs.core.map.call(null,(function (p1__38152_SHARP_){
return rum.core.with_key.call(null,(function (){var dim_group = cljs.core.second.call(null,p1__38152_SHARP_);
return cashtime.calendar.view.dimension_toggler_item_view.call(null,dim_group,cljs.core.contains_QMARK_.call(null,active_dim_group_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dim_group)));
})(),p1__38152_SHARP_);
}),avail_dim_groups);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38153))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","horizontal","list"], null)], null),attrs38153)):({"className": "ui horizontal list"})),((cljs.core.map_QMARK_.call(null,attrs38153))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38153)], null)));
}),null,"dimensions-toggler-view");
/**
 * Вьюшка для выбора измерения в группе
 */
cashtime.calendar.view.dimension_chooser_view = rum.core.build_defcc.call(null,(function (rcomp,dim_group){
return React.createElement("div",({"className": "ui fluid input"}),React.createElement("div",({"className": "ui fluid search selection dropdown"}),sablono.interpreter.create_element.call(null,"input",({"type": "hidden"})),React.createElement("i",({"className": "dropdown icon"})),(function (){var attrs38159 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dim_group);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38159))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","text"], null)], null),attrs38159)):({"className": "default text"})),((cljs.core.map_QMARK_.call(null,attrs38159))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38159)], null)));
})(),(function (){var attrs38160 = cljs.core.map.call(null,(function (p1__38154_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38154_SHARP_)], null);
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(dim_group)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38160))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs38160)):({"className": "menu"})),((cljs.core.map_QMARK_.call(null,attrs38160))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38160)], null)));
})()),React.createElement("i",({"title": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435", "onClick": (function (){
return $($(ReactDOM.findDOMNode(rcomp)).find(".dropdown")).dropdown("clear");
}), "className": "remove icon link icon-near-dropdown"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (st){
$(cashtime.dom_utils.find_in_rcomp.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(st),".ui.dropdown")).dropdown();

return st;
})], null)], null),"dimension-chooser-view");
/**
 * Модальное окно для добавления/редактирования записи
 */
cashtime.calendar.view.entry_modal_view = rum.core.build_defc.call(null,(function (title,entry_params,dim_groups){
var map__38162 = entry_params;
var map__38162__$1 = ((((!((map__38162 == null)))?((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38162):map__38162);
var dims = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var date = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var v_type = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"v-type","v-type",-140288412));
var v_flow = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"v-flow","v-flow",1040340532));
var v_summ = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"v-summ","v-summ",-1471957754));
return React.createElement("div",({"id": "entry-modal", "className": "ui modal"}),React.createElement("i",({"className": "close icon"})),(function (){var attrs38166 = title;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38166))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["header"], null)], null),attrs38166)):({"className": "header"})),((cljs.core.map_QMARK_.call(null,attrs38166))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38166)], null)));
})(),React.createElement("div",({"className": "content"}),React.createElement("div",({"className": "ui horizontal list"}),React.createElement("div",({"className": "item"}),React.createElement("div",({"className": "ui small secondary compact menu"}),React.createElement("a",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,v_flow,new cljs.core.Keyword(null,"inflow","inflow",-967791552)))?"active":null)], null))}),"\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"),React.createElement("a",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,v_flow,new cljs.core.Keyword(null,"outflow","outflow",-2135051524)))?"active":null)], null))}),"\u0412\u044B\u043F\u043B\u0430\u0442\u0430"))),React.createElement("div",({"className": "item"}),React.createElement("div",({"className": "ui small secondary compact menu"}),React.createElement("a",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,v_type,new cljs.core.Keyword(null,"plan","plan",1118952668)))?"active":null)], null))}),"\u041F\u043B\u0430\u043D"),React.createElement("a",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["item",((cljs.core._EQ_.call(null,v_flow,new cljs.core.Keyword(null,"fact","fact",-799816531)))?"active":null)], null))}),"\u0424\u0430\u043A\u0442")))),React.createElement("div",({"className": "ui form"}),React.createElement("div",({"className": "two fields"}),React.createElement("div",({"className": "field"}),React.createElement("label",null,"\u0421\u0443\u043C\u043C\u0430"),sablono.interpreter.create_element.call(null,"input",({"type": "number", "defaultValue": v_summ}))),React.createElement("div",({"className": "field"}),React.createElement("label",null,"\u0414\u0430\u0442\u0430"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "readOnly": "readonly", "defaultValue": (function (){var temp__4657__auto__ = date;
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return cashtime.moment_utils.to_print_date.call(null,date);
} else {
return null;
}
})(), "className": "date-input"}))))),(function (){var attrs38167 = cljs.core.map.call(null,((function (map__38162,map__38162__$1,dims,date,v_type,v_flow,v_summ){
return (function (p1__38161_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cashtime.calendar.view.dimension_chooser_view.call(null,p1__38161_SHARP_)], null);
});})(map__38162,map__38162__$1,dims,date,v_type,v_flow,v_summ))
,dim_groups);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38167))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui","three","stackable","cards","dim-chooser-list"], null)], null),attrs38167)):({"className": "ui three stackable cards dim-chooser-list"})),((cljs.core.map_QMARK_.call(null,attrs38167))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38167)], null)));
})(),React.createElement("div",({"className": "actions"}),React.createElement("div",({"className": "ui deny button"}),"\u041E\u0442\u043C\u0435\u043D\u0430"),React.createElement("div",({"className": "ui positive button"}),"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after-render","after-render",1997533433),(function (st){
var rcomp_38174 = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(st);
var pickmeup_config_38175 = ({"format": "d.m.Y", "default_date": false, "hide_on_select": true});
$(cashtime.dom_utils.find_in_rcomp.call(null,rcomp_38174,".date-input")).pickmeup(pickmeup_config_38175);

return st;
})], null)], null),"entry-modal-view");
cashtime.calendar.view.main_view = rum.core.build_defc.call(null,(function (){
var inflow_entries = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inflow-entries","inflow-entries",-852767396)], null)));
var outflow_entries = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outflow-entries","outflow-entries",-1497588140)], null)));
var avail_dim_groups = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avail-dim-groups","avail-dim-groups",-317367111)], null)));
var active_dim_group_ids = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-dim-group-ids","active-dim-group-ids",1099182503)], null)));
var used_dim_groups = cljs.core.select_keys.call(null,avail_dim_groups,cashtime.calendar.logic.get_used_dims_ids.call(null,cljs.core.concat.call(null,outflow_entries,inflow_entries)));
var row_outflow_totals = cashtime.calendar.logic.row_totals_from_entries.call(null,outflow_entries);
var row_inflow_totals = cashtime.calendar.logic.row_totals_from_entries.call(null,inflow_entries);
var d_params = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date-params","date-params",-1820087560)], null)));
var sort_dim_params = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sort-dim-params","sort-dim-params",-1078738446)], null)));
var flow_filter_type = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-filter-type","flow-filter-type",-574719529)], null)));
var current_entry_params = rum.core.react.call(null,cashtime.calendar.logic.state_cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-entry-params","current-entry-params",-1061823999)], null)));
return React.createElement("div",({"className": "ui padded grid"}),React.createElement("div",({"className": "row"}),React.createElement("div",({"className": "column"}),React.createElement("div",({"onClick": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params){
return (function (){
return cashtime.calendar.logic.refresh_random_data.call(null);
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params))
, "className": "ui button"}),"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435"),React.createElement("div",({"onClick": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params){
return (function (){
return cashtime.calendar.logic.print_appstate.call(null);
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params))
, "className": "ui button"}),"\u0420\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C"))),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),React.createElement("div",({"className": "four wide column"}),React.createElement("div",({"className": "search-div"}),React.createElement("div",({"className": "ui fluid input"}),sablono.interpreter.create_element.call(null,"input",({"type": "text", "onChange": ((function (inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params){
return (function (p1__38176_SHARP_){
return cashtime.calendar.logic.set_search_str.call(null,cashtime.dom_utils.value_of_input.call(null,p1__38176_SHARP_));
});})(inflow_entries,outflow_entries,avail_dim_groups,active_dim_group_ids,used_dim_groups,row_outflow_totals,row_inflow_totals,d_params,sort_dim_params,flow_filter_type,current_entry_params))
}))))),(function (){var attrs38177 = cashtime.calendar.view.timeline_panel_view.call(null,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38177))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ten","wide","column"], null)], null),attrs38177)):({"className": "ten wide column"})),((cljs.core.map_QMARK_.call(null,attrs38177))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38177)], null)));
})(),React.createElement("div",({"className": "two wide column"}))),React.createElement("div",({"style": ({"paddingBottom": "0"}), "className": "row"}),(function (){var attrs38180 = cashtime.calendar.view.dimensions_toggler_view.call(null,avail_dim_groups,active_dim_group_ids);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38180))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["four","wide","column"], null)], null),attrs38180)):({"className": "four wide column"})),((cljs.core.map_QMARK_.call(null,attrs38180))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38180)], null)));
})(),React.createElement("div",({"className": "twelve wide column"}))),React.createElement("div",({"className": "stretched bottom aligned row"}),React.createElement("div",({"className": "four wide column"}),(function (){var attrs38183 = cashtime.calendar.view.dimensions_view.call(null,cljs.core.vals.call(null,used_dim_groups),cashtime.tuples.tuples_from_entries.call(null,outflow_entries),cashtime.tuples.tuples_from_entries.call(null,inflow_entries),sort_dim_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38183))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dimensions-div"], null)], null),attrs38183)):({"className": "dimensions-div"})),((cljs.core.map_QMARK_.call(null,attrs38183))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38183)], null)));
})()),React.createElement("div",({"className": "ten wide column"}),(function (){var attrs38184 = cashtime.calendar.view.entries_view.call(null,outflow_entries,inflow_entries,d_params);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38184))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["values-div"], null)], null),attrs38184)):({"className": "values-div"})),((cljs.core.map_QMARK_.call(null,attrs38184))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38184)], null)));
})()),React.createElement("div",({"className": "two wide column"}),(function (){var attrs38185 = cashtime.calendar.view.row_totals_view.call(null,row_outflow_totals,row_inflow_totals);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38185))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["row-totals-div"], null)], null),attrs38185)):({"className": "row-totals-div"})),((cljs.core.map_QMARK_.call(null,attrs38185))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38185)], null)));
})())),sablono.interpreter.interpret.call(null,cashtime.calendar.view.entry_modal_view.call(null,"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438",current_entry_params,cljs.core.vals.call(null,avail_dim_groups))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"main-view");

//# sourceMappingURL=view.js.map?rel=1491223906845