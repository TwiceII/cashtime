// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34434 = [];
var len__25835__auto___34437 = arguments.length;
var i__25836__auto___34438 = (0);
while(true){
if((i__25836__auto___34438 < len__25835__auto___34437)){
args34434.push((arguments[i__25836__auto___34438]));

var G__34439 = (i__25836__auto___34438 + (1));
i__25836__auto___34438 = G__34439;
continue;
} else {
}
break;
}

var G__34436 = args34434.length;
switch (G__34436) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34434.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34442 = arguments.length;
var i__25836__auto___34443 = (0);
while(true){
if((i__25836__auto___34443 < len__25835__auto___34442)){
args__25842__auto__.push((arguments[i__25836__auto___34443]));

var G__34444 = (i__25836__auto___34443 + (1));
i__25836__auto___34443 = G__34444;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34441){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34441));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___34446 = arguments.length;
var i__25836__auto___34447 = (0);
while(true){
if((i__25836__auto___34447 < len__25835__auto___34446)){
args__25842__auto__.push((arguments[i__25836__auto___34447]));

var G__34448 = (i__25836__auto___34447 + (1));
i__25836__auto___34447 = G__34448;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34445){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34445));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34449 = cljs.core._EQ_;
var expr__34450 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34453){if((e34453 instanceof Error)){
var e = e34453;
return false;
} else {
throw e34453;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34449.call(null,"true",expr__34450))){
return true;
} else {
if(cljs.core.truth_(pred__34449.call(null,"false",expr__34450))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34450)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34455){if((e34455 instanceof Error)){
var e = e34455;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34455;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34456){
var map__34459 = p__34456;
var map__34459__$1 = ((((!((map__34459 == null)))?((((map__34459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34459):map__34459);
var message = cljs.core.get.call(null,map__34459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34459__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24760__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24748__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24748__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24748__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27200__auto___34621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___34621,ch){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___34621,ch){
return (function (state_34590){
var state_val_34591 = (state_34590[(1)]);
if((state_val_34591 === (7))){
var inst_34586 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34592_34622 = state_34590__$1;
(statearr_34592_34622[(2)] = inst_34586);

(statearr_34592_34622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (1))){
var state_34590__$1 = state_34590;
var statearr_34593_34623 = state_34590__$1;
(statearr_34593_34623[(2)] = null);

(statearr_34593_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (4))){
var inst_34543 = (state_34590[(7)]);
var inst_34543__$1 = (state_34590[(2)]);
var state_34590__$1 = (function (){var statearr_34594 = state_34590;
(statearr_34594[(7)] = inst_34543__$1);

return statearr_34594;
})();
if(cljs.core.truth_(inst_34543__$1)){
var statearr_34595_34624 = state_34590__$1;
(statearr_34595_34624[(1)] = (5));

} else {
var statearr_34596_34625 = state_34590__$1;
(statearr_34596_34625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (15))){
var inst_34550 = (state_34590[(8)]);
var inst_34565 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34550);
var inst_34566 = cljs.core.first.call(null,inst_34565);
var inst_34567 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34566);
var inst_34568 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34567)].join('');
var inst_34569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34568);
var state_34590__$1 = state_34590;
var statearr_34597_34626 = state_34590__$1;
(statearr_34597_34626[(2)] = inst_34569);

(statearr_34597_34626[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (13))){
var inst_34574 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34598_34627 = state_34590__$1;
(statearr_34598_34627[(2)] = inst_34574);

(statearr_34598_34627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (6))){
var state_34590__$1 = state_34590;
var statearr_34599_34628 = state_34590__$1;
(statearr_34599_34628[(2)] = null);

(statearr_34599_34628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (17))){
var inst_34572 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34600_34629 = state_34590__$1;
(statearr_34600_34629[(2)] = inst_34572);

(statearr_34600_34629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (3))){
var inst_34588 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34590__$1,inst_34588);
} else {
if((state_val_34591 === (12))){
var inst_34549 = (state_34590[(9)]);
var inst_34563 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34549,opts);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34563)){
var statearr_34601_34630 = state_34590__$1;
(statearr_34601_34630[(1)] = (15));

} else {
var statearr_34602_34631 = state_34590__$1;
(statearr_34602_34631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (2))){
var state_34590__$1 = state_34590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34590__$1,(4),ch);
} else {
if((state_val_34591 === (11))){
var inst_34550 = (state_34590[(8)]);
var inst_34555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34556 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34550);
var inst_34557 = cljs.core.async.timeout.call(null,(1000));
var inst_34558 = [inst_34556,inst_34557];
var inst_34559 = (new cljs.core.PersistentVector(null,2,(5),inst_34555,inst_34558,null));
var state_34590__$1 = state_34590;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34590__$1,(14),inst_34559);
} else {
if((state_val_34591 === (9))){
var inst_34550 = (state_34590[(8)]);
var inst_34576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34577 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34550);
var inst_34578 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34577);
var inst_34579 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34578)].join('');
var inst_34580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34579);
var state_34590__$1 = (function (){var statearr_34603 = state_34590;
(statearr_34603[(10)] = inst_34576);

return statearr_34603;
})();
var statearr_34604_34632 = state_34590__$1;
(statearr_34604_34632[(2)] = inst_34580);

(statearr_34604_34632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (5))){
var inst_34543 = (state_34590[(7)]);
var inst_34545 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34546 = (new cljs.core.PersistentArrayMap(null,2,inst_34545,null));
var inst_34547 = (new cljs.core.PersistentHashSet(null,inst_34546,null));
var inst_34548 = figwheel.client.focus_msgs.call(null,inst_34547,inst_34543);
var inst_34549 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34548);
var inst_34550 = cljs.core.first.call(null,inst_34548);
var inst_34551 = figwheel.client.autoload_QMARK_.call(null);
var state_34590__$1 = (function (){var statearr_34605 = state_34590;
(statearr_34605[(8)] = inst_34550);

(statearr_34605[(9)] = inst_34549);

return statearr_34605;
})();
if(cljs.core.truth_(inst_34551)){
var statearr_34606_34633 = state_34590__$1;
(statearr_34606_34633[(1)] = (8));

} else {
var statearr_34607_34634 = state_34590__$1;
(statearr_34607_34634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (14))){
var inst_34561 = (state_34590[(2)]);
var state_34590__$1 = state_34590;
var statearr_34608_34635 = state_34590__$1;
(statearr_34608_34635[(2)] = inst_34561);

(statearr_34608_34635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (16))){
var state_34590__$1 = state_34590;
var statearr_34609_34636 = state_34590__$1;
(statearr_34609_34636[(2)] = null);

(statearr_34609_34636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (10))){
var inst_34582 = (state_34590[(2)]);
var state_34590__$1 = (function (){var statearr_34610 = state_34590;
(statearr_34610[(11)] = inst_34582);

return statearr_34610;
})();
var statearr_34611_34637 = state_34590__$1;
(statearr_34611_34637[(2)] = null);

(statearr_34611_34637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34591 === (8))){
var inst_34549 = (state_34590[(9)]);
var inst_34553 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34549,opts);
var state_34590__$1 = state_34590;
if(cljs.core.truth_(inst_34553)){
var statearr_34612_34638 = state_34590__$1;
(statearr_34612_34638[(1)] = (11));

} else {
var statearr_34613_34639 = state_34590__$1;
(statearr_34613_34639[(1)] = (12));

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
});})(c__27200__auto___34621,ch))
;
return ((function (switch__27088__auto__,c__27200__auto___34621,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____0 = (function (){
var statearr_34617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34617[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__);

(statearr_34617[(1)] = (1));

return statearr_34617;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____1 = (function (state_34590){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_34590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e34618){if((e34618 instanceof Object)){
var ex__27092__auto__ = e34618;
var statearr_34619_34640 = state_34590;
(statearr_34619_34640[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34641 = state_34590;
state_34590 = G__34641;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__ = function(state_34590){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____1.call(this,state_34590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27089__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___34621,ch))
})();
var state__27202__auto__ = (function (){var statearr_34620 = f__27201__auto__.call(null);
(statearr_34620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___34621);

return statearr_34620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___34621,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34642_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34642_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34645 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34645){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34644){if((e34644 instanceof Error)){
var e = e34644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34645], null));
} else {
var e = e34644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34645))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34646){
var map__34655 = p__34646;
var map__34655__$1 = ((((!((map__34655 == null)))?((((map__34655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34655):map__34655);
var opts = map__34655__$1;
var build_id = cljs.core.get.call(null,map__34655__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34655,map__34655__$1,opts,build_id){
return (function (p__34657){
var vec__34658 = p__34657;
var seq__34659 = cljs.core.seq.call(null,vec__34658);
var first__34660 = cljs.core.first.call(null,seq__34659);
var seq__34659__$1 = cljs.core.next.call(null,seq__34659);
var map__34661 = first__34660;
var map__34661__$1 = ((((!((map__34661 == null)))?((((map__34661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34661):map__34661);
var msg = map__34661__$1;
var msg_name = cljs.core.get.call(null,map__34661__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34659__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34658,seq__34659,first__34660,seq__34659__$1,map__34661,map__34661__$1,msg,msg_name,_,map__34655,map__34655__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34658,seq__34659,first__34660,seq__34659__$1,map__34661,map__34661__$1,msg,msg_name,_,map__34655,map__34655__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34655,map__34655__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34669){
var vec__34670 = p__34669;
var seq__34671 = cljs.core.seq.call(null,vec__34670);
var first__34672 = cljs.core.first.call(null,seq__34671);
var seq__34671__$1 = cljs.core.next.call(null,seq__34671);
var map__34673 = first__34672;
var map__34673__$1 = ((((!((map__34673 == null)))?((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34673):map__34673);
var msg = map__34673__$1;
var msg_name = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34671__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34675){
var map__34687 = p__34675;
var map__34687__$1 = ((((!((map__34687 == null)))?((((map__34687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34687):map__34687);
var on_compile_warning = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34687__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34687,map__34687__$1,on_compile_warning,on_compile_fail){
return (function (p__34689){
var vec__34690 = p__34689;
var seq__34691 = cljs.core.seq.call(null,vec__34690);
var first__34692 = cljs.core.first.call(null,seq__34691);
var seq__34691__$1 = cljs.core.next.call(null,seq__34691);
var map__34693 = first__34692;
var map__34693__$1 = ((((!((map__34693 == null)))?((((map__34693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34693):map__34693);
var msg = map__34693__$1;
var msg_name = cljs.core.get.call(null,map__34693__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34691__$1;
var pred__34695 = cljs.core._EQ_;
var expr__34696 = msg_name;
if(cljs.core.truth_(pred__34695.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34696))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34695.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34696))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34687,map__34687__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__,msg_hist,msg_names,msg){
return (function (state_34924){
var state_val_34925 = (state_34924[(1)]);
if((state_val_34925 === (7))){
var inst_34844 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34844)){
var statearr_34926_34976 = state_34924__$1;
(statearr_34926_34976[(1)] = (8));

} else {
var statearr_34927_34977 = state_34924__$1;
(statearr_34927_34977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (20))){
var inst_34918 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34928_34978 = state_34924__$1;
(statearr_34928_34978[(2)] = inst_34918);

(statearr_34928_34978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (27))){
var inst_34914 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34929_34979 = state_34924__$1;
(statearr_34929_34979[(2)] = inst_34914);

(statearr_34929_34979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (1))){
var inst_34837 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34837)){
var statearr_34930_34980 = state_34924__$1;
(statearr_34930_34980[(1)] = (2));

} else {
var statearr_34931_34981 = state_34924__$1;
(statearr_34931_34981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (24))){
var inst_34916 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34932_34982 = state_34924__$1;
(statearr_34932_34982[(2)] = inst_34916);

(statearr_34932_34982[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (4))){
var inst_34922 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34924__$1,inst_34922);
} else {
if((state_val_34925 === (15))){
var inst_34920 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34933_34983 = state_34924__$1;
(statearr_34933_34983[(2)] = inst_34920);

(statearr_34933_34983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (21))){
var inst_34873 = (state_34924[(2)]);
var inst_34874 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34875 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34874);
var state_34924__$1 = (function (){var statearr_34934 = state_34924;
(statearr_34934[(7)] = inst_34873);

return statearr_34934;
})();
var statearr_34935_34984 = state_34924__$1;
(statearr_34935_34984[(2)] = inst_34875);

(statearr_34935_34984[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (31))){
var inst_34903 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34903)){
var statearr_34936_34985 = state_34924__$1;
(statearr_34936_34985[(1)] = (34));

} else {
var statearr_34937_34986 = state_34924__$1;
(statearr_34937_34986[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (32))){
var inst_34912 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34938_34987 = state_34924__$1;
(statearr_34938_34987[(2)] = inst_34912);

(statearr_34938_34987[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (33))){
var inst_34899 = (state_34924[(2)]);
var inst_34900 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34901 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34900);
var state_34924__$1 = (function (){var statearr_34939 = state_34924;
(statearr_34939[(8)] = inst_34899);

return statearr_34939;
})();
var statearr_34940_34988 = state_34924__$1;
(statearr_34940_34988[(2)] = inst_34901);

(statearr_34940_34988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (13))){
var inst_34858 = figwheel.client.heads_up.clear.call(null);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(16),inst_34858);
} else {
if((state_val_34925 === (22))){
var inst_34879 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34880 = figwheel.client.heads_up.append_warning_message.call(null,inst_34879);
var state_34924__$1 = state_34924;
var statearr_34941_34989 = state_34924__$1;
(statearr_34941_34989[(2)] = inst_34880);

(statearr_34941_34989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (36))){
var inst_34910 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34942_34990 = state_34924__$1;
(statearr_34942_34990[(2)] = inst_34910);

(statearr_34942_34990[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (29))){
var inst_34890 = (state_34924[(2)]);
var inst_34891 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34892 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34891);
var state_34924__$1 = (function (){var statearr_34943 = state_34924;
(statearr_34943[(9)] = inst_34890);

return statearr_34943;
})();
var statearr_34944_34991 = state_34924__$1;
(statearr_34944_34991[(2)] = inst_34892);

(statearr_34944_34991[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (6))){
var inst_34839 = (state_34924[(10)]);
var state_34924__$1 = state_34924;
var statearr_34945_34992 = state_34924__$1;
(statearr_34945_34992[(2)] = inst_34839);

(statearr_34945_34992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (28))){
var inst_34886 = (state_34924[(2)]);
var inst_34887 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34888 = figwheel.client.heads_up.display_warning.call(null,inst_34887);
var state_34924__$1 = (function (){var statearr_34946 = state_34924;
(statearr_34946[(11)] = inst_34886);

return statearr_34946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(29),inst_34888);
} else {
if((state_val_34925 === (25))){
var inst_34884 = figwheel.client.heads_up.clear.call(null);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(28),inst_34884);
} else {
if((state_val_34925 === (34))){
var inst_34905 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(37),inst_34905);
} else {
if((state_val_34925 === (17))){
var inst_34864 = (state_34924[(2)]);
var inst_34865 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34866 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34865);
var state_34924__$1 = (function (){var statearr_34947 = state_34924;
(statearr_34947[(12)] = inst_34864);

return statearr_34947;
})();
var statearr_34948_34993 = state_34924__$1;
(statearr_34948_34993[(2)] = inst_34866);

(statearr_34948_34993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (3))){
var inst_34856 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34856)){
var statearr_34949_34994 = state_34924__$1;
(statearr_34949_34994[(1)] = (13));

} else {
var statearr_34950_34995 = state_34924__$1;
(statearr_34950_34995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (12))){
var inst_34852 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34951_34996 = state_34924__$1;
(statearr_34951_34996[(2)] = inst_34852);

(statearr_34951_34996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (2))){
var inst_34839 = (state_34924[(10)]);
var inst_34839__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34924__$1 = (function (){var statearr_34952 = state_34924;
(statearr_34952[(10)] = inst_34839__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34839__$1)){
var statearr_34953_34997 = state_34924__$1;
(statearr_34953_34997[(1)] = (5));

} else {
var statearr_34954_34998 = state_34924__$1;
(statearr_34954_34998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (23))){
var inst_34882 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34882)){
var statearr_34955_34999 = state_34924__$1;
(statearr_34955_34999[(1)] = (25));

} else {
var statearr_34956_35000 = state_34924__$1;
(statearr_34956_35000[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (35))){
var state_34924__$1 = state_34924;
var statearr_34957_35001 = state_34924__$1;
(statearr_34957_35001[(2)] = null);

(statearr_34957_35001[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (19))){
var inst_34877 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34877)){
var statearr_34958_35002 = state_34924__$1;
(statearr_34958_35002[(1)] = (22));

} else {
var statearr_34959_35003 = state_34924__$1;
(statearr_34959_35003[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (11))){
var inst_34848 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34960_35004 = state_34924__$1;
(statearr_34960_35004[(2)] = inst_34848);

(statearr_34960_35004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (9))){
var inst_34850 = figwheel.client.heads_up.clear.call(null);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(12),inst_34850);
} else {
if((state_val_34925 === (5))){
var inst_34841 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34924__$1 = state_34924;
var statearr_34961_35005 = state_34924__$1;
(statearr_34961_35005[(2)] = inst_34841);

(statearr_34961_35005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (14))){
var inst_34868 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34868)){
var statearr_34962_35006 = state_34924__$1;
(statearr_34962_35006[(1)] = (18));

} else {
var statearr_34963_35007 = state_34924__$1;
(statearr_34963_35007[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (26))){
var inst_34894 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34924__$1 = state_34924;
if(cljs.core.truth_(inst_34894)){
var statearr_34964_35008 = state_34924__$1;
(statearr_34964_35008[(1)] = (30));

} else {
var statearr_34965_35009 = state_34924__$1;
(statearr_34965_35009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (16))){
var inst_34860 = (state_34924[(2)]);
var inst_34861 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34862 = figwheel.client.heads_up.display_exception.call(null,inst_34861);
var state_34924__$1 = (function (){var statearr_34966 = state_34924;
(statearr_34966[(13)] = inst_34860);

return statearr_34966;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(17),inst_34862);
} else {
if((state_val_34925 === (30))){
var inst_34896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34897 = figwheel.client.heads_up.display_warning.call(null,inst_34896);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(33),inst_34897);
} else {
if((state_val_34925 === (10))){
var inst_34854 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34967_35010 = state_34924__$1;
(statearr_34967_35010[(2)] = inst_34854);

(statearr_34967_35010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (18))){
var inst_34870 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34871 = figwheel.client.heads_up.display_exception.call(null,inst_34870);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(21),inst_34871);
} else {
if((state_val_34925 === (37))){
var inst_34907 = (state_34924[(2)]);
var state_34924__$1 = state_34924;
var statearr_34968_35011 = state_34924__$1;
(statearr_34968_35011[(2)] = inst_34907);

(statearr_34968_35011[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34925 === (8))){
var inst_34846 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34924__$1 = state_34924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34924__$1,(11),inst_34846);
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
});})(c__27200__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27088__auto__,c__27200__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____0 = (function (){
var statearr_34972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34972[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__);

(statearr_34972[(1)] = (1));

return statearr_34972;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____1 = (function (state_34924){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_34924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e34973){if((e34973 instanceof Object)){
var ex__27092__auto__ = e34973;
var statearr_34974_35012 = state_34924;
(statearr_34974_35012[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35013 = state_34924;
state_34924 = G__35013;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__ = function(state_34924){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____1.call(this,state_34924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__,msg_hist,msg_names,msg))
})();
var state__27202__auto__ = (function (){var statearr_34975 = f__27201__auto__.call(null);
(statearr_34975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_34975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__,msg_hist,msg_names,msg))
);

return c__27200__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27200__auto___35076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___35076,ch){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___35076,ch){
return (function (state_35059){
var state_val_35060 = (state_35059[(1)]);
if((state_val_35060 === (1))){
var state_35059__$1 = state_35059;
var statearr_35061_35077 = state_35059__$1;
(statearr_35061_35077[(2)] = null);

(statearr_35061_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (2))){
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35059__$1,(4),ch);
} else {
if((state_val_35060 === (3))){
var inst_35057 = (state_35059[(2)]);
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35059__$1,inst_35057);
} else {
if((state_val_35060 === (4))){
var inst_35047 = (state_35059[(7)]);
var inst_35047__$1 = (state_35059[(2)]);
var state_35059__$1 = (function (){var statearr_35062 = state_35059;
(statearr_35062[(7)] = inst_35047__$1);

return statearr_35062;
})();
if(cljs.core.truth_(inst_35047__$1)){
var statearr_35063_35078 = state_35059__$1;
(statearr_35063_35078[(1)] = (5));

} else {
var statearr_35064_35079 = state_35059__$1;
(statearr_35064_35079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (5))){
var inst_35047 = (state_35059[(7)]);
var inst_35049 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35047);
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35059__$1,(8),inst_35049);
} else {
if((state_val_35060 === (6))){
var state_35059__$1 = state_35059;
var statearr_35065_35080 = state_35059__$1;
(statearr_35065_35080[(2)] = null);

(statearr_35065_35080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (7))){
var inst_35055 = (state_35059[(2)]);
var state_35059__$1 = state_35059;
var statearr_35066_35081 = state_35059__$1;
(statearr_35066_35081[(2)] = inst_35055);

(statearr_35066_35081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (8))){
var inst_35051 = (state_35059[(2)]);
var state_35059__$1 = (function (){var statearr_35067 = state_35059;
(statearr_35067[(8)] = inst_35051);

return statearr_35067;
})();
var statearr_35068_35082 = state_35059__$1;
(statearr_35068_35082[(2)] = null);

(statearr_35068_35082[(1)] = (2));


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
});})(c__27200__auto___35076,ch))
;
return ((function (switch__27088__auto__,c__27200__auto___35076,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27089__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27089__auto____0 = (function (){
var statearr_35072 = [null,null,null,null,null,null,null,null,null];
(statearr_35072[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27089__auto__);

(statearr_35072[(1)] = (1));

return statearr_35072;
});
var figwheel$client$heads_up_plugin_$_state_machine__27089__auto____1 = (function (state_35059){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_35059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e35073){if((e35073 instanceof Object)){
var ex__27092__auto__ = e35073;
var statearr_35074_35083 = state_35059;
(statearr_35074_35083[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_35059;
state_35059 = G__35084;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27089__auto__ = function(state_35059){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27089__auto____1.call(this,state_35059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27089__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27089__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___35076,ch))
})();
var state__27202__auto__ = (function (){var statearr_35075 = f__27201__auto__.call(null);
(statearr_35075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___35076);

return statearr_35075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___35076,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__){
return (function (state_35105){
var state_val_35106 = (state_35105[(1)]);
if((state_val_35106 === (1))){
var inst_35100 = cljs.core.async.timeout.call(null,(3000));
var state_35105__$1 = state_35105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35105__$1,(2),inst_35100);
} else {
if((state_val_35106 === (2))){
var inst_35102 = (state_35105[(2)]);
var inst_35103 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35105__$1 = (function (){var statearr_35107 = state_35105;
(statearr_35107[(7)] = inst_35102);

return statearr_35107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35105__$1,inst_35103);
} else {
return null;
}
}
});})(c__27200__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____0 = (function (){
var statearr_35111 = [null,null,null,null,null,null,null,null];
(statearr_35111[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__);

(statearr_35111[(1)] = (1));

return statearr_35111;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____1 = (function (state_35105){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_35105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e35112){if((e35112 instanceof Object)){
var ex__27092__auto__ = e35112;
var statearr_35113_35115 = state_35105;
(statearr_35113_35115[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35116 = state_35105;
state_35105 = G__35116;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__ = function(state_35105){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____1.call(this,state_35105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27089__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__))
})();
var state__27202__auto__ = (function (){var statearr_35114 = f__27201__auto__.call(null);
(statearr_35114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_35114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__))
);

return c__27200__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35139){
var state_val_35140 = (state_35139[(1)]);
if((state_val_35140 === (1))){
var inst_35133 = cljs.core.async.timeout.call(null,(2000));
var state_35139__$1 = state_35139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35139__$1,(2),inst_35133);
} else {
if((state_val_35140 === (2))){
var inst_35135 = (state_35139[(2)]);
var inst_35136 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35137 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35136);
var state_35139__$1 = (function (){var statearr_35141 = state_35139;
(statearr_35141[(7)] = inst_35135);

return statearr_35141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35139__$1,inst_35137);
} else {
return null;
}
}
});})(c__27200__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____0 = (function (){
var statearr_35145 = [null,null,null,null,null,null,null,null];
(statearr_35145[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__);

(statearr_35145[(1)] = (1));

return statearr_35145;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____1 = (function (state_35139){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_35139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e35146){if((e35146 instanceof Object)){
var ex__27092__auto__ = e35146;
var statearr_35147_35149 = state_35139;
(statearr_35147_35149[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35150 = state_35139;
state_35139 = G__35150;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__ = function(state_35139){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____1.call(this,state_35139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27202__auto__ = (function (){var statearr_35148 = f__27201__auto__.call(null);
(statearr_35148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__,figwheel_version,temp__4657__auto__))
);

return c__27200__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35151){
var map__35155 = p__35151;
var map__35155__$1 = ((((!((map__35155 == null)))?((((map__35155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35155):map__35155);
var file = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35155__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35157 = "";
var G__35157__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35157),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35157);
var G__35157__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35157__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35157__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__35157__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35157__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35158){
var map__35165 = p__35158;
var map__35165__$1 = ((((!((map__35165 == null)))?((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var ed = map__35165__$1;
var formatted_exception = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35167_35171 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35168_35172 = null;
var count__35169_35173 = (0);
var i__35170_35174 = (0);
while(true){
if((i__35170_35174 < count__35169_35173)){
var msg_35175 = cljs.core._nth.call(null,chunk__35168_35172,i__35170_35174);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35175);

var G__35176 = seq__35167_35171;
var G__35177 = chunk__35168_35172;
var G__35178 = count__35169_35173;
var G__35179 = (i__35170_35174 + (1));
seq__35167_35171 = G__35176;
chunk__35168_35172 = G__35177;
count__35169_35173 = G__35178;
i__35170_35174 = G__35179;
continue;
} else {
var temp__4657__auto___35180 = cljs.core.seq.call(null,seq__35167_35171);
if(temp__4657__auto___35180){
var seq__35167_35181__$1 = temp__4657__auto___35180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35167_35181__$1)){
var c__25571__auto___35182 = cljs.core.chunk_first.call(null,seq__35167_35181__$1);
var G__35183 = cljs.core.chunk_rest.call(null,seq__35167_35181__$1);
var G__35184 = c__25571__auto___35182;
var G__35185 = cljs.core.count.call(null,c__25571__auto___35182);
var G__35186 = (0);
seq__35167_35171 = G__35183;
chunk__35168_35172 = G__35184;
count__35169_35173 = G__35185;
i__35170_35174 = G__35186;
continue;
} else {
var msg_35187 = cljs.core.first.call(null,seq__35167_35181__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35187);

var G__35188 = cljs.core.next.call(null,seq__35167_35181__$1);
var G__35189 = null;
var G__35190 = (0);
var G__35191 = (0);
seq__35167_35171 = G__35188;
chunk__35168_35172 = G__35189;
count__35169_35173 = G__35190;
i__35170_35174 = G__35191;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35192){
var map__35195 = p__35192;
var map__35195__$1 = ((((!((map__35195 == null)))?((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35195):map__35195);
var w = map__35195__$1;
var message = cljs.core.get.call(null,map__35195__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\js\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\js\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24748__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35207 = cljs.core.seq.call(null,plugins);
var chunk__35208 = null;
var count__35209 = (0);
var i__35210 = (0);
while(true){
if((i__35210 < count__35209)){
var vec__35211 = cljs.core._nth.call(null,chunk__35208,i__35210);
var k = cljs.core.nth.call(null,vec__35211,(0),null);
var plugin = cljs.core.nth.call(null,vec__35211,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35217 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35207,chunk__35208,count__35209,i__35210,pl_35217,vec__35211,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35217.call(null,msg_hist);
});})(seq__35207,chunk__35208,count__35209,i__35210,pl_35217,vec__35211,k,plugin))
);
} else {
}

var G__35218 = seq__35207;
var G__35219 = chunk__35208;
var G__35220 = count__35209;
var G__35221 = (i__35210 + (1));
seq__35207 = G__35218;
chunk__35208 = G__35219;
count__35209 = G__35220;
i__35210 = G__35221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35207);
if(temp__4657__auto__){
var seq__35207__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35207__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35207__$1);
var G__35222 = cljs.core.chunk_rest.call(null,seq__35207__$1);
var G__35223 = c__25571__auto__;
var G__35224 = cljs.core.count.call(null,c__25571__auto__);
var G__35225 = (0);
seq__35207 = G__35222;
chunk__35208 = G__35223;
count__35209 = G__35224;
i__35210 = G__35225;
continue;
} else {
var vec__35214 = cljs.core.first.call(null,seq__35207__$1);
var k = cljs.core.nth.call(null,vec__35214,(0),null);
var plugin = cljs.core.nth.call(null,vec__35214,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35226 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35207,chunk__35208,count__35209,i__35210,pl_35226,vec__35214,k,plugin,seq__35207__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35226.call(null,msg_hist);
});})(seq__35207,chunk__35208,count__35209,i__35210,pl_35226,vec__35214,k,plugin,seq__35207__$1,temp__4657__auto__))
);
} else {
}

var G__35227 = cljs.core.next.call(null,seq__35207__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__35207 = G__35227;
chunk__35208 = G__35228;
count__35209 = G__35229;
i__35210 = G__35230;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35231 = [];
var len__25835__auto___35238 = arguments.length;
var i__25836__auto___35239 = (0);
while(true){
if((i__25836__auto___35239 < len__25835__auto___35238)){
args35231.push((arguments[i__25836__auto___35239]));

var G__35240 = (i__25836__auto___35239 + (1));
i__25836__auto___35239 = G__35240;
continue;
} else {
}
break;
}

var G__35233 = args35231.length;
switch (G__35233) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35231.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35234_35242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35235_35243 = null;
var count__35236_35244 = (0);
var i__35237_35245 = (0);
while(true){
if((i__35237_35245 < count__35236_35244)){
var msg_35246 = cljs.core._nth.call(null,chunk__35235_35243,i__35237_35245);
figwheel.client.socket.handle_incoming_message.call(null,msg_35246);

var G__35247 = seq__35234_35242;
var G__35248 = chunk__35235_35243;
var G__35249 = count__35236_35244;
var G__35250 = (i__35237_35245 + (1));
seq__35234_35242 = G__35247;
chunk__35235_35243 = G__35248;
count__35236_35244 = G__35249;
i__35237_35245 = G__35250;
continue;
} else {
var temp__4657__auto___35251 = cljs.core.seq.call(null,seq__35234_35242);
if(temp__4657__auto___35251){
var seq__35234_35252__$1 = temp__4657__auto___35251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35234_35252__$1)){
var c__25571__auto___35253 = cljs.core.chunk_first.call(null,seq__35234_35252__$1);
var G__35254 = cljs.core.chunk_rest.call(null,seq__35234_35252__$1);
var G__35255 = c__25571__auto___35253;
var G__35256 = cljs.core.count.call(null,c__25571__auto___35253);
var G__35257 = (0);
seq__35234_35242 = G__35254;
chunk__35235_35243 = G__35255;
count__35236_35244 = G__35256;
i__35237_35245 = G__35257;
continue;
} else {
var msg_35258 = cljs.core.first.call(null,seq__35234_35252__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35258);

var G__35259 = cljs.core.next.call(null,seq__35234_35252__$1);
var G__35260 = null;
var G__35261 = (0);
var G__35262 = (0);
seq__35234_35242 = G__35259;
chunk__35235_35243 = G__35260;
count__35236_35244 = G__35261;
i__35237_35245 = G__35262;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35267 = arguments.length;
var i__25836__auto___35268 = (0);
while(true){
if((i__25836__auto___35268 < len__25835__auto___35267)){
args__25842__auto__.push((arguments[i__25836__auto___35268]));

var G__35269 = (i__25836__auto___35268 + (1));
i__25836__auto___35268 = G__35269;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35264){
var map__35265 = p__35264;
var map__35265__$1 = ((((!((map__35265 == null)))?((((map__35265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35265):map__35265);
var opts = map__35265__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35263){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35263));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35271){if((e35271 instanceof Error)){
var e = e35271;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35271;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35275){
var map__35276 = p__35275;
var map__35276__$1 = ((((!((map__35276 == null)))?((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35276):map__35276);
var msg_name = cljs.core.get.call(null,map__35276__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479472479651