// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26801 = arguments.length;
var i__25836__auto___26802 = (0);
while(true){
if((i__25836__auto___26802 < len__25835__auto___26801)){
args__25842__auto__.push((arguments[i__25836__auto___26802]));

var G__26803 = (i__25836__auto___26802 + (1));
i__25836__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq26798){
var G__26799 = cljs.core.first.call(null,seq26798);
var seq26798__$1 = cljs.core.next.call(null,seq26798);
var G__26800 = cljs.core.first.call(null,seq26798__$1);
var seq26798__$2 = cljs.core.next.call(null,seq26798__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__26799,G__26800,seq26798__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=util.js.map?rel=1486531227727