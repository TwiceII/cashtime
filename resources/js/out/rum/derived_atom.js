// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args25891 = [];
var len__25835__auto___25911 = arguments.length;
var i__25836__auto___25912 = (0);
while(true){
if((i__25836__auto___25912 < len__25835__auto___25911)){
args25891.push((arguments[i__25836__auto___25912]));

var G__25913 = (i__25836__auto___25912 + (1));
i__25836__auto___25912 = G__25913;
continue;
} else {
}
break;
}

var G__25893 = args25891.length;
switch (G__25893) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25891.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__25894 = opts;
var map__25894__$1 = ((((!((map__25894 == null)))?((((map__25894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25894):map__25894);
var ref = cljs.core.get.call(null,map__25894__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__25894__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__25896 = cljs.core.count.call(null,refs);
switch (G__25896) {
case (1):
var vec__25897 = refs;
var a = cljs.core.nth.call(null,vec__25897,(0),null);
return ((function (vec__25897,a,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__25897,a,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__25900 = refs;
var a = cljs.core.nth.call(null,vec__25900,(0),null);
var b = cljs.core.nth.call(null,vec__25900,(1),null);
return ((function (vec__25900,a,b,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__25900,a,b,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__25903 = refs;
var a = cljs.core.nth.call(null,vec__25903,(0),null);
var b = cljs.core.nth.call(null,vec__25903,(1),null);
var c = cljs.core.nth.call(null,vec__25903,(2),null);
return ((function (vec__25903,a,b,c,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__25903,a,b,c,G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__25896,map__25894,map__25894__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__25906 = ref;
cljs.core.reset_BANG_.call(null,G__25906,recalc.call(null));

return G__25906;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__25894,map__25894__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__25894,map__25894__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__25894,map__25894__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__25894,map__25894__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__25907_25916 = cljs.core.seq.call(null,refs);
var chunk__25908_25917 = null;
var count__25909_25918 = (0);
var i__25910_25919 = (0);
while(true){
if((i__25910_25919 < count__25909_25918)){
var ref_25920__$1 = cljs.core._nth.call(null,chunk__25908_25917,i__25910_25919);
cljs.core.add_watch.call(null,ref_25920__$1,key,watch);

var G__25921 = seq__25907_25916;
var G__25922 = chunk__25908_25917;
var G__25923 = count__25909_25918;
var G__25924 = (i__25910_25919 + (1));
seq__25907_25916 = G__25921;
chunk__25908_25917 = G__25922;
count__25909_25918 = G__25923;
i__25910_25919 = G__25924;
continue;
} else {
var temp__4657__auto___25925 = cljs.core.seq.call(null,seq__25907_25916);
if(temp__4657__auto___25925){
var seq__25907_25926__$1 = temp__4657__auto___25925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25907_25926__$1)){
var c__25571__auto___25927 = cljs.core.chunk_first.call(null,seq__25907_25926__$1);
var G__25928 = cljs.core.chunk_rest.call(null,seq__25907_25926__$1);
var G__25929 = c__25571__auto___25927;
var G__25930 = cljs.core.count.call(null,c__25571__auto___25927);
var G__25931 = (0);
seq__25907_25916 = G__25928;
chunk__25908_25917 = G__25929;
count__25909_25918 = G__25930;
i__25910_25919 = G__25931;
continue;
} else {
var ref_25932__$1 = cljs.core.first.call(null,seq__25907_25926__$1);
cljs.core.add_watch.call(null,ref_25932__$1,key,watch);

var G__25933 = cljs.core.next.call(null,seq__25907_25926__$1);
var G__25934 = null;
var G__25935 = (0);
var G__25936 = (0);
seq__25907_25916 = G__25933;
chunk__25908_25917 = G__25934;
count__25909_25918 = G__25935;
i__25910_25919 = G__25936;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1486531226528