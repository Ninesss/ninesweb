(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var kd={exports:{}},Zl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax;function PT(){if(ax)return Zl;ax=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:i,key:c,ref:s!==void 0?s:null,props:l}}return Zl.Fragment=e,Zl.jsx=t,Zl.jsxs=t,Zl}var rx;function IT(){return rx||(rx=1,kd.exports=PT()),kd.exports}var De=IT(),Xd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function BT(){if(sx)return ft;sx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(O,Q,pe){this.props=O,this.context=Q,this.refs=M,this.updater=pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function A(O,Q,pe){this.props=O,this.context=Q,this.refs=M,this.updater=pe||S}var C=A.prototype=new x;C.constructor=A,E(C,y.prototype),C.isPureReactComponent=!0;var b=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function I(O,Q,pe,ye,be,Be){return pe=Be.ref,{$$typeof:r,type:O,key:Q,ref:pe!==void 0?pe:null,props:Be}}function H(O,Q){return I(O.type,Q,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function L(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return Q[pe]})}var B=/\/+/g;function X(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):Q.toString(36)}function K(){}function re(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(K,K):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ee(O,Q,pe,ye,be){var Be=typeof O;(Be==="undefined"||Be==="boolean")&&(O=null);var ne=!1;if(O===null)ne=!0;else switch(Be){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(O.$$typeof){case r:case e:ne=!0;break;case m:return ne=O._init,ee(ne(O._payload),Q,pe,ye,be)}}if(ne)return be=be(O),ne=ye===""?"."+X(O,0):ye,b(be)?(pe="",ne!=null&&(pe=ne.replace(B,"$&/")+"/"),ee(be,Q,pe,"",function(Ke){return Ke})):be!=null&&(R(be)&&(be=H(be,pe+(be.key==null||O&&O.key===be.key?"":(""+be.key).replace(B,"$&/")+"/")+ne)),Q.push(be)),1;ne=0;var ge=ye===""?".":ye+":";if(b(O))for(var Re=0;Re<O.length;Re++)ye=O[Re],Be=ge+X(ye,Re),ne+=ee(ye,Q,pe,Be,be);else if(Re=v(O),typeof Re=="function")for(O=Re.call(O),Re=0;!(ye=O.next()).done;)ye=ye.value,Be=ge+X(ye,Re++),ne+=ee(ye,Q,pe,Be,be);else if(Be==="object"){if(typeof O.then=="function")return ee(re(O),Q,pe,ye,be);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ne}function z(O,Q,pe){if(O==null)return O;var ye=[],be=0;return ee(O,ye,"","",function(Be){return Q.call(pe,Be,be++)}),ye}function q(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var k=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function _e(){}return ft.Children={map:z,forEach:function(O,Q,pe){z(O,function(){Q.apply(this,arguments)},pe)},count:function(O){var Q=0;return z(O,function(){Q++}),Q},toArray:function(O){return z(O,function(Q){return Q})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=y,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=A,ft.StrictMode=i,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ft.__COMPILER_RUNTIME={__proto__:null,c:function(O){return U.H.useMemoCache(O)}},ft.cache=function(O){return function(){return O.apply(null,arguments)}},ft.cloneElement=function(O,Q,pe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=E({},O.props),be=O.key,Be=void 0;if(Q!=null)for(ne in Q.ref!==void 0&&(Be=void 0),Q.key!==void 0&&(be=""+Q.key),Q)!P.call(Q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Q.ref===void 0||(ye[ne]=Q[ne]);var ne=arguments.length-2;if(ne===1)ye.children=pe;else if(1<ne){for(var ge=Array(ne),Re=0;Re<ne;Re++)ge[Re]=arguments[Re+2];ye.children=ge}return I(O.type,be,void 0,void 0,Be,ye)},ft.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},ft.createElement=function(O,Q,pe){var ye,be={},Be=null;if(Q!=null)for(ye in Q.key!==void 0&&(Be=""+Q.key),Q)P.call(Q,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(be[ye]=Q[ye]);var ne=arguments.length-2;if(ne===1)be.children=pe;else if(1<ne){for(var ge=Array(ne),Re=0;Re<ne;Re++)ge[Re]=arguments[Re+2];be.children=ge}if(O&&O.defaultProps)for(ye in ne=O.defaultProps,ne)be[ye]===void 0&&(be[ye]=ne[ye]);return I(O,Be,void 0,void 0,null,be)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:f,render:O}},ft.isValidElement=R,ft.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:q}},ft.memo=function(O,Q){return{$$typeof:h,type:O,compare:Q===void 0?null:Q}},ft.startTransition=function(O){var Q=U.T,pe={};U.T=pe;try{var ye=O(),be=U.S;be!==null&&be(pe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(_e,k)}catch(Be){k(Be)}finally{U.T=Q}},ft.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ft.use=function(O){return U.H.use(O)},ft.useActionState=function(O,Q,pe){return U.H.useActionState(O,Q,pe)},ft.useCallback=function(O,Q){return U.H.useCallback(O,Q)},ft.useContext=function(O){return U.H.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O,Q){return U.H.useDeferredValue(O,Q)},ft.useEffect=function(O,Q,pe){var ye=U.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(O,Q)},ft.useId=function(){return U.H.useId()},ft.useImperativeHandle=function(O,Q,pe){return U.H.useImperativeHandle(O,Q,pe)},ft.useInsertionEffect=function(O,Q){return U.H.useInsertionEffect(O,Q)},ft.useLayoutEffect=function(O,Q){return U.H.useLayoutEffect(O,Q)},ft.useMemo=function(O,Q){return U.H.useMemo(O,Q)},ft.useOptimistic=function(O,Q){return U.H.useOptimistic(O,Q)},ft.useReducer=function(O,Q,pe){return U.H.useReducer(O,Q,pe)},ft.useRef=function(O){return U.H.useRef(O)},ft.useState=function(O){return U.H.useState(O)},ft.useSyncExternalStore=function(O,Q,pe){return U.H.useSyncExternalStore(O,Q,pe)},ft.useTransition=function(){return U.H.useTransition()},ft.version="19.1.1",ft}var ox;function Qm(){return ox||(ox=1,Xd.exports=BT()),Xd.exports}var oe=Qm(),Wd={exports:{}},Kl={},qd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function FT(){return lx||(lx=1,(function(r){function e(z,q){var k=z.length;z.push(q);e:for(;0<k;){var _e=k-1>>>1,O=z[_e];if(0<s(O,q))z[_e]=q,z[k]=O,k=_e;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var q=z[0],k=z.pop();if(k!==q){z[0]=k;e:for(var _e=0,O=z.length,Q=O>>>1;_e<Q;){var pe=2*(_e+1)-1,ye=z[pe],be=pe+1,Be=z[be];if(0>s(ye,k))be<O&&0>s(Be,ye)?(z[_e]=Be,z[be]=k,_e=be):(z[_e]=ye,z[pe]=k,_e=pe);else if(be<O&&0>s(Be,k))z[_e]=Be,z[be]=k,_e=be;else break e}}return q}function s(z,q){var k=z.sortIndex-q.sortIndex;return k!==0?k:z.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,_=null,v=3,S=!1,E=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function b(z){for(var q=t(h);q!==null;){if(q.callback===null)i(h);else if(q.startTime<=z)i(h),q.sortIndex=q.expirationTime,e(p,q);else break;q=t(h)}}function U(z){if(M=!1,b(z),!E)if(t(p)!==null)E=!0,P||(P=!0,X());else{var q=t(h);q!==null&&ee(U,q.startTime-z)}}var P=!1,I=-1,H=5,R=-1;function L(){return y?!0:!(r.unstable_now()-R<H)}function B(){if(y=!1,P){var z=r.unstable_now();R=z;var q=!0;try{e:{E=!1,M&&(M=!1,A(I),I=-1),S=!0;var k=v;try{t:{for(b(z),_=t(p);_!==null&&!(_.expirationTime>z&&L());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var O=_e(_.expirationTime<=z);if(z=r.unstable_now(),typeof O=="function"){_.callback=O,b(z),q=!0;break t}_===t(p)&&i(p),b(z)}else i(p);_=t(p)}if(_!==null)q=!0;else{var Q=t(h);Q!==null&&ee(U,Q.startTime-z),q=!1}}break e}finally{_=null,v=k,S=!1}q=void 0}}finally{q?X():P=!1}}}var X;if(typeof C=="function")X=function(){C(B)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,re=K.port2;K.port1.onmessage=B,X=function(){re.postMessage(null)}}else X=function(){x(B,0)};function ee(z,q){I=x(function(){z(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var k=v;v=q;try{return z()}finally{v=k}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=v;v=z;try{return q()}finally{v=k}},r.unstable_scheduleCallback=function(z,q,k){var _e=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_e+k:_e):k=_e,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=k+O,z={id:m++,callback:q,priorityLevel:z,startTime:k,expirationTime:O,sortIndex:-1},k>_e?(z.sortIndex=k,e(h,z),t(p)===null&&z===t(h)&&(M?(A(I),I=-1):M=!0,ee(U,k-_e))):(z.sortIndex=O,e(p,z),E||S||(E=!0,P||(P=!0,X()))),z},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(z){var q=v;return function(){var k=v;v=q;try{return z.apply(this,arguments)}finally{v=k}}}})(Yd)),Yd}var ux;function zT(){return ux||(ux=1,qd.exports=FT()),qd.exports}var jd={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx;function HT(){if(cx)return Wn;cx=1;var r=Qm();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:p,containerInfo:h,implementation:m}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Wn.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(p,h,null,m)},Wn.flushSync=function(p){var h=c.T,m=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=h,i.p=m,i.d.f()}},Wn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},Wn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Wn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):m==="script"&&i.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},Wn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);i.d.L(p,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wn.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},Wn.requestFormReset=function(p){i.d.r(p)},Wn.unstable_batchedUpdates=function(p,h){return p(h)},Wn.useFormState=function(p,h,m){return c.H.useFormState(p,h,m)},Wn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Wn.version="19.1.1",Wn}var fx;function GT(){if(fx)return jd.exports;fx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),jd.exports=HT(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function VT(){if(hx)return Kl;hx=1;var r=zT(),e=Qm(),t=GT();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function p(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,u=a;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),n;if(g===u)return f(d),a;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=g;else{for(var T=!1,D=d.child;D;){if(D===o){T=!0,o=d,u=g;break}if(D===u){T=!0,u=d,o=g;break}D=D.sibling}if(!T){for(D=g.child;D;){if(D===o){T=!0,o=g,u=d;break}if(D===u){T=!0,u=g,o=d;break}D=D.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),C=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var K=Symbol.for("react.client.reference");function re(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===K?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case U:return"Suspense";case P:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case C:return(n.displayName||"Context")+".Provider";case A:return(n._context.displayName||"Context")+".Consumer";case b:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return a=n.displayName||null,a!==null?a:re(n.type)||"Memo";case H:a=n._payload,n=n._init;try{return re(n(a))}catch{}}return null}var ee=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_e=[],O=-1;function Q(n){return{current:n}}function pe(n){0>O||(n.current=_e[O],_e[O]=null,O--)}function ye(n,a){O++,_e[O]=n.current,n.current=a}var be=Q(null),Be=Q(null),ne=Q(null),ge=Q(null);function Re(n,a){switch(ye(ne,a),ye(Be,n),ye(be,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?L0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=L0(a),n=N0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}pe(be),ye(be,n)}function Ke(){pe(be),pe(Be),pe(ne)}function qe(n){n.memoizedState!==null&&ye(ge,n);var a=be.current,o=N0(a,n.type);a!==o&&(ye(Be,n),ye(be,o))}function ct(n){Be.current===n&&(pe(be),pe(Be)),ge.current===n&&(pe(ge),Xl._currentValue=k)}var xt=Object.prototype.hasOwnProperty,V=r.unstable_scheduleCallback,bt=r.unstable_cancelCallback,st=r.unstable_shouldYield,et=r.unstable_requestPaint,Ie=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,Ge=r.unstable_ImmediatePriority,Fe=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,Ct=r.unstable_LowPriority,F=r.unstable_IdlePriority,w=r.log,ie=r.unstable_setDisableYieldValue,he=null,ve=null;function fe(n){if(typeof w=="function"&&ie(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(he,n)}catch{}}var ze=Math.clz32?Math.clz32:Ze,Ce=Math.log,Ye=Math.LN2;function Ze(n){return n>>>=0,n===0?32:31-(Ce(n)/Ye|0)|0}var Me=256,Ne=4194304;function Je(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function We(n,a,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,g=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var D=u&134217727;return D!==0?(u=D&~g,u!==0?d=Je(u):(T&=D,T!==0?d=Je(T):o||(o=D&~n,o!==0&&(d=Je(o))))):(D=u&~g,D!==0?d=Je(D):T!==0?d=Je(T):o||(o=u&~n,o!==0&&(d=Je(o)))),d===0?0:a!==0&&a!==d&&(a&g)===0&&(g=d&-d,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:d}function Ue(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function ut(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var n=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),n}function Ae(){var n=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),n}function we(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function He(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ee(n,a,o,u,d,g){var T=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var D=n.entanglements,G=n.expirationTimes,te=n.hiddenUpdates;for(o=T&~o;0<o;){var de=31-ze(o),xe=1<<de;D[de]=0,G[de]=-1;var ae=te[de];if(ae!==null)for(te[de]=null,de=0;de<ae.length;de++){var se=ae[de];se!==null&&(se.lane&=-536870913)}o&=~xe}u!==0&&Se(n,u,0),g!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=g&~(T&~a))}function Se(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-ze(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Xe(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var u=31-ze(o),d=1<<u;d&a|n[u]&a&&(n[u]|=a),o&=~d}}function ot(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function It(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function wt(){var n=q.p;return n!==0?n:(n=window.event,n===void 0?32:J0(n.type))}function Yi(n,a){var o=q.p;try{return q.p=n,a()}finally{q.p=o}}var yn=Math.random().toString(36).slice(2),Mn="__reactFiber$"+yn,rn="__reactProps$"+yn,sa="__reactContainer$"+yn,Ps="__reactEvents$"+yn,Nu="__reactListeners$"+yn,Is="__reactHandles$"+yn,nl="__reactResources$"+yn,oa="__reactMarker$"+yn;function Bs(n){delete n[Mn],delete n[rn],delete n[Ps],delete n[Nu],delete n[Is]}function Ea(n){var a=n[Mn];if(a)return a;for(var o=n.parentNode;o;){if(a=o[sa]||o[Mn]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=B0(n);n!==null;){if(o=n[Mn])return o;n=B0(n)}return a}n=o,o=n.parentNode}return null}function tr(n){if(n=n[Mn]||n[sa]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function qr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function nr(n){var a=n[nl];return a||(a=n[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function mn(n){n[oa]=!0}var Ou=new Set,Pu={};function N(n,a){j(n,a),j(n+"Capture",a)}function j(n,a){for(Pu[n]=a,n=0;n<a.length;n++)Ou.add(a[n])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},J={};function Te(n){return xt.call(J,n)?!0:xt.call(ue,n)?!1:le.test(n)?J[n]=!0:(ue[n]=!0,!1)}function Le(n,a,o){if(Te(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Ve(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function Oe(n,a,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+u)}}var tt,it;function je(n){if(tt===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);tt=a&&a[1]||"",it=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+n+it}var dt=!1;function Dt(n,a){if(!n||dt)return"";dt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(se){var ae=se}Reflect.construct(n,[],xe)}else{try{xe.call()}catch(se){ae=se}n.call(xe.prototype)}}else{try{throw Error()}catch(se){ae=se}(xe=n())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(se){if(se&&ae&&typeof se.stack=="string")return[se.stack,ae.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),T=g[0],D=g[1];if(T&&D){var G=T.split(`
`),te=D.split(`
`);for(d=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;d<te.length&&!te[d].includes("DetermineComponentFrameRoot");)d++;if(u===G.length||d===te.length)for(u=G.length-1,d=te.length-1;1<=u&&0<=d&&G[u]!==te[d];)d--;for(;1<=u&&0<=d;u--,d--)if(G[u]!==te[d]){if(u!==1||d!==1)do if(u--,d--,0>d||G[u]!==te[d]){var de=`
`+G[u].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=u&&0<=d);break}}}finally{dt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?je(o):""}function Qt(n){switch(n.tag){case 26:case 27:case 5:return je(n.type);case 16:return je("Lazy");case 13:return je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return Dt(n.type,!1);case 11:return Dt(n.type.render,!1);case 1:return Dt(n.type,!0);case 31:return je("Activity");default:return""}}function Ht(n){try{var a="";do a+=Qt(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function pt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kt(n){var a=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,g.call(this,T)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function St(n){n._valueTracker||(n._valueTracker=Kt(n))}function Vn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return n&&(u=$e(n)?n.checked?"true":"false":n.value),n=u,n!==o?(a.setValue(n),!0):!1}function ji(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Qn=/[\n"\\]/g;function wn(n){return n.replace(Qn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wt(n,a,o,u,d,g,T,D){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),a!=null?T==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+pt(a)):n.value!==""+pt(a)&&(n.value=""+pt(a)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),a!=null?kn(n,T,pt(a)):o!=null?kn(n,T,pt(o)):u!=null&&n.removeAttribute("value"),d==null&&g!=null&&(n.defaultChecked=!!g),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+pt(D):n.removeAttribute("name")}function Jn(n,a,o,u,d,g,T,D){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;o=o!=null?""+pt(o):"",a=a!=null?""+pt(a):o,D||a===n.value||(n.value=a),n.defaultValue=a}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=D?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function kn(n,a,o){a==="number"&&ji(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function sn(n,a,o,u){if(n=n.options,a){a={};for(var d=0;d<o.length;d++)a["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=a.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pt(o),a=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}a!==null||n[d].disabled||(a=n[d])}a!==null&&(a.selected=!0)}}function In(n,a,o){if(a!=null&&(a=""+pt(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+pt(o):""}function Fs(n,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(ee(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=pt(a),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function ii(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var LM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lg(n,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,o):typeof o!="number"||o===0||LM.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Ng(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in a)u=a[d],a.hasOwnProperty(d)&&o[d]!==u&&Lg(n,d,u)}else for(var g in a)a.hasOwnProperty(g)&&Lg(n,g,a[g])}function Vf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var NM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),OM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Iu(n){return OM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var kf=null;function Xf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zs=null,Hs=null;function Og(n){var a=tr(n);if(a&&(n=a.stateNode)){var o=n[rn]||null;e:switch(n=a.stateNode,a.type){case"input":if(Wt(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+wn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==n&&u.form===n.form){var d=u[rn]||null;if(!d)throw Error(i(90));Wt(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===n.form&&Vn(u)}break e;case"textarea":In(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&sn(n,!!o.multiple,a,!1)}}}var Wf=!1;function Pg(n,a,o){if(Wf)return n(a,o);Wf=!0;try{var u=n(a);return u}finally{if(Wf=!1,(zs!==null||Hs!==null)&&(yc(),zs&&(a=zs,n=Hs,Hs=zs=null,Og(a),n)))for(a=0;a<n.length;a++)Og(n[a])}}function il(n,a){var o=n.stateNode;if(o===null)return null;var u=o[rn]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=!1;if(Ta)try{var al={};Object.defineProperty(al,"passive",{get:function(){qf=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{qf=!1}var ir=null,Yf=null,Bu=null;function Ig(){if(Bu)return Bu;var n,a=Yf,o=a.length,u,d="value"in ir?ir.value:ir.textContent,g=d.length;for(n=0;n<o&&a[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&a[o-u]===d[g-u];u++);return Bu=d.slice(n,1<u?1-u:void 0)}function Fu(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function zu(){return!0}function Bg(){return!1}function ai(n){function a(o,u,d,g,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(g):g[D]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zu:Bg,this.isPropagationStopped=Bg,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zu)},persist:function(){},isPersistent:zu}),a}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=ai(Yr),rl=m({},Yr,{view:0,detail:0}),PM=ai(rl),jf,Zf,sl,Gu=m({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==sl&&(sl&&n.type==="mousemove"?(jf=n.screenX-sl.screenX,Zf=n.screenY-sl.screenY):Zf=jf=0,sl=n),jf)},movementY:function(n){return"movementY"in n?n.movementY:Zf}}),Fg=ai(Gu),IM=m({},Gu,{dataTransfer:0}),BM=ai(IM),FM=m({},rl,{relatedTarget:0}),Kf=ai(FM),zM=m({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),HM=ai(zM),GM=m({},Yr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),VM=ai(GM),kM=m({},Yr,{data:0}),zg=ai(kM),XM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=qM[n])?!!a[n]:!1}function Qf(){return YM}var jM=m({},rl,{key:function(n){if(n.key){var a=XM[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Fu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?WM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qf,charCode:function(n){return n.type==="keypress"?Fu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ZM=ai(jM),KM=m({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=ai(KM),QM=m({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qf}),JM=ai(QM),$M=m({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=ai($M),tE=m({},Gu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=ai(tE),iE=m({},Yr,{newState:0,oldState:0}),aE=ai(iE),rE=[9,13,27,32],Jf=Ta&&"CompositionEvent"in window,ol=null;Ta&&"documentMode"in document&&(ol=document.documentMode);var sE=Ta&&"TextEvent"in window&&!ol,Gg=Ta&&(!Jf||ol&&8<ol&&11>=ol),Vg=" ",kg=!1;function Xg(n,a){switch(n){case"keyup":return rE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function oE(n,a){switch(n){case"compositionend":return Wg(a);case"keypress":return a.which!==32?null:(kg=!0,Vg);case"textInput":return n=a.data,n===Vg&&kg?null:n;default:return null}}function lE(n,a){if(Gs)return n==="compositionend"||!Jf&&Xg(n,a)?(n=Ig(),Bu=Yf=ir=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gg&&a.locale!=="ko"?null:a.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!uE[n.type]:a==="textarea"}function Yg(n,a,o,u){zs?Hs?Hs.push(u):Hs=[u]:zs=u,a=Rc(a,"onChange"),0<a.length&&(o=new Hu("onChange","change",null,o,u),n.push({event:o,listeners:a}))}var ll=null,ul=null;function cE(n){R0(n,0)}function Vu(n){var a=qr(n);if(Vn(a))return n}function jg(n,a){if(n==="change")return a}var Zg=!1;if(Ta){var $f;if(Ta){var eh="oninput"in document;if(!eh){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),eh=typeof Kg.oninput=="function"}$f=eh}else $f=!1;Zg=$f&&(!document.documentMode||9<document.documentMode)}function Qg(){ll&&(ll.detachEvent("onpropertychange",Jg),ul=ll=null)}function Jg(n){if(n.propertyName==="value"&&Vu(ul)){var a=[];Yg(a,ul,n,Xf(n)),Pg(cE,a)}}function fE(n,a,o){n==="focusin"?(Qg(),ll=a,ul=o,ll.attachEvent("onpropertychange",Jg)):n==="focusout"&&Qg()}function hE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vu(ul)}function dE(n,a){if(n==="click")return Vu(a)}function pE(n,a){if(n==="input"||n==="change")return Vu(a)}function mE(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var pi=typeof Object.is=="function"?Object.is:mE;function cl(n,a){if(pi(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!xt.call(a,d)||!pi(n[d],a[d]))return!1}return!0}function $g(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function e_(n,a){var o=$g(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=a&&u>=a)return{node:o,offset:a-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=$g(o)}}function t_(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?t_(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function n_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=ji(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=ji(n.document)}return a}function th(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var gE=Ta&&"documentMode"in document&&11>=document.documentMode,Vs=null,nh=null,fl=null,ih=!1;function i_(n,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ih||Vs==null||Vs!==ji(u)||(u=Vs,"selectionStart"in u&&th(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fl&&cl(fl,u)||(fl=u,u=Rc(nh,"onSelect"),0<u.length&&(a=new Hu("onSelect","select",null,a,o),n.push({event:a,listeners:u}),a.target=Vs)))}function jr(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var ks={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},ah={},a_={};Ta&&(a_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Zr(n){if(ah[n])return ah[n];if(!ks[n])return n;var a=ks[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in a_)return ah[n]=a[o];return n}var r_=Zr("animationend"),s_=Zr("animationiteration"),o_=Zr("animationstart"),_E=Zr("transitionrun"),vE=Zr("transitionstart"),xE=Zr("transitioncancel"),l_=Zr("transitionend"),u_=new Map,rh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rh.push("scrollEnd");function Zi(n,a){u_.set(n,a),N(a,[n])}var c_=new WeakMap;function Li(n,a){if(typeof n=="object"&&n!==null){var o=c_.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Ht(a)},c_.set(n,a),a)}return{value:n,source:a,stack:Ht(a)}}var Ni=[],Xs=0,sh=0;function ku(){for(var n=Xs,a=sh=Xs=0;a<n;){var o=Ni[a];Ni[a++]=null;var u=Ni[a];Ni[a++]=null;var d=Ni[a];Ni[a++]=null;var g=Ni[a];if(Ni[a++]=null,u!==null&&d!==null){var T=u.pending;T===null?d.next=d:(d.next=T.next,T.next=d),u.pending=d}g!==0&&f_(o,d,g)}}function Xu(n,a,o,u){Ni[Xs++]=n,Ni[Xs++]=a,Ni[Xs++]=o,Ni[Xs++]=u,sh|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function oh(n,a,o,u){return Xu(n,a,o,u),Wu(n)}function Ws(n,a){return Xu(n,null,null,a),Wu(n)}function f_(n,a,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(d=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,d&&a!==null&&(d=31-ze(o),n=g.hiddenUpdates,u=n[d],u===null?n[d]=[a]:u.push(a),a.lane=o|536870912),g):null}function Wu(n){if(50<Il)throw Il=0,dd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var qs={};function SE(n,a,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,a,o,u){return new SE(n,a,o,u)}function lh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Aa(n,a){var o=n.alternate;return o===null?(o=mi(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function h_(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function qu(n,a,o,u,d,g){var T=0;if(u=n,typeof n=="function")lh(n)&&(T=1);else if(typeof n=="string")T=MT(n,o,be.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=mi(31,o,a,d),n.elementType=R,n.lanes=g,n;case E:return Kr(o.children,d,g,a);case M:T=8,d|=24;break;case y:return n=mi(12,o,a,d|2),n.elementType=y,n.lanes=g,n;case U:return n=mi(13,o,a,d),n.elementType=U,n.lanes=g,n;case P:return n=mi(19,o,a,d),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case C:T=10;break e;case A:T=9;break e;case b:T=11;break e;case I:T=14;break e;case H:T=16,u=null;break e}T=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=mi(T,o,a,d),a.elementType=n,a.type=u,a.lanes=g,a}function Kr(n,a,o,u){return n=mi(7,n,u,a),n.lanes=o,n}function uh(n,a,o){return n=mi(6,n,null,a),n.lanes=o,n}function ch(n,a,o){return a=mi(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ys=[],js=0,Yu=null,ju=0,Oi=[],Pi=0,Qr=null,ba=1,Ra="";function Jr(n,a){Ys[js++]=ju,Ys[js++]=Yu,Yu=n,ju=a}function d_(n,a,o){Oi[Pi++]=ba,Oi[Pi++]=Ra,Oi[Pi++]=Qr,Qr=n;var u=ba;n=Ra;var d=32-ze(u)-1;u&=~(1<<d),o+=1;var g=32-ze(a)+d;if(30<g){var T=d-d%5;g=(u&(1<<T)-1).toString(32),u>>=T,d-=T,ba=1<<32-ze(a)+d|o<<d|u,Ra=g+n}else ba=1<<g|o<<d|u,Ra=n}function fh(n){n.return!==null&&(Jr(n,1),d_(n,1,0))}function hh(n){for(;n===Yu;)Yu=Ys[--js],Ys[js]=null,ju=Ys[--js],Ys[js]=null;for(;n===Qr;)Qr=Oi[--Pi],Oi[Pi]=null,Ra=Oi[--Pi],Oi[Pi]=null,ba=Oi[--Pi],Oi[Pi]=null}var $n=null,on=null,Pt=!1,$r=null,la=!1,dh=Error(i(519));function es(n){var a=Error(i(418,""));throw pl(Li(a,n)),dh}function p_(n){var a=n.stateNode,o=n.type,u=n.memoizedProps;switch(a[Mn]=n,a[rn]=u,o){case"dialog":Mt("cancel",a),Mt("close",a);break;case"iframe":case"object":case"embed":Mt("load",a);break;case"video":case"audio":for(o=0;o<Fl.length;o++)Mt(Fl[o],a);break;case"source":Mt("error",a);break;case"img":case"image":case"link":Mt("error",a),Mt("load",a);break;case"details":Mt("toggle",a);break;case"input":Mt("invalid",a),Jn(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),St(a);break;case"select":Mt("invalid",a);break;case"textarea":Mt("invalid",a),Fs(a,u.value,u.defaultValue,u.children),St(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||U0(a.textContent,o)?(u.popover!=null&&(Mt("beforetoggle",a),Mt("toggle",a)),u.onScroll!=null&&Mt("scroll",a),u.onScrollEnd!=null&&Mt("scrollend",a),u.onClick!=null&&(a.onclick=Cc),a=!0):a=!1,a||es(n)}function m_(n){for($n=n.return;$n;)switch($n.tag){case 5:case 13:la=!1;return;case 27:case 3:la=!0;return;default:$n=$n.return}}function hl(n){if(n!==$n)return!1;if(!Pt)return m_(n),Pt=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||wd(n.type,n.memoizedProps)),o=!o),o&&on&&es(n),m_(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){on=Qi(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}on=null}}else a===27?(a=on,xr(n.type)?(n=Nd,Nd=null,on=n):on=a):on=$n?Qi(n.stateNode.nextSibling):null;return!0}function dl(){on=$n=null,Pt=!1}function g_(){var n=$r;return n!==null&&(oi===null?oi=n:oi.push.apply(oi,n),$r=null),n}function pl(n){$r===null?$r=[n]:$r.push(n)}var ph=Q(null),ts=null,Ca=null;function ar(n,a,o){ye(ph,a._currentValue),a._currentValue=o}function wa(n){n._currentValue=ph.current,pe(ph)}function mh(n,a,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===o)break;n=n.return}}function gh(n,a,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var g=d.dependencies;if(g!==null){var T=d.child;g=g.firstContext;e:for(;g!==null;){var D=g;g=d;for(var G=0;G<a.length;G++)if(D.context===a[G]){g.lanes|=o,D=g.alternate,D!==null&&(D.lanes|=o),mh(g.return,o,n),u||(T=null);break e}g=D.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(i(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),mh(T,o,n),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function ml(n,a,o,u){n=null;for(var d=a,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var D=d.type;pi(d.pendingProps.value,T.value)||(n!==null?n.push(D):n=[D])}}else if(d===ge.current){if(T=d.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Xl):n=[Xl])}d=d.return}n!==null&&gh(a,n,o,u),a.flags|=262144}function Zu(n){for(n=n.firstContext;n!==null;){if(!pi(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ns(n){ts=n,Ca=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return __(ts,n)}function Ku(n,a){return ts===null&&ns(n),__(n,a)}function __(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ca===null){if(n===null)throw Error(i(308));Ca=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ca=Ca.next=a;return o}var yE=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},ME=r.unstable_scheduleCallback,EE=r.unstable_NormalPriority,En={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _h(){return{controller:new yE,data:new Map,refCount:0}}function gl(n){n.refCount--,n.refCount===0&&ME(EE,function(){n.controller.abort()})}var _l=null,vh=0,Zs=0,Ks=null;function TE(n,a){if(_l===null){var o=_l=[];vh=0,Zs=Sd(),Ks={status:"pending",value:void 0,then:function(u){o.push(u)}}}return vh++,a.then(v_,v_),a}function v_(){if(--vh===0&&_l!==null){Ks!==null&&(Ks.status="fulfilled");var n=_l;_l=null,Zs=0,Ks=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function AE(n,a){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var d=0;d<o.length;d++)(0,o[d])(a)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var x_=z.S;z.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&TE(n,a),x_!==null&&x_(n,a)};var is=Q(null);function xh(){var n=is.current;return n!==null?n:Zt.pooledCache}function Qu(n,a){a===null?ye(is,is.current):ye(is,a.pool)}function S_(){var n=xh();return n===null?null:{parent:En._currentValue,pool:n}}var vl=Error(i(460)),y_=Error(i(474)),Ju=Error(i(542)),Sh={then:function(){}};function M_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function $u(){}function E_(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then($u,$u),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,A_(n),n;default:if(typeof a.status=="string")a.then($u,$u);else{if(n=Zt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=u}},function(u){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,A_(n),n}throw xl=a,vl}}var xl=null;function T_(){if(xl===null)throw Error(i(459));var n=xl;return xl=null,n}function A_(n){if(n===vl||n===Ju)throw Error(i(483))}var rr=!1;function yh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mh(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function sr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function or(n,a,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var d=u.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a,a=Wu(n),f_(n,null,o),a}return Xu(n,u,a,o),Wu(n)}function Sl(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,Xe(n,o)}}function Eh(n,a){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?d=g=a:g=g.next=a}else d=g=a;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Th=!1;function yl(){if(Th){var n=Ks;if(n!==null)throw n}}function Ml(n,a,o,u){Th=!1;var d=n.updateQueue;rr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var G=D,te=G.next;G.next=null,T===null?g=te:T.next=te,T=G;var de=n.alternate;de!==null&&(de=de.updateQueue,D=de.lastBaseUpdate,D!==T&&(D===null?de.firstBaseUpdate=te:D.next=te,de.lastBaseUpdate=G))}if(g!==null){var xe=d.baseState;T=0,de=te=G=null,D=g;do{var ae=D.lane&-536870913,se=ae!==D.lane;if(se?(Rt&ae)===ae:(u&ae)===ae){ae!==0&&ae===Zs&&(Th=!0),de!==null&&(de=de.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var rt=n,nt=D;ae=a;var kt=o;switch(nt.tag){case 1:if(rt=nt.payload,typeof rt=="function"){xe=rt.call(kt,xe,ae);break e}xe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=nt.payload,ae=typeof rt=="function"?rt.call(kt,xe,ae):rt,ae==null)break e;xe=m({},xe,ae);break e;case 2:rr=!0}}ae=D.callback,ae!==null&&(n.flags|=64,se&&(n.flags|=8192),se=d.callbacks,se===null?d.callbacks=[ae]:se.push(ae))}else se={lane:ae,tag:D.tag,payload:D.payload,callback:D.callback,next:null},de===null?(te=de=se,G=xe):de=de.next=se,T|=ae;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;se=D,D=se.next,se.next=null,d.lastBaseUpdate=se,d.shared.pending=null}}while(!0);de===null&&(G=xe),d.baseState=G,d.firstBaseUpdate=te,d.lastBaseUpdate=de,g===null&&(d.shared.lanes=0),mr|=T,n.lanes=T,n.memoizedState=xe}}function b_(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function R_(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)b_(o[n],a)}var Qs=Q(null),ec=Q(0);function C_(n,a){n=Ia,ye(ec,n),ye(Qs,a),Ia=n|a.baseLanes}function Ah(){ye(ec,Ia),ye(Qs,Qs.current)}function bh(){Ia=ec.current,pe(Qs),pe(ec)}var lr=0,gt=null,Gt=null,gn=null,tc=!1,Js=!1,as=!1,nc=0,El=0,$s=null,bE=0;function cn(){throw Error(i(321))}function Rh(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!pi(n[o],a[o]))return!1;return!0}function Ch(n,a,o,u,d,g){return lr=g,gt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=n===null||n.memoizedState===null?fv:hv,as=!1,g=o(u,d),as=!1,Js&&(g=D_(a,o,u,d)),w_(n),g}function w_(n){z.H=lc;var a=Gt!==null&&Gt.next!==null;if(lr=0,gn=Gt=gt=null,tc=!1,El=0,$s=null,a)throw Error(i(300));n===null||Dn||(n=n.dependencies,n!==null&&Zu(n)&&(Dn=!0))}function D_(n,a,o,u){gt=n;var d=0;do{if(Js&&($s=null),El=0,Js=!1,25<=d)throw Error(i(301));if(d+=1,gn=Gt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}z.H=NE,g=a(o,u)}while(Js);return g}function RE(){var n=z.H,a=n.useState()[0];return a=typeof a.then=="function"?Tl(a):a,n=n.useState()[0],(Gt!==null?Gt.memoizedState:null)!==n&&(gt.flags|=1024),a}function wh(){var n=nc!==0;return nc=0,n}function Dh(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function Uh(n){if(tc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}tc=!1}lr=0,gn=Gt=gt=null,Js=!1,El=nc=0,$s=null}function ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?gt.memoizedState=gn=n:gn=gn.next=n,gn}function _n(){if(Gt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var a=gn===null?gt.memoizedState:gn.next;if(a!==null)gn=a,Gt=n;else{if(n===null)throw gt.alternate===null?Error(i(467)):Error(i(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},gn===null?gt.memoizedState=gn=n:gn=gn.next=n}return gn}function Lh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tl(n){var a=El;return El+=1,$s===null&&($s=[]),n=E_($s,n,a),a=gt,(gn===null?a.memoizedState:gn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?fv:hv),n}function ic(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Tl(n);if(n.$$typeof===C)return Xn(n)}throw Error(i(438,String(n)))}function Nh(n){var a=null,o=gt.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=gt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=Lh(),gt.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),u=0;u<n;u++)o[u]=L;return a.index++,o}function Da(n,a){return typeof a=="function"?a(n):a}function ac(n){var a=_n();return Oh(a,Gt,n)}function Oh(n,a,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,g=u.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}a.baseQueue=d=g,u.pending=null}if(g=n.baseState,d===null)n.memoizedState=g;else{a=d.next;var D=T=null,G=null,te=a,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(Rt&xe)===xe:(lr&xe)===xe){var ae=te.revertLane;if(ae===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Zs&&(de=!0);else if((lr&ae)===ae){te=te.next,ae===Zs&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(D=G=xe,T=g):G=G.next=xe,gt.lanes|=ae,mr|=ae;xe=te.action,as&&o(g,xe),g=te.hasEagerState?te.eagerState:o(g,xe)}else ae={lane:xe,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(D=G=ae,T=g):G=G.next=ae,gt.lanes|=xe,mr|=xe;te=te.next}while(te!==null&&te!==a);if(G===null?T=g:G.next=D,!pi(g,n.memoizedState)&&(Dn=!0,de&&(o=Ks,o!==null)))throw o;n.memoizedState=g,n.baseState=T,n.baseQueue=G,u.lastRenderedState=g}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Ph(n){var a=_n(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,g=a.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);pi(g,a.memoizedState)||(Dn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,u]}function U_(n,a,o){var u=gt,d=_n(),g=Pt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var T=!pi((Gt||d).memoizedState,o);T&&(d.memoizedState=o,Dn=!0),d=d.queue;var D=O_.bind(null,u,d,n);if(Al(2048,8,D,[n]),d.getSnapshot!==a||T||gn!==null&&gn.memoizedState.tag&1){if(u.flags|=2048,eo(9,rc(),N_.bind(null,u,d,o,a),null),Zt===null)throw Error(i(349));g||(lr&124)!==0||L_(u,a,o)}return o}function L_(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=gt.updateQueue,a===null?(a=Lh(),gt.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function N_(n,a,o,u){a.value=o,a.getSnapshot=u,P_(a)&&I_(n)}function O_(n,a,o){return o(function(){P_(a)&&I_(n)})}function P_(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!pi(n,o)}catch{return!0}}function I_(n){var a=Ws(n,2);a!==null&&Si(a,n,2)}function Ih(n){var a=ri();if(typeof n=="function"){var o=n;if(n=o(),as){fe(!0);try{o()}finally{fe(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},a}function B_(n,a,o,u){return n.baseState=o,Oh(n,Gt,typeof u=="function"?u:Da)}function CE(n,a,o,u,d){if(oc(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};z.T!==null?o(!0):g.isTransition=!1,u(g),o=a.pending,o===null?(g.next=a.pending=g,F_(a,g)):(g.next=o.next,a.pending=o.next=g)}}function F_(n,a){var o=a.action,u=a.payload,d=n.state;if(a.isTransition){var g=z.T,T={};z.T=T;try{var D=o(d,u),G=z.S;G!==null&&G(T,D),z_(n,a,D)}catch(te){Bh(n,a,te)}finally{z.T=g}}else try{g=o(d,u),z_(n,a,g)}catch(te){Bh(n,a,te)}}function z_(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){H_(n,a,u)},function(u){return Bh(n,a,u)}):H_(n,a,o)}function H_(n,a,o){a.status="fulfilled",a.value=o,G_(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,F_(n,o)))}function Bh(n,a,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,G_(a),a=a.next;while(a!==u)}n.action=null}function G_(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function V_(n,a){return a}function k_(n,a){if(Pt){var o=Zt.formState;if(o!==null){e:{var u=gt;if(Pt){if(on){t:{for(var d=on,g=la;d.nodeType!==8;){if(!g){d=null;break t}if(d=Qi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){on=Qi(d.nextSibling),u=d.data==="F!";break e}}es(u)}u=!1}u&&(a=o[0])}}return o=ri(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:V_,lastRenderedState:a},o.queue=u,o=lv.bind(null,gt,u),u.dispatch=o,u=Ih(!1),g=Vh.bind(null,gt,!1,u.queue),u=ri(),d={state:a,dispatch:null,action:n,pending:null},u.queue=d,o=CE.bind(null,gt,d,g,o),d.dispatch=o,u.memoizedState=n,[a,o,!1]}function X_(n){var a=_n();return W_(a,Gt,n)}function W_(n,a,o){if(a=Oh(n,a,V_)[0],n=ac(Da)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=Tl(a)}catch(T){throw T===vl?Ju:T}else u=a;a=_n();var d=a.queue,g=d.dispatch;return o!==a.memoizedState&&(gt.flags|=2048,eo(9,rc(),wE.bind(null,d,o),null)),[u,g,n]}function wE(n,a){n.action=a}function q_(n){var a=_n(),o=Gt;if(o!==null)return W_(a,o,n);_n(),a=a.memoizedState,o=_n();var u=o.queue.dispatch;return o.memoizedState=n,[a,u,!1]}function eo(n,a,o,u){return n={tag:n,create:o,deps:u,inst:a,next:null},a=gt.updateQueue,a===null&&(a=Lh(),gt.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,a.lastEffect=n),n}function rc(){return{destroy:void 0,resource:void 0}}function Y_(){return _n().memoizedState}function sc(n,a,o,u){var d=ri();u=u===void 0?null:u,gt.flags|=n,d.memoizedState=eo(1|a,rc(),o,u)}function Al(n,a,o,u){var d=_n();u=u===void 0?null:u;var g=d.memoizedState.inst;Gt!==null&&u!==null&&Rh(u,Gt.memoizedState.deps)?d.memoizedState=eo(a,g,o,u):(gt.flags|=n,d.memoizedState=eo(1|a,g,o,u))}function j_(n,a){sc(8390656,8,n,a)}function Z_(n,a){Al(2048,8,n,a)}function K_(n,a){return Al(4,2,n,a)}function Q_(n,a){return Al(4,4,n,a)}function J_(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function $_(n,a,o){o=o!=null?o.concat([n]):null,Al(4,4,J_.bind(null,a,n),o)}function Fh(){}function ev(n,a){var o=_n();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&Rh(a,u[1])?u[0]:(o.memoizedState=[n,a],n)}function tv(n,a){var o=_n();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&Rh(a,u[1]))return u[0];if(u=n(),as){fe(!0);try{n()}finally{fe(!1)}}return o.memoizedState=[u,a],u}function zh(n,a,o){return o===void 0||(lr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=a0(),gt.lanes|=n,mr|=n,o)}function nv(n,a,o,u){return pi(o,a)?o:Qs.current!==null?(n=zh(n,o,u),pi(n,a)||(Dn=!0),n):(lr&42)===0?(Dn=!0,n.memoizedState=o):(n=a0(),gt.lanes|=n,mr|=n,a)}function iv(n,a,o,u,d){var g=q.p;q.p=g!==0&&8>g?g:8;var T=z.T,D={};z.T=D,Vh(n,!1,a,o);try{var G=d(),te=z.S;if(te!==null&&te(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=AE(G,u);bl(n,a,de,xi(n))}else bl(n,a,u,xi(n))}catch(xe){bl(n,a,{then:function(){},status:"rejected",reason:xe},xi())}finally{q.p=g,z.T=T}}function DE(){}function Hh(n,a,o,u){if(n.tag!==5)throw Error(i(476));var d=av(n).queue;iv(n,d,a,k,o===null?DE:function(){return rv(n),o(u)})}function av(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:k},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function rv(n){var a=av(n).next.queue;bl(n,a,{},xi())}function Gh(){return Xn(Xl)}function sv(){return _n().memoizedState}function ov(){return _n().memoizedState}function UE(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=xi();n=sr(o);var u=or(a,n,o);u!==null&&(Si(u,a,o),Sl(u,a,o)),a={cache:_h()},n.payload=a;return}a=a.return}}function LE(n,a,o){var u=xi();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},oc(n)?uv(a,o):(o=oh(n,a,o,u),o!==null&&(Si(o,n,u),cv(o,a,u)))}function lv(n,a,o){var u=xi();bl(n,a,o,u)}function bl(n,a,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(oc(n))uv(a,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var T=a.lastRenderedState,D=g(T,o);if(d.hasEagerState=!0,d.eagerState=D,pi(D,T))return Xu(n,a,d,0),Zt===null&&ku(),!1}catch{}finally{}if(o=oh(n,a,d,u),o!==null)return Si(o,n,u),cv(o,a,u),!0}return!1}function Vh(n,a,o,u){if(u={lane:2,revertLane:Sd(),action:u,hasEagerState:!1,eagerState:null,next:null},oc(n)){if(a)throw Error(i(479))}else a=oh(n,o,u,2),a!==null&&Si(a,n,2)}function oc(n){var a=n.alternate;return n===gt||a!==null&&a===gt}function uv(n,a){Js=tc=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function cv(n,a,o){if((o&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,Xe(n,o)}}var lc={readContext:Xn,use:ic,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn},fv={readContext:Xn,use:ic,useCallback:function(n,a){return ri().memoizedState=[n,a===void 0?null:a],n},useContext:Xn,useEffect:j_,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,sc(4194308,4,J_.bind(null,a,n),o)},useLayoutEffect:function(n,a){return sc(4194308,4,n,a)},useInsertionEffect:function(n,a){sc(4,2,n,a)},useMemo:function(n,a){var o=ri();a=a===void 0?null:a;var u=n();if(as){fe(!0);try{n()}finally{fe(!1)}}return o.memoizedState=[u,a],u},useReducer:function(n,a,o){var u=ri();if(o!==void 0){var d=o(a);if(as){fe(!0);try{o(a)}finally{fe(!1)}}}else d=a;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=LE.bind(null,gt,n),[u.memoizedState,n]},useRef:function(n){var a=ri();return n={current:n},a.memoizedState=n},useState:function(n){n=Ih(n);var a=n.queue,o=lv.bind(null,gt,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:Fh,useDeferredValue:function(n,a){var o=ri();return zh(o,n,a)},useTransition:function(){var n=Ih(!1);return n=iv.bind(null,gt,n.queue,!0,!1),ri().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var u=gt,d=ri();if(Pt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),Zt===null)throw Error(i(349));(Rt&124)!==0||L_(u,a,o)}d.memoizedState=o;var g={value:o,getSnapshot:a};return d.queue=g,j_(O_.bind(null,u,g,n),[n]),u.flags|=2048,eo(9,rc(),N_.bind(null,u,g,o,a),null),o},useId:function(){var n=ri(),a=Zt.identifierPrefix;if(Pt){var o=Ra,u=ba;o=(u&~(1<<32-ze(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=nc++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=bE++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Gh,useFormState:k_,useActionState:k_,useOptimistic:function(n){var a=ri();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Vh.bind(null,gt,!0,o),o.dispatch=a,[n,a]},useMemoCache:Nh,useCacheRefresh:function(){return ri().memoizedState=UE.bind(null,gt)}},hv={readContext:Xn,use:ic,useCallback:ev,useContext:Xn,useEffect:Z_,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tv,useReducer:ac,useRef:Y_,useState:function(){return ac(Da)},useDebugValue:Fh,useDeferredValue:function(n,a){var o=_n();return nv(o,Gt.memoizedState,n,a)},useTransition:function(){var n=ac(Da)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:Tl(n),a]},useSyncExternalStore:U_,useId:sv,useHostTransitionStatus:Gh,useFormState:X_,useActionState:X_,useOptimistic:function(n,a){var o=_n();return B_(o,Gt,n,a)},useMemoCache:Nh,useCacheRefresh:ov},NE={readContext:Xn,use:ic,useCallback:ev,useContext:Xn,useEffect:Z_,useImperativeHandle:$_,useInsertionEffect:K_,useLayoutEffect:Q_,useMemo:tv,useReducer:Ph,useRef:Y_,useState:function(){return Ph(Da)},useDebugValue:Fh,useDeferredValue:function(n,a){var o=_n();return Gt===null?zh(o,n,a):nv(o,Gt.memoizedState,n,a)},useTransition:function(){var n=Ph(Da)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:Tl(n),a]},useSyncExternalStore:U_,useId:sv,useHostTransitionStatus:Gh,useFormState:q_,useActionState:q_,useOptimistic:function(n,a){var o=_n();return Gt!==null?B_(o,Gt,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Nh,useCacheRefresh:ov},to=null,Rl=0;function uc(n){var a=Rl;return Rl+=1,to===null&&(to=[]),E_(to,n,a)}function Cl(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function cc(n,a){throw a.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function dv(n){var a=n._init;return a(n._payload)}function pv(n){function a(Z,W){if(n){var $=Z.deletions;$===null?(Z.deletions=[W],Z.flags|=16):$.push(W)}}function o(Z,W){if(!n)return null;for(;W!==null;)a(Z,W),W=W.sibling;return null}function u(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function d(Z,W){return Z=Aa(Z,W),Z.index=0,Z.sibling=null,Z}function g(Z,W,$){return Z.index=$,n?($=Z.alternate,$!==null?($=$.index,$<W?(Z.flags|=67108866,W):$):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=67108866),Z}function D(Z,W,$,me){return W===null||W.tag!==6?(W=uh($,Z.mode,me),W.return=Z,W):(W=d(W,$),W.return=Z,W)}function G(Z,W,$,me){var ke=$.type;return ke===E?de(Z,W,$.props.children,me,$.key):W!==null&&(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&dv(ke)===W.type)?(W=d(W,$.props),Cl(W,$),W.return=Z,W):(W=qu($.type,$.key,$.props,null,Z.mode,me),Cl(W,$),W.return=Z,W)}function te(Z,W,$,me){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=ch($,Z.mode,me),W.return=Z,W):(W=d(W,$.children||[]),W.return=Z,W)}function de(Z,W,$,me,ke){return W===null||W.tag!==7?(W=Kr($,Z.mode,me,ke),W.return=Z,W):(W=d(W,$),W.return=Z,W)}function xe(Z,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=uh(""+W,Z.mode,$),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return $=qu(W.type,W.key,W.props,null,Z.mode,$),Cl($,W),$.return=Z,$;case S:return W=ch(W,Z.mode,$),W.return=Z,W;case H:var me=W._init;return W=me(W._payload),xe(Z,W,$)}if(ee(W)||X(W))return W=Kr(W,Z.mode,$,null),W.return=Z,W;if(typeof W.then=="function")return xe(Z,uc(W),$);if(W.$$typeof===C)return xe(Z,Ku(Z,W),$);cc(Z,W)}return null}function ae(Z,W,$,me){var ke=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:D(Z,W,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===ke?G(Z,W,$,me):null;case S:return $.key===ke?te(Z,W,$,me):null;case H:return ke=$._init,$=ke($._payload),ae(Z,W,$,me)}if(ee($)||X($))return ke!==null?null:de(Z,W,$,me,null);if(typeof $.then=="function")return ae(Z,W,uc($),me);if($.$$typeof===C)return ae(Z,W,Ku(Z,$),me);cc(Z,$)}return null}function se(Z,W,$,me,ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Z=Z.get($)||null,D(W,Z,""+me,ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case v:return Z=Z.get(me.key===null?$:me.key)||null,G(W,Z,me,ke);case S:return Z=Z.get(me.key===null?$:me.key)||null,te(W,Z,me,ke);case H:var _t=me._init;return me=_t(me._payload),se(Z,W,$,me,ke)}if(ee(me)||X(me))return Z=Z.get($)||null,de(W,Z,me,ke,null);if(typeof me.then=="function")return se(Z,W,$,uc(me),ke);if(me.$$typeof===C)return se(Z,W,$,Ku(W,me),ke);cc(W,me)}return null}function rt(Z,W,$,me){for(var ke=null,_t=null,Qe=W,at=W=0,Ln=null;Qe!==null&&at<$.length;at++){Qe.index>at?(Ln=Qe,Qe=null):Ln=Qe.sibling;var Ut=ae(Z,Qe,$[at],me);if(Ut===null){Qe===null&&(Qe=Ln);break}n&&Qe&&Ut.alternate===null&&a(Z,Qe),W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut,Qe=Ln}if(at===$.length)return o(Z,Qe),Pt&&Jr(Z,at),ke;if(Qe===null){for(;at<$.length;at++)Qe=xe(Z,$[at],me),Qe!==null&&(W=g(Qe,W,at),_t===null?ke=Qe:_t.sibling=Qe,_t=Qe);return Pt&&Jr(Z,at),ke}for(Qe=u(Qe);at<$.length;at++)Ln=se(Qe,Z,at,$[at],me),Ln!==null&&(n&&Ln.alternate!==null&&Qe.delete(Ln.key===null?at:Ln.key),W=g(Ln,W,at),_t===null?ke=Ln:_t.sibling=Ln,_t=Ln);return n&&Qe.forEach(function(Tr){return a(Z,Tr)}),Pt&&Jr(Z,at),ke}function nt(Z,W,$,me){if($==null)throw Error(i(151));for(var ke=null,_t=null,Qe=W,at=W=0,Ln=null,Ut=$.next();Qe!==null&&!Ut.done;at++,Ut=$.next()){Qe.index>at?(Ln=Qe,Qe=null):Ln=Qe.sibling;var Tr=ae(Z,Qe,Ut.value,me);if(Tr===null){Qe===null&&(Qe=Ln);break}n&&Qe&&Tr.alternate===null&&a(Z,Qe),W=g(Tr,W,at),_t===null?ke=Tr:_t.sibling=Tr,_t=Tr,Qe=Ln}if(Ut.done)return o(Z,Qe),Pt&&Jr(Z,at),ke;if(Qe===null){for(;!Ut.done;at++,Ut=$.next())Ut=xe(Z,Ut.value,me),Ut!==null&&(W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut);return Pt&&Jr(Z,at),ke}for(Qe=u(Qe);!Ut.done;at++,Ut=$.next())Ut=se(Qe,Z,at,Ut.value,me),Ut!==null&&(n&&Ut.alternate!==null&&Qe.delete(Ut.key===null?at:Ut.key),W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut);return n&&Qe.forEach(function(OT){return a(Z,OT)}),Pt&&Jr(Z,at),ke}function kt(Z,W,$,me){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var ke=$.key;W!==null;){if(W.key===ke){if(ke=$.type,ke===E){if(W.tag===7){o(Z,W.sibling),me=d(W,$.props.children),me.return=Z,Z=me;break e}}else if(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&dv(ke)===W.type){o(Z,W.sibling),me=d(W,$.props),Cl(me,$),me.return=Z,Z=me;break e}o(Z,W);break}else a(Z,W);W=W.sibling}$.type===E?(me=Kr($.props.children,Z.mode,me,$.key),me.return=Z,Z=me):(me=qu($.type,$.key,$.props,null,Z.mode,me),Cl(me,$),me.return=Z,Z=me)}return T(Z);case S:e:{for(ke=$.key;W!==null;){if(W.key===ke)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(Z,W.sibling),me=d(W,$.children||[]),me.return=Z,Z=me;break e}else{o(Z,W);break}else a(Z,W);W=W.sibling}me=ch($,Z.mode,me),me.return=Z,Z=me}return T(Z);case H:return ke=$._init,$=ke($._payload),kt(Z,W,$,me)}if(ee($))return rt(Z,W,$,me);if(X($)){if(ke=X($),typeof ke!="function")throw Error(i(150));return $=ke.call($),nt(Z,W,$,me)}if(typeof $.then=="function")return kt(Z,W,uc($),me);if($.$$typeof===C)return kt(Z,W,Ku(Z,$),me);cc(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(o(Z,W.sibling),me=d(W,$),me.return=Z,Z=me):(o(Z,W),me=uh($,Z.mode,me),me.return=Z,Z=me),T(Z)):o(Z,W)}return function(Z,W,$,me){try{Rl=0;var ke=kt(Z,W,$,me);return to=null,ke}catch(Qe){if(Qe===vl||Qe===Ju)throw Qe;var _t=mi(29,Qe,null,Z.mode);return _t.lanes=me,_t.return=Z,_t}finally{}}}var no=pv(!0),mv=pv(!1),Ii=Q(null),ua=null;function ur(n){var a=n.alternate;ye(Tn,Tn.current&1),ye(Ii,n),ua===null&&(a===null||Qs.current!==null||a.memoizedState!==null)&&(ua=n)}function gv(n){if(n.tag===22){if(ye(Tn,Tn.current),ye(Ii,n),ua===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(ua=n)}}else cr()}function cr(){ye(Tn,Tn.current),ye(Ii,Ii.current)}function Ua(n){pe(Ii),ua===n&&(ua=null),pe(Tn)}var Tn=Q(0);function fc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ld(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function kh(n,a,o,u){a=n.memoizedState,o=o(u,a),o=o==null?a:m({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xh={enqueueSetState:function(n,a,o){n=n._reactInternals;var u=xi(),d=sr(u);d.payload=a,o!=null&&(d.callback=o),a=or(n,d,u),a!==null&&(Si(a,n,u),Sl(a,n,u))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var u=xi(),d=sr(u);d.tag=1,d.payload=a,o!=null&&(d.callback=o),a=or(n,d,u),a!==null&&(Si(a,n,u),Sl(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=xi(),u=sr(o);u.tag=2,a!=null&&(u.callback=a),a=or(n,u,o),a!==null&&(Si(a,n,o),Sl(a,n,o))}};function _v(n,a,o,u,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,T):a.prototype&&a.prototype.isPureReactComponent?!cl(o,u)||!cl(d,g):!0}function vv(n,a,o,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==n&&Xh.enqueueReplaceState(a,a.state,null)}function rs(n,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(n=n.defaultProps){o===a&&(o=m({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var hc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function xv(n){hc(n)}function Sv(n){console.error(n)}function yv(n){hc(n)}function dc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function Mv(n,a,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wh(n,a,o){return o=sr(o),o.tag=3,o.payload={element:null},o.callback=function(){dc(n,a)},o}function Ev(n){return n=sr(n),n.tag=3,n}function Tv(n,a,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=u.value;n.payload=function(){return d(g)},n.callback=function(){Mv(a,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Mv(a,o,u),typeof d!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function OE(n,a,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&ml(a,o,d,!0),o=Ii.current,o!==null){switch(o.tag){case 13:return ua===null?md():o.alternate===null&&ln===0&&(ln=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Sh?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),_d(n,u,d)),!1;case 22:return o.flags|=65536,u===Sh?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),_d(n,u,d)),!1}throw Error(i(435,o.tag))}return _d(n,u,d),md(),!1}if(Pt)return a=Ii.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,u!==dh&&(n=Error(i(422),{cause:u}),pl(Li(n,o)))):(u!==dh&&(a=Error(i(423),{cause:u}),pl(Li(a,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Li(u,o),d=Wh(n.stateNode,u,d),Eh(n,d),ln!==4&&(ln=2)),!1;var g=Error(i(520),{cause:u});if(g=Li(g,o),Pl===null?Pl=[g]:Pl.push(g),ln!==4&&(ln=2),a===null)return!0;u=Li(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=Wh(o.stateNode,u,n),Eh(o,n),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gr===null||!gr.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=Ev(d),Tv(d,n,o,u),Eh(o,d),!1}o=o.return}while(o!==null);return!1}var Av=Error(i(461)),Dn=!1;function Bn(n,a,o,u){a.child=n===null?mv(a,null,o,u):no(a,n.child,o,u)}function bv(n,a,o,u,d){o=o.render;var g=a.ref;if("ref"in u){var T={};for(var D in u)D!=="ref"&&(T[D]=u[D])}else T=u;return ns(a),u=Ch(n,a,o,T,g,d),D=wh(),n!==null&&!Dn?(Dh(n,a,d),La(n,a,d)):(Pt&&D&&fh(a),a.flags|=1,Bn(n,a,u,d),a.child)}function Rv(n,a,o,u,d){if(n===null){var g=o.type;return typeof g=="function"&&!lh(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Cv(n,a,g,u,d)):(n=qu(o.type,null,u,a,a.mode,d),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!$h(n,d)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:cl,o(T,u)&&n.ref===a.ref)return La(n,a,d)}return a.flags|=1,n=Aa(g,u),n.ref=a.ref,n.return=a,a.child=n}function Cv(n,a,o,u,d){if(n!==null){var g=n.memoizedProps;if(cl(g,u)&&n.ref===a.ref)if(Dn=!1,a.pendingProps=u=g,$h(n,d))(n.flags&131072)!==0&&(Dn=!0);else return a.lanes=n.lanes,La(n,a,d)}return qh(n,a,o,u,d)}function wv(n,a,o){var u=a.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,n!==null){for(d=a.child=n.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return Dv(n,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Qu(a,g!==null?g.cachePool:null),g!==null?C_(a,g):Ah(),gv(a);else return a.lanes=a.childLanes=536870912,Dv(n,a,g!==null?g.baseLanes|o:o,o)}else g!==null?(Qu(a,g.cachePool),C_(a,g),cr(),a.memoizedState=null):(n!==null&&Qu(a,null),Ah(),cr());return Bn(n,a,d,o),a.child}function Dv(n,a,o,u){var d=xh();return d=d===null?null:{parent:En._currentValue,pool:d},a.memoizedState={baseLanes:o,cachePool:d},n!==null&&Qu(a,null),Ah(),gv(a),n!==null&&ml(n,a,u,!0),null}function pc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function qh(n,a,o,u,d){return ns(a),o=Ch(n,a,o,u,void 0,d),u=wh(),n!==null&&!Dn?(Dh(n,a,d),La(n,a,d)):(Pt&&u&&fh(a),a.flags|=1,Bn(n,a,o,d),a.child)}function Uv(n,a,o,u,d,g){return ns(a),a.updateQueue=null,o=D_(a,u,o,d),w_(n),u=wh(),n!==null&&!Dn?(Dh(n,a,g),La(n,a,g)):(Pt&&u&&fh(a),a.flags|=1,Bn(n,a,o,g),a.child)}function Lv(n,a,o,u,d){if(ns(a),a.stateNode===null){var g=qs,T=o.contextType;typeof T=="object"&&T!==null&&(g=Xn(T)),g=new o(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Xh,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},yh(a),T=o.contextType,g.context=typeof T=="object"&&T!==null?Xn(T):qs,g.state=a.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(kh(a,o,T,u),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Xh.enqueueReplaceState(g,g.state,null),Ml(a,u,g,d),yl(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var D=a.memoizedProps,G=rs(o,D);g.props=G;var te=g.context,de=o.contextType;T=qs,typeof de=="object"&&de!==null&&(T=Xn(de));var xe=o.getDerivedStateFromProps;de=typeof xe=="function"||typeof g.getSnapshotBeforeUpdate=="function",D=a.pendingProps!==D,de||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(D||te!==T)&&vv(a,g,u,T),rr=!1;var ae=a.memoizedState;g.state=ae,Ml(a,u,g,d),yl(),te=a.memoizedState,D||ae!==te||rr?(typeof xe=="function"&&(kh(a,o,xe,u),te=a.memoizedState),(G=rr||_v(a,o,G,u,ae,te,T))?(de||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=te),g.props=u,g.state=te,g.context=T,u=G):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,Mh(n,a),T=a.memoizedProps,de=rs(o,T),g.props=de,xe=a.pendingProps,ae=g.context,te=o.contextType,G=qs,typeof te=="object"&&te!==null&&(G=Xn(te)),D=o.getDerivedStateFromProps,(te=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==xe||ae!==G)&&vv(a,g,u,G),rr=!1,ae=a.memoizedState,g.state=ae,Ml(a,u,g,d),yl();var se=a.memoizedState;T!==xe||ae!==se||rr||n!==null&&n.dependencies!==null&&Zu(n.dependencies)?(typeof D=="function"&&(kh(a,o,D,u),se=a.memoizedState),(de=rr||_v(a,o,de,u,ae,se,G)||n!==null&&n.dependencies!==null&&Zu(n.dependencies))?(te||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,se,G),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,se,G)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ae===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ae===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=se),g.props=u,g.state=se,g.context=G,u=de):(typeof g.componentDidUpdate!="function"||T===n.memoizedProps&&ae===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&ae===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,pc(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=no(a,n.child,null,d),a.child=no(a,null,o,d)):Bn(n,a,o,d),a.memoizedState=g.state,n=a.child):n=La(n,a,d),n}function Nv(n,a,o,u){return dl(),a.flags|=256,Bn(n,a,o,u),a.child}var Yh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jh(n){return{baseLanes:n,cachePool:S_()}}function Zh(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Bi),n}function Ov(n,a,o){var u=a.pendingProps,d=!1,g=(a.flags&128)!==0,T;if((T=g)||(T=n!==null&&n.memoizedState===null?!1:(Tn.current&2)!==0),T&&(d=!0,a.flags&=-129),T=(a.flags&32)!==0,a.flags&=-33,n===null){if(Pt){if(d?ur(a):cr(),Pt){var D=on,G;if(G=D){e:{for(G=D,D=la;G.nodeType!==8;){if(!D){D=null;break e}if(G=Qi(G.nextSibling),G===null){D=null;break e}}D=G}D!==null?(a.memoizedState={dehydrated:D,treeContext:Qr!==null?{id:ba,overflow:Ra}:null,retryLane:536870912,hydrationErrors:null},G=mi(18,null,null,0),G.stateNode=D,G.return=a,a.child=G,$n=a,on=null,G=!0):G=!1}G||es(a)}if(D=a.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return Ld(D)?a.lanes=32:a.lanes=536870912,null;Ua(a)}return D=u.children,u=u.fallback,d?(cr(),d=a.mode,D=mc({mode:"hidden",children:D},d),u=Kr(u,d,o,null),D.return=a,u.return=a,D.sibling=u,a.child=D,d=a.child,d.memoizedState=jh(o),d.childLanes=Zh(n,T,o),a.memoizedState=Yh,u):(ur(a),Kh(a,D))}if(G=n.memoizedState,G!==null&&(D=G.dehydrated,D!==null)){if(g)a.flags&256?(ur(a),a.flags&=-257,a=Qh(n,a,o)):a.memoizedState!==null?(cr(),a.child=n.child,a.flags|=128,a=null):(cr(),d=u.fallback,D=a.mode,u=mc({mode:"visible",children:u.children},D),d=Kr(d,D,o,null),d.flags|=2,u.return=a,d.return=a,u.sibling=d,a.child=u,no(a,n.child,null,o),u=a.child,u.memoizedState=jh(o),u.childLanes=Zh(n,T,o),a.memoizedState=Yh,a=d);else if(ur(a),Ld(D)){if(T=D.nextSibling&&D.nextSibling.dataset,T)var te=T.dgst;T=te,u=Error(i(419)),u.stack="",u.digest=T,pl({value:u,source:null,stack:null}),a=Qh(n,a,o)}else if(Dn||ml(n,a,o,!1),T=(o&n.childLanes)!==0,Dn||T){if(T=Zt,T!==null&&(u=o&-o,u=(u&42)!==0?1:ot(u),u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==G.retryLane))throw G.retryLane=u,Ws(n,u),Si(T,n,u),Av;D.data==="$?"||md(),a=Qh(n,a,o)}else D.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=G.treeContext,on=Qi(D.nextSibling),$n=a,Pt=!0,$r=null,la=!1,n!==null&&(Oi[Pi++]=ba,Oi[Pi++]=Ra,Oi[Pi++]=Qr,ba=n.id,Ra=n.overflow,Qr=a),a=Kh(a,u.children),a.flags|=4096);return a}return d?(cr(),d=u.fallback,D=a.mode,G=n.child,te=G.sibling,u=Aa(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,te!==null?d=Aa(te,d):(d=Kr(d,D,o,null),d.flags|=2),d.return=a,u.return=a,u.sibling=d,a.child=u,u=d,d=a.child,D=n.child.memoizedState,D===null?D=jh(o):(G=D.cachePool,G!==null?(te=En._currentValue,G=G.parent!==te?{parent:te,pool:te}:G):G=S_(),D={baseLanes:D.baseLanes|o,cachePool:G}),d.memoizedState=D,d.childLanes=Zh(n,T,o),a.memoizedState=Yh,u):(ur(a),o=n.child,n=o.sibling,o=Aa(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,n!==null&&(T=a.deletions,T===null?(a.deletions=[n],a.flags|=16):T.push(n)),a.child=o,a.memoizedState=null,o)}function Kh(n,a){return a=mc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function mc(n,a){return n=mi(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Qh(n,a,o){return no(a,n.child,null,o),n=Kh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Pv(n,a,o){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),mh(n.return,a,o)}function Jh(n,a,o,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function Iv(n,a,o){var u=a.pendingProps,d=u.revealOrder,g=u.tail;if(Bn(n,a,u.children,o),u=Tn.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pv(n,o,a);else if(n.tag===19)Pv(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(ye(Tn,u),d){case"forwards":for(o=a.child,d=null;o!==null;)n=o.alternate,n!==null&&fc(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=a.child,a.child=null):(d=o.sibling,o.sibling=null),Jh(a,!1,d,o,g);break;case"backwards":for(o=null,d=a.child,a.child=null;d!==null;){if(n=d.alternate,n!==null&&fc(n)===null){a.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Jh(a,!0,o,null,g);break;case"together":Jh(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function La(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),mr|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(ml(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Aa(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Aa(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function $h(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Zu(n)))}function PE(n,a,o){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),ar(a,En,n.memoizedState.cache),dl();break;case 27:case 5:qe(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:ar(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(ur(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Ov(n,a,o):(ur(a),n=La(n,a,o),n!==null?n.sibling:null);ur(a);break;case 19:var d=(n.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(ml(n,a,o,!1),u=(o&a.childLanes)!==0),d){if(u)return Iv(n,a,o);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ye(Tn,Tn.current),u)break;return null;case 22:case 23:return a.lanes=0,wv(n,a,o);case 24:ar(a,En,n.memoizedState.cache)}return La(n,a,o)}function Bv(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Dn=!0;else{if(!$h(n,o)&&(a.flags&128)===0)return Dn=!1,PE(n,a,o);Dn=(n.flags&131072)!==0}else Dn=!1,Pt&&(a.flags&1048576)!==0&&d_(a,ju,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var u=a.elementType,d=u._init;if(u=d(u._payload),a.type=u,typeof u=="function")lh(u)?(n=rs(u,n),a.tag=1,a=Lv(null,a,u,n,o)):(a.tag=0,a=qh(null,a,u,n,o));else{if(u!=null){if(d=u.$$typeof,d===b){a.tag=11,a=bv(null,a,u,n,o);break e}else if(d===I){a.tag=14,a=Rv(null,a,u,n,o);break e}}throw a=re(u)||u,Error(i(306,a,""))}}return a;case 0:return qh(n,a,a.type,a.pendingProps,o);case 1:return u=a.type,d=rs(u,a.pendingProps),Lv(n,a,u,d,o);case 3:e:{if(Re(a,a.stateNode.containerInfo),n===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;d=g.element,Mh(n,a),Ml(a,u,null,o);var T=a.memoizedState;if(u=T.cache,ar(a,En,u),u!==g.cache&&gh(a,[En],o,!0),yl(),u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Nv(n,a,u,o);break e}else if(u!==d){d=Li(Error(i(424)),a),pl(d),a=Nv(n,a,u,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(on=Qi(n.firstChild),$n=a,Pt=!0,$r=null,la=!0,o=mv(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(dl(),u===d){a=La(n,a,o);break e}Bn(n,a,u,o)}a=a.child}return a;case 26:return pc(n,a),n===null?(o=G0(a.type,null,a.pendingProps,null))?a.memoizedState=o:Pt||(o=a.type,n=a.pendingProps,u=wc(ne.current).createElement(o),u[Mn]=a,u[rn]=n,zn(u,o,n),mn(u),a.stateNode=u):a.memoizedState=G0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return qe(a),n===null&&Pt&&(u=a.stateNode=F0(a.type,a.pendingProps,ne.current),$n=a,la=!0,d=on,xr(a.type)?(Nd=d,on=Qi(u.firstChild)):on=d),Bn(n,a,a.pendingProps.children,o),pc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Pt&&((d=u=on)&&(u=uT(u,a.type,a.pendingProps,la),u!==null?(a.stateNode=u,$n=a,on=Qi(u.firstChild),la=!1,d=!0):d=!1),d||es(a)),qe(a),d=a.type,g=a.pendingProps,T=n!==null?n.memoizedProps:null,u=g.children,wd(d,g)?u=null:T!==null&&wd(d,T)&&(a.flags|=32),a.memoizedState!==null&&(d=Ch(n,a,RE,null,null,o),Xl._currentValue=d),pc(n,a),Bn(n,a,u,o),a.child;case 6:return n===null&&Pt&&((n=o=on)&&(o=cT(o,a.pendingProps,la),o!==null?(a.stateNode=o,$n=a,on=null,n=!0):n=!1),n||es(a)),null;case 13:return Ov(n,a,o);case 4:return Re(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=no(a,null,u,o):Bn(n,a,u,o),a.child;case 11:return bv(n,a,a.type,a.pendingProps,o);case 7:return Bn(n,a,a.pendingProps,o),a.child;case 8:return Bn(n,a,a.pendingProps.children,o),a.child;case 12:return Bn(n,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,ar(a,a.type,u.value),Bn(n,a,u.children,o),a.child;case 9:return d=a.type._context,u=a.pendingProps.children,ns(a),d=Xn(d),u=u(d),a.flags|=1,Bn(n,a,u,o),a.child;case 14:return Rv(n,a,a.type,a.pendingProps,o);case 15:return Cv(n,a,a.type,a.pendingProps,o);case 19:return Iv(n,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},n===null?(o=mc(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=Aa(n.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return wv(n,a,o);case 24:return ns(a),u=Xn(En),n===null?(d=xh(),d===null&&(d=Zt,g=_h(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),a.memoizedState={parent:u,cache:d},yh(a),ar(a,En,d)):((n.lanes&o)!==0&&(Mh(n,a),Ml(a,null,null,o),yl()),d=n.memoizedState,g=a.memoizedState,d.parent!==u?(d={parent:u,cache:u},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),ar(a,En,u)):(u=g.cache,ar(a,En,u),u!==d.cache&&gh(a,[En],o,!0))),Bn(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Na(n){n.flags|=4}function Fv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!q0(a)){if(a=Ii.current,a!==null&&((Rt&4194048)===Rt?ua!==null:(Rt&62914560)!==Rt&&(Rt&536870912)===0||a!==ua))throw xl=Sh,y_;n.flags|=8192}}function gc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Ae():536870912,n.lanes|=a,so|=a)}function wl(n,a){if(!Pt)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function en(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(a)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,a}function IE(n,a,o){var u=a.pendingProps;switch(hh(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(a),null;case 1:return en(a),null;case 3:return o=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),wa(En),Ke(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(hl(a)?Na(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,g_())),en(a),null;case 26:return o=a.memoizedState,n===null?(Na(a),o!==null?(en(a),Fv(a,o)):(en(a),a.flags&=-16777217)):o?o!==n.memoizedState?(Na(a),en(a),Fv(a,o)):(en(a),a.flags&=-16777217):(n.memoizedProps!==u&&Na(a),en(a),a.flags&=-16777217),null;case 27:ct(a),o=ne.current;var d=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Na(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return en(a),null}n=be.current,hl(a)?p_(a):(n=F0(d,u,o),a.stateNode=n,Na(a))}return en(a),null;case 5:if(ct(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&Na(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return en(a),null}if(n=be.current,hl(a))p_(a);else{switch(d=wc(ne.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}n[Mn]=a,n[rn]=u;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=n;e:switch(zn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Na(a)}}return en(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&Na(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=ne.current,hl(a)){if(n=a.stateNode,o=a.memoizedProps,u=null,d=$n,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Mn]=a,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||U0(n.nodeValue,o)),n||es(a)}else n=wc(n).createTextNode(u),n[Mn]=a,a.stateNode=n}return en(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=hl(a),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Mn]=a}else dl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;en(a),d=!1}else d=g_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(Ua(a),a):(Ua(a),null)}if(Ua(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=a.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==d&&(u.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),gc(a,a.updateQueue),en(a),null;case 4:return Ke(),n===null&&Td(a.stateNode.containerInfo),en(a),null;case 10:return wa(a.type),en(a),null;case 19:if(pe(Tn),d=a.memoizedState,d===null)return en(a),null;if(u=(a.flags&128)!==0,g=d.rendering,g===null)if(u)wl(d,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=fc(n),g!==null){for(a.flags|=128,wl(d,!1),n=g.updateQueue,a.updateQueue=n,gc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)h_(o,n),o=o.sibling;return ye(Tn,Tn.current&1|2),a.child}n=n.sibling}d.tail!==null&&Ie()>xc&&(a.flags|=128,u=!0,wl(d,!1),a.lanes=4194304)}else{if(!u)if(n=fc(g),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,gc(a,n),wl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Pt)return en(a),null}else 2*Ie()-d.renderingStartTime>xc&&o!==536870912&&(a.flags|=128,u=!0,wl(d,!1),a.lanes=4194304);d.isBackwards?(g.sibling=a.child,a.child=g):(n=d.last,n!==null?n.sibling=g:a.child=g,d.last=g)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=Ie(),a.sibling=null,n=Tn.current,ye(Tn,u?n&1|2:n&1),a):(en(a),null);case 22:case 23:return Ua(a),bh(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(en(a),a.subtreeFlags&6&&(a.flags|=8192)):en(a),o=a.updateQueue,o!==null&&gc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),n!==null&&pe(is),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),wa(En),en(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function BE(n,a){switch(hh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return wa(En),Ke(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return ct(a),null;case 13:if(Ua(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));dl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return pe(Tn),null;case 4:return Ke(),null;case 10:return wa(a.type),null;case 22:case 23:return Ua(a),bh(),n!==null&&pe(is),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return wa(En),null;case 25:return null;default:return null}}function zv(n,a){switch(hh(a),a.tag){case 3:wa(En),Ke();break;case 26:case 27:case 5:ct(a);break;case 4:Ke();break;case 13:Ua(a);break;case 19:pe(Tn);break;case 10:wa(a.type);break;case 22:case 23:Ua(a),bh(),n!==null&&pe(is);break;case 24:wa(En)}}function Dl(n,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var g=o.create,T=o.inst;u=g(),T.destroy=u}o=o.next}while(o!==d)}}catch(D){qt(a,a.return,D)}}function fr(n,a,o){try{var u=a.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var g=d.next;u=g;do{if((u.tag&n)===n){var T=u.inst,D=T.destroy;if(D!==void 0){T.destroy=void 0,d=a;var G=o,te=D;try{te()}catch(de){qt(d,G,de)}}}u=u.next}while(u!==g)}}catch(de){qt(a,a.return,de)}}function Hv(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{R_(a,o)}catch(u){qt(n,n.return,u)}}}function Gv(n,a,o){o.props=rs(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){qt(n,a,u)}}function Ul(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){qt(n,a,d)}}function ca(n,a){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){qt(n,a,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){qt(n,a,d)}else o.current=null}function Vv(n){var a=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){qt(n,n.return,d)}}function ed(n,a,o){try{var u=n.stateNode;aT(u,n.type,o,a),u[rn]=a}catch(d){qt(n,n.return,d)}}function kv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&xr(n.type)||n.tag===4}function td(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&xr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nd(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Cc));else if(u!==4&&(u===27&&xr(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(nd(n,a,o),n=n.sibling;n!==null;)nd(n,a,o),n=n.sibling}function _c(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(u!==4&&(u===27&&xr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(_c(n,a,o),n=n.sibling;n!==null;)_c(n,a,o),n=n.sibling}function Xv(n){var a=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);zn(a,u,o),a[Mn]=n,a[rn]=o}catch(g){qt(n,n.return,g)}}var Oa=!1,fn=!1,id=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,Un=null;function FE(n,a){if(n=n.containerInfo,Rd=Pc,n=n_(n),th(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,D=-1,G=-1,te=0,de=0,xe=n,ae=null;t:for(;;){for(var se;xe!==o||d!==0&&xe.nodeType!==3||(D=T+d),xe!==g||u!==0&&xe.nodeType!==3||(G=T+u),xe.nodeType===3&&(T+=xe.nodeValue.length),(se=xe.firstChild)!==null;)ae=xe,xe=se;for(;;){if(xe===n)break t;if(ae===o&&++te===d&&(D=T),ae===g&&++de===u&&(G=T),(se=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=se}o=D===-1||G===-1?null:{start:D,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cd={focusedElem:n,selectionRange:o},Pc=!1,Un=a;Un!==null;)if(a=Un,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Un=n;else for(;Un!==null;){switch(a=Un,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=a,d=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var rt=rs(o.type,d,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(rt,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(nt){qt(o,o.return,nt)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)Ud(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ud(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Un=n;break}Un=a.return}}function qv(n,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:hr(n,o),u&4&&Dl(5,o);break;case 1:if(hr(n,o),u&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(T){qt(o,o.return,T)}else{var d=rs(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(d,a,n.__reactInternalSnapshotBeforeUpdate)}catch(T){qt(o,o.return,T)}}u&64&&Hv(o),u&512&&Ul(o,o.return);break;case 3:if(hr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{R_(n,a)}catch(T){qt(o,o.return,T)}}break;case 27:a===null&&u&4&&Xv(o);case 26:case 5:hr(n,o),a===null&&u&4&&Vv(o),u&512&&Ul(o,o.return);break;case 12:hr(n,o);break;case 13:hr(n,o),u&4&&Zv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=YE.bind(null,o),fT(n,o))));break;case 22:if(u=o.memoizedState!==null||Oa,!u){a=a!==null&&a.memoizedState!==null||fn,d=Oa;var g=fn;Oa=u,(fn=a)&&!g?dr(n,o,(o.subtreeFlags&8772)!==0):hr(n,o),Oa=d,fn=g}break;case 30:break;default:hr(n,o)}}function Yv(n){var a=n.alternate;a!==null&&(n.alternate=null,Yv(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Bs(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Jt=null,si=!1;function Pa(n,a,o){for(o=o.child;o!==null;)jv(n,a,o),o=o.sibling}function jv(n,a,o){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(he,o)}catch{}switch(o.tag){case 26:fn||ca(o,a),Pa(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:fn||ca(o,a);var u=Jt,d=si;xr(o.type)&&(Jt=o.stateNode,si=!1),Pa(n,a,o),Hl(o.stateNode),Jt=u,si=d;break;case 5:fn||ca(o,a);case 6:if(u=Jt,d=si,Jt=null,Pa(n,a,o),Jt=u,si=d,Jt!==null)if(si)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(o.stateNode)}catch(g){qt(o,a,g)}else try{Jt.removeChild(o.stateNode)}catch(g){qt(o,a,g)}break;case 18:Jt!==null&&(si?(n=Jt,I0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),jl(n)):I0(Jt,o.stateNode));break;case 4:u=Jt,d=si,Jt=o.stateNode.containerInfo,si=!0,Pa(n,a,o),Jt=u,si=d;break;case 0:case 11:case 14:case 15:fn||fr(2,o,a),fn||fr(4,o,a),Pa(n,a,o);break;case 1:fn||(ca(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Gv(o,a,u)),Pa(n,a,o);break;case 21:Pa(n,a,o);break;case 22:fn=(u=fn)||o.memoizedState!==null,Pa(n,a,o),fn=u;break;default:Pa(n,a,o)}}function Zv(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{jl(n)}catch(o){qt(a,a.return,o)}}function zE(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Wv),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Wv),a;default:throw Error(i(435,n.tag))}}function ad(n,a){var o=zE(n);a.forEach(function(u){var d=jE.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}function gi(n,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],g=n,T=a,D=T;e:for(;D!==null;){switch(D.tag){case 27:if(xr(D.type)){Jt=D.stateNode,si=!1;break e}break;case 5:Jt=D.stateNode,si=!1;break e;case 3:case 4:Jt=D.stateNode.containerInfo,si=!0;break e}D=D.return}if(Jt===null)throw Error(i(160));jv(g,T,d),Jt=null,si=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Kv(a,n),a=a.sibling}var Ki=null;function Kv(n,a){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:gi(a,n),_i(n),u&4&&(fr(3,n,n.return),Dl(3,n),fr(5,n,n.return));break;case 1:gi(a,n),_i(n),u&512&&(fn||o===null||ca(o,o.return)),u&64&&Oa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Ki;if(gi(a,n),_i(n),u&512&&(fn||o===null||ca(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":g=d.getElementsByTagName("title")[0],(!g||g[oa]||g[Mn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(u),d.head.insertBefore(g,d.querySelector("head > title"))),zn(g,u,o),g[Mn]=n,mn(g),u=g;break e;case"link":var T=X0("link","href",d).get(u+(o.href||""));if(T){for(var D=0;D<T.length;D++)if(g=T[D],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(D,1);break t}}g=d.createElement(u),zn(g,u,o),d.head.appendChild(g);break;case"meta":if(T=X0("meta","content",d).get(u+(o.content||""))){for(D=0;D<T.length;D++)if(g=T[D],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(D,1);break t}}g=d.createElement(u),zn(g,u,o),d.head.appendChild(g);break;default:throw Error(i(468,u))}g[Mn]=n,mn(g),u=g}n.stateNode=u}else W0(d,n.type,n.stateNode);else n.stateNode=k0(d,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?W0(d,n.type,n.stateNode):k0(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&ed(n,n.memoizedProps,o.memoizedProps)}break;case 27:gi(a,n),_i(n),u&512&&(fn||o===null||ca(o,o.return)),o!==null&&u&4&&ed(n,n.memoizedProps,o.memoizedProps);break;case 5:if(gi(a,n),_i(n),u&512&&(fn||o===null||ca(o,o.return)),n.flags&32){d=n.stateNode;try{ii(d,"")}catch(se){qt(n,n.return,se)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,ed(n,d,o!==null?o.memoizedProps:d)),u&1024&&(id=!0);break;case 6:if(gi(a,n),_i(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(se){qt(n,n.return,se)}}break;case 3:if(Lc=null,d=Ki,Ki=Dc(a.containerInfo),gi(a,n),Ki=d,_i(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{jl(a.containerInfo)}catch(se){qt(n,n.return,se)}id&&(id=!1,Qv(n));break;case 4:u=Ki,Ki=Dc(n.stateNode.containerInfo),gi(a,n),_i(n),Ki=u;break;case 12:gi(a,n),_i(n);break;case 13:gi(a,n),_i(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(cd=Ie()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ad(n,u)));break;case 22:d=n.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,te=Oa,de=fn;if(Oa=te||d,fn=de||G,gi(a,n),fn=de,Oa=te,_i(n),u&8192)e:for(a=n.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(o===null||G||Oa||fn||ss(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){G=o=a;try{if(g=G.stateNode,d)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{D=G.stateNode;var xe=G.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;D.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(se){qt(G,G.return,se)}}}else if(a.tag===6){if(o===null){G=a;try{G.stateNode.nodeValue=d?"":G.memoizedProps}catch(se){qt(G,G.return,se)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ad(n,o))));break;case 19:gi(a,n),_i(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,ad(n,u)));break;case 30:break;case 21:break;default:gi(a,n),_i(n)}}function _i(n){var a=n.flags;if(a&2){try{for(var o,u=n.return;u!==null;){if(kv(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,g=td(n);_c(n,g,d);break;case 5:var T=o.stateNode;o.flags&32&&(ii(T,""),o.flags&=-33);var D=td(n);_c(n,D,T);break;case 3:case 4:var G=o.stateNode.containerInfo,te=td(n);nd(n,te,G);break;default:throw Error(i(161))}}catch(de){qt(n,n.return,de)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Qv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Qv(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function hr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)qv(n,a.alternate,a),a=a.sibling}function ss(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:fr(4,a,a.return),ss(a);break;case 1:ca(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Gv(a,a.return,o),ss(a);break;case 27:Hl(a.stateNode);case 26:case 5:ca(a,a.return),ss(a);break;case 22:a.memoizedState===null&&ss(a);break;case 30:ss(a);break;default:ss(a)}n=n.sibling}}function dr(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,d=n,g=a,T=g.flags;switch(g.tag){case 0:case 11:case 15:dr(d,g,o),Dl(4,g);break;case 1:if(dr(d,g,o),u=g,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(te){qt(u,u.return,te)}if(u=g,d=u.updateQueue,d!==null){var D=u.stateNode;try{var G=d.shared.hiddenCallbacks;if(G!==null)for(d.shared.hiddenCallbacks=null,d=0;d<G.length;d++)b_(G[d],D)}catch(te){qt(u,u.return,te)}}o&&T&64&&Hv(g),Ul(g,g.return);break;case 27:Xv(g);case 26:case 5:dr(d,g,o),o&&u===null&&T&4&&Vv(g),Ul(g,g.return);break;case 12:dr(d,g,o);break;case 13:dr(d,g,o),o&&T&4&&Zv(d,g);break;case 22:g.memoizedState===null&&dr(d,g,o),Ul(g,g.return);break;case 30:break;default:dr(d,g,o)}a=a.sibling}}function rd(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&gl(o))}function sd(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&gl(n))}function fa(n,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Jv(n,a,o,u),a=a.sibling}function Jv(n,a,o,u){var d=a.flags;switch(a.tag){case 0:case 11:case 15:fa(n,a,o,u),d&2048&&Dl(9,a);break;case 1:fa(n,a,o,u);break;case 3:fa(n,a,o,u),d&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&gl(n)));break;case 12:if(d&2048){fa(n,a,o,u),n=a.stateNode;try{var g=a.memoizedProps,T=g.id,D=g.onPostCommit;typeof D=="function"&&D(T,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(G){qt(a,a.return,G)}}else fa(n,a,o,u);break;case 13:fa(n,a,o,u);break;case 23:break;case 22:g=a.stateNode,T=a.alternate,a.memoizedState!==null?g._visibility&2?fa(n,a,o,u):Ll(n,a):g._visibility&2?fa(n,a,o,u):(g._visibility|=2,io(n,a,o,u,(a.subtreeFlags&10256)!==0)),d&2048&&rd(T,a);break;case 24:fa(n,a,o,u),d&2048&&sd(a.alternate,a);break;default:fa(n,a,o,u)}}function io(n,a,o,u,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,T=a,D=o,G=u,te=T.flags;switch(T.tag){case 0:case 11:case 15:io(g,T,D,G,d),Dl(8,T);break;case 23:break;case 22:var de=T.stateNode;T.memoizedState!==null?de._visibility&2?io(g,T,D,G,d):Ll(g,T):(de._visibility|=2,io(g,T,D,G,d)),d&&te&2048&&rd(T.alternate,T);break;case 24:io(g,T,D,G,d),d&&te&2048&&sd(T.alternate,T);break;default:io(g,T,D,G,d)}a=a.sibling}}function Ll(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,u=a,d=u.flags;switch(u.tag){case 22:Ll(o,u),d&2048&&rd(u.alternate,u);break;case 24:Ll(o,u),d&2048&&sd(u.alternate,u);break;default:Ll(o,u)}a=a.sibling}}var Nl=8192;function ao(n){if(n.subtreeFlags&Nl)for(n=n.child;n!==null;)$v(n),n=n.sibling}function $v(n){switch(n.tag){case 26:ao(n),n.flags&Nl&&n.memoizedState!==null&&TT(Ki,n.memoizedState,n.memoizedProps);break;case 5:ao(n);break;case 3:case 4:var a=Ki;Ki=Dc(n.stateNode.containerInfo),ao(n),Ki=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Nl,Nl=16777216,ao(n),Nl=a):ao(n));break;default:ao(n)}}function e0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Ol(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Un=u,n0(u,n)}e0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)t0(n),n=n.sibling}function t0(n){switch(n.tag){case 0:case 11:case 15:Ol(n),n.flags&2048&&fr(9,n,n.return);break;case 3:Ol(n);break;case 12:Ol(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,vc(n)):Ol(n);break;default:Ol(n)}}function vc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Un=u,n0(u,n)}e0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:fr(8,a,a.return),vc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,vc(a));break;default:vc(a)}n=n.sibling}}function n0(n,a){for(;Un!==null;){var o=Un;switch(o.tag){case 0:case 11:case 15:fr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:gl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Un=u;else e:for(o=n;Un!==null;){u=Un;var d=u.sibling,g=u.return;if(Yv(u),u===o){Un=null;break e}if(d!==null){d.return=g,Un=d;break e}Un=g}}}var HE={getCacheForType:function(n){var a=Xn(En),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},GE=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Zt=null,yt=null,Rt=0,zt=0,vi=null,pr=!1,ro=!1,od=!1,Ia=0,ln=0,mr=0,os=0,ld=0,Bi=0,so=0,Pl=null,oi=null,ud=!1,cd=0,xc=1/0,Sc=null,gr=null,Fn=0,_r=null,oo=null,lo=0,fd=0,hd=null,i0=null,Il=0,dd=null;function xi(){if((Ft&2)!==0&&Rt!==0)return Rt&-Rt;if(z.T!==null){var n=Zs;return n!==0?n:Sd()}return wt()}function a0(){Bi===0&&(Bi=(Rt&536870912)===0||Pt?Y():536870912);var n=Ii.current;return n!==null&&(n.flags|=32),Bi}function Si(n,a,o){(n===Zt&&(zt===2||zt===9)||n.cancelPendingCommit!==null)&&(uo(n,0),vr(n,Rt,Bi,!1)),He(n,o),((Ft&2)===0||n!==Zt)&&(n===Zt&&((Ft&2)===0&&(os|=o),ln===4&&vr(n,Rt,Bi,!1)),ha(n))}function r0(n,a,o){if((Ft&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&n.expiredLanes)===0||Ue(n,a),d=u?XE(n,a):gd(n,a,!0),g=u;do{if(d===0){ro&&!u&&vr(n,a,0,!1);break}else{if(o=n.current.alternate,g&&!VE(o)){d=gd(n,a,!1),g=!1;continue}if(d===2){if(g=a,n.errorRecoveryDisabledLanes&g)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){a=T;e:{var D=n;d=Pl;var G=D.current.memoizedState.isDehydrated;if(G&&(uo(D,T).flags|=256),T=gd(D,T,!1),T!==2){if(od&&!G){D.errorRecoveryDisabledLanes|=g,os|=g,d=4;break e}g=oi,oi=d,g!==null&&(oi===null?oi=g:oi.push.apply(oi,g))}d=T}if(g=!1,d!==2)continue}}if(d===1){uo(n,0),vr(n,a,0,!0);break}e:{switch(u=n,g=d,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:vr(u,a,Bi,!pr);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=cd+300-Ie(),10<d)){if(vr(u,a,Bi,!pr),We(u,0,!0)!==0)break e;u.timeoutHandle=O0(s0.bind(null,u,o,oi,Sc,ud,a,Bi,os,so,pr,g,2,-0,0),d);break e}s0(u,o,oi,Sc,ud,a,Bi,os,so,pr,g,0,-0,0)}}break}while(!0);ha(n)}function s0(n,a,o,u,d,g,T,D,G,te,de,xe,ae,se){if(n.timeoutHandle=-1,xe=a.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(kl={stylesheets:null,count:0,unsuspend:ET},$v(a),xe=AT(),xe!==null)){n.cancelPendingCommit=xe(d0.bind(null,n,a,g,o,u,d,T,D,G,de,1,ae,se)),vr(n,g,T,!te);return}d0(n,a,g,o,u,d,T,D,G)}function VE(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!pi(g(),d))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function vr(n,a,o,u){a&=~ld,a&=~os,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var d=a;0<d;){var g=31-ze(d),T=1<<g;u[g]=-1,d&=~T}o!==0&&Se(n,o,a)}function yc(){return(Ft&6)===0?(Bl(0),!1):!0}function pd(){if(yt!==null){if(zt===0)var n=yt.return;else n=yt,Ca=ts=null,Uh(n),to=null,Rl=0,n=yt;for(;n!==null;)zv(n.alternate,n),n=n.return;yt=null}}function uo(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,sT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),pd(),Zt=n,yt=o=Aa(n.current,null),Rt=a,zt=0,vi=null,pr=!1,ro=Ue(n,a),od=!1,so=Bi=ld=os=mr=ln=0,oi=Pl=null,ud=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var d=31-ze(u),g=1<<d;a|=n[d],u&=~g}return Ia=a,ku(),o}function o0(n,a){gt=null,z.H=lc,a===vl||a===Ju?(a=T_(),zt=3):a===y_?(a=T_(),zt=4):zt=a===Av?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,vi=a,yt===null&&(ln=1,dc(n,Li(a,n.current)))}function l0(){var n=z.H;return z.H=lc,n===null?lc:n}function u0(){var n=z.A;return z.A=HE,n}function md(){ln=4,pr||(Rt&4194048)!==Rt&&Ii.current!==null||(ro=!0),(mr&134217727)===0&&(os&134217727)===0||Zt===null||vr(Zt,Rt,Bi,!1)}function gd(n,a,o){var u=Ft;Ft|=2;var d=l0(),g=u0();(Zt!==n||Rt!==a)&&(Sc=null,uo(n,a)),a=!1;var T=ln;e:do try{if(zt!==0&&yt!==null){var D=yt,G=vi;switch(zt){case 8:pd(),T=6;break e;case 3:case 2:case 9:case 6:Ii.current===null&&(a=!0);var te=zt;if(zt=0,vi=null,co(n,D,G,te),o&&ro){T=0;break e}break;default:te=zt,zt=0,vi=null,co(n,D,G,te)}}kE(),T=ln;break}catch(de){o0(n,de)}while(!0);return a&&n.shellSuspendCounter++,Ca=ts=null,Ft=u,z.H=d,z.A=g,yt===null&&(Zt=null,Rt=0,ku()),T}function kE(){for(;yt!==null;)c0(yt)}function XE(n,a){var o=Ft;Ft|=2;var u=l0(),d=u0();Zt!==n||Rt!==a?(Sc=null,xc=Ie()+500,uo(n,a)):ro=Ue(n,a);e:do try{if(zt!==0&&yt!==null){a=yt;var g=vi;t:switch(zt){case 1:zt=0,vi=null,co(n,a,g,1);break;case 2:case 9:if(M_(g)){zt=0,vi=null,f0(a);break}a=function(){zt!==2&&zt!==9||Zt!==n||(zt=7),ha(n)},g.then(a,a);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:M_(g)?(zt=0,vi=null,f0(a)):(zt=0,vi=null,co(n,a,g,7));break;case 5:var T=null;switch(yt.tag){case 26:T=yt.memoizedState;case 5:case 27:var D=yt;if(!T||q0(T)){zt=0,vi=null;var G=D.sibling;if(G!==null)yt=G;else{var te=D.return;te!==null?(yt=te,Mc(te)):yt=null}break t}}zt=0,vi=null,co(n,a,g,5);break;case 6:zt=0,vi=null,co(n,a,g,6);break;case 8:pd(),ln=6;break e;default:throw Error(i(462))}}WE();break}catch(de){o0(n,de)}while(!0);return Ca=ts=null,z.H=u,z.A=d,Ft=o,yt!==null?0:(Zt=null,Rt=0,ku(),ln)}function WE(){for(;yt!==null&&!st();)c0(yt)}function c0(n){var a=Bv(n.alternate,n,Ia);n.memoizedProps=n.pendingProps,a===null?Mc(n):yt=a}function f0(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=Uv(o,a,a.pendingProps,a.type,void 0,Rt);break;case 11:a=Uv(o,a,a.pendingProps,a.type.render,a.ref,Rt);break;case 5:Uh(a);default:zv(o,a),a=yt=h_(a,Ia),a=Bv(o,a,Ia)}n.memoizedProps=n.pendingProps,a===null?Mc(n):yt=a}function co(n,a,o,u){Ca=ts=null,Uh(a),to=null,Rl=0;var d=a.return;try{if(OE(n,d,a,o,Rt)){ln=1,dc(n,Li(o,n.current)),yt=null;return}}catch(g){if(d!==null)throw yt=d,g;ln=1,dc(n,Li(o,n.current)),yt=null;return}a.flags&32768?(Pt||u===1?n=!0:ro||(Rt&536870912)!==0?n=!1:(pr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ii.current,u!==null&&u.tag===13&&(u.flags|=16384))),h0(a,n)):Mc(a)}function Mc(n){var a=n;do{if((a.flags&32768)!==0){h0(a,pr);return}n=a.return;var o=IE(a.alternate,a,Ia);if(o!==null){yt=o;return}if(a=a.sibling,a!==null){yt=a;return}yt=a=n}while(a!==null);ln===0&&(ln=5)}function h0(n,a){do{var o=BE(n.alternate,n);if(o!==null){o.flags&=32767,yt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){yt=n;return}yt=n=o}while(n!==null);ln=6,yt=null}function d0(n,a,o,u,d,g,T,D,G){n.cancelPendingCommit=null;do Ec();while(Fn!==0);if((Ft&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=sh,Ee(n,o,g,T,D,G),n===Zt&&(yt=Zt=null,Rt=0),oo=a,_r=n,lo=o,fd=g,hd=d,i0=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,ZE(lt,function(){return v0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,d=q.p,q.p=2,T=Ft,Ft|=4;try{FE(n,a,o)}finally{Ft=T,q.p=d,z.T=u}}Fn=1,p0(),m0(),g0()}}function p0(){if(Fn===1){Fn=0;var n=_r,a=oo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=q.p;q.p=2;var d=Ft;Ft|=4;try{Kv(a,n);var g=Cd,T=n_(n.containerInfo),D=g.focusedElem,G=g.selectionRange;if(T!==D&&D&&D.ownerDocument&&t_(D.ownerDocument.documentElement,D)){if(G!==null&&th(D)){var te=G.start,de=G.end;if(de===void 0&&(de=te),"selectionStart"in D)D.selectionStart=te,D.selectionEnd=Math.min(de,D.value.length);else{var xe=D.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var se=ae.getSelection(),rt=D.textContent.length,nt=Math.min(G.start,rt),kt=G.end===void 0?nt:Math.min(G.end,rt);!se.extend&&nt>kt&&(T=kt,kt=nt,nt=T);var Z=e_(D,nt),W=e_(D,kt);if(Z&&W&&(se.rangeCount!==1||se.anchorNode!==Z.node||se.anchorOffset!==Z.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var $=xe.createRange();$.setStart(Z.node,Z.offset),se.removeAllRanges(),nt>kt?(se.addRange($),se.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),se.addRange($))}}}}for(xe=[],se=D;se=se.parentNode;)se.nodeType===1&&xe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<xe.length;D++){var me=xe[D];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Pc=!!Rd,Cd=Rd=null}finally{Ft=d,q.p=u,z.T=o}}n.current=a,Fn=2}}function m0(){if(Fn===2){Fn=0;var n=_r,a=oo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=q.p;q.p=2;var d=Ft;Ft|=4;try{qv(n,a.alternate,a)}finally{Ft=d,q.p=u,z.T=o}}Fn=3}}function g0(){if(Fn===4||Fn===3){Fn=0,et();var n=_r,a=oo,o=lo,u=i0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Fn=5:(Fn=0,oo=_r=null,_0(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(gr=null),It(o),a=a.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(he,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=z.T,d=q.p,q.p=2,z.T=null;try{for(var g=n.onRecoverableError,T=0;T<u.length;T++){var D=u[T];g(D.value,{componentStack:D.stack})}}finally{z.T=a,q.p=d}}(lo&3)!==0&&Ec(),ha(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===dd?Il++:(Il=0,dd=n):Il=0,Bl(0)}}function _0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,gl(a)))}function Ec(n){return p0(),m0(),g0(),v0()}function v0(){if(Fn!==5)return!1;var n=_r,a=fd;fd=0;var o=It(lo),u=z.T,d=q.p;try{q.p=32>o?32:o,z.T=null,o=hd,hd=null;var g=_r,T=lo;if(Fn=0,oo=_r=null,lo=0,(Ft&6)!==0)throw Error(i(331));var D=Ft;if(Ft|=4,t0(g.current),Jv(g,g.current,T,o),Ft=D,Bl(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(he,g)}catch{}return!0}finally{q.p=d,z.T=u,_0(n,a)}}function x0(n,a,o){a=Li(o,a),a=Wh(n.stateNode,a,2),n=or(n,a,2),n!==null&&(He(n,2),ha(n))}function qt(n,a,o){if(n.tag===3)x0(n,n,o);else for(;a!==null;){if(a.tag===3){x0(a,n,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(gr===null||!gr.has(u))){n=Li(o,n),o=Ev(2),u=or(a,o,2),u!==null&&(Tv(o,u,a,n),He(u,2),ha(u));break}}a=a.return}}function _d(n,a,o){var u=n.pingCache;if(u===null){u=n.pingCache=new GE;var d=new Set;u.set(a,d)}else d=u.get(a),d===void 0&&(d=new Set,u.set(a,d));d.has(o)||(od=!0,d.add(o),n=qE.bind(null,n,a,o),a.then(n,n))}function qE(n,a,o){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Zt===n&&(Rt&o)===o&&(ln===4||ln===3&&(Rt&62914560)===Rt&&300>Ie()-cd?(Ft&2)===0&&uo(n,0):ld|=o,so===Rt&&(so=0)),ha(n)}function S0(n,a){a===0&&(a=Ae()),n=Ws(n,a),n!==null&&(He(n,a),ha(n))}function YE(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),S0(n,o)}function jE(n,a){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),S0(n,o)}function ZE(n,a){return V(n,a)}var Tc=null,fo=null,vd=!1,Ac=!1,xd=!1,ls=0;function ha(n){n!==fo&&n.next===null&&(fo===null?Tc=fo=n:fo=fo.next=n),Ac=!0,vd||(vd=!0,QE())}function Bl(n,a){if(!xd&&Ac){xd=!0;do for(var o=!1,u=Tc;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var g=0;else{var T=u.suspendedLanes,D=u.pingedLanes;g=(1<<31-ze(42|n)+1)-1,g&=d&~(T&~D),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,T0(u,g))}else g=Rt,g=We(u,u===Zt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Ue(u,g)||(o=!0,T0(u,g));u=u.next}while(o);xd=!1}}function KE(){y0()}function y0(){Ac=vd=!1;var n=0;ls!==0&&(rT()&&(n=ls),ls=0);for(var a=Ie(),o=null,u=Tc;u!==null;){var d=u.next,g=M0(u,a);g===0?(u.next=null,o===null?Tc=d:o.next=d,d===null&&(fo=o)):(o=u,(n!==0||(g&3)!==0)&&(Ac=!0)),u=d}Bl(n)}function M0(n,a){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var T=31-ze(g),D=1<<T,G=d[T];G===-1?((D&o)===0||(D&u)!==0)&&(d[T]=ut(D,a)):G<=a&&(n.expiredLanes|=D),g&=~D}if(a=Zt,o=Rt,o=We(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===a&&(zt===2||zt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&bt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ue(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(u!==null&&bt(u),It(o)){case 2:case 8:o=Fe;break;case 32:o=lt;break;case 268435456:o=F;break;default:o=lt}return u=E0.bind(null,n),o=V(o,u),n.callbackPriority=a,n.callbackNode=o,a}return u!==null&&u!==null&&bt(u),n.callbackPriority=2,n.callbackNode=null,2}function E0(n,a){if(Fn!==0&&Fn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Ec()&&n.callbackNode!==o)return null;var u=Rt;return u=We(n,n===Zt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(r0(n,u,a),M0(n,Ie()),n.callbackNode!=null&&n.callbackNode===o?E0.bind(null,n):null)}function T0(n,a){if(Ec())return null;r0(n,a,!0)}function QE(){oT(function(){(Ft&6)!==0?V(Ge,KE):y0()})}function Sd(){return ls===0&&(ls=Y()),ls}function A0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Iu(""+n)}function b0(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function JE(n,a,o,u,d){if(a==="submit"&&o&&o.stateNode===d){var g=A0((d[rn]||null).action),T=u.submitter;T&&(a=(a=T[rn]||null)?A0(a.formAction):T.getAttribute("formAction"),a!==null&&(g=a,T=null));var D=new Hu("action","action",null,u,d);n.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ls!==0){var G=T?b0(d,T):new FormData(d);Hh(o,{pending:!0,data:G,method:d.method,action:g},null,G)}}else typeof g=="function"&&(D.preventDefault(),G=T?b0(d,T):new FormData(d),Hh(o,{pending:!0,data:G,method:d.method,action:g},g,G))},currentTarget:d}]})}}for(var yd=0;yd<rh.length;yd++){var Md=rh[yd],$E=Md.toLowerCase(),eT=Md[0].toUpperCase()+Md.slice(1);Zi($E,"on"+eT)}Zi(r_,"onAnimationEnd"),Zi(s_,"onAnimationIteration"),Zi(o_,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(_E,"onTransitionRun"),Zi(vE,"onTransitionStart"),Zi(xE,"onTransitionCancel"),Zi(l_,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function R0(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var T=u.length-1;0<=T;T--){var D=u[T],G=D.instance,te=D.currentTarget;if(D=D.listener,G!==g&&d.isPropagationStopped())break e;g=D,d.currentTarget=te;try{g(d)}catch(de){hc(de)}d.currentTarget=null,g=G}else for(T=0;T<u.length;T++){if(D=u[T],G=D.instance,te=D.currentTarget,D=D.listener,G!==g&&d.isPropagationStopped())break e;g=D,d.currentTarget=te;try{g(d)}catch(de){hc(de)}d.currentTarget=null,g=G}}}}function Mt(n,a){var o=a[Ps];o===void 0&&(o=a[Ps]=new Set);var u=n+"__bubble";o.has(u)||(C0(a,n,2,!1),o.add(u))}function Ed(n,a,o){var u=0;a&&(u|=4),C0(o,n,u,a)}var bc="_reactListening"+Math.random().toString(36).slice(2);function Td(n){if(!n[bc]){n[bc]=!0,Ou.forEach(function(o){o!=="selectionchange"&&(tT.has(o)||Ed(o,!1,n),Ed(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[bc]||(a[bc]=!0,Ed("selectionchange",!1,a))}}function C0(n,a,o,u){switch(J0(a)){case 2:var d=CT;break;case 8:d=wT;break;default:d=Fd}o=d.bind(null,a,o,n),d=void 0,!qf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(a,o,{capture:!0,passive:d}):n.addEventListener(a,o,!0):d!==void 0?n.addEventListener(a,o,{passive:d}):n.addEventListener(a,o,!1)}function Ad(n,a,o,u,d){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var D=u.stateNode.containerInfo;if(D===d)break;if(T===4)for(T=u.return;T!==null;){var G=T.tag;if((G===3||G===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;D!==null;){if(T=Ea(D),T===null)return;if(G=T.tag,G===5||G===6||G===26||G===27){u=g=T;continue e}D=D.parentNode}}u=u.return}Pg(function(){var te=g,de=Xf(o),xe=[];e:{var ae=u_.get(n);if(ae!==void 0){var se=Hu,rt=n;switch(n){case"keypress":if(Fu(o)===0)break e;case"keydown":case"keyup":se=ZM;break;case"focusin":rt="focus",se=Kf;break;case"focusout":rt="blur",se=Kf;break;case"beforeblur":case"afterblur":se=Kf;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=BM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=JM;break;case r_:case s_:case o_:se=HM;break;case l_:se=eE;break;case"scroll":case"scrollend":se=PM;break;case"wheel":se=nE;break;case"copy":case"cut":case"paste":se=VM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Hg;break;case"toggle":case"beforetoggle":se=aE}var nt=(a&4)!==0,kt=!nt&&(n==="scroll"||n==="scrollend"),Z=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var W=te,$;W!==null;){var me=W;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Z===null||(me=il(W,Z),me!=null&&nt.push(zl(W,me,$))),kt)break;W=W.return}0<nt.length&&(ae=new se(ae,rt,null,o,de),xe.push({event:ae,listeners:nt}))}}if((a&7)===0){e:{if(ae=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",ae&&o!==kf&&(rt=o.relatedTarget||o.fromElement)&&(Ea(rt)||rt[sa]))break e;if((se||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,se?(rt=o.relatedTarget||o.toElement,se=te,rt=rt?Ea(rt):null,rt!==null&&(kt=l(rt),nt=rt.tag,rt!==kt||nt!==5&&nt!==27&&nt!==6)&&(rt=null)):(se=null,rt=te),se!==rt)){if(nt=Fg,me="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Hg,me="onPointerLeave",Z="onPointerEnter",W="pointer"),kt=se==null?ae:qr(se),$=rt==null?ae:qr(rt),ae=new nt(me,W+"leave",se,o,de),ae.target=kt,ae.relatedTarget=$,me=null,Ea(de)===te&&(nt=new nt(Z,W+"enter",rt,o,de),nt.target=$,nt.relatedTarget=kt,me=nt),kt=me,se&&rt)t:{for(nt=se,Z=rt,W=0,$=nt;$;$=ho($))W++;for($=0,me=Z;me;me=ho(me))$++;for(;0<W-$;)nt=ho(nt),W--;for(;0<$-W;)Z=ho(Z),$--;for(;W--;){if(nt===Z||Z!==null&&nt===Z.alternate)break t;nt=ho(nt),Z=ho(Z)}nt=null}else nt=null;se!==null&&w0(xe,ae,se,nt,!1),rt!==null&&kt!==null&&w0(xe,kt,rt,nt,!0)}}e:{if(ae=te?qr(te):window,se=ae.nodeName&&ae.nodeName.toLowerCase(),se==="select"||se==="input"&&ae.type==="file")var ke=jg;else if(qg(ae))if(Zg)ke=pE;else{ke=hE;var _t=fE}else se=ae.nodeName,!se||se.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Vf(te.elementType)&&(ke=jg):ke=dE;if(ke&&(ke=ke(n,te))){Yg(xe,ke,o,de);break e}_t&&_t(n,ae,te),n==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&kn(ae,"number",ae.value)}switch(_t=te?qr(te):window,n){case"focusin":(qg(_t)||_t.contentEditable==="true")&&(Vs=_t,nh=te,fl=null);break;case"focusout":fl=nh=Vs=null;break;case"mousedown":ih=!0;break;case"contextmenu":case"mouseup":case"dragend":ih=!1,i_(xe,o,de);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":i_(xe,o,de)}var Qe;if(Jf)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Gs?Xg(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Gg&&o.locale!=="ko"&&(Gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Gs&&(Qe=Ig()):(ir=de,Yf="value"in ir?ir.value:ir.textContent,Gs=!0)),_t=Rc(te,at),0<_t.length&&(at=new zg(at,n,null,o,de),xe.push({event:at,listeners:_t}),Qe?at.data=Qe:(Qe=Wg(o),Qe!==null&&(at.data=Qe)))),(Qe=sE?oE(n,o):lE(n,o))&&(at=Rc(te,"onBeforeInput"),0<at.length&&(_t=new zg("onBeforeInput","beforeinput",null,o,de),xe.push({event:_t,listeners:at}),_t.data=Qe)),JE(xe,n,te,o,de)}R0(xe,a)})}function zl(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Rc(n,a){for(var o=a+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=il(n,o),d!=null&&u.unshift(zl(n,d,g)),d=il(n,a),d!=null&&u.push(zl(n,d,g))),n.tag===3)return u;n=n.return}return[]}function ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function w0(n,a,o,u,d){for(var g=a._reactName,T=[];o!==null&&o!==u;){var D=o,G=D.alternate,te=D.stateNode;if(D=D.tag,G!==null&&G===u)break;D!==5&&D!==26&&D!==27||te===null||(G=te,d?(te=il(o,g),te!=null&&T.unshift(zl(o,te,G))):d||(te=il(o,g),te!=null&&T.push(zl(o,te,G)))),o=o.return}T.length!==0&&n.push({event:a,listeners:T})}var nT=/\r\n?/g,iT=/\u0000|\uFFFD/g;function D0(n){return(typeof n=="string"?n:""+n).replace(nT,`
`).replace(iT,"")}function U0(n,a){return a=D0(a),D0(n)===a}function Cc(){}function Vt(n,a,o,u,d,g){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||ii(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&ii(n,""+u);break;case"className":Ve(n,"class",u);break;case"tabIndex":Ve(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(n,o,u);break;case"style":Ng(n,u,g);break;case"data":if(a!=="object"){Ve(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Iu(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&Vt(n,a,"name",d.name,d,null),Vt(n,a,"formEncType",d.formEncType,d,null),Vt(n,a,"formMethod",d.formMethod,d,null),Vt(n,a,"formTarget",d.formTarget,d,null)):(Vt(n,a,"encType",d.encType,d,null),Vt(n,a,"method",d.method,d,null),Vt(n,a,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Iu(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Cc);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Iu(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Mt("beforetoggle",n),Mt("toggle",n),Le(n,"popover",u);break;case"xlinkActuate":Oe(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Oe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Oe(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Oe(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Oe(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Oe(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Le(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=NM.get(o)||o,Le(n,o,u))}}function bd(n,a,o,u,d,g){switch(o){case"style":Ng(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?ii(n,u):(typeof u=="number"||typeof u=="bigint")&&ii(n,""+u);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Cc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pu.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),a=o.slice(2,d?o.length-7:void 0),g=n[rn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(a,g,d),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Le(n,o,u)}}}function zn(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",n),Mt("load",n);var u=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Vt(n,a,g,T,o,null)}}d&&Vt(n,a,"srcSet",o.srcSet,o,null),u&&Vt(n,a,"src",o.src,o,null);return;case"input":Mt("invalid",n);var D=g=T=d=null,G=null,te=null;for(u in o)if(o.hasOwnProperty(u)){var de=o[u];if(de!=null)switch(u){case"name":d=de;break;case"type":T=de;break;case"checked":G=de;break;case"defaultChecked":te=de;break;case"value":g=de;break;case"defaultValue":D=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(i(137,a));break;default:Vt(n,a,u,de,o,null)}}Jn(n,g,D,G,te,T,d,!1),St(n);return;case"select":Mt("invalid",n),u=T=g=null;for(d in o)if(o.hasOwnProperty(d)&&(D=o[d],D!=null))switch(d){case"value":g=D;break;case"defaultValue":T=D;break;case"multiple":u=D;default:Vt(n,a,d,D,o,null)}a=g,o=T,n.multiple=!!u,a!=null?sn(n,!!u,a,!1):o!=null&&sn(n,!!u,o,!0);return;case"textarea":Mt("invalid",n),g=d=u=null;for(T in o)if(o.hasOwnProperty(T)&&(D=o[T],D!=null))switch(T){case"value":u=D;break;case"defaultValue":d=D;break;case"children":g=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(i(91));break;default:Vt(n,a,T,D,o,null)}Fs(n,u,d,g),St(n);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(u=o[G],u!=null))switch(G){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Vt(n,a,G,u,o,null)}return;case"dialog":Mt("beforetoggle",n),Mt("toggle",n),Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":Mt("load",n);break;case"video":case"audio":for(u=0;u<Fl.length;u++)Mt(Fl[u],n);break;case"image":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"embed":case"source":case"link":Mt("error",n),Mt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in o)if(o.hasOwnProperty(te)&&(u=o[te],u!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Vt(n,a,te,u,o,null)}return;default:if(Vf(a)){for(de in o)o.hasOwnProperty(de)&&(u=o[de],u!==void 0&&bd(n,a,de,u,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(u=o[D],u!=null&&Vt(n,a,D,u,o,null))}function aT(n,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,T=null,D=null,G=null,te=null,de=null;for(se in o){var xe=o[se];if(o.hasOwnProperty(se)&&xe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":G=xe;default:u.hasOwnProperty(se)||Vt(n,a,se,null,u,xe)}}for(var ae in u){var se=u[ae];if(xe=o[ae],u.hasOwnProperty(ae)&&(se!=null||xe!=null))switch(ae){case"type":g=se;break;case"name":d=se;break;case"checked":te=se;break;case"defaultChecked":de=se;break;case"value":T=se;break;case"defaultValue":D=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(i(137,a));break;default:se!==xe&&Vt(n,a,ae,se,u,xe)}}Wt(n,T,D,G,te,de,g,d);return;case"select":se=T=D=ae=null;for(g in o)if(G=o[g],o.hasOwnProperty(g)&&G!=null)switch(g){case"value":break;case"multiple":se=G;default:u.hasOwnProperty(g)||Vt(n,a,g,null,u,G)}for(d in u)if(g=u[d],G=o[d],u.hasOwnProperty(d)&&(g!=null||G!=null))switch(d){case"value":ae=g;break;case"defaultValue":D=g;break;case"multiple":T=g;default:g!==G&&Vt(n,a,d,g,u,G)}a=D,o=T,u=se,ae!=null?sn(n,!!o,ae,!1):!!u!=!!o&&(a!=null?sn(n,!!o,a,!0):sn(n,!!o,o?[]:"",!1));return;case"textarea":se=ae=null;for(D in o)if(d=o[D],o.hasOwnProperty(D)&&d!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Vt(n,a,D,null,u,d)}for(T in u)if(d=u[T],g=o[T],u.hasOwnProperty(T)&&(d!=null||g!=null))switch(T){case"value":ae=d;break;case"defaultValue":se=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&Vt(n,a,T,d,u,g)}In(n,ae,se);return;case"option":for(var rt in o)if(ae=o[rt],o.hasOwnProperty(rt)&&ae!=null&&!u.hasOwnProperty(rt))switch(rt){case"selected":n.selected=!1;break;default:Vt(n,a,rt,null,u,ae)}for(G in u)if(ae=u[G],se=o[G],u.hasOwnProperty(G)&&ae!==se&&(ae!=null||se!=null))switch(G){case"selected":n.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Vt(n,a,G,ae,u,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in o)ae=o[nt],o.hasOwnProperty(nt)&&ae!=null&&!u.hasOwnProperty(nt)&&Vt(n,a,nt,null,u,ae);for(te in u)if(ae=u[te],se=o[te],u.hasOwnProperty(te)&&ae!==se&&(ae!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(i(137,a));break;default:Vt(n,a,te,ae,u,se)}return;default:if(Vf(a)){for(var kt in o)ae=o[kt],o.hasOwnProperty(kt)&&ae!==void 0&&!u.hasOwnProperty(kt)&&bd(n,a,kt,void 0,u,ae);for(de in u)ae=u[de],se=o[de],!u.hasOwnProperty(de)||ae===se||ae===void 0&&se===void 0||bd(n,a,de,ae,u,se);return}}for(var Z in o)ae=o[Z],o.hasOwnProperty(Z)&&ae!=null&&!u.hasOwnProperty(Z)&&Vt(n,a,Z,null,u,ae);for(xe in u)ae=u[xe],se=o[xe],!u.hasOwnProperty(xe)||ae===se||ae==null&&se==null||Vt(n,a,xe,ae,u,se)}var Rd=null,Cd=null;function wc(n){return n.nodeType===9?n:n.ownerDocument}function L0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function wd(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Dd=null;function rT(){var n=window.event;return n&&n.type==="popstate"?n===Dd?!1:(Dd=n,!0):(Dd=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,sT=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,oT=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(n){return P0.resolve(null).then(n).catch(lT)}:O0;function lT(n){setTimeout(function(){throw n})}function xr(n){return n==="head"}function I0(n,a){var o=a,u=0,d=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var T=n.ownerDocument;if(o&1&&Hl(T.documentElement),o&2&&Hl(T.body),o&4)for(o=T.head,Hl(o),T=o.firstChild;T;){var D=T.nextSibling,G=T.nodeName;T[oa]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=D}}if(d===0){n.removeChild(g),jl(a);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);jl(a)}function Ud(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Ud(o),Bs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function uT(n,a,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[oa])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Qi(n.nextSibling),n===null)break}return null}function cT(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Qi(n.nextSibling),n===null))return null;return n}function Ld(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function fT(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Qi(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Nd=null;function B0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function F0(n,a,o){switch(a=wc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Hl(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Bs(n)}var Fi=new Map,z0=new Set;function Dc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ba=q.d;q.d={f:hT,r:dT,D:pT,C:mT,L:gT,m:_T,X:xT,S:vT,M:ST};function hT(){var n=Ba.f(),a=yc();return n||a}function dT(n){var a=tr(n);a!==null&&a.tag===5&&a.type==="form"?rv(a):Ba.r(n)}var po=typeof document>"u"?null:document;function H0(n,a,o){var u=po;if(u&&typeof a=="string"&&a){var d=wn(a);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),z0.has(d)||(z0.add(d),n={rel:n,crossOrigin:o,href:a},u.querySelector(d)===null&&(a=u.createElement("link"),zn(a,"link",n),mn(a),u.head.appendChild(a)))}}function pT(n){Ba.D(n),H0("dns-prefetch",n,null)}function mT(n,a){Ba.C(n,a),H0("preconnect",n,a)}function gT(n,a,o){Ba.L(n,a,o);var u=po;if(u&&n&&a){var d='link[rel="preload"][as="'+wn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+wn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+wn(o.imageSizes)+'"]')):d+='[href="'+wn(n)+'"]';var g=d;switch(a){case"style":g=mo(n);break;case"script":g=go(n)}Fi.has(g)||(n=m({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Fi.set(g,n),u.querySelector(d)!==null||a==="style"&&u.querySelector(Gl(g))||a==="script"&&u.querySelector(Vl(g))||(a=u.createElement("link"),zn(a,"link",n),mn(a),u.head.appendChild(a)))}}function _T(n,a){Ba.m(n,a);var o=po;if(o&&n){var u=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+wn(u)+'"][href="'+wn(n)+'"]',g=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=go(n)}if(!Fi.has(g)&&(n=m({rel:"modulepreload",href:n},a),Fi.set(g,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Vl(g)))return}u=o.createElement("link"),zn(u,"link",n),mn(u),o.head.appendChild(u)}}}function vT(n,a,o){Ba.S(n,a,o);var u=po;if(u&&n){var d=nr(u).hoistableStyles,g=mo(n);a=a||"default";var T=d.get(g);if(!T){var D={loading:0,preload:null};if(T=u.querySelector(Gl(g)))D.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Fi.get(g))&&Od(n,o);var G=T=u.createElement("link");mn(G),zn(G,"link",n),G._p=new Promise(function(te,de){G.onload=te,G.onerror=de}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Uc(T,a,u)}T={type:"stylesheet",instance:T,count:1,state:D},d.set(g,T)}}}function xT(n,a){Ba.X(n,a);var o=po;if(o&&n){var u=nr(o).hoistableScripts,d=go(n),g=u.get(d);g||(g=o.querySelector(Vl(d)),g||(n=m({src:n,async:!0},a),(a=Fi.get(d))&&Pd(n,a),g=o.createElement("script"),mn(g),zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function ST(n,a){Ba.M(n,a);var o=po;if(o&&n){var u=nr(o).hoistableScripts,d=go(n),g=u.get(d);g||(g=o.querySelector(Vl(d)),g||(n=m({src:n,async:!0,type:"module"},a),(a=Fi.get(d))&&Pd(n,a),g=o.createElement("script"),mn(g),zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function G0(n,a,o,u){var d=(d=ne.current)?Dc(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=mo(o.href),o=nr(d).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=mo(o.href);var g=nr(d).hoistableStyles,T=g.get(n);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,T),(g=d.querySelector(Gl(n)))&&!g._p&&(T.instance=g,T.state.loading=5),Fi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Fi.set(n,o),g||yT(d,n,o,T.state))),a&&u===null)throw Error(i(528,""));return T}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=go(o),o=nr(d).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function mo(n){return'href="'+wn(n)+'"'}function Gl(n){return'link[rel="stylesheet"]['+n+"]"}function V0(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function yT(n,a,o,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),zn(a,"link",o),mn(a),n.head.appendChild(a))}function go(n){return'[src="'+wn(n)+'"]'}function Vl(n){return"script[async]"+n}function k0(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+wn(o.href)+'"]');if(u)return a.instance=u,mn(u),u;var d=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),mn(u),zn(u,"style",d),Uc(u,o.precedence,n),a.instance=u;case"stylesheet":d=mo(o.href);var g=n.querySelector(Gl(d));if(g)return a.state.loading|=4,a.instance=g,mn(g),g;u=V0(o),(d=Fi.get(d))&&Od(u,d),g=(n.ownerDocument||n).createElement("link"),mn(g);var T=g;return T._p=new Promise(function(D,G){T.onload=D,T.onerror=G}),zn(g,"link",u),a.state.loading|=4,Uc(g,o.precedence,n),a.instance=g;case"script":return g=go(o.src),(d=n.querySelector(Vl(g)))?(a.instance=d,mn(d),d):(u=o,(d=Fi.get(g))&&(u=m({},o),Pd(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),mn(d),zn(d,"link",u),n.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,Uc(u,o.precedence,n));return a.instance}function Uc(n,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,g=d,T=0;T<u.length;T++){var D=u[T];if(D.dataset.precedence===a)g=D;else if(g!==d)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function Od(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Pd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Lc=null;function X0(n,a,o){if(Lc===null){var u=new Map,d=Lc=new Map;d.set(o,u)}else d=Lc,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var g=o[d];if(!(g[oa]||g[Mn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(a)||"";T=n+T;var D=u.get(T);D?D.push(g):u.set(T,[g])}}return u}function W0(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function MT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function q0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var kl=null;function ET(){}function TT(n,a,o){if(kl===null)throw Error(i(475));var u=kl;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=mo(o.href),g=n.querySelector(Gl(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Nc.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=g,mn(g);return}g=n.ownerDocument||n,o=V0(o),(d=Fi.get(d))&&Od(o,d),g=g.createElement("link"),mn(g);var T=g;T._p=new Promise(function(D,G){T.onload=D,T.onerror=G}),zn(g,"link",o),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=Nc.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function AT(){if(kl===null)throw Error(i(475));var n=kl;return n.stylesheets&&n.count===0&&Id(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&Id(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Oc=null;function Id(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Oc=new Map,a.forEach(bT,n),Oc=null,Nc.call(n))}function bT(n,a){if(!(a.state.loading&4)){var o=Oc.get(n);if(o)var u=o.get(null);else{o=new Map,Oc.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var T=d[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}d=a.instance,T=d.getAttribute("data-precedence"),g=o.get(T)||u,g===u&&o.set(null,d),o.set(T,d),this.count++,u=Nc.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),g?g.parentNode.insertBefore(d,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),a.state.loading|=4}}var Xl={$$typeof:C,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function RT(n,a,o,u,d,g,T,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function Y0(n,a,o,u,d,g,T,D,G,te,de,xe){return n=new RT(n,a,o,T,D,G,te,xe),a=1,g===!0&&(a|=24),g=mi(3,null,null,a),n.current=g,g.stateNode=n,a=_h(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:a},yh(g),n}function j0(n){return n?(n=qs,n):qs}function Z0(n,a,o,u,d,g){d=j0(d),u.context===null?u.context=d:u.pendingContext=d,u=sr(a),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=or(n,u,a),o!==null&&(Si(o,n,a),Sl(o,n,a))}function K0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function Bd(n,a){K0(n,a),(n=n.alternate)&&K0(n,a)}function Q0(n){if(n.tag===13){var a=Ws(n,67108864);a!==null&&Si(a,n,67108864),Bd(n,67108864)}}var Pc=!0;function CT(n,a,o,u){var d=z.T;z.T=null;var g=q.p;try{q.p=2,Fd(n,a,o,u)}finally{q.p=g,z.T=d}}function wT(n,a,o,u){var d=z.T;z.T=null;var g=q.p;try{q.p=8,Fd(n,a,o,u)}finally{q.p=g,z.T=d}}function Fd(n,a,o,u){if(Pc){var d=zd(u);if(d===null)Ad(n,a,u,Ic,o),$0(n,u);else if(UT(d,n,a,o,u))u.stopPropagation();else if($0(n,u),a&4&&-1<DT.indexOf(n)){for(;d!==null;){var g=tr(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Je(g.pendingLanes);if(T!==0){var D=g;for(D.pendingLanes|=2,D.entangledLanes|=2;T;){var G=1<<31-ze(T);D.entanglements[1]|=G,T&=~G}ha(g),(Ft&6)===0&&(xc=Ie()+500,Bl(0))}}break;case 13:D=Ws(g,2),D!==null&&Si(D,g,2),yc(),Bd(g,2)}if(g=zd(u),g===null&&Ad(n,a,u,Ic,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else Ad(n,a,u,null,o)}}function zd(n){return n=Xf(n),Hd(n)}var Ic=null;function Hd(n){if(Ic=null,n=Ea(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=c(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Ic=n,null}function J0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case Ge:return 2;case Fe:return 8;case lt:case Ct:return 32;case F:return 268435456;default:return 32}default:return 32}}var Gd=!1,Sr=null,yr=null,Mr=null,Wl=new Map,ql=new Map,Er=[],DT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(n,a){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Wl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(a.pointerId)}}function Yl(n,a,o,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},a!==null&&(a=tr(a),a!==null&&Q0(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),n)}function UT(n,a,o,u,d){switch(a){case"focusin":return Sr=Yl(Sr,n,a,o,u,d),!0;case"dragenter":return yr=Yl(yr,n,a,o,u,d),!0;case"mouseover":return Mr=Yl(Mr,n,a,o,u,d),!0;case"pointerover":var g=d.pointerId;return Wl.set(g,Yl(Wl.get(g)||null,n,a,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,ql.set(g,Yl(ql.get(g)||null,n,a,o,u,d)),!0}return!1}function ex(n){var a=Ea(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){n.blockedOn=a,Yi(n.priority,function(){if(o.tag===13){var u=xi();u=ot(u);var d=Ws(o,u);d!==null&&Si(d,o,u),Bd(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=zd(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);kf=u,o.target.dispatchEvent(u),kf=null}else return a=tr(o),a!==null&&Q0(a),n.blockedOn=o,!1;a.shift()}return!0}function tx(n,a,o){Bc(n)&&o.delete(a)}function LT(){Gd=!1,Sr!==null&&Bc(Sr)&&(Sr=null),yr!==null&&Bc(yr)&&(yr=null),Mr!==null&&Bc(Mr)&&(Mr=null),Wl.forEach(tx),ql.forEach(tx)}function Fc(n,a){n.blockedOn===a&&(n.blockedOn=null,Gd||(Gd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,LT)))}var zc=null;function nx(n){zc!==n&&(zc=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===n&&(zc=null);for(var a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],d=n[a+2];if(typeof u!="function"){if(Hd(u||o)===null)continue;break}var g=tr(o);g!==null&&(n.splice(a,3),a-=3,Hh(g,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function jl(n){function a(G){return Fc(G,n)}Sr!==null&&Fc(Sr,n),yr!==null&&Fc(yr,n),Mr!==null&&Fc(Mr,n),Wl.forEach(a),ql.forEach(a);for(var o=0;o<Er.length;o++){var u=Er[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Er.length&&(o=Er[0],o.blockedOn===null);)ex(o),o.blockedOn===null&&Er.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],g=o[u+1],T=d[rn]||null;if(typeof g=="function")T||nx(o);else if(T){var D=null;if(g&&g.hasAttribute("formAction")){if(d=g,T=g[rn]||null)D=T.formAction;else if(Hd(d)!==null)continue}else D=T.action;typeof D=="function"?o[u+1]=D:(o.splice(u,3),u-=3),nx(o)}}}function Vd(n){this._internalRoot=n}Hc.prototype.render=Vd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=xi();Z0(o,u,n,a,null,null)},Hc.prototype.unmount=Vd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Z0(n.current,2,null,n,null,null),yc(),a[sa]=null}};function Hc(n){this._internalRoot=n}Hc.prototype.unstable_scheduleHydration=function(n){if(n){var a=wt();n={blockedOn:null,target:n,priority:a};for(var o=0;o<Er.length&&a!==0&&a<Er[o].priority;o++);Er.splice(o,0,n),o===0&&ex(n)}};var ix=e.version;if(ix!=="19.1.1")throw Error(i(527,ix,"19.1.1"));q.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var NT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{he=Gc.inject(NT),ve=Gc}catch{}}return Kl.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,u="",d=xv,g=Sv,T=yv,D=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks)),a=Y0(n,1,!1,null,null,o,u,d,g,T,D,null),n[sa]=a.current,Td(n),new Vd(a)},Kl.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var u=!1,d="",g=xv,T=Sv,D=yv,G=null,te=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(G=o.unstable_transitionCallbacks),o.formState!==void 0&&(te=o.formState)),a=Y0(n,1,!0,a,o??null,u,d,g,T,D,G,te),a.context=j0(null),o=a.current,u=xi(),u=ot(u),d=sr(u),d.callback=null,or(o,d,u),o=u,a.current.lanes=o,He(a,o),ha(a),n[sa]=a.current,Td(n),new Hc(a)},Kl.version="19.1.1",Kl}var dx;function kT(){if(dx)return Wd.exports;dx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wd.exports=VT(),Wd.exports}var XT=kT();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var px="popstate";function WT(r={}){function e(i,s){let{pathname:l,search:c,hash:f}=i.location;return Gp("",{pathname:l,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:fu(s)}return YT(e,t,null,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Sa(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qT(){return Math.random().toString(36).substring(2,10)}function mx(r,e){return{usr:r.state,key:r.key,idx:e}}function Gp(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Jo(e):e,state:t,key:e&&e.key||i||qT()}}function fu({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Jo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function YT(r,e,t,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,f="POP",p=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function _(){f="POP";let y=m(),x=y==null?null:y-h;h=y,p&&p({action:f,location:M.location,delta:x})}function v(y,x){f="PUSH";let A=Gp(M.location,y,x);h=m()+1;let C=mx(A,h),b=M.createHref(A);try{c.pushState(C,"",b)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;s.location.assign(b)}l&&p&&p({action:f,location:M.location,delta:1})}function S(y,x){f="REPLACE";let A=Gp(M.location,y,x);h=m();let C=mx(A,h),b=M.createHref(A);c.replaceState(C,"",b),l&&p&&p({action:f,location:M.location,delta:0})}function E(y){return jT(y)}let M={get action(){return f},get location(){return r(s,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(px,_),p=y,()=>{s.removeEventListener(px,_),p=null}},createHref(y){return e(s,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return c.go(y)}};return M}function jT(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),an(t,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:fu(r);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function FS(r,e,t="/"){return ZT(r,e,t,!1)}function ZT(r,e,t,i){let s=typeof e=="string"?Jo(e):e,l=Za(s.pathname||"/",t);if(l==null)return null;let c=zS(r);KT(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let h=oA(l);f=rA(c[p],h,i)}return f}function zS(r,e=[],t=[],i="",s=!1){let l=(c,f,p=s,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(i)&&p)return;an(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length)}let _=Ya([i,m.relativePath]),v=t.concat(m);c.children&&c.children.length>0&&(an(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),zS(c.children,e,v,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:iA(_,c.index),routesMeta:v})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let p of HS(c.path))l(c,f,!0,p)}),e}function HS(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=HS(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function KT(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:aA(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var QT=/^:[\w-]+$/,JT=3,$T=2,eA=1,tA=10,nA=-2,gx=r=>r==="*";function iA(r,e){let t=r.split("/"),i=t.length;return t.some(gx)&&(i+=nA),e&&(i+=$T),t.filter(s=>!gx(s)).reduce((s,l)=>s+(QT.test(l)?JT:l===""?eA:tA),i)}function aA(r,e){return r.length===e.length&&r.slice(0,-1).every((i,s)=>i===e[s])?r[r.length-1]-e[e.length-1]:0}function rA(r,e,t=!1){let{routesMeta:i}=r,s={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,m=l==="/"?e:e.slice(l.length)||"/",_=Ef({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),v=p.route;if(!_&&h&&t&&!i[i.length-1].route.index&&(_=Ef({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!_)return null;Object.assign(s,_.params),c.push({params:s,pathname:Ya([l,_.pathname]),pathnameBase:fA(Ya([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ya([l,_.pathnameBase]))}return c}function Ef(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=sA(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((h,{paramName:m,isOptional:_},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[v];return _&&!S?h[m]=void 0:h[m]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function sA(r,e=!1,t=!0){Sa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function oA(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Za(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function lA(r,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof r=="string"?Jo(r):r;return{pathname:t?t.startsWith("/")?t:uA(t,e):e,search:hA(i),hash:dA(s)}}function uA(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Zd(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cA(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function GS(r){let e=cA(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function VS(r,e,t,i=!1){let s;typeof r=="string"?s=Jo(r):(s={...r},an(!s.pathname||!s.pathname.includes("?"),Zd("?","pathname","search",s)),an(!s.pathname||!s.pathname.includes("#"),Zd("#","pathname","hash",s)),an(!s.search||!s.search.includes("#"),Zd("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;s.pathname=v.join("/")}f=_>=0?e[_]:"/"}let p=lA(s,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var Ya=r=>r.join("/").replace(/\/\/+/g,"/"),fA=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),hA=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,dA=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function pA(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var kS=["POST","PUT","PATCH","DELETE"];new Set(kS);var mA=["GET",...kS];new Set(mA);var $o=oe.createContext(null);$o.displayName="DataRouter";var Of=oe.createContext(null);Of.displayName="DataRouterState";oe.createContext(!1);var XS=oe.createContext({isTransitioning:!1});XS.displayName="ViewTransition";var gA=oe.createContext(new Map);gA.displayName="Fetchers";var _A=oe.createContext(null);_A.displayName="Await";var Ma=oe.createContext(null);Ma.displayName="Navigation";var Mu=oe.createContext(null);Mu.displayName="Location";var er=oe.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Jm=oe.createContext(null);Jm.displayName="RouteError";function vA(r,{relative:e}={}){an(Eu(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=oe.useContext(Ma),{hash:s,pathname:l,search:c}=Tu(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ya([t,l])),i.createHref({pathname:f,search:c,hash:s})}function Eu(){return oe.useContext(Mu)!=null}function Ns(){return an(Eu(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(Mu).location}var WS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qS(r){oe.useContext(Ma).static||oe.useLayoutEffect(r)}function xA(){let{isDataRoute:r}=oe.useContext(er);return r?LA():SA()}function SA(){an(Eu(),"useNavigate() may be used only in the context of a <Router> component.");let r=oe.useContext($o),{basename:e,navigator:t}=oe.useContext(Ma),{matches:i}=oe.useContext(er),{pathname:s}=Ns(),l=JSON.stringify(GS(i)),c=oe.useRef(!1);return qS(()=>{c.current=!0}),oe.useCallback((p,h={})=>{if(Sa(c.current,WS),!c.current)return;if(typeof p=="number"){t.go(p);return}let m=VS(p,JSON.parse(l),s,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ya([e,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[e,t,l,s,r])}oe.createContext(null);function Tu(r,{relative:e}={}){let{matches:t}=oe.useContext(er),{pathname:i}=Ns(),s=JSON.stringify(GS(t));return oe.useMemo(()=>VS(r,JSON.parse(s),i,e==="path"),[r,s,i,e])}function yA(r,e){return YS(r,e)}function YS(r,e,t,i,s){an(Eu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=oe.useContext(Ma),{matches:c}=oe.useContext(er),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",_=f&&f.route;{let A=_&&_.path||"";jS(h,!_||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=Ns(),S;if(e){let A=typeof e=="string"?Jo(e):e;an(m==="/"||A.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${A.pathname}" was given in the \`location\` prop.`),S=A}else S=v;let E=S.pathname||"/",M=E;if(m!=="/"){let A=m.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(A.length).join("/")}let y=FS(r,{pathname:M});Sa(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Sa(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=bA(y&&y.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:Ya([m,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?m:Ya([m,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),c,t,i,s);return e&&x?oe.createElement(Mu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function MA(){let r=UA(),e=pA(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:l},"ErrorBoundary")," or"," ",oe.createElement("code",{style:l},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?oe.createElement("pre",{style:s},t):null,c)}var EA=oe.createElement(MA,null),TA=class extends oe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?oe.createElement(er.Provider,{value:this.props.routeContext},oe.createElement(Jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function AA({routeContext:r,match:e,children:t}){let i=oe.useContext($o);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement(er.Provider,{value:r},t)}function bA(r,e=[],t=null,i=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,c=t?.errors;if(c!=null){let h=l.findIndex(m=>m.route.id&&c?.[m.route.id]!==void 0);an(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(t)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:_,errors:v}=t,S=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,m,_)=>{let v,S=!1,E=null,M=null;t&&(v=c&&m.route.id?c[m.route.id]:void 0,E=m.route.errorElement||EA,f&&(p<0&&_===0?(jS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,M=null):p===_&&(S=!0,M=m.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,_+1)),x=()=>{let A;return v?A=E:S?A=M:m.route.Component?A=oe.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,oe.createElement(AA,{match:m,routeContext:{outlet:h,matches:y,isDataRoute:t!=null},children:A})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?oe.createElement(TA,{location:t.location,revalidation:t.revalidation,component:E,error:v,children:x(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:i}):x()},null)}function $m(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RA(r){let e=oe.useContext($o);return an(e,$m(r)),e}function CA(r){let e=oe.useContext(Of);return an(e,$m(r)),e}function wA(r){let e=oe.useContext(er);return an(e,$m(r)),e}function eg(r){let e=wA(r),t=e.matches[e.matches.length-1];return an(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function DA(){return eg("useRouteId")}function UA(){let r=oe.useContext(Jm),e=CA("useRouteError"),t=eg("useRouteError");return r!==void 0?r:e.errors?.[t]}function LA(){let{router:r}=RA("useNavigate"),e=eg("useNavigate"),t=oe.useRef(!1);return qS(()=>{t.current=!0}),oe.useCallback(async(s,l={})=>{Sa(t.current,WS),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var _x={};function jS(r,e,t){!e&&!_x[r]&&(_x[r]=!0,Sa(!1,t))}oe.memo(NA);function NA({routes:r,future:e,state:t,unstable_onError:i}){return YS(r,void 0,t,i,e)}function Vp(r){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OA({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:l=!1}){an(!Eu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=oe.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof t=="string"&&(t=Jo(t));let{pathname:p="/",search:h="",hash:m="",state:_=null,key:v="default"}=t,S=oe.useMemo(()=>{let E=Za(p,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:_,key:v},navigationType:i}},[c,p,h,m,_,v,i]);return Sa(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:oe.createElement(Ma.Provider,{value:f},oe.createElement(Mu.Provider,{children:e,value:S}))}function PA({children:r,location:e}){return yA(kp(r),e)}function kp(r,e=[]){let t=[];return oe.Children.forEach(r,(i,s)=>{if(!oe.isValidElement(i))return;let l=[...e,s];if(i.type===oe.Fragment){t.push.apply(t,kp(i.props.children,l));return}an(i.type===Vp,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=kp(i.props.children,l)),t.push(c)}),t}var df="get",pf="application/x-www-form-urlencoded";function Pf(r){return r!=null&&typeof r.tagName=="string"}function IA(r){return Pf(r)&&r.tagName.toLowerCase()==="button"}function BA(r){return Pf(r)&&r.tagName.toLowerCase()==="form"}function FA(r){return Pf(r)&&r.tagName.toLowerCase()==="input"}function zA(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function HA(r,e){return r.button===0&&(!e||e==="_self")&&!zA(r)}var Vc=null;function GA(){if(Vc===null)try{new FormData(document.createElement("form"),0),Vc=!1}catch{Vc=!0}return Vc}var VA=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(r){return r!=null&&!VA.has(r)?(Sa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${pf}"`),null):r}function kA(r,e){let t,i,s,l,c;if(BA(r)){let f=r.getAttribute("action");i=f?Za(f,e):null,t=r.getAttribute("method")||df,s=Kd(r.getAttribute("enctype"))||pf,l=new FormData(r)}else if(IA(r)||FA(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(i=p?Za(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||df,s=Kd(r.getAttribute("formenctype"))||Kd(f.getAttribute("enctype"))||pf,l=new FormData(f,r),!GA()){let{name:h,type:m,value:_}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if(Pf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=df,i=null,s=pf,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function XA(r,e,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&Za(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function WA(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qA(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function YA(r,e,t){let i=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await WA(l,t);return c.links?c.links():[]}return[]}));return QA(i.flat(1).filter(qA).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function vx(r,e,t,i,s,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,f=(p,h)=>t[h].pathname!==p.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==p.params["*"];return l==="assets"?e.filter((p,h)=>c(p,h)||f(p,h)):l==="data"?e.filter((p,h)=>{let m=i.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(c(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function jA(r,e,{includeHydrateFallback:t}={}){return ZA(r.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function ZA(r){return[...new Set(r)]}function KA(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function QA(r,e){let t=new Set;return new Set(e),r.reduce((i,s)=>{let l=JSON.stringify(KA(s));return t.has(l)||(t.add(l),i.push({key:l,link:s})),i},[])}function ZS(){let r=oe.useContext($o);return tg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function JA(){let r=oe.useContext(Of);return tg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ng=oe.createContext(void 0);ng.displayName="FrameworkContext";function KS(){let r=oe.useContext(ng);return tg(r,"You must render this element inside a <HydratedRouter> element"),r}function $A(r,e){let t=oe.useContext(ng),[i,s]=oe.useState(!1),[l,c]=oe.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:_}=e,v=oe.useRef(null);oe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=x=>{x.forEach(A=>{c(A.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),oe.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let S=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Ql(f,S),onBlur:Ql(p,E),onMouseEnter:Ql(h,S),onMouseLeave:Ql(m,E),onTouchStart:Ql(_,S)}]:[!1,v,{}]}function Ql(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function eb({page:r,...e}){let{router:t}=ZS(),i=oe.useMemo(()=>FS(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?oe.createElement(nb,{page:r,matches:i,...e}):null}function tb(r){let{manifest:e,routeModules:t}=KS(),[i,s]=oe.useState([]);return oe.useEffect(()=>{let l=!1;return YA(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),i}function nb({page:r,matches:e,...t}){let i=Ns(),{manifest:s,routeModules:l}=KS(),{basename:c}=ZS(),{loaderData:f,matches:p}=JA(),h=oe.useMemo(()=>vx(r,e,p,s,i,"data"),[r,e,p,s,i]),m=oe.useMemo(()=>vx(r,e,p,s,i,"assets"),[r,e,p,s,i]),_=oe.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let E=new Set,M=!1;if(e.forEach(x=>{let A=s.routes[x.route.id];!A||!A.hasLoader||(!h.some(C=>C.route.id===x.route.id)&&x.route.id in f&&l[x.route.id]?.shouldRevalidate||A.hasClientLoader?M=!0:E.add(x.route.id))}),E.size===0)return[];let y=XA(r,c,"data");return M&&E.size>0&&y.searchParams.set("_routes",e.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[c,f,i,s,h,e,r,l]),v=oe.useMemo(()=>jA(m,s),[m,s]),S=tb(m);return oe.createElement(oe.Fragment,null,_.map(E=>oe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>oe.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),S.map(({key:E,link:M})=>oe.createElement("link",{key:E,nonce:t.nonce,...M})))}function ib(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var QS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{QS&&(window.__reactRouterVersion="7.9.1")}catch{}function ab({basename:r,children:e,window:t}){let i=oe.useRef();i.current==null&&(i.current=WT({window:t,v5Compat:!0}));let s=i.current,[l,c]=oe.useState({action:s.action,location:s.location}),f=oe.useCallback(p=>{oe.startTransition(()=>c(p))},[c]);return oe.useLayoutEffect(()=>s.listen(f),[s,f]),oe.createElement(OA,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:s})}var JS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$S=oe.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:f,target:p,to:h,preventScrollReset:m,viewTransition:_,...v},S){let{basename:E}=oe.useContext(Ma),M=typeof h=="string"&&JS.test(h),y,x=!1;if(typeof h=="string"&&M&&(y=h,QS))try{let R=new URL(window.location.href),L=h.startsWith("//")?new URL(R.protocol+h):new URL(h),B=Za(L.pathname,E);L.origin===R.origin&&B!=null?h=B+L.search+L.hash:x=!0}catch{Sa(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=vA(h,{relative:s}),[C,b,U]=$A(i,v),P=lb(h,{replace:c,state:f,target:p,preventScrollReset:m,relative:s,viewTransition:_});function I(R){e&&e(R),R.defaultPrevented||P(R)}let H=oe.createElement("a",{...v,...U,href:y||A,onClick:x||l?e:I,ref:ib(S,b),target:p,"data-discover":!M&&t==="render"?"true":void 0});return C&&!M?oe.createElement(oe.Fragment,null,H,oe.createElement(eb,{page:A})):H});$S.displayName="Link";var rb=oe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:f,children:p,...h},m){let _=Tu(c,{relative:h.relative}),v=Ns(),S=oe.useContext(Of),{navigator:E,basename:M}=oe.useContext(Ma),y=S!=null&&db(_)&&f===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,A=v.pathname,C=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(A=A.toLowerCase(),C=C?C.toLowerCase():null,x=x.toLowerCase()),C&&M&&(C=Za(C,M)||C);const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let U=A===x||!s&&A.startsWith(x)&&A.charAt(b)==="/",P=C!=null&&(C===x||!s&&C.startsWith(x)&&C.charAt(x.length)==="/"),I={isActive:U,isPending:P,isTransitioning:y},H=U?e:void 0,R;typeof i=="function"?R=i(I):R=[i,U?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof l=="function"?l(I):l;return oe.createElement($S,{...h,"aria-current":H,className:R,ref:m,style:L,to:c,viewTransition:f},typeof p=="function"?p(I):p)});rb.displayName="NavLink";var sb=oe.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:l,method:c=df,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:_,...v},S)=>{let E=fb(),M=hb(f,{relative:h}),y=c.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&JS.test(f),A=C=>{if(p&&p(C),C.defaultPrevented)return;C.preventDefault();let b=C.nativeEvent.submitter,U=b?.getAttribute("formmethod")||c;E(b||C.currentTarget,{fetcherKey:e,method:U,navigate:t,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:_})};return oe.createElement("form",{ref:S,method:y,action:M,onSubmit:i?p:A,...v,"data-discover":!x&&r==="render"?"true":void 0})});sb.displayName="Form";function ob(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(r){let e=oe.useContext($o);return an(e,ob(r)),e}function lb(r,{target:e,replace:t,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let f=xA(),p=Ns(),h=Tu(r,{relative:l});return oe.useCallback(m=>{if(HA(m,e)){m.preventDefault();let _=t!==void 0?t:fu(p)===fu(h);f(r,{replace:_,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[p,f,h,t,i,e,r,s,l,c])}var ub=0,cb=()=>`__${String(++ub)}__`;function fb(){let{router:r}=ey("useSubmit"),{basename:e}=oe.useContext(Ma),t=DA();return oe.useCallback(async(i,s={})=>{let{action:l,method:c,encType:f,formData:p,body:h}=kA(i,e);if(s.navigate===!1){let m=s.fetcherKey||cb();await r.fetch(m,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||f,flushSync:s.flushSync})}else await r.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function hb(r,{relative:e}={}){let{basename:t}=oe.useContext(Ma),i=oe.useContext(er);an(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...Tu(r||".",{relative:e})},c=Ns();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(m=>m==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ya([t,l.pathname])),fu(l)}function db(r,{relative:e}={}){let t=oe.useContext(XS);an(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ey("useViewTransitionState"),s=Tu(r,{relative:e});if(!t.isTransitioning)return!1;let l=Za(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Za(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Ef(s.pathname,c)!=null||Ef(s.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="180",pb=0,xx=1,mb=2,ty=1,gb=2,ka=3,Ka=0,On=1,Ti=2,xa=0,Po=1,Sx=2,yx=3,Mx=4,_b=5,ys=100,vb=101,xb=102,Sb=103,yb=104,Mb=200,Eb=201,Tb=202,Ab=203,Xp=204,Wp=205,bb=206,Rb=207,Cb=208,wb=209,Db=210,Ub=211,Lb=212,Nb=213,Ob=214,qp=0,Yp=1,jp=2,Ho=3,Zp=4,Kp=5,Qp=6,Jp=7,ny=0,Pb=1,Ib=2,Or=0,Bb=1,Fb=2,zb=3,Hb=4,Gb=5,Vb=6,kb=7,iy=300,Go=301,Vo=302,$p=303,em=304,Bf=306,tm=1e3,Es=1001,nm=1002,aa=1003,Xb=1004,kc=1005,Zn=1006,Qd=1007,Ts=1008,wi=1009,ay=1010,ry=1011,hu=1012,ig=1013,Br=1014,qa=1015,Au=1016,ag=1017,rg=1018,ko=1020,sy=35902,oy=35899,ly=1021,uy=1022,na=1023,du=1026,Xo=1027,cy=1028,sg=1029,fy=1030,og=1031,lg=1033,mf=33776,gf=33777,_f=33778,vf=33779,im=35840,am=35841,rm=35842,sm=35843,om=36196,lm=37492,um=37496,cm=37808,fm=37809,hm=37810,dm=37811,pm=37812,mm=37813,gm=37814,_m=37815,vm=37816,xm=37817,Sm=37818,ym=37819,Mm=37820,Em=37821,Tm=36492,Am=36494,bm=36495,Rm=36283,Cm=36284,wm=36285,Dm=36286,bu=3200,Wb=3201,qb=0,Yb=1,ma="",dn="srgb",Fr="srgb-linear",Tf="linear",Xt="srgb",_o=7680,Ex=519,jb=512,Zb=513,Kb=514,hy=515,Qb=516,Jb=517,$b=518,e1=519,Tx=35044,Um="300 es",_a=2e3,Af=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,Lm=180/Math.PI;function Ru(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qn[r&255]+qn[r>>8&255]+qn[r>>16&255]+qn[r>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function t1(r,e){return(r%e+e)%e}function $d(r,e,t){return(1-t)*r+t*e}function Jl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cu{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,l,c,f){let p=i[s+0],h=i[s+1],m=i[s+2],_=i[s+3];const v=l[c+0],S=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(_!==M||p!==v||h!==S||m!==E){let y=1-f;const x=p*v+h*S+m*E+_*M,A=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const U=Math.sqrt(C),P=Math.atan2(U,x*A);y=Math.sin(y*P)/U,f=Math.sin(f*P)/U}const b=f*A;if(p=p*y+v*b,h=h*y+S*b,m=m*y+E*b,_=_*y+M*b,y===1-f){const U=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=U,h*=U,m*=U,_*=U}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,l,c){const f=i[s],p=i[s+1],h=i[s+2],m=i[s+3],_=l[c],v=l[c+1],S=l[c+2],E=l[c+3];return e[t]=f*E+m*_+p*S-h*v,e[t+1]=p*E+m*v+h*_-f*S,e[t+2]=h*E+m*S+f*v-p*_,e[t+3]=m*E-f*_-p*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(i/2),m=f(s/2),_=f(l/2),v=p(i/2),S=p(s/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*_+h*S*E,this._y=h*S*_-v*m*E,this._z=h*m*E+v*S*_,this._w=h*m*_-v*S*E;break;case"YXZ":this._x=v*m*_+h*S*E,this._y=h*S*_-v*m*E,this._z=h*m*E-v*S*_,this._w=h*m*_+v*S*E;break;case"ZXY":this._x=v*m*_-h*S*E,this._y=h*S*_+v*m*E,this._z=h*m*E+v*S*_,this._w=h*m*_-v*S*E;break;case"ZYX":this._x=v*m*_-h*S*E,this._y=h*S*_+v*m*E,this._z=h*m*E-v*S*_,this._w=h*m*_+v*S*E;break;case"YZX":this._x=v*m*_+h*S*E,this._y=h*S*_+v*m*E,this._z=h*m*E-v*S*_,this._w=h*m*_-v*S*E;break;case"XZY":this._x=v*m*_-h*S*E,this._y=h*S*_-v*m*E,this._z=h*m*E+v*S*_,this._w=h*m*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],p=t[9],h=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-p)*S,this._y=(l-h)*S,this._z=(c-s)*S}else if(i>f&&i>_){const S=2*Math.sqrt(1+i-f-_);this._w=(m-p)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-i-_);this._w=(l-h)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(p+m)/S}else{const S=2*Math.sqrt(1+_-i-f);this._w=(c-s)/S,this._x=(l+h)/S,this._y=(p+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,l=e._z,c=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=i*m+c*f+s*h-l*p,this._y=s*m+c*p+l*f-i*h,this._z=l*m+c*h+i*p-s*f,this._w=c*m-i*f-s*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*i+t*this._x,this._y=S*s+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*_+this._w*v,this._x=i*_+this._x*v,this._y=s*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ax.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ax.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*s,this.y=l[1]*t+l[4]*i+l[7]*s,this.z=l[2]*t+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,l=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*s-f*i),m=2*(f*t-l*s),_=2*(l*i-c*t);return this.x=t+p*h+c*_-f*m,this.y=i+p*m+f*h-l*_,this.z=s+p*_+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s,this.y=l[1]*t+l[5]*i+l[9]*s,this.z=l[2]*t+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=s*p-l*f,this.y=l*c-i*p,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ep.copy(this).projectOnVector(e),this.sub(ep)}reflect(e){return this.sub(ep.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ep=new ce,Ax=new Cu;class ht{constructor(e,t,i,s,l,c,f,p,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,p,h)}set(e,t,i,s,l,c,f,p,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[3],p=i[6],h=i[1],m=i[4],_=i[7],v=i[2],S=i[5],E=i[8],M=s[0],y=s[3],x=s[6],A=s[1],C=s[4],b=s[7],U=s[2],P=s[5],I=s[8];return l[0]=c*M+f*A+p*U,l[3]=c*y+f*C+p*P,l[6]=c*x+f*b+p*I,l[1]=h*M+m*A+_*U,l[4]=h*y+m*C+_*P,l[7]=h*x+m*b+_*I,l[2]=v*M+S*A+E*U,l[5]=v*y+S*C+E*P,l[8]=v*x+S*b+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-i*l*m+i*f*p+s*l*h-s*c*p}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],_=m*c-f*h,v=f*p-m*l,S=h*l-c*p,E=t*_+i*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*h-m*i)*M,e[2]=(f*i-s*c)*M,e[3]=v*M,e[4]=(m*t-s*p)*M,e[5]=(s*l-f*t)*M,e[6]=S*M,e[7]=(i*p-h*t)*M,e[8]=(c*t-i*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(i*p,i*h,-i*(p*c+h*f)+c+e,-s*h,s*p,-s*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(tp.makeScale(e,t)),this}rotate(e){return this.premultiply(tp.makeRotation(-e)),this}translate(e,t){return this.premultiply(tp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tp=new ht;function dy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function n1(){const r=bf("canvas");return r.style.display="block",r}const bx={};function pu(r){r in bx||(bx[r]=!0,console.warn(r))}function i1(r,e,t){return new Promise(function(i,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const Rx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cx=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a1(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(s.r=ja(s.r),s.g=ja(s.g),s.b=ja(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(s.r=Io(s.r),s.g=Io(s.g),s.b=Io(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ma?Tf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return pu("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return pu("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fr]:{primaries:e,whitePoint:i,transfer:Tf,toXYZ:Rx,fromXYZ:Cx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:Rx,fromXYZ:Cx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}const Lt=a1();function ja(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vo;class r1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vo===void 0&&(vo=bf("canvas")),vo.width=e.width,vo.height=e.height;const s=vo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=ja(l[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ja(t[i]/255)*255):t[i]=ja(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s1=0;class ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Ru(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(np(s[c].image)):l.push(np(s[c]))}else l=np(s);i.url=l}return t||(e.images[this.uuid]=i),i}}function np(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?r1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o1=0;const ip=new ce;class Hn extends Vr{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=Es,s=Es,l=Zn,c=Ts,f=na,p=wi,h=Hn.DEFAULT_ANISOTROPY,m=ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Ru(),this.name="",this.source=new ug(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ip).x}get height(){return this.source.getSize(ip).y}get depth(){return this.source.getSize(ip).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tm:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tm:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=iy;Hn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,t=0,i=0,s=1){pn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,l;const p=e.elements,h=p[0],m=p[4],_=p[8],v=p[1],S=p[5],E=p[9],M=p[2],y=p[6],x=p[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,b=(S+1)/2,U=(x+1)/2,P=(m+v)/4,I=(_+M)/4,H=(E+y)/4;return C>b&&C>U?C<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(C),s=P/i,l=I/i):b>U?b<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(b),i=P/s,l=H/s):U<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),i=I/l,s=H/l),this.set(i,s,l,t),this}let A=Math.sqrt((y-E)*(y-E)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(A)<.001&&(A=1),this.x=(y-E)/A,this.y=(_-M)/A,this.z=(v-m)/A,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l1 extends Vr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t);const s={width:e,height:t,depth:i.depth},l=new Hn(s);this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ug(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends l1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class py extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=aa,this.minFilter=aa,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u1 extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=aa,this.minFilter=aa,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ji):Ji.fromBufferAttribute(l,c),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xc.copy(i.boundingBox)),Xc.applyMatrix4(e.matrixWorld),this.union(Xc)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($l),Wc.subVectors(this.max,$l),xo.subVectors(e.a,$l),So.subVectors(e.b,$l),yo.subVectors(e.c,$l),Ar.subVectors(So,xo),br.subVectors(yo,So),us.subVectors(xo,yo);let t=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-us.z,us.y,Ar.z,0,-Ar.x,br.z,0,-br.x,us.z,0,-us.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-us.y,us.x,0];return!ap(t,xo,So,yo,Wc)||(t=[1,0,0,0,1,0,0,0,1],!ap(t,xo,So,yo,Wc))?!1:(qc.crossVectors(Ar,br),t=[qc.x,qc.y,qc.z],ap(t,xo,So,yo,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ji=new ce,Xc=new wu,xo=new ce,So=new ce,yo=new ce,Ar=new ce,br=new ce,us=new ce,$l=new ce,Wc=new ce,qc=new ce,cs=new ce;function ap(r,e,t,i,s){for(let l=0,c=r.length-3;l<=c;l+=3){cs.fromArray(r,l);const f=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),p=e.dot(cs),h=t.dot(cs),m=i.dot(cs);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const c1=new wu,eu=new ce,rp=new ce;class cg{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):c1.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eu.subVectors(e,this.center);const t=eu.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(eu,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eu.copy(e.center).add(rp)),this.expandByPoint(eu.copy(e.center).sub(rp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const za=new ce,sp=new ce,Yc=new ce,Rr=new ce,op=new ce,jc=new ce,lp=new ce;class f1{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,za)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=za.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(za.copy(this.origin).addScaledVector(this.direction,t),za.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sp.copy(e).add(t).multiplyScalar(.5),Yc.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(sp);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Yc),f=Rr.dot(this.direction),p=-Rr.dot(Yc),h=Rr.lengthSq(),m=Math.abs(1-c*c);let _,v,S,E;if(m>0)if(_=c*p-f,v=c*f-p,E=l*m,_>=0)if(v>=-E)if(v<=E){const M=1/m;_*=M,v*=M,S=_*(_+c*v+2*f)+v*(c*_+v+2*p)+h}else v=l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*p)+h;else v=-l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*p)+h;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+h):v<=E?(_=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),S=-_*_+v*(v+2*p)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(sp).addScaledVector(Yc,v),S}intersectSphere(e,t){za.subVectors(e.center,this.origin);const i=za.dot(this.direction),s=za.dot(za)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=i-c,p=i+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>s||((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),i>p||f>s)||((f>i||i!==i)&&(i=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,za)!==null}intersectTriangle(e,t,i,s,l){op.subVectors(t,e),jc.subVectors(i,e),lp.crossVectors(op,jc);let c=this.direction.dot(lp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const p=f*this.direction.dot(jc.crossVectors(Rr,jc));if(p<0)return null;const h=f*this.direction.dot(op.cross(Rr));if(h<0||p+h>c)return null;const m=-f*Rr.dot(lp);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn{constructor(e,t,i,s,l,c,f,p,h,m,_,v,S,E,M,y){bn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,p,h,m,_,v,S,E,M,y)}set(e,t,i,s,l,c,f,p,h,m,_,v,S,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=h,x[6]=m,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Mo.setFromMatrixColumn(e,0).length(),l=1/Mo.setFromMatrixColumn(e,1).length(),c=1/Mo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),p=Math.cos(s),h=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*_,E=f*m,M=f*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=S+E*h,t[5]=v-M*h,t[9]=-f*p,t[2]=M-v*h,t[6]=E+S*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*m,S=p*_,E=h*m,M=h*_;t[0]=v+M*f,t[4]=E*f-S,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=S*f-E,t[6]=M+v*f,t[10]=c*p}else if(e.order==="ZXY"){const v=p*m,S=p*_,E=h*m,M=h*_;t[0]=v-M*f,t[4]=-c*_,t[8]=E+S*f,t[1]=S+E*f,t[5]=c*m,t[9]=M-v*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const v=c*m,S=c*_,E=f*m,M=f*_;t[0]=p*m,t[4]=E*h-S,t[8]=v*h+M,t[1]=p*_,t[5]=M*h+v,t[9]=S*h-E,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*h,E=f*p,M=f*h;t[0]=p*m,t[4]=M-v*_,t[8]=E*_+S,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*_+E,t[10]=v-M*_}else if(e.order==="XZY"){const v=c*p,S=c*h,E=f*p,M=f*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=v*_+M,t[5]=c*m,t[9]=S*_-E,t[2]=E*_-S,t[6]=f*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h1,e,d1)}lookAt(e,t,i){const s=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Cr.crossVectors(i,yi),Cr.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Cr.crossVectors(i,yi)),Cr.normalize(),Zc.crossVectors(yi,Cr),s[0]=Cr.x,s[4]=Zc.x,s[8]=yi.x,s[1]=Cr.y,s[5]=Zc.y,s[9]=yi.y,s[2]=Cr.z,s[6]=Zc.z,s[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[4],p=i[8],h=i[12],m=i[1],_=i[5],v=i[9],S=i[13],E=i[2],M=i[6],y=i[10],x=i[14],A=i[3],C=i[7],b=i[11],U=i[15],P=s[0],I=s[4],H=s[8],R=s[12],L=s[1],B=s[5],X=s[9],K=s[13],re=s[2],ee=s[6],z=s[10],q=s[14],k=s[3],_e=s[7],O=s[11],Q=s[15];return l[0]=c*P+f*L+p*re+h*k,l[4]=c*I+f*B+p*ee+h*_e,l[8]=c*H+f*X+p*z+h*O,l[12]=c*R+f*K+p*q+h*Q,l[1]=m*P+_*L+v*re+S*k,l[5]=m*I+_*B+v*ee+S*_e,l[9]=m*H+_*X+v*z+S*O,l[13]=m*R+_*K+v*q+S*Q,l[2]=E*P+M*L+y*re+x*k,l[6]=E*I+M*B+y*ee+x*_e,l[10]=E*H+M*X+y*z+x*O,l[14]=E*R+M*K+y*q+x*Q,l[3]=A*P+C*L+b*re+U*k,l[7]=A*I+C*B+b*ee+U*_e,l[11]=A*H+C*X+b*z+U*O,l[15]=A*R+C*K+b*q+U*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],l=e[12],c=e[1],f=e[5],p=e[9],h=e[13],m=e[2],_=e[6],v=e[10],S=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+l*p*_-s*h*_-l*f*v+i*h*v+s*f*S-i*p*S)+M*(+t*p*S-t*h*v+l*c*v-s*c*S+s*h*m-l*p*m)+y*(+t*h*_-t*f*S-l*c*_+i*c*S+l*f*m-i*h*m)+x*(-s*f*m-t*p*_+t*f*v+s*c*_-i*c*v+i*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],_=e[9],v=e[10],S=e[11],E=e[12],M=e[13],y=e[14],x=e[15],A=_*y*h-M*v*h+M*p*S-f*y*S-_*p*x+f*v*x,C=E*v*h-m*y*h-E*p*S+c*y*S+m*p*x-c*v*x,b=m*M*h-E*_*h+E*f*S-c*M*S-m*f*x+c*_*x,U=E*_*p-m*M*p-E*f*v+c*M*v+m*f*y-c*_*y,P=t*A+i*C+s*b+l*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=A*I,e[1]=(M*v*l-_*y*l-M*s*S+i*y*S+_*s*x-i*v*x)*I,e[2]=(f*y*l-M*p*l+M*s*h-i*y*h-f*s*x+i*p*x)*I,e[3]=(_*p*l-f*v*l-_*s*h+i*v*h+f*s*S-i*p*S)*I,e[4]=C*I,e[5]=(m*y*l-E*v*l+E*s*S-t*y*S-m*s*x+t*v*x)*I,e[6]=(E*p*l-c*y*l-E*s*h+t*y*h+c*s*x-t*p*x)*I,e[7]=(c*v*l-m*p*l+m*s*h-t*v*h-c*s*S+t*p*S)*I,e[8]=b*I,e[9]=(E*_*l-m*M*l-E*i*S+t*M*S+m*i*x-t*_*x)*I,e[10]=(c*M*l-E*f*l+E*i*h-t*M*h-c*i*x+t*f*x)*I,e[11]=(m*f*l-c*_*l-m*i*h+t*_*h+c*i*S-t*f*S)*I,e[12]=U*I,e[13]=(m*M*s-E*_*s+E*i*v-t*M*v-m*i*y+t*_*y)*I,e[14]=(E*f*s-c*M*s-E*i*p+t*M*p+c*i*y-t*f*y)*I,e[15]=(c*_*s-m*f*s+m*i*p-t*_*p-c*i*v+t*f*v)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,l=e.z;return t[0]*=i,t[4]*=s,t[8]*=l,t[1]*=i,t[5]*=s,t[9]*=l,t[2]*=i,t[6]*=s,t[10]*=l,t[3]*=i,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),l=1-i,c=e.x,f=e.y,p=e.z,h=l*c,m=l*f;return this.set(h*c+i,h*f-s*p,h*p+s*f,0,h*f+s*p,m*f+i,m*p-s*c,0,h*p-s*f,m*p+s*c,l*p*p+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,h=l+l,m=c+c,_=f+f,v=l*h,S=l*m,E=l*_,M=c*m,y=c*_,x=f*_,A=p*h,C=p*m,b=p*_,U=i.x,P=i.y,I=i.z;return s[0]=(1-(M+x))*U,s[1]=(S+b)*U,s[2]=(E-C)*U,s[3]=0,s[4]=(S-b)*P,s[5]=(1-(v+x))*P,s[6]=(y+A)*P,s[7]=0,s[8]=(E+C)*I,s[9]=(y-A)*I,s[10]=(1-(v+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let l=Mo.set(s[0],s[1],s[2]).length();const c=Mo.set(s[4],s[5],s[6]).length(),f=Mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],$i.copy(this);const h=1/l,m=1/c,_=1/f;return $i.elements[0]*=h,$i.elements[1]*=h,$i.elements[2]*=h,$i.elements[4]*=m,$i.elements[5]*=m,$i.elements[6]*=m,$i.elements[8]*=_,$i.elements[9]*=_,$i.elements[10]*=_,t.setFromRotationMatrix($i),i.x=l,i.y=c,i.z=f,this}makePerspective(e,t,i,s,l,c,f=_a,p=!1){const h=this.elements,m=2*l/(t-e),_=2*l/(i-s),v=(t+e)/(t-e),S=(i+s)/(i-s);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===_a)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Af)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,l,c,f=_a,p=!1){const h=this.elements,m=2/(t-e),_=2/(i-s),v=-(t+e)/(t-e),S=-(i+s)/(i-s);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===_a)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===Af)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mo=new ce,$i=new bn,h1=new ce(0,0,0),d1=new ce(1,1,1),Cr=new ce,Zc=new ce,yi=new ce,wx=new bn,Dx=new Cu;class Qa{constructor(e=0,t=0,i=0,s=Qa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],p=s[1],h=s[5],m=s[9],_=s[2],v=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dx.setFromEuler(this),this.setFromQuaternion(Dx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qa.DEFAULT_ORDER="XYZ";class my{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const Ux=new ce,Eo=new Cu,Ha=new bn,Kc=new ce,tu=new ce,m1=new ce,g1=new Cu,Lx=new ce(1,0,0),Nx=new ce(0,1,0),Ox=new ce(0,0,1),Px={type:"added"},_1={type:"removed"},To={type:"childadded",child:null},up={type:"childremoved",child:null};class Ri extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ru(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new ce,t=new Qa,i=new Cu,s=new ce(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bn},normalMatrix:{value:new ht}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new my,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(Lx,e)}rotateY(e){return this.rotateOnAxis(Nx,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,t){return Ux.copy(e).applyQuaternion(this.quaternion),this.position.add(Ux.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lx,e)}translateY(e){return this.translateOnAxis(Nx,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ha.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kc.copy(e):Kc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ha.lookAt(tu,Kc,this.up):Ha.lookAt(Kc,tu,this.up),this.quaternion.setFromRotationMatrix(Ha),s&&(Ha.extractRotation(s.matrixWorld),Eo.setFromRotationMatrix(Ha),this.quaternion.premultiply(Eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Px),To.child=e,this.dispatchEvent(To),To.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_1),up.child=e,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Px),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tu,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tu,g1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ri.DEFAULT_UP=new ce(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ea=new ce,Ga=new ce,cp=new ce,Va=new ce,Ao=new ce,bo=new ce,Ix=new ce,fp=new ce,hp=new ce,dp=new ce,pp=new pn,mp=new pn,gp=new pn;class ta{constructor(e=new ce,t=new ce,i=new ce){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ea.subVectors(e,t),s.cross(ea);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,i,s,l){ea.subVectors(s,t),Ga.subVectors(i,t),cp.subVectors(e,t);const c=ea.dot(ea),f=ea.dot(Ga),p=ea.dot(cp),h=Ga.dot(Ga),m=Ga.dot(cp),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Va)===null?!1:Va.x>=0&&Va.y>=0&&Va.x+Va.y<=1}static getInterpolation(e,t,i,s,l,c,f,p){return this.getBarycoord(e,t,i,s,Va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Va.x),p.addScaledVector(c,Va.y),p.addScaledVector(f,Va.z),p)}static getInterpolatedAttribute(e,t,i,s,l,c){return pp.setScalar(0),mp.setScalar(0),gp.setScalar(0),pp.fromBufferAttribute(e,t),mp.fromBufferAttribute(e,i),gp.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(pp,l.x),c.addScaledVector(mp,l.y),c.addScaledVector(gp,l.z),c}static isFrontFacing(e,t,i,s){return ea.subVectors(i,t),Ga.subVectors(e,t),ea.cross(Ga).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ea.subVectors(this.c,this.b),Ga.subVectors(this.a,this.b),ea.cross(Ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ta.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ta.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,l){return ta.getInterpolation(e,this.a,this.b,this.c,t,i,s,l)}containsPoint(e){return ta.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ta.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,l=this.c;let c,f;Ao.subVectors(s,i),bo.subVectors(l,i),fp.subVectors(e,i);const p=Ao.dot(fp),h=bo.dot(fp);if(p<=0&&h<=0)return t.copy(i);hp.subVectors(e,s);const m=Ao.dot(hp),_=bo.dot(hp);if(m>=0&&_<=m)return t.copy(s);const v=p*_-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(i).addScaledVector(Ao,c);dp.subVectors(e,l);const S=Ao.dot(dp),E=bo.dot(dp);if(E>=0&&S<=E)return t.copy(l);const M=S*h-p*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(i).addScaledVector(bo,f);const y=m*E-S*_;if(y<=0&&_-m>=0&&S-E>=0)return Ix.subVectors(l,s),f=(_-m)/(_-m+(S-E)),t.copy(s).addScaledVector(Ix,f);const x=1/(y+M+v);return c=M*x,f=v*x,t.copy(i).addScaledVector(Ao,c).addScaledVector(bo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function _p(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Lt.workingColorSpace){if(e=t1(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=_p(c,l,e+1/3),this.g=_p(c,l,e),this.b=_p(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=gy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Io(e.r),this.g=Io(e.g),this.b=Io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Lt.workingToColorSpace(Yn.copy(this),e),Math.round(Tt(Yn.r*255,0,255))*65536+Math.round(Tt(Yn.g*255,0,255))*256+Math.round(Tt(Yn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Yn.copy(this),t);const i=Yn.r,s=Yn.g,l=Yn.b,c=Math.max(i,s,l),f=Math.min(i,s,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const _=c-f;switch(h=m<=.5?_/(c+f):_/(2-c-f),c){case i:p=(s-l)/_+(s<l?6:0);break;case s:p=(l-i)/_+2;break;case l:p=(i-s)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=dn){Lt.workingToColorSpace(Yn.copy(this),e);const t=Yn.r,i=Yn.g,s=Yn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(Qc);const i=$d(wr.h,Qc.h,t),s=$d(wr.s,Qc.s,t),l=$d(wr.l,Qc.l,t);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*s,this.g=l[1]*t+l[4]*i+l[7]*s,this.b=l[2]*t+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Bt;Bt.NAMES=gy;let v1=0;class el extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ru(),this.name="",this.type="Material",this.blending=Po,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xp,this.blendDst=Wp,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ex,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(i.blending=this.blending),this.side!==Ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xp&&(i.blendSrc=this.blendSrc),this.blendDst!==Wp&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ex&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _y extends el{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qa,this.combine=ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new ce,Jc=new vt;let x1=0;class Wi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tx,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jc.fromBufferAttribute(this,t),Jc.applyMatrix3(e),this.setXY(t,Jc.x,Jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jl(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jl(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jl(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tx&&(e.usage=this.usage),e}}class vy extends Wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xy extends Wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bs extends Wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S1=0;const zi=new bn,vp=new Ri,Ro=new ce,Mi=new wu,nu=new wu,Nn=new ce;class kr extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Ru(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dy(e)?xy:vy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ht().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return vp.lookAt(e),vp.updateMatrix(),this.applyMatrix4(vp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new bs(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const l=t[i];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];nu.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(Mi.min,nu.min),Mi.expandByPoint(Nn),Nn.addVectors(Mi.max,nu.max),Mi.expandByPoint(Nn)):(Mi.expandByPoint(nu.min),Mi.expandByPoint(nu.max))}Mi.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)Nn.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(Nn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Nn.fromBufferAttribute(f,h),p&&(Ro.fromBufferAttribute(e,h),Nn.add(Ro)),s=Math.max(s,i.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let H=0;H<i.count;H++)f[H]=new ce,p[H]=new ce;const h=new ce,m=new ce,_=new ce,v=new vt,S=new vt,E=new vt,M=new ce,y=new ce;function x(H,R,L){h.fromBufferAttribute(i,H),m.fromBufferAttribute(i,R),_.fromBufferAttribute(i,L),v.fromBufferAttribute(l,H),S.fromBufferAttribute(l,R),E.fromBufferAttribute(l,L),m.sub(h),_.sub(h),S.sub(v),E.sub(v);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(m,-E.x).multiplyScalar(B),f[H].add(M),f[R].add(M),f[L].add(M),p[H].add(y),p[R].add(y),p[L].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,R=A.length;H<R;++H){const L=A[H],B=L.start,X=L.count;for(let K=B,re=B+X;K<re;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new ce,b=new ce,U=new ce,P=new ce;function I(H){U.fromBufferAttribute(s,H),P.copy(U);const R=f[H];C.copy(R),C.sub(U.multiplyScalar(U.dot(R))).normalize(),b.crossVectors(P,R);const B=b.dot(p[H])<0?-1:1;c.setXYZW(H,C.x,C.y,C.z,B)}for(let H=0,R=A.length;H<R;++H){const L=A[H],B=L.start,X=L.count;for(let K=B,re=B+X;K<re;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const s=new ce,l=new ce,c=new ce,f=new ce,p=new ce,h=new ce,m=new ce,_=new ce;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),f.fromBufferAttribute(i,E),p.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),f.add(m),p.add(m),h.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,p.x,p.y,p.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(p.length*m);let S=0,E=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*m;for(let x=0;x<m;x++)v[E++]=h[S++]}return new Wi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kr,i=this.index.array,s=this.attributes;for(const f in s){const p=s[f],h=e(p,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],S=e(v,i);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const p in i){const h=i[p];e.data.attributes[p]=h.toJSON(e.data)}const s={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,v=h.length;_<v;_++){const S=h[_];m.push(S.toJSON(e.data))}m.length>0&&(s[p]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,S=_.length;v<S;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bx=new bn,fs=new f1,$c=new cg,Fx=new ce,ef=new ce,tf=new ce,nf=new ce,xp=new ce,af=new ce,zx=new ce,rf=new ce;class ia extends Ri{constructor(e=new kr,t=new _y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){af.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],_=l[p];m!==0&&(xp.fromBufferAttribute(_,e),c?af.addScaledVector(xp,m):af.addScaledVector(xp.sub(t),m))}t.add(af)}return t}raycast(e,t){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!($c.containsPoint(fs.origin)===!1&&(fs.intersectSphere($c,Fx)===null||fs.origin.distanceToSquared(Fx)>(e.far-e.near)**2))&&(Bx.copy(l).invert(),fs.copy(e.ray).applyMatrix4(Bx),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=c[y.materialIndex],A=Math.max(y.start,S.start),C=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=A,U=C;b<U;b+=3){const P=f.getX(b),I=f.getX(b+1),H=f.getX(b+2);s=sf(this,x,e,i,h,m,_,P,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const A=f.getX(y),C=f.getX(y+1),b=f.getX(y+2);s=sf(this,c,e,i,h,m,_,A,C,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=c[y.materialIndex],A=Math.max(y.start,S.start),C=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=A,U=C;b<U;b+=3){const P=b,I=b+1,H=b+2;s=sf(this,x,e,i,h,m,_,P,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const A=y,C=y+1,b=y+2;s=sf(this,c,e,i,h,m,_,A,C,b),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function y1(r,e,t,i,s,l,c,f){let p;if(e.side===On?p=i.intersectTriangle(c,l,s,!0,f):p=i.intersectTriangle(s,l,c,e.side===Ka,f),p===null)return null;rf.copy(f),rf.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(rf);return h<t.near||h>t.far?null:{distance:h,point:rf.clone(),object:r}}function sf(r,e,t,i,s,l,c,f,p,h){r.getVertexPosition(f,ef),r.getVertexPosition(p,tf),r.getVertexPosition(h,nf);const m=y1(r,e,t,i,ef,tf,nf,zx);if(m){const _=new ce;ta.getBarycoord(zx,ef,tf,nf,_),s&&(m.uv=ta.getInterpolatedAttribute(s,f,p,h,_,new vt)),l&&(m.uv1=ta.getInterpolatedAttribute(l,f,p,h,_,new vt)),c&&(m.normal=ta.getInterpolatedAttribute(c,f,p,h,_,new ce),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new ce,materialIndex:0};ta.getNormal(ef,tf,nf,v.normal),m.face=v,m.barycoord=_}return m}class Du extends kr{constructor(e=1,t=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,s,c,2),E("x","z","y",1,-1,e,i,-t,s,c,3),E("x","y","z",1,-1,e,t,i,s,l,4),E("x","y","z",-1,-1,e,t,-i,s,l,5),this.setIndex(p),this.setAttribute("position",new bs(h,3)),this.setAttribute("normal",new bs(m,3)),this.setAttribute("uv",new bs(_,2));function E(M,y,x,A,C,b,U,P,I,H,R){const L=b/I,B=U/H,X=b/2,K=U/2,re=P/2,ee=I+1,z=H+1;let q=0,k=0;const _e=new ce;for(let O=0;O<z;O++){const Q=O*B-K;for(let pe=0;pe<ee;pe++){const ye=pe*L-X;_e[M]=ye*A,_e[y]=Q*C,_e[x]=re,h.push(_e.x,_e.y,_e.z),_e[M]=0,_e[y]=0,_e[x]=P>0?1:-1,m.push(_e.x,_e.y,_e.z),_.push(pe/I),_.push(1-O/H),q+=1}}for(let O=0;O<H;O++)for(let Q=0;Q<I;Q++){const pe=v+Q+ee*O,ye=v+Q+ee*(O+1),be=v+(Q+1)+ee*(O+1),Be=v+(Q+1)+ee*O;p.push(pe,ye,Be),p.push(ye,be,Be),k+=6}f.addGroup(S,k,R),S+=k,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wo(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ti(r){const e={};for(let t=0;t<r.length;t++){const i=Wo(r[t]);for(const s in i)e[s]=i[s]}return e}function M1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const E1={clone:Wo,merge:ti};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends el{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=A1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wo(e.uniforms),this.uniformsGroups=M1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class fg extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=_a,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new ce,Hx=new vt,Gx=new vt;class Gi extends fg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lm*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Hx,Gx),t.subVectors(Gx,Hx)}setViewOffset(e,t,i,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/p,t-=c.offsetY*i/h,s*=c.width/p,i*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Co=-90,wo=1;class b1 extends Ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gi(Co,wo,e,t);s.layers=this.layers,this.add(s);const l=new Gi(Co,wo,e,t);l.layers=this.layers,this.add(l);const c=new Gi(Co,wo,e,t);c.layers=this.layers,this.add(c);const f=new Gi(Co,wo,e,t);f.layers=this.layers,this.add(f);const p=new Gi(Co,wo,e,t);p.layers=this.layers,this.add(p);const h=new Gi(Co,wo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,l,c,f,p]=t;for(const h of t)this.remove(h);if(e===_a)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Af)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,l),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,f),e.setRenderTarget(i,3,s),e.render(t,p),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(_,v,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class yy extends Hn{constructor(e=[],t=Go,i,s,l,c,f,p,h,m){super(e,t,i,s,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R1 extends ra{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yy(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Du(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:Wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:xa});l.uniforms.tEquirect.value=t;const c=new ia(s,l),f=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Zn),new b1(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(l)}}class of extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C1={type:"move"};class Sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new of,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new of,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new of,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new of;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Nm extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qa,this.environmentIntensity=1,this.environmentRotation=new Qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yp=new ce,w1=new ce,D1=new ht;class _s{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yp.subVectors(i,t).cross(w1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||D1.getNormalMatrix(e),s=this.coplanarPoint(yp).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new cg,U1=new vt(.5,.5),lf=new ce;class My{constructor(e=new _s,t=new _s,i=new _s,s=new _s,l=new _s,c=new _s){this.planes=[e,t,i,s,l,c]}set(e,t,i,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_a,i=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],h=l[3],m=l[4],_=l[5],v=l[6],S=l[7],E=l[8],M=l[9],y=l[10],x=l[11],A=l[12],C=l[13],b=l[14],U=l[15];if(s[0].setComponents(h-c,S-m,x-E,U-A).normalize(),s[1].setComponents(h+c,S+m,x+E,U+A).normalize(),s[2].setComponents(h+f,S+_,x+M,U+C).normalize(),s[3].setComponents(h-f,S-_,x-M,U-C).normalize(),i)s[4].setComponents(p,v,y,b).normalize(),s[5].setComponents(h-p,S-v,x-y,U-b).normalize();else if(s[4].setComponents(h-p,S-v,x-y,U-b).normalize(),t===_a)s[5].setComponents(h+p,S+v,x+y,U+b).normalize();else if(t===Af)s[5].setComponents(p,v,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=U1.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lf.x=s.normal.x>0?e.max.x:e.min.x,lf.y=s.normal.y>0?e.max.y:e.min.y,lf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hg extends Hn{constructor(e,t,i=Br,s,l,c,f=aa,p=aa,h,m=du,_=1){if(m!==du&&m!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,c,f,p,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ug(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ey extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uu extends kr{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const l=e/2,c=t/2,f=Math.floor(i),p=Math.floor(s),h=f+1,m=p+1,_=e/f,v=t/p,S=[],E=[],M=[],y=[];for(let x=0;x<m;x++){const A=x*v-c;for(let C=0;C<h;C++){const b=C*_-l;E.push(b,-A,0),M.push(0,0,1),y.push(C/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let A=0;A<f;A++){const C=A+h*x,b=A+h*(x+1),U=A+1+h*(x+1),P=A+1+h*x;S.push(C,b,P),S.push(b,U,P)}this.setIndex(S),this.setAttribute("position",new bs(E,3)),this.setAttribute("normal",new bs(M,3)),this.setAttribute("uv",new bs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class L1 extends el{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends el{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ty extends fg{constructor(e=-1,t=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=s+t,p=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class O1 extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class P1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class An{constructor(e){this.value=e}clone(){return new An(this.value.clone===void 0?this.value:this.value.clone())}}function Vx(r,e,t,i){const s=I1(i);switch(t){case ly:return r*e;case cy:return r*e/s.components*s.byteLength;case sg:return r*e/s.components*s.byteLength;case fy:return r*e*2/s.components*s.byteLength;case og:return r*e*2/s.components*s.byteLength;case uy:return r*e*3/s.components*s.byteLength;case na:return r*e*4/s.components*s.byteLength;case lg:return r*e*4/s.components*s.byteLength;case mf:case gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _f:case vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case am:case sm:return Math.max(r,16)*Math.max(e,8)/4;case im:case rm:return Math.max(r,8)*Math.max(e,8)/2;case om:case lm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case um:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fm:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hm:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case dm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pm:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mm:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _m:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vm:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sm:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ym:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Mm:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Em:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tm:case Am:case bm:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rm:case Cm:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wm:case Dm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function I1(r){switch(r){case wi:case ay:return{byteLength:1,components:1};case hu:case ry:case Au:return{byteLength:2,components:1};case ag:case rg:return{byteLength:2,components:4};case Br:case ig:case qa:return{byteLength:4,components:1};case sy:case oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ay(){let r=null,e=!1,t=null,i=null;function s(l,c){t(l,c),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function B1(r){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,p,h){const m=p.array,_=p.updateRanges;if(r.bindBuffer(h,f),_.length===0)r.bufferSubData(h,0,m);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],M=_[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,_[v]=M)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const M=_[S];r.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,p),h.version=f.version}}return{get:s,remove:l,update:c}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,J1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pR="gl_FragColor = linearToOutputTexel( gl_FragColor );",mR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ER=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$R=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,EC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:F1,alphahash_pars_fragment:z1,alphamap_fragment:H1,alphamap_pars_fragment:G1,alphatest_fragment:V1,alphatest_pars_fragment:k1,aomap_fragment:X1,aomap_pars_fragment:W1,batching_pars_vertex:q1,batching_vertex:Y1,begin_vertex:j1,beginnormal_vertex:Z1,bsdfs:K1,iridescence_fragment:Q1,bumpmap_pars_fragment:J1,clipping_planes_fragment:$1,clipping_planes_pars_fragment:eR,clipping_planes_pars_vertex:tR,clipping_planes_vertex:nR,color_fragment:iR,color_pars_fragment:aR,color_pars_vertex:rR,color_vertex:sR,common:oR,cube_uv_reflection_fragment:lR,defaultnormal_vertex:uR,displacementmap_pars_vertex:cR,displacementmap_vertex:fR,emissivemap_fragment:hR,emissivemap_pars_fragment:dR,colorspace_fragment:pR,colorspace_pars_fragment:mR,envmap_fragment:gR,envmap_common_pars_fragment:_R,envmap_pars_fragment:vR,envmap_pars_vertex:xR,envmap_physical_pars_fragment:DR,envmap_vertex:SR,fog_vertex:yR,fog_pars_vertex:MR,fog_fragment:ER,fog_pars_fragment:TR,gradientmap_pars_fragment:AR,lightmap_pars_fragment:bR,lights_lambert_fragment:RR,lights_lambert_pars_fragment:CR,lights_pars_begin:wR,lights_toon_fragment:UR,lights_toon_pars_fragment:LR,lights_phong_fragment:NR,lights_phong_pars_fragment:OR,lights_physical_fragment:PR,lights_physical_pars_fragment:IR,lights_fragment_begin:BR,lights_fragment_maps:FR,lights_fragment_end:zR,logdepthbuf_fragment:HR,logdepthbuf_pars_fragment:GR,logdepthbuf_pars_vertex:VR,logdepthbuf_vertex:kR,map_fragment:XR,map_pars_fragment:WR,map_particle_fragment:qR,map_particle_pars_fragment:YR,metalnessmap_fragment:jR,metalnessmap_pars_fragment:ZR,morphinstance_vertex:KR,morphcolor_vertex:QR,morphnormal_vertex:JR,morphtarget_pars_vertex:$R,morphtarget_vertex:eC,normal_fragment_begin:tC,normal_fragment_maps:nC,normal_pars_fragment:iC,normal_pars_vertex:aC,normal_vertex:rC,normalmap_pars_fragment:sC,clearcoat_normal_fragment_begin:oC,clearcoat_normal_fragment_maps:lC,clearcoat_pars_fragment:uC,iridescence_pars_fragment:cC,opaque_fragment:fC,packing:hC,premultiplied_alpha_fragment:dC,project_vertex:pC,dithering_fragment:mC,dithering_pars_fragment:gC,roughnessmap_fragment:_C,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:SC,shadowmap_vertex:yC,shadowmask_pars_fragment:MC,skinbase_vertex:EC,skinning_pars_vertex:TC,skinning_vertex:AC,skinnormal_vertex:bC,specularmap_fragment:RC,specularmap_pars_fragment:CC,tonemapping_fragment:wC,tonemapping_pars_fragment:DC,transmission_fragment:UC,transmission_pars_fragment:LC,uv_pars_fragment:NC,uv_pars_vertex:OC,uv_vertex:PC,worldpos_vertex:IC,background_vert:BC,background_frag:FC,backgroundCube_vert:zC,backgroundCube_frag:HC,cube_vert:GC,cube_frag:VC,depth_vert:kC,depth_frag:XC,distanceRGBA_vert:WC,distanceRGBA_frag:qC,equirect_vert:YC,equirect_frag:jC,linedashed_vert:ZC,linedashed_frag:KC,meshbasic_vert:QC,meshbasic_frag:JC,meshlambert_vert:$C,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:aw,meshphong_vert:rw,meshphong_frag:sw,meshphysical_vert:ow,meshphysical_frag:lw,meshtoon_vert:uw,meshtoon_frag:cw,points_vert:fw,points_frag:hw,shadow_vert:dw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},Pe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},pa={basic:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ti([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ti([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ti([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ti([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ti([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ti([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ti([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ti([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:ti([Pe.common,Pe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:ti([Pe.lights,Pe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};pa.physical={uniforms:ti([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const uf={r:0,b:0,g:0},ds=new Qa,_w=new bn;function vw(r,e,t,i,s,l,c){const f=new Bt(0);let p=l===!0?0:1,h,m,_=null,v=0,S=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const U=E(C);U===null?x(f,p):U&&U.isColor&&(x(U,1),b=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(C,b){const U=E(b);U&&(U.isCubeTexture||U.mapping===Bf)?(m===void 0&&(m=new ia(new Du(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Wo(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),ds.copy(b.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_w.makeRotationFromEuler(ds)),m.material.toneMapped=Lt.getTransfer(U.colorSpace)!==Xt,(_!==U||v!==U.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,_=U,v=U.version,S=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new ia(new Uu(2,2),new qi({name:"BackgroundMaterial",uniforms:Wo(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(U.colorSpace)!==Xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||S!==r.toneMapping)&&(h.material.needsUpdate=!0,_=U,v=U.version,S=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,b){C.getRGB(uf,Sy(r)),i.buffers.color.setClear(uf.r,uf.g,uf.b,b,c)}function A(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,b=1){f.set(C),p=b,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:M,addToRenderList:y,dispose:A}}function xw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=v(null);let l=s,c=!1;function f(L,B,X,K,re){let ee=!1;const z=_(K,X,B);l!==z&&(l=z,h(l.object)),ee=S(L,K,X,re),ee&&E(L,K,X,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,b(L,B,X,K),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return r.createVertexArray()}function h(L){return r.bindVertexArray(L)}function m(L){return r.deleteVertexArray(L)}function _(L,B,X){const K=X.wireframe===!0;let re=i[L.id];re===void 0&&(re={},i[L.id]=re);let ee=re[B.id];ee===void 0&&(ee={},re[B.id]=ee);let z=ee[K];return z===void 0&&(z=v(p()),ee[K]=z),z}function v(L){const B=[],X=[],K=[];for(let re=0;re<t;re++)B[re]=0,X[re]=0,K[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:K,object:L,attributes:{},index:null}}function S(L,B,X,K){const re=l.attributes,ee=B.attributes;let z=0;const q=X.getAttributes();for(const k in q)if(q[k].location>=0){const O=re[k];let Q=ee[k];if(Q===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;z++}return l.attributesNum!==z||l.index!==K}function E(L,B,X,K){const re={},ee=B.attributes;let z=0;const q=X.getAttributes();for(const k in q)if(q[k].location>=0){let O=ee[k];O===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),re[k]=Q,z++}l.attributes=re,l.attributesNum=z,l.index=K}function M(){const L=l.newAttributes;for(let B=0,X=L.length;B<X;B++)L[B]=0}function y(L){x(L,0)}function x(L,B){const X=l.newAttributes,K=l.enabledAttributes,re=l.attributeDivisors;X[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),re[L]!==B&&(r.vertexAttribDivisor(L,B),re[L]=B)}function A(){const L=l.newAttributes,B=l.enabledAttributes;for(let X=0,K=B.length;X<K;X++)B[X]!==L[X]&&(r.disableVertexAttribArray(X),B[X]=0)}function C(L,B,X,K,re,ee,z){z===!0?r.vertexAttribIPointer(L,B,X,re,ee):r.vertexAttribPointer(L,B,X,K,re,ee)}function b(L,B,X,K){M();const re=K.attributes,ee=X.getAttributes(),z=B.defaultAttributeValues;for(const q in ee){const k=ee[q];if(k.location>=0){let _e=re[q];if(_e===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),_e!==void 0){const O=_e.normalized,Q=_e.itemSize,pe=e.get(_e);if(pe===void 0)continue;const ye=pe.buffer,be=pe.type,Be=pe.bytesPerElement,ne=be===r.INT||be===r.UNSIGNED_INT||_e.gpuType===ig;if(_e.isInterleavedBufferAttribute){const ge=_e.data,Re=ge.stride,Ke=_e.offset;if(ge.isInstancedInterleavedBuffer){for(let qe=0;qe<k.locationSize;qe++)x(k.location+qe,ge.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let qe=0;qe<k.locationSize;qe++)y(k.location+qe);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let qe=0;qe<k.locationSize;qe++)C(k.location+qe,Q/k.locationSize,be,O,Re*Be,(Ke+Q/k.locationSize*qe)*Be,ne)}else{if(_e.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)x(k.location+ge,_e.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ge=0;ge<k.locationSize;ge++)y(k.location+ge);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let ge=0;ge<k.locationSize;ge++)C(k.location+ge,Q/k.locationSize,be,O,Q*Be,Q/k.locationSize*ge*Be,ne)}}else if(z!==void 0){const O=z[q];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(k.location,O);break;case 3:r.vertexAttrib3fv(k.location,O);break;case 4:r.vertexAttrib4fv(k.location,O);break;default:r.vertexAttrib1fv(k.location,O)}}}}A()}function U(){H();for(const L in i){const B=i[L];for(const X in B){const K=B[X];for(const re in K)m(K[re].object),delete K[re];delete B[X]}delete i[L]}}function P(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const X in B){const K=B[X];for(const re in K)m(K[re].object),delete K[re];delete B[X]}delete i[L.id]}function I(L){for(const B in i){const X=i[B];if(X[L.id]===void 0)continue;const K=X[L.id];for(const re in K)m(K[re].object),delete K[re];delete X[L.id]}}function H(){R(),c=!0,l!==s&&(l=s,h(l.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:H,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:y,disableUnusedAttributes:A}}function Sw(r,e,t){let i;function s(h){i=h}function l(h,m){r.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,_){_!==0&&(r.drawArraysInstanced(i,h,m,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,_);let S=0;for(let E=0;E<_;E++)S+=m[E];t.update(S,i,1)}function p(h,m,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(i,h,0,m,0,v,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M]*v[M];t.update(E,i,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function yw(r,e,t,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==na&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const H=I===Au&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==wi&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qa&&!H)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=E>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:U,maxSamples:P}}function Mw(r){const e=this;let t=null,i=0,s=!1,l=!1;const c=new _s,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||i!==0||s;return s=v,i=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!s||E===null||E.length===0||l&&!y)l?m(null):h();else{const A=l?0:i,C=A*4;let b=x.clippingState||null;p.value=b,b=m(E,v,C,S);for(let U=0;U!==C;++U)b[U]=t[U];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,S,E){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=p.value,E!==!0||y===null){const x=S+M*4,A=v.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,b=S;C!==M;++C,b+=4)c.copy(_[C]).applyMatrix4(A,f),c.normal.toArray(y,b),y[b+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function Ew(r){let e=new WeakMap;function t(c,f){return f===$p?c.mapping=Go:f===em&&(c.mapping=Vo),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===$p||f===em)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new R1(p.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const Lo=4,kx=[.125,.215,.35,.446,.526,.582],Ms=20,Mp=new Ty,Xx=new Bt;let Ep=null,Tp=0,Ap=0,bp=!1;const vs=(1+Math.sqrt(5))/2,Do=1/vs,Wx=[new ce(-vs,Do,0),new ce(vs,Do,0),new ce(-Do,0,vs),new ce(Do,0,vs),new ce(0,vs,-Do),new ce(0,vs,Do),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],Tw=new ce;class qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,l={}){const{size:c=256,position:f=Tw}=l;Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),Ap=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,i,s,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ep,Tp,Ap),this._renderer.xr.enabled=bp,e.scissorTest=!1,cf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Go||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),Ap=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Au,format:na,colorSpace:Fr,depthBuffer:!1},s=Yx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yx(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Aw(l)),this._blurMaterial=bw(l,e,t)}return s}_compileMaterial(e){const t=new ia(this._lodPlanes[0],e);this._renderer.compile(t,Mp)}_sceneToCubeUV(e,t,i,s,l){const p=new Gi(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Xx),_.toneMapping=Or,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null));const M=new _y({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),y=new ia(new Du,M);let x=!1;const A=e.background;A?A.isColor&&(M.color.copy(A),e.background=null,x=!0):(M.color.copy(Xx),x=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[C],l.y,l.z)):b===1?(p.up.set(0,0,h[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[C],l.z)):(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[C]));const U=this._cubeSize;cf(s,b*U,C>2?U:0,U,U),_.setRenderTarget(s),x&&_.render(y,p),_.render(e,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=v,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Go||e.mapping===Vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new ia(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;cf(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(c,Mp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Wx[(s-l-1)%Wx.length];this._blur(e,l-1,l,c,f)}t.autoClear=i}_blur(e,t,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,t,i,s,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new ia(this._lodPlanes[s],h),v=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Ms-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):Ms;y>Ms&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const x=[];let A=0;for(let I=0;I<Ms;++I){const H=I/M,R=Math.exp(-H*H/2);x.push(R),I===0?A+=R:I<y&&(A+=2*R)}for(let I=0;I<x.length;I++)x[I]=x[I]/A;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-i;const b=this._sizeLods[s],U=3*b*(s>C-Lo?s-C+Lo:0),P=4*(this._cubeSize-b);cf(t,U,P,3*b,2*b),p.setRenderTarget(t),p.render(_,Mp)}}function Aw(r){const e=[],t=[],i=[];let s=r;const l=r-Lo+1+kx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>r-Lo?p=kx[c-r+Lo-1]:c===0&&(p=0),i.push(p);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,E=6,M=3,y=2,x=1,A=new Float32Array(M*E*S),C=new Float32Array(y*E*S),b=new Float32Array(x*E*S);for(let P=0;P<S;P++){const I=P%3*2/3-1,H=P>2?0:-1,R=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];A.set(R,M*E*P),C.set(v,y*E*P);const L=[P,P,P,P,P,P];b.set(L,x*E*P)}const U=new kr;U.setAttribute("position",new Wi(A,M)),U.setAttribute("uv",new Wi(C,y)),U.setAttribute("faceIndex",new Wi(b,x)),e.push(U),s>Lo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yx(r,e,t){const i=new ra(r,e,t);return i.texture.mapping=Bf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cf(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function bw(r,e,t){const i=new Float32Array(Ms),s=new ce(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function jx(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Zx(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function dg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rw(r){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const p=f.mapping,h=p===$p||p===em,m=p===Go||p===Vo;if(h||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new qx(r)),_=h?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new qx(r)),_=h?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function s(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Cw(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&pu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ww(r,e,t,i){const s={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function h(_){const v=[],S=_.index,E=_.attributes.position;let M=0;if(S!==null){const A=S.array;M=S.version;for(let C=0,b=A.length;C<b;C+=3){const U=A[C+0],P=A[C+1],I=A[C+2];v.push(U,P,P,I,I,U)}}else if(E!==void 0){const A=E.array;M=E.version;for(let C=0,b=A.length/3-1;C<b;C+=3){const U=C+0,P=C+1,I=C+2;v.push(U,P,P,I,I,U)}}else return;const y=new(dy(v)?xy:vy)(v,1);y.version=M;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function m(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:m}}function Dw(r,e,t){let i;function s(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){r.drawElements(i,S,l,v*c),t.update(S,i,1)}function h(v,S,E){E!==0&&(r.drawElementsInstanced(i,S,l,v*c,E),t.update(S,i,E))}function m(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,l,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];t.update(y,i,1)}function _(v,S,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,l,v,0,M,0,E);let x=0;for(let A=0;A<E;A++)x+=S[A]*M[A];t.update(x,i,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Uw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Lw(r,e,t){const i=new WeakMap,s=new pn;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let L=function(){H.dispose(),i.delete(f),f.removeEventListener("dispose",L)};var S=L;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),y===!0&&(b=3);let U=f.attributes.position.count*b,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*P*4*_),H=new py(I,U,P,_);H.type=qa,H.needsUpdate=!0;const R=b*4;for(let B=0;B<_;B++){const X=x[B],K=A[B],re=C[B],ee=U*P*4*B;for(let z=0;z<X.count;z++){const q=z*R;E===!0&&(s.fromBufferAttribute(X,z),I[ee+q+0]=s.x,I[ee+q+1]=s.y,I[ee+q+2]=s.z,I[ee+q+3]=0),M===!0&&(s.fromBufferAttribute(K,z),I[ee+q+4]=s.x,I[ee+q+5]=s.y,I[ee+q+6]=s.z,I[ee+q+7]=0),y===!0&&(s.fromBufferAttribute(re,z),I[ee+q+8]=s.x,I[ee+q+9]=s.y,I[ee+q+10]=s.z,I[ee+q+11]=re.itemSize===4?s.w:1)}}v={count:_,texture:H,size:new vt(U,P)},i.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",M),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function Nw(r,e,t,i){let s=new WeakMap;function l(p){const h=i.render.frame,m=p.geometry,_=e.get(p,m);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==h&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),s.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return _}function c(){s=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const by=new Hn,Kx=new hg(1,1),Ry=new py,Cy=new u1,wy=new yy,Qx=[],Jx=[],$x=new Float32Array(16),eS=new Float32Array(9),tS=new Float32Array(4);function tl(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let l=Qx[s];if(l===void 0&&(l=new Float32Array(s),Qx[s]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Rn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Cn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ff(r,e){let t=Jx[e];t===void 0&&(t=new Int32Array(e),Jx[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Ow(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2fv(this.addr,e),Cn(t,e)}}function Iw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;r.uniform3fv(this.addr,e),Cn(t,e)}}function Bw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4fv(this.addr,e),Cn(t,e)}}function Fw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;tS.set(i),r.uniformMatrix2fv(this.addr,!1,tS),Cn(t,i)}}function zw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;eS.set(i),r.uniformMatrix3fv(this.addr,!1,eS),Cn(t,i)}}function Hw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;$x.set(i),r.uniformMatrix4fv(this.addr,!1,$x),Cn(t,i)}}function Gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2iv(this.addr,e),Cn(t,e)}}function kw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3iv(this.addr,e),Cn(t,e)}}function Xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4iv(this.addr,e),Cn(t,e)}}function Ww(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2uiv(this.addr,e),Cn(t,e)}}function Yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3uiv(this.addr,e),Cn(t,e)}}function jw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4uiv(this.addr,e),Cn(t,e)}}function Zw(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(Kx.compareFunction=hy,l=Kx):l=by,t.setTexture2D(e||l,s)}function Kw(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cy,s)}function Qw(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wy,s)}function Jw(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ry,s)}function $w(r){switch(r){case 5126:return Ow;case 35664:return Pw;case 35665:return Iw;case 35666:return Bw;case 35674:return Fw;case 35675:return zw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Vw;case 35668:case 35672:return kw;case 35669:case 35673:return Xw;case 5125:return Ww;case 36294:return qw;case 36295:return Yw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}function e2(r,e){r.uniform1fv(this.addr,e)}function t2(r,e){const t=tl(e,this.size,2);r.uniform2fv(this.addr,t)}function n2(r,e){const t=tl(e,this.size,3);r.uniform3fv(this.addr,t)}function i2(r,e){const t=tl(e,this.size,4);r.uniform4fv(this.addr,t)}function a2(r,e){const t=tl(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function r2(r,e){const t=tl(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function s2(r,e){const t=tl(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function o2(r,e){r.uniform1iv(this.addr,e)}function l2(r,e){r.uniform2iv(this.addr,e)}function u2(r,e){r.uniform3iv(this.addr,e)}function c2(r,e){r.uniform4iv(this.addr,e)}function f2(r,e){r.uniform1uiv(this.addr,e)}function h2(r,e){r.uniform2uiv(this.addr,e)}function d2(r,e){r.uniform3uiv(this.addr,e)}function p2(r,e){r.uniform4uiv(this.addr,e)}function m2(r,e,t){const i=this.cache,s=e.length,l=Ff(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||by,l[c])}function g2(r,e,t){const i=this.cache,s=e.length,l=Ff(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Cy,l[c])}function _2(r,e,t){const i=this.cache,s=e.length,l=Ff(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||wy,l[c])}function v2(r,e,t){const i=this.cache,s=e.length,l=Ff(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Ry,l[c])}function x2(r){switch(r){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return a2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return o2;case 35667:case 35671:return l2;case 35668:case 35672:return u2;case 35669:case 35673:return c2;case 5125:return f2;case 36294:return h2;case 36295:return d2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return v2}}class S2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$w(t.type)}}class y2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x2(t.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,t[f.id],i)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function nS(r,e){r.seq.push(e),r.map[e.id]=e}function E2(r,e,t){const i=r.name,s=i.length;for(Rp.lastIndex=0;;){const l=Rp.exec(i),c=Rp.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===s){nS(t,h===void 0?new S2(f,r,e):new y2(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new M2(f),nS(t,_)),t=_}}}class xf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);E2(l,c,this)}}setValue(e,t,i,s){const l=this.map[t];l!==void 0&&l.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function iS(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const T2=37297;let A2=0;function b2(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const aS=new ht;function R2(r){Lt._getMatrix(aS,Lt.workingColorSpace,r);const e=`mat3( ${aS.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Tf:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rS(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+b2(r.getShaderSource(e),f)}else return l}function C2(r,e){const t=R2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function w2(r,e){let t;switch(e){case Bb:t="Linear";break;case Fb:t="Reinhard";break;case zb:t="Cineon";break;case Hb:t="ACESFilmic";break;case Vb:t="AgX";break;case kb:t="Neutral";break;case Gb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ff=new ce;function D2(){Lt.getLuminanceCoefficients(ff);const r=ff.x.toFixed(4),e=ff.y.toFixed(4),t=ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ru).join(`
`)}function L2(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N2(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=r.getActiveAttrib(e,s),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ru(r){return r!==""}function sS(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oS(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(r){return r.replace(O2,I2)}const P2=new Map;function I2(r,e){let t=mt[e];if(t===void 0){const i=P2.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Om(t)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lS(r){return r.replace(B2,F2)}function F2(r,e,t,i){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function uS(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ty?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===gb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ka&&(e="SHADOWMAP_TYPE_VSM"),e}function H2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Go:case Vo:e="ENVMAP_TYPE_CUBE";break;case Bf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function V2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ny:e="ENVMAP_BLENDING_MULTIPLY";break;case Pb:e="ENVMAP_BLENDING_MIX";break;case Ib:e="ENVMAP_BLENDING_ADD";break}return e}function k2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X2(r,e,t,i){const s=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=z2(t),h=H2(t),m=G2(t),_=V2(t),v=k2(t),S=U2(t),E=L2(l),M=s.createProgram();let y,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ru).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ru).join(`
`),x.length>0&&(x+=`
`)):(y=[uS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ru).join(`
`),x=[uS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?mt.tonemapping_pars_fragment:"",t.toneMapping!==Or?w2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,C2("linearToOutputTexel",t.outputColorSpace),D2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ru).join(`
`)),c=Om(c),c=sS(c,t),c=oS(c,t),f=Om(f),f=sS(f,t),f=oS(f,t),c=lS(c),f=lS(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=A+y+c,b=A+x+f,U=iS(s,s.VERTEX_SHADER,C),P=iS(s,s.FRAGMENT_SHADER,b);s.attachShader(M,U),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(r.debug.checkShaderErrors){const X=s.getProgramInfoLog(M)||"",K=s.getShaderInfoLog(U)||"",re=s.getShaderInfoLog(P)||"",ee=X.trim(),z=K.trim(),q=re.trim();let k=!0,_e=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,U,P);else{const O=rS(s,U,"vertex"),Q=rS(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+O+`
`+Q)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(z===""||q==="")&&(_e=!1);_e&&(B.diagnostics={runnable:k,programLog:ee,vertexShader:{log:z,prefix:y},fragmentShader:{log:q,prefix:x}})}s.deleteShader(U),s.deleteShader(P),H=new xf(s,M),R=N2(s,M)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,T2)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=P,this}let W2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Y2(e),t.set(e,i)),i}}class Y2{constructor(e){this.id=W2++,this.code=e,this.usedTimes=0}}function j2(r,e,t,i,s,l,c){const f=new my,p=new q2,h=new Set,m=[],_=s.logarithmicDepthBuffer,v=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return h.add(R),R===0?"uv":`uv${R}`}function y(R,L,B,X,K){const re=X.fog,ee=K.geometry,z=R.isMeshStandardMaterial?X.environment:null,q=(R.isMeshStandardMaterial?t:e).get(R.envMap||z),k=q&&q.mapping===Bf?q.image.height:null,_e=E[R.type];R.precision!==null&&(S=s.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Q=O!==void 0?O.length:0;let pe=0;ee.morphAttributes.position!==void 0&&(pe=1),ee.morphAttributes.normal!==void 0&&(pe=2),ee.morphAttributes.color!==void 0&&(pe=3);let ye,be,Be,ne;if(_e){const wt=pa[_e];ye=wt.vertexShader,be=wt.fragmentShader}else ye=R.vertexShader,be=R.fragmentShader,p.update(R),Be=p.getVertexShaderID(R),ne=p.getFragmentShaderID(R);const ge=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ke=K.isInstancedMesh===!0,qe=K.isBatchedMesh===!0,ct=!!R.map,xt=!!R.matcap,V=!!q,bt=!!R.aoMap,st=!!R.lightMap,et=!!R.bumpMap,Ie=!!R.normalMap,Ot=!!R.displacementMap,Ge=!!R.emissiveMap,Fe=!!R.metalnessMap,lt=!!R.roughnessMap,Ct=R.anisotropy>0,F=R.clearcoat>0,w=R.dispersion>0,ie=R.iridescence>0,he=R.sheen>0,ve=R.transmission>0,fe=Ct&&!!R.anisotropyMap,ze=F&&!!R.clearcoatMap,Ce=F&&!!R.clearcoatNormalMap,Ye=F&&!!R.clearcoatRoughnessMap,Ze=ie&&!!R.iridescenceMap,Me=ie&&!!R.iridescenceThicknessMap,Ne=he&&!!R.sheenColorMap,Je=he&&!!R.sheenRoughnessMap,We=!!R.specularMap,Ue=!!R.specularColorMap,ut=!!R.specularIntensityMap,Y=ve&&!!R.transmissionMap,Ae=ve&&!!R.thicknessMap,we=!!R.gradientMap,He=!!R.alphaMap,Ee=R.alphaTest>0,Se=!!R.alphaHash,Xe=!!R.extensions;let ot=Or;R.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ot=r.toneMapping);const It={shaderID:_e,shaderType:R.type,shaderName:R.name,vertexShader:ye,fragmentShader:be,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:ne,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:qe,batchingColor:qe&&K._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&K.instanceColor!==null,instancingMorph:Ke&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Fr,alphaToCoverage:!!R.alphaToCoverage,map:ct,matcap:xt,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:k,aoMap:bt,lightMap:st,bumpMap:et,normalMap:Ie,displacementMap:v&&Ot,emissiveMap:Ge,normalMapObjectSpace:Ie&&R.normalMapType===Yb,normalMapTangentSpace:Ie&&R.normalMapType===qb,metalnessMap:Fe,roughnessMap:lt,anisotropy:Ct,anisotropyMap:fe,clearcoat:F,clearcoatMap:ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:w,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Ne,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ue,specularIntensityMap:ut,transmission:ve,transmissionMap:Y,thicknessMap:Ae,gradientMap:we,opaque:R.transparent===!1&&R.blending===Po&&R.alphaToCoverage===!1,alphaMap:He,alphaTest:Ee,alphaHash:Se,combine:R.combine,mapUv:ct&&M(R.map.channel),aoMapUv:bt&&M(R.aoMap.channel),lightMapUv:st&&M(R.lightMap.channel),bumpMapUv:et&&M(R.bumpMap.channel),normalMapUv:Ie&&M(R.normalMap.channel),displacementMapUv:Ot&&M(R.displacementMap.channel),emissiveMapUv:Ge&&M(R.emissiveMap.channel),metalnessMapUv:Fe&&M(R.metalnessMap.channel),roughnessMapUv:lt&&M(R.roughnessMap.channel),anisotropyMapUv:fe&&M(R.anisotropyMap.channel),clearcoatMapUv:ze&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(R.sheenRoughnessMap.channel),specularMapUv:We&&M(R.specularMap.channel),specularColorMapUv:Ue&&M(R.specularColorMap.channel),specularIntensityMapUv:ut&&M(R.specularIntensityMap.channel),transmissionMapUv:Y&&M(R.transmissionMap.channel),thicknessMapUv:Ae&&M(R.thicknessMap.channel),alphaMapUv:He&&M(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ie||Ct),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ee.attributes.uv&&(ct||He),fog:!!re,useFog:R.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:K.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&R.map.isVideoTexture===!0&&Lt.getTransfer(R.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ge&&R.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(R.emissiveMap.colorSpace)===Xt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ti,flipSided:R.side===On,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Xe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&R.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)L.push(B),L.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(A(L,R),C(L,R),L.push(r.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function A(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function C(R,L){f.disableAll(),L.supportsVertexTextures&&f.enable(0),L.instancing&&f.enable(1),L.instancingColor&&f.enable(2),L.instancingMorph&&f.enable(3),L.matcap&&f.enable(4),L.envMap&&f.enable(5),L.normalMapObjectSpace&&f.enable(6),L.normalMapTangentSpace&&f.enable(7),L.clearcoat&&f.enable(8),L.iridescence&&f.enable(9),L.alphaTest&&f.enable(10),L.vertexColors&&f.enable(11),L.vertexAlphas&&f.enable(12),L.vertexUv1s&&f.enable(13),L.vertexUv2s&&f.enable(14),L.vertexUv3s&&f.enable(15),L.vertexTangents&&f.enable(16),L.anisotropy&&f.enable(17),L.alphaHash&&f.enable(18),L.batching&&f.enable(19),L.dispersion&&f.enable(20),L.batchingColor&&f.enable(21),L.gradientMap&&f.enable(22),R.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),R.push(f.mask)}function b(R){const L=E[R.type];let B;if(L){const X=pa[L];B=E1.clone(X.uniforms)}else B=R.uniforms;return B}function U(R,L){let B;for(let X=0,K=m.length;X<K;X++){const re=m[X];if(re.cacheKey===L){B=re,++B.usedTimes;break}}return B===void 0&&(B=new X2(r,L,R,l),m.push(B)),B}function P(R){if(--R.usedTimes===0){const L=m.indexOf(R);m[L]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function H(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:b,acquireProgram:U,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:H}}function Z2(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function i(c){r.delete(c)}function s(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:l}}function K2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fS(){const r=[];let e=0;const t=[],i=[],s=[];function l(){e=0,t.length=0,i.length=0,s.length=0}function c(_,v,S,E,M,y){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:M,group:y},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=y),e++,x}function f(_,v,S,E,M,y){const x=c(_,v,S,E,M,y);S.transmission>0?i.push(x):S.transparent===!0?s.push(x):t.push(x)}function p(_,v,S,E,M,y){const x=c(_,v,S,E,M,y);S.transmission>0?i.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,v){t.length>1&&t.sort(_||K2),i.length>1&&i.sort(v||cS),s.length>1&&s.sort(v||cS)}function m(){for(let _=e,v=r.length;_<v;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:s,init:l,push:f,unshift:p,finish:m,sort:h}}function Q2(){let r=new WeakMap;function e(i,s){const l=r.get(i);let c;return l===void 0?(c=new fS,r.set(i,[c])):s>=l.length?(c=new fS,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function J2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Bt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=t,t}}}function $2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eD=0;function tD(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nD(r){const e=new J2,t=$2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ce);const s=new ce,l=new bn,c=new bn;function f(h){let m=0,_=0,v=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,A=0,C=0,b=0,U=0,P=0,I=0;h.sort(tD);for(let R=0,L=h.length;R<L;R++){const B=h[R],X=B.color,K=B.intensity,re=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=X.r*K,_+=X.g*K,v+=X.b*K;else if(B.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(B.sh.coefficients[z],K);I++}else if(B.isDirectionalLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,k=t.get(B);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[S]=k,i.directionalShadowMap[S]=ee,i.directionalShadowMatrix[S]=B.shadow.matrix,A++}i.directional[S]=z,S++}else if(B.isSpotLight){const z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(X).multiplyScalar(K),z.distance=re,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,i.spot[M]=z;const q=B.shadow;if(B.map&&(i.spotLightMap[U]=B.map,U++,q.updateMatrices(B),B.castShadow&&P++),i.spotLightMatrix[M]=q.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=ee,b++}M++}else if(B.isRectAreaLight){const z=e.get(B);z.color.copy(X).multiplyScalar(K),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),i.rectArea[y]=z,y++}else if(B.isPointLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const q=B.shadow,k=t.get(B);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[E]=k,i.pointShadowMap[E]=ee,i.pointShadowMatrix[E]=B.shadow.matrix,C++}i.point[E]=z,E++}else if(B.isHemisphereLight){const z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(K),z.groundColor.copy(B.groundColor).multiplyScalar(K),i.hemi[x]=z,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==S||H.pointLength!==E||H.spotLength!==M||H.rectAreaLength!==y||H.hemiLength!==x||H.numDirectionalShadows!==A||H.numPointShadows!==C||H.numSpotShadows!==b||H.numSpotMaps!==U||H.numLightProbes!==I)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,H.directionalLength=S,H.pointLength=E,H.spotLength=M,H.rectAreaLength=y,H.hemiLength=x,H.numDirectionalShadows=A,H.numPointShadows=C,H.numSpotShadows=b,H.numSpotMaps=U,H.numLightProbes=I,i.version=eD++)}function p(h,m){let _=0,v=0,S=0,E=0,M=0;const y=m.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){const C=h[x];if(C.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),_++}else if(C.isSpotLight){const b=i.spot[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),S++}else if(C.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),v++}else if(C.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:i}}function hS(r){const e=new nD(r),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function iD(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new hS(r),e.set(s,[f])):l>=c.length?(f=new hS(r),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const aD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sD(r,e,t){let i=new My;const s=new vt,l=new vt,c=new pn,f=new L1({depthPacking:Wb}),p=new N1,h={},m=t.maxTextureSize,_={[Ka]:On,[On]:Ka,[Ti]:Ti},v=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:aD,fragmentShader:rD}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new kr;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ia(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ty;let x=this.type;this.render=function(P,I,H){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const R=r.getRenderTarget(),L=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),X=r.state;X.setBlending(xa),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=x!==ka&&this.type===ka,re=x===ka&&this.type!==ka;for(let ee=0,z=P.length;ee<z;ee++){const q=P[ee],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const _e=k.getFrameExtents();if(s.multiply(_e),l.copy(k.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/_e.x),s.x=l.x*_e.x,k.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/_e.y),s.y=l.y*_e.y,k.mapSize.y=l.y)),k.map===null||K===!0||re===!0){const Q=this.type!==ka?{minFilter:aa,magFilter:aa}:{};k.map!==null&&k.map.dispose(),k.map=new ra(s.x,s.y,Q),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const O=k.getViewportCount();for(let Q=0;Q<O;Q++){const pe=k.getViewport(Q);c.set(l.x*pe.x,l.y*pe.y,l.x*pe.z,l.y*pe.w),X.viewport(c),k.updateMatrices(q,Q),i=k.getFrustum(),b(I,H,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===ka&&A(k,H),k.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(R,L,B)};function A(P,I){const H=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ra(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,H,v,M,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,H,S,M,null)}function C(P,I,H,R){let L=null;const B=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)L=B;else if(L=H.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=L.uuid,K=I.uuid;let re=h[X];re===void 0&&(re={},h[X]=re);let ee=re[K];ee===void 0&&(ee=L.clone(),re[K]=ee,I.addEventListener("dispose",U)),L=ee}if(L.visible=I.visible,L.wireframe=I.wireframe,R===ka?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:_[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,H.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const X=r.properties.get(L);X.light=H}return L}function b(P,I,H,R,L){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===ka)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const K=e.update(P),re=P.material;if(Array.isArray(re)){const ee=K.groups;for(let z=0,q=ee.length;z<q;z++){const k=ee[z],_e=re[k.materialIndex];if(_e&&_e.visible){const O=C(P,_e,R,L);P.onBeforeShadow(r,P,I,H,K,O,k),r.renderBufferDirect(H,null,K,O,P,k),P.onAfterShadow(r,P,I,H,K,O,k)}}}else if(re.visible){const ee=C(P,re,R,L);P.onBeforeShadow(r,P,I,H,K,ee,null),r.renderBufferDirect(H,null,K,ee,P,null),P.onAfterShadow(r,P,I,H,K,ee,null)}}const X=P.children;for(let K=0,re=X.length;K<re;K++)b(X[K],I,H,R,L)}function U(P){P.target.removeEventListener("dispose",U);for(const H in h){const R=h[H],L=P.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}const oD={[qp]:Yp,[jp]:Qp,[Zp]:Jp,[Ho]:Kp,[Yp]:qp,[Qp]:jp,[Jp]:Zp,[Kp]:Ho};function lD(r,e){function t(){let Y=!1;const Ae=new pn;let we=null;const He=new pn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!Y&&(r.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){Y=Ee},setClear:function(Ee,Se,Xe,ot,It){It===!0&&(Ee*=ot,Se*=ot,Xe*=ot),Ae.set(Ee,Se,Xe,ot),He.equals(Ae)===!1&&(r.clearColor(Ee,Se,Xe,ot),He.copy(Ae))},reset:function(){Y=!1,we=null,He.set(-1,0,0,0)}}}function i(){let Y=!1,Ae=!1,we=null,He=null,Ee=null;return{setReversed:function(Se){if(Ae!==Se){const Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Se;const ot=Ee;Ee=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(Se){Se?ge(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Se){we!==Se&&!Y&&(r.depthMask(Se),we=Se)},setFunc:function(Se){if(Ae&&(Se=oD[Se]),He!==Se){switch(Se){case qp:r.depthFunc(r.NEVER);break;case Yp:r.depthFunc(r.ALWAYS);break;case jp:r.depthFunc(r.LESS);break;case Ho:r.depthFunc(r.LEQUAL);break;case Zp:r.depthFunc(r.EQUAL);break;case Kp:r.depthFunc(r.GEQUAL);break;case Qp:r.depthFunc(r.GREATER);break;case Jp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=Se}},setLocked:function(Se){Y=Se},setClear:function(Se){Ee!==Se&&(Ae&&(Se=1-Se),r.clearDepth(Se),Ee=Se)},reset:function(){Y=!1,we=null,He=null,Ee=null,Ae=!1}}}function s(){let Y=!1,Ae=null,we=null,He=null,Ee=null,Se=null,Xe=null,ot=null,It=null;return{setTest:function(wt){Y||(wt?ge(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!Y&&(r.stencilMask(wt),Ae=wt)},setFunc:function(wt,Yi,yn){(we!==wt||He!==Yi||Ee!==yn)&&(r.stencilFunc(wt,Yi,yn),we=wt,He=Yi,Ee=yn)},setOp:function(wt,Yi,yn){(Se!==wt||Xe!==Yi||ot!==yn)&&(r.stencilOp(wt,Yi,yn),Se=wt,Xe=Yi,ot=yn)},setLocked:function(wt){Y=wt},setClear:function(wt){It!==wt&&(r.clearStencil(wt),It=wt)},reset:function(){Y=!1,Ae=null,we=null,He=null,Ee=null,Se=null,Xe=null,ot=null,It=null}}}const l=new t,c=new i,f=new s,p=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,A=null,C=null,b=null,U=null,P=null,I=new Bt(0,0,0),H=0,R=!1,L=null,B=null,X=null,K=null,re=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=q>=2);let _e=null,O={};const Q=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),ye=new pn().fromArray(Q),be=new pn().fromArray(pe);function Be(Y,Ae,we,He){const Ee=new Uint8Array(4),Se=r.createTexture();r.bindTexture(Y,Se),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<we;Xe++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Ae+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return Se}const ne={};ne[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ge(r.DEPTH_TEST),c.setFunc(Ho),et(!1),Ie(xx),ge(r.CULL_FACE),bt(xa);function ge(Y){m[Y]!==!0&&(r.enable(Y),m[Y]=!0)}function Re(Y){m[Y]!==!1&&(r.disable(Y),m[Y]=!1)}function Ke(Y,Ae){return _[Y]!==Ae?(r.bindFramebuffer(Y,Ae),_[Y]=Ae,Y===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ae),Y===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function qe(Y,Ae){let we=S,He=!1;if(Y){we=v.get(Ae),we===void 0&&(we=[],v.set(Ae,we));const Ee=Y.textures;if(we.length!==Ee.length||we[0]!==r.COLOR_ATTACHMENT0){for(let Se=0,Xe=Ee.length;Se<Xe;Se++)we[Se]=r.COLOR_ATTACHMENT0+Se;we.length=Ee.length,He=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,He=!0);He&&r.drawBuffers(we)}function ct(Y){return E!==Y?(r.useProgram(Y),E=Y,!0):!1}const xt={[ys]:r.FUNC_ADD,[vb]:r.FUNC_SUBTRACT,[xb]:r.FUNC_REVERSE_SUBTRACT};xt[Sb]=r.MIN,xt[yb]=r.MAX;const V={[Mb]:r.ZERO,[Eb]:r.ONE,[Tb]:r.SRC_COLOR,[Xp]:r.SRC_ALPHA,[Db]:r.SRC_ALPHA_SATURATE,[Cb]:r.DST_COLOR,[bb]:r.DST_ALPHA,[Ab]:r.ONE_MINUS_SRC_COLOR,[Wp]:r.ONE_MINUS_SRC_ALPHA,[wb]:r.ONE_MINUS_DST_COLOR,[Rb]:r.ONE_MINUS_DST_ALPHA,[Ub]:r.CONSTANT_COLOR,[Lb]:r.ONE_MINUS_CONSTANT_COLOR,[Nb]:r.CONSTANT_ALPHA,[Ob]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(Y,Ae,we,He,Ee,Se,Xe,ot,It,wt){if(Y===xa){M===!0&&(Re(r.BLEND),M=!1);return}if(M===!1&&(ge(r.BLEND),M=!0),Y!==_b){if(Y!==y||wt!==R){if((x!==ys||b!==ys)&&(r.blendEquation(r.FUNC_ADD),x=ys,b=ys),wt)switch(Y){case Po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sx:r.blendFunc(r.ONE,r.ONE);break;case yx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}A=null,C=null,U=null,P=null,I.set(0,0,0),H=0,y=Y,R=wt}return}Ee=Ee||Ae,Se=Se||we,Xe=Xe||He,(Ae!==x||Ee!==b)&&(r.blendEquationSeparate(xt[Ae],xt[Ee]),x=Ae,b=Ee),(we!==A||He!==C||Se!==U||Xe!==P)&&(r.blendFuncSeparate(V[we],V[He],V[Se],V[Xe]),A=we,C=He,U=Se,P=Xe),(ot.equals(I)===!1||It!==H)&&(r.blendColor(ot.r,ot.g,ot.b,It),I.copy(ot),H=It),y=Y,R=!1}function st(Y,Ae){Y.side===Ti?Re(r.CULL_FACE):ge(r.CULL_FACE);let we=Y.side===On;Ae&&(we=!we),et(we),Y.blending===Po&&Y.transparent===!1?bt(xa):bt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const He=Y.stencilWrite;f.setTest(He),He&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ge(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(Y){L!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),L=Y)}function Ie(Y){Y!==pb?(ge(r.CULL_FACE),Y!==B&&(Y===xx?r.cullFace(r.BACK):Y===mb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),B=Y}function Ot(Y){Y!==X&&(z&&r.lineWidth(Y),X=Y)}function Ge(Y,Ae,we){Y?(ge(r.POLYGON_OFFSET_FILL),(K!==Ae||re!==we)&&(r.polygonOffset(Ae,we),K=Ae,re=we)):Re(r.POLYGON_OFFSET_FILL)}function Fe(Y){Y?ge(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function lt(Y){Y===void 0&&(Y=r.TEXTURE0+ee-1),_e!==Y&&(r.activeTexture(Y),_e=Y)}function Ct(Y,Ae,we){we===void 0&&(_e===null?we=r.TEXTURE0+ee-1:we=_e);let He=O[we];He===void 0&&(He={type:void 0,texture:void 0},O[we]=He),(He.type!==Y||He.texture!==Ae)&&(_e!==we&&(r.activeTexture(we),_e=we),r.bindTexture(Y,Ae||ne[Y]),He.type=Y,He.texture=Ae)}function F(){const Y=O[_e];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function he(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ve(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ce(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(Y){ye.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function Je(Y){be.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),be.copy(Y))}function We(Y,Ae){let we=h.get(Ae);we===void 0&&(we=new WeakMap,h.set(Ae,we));let He=we.get(Y);He===void 0&&(He=r.getUniformBlockIndex(Ae,Y.name),we.set(Y,He))}function Ue(Y,Ae){const He=h.get(Ae).get(Y);p.get(Ae)!==He&&(r.uniformBlockBinding(Ae,He,Y.__bindingPointIndex),p.set(Ae,He))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},_e=null,O={},_={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,A=null,C=null,b=null,U=null,P=null,I=new Bt(0,0,0),H=0,R=!1,L=null,B=null,X=null,K=null,re=null,ye.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ge,disable:Re,bindFramebuffer:Ke,drawBuffers:qe,useProgram:ct,setBlending:bt,setMaterial:st,setFlipSided:et,setCullFace:Ie,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:Fe,activeTexture:lt,bindTexture:Ct,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:ie,texImage2D:Ze,texImage3D:Me,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:ze,scissor:Ne,viewport:Je,reset:ut}}function uD(r,e,t,i,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,m=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,w){return S?new OffscreenCanvas(F,w):bf("canvas")}function M(F,w,ie){let he=1;const ve=Ct(F);if((ve.width>ie||ve.height>ie)&&(he=ie/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const fe=Math.floor(he*ve.width),ze=Math.floor(he*ve.height);_===void 0&&(_=E(fe,ze));const Ce=w?E(fe,ze):_;return Ce.width=fe,Ce.height=ze,Ce.getContext("2d").drawImage(F,0,0,fe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+ze+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function y(F){return F.generateMipmaps}function x(F){r.generateMipmap(F)}function A(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(F,w,ie,he,ve=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let fe=w;if(w===r.RED&&(ie===r.FLOAT&&(fe=r.R32F),ie===r.HALF_FLOAT&&(fe=r.R16F),ie===r.UNSIGNED_BYTE&&(fe=r.R8)),w===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.R8UI),ie===r.UNSIGNED_SHORT&&(fe=r.R16UI),ie===r.UNSIGNED_INT&&(fe=r.R32UI),ie===r.BYTE&&(fe=r.R8I),ie===r.SHORT&&(fe=r.R16I),ie===r.INT&&(fe=r.R32I)),w===r.RG&&(ie===r.FLOAT&&(fe=r.RG32F),ie===r.HALF_FLOAT&&(fe=r.RG16F),ie===r.UNSIGNED_BYTE&&(fe=r.RG8)),w===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RG8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RG16UI),ie===r.UNSIGNED_INT&&(fe=r.RG32UI),ie===r.BYTE&&(fe=r.RG8I),ie===r.SHORT&&(fe=r.RG16I),ie===r.INT&&(fe=r.RG32I)),w===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),ie===r.UNSIGNED_INT&&(fe=r.RGB32UI),ie===r.BYTE&&(fe=r.RGB8I),ie===r.SHORT&&(fe=r.RGB16I),ie===r.INT&&(fe=r.RGB32I)),w===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),ie===r.UNSIGNED_INT&&(fe=r.RGBA32UI),ie===r.BYTE&&(fe=r.RGBA8I),ie===r.SHORT&&(fe=r.RGBA16I),ie===r.INT&&(fe=r.RGBA32I)),w===r.RGB&&(ie===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),w===r.RGBA){const ze=ve?Tf:Lt.getTransfer(he);ie===r.FLOAT&&(fe=r.RGBA32F),ie===r.HALF_FLOAT&&(fe=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(fe=ze===Xt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(F,w){let ie;return F?w===null||w===Br||w===ko?ie=r.DEPTH24_STENCIL8:w===qa?ie=r.DEPTH32F_STENCIL8:w===hu&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Br||w===ko?ie=r.DEPTH_COMPONENT24:w===qa?ie=r.DEPTH_COMPONENT32F:w===hu&&(ie=r.DEPTH_COMPONENT16),ie}function U(F,w){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==aa&&F.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function P(F){const w=F.target;w.removeEventListener("dispose",P),H(w),w.isVideoTexture&&m.delete(w)}function I(F){const w=F.target;w.removeEventListener("dispose",I),L(w)}function H(F){const w=i.get(F);if(w.__webglInit===void 0)return;const ie=F.source,he=v.get(ie);if(he){const ve=he[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(F),Object.keys(he).length===0&&v.delete(ie)}i.remove(F)}function R(F){const w=i.get(F);r.deleteTexture(w.__webglTexture);const ie=F.source,he=v.get(ie);delete he[w.__cacheKey],c.memory.textures--}function L(F){const w=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ve=0;ve<w.__webglFramebuffer[he].length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[he][ve]);else r.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)r.deleteFramebuffer(w.__webglFramebuffer[he]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=F.textures;for(let he=0,ve=ie.length;he<ve;he++){const fe=i.get(ie[he]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(ie[he])}i.remove(F)}let B=0;function X(){B=0}function K(){const F=B;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),B+=1,F}function re(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function ee(F,w){const ie=i.get(F);if(F.isVideoTexture&&Fe(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ie.__version!==F.version){const he=F.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ie,F,w);return}}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+w)}function z(F,w){const ie=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){ne(ie,F,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+w)}function q(F,w){const ie=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){ne(ie,F,w);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+w)}function k(F,w){const ie=i.get(F);if(F.version>0&&ie.__version!==F.version){ge(ie,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+w)}const _e={[tm]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[nm]:r.MIRRORED_REPEAT},O={[aa]:r.NEAREST,[Xb]:r.NEAREST_MIPMAP_NEAREST,[kc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Qd]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},Q={[jb]:r.NEVER,[e1]:r.ALWAYS,[Zb]:r.LESS,[hy]:r.LEQUAL,[Kb]:r.EQUAL,[$b]:r.GEQUAL,[Qb]:r.GREATER,[Jb]:r.NOTEQUAL};function pe(F,w){if(w.type===qa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===Qd||w.magFilter===kc||w.magFilter===Ts||w.minFilter===Zn||w.minFilter===Qd||w.minFilter===kc||w.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,_e[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,_e[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,_e[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,O[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===aa||w.minFilter!==kc&&w.minFilter!==Ts||w.type===qa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(F,w){let ie=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",P));const he=w.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const fe=re(w);if(fe!==F.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ve[fe].usedTimes++;const ze=ve[F.__cacheKey];ze!==void 0&&(ve[F.__cacheKey].usedTimes--,ze.usedTimes===0&&R(w)),F.__cacheKey=fe,F.__webglTexture=ve[fe].texture}return ie}function be(F,w,ie){return Math.floor(Math.floor(F/ie)/w)}function Be(F,w,ie,he){const fe=F.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,ie,he,w.data);else{fe.sort((Me,Ne)=>Me.start-Ne.start);let ze=0;for(let Me=1;Me<fe.length;Me++){const Ne=fe[ze],Je=fe[Me],We=Ne.start+Ne.count,Ue=be(Je.start,w.width,4),ut=be(Ne.start,w.width,4);Je.start<=We+1&&Ue===ut&&be(Je.start+Je.count-1,w.width,4)===Ue?Ne.count=Math.max(Ne.count,Je.start+Je.count-Ne.start):(++ze,fe[ze]=Je)}fe.length=ze+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),Ze=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ne=fe.length;Me<Ne;Me++){const Je=fe[Me],We=Math.floor(Je.start/4),Ue=Math.ceil(Je.count/4),ut=We%w.width,Y=Math.floor(We/w.width),Ae=Ue,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(r.TEXTURE_2D,0,ut,Y,Ae,we,ie,he,w.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ze)}}function ne(F,w,ie){let he=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=r.TEXTURE_3D);const ve=ye(F,w),fe=w.source;t.bindTexture(he,F.__webglTexture,r.TEXTURE0+ie);const ze=i.get(fe);if(fe.version!==ze.__version||ve===!0){t.activeTexture(r.TEXTURE0+ie);const Ce=Lt.getPrimaries(Lt.workingColorSpace),Ye=w.colorSpace===ma?null:Lt.getPrimaries(w.colorSpace),Ze=w.colorSpace===ma||Ce===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Me=M(w.image,!1,s.maxTextureSize);Me=lt(w,Me);const Ne=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let We=C(w.internalFormat,Ne,Je,w.colorSpace,w.isVideoTexture);pe(he,w);let Ue;const ut=w.mipmaps,Y=w.isVideoTexture!==!0,Ae=ze.__version===void 0||ve===!0,we=fe.dataReady,He=U(w,Me);if(w.isDepthTexture)We=b(w.format===Xo,w.type),Ae&&(Y?t.texStorage2D(r.TEXTURE_2D,1,We,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,Je,null));else if(w.isDataTexture)if(ut.length>0){Y&&Ae&&t.texStorage2D(r.TEXTURE_2D,He,We,ut[0].width,ut[0].height);for(let Ee=0,Se=ut.length;Ee<Se;Ee++)Ue=ut[Ee],Y?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Je,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ne,Je,Ue.data);w.generateMipmaps=!1}else Y?(Ae&&t.texStorage2D(r.TEXTURE_2D,He,We,Me.width,Me.height),we&&Be(w,Me,Ne,Je)):t.texImage2D(r.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,Je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Y&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,We,ut[0].width,ut[0].height,Me.depth);for(let Ee=0,Se=ut.length;Ee<Se;Ee++)if(Ue=ut[Ee],w.format!==na)if(Ne!==null)if(Y){if(we)if(w.layerUpdates.size>0){const Xe=Vx(Ue.width,Ue.height,w.format,w.type);for(const ot of w.layerUpdates){const It=Ue.data.subarray(ot*Xe/Ue.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,ot,Ue.width,Ue.height,1,Ne,It)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ne,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,We,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ne,Je,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,We,Ue.width,Ue.height,Me.depth,0,Ne,Je,Ue.data)}else{Y&&Ae&&t.texStorage2D(r.TEXTURE_2D,He,We,ut[0].width,ut[0].height);for(let Ee=0,Se=ut.length;Ee<Se;Ee++)Ue=ut[Ee],w.format!==na?Ne!==null?Y?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Je,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ne,Je,Ue.data)}else if(w.isDataArrayTexture)if(Y){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,We,Me.width,Me.height,Me.depth),we)if(w.layerUpdates.size>0){const Ee=Vx(Me.width,Me.height,w.format,w.type);for(const Se of w.layerUpdates){const Xe=Me.data.subarray(Se*Ee/Me.data.BYTES_PER_ELEMENT,(Se+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,Ne,Je,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Je,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ne,Je,Me.data);else if(w.isData3DTexture)Y?(Ae&&t.texStorage3D(r.TEXTURE_3D,He,We,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Je,Me.data)):t.texImage3D(r.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ne,Je,Me.data);else if(w.isFramebufferTexture){if(Ae)if(Y)t.texStorage2D(r.TEXTURE_2D,He,We,Me.width,Me.height);else{let Ee=Me.width,Se=Me.height;for(let Xe=0;Xe<He;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,We,Ee,Se,0,Ne,Je,null),Ee>>=1,Se>>=1}}else if(ut.length>0){if(Y&&Ae){const Ee=Ct(ut[0]);t.texStorage2D(r.TEXTURE_2D,He,We,Ee.width,Ee.height)}for(let Ee=0,Se=ut.length;Ee<Se;Ee++)Ue=ut[Ee],Y?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ne,Je,Ue):t.texImage2D(r.TEXTURE_2D,Ee,We,Ne,Je,Ue);w.generateMipmaps=!1}else if(Y){if(Ae){const Ee=Ct(Me);t.texStorage2D(r.TEXTURE_2D,He,We,Ee.width,Ee.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,Me)}else t.texImage2D(r.TEXTURE_2D,0,We,Ne,Je,Me);y(w)&&x(he),ze.__version=fe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ge(F,w,ie){if(w.image.length!==6)return;const he=ye(F,w),ve=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ie);const fe=i.get(ve);if(ve.version!==fe.__version||he===!0){t.activeTexture(r.TEXTURE0+ie);const ze=Lt.getPrimaries(Lt.workingColorSpace),Ce=w.colorSpace===ma?null:Lt.getPrimaries(w.colorSpace),Ye=w.colorSpace===ma||ze===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let Se=0;Se<6;Se++)!Ze&&!Me?Ne[Se]=M(w.image[Se],!0,s.maxCubemapSize):Ne[Se]=Me?w.image[Se].image:w.image[Se],Ne[Se]=lt(w,Ne[Se]);const Je=Ne[0],We=l.convert(w.format,w.colorSpace),Ue=l.convert(w.type),ut=C(w.internalFormat,We,Ue,w.colorSpace),Y=w.isVideoTexture!==!0,Ae=fe.__version===void 0||he===!0,we=ve.dataReady;let He=U(w,Je);pe(r.TEXTURE_CUBE_MAP,w);let Ee;if(Ze){Y&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,Je.width,Je.height);for(let Se=0;Se<6;Se++){Ee=Ne[Se].mipmaps;for(let Xe=0;Xe<Ee.length;Xe++){const ot=Ee[Xe];w.format!==na?We!==null?Y?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,0,0,ot.width,ot.height,We,ot.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,0,0,ot.width,ot.height,We,Ue,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,ut,ot.width,ot.height,0,We,Ue,ot.data)}}}else{if(Ee=w.mipmaps,Y&&Ae){Ee.length>0&&He++;const Se=Ct(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){Y?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ne[Se].width,Ne[Se].height,We,Ue,Ne[Se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ut,Ne[Se].width,Ne[Se].height,0,We,Ue,Ne[Se].data);for(let Xe=0;Xe<Ee.length;Xe++){const It=Ee[Xe].image[Se].image;Y?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,0,0,It.width,It.height,We,Ue,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,ut,It.width,It.height,0,We,Ue,It.data)}}else{Y?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,We,Ue,Ne[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ut,We,Ue,Ne[Se]);for(let Xe=0;Xe<Ee.length;Xe++){const ot=Ee[Xe];Y?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,0,0,We,Ue,ot.image[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,ut,We,Ue,ot.image[Se])}}}y(w)&&x(r.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Re(F,w,ie,he,ve,fe){const ze=l.convert(ie.format,ie.colorSpace),Ce=l.convert(ie.type),Ye=C(ie.internalFormat,ze,Ce,ie.colorSpace),Ze=i.get(w),Me=i.get(ie);if(Me.__renderTarget=w,!Ze.__hasExternalTextures){const Ne=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,Ye,Ne,Je,w.depth,0,ze,Ce,null):t.texImage2D(ve,fe,Ye,Ne,Je,0,ze,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ve,Me.__webglTexture,0,Ot(w)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ve,Me.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(F,w,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){const he=w.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=b(w.stencilBuffer,ve),ze=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Ot(w);Ge(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,fe,w.width,w.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,fe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ze,r.RENDERBUFFER,F)}else{const he=w.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],ze=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Ye=C(fe.internalFormat,ze,Ce,fe.colorSpace),Ze=Ot(w);ie&&Ge(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ye,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ze,Ye,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const ve=he.__webglTexture,fe=Ot(w);if(w.depthTexture.format===du)Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Xo)Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ct(F){const w=i.get(F),ie=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const he=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=he}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const he=F.texture.mipmaps;he&&he.length>0?qe(w.__webglFramebuffer[0],F):qe(w.__webglFramebuffer,F)}else if(ie){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=r.createRenderbuffer(),Ke(w.__webglDepthbuffer[he],F,!1);else{const ve=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,fe)}}else{const he=F.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Ke(w.__webglDepthbuffer,F,!1);else{const ve=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,fe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(F,w,ie){const he=i.get(F);w!==void 0&&Re(he.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&ct(F)}function V(F){const w=F.texture,ie=i.get(F),he=i.get(w);F.addEventListener("dispose",I);const ve=F.textures,fe=F.isWebGLCubeRenderTarget===!0,ze=ve.length>1;if(ze||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=w.version,c.memory.textures++),fe){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<w.mipmaps.length;Ye++)ie.__webglFramebuffer[Ce][Ye]=r.createFramebuffer()}else ie.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(ze)for(let Ce=0,Ye=ve.length;Ce<Ye;Ce++){const Ze=i.get(ve[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=r.createTexture(),c.memory.textures++)}if(F.samples>0&&Ge(F)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Ye=ve[Ce];ie.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const Ze=l.convert(Ye.format,Ye.colorSpace),Me=l.convert(Ye.type),Ne=C(Ye.internalFormat,Ze,Me,Ye.colorSpace,F.isXRRenderTarget===!0),Je=Ot(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(ie.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),pe(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ye=0;Ye<w.mipmaps.length;Ye++)Re(ie.__webglFramebuffer[Ce][Ye],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else Re(ie.__webglFramebuffer[Ce],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ce=0,Ye=ve.length;Ce<Ye;Ce++){const Ze=ve[Ce],Me=i.get(Ze);let Ne=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Me.__webglTexture),pe(Ne,Ze),Re(ie.__webglFramebuffer,F,Ze,r.COLOR_ATTACHMENT0+Ce,Ne,0),y(Ze)&&x(Ne)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),pe(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Ye=0;Ye<w.mipmaps.length;Ye++)Re(ie.__webglFramebuffer[Ye],F,w,r.COLOR_ATTACHMENT0,Ce,Ye);else Re(ie.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,Ce,0);y(w)&&x(Ce),t.unbindTexture()}F.depthBuffer&&ct(F)}function bt(F){const w=F.textures;for(let ie=0,he=w.length;ie<he;ie++){const ve=w[ie];if(y(ve)){const fe=A(F),ze=i.get(ve).__webglTexture;t.bindTexture(fe,ze),x(fe),t.unbindTexture()}}}const st=[],et=[];function Ie(F){if(F.samples>0){if(Ge(F)===!1){const w=F.textures,ie=F.width,he=F.height;let ve=r.COLOR_BUFFER_BIT;const fe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=i.get(F),Ce=w.length>1;if(Ce)for(let Ze=0;Ze<w.length;Ze++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ye=F.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ze=0;Ze<w.length;Ze++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Me=i.get(w[Ze]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,ie,he,0,0,ie,he,ve,r.NEAREST),p===!0&&(st.length=0,et.length=0,st.push(r.COLOR_ATTACHMENT0+Ze),F.depthBuffer&&F.resolveDepthBuffer===!1&&(st.push(fe),et.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<w.length;Ze++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Ze]);const Me=i.get(w[Ze]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ze,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ot(F){return Math.min(s.maxSamples,F.samples)}function Ge(F){const w=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(F){const w=c.render.frame;m.get(F)!==w&&(m.set(F,w),F.update())}function lt(F,w){const ie=F.colorSpace,he=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ie!==Fr&&ie!==ma&&(Lt.getTransfer(ie)===Xt?(he!==na||ve!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function Ct(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=xt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ge}function cD(r,e){function t(i,s=ma){let l;const c=Lt.getTransfer(s);if(i===wi)return r.UNSIGNED_BYTE;if(i===ag)return r.UNSIGNED_SHORT_4_4_4_4;if(i===rg)return r.UNSIGNED_SHORT_5_5_5_1;if(i===sy)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===oy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===ay)return r.BYTE;if(i===ry)return r.SHORT;if(i===hu)return r.UNSIGNED_SHORT;if(i===ig)return r.INT;if(i===Br)return r.UNSIGNED_INT;if(i===qa)return r.FLOAT;if(i===Au)return r.HALF_FLOAT;if(i===ly)return r.ALPHA;if(i===uy)return r.RGB;if(i===na)return r.RGBA;if(i===du)return r.DEPTH_COMPONENT;if(i===Xo)return r.DEPTH_STENCIL;if(i===cy)return r.RED;if(i===sg)return r.RED_INTEGER;if(i===fy)return r.RG;if(i===og)return r.RG_INTEGER;if(i===lg)return r.RGBA_INTEGER;if(i===mf||i===gf||i===_f||i===vf)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===mf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_f)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===mf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_f)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===im||i===am||i===rm||i===sm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===im)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===am)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===om||i===lm||i===um)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===om||i===lm)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===um)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cm||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===Sm||i===ym||i===Mm||i===Em)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===cm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_m)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ym)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Em)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tm||i===Am||i===bm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Tm)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Am)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rm||i===Cm||i===wm||i===Dm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Rm)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Cm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const fD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ey(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qi({vertexShader:fD,fragmentShader:hD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ia(new Uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pD extends Vr{constructor(e,t){super();const i=this;let s=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,_=null,v=null,S=null,E=null;const M=typeof XRWebGLBinding<"u",y=new dD,x={},A=t.getContextAttributes();let C=null,b=null;const U=[],P=[],I=new vt;let H=null;const R=new Gi;R.viewport=new pn;const L=new Gi;L.viewport=new pn;const B=[R,L],X=new O1;let K=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=U[ne];return ge===void 0&&(ge=new Sp,U[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=U[ne];return ge===void 0&&(ge=new Sp,U[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=U[ne];return ge===void 0&&(ge=new Sp,U[ne]=ge),ge.getHandSpace()};function ee(ne){const ge=P.indexOf(ne.inputSource);if(ge===-1)return;const Re=U[ge];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,h||c),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",q);for(let ne=0;ne<U.length;ne++){const ge=P[ne];ge!==null&&(P[ne]=null,U[ne].disconnect(ge))}K=null,re=null,y.reset();for(const ne in x)delete x[ne];e.setRenderTarget(C),S=null,v=null,_=null,s=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",z),s.addEventListener("inputsourceschange",q),A.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ke=null,qe=null;A.depth&&(qe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=A.stencil?Xo:du,Ke=A.stencil?ko:Br);const ct={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ct),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new ra(v.textureWidth,v.textureHeight,{format:na,type:wi,depthTexture:new hg(v.textureWidth,v.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Re={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new ra(S.framebufferWidth,S.framebufferHeight,{format:na,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await s.requestReferenceSpace(f),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(ne){for(let ge=0;ge<ne.removed.length;ge++){const Re=ne.removed[ge],Ke=P.indexOf(Re);Ke>=0&&(P[Ke]=null,U[Ke].disconnect(Re))}for(let ge=0;ge<ne.added.length;ge++){const Re=ne.added[ge];let Ke=P.indexOf(Re);if(Ke===-1){for(let ct=0;ct<U.length;ct++)if(ct>=P.length){P.push(Re),Ke=ct;break}else if(P[ct]===null){P[ct]=Re,Ke=ct;break}if(Ke===-1)break}const qe=U[Ke];qe&&qe.connect(Re)}}const k=new ce,_e=new ce;function O(ne,ge,Re){k.setFromMatrixPosition(ge.matrixWorld),_e.setFromMatrixPosition(Re.matrixWorld);const Ke=k.distanceTo(_e),qe=ge.projectionMatrix.elements,ct=Re.projectionMatrix.elements,xt=qe[14]/(qe[10]-1),V=qe[14]/(qe[10]+1),bt=(qe[9]+1)/qe[5],st=(qe[9]-1)/qe[5],et=(qe[8]-1)/qe[0],Ie=(ct[8]+1)/ct[0],Ot=xt*et,Ge=xt*Ie,Fe=Ke/(-et+Ie),lt=Fe*-et;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(lt),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ct=xt+Fe,F=V+Fe,w=Ot-lt,ie=Ge+(Ke-lt),he=bt*V/F*Ct,ve=st*V/F*Ct;ne.projectionMatrix.makePerspective(w,ie,he,ve,Ct,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Q(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,Re=ne.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(Re=y.depthFar)),X.near=L.near=R.near=ge,X.far=L.far=R.far=Re,(K!==X.near||re!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),K=X.near,re=X.far),X.layers.mask=ne.layers.mask|6,R.layers.mask=X.layers.mask&3,L.layers.mask=X.layers.mask&5;const Ke=ne.parent,qe=X.cameras;Q(X,Ke);for(let ct=0;ct<qe.length;ct++)Q(qe[ct],Ke);qe.length===2?O(X,R,L):X.projectionMatrix.copy(R.projectionMatrix),pe(ne,X,Ke)};function pe(ne,ge,Re){Re===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Lm*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ne){p=ne,v!==null&&(v.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(ne){return x[ne]};let ye=null;function be(ne,ge){if(m=ge.getViewerPose(h||c),E=ge,m!==null){const Re=m.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Ke=!1;Re.length!==X.cameras.length&&(X.cameras.length=0,Ke=!0);for(let V=0;V<Re.length;V++){const bt=Re[V];let st=null;if(S!==null)st=S.getViewport(bt);else{const Ie=_.getViewSubImage(v,bt);st=Ie.viewport,V===0&&(e.setRenderTargetTextures(b,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(b))}let et=B[V];et===void 0&&(et=new Gi,et.layers.enable(V),et.viewport=new pn,B[V]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),V===0&&(X.matrix.copy(et.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ke===!0&&X.cameras.push(et)}const qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const V=_.getDepthInformation(Re[0]);V&&V.isValid&&V.texture&&y.init(V,s.renderState)}if(qe&&qe.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let V=0;V<Re.length;V++){const bt=Re[V].camera;if(bt){let st=x[bt];st||(st=new Ey,x[bt]=st);const et=_.getCameraImage(bt);st.sourceTexture=et}}}}for(let Re=0;Re<U.length;Re++){const Ke=P[Re],qe=U[Re];Ke!==null&&qe!==void 0&&qe.update(Ke,ge,h||c)}ye&&ye(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Be=new Ay;Be.setAnimationLoop(be),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const ps=new Qa,mD=new bn;function gD(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,Sy(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,A,C,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,b)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,A,C):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===On&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===On&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=e.get(x),C=A.envMap,b=A.envMapRotation;C&&(y.envMap.value=C,ps.copy(b),ps.x*=-1,ps.y*=-1,ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),y.envMapRotation.value.setFromMatrix4(mD.makeRotationFromEuler(ps)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,A,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=C*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const A=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _D(r,e,t,i){let s={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,C){const b=C.program;i.uniformBlockBinding(A,b)}function h(A,C){let b=s[A.id];b===void 0&&(E(A),b=m(A),s[A.id]=b,A.addEventListener("dispose",y));const U=C.program;i.updateUBOMapping(A,U);const P=e.render.frame;l[A.id]!==P&&(v(A),l[A.id]=P)}function m(A){const C=_();A.__bindingPointIndex=C;const b=r.createBuffer(),U=A.__size,P=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,U,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function _(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const C=s[A.id],b=A.uniforms,U=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let P=0,I=b.length;P<I;P++){const H=Array.isArray(b[P])?b[P]:[b[P]];for(let R=0,L=H.length;R<L;R++){const B=H[R];if(S(B,P,R,U)===!0){const X=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let re=0;for(let ee=0;ee<K.length;ee++){const z=K[ee],q=M(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,X+re,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,re),re+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(A,C,b,U){const P=A.value,I=C+"_"+b;if(U[I]===void 0)return typeof P=="number"||typeof P=="boolean"?U[I]=P:U[I]=P.clone(),!0;{const H=U[I];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return U[I]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function E(A){const C=A.uniforms;let b=0;const U=16;for(let I=0,H=C.length;I<H;I++){const R=Array.isArray(C[I])?C[I]:[C[I]];for(let L=0,B=R.length;L<B;L++){const X=R[L],K=Array.isArray(X.value)?X.value:[X.value];for(let re=0,ee=K.length;re<ee;re++){const z=K[re],q=M(z),k=b%U,_e=k%q.boundary,O=k+_e;b+=_e,O!==0&&U-O<q.storage&&(b+=U-O),X.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=q.storage}}}const P=b%U;return P>0&&(b+=U-P),A.__size=b,A.__cache={},this}function M(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function y(A){const C=A.target;C.removeEventListener("dispose",y);const b=c.indexOf(C.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function x(){for(const A in s)r.deleteBuffer(s[A]);c=[],s={},l={}}return{bind:p,update:h,dispose:x}}class vD{constructor(e={}){const{canvas:t=n1(),context:i=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let U=!1;this._outputColorSpace=dn;let P=0,I=0,H=null,R=-1,L=null;const B=new pn,X=new pn;let K=null;const re=new Bt(0);let ee=0,z=t.width,q=t.height,k=1,_e=null,O=null;const Q=new pn(0,0,z,q),pe=new pn(0,0,z,q);let ye=!1;const be=new My;let Be=!1,ne=!1;const ge=new bn,Re=new ce,Ke=new pn,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function xt(){return H===null?k:1}let V=i;function bt(N,j){return t.getContext(N,j)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${If}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const j="webgl2";if(V=bt(j,N),V===null)throw bt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let st,et,Ie,Ot,Ge,Fe,lt,Ct,F,w,ie,he,ve,fe,ze,Ce,Ye,Ze,Me,Ne,Je,We,Ue,ut;function Y(){st=new Cw(V),st.init(),We=new cD(V,st),et=new yw(V,st,e,We),Ie=new lD(V,st),et.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),Ot=new Uw(V),Ge=new Z2,Fe=new uD(V,st,Ie,Ge,et,We,Ot),lt=new Ew(b),Ct=new Rw(b),F=new B1(V),Ue=new xw(V,F),w=new ww(V,F,Ot,Ue),ie=new Nw(V,w,F,Ot),Me=new Lw(V,et,Fe),Ce=new Mw(Ge),he=new j2(b,lt,Ct,st,et,Ue,Ce),ve=new gD(b,Ge),fe=new Q2,ze=new iD(st),Ze=new vw(b,lt,Ct,Ie,ie,S,p),Ye=new sD(b,ie,et),ut=new _D(V,Ot,et,Ie),Ne=new Sw(V,st,Ot),Je=new Dw(V,st,Ot),Ot.programs=he.programs,b.capabilities=et,b.extensions=st,b.properties=Ge,b.renderLists=fe,b.shadowMap=Ye,b.state=Ie,b.info=Ot}Y();const Ae=new pD(b,V);this.xr=Ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=st.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=st.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(z,q,!1))},this.getSize=function(N){return N.set(z,q)},this.setSize=function(N,j,le=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=N,q=j,t.width=Math.floor(N*k),t.height=Math.floor(j*k),le===!0&&(t.style.width=N+"px",t.style.height=j+"px"),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(z*k,q*k).floor()},this.setDrawingBufferSize=function(N,j,le){z=N,q=j,k=le,t.width=Math.floor(N*le),t.height=Math.floor(j*le),this.setViewport(0,0,N,j)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(Q)},this.setViewport=function(N,j,le,ue){N.isVector4?Q.set(N.x,N.y,N.z,N.w):Q.set(N,j,le,ue),Ie.viewport(B.copy(Q).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(pe)},this.setScissor=function(N,j,le,ue){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,j,le,ue),Ie.scissor(X.copy(pe).multiplyScalar(k).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){Ie.setScissorTest(ye=N)},this.setOpaqueSort=function(N){_e=N},this.setTransparentSort=function(N){O=N},this.getClearColor=function(N){return N.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,le=!0){let ue=0;if(N){let J=!1;if(H!==null){const Te=H.texture.format;J=Te===lg||Te===og||Te===sg}if(J){const Te=H.texture.type,Le=Te===wi||Te===Br||Te===hu||Te===ko||Te===ag||Te===rg,Ve=Ze.getClearColor(),Oe=Ze.getClearAlpha(),tt=Ve.r,it=Ve.g,je=Ve.b;Le?(E[0]=tt,E[1]=it,E[2]=je,E[3]=Oe,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=tt,M[1]=it,M[2]=je,M[3]=Oe,V.clearBufferiv(V.COLOR,0,M))}else ue|=V.COLOR_BUFFER_BIT}j&&(ue|=V.DEPTH_BUFFER_BIT),le&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ze.dispose(),fe.dispose(),ze.dispose(),Ge.dispose(),lt.dispose(),Ct.dispose(),ie.dispose(),Ue.dispose(),ut.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",yn),Ae.removeEventListener("sessionend",Mn),rn.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const N=Ot.autoReset,j=Ye.enabled,le=Ye.autoUpdate,ue=Ye.needsUpdate,J=Ye.type;Y(),Ot.autoReset=N,Ye.enabled=j,Ye.autoUpdate=le,Ye.needsUpdate=ue,Ye.type=J}function Ee(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Se(N){const j=N.target;j.removeEventListener("dispose",Se),Xe(j)}function Xe(N){ot(N),Ge.remove(N)}function ot(N){const j=Ge.get(N).programs;j!==void 0&&(j.forEach(function(le){he.releaseProgram(le)}),N.isShaderMaterial&&he.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,le,ue,J,Te){j===null&&(j=qe);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ve=tr(N,j,le,ue,J);Ie.setMaterial(ue,Le);let Oe=le.index,tt=1;if(ue.wireframe===!0){if(Oe=w.getWireframeAttribute(le),Oe===void 0)return;tt=2}const it=le.drawRange,je=le.attributes.position;let dt=it.start*tt,Dt=(it.start+it.count)*tt;Te!==null&&(dt=Math.max(dt,Te.start*tt),Dt=Math.min(Dt,(Te.start+Te.count)*tt)),Oe!==null?(dt=Math.max(dt,0),Dt=Math.min(Dt,Oe.count)):je!=null&&(dt=Math.max(dt,0),Dt=Math.min(Dt,je.count));const Qt=Dt-dt;if(Qt<0||Qt===1/0)return;Ue.setup(J,ue,Ve,le,Oe);let Ht,pt=Ne;if(Oe!==null&&(Ht=F.get(Oe),pt=Je,pt.setIndex(Ht)),J.isMesh)ue.wireframe===!0?(Ie.setLineWidth(ue.wireframeLinewidth*xt()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(J.isLine){let $e=ue.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*xt()),J.isLineSegments?pt.setMode(V.LINES):J.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else J.isPoints?pt.setMode(V.POINTS):J.isSprite&&pt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)pu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $e=J._multiDrawStarts,Kt=J._multiDrawCounts,St=J._multiDrawCount,Vn=Oe?F.get(Oe).bytesPerElement:1,ji=Ge.get(ue).currentProgram.getUniforms();for(let Qn=0;Qn<St;Qn++)ji.setValue(V,"_gl_DrawID",Qn),pt.render($e[Qn]/Vn,Kt[Qn])}else if(J.isInstancedMesh)pt.renderInstances(dt,Qt,J.count);else if(le.isInstancedBufferGeometry){const $e=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Kt=Math.min(le.instanceCount,$e);pt.renderInstances(dt,Qt,Kt)}else pt.render(dt,Qt)};function It(N,j,le){N.transparent===!0&&N.side===Ti&&N.forceSinglePass===!1?(N.side=On,N.needsUpdate=!0,oa(N,j,le),N.side=Ka,N.needsUpdate=!0,oa(N,j,le),N.side=Ti):oa(N,j,le)}this.compile=function(N,j,le=null){le===null&&(le=N),x=ze.get(le),x.init(j),C.push(x),le.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==le&&N.traverseVisible(function(J){J.isLight&&J.layers.test(j.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ue=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Te=J.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Ve=Te[Le];It(Ve,le,J),ue.add(Ve)}else It(Te,le,J),ue.add(Te)}),x=C.pop(),ue},this.compileAsync=function(N,j,le=null){const ue=this.compile(N,j,le);return new Promise(J=>{function Te(){if(ue.forEach(function(Le){Ge.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){J(N);return}setTimeout(Te,10)}st.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let wt=null;function Yi(N){wt&&wt(N)}function yn(){rn.stop()}function Mn(){rn.start()}const rn=new Ay;rn.setAnimationLoop(Yi),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(N){wt=N,Ae.setAnimationLoop(N),N===null?rn.stop():rn.start()},Ae.addEventListener("sessionstart",yn),Ae.addEventListener("sessionend",Mn),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(j),j=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,j,H),x=ze.get(N,C.length),x.init(j),C.push(x),ge.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(ge,_a,j.reversedDepth),ne=this.localClippingEnabled,Be=Ce.init(this.clippingPlanes,ne),y=fe.get(N,A.length),y.init(),A.push(y),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&sa(Te,j,-1/0,b.sortObjects)}sa(N,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(_e,O),ct=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ct&&Ze.addToRenderList(y,N),this.info.render.frame++,Be===!0&&Ce.beginShadows();const le=x.state.shadowsArray;Ye.render(le,N,j),Be===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,J=y.transmissive;if(x.setupLights(),j.isArrayCamera){const Te=j.cameras;if(J.length>0)for(let Le=0,Ve=Te.length;Le<Ve;Le++){const Oe=Te[Le];Nu(ue,J,N,Oe)}ct&&Ze.render(N);for(let Le=0,Ve=Te.length;Le<Ve;Le++){const Oe=Te[Le];Ps(y,N,Oe,Oe.viewport)}}else J.length>0&&Nu(ue,J,N,j),ct&&Ze.render(N),Ps(y,N,j);H!==null&&I===0&&(Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(b,N,j),Ue.resetDefaultState(),R=-1,L=null,C.pop(),C.length>0?(x=C[C.length-1],Be===!0&&Ce.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function sa(N,j,le,ue){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||be.intersectsSprite(N)){ue&&Ke.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);const Le=ie.update(N),Ve=N.material;Ve.visible&&y.push(N,Le,Ve,le,Ke.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||be.intersectsObject(N))){const Le=ie.update(N),Ve=N.material;if(ue&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ke.copy(N.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ke.copy(Le.boundingSphere.center)),Ke.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(Ve)){const Oe=Le.groups;for(let tt=0,it=Oe.length;tt<it;tt++){const je=Oe[tt],dt=Ve[je.materialIndex];dt&&dt.visible&&y.push(N,Le,dt,le,Ke.z,je)}}else Ve.visible&&y.push(N,Le,Ve,le,Ke.z,null)}}const Te=N.children;for(let Le=0,Ve=Te.length;Le<Ve;Le++)sa(Te[Le],j,le,ue)}function Ps(N,j,le,ue){const J=N.opaque,Te=N.transmissive,Le=N.transparent;x.setupLightsView(le),Be===!0&&Ce.setGlobalState(b.clippingPlanes,le),ue&&Ie.viewport(B.copy(ue)),J.length>0&&Is(J,j,le),Te.length>0&&Is(Te,j,le),Le.length>0&&Is(Le,j,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Nu(N,j,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new ra(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Au:wi,minFilter:Ts,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Te=x.state.transmissionRenderTarget[ue.id],Le=ue.viewport||B;Te.setSize(Le.z*b.transmissionResolutionScale,Le.w*b.transmissionResolutionScale);const Ve=b.getRenderTarget(),Oe=b.getActiveCubeFace(),tt=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(re),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),ct&&Ze.render(le);const it=b.toneMapping;b.toneMapping=Or;const je=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),Be===!0&&Ce.setGlobalState(b.clippingPlanes,ue),Is(N,le,ue),Fe.updateMultisampleRenderTarget(Te),Fe.updateRenderTargetMipmap(Te),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Dt=0,Qt=j.length;Dt<Qt;Dt++){const Ht=j[Dt],pt=Ht.object,$e=Ht.geometry,Kt=Ht.material,St=Ht.group;if(Kt.side===Ti&&pt.layers.test(ue.layers)){const Vn=Kt.side;Kt.side=On,Kt.needsUpdate=!0,nl(pt,le,ue,$e,Kt,St),Kt.side=Vn,Kt.needsUpdate=!0,dt=!0}}dt===!0&&(Fe.updateMultisampleRenderTarget(Te),Fe.updateRenderTargetMipmap(Te))}b.setRenderTarget(Ve,Oe,tt),b.setClearColor(re,ee),je!==void 0&&(ue.viewport=je),b.toneMapping=it}function Is(N,j,le){const ue=j.isScene===!0?j.overrideMaterial:null;for(let J=0,Te=N.length;J<Te;J++){const Le=N[J],Ve=Le.object,Oe=Le.geometry,tt=Le.group;let it=Le.material;it.allowOverride===!0&&ue!==null&&(it=ue),Ve.layers.test(le.layers)&&nl(Ve,j,le,Oe,it,tt)}}function nl(N,j,le,ue,J,Te){N.onBeforeRender(b,j,le,ue,J,Te),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,j,le,ue,N,Te),J.transparent===!0&&J.side===Ti&&J.forceSinglePass===!1?(J.side=On,J.needsUpdate=!0,b.renderBufferDirect(le,j,ue,J,N,Te),J.side=Ka,J.needsUpdate=!0,b.renderBufferDirect(le,j,ue,J,N,Te),J.side=Ti):b.renderBufferDirect(le,j,ue,J,N,Te),N.onAfterRender(b,j,le,ue,J,Te)}function oa(N,j,le){j.isScene!==!0&&(j=qe);const ue=Ge.get(N),J=x.state.lights,Te=x.state.shadowsArray,Le=J.state.version,Ve=he.getParameters(N,J.state,Te,j,le),Oe=he.getProgramCacheKey(Ve);let tt=ue.programs;ue.environment=N.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(N.isMeshStandardMaterial?Ct:lt).get(N.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",Se),tt=new Map,ue.programs=tt);let it=tt.get(Oe);if(it!==void 0){if(ue.currentProgram===it&&ue.lightsStateVersion===Le)return Ea(N,Ve),it}else Ve.uniforms=he.getUniforms(N),N.onBeforeCompile(Ve,b),it=he.acquireProgram(Ve,Oe),tt.set(Oe,it),ue.uniforms=Ve.uniforms;const je=ue.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(je.clippingPlanes=Ce.uniform),Ea(N,Ve),ue.needsLights=nr(N),ue.lightsStateVersion=Le,ue.needsLights&&(je.ambientLightColor.value=J.state.ambient,je.lightProbe.value=J.state.probe,je.directionalLights.value=J.state.directional,je.directionalLightShadows.value=J.state.directionalShadow,je.spotLights.value=J.state.spot,je.spotLightShadows.value=J.state.spotShadow,je.rectAreaLights.value=J.state.rectArea,je.ltc_1.value=J.state.rectAreaLTC1,je.ltc_2.value=J.state.rectAreaLTC2,je.pointLights.value=J.state.point,je.pointLightShadows.value=J.state.pointShadow,je.hemisphereLights.value=J.state.hemi,je.directionalShadowMap.value=J.state.directionalShadowMap,je.directionalShadowMatrix.value=J.state.directionalShadowMatrix,je.spotShadowMap.value=J.state.spotShadowMap,je.spotLightMatrix.value=J.state.spotLightMatrix,je.spotLightMap.value=J.state.spotLightMap,je.pointShadowMap.value=J.state.pointShadowMap,je.pointShadowMatrix.value=J.state.pointShadowMatrix),ue.currentProgram=it,ue.uniformsList=null,it}function Bs(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=xf.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function Ea(N,j){const le=Ge.get(N);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function tr(N,j,le,ue,J){j.isScene!==!0&&(j=qe),Fe.resetTextureUnits();const Te=j.fog,Le=ue.isMeshStandardMaterial?j.environment:null,Ve=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fr,Oe=(ue.isMeshStandardMaterial?Ct:lt).get(ue.envMap||Le),tt=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),je=!!le.morphAttributes.position,dt=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Qt=Or;ue.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Qt=b.toneMapping);const Ht=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pt=Ht!==void 0?Ht.length:0,$e=Ge.get(ue),Kt=x.state.lights;if(Be===!0&&(ne===!0||N!==L)){const sn=N===L&&ue.id===R;Ce.setState(ue,N,sn)}let St=!1;ue.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Kt.state.version||$e.outputColorSpace!==Ve||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Oe||ue.fog===!0&&$e.fog!==Te||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ce.numPlanes||$e.numIntersection!==Ce.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==it||$e.morphTargets!==je||$e.morphNormals!==dt||$e.morphColors!==Dt||$e.toneMapping!==Qt||$e.morphTargetsCount!==pt)&&(St=!0):(St=!0,$e.__version=ue.version);let Vn=$e.currentProgram;St===!0&&(Vn=oa(ue,j,J));let ji=!1,Qn=!1,wn=!1;const Wt=Vn.getUniforms(),Jn=$e.uniforms;if(Ie.useProgram(Vn.program)&&(ji=!0,Qn=!0,wn=!0),ue.id!==R&&(R=ue.id,Qn=!0),ji||L!==N){Ie.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Wt.setValue(V,"projectionMatrix",N.projectionMatrix),Wt.setValue(V,"viewMatrix",N.matrixWorldInverse);const In=Wt.map.cameraPosition;In!==void 0&&In.setValue(V,Re.setFromMatrixPosition(N.matrixWorld)),et.logarithmicDepthBuffer&&Wt.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Wt.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,Qn=!0,wn=!0)}if(J.isSkinnedMesh){Wt.setOptional(V,J,"bindMatrix"),Wt.setOptional(V,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Wt.setValue(V,"boneTexture",sn.boneTexture,Fe))}J.isBatchedMesh&&(Wt.setOptional(V,J,"batchingTexture"),Wt.setValue(V,"batchingTexture",J._matricesTexture,Fe),Wt.setOptional(V,J,"batchingIdTexture"),Wt.setValue(V,"batchingIdTexture",J._indirectTexture,Fe),Wt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Wt.setValue(V,"batchingColorTexture",J._colorsTexture,Fe));const kn=le.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Me.update(J,le,Vn),(Qn||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,Wt.setValue(V,"receiveShadow",J.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Jn.envMap.value=Oe,Jn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(Jn.envMapIntensity.value=j.environmentIntensity),Qn&&(Wt.setValue(V,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&qr(Jn,wn),Te&&ue.fog===!0&&ve.refreshFogUniforms(Jn,Te),ve.refreshMaterialUniforms(Jn,ue,k,q,x.state.transmissionRenderTarget[N.id]),xf.upload(V,Bs($e),Jn,Fe)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(xf.upload(V,Bs($e),Jn,Fe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Wt.setValue(V,"center",J.center),Wt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Wt.setValue(V,"normalMatrix",J.normalMatrix),Wt.setValue(V,"modelMatrix",J.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const sn=ue.uniformsGroups;for(let In=0,Fs=sn.length;In<Fs;In++){const ii=sn[In];ut.update(ii,Vn),ut.bind(ii,Vn)}}return Vn}function qr(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function nr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,j,le){const ue=Ge.get(N);ue.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ge.get(N.texture).__webglTexture=j,Ge.get(N.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,j){const le=Ge.get(N);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const mn=V.createFramebuffer();this.setRenderTarget=function(N,j=0,le=0){H=N,P=j,I=le;let ue=!0,J=null,Te=!1,Le=!1;if(N){const Oe=Ge.get(N);if(Oe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(Oe.__webglFramebuffer===void 0)Fe.setupRenderTarget(N);else if(Oe.__hasExternalTextures)Fe.rebindTextures(N,Ge.get(N.texture).__webglTexture,Ge.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const je=N.depthTexture;if(Oe.__boundDepthTexture!==je){if(je!==null&&Ge.has(je)&&(N.width!==je.image.width||N.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const it=Ge.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[j])?J=it[j][le]:J=it[j],Te=!0):N.samples>0&&Fe.useMultisampledRTT(N)===!1?J=Ge.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?J=it[le]:J=it,B.copy(N.viewport),X.copy(N.scissor),K=N.scissorTest}else B.copy(Q).multiplyScalar(k).floor(),X.copy(pe).multiplyScalar(k).floor(),K=ye;if(le!==0&&(J=mn),Ie.bindFramebuffer(V.FRAMEBUFFER,J)&&ue&&Ie.drawBuffers(N,J),Ie.viewport(B),Ie.scissor(X),Ie.setScissorTest(K),Te){const Oe=Ge.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,le)}else if(Le){const Oe=j;for(let tt=0;tt<N.textures.length;tt++){const it=Ge.get(N.textures[tt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+tt,it.__webglTexture,le,Oe)}}else if(N!==null&&le!==0){const Oe=Ge.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,le)}R=-1},this.readRenderTargetPixels=function(N,j,le,ue,J,Te,Le,Ve=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Ie.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const tt=N.textures[Ve],it=tt.format,je=tt.type;if(!et.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ue&&le>=0&&le<=N.height-J&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(j,le,ue,J,We.convert(it),We.convert(je),Te))}finally{const tt=H!==null?Ge.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,j,le,ue,J,Te,Le,Ve=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(j>=0&&j<=N.width-ue&&le>=0&&le<=N.height-J){Ie.bindFramebuffer(V.FRAMEBUFFER,Oe);const tt=N.textures[Ve],it=tt.format,je=tt.type;if(!et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(j,le,ue,J,We.convert(it),We.convert(je),0);const Dt=H!==null?Ge.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Dt);const Qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await i1(V,Qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(dt),V.deleteSync(Qt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,j=null,le=0){const ue=Math.pow(2,-le),J=Math.floor(N.image.width*ue),Te=Math.floor(N.image.height*ue),Le=j!==null?j.x:0,Ve=j!==null?j.y:0;Fe.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Le,Ve,J,Te),Ie.unbindTexture()};const Ou=V.createFramebuffer(),Pu=V.createFramebuffer();this.copyTextureToTexture=function(N,j,le=null,ue=null,J=0,Te=null){Te===null&&(J!==0?(pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=J,J=0):Te=0);let Le,Ve,Oe,tt,it,je,dt,Dt,Qt;const Ht=N.isCompressedTexture?N.mipmaps[Te]:N.image;if(le!==null)Le=le.max.x-le.min.x,Ve=le.max.y-le.min.y,Oe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,it=le.min.y,je=le.isBox3?le.min.z:0;else{const kn=Math.pow(2,-J);Le=Math.floor(Ht.width*kn),Ve=Math.floor(Ht.height*kn),N.isDataArrayTexture?Oe=Ht.depth:N.isData3DTexture?Oe=Math.floor(Ht.depth*kn):Oe=1,tt=0,it=0,je=0}ue!==null?(dt=ue.x,Dt=ue.y,Qt=ue.z):(dt=0,Dt=0,Qt=0);const pt=We.convert(j.format),$e=We.convert(j.type);let Kt;j.isData3DTexture?(Fe.setTexture3D(j,0),Kt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Fe.setTexture2DArray(j,0),Kt=V.TEXTURE_2D_ARRAY):(Fe.setTexture2D(j,0),Kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const St=V.getParameter(V.UNPACK_ROW_LENGTH),Vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ji=V.getParameter(V.UNPACK_SKIP_PIXELS),Qn=V.getParameter(V.UNPACK_SKIP_ROWS),wn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,je);const Wt=N.isDataArrayTexture||N.isData3DTexture,Jn=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const kn=Ge.get(N),sn=Ge.get(j),In=Ge.get(kn.__renderTarget),Fs=Ge.get(sn.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,In.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let ii=0;ii<Oe;ii++)Wt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(N).__webglTexture,J,je+ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(j).__webglTexture,Te,Qt+ii)),V.blitFramebuffer(tt,it,Le,Ve,dt,Dt,Le,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||Ge.has(N)){const kn=Ge.get(N),sn=Ge.get(j);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Ou),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pu);for(let In=0;In<Oe;In++)Wt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kn.__webglTexture,J,je+In):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kn.__webglTexture,J),Jn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Te,Qt+In):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Te),J!==0?V.blitFramebuffer(tt,it,Le,Ve,dt,Dt,Le,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Jn?V.copyTexSubImage3D(Kt,Te,dt,Dt,Qt+In,tt,it,Le,Ve):V.copyTexSubImage2D(Kt,Te,dt,Dt,tt,it,Le,Ve);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Jn?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Kt,Te,dt,Dt,Qt,Le,Ve,Oe,pt,$e,Ht.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Te,dt,Dt,Qt,Le,Ve,Oe,pt,Ht.data):V.texSubImage3D(Kt,Te,dt,Dt,Qt,Le,Ve,Oe,pt,$e,Ht):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,dt,Dt,Le,Ve,pt,$e,Ht.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,dt,Dt,Ht.width,Ht.height,pt,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Te,dt,Dt,Le,Ve,pt,$e,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,St),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,wn),Te===0&&j.generateMipmaps&&V.generateMipmap(Kt),Ie.unbindTexture()},this.initRenderTarget=function(N){Ge.get(N).__webglFramebuffer===void 0&&Fe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Fe.setTextureCube(N,0):N.isData3DTexture?Fe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Fe.setTexture2DArray(N,0):Fe.setTexture2D(N,0),Ie.unbindTexture()},this.resetState=function(){P=0,I=0,H=null,Ie.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Cp=1/1e3,xD=1e3,SD=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Cp}get fixedDelta(){return this._fixedDelta*Cp}set fixedDelta(r){this._fixedDelta=r*xD}get elapsed(){return this._elapsed*Cp}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},yD=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new kr;return t.setAttribute("position",new Wi(r,3)),t.setAttribute("uv",new Wi(e,2)),t})(),Xr=class Pm{static get fullscreenGeometry(){return yD}constructor(e="Pass",t=new Nm,i=new fg){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new ia(Pm.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Nm),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=bu){}render(e,t,i,s,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof ra||t instanceof el||t instanceof Hn||t instanceof Pm)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},MD=class extends Xr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,i,s){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},ED=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,TD="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",AD=class extends qi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new An(null),opacity:new An(1)},blending:xa,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ED,vertexShader:TD})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},bD=class extends Xr{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new AD,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new ra(1,1,{minFilter:Zn,magFilter:Zn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==wi?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===dn&&(this.renderTarget.texture.colorSpace=dn))}},dS=new Bt,Dy=class extends Xr{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,i,s){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=r.getClearAlpha(),p=l!==null,h=c>=0;p?(r.getClearColor(dS),r.setClearColor(l,h?c:f)):h&&r.setClearAlpha(c),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),p?r.setClearColor(dS,f):h&&r.setClearAlpha(f)}},RD=class extends Xr{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new Dy(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,i,s){const l=r.getContext(),c=r.state.buffers,f=this.scene,p=this.camera,h=this.clearPass,m=this.inverted?0:1,_=1-m;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,m,4294967295),c.stencil.setClear(_),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(r,null):(h.render(r,e),h.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,p)):(r.setRenderTarget(e),r.render(f,p),r.setRenderTarget(t),r.render(f,p)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},pS=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new bD,this.depthTexture=null,this.passes=[],this.timer=new SD,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new vt),t=r.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===wi&&r.outputColorSpace===dn&&(this.inputBuffer.texture.colorSpace=dn,this.outputBuffer.texture.colorSpace=dn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(r,t,i)}}replaceRenderer(r,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(r),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new hg;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=Xo,r.type=ko):r.type=Br,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,i){const s=this.renderer,l=s===null?new vt:s.getDrawingBufferSize(new vt),c={minFilter:Zn,magFilter:Zn,stencilBuffer:e,depthBuffer:r,type:t},f=new ra(l.width,l.height,c);return i>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=i),t===wi&&s!==null&&s.outputColorSpace===dn&&(f.texture.colorSpace=dn),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new vt),l=i.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(r.setRenderer(i),r.setSize(s.width,s.height),r.initialize(i,l,c),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(r of t)r.setDepthTexture(f)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const l=(f,p)=>f||p.needsDepthTexture;e.reduce(l,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,l=!1,c,f,p;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const h of this.passes)h.enabled&&(h.render(e,i,s,r,l),h.needsSwap&&(l&&(t.renderToScreen=h.renderToScreen,c=e.getContext(),f=e.state.buffers.stencil,f.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,s,r,l),f.setFunc(c.EQUAL,1,4294967295)),p=i,i=s,s=p),h instanceof RD?l=!0:h instanceof MD&&(l=!1))}setSize(r,e,t){const i=this.renderer,s=i.getSize(new vt);(r===void 0||e===void 0)&&(r=s.width,e=s.height),(s.width!==r||s.height!==e)&&i.setSize(r,e,t);const l=i.getDrawingBufferSize(new vt);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Xr.fullscreenGeometry.dispose()}},Rs={NONE:0,DEPTH:1,CONVOLUTION:2},Nt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},CD=class{constructor(){this.shaderParts=new Map([[Nt.FRAGMENT_HEAD,null],[Nt.FRAGMENT_MAIN_UV,null],[Nt.FRAGMENT_MAIN_IMAGE,null],[Nt.VERTEX_HEAD,null],[Nt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Rs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Fr}},wp=!1,mS=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ti:t=this.materialsFlatShadedDoubleSide;break;case On:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ti:t=this.materialsDoubleSide;break;case On:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof qi))return r.clone();const e=r.uniforms,t=new Map;for(const s in e){const l=e[s].value;l.isRenderTargetTexture&&(e[s].value=null,t.set(s,l))}const i=r.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Ka;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=On,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=Ti,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=On,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=Ti,i})}}render(r,e,t){const i=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,wp){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const l of s)l[0].material=l[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=s}r.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return wp}static set workaroundEnabled(r){wp=r}},Et={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},wD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",DD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",UD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",LD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",ND="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",OD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",PD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",ID="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",BD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",FD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",zD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",HD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",GD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",VD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",kD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",XD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",WD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",qD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",YD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",jD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",ZD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",KD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",QD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",JD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",$D="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",eU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",tU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",nU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",iU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",aU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",rU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",sU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",oU=new Map([[Et.ADD,wD],[Et.ALPHA,DD],[Et.AVERAGE,UD],[Et.COLOR,LD],[Et.COLOR_BURN,ND],[Et.COLOR_DODGE,OD],[Et.DARKEN,PD],[Et.DIFFERENCE,ID],[Et.DIVIDE,BD],[Et.DST,null],[Et.EXCLUSION,FD],[Et.HARD_LIGHT,zD],[Et.HARD_MIX,HD],[Et.HUE,GD],[Et.INVERT,VD],[Et.INVERT_RGB,kD],[Et.LIGHTEN,XD],[Et.LINEAR_BURN,WD],[Et.LINEAR_DODGE,qD],[Et.LINEAR_LIGHT,YD],[Et.LUMINOSITY,jD],[Et.MULTIPLY,ZD],[Et.NEGATION,KD],[Et.NORMAL,QD],[Et.OVERLAY,JD],[Et.PIN_LIGHT,$D],[Et.REFLECT,eU],[Et.SATURATION,tU],[Et.SCREEN,nU],[Et.SOFT_LIGHT,iU],[Et.SRC,aU],[Et.SUBTRACT,rU],[Et.VIVID_LIGHT,sU]]),lU=class extends Vr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new An(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return oU.get(this.blendFunction)}},Uy=class extends Vr{constructor(r,e,{attributes:t=Rs.NONE,blendFunction:i=Et.NORMAL,defines:s=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=s,this.uniforms=l,this.extensions=c,this.blendMode=new lU(i),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Fr,this._outputColorSpace=ma}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=bu){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof ra||e instanceof el||e instanceof Hn||e instanceof Xr)&&this[r].dispose()}}},gS=class extends Xr{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new Dy,this.overrideMaterialManager=t===null?null:new mS(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new mS(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,i,s){const l=this.scene,c=this.camera,f=this.selection,p=c.layers.mask,h=l.background,m=r.shadowMap.autoUpdate,_=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,c):r.render(l,c),c.layers.mask=p,l.background=h,r.shadowMap.autoUpdate=m}},uU=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,cU="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",fU=class extends qi{constructor(r,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:If.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new An(null),depthBuffer:new An(null),resolution:new An(new vt),texelSize:new An(new vt),cameraNear:new An(.3),cameraFar:new An(1e3),aspect:new An(1),time:new An(0)},blending:xa,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=bu){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=uU.replace(Nt.FRAGMENT_HEAD,r.get(Nt.FRAGMENT_HEAD)||"").replace(Nt.FRAGMENT_MAIN_UV,r.get(Nt.FRAGMENT_MAIN_UV)||"").replace(Nt.FRAGMENT_MAIN_IMAGE,r.get(Nt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=cU.replace(Nt.VERTEX_HEAD,r.get(Nt.VERTEX_HEAD)||"").replace(Nt.VERTEX_MAIN_SUPPORT,r.get(Nt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Gi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Nt}};function _S(r,e,t){for(const i of e){const s="$1"+r+i.charAt(0).toUpperCase()+i.slice(1),l=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const c of t.entries())c[1]!==null&&t.set(c[0],c[1].replace(l,s))}}function hU(r,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const l=i!==void 0&&/mainImage/.test(i),c=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(t.attributes&Rs.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=t.shaderParts;let h=p.get(Nt.FRAGMENT_HEAD)||"",m=p.get(Nt.FRAGMENT_MAIN_UV)||"",_=p.get(Nt.FRAGMENT_MAIN_IMAGE)||"",v=p.get(Nt.VERTEX_HEAD)||"",S=p.get(Nt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,M=new Set;if(c&&(m+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);S+=`	${r}MainSupport(`,S+=A?`vUv);
`:`);
`;for(const C of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const b of C[1].split(/\s*,\s*/))t.varyings.add(b),E.add(b),M.add(b);for(const C of s.matchAll(f))M.add(C[1])}for(const A of i.matchAll(f))M.add(A[1]);for(const A of e.defines.keys())M.add(A.replace(/\([\w\s,]*\)/g,""));for(const A of e.uniforms.keys())M.add(A);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((A,C)=>t.uniforms.set(r+C.charAt(0).toUpperCase()+C.slice(1),A)),e.defines.forEach((A,C)=>t.defines.set(r+C.charAt(0).toUpperCase()+C.slice(1),A));const y=new Map([["fragment",i],["vertex",s]]);_S(r,M,t.defines),_S(r,M,y),i=y.get("fragment"),s=y.get("vertex");const x=e.blendMode;if(t.blendModes.set(x.blendFunction,x),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(_+=e.inputColorSpace===dn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==ma?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${r}MainImage(color0, UV, `,(t.attributes&Rs.DEPTH)!==0&&A.test(i)&&(_+="depth, ",t.readDepth=!0),_+=`color1);
	`;const C=r+"BlendOpacity";t.uniforms.set(C,x.opacity),_+=`color0 = blend${x.blendFunction}(color0, color1, ${C});

	`,h+=`uniform float ${C};

`}if(h+=i+`
`,s!==null&&(v+=s+`
`),p.set(Nt.FRAGMENT_HEAD,h),p.set(Nt.FRAGMENT_MAIN_UV,m),p.set(Nt.FRAGMENT_MAIN_IMAGE,_),p.set(Nt.VERTEX_HEAD,v),p.set(Nt.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const A of e.extensions)t.extensions.add(A)}}var vS=class extends Xr{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new fU(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new CD;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===Et.DST)r.attributes|=c.getAttributes()&Rs.DEPTH;else{if((r.attributes&c.getAttributes()&Rs.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);hU("e"+e++,c,r)}let t=r.shaderParts.get(Nt.FRAGMENT_HEAD),i=r.shaderParts.get(Nt.FRAGMENT_MAIN_IMAGE),s=r.shaderParts.get(Nt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of r.blendModes.values())t+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(r.attributes&Rs.DEPTH)!==0?(r.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===dn&&(i+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Nt.FRAGMENT_HEAD,t),r.shaderParts.set(Nt.FRAGMENT_MAIN_IMAGE,i),r.shaderParts.set(Nt.FRAGMENT_MAIN_UV,s);for(const[c,f]of r.shaderParts)f!==null&&r.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=bu){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,i,s){for(const l of this.effects)l.update(r,e,i);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=i*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const i of this.effects)i.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==wi&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};const dU=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const i=new Hn(e);i.minFilter=Zn,i.magFilter=Zn,i.generateMipmaps=!1;const s=[];let l=null;const c=64;let f=.1*64;const p=1/c,h=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},m=S=>{const E={x:S.x*64,y:(1-S.y)*64};let M=1;const y=b=>Math.sin(b*Math.PI/2),x=b=>-b*(b-2);S.age<c*.3?M=y(S.age/(c*.3)):M=x(1-(S.age-c*.3)/(c*.7))||0,M*=S.force;const A=`${(S.vx+1)/2*255}, ${(S.vy+1)/2*255}, ${M*255}`,C=320;t.shadowOffsetX=C,t.shadowOffsetY=C,t.shadowBlur=f,t.shadowColor=`rgba(${A},${.22*M})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(E.x-C,E.y-C,f,0,Math.PI*2),t.fill()};return{canvas:e,texture:i,addTouch:S=>{let E=0,M=0,y=0;if(l){const x=S.x-l.x,A=S.y-l.y;if(x===0&&A===0)return;const C=x*x+A*A,b=Math.sqrt(C);M=x/(b||1),y=A/(b||1),E=Math.min(C*1e4,1)}l={x:S.x,y:S.y},s.push({x:S.x,y:S.y,age:0,force:E,vx:M,vy:y})},update:()=>{h();for(let S=s.length-1;S>=0;S--){const E=s[S],M=E.force*p*(1-E.age/c);E.x+=E.vx*M,E.y+=E.vy*M,E.age++,E.age>c&&s.splice(S,1)}for(let S=0;S<s.length;S++)m(s[S]);i.needsUpdate=!0},set radiusScale(S){f=.1*64*S},get radiusScale(){return f/(.1*64)},size:64}},pU=(r,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Uy("LiquidEffect",t,{uniforms:new Map([["uTexture",new An(r)],["uStrength",new An(e?.strength??.025)],["uTime",new An(0)],["uFreq",new An(e?.freq??4.5)]])})},xS={square:0,circle:1,triangle:2,diamond:3},mU=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,gU=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`,Dp=10,_U=({variant:r="square",pixelSize:e=3,color:t="#201533",className:i,style:s,antialias:l=!0,patternScale:c=2,patternDensity:f=1,liquid:p=!1,liquidStrength:h=.1,liquidRadius:m=1,pixelSizeJitter:_=0,enableRipples:v=!0,rippleIntensityScale:S=1,rippleThickness:E=.1,rippleSpeed:M=.3,liquidWobbleSpeed:y=4.5,autoPauseOffscreen:x=!0,speed:A=.5,transparent:C=!0,edgeFade:b=.5,noiseAmount:U=0,interactive:P=!1})=>{const I=oe.useRef(null),H=oe.useRef({visible:!0}),R=oe.useRef(A),L=oe.useRef(null),B=oe.useRef(null);return oe.useEffect(()=>{const X=I.current;if(!X)return;R.current=A;const K=["antialias","liquid","noiseAmount","interactive"],re={antialias:l,liquid:p,noiseAmount:U,interactive:P};let ee=!1,z=null,q=null;if(!L.current)ee=!0;else if(B.current){for(const k of K)if(B.current[k]!==re[k]){ee=!0;break}}if(ee){if(L.current){const Fe=L.current;Fe.resizeObserver?.disconnect(),cancelAnimationFrame(Fe.raf),Fe.quad?.geometry.dispose(),Fe.material.dispose(),Fe.composer?.dispose(),Fe.renderer.dispose(),Fe.renderer.domElement.parentElement===X&&X.removeChild(Fe.renderer.domElement),L.current=null}const k=document.createElement("canvas"),_e=k.getContext("webgl2",{antialias:l,alpha:!0});if(!_e)return;const O=new vD({canvas:k,context:_e,antialias:l,alpha:!0});O.domElement.style.width="100%",O.domElement.style.height="100%",O.domElement.style.pointerEvents=P?"auto":"none",O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.appendChild(O.domElement);const Q={uResolution:{value:new vt(0,0)},uTime:{value:0},uColor:{value:new Bt(t)},uClickPos:{value:Array.from({length:Dp},()=>new vt(-1,-1))},uClickTimes:{value:new Float32Array(Dp)},uShapeType:{value:xS[r]??0},uPixelSize:{value:e*O.getPixelRatio()},uScale:{value:c},uDensity:{value:f},uPixelJitter:{value:_},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:E},uRippleIntensity:{value:S},uEdgeFade:{value:b}},pe=new Nm,ye=new Ty(-1,1,1,-1,0,1),be=new qi({vertexShader:mU,fragmentShader:gU,uniforms:Q,transparent:!0,glslVersion:Um,depthTest:!1,depthWrite:!1}),Be=new Uu(2,2),ne=new ia(Be,be);pe.add(ne);const ge=new P1,Re=()=>{const Fe=X.clientWidth||1,lt=X.clientHeight||1;O.setSize(Fe,lt,!1),Q.uResolution.value.set(O.domElement.width,O.domElement.height),L.current?.composer&&L.current.composer.setSize(O.domElement.width,O.domElement.height),Q.uPixelSize.value=e*O.getPixelRatio()};Re();const Ke=new ResizeObserver(Re);Ke.observe(X);const ct=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Fe=new Uint32Array(1);return window.crypto.getRandomValues(Fe),Fe[0]/4294967295}return Math.random()})()*1e3;let xt,V,bt;if(p){V=dU(),V.radiusScale=m,xt=new pS(O);const Fe=new gS(pe,ye);bt=pU(V.texture,{strength:h,freq:y});const lt=new vS(ye,bt);lt.renderToScreen=!0,xt.addPass(Fe),xt.addPass(lt)}if(U>0){xt||(xt=new pS(O),xt.addPass(new gS(pe,ye)));const Fe=new Uy("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new An(0)],["uAmount",new An(U)]])}),lt=new vS(ye,Fe);lt.renderToScreen=!0,xt&&xt.passes.length>0&&xt.passes.forEach(Ct=>Ct.renderToScreen=!1),xt.addPass(lt)}xt&&xt.setSize(O.domElement.width,O.domElement.height);const st=Fe=>{const lt=O.domElement.getBoundingClientRect(),Ct=O.domElement.width/lt.width,F=O.domElement.height/lt.height,w=(Fe.clientX-lt.left)*Ct,ie=(lt.height-(Fe.clientY-lt.top))*F;return{fx:w,fy:ie,w:O.domElement.width,h:O.domElement.height}};let et=null,Ie=null;et=Fe=>{const{fx:lt,fy:Ct}=st(Fe),F=L.current?.clickIx??0;Q.uClickPos.value[F].set(lt,Ct),Q.uClickTimes.value[F]=Q.uTime.value,L.current&&(L.current.clickIx=(F+1)%Dp)},Ie=Fe=>{if(!V)return;const{fx:lt,fy:Ct,w:F,h:w}=st(Fe);V.addTouch({x:lt/F,y:Ct/w})},P&&(O.domElement.addEventListener("pointerdown",et,{passive:!0}),O.domElement.addEventListener("pointermove",Ie,{passive:!0}),z=et,q=Ie);let Ot=0;const Ge=()=>{if(x&&!H.current.visible){Ot=requestAnimationFrame(Ge);return}Q.uTime.value=ct+ge.getElapsedTime()*R.current,bt&&(bt.uniforms.get("uTime").value=Q.uTime.value),xt?(V&&V.update(),xt.passes.forEach(Fe=>{const lt=Fe.effects;lt&&lt.forEach(Ct=>{const F=Ct.uniforms?.get("uTime");F&&(F.value=Q.uTime.value)})}),xt.render()):O.render(pe,ye),Ot=requestAnimationFrame(Ge)};Ot=requestAnimationFrame(Ge),L.current={renderer:O,scene:pe,camera:ye,material:be,clock:ge,clickIx:0,uniforms:Q,resizeObserver:Ke,raf:Ot,quad:ne,timeOffset:ct,composer:xt,touch:V,liquidEffect:bt}}else{const k=L.current;if(k.uniforms.uShapeType.value=xS[r]??0,k.uniforms.uPixelSize.value=e*k.renderer.getPixelRatio(),k.uniforms.uColor.value.set(t),k.uniforms.uScale.value=c,k.uniforms.uDensity.value=f,k.uniforms.uPixelJitter.value=_,k.uniforms.uEnableRipples.value=v?1:0,k.uniforms.uRippleIntensity.value=S,k.uniforms.uRippleThickness.value=E,k.uniforms.uRippleSpeed.value=M,k.uniforms.uEdgeFade.value=b,C?k.renderer.setClearAlpha(0):k.renderer.setClearColor(0,1),k.liquidEffect){const _e=k.liquidEffect;_e&&(_e.value=h);const O=k.liquidEffect.uniforms.get("uFreq");O&&(O.value=y)}k.touch&&(k.touch.radiusScale=m)}return B.current=re,()=>{if(L.current&&ee||!L.current)return;const k=L.current;k.resizeObserver?.disconnect(),cancelAnimationFrame(k.raf),k.quad?.geometry.dispose(),k.material.dispose(),k.composer?.dispose();try{P&&k.renderer&&k.renderer.domElement&&(z&&k.renderer.domElement.removeEventListener("pointerdown",z),q&&k.renderer.domElement.removeEventListener("pointermove",q))}catch{}k.renderer.dispose(),k.renderer.domElement.parentElement===X&&X.removeChild(k.renderer.domElement),L.current=null}},[l,p,U,e,c,f,v,S,E,M,_,b,C,h,m,y,x,r,t,A,P]),De.jsx("div",{ref:I,className:`pixel-blast-container ${i??""}`,style:s,"aria-label":"PixelBlast interactive background"})};function vU(r){const e=r.replace("#",""),t=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16),i=t>>16&255,s=t>>8&255,l=t&255;return[i,s,l]}function xU({color:r="#000000",strength:e=.6,style:t={}}){const i=Math.max(0,Math.min(1,e)),[s,l,c]=vU(r||"#000000"),f=Math.round(5+i*45),p=`linear-gradient(to bottom, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,h=`linear-gradient(to top, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,m=`linear-gradient(to right, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,_=`linear-gradient(to left, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,v={position:"fixed",inset:0,zIndex:1,pointerEvents:"none",backgroundImage:`${p}, ${h}, ${m}, ${_}`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",mixBlendMode:"normal",...t};return De.jsx("div",{"aria-hidden":!0,style:v})}function SU({interactive:r=!1}){return De.jsxs("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:0,overflow:"hidden",pointerEvents:r?"auto":"none"},children:[De.jsx(_U,{variant:"square",pixelSize:4,color:"#203562",patternScale:3,patternDensity:1.5,pixelSizeJitter:1.5,enableRipples:!0,rippleSpeed:.5,rippleThickness:.08,rippleIntensityScale:1.5,liquid:!0,liquidStrength:0,liquidRadius:0,liquidWobbleSpeed:.5,speed:.5,edgeFade:0,transparent:!0,interactive:r}),De.jsx(xU,{color:"#201533",strength:.05})]})}const yU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAAXNSR0IArs4c6QAAAT5JREFUaIHt2jGKwkAYxfH3iReQLYXVwiNsrmC1/XoDj+IZAsZTWKVZttkmHiEEm5SaI4yFDBg1OHEJzyzvDylmmOLH8CVVLC2ODj1tCADz9MB2tG6arM54AHDLGVfToskiAfzN+6KyYnmeahhwppOy8ai2jsoqeM836NgY3G57fu8szmFxfrN3fQ5svMX53VH9+Hyrrd1ydvccbWzQ8JFo+nBcjw+Y+KisaiPQZs9Xw2fjkZlZF9agdoF7+Fo7sGf+rwnPSnhWwrMSnpXwrIRnJTwr4VkJz0p4VsKzEp6V8KyEZyU8K+FZCc9KeFbCsxKelfCshGclPCvhWQnPSnhWL4t3zjU+vpfFh/R/8MwfQp+pdzc/WSRuUPwCfcNfwvfZxiwtjm6eHvD+/cO2PewSDv8j9DRZkVnheTgAnABQUGtysVsplgAAAABJRU5ErkJggg==",iu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAICAYAAACRbl3VAAAAAXNSR0IArs4c6QAAAGBJREFUOI1jYKAx2HXv3X9S1LNg0+imJMSITQybGmR12MSwOQ7ZfGxsFM0wNi4xdHlS9BIjBg8hSgCx0YIv1GCAhQFLdOASwwaQ1cGCnJB56OqQo5ooXwwIQE4fowAJAAD3cIZxtTODeAAAAABJRU5ErkJggg==",ei="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAICAYAAACRbl3VAAAAAXNSR0IArs4c6QAAAGBJREFUOI1jYKAxuBme/J8U9SzYNKqvnMuITQybGmR12MSwOQ7ZfGxsFM0wNi4xdHlS9BIjBg8hSgCx0YIv1GCAhQFLdOASwwaQ1cGCnJB56OqQo5ooXwwIQE4fowAJAAC+mHN1F45KcQAAAABJRU5ErkJggg==",zr=({src:r,className:e="",containerStyle:t={},imageStyle:i={},scale:s,onScaleChange:l})=>{const c=oe.useRef(null),[f,p]=oe.useState(1),[h,m]=oe.useState({width:0,height:0}),_=s!==void 0?s:f;oe.useEffect(()=>{const E=new Image;E.onload=()=>{m({width:E.width,height:E.height});const M=()=>{if(c.current&&s===void 0){const{width:x}=c.current.getBoundingClientRect(),A=x/E.width,C=Math.max(.1,A);p(C),l&&l(C)}};M();const y=new ResizeObserver(M);return c.current&&y.observe(c.current),()=>y.disconnect()},E.src=r},[r,s,l]);const v={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",pointerEvents:"none",overflow:"hidden",...t},S={width:`${h.width*_}px`,height:`${h.height*_}px`,imageRendering:"pixelated",pointerEvents:"none",objectFit:"contain",maxWidth:"100%",maxHeight:"100%",...i};return De.jsx("div",{ref:c,className:`pixel-art-container ${e}`,style:v,children:De.jsx("img",{src:r,alt:"pixel art",style:S,draggable:!1})})},Ly=({id:r,activeImage:e,normalImage:t,hoverImage:i,clickImage:s,onClick:l,className:c="",isActive:f=!1,hoverScale:p=1.05,clickScale:h=.95,activeScale:m=1.03})=>{const[_,v]=oe.useState("normal"),S=oe.useRef(null),E=()=>f&&e?e:_==="click"?s||i||t:_==="hover"&&i||t,M=()=>f?_==="click"?{transform:`scale(${h})`}:_==="hover"?{transform:`scale(${p})`}:{transform:`scale(${m})`}:_==="click"?{transform:`scale(${h})`}:_==="hover"?{transform:`scale(${p})`}:{transform:"scale(1)"},y=U=>{l&&l(r,U)},x=()=>{v("hover")},A=()=>{v("normal")},C=()=>{v("click")},b=()=>{v("hover")};return De.jsx("button",{ref:S,className:`image-button ${c}`,style:{width:"100%",height:"100%",background:"none",border:"none",cursor:"pointer",padding:0,transformOrigin:"center",...M()},onMouseEnter:x,onMouseLeave:A,onMouseDown:C,onMouseUp:b,onClick:y,"data-button-id":r,children:De.jsx(zr,{src:E()})})};function MU({setActiveScreen:r,activeScreen:e}){const t=[{id:"chat",label:"chat",image:iu,hover:ei,click:ei,activeImage:ei},{id:"profile",label:"profile",image:iu,hover:ei,click:ei,activeImage:ei},{id:"gamedev",label:"gamedev",image:iu,hover:ei,click:ei,activeImage:ei},{id:"paint",label:"paint",image:iu,hover:ei,click:ei,activeImage:ei},{id:"music",label:"music",image:iu,hover:ei,click:ei,activeImage:ei}];return De.jsxs("div",{className:"sidebar-container",children:[De.jsx(zr,{className:"sidebar-window",src:yU}),De.jsx("div",{className:"sidebar-list",children:t.map(i=>De.jsx(Ly,{normalImage:i.image,hoverImage:i.hover,clickImage:i.click,activeImage:i.activeImage,onClick:()=>r(i.id),isActive:e===i.id},i.id))})]})}const EU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAAAQtJREFUaIHt2r0NgkAYxvHnDAsQSwsoGEFWsHIAN2AUZqDAKaxojI0NjkCIDaUywlmQS/hMDg15JHn/HccVv5CXa0Bl5VtjpTkAcMhebMfs/DRu8ACgo4CrmZF3SgHz5E1hVbM8X+VY7FmkfOd2rsOqtl4zbRY2Wve4NO+dSgqopBis9feBjVdJMTqq++O2c62jYHQfbWwwcUhMHRz98QETH1Z1ZwTmrJk6+HznqiWgk0XDp2mz5l1vGuyZ/zXBsxI8K8GzEjwrwbMSPCvBsxI8K8GzEjwrwbMSPCvBsxI8K8GzEjyr1eG9U6o35R1YG74Nf+Zn5bRuAMBf/0TRhsN8UPPTmMyyz8AB4AO2SFHT+R9ZlwAAAABJRU5ErkJggg==",TU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAAAQZJREFUaIHtl8ENwyAQBEkK4Zc6olThBvJISXm4gVSBqMM/N+J8gkRkWeFuF4jEzdPywbIcaHHOMAzDMAzDMIbmVGNQP83bervuv4fo1tedNidV/JHo3X+kRfDEP5dNXPO4QPNzxGuEJ4AFnNWTfvDTrBcO1uPOI64nlO5DzqOuo+NgzjNcTyjch3u+Jya+F+OK9yFSRGjHGfeedwT3kfqxs41D3ANTJUV8SYbP8SHCwl3XA9tdPHrTdHuMsEJZ8wNLTJNIrBaLZ2X4hPSw58i3jJnhcxTtIyuoJTwhXEB529QWrmjJIvHsPj9C2v9l29TA9S8K2+en861c18z5ly8p5Po0WvAGfM9cCxDY9y4AAAAASUVORK5CYII=";function AU(){return De.jsxs("div",{className:"avatar-container",children:[De.jsx(zr,{className:"avatar-base",src:TU}),De.jsx(zr,{className:"avatar-window",src:EU})]})}const bU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACBCAYAAABzRnCiAAAAAXNSR0IArs4c6QAAAnNJREFUeJzt3DFKHUEAgOFZ8QKSUogWHiFewSoH8AYexTNYmFOkshGbNOYIImks1SNsCnnBpwZMoj75832wxQ4LO8XPMLssO51c3swDotbHGGPv5HrV84AXt318eBf4GGPMBzurnQ28oK394zEWK/jC7tXtquYDr2L9GdfASpxvbiyd717dPntsYe2V5wgv5vvXu2fF6ehiTEcXj8YeXjcEzns3HV08uXX+9PnD0vl8sPPkdbYovGtPvfz43QuRh1uVIXDes92r26Xtxp+MLSwFfr65Mb3GRO+bple/BRHzPI9x8HhVfs7Y1unZPB4GLj5qPGSSJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBM67NU3TXx8LAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0tbvn8zz/GY3nqbpze7F/8sKTprASRM4aQInTeCkCZw0gZMmcNIETprASRM4aQInTeCkCZw0gZMmcNIETprASRM4aQInTeCkCZw0gZO29F8U/yqhxgpOmsBJEzhpAidN4KQJnDSBkyZw0gROxjzPv44FgZOztX88r11+G0Pg1NyP+8f5l2k6ubyZ906ux8fTs1XPDf7Z/bjH4mOr7ePDFU8LXs4i7jHG+Ak2P2ahrAmNtQAAAABJRU5ErkJggg==",RU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIRJREFUOI1jZMAHZtz+j1MuQ5URlxQLPsMU5rbjNPMBzEIshmPaNuP2f3yGYRieXIlhMKqhJBqIy2CEoWQaiM1gRmoYiG4wE8UmYQGM1HIlDDxIrmSgiUtHDR0ihg6lxA8DVM/7FBqMu5Qi02DC5SmSwQyESv7kSgiDqJIfi+FYAZ46CgD1S0kppbdYDQAAAABJRU5ErkJggg==",CU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIRJREFUOI1jZMADTJ68+49L7oyMECMuORZ8hp3Z8paghdgMxxAwefLuPz7DMNT7CGMYjMIh1UBcBsMZ5BqIzWBGahiIbjATxSZhAYzUciUMmPgIM9DEpaOGDhFDh1Dih9tC7bxPqcE4SylyDSZYniIbzECo5PcRZmAgtuTHZjg2gK+OAgAb9VaYxhDgpAAAAABJRU5ErkJggg==";function wU(r){const{message:e,sender:t}=r;return De.jsxs("div",{className:t==="user"?"chat-message-user":"chat-message-nines",children:[t==="nines"&&De.jsx("div",{className:"chat-message-profile",children:De.jsx(zr,{src:RU})}),De.jsx("div",{className:"chat-message-text",children:e}),t==="user"&&De.jsx("div",{className:"chat-message-profile",children:De.jsx(zr,{className:"chat-message-profile",src:CU})})]})}function DU({chatMessages:r}){const e=oe.useRef(null);return oe.useEffect(()=>{e.current.scrollTop=e.current.scrollHeight},[r]),De.jsx("div",{className:"chat-messages-container",ref:e,children:r.map(t=>De.jsx(wU,{message:t.message,sender:t.sender},t.id))})}const UU=({normalImage:r,hoverImage:e,focusImage:t,placeholder:i="",value:s="",onChange:l,onFocus:c,onBlur:f,onSubmit:p,className:h="",maxLength:m,disabled:_=!1})=>{const[v,S]=oe.useState("normal"),E=oe.useRef(null),M=()=>v==="focus"?t||e||r:v==="hover"&&e||r,y=U=>{S("focus"),c&&c(U)},x=U=>{S("normal"),f&&f(U)},A=()=>{v!=="focus"&&S("hover")},C=()=>{v!=="focus"&&S("normal")},b=U=>{U.key==="Enter"&&p&&(U.preventDefault(),p(U))};return De.jsxs("div",{className:`pixel-input-container ${h}`,style:{position:"relative",width:"100%",height:"100%",cursor:_?"not-allowed":"text"},onMouseEnter:A,onMouseLeave:C,onClick:()=>E.current?.focus(),children:[De.jsx(zr,{src:M(),containerStyle:{width:"100%",height:"100%",position:"absolute",top:0,left:0},imageStyle:{objectFit:"fill"}}),De.jsx("input",{ref:E,type:"text",placeholder:i,value:s,onChange:l,onFocus:y,onBlur:x,onKeyDown:b,maxLength:m,disabled:_,style:{width:"100%",height:"100%",background:"transparent",border:"none",outline:"none",padding:"0 20px",fontSize:"16px",color:"white",fontFamily:"inherit",position:"relative",zIndex:1,cursor:"inherit"}})]})},Up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAPCAYAAACFgM0XAAAAAXNSR0IArs4c6QAAAL9JREFUOI1j3HXv3X+GAQQsDAwMDK6KggNiuXzEXIgDGBgYGBhn3qG7A+QYGBiY6G4rGqCrA3a5CQ+sA7ABFlwS6K512/UWQxybGLI4NjmiHLDLTRjFEFziyHxs4tjUE+UAmGZyfEQqwBkFxPiUZg5A92VK5ToGBkd7hpTKdQy72oOwOhIbQFePDTDuuvfuv6uiIEpBJLf/IIqiR472WOVg4nL7D2KoQZbDZxZWB9ALyO0/OEjKAfmIuQxyA+QAAAuxWmko5ICRAAAAAElFTkSuQmCC",Lp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAUCAYAAADGDQylAAAAAXNSR0IArs4c6QAAAJVJREFUaIHt2rEJwlAYhdH/BQcRd7BxHJ3CTawyjk1GCEgmUVsFG1GMuZzTve4++HikSKvTeCsI0NbbvZiJ0M09AL5FzMR4GfN0OP5+CXzIy0wMMRNDzMQQMzHETAwxE0PMxBAzMcRMDDETQ8zE8AsoMVaPh+tmN98S/kp3Oc894W1PMS/xAlBVNQ19883M4k1D36qq7ooDEP7AUvBuAAAAAElFTkSuQmCC";function LU({chatMessages:r,setChatMessages:e}){const[t,i]=oe.useState(""),s={greetings:["你好！我是Nines，很高兴为你服务！","嗨！有什么我可以帮助你的吗？","你好呀！今天过得怎么样？"],questions:["这是一个很好的问题，让我想想怎么回答你...","关于这个问题，我可以为你提供一些基本信息。","我理解你的疑问，让我尝试解释一下。"],help:["我可以帮你解答问题、提供信息或者只是聊聊天！","试试问我一些常见问题，或者告诉我你需要什么帮助。","我在这里随时为你提供帮助！"],thanks:["不客气！很高兴能帮到你！","这是我应该做的！还有什么需要帮助的吗？","谢谢你的认可！随时欢迎再来咨询。"],farewell:["再见！期待下次与你聊天！","祝你有个美好的一天！","再见啦，记得有问题随时来找我哦！"],default:["很有趣的观点！能告诉我更多吗？","我明白了，请继续。","这听起来很有意思！","好的，我记下了。","谢谢分享这个信息！"]};function l(m){const _=m.toLowerCase().trim();return _===""||_.length<2?"请告诉我更多信息，这样我才能更好地帮助你！":/(你好|嗨|hello|hi|早上好|下午好|晚上好)/.test(_)?c(s.greetings):/(谢谢|感谢|thank|thanks)/.test(_)?c(s.thanks):/(再见|拜拜|bye|goodbye|再会)/.test(_)?c(s.farewell):/(帮助|help|怎么|如何|怎么办|为什么|what|how|why)/.test(_)?c(s.help)+" "+c(s.questions):/(？|\?|吗|呢|什么|谁|哪里|when|where|who)/.test(_)?c(s.questions):c(s.default)}function c(m){return m[Math.floor(Math.random()*m.length)]}function f(m){i(m.target.value)}function p(){h()}async function h(){if(!t.trim())return;const m={message:t.trim(),sender:"user",id:crypto.randomUUID(),timestamp:new Date().toLocaleTimeString()},_=[...r,m];e(_),i(""),await new Promise(E=>setTimeout(E,500+Math.random()*1e3));const S={message:l(t),sender:"nines",id:crypto.randomUUID(),timestamp:new Date().toLocaleTimeString()};e([..._,S])}return De.jsx("div",{className:"chat-input-container",children:De.jsxs("div",{className:"chat-input-box",children:[De.jsx("div",{className:"input-wrapper",children:De.jsx(UU,{normalImage:Lp,hoverImage:Lp,focusImage:Lp,placeholder:"Say something...",value:t,onChange:f,onSubmit:p})}),De.jsx("div",{className:"send-button",children:De.jsx(Ly,{normalImage:Up,hoverImage:Up,clickImage:Up,onClick:h})})]})})}function SS(){const[r,e]=oe.useState([]);return De.jsxs("div",{className:"chat-screen-container",children:[De.jsx(DU,{chatMessages:r}),De.jsx(LU,{chatMessages:r,setChatMessages:e})]})}function NU(){return De.jsx("div",{className:"profile-screen-container",children:De.jsx("h2",{children:"Profile Screen"})})}function OU(){return De.jsx("div",{className:"gamedev-screen-container",children:De.jsx("h2",{children:"GameDev Screen"})})}function Xa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ny(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qo={duration:.5,overwrite:!1,delay:0},pg,Gn,$t,Vi=1e8,jt=1/Vi,Im=Math.PI*2,PU=Im/4,IU=0,Oy=Math.sqrt,BU=Math.cos,FU=Math.sin,Pn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},Ja=function(e){return typeof e=="number"},mg=function(e){return typeof e>"u"},ya=function(e){return typeof e=="object"},ui=function(e){return e!==!1},gg=function(){return typeof window<"u"},hf=function(e){return un(e)||Pn(e)},Py=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kn=Array.isArray,Bm=/(?:-?\.?\d|\.)+/gi,Iy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,No=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Np=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,By=/[+-]=-?[.\d]+/,Fy=/[^,'"\[\]\s]+/gi,zU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn,da,Fm,_g,Di={},Rf={},zy,Hy=function(e){return(Rf=Yo(e,Di))&&di},vg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},mu=function(e,t){return!t&&console.warn(e)},Gy=function(e,t){return e&&(Di[e]=t)&&Rf&&(Rf[e]=t)||Di},gu=function(){return 0},HU={suppressEvents:!0,isStart:!0,kill:!1},Sf={suppressEvents:!0,kill:!1},GU={suppressEvents:!0},xg={},Pr=[],zm={},Vy,Ei={},Op={},yS=30,yf=[],Sg="",yg=function(e){var t=e[0],i,s;if(ya(t)||un(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=yf.length;s--&&!yf[s].targetTest(t););i=yf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new hM(e[s],i)))||e.splice(s,1);return e},Cs=function(e){return e._gsap||yg(ki(e))[0]._gsap},ky=function(e,t,i){return(i=e[t])&&un(i)?e[t]():mg(i)&&e.getAttribute&&e.getAttribute(t)||i},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},hn=function(e){return Math.round(e*1e5)/1e5||0},Sn=function(e){return Math.round(e*1e7)/1e7||0},Bo=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},VU=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Cf=function(){var e=Pr.length,t=Pr.slice(0),i,s;for(zm={},Pr.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Mg=function(e){return!!(e._initted||e._startAt||e.add)},Xy=function(e,t,i,s){Pr.length&&!Gn&&Cf(),e.render(t,i,!!(Gn&&t<0&&Mg(e))),Pr.length&&!Gn&&Cf()},Wy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Fy).length<2?t:Pn(e)?e.trim():e},qy=function(e){return e},Ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},kU=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Yo=function(e,t){for(var i in t)e[i]=t[i];return e},MS=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ya(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},wf=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},lu=function(e){var t=e.parent||tn,i=e.keyframes?kU(Kn(e.keyframes)):Ui;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},XU=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Yy=function(e,t,i,s,l){var c=e[s],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},zf=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=t._prev,c=t._next;l?l._next=c:e[i]===t&&(e[i]=c),c?c._prev=l:e[s]===t&&(e[s]=l),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ws=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},WU=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hm=function(e,t,i,s){return e._startAt&&(Gn?e._startAt.revert(Sf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},qU=function r(e){return!e||e._ts&&r(e.parent)},ES=function(e){return e._repeat?jo(e._tTime,e=e.duration()+e._rDelay)*e:0},jo=function(e,t){var i=Math.floor(e=Sn(e/t));return e&&i===e?i-1:i},Df=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hf=function(e){return e._end=Sn(e._start+(e._tDur/Math.abs(e._ts||e._rts||jt)||0))},Gf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Sn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hf(e),i._dirty||ws(i,e)),e},jy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Df(e.rawTime(),t),(!t._dur||Lu(0,t.totalDuration(),i)-t._tTime>jt)&&t.render(i,!0)),ws(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-jt}},ga=function(e,t,i,s){return t.parent&&Hr(t),t._start=Sn((Ja(i)?i:i||e!==tn?Hi(e,i,t):e._time)+t._delay),t._end=Sn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yy(e,t,"_first","_last",e._sort?"_start":0),Gm(t)||(e._recent=t),s||jy(e,t),e._ts<0&&Gf(e,e._tTime),e},Zy=function(e,t){return(Di.ScrollTrigger||vg("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},Ky=function(e,t,i,s,l){if(Tg(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!Gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vy!==Ai.frame)return Pr.push(e),e._lazy=[l,s],1},YU=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jU=function(e,t,i,s){var l=e.ratio,c=t<0||!t&&(!e._start&&YU(e)&&!(!e._initted&&Gm(e))||(e._ts<0||e._dp._ts<0)&&!Gm(e))?0:1,f=e._rDelay,p=0,h,m,_;if(f&&e._repeat&&(p=Lu(0,e._tDur,t),m=jo(p,f),e._yoyo&&m&1&&(c=1-c),m!==jo(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Gn||s||e._zTime===jt||!t&&e._zTime){if(!e._initted&&Ky(e,t,s,i,p))return;for(_=e._zTime,e._zTime=t||(i?jt:0),i||(i=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=p,h=e._pt;h;)h.r(c,h.d),h=h._next;t<0&&Hm(e,t,i,!0),e._onUpdate&&!i&&bi(e,"onUpdate"),p&&e._repeat&&!i&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&Hr(e,1),!i&&!Gn&&(bi(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ZU=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Zo=function(e,t,i,s){var l=e._repeat,c=Sn(t)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:Sn(c*(l+1)+e._rDelay*l):c,f>0&&!s&&Gf(e,e._tTime=e._tDur*f),e.parent&&Hf(e),i||ws(e.parent,e),e},TS=function(e){return e instanceof ni?ws(e):Zo(e,e._dur)},KU={_start:0,endTime:gu,totalDuration:gu},Hi=function r(e,t,i){var s=e.labels,l=e._recent||KU,c=e.duration()>=Vi?l.endTime(!1):e._dur,f,p,h;return Pn(t)&&(isNaN(t)||t in s)?(p=t.charAt(0),h=t.substr(-1)==="%",f=t.indexOf("="),p==="<"||p===">"?(f>=0&&(t=t.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(t in s||(s[t]=c),s[t]):(p=parseFloat(t.charAt(f-1)+t.substr(f+1)),h&&i&&(p=p/100*(Kn(i)?i[0]:i).totalDuration()),f>1?r(e,t.substr(0,f-1),i)+p:c+p)):t==null?c:+t},uu=function(e,t,i){var s=Ja(t[1]),l=(s?2:1)+(e<2?0:1),c=t[l],f,p;if(s&&(c.duration=t[1]),c.parent=i,e){for(f=c,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ui(p.vars.inherit)&&p.parent;c.immediateRender=ui(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new xn(t[0],c,t[l+1])},Wr=function(e,t){return e||e===0?t(e):t},Lu=function(e,t,i){return i<e?e:i>t?t:i},jn=function(e,t){return!Pn(e)||!(t=zU.exec(e))?"":t[1]},QU=function(e,t,i){return Wr(i,function(s){return Lu(e,t,s)})},Vm=[].slice,Qy=function(e,t){return e&&ya(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ya(e[0]))&&!e.nodeType&&e!==da},JU=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var l;return Pn(s)&&!t||Qy(s,1)?(l=i).push.apply(l,ki(s)):i.push(s)})||i},ki=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):Pn(e)&&!i&&(Fm||!Ko())?Vm.call((t||_g).querySelectorAll(e),0):Kn(e)?JU(e,i):Qy(e)?Vm.call(e,0):e?[e]:[]},km=function(e){return e=ki(e)[0]||mu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ki(t,i.querySelectorAll?i:i===e?mu("Invalid scope")||_g.createElement("div"):e)}},Jy=function(e){return e.sort(function(){return .5-Math.random()})},$y=function(e){if(un(e))return e;var t=ya(e)?e:{each:e},i=Ds(t.ease),s=t.from||0,l=parseFloat(t.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,h=t.axis,m=s,_=s;return Pn(s)?m=_={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(m=s[0],_=s[1]),function(v,S,E){var M=(E||t).length,y=c[M],x,A,C,b,U,P,I,H,R;if(!y){if(R=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!R){for(I=-Vi;I<(I=E[R++].getBoundingClientRect().left)&&R<M;);R<M&&R--}for(y=c[M]=[],x=p?Math.min(R,M)*m-.5:s%R,A=R===Vi?0:p?M*_/R-.5:s/R|0,I=0,H=Vi,P=0;P<M;P++)C=P%R-x,b=A-(P/R|0),y[P]=U=h?Math.abs(h==="y"?b:C):Oy(C*C+b*b),U>I&&(I=U),U<H&&(H=U);s==="random"&&Jy(y),y.max=I-H,y.min=H,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(R>M?M-1:h?h==="y"?M/R:R:Math.max(R,M/R))||0)*(s==="edges"?-1:1),y.b=M<0?l-M:l,y.u=jn(t.amount||t.each)||0,i=i&&M<0?uM(i):i}return M=(y[v]-y.min)/y.max||0,Sn(y.b+(i?i(M):M)*y.v)+y.u}},Xm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Sn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Ja(i)?0:jn(i))}},eM=function(e,t){var i=Kn(e),s,l;return!i&&ya(e)&&(s=i=e.radius||Vi,e.values?(e=ki(e.values),(l=!Ja(e[0]))&&(s*=s)):e=Xm(e.increment)),Wr(t,i?un(e)?function(c){return l=e(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),h=Vi,m=0,_=e.length,v,S;_--;)l?(v=e[_].x-f,S=e[_].y-p,v=v*v+S*S):v=Math.abs(e[_]-f),v<h&&(h=v,m=_);return m=!s||h<=s?e[m]:c,l||m===c||Ja(c)?m:m+jn(c)}:Xm(e))},tM=function(e,t,i,s){return Wr(Kn(e)?!t:i===!0?!!(i=0):!s,function(){return Kn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},$U=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(l,c){return c(l)},s)}},e3=function(e,t){return function(i){return e(parseFloat(i))+(t||jn(i))}},t3=function(e,t,i){return iM(e,t,0,1,i)},nM=function(e,t,i){return Wr(i,function(s){return e[~~t(s)]})},n3=function r(e,t,i){var s=t-e;return Kn(e)?nM(e,r(0,e.length),t):Wr(i,function(l){return(s+(l-e)%s)%s+e})},i3=function r(e,t,i){var s=t-e,l=s*2;return Kn(e)?nM(e,r(0,e.length-1),t):Wr(i,function(c){return c=(l+(c-e)%l)%l||0,e+(c>s?l-c:c)})},_u=function(e){for(var t=0,i="",s,l,c,f;~(s=e.indexOf("random(",t));)c=e.indexOf(")",s),f=e.charAt(s+7)==="[",l=e.substr(s+7,c-s-7).match(f?Fy:Bm),i+=e.substr(t,s-t)+tM(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),t=c+1;return i+e.substr(t,e.length-t)},iM=function(e,t,i,s,l){var c=t-e,f=s-i;return Wr(l,function(p){return i+((p-e)/c*f||0)})},a3=function r(e,t,i,s){var l=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!l){var c=Pn(e),f={},p,h,m,_,v;if(i===!0&&(s=1)&&(i=null),c)e={p:e},t={p:t};else if(Kn(e)&&!Kn(t)){for(m=[],_=e.length,v=_-2,h=1;h<_;h++)m.push(r(e[h-1],e[h]));_--,l=function(E){E*=_;var M=Math.min(v,~~E);return m[M](E-M)},i=t}else s||(e=Yo(Kn(e)?[]:{},e));if(!m){for(p in t)Eg.call(f,e,p,"get",t[p]);l=function(E){return Rg(E,f)||(c?e.p:e)}}}return Wr(i,l)},AS=function(e,t,i){var s=e.labels,l=Vi,c,f,p;for(c in s)f=s[c]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},bi=function(e,t,i){var s=e.vars,l=s[t],c=$t,f=e._ctx,p,h,m;if(l)return p=s[t+"Params"],h=s.callbackScope||e,i&&Pr.length&&Cf(),f&&($t=f),m=p?l.apply(h,p):l.call(h),$t=c,m},su=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gn),e.progress()<1&&bi(e,"onInterrupt"),e},Oo,aM=[],rM=function(e){if(e)if(e=!e.name&&e.default||e,gg()||e.headless){var t=e.name,i=un(e),s=t&&!i&&e.init?function(){this._props=[]}:e,l={init:gu,render:Rg,add:Eg,kill:S3,modifier:x3,rawVars:0},c={targetTest:0,get:0,getSetter:bg,aliases:{},register:0};if(Ko(),e!==s){if(Ei[t])return;Ui(s,Ui(wf(e,l),c)),Yo(s.prototype,Yo(l,wf(e,c))),Ei[s.prop=t]=s,e.targetTest&&(yf.push(s),xg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gy(t,s),e.register&&e.register(di,s,fi)}else aM.push(e)},Yt=255,ou={aqua:[0,Yt,Yt],lime:[0,Yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Yt],navy:[0,0,128],white:[Yt,Yt,Yt],olive:[128,128,0],yellow:[Yt,Yt,0],orange:[Yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Yt,0,0],pink:[Yt,192,203],cyan:[0,Yt,Yt],transparent:[Yt,Yt,Yt,0]},Pp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Yt+.5|0},sM=function(e,t,i){var s=e?Ja(e)?[e>>16,e>>8&Yt,e&Yt]:0:ou.black,l,c,f,p,h,m,_,v,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ou[e])s=ou[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Yt,s&Yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Yt,e&Yt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Bm),!t)p=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=Pp(p+1/3,l,c),s[1]=Pp(p,l,c),s[2]=Pp(p-1/3,l,c);else if(~e.indexOf("="))return s=e.match(Iy),i&&s.length<4&&(s[3]=1),s}else s=e.match(Bm)||ou.transparent;s=s.map(Number)}return t&&!E&&(l=s[0]/Yt,c=s[1]/Yt,f=s[2]/Yt,_=Math.max(l,c,f),v=Math.min(l,c,f),m=(_+v)/2,_===v?p=h=0:(S=_-v,h=m>.5?S/(2-_-v):S/(_+v),p=_===l?(c-f)/S+(c<f?6:0):_===c?(f-l)/S+2:(l-c)/S+4,p*=60),s[0]=~~(p+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),i&&s.length<4&&(s[3]=1),s},oM=function(e){var t=[],i=[],s=-1;return e.split(Ir).forEach(function(l){var c=l.match(No)||[];t.push.apply(t,c),i.push(s+=c.length+1)}),t.c=i,t},bS=function(e,t,i){var s="",l=(e+s).match(Ir),c=t?"hsla(":"rgba(",f=0,p,h,m,_;if(!l)return e;if(l=l.map(function(v){return(v=sM(v,t,1))&&c+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=oM(e),p=i.c,p.join(s)!==m.c.join(s)))for(h=e.replace(Ir,"1").split(No),_=h.length-1;f<_;f++)s+=h[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=e.split(Ir),_=h.length-1;f<_;f++)s+=h[f]+l[f];return s+h[_]},Ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ou)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),r3=/hsl[a]?\(/,lM=function(e){var t=e.join(" "),i;if(Ir.lastIndex=0,Ir.test(t))return i=r3.test(t),e[1]=bS(e[1],i),e[0]=bS(e[0],i,oM(e[1])),!0},vu,Ai=(function(){var r=Date.now,e=500,t=33,i=r(),s=i,l=1e3/240,c=l,f=[],p,h,m,_,v,S,E=function M(y){var x=r()-s,A=y===!0,C,b,U,P;if((x>e||x<0)&&(i+=x-t),s+=x,U=s-i,C=U-c,(C>0||A)&&(P=++_.frame,v=U-_.time*1e3,_.time=U=U/1e3,c+=C+(C>=l?4:l-C),b=1),A||(p=h(M)),b)for(S=0;S<f.length;S++)f[S](U,v,P,y)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){zy&&(!Fm&&gg()&&(da=Fm=window,_g=da.document||{},Di.gsap=di,(da.gsapVersions||(da.gsapVersions=[])).push(di.version),Hy(Rf||da.GreenSockGlobals||!da.gsap&&da||{}),aM.forEach(rM)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&_.sleep(),h=m||function(y){return setTimeout(y,c-_.time*1e3+1|0)},vu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),vu=0,h=gu},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){l=1e3/(y||240),c=_.time*1e3+l},add:function(y,x,A){var C=x?function(b,U,P,I){y(b,U,P,I),_.remove(C)}:y;return _.remove(y),f[A?"unshift":"push"](C),Ko(),C},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},_})(),Ko=function(){return!vu&&Ai.wake()},At={},s3=/^[\d.\-M][\d.\-,\s]/,o3=/["']/g,l3=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],l=1,c=i.length,f,p,h;l<c;l++)p=i[l],f=l!==c-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),t[s]=isNaN(h)?h.replace(o3,"").trim():+h,s=p.substr(f+1).trim();return t},u3=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},c3=function(e){var t=(e+"").split("("),i=At[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[l3(t[1])]:u3(e).split(",").map(Wy)):At._CE&&s3.test(e)?At._CE("",e):i},uM=function(e){return function(t){return 1-e(1-t)}},cM=function r(e,t){for(var i=e._first,s;i;)i instanceof ni?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},Ds=function(e,t){return e&&(un(e)?e:At[e]||c3(e))||t},Os=function(e,t,i,s){i===void 0&&(i=function(p){return 1-t(1-p)}),s===void 0&&(s=function(p){return p<.5?t(p*2)/2:1-t((1-p)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:s},c;return ci(e,function(f){At[f]=Di[f]=l,At[c=f.toLowerCase()]=i;for(var p in l)At[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=At[f+"."+p]=l[p]}),l},fM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ip=function r(e,t,i){var s=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),c=l/Im*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*FU((m-c)*l)+1},p=e==="out"?f:e==="in"?function(h){return 1-f(1-h)}:fM(f);return l=Im/l,p.config=function(h,m){return r(e,h,m)},p},Bp=function r(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:fM(i);return s.config=function(l){return r(e,l)},s};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Os(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});At.Linear.easeNone=At.none=At.Linear.easeIn;Os("Elastic",Ip("in"),Ip("out"),Ip());(function(r,e){var t=1/e,i=2*t,s=2.5*t,l=function(f){return f<t?r*f*f:f<i?r*Math.pow(f-1.5/e,2)+.75:f<s?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};Os("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Os("Circ",function(r){return-(Oy(1-r*r)-1)});Os("Sine",function(r){return r===1?1:-BU(r*PU)+1});Os("Back",Bp("in"),Bp("out"),Bp());At.SteppedEase=At.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),l=t?1:0,c=1-jt;return function(f){return((s*Lu(0,c,f)|0)+l)*i}}};qo.ease=At["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sg+=r+","+r+"Params,"});var hM=function(e,t){this.id=IU++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ky,this.set=t?t.getSetter:bg},xu=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zo(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),vu||Ai.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Zo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Ko(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Gf(this,i),!l._dp||l.parent||jy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ga(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===jt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Xy(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+ES(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+ES(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?jo(this._tTime,l)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Df(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-jt?0:this._rts,this.totalTime(Lu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Hf(this),WU(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ga(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Df(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=GU);var s=Gn;return Gn=i,Mg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gn=s,this},e.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,TS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,TS(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Hi(this,i),ui(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ui(s)),this._dur||(this._zTime=-jt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-jt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-jt)},e.eventCallback=function(i,s,l){var c=this.vars;return arguments.length>1?(s?(c[i]=s,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},e.then=function(i){var s=this;return new Promise(function(l){var c=un(i)?i:qy,f=function(){var h=s.then;s.then=null,un(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=h),l(c),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},e.kill=function(){su(this)},r})();Ui(xu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var ni=(function(r){Ny(e,r);function e(i,s){var l;return i===void 0&&(i={}),l=r.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=ui(i.sortChildren),tn&&ga(i.parent||tn,Xa(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Zy(Xa(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(s,l,c){return uu(0,arguments,this),this},t.from=function(s,l,c){return uu(1,arguments,this),this},t.fromTo=function(s,l,c,f){return uu(2,arguments,this),this},t.set=function(s,l,c){return l.duration=0,l.parent=this,lu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new xn(s,l,Hi(this,c),1),this},t.call=function(s,l,c){return ga(this,xn.delayedCall(0,s,l),c)},t.staggerTo=function(s,l,c,f,p,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new xn(s,c,Hi(this,p)),this},t.staggerFrom=function(s,l,c,f,p,h,m){return c.runBackwards=1,lu(c).immediateRender=ui(c.immediateRender),this.staggerTo(s,l,c,f,p,h,m)},t.staggerFromTo=function(s,l,c,f,p,h,m,_){return f.startAt=c,lu(f).immediateRender=ui(f.immediateRender),this.staggerTo(s,l,f,p,h,m,_)},t.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:Sn(s),_=this._zTime<0!=s<0&&(this._initted||!h),v,S,E,M,y,x,A,C,b,U,P,I;if(this!==tn&&m>p&&s>=0&&(m=p),m!==this._tTime||c||_){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),v=m,b=this._start,C=this._ts,x=!C,_&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,y=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,c);if(v=Sn(m%y),m===p?(M=this._repeat,v=h):(U=Sn(m/y),M=~~U,M&&M===U&&(v=h,M--),v>h&&(v=h)),U=jo(this._tTime,y),!f&&this._tTime&&U!==M&&this._tTime-U*y-this._dur<=0&&(U=M),P&&M&1&&(v=h-v,I=1),M!==U&&!this._lock){var H=P&&U&1,R=H===(P&&M&1);if(M<U&&(H=!H),f=H?0:m%h?h:m,this._lock=1,this.render(f||(I?0:Sn(M*y)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,R&&(this._lock=2,f=H?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;cM(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=ZU(this,Sn(f),Sn(v)),A&&(m-=v-(v=A._start))),this._tTime=m,this._time=v,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!U&&(bi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||v>=S._start)&&S._ts&&A!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){A=0,E&&(m+=this._zTime=-jt);break}}S=E}else{S=this._last;for(var L=s<0?s:v;S;){if(E=S._prev,(S._act||L<=S._end)&&S._ts&&A!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(L-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(L-S._start)*S._ts,l,c||Gn&&Mg(S)),v!==this._time||!this._ts&&!x){A=0,E&&(m+=this._zTime=L?-jt:jt);break}}S=E}}if(A&&!l&&(this.pause(),A.render(v>=f?0:-jt)._zTime=v>=f?1:-1,this._ts))return this._start=b,Hf(this),this.render(s,l,c);this._onUpdate&&!l&&bi(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&Hr(this,1),!l&&!(s<0&&!f)&&(m||f||!p)&&(bi(this,m===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,l){var c=this;if(Ja(l)||(l=Hi(this,l,s)),!(s instanceof xu)){if(Kn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Pn(s))return this.addLabel(s,l);if(un(s))s=xn.delayedCall(0,s);else return this}return this!==s?ga(this,s,l):this},t.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Vi);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof xn?l&&p.push(h):(c&&p.push(h),s&&p.push.apply(p,h.getChildren(!0,l,c)))),h=h._next;return p},t.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},t.remove=function(s){return Pn(s)?this.removeLabel(s):un(s)?this.killTweensOf(s):(s.parent===this&&zf(this,s),s===this._recent&&(this._recent=this._last),ws(this))},t.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Sn(Ai.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},t.addLabel=function(s,l){return this.labels[s]=Hi(this,l),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,l,c){var f=xn.delayedCall(0,l||gu,c);return f.data="isPause",this._hasPause=1,ga(this,f,Hi(this,s))},t.removePause=function(s){var l=this._first;for(s=Hi(this,s);l;)l._start===s&&l.data==="isPause"&&Hr(l),l=l._next},t.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Ur!==f[p]&&f[p].kill(s,l);return this},t.getTweensOf=function(s,l){for(var c=[],f=ki(s),p=this._first,h=Ja(l),m;p;)p instanceof xn?VU(p._targets,f)&&(h?(!Ur||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(m=p.getTweensOf(f,l)).length&&c.push.apply(c,m),p=p._next;return c},t.tweenTo=function(s,l){l=l||{};var c=this,f=Hi(c,s),p=l,h=p.startAt,m=p.onStart,_=p.onStartParams,v=p.immediateRender,S,E=xn.to(c,Ui({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||jt,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());E._dur!==y&&Zo(E,y,0,1).render(E._time,!0,!0),S=1}m&&m.apply(E,_||[])}},l));return v?E.render(0):E},t.tweenFromTo=function(s,l,c){return this.tweenTo(l,Ui({startAt:{time:Hi(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),AS(this,Hi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),AS(this,Hi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+jt)},t.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,h;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in p)p[h]>=c&&(p[h]+=s);return ws(this)},t.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ws(this)},t.totalDuration=function(s){var l=0,c=this,f=c._last,p=Vi,h,m,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(_=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ga(c,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;Zo(c,c===tn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(tn._ts&&(Xy(tn,Df(s,tn)),Vy=Ai.frame),Ai.frame>=yS){yS+=Ci.autoSleep||120;var l=tn._first;if((!l||!l._ts)&&Ci.autoSleep&&Ai._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ai.sleep()}}},e})(xu);Ui(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var f3=function(e,t,i,s,l,c,f){var p=new fi(this._pt,e,t,0,1,vM,null,l),h=0,m=0,_,v,S,E,M,y,x,A;for(p.b=i,p.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=_u(s)),c&&(A=[i,s],c(A,e,t),i=A[0],s=A[1]),v=i.match(Np)||[];_=Np.exec(s);)E=_[0],M=s.substring(h,_.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==v[m++]&&(y=parseFloat(v[m-1])||0,p._pt={_next:p._pt,p:M||m===1?M:",",s:y,c:E.charAt(1)==="="?Bo(y,E)-y:parseFloat(E)-y,m:S&&S<4?Math.round:0},h=Np.lastIndex);return p.c=h<s.length?s.substring(h,s.length):"",p.fp=f,(By.test(s)||x)&&(p.e=0),this._pt=p,p},Eg=function(e,t,i,s,l,c,f,p,h,m){un(s)&&(s=s(l||0,e,c));var _=e[t],v=i!=="get"?i:un(_)?h?e[t.indexOf("set")||!un(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,S=un(_)?h?g3:gM:Ag,E;if(Pn(s)&&(~s.indexOf("random(")&&(s=_u(s)),s.charAt(1)==="="&&(E=Bo(v,s)+(jn(v)||0),(E||E===0)&&(s=E))),!m||v!==s||Wm)return!isNaN(v*s)&&s!==""?(E=new fi(this._pt,e,t,+v||0,s-(v||0),typeof _=="boolean"?v3:_M,0,S),h&&(E.fp=h),f&&E.modifier(f,this,e),this._pt=E):(!_&&!(t in e)&&vg(t,s),f3.call(this,e,t,v,s,S,p||Ci.stringFilter,h))},h3=function(e,t,i,s,l){if(un(e)&&(e=cu(e,l,t,i,s)),!ya(e)||e.style&&e.nodeType||Kn(e)||Py(e))return Pn(e)?cu(e,l,t,i,s):e;var c={},f;for(f in e)c[f]=cu(e[f],l,t,i,s);return c},dM=function(e,t,i,s,l,c){var f,p,h,m;if(Ei[e]&&(f=new Ei[e]).init(l,f.rawVars?t[e]:h3(t[e],s,l,c,i),i,s,c)!==!1&&(i._pt=p=new fi(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==Oo))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=p;return f},Ur,Wm,Tg=function r(e,t,i){var s=e.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,h=s.onUpdate,m=s.runBackwards,_=s.yoyoEase,v=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,A=x&&x.data==="nested"?x.vars.targets:y,C=e._overwrite==="auto"&&!pg,b=e.timeline,U,P,I,H,R,L,B,X,K,re,ee,z,q;if(b&&(!v||!l)&&(l="none"),e._ease=Ds(l,qo.ease),e._yEase=_?uM(Ds(_===!0?l:_,qo.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!b&&!!s.runBackwards,!b||v&&!s.stagger){if(X=y[0]?Cs(y[0]).harness:0,z=X&&s[X.prop],U=wf(s,xg),M&&(M._zTime<0&&M.progress(1),t<0&&m&&f&&!S?M.render(-1,!0):M.revert(m&&E?Sf:HU),M._lazy=0),c){if(Hr(e._startAt=xn.set(y,Ui({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ui(p),startAt:null,delay:0,onUpdate:h&&function(){return bi(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gn||!f&&!S)&&e._startAt.revert(Sf),f&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(m&&E&&!M){if(t&&(f=!1),I=Ui({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ui(p),immediateRender:f,stagger:0,parent:x},U),z&&(I[X.prop]=z),Hr(e._startAt=xn.set(y,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gn?e._startAt.revert(Sf):e._startAt.render(-1,!0)),e._zTime=t,!f)r(e._startAt,jt,jt);else if(!t)return}for(e._pt=e._ptCache=0,p=E&&ui(p)||p&&!E,P=0;P<y.length;P++){if(R=y[P],B=R._gsap||yg(y)[P]._gsap,e._ptLookup[P]=re={},zm[B.id]&&Pr.length&&Cf(),ee=A===y?P:A.indexOf(R),X&&(K=new X).init(R,z||U,e,ee,A)!==!1&&(e._pt=H=new fi(e._pt,R,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(k){re[k]=H}),K.priority&&(L=1)),!X||z)for(I in U)Ei[I]&&(K=dM(I,U,e,ee,R,A))?K.priority&&(L=1):re[I]=H=Eg.call(e,R,I,"get",U[I],ee,A,0,s.stringFilter);e._op&&e._op[P]&&e.kill(R,e._op[P]),C&&e._pt&&(Ur=e,tn.killTweensOf(R,re,e.globalTime(t)),q=!e.parent,Ur=0),e._pt&&p&&(zm[B.id]=1)}L&&xM(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!q,v&&t<=0&&b.render(Vi,!0,!0)},d3=function(e,t,i,s,l,c,f,p){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,_,v,S;if(!h)for(h=e._ptCache[t]=[],v=e._ptLookup,S=e._targets.length;S--;){if(m=v[S][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return Wm=1,e.vars[t]="+=0",Tg(e,f),Wm=0,p?mu(t+" not eligible for reset"):1;h.push(m)}for(S=h.length;S--;)_=h[S],m=_._pt||_,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=i-m.s,_.e&&(_.e=hn(i)+jn(_.e)),_.b&&(_.b=m.s+jn(_.b))},p3=function(e,t){var i=e[0]?Cs(e[0]).harness:0,s=i&&i.aliases,l,c,f,p;if(!s)return t;l=Yo({},t);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},m3=function(e,t,i,s){var l=t.ease||s||"power1.inOut",c,f;if(Kn(t))f=i[e]||(i[e]=[]),t.forEach(function(p,h){return f.push({t:h/(t.length-1)*100,v:p,e:l})});else for(c in t)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},cu=function(e,t,i,s,l){return un(e)?e.call(t,i,s,l):Pn(e)&&~e.indexOf("random(")?_u(e):e},pM=Sg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mM={};ci(pM+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return mM[r]=1});var xn=(function(r){Ny(e,r);function e(i,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=r.call(this,c?s:lu(s))||this;var p=f.vars,h=p.duration,m=p.delay,_=p.immediateRender,v=p.stagger,S=p.overwrite,E=p.keyframes,M=p.defaults,y=p.scrollTrigger,x=p.yoyoEase,A=s.parent||tn,C=(Kn(i)||Py(i)?Ja(i[0]):"length"in s)?[i]:ki(i),b,U,P,I,H,R,L,B;if(f._targets=C.length?yg(C):mu("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,E||v||hf(h)||hf(m)){if(s=f.vars,b=f.timeline=new ni({data:"nested",defaults:M||{},targets:A&&A.data==="nested"?A.vars.targets:C}),b.kill(),b.parent=b._dp=Xa(f),b._start=0,v||hf(h)||hf(m)){if(I=C.length,L=v&&$y(v),ya(v))for(H in v)~pM.indexOf(H)&&(B||(B={}),B[H]=v[H]);for(U=0;U<I;U++)P=wf(s,mM),P.stagger=0,x&&(P.yoyoEase=x),B&&Yo(P,B),R=C[U],P.duration=+cu(h,Xa(f),U,R,C),P.delay=(+cu(m,Xa(f),U,R,C)||0)-f._delay,!v&&I===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),b.to(R,P,L?L(U,R,C):0),b._ease=At.none;b.duration()?h=m=0:f.timeline=0}else if(E){lu(Ui(b.vars.defaults,{ease:"none"})),b._ease=Ds(E.ease||s.ease||"none");var X=0,K,re,ee;if(Kn(E))E.forEach(function(z){return b.to(C,z,">")}),b.duration();else{P={};for(H in E)H==="ease"||H==="easeEach"||m3(H,E[H],P,E.easeEach);for(H in P)for(K=P[H].sort(function(z,q){return z.t-q.t}),X=0,U=0;U<K.length;U++)re=K[U],ee={ease:re.e,duration:(re.t-(U?K[U-1].t:0))/100*h},ee[H]=re.v,b.to(C,ee,X),X+=ee.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||f.duration(h=b.duration())}else f.timeline=0;return S===!0&&!pg&&(Ur=Xa(f),tn.killTweensOf(C),Ur=0),ga(A,Xa(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(_||!h&&!E&&f._start===Sn(A._time)&&ui(_)&&qU(Xa(f))&&A.data!=="nested")&&(f._tTime=-jt,f.render(Math.max(0,-m)||0)),y&&Zy(Xa(f),y),f}var t=e.prototype;return t.render=function(s,l,c){var f=this._time,p=this._tDur,h=this._dur,m=s<0,_=s>p-jt&&!m?p:s<jt?0:s,v,S,E,M,y,x,A,C,b;if(!h)jU(this,s,l,c);else if(_!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=Sn(_%M),_===p?(E=this._repeat,v=h):(y=Sn(_/M),E=~~y,E&&E===y?(v=h,E--):v>h&&(v=h)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=h-v),y=jo(this._tTime,M),v===f&&!c&&this._initted&&E===y)return this._tTime=_,this;E!==y&&(C&&this._yEase&&cM(C,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(Sn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Ky(this,m?s:v,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(s,l,c)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(b||this._ease)(v/h),this._from&&(this.ratio=A=1-A),!f&&_&&!l&&!y&&(bi(this,"onStart"),this._tTime!==_))return this;for(S=this._pt;S;)S.r(A,S.d),S=S._next;C&&C.render(s<0?s:C._dur*C._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&Hm(this,s,l,c),bi(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&bi(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&Hm(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&Hr(this,1),!l&&!(m&&!f)&&(_||f||x)&&(bi(this,_===p?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,l,c,f,p){vu||Ai.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Tg(this,h),m=this._ease(h/this._dur),d3(this,s,l,c,f,m,h,p)?this.resetTo(s,l,c,f,1):(Gf(this,0),this.parent||Yy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?su(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Ur&&Ur.vars.overwrite!==!0)._first||su(this),this.parent&&c!==this.timeline.totalDuration()&&Zo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?ki(s):f,h=this._ptLookup,m=this._pt,_,v,S,E,M,y,x;if((!l||l==="all")&&XU(f,p))return l==="all"&&(this._pt=0),su(this);for(_=this._op=this._op||[],l!=="all"&&(Pn(l)&&(M={},ci(l,function(A){return M[A]=1}),l=M),l=p3(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=h[x],l==="all"?(_[x]=l,E=v,S={}):(S=_[x]=_[x]||{},E=l);for(M in E)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&zf(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&m&&su(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return uu(1,arguments)},e.delayedCall=function(s,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(s,l,c){return uu(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,c){return tn.killTweensOf(s,l,c)},e})(xu);Ui(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(r){xn[r]=function(){var e=new ni,t=Vm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ag=function(e,t,i){return e[t]=i},gM=function(e,t,i){return e[t](i)},g3=function(e,t,i,s){return e[t](s.fp,i)},_3=function(e,t,i){return e.setAttribute(t,i)},bg=function(e,t){return un(e[t])?gM:mg(e[t])&&e.setAttribute?_3:Ag},_M=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},v3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vM=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Rg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},x3=function(e,t,i,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(e,t,i),l=c},S3=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?zf(this,t,"_pt"):t.dep||(i=1),t=s;return!i},y3=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},xM=function(e){for(var t=e._pt,i,s,l,c;t;){for(i=t._next,s=l;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:l=t,(t._next=s)?s._prev=t:c=t,t=i}e._pt=l},fi=(function(){function r(t,i,s,l,c,f,p,h,m){this.t=i,this.s=l,this.c=c,this.p=s,this.r=f||_M,this.d=p||this,this.set=h||Ag,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=y3,this.m=i,this.mt=l,this.tween=s},r})();ci(Sg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xg[r]=1});Di.TweenMax=Di.TweenLite=xn;Di.TimelineLite=Di.TimelineMax=ni;tn=new ni({sortChildren:!1,defaults:qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=lM;var Us=[],Mf={},M3=[],RS=0,E3=0,Fp=function(e){return(Mf[e]||M3).map(function(t){return t()})},qm=function(){var e=Date.now(),t=[];e-RS>2&&(Fp("matchMediaInit"),Us.forEach(function(i){var s=i.queries,l=i.conditions,c,f,p,h;for(f in s)c=da.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,h=1);h&&(i.revert(),p&&t.push(i))}),Fp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),RS=e,Fp("matchMedia"))},SM=(function(){function r(t,i){this.selector=i&&km(i),this.data=[],this._r=[],this.isReverted=!1,this.id=E3++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,s,l){un(i)&&(l=s,s=i,i=un);var c=this,f=function(){var h=$t,m=c.selector,_;return h&&h!==c&&h.data.push(c),l&&(c.selector=km(l)),$t=c,_=s.apply(c,arguments),un(_)&&c._r.push(_),$t=h,c.selector=m,c.isReverted=!1,_};return c.last=f,i===un?f(c,function(p){return c.add(null,p)}):i?c[i]=f:f},e.ignore=function(i){var s=$t;$t=null,i(this),$t=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof r?i.push.apply(i,s.getTweens()):s instanceof xn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var l=this;if(i?(function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),p=l.data.length;p--;)h=l.data[p],h instanceof ni?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof xn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Us.length;c--;)Us[c].id===this.id&&Us.splice(c,1)},e.revert=function(i){this.kill(i||{})},r})(),T3=(function(){function r(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=r.prototype;return e.add=function(i,s,l){ya(i)||(i={matches:i});var c=new SM(0,l||this.scope),f=c.conditions={},p,h,m;$t&&!c.selector&&(c.selector=$t.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(h in i)h==="all"?m=1:(p=da.matchMedia(i[h]),p&&(Us.indexOf(c)<0&&Us.push(c),(f[h]=p.matches)&&(m=1),p.addListener?p.addListener(qm):p.addEventListener("change",qm)));return m&&s(c,function(_){return c.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},r})(),Uf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return rM(s)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return tn.getTweensOf(e,t)},getProperty:function(e,t,i,s){Pn(e)&&(e=ki(e)[0]);var l=Cs(e||{}).get,c=i?qy:Wy;return i==="native"&&(i=""),e&&(t?c((Ei[t]&&Ei[t].get||l)(e,t,i,s)):function(f,p,h){return c((Ei[f]&&Ei[f].get||l)(e,f,p,h))})},quickSetter:function(e,t,i){if(e=ki(e),e.length>1){var s=e.map(function(m){return di.quickSetter(m,t,i)}),l=s.length;return function(m){for(var _=l;_--;)s[_](m)}}e=e[0]||{};var c=Ei[t],f=Cs(e),p=f.harness&&(f.harness.aliases||{})[t]||t,h=c?function(m){var _=new c;Oo._pt=0,_.init(e,i?m+i:m,Oo,0,[e]),_.render(1,_),Oo._pt&&Rg(1,Oo)}:f.set(e,p);return c?h:function(m){return h(e,p,i?m+i:m,f,1)}},quickTo:function(e,t,i){var s,l=di.to(e,Ui((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(p,h,m){return l.resetTo(t,p,h,m)};return c.tween=l,c},isTweening:function(e){return tn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ds(e.ease,qo.ease)),MS(qo,e||{})},config:function(e){return MS(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,l=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Ei[f]&&!Di[f]&&mu(t+" effect requires "+f+" plugin.")}),Op[t]=function(f,p,h){return i(ki(f),Ui(p||{},l),h)},c&&(ni.prototype[t]=function(f,p,h){return this.add(Op[t](f,ya(p)?p:(h=p)&&{},this),h)})},registerEase:function(e,t){At[e]=Ds(t)},parseEase:function(e,t){return arguments.length?Ds(e,t):At},getById:function(e){return tn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),s,l;for(i.smoothChildTiming=ui(e.smoothChildTiming),tn.remove(i),i._dp=0,i._time=i._tTime=tn._time,s=tn._first;s;)l=s._next,(t||!(!s._dur&&s instanceof xn&&s.vars.onComplete===s._targets[0]))&&ga(i,s,s._start-s._delay),s=l;return ga(tn,i,0),i},context:function(e,t){return e?new SM(e,t):$t},matchMedia:function(e){return new T3(e)},matchMediaRefresh:function(){return Us.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||qm()},addEventListener:function(e,t){var i=Mf[e]||(Mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Mf[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:n3,wrapYoyo:i3,distribute:$y,random:tM,snap:eM,normalize:t3,getUnit:jn,clamp:QU,splitColor:sM,toArray:ki,selector:km,mapRange:iM,pipe:$U,unitize:e3,interpolate:a3,shuffle:Jy},install:Hy,effects:Op,ticker:Ai,updateRoot:ni.updateRoot,plugins:Ei,globalTimeline:tn,core:{PropTween:fi,globals:Gy,Tween:xn,Timeline:ni,Animation:xu,getCache:Cs,_removeLinkedListItem:zf,reverting:function(){return Gn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return pg=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Uf[r]=xn[r]});Ai.add(ni.updateRoot);Oo=Uf.to({},{duration:0});var A3=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},b3=function(e,t){var i=e._targets,s,l,c;for(s in t)for(l=i.length;l--;)c=e._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=A3(c,s)),c&&c.modifier&&c.modifier(t[s],e,i[l],s))},zp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,h;if(Pn(l)&&(p={},ci(l,function(m){return p[m]=1}),l=p),t){p={};for(h in l)p[h]=t(l[h]);l=p}b3(f,l)}}}},di=Uf.registerPlugin({name:"attr",init:function(e,t,i,s,l){var c,f,p;this.tween=i;for(c in t)p=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(p||0)+"",t[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)Gn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},zp("roundProps",Xm),zp("modifiers"),zp("snap",eM))||Uf;xn.version=ni.version=di.version="3.13.0";zy=1;gg()&&Ko();At.Power0;At.Power1;At.Power2;At.Power3;At.Power4;At.Linear;At.Quad;At.Cubic;At.Quart;At.Quint;At.Strong;At.Elastic;At.Back;At.SteppedEase;At.Bounce;At.Sine;At.Expo;At.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var CS,Lr,Fo,Cg,As,wS,wg,R3=function(){return typeof window<"u"},$a={},xs=180/Math.PI,zo=Math.PI/180,Uo=Math.atan2,DS=1e8,Dg=/([A-Z])/g,C3=/(left|right|width|margin|padding|x)/i,w3=/[\s,\(]\S/,va={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ym=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},D3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},L3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},yM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},MM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},N3=function(e,t,i){return e.style[t]=i},O3=function(e,t,i){return e.style.setProperty(t,i)},P3=function(e,t,i){return e._gsap[t]=i},I3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},B3=function(e,t,i,s,l){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},F3=function(e,t,i,s,l){var c=e._gsap;c[t]=i,c.renderTransform(l,c)},nn="transform",hi=nn+"Origin",z3=function r(e,t){var i=this,s=this.target,l=s.style,c=s._gsap;if(e in $a&&l){if(this.tfm=this.tfm||{},e!=="transform")e=va[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=Wa(s,f)}):this.tfm[e]=c.x?c[e]:Wa(s,e),e===hi&&(this.tfm.zOrigin=c.zOrigin);else return va.transform.split(",").forEach(function(f){return r.call(i,f,t)});if(this.props.indexOf(nn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=nn}(l||t)&&this.props.push(e,t,l[e])},EM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},H3=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Dg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=wg(),(!l||!l.isStart)&&!i[nn]&&(EM(i),s.zOrigin&&i[hi]&&(i[hi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},TM=function(e,t){var i={target:e,props:[],revert:H3,save:z3};return e._gsap||di.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},AM,jm=function(e,t){var i=Lr.createElementNS?Lr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Lr.createElement(e);return i&&i.style?i:Lr.createElement(e)},Xi=function r(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Dg,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&r(e,Qo(t)||t,1)||""},US="O,Moz,ms,Ms,Webkit".split(","),Qo=function(e,t,i){var s=t||As,l=s.style,c=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(US[c]+e in l););return c<0?null:(c===3?"ms":c>=0?US[c]:"")+e},Zm=function(){R3()&&window.document&&(CS=window,Lr=CS.document,Fo=Lr.documentElement,As=jm("div")||{style:{}},jm("div"),nn=Qo(nn),hi=nn+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",AM=!!Qo("perspective"),wg=di.core.reverting,Cg=1)},LS=function(e){var t=e.ownerSVGElement,i=jm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",i.appendChild(s),Fo.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),Fo.removeChild(i),l},NS=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},bM=function(e){var t,i;try{t=e.getBBox()}catch{t=LS(e),i=1}return t&&(t.width||t.height)||i||(t=LS(e)),t&&!t.width&&!t.x&&!t.y?{x:+NS(e,["x","cx","x1"])||0,y:+NS(e,["y","cy","y1"])||0,width:0,height:0}:t},RM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bM(e))},Ls=function(e,t){if(t){var i=e.style,s;t in $a&&t!==hi&&(t=nn),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Dg,"-$1").toLowerCase())):i.removeAttribute(t)}},Nr=function(e,t,i,s,l,c){var f=new fi(e._pt,t,i,0,1,c?MM:yM);return e._pt=f,f.b=s,f.e=l,e._props.push(i),f},OS={deg:1,rad:1,turn:1},G3={grid:1,flex:1},Gr=function r(e,t,i,s){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=As.style,p=C3.test(t),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),_=100,v=s==="px",S=s==="%",E,M,y,x;if(s===c||!l||OS[s]||OS[c])return l;if(c!=="px"&&!v&&(l=r(e,t,i,"px")),x=e.getCTM&&RM(e),(S||c==="%")&&($a[t]||~t.indexOf("adius")))return E=x?e.getBBox()[p?"width":"height"]:e[m],hn(S?l/E*_:l/100*E);if(f[p?"width":"height"]=_+(v?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Lr||!M.appendChild)&&(M=Lr.body),y=M._gsap,y&&S&&y.width&&p&&y.time===Ai.time&&!y.uncache)return hn(l/y.width*_);if(S&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=_+s,E=e[m],A?e.style[t]=A:Ls(e,t)}else(S||c==="%")&&!G3[Xi(M,"display")]&&(f.position=Xi(e,"position")),M===e&&(f.position="static"),M.appendChild(As),E=As[m],M.removeChild(As),f.position="absolute";return p&&S&&(y=Cs(M),y.time=Ai.time,y.width=M[m]),hn(v?E*l/_:E&&l?_/E*l:0)},Wa=function(e,t,i,s){var l;return Cg||Zm(),t in va&&t!=="transform"&&(t=va[t],~t.indexOf(",")&&(t=t.split(",")[0])),$a[t]&&t!=="transform"?(l=yu(e,s),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:Nf(Xi(e,hi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Lf[t]&&Lf[t](e,t,i)||Xi(e,t)||ky(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Gr(e,t,l,i)+i:l},V3=function(e,t,i,s){if(!i||i==="none"){var l=Qo(t,e,1),c=l&&Xi(e,l,1);c&&c!==i?(t=l,i=c):t==="borderColor"&&(i=Xi(e,"borderTopColor"))}var f=new fi(this._pt,e.style,t,0,1,vM),p=0,h=0,m,_,v,S,E,M,y,x,A,C,b,U;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Xi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=Xi(e,t)||s,M?e.style[t]=M:Ls(e,t)),m=[i,s],lM(m),i=m[0],s=m[1],v=i.match(No)||[],U=s.match(No)||[],U.length){for(;_=No.exec(s);)y=_[0],A=s.substring(p,_.index),E?E=(E+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(E=1),y!==(M=v[h++]||"")&&(S=parseFloat(M)||0,b=M.substr((S+"").length),y.charAt(1)==="="&&(y=Bo(S,y)+b),x=parseFloat(y),C=y.substr((x+"").length),p=No.lastIndex-C.length,C||(C=C||Ci.units[t]||b,p===s.length&&(s+=C,f.e+=C)),b!==C&&(S=Gr(e,t,M,C)||0),f._pt={_next:f._pt,p:A||h===1?A:",",s:S,c:x-S,m:E&&E<4||t==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=t==="display"&&s==="none"?MM:yM;return By.test(s)&&(f.e=0),this._pt=f,f},PS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k3=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=PS[i]||i,t[1]=PS[s]||s,t.join(" ")},X3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,l=t.u,c=i._gsap,f,p,h;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],$a[f]&&(p=1,f=f==="transformOrigin"?hi:nn),Ls(i,f);p&&(Ls(i,nn),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",yu(i,1),c.uncache=1,EM(s)))}},Lf={clearProps:function(e,t,i,s,l){if(l.data!=="isFromStart"){var c=e._pt=new fi(e._pt,t,i,0,0,X3);return c.u=s,c.pr=-10,c.tween=l,e._props.push(i),1}}},Su=[1,0,0,1,0,0],CM={},wM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},IS=function(e){var t=Xi(e,nn);return wM(t)?Su:t.substr(7).match(Iy).map(hn)},Ug=function(e,t){var i=e._gsap||Cs(e),s=e.style,l=IS(e),c,f,p,h;return i.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Su:l):(l===Su&&!e.offsetParent&&e!==Fo&&!i.svg&&(p=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,f=e.nextElementSibling,Fo.appendChild(e)),l=IS(e),p?s.display=p:Ls(e,"display"),h&&(f?c.insertBefore(e,f):c?c.appendChild(e):Fo.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Km=function(e,t,i,s,l,c){var f=e._gsap,p=l||Ug(e,!0),h=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,S=p[0],E=p[1],M=p[2],y=p[3],x=p[4],A=p[5],C=t.split(" "),b=parseFloat(C[0])||0,U=parseFloat(C[1])||0,P,I,H,R;i?p!==Su&&(I=S*y-E*M)&&(H=b*(y/I)+U*(-M/I)+(M*A-y*x)/I,R=b*(-E/I)+U*(S/I)-(S*A-E*x)/I,b=H,U=R):(P=bM(e),b=P.x+(~C[0].indexOf("%")?b/100*P.width:b),U=P.y+(~(C[1]||C[0]).indexOf("%")?U/100*P.height:U)),s||s!==!1&&f.smooth?(x=b-h,A=U-m,f.xOffset=_+(x*S+A*M)-x,f.yOffset=v+(x*E+A*y)-A):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=U,f.smooth=!!s,f.origin=t,f.originIsAbsolute=!!i,e.style[hi]="0px 0px",c&&(Nr(c,f,"xOrigin",h,b),Nr(c,f,"yOrigin",m,U),Nr(c,f,"xOffset",_,f.xOffset),Nr(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",b+" "+U)},yu=function(e,t){var i=e._gsap||new hM(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,l=i.scaleX<0,c="px",f="deg",p=getComputedStyle(e),h=Xi(e,hi)||"0",m,_,v,S,E,M,y,x,A,C,b,U,P,I,H,R,L,B,X,K,re,ee,z,q,k,_e,O,Q,pe,ye,be,Be;return m=_=v=M=y=x=A=C=b=0,S=E=1,i.svg=!!(e.getCTM&&RM(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[nn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[nn]!=="none"?p[nn]:"")),s.scale=s.rotate=s.translate="none"),I=Ug(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),h=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Km(e,q||h,!!q||i.originIsAbsolute,i.smooth!==!1,I)),U=i.xOrigin||0,P=i.yOrigin||0,I!==Su&&(B=I[0],X=I[1],K=I[2],re=I[3],m=ee=I[4],_=z=I[5],I.length===6?(S=Math.sqrt(B*B+X*X),E=Math.sqrt(re*re+K*K),M=B||X?Uo(X,B)*xs:0,A=K||re?Uo(K,re)*xs+M:0,A&&(E*=Math.abs(Math.cos(A*zo))),i.svg&&(m-=U-(U*B+P*K),_-=P-(U*X+P*re))):(Be=I[6],ye=I[7],O=I[8],Q=I[9],pe=I[10],be=I[11],m=I[12],_=I[13],v=I[14],H=Uo(Be,pe),y=H*xs,H&&(R=Math.cos(-H),L=Math.sin(-H),q=ee*R+O*L,k=z*R+Q*L,_e=Be*R+pe*L,O=ee*-L+O*R,Q=z*-L+Q*R,pe=Be*-L+pe*R,be=ye*-L+be*R,ee=q,z=k,Be=_e),H=Uo(-K,pe),x=H*xs,H&&(R=Math.cos(-H),L=Math.sin(-H),q=B*R-O*L,k=X*R-Q*L,_e=K*R-pe*L,be=re*L+be*R,B=q,X=k,K=_e),H=Uo(X,B),M=H*xs,H&&(R=Math.cos(H),L=Math.sin(H),q=B*R+X*L,k=ee*R+z*L,X=X*R-B*L,z=z*R-ee*L,B=q,ee=k),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=hn(Math.sqrt(B*B+X*X+K*K)),E=hn(Math.sqrt(z*z+Be*Be)),H=Uo(ee,z),A=Math.abs(H)>2e-4?H*xs:0,b=be?1/(be<0?-be:be):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wM(Xi(e,nn)),q&&e.setAttribute("transform",q))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(S*=-1,A+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,A+=A<=0?180:-180)),t=t||i.uncache,i.x=m-((i.xPercent=m&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=hn(S),i.scaleY=hn(E),i.rotation=hn(M)+f,i.rotationX=hn(y)+f,i.rotationY=hn(x)+f,i.skewX=A+f,i.skewY=C+f,i.transformPerspective=b+c,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[hi]=Nf(h)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?q3:AM?DM:W3,i.uncache=0,i},Nf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Hp=function(e,t,i){var s=jn(t);return hn(parseFloat(t)+parseFloat(Gr(e,"x",i+"px",s)))+s},W3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,DM(e,t)},ms="0deg",au="0px",gs=") ",DM=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.z,h=i.rotation,m=i.rotationY,_=i.rotationX,v=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,x=i.force3D,A=i.target,C=i.zOrigin,b="",U=x==="auto"&&e&&e!==1||x===!0;if(C&&(_!==ms||m!==ms)){var P=parseFloat(m)*zo,I=Math.sin(P),H=Math.cos(P),R;P=parseFloat(_)*zo,R=Math.cos(P),c=Hp(A,c,I*R*-C),f=Hp(A,f,-Math.sin(P)*-C),p=Hp(A,p,H*R*-C+C)}y!==au&&(b+="perspective("+y+gs),(s||l)&&(b+="translate("+s+"%, "+l+"%) "),(U||c!==au||f!==au||p!==au)&&(b+=p!==au||U?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+gs),h!==ms&&(b+="rotate("+h+gs),m!==ms&&(b+="rotateY("+m+gs),_!==ms&&(b+="rotateX("+_+gs),(v!==ms||S!==ms)&&(b+="skew("+v+", "+S+gs),(E!==1||M!==1)&&(b+="scale("+E+", "+M+gs),A.style[nn]=b||"translate(0, 0)"},q3=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.rotation,h=i.skewX,m=i.skewY,_=i.scaleX,v=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,x=i.yOffset,A=i.forceCSS,C=parseFloat(c),b=parseFloat(f),U,P,I,H,R;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=zo,h*=zo,U=Math.cos(p)*_,P=Math.sin(p)*_,I=Math.sin(p-h)*-v,H=Math.cos(p-h)*v,h&&(m*=zo,R=Math.tan(h-m),R=Math.sqrt(1+R*R),I*=R,H*=R,m&&(R=Math.tan(m),R=Math.sqrt(1+R*R),U*=R,P*=R)),U=hn(U),P=hn(P),I=hn(I),H=hn(H)):(U=_,H=v,P=I=0),(C&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(C=Gr(S,"x",c,"px"),b=Gr(S,"y",f,"px")),(E||M||y||x)&&(C=hn(C+E-(E*U+M*I)+y),b=hn(b+M-(E*P+M*H)+x)),(s||l)&&(R=S.getBBox(),C=hn(C+s/100*R.width),b=hn(b+l/100*R.height)),R="matrix("+U+","+P+","+I+","+H+","+C+","+b+")",S.setAttribute("transform",R),A&&(S.style[nn]=R)},Y3=function(e,t,i,s,l){var c=360,f=Pn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?xs:1),h=p-s,m=s+h+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),_==="cw"&&h<0?h=(h+c*DS)%c-~~(h/c)*c:_==="ccw"&&h>0&&(h=(h-c*DS)%c-~~(h/c)*c)),e._pt=v=new fi(e._pt,t,i,s,h,D3),v.e=m,v.u="deg",e._props.push(i),v},BS=function(e,t){for(var i in t)e[i]=t[i];return e},j3=function(e,t,i){var s=BS({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,p,h,m,_,v,S,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),c[nn]=t,f=yu(i,1),Ls(i,nn),i.setAttribute("transform",h)):(h=getComputedStyle(i)[nn],c[nn]=t,f=yu(i,1),c[nn]=h);for(p in $a)h=s[p],m=f[p],h!==m&&l.indexOf(p)<0&&(S=jn(h),E=jn(m),_=S!==E?Gr(i,p,h,E):parseFloat(h),v=parseFloat(m),e._pt=new fi(e._pt,f,p,_,v-_,Ym),e._pt.u=E||0,e._props.push(p));BS(f,s)};ci("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",s="Bottom",l="Left",c=(e<3?[t,i,s,l]:[t+l,t+i,s+i,s+l]).map(function(f){return e<2?r+f:"border"+f+r});Lf[e>1?"border"+r:r]=function(f,p,h,m,_){var v,S;if(arguments.length<4)return v=c.map(function(E){return Wa(f,E,h)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(m+"").split(" "),S={},c.forEach(function(E,M){return S[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,S,_)}});var UM={name:"css",register:Zm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,l){var c=this._props,f=e.style,p=i.vars.startAt,h,m,_,v,S,E,M,y,x,A,C,b,U,P,I,H;Cg||Zm(),this.styles=this.styles||TM(e),H=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(m=t[M],!(Ei[M]&&dM(M,t,i,s,e,l)))){if(S=typeof m,E=Lf[M],S==="function"&&(m=m.call(i,s,e,l),S=typeof m),S==="string"&&~m.indexOf("random(")&&(m=_u(m)),E)E(this,e,M,m,i)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",Ir.lastIndex=0,Ir.test(h)||(y=jn(h),x=jn(m)),x?y!==x&&(h=Gr(e,M,h,x)+x):y&&(m+=y),this.add(f,"setProperty",h,m,s,l,0,0,M),c.push(M),H.push(M,0,f[M]);else if(S!=="undefined"){if(p&&M in p?(h=typeof p[M]=="function"?p[M].call(i,s,e,l):p[M],Pn(h)&&~h.indexOf("random(")&&(h=_u(h)),jn(h+"")||h==="auto"||(h+=Ci.units[M]||jn(Wa(e,M))||""),(h+"").charAt(1)==="="&&(h=Wa(e,M))):h=Wa(e,M),v=parseFloat(h),A=S==="string"&&m.charAt(1)==="="&&m.substr(0,2),A&&(m=m.substr(2)),_=parseFloat(m),M in va&&(M==="autoAlpha"&&(v===1&&Wa(e,"visibility")==="hidden"&&_&&(v=0),H.push("visibility",0,f.visibility),Nr(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=va[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in $a,C){if(this.styles.save(M),S==="string"&&m.substring(0,6)==="var(--"&&(m=Xi(e,m.substring(4,m.indexOf(")"))),_=parseFloat(m)),b||(U=e._gsap,U.renderTransform&&!t.parseTransform||yu(e,t.parseTransform),P=t.smoothOrigin!==!1&&U.smooth,b=this._pt=new fi(this._pt,f,nn,0,1,U.renderTransform,U,0,-1),b.dep=1),M==="scale")this._pt=new fi(this._pt,U,"scaleY",U.scaleY,(A?Bo(U.scaleY,A+_):_)-U.scaleY||0,Ym),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){H.push(hi,0,f[hi]),m=k3(m),U.svg?Km(e,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==U.zOrigin&&Nr(this,U,"zOrigin",U.zOrigin,x),Nr(this,f,M,Nf(h),Nf(m)));continue}else if(M==="svgOrigin"){Km(e,m,1,P,0,this);continue}else if(M in CM){Y3(this,U,M,v,A?Bo(v,A+m):m);continue}else if(M==="smoothOrigin"){Nr(this,U,"smooth",U.smooth,m);continue}else if(M==="force3D"){U[M]=m;continue}else if(M==="transform"){j3(this,m,e);continue}}else M in f||(M=Qo(M)||M);if(C||(_||_===0)&&(v||v===0)&&!w3.test(m)&&M in f)y=(h+"").substr((v+"").length),_||(_=0),x=jn(m)||(M in Ci.units?Ci.units[M]:y),y!==x&&(v=Gr(e,M,h,x)),this._pt=new fi(this._pt,C?U:f,M,v,(A?Bo(v,A+_):_)-v,!C&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?L3:Ym),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=U3);else if(M in f)V3.call(this,e,M,h,A?A+m:m);else if(M in e)this.add(e,M,h||e[M],A?A+m:m,s,l);else if(M!=="parseTransform"){vg(M,m);continue}C||(M in f?H.push(M,0,f[M]):typeof e[M]=="function"?H.push(M,2,e[M]()):H.push(M,1,h||e[M])),c.push(M)}}I&&xM(this)},render:function(e,t){if(t.tween._time||!wg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wa,aliases:va,getSetter:function(e,t,i){var s=va[t];return s&&s.indexOf(",")<0&&(t=s),t in $a&&t!==hi&&(e._gsap.x||Wa(e,"x"))?i&&wS===i?t==="scale"?I3:P3:(wS=i||{})&&(t==="scale"?B3:F3):e.style&&!mg(e.style[t])?N3:~t.indexOf("-")?O3:bg(e,t)},core:{_removeProperty:Ls,_getMatrix:Ug}};di.utils.checkPrefix=Qo;di.core.getStyleSaver=TM;(function(r,e,t,i){var s=ci(r+","+e+","+t,function(l){$a[l]=1});ci(e,function(l){Ci.units[l]="deg",CM[l]=1}),va[s[13]]=r+","+e,ci(i,function(l){var c=l.split(":");va[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ci.units[r]="px"});di.registerPlugin(UM);var Ss=di.registerPlugin(UM)||di;Ss.core.Tween;function Z3({isOpen:r,onClose:e,image:t}){return oe.useEffect(()=>{const i=s=>{s.key==="Escape"&&e()};return r&&(document.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[r,e]),!r||!t?null:De.jsx("div",{className:"modal-overlay",onClick:e,children:De.jsx("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:De.jsxs("div",{className:"modal-image-container",children:[De.jsx("img",{src:t.img,alt:t.title||"Image",className:"modal-image"}),De.jsxs("div",{className:"image-caption",children:[De.jsx("h3",{className:"caption-title",children:t.title||"Untitled"}),De.jsx("p",{className:"caption-description",children:t.description||"No description available."})]})]})})})}const K3=(r,e,t)=>{const i=()=>e[r.findIndex(c=>matchMedia(c).matches)]??t,[s,l]=oe.useState(i);return oe.useEffect(()=>{const c=()=>l(i);return r.forEach(f=>matchMedia(f).addEventListener("change",c)),()=>r.forEach(f=>matchMedia(f).removeEventListener("change",c))},[r]),s},Q3=()=>{const r=oe.useRef(null),[e,t]=oe.useState({width:0,height:0});return oe.useLayoutEffect(()=>{if(!r.current)return;const i=new ResizeObserver(([s])=>{const{width:l,height:c}=s.contentRect;t({width:l,height:c})});return i.observe(r.current),()=>i.disconnect()},[]),[r,e]},J3=async r=>{await Promise.all(r.map(e=>new Promise(t=>{const i=new Image;i.src=e,i.onload=i.onerror=()=>t()})))},$3=({items:r,ease:e="power3.out",duration:t=.6,stagger:i=.05,animateFrom:s="bottom",scaleOnHover:l=!0,hoverScale:c=.95,blurToFocus:f=!0,colorShiftOnHover:p=!1,gap:h=10})=>{const m=K3(["(min-width:1500px)","(min-width:1000px)","(min-width:600px)","(min-width:400px)"],[5,4,3,2],1),[_,{width:v}]=Q3(),[S,E]=oe.useState(!1),[M,y]=oe.useState(null),[x,A]=oe.useState(!1),C=B=>{const X=_.current?.getBoundingClientRect();if(!X)return{x:B.x,y:B.y};let K=s;if(s==="random"){const re=["top","bottom","left","right"];K=re[Math.floor(Math.random()*re.length)]}switch(K){case"top":return{x:B.x,y:-200};case"bottom":return{x:B.x,y:window.innerHeight+200};case"left":return{x:-200,y:B.y};case"right":return{x:window.innerWidth+200,y:B.y};case"center":return{x:X.width/2-B.w/2,y:X.height/2-B.h/2};default:return{x:B.x,y:B.y+100}}};oe.useEffect(()=>{J3(r.map(B=>B.img)).then(()=>E(!0))},[r]);const b=oe.useMemo(()=>{if(!v)return[];const B=new Array(m).fill(0),X=(v-(m-1)*h)/m;return r.map(K=>{const re=B.indexOf(Math.min(...B)),ee=X*re+h*re,z=K.height/2,q=B[re]+(B[re]>0?h:0);return B[re]=q+z,{...K,x:ee,y:q,w:X,h:z}})},[m,r,v,h]),U=oe.useMemo(()=>{if(b.length===0)return"auto";const B=new Array(m).fill(0);b.forEach(K=>{const re=Math.floor(K.x/(K.w+h));B[re]=Math.max(B[re],K.y+K.h)});const X=Math.max(...B);return X>0?X:"auto"},[b,m,h]),P=oe.useRef(!1);oe.useLayoutEffect(()=>{S&&(b.forEach((B,X)=>{const K=`[data-key="${B.id}"]`,re={x:B.x,y:B.y,width:B.w,height:B.h};if(P.current)Ss.to(K,{...re,duration:t,ease:e,overwrite:"auto"});else{const ee=C(B),z={opacity:0,x:ee.x,y:ee.y,width:B.w,height:B.h,...f&&{filter:"blur(10px)"}};Ss.fromTo(K,z,{opacity:1,...re,...f&&{filter:"blur(0px)"},duration:.8,ease:"power3.out",delay:X*i})}}),P.current=!0)},[b,S,i,s,f,t,e]);const I=(B,X)=>{const K=B.currentTarget,re=`[data-key="${X.id}"]`;if(l&&Ss.to(re,{scale:c,duration:.3,ease:"power2.out"}),p){const ee=K.querySelector(".color-overlay");ee&&Ss.to(ee,{opacity:.3,duration:.3})}},H=(B,X)=>{const K=B.currentTarget,re=`[data-key="${X.id}"]`;if(l&&Ss.to(re,{scale:1,duration:.3,ease:"power2.out"}),p){const ee=K.querySelector(".color-overlay");ee&&Ss.to(ee,{opacity:0,duration:.3})}},R=B=>{y(B),A(!0)},L=()=>{A(!1),y(null)};return De.jsxs(De.Fragment,{children:[De.jsx("div",{ref:_,className:"list",style:{height:U},children:b.map(B=>De.jsx("div",{"data-key":B.id,className:"item-wrapper",onClick:()=>R(B),onMouseEnter:X=>I(X,B),onMouseLeave:X=>H(X,B),children:De.jsx("div",{className:"item-img",style:{backgroundImage:`url(${B.img})`},children:p&&De.jsx("div",{className:"color-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",opacity:0,pointerEvents:"none",borderRadius:"8px"}})})},B.id))}),De.jsx(Z3,{isOpen:x,onClose:L,image:M})]})};function eL(){const r=[{id:"1",img:"https://picsum.photos/id/1015/600/900?grayscale",title:"山景",description:"黑白山脉风景，光影对比强烈",height:400},{id:"2",img:"https://picsum.photos/id/1011/600/750?grayscale",title:"森林小径",description:"幽静的森林小路，充满神秘感",height:250}];return De.jsx("div",{className:"paint-screen-container",children:De.jsx($3,{items:r,ease:"power4.out",duration:.6,stagger:.1,animateFrom:"center",scaleOnHover:!0,hoverScale:.95,blurToFocus:!0,colorShiftOnHover:!1})})}function tL(){return De.jsx("div",{className:"music-screen-container",children:De.jsx("h2",{children:"Music Screen"})})}function nL({activeScreen:r}){const t={chat:SS,profile:NU,gamedev:OU,paint:eL,music:tL}[r]||SS;return De.jsxs("div",{className:"screen-container",children:[De.jsx(zr,{className:"screen-window",src:bU}),De.jsx("div",{className:"screen-content",children:De.jsx(t,{})})]})}function iL(){const[r,e]=oe.useState("chat");return De.jsxs("div",{className:"content-container",children:[De.jsx("title",{children:"楽園"}),De.jsxs("div",{className:"content",children:[De.jsxs("div",{className:"sidebar-stack",children:[De.jsx(AU,{}),De.jsx(MU,{activeScreen:r,setActiveScreen:e})]}),De.jsx("div",{className:"screen-stack",children:De.jsx(nL,{activeScreen:r})}),De.jsx("div",{children:De.jsx(SU,{interactive:!0})})]})]})}function aL(){return De.jsx(De.Fragment,{children:De.jsxs(PA,{children:[De.jsx(Vp,{path:"/",element:De.jsx(iL,{})}),De.jsx(Vp,{path:"test",element:De.jsx(De.Fragment,{children:"test"})})]})})}XT.createRoot(document.getElementById("root")).render(De.jsx(oe.StrictMode,{children:De.jsx(ab,{children:De.jsx(aL,{})})}));
