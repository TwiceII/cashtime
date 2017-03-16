// Compiled by ClojureScript 1.9.229 {}
goog.provide('cashtime.random_utils');
goog.require('cljs.core');
goog.require('cashtime.moment_utils');
/**
 * Получить рандомный id измерения из группы
 */
cashtime.random_utils.random_dim_id = (function cashtime$random_utils$random_dim_id(all_dim_groups,dim_group_id){
return cljs.core.rand_nth.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"dims","dims",-466522889).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,all_dim_groups,dim_group_id))));
});
/**
 * Рандомное число от 1 до Х (включительно)
 */
cashtime.random_utils.rand_1_to = (function cashtime$random_utils$rand_1_to(x){
return (cljs.core.rand_int.call(null,x) + (1));
});
/**
 * Вернуть значение value только если выпала вероятность указанная в success-percent
 */
cashtime.random_utils.rand_if = (function cashtime$random_utils$rand_if(success_percent,value){
if((cashtime.random_utils.rand_1_to.call(null,(100)) <= success_percent)){
return value;
} else {
return null;
}
});
cashtime.random_utils.options__GT_ranges = (function cashtime$random_utils$options__GT_ranges(options){
return new cljs.core.Keyword(null,"ranges","ranges",1887686682).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce_kv.call(null,(function (total_m,k,p){
return (function (p1__34972_SHARP_){
return cljs.core.assoc.call(null,p1__34972_SHARP_,new cljs.core.Keyword(null,"last-v","last-v",-1730715756),(p + new cljs.core.Keyword(null,"last-v","last-v",-1730715756).cljs$core$IFn$_invoke$arity$1(p1__34972_SHARP_)));
}).call(null,(function (p1__34971_SHARP_){
return cljs.core.update.call(null,p1__34971_SHARP_,new cljs.core.Keyword(null,"ranges","ranges",1887686682),(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"last-v","last-v",-1730715756).cljs$core$IFn$_invoke$arity$1(p1__34971_SHARP_) + (1)),(p + new cljs.core.Keyword(null,"last-v","last-v",-1730715756).cljs$core$IFn$_invoke$arity$1(p1__34971_SHARP_))], null),k);
}));
}).call(null,total_m));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ranges","ranges",1887686682),null,new cljs.core.Keyword(null,"last-v","last-v",-1730715756),(0)], null),options));
});
cashtime.random_utils.opt_for_number = (function cashtime$random_utils$opt_for_number(rngs,number){
return cljs.core.some.call(null,(function (p1__34973_SHARP_){
if(((cljs.core.first.call(null,cljs.core.first.call(null,p1__34973_SHARP_)) <= number)) && ((cljs.core.second.call(null,cljs.core.first.call(null,p1__34973_SHARP_)) >= number))){
return cljs.core.second.call(null,p1__34973_SHARP_);
} else {
return null;
}
}),cljs.core.vec.call(null,rngs));
});
cashtime.random_utils.rand_nth_by_percentage = (function cashtime$random_utils$rand_nth_by_percentage(options_w_percents){
var rngs = cashtime.random_utils.options__GT_ranges.call(null,options_w_percents);
var r_number = cashtime.random_utils.rand_1_to.call(null,(100));
return cashtime.random_utils.opt_for_number.call(null,rngs,r_number);
});
/**
 * Рандомное число от Х до Y (включительно, можно использовать отриц.числа)
 */
cashtime.random_utils.rand_from_to = (function cashtime$random_utils$rand_from_to(from,to){
return ((cljs.core.rand_int.call(null,(Math.abs(from) + (to + (1)))) + (from - (1))) + (1));
});
/**
 * Получить рандомное кол-во рандомных id групп измерений
 */
cashtime.random_utils.random_group_ids = (function cashtime$random_utils$random_group_ids(all_dim_groups){
return cljs.core.take.call(null,cashtime.random_utils.rand_1_to.call(null,cljs.core.count.call(null,cljs.core.keys.call(null,all_dim_groups))),cljs.core.shuffle.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,all_dim_groups))));
});
/**
 * Рандомный тапл измерений для записи
 */
cashtime.random_utils.random_tuple = (function cashtime$random_utils$random_tuple(dim_groups){
return cljs.core.reduce.call(null,(function (m,group_id){
return cljs.core.assoc.call(null,m,group_id,cashtime.random_utils.random_dim_id.call(null,dim_groups,group_id));
}),cljs.core.PersistentArrayMap.EMPTY,cashtime.random_utils.random_group_ids.call(null,dim_groups));
});
/**
 * Рандомная дата в строчном iso формате
 */
cashtime.random_utils.random_iso_date = (function cashtime$random_utils$random_iso_date(from_d,to_d){
return (function (p1__34974_SHARP_){
return (new Date(p1__34974_SHARP_.getFullYear(),p1__34974_SHARP_.getMonth(),p1__34974_SHARP_.getDate()));
}).call(null,cashtime.moment_utils.random_date_between.call(null,from_d,to_d)).toISOString();
});
/**
 * Рандомная пара [дата - факт-план]
 */
cashtime.random_utils.random_date_value_pair = (function cashtime$random_utils$random_date_value_pair(from_d,to_d,min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.random_utils.random_iso_date.call(null,from_d,to_d),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fact","fact",-799816531),cashtime.random_utils.rand_from_to.call(null,min_summ,max_summ),new cljs.core.Keyword(null,"plan","plan",1118952668),cashtime.random_utils.rand_if.call(null,(5),cashtime.random_utils.rand_from_to.call(null,min_summ,max_summ))], null)], null);
});
cashtime.random_utils.repeat_and_get_map = (function cashtime$random_utils$repeat_and_get_map(max_count,val_pair_fn){
return cljs.core.reduce.call(null,(function (m,p__34979){
var vec__34980 = p__34979;
var k = cljs.core.nth.call(null,vec__34980,(0),null);
var v = cljs.core.nth.call(null,vec__34980,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.repeatedly.call(null,cashtime.random_utils.rand_1_to.call(null,max_count),val_pair_fn));
});
/**
 * Рандомный хм дат и факт-планов
 */
cashtime.random_utils.random_date_values = (function cashtime$random_utils$random_date_values(from_d,to_d,max_amount,min_summ,max_summ){
return cashtime.random_utils.repeat_and_get_map.call(null,max_amount,(function (){
return cashtime.random_utils.random_date_value_pair.call(null,from_d,to_d,min_summ,max_summ);
}));
});
/**
 * Рандомная пара [тапл - суммы по датам]
 */
cashtime.random_utils.random_tuple_pair = (function cashtime$random_utils$random_tuple_pair(all_dim_groups,from_d,to_d,max_vals_amount,min_summ,max_summ){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cashtime.random_utils.random_tuple.call(null,all_dim_groups),cashtime.random_utils.random_date_values.call(null,from_d,to_d,max_vals_amount,min_summ,max_summ)], null);
});
/**
 * Получить рандомные записи
 */
cashtime.random_utils.random_entries = (function cashtime$random_utils$random_entries(all_dim_groups,from_d,to_d,max_row_amount,max_vals_amount,min_summ,max_summ){
return cashtime.random_utils.repeat_and_get_map.call(null,max_row_amount,(function (){
return cashtime.random_utils.random_tuple_pair.call(null,all_dim_groups,from_d,to_d,max_vals_amount,min_summ,max_summ);
}));
});

//# sourceMappingURL=random_utils.js.map?rel=1489667926419