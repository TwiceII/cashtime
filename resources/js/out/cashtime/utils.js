// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.utils');
goog.require('cljs.core');
goog.require('clojure.string');
cashtime.utils.nil_or_empty_QMARK_ = (function cashtime$utils$nil_or_empty_QMARK_(x){
return ((x == null)) || (cljs.core.empty_QMARK_.call(null,x));
});
/**
 * true if coll contains elm
 */
cashtime.utils.in_QMARK_ = (function cashtime$utils$in_QMARK_(coll,elm){
return cljs.core.some.call(null,(function (p1__41644_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__41644_SHARP_);
}),coll);
});
/**
 * Найти в векторе/списке элемент,
 *   который удовлетв. условию
 */
cashtime.utils.find_some = (function cashtime$utils$find_some(pred_fn,l){
return cljs.core.some.call(null,(function (p1__41645_SHARP_){
if(cljs.core.truth_(pred_fn.call(null,p1__41645_SHARP_))){
return p1__41645_SHARP_;
} else {
return null;
}
}),l);
});
/**
 * Есть ли в строке подстрока (независимо от регистров)
 */
cashtime.utils.has_substr_QMARK_ = (function cashtime$utils$has_substr_QMARK_(s,ss){
return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,clojure.string.lower_case.call(null,ss)),clojure.string.lower_case.call(null,s)));
});
/**
 * Вывести число с разделениями, запятой и т.д
 */
cashtime.utils.get_number_with_decimals_str = (function cashtime$utils$get_number_with_decimals_str(var_args){
var args41646 = [];
var len__25835__auto___41649 = arguments.length;
var i__25836__auto___41650 = (0);
while(true){
if((i__25836__auto___41650 < len__25835__auto___41649)){
args41646.push((arguments[i__25836__auto___41650]));

var G__41651 = (i__25836__auto___41650 + (1));
i__25836__auto___41650 = G__41651;
continue;
} else {
}
break;
}

var G__41648 = args41646.length;
switch (G__41648) {
case 1:
return cashtime.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cashtime.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41646.length)].join('')));

}
});

cashtime.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$1 = (function (input){
return cashtime.utils.get_number_with_decimals_str.call(null,input,false);
});

cashtime.utils.get_number_with_decimals_str.cljs$core$IFn$_invoke$arity$2 = (function (input,show_dash_if_zero_QMARK_){
if((input == null)){
return "";
} else {
if(cljs.core.truth_((function (){var and__24748__auto__ = show_dash_if_zero_QMARK_;
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core._EQ_.call(null,input,(0));
} else {
return and__24748__auto__;
}
})())){
return "-";
} else {
var js_reg = (new RegExp("\\B(?=(\\d{3})+(?!\\d))","g"));
var n = input.toString().replace(js_reg," ");
return n;
}
}
});

cashtime.utils.get_number_with_decimals_str.cljs$lang$maxFixedArity = 2;

/**
 * Основной способ отображения денег (для поступления денег)
 *   с '-' вместо 0
 */
cashtime.utils.money_str = (function cashtime$utils$money_str(input){
return cashtime.utils.get_number_with_decimals_str.call(null,(cljs.core.truth_(input)?Math.round(input):null),true);
});
/**
 * Отображение денег с 0
 */
cashtime.utils.money_str_with_zero = (function cashtime$utils$money_str_with_zero(input){
return cashtime.utils.get_number_with_decimals_str.call(null,Math.round(input),false);
});
/**
 * Найти хм с нужным ключом и значением в списке хм
 */
cashtime.utils.get_map_by_key = (function cashtime$utils$get_map_by_key(allmaps,mkey,mvalue){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core._EQ_.call(null,mkey.call(null,m),mvalue);
}),allmaps));
});
/**
 * Найти хм с нужным id в списке хм
 */
cashtime.utils.get_map_by_id = (function cashtime$utils$get_map_by_id(allmaps,id){
return cashtime.utils.get_map_by_key.call(null,allmaps,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
/**
 * Проверка, находится ли элемент в векторе или списке
 */
cashtime.utils.in_list_QMARK_ = (function cashtime$utils$in_list_QMARK_(l,value){
return !((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([value], true),l) == null));
});
/**
 * Для -> макроса: если условие выполнилось,
 *   то применить ф-цию, иначе вернуть старое значение
 */
cashtime.utils.when_or_skip = (function cashtime$utils$when_or_skip(prev,condition,cond_fn){
if(cljs.core.truth_(condition)){
return cond_fn.call(null,prev);
} else {
return prev;
}
});
cashtime.utils.rename_keys_in_map = (function cashtime$utils$rename_keys_in_map(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__41657){
var vec__41658 = p__41657;
var old = cljs.core.nth.call(null,vec__41658,(0),null);
var new$ = cljs.core.nth.call(null,vec__41658,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Сгруппировать в хм по какому-то полю
 *   замена для group-id, когда предполагается,
 *   что одному ключу одно значение
 */
cashtime.utils.map_index_by = (function cashtime$utils$map_index_by(k,seq_of_maps){
return cljs.core.reduce.call(null,(function (res_m,iter_m){
var temp__4655__auto__ = cljs.core.get.call(null,iter_m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return cljs.core.assoc.call(null,res_m,v,iter_m);
} else {
return res_m;
}
}),cljs.core.PersistentArrayMap.EMPTY,seq_of_maps);
});
/**
 * Получить ключ в хм у к-го значение равно нужному
 */
cashtime.utils.k_of_v = (function cashtime$utils$k_of_v(m,v){
return cljs.core.some.call(null,(function (p1__41661_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__41661_SHARP_),v)){
return cljs.core.first.call(null,p1__41661_SHARP_);
} else {
return null;
}
}),cljs.core.vec.call(null,m));
});

//# sourceMappingURL=utils.js.map?rel=1489747500141