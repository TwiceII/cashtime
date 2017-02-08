// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26512__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26509 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26510 = cljs.core.seq.call(null,vec__26509);
var first__26511 = cljs.core.first.call(null,seq__26510);
var seq__26510__$1 = cljs.core.next.call(null,seq__26510);
var tag = first__26511;
var body = seq__26510__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26513__i = 0, G__26513__a = new Array(arguments.length -  0);
while (G__26513__i < G__26513__a.length) {G__26513__a[G__26513__i] = arguments[G__26513__i + 0]; ++G__26513__i;}
  args = new cljs.core.IndexedSeq(G__26513__a,0);
} 
return G__26512__delegate.call(this,args);};
G__26512.cljs$lang$maxFixedArity = 0;
G__26512.cljs$lang$applyTo = (function (arglist__26514){
var args = cljs.core.seq(arglist__26514);
return G__26512__delegate(args);
});
G__26512.cljs$core$IFn$_invoke$arity$variadic = G__26512__delegate;
return G__26512;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25540__auto__ = (function sablono$core$update_arglists_$_iter__26519(s__26520){
return (new cljs.core.LazySeq(null,(function (){
var s__26520__$1 = s__26520;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26520__$1);
if(temp__4657__auto__){
var s__26520__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26520__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26520__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26522 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26521 = (0);
while(true){
if((i__26521 < size__25539__auto__)){
var args = cljs.core._nth.call(null,c__25538__auto__,i__26521);
cljs.core.chunk_append.call(null,b__26522,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26523 = (i__26521 + (1));
i__26521 = G__26523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26522),sablono$core$update_arglists_$_iter__26519.call(null,cljs.core.chunk_rest.call(null,s__26520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26522),null);
}
} else {
var args = cljs.core.first.call(null,s__26520__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26519.call(null,cljs.core.rest.call(null,s__26520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26529 = arguments.length;
var i__25836__auto___26530 = (0);
while(true){
if((i__25836__auto___26530 < len__25835__auto___26529)){
args__25842__auto__.push((arguments[i__25836__auto___26530]));

var G__26531 = (i__25836__auto___26530 + (1));
i__25836__auto___26530 = G__26531;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25540__auto__ = (function sablono$core$iter__26525(s__26526){
return (new cljs.core.LazySeq(null,(function (){
var s__26526__$1 = s__26526;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26526__$1);
if(temp__4657__auto__){
var s__26526__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26526__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26526__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26528 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26527 = (0);
while(true){
if((i__26527 < size__25539__auto__)){
var style = cljs.core._nth.call(null,c__25538__auto__,i__26527);
cljs.core.chunk_append.call(null,b__26528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26532 = (i__26527 + (1));
i__26527 = G__26532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26528),sablono$core$iter__26525.call(null,cljs.core.chunk_rest.call(null,s__26526__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26528),null);
}
} else {
var style = cljs.core.first.call(null,s__26526__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26525.call(null,cljs.core.rest.call(null,s__26526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26524){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26524));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26533 = (function sablono$core$link_to26533(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26536 = arguments.length;
var i__25836__auto___26537 = (0);
while(true){
if((i__25836__auto___26537 < len__25835__auto___26536)){
args__25842__auto__.push((arguments[i__25836__auto___26537]));

var G__26538 = (i__25836__auto___26537 + (1));
i__25836__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26533.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.link_to26533.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26533.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26533.cljs$lang$applyTo = (function (seq26534){
var G__26535 = cljs.core.first.call(null,seq26534);
var seq26534__$1 = cljs.core.next.call(null,seq26534);
return sablono.core.link_to26533.cljs$core$IFn$_invoke$arity$variadic(G__26535,seq26534__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26533);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26539 = (function sablono$core$mail_to26539(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26546 = arguments.length;
var i__25836__auto___26547 = (0);
while(true){
if((i__25836__auto___26547 < len__25835__auto___26546)){
args__25842__auto__.push((arguments[i__25836__auto___26547]));

var G__26548 = (i__25836__auto___26547 + (1));
i__25836__auto___26547 = G__26548;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26539.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.mail_to26539.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26542){
var vec__26543 = p__26542;
var content = cljs.core.nth.call(null,vec__26543,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24760__auto__ = content;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26539.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26539.cljs$lang$applyTo = (function (seq26540){
var G__26541 = cljs.core.first.call(null,seq26540);
var seq26540__$1 = cljs.core.next.call(null,seq26540);
return sablono.core.mail_to26539.cljs$core$IFn$_invoke$arity$variadic(G__26541,seq26540__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26539);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26549 = (function sablono$core$unordered_list26549(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25540__auto__ = (function sablono$core$unordered_list26549_$_iter__26554(s__26555){
return (new cljs.core.LazySeq(null,(function (){
var s__26555__$1 = s__26555;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26555__$1);
if(temp__4657__auto__){
var s__26555__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26555__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26555__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26557 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26556 = (0);
while(true){
if((i__26556 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26556);
cljs.core.chunk_append.call(null,b__26557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26558 = (i__26556 + (1));
i__26556 = G__26558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26557),sablono$core$unordered_list26549_$_iter__26554.call(null,cljs.core.chunk_rest.call(null,s__26555__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26557),null);
}
} else {
var x = cljs.core.first.call(null,s__26555__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26549_$_iter__26554.call(null,cljs.core.rest.call(null,s__26555__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26549);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26559 = (function sablono$core$ordered_list26559(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25540__auto__ = (function sablono$core$ordered_list26559_$_iter__26564(s__26565){
return (new cljs.core.LazySeq(null,(function (){
var s__26565__$1 = s__26565;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26565__$1);
if(temp__4657__auto__){
var s__26565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26565__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26565__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26567 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26566 = (0);
while(true){
if((i__26566 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26566);
cljs.core.chunk_append.call(null,b__26567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26568 = (i__26566 + (1));
i__26566 = G__26568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),sablono$core$ordered_list26559_$_iter__26564.call(null,cljs.core.chunk_rest.call(null,s__26565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),null);
}
} else {
var x = cljs.core.first.call(null,s__26565__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26559_$_iter__26564.call(null,cljs.core.rest.call(null,s__26565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26559);
/**
 * Create an image element.
 */
sablono.core.image26569 = (function sablono$core$image26569(var_args){
var args26570 = [];
var len__25835__auto___26573 = arguments.length;
var i__25836__auto___26574 = (0);
while(true){
if((i__25836__auto___26574 < len__25835__auto___26573)){
args26570.push((arguments[i__25836__auto___26574]));

var G__26575 = (i__25836__auto___26574 + (1));
i__25836__auto___26574 = G__26575;
continue;
} else {
}
break;
}

var G__26572 = args26570.length;
switch (G__26572) {
case 1:
return sablono.core.image26569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26570.length)].join('')));

}
});

sablono.core.image26569.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26569.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26569.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26569);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26577_SHARP_,p2__26578_SHARP_){
return [cljs.core.str(p1__26577_SHARP_),cljs.core.str("["),cljs.core.str(p2__26578_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26579_SHARP_,p2__26580_SHARP_){
return [cljs.core.str(p1__26579_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26580_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26581 = (function sablono$core$color_field26581(var_args){
var args26582 = [];
var len__25835__auto___26649 = arguments.length;
var i__25836__auto___26650 = (0);
while(true){
if((i__25836__auto___26650 < len__25835__auto___26649)){
args26582.push((arguments[i__25836__auto___26650]));

var G__26651 = (i__25836__auto___26650 + (1));
i__25836__auto___26650 = G__26651;
continue;
} else {
}
break;
}

var G__26584 = args26582.length;
switch (G__26584) {
case 1:
return sablono.core.color_field26581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26582.length)].join('')));

}
});

sablono.core.color_field26581.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.color_field26581.call(null,name__26496__auto__,null);
});

sablono.core.color_field26581.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.color_field26581.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26581);

/**
 * Creates a date input field.
 */
sablono.core.date_field26585 = (function sablono$core$date_field26585(var_args){
var args26586 = [];
var len__25835__auto___26653 = arguments.length;
var i__25836__auto___26654 = (0);
while(true){
if((i__25836__auto___26654 < len__25835__auto___26653)){
args26586.push((arguments[i__25836__auto___26654]));

var G__26655 = (i__25836__auto___26654 + (1));
i__25836__auto___26654 = G__26655;
continue;
} else {
}
break;
}

var G__26588 = args26586.length;
switch (G__26588) {
case 1:
return sablono.core.date_field26585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26586.length)].join('')));

}
});

sablono.core.date_field26585.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.date_field26585.call(null,name__26496__auto__,null);
});

sablono.core.date_field26585.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.date_field26585.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26585);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26589 = (function sablono$core$datetime_field26589(var_args){
var args26590 = [];
var len__25835__auto___26657 = arguments.length;
var i__25836__auto___26658 = (0);
while(true){
if((i__25836__auto___26658 < len__25835__auto___26657)){
args26590.push((arguments[i__25836__auto___26658]));

var G__26659 = (i__25836__auto___26658 + (1));
i__25836__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var G__26592 = args26590.length;
switch (G__26592) {
case 1:
return sablono.core.datetime_field26589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26590.length)].join('')));

}
});

sablono.core.datetime_field26589.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.datetime_field26589.call(null,name__26496__auto__,null);
});

sablono.core.datetime_field26589.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.datetime_field26589.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26589);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26593 = (function sablono$core$datetime_local_field26593(var_args){
var args26594 = [];
var len__25835__auto___26661 = arguments.length;
var i__25836__auto___26662 = (0);
while(true){
if((i__25836__auto___26662 < len__25835__auto___26661)){
args26594.push((arguments[i__25836__auto___26662]));

var G__26663 = (i__25836__auto___26662 + (1));
i__25836__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var G__26596 = args26594.length;
switch (G__26596) {
case 1:
return sablono.core.datetime_local_field26593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26594.length)].join('')));

}
});

sablono.core.datetime_local_field26593.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.datetime_local_field26593.call(null,name__26496__auto__,null);
});

sablono.core.datetime_local_field26593.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.datetime_local_field26593.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26593);

/**
 * Creates a email input field.
 */
sablono.core.email_field26597 = (function sablono$core$email_field26597(var_args){
var args26598 = [];
var len__25835__auto___26665 = arguments.length;
var i__25836__auto___26666 = (0);
while(true){
if((i__25836__auto___26666 < len__25835__auto___26665)){
args26598.push((arguments[i__25836__auto___26666]));

var G__26667 = (i__25836__auto___26666 + (1));
i__25836__auto___26666 = G__26667;
continue;
} else {
}
break;
}

var G__26600 = args26598.length;
switch (G__26600) {
case 1:
return sablono.core.email_field26597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26598.length)].join('')));

}
});

sablono.core.email_field26597.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.email_field26597.call(null,name__26496__auto__,null);
});

sablono.core.email_field26597.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.email_field26597.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26597);

/**
 * Creates a file input field.
 */
sablono.core.file_field26601 = (function sablono$core$file_field26601(var_args){
var args26602 = [];
var len__25835__auto___26669 = arguments.length;
var i__25836__auto___26670 = (0);
while(true){
if((i__25836__auto___26670 < len__25835__auto___26669)){
args26602.push((arguments[i__25836__auto___26670]));

var G__26671 = (i__25836__auto___26670 + (1));
i__25836__auto___26670 = G__26671;
continue;
} else {
}
break;
}

var G__26604 = args26602.length;
switch (G__26604) {
case 1:
return sablono.core.file_field26601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26602.length)].join('')));

}
});

sablono.core.file_field26601.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.file_field26601.call(null,name__26496__auto__,null);
});

sablono.core.file_field26601.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.file_field26601.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26601);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26605 = (function sablono$core$hidden_field26605(var_args){
var args26606 = [];
var len__25835__auto___26673 = arguments.length;
var i__25836__auto___26674 = (0);
while(true){
if((i__25836__auto___26674 < len__25835__auto___26673)){
args26606.push((arguments[i__25836__auto___26674]));

var G__26675 = (i__25836__auto___26674 + (1));
i__25836__auto___26674 = G__26675;
continue;
} else {
}
break;
}

var G__26608 = args26606.length;
switch (G__26608) {
case 1:
return sablono.core.hidden_field26605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26606.length)].join('')));

}
});

sablono.core.hidden_field26605.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.hidden_field26605.call(null,name__26496__auto__,null);
});

sablono.core.hidden_field26605.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.hidden_field26605.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26605);

/**
 * Creates a month input field.
 */
sablono.core.month_field26609 = (function sablono$core$month_field26609(var_args){
var args26610 = [];
var len__25835__auto___26677 = arguments.length;
var i__25836__auto___26678 = (0);
while(true){
if((i__25836__auto___26678 < len__25835__auto___26677)){
args26610.push((arguments[i__25836__auto___26678]));

var G__26679 = (i__25836__auto___26678 + (1));
i__25836__auto___26678 = G__26679;
continue;
} else {
}
break;
}

var G__26612 = args26610.length;
switch (G__26612) {
case 1:
return sablono.core.month_field26609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26610.length)].join('')));

}
});

sablono.core.month_field26609.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.month_field26609.call(null,name__26496__auto__,null);
});

sablono.core.month_field26609.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.month_field26609.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26609);

/**
 * Creates a number input field.
 */
sablono.core.number_field26613 = (function sablono$core$number_field26613(var_args){
var args26614 = [];
var len__25835__auto___26681 = arguments.length;
var i__25836__auto___26682 = (0);
while(true){
if((i__25836__auto___26682 < len__25835__auto___26681)){
args26614.push((arguments[i__25836__auto___26682]));

var G__26683 = (i__25836__auto___26682 + (1));
i__25836__auto___26682 = G__26683;
continue;
} else {
}
break;
}

var G__26616 = args26614.length;
switch (G__26616) {
case 1:
return sablono.core.number_field26613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26614.length)].join('')));

}
});

sablono.core.number_field26613.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.number_field26613.call(null,name__26496__auto__,null);
});

sablono.core.number_field26613.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.number_field26613.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26613);

/**
 * Creates a password input field.
 */
sablono.core.password_field26617 = (function sablono$core$password_field26617(var_args){
var args26618 = [];
var len__25835__auto___26685 = arguments.length;
var i__25836__auto___26686 = (0);
while(true){
if((i__25836__auto___26686 < len__25835__auto___26685)){
args26618.push((arguments[i__25836__auto___26686]));

var G__26687 = (i__25836__auto___26686 + (1));
i__25836__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var G__26620 = args26618.length;
switch (G__26620) {
case 1:
return sablono.core.password_field26617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26618.length)].join('')));

}
});

sablono.core.password_field26617.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.password_field26617.call(null,name__26496__auto__,null);
});

sablono.core.password_field26617.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.password_field26617.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26617);

/**
 * Creates a range input field.
 */
sablono.core.range_field26621 = (function sablono$core$range_field26621(var_args){
var args26622 = [];
var len__25835__auto___26689 = arguments.length;
var i__25836__auto___26690 = (0);
while(true){
if((i__25836__auto___26690 < len__25835__auto___26689)){
args26622.push((arguments[i__25836__auto___26690]));

var G__26691 = (i__25836__auto___26690 + (1));
i__25836__auto___26690 = G__26691;
continue;
} else {
}
break;
}

var G__26624 = args26622.length;
switch (G__26624) {
case 1:
return sablono.core.range_field26621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26622.length)].join('')));

}
});

sablono.core.range_field26621.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.range_field26621.call(null,name__26496__auto__,null);
});

sablono.core.range_field26621.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.range_field26621.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26621);

/**
 * Creates a search input field.
 */
sablono.core.search_field26625 = (function sablono$core$search_field26625(var_args){
var args26626 = [];
var len__25835__auto___26693 = arguments.length;
var i__25836__auto___26694 = (0);
while(true){
if((i__25836__auto___26694 < len__25835__auto___26693)){
args26626.push((arguments[i__25836__auto___26694]));

var G__26695 = (i__25836__auto___26694 + (1));
i__25836__auto___26694 = G__26695;
continue;
} else {
}
break;
}

var G__26628 = args26626.length;
switch (G__26628) {
case 1:
return sablono.core.search_field26625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26626.length)].join('')));

}
});

sablono.core.search_field26625.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.search_field26625.call(null,name__26496__auto__,null);
});

sablono.core.search_field26625.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.search_field26625.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26625);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26629 = (function sablono$core$tel_field26629(var_args){
var args26630 = [];
var len__25835__auto___26697 = arguments.length;
var i__25836__auto___26698 = (0);
while(true){
if((i__25836__auto___26698 < len__25835__auto___26697)){
args26630.push((arguments[i__25836__auto___26698]));

var G__26699 = (i__25836__auto___26698 + (1));
i__25836__auto___26698 = G__26699;
continue;
} else {
}
break;
}

var G__26632 = args26630.length;
switch (G__26632) {
case 1:
return sablono.core.tel_field26629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26630.length)].join('')));

}
});

sablono.core.tel_field26629.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.tel_field26629.call(null,name__26496__auto__,null);
});

sablono.core.tel_field26629.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.tel_field26629.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26629);

/**
 * Creates a text input field.
 */
sablono.core.text_field26633 = (function sablono$core$text_field26633(var_args){
var args26634 = [];
var len__25835__auto___26701 = arguments.length;
var i__25836__auto___26702 = (0);
while(true){
if((i__25836__auto___26702 < len__25835__auto___26701)){
args26634.push((arguments[i__25836__auto___26702]));

var G__26703 = (i__25836__auto___26702 + (1));
i__25836__auto___26702 = G__26703;
continue;
} else {
}
break;
}

var G__26636 = args26634.length;
switch (G__26636) {
case 1:
return sablono.core.text_field26633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26634.length)].join('')));

}
});

sablono.core.text_field26633.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.text_field26633.call(null,name__26496__auto__,null);
});

sablono.core.text_field26633.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.text_field26633.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26633);

/**
 * Creates a time input field.
 */
sablono.core.time_field26637 = (function sablono$core$time_field26637(var_args){
var args26638 = [];
var len__25835__auto___26705 = arguments.length;
var i__25836__auto___26706 = (0);
while(true){
if((i__25836__auto___26706 < len__25835__auto___26705)){
args26638.push((arguments[i__25836__auto___26706]));

var G__26707 = (i__25836__auto___26706 + (1));
i__25836__auto___26706 = G__26707;
continue;
} else {
}
break;
}

var G__26640 = args26638.length;
switch (G__26640) {
case 1:
return sablono.core.time_field26637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26638.length)].join('')));

}
});

sablono.core.time_field26637.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.time_field26637.call(null,name__26496__auto__,null);
});

sablono.core.time_field26637.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.time_field26637.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26637);

/**
 * Creates a url input field.
 */
sablono.core.url_field26641 = (function sablono$core$url_field26641(var_args){
var args26642 = [];
var len__25835__auto___26709 = arguments.length;
var i__25836__auto___26710 = (0);
while(true){
if((i__25836__auto___26710 < len__25835__auto___26709)){
args26642.push((arguments[i__25836__auto___26710]));

var G__26711 = (i__25836__auto___26710 + (1));
i__25836__auto___26710 = G__26711;
continue;
} else {
}
break;
}

var G__26644 = args26642.length;
switch (G__26644) {
case 1:
return sablono.core.url_field26641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26642.length)].join('')));

}
});

sablono.core.url_field26641.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.url_field26641.call(null,name__26496__auto__,null);
});

sablono.core.url_field26641.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.url_field26641.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26641);

/**
 * Creates a week input field.
 */
sablono.core.week_field26645 = (function sablono$core$week_field26645(var_args){
var args26646 = [];
var len__25835__auto___26713 = arguments.length;
var i__25836__auto___26714 = (0);
while(true){
if((i__25836__auto___26714 < len__25835__auto___26713)){
args26646.push((arguments[i__25836__auto___26714]));

var G__26715 = (i__25836__auto___26714 + (1));
i__25836__auto___26714 = G__26715;
continue;
} else {
}
break;
}

var G__26648 = args26646.length;
switch (G__26648) {
case 1:
return sablono.core.week_field26645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26646.length)].join('')));

}
});

sablono.core.week_field26645.cljs$core$IFn$_invoke$arity$1 = (function (name__26496__auto__){
return sablono.core.week_field26645.call(null,name__26496__auto__,null);
});

sablono.core.week_field26645.cljs$core$IFn$_invoke$arity$2 = (function (name__26496__auto__,value__26497__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26496__auto__,value__26497__auto__);
});

sablono.core.week_field26645.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26645);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26717 = (function sablono$core$check_box26717(var_args){
var args26718 = [];
var len__25835__auto___26721 = arguments.length;
var i__25836__auto___26722 = (0);
while(true){
if((i__25836__auto___26722 < len__25835__auto___26721)){
args26718.push((arguments[i__25836__auto___26722]));

var G__26723 = (i__25836__auto___26722 + (1));
i__25836__auto___26722 = G__26723;
continue;
} else {
}
break;
}

var G__26720 = args26718.length;
switch (G__26720) {
case 1:
return sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26718.length)].join('')));

}
});

sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26717.call(null,name,null);
});

sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26717.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26717.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26717.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26717);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26725 = (function sablono$core$radio_button26725(var_args){
var args26726 = [];
var len__25835__auto___26729 = arguments.length;
var i__25836__auto___26730 = (0);
while(true){
if((i__25836__auto___26730 < len__25835__auto___26729)){
args26726.push((arguments[i__25836__auto___26730]));

var G__26731 = (i__25836__auto___26730 + (1));
i__25836__auto___26730 = G__26731;
continue;
} else {
}
break;
}

var G__26728 = args26726.length;
switch (G__26728) {
case 1:
return sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26726.length)].join('')));

}
});

sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26725.call(null,group,null);
});

sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26725.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26725.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26725.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26725);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26733 = (function sablono$core$select_options26733(coll){
var iter__25540__auto__ = (function sablono$core$select_options26733_$_iter__26750(s__26751){
return (new cljs.core.LazySeq(null,(function (){
var s__26751__$1 = s__26751;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26751__$1);
if(temp__4657__auto__){
var s__26751__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26751__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26751__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26753 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26752 = (0);
while(true){
if((i__26752 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26752);
cljs.core.chunk_append.call(null,b__26753,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26760 = x;
var text = cljs.core.nth.call(null,vec__26760,(0),null);
var val = cljs.core.nth.call(null,vec__26760,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26760,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26733.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26766 = (i__26752 + (1));
i__26752 = G__26766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26753),sablono$core$select_options26733_$_iter__26750.call(null,cljs.core.chunk_rest.call(null,s__26751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26753),null);
}
} else {
var x = cljs.core.first.call(null,s__26751__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26763 = x;
var text = cljs.core.nth.call(null,vec__26763,(0),null);
var val = cljs.core.nth.call(null,vec__26763,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26763,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26733.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26733_$_iter__26750.call(null,cljs.core.rest.call(null,s__26751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26733);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26767 = (function sablono$core$drop_down26767(var_args){
var args26768 = [];
var len__25835__auto___26771 = arguments.length;
var i__25836__auto___26772 = (0);
while(true){
if((i__25836__auto___26772 < len__25835__auto___26771)){
args26768.push((arguments[i__25836__auto___26772]));

var G__26773 = (i__25836__auto___26772 + (1));
i__25836__auto___26772 = G__26773;
continue;
} else {
}
break;
}

var G__26770 = args26768.length;
switch (G__26770) {
case 2:
return sablono.core.drop_down26767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26767.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26768.length)].join('')));

}
});

sablono.core.drop_down26767.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26767.call(null,name,options,null);
});

sablono.core.drop_down26767.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26767.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26767);
/**
 * Creates a text area element.
 */
sablono.core.text_area26775 = (function sablono$core$text_area26775(var_args){
var args26776 = [];
var len__25835__auto___26779 = arguments.length;
var i__25836__auto___26780 = (0);
while(true){
if((i__25836__auto___26780 < len__25835__auto___26779)){
args26776.push((arguments[i__25836__auto___26780]));

var G__26781 = (i__25836__auto___26780 + (1));
i__25836__auto___26780 = G__26781;
continue;
} else {
}
break;
}

var G__26778 = args26776.length;
switch (G__26778) {
case 1:
return sablono.core.text_area26775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26776.length)].join('')));

}
});

sablono.core.text_area26775.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26775.call(null,name,null);
});

sablono.core.text_area26775.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26775.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26775);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26783 = (function sablono$core$label26783(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26783);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26784 = (function sablono$core$submit_button26784(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26784);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26785 = (function sablono$core$reset_button26785(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26785);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26786 = (function sablono$core$form_to26786(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26793 = arguments.length;
var i__25836__auto___26794 = (0);
while(true){
if((i__25836__auto___26794 < len__25835__auto___26793)){
args__25842__auto__.push((arguments[i__25836__auto___26794]));

var G__26795 = (i__25836__auto___26794 + (1));
i__25836__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26786.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.form_to26786.cljs$core$IFn$_invoke$arity$variadic = (function (p__26789,body){
var vec__26790 = p__26789;
var method = cljs.core.nth.call(null,vec__26790,(0),null);
var action = cljs.core.nth.call(null,vec__26790,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26786.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26786.cljs$lang$applyTo = (function (seq26787){
var G__26788 = cljs.core.first.call(null,seq26787);
var seq26787__$1 = cljs.core.next.call(null,seq26787);
return sablono.core.form_to26786.cljs$core$IFn$_invoke$arity$variadic(G__26788,seq26787__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26786);

//# sourceMappingURL=core.js.map?rel=1486531227655