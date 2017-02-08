// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__27184_SHARP_,p2__27183_SHARP_){
return p2__27183_SHARP_.call(null,p1__27184_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__27186_SHARP_,p2__27185_SHARP_){
return p2__27185_SHARP_.call(null,old_state,p1__27186_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__24760__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__27187_SHARP_){
return p1__27187_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__27192 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__27192,(0),null);
var next_state = cljs.core.nth.call(null,vec__27192,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__27188_SHARP_){
return p1__27188_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__27195__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__27195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27196__i = 0, G__27196__a = new Array(arguments.length -  0);
while (G__27196__i < G__27196__a.length) {G__27196__a[G__27196__i] = arguments[G__27196__i + 0]; ++G__27196__i;}
  args = new cljs.core.IndexedSeq(G__27196__a,0);
} 
return G__27195__delegate.call(this,args);};
G__27195.cljs$lang$maxFixedArity = 0;
G__27195.cljs$lang$applyTo = (function (arglist__27197){
var args = cljs.core.seq(arglist__27197);
return G__27195__delegate(args);
});
G__27195.cljs$core$IFn$_invoke$arity$variadic = G__27195__delegate;
return G__27195;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__27198__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__27198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27199__i = 0, G__27199__a = new Array(arguments.length -  0);
while (G__27199__i < G__27199__a.length) {G__27199__a[G__27199__i] = arguments[G__27199__i + 0]; ++G__27199__i;}
  args = new cljs.core.IndexedSeq(G__27199__a,0);
} 
return G__27198__delegate.call(this,args);};
G__27198.cljs$lang$maxFixedArity = 0;
G__27198.cljs$lang$applyTo = (function (arglist__27200){
var args = cljs.core.seq(arglist__27200);
return G__27198__delegate(args);
});
G__27198.cljs$core$IFn$_invoke$arity$variadic = G__27198__delegate;
return G__27198;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__27201__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__27201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27202__i = 0, G__27202__a = new Array(arguments.length -  0);
while (G__27202__i < G__27202__a.length) {G__27202__a[G__27202__i] = arguments[G__27202__i + 0]; ++G__27202__i;}
  args = new cljs.core.IndexedSeq(G__27202__a,0);
} 
return G__27201__delegate.call(this,args);};
G__27201.cljs$lang$maxFixedArity = 0;
G__27201.cljs$lang$applyTo = (function (arglist__27203){
var args = cljs.core.seq(arglist__27203);
return G__27201__delegate(args);
});
G__27201.cljs$core$IFn$_invoke$arity$variadic = G__27201__delegate;
return G__27201;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__24760__auto__ = (function (){var and__24748__auto__ = typeof window !== 'undefined';
if(and__24748__auto__){
var or__24760__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
var or__24760__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24760__auto____$2)){
return or__24760__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return ((function (or__24760__auto__){
return (function (p1__27204_SHARP_){
return setTimeout(p1__27204_SHARP_,(16));
});
;})(or__24760__auto__))
}
})();
rum.core.batch = (function (){var or__24760__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return ((function (or__24760__auto____$1,or__24760__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__24760__auto____$1,or__24760__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__27211 = cljs.core.seq.call(null,queue);
var chunk__27213 = null;
var count__27214 = (0);
var i__27215 = (0);
while(true){
if((i__27215 < count__27214)){
var comp = cljs.core._nth.call(null,chunk__27213,i__27215);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__27217 = seq__27211;
var G__27218 = chunk__27213;
var G__27219 = count__27214;
var G__27220 = (i__27215 + (1));
seq__27211 = G__27217;
chunk__27213 = G__27218;
count__27214 = G__27219;
i__27215 = G__27220;
continue;
} else {
var G__27221 = seq__27211;
var G__27222 = chunk__27213;
var G__27223 = count__27214;
var G__27224 = (i__27215 + (1));
seq__27211 = G__27221;
chunk__27213 = G__27222;
count__27214 = G__27223;
i__27215 = G__27224;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27211);
if(temp__4657__auto__){
var seq__27211__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27211__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__27211__$1);
var G__27225 = cljs.core.chunk_rest.call(null,seq__27211__$1);
var G__27226 = c__25571__auto__;
var G__27227 = cljs.core.count.call(null,c__25571__auto__);
var G__27228 = (0);
seq__27211 = G__27225;
chunk__27213 = G__27226;
count__27214 = G__27227;
i__27215 = G__27228;
continue;
} else {
var comp = cljs.core.first.call(null,seq__27211__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__27229 = cljs.core.next.call(null,seq__27211__$1);
var G__27230 = null;
var G__27231 = (0);
var G__27232 = (0);
seq__27211 = G__27229;
chunk__27213 = G__27230;
count__27214 = G__27231;
i__27215 = G__27232;
continue;
} else {
var G__27233 = cljs.core.next.call(null,seq__27211__$1);
var G__27234 = null;
var G__27235 = (0);
var G__27236 = (0);
seq__27211 = G__27233;
chunk__27213 = G__27234;
count__27214 = G__27235;
i__27215 = G__27236;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args27237 = [];
var len__25835__auto___27240 = arguments.length;
var i__25836__auto___27241 = (0);
while(true){
if((i__25836__auto___27241 < len__25835__auto___27240)){
args27237.push((arguments[i__25836__auto___27241]));

var G__27242 = (i__25836__auto___27241 + (1));
i__25836__auto___27241 = G__27242;
continue;
} else {
}
break;
}

var G__27239 = args27237.length;
switch (G__27239) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27237.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_27244 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__27245 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__27245,(0),null);
var next_state = cljs.core.nth.call(null,vec__27245,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__27248_27260 = cljs.core.seq.call(null,old_reactions);
var chunk__27249_27261 = null;
var count__27250_27262 = (0);
var i__27251_27263 = (0);
while(true){
if((i__27251_27263 < count__27250_27262)){
var ref_27264 = cljs.core._nth.call(null,chunk__27249_27261,i__27251_27263);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_27264)){
} else {
cljs.core.remove_watch.call(null,ref_27264,key);
}

var G__27265 = seq__27248_27260;
var G__27266 = chunk__27249_27261;
var G__27267 = count__27250_27262;
var G__27268 = (i__27251_27263 + (1));
seq__27248_27260 = G__27265;
chunk__27249_27261 = G__27266;
count__27250_27262 = G__27267;
i__27251_27263 = G__27268;
continue;
} else {
var temp__4657__auto___27269 = cljs.core.seq.call(null,seq__27248_27260);
if(temp__4657__auto___27269){
var seq__27248_27270__$1 = temp__4657__auto___27269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27248_27270__$1)){
var c__25571__auto___27271 = cljs.core.chunk_first.call(null,seq__27248_27270__$1);
var G__27272 = cljs.core.chunk_rest.call(null,seq__27248_27270__$1);
var G__27273 = c__25571__auto___27271;
var G__27274 = cljs.core.count.call(null,c__25571__auto___27271);
var G__27275 = (0);
seq__27248_27260 = G__27272;
chunk__27249_27261 = G__27273;
count__27250_27262 = G__27274;
i__27251_27263 = G__27275;
continue;
} else {
var ref_27276 = cljs.core.first.call(null,seq__27248_27270__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_27276)){
} else {
cljs.core.remove_watch.call(null,ref_27276,key);
}

var G__27277 = cljs.core.next.call(null,seq__27248_27270__$1);
var G__27278 = null;
var G__27279 = (0);
var G__27280 = (0);
seq__27248_27260 = G__27277;
chunk__27249_27261 = G__27278;
count__27250_27262 = G__27279;
i__27251_27263 = G__27280;
continue;
}
} else {
}
}
break;
}

var seq__27252_27281 = cljs.core.seq.call(null,new_reactions);
var chunk__27253_27282 = null;
var count__27254_27283 = (0);
var i__27255_27284 = (0);
while(true){
if((i__27255_27284 < count__27254_27283)){
var ref_27285 = cljs.core._nth.call(null,chunk__27253_27282,i__27255_27284);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_27285)){
} else {
cljs.core.add_watch.call(null,ref_27285,key,((function (seq__27252_27281,chunk__27253_27282,count__27254_27283,i__27255_27284,ref_27285,comp,old_reactions,vec__27245,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27244){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__27252_27281,chunk__27253_27282,count__27254_27283,i__27255_27284,ref_27285,comp,old_reactions,vec__27245,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27244))
);
}

var G__27286 = seq__27252_27281;
var G__27287 = chunk__27253_27282;
var G__27288 = count__27254_27283;
var G__27289 = (i__27255_27284 + (1));
seq__27252_27281 = G__27286;
chunk__27253_27282 = G__27287;
count__27254_27283 = G__27288;
i__27255_27284 = G__27289;
continue;
} else {
var temp__4657__auto___27290 = cljs.core.seq.call(null,seq__27252_27281);
if(temp__4657__auto___27290){
var seq__27252_27291__$1 = temp__4657__auto___27290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27252_27291__$1)){
var c__25571__auto___27292 = cljs.core.chunk_first.call(null,seq__27252_27291__$1);
var G__27293 = cljs.core.chunk_rest.call(null,seq__27252_27291__$1);
var G__27294 = c__25571__auto___27292;
var G__27295 = cljs.core.count.call(null,c__25571__auto___27292);
var G__27296 = (0);
seq__27252_27281 = G__27293;
chunk__27253_27282 = G__27294;
count__27254_27283 = G__27295;
i__27255_27284 = G__27296;
continue;
} else {
var ref_27297 = cljs.core.first.call(null,seq__27252_27291__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_27297)){
} else {
cljs.core.add_watch.call(null,ref_27297,key,((function (seq__27252_27281,chunk__27253_27282,count__27254_27283,i__27255_27284,ref_27297,seq__27252_27291__$1,temp__4657__auto___27290,comp,old_reactions,vec__27245,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27244){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__27252_27281,chunk__27253_27282,count__27254_27283,i__27255_27284,ref_27297,seq__27252_27291__$1,temp__4657__auto___27290,comp,old_reactions,vec__27245,dom,next_state,new_reactions,key,_STAR_reactions_STAR_27244))
);
}

var G__27298 = cljs.core.next.call(null,seq__27252_27291__$1);
var G__27299 = null;
var G__27300 = (0);
var G__27301 = (0);
seq__27252_27281 = G__27298;
chunk__27253_27282 = G__27299;
count__27254_27283 = G__27300;
i__27255_27284 = G__27301;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_27244;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_27302 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__27256_27303 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__27257_27304 = null;
var count__27258_27305 = (0);
var i__27259_27306 = (0);
while(true){
if((i__27259_27306 < count__27258_27305)){
var ref_27307 = cljs.core._nth.call(null,chunk__27257_27304,i__27259_27306);
cljs.core.remove_watch.call(null,ref_27307,key_27302);

var G__27308 = seq__27256_27303;
var G__27309 = chunk__27257_27304;
var G__27310 = count__27258_27305;
var G__27311 = (i__27259_27306 + (1));
seq__27256_27303 = G__27308;
chunk__27257_27304 = G__27309;
count__27258_27305 = G__27310;
i__27259_27306 = G__27311;
continue;
} else {
var temp__4657__auto___27312 = cljs.core.seq.call(null,seq__27256_27303);
if(temp__4657__auto___27312){
var seq__27256_27313__$1 = temp__4657__auto___27312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27256_27313__$1)){
var c__25571__auto___27314 = cljs.core.chunk_first.call(null,seq__27256_27313__$1);
var G__27315 = cljs.core.chunk_rest.call(null,seq__27256_27313__$1);
var G__27316 = c__25571__auto___27314;
var G__27317 = cljs.core.count.call(null,c__25571__auto___27314);
var G__27318 = (0);
seq__27256_27303 = G__27315;
chunk__27257_27304 = G__27316;
count__27258_27305 = G__27317;
i__27259_27306 = G__27318;
continue;
} else {
var ref_27319 = cljs.core.first.call(null,seq__27256_27313__$1);
cljs.core.remove_watch.call(null,ref_27319,key_27302);

var G__27320 = cljs.core.next.call(null,seq__27256_27313__$1);
var G__27321 = null;
var G__27322 = (0);
var G__27323 = (0);
seq__27256_27303 = G__27320;
chunk__27257_27304 = G__27321;
count__27258_27305 = G__27322;
i__27259_27306 = G__27323;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__25842__auto__ = [];
var len__25835__auto___27330 = arguments.length;
var i__25836__auto___27331 = (0);
while(true){
if((i__25836__auto___27331 < len__25835__auto___27330)){
args__25842__auto__.push((arguments[i__25836__auto___27331]));

var G__27332 = (i__25836__auto___27331 + (1));
i__25836__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__27327){
var map__27328 = p__27327;
var map__27328__$1 = ((((!((map__27328 == null)))?((((map__27328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328):map__27328);
var options = map__27328__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq27324){
var G__27325 = cljs.core.first.call(null,seq27324);
var seq27324__$1 = cljs.core.next.call(null,seq27324);
var G__27326 = cljs.core.first.call(null,seq27324__$1);
var seq27324__$2 = cljs.core.next.call(null,seq27324__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__27325,G__27326,seq27324__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__25842__auto__ = [];
var len__25835__auto___27336 = arguments.length;
var i__25836__auto___27337 = (0);
while(true){
if((i__25836__auto___27337 < len__25835__auto___27336)){
args__25842__auto__.push((arguments[i__25836__auto___27337]));

var G__27338 = (i__25836__auto___27337 + (1));
i__25836__auto___27337 = G__27338;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq27333){
var G__27334 = cljs.core.first.call(null,seq27333);
var seq27333__$1 = cljs.core.next.call(null,seq27333);
var G__27335 = cljs.core.first.call(null,seq27333__$1);
var seq27333__$2 = cljs.core.next.call(null,seq27333__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__27334,G__27335,seq27333__$2);
});


//# sourceMappingURL=core.js.map?rel=1486531228108