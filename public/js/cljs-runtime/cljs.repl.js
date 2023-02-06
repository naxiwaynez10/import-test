goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48341){
var map__48342 = p__48341;
var map__48342__$1 = cljs.core.__destructure_map(map__48342);
var m = map__48342__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48342__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48343_48462 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48344_48463 = null;
var count__48345_48464 = (0);
var i__48346_48465 = (0);
while(true){
if((i__48346_48465 < count__48345_48464)){
var f_48466 = chunk__48344_48463.cljs$core$IIndexed$_nth$arity$2(null,i__48346_48465);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48466], 0));


var G__48467 = seq__48343_48462;
var G__48468 = chunk__48344_48463;
var G__48469 = count__48345_48464;
var G__48470 = (i__48346_48465 + (1));
seq__48343_48462 = G__48467;
chunk__48344_48463 = G__48468;
count__48345_48464 = G__48469;
i__48346_48465 = G__48470;
continue;
} else {
var temp__5804__auto___48472 = cljs.core.seq(seq__48343_48462);
if(temp__5804__auto___48472){
var seq__48343_48476__$1 = temp__5804__auto___48472;
if(cljs.core.chunked_seq_QMARK_(seq__48343_48476__$1)){
var c__5568__auto___48477 = cljs.core.chunk_first(seq__48343_48476__$1);
var G__48481 = cljs.core.chunk_rest(seq__48343_48476__$1);
var G__48482 = c__5568__auto___48477;
var G__48483 = cljs.core.count(c__5568__auto___48477);
var G__48484 = (0);
seq__48343_48462 = G__48481;
chunk__48344_48463 = G__48482;
count__48345_48464 = G__48483;
i__48346_48465 = G__48484;
continue;
} else {
var f_48485 = cljs.core.first(seq__48343_48476__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_48485], 0));


var G__48486 = cljs.core.next(seq__48343_48476__$1);
var G__48487 = null;
var G__48488 = (0);
var G__48489 = (0);
seq__48343_48462 = G__48486;
chunk__48344_48463 = G__48487;
count__48345_48464 = G__48488;
i__48346_48465 = G__48489;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48490 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_48490], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_48490)))?cljs.core.second(arglists_48490):arglists_48490)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48347_48502 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48348_48503 = null;
var count__48349_48504 = (0);
var i__48350_48505 = (0);
while(true){
if((i__48350_48505 < count__48349_48504)){
var vec__48361_48509 = chunk__48348_48503.cljs$core$IIndexed$_nth$arity$2(null,i__48350_48505);
var name_48510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48509,(0),null);
var map__48364_48511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48361_48509,(1),null);
var map__48364_48512__$1 = cljs.core.__destructure_map(map__48364_48511);
var doc_48513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364_48512__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48364_48512__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48510], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48514], 0));

if(cljs.core.truth_(doc_48513)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48513], 0));
} else {
}


var G__48519 = seq__48347_48502;
var G__48520 = chunk__48348_48503;
var G__48521 = count__48349_48504;
var G__48522 = (i__48350_48505 + (1));
seq__48347_48502 = G__48519;
chunk__48348_48503 = G__48520;
count__48349_48504 = G__48521;
i__48350_48505 = G__48522;
continue;
} else {
var temp__5804__auto___48527 = cljs.core.seq(seq__48347_48502);
if(temp__5804__auto___48527){
var seq__48347_48529__$1 = temp__5804__auto___48527;
if(cljs.core.chunked_seq_QMARK_(seq__48347_48529__$1)){
var c__5568__auto___48531 = cljs.core.chunk_first(seq__48347_48529__$1);
var G__48533 = cljs.core.chunk_rest(seq__48347_48529__$1);
var G__48534 = c__5568__auto___48531;
var G__48535 = cljs.core.count(c__5568__auto___48531);
var G__48536 = (0);
seq__48347_48502 = G__48533;
chunk__48348_48503 = G__48534;
count__48349_48504 = G__48535;
i__48350_48505 = G__48536;
continue;
} else {
var vec__48367_48541 = cljs.core.first(seq__48347_48529__$1);
var name_48542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48541,(0),null);
var map__48370_48543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48541,(1),null);
var map__48370_48544__$1 = cljs.core.__destructure_map(map__48370_48543);
var doc_48545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370_48544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48370_48544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_48542], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_48546], 0));

if(cljs.core.truth_(doc_48545)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_48545], 0));
} else {
}


var G__48556 = cljs.core.next(seq__48347_48529__$1);
var G__48557 = null;
var G__48558 = (0);
var G__48559 = (0);
seq__48347_48502 = G__48556;
chunk__48348_48503 = G__48557;
count__48349_48504 = G__48558;
i__48350_48505 = G__48559;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__48372 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48373 = null;
var count__48374 = (0);
var i__48375 = (0);
while(true){
if((i__48375 < count__48374)){
var role = chunk__48373.cljs$core$IIndexed$_nth$arity$2(null,i__48375);
var temp__5804__auto___48560__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___48560__$1)){
var spec_48561 = temp__5804__auto___48560__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48561)], 0));
} else {
}


var G__48562 = seq__48372;
var G__48563 = chunk__48373;
var G__48564 = count__48374;
var G__48565 = (i__48375 + (1));
seq__48372 = G__48562;
chunk__48373 = G__48563;
count__48374 = G__48564;
i__48375 = G__48565;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__48372);
if(temp__5804__auto____$1){
var seq__48372__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__48372__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__48372__$1);
var G__48566 = cljs.core.chunk_rest(seq__48372__$1);
var G__48567 = c__5568__auto__;
var G__48568 = cljs.core.count(c__5568__auto__);
var G__48569 = (0);
seq__48372 = G__48566;
chunk__48373 = G__48567;
count__48374 = G__48568;
i__48375 = G__48569;
continue;
} else {
var role = cljs.core.first(seq__48372__$1);
var temp__5804__auto___48570__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___48570__$2)){
var spec_48575 = temp__5804__auto___48570__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_48575)], 0));
} else {
}


var G__48576 = cljs.core.next(seq__48372__$1);
var G__48577 = null;
var G__48578 = (0);
var G__48579 = (0);
seq__48372 = G__48576;
chunk__48373 = G__48577;
count__48374 = G__48578;
i__48375 = G__48579;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__48581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__48582 = cljs.core.ex_cause(t);
via = G__48581;
t = G__48582;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__48380 = datafied_throwable;
var map__48380__$1 = cljs.core.__destructure_map(map__48380);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48380__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48381 = cljs.core.last(via);
var map__48381__$1 = cljs.core.__destructure_map(map__48381);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48381__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48381__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48381__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48382 = data;
var map__48382__$1 = cljs.core.__destructure_map(map__48382);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48382__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48383 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__48383__$1 = cljs.core.__destructure_map(map__48383);
var top_data = map__48383__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48384 = phase;
var G__48384__$1 = (((G__48384 instanceof cljs.core.Keyword))?G__48384.fqn:null);
switch (G__48384__$1) {
case "read-source":
var map__48385 = data;
var map__48385__$1 = cljs.core.__destructure_map(map__48385);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48385__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48385__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48386 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__48386__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48386,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48386);
var G__48386__$2 = (cljs.core.truth_((function (){var fexpr__48389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48389.cljs$core$IFn$_invoke$arity$1 ? fexpr__48389.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48389.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48386__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48386__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48386__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48390 = top_data;
var G__48390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48390);
var G__48390__$2 = (cljs.core.truth_((function (){var fexpr__48391 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48391.cljs$core$IFn$_invoke$arity$1 ? fexpr__48391.cljs$core$IFn$_invoke$arity$1(source) : fexpr__48391.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48390__$1);
var G__48390__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48390__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48390__$2);
var G__48390__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48390__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48390__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48390__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48390__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48393 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48393,(3),null);
var G__48396 = top_data;
var G__48396__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48396,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48396);
var G__48396__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48396__$1);
var G__48396__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48396__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48396__$2);
var G__48396__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48396__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48396__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48396__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48396__$4;
}

break;
case "execution":
var vec__48398 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48379_SHARP_){
var or__5045__auto__ = (p1__48379_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__48402 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__48402.cljs$core$IFn$_invoke$arity$1 ? fexpr__48402.cljs$core$IFn$_invoke$arity$1(p1__48379_SHARP_) : fexpr__48402.call(null,p1__48379_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__48403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48403__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48403);
var G__48403__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48403__$1);
var G__48403__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48403__$2);
var G__48403__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48403__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48403__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48403__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48403__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48384__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48406){
var map__48407 = p__48406;
var map__48407__$1 = cljs.core.__destructure_map(map__48407);
var triage_data = map__48407__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__48416 = phase;
var G__48416__$1 = (((G__48416 instanceof cljs.core.Keyword))?G__48416.fqn:null);
switch (G__48416__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__48417 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__48418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48419 = loc;
var G__48420 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48421_48590 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48422_48591 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48423_48592 = true;
var _STAR_print_fn_STAR__temp_val__48424_48593 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48423_48592);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48424_48593);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48404_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48404_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48422_48591);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48421_48590);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48417,G__48418,G__48419,G__48420) : format.call(null,G__48417,G__48418,G__48419,G__48420));

break;
case "macroexpansion":
var G__48425 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__48426 = cause_type;
var G__48427 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48428 = loc;
var G__48429 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48425,G__48426,G__48427,G__48428,G__48429) : format.call(null,G__48425,G__48426,G__48427,G__48428,G__48429));

break;
case "compile-syntax-check":
var G__48430 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__48431 = cause_type;
var G__48432 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48433 = loc;
var G__48434 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48430,G__48431,G__48432,G__48433,G__48434) : format.call(null,G__48430,G__48431,G__48432,G__48433,G__48434));

break;
case "compilation":
var G__48435 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__48436 = cause_type;
var G__48437 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48438 = loc;
var G__48439 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48435,G__48436,G__48437,G__48438,G__48439) : format.call(null,G__48435,G__48436,G__48437,G__48438,G__48439));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__48440 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__48441 = symbol;
var G__48442 = loc;
var G__48443 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48444_48598 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48445_48599 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48446_48600 = true;
var _STAR_print_fn_STAR__temp_val__48447_48601 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48446_48600);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48447_48601);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48405_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__48405_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48445_48599);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48444_48598);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__48440,G__48441,G__48442,G__48443) : format.call(null,G__48440,G__48441,G__48442,G__48443));
} else {
var G__48448 = "Execution error%s at %s(%s).\n%s\n";
var G__48449 = cause_type;
var G__48450 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__48451 = loc;
var G__48452 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__48448,G__48449,G__48450,G__48451,G__48452) : format.call(null,G__48448,G__48449,G__48450,G__48451,G__48452));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48416__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
