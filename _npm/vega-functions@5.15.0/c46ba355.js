/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/vega-functions@5.15.0/build/vega-functions.module.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{truthy as t,error as n,hasOwnProperty as e,extend as r,isArray as o,field as i,isFunction as a,peek as c,isBoolean as s,isDate as u,isNumber as l,isObject as f,isRegExp as m,isString as d,toBoolean as h,toDate as p,toNumber as g,toString as v,flush as x,lerp as y,pad as w,span as b,inrange as S,truncate as N,quarter as _,utcquarter as A,extent as E,clampRange as F,panLinear as $,panLog as k,panPow as R,panSymlog as M,zoomLinear as I,zoomLog as L,zoomPow as q,zoomSymlog as P,stringValue as D,identity as T,array as X}from"../vega-util@1.17.2/a0ac0a5c.js";import{codegenExpression as z,Literal as B,constants as O,functions as U,parseExpression as Y,CallExpression as G}from"../vega-expression@5.1.1/373e2111.js";import{bandSpace as j,scale as C,scaleFraction as H,isRegisteredScale as V}from"../vega-scale@7.4.1/98883cd9.js";import{geoArea as W,geoBounds as Z,geoCentroid as J}from"../d3-geo@3.1.1/dcd02767.js";import{rgb as K,lab as Q,hcl as tt,hsl as nt}from"../d3-color@3.1.0/2c0cdfa2.js";import{isTuple as et}from"../vega-dataflow@5.7.6/0360e671.js";import{Gradient as rt,pathRender as ot,pathParse as it,Bounds as at,intersect as ct}from"../vega-scenegraph@4.13.0/4a5ac54c.js";import{selectionVisitor as st,selectionTest as ut,selectionIdTest as lt,selectionResolve as ft,selectionTuples as mt}from"../vega-selections@5.4.2/35c09870.js";import{random as dt,cumulativeNormal as ht,cumulativeLogNormal as pt,cumulativeUniform as gt,densityNormal as vt,densityLogNormal as xt,densityUniform as yt,quantileNormal as wt,quantileLogNormal as bt,quantileUniform as St,sampleNormal as Nt,sampleLogNormal as _t,sampleUniform as At}from"../vega-statistics@1.9.0/7174884a.js";import{utcOffset as Et,utcSequence as Ft,timeOffset as $t,timeSequence as kt,timeUnitSpecifier as Rt,week as Mt,utcweek as It,dayofyear as Lt,utcdayofyear as qt}from"../vega-time@2.1.2/5bbb9135.js";import{range as Pt}from"../d3-array@3.2.4/e95f898e.js";function Dt(t){const n=this.context.data[t];return n?n.values.value:[]}function Tt(t,n,e){const r=this.context.data[t]["index:"+n],o=r?r.value.get(e):void 0;return o?o.count:o}function Xt(n,e){const r=this.context.dataflow,o=this.context.data[n].input;return r.pulse(o,r.changeset().remove(t).insert(e)),1}function zt(t,n,e){if(t){const e=this.context.dataflow,r=t.mark.source;e.pulse(r,e.changeset().encode(t,n))}return void 0!==e?e:t}const Bt=t=>function(n,e){const r=this.context.dataflow.locale();return null===n?"null":r[t](e)(n)},Ot=Bt("format"),Ut=Bt("timeFormat"),Yt=Bt("utcFormat"),Gt=Bt("timeParse"),jt=Bt("utcParse"),Ct=new Date(2e3,0,1);function Ht(t,n,e){return Number.isInteger(t)&&Number.isInteger(n)?(Ct.setYear(2e3),Ct.setMonth(t),Ct.setDate(n),Ut.call(this,Ct,e)):""}function Vt(t){return Ht.call(this,t,1,"%B")}function Wt(t){return Ht.call(this,t,1,"%b")}function Zt(t){return Ht.call(this,0,2+t,"%A")}function Jt(t){return Ht.call(this,0,2+t,"%a")}const Kt=":",Qt="@",tn="%",nn="$";function en(t,r,o,i){r[0].type!==B&&n("First argument to data functions must be a string literal.");const a=r[0].value,c=":"+a;if(!e(c,i))try{i[c]=o.getData(a).tuplesRef()}catch(t){}}function rn(t,r,o,i){r[0].type!==B&&n("First argument to indata must be a string literal."),r[1].type!==B&&n("Second argument to indata must be a string literal.");const a=r[0].value,c=r[1].value,s="@"+c;e(s,i)||(i[s]=o.getData(a).indataRef(o,c))}function on(t,n,e,r){if(n[0].type===B)an(e,r,n[0].value);else for(t in e.scales)an(e,r,t)}function an(t,n,r){const o=tn+r;if(!e(n,o))try{n[o]=t.scaleRef(r)}catch(t){}}function cn(t,n){if(a(t))return t;if(d(t)){const e=n.scales[t];return e&&V(e.value)?e.value:void 0}}function sn(t,n,e){n.__bandwidth=t=>t&&t.bandwidth?t.bandwidth():0,e._bandwidth=on,e._range=on,e._scale=on;const r=n=>"_["+(n.type===B?D(tn+n.value):D(tn)+"+"+t(n))+"]";return{_bandwidth:t=>`this.__bandwidth(${r(t[0])})`,_range:t=>`${r(t[0])}.range()`,_scale:n=>`${r(n[0])}(${t(n[1])})`}}function un(t,n){return function(e,r,o){if(e){const n=cn(e,(o||this).context);return n&&n.path[t](r)}return n(r)}}const ln=un("area",W),fn=un("bounds",Z),mn=un("centroid",J);function dn(t,n){const e=cn(t,(n||this).context);return e&&e.scale()}function hn(t){const n=this.context.group;let e=!1;if(n)for(;t;){if(t===n){e=!0;break}t=t.mark.group}return e}function pn(t,n,e){try{t[n].apply(t,["EXPRESSION"].concat([].slice.call(e)))}catch(n){t.warn(n)}return e[e.length-1]}function gn(){return pn(this.context.dataflow,"warn",arguments)}function vn(){return pn(this.context.dataflow,"info",arguments)}function xn(){return pn(this.context.dataflow,"debug",arguments)}function yn(t){const n=t/255;return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}function wn(t){const n=K(t);return.2126*yn(n.r)+.7152*yn(n.g)+.0722*yn(n.b)}function bn(t,n){const e=wn(t),r=wn(n);return(Math.max(e,r)+.05)/(Math.min(e,r)+.05)}function Sn(){const t=[].slice.call(arguments);return t.unshift({}),r(...t)}function Nn(t,n){return t===n||t!=t&&n!=n||(o(t)?!(!o(n)||t.length!==n.length)&&function(t,n){for(let e=0,r=t.length;e<r;++e)if(!Nn(t[e],n[e]))return!1;return!0}(t,n):!(!f(t)||!f(n))&&_n(t,n))}function _n(t,n){for(const e in t)if(!Nn(t[e],n[e]))return!1;return!0}function An(t){return n=>_n(t,n)}function En(n,e,r,i,a,c){const s=this.context.dataflow,u=this.context.data[n],l=u.input,f=s.stamp();let m,d,h=u.changes;if(!1===s._trigger||!(l.value.length||e||i))return 0;if((!h||h.stamp<f)&&(u.changes=h=s.changeset(),h.stamp=f,s.runAfter((()=>{u.modified=!0,s.pulse(l,h).run()}),!0,1)),r&&(m=!0===r?t:o(r)||et(r)?r:An(r),h.remove(m)),e&&h.insert(e),i&&(m=An(i),l.value.some(m)?h.remove(m):h.insert(i)),a)for(d in c)h.modify(a,d,c[d]);return 1}function Fn(t){const n=t.touches,e=n[0].clientX-n[1].clientX,r=n[0].clientY-n[1].clientY;return Math.hypot(e,r)}function $n(t){const n=t.touches;return Math.atan2(n[0].clientY-n[1].clientY,n[0].clientX-n[1].clientX)}const kn={};function Rn(t,n){const e=kn[n]||(kn[n]=i(n));return o(t)?t.map(e):e(t)}function Mn(t){return o(t)||ArrayBuffer.isView(t)?t:null}function In(t){return Mn(t)||(d(t)?t:null)}function Ln(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return Mn(t).join(...e)}function qn(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return In(t).indexOf(...e)}function Pn(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return In(t).lastIndexOf(...e)}function Dn(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return In(t).slice(...e)}function Tn(t,e,r){return a(r)&&n("Function argument passed to replace."),String(t).replace(e,r)}function Xn(t){return Mn(t).slice().reverse()}function zn(t,n,e){return j(t||0,n||0,e||0)}function Bn(t,n){const e=cn(t,(n||this).context);return e&&e.bandwidth?e.bandwidth():0}function On(t,n){const e=cn(t,(n||this).context);return e?e.copy():void 0}function Un(t,n){const e=cn(t,(n||this).context);return e?e.domain():[]}function Yn(t,n,e){const r=cn(t,(e||this).context);return r?o(n)?(r.invertRange||r.invert)(n):(r.invert||r.invertExtent)(n):void 0}function Gn(t,n){const e=cn(t,(n||this).context);return e&&e.range?e.range():[]}function jn(t,n,e){const r=cn(t,(e||this).context);return r?r(n):void 0}function Cn(t,n,e,r,o){t=cn(t,(o||this).context);const i=rt(n,e);let a=t.domain(),s=a[0],u=c(a),l=T;return u-s?l=H(t,s,u):t=(t.interpolator?C("sequential")().interpolator(t.interpolator()):C("linear")().interpolate(t.interpolate()).range(t.range())).domain([s=0,u=1]),t.ticks&&(a=t.ticks(+r||15),s!==a[0]&&a.unshift(s),u!==c(a)&&a.push(u)),a.forEach((n=>i.stop(l(n),t(n)))),i}function Hn(t,n,e){const r=cn(t,(e||this).context);return function(t){return r?r.path.context(t)(n):""}}function Vn(t){let n=null;return function(e){return e?ot(e,n=n||it(t)):t}}const Wn=t=>t.data;function Zn(t,n){const e=Dt.call(n,t);return e.root&&e.root.lookup||{}}function Jn(t,n,e){const r=Zn(t,this),o=r[n],i=r[e];return o&&i?o.path(i).map(Wn):void 0}function Kn(t,n){const e=Zn(t,this)[n];return e?e.ancestors().map(Wn):void 0}const Qn=()=>"undefined"!=typeof window&&window||null;function te(){const t=Qn();return t?t.screen:{}}function ne(){const t=Qn();return t?[t.innerWidth,t.innerHeight]:[void 0,void 0]}function ee(){const t=this.context.dataflow,n=t.container&&t.container();return n?[n.clientWidth,n.clientHeight]:[void 0,void 0]}function re(t,n,e){if(!t)return[];const[r,o]=t,i=(new at).set(r[0],r[1],o[0],o[1]),a=e||this.context.dataflow.scenegraph().root;return ct(a,i,function(t){let n=null;if(t){const e=X(t.marktype),r=X(t.markname);n=t=>(!e.length||e.some((n=>t.marktype===n)))&&(!r.length||r.some((n=>t.name===n)))}return n}(n))}const oe={random:()=>dt(),cumulativeNormal:ht,cumulativeLogNormal:pt,cumulativeUniform:gt,densityNormal:vt,densityLogNormal:xt,densityUniform:yt,quantileNormal:wt,quantileLogNormal:bt,quantileUniform:St,sampleNormal:Nt,sampleLogNormal:_t,sampleUniform:At,isArray:o,isBoolean:s,isDate:u,isDefined:t=>void 0!==t,isNumber:l,isObject:f,isRegExp:m,isString:d,isTuple:et,isValid:t=>null!=t&&t==t,toBoolean:h,toDate:t=>p(t),toNumber:g,toString:v,indexof:qn,join:Ln,lastindexof:Pn,replace:Tn,reverse:Xn,slice:Dn,flush:x,lerp:y,merge:Sn,pad:w,peek:c,pluck:Rn,span:b,inrange:S,truncate:N,rgb:K,lab:Q,hcl:tt,hsl:nt,luminance:wn,contrast:bn,sequence:Pt,format:Ot,utcFormat:Yt,utcParse:jt,utcOffset:Et,utcSequence:Ft,timeFormat:Ut,timeParse:Gt,timeOffset:$t,timeSequence:kt,timeUnitSpecifier:Rt,monthFormat:Vt,monthAbbrevFormat:Wt,dayFormat:Zt,dayAbbrevFormat:Jt,quarter:_,utcquarter:A,week:Mt,utcweek:It,dayofyear:Lt,utcdayofyear:qt,warn:gn,info:vn,debug:xn,extent:t=>E(t),inScope:hn,intersect:re,clampRange:F,pinchDistance:Fn,pinchAngle:$n,screen:te,containerSize:ee,windowSize:ne,bandspace:zn,setdata:Xt,pathShape:Vn,panLinear:$,panLog:k,panPow:R,panSymlog:M,zoomLinear:I,zoomLog:L,zoomPow:q,zoomSymlog:P,encode:zt,modify:En,lassoAppend:function(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const o=(t=X(t))[t.length-1];return void 0===o||Math.hypot(o[0]-n,o[1]-e)>r?[...t,[n,e]]:t},lassoPath:function(t){return X(t).reduce(((n,e,r)=>{let[o,i]=e;return n+(0==r?`M ${o},${i} `:r===t.length-1?" Z":`L ${o},${i} `)}),"")},intersectLasso:function(t,n,e){const{x:r,y:o,mark:i}=e,a=(new at).set(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);for(const[t,e]of n)t<a.x1&&(a.x1=t),t>a.x2&&(a.x2=t),e<a.y1&&(a.y1=e),e>a.y2&&(a.y2=e);return a.translate(r,o),re([[a.x1,a.y1],[a.x2,a.y2]],t,i).filter((t=>function(t,n,e){let r=0;for(let o=0,i=e.length-1;o<e.length;i=o++){const[a,c]=e[i],[s,u]=e[o];u>n!=c>n&&t<(a-s)*(n-u)/(c-u)+s&&r++}return 1&r}(t.x,t.y,n)))}},ie=["view","item","group","xy","x","y"],ae="this.",ce={},se={forbidden:["_"],allowed:["datum","event","item"],fieldvar:"datum",globalvar:t=>`_[${D("$"+t)}]`,functions:function(t){const n=U(t);ie.forEach((t=>n[t]="event.vega."+t));for(const t in oe)n[t]=ae+t;return r(n,sn(t,oe,ce)),n},constants:O,visitors:ce},ue=z(se);function le(t,n,e){return 1===arguments.length?oe[t]:(oe[t]=n,e&&(ce[t]=e),ue&&(ue.functions[t]=ae+t),this)}function fe(t,o){const i={};let a;try{t=d(t)?t:D(t)+"",a=Y(t)}catch(e){n("Expression parse error: "+t)}a.visit((t=>{if(t.type!==G)return;const n=t.callee.name,e=se.visitors[n];e&&e(n,t.arguments,o,i)}));const c=ue(a);return c.globals.forEach((t=>{const n="$"+t;!e(i,n)&&o.getSignal(t)&&(i[n]=o.signalRef(t))})),{$expr:r({code:c.code},o.options.ast?{ast:a}:null),$fields:c.fields,$params:i}}le("bandwidth",Bn,on),le("copy",On,on),le("domain",Un,on),le("range",Gn,on),le("invert",Yn,on),le("scale",jn,on),le("gradient",Cn,on),le("geoArea",ln,on),le("geoBounds",fn,on),le("geoCentroid",mn,on),le("geoShape",Hn,on),le("geoScale",dn,on),le("indata",Tt,rn),le("data",Dt,en),le("treePath",Jn,en),le("treeAncestors",Kn,en),le("vlSelectionTest",ut,st),le("vlSelectionIdTest",lt,st),le("vlSelectionResolve",ft,st),le("vlSelectionTuples",mt);export{Kt as DataPrefix,Qt as IndexPrefix,tn as ScalePrefix,nn as SignalPrefix,zn as bandspace,Bn as bandwidth,ue as codeGenerator,se as codegenParams,ee as containerSize,bn as contrast,On as copy,Dt as data,en as dataVisitor,Jt as dayAbbrevFormat,Zt as dayFormat,xn as debug,Un as domain,zt as encode,le as expressionFunction,Ot as format,oe as functionContext,ln as geoArea,fn as geoBounds,mn as geoCentroid,dn as geoScale,Hn as geoShape,hn as inScope,Tt as indata,rn as indataVisitor,qn as indexof,vn as info,Yn as invert,Ln as join,Pn as lastindexof,wn as luminance,Sn as merge,En as modify,Wt as monthAbbrevFormat,Vt as monthFormat,fe as parseExpression,Vn as pathShape,$n as pinchAngle,Fn as pinchDistance,Rn as pluck,Gn as range,Tn as replace,Xn as reverse,jn as scale,Cn as scaleGradient,on as scaleVisitor,te as screen,Xt as setdata,Dn as slice,Ut as timeFormat,Gt as timeParse,Kn as treeAncestors,Jn as treePath,Yt as utcFormat,jt as utcParse,gn as warn,ne as windowSize};export default null;
