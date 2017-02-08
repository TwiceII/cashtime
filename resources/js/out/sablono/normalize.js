// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
if(cljs.core.truth_(m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__25965){
var vec__25966 = p__25965;
var _ = cljs.core.nth.call(null,vec__25966,(0),null);
var v = cljs.core.nth.call(null,vec__25966,(1),null);
return cljs.core.empty_QMARK_.call(null,v);
})),m);
} else {
return null;
}
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return (cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$__$1){
if((class$__$1 == null)){
return null;
} else {
if(cljs.core.truth_(sablono.normalize.map_lookup_QMARK_.call(null,class$__$1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if(cljs.core.list_QMARK_.call(null,class$__$1)){
if((cljs.core.first.call(null,class$__$1) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
return cljs.core.map.call(null,sablono.normalize.class_name,class$__$1);
}
} else {
if((class$__$1 instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if(typeof class$__$1 === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$__$1], null);
} else {
if((class$__$1 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name.call(null,class$__$1)], null);
} else {
if(((cljs.core.set_QMARK_.call(null,class$__$1)) || (cljs.core.sequential_QMARK_.call(null,class$__$1))) && (cljs.core.every_QMARK_.call(null,(function (p1__25969_SHARP_){
return ((p1__25969_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__25969_SHARP_ === 'string');
}),class$__$1))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$__$1);
} else {
if((cljs.core.set_QMARK_.call(null,class$__$1)) || (cljs.core.sequential_QMARK_.call(null,class$__$1))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$__$1);
} else {
return class$__$1;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__25971 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__25971,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__25971;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__25842__auto__ = [];
var len__25835__auto___25974 = arguments.length;
var i__25836__auto___25975 = (0);
while(true){
if((i__25836__auto___25975 < len__25835__auto___25974)){
args__25842__auto__.push((arguments[i__25836__auto___25975]));

var G__25976 = (i__25836__auto___25975 + (1));
i__25836__auto___25975 = G__25976;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
if(cljs.core.seq.call(null,maps__$1)){
var G__25973 = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if(!(cljs.core.empty_QMARK_.call(null,classes))){
return cljs.core.assoc.call(null,G__25973,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec.call(null,classes));
} else {
return G__25973;
}
} else {
return null;
}
});

sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq25972){
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25972));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__25982 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__25982,(0),null);
var names = cljs.core.nth.call(null,vec__25982,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,sablono.normalize.strip_css.call(null,cljs.core.some.call(null,((function (matches,vec__25982,tag_name,names){
return (function (p1__25977_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__25977_SHARP_))){
return p1__25977_SHARP_;
} else {
return null;
}
});})(matches,vec__25982,tag_name,names))
,names)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,((function (matches,vec__25982,tag_name,names){
return (function (p1__25978_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__25978_SHARP_));
});})(matches,vec__25982,tag_name,names))
),cljs.core.map.call(null,sablono.normalize.strip_css)),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(function (){var x__25594__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})():(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))?(function (){var x__25594__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})():(((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Symbol)))?(function (){var x__25594__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})():((cljs.core.list_QMARK_.call(null,x))?x:(((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && (!(typeof cljs.core.first.call(null,x) === 'string')) && (cljs.core.not.call(null,sablono.util.element_QMARK_.call(null,cljs.core.first.call(null,x)))))?sablono$normalize$children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(function (){var x__25594__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto__);
})()
))))))));
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__25985){
var vec__25992 = p__25985;
var seq__25993 = cljs.core.seq.call(null,vec__25992);
var first__25994 = cljs.core.first.call(null,seq__25993);
var seq__25993__$1 = cljs.core.next.call(null,seq__25993);
var tag = first__25994;
var content = seq__25993__$1;
if(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__25995 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__25995,(0),null);
var id = cljs.core.nth.call(null,vec__25995,(1),null);
var class$ = cljs.core.nth.call(null,vec__25995,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map?rel=1486531226885