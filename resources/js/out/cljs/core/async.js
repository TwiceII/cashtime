// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27245 = [];
var len__25835__auto___27251 = arguments.length;
var i__25836__auto___27252 = (0);
while(true){
if((i__25836__auto___27252 < len__25835__auto___27251)){
args27245.push((arguments[i__25836__auto___27252]));

var G__27253 = (i__25836__auto___27252 + (1));
i__25836__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var G__27247 = args27245.length;
switch (G__27247) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27245.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27248 = (function (f,blockable,meta27249){
this.f = f;
this.blockable = blockable;
this.meta27249 = meta27249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27250,meta27249__$1){
var self__ = this;
var _27250__$1 = this;
return (new cljs.core.async.t_cljs$core$async27248(self__.f,self__.blockable,meta27249__$1));
});

cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27250){
var self__ = this;
var _27250__$1 = this;
return self__.meta27249;
});

cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27249","meta27249",1024903488,null)], null);
});

cljs.core.async.t_cljs$core$async27248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27248";

cljs.core.async.t_cljs$core$async27248.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27248");
});

cljs.core.async.__GT_t_cljs$core$async27248 = (function cljs$core$async$__GT_t_cljs$core$async27248(f__$1,blockable__$1,meta27249){
return (new cljs.core.async.t_cljs$core$async27248(f__$1,blockable__$1,meta27249));
});

}

return (new cljs.core.async.t_cljs$core$async27248(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27257 = [];
var len__25835__auto___27260 = arguments.length;
var i__25836__auto___27261 = (0);
while(true){
if((i__25836__auto___27261 < len__25835__auto___27260)){
args27257.push((arguments[i__25836__auto___27261]));

var G__27262 = (i__25836__auto___27261 + (1));
i__25836__auto___27261 = G__27262;
continue;
} else {
}
break;
}

var G__27259 = args27257.length;
switch (G__27259) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27257.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27264 = [];
var len__25835__auto___27267 = arguments.length;
var i__25836__auto___27268 = (0);
while(true){
if((i__25836__auto___27268 < len__25835__auto___27267)){
args27264.push((arguments[i__25836__auto___27268]));

var G__27269 = (i__25836__auto___27268 + (1));
i__25836__auto___27268 = G__27269;
continue;
} else {
}
break;
}

var G__27266 = args27264.length;
switch (G__27266) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27264.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27271 = [];
var len__25835__auto___27274 = arguments.length;
var i__25836__auto___27275 = (0);
while(true){
if((i__25836__auto___27275 < len__25835__auto___27274)){
args27271.push((arguments[i__25836__auto___27275]));

var G__27276 = (i__25836__auto___27275 + (1));
i__25836__auto___27275 = G__27276;
continue;
} else {
}
break;
}

var G__27273 = args27271.length;
switch (G__27273) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27271.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27278 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27278);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27278,ret){
return (function (){
return fn1.call(null,val_27278);
});})(val_27278,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27279 = [];
var len__25835__auto___27282 = arguments.length;
var i__25836__auto___27283 = (0);
while(true){
if((i__25836__auto___27283 < len__25835__auto___27282)){
args27279.push((arguments[i__25836__auto___27283]));

var G__27284 = (i__25836__auto___27283 + (1));
i__25836__auto___27283 = G__27284;
continue;
} else {
}
break;
}

var G__27281 = args27279.length;
switch (G__27281) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27279.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25675__auto___27286 = n;
var x_27287 = (0);
while(true){
if((x_27287 < n__25675__auto___27286)){
(a[x_27287] = (0));

var G__27288 = (x_27287 + (1));
x_27287 = G__27288;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27289 = (i + (1));
i = G__27289;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27293 = (function (alt_flag,flag,meta27294){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27294 = meta27294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27295,meta27294__$1){
var self__ = this;
var _27295__$1 = this;
return (new cljs.core.async.t_cljs$core$async27293(self__.alt_flag,self__.flag,meta27294__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27295){
var self__ = this;
var _27295__$1 = this;
return self__.meta27294;
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27294","meta27294",-1354471933,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27293.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27293";

cljs.core.async.t_cljs$core$async27293.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27293");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27293 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27293(alt_flag__$1,flag__$1,meta27294){
return (new cljs.core.async.t_cljs$core$async27293(alt_flag__$1,flag__$1,meta27294));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27293(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27299 = (function (alt_handler,flag,cb,meta27300){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27300 = meta27300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27301,meta27300__$1){
var self__ = this;
var _27301__$1 = this;
return (new cljs.core.async.t_cljs$core$async27299(self__.alt_handler,self__.flag,self__.cb,meta27300__$1));
});

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27301){
var self__ = this;
var _27301__$1 = this;
return self__.meta27300;
});

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27300","meta27300",-452032419,null)], null);
});

cljs.core.async.t_cljs$core$async27299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27299";

cljs.core.async.t_cljs$core$async27299.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27299");
});

cljs.core.async.__GT_t_cljs$core$async27299 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27299(alt_handler__$1,flag__$1,cb__$1,meta27300){
return (new cljs.core.async.t_cljs$core$async27299(alt_handler__$1,flag__$1,cb__$1,meta27300));
});

}

return (new cljs.core.async.t_cljs$core$async27299(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27302_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27302_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27303_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27303_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24760__auto__ = wport;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27304 = (i + (1));
i = G__27304;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24760__auto__ = ret;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___27310 = arguments.length;
var i__25836__auto___27311 = (0);
while(true){
if((i__25836__auto___27311 < len__25835__auto___27310)){
args__25842__auto__.push((arguments[i__25836__auto___27311]));

var G__27312 = (i__25836__auto___27311 + (1));
i__25836__auto___27311 = G__27312;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27307){
var map__27308 = p__27307;
var map__27308__$1 = ((((!((map__27308 == null)))?((((map__27308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27308):map__27308);
var opts = map__27308__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27305){
var G__27306 = cljs.core.first.call(null,seq27305);
var seq27305__$1 = cljs.core.next.call(null,seq27305);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27306,seq27305__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27313 = [];
var len__25835__auto___27363 = arguments.length;
var i__25836__auto___27364 = (0);
while(true){
if((i__25836__auto___27364 < len__25835__auto___27363)){
args27313.push((arguments[i__25836__auto___27364]));

var G__27365 = (i__25836__auto___27364 + (1));
i__25836__auto___27364 = G__27365;
continue;
} else {
}
break;
}

var G__27315 = args27313.length;
switch (G__27315) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27313.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27200__auto___27367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___27367){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___27367){
return (function (state_27339){
var state_val_27340 = (state_27339[(1)]);
if((state_val_27340 === (7))){
var inst_27335 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27341_27368 = state_27339__$1;
(statearr_27341_27368[(2)] = inst_27335);

(statearr_27341_27368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (1))){
var state_27339__$1 = state_27339;
var statearr_27342_27369 = state_27339__$1;
(statearr_27342_27369[(2)] = null);

(statearr_27342_27369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (4))){
var inst_27318 = (state_27339[(7)]);
var inst_27318__$1 = (state_27339[(2)]);
var inst_27319 = (inst_27318__$1 == null);
var state_27339__$1 = (function (){var statearr_27343 = state_27339;
(statearr_27343[(7)] = inst_27318__$1);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27319)){
var statearr_27344_27370 = state_27339__$1;
(statearr_27344_27370[(1)] = (5));

} else {
var statearr_27345_27371 = state_27339__$1;
(statearr_27345_27371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (13))){
var state_27339__$1 = state_27339;
var statearr_27346_27372 = state_27339__$1;
(statearr_27346_27372[(2)] = null);

(statearr_27346_27372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (6))){
var inst_27318 = (state_27339[(7)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,(11),to,inst_27318);
} else {
if((state_val_27340 === (3))){
var inst_27337 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else {
if((state_val_27340 === (12))){
var state_27339__$1 = state_27339;
var statearr_27347_27373 = state_27339__$1;
(statearr_27347_27373[(2)] = null);

(statearr_27347_27373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (2))){
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27339__$1,(4),from);
} else {
if((state_val_27340 === (11))){
var inst_27328 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
if(cljs.core.truth_(inst_27328)){
var statearr_27348_27374 = state_27339__$1;
(statearr_27348_27374[(1)] = (12));

} else {
var statearr_27349_27375 = state_27339__$1;
(statearr_27349_27375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (9))){
var state_27339__$1 = state_27339;
var statearr_27350_27376 = state_27339__$1;
(statearr_27350_27376[(2)] = null);

(statearr_27350_27376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (5))){
var state_27339__$1 = state_27339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27351_27377 = state_27339__$1;
(statearr_27351_27377[(1)] = (8));

} else {
var statearr_27352_27378 = state_27339__$1;
(statearr_27352_27378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (14))){
var inst_27333 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27353_27379 = state_27339__$1;
(statearr_27353_27379[(2)] = inst_27333);

(statearr_27353_27379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (10))){
var inst_27325 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27354_27380 = state_27339__$1;
(statearr_27354_27380[(2)] = inst_27325);

(statearr_27354_27380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (8))){
var inst_27322 = cljs.core.async.close_BANG_.call(null,to);
var state_27339__$1 = state_27339;
var statearr_27355_27381 = state_27339__$1;
(statearr_27355_27381[(2)] = inst_27322);

(statearr_27355_27381[(1)] = (10));


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
});})(c__27200__auto___27367))
;
return ((function (switch__27088__auto__,c__27200__auto___27367){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_27359 = [null,null,null,null,null,null,null,null];
(statearr_27359[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_27359[(1)] = (1));

return statearr_27359;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_27339){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27360){if((e27360 instanceof Object)){
var ex__27092__auto__ = e27360;
var statearr_27361_27382 = state_27339;
(statearr_27361_27382[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27383 = state_27339;
state_27339 = G__27383;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___27367))
})();
var state__27202__auto__ = (function (){var statearr_27362 = f__27201__auto__.call(null);
(statearr_27362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27367);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___27367))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27571){
var vec__27572 = p__27571;
var v = cljs.core.nth.call(null,vec__27572,(0),null);
var p = cljs.core.nth.call(null,vec__27572,(1),null);
var job = vec__27572;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27200__auto___27758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results){
return (function (state_27579){
var state_val_27580 = (state_27579[(1)]);
if((state_val_27580 === (1))){
var state_27579__$1 = state_27579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27579__$1,(2),res,v);
} else {
if((state_val_27580 === (2))){
var inst_27576 = (state_27579[(2)]);
var inst_27577 = cljs.core.async.close_BANG_.call(null,res);
var state_27579__$1 = (function (){var statearr_27581 = state_27579;
(statearr_27581[(7)] = inst_27576);

return statearr_27581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27579__$1,inst_27577);
} else {
return null;
}
}
});})(c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results))
;
return ((function (switch__27088__auto__,c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_27585 = [null,null,null,null,null,null,null,null];
(statearr_27585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__);

(statearr_27585[(1)] = (1));

return statearr_27585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1 = (function (state_27579){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27586){if((e27586 instanceof Object)){
var ex__27092__auto__ = e27586;
var statearr_27587_27759 = state_27579;
(statearr_27587_27759[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27760 = state_27579;
state_27579 = G__27760;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = function(state_27579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1.call(this,state_27579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results))
})();
var state__27202__auto__ = (function (){var statearr_27588 = f__27201__auto__.call(null);
(statearr_27588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27758);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___27758,res,vec__27572,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27589){
var vec__27590 = p__27589;
var v = cljs.core.nth.call(null,vec__27590,(0),null);
var p = cljs.core.nth.call(null,vec__27590,(1),null);
var job = vec__27590;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25675__auto___27761 = n;
var __27762 = (0);
while(true){
if((__27762 < n__25675__auto___27761)){
var G__27593_27763 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27593_27763) {
case "compute":
var c__27200__auto___27765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27762,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (__27762,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function (state_27606){
var state_val_27607 = (state_27606[(1)]);
if((state_val_27607 === (1))){
var state_27606__$1 = state_27606;
var statearr_27608_27766 = state_27606__$1;
(statearr_27608_27766[(2)] = null);

(statearr_27608_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27607 === (2))){
var state_27606__$1 = state_27606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27606__$1,(4),jobs);
} else {
if((state_val_27607 === (3))){
var inst_27604 = (state_27606[(2)]);
var state_27606__$1 = state_27606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27606__$1,inst_27604);
} else {
if((state_val_27607 === (4))){
var inst_27596 = (state_27606[(2)]);
var inst_27597 = process.call(null,inst_27596);
var state_27606__$1 = state_27606;
if(cljs.core.truth_(inst_27597)){
var statearr_27609_27767 = state_27606__$1;
(statearr_27609_27767[(1)] = (5));

} else {
var statearr_27610_27768 = state_27606__$1;
(statearr_27610_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27607 === (5))){
var state_27606__$1 = state_27606;
var statearr_27611_27769 = state_27606__$1;
(statearr_27611_27769[(2)] = null);

(statearr_27611_27769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27607 === (6))){
var state_27606__$1 = state_27606;
var statearr_27612_27770 = state_27606__$1;
(statearr_27612_27770[(2)] = null);

(statearr_27612_27770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27607 === (7))){
var inst_27602 = (state_27606[(2)]);
var state_27606__$1 = state_27606;
var statearr_27613_27771 = state_27606__$1;
(statearr_27613_27771[(2)] = inst_27602);

(statearr_27613_27771[(1)] = (3));


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
});})(__27762,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
;
return ((function (__27762,switch__27088__auto__,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_27617 = [null,null,null,null,null,null,null];
(statearr_27617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__);

(statearr_27617[(1)] = (1));

return statearr_27617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1 = (function (state_27606){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27618){if((e27618 instanceof Object)){
var ex__27092__auto__ = e27618;
var statearr_27619_27772 = state_27606;
(statearr_27619_27772[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27606;
state_27606 = G__27773;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = function(state_27606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1.call(this,state_27606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__;
})()
;})(__27762,switch__27088__auto__,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
})();
var state__27202__auto__ = (function (){var statearr_27620 = f__27201__auto__.call(null);
(statearr_27620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27765);

return statearr_27620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(__27762,c__27200__auto___27765,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
);


break;
case "async":
var c__27200__auto___27774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27762,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (__27762,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function (state_27633){
var state_val_27634 = (state_27633[(1)]);
if((state_val_27634 === (1))){
var state_27633__$1 = state_27633;
var statearr_27635_27775 = state_27633__$1;
(statearr_27635_27775[(2)] = null);

(statearr_27635_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (2))){
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27633__$1,(4),jobs);
} else {
if((state_val_27634 === (3))){
var inst_27631 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27633__$1,inst_27631);
} else {
if((state_val_27634 === (4))){
var inst_27623 = (state_27633[(2)]);
var inst_27624 = async.call(null,inst_27623);
var state_27633__$1 = state_27633;
if(cljs.core.truth_(inst_27624)){
var statearr_27636_27776 = state_27633__$1;
(statearr_27636_27776[(1)] = (5));

} else {
var statearr_27637_27777 = state_27633__$1;
(statearr_27637_27777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (5))){
var state_27633__$1 = state_27633;
var statearr_27638_27778 = state_27633__$1;
(statearr_27638_27778[(2)] = null);

(statearr_27638_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (6))){
var state_27633__$1 = state_27633;
var statearr_27639_27779 = state_27633__$1;
(statearr_27639_27779[(2)] = null);

(statearr_27639_27779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (7))){
var inst_27629 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
var statearr_27640_27780 = state_27633__$1;
(statearr_27640_27780[(2)] = inst_27629);

(statearr_27640_27780[(1)] = (3));


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
});})(__27762,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
;
return ((function (__27762,switch__27088__auto__,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_27644 = [null,null,null,null,null,null,null];
(statearr_27644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__);

(statearr_27644[(1)] = (1));

return statearr_27644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1 = (function (state_27633){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27645){if((e27645 instanceof Object)){
var ex__27092__auto__ = e27645;
var statearr_27646_27781 = state_27633;
(statearr_27646_27781[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27782 = state_27633;
state_27633 = G__27782;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = function(state_27633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1.call(this,state_27633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__;
})()
;})(__27762,switch__27088__auto__,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
})();
var state__27202__auto__ = (function (){var statearr_27647 = f__27201__auto__.call(null);
(statearr_27647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27774);

return statearr_27647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(__27762,c__27200__auto___27774,G__27593_27763,n__25675__auto___27761,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27783 = (__27762 + (1));
__27762 = G__27783;
continue;
} else {
}
break;
}

var c__27200__auto___27784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___27784,jobs,results,process,async){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___27784,jobs,results,process,async){
return (function (state_27669){
var state_val_27670 = (state_27669[(1)]);
if((state_val_27670 === (1))){
var state_27669__$1 = state_27669;
var statearr_27671_27785 = state_27669__$1;
(statearr_27671_27785[(2)] = null);

(statearr_27671_27785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (2))){
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27669__$1,(4),from);
} else {
if((state_val_27670 === (3))){
var inst_27667 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27669__$1,inst_27667);
} else {
if((state_val_27670 === (4))){
var inst_27650 = (state_27669[(7)]);
var inst_27650__$1 = (state_27669[(2)]);
var inst_27651 = (inst_27650__$1 == null);
var state_27669__$1 = (function (){var statearr_27672 = state_27669;
(statearr_27672[(7)] = inst_27650__$1);

return statearr_27672;
})();
if(cljs.core.truth_(inst_27651)){
var statearr_27673_27786 = state_27669__$1;
(statearr_27673_27786[(1)] = (5));

} else {
var statearr_27674_27787 = state_27669__$1;
(statearr_27674_27787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (5))){
var inst_27653 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27669__$1 = state_27669;
var statearr_27675_27788 = state_27669__$1;
(statearr_27675_27788[(2)] = inst_27653);

(statearr_27675_27788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (6))){
var inst_27655 = (state_27669[(8)]);
var inst_27650 = (state_27669[(7)]);
var inst_27655__$1 = cljs.core.async.chan.call(null,(1));
var inst_27656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27657 = [inst_27650,inst_27655__$1];
var inst_27658 = (new cljs.core.PersistentVector(null,2,(5),inst_27656,inst_27657,null));
var state_27669__$1 = (function (){var statearr_27676 = state_27669;
(statearr_27676[(8)] = inst_27655__$1);

return statearr_27676;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27669__$1,(8),jobs,inst_27658);
} else {
if((state_val_27670 === (7))){
var inst_27665 = (state_27669[(2)]);
var state_27669__$1 = state_27669;
var statearr_27677_27789 = state_27669__$1;
(statearr_27677_27789[(2)] = inst_27665);

(statearr_27677_27789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27670 === (8))){
var inst_27655 = (state_27669[(8)]);
var inst_27660 = (state_27669[(2)]);
var state_27669__$1 = (function (){var statearr_27678 = state_27669;
(statearr_27678[(9)] = inst_27660);

return statearr_27678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27669__$1,(9),results,inst_27655);
} else {
if((state_val_27670 === (9))){
var inst_27662 = (state_27669[(2)]);
var state_27669__$1 = (function (){var statearr_27679 = state_27669;
(statearr_27679[(10)] = inst_27662);

return statearr_27679;
})();
var statearr_27680_27790 = state_27669__$1;
(statearr_27680_27790[(2)] = null);

(statearr_27680_27790[(1)] = (2));


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
});})(c__27200__auto___27784,jobs,results,process,async))
;
return ((function (switch__27088__auto__,c__27200__auto___27784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_27684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27684[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__);

(statearr_27684[(1)] = (1));

return statearr_27684;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1 = (function (state_27669){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27685){if((e27685 instanceof Object)){
var ex__27092__auto__ = e27685;
var statearr_27686_27791 = state_27669;
(statearr_27686_27791[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27792 = state_27669;
state_27669 = G__27792;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = function(state_27669){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1.call(this,state_27669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___27784,jobs,results,process,async))
})();
var state__27202__auto__ = (function (){var statearr_27687 = f__27201__auto__.call(null);
(statearr_27687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27784);

return statearr_27687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___27784,jobs,results,process,async))
);


var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__,jobs,results,process,async){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__,jobs,results,process,async){
return (function (state_27725){
var state_val_27726 = (state_27725[(1)]);
if((state_val_27726 === (7))){
var inst_27721 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27727_27793 = state_27725__$1;
(statearr_27727_27793[(2)] = inst_27721);

(statearr_27727_27793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (20))){
var state_27725__$1 = state_27725;
var statearr_27728_27794 = state_27725__$1;
(statearr_27728_27794[(2)] = null);

(statearr_27728_27794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (1))){
var state_27725__$1 = state_27725;
var statearr_27729_27795 = state_27725__$1;
(statearr_27729_27795[(2)] = null);

(statearr_27729_27795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (4))){
var inst_27690 = (state_27725[(7)]);
var inst_27690__$1 = (state_27725[(2)]);
var inst_27691 = (inst_27690__$1 == null);
var state_27725__$1 = (function (){var statearr_27730 = state_27725;
(statearr_27730[(7)] = inst_27690__$1);

return statearr_27730;
})();
if(cljs.core.truth_(inst_27691)){
var statearr_27731_27796 = state_27725__$1;
(statearr_27731_27796[(1)] = (5));

} else {
var statearr_27732_27797 = state_27725__$1;
(statearr_27732_27797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (15))){
var inst_27703 = (state_27725[(8)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27725__$1,(18),to,inst_27703);
} else {
if((state_val_27726 === (21))){
var inst_27716 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27733_27798 = state_27725__$1;
(statearr_27733_27798[(2)] = inst_27716);

(statearr_27733_27798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (13))){
var inst_27718 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27734 = state_27725;
(statearr_27734[(9)] = inst_27718);

return statearr_27734;
})();
var statearr_27735_27799 = state_27725__$1;
(statearr_27735_27799[(2)] = null);

(statearr_27735_27799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (6))){
var inst_27690 = (state_27725[(7)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(11),inst_27690);
} else {
if((state_val_27726 === (17))){
var inst_27711 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
if(cljs.core.truth_(inst_27711)){
var statearr_27736_27800 = state_27725__$1;
(statearr_27736_27800[(1)] = (19));

} else {
var statearr_27737_27801 = state_27725__$1;
(statearr_27737_27801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (3))){
var inst_27723 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27725__$1,inst_27723);
} else {
if((state_val_27726 === (12))){
var inst_27700 = (state_27725[(10)]);
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(14),inst_27700);
} else {
if((state_val_27726 === (2))){
var state_27725__$1 = state_27725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(4),results);
} else {
if((state_val_27726 === (19))){
var state_27725__$1 = state_27725;
var statearr_27738_27802 = state_27725__$1;
(statearr_27738_27802[(2)] = null);

(statearr_27738_27802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (11))){
var inst_27700 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27739 = state_27725;
(statearr_27739[(10)] = inst_27700);

return statearr_27739;
})();
var statearr_27740_27803 = state_27725__$1;
(statearr_27740_27803[(2)] = null);

(statearr_27740_27803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (9))){
var state_27725__$1 = state_27725;
var statearr_27741_27804 = state_27725__$1;
(statearr_27741_27804[(2)] = null);

(statearr_27741_27804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (5))){
var state_27725__$1 = state_27725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27742_27805 = state_27725__$1;
(statearr_27742_27805[(1)] = (8));

} else {
var statearr_27743_27806 = state_27725__$1;
(statearr_27743_27806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (14))){
var inst_27703 = (state_27725[(8)]);
var inst_27705 = (state_27725[(11)]);
var inst_27703__$1 = (state_27725[(2)]);
var inst_27704 = (inst_27703__$1 == null);
var inst_27705__$1 = cljs.core.not.call(null,inst_27704);
var state_27725__$1 = (function (){var statearr_27744 = state_27725;
(statearr_27744[(8)] = inst_27703__$1);

(statearr_27744[(11)] = inst_27705__$1);

return statearr_27744;
})();
if(inst_27705__$1){
var statearr_27745_27807 = state_27725__$1;
(statearr_27745_27807[(1)] = (15));

} else {
var statearr_27746_27808 = state_27725__$1;
(statearr_27746_27808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (16))){
var inst_27705 = (state_27725[(11)]);
var state_27725__$1 = state_27725;
var statearr_27747_27809 = state_27725__$1;
(statearr_27747_27809[(2)] = inst_27705);

(statearr_27747_27809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (10))){
var inst_27697 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27748_27810 = state_27725__$1;
(statearr_27748_27810[(2)] = inst_27697);

(statearr_27748_27810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (18))){
var inst_27708 = (state_27725[(2)]);
var state_27725__$1 = state_27725;
var statearr_27749_27811 = state_27725__$1;
(statearr_27749_27811[(2)] = inst_27708);

(statearr_27749_27811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (8))){
var inst_27694 = cljs.core.async.close_BANG_.call(null,to);
var state_27725__$1 = state_27725;
var statearr_27750_27812 = state_27725__$1;
(statearr_27750_27812[(2)] = inst_27694);

(statearr_27750_27812[(1)] = (10));


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
});})(c__27200__auto__,jobs,results,process,async))
;
return ((function (switch__27088__auto__,c__27200__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1 = (function (state_27725){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object)){
var ex__27092__auto__ = e27755;
var statearr_27756_27813 = state_27725;
(statearr_27756_27813[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27814 = state_27725;
state_27725 = G__27814;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__ = function(state_27725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1.call(this,state_27725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__,jobs,results,process,async))
})();
var state__27202__auto__ = (function (){var statearr_27757 = f__27201__auto__.call(null);
(statearr_27757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__,jobs,results,process,async))
);

return c__27200__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27815 = [];
var len__25835__auto___27818 = arguments.length;
var i__25836__auto___27819 = (0);
while(true){
if((i__25836__auto___27819 < len__25835__auto___27818)){
args27815.push((arguments[i__25836__auto___27819]));

var G__27820 = (i__25836__auto___27819 + (1));
i__25836__auto___27819 = G__27820;
continue;
} else {
}
break;
}

var G__27817 = args27815.length;
switch (G__27817) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27815.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27822 = [];
var len__25835__auto___27825 = arguments.length;
var i__25836__auto___27826 = (0);
while(true){
if((i__25836__auto___27826 < len__25835__auto___27825)){
args27822.push((arguments[i__25836__auto___27826]));

var G__27827 = (i__25836__auto___27826 + (1));
i__25836__auto___27826 = G__27827;
continue;
} else {
}
break;
}

var G__27824 = args27822.length;
switch (G__27824) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27822.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27829 = [];
var len__25835__auto___27882 = arguments.length;
var i__25836__auto___27883 = (0);
while(true){
if((i__25836__auto___27883 < len__25835__auto___27882)){
args27829.push((arguments[i__25836__auto___27883]));

var G__27884 = (i__25836__auto___27883 + (1));
i__25836__auto___27883 = G__27884;
continue;
} else {
}
break;
}

var G__27831 = args27829.length;
switch (G__27831) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27829.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27200__auto___27886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___27886,tc,fc){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___27886,tc,fc){
return (function (state_27857){
var state_val_27858 = (state_27857[(1)]);
if((state_val_27858 === (7))){
var inst_27853 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27859_27887 = state_27857__$1;
(statearr_27859_27887[(2)] = inst_27853);

(statearr_27859_27887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (1))){
var state_27857__$1 = state_27857;
var statearr_27860_27888 = state_27857__$1;
(statearr_27860_27888[(2)] = null);

(statearr_27860_27888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (4))){
var inst_27834 = (state_27857[(7)]);
var inst_27834__$1 = (state_27857[(2)]);
var inst_27835 = (inst_27834__$1 == null);
var state_27857__$1 = (function (){var statearr_27861 = state_27857;
(statearr_27861[(7)] = inst_27834__$1);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27835)){
var statearr_27862_27889 = state_27857__$1;
(statearr_27862_27889[(1)] = (5));

} else {
var statearr_27863_27890 = state_27857__$1;
(statearr_27863_27890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (13))){
var state_27857__$1 = state_27857;
var statearr_27864_27891 = state_27857__$1;
(statearr_27864_27891[(2)] = null);

(statearr_27864_27891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (6))){
var inst_27834 = (state_27857[(7)]);
var inst_27840 = p.call(null,inst_27834);
var state_27857__$1 = state_27857;
if(cljs.core.truth_(inst_27840)){
var statearr_27865_27892 = state_27857__$1;
(statearr_27865_27892[(1)] = (9));

} else {
var statearr_27866_27893 = state_27857__$1;
(statearr_27866_27893[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (3))){
var inst_27855 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27857__$1,inst_27855);
} else {
if((state_val_27858 === (12))){
var state_27857__$1 = state_27857;
var statearr_27867_27894 = state_27857__$1;
(statearr_27867_27894[(2)] = null);

(statearr_27867_27894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (2))){
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27857__$1,(4),ch);
} else {
if((state_val_27858 === (11))){
var inst_27834 = (state_27857[(7)]);
var inst_27844 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27857__$1,(8),inst_27844,inst_27834);
} else {
if((state_val_27858 === (9))){
var state_27857__$1 = state_27857;
var statearr_27868_27895 = state_27857__$1;
(statearr_27868_27895[(2)] = tc);

(statearr_27868_27895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (5))){
var inst_27837 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27838 = cljs.core.async.close_BANG_.call(null,fc);
var state_27857__$1 = (function (){var statearr_27869 = state_27857;
(statearr_27869[(8)] = inst_27837);

return statearr_27869;
})();
var statearr_27870_27896 = state_27857__$1;
(statearr_27870_27896[(2)] = inst_27838);

(statearr_27870_27896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (14))){
var inst_27851 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
var statearr_27871_27897 = state_27857__$1;
(statearr_27871_27897[(2)] = inst_27851);

(statearr_27871_27897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (10))){
var state_27857__$1 = state_27857;
var statearr_27872_27898 = state_27857__$1;
(statearr_27872_27898[(2)] = fc);

(statearr_27872_27898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27858 === (8))){
var inst_27846 = (state_27857[(2)]);
var state_27857__$1 = state_27857;
if(cljs.core.truth_(inst_27846)){
var statearr_27873_27899 = state_27857__$1;
(statearr_27873_27899[(1)] = (12));

} else {
var statearr_27874_27900 = state_27857__$1;
(statearr_27874_27900[(1)] = (13));

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
});})(c__27200__auto___27886,tc,fc))
;
return ((function (switch__27088__auto__,c__27200__auto___27886,tc,fc){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_27878 = [null,null,null,null,null,null,null,null,null];
(statearr_27878[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_27878[(1)] = (1));

return statearr_27878;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_27857){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27879){if((e27879 instanceof Object)){
var ex__27092__auto__ = e27879;
var statearr_27880_27901 = state_27857;
(statearr_27880_27901[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27902 = state_27857;
state_27857 = G__27902;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_27857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_27857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___27886,tc,fc))
})();
var state__27202__auto__ = (function (){var statearr_27881 = f__27201__auto__.call(null);
(statearr_27881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___27886);

return statearr_27881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___27886,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__){
return (function (state_27966){
var state_val_27967 = (state_27966[(1)]);
if((state_val_27967 === (7))){
var inst_27962 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
var statearr_27968_27989 = state_27966__$1;
(statearr_27968_27989[(2)] = inst_27962);

(statearr_27968_27989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (1))){
var inst_27946 = init;
var state_27966__$1 = (function (){var statearr_27969 = state_27966;
(statearr_27969[(7)] = inst_27946);

return statearr_27969;
})();
var statearr_27970_27990 = state_27966__$1;
(statearr_27970_27990[(2)] = null);

(statearr_27970_27990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (4))){
var inst_27949 = (state_27966[(8)]);
var inst_27949__$1 = (state_27966[(2)]);
var inst_27950 = (inst_27949__$1 == null);
var state_27966__$1 = (function (){var statearr_27971 = state_27966;
(statearr_27971[(8)] = inst_27949__$1);

return statearr_27971;
})();
if(cljs.core.truth_(inst_27950)){
var statearr_27972_27991 = state_27966__$1;
(statearr_27972_27991[(1)] = (5));

} else {
var statearr_27973_27992 = state_27966__$1;
(statearr_27973_27992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (6))){
var inst_27949 = (state_27966[(8)]);
var inst_27946 = (state_27966[(7)]);
var inst_27953 = (state_27966[(9)]);
var inst_27953__$1 = f.call(null,inst_27946,inst_27949);
var inst_27954 = cljs.core.reduced_QMARK_.call(null,inst_27953__$1);
var state_27966__$1 = (function (){var statearr_27974 = state_27966;
(statearr_27974[(9)] = inst_27953__$1);

return statearr_27974;
})();
if(inst_27954){
var statearr_27975_27993 = state_27966__$1;
(statearr_27975_27993[(1)] = (8));

} else {
var statearr_27976_27994 = state_27966__$1;
(statearr_27976_27994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (3))){
var inst_27964 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27966__$1,inst_27964);
} else {
if((state_val_27967 === (2))){
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27966__$1,(4),ch);
} else {
if((state_val_27967 === (9))){
var inst_27953 = (state_27966[(9)]);
var inst_27946 = inst_27953;
var state_27966__$1 = (function (){var statearr_27977 = state_27966;
(statearr_27977[(7)] = inst_27946);

return statearr_27977;
})();
var statearr_27978_27995 = state_27966__$1;
(statearr_27978_27995[(2)] = null);

(statearr_27978_27995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (5))){
var inst_27946 = (state_27966[(7)]);
var state_27966__$1 = state_27966;
var statearr_27979_27996 = state_27966__$1;
(statearr_27979_27996[(2)] = inst_27946);

(statearr_27979_27996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (10))){
var inst_27960 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
var statearr_27980_27997 = state_27966__$1;
(statearr_27980_27997[(2)] = inst_27960);

(statearr_27980_27997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (8))){
var inst_27953 = (state_27966[(9)]);
var inst_27956 = cljs.core.deref.call(null,inst_27953);
var state_27966__$1 = state_27966;
var statearr_27981_27998 = state_27966__$1;
(statearr_27981_27998[(2)] = inst_27956);

(statearr_27981_27998[(1)] = (10));


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
});})(c__27200__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27089__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27089__auto____0 = (function (){
var statearr_27985 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27985[(0)] = cljs$core$async$reduce_$_state_machine__27089__auto__);

(statearr_27985[(1)] = (1));

return statearr_27985;
});
var cljs$core$async$reduce_$_state_machine__27089__auto____1 = (function (state_27966){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_27966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e27986){if((e27986 instanceof Object)){
var ex__27092__auto__ = e27986;
var statearr_27987_27999 = state_27966;
(statearr_27987_27999[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28000 = state_27966;
state_27966 = G__28000;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27089__auto__ = function(state_27966){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27089__auto____1.call(this,state_27966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27089__auto____0;
cljs$core$async$reduce_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27089__auto____1;
return cljs$core$async$reduce_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__))
})();
var state__27202__auto__ = (function (){var statearr_27988 = f__27201__auto__.call(null);
(statearr_27988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_27988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__))
);

return c__27200__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28001 = [];
var len__25835__auto___28053 = arguments.length;
var i__25836__auto___28054 = (0);
while(true){
if((i__25836__auto___28054 < len__25835__auto___28053)){
args28001.push((arguments[i__25836__auto___28054]));

var G__28055 = (i__25836__auto___28054 + (1));
i__25836__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var G__28003 = args28001.length;
switch (G__28003) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28001.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__){
return (function (state_28028){
var state_val_28029 = (state_28028[(1)]);
if((state_val_28029 === (7))){
var inst_28010 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28030_28057 = state_28028__$1;
(statearr_28030_28057[(2)] = inst_28010);

(statearr_28030_28057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (1))){
var inst_28004 = cljs.core.seq.call(null,coll);
var inst_28005 = inst_28004;
var state_28028__$1 = (function (){var statearr_28031 = state_28028;
(statearr_28031[(7)] = inst_28005);

return statearr_28031;
})();
var statearr_28032_28058 = state_28028__$1;
(statearr_28032_28058[(2)] = null);

(statearr_28032_28058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (4))){
var inst_28005 = (state_28028[(7)]);
var inst_28008 = cljs.core.first.call(null,inst_28005);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28028__$1,(7),ch,inst_28008);
} else {
if((state_val_28029 === (13))){
var inst_28022 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28033_28059 = state_28028__$1;
(statearr_28033_28059[(2)] = inst_28022);

(statearr_28033_28059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (6))){
var inst_28013 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
if(cljs.core.truth_(inst_28013)){
var statearr_28034_28060 = state_28028__$1;
(statearr_28034_28060[(1)] = (8));

} else {
var statearr_28035_28061 = state_28028__$1;
(statearr_28035_28061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (3))){
var inst_28026 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28028__$1,inst_28026);
} else {
if((state_val_28029 === (12))){
var state_28028__$1 = state_28028;
var statearr_28036_28062 = state_28028__$1;
(statearr_28036_28062[(2)] = null);

(statearr_28036_28062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (2))){
var inst_28005 = (state_28028[(7)]);
var state_28028__$1 = state_28028;
if(cljs.core.truth_(inst_28005)){
var statearr_28037_28063 = state_28028__$1;
(statearr_28037_28063[(1)] = (4));

} else {
var statearr_28038_28064 = state_28028__$1;
(statearr_28038_28064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (11))){
var inst_28019 = cljs.core.async.close_BANG_.call(null,ch);
var state_28028__$1 = state_28028;
var statearr_28039_28065 = state_28028__$1;
(statearr_28039_28065[(2)] = inst_28019);

(statearr_28039_28065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (9))){
var state_28028__$1 = state_28028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28040_28066 = state_28028__$1;
(statearr_28040_28066[(1)] = (11));

} else {
var statearr_28041_28067 = state_28028__$1;
(statearr_28041_28067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (5))){
var inst_28005 = (state_28028[(7)]);
var state_28028__$1 = state_28028;
var statearr_28042_28068 = state_28028__$1;
(statearr_28042_28068[(2)] = inst_28005);

(statearr_28042_28068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (10))){
var inst_28024 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28043_28069 = state_28028__$1;
(statearr_28043_28069[(2)] = inst_28024);

(statearr_28043_28069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (8))){
var inst_28005 = (state_28028[(7)]);
var inst_28015 = cljs.core.next.call(null,inst_28005);
var inst_28005__$1 = inst_28015;
var state_28028__$1 = (function (){var statearr_28044 = state_28028;
(statearr_28044[(7)] = inst_28005__$1);

return statearr_28044;
})();
var statearr_28045_28070 = state_28028__$1;
(statearr_28045_28070[(2)] = null);

(statearr_28045_28070[(1)] = (2));


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
});})(c__27200__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_28049 = [null,null,null,null,null,null,null,null];
(statearr_28049[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_28049[(1)] = (1));

return statearr_28049;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_28028){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_28028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e28050){if((e28050 instanceof Object)){
var ex__27092__auto__ = e28050;
var statearr_28051_28071 = state_28028;
(statearr_28051_28071[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28072 = state_28028;
state_28028 = G__28072;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_28028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_28028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__))
})();
var state__27202__auto__ = (function (){var statearr_28052 = f__27201__auto__.call(null);
(statearr_28052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_28052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__))
);

return c__27200__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25423__auto__ = (((_ == null))?null:_);
var m__25424__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,_);
} else {
var m__25424__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28298 = (function (mult,ch,cs,meta28299){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28299 = meta28299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28300,meta28299__$1){
var self__ = this;
var _28300__$1 = this;
return (new cljs.core.async.t_cljs$core$async28298(self__.mult,self__.ch,self__.cs,meta28299__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28300){
var self__ = this;
var _28300__$1 = this;
return self__.meta28299;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28299","meta28299",-1405050116,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28298";

cljs.core.async.t_cljs$core$async28298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28298");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28298 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28298(mult__$1,ch__$1,cs__$1,meta28299){
return (new cljs.core.async.t_cljs$core$async28298(mult__$1,ch__$1,cs__$1,meta28299));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28298(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27200__auto___28523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___28523,cs,m,dchan,dctr,done){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___28523,cs,m,dchan,dctr,done){
return (function (state_28435){
var state_val_28436 = (state_28435[(1)]);
if((state_val_28436 === (7))){
var inst_28431 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28437_28524 = state_28435__$1;
(statearr_28437_28524[(2)] = inst_28431);

(statearr_28437_28524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (20))){
var inst_28334 = (state_28435[(7)]);
var inst_28346 = cljs.core.first.call(null,inst_28334);
var inst_28347 = cljs.core.nth.call(null,inst_28346,(0),null);
var inst_28348 = cljs.core.nth.call(null,inst_28346,(1),null);
var state_28435__$1 = (function (){var statearr_28438 = state_28435;
(statearr_28438[(8)] = inst_28347);

return statearr_28438;
})();
if(cljs.core.truth_(inst_28348)){
var statearr_28439_28525 = state_28435__$1;
(statearr_28439_28525[(1)] = (22));

} else {
var statearr_28440_28526 = state_28435__$1;
(statearr_28440_28526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (27))){
var inst_28303 = (state_28435[(9)]);
var inst_28383 = (state_28435[(10)]);
var inst_28378 = (state_28435[(11)]);
var inst_28376 = (state_28435[(12)]);
var inst_28383__$1 = cljs.core._nth.call(null,inst_28376,inst_28378);
var inst_28384 = cljs.core.async.put_BANG_.call(null,inst_28383__$1,inst_28303,done);
var state_28435__$1 = (function (){var statearr_28441 = state_28435;
(statearr_28441[(10)] = inst_28383__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28384)){
var statearr_28442_28527 = state_28435__$1;
(statearr_28442_28527[(1)] = (30));

} else {
var statearr_28443_28528 = state_28435__$1;
(statearr_28443_28528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (1))){
var state_28435__$1 = state_28435;
var statearr_28444_28529 = state_28435__$1;
(statearr_28444_28529[(2)] = null);

(statearr_28444_28529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (24))){
var inst_28334 = (state_28435[(7)]);
var inst_28353 = (state_28435[(2)]);
var inst_28354 = cljs.core.next.call(null,inst_28334);
var inst_28312 = inst_28354;
var inst_28313 = null;
var inst_28314 = (0);
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28445 = state_28435;
(statearr_28445[(13)] = inst_28312);

(statearr_28445[(14)] = inst_28315);

(statearr_28445[(15)] = inst_28353);

(statearr_28445[(16)] = inst_28314);

(statearr_28445[(17)] = inst_28313);

return statearr_28445;
})();
var statearr_28446_28530 = state_28435__$1;
(statearr_28446_28530[(2)] = null);

(statearr_28446_28530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (39))){
var state_28435__$1 = state_28435;
var statearr_28450_28531 = state_28435__$1;
(statearr_28450_28531[(2)] = null);

(statearr_28450_28531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (4))){
var inst_28303 = (state_28435[(9)]);
var inst_28303__$1 = (state_28435[(2)]);
var inst_28304 = (inst_28303__$1 == null);
var state_28435__$1 = (function (){var statearr_28451 = state_28435;
(statearr_28451[(9)] = inst_28303__$1);

return statearr_28451;
})();
if(cljs.core.truth_(inst_28304)){
var statearr_28452_28532 = state_28435__$1;
(statearr_28452_28532[(1)] = (5));

} else {
var statearr_28453_28533 = state_28435__$1;
(statearr_28453_28533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (15))){
var inst_28312 = (state_28435[(13)]);
var inst_28315 = (state_28435[(14)]);
var inst_28314 = (state_28435[(16)]);
var inst_28313 = (state_28435[(17)]);
var inst_28330 = (state_28435[(2)]);
var inst_28331 = (inst_28315 + (1));
var tmp28447 = inst_28312;
var tmp28448 = inst_28314;
var tmp28449 = inst_28313;
var inst_28312__$1 = tmp28447;
var inst_28313__$1 = tmp28449;
var inst_28314__$1 = tmp28448;
var inst_28315__$1 = inst_28331;
var state_28435__$1 = (function (){var statearr_28454 = state_28435;
(statearr_28454[(13)] = inst_28312__$1);

(statearr_28454[(14)] = inst_28315__$1);

(statearr_28454[(18)] = inst_28330);

(statearr_28454[(16)] = inst_28314__$1);

(statearr_28454[(17)] = inst_28313__$1);

return statearr_28454;
})();
var statearr_28455_28534 = state_28435__$1;
(statearr_28455_28534[(2)] = null);

(statearr_28455_28534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (21))){
var inst_28357 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28459_28535 = state_28435__$1;
(statearr_28459_28535[(2)] = inst_28357);

(statearr_28459_28535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (31))){
var inst_28383 = (state_28435[(10)]);
var inst_28387 = done.call(null,null);
var inst_28388 = cljs.core.async.untap_STAR_.call(null,m,inst_28383);
var state_28435__$1 = (function (){var statearr_28460 = state_28435;
(statearr_28460[(19)] = inst_28387);

return statearr_28460;
})();
var statearr_28461_28536 = state_28435__$1;
(statearr_28461_28536[(2)] = inst_28388);

(statearr_28461_28536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (32))){
var inst_28375 = (state_28435[(20)]);
var inst_28378 = (state_28435[(11)]);
var inst_28377 = (state_28435[(21)]);
var inst_28376 = (state_28435[(12)]);
var inst_28390 = (state_28435[(2)]);
var inst_28391 = (inst_28378 + (1));
var tmp28456 = inst_28375;
var tmp28457 = inst_28377;
var tmp28458 = inst_28376;
var inst_28375__$1 = tmp28456;
var inst_28376__$1 = tmp28458;
var inst_28377__$1 = tmp28457;
var inst_28378__$1 = inst_28391;
var state_28435__$1 = (function (){var statearr_28462 = state_28435;
(statearr_28462[(20)] = inst_28375__$1);

(statearr_28462[(11)] = inst_28378__$1);

(statearr_28462[(21)] = inst_28377__$1);

(statearr_28462[(22)] = inst_28390);

(statearr_28462[(12)] = inst_28376__$1);

return statearr_28462;
})();
var statearr_28463_28537 = state_28435__$1;
(statearr_28463_28537[(2)] = null);

(statearr_28463_28537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (40))){
var inst_28403 = (state_28435[(23)]);
var inst_28407 = done.call(null,null);
var inst_28408 = cljs.core.async.untap_STAR_.call(null,m,inst_28403);
var state_28435__$1 = (function (){var statearr_28464 = state_28435;
(statearr_28464[(24)] = inst_28407);

return statearr_28464;
})();
var statearr_28465_28538 = state_28435__$1;
(statearr_28465_28538[(2)] = inst_28408);

(statearr_28465_28538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (33))){
var inst_28394 = (state_28435[(25)]);
var inst_28396 = cljs.core.chunked_seq_QMARK_.call(null,inst_28394);
var state_28435__$1 = state_28435;
if(inst_28396){
var statearr_28466_28539 = state_28435__$1;
(statearr_28466_28539[(1)] = (36));

} else {
var statearr_28467_28540 = state_28435__$1;
(statearr_28467_28540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (13))){
var inst_28324 = (state_28435[(26)]);
var inst_28327 = cljs.core.async.close_BANG_.call(null,inst_28324);
var state_28435__$1 = state_28435;
var statearr_28468_28541 = state_28435__$1;
(statearr_28468_28541[(2)] = inst_28327);

(statearr_28468_28541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (22))){
var inst_28347 = (state_28435[(8)]);
var inst_28350 = cljs.core.async.close_BANG_.call(null,inst_28347);
var state_28435__$1 = state_28435;
var statearr_28469_28542 = state_28435__$1;
(statearr_28469_28542[(2)] = inst_28350);

(statearr_28469_28542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (36))){
var inst_28394 = (state_28435[(25)]);
var inst_28398 = cljs.core.chunk_first.call(null,inst_28394);
var inst_28399 = cljs.core.chunk_rest.call(null,inst_28394);
var inst_28400 = cljs.core.count.call(null,inst_28398);
var inst_28375 = inst_28399;
var inst_28376 = inst_28398;
var inst_28377 = inst_28400;
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28470 = state_28435;
(statearr_28470[(20)] = inst_28375);

(statearr_28470[(11)] = inst_28378);

(statearr_28470[(21)] = inst_28377);

(statearr_28470[(12)] = inst_28376);

return statearr_28470;
})();
var statearr_28471_28543 = state_28435__$1;
(statearr_28471_28543[(2)] = null);

(statearr_28471_28543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (41))){
var inst_28394 = (state_28435[(25)]);
var inst_28410 = (state_28435[(2)]);
var inst_28411 = cljs.core.next.call(null,inst_28394);
var inst_28375 = inst_28411;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28472 = state_28435;
(statearr_28472[(20)] = inst_28375);

(statearr_28472[(11)] = inst_28378);

(statearr_28472[(21)] = inst_28377);

(statearr_28472[(12)] = inst_28376);

(statearr_28472[(27)] = inst_28410);

return statearr_28472;
})();
var statearr_28473_28544 = state_28435__$1;
(statearr_28473_28544[(2)] = null);

(statearr_28473_28544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (43))){
var state_28435__$1 = state_28435;
var statearr_28474_28545 = state_28435__$1;
(statearr_28474_28545[(2)] = null);

(statearr_28474_28545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (29))){
var inst_28419 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28475_28546 = state_28435__$1;
(statearr_28475_28546[(2)] = inst_28419);

(statearr_28475_28546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (44))){
var inst_28428 = (state_28435[(2)]);
var state_28435__$1 = (function (){var statearr_28476 = state_28435;
(statearr_28476[(28)] = inst_28428);

return statearr_28476;
})();
var statearr_28477_28547 = state_28435__$1;
(statearr_28477_28547[(2)] = null);

(statearr_28477_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (6))){
var inst_28367 = (state_28435[(29)]);
var inst_28366 = cljs.core.deref.call(null,cs);
var inst_28367__$1 = cljs.core.keys.call(null,inst_28366);
var inst_28368 = cljs.core.count.call(null,inst_28367__$1);
var inst_28369 = cljs.core.reset_BANG_.call(null,dctr,inst_28368);
var inst_28374 = cljs.core.seq.call(null,inst_28367__$1);
var inst_28375 = inst_28374;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28478 = state_28435;
(statearr_28478[(20)] = inst_28375);

(statearr_28478[(29)] = inst_28367__$1);

(statearr_28478[(11)] = inst_28378);

(statearr_28478[(21)] = inst_28377);

(statearr_28478[(12)] = inst_28376);

(statearr_28478[(30)] = inst_28369);

return statearr_28478;
})();
var statearr_28479_28548 = state_28435__$1;
(statearr_28479_28548[(2)] = null);

(statearr_28479_28548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (28))){
var inst_28375 = (state_28435[(20)]);
var inst_28394 = (state_28435[(25)]);
var inst_28394__$1 = cljs.core.seq.call(null,inst_28375);
var state_28435__$1 = (function (){var statearr_28480 = state_28435;
(statearr_28480[(25)] = inst_28394__$1);

return statearr_28480;
})();
if(inst_28394__$1){
var statearr_28481_28549 = state_28435__$1;
(statearr_28481_28549[(1)] = (33));

} else {
var statearr_28482_28550 = state_28435__$1;
(statearr_28482_28550[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (25))){
var inst_28378 = (state_28435[(11)]);
var inst_28377 = (state_28435[(21)]);
var inst_28380 = (inst_28378 < inst_28377);
var inst_28381 = inst_28380;
var state_28435__$1 = state_28435;
if(cljs.core.truth_(inst_28381)){
var statearr_28483_28551 = state_28435__$1;
(statearr_28483_28551[(1)] = (27));

} else {
var statearr_28484_28552 = state_28435__$1;
(statearr_28484_28552[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (34))){
var state_28435__$1 = state_28435;
var statearr_28485_28553 = state_28435__$1;
(statearr_28485_28553[(2)] = null);

(statearr_28485_28553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (17))){
var state_28435__$1 = state_28435;
var statearr_28486_28554 = state_28435__$1;
(statearr_28486_28554[(2)] = null);

(statearr_28486_28554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (3))){
var inst_28433 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28435__$1,inst_28433);
} else {
if((state_val_28436 === (12))){
var inst_28362 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28487_28555 = state_28435__$1;
(statearr_28487_28555[(2)] = inst_28362);

(statearr_28487_28555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (2))){
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28435__$1,(4),ch);
} else {
if((state_val_28436 === (23))){
var state_28435__$1 = state_28435;
var statearr_28488_28556 = state_28435__$1;
(statearr_28488_28556[(2)] = null);

(statearr_28488_28556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (35))){
var inst_28417 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28489_28557 = state_28435__$1;
(statearr_28489_28557[(2)] = inst_28417);

(statearr_28489_28557[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (19))){
var inst_28334 = (state_28435[(7)]);
var inst_28338 = cljs.core.chunk_first.call(null,inst_28334);
var inst_28339 = cljs.core.chunk_rest.call(null,inst_28334);
var inst_28340 = cljs.core.count.call(null,inst_28338);
var inst_28312 = inst_28339;
var inst_28313 = inst_28338;
var inst_28314 = inst_28340;
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28490 = state_28435;
(statearr_28490[(13)] = inst_28312);

(statearr_28490[(14)] = inst_28315);

(statearr_28490[(16)] = inst_28314);

(statearr_28490[(17)] = inst_28313);

return statearr_28490;
})();
var statearr_28491_28558 = state_28435__$1;
(statearr_28491_28558[(2)] = null);

(statearr_28491_28558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (11))){
var inst_28312 = (state_28435[(13)]);
var inst_28334 = (state_28435[(7)]);
var inst_28334__$1 = cljs.core.seq.call(null,inst_28312);
var state_28435__$1 = (function (){var statearr_28492 = state_28435;
(statearr_28492[(7)] = inst_28334__$1);

return statearr_28492;
})();
if(inst_28334__$1){
var statearr_28493_28559 = state_28435__$1;
(statearr_28493_28559[(1)] = (16));

} else {
var statearr_28494_28560 = state_28435__$1;
(statearr_28494_28560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (9))){
var inst_28364 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28495_28561 = state_28435__$1;
(statearr_28495_28561[(2)] = inst_28364);

(statearr_28495_28561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (5))){
var inst_28310 = cljs.core.deref.call(null,cs);
var inst_28311 = cljs.core.seq.call(null,inst_28310);
var inst_28312 = inst_28311;
var inst_28313 = null;
var inst_28314 = (0);
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28496 = state_28435;
(statearr_28496[(13)] = inst_28312);

(statearr_28496[(14)] = inst_28315);

(statearr_28496[(16)] = inst_28314);

(statearr_28496[(17)] = inst_28313);

return statearr_28496;
})();
var statearr_28497_28562 = state_28435__$1;
(statearr_28497_28562[(2)] = null);

(statearr_28497_28562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (14))){
var state_28435__$1 = state_28435;
var statearr_28498_28563 = state_28435__$1;
(statearr_28498_28563[(2)] = null);

(statearr_28498_28563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (45))){
var inst_28425 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28499_28564 = state_28435__$1;
(statearr_28499_28564[(2)] = inst_28425);

(statearr_28499_28564[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (26))){
var inst_28367 = (state_28435[(29)]);
var inst_28421 = (state_28435[(2)]);
var inst_28422 = cljs.core.seq.call(null,inst_28367);
var state_28435__$1 = (function (){var statearr_28500 = state_28435;
(statearr_28500[(31)] = inst_28421);

return statearr_28500;
})();
if(inst_28422){
var statearr_28501_28565 = state_28435__$1;
(statearr_28501_28565[(1)] = (42));

} else {
var statearr_28502_28566 = state_28435__$1;
(statearr_28502_28566[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (16))){
var inst_28334 = (state_28435[(7)]);
var inst_28336 = cljs.core.chunked_seq_QMARK_.call(null,inst_28334);
var state_28435__$1 = state_28435;
if(inst_28336){
var statearr_28503_28567 = state_28435__$1;
(statearr_28503_28567[(1)] = (19));

} else {
var statearr_28504_28568 = state_28435__$1;
(statearr_28504_28568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (38))){
var inst_28414 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28505_28569 = state_28435__$1;
(statearr_28505_28569[(2)] = inst_28414);

(statearr_28505_28569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (30))){
var state_28435__$1 = state_28435;
var statearr_28506_28570 = state_28435__$1;
(statearr_28506_28570[(2)] = null);

(statearr_28506_28570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (10))){
var inst_28315 = (state_28435[(14)]);
var inst_28313 = (state_28435[(17)]);
var inst_28323 = cljs.core._nth.call(null,inst_28313,inst_28315);
var inst_28324 = cljs.core.nth.call(null,inst_28323,(0),null);
var inst_28325 = cljs.core.nth.call(null,inst_28323,(1),null);
var state_28435__$1 = (function (){var statearr_28507 = state_28435;
(statearr_28507[(26)] = inst_28324);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28325)){
var statearr_28508_28571 = state_28435__$1;
(statearr_28508_28571[(1)] = (13));

} else {
var statearr_28509_28572 = state_28435__$1;
(statearr_28509_28572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (18))){
var inst_28360 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28510_28573 = state_28435__$1;
(statearr_28510_28573[(2)] = inst_28360);

(statearr_28510_28573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (42))){
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28435__$1,(45),dchan);
} else {
if((state_val_28436 === (37))){
var inst_28403 = (state_28435[(23)]);
var inst_28303 = (state_28435[(9)]);
var inst_28394 = (state_28435[(25)]);
var inst_28403__$1 = cljs.core.first.call(null,inst_28394);
var inst_28404 = cljs.core.async.put_BANG_.call(null,inst_28403__$1,inst_28303,done);
var state_28435__$1 = (function (){var statearr_28511 = state_28435;
(statearr_28511[(23)] = inst_28403__$1);

return statearr_28511;
})();
if(cljs.core.truth_(inst_28404)){
var statearr_28512_28574 = state_28435__$1;
(statearr_28512_28574[(1)] = (39));

} else {
var statearr_28513_28575 = state_28435__$1;
(statearr_28513_28575[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (8))){
var inst_28315 = (state_28435[(14)]);
var inst_28314 = (state_28435[(16)]);
var inst_28317 = (inst_28315 < inst_28314);
var inst_28318 = inst_28317;
var state_28435__$1 = state_28435;
if(cljs.core.truth_(inst_28318)){
var statearr_28514_28576 = state_28435__$1;
(statearr_28514_28576[(1)] = (10));

} else {
var statearr_28515_28577 = state_28435__$1;
(statearr_28515_28577[(1)] = (11));

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
});})(c__27200__auto___28523,cs,m,dchan,dctr,done))
;
return ((function (switch__27088__auto__,c__27200__auto___28523,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27089__auto__ = null;
var cljs$core$async$mult_$_state_machine__27089__auto____0 = (function (){
var statearr_28519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28519[(0)] = cljs$core$async$mult_$_state_machine__27089__auto__);

(statearr_28519[(1)] = (1));

return statearr_28519;
});
var cljs$core$async$mult_$_state_machine__27089__auto____1 = (function (state_28435){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_28435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e28520){if((e28520 instanceof Object)){
var ex__27092__auto__ = e28520;
var statearr_28521_28578 = state_28435;
(statearr_28521_28578[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28579 = state_28435;
state_28435 = G__28579;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27089__auto__ = function(state_28435){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27089__auto____1.call(this,state_28435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27089__auto____0;
cljs$core$async$mult_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27089__auto____1;
return cljs$core$async$mult_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___28523,cs,m,dchan,dctr,done))
})();
var state__27202__auto__ = (function (){var statearr_28522 = f__27201__auto__.call(null);
(statearr_28522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___28523);

return statearr_28522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___28523,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28580 = [];
var len__25835__auto___28583 = arguments.length;
var i__25836__auto___28584 = (0);
while(true){
if((i__25836__auto___28584 < len__25835__auto___28583)){
args28580.push((arguments[i__25836__auto___28584]));

var G__28585 = (i__25836__auto___28584 + (1));
i__25836__auto___28584 = G__28585;
continue;
} else {
}
break;
}

var G__28582 = args28580.length;
switch (G__28582) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28580.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,state_map);
} else {
var m__25424__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,mode);
} else {
var m__25424__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___28597 = arguments.length;
var i__25836__auto___28598 = (0);
while(true){
if((i__25836__auto___28598 < len__25835__auto___28597)){
args__25842__auto__.push((arguments[i__25836__auto___28598]));

var G__28599 = (i__25836__auto___28598 + (1));
i__25836__auto___28598 = G__28599;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28591){
var map__28592 = p__28591;
var map__28592__$1 = ((((!((map__28592 == null)))?((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);
var opts = map__28592__$1;
var statearr_28594_28600 = state;
(statearr_28594_28600[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28592,map__28592__$1,opts){
return (function (val){
var statearr_28595_28601 = state;
(statearr_28595_28601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28592,map__28592__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28596_28602 = state;
(statearr_28596_28602[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28587){
var G__28588 = cljs.core.first.call(null,seq28587);
var seq28587__$1 = cljs.core.next.call(null,seq28587);
var G__28589 = cljs.core.first.call(null,seq28587__$1);
var seq28587__$2 = cljs.core.next.call(null,seq28587__$1);
var G__28590 = cljs.core.first.call(null,seq28587__$2);
var seq28587__$3 = cljs.core.next.call(null,seq28587__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28588,G__28589,G__28590,seq28587__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28768 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28769){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28769 = meta28769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28770,meta28769__$1){
var self__ = this;
var _28770__$1 = this;
return (new cljs.core.async.t_cljs$core$async28768(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28769__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28770){
var self__ = this;
var _28770__$1 = this;
return self__.meta28769;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28769","meta28769",-1257535857,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28768";

cljs.core.async.t_cljs$core$async28768.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28768");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28768 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28768(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28769){
return (new cljs.core.async.t_cljs$core$async28768(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28769));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28768(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27200__auto___28933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28870){
var state_val_28871 = (state_28870[(1)]);
if((state_val_28871 === (7))){
var inst_28786 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28872_28934 = state_28870__$1;
(statearr_28872_28934[(2)] = inst_28786);

(statearr_28872_28934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (20))){
var inst_28798 = (state_28870[(7)]);
var state_28870__$1 = state_28870;
var statearr_28873_28935 = state_28870__$1;
(statearr_28873_28935[(2)] = inst_28798);

(statearr_28873_28935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (27))){
var state_28870__$1 = state_28870;
var statearr_28874_28936 = state_28870__$1;
(statearr_28874_28936[(2)] = null);

(statearr_28874_28936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (1))){
var inst_28774 = (state_28870[(8)]);
var inst_28774__$1 = calc_state.call(null);
var inst_28776 = (inst_28774__$1 == null);
var inst_28777 = cljs.core.not.call(null,inst_28776);
var state_28870__$1 = (function (){var statearr_28875 = state_28870;
(statearr_28875[(8)] = inst_28774__$1);

return statearr_28875;
})();
if(inst_28777){
var statearr_28876_28937 = state_28870__$1;
(statearr_28876_28937[(1)] = (2));

} else {
var statearr_28877_28938 = state_28870__$1;
(statearr_28877_28938[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (24))){
var inst_28844 = (state_28870[(9)]);
var inst_28830 = (state_28870[(10)]);
var inst_28821 = (state_28870[(11)]);
var inst_28844__$1 = inst_28821.call(null,inst_28830);
var state_28870__$1 = (function (){var statearr_28878 = state_28870;
(statearr_28878[(9)] = inst_28844__$1);

return statearr_28878;
})();
if(cljs.core.truth_(inst_28844__$1)){
var statearr_28879_28939 = state_28870__$1;
(statearr_28879_28939[(1)] = (29));

} else {
var statearr_28880_28940 = state_28870__$1;
(statearr_28880_28940[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (4))){
var inst_28789 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28789)){
var statearr_28881_28941 = state_28870__$1;
(statearr_28881_28941[(1)] = (8));

} else {
var statearr_28882_28942 = state_28870__$1;
(statearr_28882_28942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (15))){
var inst_28815 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28815)){
var statearr_28883_28943 = state_28870__$1;
(statearr_28883_28943[(1)] = (19));

} else {
var statearr_28884_28944 = state_28870__$1;
(statearr_28884_28944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (21))){
var inst_28820 = (state_28870[(12)]);
var inst_28820__$1 = (state_28870[(2)]);
var inst_28821 = cljs.core.get.call(null,inst_28820__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28822 = cljs.core.get.call(null,inst_28820__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28823 = cljs.core.get.call(null,inst_28820__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28870__$1 = (function (){var statearr_28885 = state_28870;
(statearr_28885[(13)] = inst_28822);

(statearr_28885[(12)] = inst_28820__$1);

(statearr_28885[(11)] = inst_28821);

return statearr_28885;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28870__$1,(22),inst_28823);
} else {
if((state_val_28871 === (31))){
var inst_28852 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28852)){
var statearr_28886_28945 = state_28870__$1;
(statearr_28886_28945[(1)] = (32));

} else {
var statearr_28887_28946 = state_28870__$1;
(statearr_28887_28946[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (32))){
var inst_28829 = (state_28870[(14)]);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28870__$1,(35),out,inst_28829);
} else {
if((state_val_28871 === (33))){
var inst_28820 = (state_28870[(12)]);
var inst_28798 = inst_28820;
var state_28870__$1 = (function (){var statearr_28888 = state_28870;
(statearr_28888[(7)] = inst_28798);

return statearr_28888;
})();
var statearr_28889_28947 = state_28870__$1;
(statearr_28889_28947[(2)] = null);

(statearr_28889_28947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (13))){
var inst_28798 = (state_28870[(7)]);
var inst_28805 = inst_28798.cljs$lang$protocol_mask$partition0$;
var inst_28806 = (inst_28805 & (64));
var inst_28807 = inst_28798.cljs$core$ISeq$;
var inst_28808 = (inst_28806) || (inst_28807);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28808)){
var statearr_28890_28948 = state_28870__$1;
(statearr_28890_28948[(1)] = (16));

} else {
var statearr_28891_28949 = state_28870__$1;
(statearr_28891_28949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (22))){
var inst_28829 = (state_28870[(14)]);
var inst_28830 = (state_28870[(10)]);
var inst_28828 = (state_28870[(2)]);
var inst_28829__$1 = cljs.core.nth.call(null,inst_28828,(0),null);
var inst_28830__$1 = cljs.core.nth.call(null,inst_28828,(1),null);
var inst_28831 = (inst_28829__$1 == null);
var inst_28832 = cljs.core._EQ_.call(null,inst_28830__$1,change);
var inst_28833 = (inst_28831) || (inst_28832);
var state_28870__$1 = (function (){var statearr_28892 = state_28870;
(statearr_28892[(14)] = inst_28829__$1);

(statearr_28892[(10)] = inst_28830__$1);

return statearr_28892;
})();
if(cljs.core.truth_(inst_28833)){
var statearr_28893_28950 = state_28870__$1;
(statearr_28893_28950[(1)] = (23));

} else {
var statearr_28894_28951 = state_28870__$1;
(statearr_28894_28951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (36))){
var inst_28820 = (state_28870[(12)]);
var inst_28798 = inst_28820;
var state_28870__$1 = (function (){var statearr_28895 = state_28870;
(statearr_28895[(7)] = inst_28798);

return statearr_28895;
})();
var statearr_28896_28952 = state_28870__$1;
(statearr_28896_28952[(2)] = null);

(statearr_28896_28952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (29))){
var inst_28844 = (state_28870[(9)]);
var state_28870__$1 = state_28870;
var statearr_28897_28953 = state_28870__$1;
(statearr_28897_28953[(2)] = inst_28844);

(statearr_28897_28953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (6))){
var state_28870__$1 = state_28870;
var statearr_28898_28954 = state_28870__$1;
(statearr_28898_28954[(2)] = false);

(statearr_28898_28954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (28))){
var inst_28840 = (state_28870[(2)]);
var inst_28841 = calc_state.call(null);
var inst_28798 = inst_28841;
var state_28870__$1 = (function (){var statearr_28899 = state_28870;
(statearr_28899[(15)] = inst_28840);

(statearr_28899[(7)] = inst_28798);

return statearr_28899;
})();
var statearr_28900_28955 = state_28870__$1;
(statearr_28900_28955[(2)] = null);

(statearr_28900_28955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (25))){
var inst_28866 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28901_28956 = state_28870__$1;
(statearr_28901_28956[(2)] = inst_28866);

(statearr_28901_28956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (34))){
var inst_28864 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28902_28957 = state_28870__$1;
(statearr_28902_28957[(2)] = inst_28864);

(statearr_28902_28957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (17))){
var state_28870__$1 = state_28870;
var statearr_28903_28958 = state_28870__$1;
(statearr_28903_28958[(2)] = false);

(statearr_28903_28958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (3))){
var state_28870__$1 = state_28870;
var statearr_28904_28959 = state_28870__$1;
(statearr_28904_28959[(2)] = false);

(statearr_28904_28959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (12))){
var inst_28868 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28870__$1,inst_28868);
} else {
if((state_val_28871 === (2))){
var inst_28774 = (state_28870[(8)]);
var inst_28779 = inst_28774.cljs$lang$protocol_mask$partition0$;
var inst_28780 = (inst_28779 & (64));
var inst_28781 = inst_28774.cljs$core$ISeq$;
var inst_28782 = (inst_28780) || (inst_28781);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28782)){
var statearr_28905_28960 = state_28870__$1;
(statearr_28905_28960[(1)] = (5));

} else {
var statearr_28906_28961 = state_28870__$1;
(statearr_28906_28961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (23))){
var inst_28829 = (state_28870[(14)]);
var inst_28835 = (inst_28829 == null);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28835)){
var statearr_28907_28962 = state_28870__$1;
(statearr_28907_28962[(1)] = (26));

} else {
var statearr_28908_28963 = state_28870__$1;
(statearr_28908_28963[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (35))){
var inst_28855 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28855)){
var statearr_28909_28964 = state_28870__$1;
(statearr_28909_28964[(1)] = (36));

} else {
var statearr_28910_28965 = state_28870__$1;
(statearr_28910_28965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (19))){
var inst_28798 = (state_28870[(7)]);
var inst_28817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28798);
var state_28870__$1 = state_28870;
var statearr_28911_28966 = state_28870__$1;
(statearr_28911_28966[(2)] = inst_28817);

(statearr_28911_28966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (11))){
var inst_28798 = (state_28870[(7)]);
var inst_28802 = (inst_28798 == null);
var inst_28803 = cljs.core.not.call(null,inst_28802);
var state_28870__$1 = state_28870;
if(inst_28803){
var statearr_28912_28967 = state_28870__$1;
(statearr_28912_28967[(1)] = (13));

} else {
var statearr_28913_28968 = state_28870__$1;
(statearr_28913_28968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (9))){
var inst_28774 = (state_28870[(8)]);
var state_28870__$1 = state_28870;
var statearr_28914_28969 = state_28870__$1;
(statearr_28914_28969[(2)] = inst_28774);

(statearr_28914_28969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (5))){
var state_28870__$1 = state_28870;
var statearr_28915_28970 = state_28870__$1;
(statearr_28915_28970[(2)] = true);

(statearr_28915_28970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (14))){
var state_28870__$1 = state_28870;
var statearr_28916_28971 = state_28870__$1;
(statearr_28916_28971[(2)] = false);

(statearr_28916_28971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (26))){
var inst_28830 = (state_28870[(10)]);
var inst_28837 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28830);
var state_28870__$1 = state_28870;
var statearr_28917_28972 = state_28870__$1;
(statearr_28917_28972[(2)] = inst_28837);

(statearr_28917_28972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (16))){
var state_28870__$1 = state_28870;
var statearr_28918_28973 = state_28870__$1;
(statearr_28918_28973[(2)] = true);

(statearr_28918_28973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (38))){
var inst_28860 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28919_28974 = state_28870__$1;
(statearr_28919_28974[(2)] = inst_28860);

(statearr_28919_28974[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (30))){
var inst_28822 = (state_28870[(13)]);
var inst_28830 = (state_28870[(10)]);
var inst_28821 = (state_28870[(11)]);
var inst_28847 = cljs.core.empty_QMARK_.call(null,inst_28821);
var inst_28848 = inst_28822.call(null,inst_28830);
var inst_28849 = cljs.core.not.call(null,inst_28848);
var inst_28850 = (inst_28847) && (inst_28849);
var state_28870__$1 = state_28870;
var statearr_28920_28975 = state_28870__$1;
(statearr_28920_28975[(2)] = inst_28850);

(statearr_28920_28975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (10))){
var inst_28774 = (state_28870[(8)]);
var inst_28794 = (state_28870[(2)]);
var inst_28795 = cljs.core.get.call(null,inst_28794,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28796 = cljs.core.get.call(null,inst_28794,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28797 = cljs.core.get.call(null,inst_28794,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28798 = inst_28774;
var state_28870__$1 = (function (){var statearr_28921 = state_28870;
(statearr_28921[(16)] = inst_28796);

(statearr_28921[(17)] = inst_28795);

(statearr_28921[(18)] = inst_28797);

(statearr_28921[(7)] = inst_28798);

return statearr_28921;
})();
var statearr_28922_28976 = state_28870__$1;
(statearr_28922_28976[(2)] = null);

(statearr_28922_28976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (18))){
var inst_28812 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28923_28977 = state_28870__$1;
(statearr_28923_28977[(2)] = inst_28812);

(statearr_28923_28977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (37))){
var state_28870__$1 = state_28870;
var statearr_28924_28978 = state_28870__$1;
(statearr_28924_28978[(2)] = null);

(statearr_28924_28978[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (8))){
var inst_28774 = (state_28870[(8)]);
var inst_28791 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28774);
var state_28870__$1 = state_28870;
var statearr_28925_28979 = state_28870__$1;
(statearr_28925_28979[(2)] = inst_28791);

(statearr_28925_28979[(1)] = (10));


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
});})(c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27088__auto__,c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27089__auto__ = null;
var cljs$core$async$mix_$_state_machine__27089__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28929[(0)] = cljs$core$async$mix_$_state_machine__27089__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var cljs$core$async$mix_$_state_machine__27089__auto____1 = (function (state_28870){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_28870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e28930){if((e28930 instanceof Object)){
var ex__27092__auto__ = e28930;
var statearr_28931_28980 = state_28870;
(statearr_28931_28980[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28981 = state_28870;
state_28870 = G__28981;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27089__auto__ = function(state_28870){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27089__auto____1.call(this,state_28870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27089__auto____0;
cljs$core$async$mix_$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27089__auto____1;
return cljs$core$async$mix_$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27202__auto__ = (function (){var statearr_28932 = f__27201__auto__.call(null);
(statearr_28932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___28933);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___28933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28982 = [];
var len__25835__auto___28985 = arguments.length;
var i__25836__auto___28986 = (0);
while(true){
if((i__25836__auto___28986 < len__25835__auto___28985)){
args28982.push((arguments[i__25836__auto___28986]));

var G__28987 = (i__25836__auto___28986 + (1));
i__25836__auto___28986 = G__28987;
continue;
} else {
}
break;
}

var G__28984 = args28982.length;
switch (G__28984) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28982.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28990 = [];
var len__25835__auto___29115 = arguments.length;
var i__25836__auto___29116 = (0);
while(true){
if((i__25836__auto___29116 < len__25835__auto___29115)){
args28990.push((arguments[i__25836__auto___29116]));

var G__29117 = (i__25836__auto___29116 + (1));
i__25836__auto___29116 = G__29117;
continue;
} else {
}
break;
}

var G__28992 = args28990.length;
switch (G__28992) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28990.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24760__auto__,mults){
return (function (p1__28989_SHARP_){
if(cljs.core.truth_(p1__28989_SHARP_.call(null,topic))){
return p1__28989_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28989_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28993 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28994){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28994 = meta28994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28995,meta28994__$1){
var self__ = this;
var _28995__$1 = this;
return (new cljs.core.async.t_cljs$core$async28993(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28994__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28995){
var self__ = this;
var _28995__$1 = this;
return self__.meta28994;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28994","meta28994",1156640780,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28993";

cljs.core.async.t_cljs$core$async28993.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28993");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28993 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28994){
return (new cljs.core.async.t_cljs$core$async28993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28994));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28993(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27200__auto___29119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29119,mults,ensure_mult,p){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29119,mults,ensure_mult,p){
return (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (7))){
var inst_29063 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29069_29120 = state_29067__$1;
(statearr_29069_29120[(2)] = inst_29063);

(statearr_29069_29120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (20))){
var state_29067__$1 = state_29067;
var statearr_29070_29121 = state_29067__$1;
(statearr_29070_29121[(2)] = null);

(statearr_29070_29121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (1))){
var state_29067__$1 = state_29067;
var statearr_29071_29122 = state_29067__$1;
(statearr_29071_29122[(2)] = null);

(statearr_29071_29122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (24))){
var inst_29046 = (state_29067[(7)]);
var inst_29055 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29046);
var state_29067__$1 = state_29067;
var statearr_29072_29123 = state_29067__$1;
(statearr_29072_29123[(2)] = inst_29055);

(statearr_29072_29123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (4))){
var inst_28998 = (state_29067[(8)]);
var inst_28998__$1 = (state_29067[(2)]);
var inst_28999 = (inst_28998__$1 == null);
var state_29067__$1 = (function (){var statearr_29073 = state_29067;
(statearr_29073[(8)] = inst_28998__$1);

return statearr_29073;
})();
if(cljs.core.truth_(inst_28999)){
var statearr_29074_29124 = state_29067__$1;
(statearr_29074_29124[(1)] = (5));

} else {
var statearr_29075_29125 = state_29067__$1;
(statearr_29075_29125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (15))){
var inst_29040 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29076_29126 = state_29067__$1;
(statearr_29076_29126[(2)] = inst_29040);

(statearr_29076_29126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (21))){
var inst_29060 = (state_29067[(2)]);
var state_29067__$1 = (function (){var statearr_29077 = state_29067;
(statearr_29077[(9)] = inst_29060);

return statearr_29077;
})();
var statearr_29078_29127 = state_29067__$1;
(statearr_29078_29127[(2)] = null);

(statearr_29078_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (13))){
var inst_29022 = (state_29067[(10)]);
var inst_29024 = cljs.core.chunked_seq_QMARK_.call(null,inst_29022);
var state_29067__$1 = state_29067;
if(inst_29024){
var statearr_29079_29128 = state_29067__$1;
(statearr_29079_29128[(1)] = (16));

} else {
var statearr_29080_29129 = state_29067__$1;
(statearr_29080_29129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (22))){
var inst_29052 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
if(cljs.core.truth_(inst_29052)){
var statearr_29081_29130 = state_29067__$1;
(statearr_29081_29130[(1)] = (23));

} else {
var statearr_29082_29131 = state_29067__$1;
(statearr_29082_29131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (6))){
var inst_29046 = (state_29067[(7)]);
var inst_29048 = (state_29067[(11)]);
var inst_28998 = (state_29067[(8)]);
var inst_29046__$1 = topic_fn.call(null,inst_28998);
var inst_29047 = cljs.core.deref.call(null,mults);
var inst_29048__$1 = cljs.core.get.call(null,inst_29047,inst_29046__$1);
var state_29067__$1 = (function (){var statearr_29083 = state_29067;
(statearr_29083[(7)] = inst_29046__$1);

(statearr_29083[(11)] = inst_29048__$1);

return statearr_29083;
})();
if(cljs.core.truth_(inst_29048__$1)){
var statearr_29084_29132 = state_29067__$1;
(statearr_29084_29132[(1)] = (19));

} else {
var statearr_29085_29133 = state_29067__$1;
(statearr_29085_29133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (25))){
var inst_29057 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29086_29134 = state_29067__$1;
(statearr_29086_29134[(2)] = inst_29057);

(statearr_29086_29134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (17))){
var inst_29022 = (state_29067[(10)]);
var inst_29031 = cljs.core.first.call(null,inst_29022);
var inst_29032 = cljs.core.async.muxch_STAR_.call(null,inst_29031);
var inst_29033 = cljs.core.async.close_BANG_.call(null,inst_29032);
var inst_29034 = cljs.core.next.call(null,inst_29022);
var inst_29008 = inst_29034;
var inst_29009 = null;
var inst_29010 = (0);
var inst_29011 = (0);
var state_29067__$1 = (function (){var statearr_29087 = state_29067;
(statearr_29087[(12)] = inst_29008);

(statearr_29087[(13)] = inst_29009);

(statearr_29087[(14)] = inst_29011);

(statearr_29087[(15)] = inst_29010);

(statearr_29087[(16)] = inst_29033);

return statearr_29087;
})();
var statearr_29088_29135 = state_29067__$1;
(statearr_29088_29135[(2)] = null);

(statearr_29088_29135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (3))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
} else {
if((state_val_29068 === (12))){
var inst_29042 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29089_29136 = state_29067__$1;
(statearr_29089_29136[(2)] = inst_29042);

(statearr_29089_29136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (2))){
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(4),ch);
} else {
if((state_val_29068 === (23))){
var state_29067__$1 = state_29067;
var statearr_29090_29137 = state_29067__$1;
(statearr_29090_29137[(2)] = null);

(statearr_29090_29137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (19))){
var inst_29048 = (state_29067[(11)]);
var inst_28998 = (state_29067[(8)]);
var inst_29050 = cljs.core.async.muxch_STAR_.call(null,inst_29048);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29067__$1,(22),inst_29050,inst_28998);
} else {
if((state_val_29068 === (11))){
var inst_29008 = (state_29067[(12)]);
var inst_29022 = (state_29067[(10)]);
var inst_29022__$1 = cljs.core.seq.call(null,inst_29008);
var state_29067__$1 = (function (){var statearr_29091 = state_29067;
(statearr_29091[(10)] = inst_29022__$1);

return statearr_29091;
})();
if(inst_29022__$1){
var statearr_29092_29138 = state_29067__$1;
(statearr_29092_29138[(1)] = (13));

} else {
var statearr_29093_29139 = state_29067__$1;
(statearr_29093_29139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (9))){
var inst_29044 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29094_29140 = state_29067__$1;
(statearr_29094_29140[(2)] = inst_29044);

(statearr_29094_29140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (5))){
var inst_29005 = cljs.core.deref.call(null,mults);
var inst_29006 = cljs.core.vals.call(null,inst_29005);
var inst_29007 = cljs.core.seq.call(null,inst_29006);
var inst_29008 = inst_29007;
var inst_29009 = null;
var inst_29010 = (0);
var inst_29011 = (0);
var state_29067__$1 = (function (){var statearr_29095 = state_29067;
(statearr_29095[(12)] = inst_29008);

(statearr_29095[(13)] = inst_29009);

(statearr_29095[(14)] = inst_29011);

(statearr_29095[(15)] = inst_29010);

return statearr_29095;
})();
var statearr_29096_29141 = state_29067__$1;
(statearr_29096_29141[(2)] = null);

(statearr_29096_29141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (14))){
var state_29067__$1 = state_29067;
var statearr_29100_29142 = state_29067__$1;
(statearr_29100_29142[(2)] = null);

(statearr_29100_29142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (16))){
var inst_29022 = (state_29067[(10)]);
var inst_29026 = cljs.core.chunk_first.call(null,inst_29022);
var inst_29027 = cljs.core.chunk_rest.call(null,inst_29022);
var inst_29028 = cljs.core.count.call(null,inst_29026);
var inst_29008 = inst_29027;
var inst_29009 = inst_29026;
var inst_29010 = inst_29028;
var inst_29011 = (0);
var state_29067__$1 = (function (){var statearr_29101 = state_29067;
(statearr_29101[(12)] = inst_29008);

(statearr_29101[(13)] = inst_29009);

(statearr_29101[(14)] = inst_29011);

(statearr_29101[(15)] = inst_29010);

return statearr_29101;
})();
var statearr_29102_29143 = state_29067__$1;
(statearr_29102_29143[(2)] = null);

(statearr_29102_29143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (10))){
var inst_29008 = (state_29067[(12)]);
var inst_29009 = (state_29067[(13)]);
var inst_29011 = (state_29067[(14)]);
var inst_29010 = (state_29067[(15)]);
var inst_29016 = cljs.core._nth.call(null,inst_29009,inst_29011);
var inst_29017 = cljs.core.async.muxch_STAR_.call(null,inst_29016);
var inst_29018 = cljs.core.async.close_BANG_.call(null,inst_29017);
var inst_29019 = (inst_29011 + (1));
var tmp29097 = inst_29008;
var tmp29098 = inst_29009;
var tmp29099 = inst_29010;
var inst_29008__$1 = tmp29097;
var inst_29009__$1 = tmp29098;
var inst_29010__$1 = tmp29099;
var inst_29011__$1 = inst_29019;
var state_29067__$1 = (function (){var statearr_29103 = state_29067;
(statearr_29103[(17)] = inst_29018);

(statearr_29103[(12)] = inst_29008__$1);

(statearr_29103[(13)] = inst_29009__$1);

(statearr_29103[(14)] = inst_29011__$1);

(statearr_29103[(15)] = inst_29010__$1);

return statearr_29103;
})();
var statearr_29104_29144 = state_29067__$1;
(statearr_29104_29144[(2)] = null);

(statearr_29104_29144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (18))){
var inst_29037 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29105_29145 = state_29067__$1;
(statearr_29105_29145[(2)] = inst_29037);

(statearr_29105_29145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (8))){
var inst_29011 = (state_29067[(14)]);
var inst_29010 = (state_29067[(15)]);
var inst_29013 = (inst_29011 < inst_29010);
var inst_29014 = inst_29013;
var state_29067__$1 = state_29067;
if(cljs.core.truth_(inst_29014)){
var statearr_29106_29146 = state_29067__$1;
(statearr_29106_29146[(1)] = (10));

} else {
var statearr_29107_29147 = state_29067__$1;
(statearr_29107_29147[(1)] = (11));

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
});})(c__27200__auto___29119,mults,ensure_mult,p))
;
return ((function (switch__27088__auto__,c__27200__auto___29119,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29111[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29111[(1)] = (1));

return statearr_29111;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29067){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29112){if((e29112 instanceof Object)){
var ex__27092__auto__ = e29112;
var statearr_29113_29148 = state_29067;
(statearr_29113_29148[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29149 = state_29067;
state_29067 = G__29149;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29119,mults,ensure_mult,p))
})();
var state__27202__auto__ = (function (){var statearr_29114 = f__27201__auto__.call(null);
(statearr_29114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29119);

return statearr_29114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29119,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29150 = [];
var len__25835__auto___29153 = arguments.length;
var i__25836__auto___29154 = (0);
while(true){
if((i__25836__auto___29154 < len__25835__auto___29153)){
args29150.push((arguments[i__25836__auto___29154]));

var G__29155 = (i__25836__auto___29154 + (1));
i__25836__auto___29154 = G__29155;
continue;
} else {
}
break;
}

var G__29152 = args29150.length;
switch (G__29152) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29150.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29157 = [];
var len__25835__auto___29160 = arguments.length;
var i__25836__auto___29161 = (0);
while(true){
if((i__25836__auto___29161 < len__25835__auto___29160)){
args29157.push((arguments[i__25836__auto___29161]));

var G__29162 = (i__25836__auto___29161 + (1));
i__25836__auto___29161 = G__29162;
continue;
} else {
}
break;
}

var G__29159 = args29157.length;
switch (G__29159) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29157.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29164 = [];
var len__25835__auto___29235 = arguments.length;
var i__25836__auto___29236 = (0);
while(true){
if((i__25836__auto___29236 < len__25835__auto___29235)){
args29164.push((arguments[i__25836__auto___29236]));

var G__29237 = (i__25836__auto___29236 + (1));
i__25836__auto___29236 = G__29237;
continue;
} else {
}
break;
}

var G__29166 = args29164.length;
switch (G__29166) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29164.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27200__auto___29239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29205){
var state_val_29206 = (state_29205[(1)]);
if((state_val_29206 === (7))){
var state_29205__$1 = state_29205;
var statearr_29207_29240 = state_29205__$1;
(statearr_29207_29240[(2)] = null);

(statearr_29207_29240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (1))){
var state_29205__$1 = state_29205;
var statearr_29208_29241 = state_29205__$1;
(statearr_29208_29241[(2)] = null);

(statearr_29208_29241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (4))){
var inst_29169 = (state_29205[(7)]);
var inst_29171 = (inst_29169 < cnt);
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29171)){
var statearr_29209_29242 = state_29205__$1;
(statearr_29209_29242[(1)] = (6));

} else {
var statearr_29210_29243 = state_29205__$1;
(statearr_29210_29243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (15))){
var inst_29201 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29211_29244 = state_29205__$1;
(statearr_29211_29244[(2)] = inst_29201);

(statearr_29211_29244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (13))){
var inst_29194 = cljs.core.async.close_BANG_.call(null,out);
var state_29205__$1 = state_29205;
var statearr_29212_29245 = state_29205__$1;
(statearr_29212_29245[(2)] = inst_29194);

(statearr_29212_29245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (6))){
var state_29205__$1 = state_29205;
var statearr_29213_29246 = state_29205__$1;
(statearr_29213_29246[(2)] = null);

(statearr_29213_29246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (3))){
var inst_29203 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29205__$1,inst_29203);
} else {
if((state_val_29206 === (12))){
var inst_29191 = (state_29205[(8)]);
var inst_29191__$1 = (state_29205[(2)]);
var inst_29192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29191__$1);
var state_29205__$1 = (function (){var statearr_29214 = state_29205;
(statearr_29214[(8)] = inst_29191__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29192)){
var statearr_29215_29247 = state_29205__$1;
(statearr_29215_29247[(1)] = (13));

} else {
var statearr_29216_29248 = state_29205__$1;
(statearr_29216_29248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (2))){
var inst_29168 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29169 = (0);
var state_29205__$1 = (function (){var statearr_29217 = state_29205;
(statearr_29217[(9)] = inst_29168);

(statearr_29217[(7)] = inst_29169);

return statearr_29217;
})();
var statearr_29218_29249 = state_29205__$1;
(statearr_29218_29249[(2)] = null);

(statearr_29218_29249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (11))){
var inst_29169 = (state_29205[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29205,(10),Object,null,(9));
var inst_29178 = chs__$1.call(null,inst_29169);
var inst_29179 = done.call(null,inst_29169);
var inst_29180 = cljs.core.async.take_BANG_.call(null,inst_29178,inst_29179);
var state_29205__$1 = state_29205;
var statearr_29219_29250 = state_29205__$1;
(statearr_29219_29250[(2)] = inst_29180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (9))){
var inst_29169 = (state_29205[(7)]);
var inst_29182 = (state_29205[(2)]);
var inst_29183 = (inst_29169 + (1));
var inst_29169__$1 = inst_29183;
var state_29205__$1 = (function (){var statearr_29220 = state_29205;
(statearr_29220[(10)] = inst_29182);

(statearr_29220[(7)] = inst_29169__$1);

return statearr_29220;
})();
var statearr_29221_29251 = state_29205__$1;
(statearr_29221_29251[(2)] = null);

(statearr_29221_29251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (5))){
var inst_29189 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29222 = state_29205;
(statearr_29222[(11)] = inst_29189);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29205__$1,(12),dchan);
} else {
if((state_val_29206 === (14))){
var inst_29191 = (state_29205[(8)]);
var inst_29196 = cljs.core.apply.call(null,f,inst_29191);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(16),out,inst_29196);
} else {
if((state_val_29206 === (16))){
var inst_29198 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29223 = state_29205;
(statearr_29223[(12)] = inst_29198);

return statearr_29223;
})();
var statearr_29224_29252 = state_29205__$1;
(statearr_29224_29252[(2)] = null);

(statearr_29224_29252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (10))){
var inst_29173 = (state_29205[(2)]);
var inst_29174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29205__$1 = (function (){var statearr_29225 = state_29205;
(statearr_29225[(13)] = inst_29173);

return statearr_29225;
})();
var statearr_29226_29253 = state_29205__$1;
(statearr_29226_29253[(2)] = inst_29174);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (8))){
var inst_29187 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29227_29254 = state_29205__$1;
(statearr_29227_29254[(2)] = inst_29187);

(statearr_29227_29254[(1)] = (5));


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
});})(c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27088__auto__,c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29231[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29231[(1)] = (1));

return statearr_29231;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29205){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29232){if((e29232 instanceof Object)){
var ex__27092__auto__ = e29232;
var statearr_29233_29255 = state_29205;
(statearr_29233_29255[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29256 = state_29205;
state_29205 = G__29256;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27202__auto__ = (function (){var statearr_29234 = f__27201__auto__.call(null);
(statearr_29234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29239);

return statearr_29234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29258 = [];
var len__25835__auto___29316 = arguments.length;
var i__25836__auto___29317 = (0);
while(true){
if((i__25836__auto___29317 < len__25835__auto___29316)){
args29258.push((arguments[i__25836__auto___29317]));

var G__29318 = (i__25836__auto___29317 + (1));
i__25836__auto___29317 = G__29318;
continue;
} else {
}
break;
}

var G__29260 = args29258.length;
switch (G__29260) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29258.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29320,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29320,out){
return (function (state_29292){
var state_val_29293 = (state_29292[(1)]);
if((state_val_29293 === (7))){
var inst_29271 = (state_29292[(7)]);
var inst_29272 = (state_29292[(8)]);
var inst_29271__$1 = (state_29292[(2)]);
var inst_29272__$1 = cljs.core.nth.call(null,inst_29271__$1,(0),null);
var inst_29273 = cljs.core.nth.call(null,inst_29271__$1,(1),null);
var inst_29274 = (inst_29272__$1 == null);
var state_29292__$1 = (function (){var statearr_29294 = state_29292;
(statearr_29294[(7)] = inst_29271__$1);

(statearr_29294[(8)] = inst_29272__$1);

(statearr_29294[(9)] = inst_29273);

return statearr_29294;
})();
if(cljs.core.truth_(inst_29274)){
var statearr_29295_29321 = state_29292__$1;
(statearr_29295_29321[(1)] = (8));

} else {
var statearr_29296_29322 = state_29292__$1;
(statearr_29296_29322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (1))){
var inst_29261 = cljs.core.vec.call(null,chs);
var inst_29262 = inst_29261;
var state_29292__$1 = (function (){var statearr_29297 = state_29292;
(statearr_29297[(10)] = inst_29262);

return statearr_29297;
})();
var statearr_29298_29323 = state_29292__$1;
(statearr_29298_29323[(2)] = null);

(statearr_29298_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (4))){
var inst_29262 = (state_29292[(10)]);
var state_29292__$1 = state_29292;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29292__$1,(7),inst_29262);
} else {
if((state_val_29293 === (6))){
var inst_29288 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
var statearr_29299_29324 = state_29292__$1;
(statearr_29299_29324[(2)] = inst_29288);

(statearr_29299_29324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (3))){
var inst_29290 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29292__$1,inst_29290);
} else {
if((state_val_29293 === (2))){
var inst_29262 = (state_29292[(10)]);
var inst_29264 = cljs.core.count.call(null,inst_29262);
var inst_29265 = (inst_29264 > (0));
var state_29292__$1 = state_29292;
if(cljs.core.truth_(inst_29265)){
var statearr_29301_29325 = state_29292__$1;
(statearr_29301_29325[(1)] = (4));

} else {
var statearr_29302_29326 = state_29292__$1;
(statearr_29302_29326[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (11))){
var inst_29262 = (state_29292[(10)]);
var inst_29281 = (state_29292[(2)]);
var tmp29300 = inst_29262;
var inst_29262__$1 = tmp29300;
var state_29292__$1 = (function (){var statearr_29303 = state_29292;
(statearr_29303[(10)] = inst_29262__$1);

(statearr_29303[(11)] = inst_29281);

return statearr_29303;
})();
var statearr_29304_29327 = state_29292__$1;
(statearr_29304_29327[(2)] = null);

(statearr_29304_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (9))){
var inst_29272 = (state_29292[(8)]);
var state_29292__$1 = state_29292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29292__$1,(11),out,inst_29272);
} else {
if((state_val_29293 === (5))){
var inst_29286 = cljs.core.async.close_BANG_.call(null,out);
var state_29292__$1 = state_29292;
var statearr_29305_29328 = state_29292__$1;
(statearr_29305_29328[(2)] = inst_29286);

(statearr_29305_29328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (10))){
var inst_29284 = (state_29292[(2)]);
var state_29292__$1 = state_29292;
var statearr_29306_29329 = state_29292__$1;
(statearr_29306_29329[(2)] = inst_29284);

(statearr_29306_29329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29293 === (8))){
var inst_29262 = (state_29292[(10)]);
var inst_29271 = (state_29292[(7)]);
var inst_29272 = (state_29292[(8)]);
var inst_29273 = (state_29292[(9)]);
var inst_29276 = (function (){var cs = inst_29262;
var vec__29267 = inst_29271;
var v = inst_29272;
var c = inst_29273;
return ((function (cs,vec__29267,v,c,inst_29262,inst_29271,inst_29272,inst_29273,state_val_29293,c__27200__auto___29320,out){
return (function (p1__29257_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29257_SHARP_);
});
;})(cs,vec__29267,v,c,inst_29262,inst_29271,inst_29272,inst_29273,state_val_29293,c__27200__auto___29320,out))
})();
var inst_29277 = cljs.core.filterv.call(null,inst_29276,inst_29262);
var inst_29262__$1 = inst_29277;
var state_29292__$1 = (function (){var statearr_29307 = state_29292;
(statearr_29307[(10)] = inst_29262__$1);

return statearr_29307;
})();
var statearr_29308_29330 = state_29292__$1;
(statearr_29308_29330[(2)] = null);

(statearr_29308_29330[(1)] = (2));


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
});})(c__27200__auto___29320,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29320,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29312 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29312[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29312[(1)] = (1));

return statearr_29312;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29292){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29313){if((e29313 instanceof Object)){
var ex__27092__auto__ = e29313;
var statearr_29314_29331 = state_29292;
(statearr_29314_29331[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29332 = state_29292;
state_29292 = G__29332;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29320,out))
})();
var state__27202__auto__ = (function (){var statearr_29315 = f__27201__auto__.call(null);
(statearr_29315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29320);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29320,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29333 = [];
var len__25835__auto___29382 = arguments.length;
var i__25836__auto___29383 = (0);
while(true){
if((i__25836__auto___29383 < len__25835__auto___29382)){
args29333.push((arguments[i__25836__auto___29383]));

var G__29384 = (i__25836__auto___29383 + (1));
i__25836__auto___29383 = G__29384;
continue;
} else {
}
break;
}

var G__29335 = args29333.length;
switch (G__29335) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29333.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29386,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29386,out){
return (function (state_29359){
var state_val_29360 = (state_29359[(1)]);
if((state_val_29360 === (7))){
var inst_29341 = (state_29359[(7)]);
var inst_29341__$1 = (state_29359[(2)]);
var inst_29342 = (inst_29341__$1 == null);
var inst_29343 = cljs.core.not.call(null,inst_29342);
var state_29359__$1 = (function (){var statearr_29361 = state_29359;
(statearr_29361[(7)] = inst_29341__$1);

return statearr_29361;
})();
if(inst_29343){
var statearr_29362_29387 = state_29359__$1;
(statearr_29362_29387[(1)] = (8));

} else {
var statearr_29363_29388 = state_29359__$1;
(statearr_29363_29388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (1))){
var inst_29336 = (0);
var state_29359__$1 = (function (){var statearr_29364 = state_29359;
(statearr_29364[(8)] = inst_29336);

return statearr_29364;
})();
var statearr_29365_29389 = state_29359__$1;
(statearr_29365_29389[(2)] = null);

(statearr_29365_29389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (4))){
var state_29359__$1 = state_29359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29359__$1,(7),ch);
} else {
if((state_val_29360 === (6))){
var inst_29354 = (state_29359[(2)]);
var state_29359__$1 = state_29359;
var statearr_29366_29390 = state_29359__$1;
(statearr_29366_29390[(2)] = inst_29354);

(statearr_29366_29390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (3))){
var inst_29356 = (state_29359[(2)]);
var inst_29357 = cljs.core.async.close_BANG_.call(null,out);
var state_29359__$1 = (function (){var statearr_29367 = state_29359;
(statearr_29367[(9)] = inst_29356);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29359__$1,inst_29357);
} else {
if((state_val_29360 === (2))){
var inst_29336 = (state_29359[(8)]);
var inst_29338 = (inst_29336 < n);
var state_29359__$1 = state_29359;
if(cljs.core.truth_(inst_29338)){
var statearr_29368_29391 = state_29359__$1;
(statearr_29368_29391[(1)] = (4));

} else {
var statearr_29369_29392 = state_29359__$1;
(statearr_29369_29392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (11))){
var inst_29336 = (state_29359[(8)]);
var inst_29346 = (state_29359[(2)]);
var inst_29347 = (inst_29336 + (1));
var inst_29336__$1 = inst_29347;
var state_29359__$1 = (function (){var statearr_29370 = state_29359;
(statearr_29370[(8)] = inst_29336__$1);

(statearr_29370[(10)] = inst_29346);

return statearr_29370;
})();
var statearr_29371_29393 = state_29359__$1;
(statearr_29371_29393[(2)] = null);

(statearr_29371_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (9))){
var state_29359__$1 = state_29359;
var statearr_29372_29394 = state_29359__$1;
(statearr_29372_29394[(2)] = null);

(statearr_29372_29394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (5))){
var state_29359__$1 = state_29359;
var statearr_29373_29395 = state_29359__$1;
(statearr_29373_29395[(2)] = null);

(statearr_29373_29395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (10))){
var inst_29351 = (state_29359[(2)]);
var state_29359__$1 = state_29359;
var statearr_29374_29396 = state_29359__$1;
(statearr_29374_29396[(2)] = inst_29351);

(statearr_29374_29396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29360 === (8))){
var inst_29341 = (state_29359[(7)]);
var state_29359__$1 = state_29359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29359__$1,(11),out,inst_29341);
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
});})(c__27200__auto___29386,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29386,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29378[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29378[(1)] = (1));

return statearr_29378;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29359){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29379){if((e29379 instanceof Object)){
var ex__27092__auto__ = e29379;
var statearr_29380_29397 = state_29359;
(statearr_29380_29397[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29398 = state_29359;
state_29359 = G__29398;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29386,out))
})();
var state__27202__auto__ = (function (){var statearr_29381 = f__27201__auto__.call(null);
(statearr_29381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29386);

return statearr_29381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29386,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29406 = (function (map_LT_,f,ch,meta29407){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29407 = meta29407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29408,meta29407__$1){
var self__ = this;
var _29408__$1 = this;
return (new cljs.core.async.t_cljs$core$async29406(self__.map_LT_,self__.f,self__.ch,meta29407__$1));
});

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29408){
var self__ = this;
var _29408__$1 = this;
return self__.meta29407;
});

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29409 = (function (map_LT_,f,ch,meta29407,_,fn1,meta29410){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29407 = meta29407;
this._ = _;
this.fn1 = fn1;
this.meta29410 = meta29410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29411,meta29410__$1){
var self__ = this;
var _29411__$1 = this;
return (new cljs.core.async.t_cljs$core$async29409(self__.map_LT_,self__.f,self__.ch,self__.meta29407,self__._,self__.fn1,meta29410__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29411){
var self__ = this;
var _29411__$1 = this;
return self__.meta29410;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29399_SHARP_){
return f1.call(null,(((p1__29399_SHARP_ == null))?null:self__.f.call(null,p1__29399_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29407","meta29407",117758002,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29406","cljs.core.async/t_cljs$core$async29406",-289131284,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29410","meta29410",490355035,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29409";

cljs.core.async.t_cljs$core$async29409.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29409");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29409 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29409(map_LT___$1,f__$1,ch__$1,meta29407__$1,___$2,fn1__$1,meta29410){
return (new cljs.core.async.t_cljs$core$async29409(map_LT___$1,f__$1,ch__$1,meta29407__$1,___$2,fn1__$1,meta29410));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29409(self__.map_LT_,self__.f,self__.ch,self__.meta29407,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24748__auto__ = ret;
if(cljs.core.truth_(and__24748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29407","meta29407",117758002,null)], null);
});

cljs.core.async.t_cljs$core$async29406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29406";

cljs.core.async.t_cljs$core$async29406.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29406");
});

cljs.core.async.__GT_t_cljs$core$async29406 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29406(map_LT___$1,f__$1,ch__$1,meta29407){
return (new cljs.core.async.t_cljs$core$async29406(map_LT___$1,f__$1,ch__$1,meta29407));
});

}

return (new cljs.core.async.t_cljs$core$async29406(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29415 = (function (map_GT_,f,ch,meta29416){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29416 = meta29416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29417,meta29416__$1){
var self__ = this;
var _29417__$1 = this;
return (new cljs.core.async.t_cljs$core$async29415(self__.map_GT_,self__.f,self__.ch,meta29416__$1));
});

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29417){
var self__ = this;
var _29417__$1 = this;
return self__.meta29416;
});

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29416","meta29416",1476835813,null)], null);
});

cljs.core.async.t_cljs$core$async29415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29415";

cljs.core.async.t_cljs$core$async29415.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29415");
});

cljs.core.async.__GT_t_cljs$core$async29415 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29415(map_GT___$1,f__$1,ch__$1,meta29416){
return (new cljs.core.async.t_cljs$core$async29415(map_GT___$1,f__$1,ch__$1,meta29416));
});

}

return (new cljs.core.async.t_cljs$core$async29415(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29421 = (function (filter_GT_,p,ch,meta29422){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29422 = meta29422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29423,meta29422__$1){
var self__ = this;
var _29423__$1 = this;
return (new cljs.core.async.t_cljs$core$async29421(self__.filter_GT_,self__.p,self__.ch,meta29422__$1));
});

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29423){
var self__ = this;
var _29423__$1 = this;
return self__.meta29422;
});

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29422","meta29422",-1977685857,null)], null);
});

cljs.core.async.t_cljs$core$async29421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29421";

cljs.core.async.t_cljs$core$async29421.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29421");
});

cljs.core.async.__GT_t_cljs$core$async29421 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29421(filter_GT___$1,p__$1,ch__$1,meta29422){
return (new cljs.core.async.t_cljs$core$async29421(filter_GT___$1,p__$1,ch__$1,meta29422));
});

}

return (new cljs.core.async.t_cljs$core$async29421(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29424 = [];
var len__25835__auto___29468 = arguments.length;
var i__25836__auto___29469 = (0);
while(true){
if((i__25836__auto___29469 < len__25835__auto___29468)){
args29424.push((arguments[i__25836__auto___29469]));

var G__29470 = (i__25836__auto___29469 + (1));
i__25836__auto___29469 = G__29470;
continue;
} else {
}
break;
}

var G__29426 = args29424.length;
switch (G__29426) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29424.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29472,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29472,out){
return (function (state_29447){
var state_val_29448 = (state_29447[(1)]);
if((state_val_29448 === (7))){
var inst_29443 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29449_29473 = state_29447__$1;
(statearr_29449_29473[(2)] = inst_29443);

(statearr_29449_29473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (1))){
var state_29447__$1 = state_29447;
var statearr_29450_29474 = state_29447__$1;
(statearr_29450_29474[(2)] = null);

(statearr_29450_29474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (4))){
var inst_29429 = (state_29447[(7)]);
var inst_29429__$1 = (state_29447[(2)]);
var inst_29430 = (inst_29429__$1 == null);
var state_29447__$1 = (function (){var statearr_29451 = state_29447;
(statearr_29451[(7)] = inst_29429__$1);

return statearr_29451;
})();
if(cljs.core.truth_(inst_29430)){
var statearr_29452_29475 = state_29447__$1;
(statearr_29452_29475[(1)] = (5));

} else {
var statearr_29453_29476 = state_29447__$1;
(statearr_29453_29476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (6))){
var inst_29429 = (state_29447[(7)]);
var inst_29434 = p.call(null,inst_29429);
var state_29447__$1 = state_29447;
if(cljs.core.truth_(inst_29434)){
var statearr_29454_29477 = state_29447__$1;
(statearr_29454_29477[(1)] = (8));

} else {
var statearr_29455_29478 = state_29447__$1;
(statearr_29455_29478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (3))){
var inst_29445 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29447__$1,inst_29445);
} else {
if((state_val_29448 === (2))){
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29447__$1,(4),ch);
} else {
if((state_val_29448 === (11))){
var inst_29437 = (state_29447[(2)]);
var state_29447__$1 = state_29447;
var statearr_29456_29479 = state_29447__$1;
(statearr_29456_29479[(2)] = inst_29437);

(statearr_29456_29479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (9))){
var state_29447__$1 = state_29447;
var statearr_29457_29480 = state_29447__$1;
(statearr_29457_29480[(2)] = null);

(statearr_29457_29480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (5))){
var inst_29432 = cljs.core.async.close_BANG_.call(null,out);
var state_29447__$1 = state_29447;
var statearr_29458_29481 = state_29447__$1;
(statearr_29458_29481[(2)] = inst_29432);

(statearr_29458_29481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (10))){
var inst_29440 = (state_29447[(2)]);
var state_29447__$1 = (function (){var statearr_29459 = state_29447;
(statearr_29459[(8)] = inst_29440);

return statearr_29459;
})();
var statearr_29460_29482 = state_29447__$1;
(statearr_29460_29482[(2)] = null);

(statearr_29460_29482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29448 === (8))){
var inst_29429 = (state_29447[(7)]);
var state_29447__$1 = state_29447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29447__$1,(11),out,inst_29429);
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
});})(c__27200__auto___29472,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29472,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29464 = [null,null,null,null,null,null,null,null,null];
(statearr_29464[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29464[(1)] = (1));

return statearr_29464;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29447){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29465){if((e29465 instanceof Object)){
var ex__27092__auto__ = e29465;
var statearr_29466_29483 = state_29447;
(statearr_29466_29483[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29484 = state_29447;
state_29447 = G__29484;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29472,out))
})();
var state__27202__auto__ = (function (){var statearr_29467 = f__27201__auto__.call(null);
(statearr_29467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29472);

return statearr_29467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29472,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29485 = [];
var len__25835__auto___29488 = arguments.length;
var i__25836__auto___29489 = (0);
while(true){
if((i__25836__auto___29489 < len__25835__auto___29488)){
args29485.push((arguments[i__25836__auto___29489]));

var G__29490 = (i__25836__auto___29489 + (1));
i__25836__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var G__29487 = args29485.length;
switch (G__29487) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29485.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27200__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto__){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto__){
return (function (state_29657){
var state_val_29658 = (state_29657[(1)]);
if((state_val_29658 === (7))){
var inst_29653 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29659_29700 = state_29657__$1;
(statearr_29659_29700[(2)] = inst_29653);

(statearr_29659_29700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (20))){
var inst_29623 = (state_29657[(7)]);
var inst_29634 = (state_29657[(2)]);
var inst_29635 = cljs.core.next.call(null,inst_29623);
var inst_29609 = inst_29635;
var inst_29610 = null;
var inst_29611 = (0);
var inst_29612 = (0);
var state_29657__$1 = (function (){var statearr_29660 = state_29657;
(statearr_29660[(8)] = inst_29609);

(statearr_29660[(9)] = inst_29612);

(statearr_29660[(10)] = inst_29611);

(statearr_29660[(11)] = inst_29634);

(statearr_29660[(12)] = inst_29610);

return statearr_29660;
})();
var statearr_29661_29701 = state_29657__$1;
(statearr_29661_29701[(2)] = null);

(statearr_29661_29701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (1))){
var state_29657__$1 = state_29657;
var statearr_29662_29702 = state_29657__$1;
(statearr_29662_29702[(2)] = null);

(statearr_29662_29702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (4))){
var inst_29598 = (state_29657[(13)]);
var inst_29598__$1 = (state_29657[(2)]);
var inst_29599 = (inst_29598__$1 == null);
var state_29657__$1 = (function (){var statearr_29663 = state_29657;
(statearr_29663[(13)] = inst_29598__$1);

return statearr_29663;
})();
if(cljs.core.truth_(inst_29599)){
var statearr_29664_29703 = state_29657__$1;
(statearr_29664_29703[(1)] = (5));

} else {
var statearr_29665_29704 = state_29657__$1;
(statearr_29665_29704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (15))){
var state_29657__$1 = state_29657;
var statearr_29669_29705 = state_29657__$1;
(statearr_29669_29705[(2)] = null);

(statearr_29669_29705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (21))){
var state_29657__$1 = state_29657;
var statearr_29670_29706 = state_29657__$1;
(statearr_29670_29706[(2)] = null);

(statearr_29670_29706[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (13))){
var inst_29609 = (state_29657[(8)]);
var inst_29612 = (state_29657[(9)]);
var inst_29611 = (state_29657[(10)]);
var inst_29610 = (state_29657[(12)]);
var inst_29619 = (state_29657[(2)]);
var inst_29620 = (inst_29612 + (1));
var tmp29666 = inst_29609;
var tmp29667 = inst_29611;
var tmp29668 = inst_29610;
var inst_29609__$1 = tmp29666;
var inst_29610__$1 = tmp29668;
var inst_29611__$1 = tmp29667;
var inst_29612__$1 = inst_29620;
var state_29657__$1 = (function (){var statearr_29671 = state_29657;
(statearr_29671[(8)] = inst_29609__$1);

(statearr_29671[(9)] = inst_29612__$1);

(statearr_29671[(10)] = inst_29611__$1);

(statearr_29671[(14)] = inst_29619);

(statearr_29671[(12)] = inst_29610__$1);

return statearr_29671;
})();
var statearr_29672_29707 = state_29657__$1;
(statearr_29672_29707[(2)] = null);

(statearr_29672_29707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (22))){
var state_29657__$1 = state_29657;
var statearr_29673_29708 = state_29657__$1;
(statearr_29673_29708[(2)] = null);

(statearr_29673_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (6))){
var inst_29598 = (state_29657[(13)]);
var inst_29607 = f.call(null,inst_29598);
var inst_29608 = cljs.core.seq.call(null,inst_29607);
var inst_29609 = inst_29608;
var inst_29610 = null;
var inst_29611 = (0);
var inst_29612 = (0);
var state_29657__$1 = (function (){var statearr_29674 = state_29657;
(statearr_29674[(8)] = inst_29609);

(statearr_29674[(9)] = inst_29612);

(statearr_29674[(10)] = inst_29611);

(statearr_29674[(12)] = inst_29610);

return statearr_29674;
})();
var statearr_29675_29709 = state_29657__$1;
(statearr_29675_29709[(2)] = null);

(statearr_29675_29709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (17))){
var inst_29623 = (state_29657[(7)]);
var inst_29627 = cljs.core.chunk_first.call(null,inst_29623);
var inst_29628 = cljs.core.chunk_rest.call(null,inst_29623);
var inst_29629 = cljs.core.count.call(null,inst_29627);
var inst_29609 = inst_29628;
var inst_29610 = inst_29627;
var inst_29611 = inst_29629;
var inst_29612 = (0);
var state_29657__$1 = (function (){var statearr_29676 = state_29657;
(statearr_29676[(8)] = inst_29609);

(statearr_29676[(9)] = inst_29612);

(statearr_29676[(10)] = inst_29611);

(statearr_29676[(12)] = inst_29610);

return statearr_29676;
})();
var statearr_29677_29710 = state_29657__$1;
(statearr_29677_29710[(2)] = null);

(statearr_29677_29710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (3))){
var inst_29655 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29657__$1,inst_29655);
} else {
if((state_val_29658 === (12))){
var inst_29643 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29678_29711 = state_29657__$1;
(statearr_29678_29711[(2)] = inst_29643);

(statearr_29678_29711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (2))){
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29657__$1,(4),in$);
} else {
if((state_val_29658 === (23))){
var inst_29651 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29679_29712 = state_29657__$1;
(statearr_29679_29712[(2)] = inst_29651);

(statearr_29679_29712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (19))){
var inst_29638 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29680_29713 = state_29657__$1;
(statearr_29680_29713[(2)] = inst_29638);

(statearr_29680_29713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (11))){
var inst_29609 = (state_29657[(8)]);
var inst_29623 = (state_29657[(7)]);
var inst_29623__$1 = cljs.core.seq.call(null,inst_29609);
var state_29657__$1 = (function (){var statearr_29681 = state_29657;
(statearr_29681[(7)] = inst_29623__$1);

return statearr_29681;
})();
if(inst_29623__$1){
var statearr_29682_29714 = state_29657__$1;
(statearr_29682_29714[(1)] = (14));

} else {
var statearr_29683_29715 = state_29657__$1;
(statearr_29683_29715[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (9))){
var inst_29645 = (state_29657[(2)]);
var inst_29646 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29657__$1 = (function (){var statearr_29684 = state_29657;
(statearr_29684[(15)] = inst_29645);

return statearr_29684;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29685_29716 = state_29657__$1;
(statearr_29685_29716[(1)] = (21));

} else {
var statearr_29686_29717 = state_29657__$1;
(statearr_29686_29717[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (5))){
var inst_29601 = cljs.core.async.close_BANG_.call(null,out);
var state_29657__$1 = state_29657;
var statearr_29687_29718 = state_29657__$1;
(statearr_29687_29718[(2)] = inst_29601);

(statearr_29687_29718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (14))){
var inst_29623 = (state_29657[(7)]);
var inst_29625 = cljs.core.chunked_seq_QMARK_.call(null,inst_29623);
var state_29657__$1 = state_29657;
if(inst_29625){
var statearr_29688_29719 = state_29657__$1;
(statearr_29688_29719[(1)] = (17));

} else {
var statearr_29689_29720 = state_29657__$1;
(statearr_29689_29720[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (16))){
var inst_29641 = (state_29657[(2)]);
var state_29657__$1 = state_29657;
var statearr_29690_29721 = state_29657__$1;
(statearr_29690_29721[(2)] = inst_29641);

(statearr_29690_29721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29658 === (10))){
var inst_29612 = (state_29657[(9)]);
var inst_29610 = (state_29657[(12)]);
var inst_29617 = cljs.core._nth.call(null,inst_29610,inst_29612);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29657__$1,(13),out,inst_29617);
} else {
if((state_val_29658 === (18))){
var inst_29623 = (state_29657[(7)]);
var inst_29632 = cljs.core.first.call(null,inst_29623);
var state_29657__$1 = state_29657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29657__$1,(20),out,inst_29632);
} else {
if((state_val_29658 === (8))){
var inst_29612 = (state_29657[(9)]);
var inst_29611 = (state_29657[(10)]);
var inst_29614 = (inst_29612 < inst_29611);
var inst_29615 = inst_29614;
var state_29657__$1 = state_29657;
if(cljs.core.truth_(inst_29615)){
var statearr_29691_29722 = state_29657__$1;
(statearr_29691_29722[(1)] = (10));

} else {
var statearr_29692_29723 = state_29657__$1;
(statearr_29692_29723[(1)] = (11));

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
});})(c__27200__auto__))
;
return ((function (switch__27088__auto__,c__27200__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____0 = (function (){
var statearr_29696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__);

(statearr_29696[(1)] = (1));

return statearr_29696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____1 = (function (state_29657){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29697){if((e29697 instanceof Object)){
var ex__27092__auto__ = e29697;
var statearr_29698_29724 = state_29657;
(statearr_29698_29724[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29725 = state_29657;
state_29657 = G__29725;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__ = function(state_29657){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____1.call(this,state_29657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27089__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto__))
})();
var state__27202__auto__ = (function (){var statearr_29699 = f__27201__auto__.call(null);
(statearr_29699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto__);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto__))
);

return c__27200__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29726 = [];
var len__25835__auto___29729 = arguments.length;
var i__25836__auto___29730 = (0);
while(true){
if((i__25836__auto___29730 < len__25835__auto___29729)){
args29726.push((arguments[i__25836__auto___29730]));

var G__29731 = (i__25836__auto___29730 + (1));
i__25836__auto___29730 = G__29731;
continue;
} else {
}
break;
}

var G__29728 = args29726.length;
switch (G__29728) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29726.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29733 = [];
var len__25835__auto___29736 = arguments.length;
var i__25836__auto___29737 = (0);
while(true){
if((i__25836__auto___29737 < len__25835__auto___29736)){
args29733.push((arguments[i__25836__auto___29737]));

var G__29738 = (i__25836__auto___29737 + (1));
i__25836__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29735 = args29733.length;
switch (G__29735) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29733.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29740 = [];
var len__25835__auto___29791 = arguments.length;
var i__25836__auto___29792 = (0);
while(true){
if((i__25836__auto___29792 < len__25835__auto___29791)){
args29740.push((arguments[i__25836__auto___29792]));

var G__29793 = (i__25836__auto___29792 + (1));
i__25836__auto___29792 = G__29793;
continue;
} else {
}
break;
}

var G__29742 = args29740.length;
switch (G__29742) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29740.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29795,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29795,out){
return (function (state_29766){
var state_val_29767 = (state_29766[(1)]);
if((state_val_29767 === (7))){
var inst_29761 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29768_29796 = state_29766__$1;
(statearr_29768_29796[(2)] = inst_29761);

(statearr_29768_29796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (1))){
var inst_29743 = null;
var state_29766__$1 = (function (){var statearr_29769 = state_29766;
(statearr_29769[(7)] = inst_29743);

return statearr_29769;
})();
var statearr_29770_29797 = state_29766__$1;
(statearr_29770_29797[(2)] = null);

(statearr_29770_29797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (4))){
var inst_29746 = (state_29766[(8)]);
var inst_29746__$1 = (state_29766[(2)]);
var inst_29747 = (inst_29746__$1 == null);
var inst_29748 = cljs.core.not.call(null,inst_29747);
var state_29766__$1 = (function (){var statearr_29771 = state_29766;
(statearr_29771[(8)] = inst_29746__$1);

return statearr_29771;
})();
if(inst_29748){
var statearr_29772_29798 = state_29766__$1;
(statearr_29772_29798[(1)] = (5));

} else {
var statearr_29773_29799 = state_29766__$1;
(statearr_29773_29799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (6))){
var state_29766__$1 = state_29766;
var statearr_29774_29800 = state_29766__$1;
(statearr_29774_29800[(2)] = null);

(statearr_29774_29800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (3))){
var inst_29763 = (state_29766[(2)]);
var inst_29764 = cljs.core.async.close_BANG_.call(null,out);
var state_29766__$1 = (function (){var statearr_29775 = state_29766;
(statearr_29775[(9)] = inst_29763);

return statearr_29775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29766__$1,inst_29764);
} else {
if((state_val_29767 === (2))){
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29766__$1,(4),ch);
} else {
if((state_val_29767 === (11))){
var inst_29746 = (state_29766[(8)]);
var inst_29755 = (state_29766[(2)]);
var inst_29743 = inst_29746;
var state_29766__$1 = (function (){var statearr_29776 = state_29766;
(statearr_29776[(10)] = inst_29755);

(statearr_29776[(7)] = inst_29743);

return statearr_29776;
})();
var statearr_29777_29801 = state_29766__$1;
(statearr_29777_29801[(2)] = null);

(statearr_29777_29801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (9))){
var inst_29746 = (state_29766[(8)]);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(11),out,inst_29746);
} else {
if((state_val_29767 === (5))){
var inst_29746 = (state_29766[(8)]);
var inst_29743 = (state_29766[(7)]);
var inst_29750 = cljs.core._EQ_.call(null,inst_29746,inst_29743);
var state_29766__$1 = state_29766;
if(inst_29750){
var statearr_29779_29802 = state_29766__$1;
(statearr_29779_29802[(1)] = (8));

} else {
var statearr_29780_29803 = state_29766__$1;
(statearr_29780_29803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (10))){
var inst_29758 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29781_29804 = state_29766__$1;
(statearr_29781_29804[(2)] = inst_29758);

(statearr_29781_29804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (8))){
var inst_29743 = (state_29766[(7)]);
var tmp29778 = inst_29743;
var inst_29743__$1 = tmp29778;
var state_29766__$1 = (function (){var statearr_29782 = state_29766;
(statearr_29782[(7)] = inst_29743__$1);

return statearr_29782;
})();
var statearr_29783_29805 = state_29766__$1;
(statearr_29783_29805[(2)] = null);

(statearr_29783_29805[(1)] = (2));


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
});})(c__27200__auto___29795,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29795,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29787[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29787[(1)] = (1));

return statearr_29787;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29766){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29788){if((e29788 instanceof Object)){
var ex__27092__auto__ = e29788;
var statearr_29789_29806 = state_29766;
(statearr_29789_29806[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29807 = state_29766;
state_29766 = G__29807;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29795,out))
})();
var state__27202__auto__ = (function (){var statearr_29790 = f__27201__auto__.call(null);
(statearr_29790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29795);

return statearr_29790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29795,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29808 = [];
var len__25835__auto___29878 = arguments.length;
var i__25836__auto___29879 = (0);
while(true){
if((i__25836__auto___29879 < len__25835__auto___29878)){
args29808.push((arguments[i__25836__auto___29879]));

var G__29880 = (i__25836__auto___29879 + (1));
i__25836__auto___29879 = G__29880;
continue;
} else {
}
break;
}

var G__29810 = args29808.length;
switch (G__29810) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29808.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29882,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29882,out){
return (function (state_29848){
var state_val_29849 = (state_29848[(1)]);
if((state_val_29849 === (7))){
var inst_29844 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29850_29883 = state_29848__$1;
(statearr_29850_29883[(2)] = inst_29844);

(statearr_29850_29883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (1))){
var inst_29811 = (new Array(n));
var inst_29812 = inst_29811;
var inst_29813 = (0);
var state_29848__$1 = (function (){var statearr_29851 = state_29848;
(statearr_29851[(7)] = inst_29812);

(statearr_29851[(8)] = inst_29813);

return statearr_29851;
})();
var statearr_29852_29884 = state_29848__$1;
(statearr_29852_29884[(2)] = null);

(statearr_29852_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (4))){
var inst_29816 = (state_29848[(9)]);
var inst_29816__$1 = (state_29848[(2)]);
var inst_29817 = (inst_29816__$1 == null);
var inst_29818 = cljs.core.not.call(null,inst_29817);
var state_29848__$1 = (function (){var statearr_29853 = state_29848;
(statearr_29853[(9)] = inst_29816__$1);

return statearr_29853;
})();
if(inst_29818){
var statearr_29854_29885 = state_29848__$1;
(statearr_29854_29885[(1)] = (5));

} else {
var statearr_29855_29886 = state_29848__$1;
(statearr_29855_29886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (15))){
var inst_29838 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29856_29887 = state_29848__$1;
(statearr_29856_29887[(2)] = inst_29838);

(statearr_29856_29887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (13))){
var state_29848__$1 = state_29848;
var statearr_29857_29888 = state_29848__$1;
(statearr_29857_29888[(2)] = null);

(statearr_29857_29888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (6))){
var inst_29813 = (state_29848[(8)]);
var inst_29834 = (inst_29813 > (0));
var state_29848__$1 = state_29848;
if(cljs.core.truth_(inst_29834)){
var statearr_29858_29889 = state_29848__$1;
(statearr_29858_29889[(1)] = (12));

} else {
var statearr_29859_29890 = state_29848__$1;
(statearr_29859_29890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (3))){
var inst_29846 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29848__$1,inst_29846);
} else {
if((state_val_29849 === (12))){
var inst_29812 = (state_29848[(7)]);
var inst_29836 = cljs.core.vec.call(null,inst_29812);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(15),out,inst_29836);
} else {
if((state_val_29849 === (2))){
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,(4),ch);
} else {
if((state_val_29849 === (11))){
var inst_29828 = (state_29848[(2)]);
var inst_29829 = (new Array(n));
var inst_29812 = inst_29829;
var inst_29813 = (0);
var state_29848__$1 = (function (){var statearr_29860 = state_29848;
(statearr_29860[(7)] = inst_29812);

(statearr_29860[(8)] = inst_29813);

(statearr_29860[(10)] = inst_29828);

return statearr_29860;
})();
var statearr_29861_29891 = state_29848__$1;
(statearr_29861_29891[(2)] = null);

(statearr_29861_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (9))){
var inst_29812 = (state_29848[(7)]);
var inst_29826 = cljs.core.vec.call(null,inst_29812);
var state_29848__$1 = state_29848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(11),out,inst_29826);
} else {
if((state_val_29849 === (5))){
var inst_29812 = (state_29848[(7)]);
var inst_29821 = (state_29848[(11)]);
var inst_29816 = (state_29848[(9)]);
var inst_29813 = (state_29848[(8)]);
var inst_29820 = (inst_29812[inst_29813] = inst_29816);
var inst_29821__$1 = (inst_29813 + (1));
var inst_29822 = (inst_29821__$1 < n);
var state_29848__$1 = (function (){var statearr_29862 = state_29848;
(statearr_29862[(11)] = inst_29821__$1);

(statearr_29862[(12)] = inst_29820);

return statearr_29862;
})();
if(cljs.core.truth_(inst_29822)){
var statearr_29863_29892 = state_29848__$1;
(statearr_29863_29892[(1)] = (8));

} else {
var statearr_29864_29893 = state_29848__$1;
(statearr_29864_29893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (14))){
var inst_29841 = (state_29848[(2)]);
var inst_29842 = cljs.core.async.close_BANG_.call(null,out);
var state_29848__$1 = (function (){var statearr_29866 = state_29848;
(statearr_29866[(13)] = inst_29841);

return statearr_29866;
})();
var statearr_29867_29894 = state_29848__$1;
(statearr_29867_29894[(2)] = inst_29842);

(statearr_29867_29894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (10))){
var inst_29832 = (state_29848[(2)]);
var state_29848__$1 = state_29848;
var statearr_29868_29895 = state_29848__$1;
(statearr_29868_29895[(2)] = inst_29832);

(statearr_29868_29895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29849 === (8))){
var inst_29812 = (state_29848[(7)]);
var inst_29821 = (state_29848[(11)]);
var tmp29865 = inst_29812;
var inst_29812__$1 = tmp29865;
var inst_29813 = inst_29821;
var state_29848__$1 = (function (){var statearr_29869 = state_29848;
(statearr_29869[(7)] = inst_29812__$1);

(statearr_29869[(8)] = inst_29813);

return statearr_29869;
})();
var statearr_29870_29896 = state_29848__$1;
(statearr_29870_29896[(2)] = null);

(statearr_29870_29896[(1)] = (2));


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
});})(c__27200__auto___29882,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29882,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29874[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29874[(1)] = (1));

return statearr_29874;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29848){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29875){if((e29875 instanceof Object)){
var ex__27092__auto__ = e29875;
var statearr_29876_29897 = state_29848;
(statearr_29876_29897[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29898 = state_29848;
state_29848 = G__29898;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29882,out))
})();
var state__27202__auto__ = (function (){var statearr_29877 = f__27201__auto__.call(null);
(statearr_29877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29882);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29882,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29899 = [];
var len__25835__auto___29973 = arguments.length;
var i__25836__auto___29974 = (0);
while(true){
if((i__25836__auto___29974 < len__25835__auto___29973)){
args29899.push((arguments[i__25836__auto___29974]));

var G__29975 = (i__25836__auto___29974 + (1));
i__25836__auto___29974 = G__29975;
continue;
} else {
}
break;
}

var G__29901 = args29899.length;
switch (G__29901) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29899.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27200__auto___29977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27200__auto___29977,out){
return (function (){
var f__27201__auto__ = (function (){var switch__27088__auto__ = ((function (c__27200__auto___29977,out){
return (function (state_29943){
var state_val_29944 = (state_29943[(1)]);
if((state_val_29944 === (7))){
var inst_29939 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29945_29978 = state_29943__$1;
(statearr_29945_29978[(2)] = inst_29939);

(statearr_29945_29978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (1))){
var inst_29902 = [];
var inst_29903 = inst_29902;
var inst_29904 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29943__$1 = (function (){var statearr_29946 = state_29943;
(statearr_29946[(7)] = inst_29903);

(statearr_29946[(8)] = inst_29904);

return statearr_29946;
})();
var statearr_29947_29979 = state_29943__$1;
(statearr_29947_29979[(2)] = null);

(statearr_29947_29979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (4))){
var inst_29907 = (state_29943[(9)]);
var inst_29907__$1 = (state_29943[(2)]);
var inst_29908 = (inst_29907__$1 == null);
var inst_29909 = cljs.core.not.call(null,inst_29908);
var state_29943__$1 = (function (){var statearr_29948 = state_29943;
(statearr_29948[(9)] = inst_29907__$1);

return statearr_29948;
})();
if(inst_29909){
var statearr_29949_29980 = state_29943__$1;
(statearr_29949_29980[(1)] = (5));

} else {
var statearr_29950_29981 = state_29943__$1;
(statearr_29950_29981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (15))){
var inst_29933 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29951_29982 = state_29943__$1;
(statearr_29951_29982[(2)] = inst_29933);

(statearr_29951_29982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (13))){
var state_29943__$1 = state_29943;
var statearr_29952_29983 = state_29943__$1;
(statearr_29952_29983[(2)] = null);

(statearr_29952_29983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (6))){
var inst_29903 = (state_29943[(7)]);
var inst_29928 = inst_29903.length;
var inst_29929 = (inst_29928 > (0));
var state_29943__$1 = state_29943;
if(cljs.core.truth_(inst_29929)){
var statearr_29953_29984 = state_29943__$1;
(statearr_29953_29984[(1)] = (12));

} else {
var statearr_29954_29985 = state_29943__$1;
(statearr_29954_29985[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (3))){
var inst_29941 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29943__$1,inst_29941);
} else {
if((state_val_29944 === (12))){
var inst_29903 = (state_29943[(7)]);
var inst_29931 = cljs.core.vec.call(null,inst_29903);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29943__$1,(15),out,inst_29931);
} else {
if((state_val_29944 === (2))){
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29943__$1,(4),ch);
} else {
if((state_val_29944 === (11))){
var inst_29911 = (state_29943[(10)]);
var inst_29907 = (state_29943[(9)]);
var inst_29921 = (state_29943[(2)]);
var inst_29922 = [];
var inst_29923 = inst_29922.push(inst_29907);
var inst_29903 = inst_29922;
var inst_29904 = inst_29911;
var state_29943__$1 = (function (){var statearr_29955 = state_29943;
(statearr_29955[(7)] = inst_29903);

(statearr_29955[(8)] = inst_29904);

(statearr_29955[(11)] = inst_29923);

(statearr_29955[(12)] = inst_29921);

return statearr_29955;
})();
var statearr_29956_29986 = state_29943__$1;
(statearr_29956_29986[(2)] = null);

(statearr_29956_29986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (9))){
var inst_29903 = (state_29943[(7)]);
var inst_29919 = cljs.core.vec.call(null,inst_29903);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29943__$1,(11),out,inst_29919);
} else {
if((state_val_29944 === (5))){
var inst_29904 = (state_29943[(8)]);
var inst_29911 = (state_29943[(10)]);
var inst_29907 = (state_29943[(9)]);
var inst_29911__$1 = f.call(null,inst_29907);
var inst_29912 = cljs.core._EQ_.call(null,inst_29911__$1,inst_29904);
var inst_29913 = cljs.core.keyword_identical_QMARK_.call(null,inst_29904,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29914 = (inst_29912) || (inst_29913);
var state_29943__$1 = (function (){var statearr_29957 = state_29943;
(statearr_29957[(10)] = inst_29911__$1);

return statearr_29957;
})();
if(cljs.core.truth_(inst_29914)){
var statearr_29958_29987 = state_29943__$1;
(statearr_29958_29987[(1)] = (8));

} else {
var statearr_29959_29988 = state_29943__$1;
(statearr_29959_29988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (14))){
var inst_29936 = (state_29943[(2)]);
var inst_29937 = cljs.core.async.close_BANG_.call(null,out);
var state_29943__$1 = (function (){var statearr_29961 = state_29943;
(statearr_29961[(13)] = inst_29936);

return statearr_29961;
})();
var statearr_29962_29989 = state_29943__$1;
(statearr_29962_29989[(2)] = inst_29937);

(statearr_29962_29989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (10))){
var inst_29926 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29963_29990 = state_29943__$1;
(statearr_29963_29990[(2)] = inst_29926);

(statearr_29963_29990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (8))){
var inst_29903 = (state_29943[(7)]);
var inst_29911 = (state_29943[(10)]);
var inst_29907 = (state_29943[(9)]);
var inst_29916 = inst_29903.push(inst_29907);
var tmp29960 = inst_29903;
var inst_29903__$1 = tmp29960;
var inst_29904 = inst_29911;
var state_29943__$1 = (function (){var statearr_29964 = state_29943;
(statearr_29964[(7)] = inst_29903__$1);

(statearr_29964[(8)] = inst_29904);

(statearr_29964[(14)] = inst_29916);

return statearr_29964;
})();
var statearr_29965_29991 = state_29943__$1;
(statearr_29965_29991[(2)] = null);

(statearr_29965_29991[(1)] = (2));


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
});})(c__27200__auto___29977,out))
;
return ((function (switch__27088__auto__,c__27200__auto___29977,out){
return (function() {
var cljs$core$async$state_machine__27089__auto__ = null;
var cljs$core$async$state_machine__27089__auto____0 = (function (){
var statearr_29969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29969[(0)] = cljs$core$async$state_machine__27089__auto__);

(statearr_29969[(1)] = (1));

return statearr_29969;
});
var cljs$core$async$state_machine__27089__auto____1 = (function (state_29943){
while(true){
var ret_value__27090__auto__ = (function (){try{while(true){
var result__27091__auto__ = switch__27088__auto__.call(null,state_29943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27091__auto__;
}
break;
}
}catch (e29970){if((e29970 instanceof Object)){
var ex__27092__auto__ = e29970;
var statearr_29971_29992 = state_29943;
(statearr_29971_29992[(5)] = ex__27092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29993 = state_29943;
state_29943 = G__29993;
continue;
} else {
return ret_value__27090__auto__;
}
break;
}
});
cljs$core$async$state_machine__27089__auto__ = function(state_29943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27089__auto____1.call(this,state_29943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27089__auto____0;
cljs$core$async$state_machine__27089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27089__auto____1;
return cljs$core$async$state_machine__27089__auto__;
})()
;})(switch__27088__auto__,c__27200__auto___29977,out))
})();
var state__27202__auto__ = (function (){var statearr_29972 = f__27201__auto__.call(null);
(statearr_29972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27200__auto___29977);

return statearr_29972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27202__auto__);
});})(c__27200__auto___29977,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479472475262