// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24760__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24760__auto__){
return or__24760__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24760__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30177_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30177_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30182 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30183 = null;
var count__30184 = (0);
var i__30185 = (0);
while(true){
if((i__30185 < count__30184)){
var n = cljs.core._nth.call(null,chunk__30183,i__30185);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30186 = seq__30182;
var G__30187 = chunk__30183;
var G__30188 = count__30184;
var G__30189 = (i__30185 + (1));
seq__30182 = G__30186;
chunk__30183 = G__30187;
count__30184 = G__30188;
i__30185 = G__30189;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30182);
if(temp__4657__auto__){
var seq__30182__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30182__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__30182__$1);
var G__30190 = cljs.core.chunk_rest.call(null,seq__30182__$1);
var G__30191 = c__25571__auto__;
var G__30192 = cljs.core.count.call(null,c__25571__auto__);
var G__30193 = (0);
seq__30182 = G__30190;
chunk__30183 = G__30191;
count__30184 = G__30192;
i__30185 = G__30193;
continue;
} else {
var n = cljs.core.first.call(null,seq__30182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30194 = cljs.core.next.call(null,seq__30182__$1);
var G__30195 = null;
var G__30196 = (0);
var G__30197 = (0);
seq__30182 = G__30194;
chunk__30183 = G__30195;
count__30184 = G__30196;
i__30185 = G__30197;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30248_30259 = cljs.core.seq.call(null,deps);
var chunk__30249_30260 = null;
var count__30250_30261 = (0);
var i__30251_30262 = (0);
while(true){
if((i__30251_30262 < count__30250_30261)){
var dep_30263 = cljs.core._nth.call(null,chunk__30249_30260,i__30251_30262);
topo_sort_helper_STAR_.call(null,dep_30263,(depth + (1)),state);

var G__30264 = seq__30248_30259;
var G__30265 = chunk__30249_30260;
var G__30266 = count__30250_30261;
var G__30267 = (i__30251_30262 + (1));
seq__30248_30259 = G__30264;
chunk__30249_30260 = G__30265;
count__30250_30261 = G__30266;
i__30251_30262 = G__30267;
continue;
} else {
var temp__4657__auto___30268 = cljs.core.seq.call(null,seq__30248_30259);
if(temp__4657__auto___30268){
var seq__30248_30269__$1 = temp__4657__auto___30268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30248_30269__$1)){
var c__25571__auto___30270 = cljs.core.chunk_first.call(null,seq__30248_30269__$1);
var G__30271 = cljs.core.chunk_rest.call(null,seq__30248_30269__$1);
var G__30272 = c__25571__auto___30270;
var G__30273 = cljs.core.count.call(null,c__25571__auto___30270);
var G__30274 = (0);
seq__30248_30259 = G__30271;
chunk__30249_30260 = G__30272;
count__30250_30261 = G__30273;
i__30251_30262 = G__30274;
continue;
} else {
var dep_30275 = cljs.core.first.call(null,seq__30248_30269__$1);
topo_sort_helper_STAR_.call(null,dep_30275,(depth + (1)),state);

var G__30276 = cljs.core.next.call(null,seq__30248_30269__$1);
var G__30277 = null;
var G__30278 = (0);
var G__30279 = (0);
seq__30248_30259 = G__30276;
chunk__30249_30260 = G__30277;
count__30250_30261 = G__30278;
i__30251_30262 = G__30279;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30252){
var vec__30256 = p__30252;
var seq__30257 = cljs.core.seq.call(null,vec__30256);
var first__30258 = cljs.core.first.call(null,seq__30257);
var seq__30257__$1 = cljs.core.next.call(null,seq__30257);
var x = first__30258;
var xs = seq__30257__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30256,seq__30257,first__30258,seq__30257__$1,x,xs,get_deps__$1){
return (function (p1__30198_SHARP_){
return clojure.set.difference.call(null,p1__30198_SHARP_,x);
});})(vec__30256,seq__30257,first__30258,seq__30257__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30292 = cljs.core.seq.call(null,provides);
var chunk__30293 = null;
var count__30294 = (0);
var i__30295 = (0);
while(true){
if((i__30295 < count__30294)){
var prov = cljs.core._nth.call(null,chunk__30293,i__30295);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30296_30304 = cljs.core.seq.call(null,requires);
var chunk__30297_30305 = null;
var count__30298_30306 = (0);
var i__30299_30307 = (0);
while(true){
if((i__30299_30307 < count__30298_30306)){
var req_30308 = cljs.core._nth.call(null,chunk__30297_30305,i__30299_30307);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30308,prov);

var G__30309 = seq__30296_30304;
var G__30310 = chunk__30297_30305;
var G__30311 = count__30298_30306;
var G__30312 = (i__30299_30307 + (1));
seq__30296_30304 = G__30309;
chunk__30297_30305 = G__30310;
count__30298_30306 = G__30311;
i__30299_30307 = G__30312;
continue;
} else {
var temp__4657__auto___30313 = cljs.core.seq.call(null,seq__30296_30304);
if(temp__4657__auto___30313){
var seq__30296_30314__$1 = temp__4657__auto___30313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30296_30314__$1)){
var c__25571__auto___30315 = cljs.core.chunk_first.call(null,seq__30296_30314__$1);
var G__30316 = cljs.core.chunk_rest.call(null,seq__30296_30314__$1);
var G__30317 = c__25571__auto___30315;
var G__30318 = cljs.core.count.call(null,c__25571__auto___30315);
var G__30319 = (0);
seq__30296_30304 = G__30316;
chunk__30297_30305 = G__30317;
count__30298_30306 = G__30318;
i__30299_30307 = G__30319;
continue;
} else {
var req_30320 = cljs.core.first.call(null,seq__30296_30314__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30320,prov);

var G__30321 = cljs.core.next.call(null,seq__30296_30314__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__30296_30304 = G__30321;
chunk__30297_30305 = G__30322;
count__30298_30306 = G__30323;
i__30299_30307 = G__30324;
continue;
}
} else {
}
}
break;
}

var G__30325 = seq__30292;
var G__30326 = chunk__30293;
var G__30327 = count__30294;
var G__30328 = (i__30295 + (1));
seq__30292 = G__30325;
chunk__30293 = G__30326;
count__30294 = G__30327;
i__30295 = G__30328;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30292);
if(temp__4657__auto__){
var seq__30292__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30292__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__30292__$1);
var G__30329 = cljs.core.chunk_rest.call(null,seq__30292__$1);
var G__30330 = c__25571__auto__;
var G__30331 = cljs.core.count.call(null,c__25571__auto__);
var G__30332 = (0);
seq__30292 = G__30329;
chunk__30293 = G__30330;
count__30294 = G__30331;
i__30295 = G__30332;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30292__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30300_30333 = cljs.core.seq.call(null,requires);
var chunk__30301_30334 = null;
var count__30302_30335 = (0);
var i__30303_30336 = (0);
while(true){
if((i__30303_30336 < count__30302_30335)){
var req_30337 = cljs.core._nth.call(null,chunk__30301_30334,i__30303_30336);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30337,prov);

var G__30338 = seq__30300_30333;
var G__30339 = chunk__30301_30334;
var G__30340 = count__30302_30335;
var G__30341 = (i__30303_30336 + (1));
seq__30300_30333 = G__30338;
chunk__30301_30334 = G__30339;
count__30302_30335 = G__30340;
i__30303_30336 = G__30341;
continue;
} else {
var temp__4657__auto___30342__$1 = cljs.core.seq.call(null,seq__30300_30333);
if(temp__4657__auto___30342__$1){
var seq__30300_30343__$1 = temp__4657__auto___30342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30300_30343__$1)){
var c__25571__auto___30344 = cljs.core.chunk_first.call(null,seq__30300_30343__$1);
var G__30345 = cljs.core.chunk_rest.call(null,seq__30300_30343__$1);
var G__30346 = c__25571__auto___30344;
var G__30347 = cljs.core.count.call(null,c__25571__auto___30344);
var G__30348 = (0);
seq__30300_30333 = G__30345;
chunk__30301_30334 = G__30346;
count__30302_30335 = G__30347;
i__30303_30336 = G__30348;
continue;
} else {
var req_30349 = cljs.core.first.call(null,seq__30300_30343__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30349,prov);

var G__30350 = cljs.core.next.call(null,seq__30300_30343__$1);
var G__30351 = null;
var G__30352 = (0);
var G__30353 = (0);
seq__30300_30333 = G__30350;
chunk__30301_30334 = G__30351;
count__30302_30335 = G__30352;
i__30303_30336 = G__30353;
continue;
}
} else {
}
}
break;
}

var G__30354 = cljs.core.next.call(null,seq__30292__$1);
var G__30355 = null;
var G__30356 = (0);
var G__30357 = (0);
seq__30292 = G__30354;
chunk__30293 = G__30355;
count__30294 = G__30356;
i__30295 = G__30357;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30362_30366 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30363_30367 = null;
var count__30364_30368 = (0);
var i__30365_30369 = (0);
while(true){
if((i__30365_30369 < count__30364_30368)){
var ns_30370 = cljs.core._nth.call(null,chunk__30363_30367,i__30365_30369);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30370);

var G__30371 = seq__30362_30366;
var G__30372 = chunk__30363_30367;
var G__30373 = count__30364_30368;
var G__30374 = (i__30365_30369 + (1));
seq__30362_30366 = G__30371;
chunk__30363_30367 = G__30372;
count__30364_30368 = G__30373;
i__30365_30369 = G__30374;
continue;
} else {
var temp__4657__auto___30375 = cljs.core.seq.call(null,seq__30362_30366);
if(temp__4657__auto___30375){
var seq__30362_30376__$1 = temp__4657__auto___30375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30362_30376__$1)){
var c__25571__auto___30377 = cljs.core.chunk_first.call(null,seq__30362_30376__$1);
var G__30378 = cljs.core.chunk_rest.call(null,seq__30362_30376__$1);
var G__30379 = c__25571__auto___30377;
var G__30380 = cljs.core.count.call(null,c__25571__auto___30377);
var G__30381 = (0);
seq__30362_30366 = G__30378;
chunk__30363_30367 = G__30379;
count__30364_30368 = G__30380;
i__30365_30369 = G__30381;
continue;
} else {
var ns_30382 = cljs.core.first.call(null,seq__30362_30376__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30382);

var G__30383 = cljs.core.next.call(null,seq__30362_30376__$1);
var G__30384 = null;
var G__30385 = (0);
var G__30386 = (0);
seq__30362_30366 = G__30383;
chunk__30363_30367 = G__30384;
count__30364_30368 = G__30385;
i__30365_30369 = G__30386;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24760__auto__ = goog.require__;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30387__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30388__i = 0, G__30388__a = new Array(arguments.length -  0);
while (G__30388__i < G__30388__a.length) {G__30388__a[G__30388__i] = arguments[G__30388__i + 0]; ++G__30388__i;}
  args = new cljs.core.IndexedSeq(G__30388__a,0);
} 
return G__30387__delegate.call(this,args);};
G__30387.cljs$lang$maxFixedArity = 0;
G__30387.cljs$lang$applyTo = (function (arglist__30389){
var args = cljs.core.seq(arglist__30389);
return G__30387__delegate(args);
});
G__30387.cljs$core$IFn$_invoke$arity$variadic = G__30387__delegate;
return G__30387;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30391 = cljs.core._EQ_;
var expr__30392 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30391.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30392))){
var path_parts = ((function (pred__30391,expr__30392){
return (function (p1__30390_SHARP_){
return clojure.string.split.call(null,p1__30390_SHARP_,/[\/\\]/);
});})(pred__30391,expr__30392))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30391,expr__30392){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30394){if((e30394 instanceof Error)){
var e = e30394;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30394;

}
}})());
});
;})(path_parts,sep,root,pred__30391,expr__30392))
} else {
if(cljs.core.truth_(pred__30391.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30392))){
return ((function (pred__30391,expr__30392){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30391,expr__30392){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30391,expr__30392))
);

return deferred.addErrback(((function (deferred,pred__30391,expr__30392){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30391,expr__30392))
);
});
;})(pred__30391,expr__30392))
} else {
return ((function (pred__30391,expr__30392){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30391,expr__30392))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30395,callback){
var map__30398 = p__30395;
var map__30398__$1 = ((((!((map__30398 == null)))?((((map__30398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30398):map__30398);
var file_msg = map__30398__$1;
var request_url = cljs.core.get.call(null,map__30398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30398,map__30398__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30398,map__30398__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__){
return (function (state_30422){
var state_val_30423 = (state_30422[(1)]);
if((state_val_30423 === (7))){
var inst_30418 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
var statearr_30424_30444 = state_30422__$1;
(statearr_30424_30444[(2)] = inst_30418);

(statearr_30424_30444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (1))){
var state_30422__$1 = state_30422;
var statearr_30425_30445 = state_30422__$1;
(statearr_30425_30445[(2)] = null);

(statearr_30425_30445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (4))){
var inst_30402 = (state_30422[(7)]);
var inst_30402__$1 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30426 = state_30422;
(statearr_30426[(7)] = inst_30402__$1);

return statearr_30426;
})();
if(cljs.core.truth_(inst_30402__$1)){
var statearr_30427_30446 = state_30422__$1;
(statearr_30427_30446[(1)] = (5));

} else {
var statearr_30428_30447 = state_30422__$1;
(statearr_30428_30447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (6))){
var state_30422__$1 = state_30422;
var statearr_30429_30448 = state_30422__$1;
(statearr_30429_30448[(2)] = null);

(statearr_30429_30448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (3))){
var inst_30420 = (state_30422[(2)]);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30422__$1,inst_30420);
} else {
if((state_val_30423 === (2))){
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30422__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30423 === (11))){
var inst_30414 = (state_30422[(2)]);
var state_30422__$1 = (function (){var statearr_30430 = state_30422;
(statearr_30430[(8)] = inst_30414);

return statearr_30430;
})();
var statearr_30431_30449 = state_30422__$1;
(statearr_30431_30449[(2)] = null);

(statearr_30431_30449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (9))){
var inst_30406 = (state_30422[(9)]);
var inst_30408 = (state_30422[(10)]);
var inst_30410 = inst_30408.call(null,inst_30406);
var state_30422__$1 = state_30422;
var statearr_30432_30450 = state_30422__$1;
(statearr_30432_30450[(2)] = inst_30410);

(statearr_30432_30450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (5))){
var inst_30402 = (state_30422[(7)]);
var inst_30404 = figwheel.client.file_reloading.blocking_load.call(null,inst_30402);
var state_30422__$1 = state_30422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30422__$1,(8),inst_30404);
} else {
if((state_val_30423 === (10))){
var inst_30406 = (state_30422[(9)]);
var inst_30412 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30406);
var state_30422__$1 = state_30422;
var statearr_30433_30451 = state_30422__$1;
(statearr_30433_30451[(2)] = inst_30412);

(statearr_30433_30451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30423 === (8))){
var inst_30408 = (state_30422[(10)]);
var inst_30402 = (state_30422[(7)]);
var inst_30406 = (state_30422[(2)]);
var inst_30407 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30408__$1 = cljs.core.get.call(null,inst_30407,inst_30402);
var state_30422__$1 = (function (){var statearr_30434 = state_30422;
(statearr_30434[(9)] = inst_30406);

(statearr_30434[(10)] = inst_30408__$1);

return statearr_30434;
})();
if(cljs.core.truth_(inst_30408__$1)){
var statearr_30435_30452 = state_30422__$1;
(statearr_30435_30452[(1)] = (9));

} else {
var statearr_30436_30453 = state_30422__$1;
(statearr_30436_30453[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27200__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27089__auto__ = null;
var figwheel$client$file_reloading$state_machine__27089__auto____0 = (function (){
var statearr_30440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30440[(0)] = figwheel$client$file_reloading$state_machine__27089__auto__);

(statearr_30440[(1)] = (1));

return statearr_30440;
});
var figwheel$client$file_reloading$state_machine__27089__auto____1 = (function (state_30422){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_30422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e30441){if((e30441 instanceof Object)){
var ex__27092__auto__ = e30441;
var statearr_30442_30454 = state_30422;
(statearr_30442_30454[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30455 = state_30422;
state_30422 = G__30455;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27089__auto__ = function(state_30422){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27089__auto____1.call(this,state_30422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27089__auto____0;
figwheel$client$file_reloading$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27089__auto____1;
return figwheel$client$file_reloading$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__))
})();
var state__27202__auto__ = (function (){var statearr_30443 = f__27201__auto__.call(null);
(statearr_30443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__))
);

return c__27200__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30456,callback){
var map__30459 = p__30456;
var map__30459__$1 = ((((!((map__30459 == null)))?((((map__30459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30459):map__30459);
var file_msg = map__30459__$1;
var namespace = cljs.core.get.call(null,map__30459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30459,map__30459__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30459,map__30459__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30461){
var map__30464 = p__30461;
var map__30464__$1 = ((((!((map__30464 == null)))?((((map__30464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30464):map__30464);
var file_msg = map__30464__$1;
var namespace = cljs.core.get.call(null,map__30464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24748__auto__){
var or__24760__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24748__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30466,callback){
var map__30469 = p__30466;
var map__30469__$1 = ((((!((map__30469 == null)))?((((map__30469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30469):map__30469);
var file_msg = map__30469__$1;
var request_url = cljs.core.get.call(null,map__30469__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27200__auto___30573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___30573,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___30573,out){
return (function (state_30555){
var state_val_30556 = (state_30555[(1)]);
if((state_val_30556 === (1))){
var inst_30529 = cljs.core.seq.call(null,files);
var inst_30530 = cljs.core.first.call(null,inst_30529);
var inst_30531 = cljs.core.next.call(null,inst_30529);
var inst_30532 = files;
var state_30555__$1 = (function (){var statearr_30557 = state_30555;
(statearr_30557[(7)] = inst_30530);

(statearr_30557[(8)] = inst_30532);

(statearr_30557[(9)] = inst_30531);

return statearr_30557;
})();
var statearr_30558_30574 = state_30555__$1;
(statearr_30558_30574[(2)] = null);

(statearr_30558_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (2))){
var inst_30538 = (state_30555[(10)]);
var inst_30532 = (state_30555[(8)]);
var inst_30537 = cljs.core.seq.call(null,inst_30532);
var inst_30538__$1 = cljs.core.first.call(null,inst_30537);
var inst_30539 = cljs.core.next.call(null,inst_30537);
var inst_30540 = (inst_30538__$1 == null);
var inst_30541 = cljs.core.not.call(null,inst_30540);
var state_30555__$1 = (function (){var statearr_30559 = state_30555;
(statearr_30559[(10)] = inst_30538__$1);

(statearr_30559[(11)] = inst_30539);

return statearr_30559;
})();
if(inst_30541){
var statearr_30560_30575 = state_30555__$1;
(statearr_30560_30575[(1)] = (4));

} else {
var statearr_30561_30576 = state_30555__$1;
(statearr_30561_30576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (3))){
var inst_30553 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30555__$1,inst_30553);
} else {
if((state_val_30556 === (4))){
var inst_30538 = (state_30555[(10)]);
var inst_30543 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30538);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(7),inst_30543);
} else {
if((state_val_30556 === (5))){
var inst_30549 = cljs.core.async.close_BANG_.call(null,out);
var state_30555__$1 = state_30555;
var statearr_30562_30577 = state_30555__$1;
(statearr_30562_30577[(2)] = inst_30549);

(statearr_30562_30577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (6))){
var inst_30551 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30563_30578 = state_30555__$1;
(statearr_30563_30578[(2)] = inst_30551);

(statearr_30563_30578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (7))){
var inst_30539 = (state_30555[(11)]);
var inst_30545 = (state_30555[(2)]);
var inst_30546 = cljs.core.async.put_BANG_.call(null,out,inst_30545);
var inst_30532 = inst_30539;
var state_30555__$1 = (function (){var statearr_30564 = state_30555;
(statearr_30564[(12)] = inst_30546);

(statearr_30564[(8)] = inst_30532);

return statearr_30564;
})();
var statearr_30565_30579 = state_30555__$1;
(statearr_30565_30579[(2)] = null);

(statearr_30565_30579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27200__auto___30573,out))
;
return ((function (switch__27088__auto__,c__27200__auto___30573,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____0 = (function (){
var statearr_30569 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30569[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__);

(statearr_30569[(1)] = (1));

return statearr_30569;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____1 = (function (state_30555){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_30555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e30570){if((e30570 instanceof Object)){
var ex__27092__auto__ = e30570;
var statearr_30571_30580 = state_30555;
(statearr_30571_30580[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30581 = state_30555;
state_30555 = G__30581;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__ = function(state_30555){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____1.call(this,state_30555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___30573,out))
})();
var state__27202__auto__ = (function (){var statearr_30572 = f__27201__auto__.call(null);
(statearr_30572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___30573);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___30573,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30582,opts){
var map__30586 = p__30582;
var map__30586__$1 = ((((!((map__30586 == null)))?((((map__30586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30586):map__30586);
var eval_body__$1 = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24748__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24748__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24748__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30588){var e = e30588;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30589_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30589_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30598){
var vec__30599 = p__30598;
var k = cljs.core.nth.call(null,vec__30599,(0),null);
var v = cljs.core.nth.call(null,vec__30599,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30602){
var vec__30603 = p__30602;
var k = cljs.core.nth.call(null,vec__30603,(0),null);
var v = cljs.core.nth.call(null,vec__30603,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30609,p__30610){
var map__30857 = p__30609;
var map__30857__$1 = ((((!((map__30857 == null)))?((((map__30857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30857):map__30857);
var opts = map__30857__$1;
var before_jsload = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30857__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30858 = p__30610;
var map__30858__$1 = ((((!((map__30858 == null)))?((((map__30858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30858):map__30858);
var msg = map__30858__$1;
var files = cljs.core.get.call(null,map__30858__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30858__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30858__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_30872 = (state_31011[(7)]);
var inst_30873 = (state_31011[(8)]);
var inst_30874 = (state_31011[(9)]);
var inst_30875 = (state_31011[(10)]);
var inst_30880 = cljs.core._nth.call(null,inst_30873,inst_30875);
var inst_30881 = figwheel.client.file_reloading.eval_body.call(null,inst_30880,opts);
var inst_30882 = (inst_30875 + (1));
var tmp31013 = inst_30872;
var tmp31014 = inst_30873;
var tmp31015 = inst_30874;
var inst_30872__$1 = tmp31013;
var inst_30873__$1 = tmp31014;
var inst_30874__$1 = tmp31015;
var inst_30875__$1 = inst_30882;
var state_31011__$1 = (function (){var statearr_31016 = state_31011;
(statearr_31016[(7)] = inst_30872__$1);

(statearr_31016[(8)] = inst_30873__$1);

(statearr_31016[(9)] = inst_30874__$1);

(statearr_31016[(11)] = inst_30881);

(statearr_31016[(10)] = inst_30875__$1);

return statearr_31016;
})();
var statearr_31017_31103 = state_31011__$1;
(statearr_31017_31103[(2)] = null);

(statearr_31017_31103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (20))){
var inst_30915 = (state_31011[(12)]);
var inst_30923 = figwheel.client.file_reloading.sort_files.call(null,inst_30915);
var state_31011__$1 = state_31011;
var statearr_31018_31104 = state_31011__$1;
(statearr_31018_31104[(2)] = inst_30923);

(statearr_31018_31104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (27))){
var state_31011__$1 = state_31011;
var statearr_31019_31105 = state_31011__$1;
(statearr_31019_31105[(2)] = null);

(statearr_31019_31105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (1))){
var inst_30864 = (state_31011[(13)]);
var inst_30861 = before_jsload.call(null,files);
var inst_30862 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30863 = (function (){return ((function (inst_30864,inst_30861,inst_30862,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30606_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30606_SHARP_);
});
;})(inst_30864,inst_30861,inst_30862,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30864__$1 = cljs.core.filter.call(null,inst_30863,files);
var inst_30865 = cljs.core.not_empty.call(null,inst_30864__$1);
var state_31011__$1 = (function (){var statearr_31020 = state_31011;
(statearr_31020[(13)] = inst_30864__$1);

(statearr_31020[(14)] = inst_30862);

(statearr_31020[(15)] = inst_30861);

return statearr_31020;
})();
if(cljs.core.truth_(inst_30865)){
var statearr_31021_31106 = state_31011__$1;
(statearr_31021_31106[(1)] = (2));

} else {
var statearr_31022_31107 = state_31011__$1;
(statearr_31022_31107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (24))){
var state_31011__$1 = state_31011;
var statearr_31023_31108 = state_31011__$1;
(statearr_31023_31108[(2)] = null);

(statearr_31023_31108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (39))){
var inst_30965 = (state_31011[(16)]);
var state_31011__$1 = state_31011;
var statearr_31024_31109 = state_31011__$1;
(statearr_31024_31109[(2)] = inst_30965);

(statearr_31024_31109[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (46))){
var inst_31006 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31025_31110 = state_31011__$1;
(statearr_31025_31110[(2)] = inst_31006);

(statearr_31025_31110[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (4))){
var inst_30909 = (state_31011[(2)]);
var inst_30910 = cljs.core.List.EMPTY;
var inst_30911 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30910);
var inst_30912 = (function (){return ((function (inst_30909,inst_30910,inst_30911,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30607_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30607_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30607_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_30909,inst_30910,inst_30911,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30913 = cljs.core.filter.call(null,inst_30912,files);
var inst_30914 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30915 = cljs.core.concat.call(null,inst_30913,inst_30914);
var state_31011__$1 = (function (){var statearr_31026 = state_31011;
(statearr_31026[(12)] = inst_30915);

(statearr_31026[(17)] = inst_30911);

(statearr_31026[(18)] = inst_30909);

return statearr_31026;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31027_31111 = state_31011__$1;
(statearr_31027_31111[(1)] = (16));

} else {
var statearr_31028_31112 = state_31011__$1;
(statearr_31028_31112[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (15))){
var inst_30899 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31029_31113 = state_31011__$1;
(statearr_31029_31113[(2)] = inst_30899);

(statearr_31029_31113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (21))){
var inst_30925 = (state_31011[(19)]);
var inst_30925__$1 = (state_31011[(2)]);
var inst_30926 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30925__$1);
var state_31011__$1 = (function (){var statearr_31030 = state_31011;
(statearr_31030[(19)] = inst_30925__$1);

return statearr_31030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(22),inst_30926);
} else {
if((state_val_31012 === (31))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (32))){
var inst_30965 = (state_31011[(16)]);
var inst_30970 = inst_30965.cljs$lang$protocol_mask$partition0$;
var inst_30971 = (inst_30970 & (64));
var inst_30972 = inst_30965.cljs$core$ISeq$;
var inst_30973 = (inst_30971) || (inst_30972);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30973)){
var statearr_31031_31114 = state_31011__$1;
(statearr_31031_31114[(1)] = (35));

} else {
var statearr_31032_31115 = state_31011__$1;
(statearr_31032_31115[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (40))){
var inst_30986 = (state_31011[(20)]);
var inst_30985 = (state_31011[(2)]);
var inst_30986__$1 = cljs.core.get.call(null,inst_30985,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30987 = cljs.core.get.call(null,inst_30985,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30988 = cljs.core.not_empty.call(null,inst_30986__$1);
var state_31011__$1 = (function (){var statearr_31033 = state_31011;
(statearr_31033[(20)] = inst_30986__$1);

(statearr_31033[(21)] = inst_30987);

return statearr_31033;
})();
if(cljs.core.truth_(inst_30988)){
var statearr_31034_31116 = state_31011__$1;
(statearr_31034_31116[(1)] = (41));

} else {
var statearr_31035_31117 = state_31011__$1;
(statearr_31035_31117[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (33))){
var state_31011__$1 = state_31011;
var statearr_31036_31118 = state_31011__$1;
(statearr_31036_31118[(2)] = false);

(statearr_31036_31118[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (13))){
var inst_30885 = (state_31011[(22)]);
var inst_30889 = cljs.core.chunk_first.call(null,inst_30885);
var inst_30890 = cljs.core.chunk_rest.call(null,inst_30885);
var inst_30891 = cljs.core.count.call(null,inst_30889);
var inst_30872 = inst_30890;
var inst_30873 = inst_30889;
var inst_30874 = inst_30891;
var inst_30875 = (0);
var state_31011__$1 = (function (){var statearr_31037 = state_31011;
(statearr_31037[(7)] = inst_30872);

(statearr_31037[(8)] = inst_30873);

(statearr_31037[(9)] = inst_30874);

(statearr_31037[(10)] = inst_30875);

return statearr_31037;
})();
var statearr_31038_31119 = state_31011__$1;
(statearr_31038_31119[(2)] = null);

(statearr_31038_31119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (22))){
var inst_30929 = (state_31011[(23)]);
var inst_30925 = (state_31011[(19)]);
var inst_30933 = (state_31011[(24)]);
var inst_30928 = (state_31011[(25)]);
var inst_30928__$1 = (state_31011[(2)]);
var inst_30929__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30928__$1);
var inst_30930 = (function (){var all_files = inst_30925;
var res_SINGLEQUOTE_ = inst_30928__$1;
var res = inst_30929__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30929,inst_30925,inst_30933,inst_30928,inst_30928__$1,inst_30929__$1,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30608_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30608_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30929,inst_30925,inst_30933,inst_30928,inst_30928__$1,inst_30929__$1,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30931 = cljs.core.filter.call(null,inst_30930,inst_30928__$1);
var inst_30932 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30933__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30932);
var inst_30934 = cljs.core.not_empty.call(null,inst_30933__$1);
var state_31011__$1 = (function (){var statearr_31039 = state_31011;
(statearr_31039[(26)] = inst_30931);

(statearr_31039[(23)] = inst_30929__$1);

(statearr_31039[(24)] = inst_30933__$1);

(statearr_31039[(25)] = inst_30928__$1);

return statearr_31039;
})();
if(cljs.core.truth_(inst_30934)){
var statearr_31040_31120 = state_31011__$1;
(statearr_31040_31120[(1)] = (23));

} else {
var statearr_31041_31121 = state_31011__$1;
(statearr_31041_31121[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (36))){
var state_31011__$1 = state_31011;
var statearr_31042_31122 = state_31011__$1;
(statearr_31042_31122[(2)] = false);

(statearr_31042_31122[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (41))){
var inst_30986 = (state_31011[(20)]);
var inst_30990 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30991 = cljs.core.map.call(null,inst_30990,inst_30986);
var inst_30992 = cljs.core.pr_str.call(null,inst_30991);
var inst_30993 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30992)].join('');
var inst_30994 = figwheel.client.utils.log.call(null,inst_30993);
var state_31011__$1 = state_31011;
var statearr_31043_31123 = state_31011__$1;
(statearr_31043_31123[(2)] = inst_30994);

(statearr_31043_31123[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (43))){
var inst_30987 = (state_31011[(21)]);
var inst_30997 = (state_31011[(2)]);
var inst_30998 = cljs.core.not_empty.call(null,inst_30987);
var state_31011__$1 = (function (){var statearr_31044 = state_31011;
(statearr_31044[(27)] = inst_30997);

return statearr_31044;
})();
if(cljs.core.truth_(inst_30998)){
var statearr_31045_31124 = state_31011__$1;
(statearr_31045_31124[(1)] = (44));

} else {
var statearr_31046_31125 = state_31011__$1;
(statearr_31046_31125[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (29))){
var inst_30931 = (state_31011[(26)]);
var inst_30929 = (state_31011[(23)]);
var inst_30925 = (state_31011[(19)]);
var inst_30933 = (state_31011[(24)]);
var inst_30965 = (state_31011[(16)]);
var inst_30928 = (state_31011[(25)]);
var inst_30961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30964 = (function (){var all_files = inst_30925;
var res_SINGLEQUOTE_ = inst_30928;
var res = inst_30929;
var files_not_loaded = inst_30931;
var dependencies_that_loaded = inst_30933;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30965,inst_30928,inst_30961,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30963){
var map__31047 = p__30963;
var map__31047__$1 = ((((!((map__31047 == null)))?((((map__31047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);
var namespace = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30965,inst_30928,inst_30961,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30965__$1 = cljs.core.group_by.call(null,inst_30964,inst_30931);
var inst_30967 = (inst_30965__$1 == null);
var inst_30968 = cljs.core.not.call(null,inst_30967);
var state_31011__$1 = (function (){var statearr_31049 = state_31011;
(statearr_31049[(16)] = inst_30965__$1);

(statearr_31049[(28)] = inst_30961);

return statearr_31049;
})();
if(inst_30968){
var statearr_31050_31126 = state_31011__$1;
(statearr_31050_31126[(1)] = (32));

} else {
var statearr_31051_31127 = state_31011__$1;
(statearr_31051_31127[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (44))){
var inst_30987 = (state_31011[(21)]);
var inst_31000 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30987);
var inst_31001 = cljs.core.pr_str.call(null,inst_31000);
var inst_31002 = [cljs.core.str("not required: "),cljs.core.str(inst_31001)].join('');
var inst_31003 = figwheel.client.utils.log.call(null,inst_31002);
var state_31011__$1 = state_31011;
var statearr_31052_31128 = state_31011__$1;
(statearr_31052_31128[(2)] = inst_31003);

(statearr_31052_31128[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var inst_30906 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31053_31129 = state_31011__$1;
(statearr_31053_31129[(2)] = inst_30906);

(statearr_31053_31129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (28))){
var inst_30931 = (state_31011[(26)]);
var inst_30958 = (state_31011[(2)]);
var inst_30959 = cljs.core.not_empty.call(null,inst_30931);
var state_31011__$1 = (function (){var statearr_31054 = state_31011;
(statearr_31054[(29)] = inst_30958);

return statearr_31054;
})();
if(cljs.core.truth_(inst_30959)){
var statearr_31055_31130 = state_31011__$1;
(statearr_31055_31130[(1)] = (29));

} else {
var statearr_31056_31131 = state_31011__$1;
(statearr_31056_31131[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (25))){
var inst_30929 = (state_31011[(23)]);
var inst_30945 = (state_31011[(2)]);
var inst_30946 = cljs.core.not_empty.call(null,inst_30929);
var state_31011__$1 = (function (){var statearr_31057 = state_31011;
(statearr_31057[(30)] = inst_30945);

return statearr_31057;
})();
if(cljs.core.truth_(inst_30946)){
var statearr_31058_31132 = state_31011__$1;
(statearr_31058_31132[(1)] = (26));

} else {
var statearr_31059_31133 = state_31011__$1;
(statearr_31059_31133[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (34))){
var inst_30980 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30980)){
var statearr_31060_31134 = state_31011__$1;
(statearr_31060_31134[(1)] = (38));

} else {
var statearr_31061_31135 = state_31011__$1;
(statearr_31061_31135[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (17))){
var state_31011__$1 = state_31011;
var statearr_31062_31136 = state_31011__$1;
(statearr_31062_31136[(2)] = recompile_dependents);

(statearr_31062_31136[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (3))){
var state_31011__$1 = state_31011;
var statearr_31063_31137 = state_31011__$1;
(statearr_31063_31137[(2)] = null);

(statearr_31063_31137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (12))){
var inst_30902 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31064_31138 = state_31011__$1;
(statearr_31064_31138[(2)] = inst_30902);

(statearr_31064_31138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (2))){
var inst_30864 = (state_31011[(13)]);
var inst_30871 = cljs.core.seq.call(null,inst_30864);
var inst_30872 = inst_30871;
var inst_30873 = null;
var inst_30874 = (0);
var inst_30875 = (0);
var state_31011__$1 = (function (){var statearr_31065 = state_31011;
(statearr_31065[(7)] = inst_30872);

(statearr_31065[(8)] = inst_30873);

(statearr_31065[(9)] = inst_30874);

(statearr_31065[(10)] = inst_30875);

return statearr_31065;
})();
var statearr_31066_31139 = state_31011__$1;
(statearr_31066_31139[(2)] = null);

(statearr_31066_31139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (23))){
var inst_30931 = (state_31011[(26)]);
var inst_30929 = (state_31011[(23)]);
var inst_30925 = (state_31011[(19)]);
var inst_30933 = (state_31011[(24)]);
var inst_30928 = (state_31011[(25)]);
var inst_30936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30938 = (function (){var all_files = inst_30925;
var res_SINGLEQUOTE_ = inst_30928;
var res = inst_30929;
var files_not_loaded = inst_30931;
var dependencies_that_loaded = inst_30933;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30936,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30937){
var map__31067 = p__30937;
var map__31067__$1 = ((((!((map__31067 == null)))?((((map__31067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31067):map__31067);
var request_url = cljs.core.get.call(null,map__31067__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30936,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30939 = cljs.core.reverse.call(null,inst_30933);
var inst_30940 = cljs.core.map.call(null,inst_30938,inst_30939);
var inst_30941 = cljs.core.pr_str.call(null,inst_30940);
var inst_30942 = figwheel.client.utils.log.call(null,inst_30941);
var state_31011__$1 = (function (){var statearr_31069 = state_31011;
(statearr_31069[(31)] = inst_30936);

return statearr_31069;
})();
var statearr_31070_31140 = state_31011__$1;
(statearr_31070_31140[(2)] = inst_30942);

(statearr_31070_31140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (35))){
var state_31011__$1 = state_31011;
var statearr_31071_31141 = state_31011__$1;
(statearr_31071_31141[(2)] = true);

(statearr_31071_31141[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (19))){
var inst_30915 = (state_31011[(12)]);
var inst_30921 = figwheel.client.file_reloading.expand_files.call(null,inst_30915);
var state_31011__$1 = state_31011;
var statearr_31072_31142 = state_31011__$1;
(statearr_31072_31142[(2)] = inst_30921);

(statearr_31072_31142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (11))){
var state_31011__$1 = state_31011;
var statearr_31073_31143 = state_31011__$1;
(statearr_31073_31143[(2)] = null);

(statearr_31073_31143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (9))){
var inst_30904 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31074_31144 = state_31011__$1;
(statearr_31074_31144[(2)] = inst_30904);

(statearr_31074_31144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (5))){
var inst_30874 = (state_31011[(9)]);
var inst_30875 = (state_31011[(10)]);
var inst_30877 = (inst_30875 < inst_30874);
var inst_30878 = inst_30877;
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30878)){
var statearr_31075_31145 = state_31011__$1;
(statearr_31075_31145[(1)] = (7));

} else {
var statearr_31076_31146 = state_31011__$1;
(statearr_31076_31146[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (14))){
var inst_30885 = (state_31011[(22)]);
var inst_30894 = cljs.core.first.call(null,inst_30885);
var inst_30895 = figwheel.client.file_reloading.eval_body.call(null,inst_30894,opts);
var inst_30896 = cljs.core.next.call(null,inst_30885);
var inst_30872 = inst_30896;
var inst_30873 = null;
var inst_30874 = (0);
var inst_30875 = (0);
var state_31011__$1 = (function (){var statearr_31077 = state_31011;
(statearr_31077[(7)] = inst_30872);

(statearr_31077[(8)] = inst_30873);

(statearr_31077[(32)] = inst_30895);

(statearr_31077[(9)] = inst_30874);

(statearr_31077[(10)] = inst_30875);

return statearr_31077;
})();
var statearr_31078_31147 = state_31011__$1;
(statearr_31078_31147[(2)] = null);

(statearr_31078_31147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (45))){
var state_31011__$1 = state_31011;
var statearr_31079_31148 = state_31011__$1;
(statearr_31079_31148[(2)] = null);

(statearr_31079_31148[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (26))){
var inst_30931 = (state_31011[(26)]);
var inst_30929 = (state_31011[(23)]);
var inst_30925 = (state_31011[(19)]);
var inst_30933 = (state_31011[(24)]);
var inst_30928 = (state_31011[(25)]);
var inst_30948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30950 = (function (){var all_files = inst_30925;
var res_SINGLEQUOTE_ = inst_30928;
var res = inst_30929;
var files_not_loaded = inst_30931;
var dependencies_that_loaded = inst_30933;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30948,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30949){
var map__31080 = p__30949;
var map__31080__$1 = ((((!((map__31080 == null)))?((((map__31080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080):map__31080);
var namespace = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31080__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30948,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30951 = cljs.core.map.call(null,inst_30950,inst_30929);
var inst_30952 = cljs.core.pr_str.call(null,inst_30951);
var inst_30953 = figwheel.client.utils.log.call(null,inst_30952);
var inst_30954 = (function (){var all_files = inst_30925;
var res_SINGLEQUOTE_ = inst_30928;
var res = inst_30929;
var files_not_loaded = inst_30931;
var dependencies_that_loaded = inst_30933;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30948,inst_30950,inst_30951,inst_30952,inst_30953,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30931,inst_30929,inst_30925,inst_30933,inst_30928,inst_30948,inst_30950,inst_30951,inst_30952,inst_30953,state_val_31012,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30955 = setTimeout(inst_30954,(10));
var state_31011__$1 = (function (){var statearr_31082 = state_31011;
(statearr_31082[(33)] = inst_30948);

(statearr_31082[(34)] = inst_30953);

return statearr_31082;
})();
var statearr_31083_31149 = state_31011__$1;
(statearr_31083_31149[(2)] = inst_30955);

(statearr_31083_31149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (16))){
var state_31011__$1 = state_31011;
var statearr_31084_31150 = state_31011__$1;
(statearr_31084_31150[(2)] = reload_dependents);

(statearr_31084_31150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (38))){
var inst_30965 = (state_31011[(16)]);
var inst_30982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30965);
var state_31011__$1 = state_31011;
var statearr_31085_31151 = state_31011__$1;
(statearr_31085_31151[(2)] = inst_30982);

(statearr_31085_31151[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (30))){
var state_31011__$1 = state_31011;
var statearr_31086_31152 = state_31011__$1;
(statearr_31086_31152[(2)] = null);

(statearr_31086_31152[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (10))){
var inst_30885 = (state_31011[(22)]);
var inst_30887 = cljs.core.chunked_seq_QMARK_.call(null,inst_30885);
var state_31011__$1 = state_31011;
if(inst_30887){
var statearr_31087_31153 = state_31011__$1;
(statearr_31087_31153[(1)] = (13));

} else {
var statearr_31088_31154 = state_31011__$1;
(statearr_31088_31154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (18))){
var inst_30919 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30919)){
var statearr_31089_31155 = state_31011__$1;
(statearr_31089_31155[(1)] = (19));

} else {
var statearr_31090_31156 = state_31011__$1;
(statearr_31090_31156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (42))){
var state_31011__$1 = state_31011;
var statearr_31091_31157 = state_31011__$1;
(statearr_31091_31157[(2)] = null);

(statearr_31091_31157[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (37))){
var inst_30977 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31092_31158 = state_31011__$1;
(statearr_31092_31158[(2)] = inst_30977);

(statearr_31092_31158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (8))){
var inst_30872 = (state_31011[(7)]);
var inst_30885 = (state_31011[(22)]);
var inst_30885__$1 = cljs.core.seq.call(null,inst_30872);
var state_31011__$1 = (function (){var statearr_31093 = state_31011;
(statearr_31093[(22)] = inst_30885__$1);

return statearr_31093;
})();
if(inst_30885__$1){
var statearr_31094_31159 = state_31011__$1;
(statearr_31094_31159[(1)] = (10));

} else {
var statearr_31095_31160 = state_31011__$1;
(statearr_31095_31160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27088__auto__,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31099[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____1 = (function (state_31011){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__27092__auto__ = e31100;
var statearr_31101_31161 = state_31011;
(statearr_31101_31161[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31162 = state_31011;
state_31011 = G__31162;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27202__auto__ = (function (){var statearr_31102 = f__27201__auto__.call(null);
(statearr_31102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__,map__30857,map__30857__$1,opts,before_jsload,on_jsload,reload_dependents,map__30858,map__30858__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27200__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31165,link){
var map__31168 = p__31165;
var map__31168__$1 = ((((!((map__31168 == null)))?((((map__31168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31168):map__31168);
var file = cljs.core.get.call(null,map__31168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31168,map__31168__$1,file){
return (function (p1__31163_SHARP_,p2__31164_SHARP_){
if(cljs.core._EQ_.call(null,p1__31163_SHARP_,p2__31164_SHARP_)){
return p1__31163_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31168,map__31168__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31174){
var map__31175 = p__31174;
var map__31175__$1 = ((((!((map__31175 == null)))?((((map__31175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31175):map__31175);
var match_length = cljs.core.get.call(null,map__31175__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31175__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31170_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31170_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31177 = [];
var len__25835__auto___31180 = arguments.length;
var i__25836__auto___31181 = (0);
while(true){
if((i__25836__auto___31181 < len__25835__auto___31180)){
args31177.push((arguments[i__25836__auto___31181]));

var G__31182 = (i__25836__auto___31181 + (1));
i__25836__auto___31181 = G__31182;
continue;
} else {
}
break;
}

var G__31179 = args31177.length;
switch (G__31179) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31177.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31184_SHARP_,p2__31185_SHARP_){
return cljs.core.assoc.call(null,p1__31184_SHARP_,cljs.core.get.call(null,p2__31185_SHARP_,key),p2__31185_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31186){
var map__31189 = p__31186;
var map__31189__$1 = ((((!((map__31189 == null)))?((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var f_data = map__31189__$1;
var file = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31191,p__31192){
var map__31201 = p__31191;
var map__31201__$1 = ((((!((map__31201 == null)))?((((map__31201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31201):map__31201);
var opts = map__31201__$1;
var on_cssload = cljs.core.get.call(null,map__31201__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31202 = p__31192;
var map__31202__$1 = ((((!((map__31202 == null)))?((((map__31202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202):map__31202);
var files_msg = map__31202__$1;
var files = cljs.core.get.call(null,map__31202__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31205_31209 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31206_31210 = null;
var count__31207_31211 = (0);
var i__31208_31212 = (0);
while(true){
if((i__31208_31212 < count__31207_31211)){
var f_31213 = cljs.core._nth.call(null,chunk__31206_31210,i__31208_31212);
figwheel.client.file_reloading.reload_css_file.call(null,f_31213);

var G__31214 = seq__31205_31209;
var G__31215 = chunk__31206_31210;
var G__31216 = count__31207_31211;
var G__31217 = (i__31208_31212 + (1));
seq__31205_31209 = G__31214;
chunk__31206_31210 = G__31215;
count__31207_31211 = G__31216;
i__31208_31212 = G__31217;
continue;
} else {
var temp__4657__auto___31218 = cljs.core.seq.call(null,seq__31205_31209);
if(temp__4657__auto___31218){
var seq__31205_31219__$1 = temp__4657__auto___31218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31205_31219__$1)){
var c__25571__auto___31220 = cljs.core.chunk_first.call(null,seq__31205_31219__$1);
var G__31221 = cljs.core.chunk_rest.call(null,seq__31205_31219__$1);
var G__31222 = c__25571__auto___31220;
var G__31223 = cljs.core.count.call(null,c__25571__auto___31220);
var G__31224 = (0);
seq__31205_31209 = G__31221;
chunk__31206_31210 = G__31222;
count__31207_31211 = G__31223;
i__31208_31212 = G__31224;
continue;
} else {
var f_31225 = cljs.core.first.call(null,seq__31205_31219__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31225);

var G__31226 = cljs.core.next.call(null,seq__31205_31219__$1);
var G__31227 = null;
var G__31228 = (0);
var G__31229 = (0);
seq__31205_31209 = G__31226;
chunk__31206_31210 = G__31227;
count__31207_31211 = G__31228;
i__31208_31212 = G__31229;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31201,map__31201__$1,opts,on_cssload,map__31202,map__31202__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31201,map__31201__$1,opts,on_cssload,map__31202,map__31202__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479472476200