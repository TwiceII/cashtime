// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.moment_utils');
goog.require('cljs.core');
goog.require('clojure.string');
cashtime.moment_utils.iso_str__GT_moment = (function cashtime$moment_utils$iso_str__GT_moment(iso_str){
return (new moment(iso_str));
});
cashtime.moment_utils.moment__GT_iso_str = (function cashtime$moment_utils$moment__GT_iso_str(md){
return [cljs.core.str(md.format("YYYY-MM-DD")),cljs.core.str("T00:00:00Z")].join('');
});
cashtime.moment_utils.to_print_datetime = (function cashtime$moment_utils$to_print_datetime(iso_str){
return moment.utc(iso_str).format("DD.MM.YYYY HH:mm:ss");
});
cashtime.moment_utils.to_print_date = (function cashtime$moment_utils$to_print_date(iso_str){

if(!(clojure.string.blank_QMARK_.call(null,iso_str))){
return cashtime.moment_utils.iso_str__GT_moment.call(null,iso_str).format("DD.MM.YYYY");
} else {
return null;
}
});
cashtime.moment_utils.ddmmyyyy__GT_iso_date_str = (function cashtime$moment_utils$ddmmyyyy__GT_iso_date_str(ddmmyyyy_str){
return moment(ddmmyyyy_str,"DD.MM.YYYY",true).format("YYYY.MM.DD");
});
cashtime.moment_utils.ddmmyyyy__GT_real_iso_date_str = (function cashtime$moment_utils$ddmmyyyy__GT_real_iso_date_str(ddmmyyyy_str){

if(!(clojure.string.blank_QMARK_.call(null,ddmmyyyy_str))){
return [cljs.core.str(moment(ddmmyyyy_str,"DD.MM.YYYY",true).format("YYYY-MM-DD")),cljs.core.str("T00:00:00Z")].join('');
} else {
return null;
}
});
/**
 * Получить текущую дату
 */
cashtime.moment_utils.current_date = (function cashtime$moment_utils$current_date(){
var cdatetime = (new moment());
return (new moment((new Date(cdatetime.year(),cdatetime.month(),cdatetime.date()))));
});
/**
 * Получить текущую дату в iso строке
 */
cashtime.moment_utils.current_date_iso_str = (function cashtime$moment_utils$current_date_iso_str(){
return cashtime.moment_utils.ddmmyyyy__GT_real_iso_date_str.call(null,cashtime.moment_utils.current_date.call(null).format("DD.MM.YYYY"));
});
/**
 * Получить дату с добавлением кол-ва дней
 */
cashtime.moment_utils.add_days_moment = (function cashtime$moment_utils$add_days_moment(moment_d,days){
return moment_d.add(days,"days");
});
/**
 * Получить разницу между двумя датами в днях
 */
cashtime.moment_utils.diff_in_days = (function cashtime$moment_utils$diff_in_days(moment1,moment2){
return moment1.diff(moment2,"days");
});
cashtime.moment_utils.moment_comparison = (function cashtime$moment_utils$moment_comparison(cond_fn_str,moment_date1,moment_date2){
var G__50336 = cond_fn_str;
switch (G__50336) {
case "isSame":
return moment_date1.isSame(moment_date2);

break;
case "isBefore":
return moment_date1.isBefore(moment_date2);

break;
case "isAfter":
return moment_date1.isAfter(moment_date2);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cond_fn_str)].join('')));

}
});
cashtime.moment_utils.moment_same_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.moment_comparison,"isSame");
cashtime.moment_utils.moment_before_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.moment_comparison,"isBefore");
cashtime.moment_utils.moment_after_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.moment_comparison,"isAfter");
cashtime.moment_utils.str_moment_comparison = (function cashtime$moment_utils$str_moment_comparison(comp_fn,dstr1,dstr2){
return comp_fn.call(null,cashtime.moment_utils.iso_str__GT_moment.call(null,dstr1),cashtime.moment_utils.iso_str__GT_moment.call(null,dstr2));
});
cashtime.moment_utils.str_moment_after_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.str_moment_comparison,cashtime.moment_utils.moment_after_QMARK_);
cashtime.moment_utils.str_moment_before_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.str_moment_comparison,cashtime.moment_utils.moment_before_QMARK_);
cashtime.moment_utils.str_moment_same_QMARK_ = cljs.core.partial.call(null,cashtime.moment_utils.str_moment_comparison,cashtime.moment_utils.moment_same_QMARK_);
/**
 * Сортировать список дат (к-ые в ISO формате)
 */
cashtime.moment_utils.sort_dates = (function cashtime$moment_utils$sort_dates(var_args){
var args50338 = [];
var len__25835__auto___50341 = arguments.length;
var i__25836__auto___50342 = (0);
while(true){
if((i__25836__auto___50342 < len__25835__auto___50341)){
args50338.push((arguments[i__25836__auto___50342]));

var G__50343 = (i__25836__auto___50342 + (1));
i__25836__auto___50342 = G__50343;
continue;
} else {
}
break;
}

var G__50340 = args50338.length;
switch (G__50340) {
case 1:
return cashtime.moment_utils.sort_dates.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cashtime.moment_utils.sort_dates.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50338.length)].join('')));

}
});

cashtime.moment_utils.sort_dates.cljs$core$IFn$_invoke$arity$1 = (function (iso_dates){
return cashtime.moment_utils.sort_dates.call(null,iso_dates,false);
});

cashtime.moment_utils.sort_dates.cljs$core$IFn$_invoke$arity$2 = (function (iso_dates,desc_QMARK_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,(cljs.core.truth_(desc_QMARK_)?cashtime.moment_utils.str_moment_after_QMARK_:cashtime.moment_utils.str_moment_before_QMARK_),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,iso_dates)));
});

cashtime.moment_utils.sort_dates.cljs$lang$maxFixedArity = 2;

/**
 * Получить случайную vanilla js дату между двумя другими (со временем)
 */
cashtime.moment_utils.random_date_between = (function cashtime$moment_utils$random_date_between(from_d,to_d){
return (new Date((from_d.getTime() + (Math.random() * (to_d.getTime() - from_d.getTime())))));
});
cashtime.moment_utils.print_date_in_needed_format = (function cashtime$moment_utils$print_date_in_needed_format(date,d_group_mode){
if(clojure.string.blank_QMARK_.call(null,date)){
return null;
} else {
return (new moment(date)).format((function (){var G__50346 = (((d_group_mode instanceof cljs.core.Keyword))?d_group_mode.fqn:null);
switch (G__50346) {
case "by-month":
return "MMMM, YYYY";

break;
case "by-year":
return "YYYY";

break;
default:
return "DD.MM.YYYY";

}
})());
}
});
/**
 * Получить iso-str по месяцу (т.е 1-число месяца)
 */
cashtime.moment_utils.iso_date_by_month = (function cashtime$moment_utils$iso_date_by_month(iso_str){
return cashtime.moment_utils.moment__GT_iso_str.call(null,(function (p1__50348_SHARP_){
return (new moment([p1__50348_SHARP_.year(),p1__50348_SHARP_.month()]));
}).call(null,cashtime.moment_utils.iso_str__GT_moment.call(null,iso_str)));
});
/**
 * Получить iso-str по году (т.е 1 января этого года)
 */
cashtime.moment_utils.iso_date_by_year = (function cashtime$moment_utils$iso_date_by_year(iso_str){
return cashtime.moment_utils.moment__GT_iso_str.call(null,(function (p1__50349_SHARP_){
return (new moment([p1__50349_SHARP_.year()]));
}).call(null,cashtime.moment_utils.iso_str__GT_moment.call(null,iso_str)));
});
/**
 * Проверка, что js дата позже сегодняшней
 */
cashtime.moment_utils.after_today_QMARK_ = (function cashtime$moment_utils$after_today_QMARK_(js_date){
return (function (p1__50350_SHARP_){
return p1__50350_SHARP_.isAfter((new moment()));
}).call(null,(new moment(js_date)));
});
cashtime.moment_utils.pikaday_i18n_params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"previousMonth","previousMonth",-986902797),"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",new cljs.core.Keyword(null,"nextMonth","nextMonth",1433969443),"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u042F\u043D\u0432\u0430\u0440\u044C","\u0424\u0435\u0432\u0440\u0430\u043B\u044C","\u041C\u0430\u0440\u0442","\u0410\u043F\u0440\u0435\u043B\u044C","\u041C\u0430\u0439","\u0418\u044E\u043D\u044C","\u0418\u044E\u043B\u044C","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C","\u041E\u043A\u0442\u044F\u0431\u0440\u044C","\u041D\u043E\u044F\u0431\u0440\u044C","\u0414\u0435\u043A\u0430\u0431\u0440\u044C"], null),new cljs.core.Keyword(null,"weekdays","weekdays",2061292258),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435","\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041F\u044F\u0442\u043D\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043E\u0442\u0430"], null),new cljs.core.Keyword(null,"weekdaysShort","weekdaysShort",1244560039),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0412\u0441","\u041F\u043D","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041F\u0442","\u0421\u0431"], null)], null);

//# sourceMappingURL=moment_utils.js.map?rel=1491374067309