// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32281){
var map__32306 = p__32281;
var map__32306__$1 = ((((!((map__32306 == null)))?((((map__32306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32306):map__32306);
var m = map__32306__$1;
var n = cljs.core.get.call(null,map__32306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32308_32330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32309_32331 = null;
var count__32310_32332 = (0);
var i__32311_32333 = (0);
while(true){
if((i__32311_32333 < count__32310_32332)){
var f_32334 = cljs.core._nth.call(null,chunk__32309_32331,i__32311_32333);
cljs.core.println.call(null,"  ",f_32334);

var G__32335 = seq__32308_32330;
var G__32336 = chunk__32309_32331;
var G__32337 = count__32310_32332;
var G__32338 = (i__32311_32333 + (1));
seq__32308_32330 = G__32335;
chunk__32309_32331 = G__32336;
count__32310_32332 = G__32337;
i__32311_32333 = G__32338;
continue;
} else {
var temp__4657__auto___32339 = cljs.core.seq.call(null,seq__32308_32330);
if(temp__4657__auto___32339){
var seq__32308_32340__$1 = temp__4657__auto___32339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32308_32340__$1)){
var c__25571__auto___32341 = cljs.core.chunk_first.call(null,seq__32308_32340__$1);
var G__32342 = cljs.core.chunk_rest.call(null,seq__32308_32340__$1);
var G__32343 = c__25571__auto___32341;
var G__32344 = cljs.core.count.call(null,c__25571__auto___32341);
var G__32345 = (0);
seq__32308_32330 = G__32342;
chunk__32309_32331 = G__32343;
count__32310_32332 = G__32344;
i__32311_32333 = G__32345;
continue;
} else {
var f_32346 = cljs.core.first.call(null,seq__32308_32340__$1);
cljs.core.println.call(null,"  ",f_32346);

var G__32347 = cljs.core.next.call(null,seq__32308_32340__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__32308_32330 = G__32347;
chunk__32309_32331 = G__32348;
count__32310_32332 = G__32349;
i__32311_32333 = G__32350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32351);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32351)))?cljs.core.second.call(null,arglists_32351):arglists_32351));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32312_32352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32313_32353 = null;
var count__32314_32354 = (0);
var i__32315_32355 = (0);
while(true){
if((i__32315_32355 < count__32314_32354)){
var vec__32316_32356 = cljs.core._nth.call(null,chunk__32313_32353,i__32315_32355);
var name_32357 = cljs.core.nth.call(null,vec__32316_32356,(0),null);
var map__32319_32358 = cljs.core.nth.call(null,vec__32316_32356,(1),null);
var map__32319_32359__$1 = ((((!((map__32319_32358 == null)))?((((map__32319_32358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32319_32358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32319_32358):map__32319_32358);
var doc_32360 = cljs.core.get.call(null,map__32319_32359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32361 = cljs.core.get.call(null,map__32319_32359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32357);

cljs.core.println.call(null," ",arglists_32361);

if(cljs.core.truth_(doc_32360)){
cljs.core.println.call(null," ",doc_32360);
} else {
}

var G__32362 = seq__32312_32352;
var G__32363 = chunk__32313_32353;
var G__32364 = count__32314_32354;
var G__32365 = (i__32315_32355 + (1));
seq__32312_32352 = G__32362;
chunk__32313_32353 = G__32363;
count__32314_32354 = G__32364;
i__32315_32355 = G__32365;
continue;
} else {
var temp__4657__auto___32366 = cljs.core.seq.call(null,seq__32312_32352);
if(temp__4657__auto___32366){
var seq__32312_32367__$1 = temp__4657__auto___32366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32312_32367__$1)){
var c__25571__auto___32368 = cljs.core.chunk_first.call(null,seq__32312_32367__$1);
var G__32369 = cljs.core.chunk_rest.call(null,seq__32312_32367__$1);
var G__32370 = c__25571__auto___32368;
var G__32371 = cljs.core.count.call(null,c__25571__auto___32368);
var G__32372 = (0);
seq__32312_32352 = G__32369;
chunk__32313_32353 = G__32370;
count__32314_32354 = G__32371;
i__32315_32355 = G__32372;
continue;
} else {
var vec__32321_32373 = cljs.core.first.call(null,seq__32312_32367__$1);
var name_32374 = cljs.core.nth.call(null,vec__32321_32373,(0),null);
var map__32324_32375 = cljs.core.nth.call(null,vec__32321_32373,(1),null);
var map__32324_32376__$1 = ((((!((map__32324_32375 == null)))?((((map__32324_32375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32324_32375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32324_32375):map__32324_32375);
var doc_32377 = cljs.core.get.call(null,map__32324_32376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32378 = cljs.core.get.call(null,map__32324_32376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32374);

cljs.core.println.call(null," ",arglists_32378);

if(cljs.core.truth_(doc_32377)){
cljs.core.println.call(null," ",doc_32377);
} else {
}

var G__32379 = cljs.core.next.call(null,seq__32312_32367__$1);
var G__32380 = null;
var G__32381 = (0);
var G__32382 = (0);
seq__32312_32352 = G__32379;
chunk__32313_32353 = G__32380;
count__32314_32354 = G__32381;
i__32315_32355 = G__32382;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32326 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32327 = null;
var count__32328 = (0);
var i__32329 = (0);
while(true){
if((i__32329 < count__32328)){
var role = cljs.core._nth.call(null,chunk__32327,i__32329);
var temp__4657__auto___32383__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32383__$1)){
var spec_32384 = temp__4657__auto___32383__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32384));
} else {
}

var G__32385 = seq__32326;
var G__32386 = chunk__32327;
var G__32387 = count__32328;
var G__32388 = (i__32329 + (1));
seq__32326 = G__32385;
chunk__32327 = G__32386;
count__32328 = G__32387;
i__32329 = G__32388;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32326);
if(temp__4657__auto____$1){
var seq__32326__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32326__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__32326__$1);
var G__32389 = cljs.core.chunk_rest.call(null,seq__32326__$1);
var G__32390 = c__25571__auto__;
var G__32391 = cljs.core.count.call(null,c__25571__auto__);
var G__32392 = (0);
seq__32326 = G__32389;
chunk__32327 = G__32390;
count__32328 = G__32391;
i__32329 = G__32392;
continue;
} else {
var role = cljs.core.first.call(null,seq__32326__$1);
var temp__4657__auto___32393__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32393__$2)){
var spec_32394 = temp__4657__auto___32393__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32394));
} else {
}

var G__32395 = cljs.core.next.call(null,seq__32326__$1);
var G__32396 = null;
var G__32397 = (0);
var G__32398 = (0);
seq__32326 = G__32395;
chunk__32327 = G__32396;
count__32328 = G__32397;
i__32329 = G__32398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479472477307