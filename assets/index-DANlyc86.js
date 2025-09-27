(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var Yd={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function FA(){if(ox)return Kl;ox=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:i,key:c,ref:s!==void 0?s:null,props:l}}return Kl.Fragment=e,Kl.jsx=t,Kl.jsxs=t,Kl}var lx;function zA(){return lx||(lx=1,Yd.exports=FA()),Yd.exports}var De=zA(),qd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ux;function HA(){if(ux)return ft;ux=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,Z,pe){this.props=O,this.context=Z,this.refs=M,this.updater=pe||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function T(O,Z,pe){this.props=O,this.context=Z,this.refs=M,this.updater=pe||y}var C=T.prototype=new x;C.constructor=T,E(C,S.prototype),C.isPureReactComponent=!0;var b=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function I(O,Z,pe,Se,be,Be){return pe=Be.ref,{$$typeof:r,type:O,key:Z,ref:pe!==void 0?pe:null,props:Be}}function H(O,Z){return I(O.type,Z,void 0,void 0,void 0,O.props)}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function U(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return Z[pe]})}var B=/\/+/g;function X(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):Z.toString(36)}function j(){}function re(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(j,j):(O.status="pending",O.then(function(Z){O.status==="pending"&&(O.status="fulfilled",O.value=Z)},function(Z){O.status==="pending"&&(O.status="rejected",O.reason=Z)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ee(O,Z,pe,Se,be){var Be=typeof O;(Be==="undefined"||Be==="boolean")&&(O=null);var ne=!1;if(O===null)ne=!0;else switch(Be){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(O.$$typeof){case r:case e:ne=!0;break;case m:return ne=O._init,ee(ne(O._payload),Z,pe,Se,be)}}if(ne)return be=be(O),ne=Se===""?"."+X(O,0):Se,b(be)?(pe="",ne!=null&&(pe=ne.replace(B,"$&/")+"/"),ee(be,Z,pe,"",function(je){return je})):be!=null&&(R(be)&&(be=H(be,pe+(be.key==null||O&&O.key===be.key?"":(""+be.key).replace(B,"$&/")+"/")+ne)),Z.push(be)),1;ne=0;var ge=Se===""?".":Se+":";if(b(O))for(var Re=0;Re<O.length;Re++)Se=O[Re],Be=ge+X(Se,Re),ne+=ee(Se,Z,pe,Be,be);else if(Re=v(O),typeof Re=="function")for(O=Re.call(O),Re=0;!(Se=O.next()).done;)Se=Se.value,Be=ge+X(Se,Re++),ne+=ee(Se,Z,pe,Be,be);else if(Be==="object"){if(typeof O.then=="function")return ee(re(O),Z,pe,Se,be);throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ne}function z(O,Z,pe){if(O==null)return O;var Se=[],be=0;return ee(O,Se,"","",function(Be){return Z.call(pe,Be,be++)}),Se}function Y(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var k=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function _e(){}return ft.Children={map:z,forEach:function(O,Z,pe){z(O,function(){Z.apply(this,arguments)},pe)},count:function(O){var Z=0;return z(O,function(){Z++}),Z},toArray:function(O){return z(O,function(Z){return Z})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=S,ft.Fragment=t,ft.Profiler=s,ft.PureComponent=T,ft.StrictMode=i,ft.Suspense=p,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ft.__COMPILER_RUNTIME={__proto__:null,c:function(O){return L.H.useMemoCache(O)}},ft.cache=function(O){return function(){return O.apply(null,arguments)}},ft.cloneElement=function(O,Z,pe){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Se=E({},O.props),be=O.key,Be=void 0;if(Z!=null)for(ne in Z.ref!==void 0&&(Be=void 0),Z.key!==void 0&&(be=""+Z.key),Z)!P.call(Z,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Z.ref===void 0||(Se[ne]=Z[ne]);var ne=arguments.length-2;if(ne===1)Se.children=pe;else if(1<ne){for(var ge=Array(ne),Re=0;Re<ne;Re++)ge[Re]=arguments[Re+2];Se.children=ge}return I(O.type,be,void 0,void 0,Be,Se)},ft.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},ft.createElement=function(O,Z,pe){var Se,be={},Be=null;if(Z!=null)for(Se in Z.key!==void 0&&(Be=""+Z.key),Z)P.call(Z,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(be[Se]=Z[Se]);var ne=arguments.length-2;if(ne===1)be.children=pe;else if(1<ne){for(var ge=Array(ne),Re=0;Re<ne;Re++)ge[Re]=arguments[Re+2];be.children=ge}if(O&&O.defaultProps)for(Se in ne=O.defaultProps,ne)be[Se]===void 0&&(be[Se]=ne[Se]);return I(O,Be,void 0,void 0,null,be)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:f,render:O}},ft.isValidElement=R,ft.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:Y}},ft.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},ft.startTransition=function(O){var Z=L.T,pe={};L.T=pe;try{var Se=O(),be=L.S;be!==null&&be(pe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(_e,k)}catch(Be){k(Be)}finally{L.T=Z}},ft.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ft.use=function(O){return L.H.use(O)},ft.useActionState=function(O,Z,pe){return L.H.useActionState(O,Z,pe)},ft.useCallback=function(O,Z){return L.H.useCallback(O,Z)},ft.useContext=function(O){return L.H.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O,Z){return L.H.useDeferredValue(O,Z)},ft.useEffect=function(O,Z,pe){var Se=L.H;if(typeof pe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Se.useEffect(O,Z)},ft.useId=function(){return L.H.useId()},ft.useImperativeHandle=function(O,Z,pe){return L.H.useImperativeHandle(O,Z,pe)},ft.useInsertionEffect=function(O,Z){return L.H.useInsertionEffect(O,Z)},ft.useLayoutEffect=function(O,Z){return L.H.useLayoutEffect(O,Z)},ft.useMemo=function(O,Z){return L.H.useMemo(O,Z)},ft.useOptimistic=function(O,Z){return L.H.useOptimistic(O,Z)},ft.useReducer=function(O,Z,pe){return L.H.useReducer(O,Z,pe)},ft.useRef=function(O){return L.H.useRef(O)},ft.useState=function(O){return L.H.useState(O)},ft.useSyncExternalStore=function(O,Z,pe){return L.H.useSyncExternalStore(O,Z,pe)},ft.useTransition=function(){return L.H.useTransition()},ft.version="19.1.1",ft}var cx;function eg(){return cx||(cx=1,qd.exports=HA()),qd.exports}var oe=eg(),Kd={exports:{}},Ql={},Qd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx;function GA(){return fx||(fx=1,(function(r){function e(z,Y){var k=z.length;z.push(Y);e:for(;0<k;){var _e=k-1>>>1,O=z[_e];if(0<s(O,Y))z[_e]=Y,z[k]=O,k=_e;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var Y=z[0],k=z.pop();if(k!==Y){z[0]=k;e:for(var _e=0,O=z.length,Z=O>>>1;_e<Z;){var pe=2*(_e+1)-1,Se=z[pe],be=pe+1,Be=z[be];if(0>s(Se,k))be<O&&0>s(Be,Se)?(z[_e]=Be,z[be]=k,_e=be):(z[_e]=Se,z[pe]=k,_e=pe);else if(be<O&&0>s(Be,k))z[_e]=Be,z[be]=k,_e=be;else break e}}return Y}function s(z,Y){var k=z.sortIndex-Y.sortIndex;return k!==0?k:z.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,_=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function b(z){for(var Y=t(h);Y!==null;){if(Y.callback===null)i(h);else if(Y.startTime<=z)i(h),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=t(h)}}function L(z){if(M=!1,b(z),!E)if(t(p)!==null)E=!0,P||(P=!0,X());else{var Y=t(h);Y!==null&&ee(L,Y.startTime-z)}}var P=!1,I=-1,H=5,R=-1;function U(){return S?!0:!(r.unstable_now()-R<H)}function B(){if(S=!1,P){var z=r.unstable_now();R=z;var Y=!0;try{e:{E=!1,M&&(M=!1,T(I),I=-1),y=!0;var k=v;try{t:{for(b(z),_=t(p);_!==null&&!(_.expirationTime>z&&U());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,v=_.priorityLevel;var O=_e(_.expirationTime<=z);if(z=r.unstable_now(),typeof O=="function"){_.callback=O,b(z),Y=!0;break t}_===t(p)&&i(p),b(z)}else i(p);_=t(p)}if(_!==null)Y=!0;else{var Z=t(h);Z!==null&&ee(L,Z.startTime-z),Y=!1}}break e}finally{_=null,v=k,y=!1}Y=void 0}}finally{Y?X():P=!1}}}var X;if(typeof C=="function")X=function(){C(B)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,re=j.port2;j.port1.onmessage=B,X=function(){re.postMessage(null)}}else X=function(){x(B,0)};function ee(z,Y){I=x(function(){z(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(z){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var k=v;v=Y;try{return z()}finally{v=k}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=v;v=z;try{return Y()}finally{v=k}},r.unstable_scheduleCallback=function(z,Y,k){var _e=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_e+k:_e):k=_e,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=k+O,z={id:m++,callback:Y,priorityLevel:z,startTime:k,expirationTime:O,sortIndex:-1},k>_e?(z.sortIndex=k,e(h,z),t(p)===null&&z===t(h)&&(M?(T(I),I=-1):M=!0,ee(L,k-_e))):(z.sortIndex=O,e(p,z),E||y||(E=!0,P||(P=!0,X()))),z},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(z){var Y=v;return function(){var k=v;v=Y;try{return z.apply(this,arguments)}finally{v=k}}}})(jd)),jd}var hx;function VA(){return hx||(hx=1,Qd.exports=GA()),Qd.exports}var Zd={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function kA(){if(dx)return Wn;dx=1;var r=eg();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:p,containerInfo:h,implementation:m}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Wn.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(p,h,null,m)},Wn.flushSync=function(p){var h=c.T,m=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=h,i.p=m,i.d.f()}},Wn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},Wn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Wn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):m==="script"&&i.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},Wn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);i.d.L(p,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wn.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},Wn.requestFormReset=function(p){i.d.r(p)},Wn.unstable_batchedUpdates=function(p,h){return p(h)},Wn.useFormState=function(p,h,m){return c.H.useFormState(p,h,m)},Wn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Wn.version="19.1.1",Wn}var px;function XA(){if(px)return Zd.exports;px=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zd.exports=kA(),Zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function WA(){if(mx)return Ql;mx=1;var r=VA(),e=eg(),t=XA();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function c(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function p(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,u=a;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),n;if(g===u)return f(d),a;g=g.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=g;else{for(var A=!1,D=d.child;D;){if(D===o){A=!0,o=d,u=g;break}if(D===u){A=!0,u=d,o=g;break}D=D.sibling}if(!A){for(D=g.child;D;){if(D===o){A=!0,o=g,u=d;break}if(D===u){A=!0,u=g,o=d;break}D=D.sibling}if(!A)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function h(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=h(n),a!==null)return a;n=n.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var j=Symbol.for("react.client.reference");function re(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===j?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case R:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case y:return"Portal";case C:return(n.displayName||"Context")+".Provider";case T:return(n._context.displayName||"Context")+".Consumer";case b:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return a=n.displayName||null,a!==null?a:re(n.type)||"Memo";case H:a=n._payload,n=n._init;try{return re(n(a))}catch{}}return null}var ee=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_e=[],O=-1;function Z(n){return{current:n}}function pe(n){0>O||(n.current=_e[O],_e[O]=null,O--)}function Se(n,a){O++,_e[O]=n.current,n.current=a}var be=Z(null),Be=Z(null),ne=Z(null),ge=Z(null);function Re(n,a){switch(Se(ne,a),Se(Be,n),Se(be,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?P0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=P0(a),n=I0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}pe(be),Se(be,n)}function je(){pe(be),pe(Be),pe(ne)}function Ye(n){n.memoizedState!==null&&Se(ge,n);var a=be.current,o=I0(a,n.type);a!==o&&(Se(Be,n),Se(be,o))}function ct(n){Be.current===n&&(pe(be),pe(Be)),ge.current===n&&(pe(ge),kl._currentValue=k)}var xt=Object.prototype.hasOwnProperty,V=r.unstable_scheduleCallback,bt=r.unstable_cancelCallback,st=r.unstable_shouldYield,et=r.unstable_requestPaint,Ie=r.unstable_now,Ot=r.unstable_getCurrentPriorityLevel,Ge=r.unstable_ImmediatePriority,Fe=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,Ct=r.unstable_LowPriority,F=r.unstable_IdlePriority,w=r.log,ie=r.unstable_setDisableYieldValue,he=null,ve=null;function fe(n){if(typeof w=="function"&&ie(n),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(he,n)}catch{}}var ze=Math.clz32?Math.clz32:Qe,Ce=Math.log,qe=Math.LN2;function Qe(n){return n>>>=0,n===0?32:31-(Ce(n)/qe|0)|0}var Me=256,Ne=4194304;function Je(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function We(n,a,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,g=n.suspendedLanes,A=n.pingedLanes;n=n.warmLanes;var D=u&134217727;return D!==0?(u=D&~g,u!==0?d=Je(u):(A&=D,A!==0?d=Je(A):o||(o=D&~n,o!==0&&(d=Je(o))))):(D=u&~g,D!==0?d=Je(D):A!==0?d=Je(A):o||(o=u&~n,o!==0&&(d=Je(o)))),d===0?0:a!==0&&a!==d&&(a&g)===0&&(g=d&-d,o=a&-a,g>=o||g===32&&(o&4194048)!==0)?a:d}function Ue(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function ut(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var n=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),n}function Te(){var n=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),n}function we(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function He(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ee(n,a,o,u,d,g){var A=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var D=n.entanglements,G=n.expirationTimes,te=n.hiddenUpdates;for(o=A&~o;0<o;){var de=31-ze(o),xe=1<<de;D[de]=0,G[de]=-1;var ae=te[de];if(ae!==null)for(te[de]=null,de=0;de<ae.length;de++){var se=ae[de];se!==null&&(se.lane&=-536870913)}o&=~xe}u!==0&&ye(n,u,0),g!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=g&~(A&~a))}function ye(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var u=31-ze(a);n.entangledLanes|=a,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function Xe(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var u=31-ze(o),d=1<<u;d&a|n[u]&a&&(n[u]|=a),o&=~d}}function ot(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function It(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function wt(){var n=Y.p;return n!==0?n:(n=window.event,n===void 0?32:tx(n.type))}function Yi(n,a){var o=Y.p;try{return Y.p=n,a()}finally{Y.p=o}}var Sn=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Sn,rn="__reactProps$"+Sn,ra="__reactContainer$"+Sn,Os="__reactEvents$"+Sn,Uu="__reactListeners$"+Sn,Ps="__reactHandles$"+Sn,tl="__reactResources$"+Sn,sa="__reactMarker$"+Sn;function Is(n){delete n[Mn],delete n[rn],delete n[Os],delete n[Uu],delete n[Ps]}function Ma(n){var a=n[Mn];if(a)return a;for(var o=n.parentNode;o;){if(a=o[ra]||o[Mn]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=H0(n);n!==null;){if(o=n[Mn])return o;n=H0(n)}return a}n=o,o=n.parentNode}return null}function er(n){if(n=n[Mn]||n[ra]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Wr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function tr(n){var a=n[tl];return a||(a=n[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function mn(n){n[sa]=!0}var Lu=new Set,Nu={};function N(n,a){K(n,a),K(n+"Capture",a)}function K(n,a){for(Nu[n]=a,n=0;n<a.length;n++)Lu.add(a[n])}var le=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},J={};function Ae(n){return xt.call(J,n)?!0:xt.call(ue,n)?!1:le.test(n)?J[n]=!0:(ue[n]=!0,!1)}function Le(n,a,o){if(Ae(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Ve(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function Oe(n,a,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+u)}}var tt,it;function Ke(n){if(tt===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);tt=a&&a[1]||"",it=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tt+n+it}var dt=!1;function Dt(n,a){if(!n||dt)return"";dt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(se){var ae=se}Reflect.construct(n,[],xe)}else{try{xe.call()}catch(se){ae=se}n.call(xe.prototype)}}else{try{throw Error()}catch(se){ae=se}(xe=n())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(se){if(se&&ae&&typeof se.stack=="string")return[se.stack,ae.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),A=g[0],D=g[1];if(A&&D){var G=A.split(`
`),te=D.split(`
`);for(d=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;d<te.length&&!te[d].includes("DetermineComponentFrameRoot");)d++;if(u===G.length||d===te.length)for(u=G.length-1,d=te.length-1;1<=u&&0<=d&&G[u]!==te[d];)d--;for(;1<=u&&0<=d;u--,d--)if(G[u]!==te[d]){if(u!==1||d!==1)do if(u--,d--,0>d||G[u]!==te[d]){var de=`
`+G[u].replace(" at new "," at ");return n.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",n.displayName)),de}while(1<=u&&0<=d);break}}}finally{dt=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Ke(o):""}function Zt(n){switch(n.tag){case 26:case 27:case 5:return Ke(n.type);case 16:return Ke("Lazy");case 13:return Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return Dt(n.type,!1);case 11:return Dt(n.type.render,!1);case 1:return Dt(n.type,!0);case 31:return Ke("Activity");default:return""}}function Ht(n){try{var a="";do a+=Zt(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function pt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function jt(n){var a=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),u=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return d.call(this)},set:function(A){u=""+A,g.call(this,A)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function yt(n){n._valueTracker||(n._valueTracker=jt(n))}function Vn(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return n&&(u=$e(n)?n.checked?"true":"false":n.value),n=u,n!==o?(a.setValue(n),!0):!1}function qi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Zn=/[\n"\\]/g;function wn(n){return n.replace(Zn,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Wt(n,a,o,u,d,g,A,D){n.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?n.type=A:n.removeAttribute("type"),a!=null?A==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+pt(a)):n.value!==""+pt(a)&&(n.value=""+pt(a)):A!=="submit"&&A!=="reset"||n.removeAttribute("value"),a!=null?kn(n,A,pt(a)):o!=null?kn(n,A,pt(o)):u!=null&&n.removeAttribute("value"),d==null&&g!=null&&(n.defaultChecked=!!g),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?n.name=""+pt(D):n.removeAttribute("name")}function Jn(n,a,o,u,d,g,A,D){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),a!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||a!=null))return;o=o!=null?""+pt(o):"",a=a!=null?""+pt(a):o,D||a===n.value||(n.value=a),n.defaultValue=a}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=D?n.checked:!!u,n.defaultChecked=!!u,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(n.name=A)}function kn(n,a,o){a==="number"&&qi(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function sn(n,a,o,u){if(n=n.options,a){a={};for(var d=0;d<o.length;d++)a["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=a.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pt(o),a=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}a!==null||n[d].disabled||(a=n[d])}a!==null&&(a.selected=!0)}}function In(n,a,o){if(a!=null&&(a=""+pt(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+pt(o):""}function Bs(n,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(ee(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=pt(a),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function ni(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var PM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pg(n,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":u?n.setProperty(a,o):typeof o!="number"||o===0||PM.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Ig(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in a)u=a[d],a.hasOwnProperty(d)&&o[d]!==u&&Pg(n,d,u)}else for(var g in a)a.hasOwnProperty(g)&&Pg(n,g,a[g])}function Wf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var IM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),BM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ou(n){return BM.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Yf=null;function qf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fs=null,zs=null;function Bg(n){var a=er(n);if(a&&(n=a.stateNode)){var o=n[rn]||null;e:switch(n=a.stateNode,a.type){case"input":if(Wt(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+wn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==n&&u.form===n.form){var d=u[rn]||null;if(!d)throw Error(i(90));Wt(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===n.form&&Vn(u)}break e;case"textarea":In(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&sn(n,!!o.multiple,a,!1)}}}var Kf=!1;function Fg(n,a,o){if(Kf)return n(a,o);Kf=!0;try{var u=n(a);return u}finally{if(Kf=!1,(Fs!==null||zs!==null)&&(xc(),Fs&&(a=Fs,n=zs,zs=Fs=null,Bg(a),n)))for(a=0;a<n.length;a++)Bg(n[a])}}function nl(n,a){var o=n.stateNode;if(o===null)return null;var u=o[rn]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=!1;if(Ea)try{var il={};Object.defineProperty(il,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{Qf=!1}var nr=null,jf=null,Pu=null;function zg(){if(Pu)return Pu;var n,a=jf,o=a.length,u,d="value"in nr?nr.value:nr.textContent,g=d.length;for(n=0;n<o&&a[n]===d[n];n++);var A=o-n;for(u=1;u<=A&&a[o-u]===d[g-u];u++);return Pu=d.slice(n,1<u?1-u:void 0)}function Iu(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Bu(){return!0}function Hg(){return!1}function ii(n){function a(o,u,d,g,A){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(o=n[D],this[D]=o?o(g):g[D]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Bu:Hg,this.isPropagationStopped=Hg,this}return m(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),a}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=ii(Yr),al=m({},Yr,{view:0,detail:0}),FM=ii(al),Zf,Jf,rl,zu=m({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rl&&(rl&&n.type==="mousemove"?(Zf=n.screenX-rl.screenX,Jf=n.screenY-rl.screenY):Jf=Zf=0,rl=n),Zf)},movementY:function(n){return"movementY"in n?n.movementY:Jf}}),Gg=ii(zu),zM=m({},zu,{dataTransfer:0}),HM=ii(zM),GM=m({},al,{relatedTarget:0}),$f=ii(GM),VM=m({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),kM=ii(VM),XM=m({},Yr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),WM=ii(XM),YM=m({},Yr,{data:0}),Vg=ii(YM),qM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jM(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=QM[n])?!!a[n]:!1}function eh(){return jM}var ZM=m({},al,{key:function(n){if(n.key){var a=qM[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Iu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?KM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(n){return n.type==="keypress"?Iu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Iu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),JM=ii(ZM),$M=m({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kg=ii($M),eE=m({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),tE=ii(eE),nE=m({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),iE=ii(nE),aE=m({},zu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rE=ii(aE),sE=m({},Yr,{newState:0,oldState:0}),oE=ii(sE),lE=[9,13,27,32],th=Ea&&"CompositionEvent"in window,sl=null;Ea&&"documentMode"in document&&(sl=document.documentMode);var uE=Ea&&"TextEvent"in window&&!sl,Xg=Ea&&(!th||sl&&8<sl&&11>=sl),Wg=" ",Yg=!1;function qg(n,a){switch(n){case"keyup":return lE.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function cE(n,a){switch(n){case"compositionend":return Kg(a);case"keypress":return a.which!==32?null:(Yg=!0,Wg);case"textInput":return n=a.data,n===Wg&&Yg?null:n;default:return null}}function fE(n,a){if(Hs)return n==="compositionend"||!th&&qg(n,a)?(n=zg(),Pu=jf=nr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Xg&&a.locale!=="ko"?null:a.data;default:return null}}var hE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!hE[n.type]:a==="textarea"}function jg(n,a,o,u){Fs?zs?zs.push(u):zs=[u]:Fs=u,a=Tc(a,"onChange"),0<a.length&&(o=new Fu("onChange","change",null,o,u),n.push({event:o,listeners:a}))}var ol=null,ll=null;function dE(n){D0(n,0)}function Hu(n){var a=Wr(n);if(Vn(a))return n}function Zg(n,a){if(n==="change")return a}var Jg=!1;if(Ea){var nh;if(Ea){var ih="oninput"in document;if(!ih){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),ih=typeof $g.oninput=="function"}nh=ih}else nh=!1;Jg=nh&&(!document.documentMode||9<document.documentMode)}function e_(){ol&&(ol.detachEvent("onpropertychange",t_),ll=ol=null)}function t_(n){if(n.propertyName==="value"&&Hu(ll)){var a=[];jg(a,ll,n,qf(n)),Fg(dE,a)}}function pE(n,a,o){n==="focusin"?(e_(),ol=a,ll=o,ol.attachEvent("onpropertychange",t_)):n==="focusout"&&e_()}function mE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Hu(ll)}function gE(n,a){if(n==="click")return Hu(a)}function _E(n,a){if(n==="input"||n==="change")return Hu(a)}function vE(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var di=typeof Object.is=="function"?Object.is:vE;function ul(n,a){if(di(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!xt.call(a,d)||!di(n[d],a[d]))return!1}return!0}function n_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function i_(n,a){var o=n_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=a&&u>=a)return{node:o,offset:a-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=n_(o)}}function a_(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?a_(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function r_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=qi(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=qi(n.document)}return a}function ah(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var xE=Ea&&"documentMode"in document&&11>=document.documentMode,Gs=null,rh=null,cl=null,sh=!1;function s_(n,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sh||Gs==null||Gs!==qi(u)||(u=Gs,"selectionStart"in u&&ah(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),cl&&ul(cl,u)||(cl=u,u=Tc(rh,"onSelect"),0<u.length&&(a=new Fu("onSelect","select",null,a,o),n.push({event:a,listeners:u}),a.target=Gs)))}function qr(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var Vs={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionrun:qr("Transition","TransitionRun"),transitionstart:qr("Transition","TransitionStart"),transitioncancel:qr("Transition","TransitionCancel"),transitionend:qr("Transition","TransitionEnd")},oh={},o_={};Ea&&(o_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Kr(n){if(oh[n])return oh[n];if(!Vs[n])return n;var a=Vs[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in o_)return oh[n]=a[o];return n}var l_=Kr("animationend"),u_=Kr("animationiteration"),c_=Kr("animationstart"),yE=Kr("transitionrun"),SE=Kr("transitionstart"),ME=Kr("transitioncancel"),f_=Kr("transitionend"),h_=new Map,lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lh.push("scrollEnd");function Ki(n,a){h_.set(n,a),N(a,[n])}var d_=new WeakMap;function Ui(n,a){if(typeof n=="object"&&n!==null){var o=d_.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Ht(a)},d_.set(n,a),a)}return{value:n,source:a,stack:Ht(a)}}var Li=[],ks=0,uh=0;function Gu(){for(var n=ks,a=uh=ks=0;a<n;){var o=Li[a];Li[a++]=null;var u=Li[a];Li[a++]=null;var d=Li[a];Li[a++]=null;var g=Li[a];if(Li[a++]=null,u!==null&&d!==null){var A=u.pending;A===null?d.next=d:(d.next=A.next,A.next=d),u.pending=d}g!==0&&p_(o,d,g)}}function Vu(n,a,o,u){Li[ks++]=n,Li[ks++]=a,Li[ks++]=o,Li[ks++]=u,uh|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function ch(n,a,o,u){return Vu(n,a,o,u),ku(n)}function Xs(n,a){return Vu(n,null,null,a),ku(n)}function p_(n,a,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,g=n.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(d=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,d&&a!==null&&(d=31-ze(o),n=g.hiddenUpdates,u=n[d],u===null?n[d]=[a]:u.push(a),a.lane=o|536870912),g):null}function ku(n){if(50<Pl)throw Pl=0,gd=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ws={};function EE(n,a,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,a,o,u){return new EE(n,a,o,u)}function fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Aa(n,a){var o=n.alternate;return o===null?(o=pi(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function m_(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Xu(n,a,o,u,d,g){var A=0;if(u=n,typeof n=="function")fh(n)&&(A=1);else if(typeof n=="string")A=TA(n,o,be.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case R:return n=pi(31,o,a,d),n.elementType=R,n.lanes=g,n;case E:return Qr(o.children,d,g,a);case M:A=8,d|=24;break;case S:return n=pi(12,o,a,d|2),n.elementType=S,n.lanes=g,n;case L:return n=pi(13,o,a,d),n.elementType=L,n.lanes=g,n;case P:return n=pi(19,o,a,d),n.elementType=P,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case x:case C:A=10;break e;case T:A=9;break e;case b:A=11;break e;case I:A=14;break e;case H:A=16,u=null;break e}A=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return a=pi(A,o,a,d),a.elementType=n,a.type=u,a.lanes=g,a}function Qr(n,a,o,u){return n=pi(7,n,u,a),n.lanes=o,n}function hh(n,a,o){return n=pi(6,n,null,a),n.lanes=o,n}function dh(n,a,o){return a=pi(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ys=[],qs=0,Wu=null,Yu=0,Ni=[],Oi=0,jr=null,Ta=1,ba="";function Zr(n,a){Ys[qs++]=Yu,Ys[qs++]=Wu,Wu=n,Yu=a}function g_(n,a,o){Ni[Oi++]=Ta,Ni[Oi++]=ba,Ni[Oi++]=jr,jr=n;var u=Ta;n=ba;var d=32-ze(u)-1;u&=~(1<<d),o+=1;var g=32-ze(a)+d;if(30<g){var A=d-d%5;g=(u&(1<<A)-1).toString(32),u>>=A,d-=A,Ta=1<<32-ze(a)+d|o<<d|u,ba=g+n}else Ta=1<<g|o<<d|u,ba=n}function ph(n){n.return!==null&&(Zr(n,1),g_(n,1,0))}function mh(n){for(;n===Wu;)Wu=Ys[--qs],Ys[qs]=null,Yu=Ys[--qs],Ys[qs]=null;for(;n===jr;)jr=Ni[--Oi],Ni[Oi]=null,ba=Ni[--Oi],Ni[Oi]=null,Ta=Ni[--Oi],Ni[Oi]=null}var $n=null,on=null,Pt=!1,Jr=null,oa=!1,gh=Error(i(519));function $r(n){var a=Error(i(418,""));throw dl(Ui(a,n)),gh}function __(n){var a=n.stateNode,o=n.type,u=n.memoizedProps;switch(a[Mn]=n,a[rn]=u,o){case"dialog":Mt("cancel",a),Mt("close",a);break;case"iframe":case"object":case"embed":Mt("load",a);break;case"video":case"audio":for(o=0;o<Bl.length;o++)Mt(Bl[o],a);break;case"source":Mt("error",a);break;case"img":case"image":case"link":Mt("error",a),Mt("load",a);break;case"details":Mt("toggle",a);break;case"input":Mt("invalid",a),Jn(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),yt(a);break;case"select":Mt("invalid",a);break;case"textarea":Mt("invalid",a),Bs(a,u.value,u.defaultValue,u.children),yt(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||O0(a.textContent,o)?(u.popover!=null&&(Mt("beforetoggle",a),Mt("toggle",a)),u.onScroll!=null&&Mt("scroll",a),u.onScrollEnd!=null&&Mt("scrollend",a),u.onClick!=null&&(a.onclick=bc),a=!0):a=!1,a||$r(n)}function v_(n){for($n=n.return;$n;)switch($n.tag){case 5:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:$n=$n.return}}function fl(n){if(n!==$n)return!1;if(!Pt)return v_(n),Pt=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Ld(n.type,n.memoizedProps)),o=!o),o&&on&&$r(n),v_(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){on=ji(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}on=null}}else a===27?(a=on,vr(n.type)?(n=Id,Id=null,on=n):on=a):on=$n?ji(n.stateNode.nextSibling):null;return!0}function hl(){on=$n=null,Pt=!1}function x_(){var n=Jr;return n!==null&&(si===null?si=n:si.push.apply(si,n),Jr=null),n}function dl(n){Jr===null?Jr=[n]:Jr.push(n)}var _h=Z(null),es=null,Ra=null;function ir(n,a,o){Se(_h,a._currentValue),a._currentValue=o}function Ca(n){n._currentValue=_h.current,pe(_h)}function vh(n,a,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),n===o)break;n=n.return}}function xh(n,a,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var g=d.dependencies;if(g!==null){var A=d.child;g=g.firstContext;e:for(;g!==null;){var D=g;g=d;for(var G=0;G<a.length;G++)if(D.context===a[G]){g.lanes|=o,D=g.alternate,D!==null&&(D.lanes|=o),vh(g.return,o,n),u||(A=null);break e}g=D.next}}else if(d.tag===18){if(A=d.return,A===null)throw Error(i(341));A.lanes|=o,g=A.alternate,g!==null&&(g.lanes|=o),vh(A,o,n),A=null}else A=d.child;if(A!==null)A.return=d;else for(A=d;A!==null;){if(A===n){A=null;break}if(d=A.sibling,d!==null){d.return=A.return,A=d;break}A=A.return}d=A}}function pl(n,a,o,u){n=null;for(var d=a,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var A=d.alternate;if(A===null)throw Error(i(387));if(A=A.memoizedProps,A!==null){var D=d.type;di(d.pendingProps.value,A.value)||(n!==null?n.push(D):n=[D])}}else if(d===ge.current){if(A=d.alternate,A===null)throw Error(i(387));A.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(kl):n=[kl])}d=d.return}n!==null&&xh(a,n,o,u),a.flags|=262144}function qu(n){for(n=n.firstContext;n!==null;){if(!di(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ts(n){es=n,Ra=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Xn(n){return y_(es,n)}function Ku(n,a){return es===null&&ts(n),y_(n,a)}function y_(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Ra===null){if(n===null)throw Error(i(308));Ra=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Ra=Ra.next=a;return o}var AE=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},TE=r.unstable_scheduleCallback,bE=r.unstable_NormalPriority,En={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yh(){return{controller:new AE,data:new Map,refCount:0}}function ml(n){n.refCount--,n.refCount===0&&TE(bE,function(){n.controller.abort()})}var gl=null,Sh=0,Ks=0,Qs=null;function RE(n,a){if(gl===null){var o=gl=[];Sh=0,Ks=Ed(),Qs={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Sh++,a.then(S_,S_),a}function S_(){if(--Sh===0&&gl!==null){Qs!==null&&(Qs.status="fulfilled");var n=gl;gl=null,Ks=0,Qs=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function CE(n,a){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=a;for(var d=0;d<o.length;d++)(0,o[d])(a)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var M_=z.S;z.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&RE(n,a),M_!==null&&M_(n,a)};var ns=Z(null);function Mh(){var n=ns.current;return n!==null?n:Qt.pooledCache}function Qu(n,a){a===null?Se(ns,ns.current):Se(ns,a.pool)}function E_(){var n=Mh();return n===null?null:{parent:En._currentValue,pool:n}}var _l=Error(i(460)),A_=Error(i(474)),ju=Error(i(542)),Eh={then:function(){}};function T_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zu(){}function b_(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Zu,Zu),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,C_(n),n;default:if(typeof a.status=="string")a.then(Zu,Zu);else{if(n=Qt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(u){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=u}},function(u){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,C_(n),n}throw vl=a,_l}}var vl=null;function R_(){if(vl===null)throw Error(i(459));var n=vl;return vl=null,n}function C_(n){if(n===_l||n===ju)throw Error(i(483))}var ar=!1;function Ah(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Th(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function sr(n,a,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var d=u.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a,a=ku(n),p_(n,null,o),a}return Vu(n,u,a,o),ku(n)}function xl(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,Xe(n,o)}}function bh(n,a){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?d=g=a:g=g.next=a}else d=g=a;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Rh=!1;function yl(){if(Rh){var n=Qs;if(n!==null)throw n}}function Sl(n,a,o,u){Rh=!1;var d=n.updateQueue;ar=!1;var g=d.firstBaseUpdate,A=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var G=D,te=G.next;G.next=null,A===null?g=te:A.next=te,A=G;var de=n.alternate;de!==null&&(de=de.updateQueue,D=de.lastBaseUpdate,D!==A&&(D===null?de.firstBaseUpdate=te:D.next=te,de.lastBaseUpdate=G))}if(g!==null){var xe=d.baseState;A=0,de=te=G=null,D=g;do{var ae=D.lane&-536870913,se=ae!==D.lane;if(se?(Rt&ae)===ae:(u&ae)===ae){ae!==0&&ae===Ks&&(Rh=!0),de!==null&&(de=de.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var rt=n,nt=D;ae=a;var kt=o;switch(nt.tag){case 1:if(rt=nt.payload,typeof rt=="function"){xe=rt.call(kt,xe,ae);break e}xe=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=nt.payload,ae=typeof rt=="function"?rt.call(kt,xe,ae):rt,ae==null)break e;xe=m({},xe,ae);break e;case 2:ar=!0}}ae=D.callback,ae!==null&&(n.flags|=64,se&&(n.flags|=8192),se=d.callbacks,se===null?d.callbacks=[ae]:se.push(ae))}else se={lane:ae,tag:D.tag,payload:D.payload,callback:D.callback,next:null},de===null?(te=de=se,G=xe):de=de.next=se,A|=ae;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;se=D,D=se.next,se.next=null,d.lastBaseUpdate=se,d.shared.pending=null}}while(!0);de===null&&(G=xe),d.baseState=G,d.firstBaseUpdate=te,d.lastBaseUpdate=de,g===null&&(d.shared.lanes=0),pr|=A,n.lanes=A,n.memoizedState=xe}}function w_(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function D_(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)w_(o[n],a)}var js=Z(null),Ju=Z(0);function U_(n,a){n=Pa,Se(Ju,n),Se(js,a),Pa=n|a.baseLanes}function Ch(){Se(Ju,Pa),Se(js,js.current)}function wh(){Pa=Ju.current,pe(js),pe(Ju)}var or=0,gt=null,Gt=null,gn=null,$u=!1,Zs=!1,is=!1,ec=0,Ml=0,Js=null,wE=0;function cn(){throw Error(i(321))}function Dh(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!di(n[o],a[o]))return!1;return!0}function Uh(n,a,o,u,d,g){return or=g,gt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=n===null||n.memoizedState===null?pv:mv,is=!1,g=o(u,d),is=!1,Zs&&(g=N_(a,o,u,d)),L_(n),g}function L_(n){z.H=sc;var a=Gt!==null&&Gt.next!==null;if(or=0,gn=Gt=gt=null,$u=!1,Ml=0,Js=null,a)throw Error(i(300));n===null||Dn||(n=n.dependencies,n!==null&&qu(n)&&(Dn=!0))}function N_(n,a,o,u){gt=n;var d=0;do{if(Zs&&(Js=null),Ml=0,Zs=!1,25<=d)throw Error(i(301));if(d+=1,gn=Gt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}z.H=IE,g=a(o,u)}while(Zs);return g}function DE(){var n=z.H,a=n.useState()[0];return a=typeof a.then=="function"?El(a):a,n=n.useState()[0],(Gt!==null?Gt.memoizedState:null)!==n&&(gt.flags|=1024),a}function Lh(){var n=ec!==0;return ec=0,n}function Nh(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function Oh(n){if($u){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}$u=!1}or=0,gn=Gt=gt=null,Zs=!1,Ml=ec=0,Js=null}function ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?gt.memoizedState=gn=n:gn=gn.next=n,gn}function _n(){if(Gt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=Gt.next;var a=gn===null?gt.memoizedState:gn.next;if(a!==null)gn=a,Gt=n;else{if(n===null)throw gt.alternate===null?Error(i(467)):Error(i(310));Gt=n,n={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},gn===null?gt.memoizedState=gn=n:gn=gn.next=n}return gn}function Ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(n){var a=Ml;return Ml+=1,Js===null&&(Js=[]),n=b_(Js,n,a),a=gt,(gn===null?a.memoizedState:gn.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?pv:mv),n}function tc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return El(n);if(n.$$typeof===C)return Xn(n)}throw Error(i(438,String(n)))}function Ih(n){var a=null,o=gt.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=gt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=Ph(),gt.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),u=0;u<n;u++)o[u]=U;return a.index++,o}function wa(n,a){return typeof a=="function"?a(n):a}function nc(n){var a=_n();return Bh(a,Gt,n)}function Bh(n,a,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,g=u.pending;if(g!==null){if(d!==null){var A=d.next;d.next=g.next,g.next=A}a.baseQueue=d=g,u.pending=null}if(g=n.baseState,d===null)n.memoizedState=g;else{a=d.next;var D=A=null,G=null,te=a,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(Rt&xe)===xe:(or&xe)===xe){var ae=te.revertLane;if(ae===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Ks&&(de=!0);else if((or&ae)===ae){te=te.next,ae===Ks&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(D=G=xe,A=g):G=G.next=xe,gt.lanes|=ae,pr|=ae;xe=te.action,is&&o(g,xe),g=te.hasEagerState?te.eagerState:o(g,xe)}else ae={lane:xe,revertLane:te.revertLane,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},G===null?(D=G=ae,A=g):G=G.next=ae,gt.lanes|=xe,pr|=xe;te=te.next}while(te!==null&&te!==a);if(G===null?A=g:G.next=D,!di(g,n.memoizedState)&&(Dn=!0,de&&(o=Qs,o!==null)))throw o;n.memoizedState=g,n.baseState=A,n.baseQueue=G,u.lastRenderedState=g}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Fh(n){var a=_n(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,g=a.memoizedState;if(d!==null){o.pending=null;var A=d=d.next;do g=n(g,A.action),A=A.next;while(A!==d);di(g,a.memoizedState)||(Dn=!0),a.memoizedState=g,a.baseQueue===null&&(a.baseState=g),o.lastRenderedState=g}return[g,u]}function O_(n,a,o){var u=gt,d=_n(),g=Pt;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=a();var A=!di((Gt||d).memoizedState,o);A&&(d.memoizedState=o,Dn=!0),d=d.queue;var D=B_.bind(null,u,d,n);if(Al(2048,8,D,[n]),d.getSnapshot!==a||A||gn!==null&&gn.memoizedState.tag&1){if(u.flags|=2048,$s(9,ic(),I_.bind(null,u,d,o,a),null),Qt===null)throw Error(i(349));g||(or&124)!==0||P_(u,a,o)}return o}function P_(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=gt.updateQueue,a===null?(a=Ph(),gt.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function I_(n,a,o,u){a.value=o,a.getSnapshot=u,F_(a)&&z_(n)}function B_(n,a,o){return o(function(){F_(a)&&z_(n)})}function F_(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!di(n,o)}catch{return!0}}function z_(n){var a=Xs(n,2);a!==null&&xi(a,n,2)}function zh(n){var a=ai();if(typeof n=="function"){var o=n;if(n=o(),is){fe(!0);try{o()}finally{fe(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:n},a}function H_(n,a,o,u){return n.baseState=o,Bh(n,Gt,typeof u=="function"?u:wa)}function UE(n,a,o,u,d){if(rc(n))throw Error(i(485));if(n=a.action,n!==null){var g={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){g.listeners.push(A)}};z.T!==null?o(!0):g.isTransition=!1,u(g),o=a.pending,o===null?(g.next=a.pending=g,G_(a,g)):(g.next=o.next,a.pending=o.next=g)}}function G_(n,a){var o=a.action,u=a.payload,d=n.state;if(a.isTransition){var g=z.T,A={};z.T=A;try{var D=o(d,u),G=z.S;G!==null&&G(A,D),V_(n,a,D)}catch(te){Hh(n,a,te)}finally{z.T=g}}else try{g=o(d,u),V_(n,a,g)}catch(te){Hh(n,a,te)}}function V_(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){k_(n,a,u)},function(u){return Hh(n,a,u)}):k_(n,a,o)}function k_(n,a,o){a.status="fulfilled",a.value=o,X_(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,G_(n,o)))}function Hh(n,a,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,X_(a),a=a.next;while(a!==u)}n.action=null}function X_(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function W_(n,a){return a}function Y_(n,a){if(Pt){var o=Qt.formState;if(o!==null){e:{var u=gt;if(Pt){if(on){t:{for(var d=on,g=oa;d.nodeType!==8;){if(!g){d=null;break t}if(d=ji(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){on=ji(d.nextSibling),u=d.data==="F!";break e}}$r(u)}u=!1}u&&(a=o[0])}}return o=ai(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W_,lastRenderedState:a},o.queue=u,o=fv.bind(null,gt,u),u.dispatch=o,u=zh(!1),g=Wh.bind(null,gt,!1,u.queue),u=ai(),d={state:a,dispatch:null,action:n,pending:null},u.queue=d,o=UE.bind(null,gt,d,g,o),d.dispatch=o,u.memoizedState=n,[a,o,!1]}function q_(n){var a=_n();return K_(a,Gt,n)}function K_(n,a,o){if(a=Bh(n,a,W_)[0],n=nc(wa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=El(a)}catch(A){throw A===_l?ju:A}else u=a;a=_n();var d=a.queue,g=d.dispatch;return o!==a.memoizedState&&(gt.flags|=2048,$s(9,ic(),LE.bind(null,d,o),null)),[u,g,n]}function LE(n,a){n.action=a}function Q_(n){var a=_n(),o=Gt;if(o!==null)return K_(a,o,n);_n(),a=a.memoizedState,o=_n();var u=o.queue.dispatch;return o.memoizedState=n,[a,u,!1]}function $s(n,a,o,u){return n={tag:n,create:o,deps:u,inst:a,next:null},a=gt.updateQueue,a===null&&(a=Ph(),gt.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,a.lastEffect=n),n}function ic(){return{destroy:void 0,resource:void 0}}function j_(){return _n().memoizedState}function ac(n,a,o,u){var d=ai();u=u===void 0?null:u,gt.flags|=n,d.memoizedState=$s(1|a,ic(),o,u)}function Al(n,a,o,u){var d=_n();u=u===void 0?null:u;var g=d.memoizedState.inst;Gt!==null&&u!==null&&Dh(u,Gt.memoizedState.deps)?d.memoizedState=$s(a,g,o,u):(gt.flags|=n,d.memoizedState=$s(1|a,g,o,u))}function Z_(n,a){ac(8390656,8,n,a)}function J_(n,a){Al(2048,8,n,a)}function $_(n,a){return Al(4,2,n,a)}function ev(n,a){return Al(4,4,n,a)}function tv(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function nv(n,a,o){o=o!=null?o.concat([n]):null,Al(4,4,tv.bind(null,a,n),o)}function Gh(){}function iv(n,a){var o=_n();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&Dh(a,u[1])?u[0]:(o.memoizedState=[n,a],n)}function av(n,a){var o=_n();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&Dh(a,u[1]))return u[0];if(u=n(),is){fe(!0);try{n()}finally{fe(!1)}}return o.memoizedState=[u,a],u}function Vh(n,a,o){return o===void 0||(or&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=o0(),gt.lanes|=n,pr|=n,o)}function rv(n,a,o,u){return di(o,a)?o:js.current!==null?(n=Vh(n,o,u),di(n,a)||(Dn=!0),n):(or&42)===0?(Dn=!0,n.memoizedState=o):(n=o0(),gt.lanes|=n,pr|=n,a)}function sv(n,a,o,u,d){var g=Y.p;Y.p=g!==0&&8>g?g:8;var A=z.T,D={};z.T=D,Wh(n,!1,a,o);try{var G=d(),te=z.S;if(te!==null&&te(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=CE(G,u);Tl(n,a,de,vi(n))}else Tl(n,a,u,vi(n))}catch(xe){Tl(n,a,{then:function(){},status:"rejected",reason:xe},vi())}finally{Y.p=g,z.T=A}}function NE(){}function kh(n,a,o,u){if(n.tag!==5)throw Error(i(476));var d=ov(n).queue;sv(n,d,a,k,o===null?NE:function(){return lv(n),o(u)})}function ov(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:k},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function lv(n){var a=ov(n).next.queue;Tl(n,a,{},vi())}function Xh(){return Xn(kl)}function uv(){return _n().memoizedState}function cv(){return _n().memoizedState}function OE(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=vi();n=rr(o);var u=sr(a,n,o);u!==null&&(xi(u,a,o),xl(u,a,o)),a={cache:yh()},n.payload=a;return}a=a.return}}function PE(n,a,o){var u=vi();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rc(n)?hv(a,o):(o=ch(n,a,o,u),o!==null&&(xi(o,n,u),dv(o,a,u)))}function fv(n,a,o){var u=vi();Tl(n,a,o,u)}function Tl(n,a,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rc(n))hv(a,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=a.lastRenderedReducer,g!==null))try{var A=a.lastRenderedState,D=g(A,o);if(d.hasEagerState=!0,d.eagerState=D,di(D,A))return Vu(n,a,d,0),Qt===null&&Gu(),!1}catch{}finally{}if(o=ch(n,a,d,u),o!==null)return xi(o,n,u),dv(o,a,u),!0}return!1}function Wh(n,a,o,u){if(u={lane:2,revertLane:Ed(),action:u,hasEagerState:!1,eagerState:null,next:null},rc(n)){if(a)throw Error(i(479))}else a=ch(n,o,u,2),a!==null&&xi(a,n,2)}function rc(n){var a=n.alternate;return n===gt||a!==null&&a===gt}function hv(n,a){Zs=$u=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function dv(n,a,o){if((o&4194048)!==0){var u=a.lanes;u&=n.pendingLanes,o|=u,a.lanes=o,Xe(n,o)}}var sc={readContext:Xn,use:tc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn},pv={readContext:Xn,use:tc,useCallback:function(n,a){return ai().memoizedState=[n,a===void 0?null:a],n},useContext:Xn,useEffect:Z_,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,ac(4194308,4,tv.bind(null,a,n),o)},useLayoutEffect:function(n,a){return ac(4194308,4,n,a)},useInsertionEffect:function(n,a){ac(4,2,n,a)},useMemo:function(n,a){var o=ai();a=a===void 0?null:a;var u=n();if(is){fe(!0);try{n()}finally{fe(!1)}}return o.memoizedState=[u,a],u},useReducer:function(n,a,o){var u=ai();if(o!==void 0){var d=o(a);if(is){fe(!0);try{o(a)}finally{fe(!1)}}}else d=a;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=PE.bind(null,gt,n),[u.memoizedState,n]},useRef:function(n){var a=ai();return n={current:n},a.memoizedState=n},useState:function(n){n=zh(n);var a=n.queue,o=fv.bind(null,gt,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:Gh,useDeferredValue:function(n,a){var o=ai();return Vh(o,n,a)},useTransition:function(){var n=zh(!1);return n=sv.bind(null,gt,n.queue,!0,!1),ai().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var u=gt,d=ai();if(Pt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),Qt===null)throw Error(i(349));(Rt&124)!==0||P_(u,a,o)}d.memoizedState=o;var g={value:o,getSnapshot:a};return d.queue=g,Z_(B_.bind(null,u,g,n),[n]),u.flags|=2048,$s(9,ic(),I_.bind(null,u,g,o,a),null),o},useId:function(){var n=ai(),a=Qt.identifierPrefix;if(Pt){var o=ba,u=Ta;o=(u&~(1<<32-ze(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=ec++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=wE++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Xh,useFormState:Y_,useActionState:Y_,useOptimistic:function(n){var a=ai();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Wh.bind(null,gt,!0,o),o.dispatch=a,[n,a]},useMemoCache:Ih,useCacheRefresh:function(){return ai().memoizedState=OE.bind(null,gt)}},mv={readContext:Xn,use:tc,useCallback:iv,useContext:Xn,useEffect:J_,useImperativeHandle:nv,useInsertionEffect:$_,useLayoutEffect:ev,useMemo:av,useReducer:nc,useRef:j_,useState:function(){return nc(wa)},useDebugValue:Gh,useDeferredValue:function(n,a){var o=_n();return rv(o,Gt.memoizedState,n,a)},useTransition:function(){var n=nc(wa)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:El(n),a]},useSyncExternalStore:O_,useId:uv,useHostTransitionStatus:Xh,useFormState:q_,useActionState:q_,useOptimistic:function(n,a){var o=_n();return H_(o,Gt,n,a)},useMemoCache:Ih,useCacheRefresh:cv},IE={readContext:Xn,use:tc,useCallback:iv,useContext:Xn,useEffect:J_,useImperativeHandle:nv,useInsertionEffect:$_,useLayoutEffect:ev,useMemo:av,useReducer:Fh,useRef:j_,useState:function(){return Fh(wa)},useDebugValue:Gh,useDeferredValue:function(n,a){var o=_n();return Gt===null?Vh(o,n,a):rv(o,Gt.memoizedState,n,a)},useTransition:function(){var n=Fh(wa)[0],a=_n().memoizedState;return[typeof n=="boolean"?n:El(n),a]},useSyncExternalStore:O_,useId:uv,useHostTransitionStatus:Xh,useFormState:Q_,useActionState:Q_,useOptimistic:function(n,a){var o=_n();return Gt!==null?H_(o,Gt,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Ih,useCacheRefresh:cv},eo=null,bl=0;function oc(n){var a=bl;return bl+=1,eo===null&&(eo=[]),b_(eo,n,a)}function Rl(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function lc(n,a){throw a.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function gv(n){var a=n._init;return a(n._payload)}function _v(n){function a(Q,W){if(n){var $=Q.deletions;$===null?(Q.deletions=[W],Q.flags|=16):$.push(W)}}function o(Q,W){if(!n)return null;for(;W!==null;)a(Q,W),W=W.sibling;return null}function u(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function d(Q,W){return Q=Aa(Q,W),Q.index=0,Q.sibling=null,Q}function g(Q,W,$){return Q.index=$,n?($=Q.alternate,$!==null?($=$.index,$<W?(Q.flags|=67108866,W):$):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function A(Q){return n&&Q.alternate===null&&(Q.flags|=67108866),Q}function D(Q,W,$,me){return W===null||W.tag!==6?(W=hh($,Q.mode,me),W.return=Q,W):(W=d(W,$),W.return=Q,W)}function G(Q,W,$,me){var ke=$.type;return ke===E?de(Q,W,$.props.children,me,$.key):W!==null&&(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&gv(ke)===W.type)?(W=d(W,$.props),Rl(W,$),W.return=Q,W):(W=Xu($.type,$.key,$.props,null,Q.mode,me),Rl(W,$),W.return=Q,W)}function te(Q,W,$,me){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=dh($,Q.mode,me),W.return=Q,W):(W=d(W,$.children||[]),W.return=Q,W)}function de(Q,W,$,me,ke){return W===null||W.tag!==7?(W=Qr($,Q.mode,me,ke),W.return=Q,W):(W=d(W,$),W.return=Q,W)}function xe(Q,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=hh(""+W,Q.mode,$),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return $=Xu(W.type,W.key,W.props,null,Q.mode,$),Rl($,W),$.return=Q,$;case y:return W=dh(W,Q.mode,$),W.return=Q,W;case H:var me=W._init;return W=me(W._payload),xe(Q,W,$)}if(ee(W)||X(W))return W=Qr(W,Q.mode,$,null),W.return=Q,W;if(typeof W.then=="function")return xe(Q,oc(W),$);if(W.$$typeof===C)return xe(Q,Ku(Q,W),$);lc(Q,W)}return null}function ae(Q,W,$,me){var ke=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ke!==null?null:D(Q,W,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===ke?G(Q,W,$,me):null;case y:return $.key===ke?te(Q,W,$,me):null;case H:return ke=$._init,$=ke($._payload),ae(Q,W,$,me)}if(ee($)||X($))return ke!==null?null:de(Q,W,$,me,null);if(typeof $.then=="function")return ae(Q,W,oc($),me);if($.$$typeof===C)return ae(Q,W,Ku(Q,$),me);lc(Q,$)}return null}function se(Q,W,$,me,ke){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return Q=Q.get($)||null,D(W,Q,""+me,ke);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case v:return Q=Q.get(me.key===null?$:me.key)||null,G(W,Q,me,ke);case y:return Q=Q.get(me.key===null?$:me.key)||null,te(W,Q,me,ke);case H:var _t=me._init;return me=_t(me._payload),se(Q,W,$,me,ke)}if(ee(me)||X(me))return Q=Q.get($)||null,de(W,Q,me,ke,null);if(typeof me.then=="function")return se(Q,W,$,oc(me),ke);if(me.$$typeof===C)return se(Q,W,$,Ku(W,me),ke);lc(W,me)}return null}function rt(Q,W,$,me){for(var ke=null,_t=null,Ze=W,at=W=0,Ln=null;Ze!==null&&at<$.length;at++){Ze.index>at?(Ln=Ze,Ze=null):Ln=Ze.sibling;var Ut=ae(Q,Ze,$[at],me);if(Ut===null){Ze===null&&(Ze=Ln);break}n&&Ze&&Ut.alternate===null&&a(Q,Ze),W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut,Ze=Ln}if(at===$.length)return o(Q,Ze),Pt&&Zr(Q,at),ke;if(Ze===null){for(;at<$.length;at++)Ze=xe(Q,$[at],me),Ze!==null&&(W=g(Ze,W,at),_t===null?ke=Ze:_t.sibling=Ze,_t=Ze);return Pt&&Zr(Q,at),ke}for(Ze=u(Ze);at<$.length;at++)Ln=se(Ze,Q,at,$[at],me),Ln!==null&&(n&&Ln.alternate!==null&&Ze.delete(Ln.key===null?at:Ln.key),W=g(Ln,W,at),_t===null?ke=Ln:_t.sibling=Ln,_t=Ln);return n&&Ze.forEach(function(Er){return a(Q,Er)}),Pt&&Zr(Q,at),ke}function nt(Q,W,$,me){if($==null)throw Error(i(151));for(var ke=null,_t=null,Ze=W,at=W=0,Ln=null,Ut=$.next();Ze!==null&&!Ut.done;at++,Ut=$.next()){Ze.index>at?(Ln=Ze,Ze=null):Ln=Ze.sibling;var Er=ae(Q,Ze,Ut.value,me);if(Er===null){Ze===null&&(Ze=Ln);break}n&&Ze&&Er.alternate===null&&a(Q,Ze),W=g(Er,W,at),_t===null?ke=Er:_t.sibling=Er,_t=Er,Ze=Ln}if(Ut.done)return o(Q,Ze),Pt&&Zr(Q,at),ke;if(Ze===null){for(;!Ut.done;at++,Ut=$.next())Ut=xe(Q,Ut.value,me),Ut!==null&&(W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut);return Pt&&Zr(Q,at),ke}for(Ze=u(Ze);!Ut.done;at++,Ut=$.next())Ut=se(Ze,Q,at,Ut.value,me),Ut!==null&&(n&&Ut.alternate!==null&&Ze.delete(Ut.key===null?at:Ut.key),W=g(Ut,W,at),_t===null?ke=Ut:_t.sibling=Ut,_t=Ut);return n&&Ze.forEach(function(BA){return a(Q,BA)}),Pt&&Zr(Q,at),ke}function kt(Q,W,$,me){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:e:{for(var ke=$.key;W!==null;){if(W.key===ke){if(ke=$.type,ke===E){if(W.tag===7){o(Q,W.sibling),me=d(W,$.props.children),me.return=Q,Q=me;break e}}else if(W.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&gv(ke)===W.type){o(Q,W.sibling),me=d(W,$.props),Rl(me,$),me.return=Q,Q=me;break e}o(Q,W);break}else a(Q,W);W=W.sibling}$.type===E?(me=Qr($.props.children,Q.mode,me,$.key),me.return=Q,Q=me):(me=Xu($.type,$.key,$.props,null,Q.mode,me),Rl(me,$),me.return=Q,Q=me)}return A(Q);case y:e:{for(ke=$.key;W!==null;){if(W.key===ke)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(Q,W.sibling),me=d(W,$.children||[]),me.return=Q,Q=me;break e}else{o(Q,W);break}else a(Q,W);W=W.sibling}me=dh($,Q.mode,me),me.return=Q,Q=me}return A(Q);case H:return ke=$._init,$=ke($._payload),kt(Q,W,$,me)}if(ee($))return rt(Q,W,$,me);if(X($)){if(ke=X($),typeof ke!="function")throw Error(i(150));return $=ke.call($),nt(Q,W,$,me)}if(typeof $.then=="function")return kt(Q,W,oc($),me);if($.$$typeof===C)return kt(Q,W,Ku(Q,$),me);lc(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(o(Q,W.sibling),me=d(W,$),me.return=Q,Q=me):(o(Q,W),me=hh($,Q.mode,me),me.return=Q,Q=me),A(Q)):o(Q,W)}return function(Q,W,$,me){try{bl=0;var ke=kt(Q,W,$,me);return eo=null,ke}catch(Ze){if(Ze===_l||Ze===ju)throw Ze;var _t=pi(29,Ze,null,Q.mode);return _t.lanes=me,_t.return=Q,_t}finally{}}}var to=_v(!0),vv=_v(!1),Pi=Z(null),la=null;function lr(n){var a=n.alternate;Se(An,An.current&1),Se(Pi,n),la===null&&(a===null||js.current!==null||a.memoizedState!==null)&&(la=n)}function xv(n){if(n.tag===22){if(Se(An,An.current),Se(Pi,n),la===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(la=n)}}else ur()}function ur(){Se(An,An.current),Se(Pi,Pi.current)}function Da(n){pe(Pi),la===n&&(la=null),pe(An)}var An=Z(0);function uc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Pd(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Yh(n,a,o,u){a=n.memoizedState,o=o(u,a),o=o==null?a:m({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var qh={enqueueSetState:function(n,a,o){n=n._reactInternals;var u=vi(),d=rr(u);d.payload=a,o!=null&&(d.callback=o),a=sr(n,d,u),a!==null&&(xi(a,n,u),xl(a,n,u))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var u=vi(),d=rr(u);d.tag=1,d.payload=a,o!=null&&(d.callback=o),a=sr(n,d,u),a!==null&&(xi(a,n,u),xl(a,n,u))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=vi(),u=rr(o);u.tag=2,a!=null&&(u.callback=a),a=sr(n,u,o),a!==null&&(xi(a,n,o),xl(a,n,o))}};function yv(n,a,o,u,d,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,A):a.prototype&&a.prototype.isPureReactComponent?!ul(o,u)||!ul(d,g):!0}function Sv(n,a,o,u){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==n&&qh.enqueueReplaceState(a,a.state,null)}function as(n,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(n=n.defaultProps){o===a&&(o=m({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var cc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Mv(n){cc(n)}function Ev(n){console.error(n)}function Av(n){cc(n)}function fc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function Tv(n,a,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Kh(n,a,o){return o=rr(o),o.tag=3,o.payload={element:null},o.callback=function(){fc(n,a)},o}function bv(n){return n=rr(n),n.tag=3,n}function Rv(n,a,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=u.value;n.payload=function(){return d(g)},n.callback=function(){Tv(a,o,u)}}var A=o.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(n.callback=function(){Tv(a,o,u),typeof d!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function BE(n,a,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&pl(a,o,d,!0),o=Pi.current,o!==null){switch(o.tag){case 13:return la===null?vd():o.alternate===null&&ln===0&&(ln=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Eh?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),yd(n,u,d)),!1;case 22:return o.flags|=65536,u===Eh?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),yd(n,u,d)),!1}throw Error(i(435,o.tag))}return yd(n,u,d),vd(),!1}if(Pt)return a=Pi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,u!==gh&&(n=Error(i(422),{cause:u}),dl(Ui(n,o)))):(u!==gh&&(a=Error(i(423),{cause:u}),dl(Ui(a,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Ui(u,o),d=Kh(n.stateNode,u,d),bh(n,d),ln!==4&&(ln=2)),!1;var g=Error(i(520),{cause:u});if(g=Ui(g,o),Ol===null?Ol=[g]:Ol.push(g),ln!==4&&(ln=2),a===null)return!0;u=Ui(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=Kh(o.stateNode,u,n),bh(o,n),!1;case 1:if(a=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(mr===null||!mr.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=bv(d),Rv(d,n,o,u),bh(o,d),!1}o=o.return}while(o!==null);return!1}var Cv=Error(i(461)),Dn=!1;function Bn(n,a,o,u){a.child=n===null?vv(a,null,o,u):to(a,n.child,o,u)}function wv(n,a,o,u,d){o=o.render;var g=a.ref;if("ref"in u){var A={};for(var D in u)D!=="ref"&&(A[D]=u[D])}else A=u;return ts(a),u=Uh(n,a,o,A,g,d),D=Lh(),n!==null&&!Dn?(Nh(n,a,d),Ua(n,a,d)):(Pt&&D&&ph(a),a.flags|=1,Bn(n,a,u,d),a.child)}function Dv(n,a,o,u,d){if(n===null){var g=o.type;return typeof g=="function"&&!fh(g)&&g.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=g,Uv(n,a,g,u,d)):(n=Xu(o.type,null,u,a,a.mode,d),n.ref=a.ref,n.return=a,a.child=n)}if(g=n.child,!nd(n,d)){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:ul,o(A,u)&&n.ref===a.ref)return Ua(n,a,d)}return a.flags|=1,n=Aa(g,u),n.ref=a.ref,n.return=a,a.child=n}function Uv(n,a,o,u,d){if(n!==null){var g=n.memoizedProps;if(ul(g,u)&&n.ref===a.ref)if(Dn=!1,a.pendingProps=u=g,nd(n,d))(n.flags&131072)!==0&&(Dn=!0);else return a.lanes=n.lanes,Ua(n,a,d)}return Qh(n,a,o,u,d)}function Lv(n,a,o){var u=a.pendingProps,d=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,n!==null){for(d=a.child=n.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;a.childLanes=g&~u}else a.childLanes=0,a.child=null;return Nv(n,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Qu(a,g!==null?g.cachePool:null),g!==null?U_(a,g):Ch(),xv(a);else return a.lanes=a.childLanes=536870912,Nv(n,a,g!==null?g.baseLanes|o:o,o)}else g!==null?(Qu(a,g.cachePool),U_(a,g),ur(),a.memoizedState=null):(n!==null&&Qu(a,null),Ch(),ur());return Bn(n,a,d,o),a.child}function Nv(n,a,o,u){var d=Mh();return d=d===null?null:{parent:En._currentValue,pool:d},a.memoizedState={baseLanes:o,cachePool:d},n!==null&&Qu(a,null),Ch(),xv(a),n!==null&&pl(n,a,u,!0),null}function hc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function Qh(n,a,o,u,d){return ts(a),o=Uh(n,a,o,u,void 0,d),u=Lh(),n!==null&&!Dn?(Nh(n,a,d),Ua(n,a,d)):(Pt&&u&&ph(a),a.flags|=1,Bn(n,a,o,d),a.child)}function Ov(n,a,o,u,d,g){return ts(a),a.updateQueue=null,o=N_(a,u,o,d),L_(n),u=Lh(),n!==null&&!Dn?(Nh(n,a,g),Ua(n,a,g)):(Pt&&u&&ph(a),a.flags|=1,Bn(n,a,o,g),a.child)}function Pv(n,a,o,u,d){if(ts(a),a.stateNode===null){var g=Ws,A=o.contextType;typeof A=="object"&&A!==null&&(g=Xn(A)),g=new o(u,g),a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=qh,a.stateNode=g,g._reactInternals=a,g=a.stateNode,g.props=u,g.state=a.memoizedState,g.refs={},Ah(a),A=o.contextType,g.context=typeof A=="object"&&A!==null?Xn(A):Ws,g.state=a.memoizedState,A=o.getDerivedStateFromProps,typeof A=="function"&&(Yh(a,o,A,u),g.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(A=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),A!==g.state&&qh.enqueueReplaceState(g,g.state,null),Sl(a,u,g,d),yl(),g.state=a.memoizedState),typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(n===null){g=a.stateNode;var D=a.memoizedProps,G=as(o,D);g.props=G;var te=g.context,de=o.contextType;A=Ws,typeof de=="object"&&de!==null&&(A=Xn(de));var xe=o.getDerivedStateFromProps;de=typeof xe=="function"||typeof g.getSnapshotBeforeUpdate=="function",D=a.pendingProps!==D,de||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(D||te!==A)&&Sv(a,g,u,A),ar=!1;var ae=a.memoizedState;g.state=ae,Sl(a,u,g,d),yl(),te=a.memoizedState,D||ae!==te||ar?(typeof xe=="function"&&(Yh(a,o,xe,u),te=a.memoizedState),(G=ar||yv(a,o,G,u,ae,te,A))?(de||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(a.flags|=4194308)):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=te),g.props=u,g.state=te,g.context=A,u=G):(typeof g.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{g=a.stateNode,Th(n,a),A=a.memoizedProps,de=as(o,A),g.props=de,xe=a.pendingProps,ae=g.context,te=o.contextType,G=Ws,typeof te=="object"&&te!==null&&(G=Xn(te)),D=o.getDerivedStateFromProps,(te=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A!==xe||ae!==G)&&Sv(a,g,u,G),ar=!1,ae=a.memoizedState,g.state=ae,Sl(a,u,g,d),yl();var se=a.memoizedState;A!==xe||ae!==se||ar||n!==null&&n.dependencies!==null&&qu(n.dependencies)?(typeof D=="function"&&(Yh(a,o,D,u),se=a.memoizedState),(de=ar||yv(a,o,de,u,ae,se,G)||n!==null&&n.dependencies!==null&&qu(n.dependencies))?(te||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,se,G),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,se,G)),typeof g.componentDidUpdate=="function"&&(a.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof g.componentDidUpdate!="function"||A===n.memoizedProps&&ae===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ae===n.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=se),g.props=u,g.state=se,g.context=G,u=de):(typeof g.componentDidUpdate!="function"||A===n.memoizedProps&&ae===n.memoizedState||(a.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||A===n.memoizedProps&&ae===n.memoizedState||(a.flags|=1024),u=!1)}return g=u,hc(n,a),u=(a.flags&128)!==0,g||u?(g=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),a.flags|=1,n!==null&&u?(a.child=to(a,n.child,null,d),a.child=to(a,null,o,d)):Bn(n,a,o,d),a.memoizedState=g.state,n=a.child):n=Ua(n,a,d),n}function Iv(n,a,o,u){return hl(),a.flags|=256,Bn(n,a,o,u),a.child}var jh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zh(n){return{baseLanes:n,cachePool:E_()}}function Jh(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Ii),n}function Bv(n,a,o){var u=a.pendingProps,d=!1,g=(a.flags&128)!==0,A;if((A=g)||(A=n!==null&&n.memoizedState===null?!1:(An.current&2)!==0),A&&(d=!0,a.flags&=-129),A=(a.flags&32)!==0,a.flags&=-33,n===null){if(Pt){if(d?lr(a):ur(),Pt){var D=on,G;if(G=D){e:{for(G=D,D=oa;G.nodeType!==8;){if(!D){D=null;break e}if(G=ji(G.nextSibling),G===null){D=null;break e}}D=G}D!==null?(a.memoizedState={dehydrated:D,treeContext:jr!==null?{id:Ta,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},G=pi(18,null,null,0),G.stateNode=D,G.return=a,a.child=G,$n=a,on=null,G=!0):G=!1}G||$r(a)}if(D=a.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return Pd(D)?a.lanes=32:a.lanes=536870912,null;Da(a)}return D=u.children,u=u.fallback,d?(ur(),d=a.mode,D=dc({mode:"hidden",children:D},d),u=Qr(u,d,o,null),D.return=a,u.return=a,D.sibling=u,a.child=D,d=a.child,d.memoizedState=Zh(o),d.childLanes=Jh(n,A,o),a.memoizedState=jh,u):(lr(a),$h(a,D))}if(G=n.memoizedState,G!==null&&(D=G.dehydrated,D!==null)){if(g)a.flags&256?(lr(a),a.flags&=-257,a=ed(n,a,o)):a.memoizedState!==null?(ur(),a.child=n.child,a.flags|=128,a=null):(ur(),d=u.fallback,D=a.mode,u=dc({mode:"visible",children:u.children},D),d=Qr(d,D,o,null),d.flags|=2,u.return=a,d.return=a,u.sibling=d,a.child=u,to(a,n.child,null,o),u=a.child,u.memoizedState=Zh(o),u.childLanes=Jh(n,A,o),a.memoizedState=jh,a=d);else if(lr(a),Pd(D)){if(A=D.nextSibling&&D.nextSibling.dataset,A)var te=A.dgst;A=te,u=Error(i(419)),u.stack="",u.digest=A,dl({value:u,source:null,stack:null}),a=ed(n,a,o)}else if(Dn||pl(n,a,o,!1),A=(o&n.childLanes)!==0,Dn||A){if(A=Qt,A!==null&&(u=o&-o,u=(u&42)!==0?1:ot(u),u=(u&(A.suspendedLanes|o))!==0?0:u,u!==0&&u!==G.retryLane))throw G.retryLane=u,Xs(n,u),xi(A,n,u),Cv;D.data==="$?"||vd(),a=ed(n,a,o)}else D.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=G.treeContext,on=ji(D.nextSibling),$n=a,Pt=!0,Jr=null,oa=!1,n!==null&&(Ni[Oi++]=Ta,Ni[Oi++]=ba,Ni[Oi++]=jr,Ta=n.id,ba=n.overflow,jr=a),a=$h(a,u.children),a.flags|=4096);return a}return d?(ur(),d=u.fallback,D=a.mode,G=n.child,te=G.sibling,u=Aa(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,te!==null?d=Aa(te,d):(d=Qr(d,D,o,null),d.flags|=2),d.return=a,u.return=a,u.sibling=d,a.child=u,u=d,d=a.child,D=n.child.memoizedState,D===null?D=Zh(o):(G=D.cachePool,G!==null?(te=En._currentValue,G=G.parent!==te?{parent:te,pool:te}:G):G=E_(),D={baseLanes:D.baseLanes|o,cachePool:G}),d.memoizedState=D,d.childLanes=Jh(n,A,o),a.memoizedState=jh,u):(lr(a),o=n.child,n=o.sibling,o=Aa(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,n!==null&&(A=a.deletions,A===null?(a.deletions=[n],a.flags|=16):A.push(n)),a.child=o,a.memoizedState=null,o)}function $h(n,a){return a=dc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function dc(n,a){return n=pi(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function ed(n,a,o){return to(a,n.child,null,o),n=$h(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function Fv(n,a,o){n.lanes|=a;var u=n.alternate;u!==null&&(u.lanes|=a),vh(n.return,a,o)}function td(n,a,o,u,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=a,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function zv(n,a,o){var u=a.pendingProps,d=u.revealOrder,g=u.tail;if(Bn(n,a,u.children,o),u=An.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fv(n,o,a);else if(n.tag===19)Fv(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Se(An,u),d){case"forwards":for(o=a.child,d=null;o!==null;)n=o.alternate,n!==null&&uc(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=a.child,a.child=null):(d=o.sibling,o.sibling=null),td(a,!1,d,o,g);break;case"backwards":for(o=null,d=a.child,a.child=null;d!==null;){if(n=d.alternate,n!==null&&uc(n)===null){a.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}td(a,!0,o,null,g);break;case"together":td(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ua(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),pr|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(pl(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Aa(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Aa(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function nd(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&qu(n)))}function FE(n,a,o){switch(a.tag){case 3:Re(a,a.stateNode.containerInfo),ir(a,En,n.memoizedState.cache),hl();break;case 27:case 5:Ye(a);break;case 4:Re(a,a.stateNode.containerInfo);break;case 10:ir(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(lr(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Bv(n,a,o):(lr(a),n=Ua(n,a,o),n!==null?n.sibling:null);lr(a);break;case 19:var d=(n.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(pl(n,a,o,!1),u=(o&a.childLanes)!==0),d){if(u)return zv(n,a,o);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(An,An.current),u)break;return null;case 22:case 23:return a.lanes=0,Lv(n,a,o);case 24:ir(a,En,n.memoizedState.cache)}return Ua(n,a,o)}function Hv(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Dn=!0;else{if(!nd(n,o)&&(a.flags&128)===0)return Dn=!1,FE(n,a,o);Dn=(n.flags&131072)!==0}else Dn=!1,Pt&&(a.flags&1048576)!==0&&g_(a,Yu,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var u=a.elementType,d=u._init;if(u=d(u._payload),a.type=u,typeof u=="function")fh(u)?(n=as(u,n),a.tag=1,a=Pv(null,a,u,n,o)):(a.tag=0,a=Qh(null,a,u,n,o));else{if(u!=null){if(d=u.$$typeof,d===b){a.tag=11,a=wv(null,a,u,n,o);break e}else if(d===I){a.tag=14,a=Dv(null,a,u,n,o);break e}}throw a=re(u)||u,Error(i(306,a,""))}}return a;case 0:return Qh(n,a,a.type,a.pendingProps,o);case 1:return u=a.type,d=as(u,a.pendingProps),Pv(n,a,u,d,o);case 3:e:{if(Re(a,a.stateNode.containerInfo),n===null)throw Error(i(387));u=a.pendingProps;var g=a.memoizedState;d=g.element,Th(n,a),Sl(a,u,null,o);var A=a.memoizedState;if(u=A.cache,ir(a,En,u),u!==g.cache&&xh(a,[En],o,!0),yl(),u=A.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:A.cache},a.updateQueue.baseState=g,a.memoizedState=g,a.flags&256){a=Iv(n,a,u,o);break e}else if(u!==d){d=Ui(Error(i(424)),a),dl(d),a=Iv(n,a,u,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(on=ji(n.firstChild),$n=a,Pt=!0,Jr=null,oa=!0,o=vv(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(hl(),u===d){a=Ua(n,a,o);break e}Bn(n,a,u,o)}a=a.child}return a;case 26:return hc(n,a),n===null?(o=X0(a.type,null,a.pendingProps,null))?a.memoizedState=o:Pt||(o=a.type,n=a.pendingProps,u=Rc(ne.current).createElement(o),u[Mn]=a,u[rn]=n,zn(u,o,n),mn(u),a.stateNode=u):a.memoizedState=X0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Ye(a),n===null&&Pt&&(u=a.stateNode=G0(a.type,a.pendingProps,ne.current),$n=a,oa=!0,d=on,vr(a.type)?(Id=d,on=ji(u.firstChild)):on=d),Bn(n,a,a.pendingProps.children,o),hc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Pt&&((d=u=on)&&(u=hA(u,a.type,a.pendingProps,oa),u!==null?(a.stateNode=u,$n=a,on=ji(u.firstChild),oa=!1,d=!0):d=!1),d||$r(a)),Ye(a),d=a.type,g=a.pendingProps,A=n!==null?n.memoizedProps:null,u=g.children,Ld(d,g)?u=null:A!==null&&Ld(d,A)&&(a.flags|=32),a.memoizedState!==null&&(d=Uh(n,a,DE,null,null,o),kl._currentValue=d),hc(n,a),Bn(n,a,u,o),a.child;case 6:return n===null&&Pt&&((n=o=on)&&(o=dA(o,a.pendingProps,oa),o!==null?(a.stateNode=o,$n=a,on=null,n=!0):n=!1),n||$r(a)),null;case 13:return Bv(n,a,o);case 4:return Re(a,a.stateNode.containerInfo),u=a.pendingProps,n===null?a.child=to(a,null,u,o):Bn(n,a,u,o),a.child;case 11:return wv(n,a,a.type,a.pendingProps,o);case 7:return Bn(n,a,a.pendingProps,o),a.child;case 8:return Bn(n,a,a.pendingProps.children,o),a.child;case 12:return Bn(n,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,ir(a,a.type,u.value),Bn(n,a,u.children,o),a.child;case 9:return d=a.type._context,u=a.pendingProps.children,ts(a),d=Xn(d),u=u(d),a.flags|=1,Bn(n,a,u,o),a.child;case 14:return Dv(n,a,a.type,a.pendingProps,o);case 15:return Uv(n,a,a.type,a.pendingProps,o);case 19:return zv(n,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},n===null?(o=dc(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=Aa(n.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return Lv(n,a,o);case 24:return ts(a),u=Xn(En),n===null?(d=Mh(),d===null&&(d=Qt,g=yh(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),a.memoizedState={parent:u,cache:d},Ah(a),ir(a,En,d)):((n.lanes&o)!==0&&(Th(n,a),Sl(a,null,null,o),yl()),d=n.memoizedState,g=a.memoizedState,d.parent!==u?(d={parent:u,cache:u},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),ir(a,En,u)):(u=g.cache,ir(a,En,u),u!==d.cache&&xh(a,[En],o,!0))),Bn(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function La(n){n.flags|=4}function Gv(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Q0(a)){if(a=Pi.current,a!==null&&((Rt&4194048)===Rt?la!==null:(Rt&62914560)!==Rt&&(Rt&536870912)===0||a!==la))throw vl=Eh,A_;n.flags|=8192}}function pc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Te():536870912,n.lanes|=a,ro|=a)}function Cl(n,a){if(!Pt)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function en(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(a)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,a}function zE(n,a,o){var u=a.pendingProps;switch(mh(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(a),null;case 1:return en(a),null;case 3:return o=a.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),Ca(En),je(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(fl(a)?La(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,x_())),en(a),null;case 26:return o=a.memoizedState,n===null?(La(a),o!==null?(en(a),Gv(a,o)):(en(a),a.flags&=-16777217)):o?o!==n.memoizedState?(La(a),en(a),Gv(a,o)):(en(a),a.flags&=-16777217):(n.memoizedProps!==u&&La(a),en(a),a.flags&=-16777217),null;case 27:ct(a),o=ne.current;var d=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==u&&La(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return en(a),null}n=be.current,fl(a)?__(a):(n=G0(d,u,o),a.stateNode=n,La(a))}return en(a),null;case 5:if(ct(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==u&&La(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return en(a),null}if(n=be.current,fl(a))__(a);else{switch(d=Rc(ne.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}n[Mn]=a,n[rn]=u;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=n;e:switch(zn(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&La(a)}}return en(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==u&&La(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(n=ne.current,fl(a)){if(n=a.stateNode,o=a.memoizedProps,u=null,d=$n,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[Mn]=a,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||O0(n.nodeValue,o)),n||$r(a)}else n=Rc(n).createTextNode(u),n[Mn]=a,a.stateNode=n}return en(a),null;case 13:if(u=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=fl(a),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Mn]=a}else hl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;en(a),d=!1}else d=x_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(Da(a),a):(Da(a),null)}if(Da(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=a.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==d&&(u.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),pc(a,a.updateQueue),en(a),null;case 4:return je(),n===null&&Rd(a.stateNode.containerInfo),en(a),null;case 10:return Ca(a.type),en(a),null;case 19:if(pe(An),d=a.memoizedState,d===null)return en(a),null;if(u=(a.flags&128)!==0,g=d.rendering,g===null)if(u)Cl(d,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(g=uc(n),g!==null){for(a.flags|=128,Cl(d,!1),n=g.updateQueue,a.updateQueue=n,pc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)m_(o,n),o=o.sibling;return Se(An,An.current&1|2),a.child}n=n.sibling}d.tail!==null&&Ie()>_c&&(a.flags|=128,u=!0,Cl(d,!1),a.lanes=4194304)}else{if(!u)if(n=uc(g),n!==null){if(a.flags|=128,u=!0,n=n.updateQueue,a.updateQueue=n,pc(a,n),Cl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Pt)return en(a),null}else 2*Ie()-d.renderingStartTime>_c&&o!==536870912&&(a.flags|=128,u=!0,Cl(d,!1),a.lanes=4194304);d.isBackwards?(g.sibling=a.child,a.child=g):(n=d.last,n!==null?n.sibling=g:a.child=g,d.last=g)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=Ie(),a.sibling=null,n=An.current,Se(An,u?n&1|2:n&1),a):(en(a),null);case 22:case 23:return Da(a),wh(),u=a.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(en(a),a.subtreeFlags&6&&(a.flags|=8192)):en(a),o=a.updateQueue,o!==null&&pc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),n!==null&&pe(ns),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Ca(En),en(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function HE(n,a){switch(mh(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Ca(En),je(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return ct(a),null;case 13:if(Da(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));hl()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return pe(An),null;case 4:return je(),null;case 10:return Ca(a.type),null;case 22:case 23:return Da(a),wh(),n!==null&&pe(ns),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Ca(En),null;case 25:return null;default:return null}}function Vv(n,a){switch(mh(a),a.tag){case 3:Ca(En),je();break;case 26:case 27:case 5:ct(a);break;case 4:je();break;case 13:Da(a);break;case 19:pe(An);break;case 10:Ca(a.type);break;case 22:case 23:Da(a),wh(),n!==null&&pe(ns);break;case 24:Ca(En)}}function wl(n,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var g=o.create,A=o.inst;u=g(),A.destroy=u}o=o.next}while(o!==d)}}catch(D){Yt(a,a.return,D)}}function cr(n,a,o){try{var u=a.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var g=d.next;u=g;do{if((u.tag&n)===n){var A=u.inst,D=A.destroy;if(D!==void 0){A.destroy=void 0,d=a;var G=o,te=D;try{te()}catch(de){Yt(d,G,de)}}}u=u.next}while(u!==g)}}catch(de){Yt(a,a.return,de)}}function kv(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{D_(a,o)}catch(u){Yt(n,n.return,u)}}}function Xv(n,a,o){o.props=as(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Yt(n,a,u)}}function Dl(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Yt(n,a,d)}}function ua(n,a){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Yt(n,a,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Yt(n,a,d)}else o.current=null}function Wv(n){var a=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Yt(n,n.return,d)}}function id(n,a,o){try{var u=n.stateNode;oA(u,n.type,o,a),u[rn]=a}catch(d){Yt(n,n.return,d)}}function Yv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&vr(n.type)||n.tag===4}function ad(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&vr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=bc));else if(u!==4&&(u===27&&vr(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(rd(n,a,o),n=n.sibling;n!==null;)rd(n,a,o),n=n.sibling}function mc(n,a,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(u!==4&&(u===27&&vr(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(mc(n,a,o),n=n.sibling;n!==null;)mc(n,a,o),n=n.sibling}function qv(n){var a=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);zn(a,u,o),a[Mn]=n,a[rn]=o}catch(g){Yt(n,n.return,g)}}var Na=!1,fn=!1,sd=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,Un=null;function GE(n,a){if(n=n.containerInfo,Dd=Nc,n=r_(n),ah(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,D=-1,G=-1,te=0,de=0,xe=n,ae=null;t:for(;;){for(var se;xe!==o||d!==0&&xe.nodeType!==3||(D=A+d),xe!==g||u!==0&&xe.nodeType!==3||(G=A+u),xe.nodeType===3&&(A+=xe.nodeValue.length),(se=xe.firstChild)!==null;)ae=xe,xe=se;for(;;){if(xe===n)break t;if(ae===o&&++te===d&&(D=A),ae===g&&++de===u&&(G=A),(se=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=se}o=D===-1||G===-1?null:{start:D,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ud={focusedElem:n,selectionRange:o},Nc=!1,Un=a;Un!==null;)if(a=Un,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Un=n;else for(;Un!==null;){switch(a=Un,g=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=a,d=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var rt=as(o.type,d,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(rt,g),u.__reactInternalSnapshotBeforeUpdate=n}catch(nt){Yt(o,o.return,nt)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)Od(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Od(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Un=n;break}Un=a.return}}function Qv(n,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:fr(n,o),u&4&&wl(5,o);break;case 1:if(fr(n,o),u&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(A){Yt(o,o.return,A)}else{var d=as(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(d,a,n.__reactInternalSnapshotBeforeUpdate)}catch(A){Yt(o,o.return,A)}}u&64&&kv(o),u&512&&Dl(o,o.return);break;case 3:if(fr(n,o),u&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{D_(n,a)}catch(A){Yt(o,o.return,A)}}break;case 27:a===null&&u&4&&qv(o);case 26:case 5:fr(n,o),a===null&&u&4&&Wv(o),u&512&&Dl(o,o.return);break;case 12:fr(n,o);break;case 13:fr(n,o),u&4&&Jv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=jE.bind(null,o),pA(n,o))));break;case 22:if(u=o.memoizedState!==null||Na,!u){a=a!==null&&a.memoizedState!==null||fn,d=Na;var g=fn;Na=u,(fn=a)&&!g?hr(n,o,(o.subtreeFlags&8772)!==0):fr(n,o),Na=d,fn=g}break;case 30:break;default:fr(n,o)}}function jv(n){var a=n.alternate;a!==null&&(n.alternate=null,jv(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&Is(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Jt=null,ri=!1;function Oa(n,a,o){for(o=o.child;o!==null;)Zv(n,a,o),o=o.sibling}function Zv(n,a,o){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(he,o)}catch{}switch(o.tag){case 26:fn||ua(o,a),Oa(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:fn||ua(o,a);var u=Jt,d=ri;vr(o.type)&&(Jt=o.stateNode,ri=!1),Oa(n,a,o),zl(o.stateNode),Jt=u,ri=d;break;case 5:fn||ua(o,a);case 6:if(u=Jt,d=ri,Jt=null,Oa(n,a,o),Jt=u,ri=d,Jt!==null)if(ri)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(o.stateNode)}catch(g){Yt(o,a,g)}else try{Jt.removeChild(o.stateNode)}catch(g){Yt(o,a,g)}break;case 18:Jt!==null&&(ri?(n=Jt,z0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),ql(n)):z0(Jt,o.stateNode));break;case 4:u=Jt,d=ri,Jt=o.stateNode.containerInfo,ri=!0,Oa(n,a,o),Jt=u,ri=d;break;case 0:case 11:case 14:case 15:fn||cr(2,o,a),fn||cr(4,o,a),Oa(n,a,o);break;case 1:fn||(ua(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Xv(o,a,u)),Oa(n,a,o);break;case 21:Oa(n,a,o);break;case 22:fn=(u=fn)||o.memoizedState!==null,Oa(n,a,o),fn=u;break;default:Oa(n,a,o)}}function Jv(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ql(n)}catch(o){Yt(a,a.return,o)}}function VE(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Kv),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Kv),a;default:throw Error(i(435,n.tag))}}function od(n,a){var o=VE(n);a.forEach(function(u){var d=ZE.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}function mi(n,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],g=n,A=a,D=A;e:for(;D!==null;){switch(D.tag){case 27:if(vr(D.type)){Jt=D.stateNode,ri=!1;break e}break;case 5:Jt=D.stateNode,ri=!1;break e;case 3:case 4:Jt=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(Jt===null)throw Error(i(160));Zv(g,A,d),Jt=null,ri=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)$v(a,n),a=a.sibling}var Qi=null;function $v(n,a){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:mi(a,n),gi(n),u&4&&(cr(3,n,n.return),wl(3,n),cr(5,n,n.return));break;case 1:mi(a,n),gi(n),u&512&&(fn||o===null||ua(o,o.return)),u&64&&Na&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Qi;if(mi(a,n),gi(n),u&512&&(fn||o===null||ua(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":g=d.getElementsByTagName("title")[0],(!g||g[sa]||g[Mn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(u),d.head.insertBefore(g,d.querySelector("head > title"))),zn(g,u,o),g[Mn]=n,mn(g),u=g;break e;case"link":var A=q0("link","href",d).get(u+(o.href||""));if(A){for(var D=0;D<A.length;D++)if(g=A[D],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){A.splice(D,1);break t}}g=d.createElement(u),zn(g,u,o),d.head.appendChild(g);break;case"meta":if(A=q0("meta","content",d).get(u+(o.content||""))){for(D=0;D<A.length;D++)if(g=A[D],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){A.splice(D,1);break t}}g=d.createElement(u),zn(g,u,o),d.head.appendChild(g);break;default:throw Error(i(468,u))}g[Mn]=n,mn(g),u=g}n.stateNode=u}else K0(d,n.type,n.stateNode);else n.stateNode=Y0(d,u,n.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?K0(d,n.type,n.stateNode):Y0(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&id(n,n.memoizedProps,o.memoizedProps)}break;case 27:mi(a,n),gi(n),u&512&&(fn||o===null||ua(o,o.return)),o!==null&&u&4&&id(n,n.memoizedProps,o.memoizedProps);break;case 5:if(mi(a,n),gi(n),u&512&&(fn||o===null||ua(o,o.return)),n.flags&32){d=n.stateNode;try{ni(d,"")}catch(se){Yt(n,n.return,se)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,id(n,d,o!==null?o.memoizedProps:d)),u&1024&&(sd=!0);break;case 6:if(mi(a,n),gi(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(se){Yt(n,n.return,se)}}break;case 3:if(Dc=null,d=Qi,Qi=Cc(a.containerInfo),mi(a,n),Qi=d,gi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ql(a.containerInfo)}catch(se){Yt(n,n.return,se)}sd&&(sd=!1,e0(n));break;case 4:u=Qi,Qi=Cc(n.stateNode.containerInfo),mi(a,n),gi(n),Qi=u;break;case 12:mi(a,n),gi(n);break;case 13:mi(a,n),gi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(dd=Ie()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,od(n,u)));break;case 22:d=n.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,te=Na,de=fn;if(Na=te||d,fn=de||G,mi(a,n),fn=de,Na=te,gi(n),u&8192)e:for(a=n.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(o===null||G||Na||fn||rs(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){G=o=a;try{if(g=G.stateNode,d)A=g.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{D=G.stateNode;var xe=G.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;D.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(se){Yt(G,G.return,se)}}}else if(a.tag===6){if(o===null){G=a;try{G.stateNode.nodeValue=d?"":G.memoizedProps}catch(se){Yt(G,G.return,se)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,od(n,o))));break;case 19:mi(a,n),gi(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,od(n,u)));break;case 30:break;case 21:break;default:mi(a,n),gi(n)}}function gi(n){var a=n.flags;if(a&2){try{for(var o,u=n.return;u!==null;){if(Yv(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,g=ad(n);mc(n,g,d);break;case 5:var A=o.stateNode;o.flags&32&&(ni(A,""),o.flags&=-33);var D=ad(n);mc(n,D,A);break;case 3:case 4:var G=o.stateNode.containerInfo,te=ad(n);rd(n,te,G);break;default:throw Error(i(161))}}catch(de){Yt(n,n.return,de)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function e0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;e0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function fr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Qv(n,a.alternate,a),a=a.sibling}function rs(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:cr(4,a,a.return),rs(a);break;case 1:ua(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Xv(a,a.return,o),rs(a);break;case 27:zl(a.stateNode);case 26:case 5:ua(a,a.return),rs(a);break;case 22:a.memoizedState===null&&rs(a);break;case 30:rs(a);break;default:rs(a)}n=n.sibling}}function hr(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,d=n,g=a,A=g.flags;switch(g.tag){case 0:case 11:case 15:hr(d,g,o),wl(4,g);break;case 1:if(hr(d,g,o),u=g,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(te){Yt(u,u.return,te)}if(u=g,d=u.updateQueue,d!==null){var D=u.stateNode;try{var G=d.shared.hiddenCallbacks;if(G!==null)for(d.shared.hiddenCallbacks=null,d=0;d<G.length;d++)w_(G[d],D)}catch(te){Yt(u,u.return,te)}}o&&A&64&&kv(g),Dl(g,g.return);break;case 27:qv(g);case 26:case 5:hr(d,g,o),o&&u===null&&A&4&&Wv(g),Dl(g,g.return);break;case 12:hr(d,g,o);break;case 13:hr(d,g,o),o&&A&4&&Jv(d,g);break;case 22:g.memoizedState===null&&hr(d,g,o),Dl(g,g.return);break;case 30:break;default:hr(d,g,o)}a=a.sibling}}function ld(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ml(o))}function ud(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ml(n))}function ca(n,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)t0(n,a,o,u),a=a.sibling}function t0(n,a,o,u){var d=a.flags;switch(a.tag){case 0:case 11:case 15:ca(n,a,o,u),d&2048&&wl(9,a);break;case 1:ca(n,a,o,u);break;case 3:ca(n,a,o,u),d&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ml(n)));break;case 12:if(d&2048){ca(n,a,o,u),n=a.stateNode;try{var g=a.memoizedProps,A=g.id,D=g.onPostCommit;typeof D=="function"&&D(A,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(G){Yt(a,a.return,G)}}else ca(n,a,o,u);break;case 13:ca(n,a,o,u);break;case 23:break;case 22:g=a.stateNode,A=a.alternate,a.memoizedState!==null?g._visibility&2?ca(n,a,o,u):Ul(n,a):g._visibility&2?ca(n,a,o,u):(g._visibility|=2,no(n,a,o,u,(a.subtreeFlags&10256)!==0)),d&2048&&ld(A,a);break;case 24:ca(n,a,o,u),d&2048&&ud(a.alternate,a);break;default:ca(n,a,o,u)}}function no(n,a,o,u,d){for(d=d&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var g=n,A=a,D=o,G=u,te=A.flags;switch(A.tag){case 0:case 11:case 15:no(g,A,D,G,d),wl(8,A);break;case 23:break;case 22:var de=A.stateNode;A.memoizedState!==null?de._visibility&2?no(g,A,D,G,d):Ul(g,A):(de._visibility|=2,no(g,A,D,G,d)),d&&te&2048&&ld(A.alternate,A);break;case 24:no(g,A,D,G,d),d&&te&2048&&ud(A.alternate,A);break;default:no(g,A,D,G,d)}a=a.sibling}}function Ul(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,u=a,d=u.flags;switch(u.tag){case 22:Ul(o,u),d&2048&&ld(u.alternate,u);break;case 24:Ul(o,u),d&2048&&ud(u.alternate,u);break;default:Ul(o,u)}a=a.sibling}}var Ll=8192;function io(n){if(n.subtreeFlags&Ll)for(n=n.child;n!==null;)n0(n),n=n.sibling}function n0(n){switch(n.tag){case 26:io(n),n.flags&Ll&&n.memoizedState!==null&&RA(Qi,n.memoizedState,n.memoizedProps);break;case 5:io(n);break;case 3:case 4:var a=Qi;Qi=Cc(n.stateNode.containerInfo),io(n),Qi=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=Ll,Ll=16777216,io(n),Ll=a):io(n));break;default:io(n)}}function i0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function Nl(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Un=u,r0(u,n)}i0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)a0(n),n=n.sibling}function a0(n){switch(n.tag){case 0:case 11:case 15:Nl(n),n.flags&2048&&cr(9,n,n.return);break;case 3:Nl(n);break;case 12:Nl(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,gc(n)):Nl(n);break;default:Nl(n)}}function gc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];Un=u,r0(u,n)}i0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:cr(8,a,a.return),gc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,gc(a));break;default:gc(a)}n=n.sibling}}function r0(n,a){for(;Un!==null;){var o=Un;switch(o.tag){case 0:case 11:case 15:cr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:ml(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Un=u;else e:for(o=n;Un!==null;){u=Un;var d=u.sibling,g=u.return;if(jv(u),u===o){Un=null;break e}if(d!==null){d.return=g,Un=d;break e}Un=g}}}var kE={getCacheForType:function(n){var a=Xn(En),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},XE=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,St=null,Rt=0,zt=0,_i=null,dr=!1,ao=!1,cd=!1,Pa=0,ln=0,pr=0,ss=0,fd=0,Ii=0,ro=0,Ol=null,si=null,hd=!1,dd=0,_c=1/0,vc=null,mr=null,Fn=0,gr=null,so=null,oo=0,pd=0,md=null,s0=null,Pl=0,gd=null;function vi(){if((Ft&2)!==0&&Rt!==0)return Rt&-Rt;if(z.T!==null){var n=Ks;return n!==0?n:Ed()}return wt()}function o0(){Ii===0&&(Ii=(Rt&536870912)===0||Pt?q():536870912);var n=Pi.current;return n!==null&&(n.flags|=32),Ii}function xi(n,a,o){(n===Qt&&(zt===2||zt===9)||n.cancelPendingCommit!==null)&&(lo(n,0),_r(n,Rt,Ii,!1)),He(n,o),((Ft&2)===0||n!==Qt)&&(n===Qt&&((Ft&2)===0&&(ss|=o),ln===4&&_r(n,Rt,Ii,!1)),fa(n))}function l0(n,a,o){if((Ft&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&n.expiredLanes)===0||Ue(n,a),d=u?qE(n,a):xd(n,a,!0),g=u;do{if(d===0){ao&&!u&&_r(n,a,0,!1);break}else{if(o=n.current.alternate,g&&!WE(o)){d=xd(n,a,!1),g=!1;continue}if(d===2){if(g=a,n.errorRecoveryDisabledLanes&g)var A=0;else A=n.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){a=A;e:{var D=n;d=Ol;var G=D.current.memoizedState.isDehydrated;if(G&&(lo(D,A).flags|=256),A=xd(D,A,!1),A!==2){if(cd&&!G){D.errorRecoveryDisabledLanes|=g,ss|=g,d=4;break e}g=si,si=d,g!==null&&(si===null?si=g:si.push.apply(si,g))}d=A}if(g=!1,d!==2)continue}}if(d===1){lo(n,0),_r(n,a,0,!0);break}e:{switch(u=n,g=d,g){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:_r(u,a,Ii,!dr);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=dd+300-Ie(),10<d)){if(_r(u,a,Ii,!dr),We(u,0,!0)!==0)break e;u.timeoutHandle=B0(u0.bind(null,u,o,si,vc,hd,a,Ii,ss,ro,dr,g,2,-0,0),d);break e}u0(u,o,si,vc,hd,a,Ii,ss,ro,dr,g,0,-0,0)}}break}while(!0);fa(n)}function u0(n,a,o,u,d,g,A,D,G,te,de,xe,ae,se){if(n.timeoutHandle=-1,xe=a.subtreeFlags,(xe&8192||(xe&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:bA},n0(a),xe=CA(),xe!==null)){n.cancelPendingCommit=xe(g0.bind(null,n,a,g,o,u,d,A,D,G,de,1,ae,se)),_r(n,g,A,!te);return}g0(n,a,g,o,u,d,A,D,G)}function WE(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!di(g(),d))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function _r(n,a,o,u){a&=~fd,a&=~ss,n.suspendedLanes|=a,n.pingedLanes&=~a,u&&(n.warmLanes|=a),u=n.expirationTimes;for(var d=a;0<d;){var g=31-ze(d),A=1<<g;u[g]=-1,d&=~A}o!==0&&ye(n,o,a)}function xc(){return(Ft&6)===0?(Il(0),!1):!0}function _d(){if(St!==null){if(zt===0)var n=St.return;else n=St,Ra=es=null,Oh(n),eo=null,bl=0,n=St;for(;n!==null;)Vv(n.alternate,n),n=n.return;St=null}}function lo(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,uA(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),_d(),Qt=n,St=o=Aa(n.current,null),Rt=a,zt=0,_i=null,dr=!1,ao=Ue(n,a),cd=!1,ro=Ii=fd=ss=pr=ln=0,si=Ol=null,hd=!1,(a&8)!==0&&(a|=a&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=a;0<u;){var d=31-ze(u),g=1<<d;a|=n[d],u&=~g}return Pa=a,Gu(),o}function c0(n,a){gt=null,z.H=sc,a===_l||a===ju?(a=R_(),zt=3):a===A_?(a=R_(),zt=4):zt=a===Cv?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,_i=a,St===null&&(ln=1,fc(n,Ui(a,n.current)))}function f0(){var n=z.H;return z.H=sc,n===null?sc:n}function h0(){var n=z.A;return z.A=kE,n}function vd(){ln=4,dr||(Rt&4194048)!==Rt&&Pi.current!==null||(ao=!0),(pr&134217727)===0&&(ss&134217727)===0||Qt===null||_r(Qt,Rt,Ii,!1)}function xd(n,a,o){var u=Ft;Ft|=2;var d=f0(),g=h0();(Qt!==n||Rt!==a)&&(vc=null,lo(n,a)),a=!1;var A=ln;e:do try{if(zt!==0&&St!==null){var D=St,G=_i;switch(zt){case 8:_d(),A=6;break e;case 3:case 2:case 9:case 6:Pi.current===null&&(a=!0);var te=zt;if(zt=0,_i=null,uo(n,D,G,te),o&&ao){A=0;break e}break;default:te=zt,zt=0,_i=null,uo(n,D,G,te)}}YE(),A=ln;break}catch(de){c0(n,de)}while(!0);return a&&n.shellSuspendCounter++,Ra=es=null,Ft=u,z.H=d,z.A=g,St===null&&(Qt=null,Rt=0,Gu()),A}function YE(){for(;St!==null;)d0(St)}function qE(n,a){var o=Ft;Ft|=2;var u=f0(),d=h0();Qt!==n||Rt!==a?(vc=null,_c=Ie()+500,lo(n,a)):ao=Ue(n,a);e:do try{if(zt!==0&&St!==null){a=St;var g=_i;t:switch(zt){case 1:zt=0,_i=null,uo(n,a,g,1);break;case 2:case 9:if(T_(g)){zt=0,_i=null,p0(a);break}a=function(){zt!==2&&zt!==9||Qt!==n||(zt=7),fa(n)},g.then(a,a);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:T_(g)?(zt=0,_i=null,p0(a)):(zt=0,_i=null,uo(n,a,g,7));break;case 5:var A=null;switch(St.tag){case 26:A=St.memoizedState;case 5:case 27:var D=St;if(!A||Q0(A)){zt=0,_i=null;var G=D.sibling;if(G!==null)St=G;else{var te=D.return;te!==null?(St=te,yc(te)):St=null}break t}}zt=0,_i=null,uo(n,a,g,5);break;case 6:zt=0,_i=null,uo(n,a,g,6);break;case 8:_d(),ln=6;break e;default:throw Error(i(462))}}KE();break}catch(de){c0(n,de)}while(!0);return Ra=es=null,z.H=u,z.A=d,Ft=o,St!==null?0:(Qt=null,Rt=0,Gu(),ln)}function KE(){for(;St!==null&&!st();)d0(St)}function d0(n){var a=Hv(n.alternate,n,Pa);n.memoizedProps=n.pendingProps,a===null?yc(n):St=a}function p0(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=Ov(o,a,a.pendingProps,a.type,void 0,Rt);break;case 11:a=Ov(o,a,a.pendingProps,a.type.render,a.ref,Rt);break;case 5:Oh(a);default:Vv(o,a),a=St=m_(a,Pa),a=Hv(o,a,Pa)}n.memoizedProps=n.pendingProps,a===null?yc(n):St=a}function uo(n,a,o,u){Ra=es=null,Oh(a),eo=null,bl=0;var d=a.return;try{if(BE(n,d,a,o,Rt)){ln=1,fc(n,Ui(o,n.current)),St=null;return}}catch(g){if(d!==null)throw St=d,g;ln=1,fc(n,Ui(o,n.current)),St=null;return}a.flags&32768?(Pt||u===1?n=!0:ao||(Rt&536870912)!==0?n=!1:(dr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Pi.current,u!==null&&u.tag===13&&(u.flags|=16384))),m0(a,n)):yc(a)}function yc(n){var a=n;do{if((a.flags&32768)!==0){m0(a,dr);return}n=a.return;var o=zE(a.alternate,a,Pa);if(o!==null){St=o;return}if(a=a.sibling,a!==null){St=a;return}St=a=n}while(a!==null);ln===0&&(ln=5)}function m0(n,a){do{var o=HE(n.alternate,n);if(o!==null){o.flags&=32767,St=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){St=n;return}St=n=o}while(n!==null);ln=6,St=null}function g0(n,a,o,u,d,g,A,D,G){n.cancelPendingCommit=null;do Sc();while(Fn!==0);if((Ft&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(g=a.lanes|a.childLanes,g|=uh,Ee(n,o,g,A,D,G),n===Qt&&(St=Qt=null,Rt=0),so=a,gr=n,oo=o,pd=g,md=d,s0=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,JE(lt,function(){return S0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,d=Y.p,Y.p=2,A=Ft,Ft|=4;try{GE(n,a,o)}finally{Ft=A,Y.p=d,z.T=u}}Fn=1,_0(),v0(),x0()}}function _0(){if(Fn===1){Fn=0;var n=gr,a=so,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=Y.p;Y.p=2;var d=Ft;Ft|=4;try{$v(a,n);var g=Ud,A=r_(n.containerInfo),D=g.focusedElem,G=g.selectionRange;if(A!==D&&D&&D.ownerDocument&&a_(D.ownerDocument.documentElement,D)){if(G!==null&&ah(D)){var te=G.start,de=G.end;if(de===void 0&&(de=te),"selectionStart"in D)D.selectionStart=te,D.selectionEnd=Math.min(de,D.value.length);else{var xe=D.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var se=ae.getSelection(),rt=D.textContent.length,nt=Math.min(G.start,rt),kt=G.end===void 0?nt:Math.min(G.end,rt);!se.extend&&nt>kt&&(A=kt,kt=nt,nt=A);var Q=i_(D,nt),W=i_(D,kt);if(Q&&W&&(se.rangeCount!==1||se.anchorNode!==Q.node||se.anchorOffset!==Q.offset||se.focusNode!==W.node||se.focusOffset!==W.offset)){var $=xe.createRange();$.setStart(Q.node,Q.offset),se.removeAllRanges(),nt>kt?(se.addRange($),se.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),se.addRange($))}}}}for(xe=[],se=D;se=se.parentNode;)se.nodeType===1&&xe.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<xe.length;D++){var me=xe[D];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Nc=!!Dd,Ud=Dd=null}finally{Ft=d,Y.p=u,z.T=o}}n.current=a,Fn=2}}function v0(){if(Fn===2){Fn=0;var n=gr,a=so,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=Y.p;Y.p=2;var d=Ft;Ft|=4;try{Qv(n,a.alternate,a)}finally{Ft=d,Y.p=u,z.T=o}}Fn=3}}function x0(){if(Fn===4||Fn===3){Fn=0,et();var n=gr,a=so,o=oo,u=s0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Fn=5:(Fn=0,so=gr=null,y0(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(mr=null),It(o),a=a.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(he,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=z.T,d=Y.p,Y.p=2,z.T=null;try{for(var g=n.onRecoverableError,A=0;A<u.length;A++){var D=u[A];g(D.value,{componentStack:D.stack})}}finally{z.T=a,Y.p=d}}(oo&3)!==0&&Sc(),fa(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===gd?Pl++:(Pl=0,gd=n):Pl=0,Il(0)}}function y0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,ml(a)))}function Sc(n){return _0(),v0(),x0(),S0()}function S0(){if(Fn!==5)return!1;var n=gr,a=pd;pd=0;var o=It(oo),u=z.T,d=Y.p;try{Y.p=32>o?32:o,z.T=null,o=md,md=null;var g=gr,A=oo;if(Fn=0,so=gr=null,oo=0,(Ft&6)!==0)throw Error(i(331));var D=Ft;if(Ft|=4,a0(g.current),t0(g,g.current,A,o),Ft=D,Il(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(he,g)}catch{}return!0}finally{Y.p=d,z.T=u,y0(n,a)}}function M0(n,a,o){a=Ui(o,a),a=Kh(n.stateNode,a,2),n=sr(n,a,2),n!==null&&(He(n,2),fa(n))}function Yt(n,a,o){if(n.tag===3)M0(n,n,o);else for(;a!==null;){if(a.tag===3){M0(a,n,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=Ui(o,n),o=bv(2),u=sr(a,o,2),u!==null&&(Rv(o,u,a,n),He(u,2),fa(u));break}}a=a.return}}function yd(n,a,o){var u=n.pingCache;if(u===null){u=n.pingCache=new XE;var d=new Set;u.set(a,d)}else d=u.get(a),d===void 0&&(d=new Set,u.set(a,d));d.has(o)||(cd=!0,d.add(o),n=QE.bind(null,n,a,o),a.then(n,n))}function QE(n,a,o){var u=n.pingCache;u!==null&&u.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qt===n&&(Rt&o)===o&&(ln===4||ln===3&&(Rt&62914560)===Rt&&300>Ie()-dd?(Ft&2)===0&&lo(n,0):fd|=o,ro===Rt&&(ro=0)),fa(n)}function E0(n,a){a===0&&(a=Te()),n=Xs(n,a),n!==null&&(He(n,a),fa(n))}function jE(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),E0(n,o)}function ZE(n,a){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),E0(n,o)}function JE(n,a){return V(n,a)}var Mc=null,co=null,Sd=!1,Ec=!1,Md=!1,os=0;function fa(n){n!==co&&n.next===null&&(co===null?Mc=co=n:co=co.next=n),Ec=!0,Sd||(Sd=!0,eA())}function Il(n,a){if(!Md&&Ec){Md=!0;do for(var o=!1,u=Mc;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var g=0;else{var A=u.suspendedLanes,D=u.pingedLanes;g=(1<<31-ze(42|n)+1)-1,g&=d&~(A&~D),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,R0(u,g))}else g=Rt,g=We(u,u===Qt?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Ue(u,g)||(o=!0,R0(u,g));u=u.next}while(o);Md=!1}}function $E(){A0()}function A0(){Ec=Sd=!1;var n=0;os!==0&&(lA()&&(n=os),os=0);for(var a=Ie(),o=null,u=Mc;u!==null;){var d=u.next,g=T0(u,a);g===0?(u.next=null,o===null?Mc=d:o.next=d,d===null&&(co=o)):(o=u,(n!==0||(g&3)!==0)&&(Ec=!0)),u=d}Il(n)}function T0(n,a){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var A=31-ze(g),D=1<<A,G=d[A];G===-1?((D&o)===0||(D&u)!==0)&&(d[A]=ut(D,a)):G<=a&&(n.expiredLanes|=D),g&=~D}if(a=Qt,o=Rt,o=We(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===a&&(zt===2||zt===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&bt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ue(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(u!==null&&bt(u),It(o)){case 2:case 8:o=Fe;break;case 32:o=lt;break;case 268435456:o=F;break;default:o=lt}return u=b0.bind(null,n),o=V(o,u),n.callbackPriority=a,n.callbackNode=o,a}return u!==null&&u!==null&&bt(u),n.callbackPriority=2,n.callbackNode=null,2}function b0(n,a){if(Fn!==0&&Fn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Sc()&&n.callbackNode!==o)return null;var u=Rt;return u=We(n,n===Qt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(l0(n,u,a),T0(n,Ie()),n.callbackNode!=null&&n.callbackNode===o?b0.bind(null,n):null)}function R0(n,a){if(Sc())return null;l0(n,a,!0)}function eA(){cA(function(){(Ft&6)!==0?V(Ge,$E):A0()})}function Ed(){return os===0&&(os=q()),os}function C0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ou(""+n)}function w0(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function tA(n,a,o,u,d){if(a==="submit"&&o&&o.stateNode===d){var g=C0((d[rn]||null).action),A=u.submitter;A&&(a=(a=A[rn]||null)?C0(a.formAction):A.getAttribute("formAction"),a!==null&&(g=a,A=null));var D=new Fu("action","action",null,u,d);n.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(os!==0){var G=A?w0(d,A):new FormData(d);kh(o,{pending:!0,data:G,method:d.method,action:g},null,G)}}else typeof g=="function"&&(D.preventDefault(),G=A?w0(d,A):new FormData(d),kh(o,{pending:!0,data:G,method:d.method,action:g},g,G))},currentTarget:d}]})}}for(var Ad=0;Ad<lh.length;Ad++){var Td=lh[Ad],nA=Td.toLowerCase(),iA=Td[0].toUpperCase()+Td.slice(1);Ki(nA,"on"+iA)}Ki(l_,"onAnimationEnd"),Ki(u_,"onAnimationIteration"),Ki(c_,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(yE,"onTransitionRun"),Ki(SE,"onTransitionStart"),Ki(ME,"onTransitionCancel"),Ki(f_,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bl));function D0(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var g=void 0;if(a)for(var A=u.length-1;0<=A;A--){var D=u[A],G=D.instance,te=D.currentTarget;if(D=D.listener,G!==g&&d.isPropagationStopped())break e;g=D,d.currentTarget=te;try{g(d)}catch(de){cc(de)}d.currentTarget=null,g=G}else for(A=0;A<u.length;A++){if(D=u[A],G=D.instance,te=D.currentTarget,D=D.listener,G!==g&&d.isPropagationStopped())break e;g=D,d.currentTarget=te;try{g(d)}catch(de){cc(de)}d.currentTarget=null,g=G}}}}function Mt(n,a){var o=a[Os];o===void 0&&(o=a[Os]=new Set);var u=n+"__bubble";o.has(u)||(U0(a,n,2,!1),o.add(u))}function bd(n,a,o){var u=0;a&&(u|=4),U0(o,n,u,a)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function Rd(n){if(!n[Ac]){n[Ac]=!0,Lu.forEach(function(o){o!=="selectionchange"&&(aA.has(o)||bd(o,!1,n),bd(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Ac]||(a[Ac]=!0,bd("selectionchange",!1,a))}}function U0(n,a,o,u){switch(tx(a)){case 2:var d=UA;break;case 8:d=LA;break;default:d=Gd}o=d.bind(null,a,o,n),d=void 0,!Qf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(a,o,{capture:!0,passive:d}):n.addEventListener(a,o,!0):d!==void 0?n.addEventListener(a,o,{passive:d}):n.addEventListener(a,o,!1)}function Cd(n,a,o,u,d){var g=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var D=u.stateNode.containerInfo;if(D===d)break;if(A===4)for(A=u.return;A!==null;){var G=A.tag;if((G===3||G===4)&&A.stateNode.containerInfo===d)return;A=A.return}for(;D!==null;){if(A=Ma(D),A===null)return;if(G=A.tag,G===5||G===6||G===26||G===27){u=g=A;continue e}D=D.parentNode}}u=u.return}Fg(function(){var te=g,de=qf(o),xe=[];e:{var ae=h_.get(n);if(ae!==void 0){var se=Fu,rt=n;switch(n){case"keypress":if(Iu(o)===0)break e;case"keydown":case"keyup":se=JM;break;case"focusin":rt="focus",se=$f;break;case"focusout":rt="blur",se=$f;break;case"beforeblur":case"afterblur":se=$f;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=HM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=tE;break;case l_:case u_:case c_:se=kM;break;case f_:se=iE;break;case"scroll":case"scrollend":se=FM;break;case"wheel":se=rE;break;case"copy":case"cut":case"paste":se=WM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=kg;break;case"toggle":case"beforetoggle":se=oE}var nt=(a&4)!==0,kt=!nt&&(n==="scroll"||n==="scrollend"),Q=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var W=te,$;W!==null;){var me=W;if($=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||$===null||Q===null||(me=nl(W,Q),me!=null&&nt.push(Fl(W,me,$))),kt)break;W=W.return}0<nt.length&&(ae=new se(ae,rt,null,o,de),xe.push({event:ae,listeners:nt}))}}if((a&7)===0){e:{if(ae=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",ae&&o!==Yf&&(rt=o.relatedTarget||o.fromElement)&&(Ma(rt)||rt[ra]))break e;if((se||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,se?(rt=o.relatedTarget||o.toElement,se=te,rt=rt?Ma(rt):null,rt!==null&&(kt=l(rt),nt=rt.tag,rt!==kt||nt!==5&&nt!==27&&nt!==6)&&(rt=null)):(se=null,rt=te),se!==rt)){if(nt=Gg,me="onMouseLeave",Q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(nt=kg,me="onPointerLeave",Q="onPointerEnter",W="pointer"),kt=se==null?ae:Wr(se),$=rt==null?ae:Wr(rt),ae=new nt(me,W+"leave",se,o,de),ae.target=kt,ae.relatedTarget=$,me=null,Ma(de)===te&&(nt=new nt(Q,W+"enter",rt,o,de),nt.target=$,nt.relatedTarget=kt,me=nt),kt=me,se&&rt)t:{for(nt=se,Q=rt,W=0,$=nt;$;$=fo($))W++;for($=0,me=Q;me;me=fo(me))$++;for(;0<W-$;)nt=fo(nt),W--;for(;0<$-W;)Q=fo(Q),$--;for(;W--;){if(nt===Q||Q!==null&&nt===Q.alternate)break t;nt=fo(nt),Q=fo(Q)}nt=null}else nt=null;se!==null&&L0(xe,ae,se,nt,!1),rt!==null&&kt!==null&&L0(xe,kt,rt,nt,!0)}}e:{if(ae=te?Wr(te):window,se=ae.nodeName&&ae.nodeName.toLowerCase(),se==="select"||se==="input"&&ae.type==="file")var ke=Zg;else if(Qg(ae))if(Jg)ke=_E;else{ke=mE;var _t=pE}else se=ae.nodeName,!se||se.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Wf(te.elementType)&&(ke=Zg):ke=gE;if(ke&&(ke=ke(n,te))){jg(xe,ke,o,de);break e}_t&&_t(n,ae,te),n==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&kn(ae,"number",ae.value)}switch(_t=te?Wr(te):window,n){case"focusin":(Qg(_t)||_t.contentEditable==="true")&&(Gs=_t,rh=te,cl=null);break;case"focusout":cl=rh=Gs=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,s_(xe,o,de);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":s_(xe,o,de)}var Ze;if(th)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Hs?qg(n,o)&&(at="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(at="onCompositionStart");at&&(Xg&&o.locale!=="ko"&&(Hs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Hs&&(Ze=zg()):(nr=de,jf="value"in nr?nr.value:nr.textContent,Hs=!0)),_t=Tc(te,at),0<_t.length&&(at=new Vg(at,n,null,o,de),xe.push({event:at,listeners:_t}),Ze?at.data=Ze:(Ze=Kg(o),Ze!==null&&(at.data=Ze)))),(Ze=uE?cE(n,o):fE(n,o))&&(at=Tc(te,"onBeforeInput"),0<at.length&&(_t=new Vg("onBeforeInput","beforeinput",null,o,de),xe.push({event:_t,listeners:at}),_t.data=Ze)),tA(xe,n,te,o,de)}D0(xe,a)})}function Fl(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Tc(n,a){for(var o=a+"Capture",u=[];n!==null;){var d=n,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=nl(n,o),d!=null&&u.unshift(Fl(n,d,g)),d=nl(n,a),d!=null&&u.push(Fl(n,d,g))),n.tag===3)return u;n=n.return}return[]}function fo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function L0(n,a,o,u,d){for(var g=a._reactName,A=[];o!==null&&o!==u;){var D=o,G=D.alternate,te=D.stateNode;if(D=D.tag,G!==null&&G===u)break;D!==5&&D!==26&&D!==27||te===null||(G=te,d?(te=nl(o,g),te!=null&&A.unshift(Fl(o,te,G))):d||(te=nl(o,g),te!=null&&A.push(Fl(o,te,G)))),o=o.return}A.length!==0&&n.push({event:a,listeners:A})}var rA=/\r\n?/g,sA=/\u0000|\uFFFD/g;function N0(n){return(typeof n=="string"?n:""+n).replace(rA,`
`).replace(sA,"")}function O0(n,a){return a=N0(a),N0(n)===a}function bc(){}function Vt(n,a,o,u,d,g){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||ni(n,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&ni(n,""+u);break;case"className":Ve(n,"class",u);break;case"tabIndex":Ve(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(n,o,u);break;case"style":Ig(n,u,g);break;case"data":if(a!=="object"){Ve(n,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ou(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(a!=="input"&&Vt(n,a,"name",d.name,d,null),Vt(n,a,"formEncType",d.formEncType,d,null),Vt(n,a,"formMethod",d.formMethod,d,null),Vt(n,a,"formTarget",d.formTarget,d,null)):(Vt(n,a,"encType",d.encType,d,null),Vt(n,a,"method",d.method,d,null),Vt(n,a,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ou(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=bc);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ou(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Mt("beforetoggle",n),Mt("toggle",n),Le(n,"popover",u);break;case"xlinkActuate":Oe(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Oe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Oe(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Oe(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Oe(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Oe(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Oe(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Le(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=IM.get(o)||o,Le(n,o,u))}}function wd(n,a,o,u,d,g){switch(o){case"style":Ig(n,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?ni(n,u):(typeof u=="number"||typeof u=="bigint")&&ni(n,""+u);break;case"onScroll":u!=null&&Mt("scroll",n);break;case"onScrollEnd":u!=null&&Mt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nu.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),a=o.slice(2,d?o.length-7:void 0),g=n[rn]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(a,g,d),typeof u=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Le(n,o,u)}}}function zn(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",n),Mt("load",n);var u=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var A=o[g];if(A!=null)switch(g){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Vt(n,a,g,A,o,null)}}d&&Vt(n,a,"srcSet",o.srcSet,o,null),u&&Vt(n,a,"src",o.src,o,null);return;case"input":Mt("invalid",n);var D=g=A=d=null,G=null,te=null;for(u in o)if(o.hasOwnProperty(u)){var de=o[u];if(de!=null)switch(u){case"name":d=de;break;case"type":A=de;break;case"checked":G=de;break;case"defaultChecked":te=de;break;case"value":g=de;break;case"defaultValue":D=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(i(137,a));break;default:Vt(n,a,u,de,o,null)}}Jn(n,g,D,G,te,A,d,!1),yt(n);return;case"select":Mt("invalid",n),u=A=g=null;for(d in o)if(o.hasOwnProperty(d)&&(D=o[d],D!=null))switch(d){case"value":g=D;break;case"defaultValue":A=D;break;case"multiple":u=D;default:Vt(n,a,d,D,o,null)}a=g,o=A,n.multiple=!!u,a!=null?sn(n,!!u,a,!1):o!=null&&sn(n,!!u,o,!0);return;case"textarea":Mt("invalid",n),g=d=u=null;for(A in o)if(o.hasOwnProperty(A)&&(D=o[A],D!=null))switch(A){case"value":u=D;break;case"defaultValue":d=D;break;case"children":g=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(i(91));break;default:Vt(n,a,A,D,o,null)}Bs(n,u,d,g),yt(n);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(u=o[G],u!=null))switch(G){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Vt(n,a,G,u,o,null)}return;case"dialog":Mt("beforetoggle",n),Mt("toggle",n),Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":Mt("load",n);break;case"video":case"audio":for(u=0;u<Bl.length;u++)Mt(Bl[u],n);break;case"image":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"embed":case"source":case"link":Mt("error",n),Mt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in o)if(o.hasOwnProperty(te)&&(u=o[te],u!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Vt(n,a,te,u,o,null)}return;default:if(Wf(a)){for(de in o)o.hasOwnProperty(de)&&(u=o[de],u!==void 0&&wd(n,a,de,u,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(u=o[D],u!=null&&Vt(n,a,D,u,o,null))}function oA(n,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,A=null,D=null,G=null,te=null,de=null;for(se in o){var xe=o[se];if(o.hasOwnProperty(se)&&xe!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":G=xe;default:u.hasOwnProperty(se)||Vt(n,a,se,null,u,xe)}}for(var ae in u){var se=u[ae];if(xe=o[ae],u.hasOwnProperty(ae)&&(se!=null||xe!=null))switch(ae){case"type":g=se;break;case"name":d=se;break;case"checked":te=se;break;case"defaultChecked":de=se;break;case"value":A=se;break;case"defaultValue":D=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(i(137,a));break;default:se!==xe&&Vt(n,a,ae,se,u,xe)}}Wt(n,A,D,G,te,de,g,d);return;case"select":se=A=D=ae=null;for(g in o)if(G=o[g],o.hasOwnProperty(g)&&G!=null)switch(g){case"value":break;case"multiple":se=G;default:u.hasOwnProperty(g)||Vt(n,a,g,null,u,G)}for(d in u)if(g=u[d],G=o[d],u.hasOwnProperty(d)&&(g!=null||G!=null))switch(d){case"value":ae=g;break;case"defaultValue":D=g;break;case"multiple":A=g;default:g!==G&&Vt(n,a,d,g,u,G)}a=D,o=A,u=se,ae!=null?sn(n,!!o,ae,!1):!!u!=!!o&&(a!=null?sn(n,!!o,a,!0):sn(n,!!o,o?[]:"",!1));return;case"textarea":se=ae=null;for(D in o)if(d=o[D],o.hasOwnProperty(D)&&d!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Vt(n,a,D,null,u,d)}for(A in u)if(d=u[A],g=o[A],u.hasOwnProperty(A)&&(d!=null||g!=null))switch(A){case"value":ae=d;break;case"defaultValue":se=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&Vt(n,a,A,d,u,g)}In(n,ae,se);return;case"option":for(var rt in o)if(ae=o[rt],o.hasOwnProperty(rt)&&ae!=null&&!u.hasOwnProperty(rt))switch(rt){case"selected":n.selected=!1;break;default:Vt(n,a,rt,null,u,ae)}for(G in u)if(ae=u[G],se=o[G],u.hasOwnProperty(G)&&ae!==se&&(ae!=null||se!=null))switch(G){case"selected":n.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Vt(n,a,G,ae,u,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in o)ae=o[nt],o.hasOwnProperty(nt)&&ae!=null&&!u.hasOwnProperty(nt)&&Vt(n,a,nt,null,u,ae);for(te in u)if(ae=u[te],se=o[te],u.hasOwnProperty(te)&&ae!==se&&(ae!=null||se!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(i(137,a));break;default:Vt(n,a,te,ae,u,se)}return;default:if(Wf(a)){for(var kt in o)ae=o[kt],o.hasOwnProperty(kt)&&ae!==void 0&&!u.hasOwnProperty(kt)&&wd(n,a,kt,void 0,u,ae);for(de in u)ae=u[de],se=o[de],!u.hasOwnProperty(de)||ae===se||ae===void 0&&se===void 0||wd(n,a,de,ae,u,se);return}}for(var Q in o)ae=o[Q],o.hasOwnProperty(Q)&&ae!=null&&!u.hasOwnProperty(Q)&&Vt(n,a,Q,null,u,ae);for(xe in u)ae=u[xe],se=o[xe],!u.hasOwnProperty(xe)||ae===se||ae==null&&se==null||Vt(n,a,xe,ae,u,se)}var Dd=null,Ud=null;function Rc(n){return n.nodeType===9?n:n.ownerDocument}function P0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Ld(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Nd=null;function lA(){var n=window.event;return n&&n.type==="popstate"?n===Nd?!1:(Nd=n,!0):(Nd=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,uA=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,cA=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(n){return F0.resolve(null).then(n).catch(fA)}:B0;function fA(n){setTimeout(function(){throw n})}function vr(n){return n==="head"}function z0(n,a){var o=a,u=0,d=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var A=n.ownerDocument;if(o&1&&zl(A.documentElement),o&2&&zl(A.body),o&4)for(o=A.head,zl(o),A=o.firstChild;A;){var D=A.nextSibling,G=A.nodeName;A[sa]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&A.rel.toLowerCase()==="stylesheet"||o.removeChild(A),A=D}}if(d===0){n.removeChild(g),ql(a);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);ql(a)}function Od(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Od(o),Is(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function hA(n,a,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[sa])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=ji(n.nextSibling),n===null)break}return null}function dA(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ji(n.nextSibling),n===null))return null;return n}function Pd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function pA(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ji(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var Id=null;function H0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function G0(n,a,o){switch(a=Rc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function zl(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Is(n)}var Bi=new Map,V0=new Set;function Cc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ia=Y.d;Y.d={f:mA,r:gA,D:_A,C:vA,L:xA,m:yA,X:MA,S:SA,M:EA};function mA(){var n=Ia.f(),a=xc();return n||a}function gA(n){var a=er(n);a!==null&&a.tag===5&&a.type==="form"?lv(a):Ia.r(n)}var ho=typeof document>"u"?null:document;function k0(n,a,o){var u=ho;if(u&&typeof a=="string"&&a){var d=wn(a);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),V0.has(d)||(V0.add(d),n={rel:n,crossOrigin:o,href:a},u.querySelector(d)===null&&(a=u.createElement("link"),zn(a,"link",n),mn(a),u.head.appendChild(a)))}}function _A(n){Ia.D(n),k0("dns-prefetch",n,null)}function vA(n,a){Ia.C(n,a),k0("preconnect",n,a)}function xA(n,a,o){Ia.L(n,a,o);var u=ho;if(u&&n&&a){var d='link[rel="preload"][as="'+wn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+wn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+wn(o.imageSizes)+'"]')):d+='[href="'+wn(n)+'"]';var g=d;switch(a){case"style":g=po(n);break;case"script":g=mo(n)}Bi.has(g)||(n=m({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Bi.set(g,n),u.querySelector(d)!==null||a==="style"&&u.querySelector(Hl(g))||a==="script"&&u.querySelector(Gl(g))||(a=u.createElement("link"),zn(a,"link",n),mn(a),u.head.appendChild(a)))}}function yA(n,a){Ia.m(n,a);var o=ho;if(o&&n){var u=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+wn(u)+'"][href="'+wn(n)+'"]',g=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=mo(n)}if(!Bi.has(g)&&(n=m({rel:"modulepreload",href:n},a),Bi.set(g,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Gl(g)))return}u=o.createElement("link"),zn(u,"link",n),mn(u),o.head.appendChild(u)}}}function SA(n,a,o){Ia.S(n,a,o);var u=ho;if(u&&n){var d=tr(u).hoistableStyles,g=po(n);a=a||"default";var A=d.get(g);if(!A){var D={loading:0,preload:null};if(A=u.querySelector(Hl(g)))D.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Bi.get(g))&&Bd(n,o);var G=A=u.createElement("link");mn(G),zn(G,"link",n),G._p=new Promise(function(te,de){G.onload=te,G.onerror=de}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,wc(A,a,u)}A={type:"stylesheet",instance:A,count:1,state:D},d.set(g,A)}}}function MA(n,a){Ia.X(n,a);var o=ho;if(o&&n){var u=tr(o).hoistableScripts,d=mo(n),g=u.get(d);g||(g=o.querySelector(Gl(d)),g||(n=m({src:n,async:!0},a),(a=Bi.get(d))&&Fd(n,a),g=o.createElement("script"),mn(g),zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function EA(n,a){Ia.M(n,a);var o=ho;if(o&&n){var u=tr(o).hoistableScripts,d=mo(n),g=u.get(d);g||(g=o.querySelector(Gl(d)),g||(n=m({src:n,async:!0,type:"module"},a),(a=Bi.get(d))&&Fd(n,a),g=o.createElement("script"),mn(g),zn(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function X0(n,a,o,u){var d=(d=ne.current)?Cc(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=po(o.href),o=tr(d).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=po(o.href);var g=tr(d).hoistableStyles,A=g.get(n);if(A||(d=d.ownerDocument||d,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,A),(g=d.querySelector(Hl(n)))&&!g._p&&(A.instance=g,A.state.loading=5),Bi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Bi.set(n,o),g||AA(d,n,o,A.state))),a&&u===null)throw Error(i(528,""));return A}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=mo(o),o=tr(d).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function po(n){return'href="'+wn(n)+'"'}function Hl(n){return'link[rel="stylesheet"]['+n+"]"}function W0(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function AA(n,a,o,u){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=n.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),zn(a,"link",o),mn(a),n.head.appendChild(a))}function mo(n){return'[src="'+wn(n)+'"]'}function Gl(n){return"script[async]"+n}function Y0(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=n.querySelector('style[data-href~="'+wn(o.href)+'"]');if(u)return a.instance=u,mn(u),u;var d=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),mn(u),zn(u,"style",d),wc(u,o.precedence,n),a.instance=u;case"stylesheet":d=po(o.href);var g=n.querySelector(Hl(d));if(g)return a.state.loading|=4,a.instance=g,mn(g),g;u=W0(o),(d=Bi.get(d))&&Bd(u,d),g=(n.ownerDocument||n).createElement("link"),mn(g);var A=g;return A._p=new Promise(function(D,G){A.onload=D,A.onerror=G}),zn(g,"link",u),a.state.loading|=4,wc(g,o.precedence,n),a.instance=g;case"script":return g=mo(o.src),(d=n.querySelector(Gl(g)))?(a.instance=d,mn(d),d):(u=o,(d=Bi.get(g))&&(u=m({},o),Fd(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),mn(d),zn(d,"link",u),n.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,wc(u,o.precedence,n));return a.instance}function wc(n,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,g=d,A=0;A<u.length;A++){var D=u[A];if(D.dataset.precedence===a)g=D;else if(g!==d)break}g?g.parentNode.insertBefore(n,g.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function Bd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function Fd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Dc=null;function q0(n,a,o){if(Dc===null){var u=new Map,d=Dc=new Map;d.set(o,u)}else d=Dc,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var g=o[d];if(!(g[sa]||g[Mn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var A=g.getAttribute(a)||"";A=n+A;var D=u.get(A);D?D.push(g):u.set(A,[g])}}return u}function K0(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function TA(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Q0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Vl=null;function bA(){}function RA(n,a,o){if(Vl===null)throw Error(i(475));var u=Vl;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var d=po(o.href),g=n.querySelector(Hl(d));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=Uc.bind(u),n.then(u,u)),a.state.loading|=4,a.instance=g,mn(g);return}g=n.ownerDocument||n,o=W0(o),(d=Bi.get(d))&&Bd(o,d),g=g.createElement("link"),mn(g);var A=g;A._p=new Promise(function(D,G){A.onload=D,A.onerror=G}),zn(g,"link",o),a.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=Uc.bind(u),n.addEventListener("load",a),n.addEventListener("error",a))}}function CA(){if(Vl===null)throw Error(i(475));var n=Vl;return n.stylesheets&&n.count===0&&zd(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&zd(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Uc(){if(this.count--,this.count===0){if(this.stylesheets)zd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Lc=null;function zd(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Lc=new Map,a.forEach(wA,n),Lc=null,Uc.call(n))}function wA(n,a){if(!(a.state.loading&4)){var o=Lc.get(n);if(o)var u=o.get(null);else{o=new Map,Lc.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var A=d[g];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(o.set(A.dataset.precedence,A),u=A)}u&&o.set(null,u)}d=a.instance,A=d.getAttribute("data-precedence"),g=o.get(A)||u,g===u&&o.set(null,d),o.set(A,d),this.count++,u=Uc.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),g?g.parentNode.insertBefore(d,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),a.state.loading|=4}}var kl={$$typeof:C,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function DA(n,a,o,u,d,g,A,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function j0(n,a,o,u,d,g,A,D,G,te,de,xe){return n=new DA(n,a,o,A,D,G,te,xe),a=1,g===!0&&(a|=24),g=pi(3,null,null,a),n.current=g,g.stateNode=n,a=yh(),a.refCount++,n.pooledCache=a,a.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:a},Ah(g),n}function Z0(n){return n?(n=Ws,n):Ws}function J0(n,a,o,u,d,g){d=Z0(d),u.context===null?u.context=d:u.pendingContext=d,u=rr(a),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=sr(n,u,a),o!==null&&(xi(o,n,a),xl(o,n,a))}function $0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function Hd(n,a){$0(n,a),(n=n.alternate)&&$0(n,a)}function ex(n){if(n.tag===13){var a=Xs(n,67108864);a!==null&&xi(a,n,67108864),Hd(n,67108864)}}var Nc=!0;function UA(n,a,o,u){var d=z.T;z.T=null;var g=Y.p;try{Y.p=2,Gd(n,a,o,u)}finally{Y.p=g,z.T=d}}function LA(n,a,o,u){var d=z.T;z.T=null;var g=Y.p;try{Y.p=8,Gd(n,a,o,u)}finally{Y.p=g,z.T=d}}function Gd(n,a,o,u){if(Nc){var d=Vd(u);if(d===null)Cd(n,a,u,Oc,o),nx(n,u);else if(OA(d,n,a,o,u))u.stopPropagation();else if(nx(n,u),a&4&&-1<NA.indexOf(n)){for(;d!==null;){var g=er(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var A=Je(g.pendingLanes);if(A!==0){var D=g;for(D.pendingLanes|=2,D.entangledLanes|=2;A;){var G=1<<31-ze(A);D.entanglements[1]|=G,A&=~G}fa(g),(Ft&6)===0&&(_c=Ie()+500,Il(0))}}break;case 13:D=Xs(g,2),D!==null&&xi(D,g,2),xc(),Hd(g,2)}if(g=Vd(u),g===null&&Cd(n,a,u,Oc,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else Cd(n,a,u,null,o)}}function Vd(n){return n=qf(n),kd(n)}var Oc=null;function kd(n){if(Oc=null,n=Ma(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=c(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Oc=n,null}function tx(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case Ge:return 2;case Fe:return 8;case lt:case Ct:return 32;case F:return 268435456;default:return 32}default:return 32}}var Xd=!1,xr=null,yr=null,Sr=null,Xl=new Map,Wl=new Map,Mr=[],NA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nx(n,a){switch(n){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Xl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(a.pointerId)}}function Yl(n,a,o,u,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},a!==null&&(a=er(a),a!==null&&ex(a)),n):(n.eventSystemFlags|=u,a=n.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),n)}function OA(n,a,o,u,d){switch(a){case"focusin":return xr=Yl(xr,n,a,o,u,d),!0;case"dragenter":return yr=Yl(yr,n,a,o,u,d),!0;case"mouseover":return Sr=Yl(Sr,n,a,o,u,d),!0;case"pointerover":var g=d.pointerId;return Xl.set(g,Yl(Xl.get(g)||null,n,a,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,Wl.set(g,Yl(Wl.get(g)||null,n,a,o,u,d)),!0}return!1}function ix(n){var a=Ma(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){n.blockedOn=a,Yi(n.priority,function(){if(o.tag===13){var u=vi();u=ot(u);var d=Xs(o,u);d!==null&&xi(d,o,u),Hd(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=Vd(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Yf=u,o.target.dispatchEvent(u),Yf=null}else return a=er(o),a!==null&&ex(a),n.blockedOn=o,!1;a.shift()}return!0}function ax(n,a,o){Pc(n)&&o.delete(a)}function PA(){Xd=!1,xr!==null&&Pc(xr)&&(xr=null),yr!==null&&Pc(yr)&&(yr=null),Sr!==null&&Pc(Sr)&&(Sr=null),Xl.forEach(ax),Wl.forEach(ax)}function Ic(n,a){n.blockedOn===a&&(n.blockedOn=null,Xd||(Xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,PA)))}var Bc=null;function rx(n){Bc!==n&&(Bc=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Bc===n&&(Bc=null);for(var a=0;a<n.length;a+=3){var o=n[a],u=n[a+1],d=n[a+2];if(typeof u!="function"){if(kd(u||o)===null)continue;break}var g=er(o);g!==null&&(n.splice(a,3),a-=3,kh(g,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function ql(n){function a(G){return Ic(G,n)}xr!==null&&Ic(xr,n),yr!==null&&Ic(yr,n),Sr!==null&&Ic(Sr,n),Xl.forEach(a),Wl.forEach(a);for(var o=0;o<Mr.length;o++){var u=Mr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Mr.length&&(o=Mr[0],o.blockedOn===null);)ix(o),o.blockedOn===null&&Mr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],g=o[u+1],A=d[rn]||null;if(typeof g=="function")A||rx(o);else if(A){var D=null;if(g&&g.hasAttribute("formAction")){if(d=g,A=g[rn]||null)D=A.formAction;else if(kd(d)!==null)continue}else D=A.action;typeof D=="function"?o[u+1]=D:(o.splice(u,3),u-=3),rx(o)}}}function Wd(n){this._internalRoot=n}Fc.prototype.render=Wd.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=vi();J0(o,u,n,a,null,null)},Fc.prototype.unmount=Wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;J0(n.current,2,null,n,null,null),xc(),a[ra]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var a=wt();n={blockedOn:null,target:n,priority:a};for(var o=0;o<Mr.length&&a!==0&&a<Mr[o].priority;o++);Mr.splice(o,0,n),o===0&&ix(n)}};var sx=e.version;if(sx!=="19.1.1")throw Error(i(527,sx,"19.1.1"));Y.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(a),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var IA={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{he=zc.inject(IA),ve=zc}catch{}}return Ql.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,u="",d=Mv,g=Ev,A=Av,D=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks)),a=j0(n,1,!1,null,null,o,u,d,g,A,D,null),n[ra]=a.current,Rd(n),new Wd(a)},Ql.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var u=!1,d="",g=Mv,A=Ev,D=Av,G=null,te=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(A=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(G=o.unstable_transitionCallbacks),o.formState!==void 0&&(te=o.formState)),a=j0(n,1,!0,a,o??null,u,d,g,A,D,G,te),a.context=Z0(null),o=a.current,u=vi(),u=ot(u),d=rr(u),d.callback=null,sr(o,d,u),o=u,a.current.lanes=o,He(a,o),fa(a),n[ra]=a.current,Rd(n),new Fc(a)},Ql.version="19.1.1",Ql}var gx;function YA(){if(gx)return Kd.exports;gx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kd.exports=WA(),Kd.exports}var qA=YA();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _x="popstate";function KA(r={}){function e(i,s){let{pathname:l,search:c,hash:f}=i.location;return Xp("",{pathname:l,search:c,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:uu(s)}return jA(e,t,null,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function xa(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QA(){return Math.random().toString(36).substring(2,10)}function vx(r,e){return{usr:r.state,key:r.key,idx:e}}function Xp(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Zo(e):e,state:t,key:e&&e.key||i||QA()}}function uu({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Zo(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function jA(r,e,t,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,f="POP",p=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function _(){f="POP";let S=m(),x=S==null?null:S-h;h=S,p&&p({action:f,location:M.location,delta:x})}function v(S,x){f="PUSH";let T=Xp(M.location,S,x);h=m()+1;let C=vx(T,h),b=M.createHref(T);try{c.pushState(C,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;s.location.assign(b)}l&&p&&p({action:f,location:M.location,delta:1})}function y(S,x){f="REPLACE";let T=Xp(M.location,S,x);h=m();let C=vx(T,h),b=M.createHref(T);c.replaceState(C,"",b),l&&p&&p({action:f,location:M.location,delta:0})}function E(S){return ZA(S)}let M={get action(){return f},get location(){return r(s,c)},listen(S){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(_x,_),p=S,()=>{s.removeEventListener(_x,_),p=null}},createHref(S){return e(s,S)},createURL:E,encodeLocation(S){let x=E(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(S){return c.go(S)}};return M}function ZA(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),an(t,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:uu(r);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Gy(r,e,t="/"){return JA(r,e,t,!1)}function JA(r,e,t,i){let s=typeof e=="string"?Zo(e):e,l=Ka(s.pathname||"/",t);if(l==null)return null;let c=Vy(r);$A(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let h=cT(l);f=lT(c[p],h,i)}return f}function Vy(r,e=[],t=[],i="",s=!1){let l=(c,f,p=s,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(i)&&p)return;an(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length)}let _=Ya([i,m.relativePath]),v=t.concat(m);c.children&&c.children.length>0&&(an(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Vy(c.children,e,v,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:sT(_,c.index),routesMeta:v})};return r.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let p of ky(c.path))l(c,f,!0,p)}),e}function ky(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=ky(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function $A(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:oT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var eT=/^:[\w-]+$/,tT=3,nT=2,iT=1,aT=10,rT=-2,xx=r=>r==="*";function sT(r,e){let t=r.split("/"),i=t.length;return t.some(xx)&&(i+=rT),e&&(i+=nT),t.filter(s=>!xx(s)).reduce((s,l)=>s+(eT.test(l)?tT:l===""?iT:aT),i)}function oT(r,e){return r.length===e.length&&r.slice(0,-1).every((i,s)=>i===e[s])?r[r.length-1]-e[e.length-1]:0}function lT(r,e,t=!1){let{routesMeta:i}=r,s={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,m=l==="/"?e:e.slice(l.length)||"/",_=bf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),v=p.route;if(!_&&h&&t&&!i[i.length-1].route.index&&(_=bf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!_)return null;Object.assign(s,_.params),c.push({params:s,pathname:Ya([l,_.pathname]),pathnameBase:pT(Ya([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ya([l,_.pathnameBase]))}return c}function bf(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=uT(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((h,{paramName:m,isOptional:_},v)=>{if(m==="*"){let E=f[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const y=f[v];return _&&!y?h[m]=void 0:h[m]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function uT(r,e=!1,t=!0){xa(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function cT(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xa(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ka(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function fT(r,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof r=="string"?Zo(r):r;return{pathname:t?t.startsWith("/")?t:hT(t,e):e,search:mT(i),hash:gT(s)}}function hT(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Jd(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Xy(r){let e=dT(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Wy(r,e,t,i=!1){let s;typeof r=="string"?s=Zo(r):(s={...r},an(!s.pathname||!s.pathname.includes("?"),Jd("?","pathname","search",s)),an(!s.pathname||!s.pathname.includes("#"),Jd("#","pathname","hash",s)),an(!s.search||!s.search.includes("#"),Jd("#","search","hash",s)));let l=r===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=t;else{let _=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;s.pathname=v.join("/")}f=_>=0?e[_]:"/"}let p=fT(s,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var Ya=r=>r.join("/").replace(/\/\/+/g,"/"),pT=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),mT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function _T(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yy=["POST","PUT","PATCH","DELETE"];new Set(Yy);var vT=["GET",...Yy];new Set(vT);var Jo=oe.createContext(null);Jo.displayName="DataRouter";var Bf=oe.createContext(null);Bf.displayName="DataRouterState";oe.createContext(!1);var qy=oe.createContext({isTransitioning:!1});qy.displayName="ViewTransition";var xT=oe.createContext(new Map);xT.displayName="Fetchers";var yT=oe.createContext(null);yT.displayName="Await";var Sa=oe.createContext(null);Sa.displayName="Navigation";var yu=oe.createContext(null);yu.displayName="Location";var $a=oe.createContext({outlet:null,matches:[],isDataRoute:!1});$a.displayName="Route";var tg=oe.createContext(null);tg.displayName="RouteError";function ST(r,{relative:e}={}){an(Su(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=oe.useContext(Sa),{hash:s,pathname:l,search:c}=Mu(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ya([t,l])),i.createHref({pathname:f,search:c,hash:s})}function Su(){return oe.useContext(yu)!=null}function Ls(){return an(Su(),"useLocation() may be used only in the context of a <Router> component."),oe.useContext(yu).location}var Ky="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qy(r){oe.useContext(Sa).static||oe.useLayoutEffect(r)}function MT(){let{isDataRoute:r}=oe.useContext($a);return r?PT():ET()}function ET(){an(Su(),"useNavigate() may be used only in the context of a <Router> component.");let r=oe.useContext(Jo),{basename:e,navigator:t}=oe.useContext(Sa),{matches:i}=oe.useContext($a),{pathname:s}=Ls(),l=JSON.stringify(Xy(i)),c=oe.useRef(!1);return Qy(()=>{c.current=!0}),oe.useCallback((p,h={})=>{if(xa(c.current,Ky),!c.current)return;if(typeof p=="number"){t.go(p);return}let m=Wy(p,JSON.parse(l),s,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ya([e,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[e,t,l,s,r])}oe.createContext(null);function Mu(r,{relative:e}={}){let{matches:t}=oe.useContext($a),{pathname:i}=Ls(),s=JSON.stringify(Xy(t));return oe.useMemo(()=>Wy(r,JSON.parse(s),i,e==="path"),[r,s,i,e])}function AT(r,e){return jy(r,e)}function jy(r,e,t,i,s){an(Su(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=oe.useContext(Sa),{matches:c}=oe.useContext($a),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",_=f&&f.route;{let T=_&&_.path||"";Zy(h,!_||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let v=Ls(),y;if(e){let T=typeof e=="string"?Zo(e):e;an(m==="/"||T.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${T.pathname}" was given in the \`location\` prop.`),y=T}else y=v;let E=y.pathname||"/",M=E;if(m!=="/"){let T=m.replace(/^\//,"").split("/");M="/"+E.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=Gy(r,{pathname:M});xa(_||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),xa(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=wT(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},p,T.params),pathname:Ya([m,l.encodeLocation?l.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:Ya([m,l.encodeLocation?l.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,t,i,s);return e&&x?oe.createElement(yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},x):x}function TT(){let r=OT(),e=_T(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=oe.createElement(oe.Fragment,null,oe.createElement("p",null,"💿 Hey developer 👋"),oe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",oe.createElement("code",{style:l},"ErrorBoundary")," or"," ",oe.createElement("code",{style:l},"errorElement")," prop on your route.")),oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?oe.createElement("pre",{style:s},t):null,c)}var bT=oe.createElement(TT,null),RT=class extends oe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?oe.createElement($a.Provider,{value:this.props.routeContext},oe.createElement(tg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CT({routeContext:r,match:e,children:t}){let i=oe.useContext(Jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),oe.createElement($a.Provider,{value:r},t)}function wT(r,e=[],t=null,i=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,c=t?.errors;if(c!=null){let h=l.findIndex(m=>m.route.id&&c?.[m.route.id]!==void 0);an(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(t)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:_,errors:v}=t,y=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||y){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,m,_)=>{let v,y=!1,E=null,M=null;t&&(v=c&&m.route.id?c[m.route.id]:void 0,E=m.route.errorElement||bT,f&&(p<0&&_===0?(Zy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):p===_&&(y=!0,M=m.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,_+1)),x=()=>{let T;return v?T=E:y?T=M:m.route.Component?T=oe.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=h,oe.createElement(CT,{match:m,routeContext:{outlet:h,matches:S,isDataRoute:t!=null},children:T})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?oe.createElement(RT,{location:t.location,revalidation:t.revalidation,component:E,error:v,children:x(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:i}):x()},null)}function ng(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DT(r){let e=oe.useContext(Jo);return an(e,ng(r)),e}function UT(r){let e=oe.useContext(Bf);return an(e,ng(r)),e}function LT(r){let e=oe.useContext($a);return an(e,ng(r)),e}function ig(r){let e=LT(r),t=e.matches[e.matches.length-1];return an(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function NT(){return ig("useRouteId")}function OT(){let r=oe.useContext(tg),e=UT("useRouteError"),t=ig("useRouteError");return r!==void 0?r:e.errors?.[t]}function PT(){let{router:r}=DT("useNavigate"),e=ig("useNavigate"),t=oe.useRef(!1);return Qy(()=>{t.current=!0}),oe.useCallback(async(s,l={})=>{xa(t.current,Ky),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var yx={};function Zy(r,e,t){!e&&!yx[r]&&(yx[r]=!0,xa(!1,t))}oe.memo(IT);function IT({routes:r,future:e,state:t,unstable_onError:i}){return jy(r,void 0,t,i,e)}function Wp(r){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BT({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:l=!1}){an(!Su(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),f=oe.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof t=="string"&&(t=Zo(t));let{pathname:p="/",search:h="",hash:m="",state:_=null,key:v="default"}=t,y=oe.useMemo(()=>{let E=Ka(p,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:_,key:v},navigationType:i}},[c,p,h,m,_,v,i]);return xa(y!=null,`<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:oe.createElement(Sa.Provider,{value:f},oe.createElement(yu.Provider,{children:e,value:y}))}function FT({children:r,location:e}){return AT(Yp(r),e)}function Yp(r,e=[]){let t=[];return oe.Children.forEach(r,(i,s)=>{if(!oe.isValidElement(i))return;let l=[...e,s];if(i.type===oe.Fragment){t.push.apply(t,Yp(i.props.children,l));return}an(i.type===Wp,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Yp(i.props.children,l)),t.push(c)}),t}var gf="get",_f="application/x-www-form-urlencoded";function Ff(r){return r!=null&&typeof r.tagName=="string"}function zT(r){return Ff(r)&&r.tagName.toLowerCase()==="button"}function HT(r){return Ff(r)&&r.tagName.toLowerCase()==="form"}function GT(r){return Ff(r)&&r.tagName.toLowerCase()==="input"}function VT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function kT(r,e){return r.button===0&&(!e||e==="_self")&&!VT(r)}var Hc=null;function XT(){if(Hc===null)try{new FormData(document.createElement("form"),0),Hc=!1}catch{Hc=!0}return Hc}var WT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $d(r){return r!=null&&!WT.has(r)?(xa(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_f}"`),null):r}function YT(r,e){let t,i,s,l,c;if(HT(r)){let f=r.getAttribute("action");i=f?Ka(f,e):null,t=r.getAttribute("method")||gf,s=$d(r.getAttribute("enctype"))||_f,l=new FormData(r)}else if(zT(r)||GT(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(i=p?Ka(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||gf,s=$d(r.getAttribute("formenctype"))||$d(f.getAttribute("enctype"))||_f,l=new FormData(f,r),!XT()){let{name:h,type:m,value:_}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if(Ff(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=gf,i=null,s=_f,c=r}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ag(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function qT(r,e,t){let i=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i.pathname==="/"?i.pathname=`_root.${t}`:e&&Ka(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${t}`,i}async function KT(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function QT(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function jT(r,e,t){let i=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await KT(l,t);return c.links?c.links():[]}return[]}));return eb(i.flat(1).filter(QT).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Sx(r,e,t,i,s,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,f=(p,h)=>t[h].pathname!==p.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==p.params["*"];return l==="assets"?e.filter((p,h)=>c(p,h)||f(p,h)):l==="data"?e.filter((p,h)=>{let m=i.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(c(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function ZT(r,e,{includeHydrateFallback:t}={}){return JT(r.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function JT(r){return[...new Set(r)]}function $T(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function eb(r,e){let t=new Set;return new Set(e),r.reduce((i,s)=>{let l=JSON.stringify($T(s));return t.has(l)||(t.add(l),i.push({key:l,link:s})),i},[])}function Jy(){let r=oe.useContext(Jo);return ag(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function tb(){let r=oe.useContext(Bf);return ag(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rg=oe.createContext(void 0);rg.displayName="FrameworkContext";function $y(){let r=oe.useContext(rg);return ag(r,"You must render this element inside a <HydratedRouter> element"),r}function nb(r,e){let t=oe.useContext(rg),[i,s]=oe.useState(!1),[l,c]=oe.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:_}=e,v=oe.useRef(null);oe.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=x=>{x.forEach(T=>{c(T.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),oe.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let y=()=>{s(!0)},E=()=>{s(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:jl(f,y),onBlur:jl(p,E),onMouseEnter:jl(h,y),onMouseLeave:jl(m,E),onTouchStart:jl(_,y)}]:[!1,v,{}]}function jl(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ib({page:r,...e}){let{router:t}=Jy(),i=oe.useMemo(()=>Gy(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?oe.createElement(rb,{page:r,matches:i,...e}):null}function ab(r){let{manifest:e,routeModules:t}=$y(),[i,s]=oe.useState([]);return oe.useEffect(()=>{let l=!1;return jT(r,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[r,e,t]),i}function rb({page:r,matches:e,...t}){let i=Ls(),{manifest:s,routeModules:l}=$y(),{basename:c}=Jy(),{loaderData:f,matches:p}=tb(),h=oe.useMemo(()=>Sx(r,e,p,s,i,"data"),[r,e,p,s,i]),m=oe.useMemo(()=>Sx(r,e,p,s,i,"assets"),[r,e,p,s,i]),_=oe.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let E=new Set,M=!1;if(e.forEach(x=>{let T=s.routes[x.route.id];!T||!T.hasLoader||(!h.some(C=>C.route.id===x.route.id)&&x.route.id in f&&l[x.route.id]?.shouldRevalidate||T.hasClientLoader?M=!0:E.add(x.route.id))}),E.size===0)return[];let S=qT(r,c,"data");return M&&E.size>0&&S.searchParams.set("_routes",e.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[S.pathname+S.search]},[c,f,i,s,h,e,r,l]),v=oe.useMemo(()=>ZT(m,s),[m,s]),y=ab(m);return oe.createElement(oe.Fragment,null,_.map(E=>oe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>oe.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:M})=>oe.createElement("link",{key:E,nonce:t.nonce,...M})))}function sb(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var eS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eS&&(window.__reactRouterVersion="7.9.1")}catch{}function ob({basename:r,children:e,window:t}){let i=oe.useRef();i.current==null&&(i.current=KA({window:t,v5Compat:!0}));let s=i.current,[l,c]=oe.useState({action:s.action,location:s.location}),f=oe.useCallback(p=>{oe.startTransition(()=>c(p))},[c]);return oe.useLayoutEffect(()=>s.listen(f),[s,f]),oe.createElement(BT,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:s})}var tS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nS=oe.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:f,target:p,to:h,preventScrollReset:m,viewTransition:_,...v},y){let{basename:E}=oe.useContext(Sa),M=typeof h=="string"&&tS.test(h),S,x=!1;if(typeof h=="string"&&M&&(S=h,eS))try{let R=new URL(window.location.href),U=h.startsWith("//")?new URL(R.protocol+h):new URL(h),B=Ka(U.pathname,E);U.origin===R.origin&&B!=null?h=B+U.search+U.hash:x=!0}catch{xa(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=ST(h,{relative:s}),[C,b,L]=nb(i,v),P=fb(h,{replace:c,state:f,target:p,preventScrollReset:m,relative:s,viewTransition:_});function I(R){e&&e(R),R.defaultPrevented||P(R)}let H=oe.createElement("a",{...v,...L,href:S||T,onClick:x||l?e:I,ref:sb(y,b),target:p,"data-discover":!M&&t==="render"?"true":void 0});return C&&!M?oe.createElement(oe.Fragment,null,H,oe.createElement(ib,{page:T})):H});nS.displayName="Link";var lb=oe.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:f,children:p,...h},m){let _=Mu(c,{relative:h.relative}),v=Ls(),y=oe.useContext(Bf),{navigator:E,basename:M}=oe.useContext(Sa),S=y!=null&&gb(_)&&f===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,T=v.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(T=T.toLowerCase(),C=C?C.toLowerCase():null,x=x.toLowerCase()),C&&M&&(C=Ka(C,M)||C);const b=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let L=T===x||!s&&T.startsWith(x)&&T.charAt(b)==="/",P=C!=null&&(C===x||!s&&C.startsWith(x)&&C.charAt(x.length)==="/"),I={isActive:L,isPending:P,isTransitioning:S},H=L?e:void 0,R;typeof i=="function"?R=i(I):R=[i,L?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(I):l;return oe.createElement(nS,{...h,"aria-current":H,className:R,ref:m,style:U,to:c,viewTransition:f},typeof p=="function"?p(I):p)});lb.displayName="NavLink";var ub=oe.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:l,method:c=gf,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:_,...v},y)=>{let E=pb(),M=mb(f,{relative:h}),S=c.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&tS.test(f),T=C=>{if(p&&p(C),C.defaultPrevented)return;C.preventDefault();let b=C.nativeEvent.submitter,L=b?.getAttribute("formmethod")||c;E(b||C.currentTarget,{fetcherKey:e,method:L,navigate:t,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:_})};return oe.createElement("form",{ref:y,method:S,action:M,onSubmit:i?p:T,...v,"data-discover":!x&&r==="render"?"true":void 0})});ub.displayName="Form";function cb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iS(r){let e=oe.useContext(Jo);return an(e,cb(r)),e}function fb(r,{target:e,replace:t,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let f=MT(),p=Ls(),h=Mu(r,{relative:l});return oe.useCallback(m=>{if(kT(m,e)){m.preventDefault();let _=t!==void 0?t:uu(p)===uu(h);f(r,{replace:_,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[p,f,h,t,i,e,r,s,l,c])}var hb=0,db=()=>`__${String(++hb)}__`;function pb(){let{router:r}=iS("useSubmit"),{basename:e}=oe.useContext(Sa),t=NT();return oe.useCallback(async(i,s={})=>{let{action:l,method:c,encType:f,formData:p,body:h}=YT(i,e);if(s.navigate===!1){let m=s.fetcherKey||db();await r.fetch(m,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||f,flushSync:s.flushSync})}else await r.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||c,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function mb(r,{relative:e}={}){let{basename:t}=oe.useContext(Sa),i=oe.useContext($a);an(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...Mu(r||".",{relative:e})},c=Ls();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(m=>m==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ya([t,l.pathname])),uu(l)}function gb(r,{relative:e}={}){let t=oe.useContext(qy);an(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=iS("useViewTransitionState"),s=Mu(r,{relative:e});if(!t.isTransitioning)return!1;let l=Ka(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Ka(t.nextLocation.pathname,i)||t.nextLocation.pathname;return bf(s.pathname,c)!=null||bf(s.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="180",_b=0,Mx=1,vb=2,aS=1,xb=2,Va=3,Qa=0,On=1,Ei=2,va=0,Oo=1,Ex=2,Ax=3,Tx=4,yb=5,ys=100,Sb=101,Mb=102,Eb=103,Ab=104,Tb=200,bb=201,Rb=202,Cb=203,qp=204,Kp=205,wb=206,Db=207,Ub=208,Lb=209,Nb=210,Ob=211,Pb=212,Ib=213,Bb=214,Qp=0,jp=1,Zp=2,zo=3,Jp=4,$p=5,em=6,tm=7,rS=0,Fb=1,zb=2,Nr=0,Hb=1,Gb=2,Vb=3,kb=4,Xb=5,Wb=6,Yb=7,sS=300,Ho=301,Go=302,nm=303,im=304,Hf=306,am=1e3,Ms=1001,rm=1002,ia=1003,qb=1004,Gc=1005,Qn=1006,ep=1007,Es=1008,Ci=1009,oS=1010,lS=1011,cu=1012,sg=1013,Ir=1014,Wa=1015,Eu=1016,og=1017,lg=1018,Vo=1020,uS=35902,cS=35899,fS=1021,hS=1022,ta=1023,fu=1026,ko=1027,dS=1028,ug=1029,pS=1030,cg=1031,fg=1033,vf=33776,xf=33777,yf=33778,Sf=33779,sm=35840,om=35841,lm=35842,um=35843,cm=36196,fm=37492,hm=37496,dm=37808,pm=37809,mm=37810,gm=37811,_m=37812,vm=37813,xm=37814,ym=37815,Sm=37816,Mm=37817,Em=37818,Am=37819,Tm=37820,bm=37821,Rm=36492,Cm=36494,wm=36495,Dm=36283,Um=36284,Lm=36285,Nm=36286,Au=3200,Kb=3201,Qb=0,jb=1,pa="",dn="srgb",Br="srgb-linear",Rf="linear",Xt="srgb",go=7680,bx=519,Zb=512,Jb=513,$b=514,mS=515,e1=516,t1=517,n1=518,i1=519,Rx=35044,Om="300 es",ga=2e3,Cf=2001;class Gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=Math.PI/180,Pm=180/Math.PI;function Tu(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function a1(r,e){return(r%e+e)%e}function np(r,e,t){return(1-t)*r+t*e}function Zl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bu{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,l,c,f){let p=i[s+0],h=i[s+1],m=i[s+2],_=i[s+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(_!==M||p!==v||h!==y||m!==E){let S=1-f;const x=p*v+h*y+m*E+_*M,T=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const L=Math.sqrt(C),P=Math.atan2(L,x*T);S=Math.sin(S*P)/L,f=Math.sin(f*P)/L}const b=f*T;if(p=p*S+v*b,h=h*S+y*b,m=m*S+E*b,_=_*S+M*b,S===1-f){const L=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=L,h*=L,m*=L,_*=L}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,l,c){const f=i[s],p=i[s+1],h=i[s+2],m=i[s+3],_=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+m*_+p*y-h*v,e[t+1]=p*E+m*v+h*_-f*y,e[t+2]=h*E+m*y+f*v-p*_,e[t+3]=m*E-f*_-p*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(i/2),m=f(s/2),_=f(l/2),v=p(i/2),y=p(s/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*_+h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_-v*y*E;break;case"YXZ":this._x=v*m*_+h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_+v*y*E;break;case"ZXY":this._x=v*m*_-h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_-v*y*E;break;case"ZYX":this._x=v*m*_-h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_+v*y*E;break;case"YZX":this._x=v*m*_+h*y*E,this._y=h*y*_+v*m*E,this._z=h*m*E-v*y*_,this._w=h*m*_-v*y*E;break;case"XZY":this._x=v*m*_-h*y*E,this._y=h*y*_-v*m*E,this._z=h*m*E+v*y*_,this._w=h*m*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],p=t[9],h=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-p)*y,this._y=(l-h)*y,this._z=(c-s)*y}else if(i>f&&i>_){const y=2*Math.sqrt(1+i-f-_);this._w=(m-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+h)/y}else if(f>_){const y=2*Math.sqrt(1+f-i-_);this._w=(l-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+_-i-f);this._w=(c-s)/y,this._x=(l+h)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,l=e._z,c=e._w,f=t._x,p=t._y,h=t._z,m=t._w;return this._x=i*m+c*f+s*h-l*p,this._y=s*m+c*p+l*f-i*h,this._z=l*m+c*h+i*p-s*f,this._w=c*m-i*f-s*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*_+this._w*v,this._x=i*_+this._x*v,this._y=s*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*s,this.y=l[1]*t+l[4]*i+l[7]*s,this.z=l[2]*t+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,l=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*s-f*i),m=2*(f*t-l*s),_=2*(l*i-c*t);return this.x=t+p*h+c*_-f*m,this.y=i+p*m+f*h-l*_,this.z=s+p*_+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s,this.y=l[1]*t+l[5]*i+l[9]*s,this.z=l[2]*t+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,l=e.z,c=t.x,f=t.y,p=t.z;return this.x=s*p-l*f,this.y=l*c-i*p,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ip.copy(this).projectOnVector(e),this.sub(ip)}reflect(e){return this.sub(ip.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ip=new ce,Cx=new bu;class ht{constructor(e,t,i,s,l,c,f,p,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,p,h)}set(e,t,i,s,l,c,f,p,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=p,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[3],p=i[6],h=i[1],m=i[4],_=i[7],v=i[2],y=i[5],E=i[8],M=s[0],S=s[3],x=s[6],T=s[1],C=s[4],b=s[7],L=s[2],P=s[5],I=s[8];return l[0]=c*M+f*T+p*L,l[3]=c*S+f*C+p*P,l[6]=c*x+f*b+p*I,l[1]=h*M+m*T+_*L,l[4]=h*S+m*C+_*P,l[7]=h*x+m*b+_*I,l[2]=v*M+y*T+E*L,l[5]=v*S+y*C+E*P,l[8]=v*x+y*b+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-i*l*m+i*f*p+s*l*h-s*c*p}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],_=m*c-f*h,v=f*p-m*l,y=h*l-c*p,E=t*_+i*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(s*h-m*i)*M,e[2]=(f*i-s*c)*M,e[3]=v*M,e[4]=(m*t-s*p)*M,e[5]=(s*l-f*t)*M,e[6]=y*M,e[7]=(i*p-h*t)*M,e[8]=(c*t-i*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(i*p,i*h,-i*(p*c+h*f)+c+e,-s*h,s*p,-s*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ap.makeScale(e,t)),this}rotate(e){return this.premultiply(ap.makeRotation(-e)),this}translate(e,t){return this.premultiply(ap.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ap=new ht;function gS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r1(){const r=wf("canvas");return r.style.display="block",r}const wx={};function hu(r){r in wx||(wx[r]=!0,console.warn(r))}function s1(r,e,t){return new Promise(function(i,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const Dx=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o1(){const r={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xt&&(s.r=qa(s.r),s.g=qa(s.g),s.b=qa(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xt&&(s.r=Po(s.r),s.g=Po(s.g),s.b=Po(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pa?Rf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return hu("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return hu("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Br]:{primaries:e,whitePoint:i,transfer:Rf,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:Dx,fromXYZ:Ux,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}const Lt=o1();function qa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _o;class l1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_o===void 0&&(_o=wf("canvas")),_o.width=e.width,_o.height=e.height;const s=_o.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_o}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=qa(l[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qa(t[i]/255)*255):t[i]=qa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Tu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(rp(s[c].image)):l.push(rp(s[c]))}else l=rp(s);i.url=l}return t||(e.images[this.uuid]=i),i}}function rp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?l1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c1=0;const sp=new ce;class Hn extends Gr{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=Ms,s=Ms,l=Qn,c=Es,f=ta,p=Ci,h=Hn.DEFAULT_ANISOTROPY,m=pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Tu(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case am:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case rm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case am:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case rm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=sS;Hn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,t=0,i=0,s=1){pn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,l;const p=e.elements,h=p[0],m=p[4],_=p[8],v=p[1],y=p[5],E=p[9],M=p[2],S=p[6],x=p[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,b=(y+1)/2,L=(x+1)/2,P=(m+v)/4,I=(_+M)/4,H=(E+S)/4;return C>b&&C>L?C<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(C),s=P/i,l=I/i):b>L?b<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(b),i=P/s,l=H/s):L<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(L),i=I/l,s=H/l),this.set(i,s,l,t),this}let T=Math.sqrt((S-E)*(S-E)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(_-M)/T,this.z=(v-m)/T,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f1 extends Gr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t);const s={width:e,height:t,depth:i.depth},l=new Hn(s);this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hg(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends f1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _S extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ia,this.minFilter=ia,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ia,this.minFilter=ia,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ru{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Zi):Zi.fromBufferAttribute(l,c),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vc.copy(i.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jl),kc.subVectors(this.max,Jl),vo.subVectors(e.a,Jl),xo.subVectors(e.b,Jl),yo.subVectors(e.c,Jl),Ar.subVectors(xo,vo),Tr.subVectors(yo,xo),ls.subVectors(vo,yo);let t=[0,-Ar.z,Ar.y,0,-Tr.z,Tr.y,0,-ls.z,ls.y,Ar.z,0,-Ar.x,Tr.z,0,-Tr.x,ls.z,0,-ls.x,-Ar.y,Ar.x,0,-Tr.y,Tr.x,0,-ls.y,ls.x,0];return!op(t,vo,xo,yo,kc)||(t=[1,0,0,0,1,0,0,0,1],!op(t,vo,xo,yo,kc))?!1:(Xc.crossVectors(Ar,Tr),t=[Xc.x,Xc.y,Xc.z],op(t,vo,xo,yo,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ba=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Zi=new ce,Vc=new Ru,vo=new ce,xo=new ce,yo=new ce,Ar=new ce,Tr=new ce,ls=new ce,Jl=new ce,kc=new ce,Xc=new ce,us=new ce;function op(r,e,t,i,s){for(let l=0,c=r.length-3;l<=c;l+=3){us.fromArray(r,l);const f=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),p=e.dot(us),h=t.dot(us),m=i.dot(us);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const d1=new Ru,$l=new ce,lp=new ce;class dg{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):d1.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$l.subVectors(e,this.center);const t=$l.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($l,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($l.copy(e.center).add(lp)),this.expandByPoint($l.copy(e.center).sub(lp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fa=new ce,up=new ce,Wc=new ce,br=new ce,cp=new ce,Yc=new ce,fp=new ce;class p1{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fa.copy(this.origin).addScaledVector(this.direction,t),Fa.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){up.copy(e).add(t).multiplyScalar(.5),Wc.copy(t).sub(e).normalize(),br.copy(this.origin).sub(up);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Wc),f=br.dot(this.direction),p=-br.dot(Wc),h=br.lengthSq(),m=Math.abs(1-c*c);let _,v,y,E;if(m>0)if(_=c*p-f,v=c*f-p,E=l*m,_>=0)if(v>=-E)if(v<=E){const M=1/m;_*=M,v*=M,y=_*(_+c*v+2*f)+v*(c*_+v+2*p)+h}else v=l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*p)+h;else v=-l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*p)+h;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-p),l),y=-_*_+v*(v+2*p)+h):v<=E?(_=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+h):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-p),l),y=-_*_+v*(v+2*p)+h);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*p)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(up).addScaledVector(Wc,v),y}intersectSphere(e,t){Fa.subVectors(e.center,this.origin);const i=Fa.dot(this.direction),s=Fa.dot(Fa)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=i-c,p=i+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(i=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(i=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>s||((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),i>p||f>s)||((f>i||i!==i)&&(i=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fa)!==null}intersectTriangle(e,t,i,s,l){cp.subVectors(t,e),Yc.subVectors(i,e),fp.crossVectors(cp,Yc);let c=this.direction.dot(fp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;br.subVectors(this.origin,e);const p=f*this.direction.dot(Yc.crossVectors(br,Yc));if(p<0)return null;const h=f*this.direction.dot(cp.cross(br));if(h<0||p+h>c)return null;const m=-f*br.dot(fp);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn{constructor(e,t,i,s,l,c,f,p,h,m,_,v,y,E,M,S){bn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,p,h,m,_,v,y,E,M,S)}set(e,t,i,s,l,c,f,p,h,m,_,v,y,E,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=h,x[6]=m,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/So.setFromMatrixColumn(e,0).length(),l=1/So.setFromMatrixColumn(e,1).length(),c=1/So.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),p=Math.cos(s),h=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,y=c*_,E=f*m,M=f*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=y+E*h,t[5]=v-M*h,t[9]=-f*p,t[2]=M-v*h,t[6]=E+y*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*m,y=p*_,E=h*m,M=h*_;t[0]=v+M*f,t[4]=E*f-y,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=y*f-E,t[6]=M+v*f,t[10]=c*p}else if(e.order==="ZXY"){const v=p*m,y=p*_,E=h*m,M=h*_;t[0]=v-M*f,t[4]=-c*_,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*m,t[9]=M-v*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const v=c*m,y=c*_,E=f*m,M=f*_;t[0]=p*m,t[4]=E*h-y,t[8]=v*h+M,t[1]=p*_,t[5]=M*h+v,t[9]=y*h-E,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,y=c*h,E=f*p,M=f*h;t[0]=p*m,t[4]=M-v*_,t[8]=E*_+y,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=y*_+E,t[10]=v-M*_}else if(e.order==="XZY"){const v=c*p,y=c*h,E=f*p,M=f*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=v*_+M,t[5]=c*m,t[9]=y*_-E,t[2]=E*_-y,t[6]=f*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m1,e,g1)}lookAt(e,t,i){const s=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Rr.crossVectors(i,yi),Rr.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Rr.crossVectors(i,yi)),Rr.normalize(),qc.crossVectors(yi,Rr),s[0]=Rr.x,s[4]=qc.x,s[8]=yi.x,s[1]=Rr.y,s[5]=qc.y,s[9]=yi.y,s[2]=Rr.z,s[6]=qc.z,s[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[4],p=i[8],h=i[12],m=i[1],_=i[5],v=i[9],y=i[13],E=i[2],M=i[6],S=i[10],x=i[14],T=i[3],C=i[7],b=i[11],L=i[15],P=s[0],I=s[4],H=s[8],R=s[12],U=s[1],B=s[5],X=s[9],j=s[13],re=s[2],ee=s[6],z=s[10],Y=s[14],k=s[3],_e=s[7],O=s[11],Z=s[15];return l[0]=c*P+f*U+p*re+h*k,l[4]=c*I+f*B+p*ee+h*_e,l[8]=c*H+f*X+p*z+h*O,l[12]=c*R+f*j+p*Y+h*Z,l[1]=m*P+_*U+v*re+y*k,l[5]=m*I+_*B+v*ee+y*_e,l[9]=m*H+_*X+v*z+y*O,l[13]=m*R+_*j+v*Y+y*Z,l[2]=E*P+M*U+S*re+x*k,l[6]=E*I+M*B+S*ee+x*_e,l[10]=E*H+M*X+S*z+x*O,l[14]=E*R+M*j+S*Y+x*Z,l[3]=T*P+C*U+b*re+L*k,l[7]=T*I+C*B+b*ee+L*_e,l[11]=T*H+C*X+b*z+L*O,l[15]=T*R+C*j+b*Y+L*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],l=e[12],c=e[1],f=e[5],p=e[9],h=e[13],m=e[2],_=e[6],v=e[10],y=e[14],E=e[3],M=e[7],S=e[11],x=e[15];return E*(+l*p*_-s*h*_-l*f*v+i*h*v+s*f*y-i*p*y)+M*(+t*p*y-t*h*v+l*c*v-s*c*y+s*h*m-l*p*m)+S*(+t*h*_-t*f*y-l*c*_+i*c*y+l*f*m-i*h*m)+x*(-s*f*m-t*p*_+t*f*v+s*c*_-i*c*v+i*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],p=e[6],h=e[7],m=e[8],_=e[9],v=e[10],y=e[11],E=e[12],M=e[13],S=e[14],x=e[15],T=_*S*h-M*v*h+M*p*y-f*S*y-_*p*x+f*v*x,C=E*v*h-m*S*h-E*p*y+c*S*y+m*p*x-c*v*x,b=m*M*h-E*_*h+E*f*y-c*M*y-m*f*x+c*_*x,L=E*_*p-m*M*p-E*f*v+c*M*v+m*f*S-c*_*S,P=t*T+i*C+s*b+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=T*I,e[1]=(M*v*l-_*S*l-M*s*y+i*S*y+_*s*x-i*v*x)*I,e[2]=(f*S*l-M*p*l+M*s*h-i*S*h-f*s*x+i*p*x)*I,e[3]=(_*p*l-f*v*l-_*s*h+i*v*h+f*s*y-i*p*y)*I,e[4]=C*I,e[5]=(m*S*l-E*v*l+E*s*y-t*S*y-m*s*x+t*v*x)*I,e[6]=(E*p*l-c*S*l-E*s*h+t*S*h+c*s*x-t*p*x)*I,e[7]=(c*v*l-m*p*l+m*s*h-t*v*h-c*s*y+t*p*y)*I,e[8]=b*I,e[9]=(E*_*l-m*M*l-E*i*y+t*M*y+m*i*x-t*_*x)*I,e[10]=(c*M*l-E*f*l+E*i*h-t*M*h-c*i*x+t*f*x)*I,e[11]=(m*f*l-c*_*l-m*i*h+t*_*h+c*i*y-t*f*y)*I,e[12]=L*I,e[13]=(m*M*s-E*_*s+E*i*v-t*M*v-m*i*S+t*_*S)*I,e[14]=(E*f*s-c*M*s-E*i*p+t*M*p+c*i*S-t*f*S)*I,e[15]=(c*_*s-m*f*s+m*i*p-t*_*p-c*i*v+t*f*v)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,l=e.z;return t[0]*=i,t[4]*=s,t[8]*=l,t[1]*=i,t[5]*=s,t[9]*=l,t[2]*=i,t[6]*=s,t[10]*=l,t[3]*=i,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),l=1-i,c=e.x,f=e.y,p=e.z,h=l*c,m=l*f;return this.set(h*c+i,h*f-s*p,h*p+s*f,0,h*f+s*p,m*f+i,m*p-s*c,0,h*p-s*f,m*p+s*c,l*p*p+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,l=t._x,c=t._y,f=t._z,p=t._w,h=l+l,m=c+c,_=f+f,v=l*h,y=l*m,E=l*_,M=c*m,S=c*_,x=f*_,T=p*h,C=p*m,b=p*_,L=i.x,P=i.y,I=i.z;return s[0]=(1-(M+x))*L,s[1]=(y+b)*L,s[2]=(E-C)*L,s[3]=0,s[4]=(y-b)*P,s[5]=(1-(v+x))*P,s[6]=(S+T)*P,s[7]=0,s[8]=(E+C)*I,s[9]=(S-T)*I,s[10]=(1-(v+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let l=So.set(s[0],s[1],s[2]).length();const c=So.set(s[4],s[5],s[6]).length(),f=So.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],Ji.copy(this);const h=1/l,m=1/c,_=1/f;return Ji.elements[0]*=h,Ji.elements[1]*=h,Ji.elements[2]*=h,Ji.elements[4]*=m,Ji.elements[5]*=m,Ji.elements[6]*=m,Ji.elements[8]*=_,Ji.elements[9]*=_,Ji.elements[10]*=_,t.setFromRotationMatrix(Ji),i.x=l,i.y=c,i.z=f,this}makePerspective(e,t,i,s,l,c,f=ga,p=!1){const h=this.elements,m=2*l/(t-e),_=2*l/(i-s),v=(t+e)/(t-e),y=(i+s)/(i-s);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===ga)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Cf)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,l,c,f=ga,p=!1){const h=this.elements,m=2/(t-e),_=2/(i-s),v=-(t+e)/(t-e),y=-(i+s)/(i-s);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===ga)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===Cf)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const So=new ce,Ji=new bn,m1=new ce(0,0,0),g1=new ce(1,1,1),Rr=new ce,qc=new ce,yi=new ce,Lx=new bn,Nx=new bu;class ja{constructor(e=0,t=0,i=0,s=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],p=s[1],h=s[5],m=s[9],_=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _1=0;const Ox=new ce,Mo=new bu,za=new bn,Kc=new ce,eu=new ce,v1=new ce,x1=new bu,Px=new ce(1,0,0),Ix=new ce(0,1,0),Bx=new ce(0,0,1),Fx={type:"added"},y1={type:"removed"},Eo={type:"childadded",child:null},hp={type:"childremoved",child:null};class bi extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=Tu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bi.DEFAULT_UP.clone();const e=new ce,t=new ja,i=new bu,s=new ce(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bn},normalMatrix:{value:new ht}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(Px,e)}rotateY(e){return this.rotateOnAxis(Ix,e)}rotateZ(e){return this.rotateOnAxis(Bx,e)}translateOnAxis(e,t){return Ox.copy(e).applyQuaternion(this.quaternion),this.position.add(Ox.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Px,e)}translateY(e){return this.translateOnAxis(Ix,e)}translateZ(e){return this.translateOnAxis(Bx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kc.copy(e):Kc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),eu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(eu,Kc,this.up):za.lookAt(Kc,eu,this.up),this.quaternion.setFromRotationMatrix(za),s&&(za.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(za),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fx),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y1),hp.child=e,this.dispatchEvent(hp),hp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fx),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eu,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eu,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),p.length>0&&(i.materials=p),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bi.DEFAULT_UP=new ce(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new ce,Ha=new ce,dp=new ce,Ga=new ce,Ao=new ce,To=new ce,zx=new ce,pp=new ce,mp=new ce,gp=new ce,_p=new pn,vp=new pn,xp=new pn;class ea{constructor(e=new ce,t=new ce,i=new ce){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$i.subVectors(e,t),s.cross($i);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,i,s,l){$i.subVectors(s,t),Ha.subVectors(i,t),dp.subVectors(e,t);const c=$i.dot($i),f=$i.dot(Ha),p=$i.dot(dp),h=Ha.dot(Ha),m=Ha.dot(dp),_=c*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(e,t,i,s,l,c,f,p){return this.getBarycoord(e,t,i,s,Ga)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ga.x),p.addScaledVector(c,Ga.y),p.addScaledVector(f,Ga.z),p)}static getInterpolatedAttribute(e,t,i,s,l,c){return _p.setScalar(0),vp.setScalar(0),xp.setScalar(0),_p.fromBufferAttribute(e,t),vp.fromBufferAttribute(e,i),xp.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(_p,l.x),c.addScaledVector(vp,l.y),c.addScaledVector(xp,l.z),c}static isFrontFacing(e,t,i,s){return $i.subVectors(i,t),Ha.subVectors(e,t),$i.cross(Ha).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ha.subVectors(this.a,this.b),$i.cross(Ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ea.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ea.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,l){return ea.getInterpolation(e,this.a,this.b,this.c,t,i,s,l)}containsPoint(e){return ea.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ea.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,l=this.c;let c,f;Ao.subVectors(s,i),To.subVectors(l,i),pp.subVectors(e,i);const p=Ao.dot(pp),h=To.dot(pp);if(p<=0&&h<=0)return t.copy(i);mp.subVectors(e,s);const m=Ao.dot(mp),_=To.dot(mp);if(m>=0&&_<=m)return t.copy(s);const v=p*_-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(i).addScaledVector(Ao,c);gp.subVectors(e,l);const y=Ao.dot(gp),E=To.dot(gp);if(E>=0&&y<=E)return t.copy(l);const M=y*h-p*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),t.copy(i).addScaledVector(To,f);const S=m*E-y*_;if(S<=0&&_-m>=0&&y-E>=0)return zx.subVectors(l,s),f=(_-m)/(_-m+(y-E)),t.copy(s).addScaledVector(zx,f);const x=1/(S+M+v);return c=M*x,f=v*x,t.copy(i).addScaledVector(Ao,c).addScaledVector(To,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function yp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Lt.workingColorSpace){if(e=a1(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=yp(c,l,e+1/3),this.g=yp(c,l,e),this.b=yp(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=xS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Lt.workingToColorSpace(qn.copy(this),e),Math.round(At(qn.r*255,0,255))*65536+Math.round(At(qn.g*255,0,255))*256+Math.round(At(qn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(qn.copy(this),t);const i=qn.r,s=qn.g,l=qn.b,c=Math.max(i,s,l),f=Math.min(i,s,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const _=c-f;switch(h=m<=.5?_/(c+f):_/(2-c-f),c){case i:p=(s-l)/_+(s<l?6:0);break;case s:p=(l-i)/_+2;break;case l:p=(i-s)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=dn){Lt.workingToColorSpace(qn.copy(this),e);const t=qn.r,i=qn.g,s=qn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Qc);const i=np(Cr.h,Qc.h,t),s=np(Cr.s,Qc.s,t),l=np(Cr.l,Qc.l,t);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*s,this.g=l[1]*t+l[4]*i+l[7]*s,this.b=l[2]*t+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Bt;Bt.NAMES=xS;let S1=0;class $o extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Tu(),this.name="",this.type="Material",this.blending=Oo,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=Kp,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(i.blending=this.blending),this.side!==Qa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qp&&(i.blendSrc=this.blendSrc),this.blendDst!==Kp&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yS extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=rS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new ce,jc=new vt;let M1=0;class Xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rx,this.updateRanges=[],this.gpuType=Wa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jc.fromBufferAttribute(this,t),jc.applyMatrix3(e),this.setXY(t,jc.x,jc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=oi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zl(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zl(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zl(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),s=oi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),i=oi(i,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rx&&(e.usage=this.usage),e}}class SS extends Xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class MS extends Xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ts extends Xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let E1=0;const Fi=new bn,Sp=new bi,bo=new ce,Si=new Ru,tu=new Ru,Nn=new ce;class Vr extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Tu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gS(e)?MS:SS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ht().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return Sp.lookAt(e),Sp.updateMatrix(),this.applyMatrix4(Sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ts(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ru);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const l=t[i];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];tu.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(Si.min,tu.min),Si.expandByPoint(Nn),Nn.addVectors(Si.max,tu.max),Si.expandByPoint(Nn)):(Si.expandByPoint(tu.min),Si.expandByPoint(tu.max))}Si.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)Nn.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(Nn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Nn.fromBufferAttribute(f,h),p&&(bo.fromBufferAttribute(e,h),Nn.add(bo)),s=Math.max(s,i.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let H=0;H<i.count;H++)f[H]=new ce,p[H]=new ce;const h=new ce,m=new ce,_=new ce,v=new vt,y=new vt,E=new vt,M=new ce,S=new ce;function x(H,R,U){h.fromBufferAttribute(i,H),m.fromBufferAttribute(i,R),_.fromBufferAttribute(i,U),v.fromBufferAttribute(l,H),y.fromBufferAttribute(l,R),E.fromBufferAttribute(l,U),m.sub(h),_.sub(h),y.sub(v),E.sub(v);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(B),S.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(B),f[H].add(M),f[R].add(M),f[U].add(M),p[H].add(S),p[R].add(S),p[U].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let H=0,R=T.length;H<R;++H){const U=T[H],B=U.start,X=U.count;for(let j=B,re=B+X;j<re;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const C=new ce,b=new ce,L=new ce,P=new ce;function I(H){L.fromBufferAttribute(s,H),P.copy(L);const R=f[H];C.copy(R),C.sub(L.multiplyScalar(L.dot(R))).normalize(),b.crossVectors(P,R);const B=b.dot(p[H])<0?-1:1;c.setXYZW(H,C.x,C.y,C.z,B)}for(let H=0,R=T.length;H<R;++H){const U=T[H],B=U.start,X=U.count;for(let j=B,re=B+X;j<re;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new ce,l=new ce,c=new ce,f=new ce,p=new ce,h=new ce,m=new ce,_=new ce;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),f.fromBufferAttribute(i,E),p.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.add(m),p.add(m),h.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,p.x,p.y,p.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(s,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(p.length*m);let y=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?y=p[M]*f.data.stride+f.offset:y=p[M]*m;for(let x=0;x<m;x++)v[E++]=h[y++]}return new Xi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vr,i=this.index.array,s=this.attributes;for(const f in s){const p=s[f],h=e(p,i);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],y=e(v,i);p.push(y)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const p in i){const h=i[p];e.data.attributes[p]=h.toJSON(e.data)}const s={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];m.push(y.toJSON(e.data))}m.length>0&&(s[p]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hx=new bn,cs=new p1,Zc=new dg,Gx=new ce,Jc=new ce,$c=new ce,ef=new ce,Mp=new ce,tf=new ce,Vx=new ce,nf=new ce;class na extends bi{constructor(e=new Vr,t=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){tf.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],_=l[p];m!==0&&(Mp.fromBufferAttribute(_,e),c?tf.addScaledVector(Mp,m):tf.addScaledVector(Mp.sub(t),m))}t.add(tf)}return t}raycast(e,t){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(Zc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Zc,Gx)===null||cs.origin.distanceToSquared(Gx)>(e.far-e.near)**2))&&(Hx.copy(l).invert(),cs.copy(e.ray).applyMatrix4(Hx),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=T,L=C;b<L;b+=3){const P=f.getX(b),I=f.getX(b+1),H=f.getX(b+2);s=af(this,x,e,i,h,m,_,P,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const T=f.getX(S),C=f.getX(S+1),b=f.getX(S+2);s=af(this,c,e,i,h,m,_,T,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],T=Math.max(S.start,y.start),C=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let b=T,L=C;b<L;b+=3){const P=b,I=b+1,H=b+2;s=af(this,x,e,i,h,m,_,P,I,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const T=S,C=S+1,b=S+2;s=af(this,c,e,i,h,m,_,T,C,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function A1(r,e,t,i,s,l,c,f){let p;if(e.side===On?p=i.intersectTriangle(c,l,s,!0,f):p=i.intersectTriangle(s,l,c,e.side===Qa,f),p===null)return null;nf.copy(f),nf.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(nf);return h<t.near||h>t.far?null:{distance:h,point:nf.clone(),object:r}}function af(r,e,t,i,s,l,c,f,p,h){r.getVertexPosition(f,Jc),r.getVertexPosition(p,$c),r.getVertexPosition(h,ef);const m=A1(r,e,t,i,Jc,$c,ef,Vx);if(m){const _=new ce;ea.getBarycoord(Vx,Jc,$c,ef,_),s&&(m.uv=ea.getInterpolatedAttribute(s,f,p,h,_,new vt)),l&&(m.uv1=ea.getInterpolatedAttribute(l,f,p,h,_,new vt)),c&&(m.normal=ea.getInterpolatedAttribute(c,f,p,h,_,new ce),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new ce,materialIndex:0};ea.getNormal(Jc,$c,ef,v.normal),m.face=v,m.barycoord=_}return m}class Cu extends Vr{constructor(e=1,t=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,s,c,2),E("x","z","y",1,-1,e,i,-t,s,c,3),E("x","y","z",1,-1,e,t,i,s,l,4),E("x","y","z",-1,-1,e,t,-i,s,l,5),this.setIndex(p),this.setAttribute("position",new Ts(h,3)),this.setAttribute("normal",new Ts(m,3)),this.setAttribute("uv",new Ts(_,2));function E(M,S,x,T,C,b,L,P,I,H,R){const U=b/I,B=L/H,X=b/2,j=L/2,re=P/2,ee=I+1,z=H+1;let Y=0,k=0;const _e=new ce;for(let O=0;O<z;O++){const Z=O*B-j;for(let pe=0;pe<ee;pe++){const Se=pe*U-X;_e[M]=Se*T,_e[S]=Z*C,_e[x]=re,h.push(_e.x,_e.y,_e.z),_e[M]=0,_e[S]=0,_e[x]=P>0?1:-1,m.push(_e.x,_e.y,_e.z),_.push(pe/I),_.push(1-O/H),Y+=1}}for(let O=0;O<H;O++)for(let Z=0;Z<I;Z++){const pe=v+Z+ee*O,Se=v+Z+ee*(O+1),be=v+(Z+1)+ee*(O+1),Be=v+(Z+1)+ee*O;p.push(pe,Se,Be),p.push(Se,be,Be),k+=6}f.addGroup(y,k,R),y+=k,v+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ei(r){const e={};for(let t=0;t<r.length;t++){const i=Xo(r[t]);for(const s in i)e[s]=i[s]}return e}function T1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ES(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const b1={clone:Xo,merge:ei};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=C1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=T1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pg extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=ga,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new ce,kx=new vt,Xx=new vt;class Hi extends pg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pm*2*Math.atan(Math.tan(tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,kx,Xx),t.subVectors(Xx,kx)}setViewOffset(e,t,i,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tp*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/p,t-=c.offsetY*i/h,s*=c.width/p,i*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ro=-90,Co=1;class w1 extends bi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hi(Ro,Co,e,t);s.layers=this.layers,this.add(s);const l=new Hi(Ro,Co,e,t);l.layers=this.layers,this.add(l);const c=new Hi(Ro,Co,e,t);c.layers=this.layers,this.add(c);const f=new Hi(Ro,Co,e,t);f.layers=this.layers,this.add(f);const p=new Hi(Ro,Co,e,t);p.layers=this.layers,this.add(p);const h=new Hi(Ro,Co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,l,c,f,p]=t;for(const h of t)this.remove(h);if(e===ga)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,l),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,f),e.setRenderTarget(i,3,s),e.render(t,p),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(_,v,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class AS extends Hn{constructor(e=[],t=Ho,i,s,l,c,f,p,h,m){super(e,t,i,s,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D1 extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new AS(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Cu(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:va});l.uniforms.tEquirect.value=t;const c=new na(s,l),f=t.minFilter;return t.minFilter===Es&&(t.minFilter=Qn),new w1(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(l)}}class rf extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U1={type:"move"};class Ep{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(h,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,E=.005;h.inputState.pinching&&v>y+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(U1)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Im extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ap=new ce,L1=new ce,N1=new ht;class gs{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ap.subVectors(i,t).cross(L1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ap),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||N1.getNormalMatrix(e),s=this.coplanarPoint(Ap).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new dg,O1=new vt(.5,.5),sf=new ce;class TS{constructor(e=new gs,t=new gs,i=new gs,s=new gs,l=new gs,c=new gs){this.planes=[e,t,i,s,l,c]}set(e,t,i,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ga,i=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],p=l[2],h=l[3],m=l[4],_=l[5],v=l[6],y=l[7],E=l[8],M=l[9],S=l[10],x=l[11],T=l[12],C=l[13],b=l[14],L=l[15];if(s[0].setComponents(h-c,y-m,x-E,L-T).normalize(),s[1].setComponents(h+c,y+m,x+E,L+T).normalize(),s[2].setComponents(h+f,y+_,x+M,L+C).normalize(),s[3].setComponents(h-f,y-_,x-M,L-C).normalize(),i)s[4].setComponents(p,v,S,b).normalize(),s[5].setComponents(h-p,y-v,x-S,L-b).normalize();else if(s[4].setComponents(h-p,y-v,x-S,L-b).normalize(),t===ga)s[5].setComponents(h+p,y+v,x+S,L+b).normalize();else if(t===Cf)s[5].setComponents(p,v,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=O1.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sf.x=s.normal.x>0?e.max.x:e.min.x,sf.y=s.normal.y>0?e.max.y:e.min.y,sf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mg extends Hn{constructor(e,t,i=Ir,s,l,c,f=ia,p=ia,h,m=fu,_=1){if(m!==fu&&m!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,c,f,p,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wu extends Vr{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const l=e/2,c=t/2,f=Math.floor(i),p=Math.floor(s),h=f+1,m=p+1,_=e/f,v=t/p,y=[],E=[],M=[],S=[];for(let x=0;x<m;x++){const T=x*v-c;for(let C=0;C<h;C++){const b=C*_-l;E.push(b,-T,0),M.push(0,0,1),S.push(C/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let T=0;T<f;T++){const C=T+h*x,b=T+h*(x+1),L=T+1+h*(x+1),P=T+1+h*x;y.push(C,b,P),y.push(b,L,P)}this.setIndex(y),this.setAttribute("position",new Ts(E,3)),this.setAttribute("normal",new Ts(M,3)),this.setAttribute("uv",new Ts(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class P1 extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class RS extends pg{constructor(e=-1,t=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=s+t,p=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B1 extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class F1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Tn{constructor(e){this.value=e}clone(){return new Tn(this.value.clone===void 0?this.value:this.value.clone())}}function Wx(r,e,t,i){const s=z1(i);switch(t){case fS:return r*e;case dS:return r*e/s.components*s.byteLength;case ug:return r*e/s.components*s.byteLength;case pS:return r*e*2/s.components*s.byteLength;case cg:return r*e*2/s.components*s.byteLength;case hS:return r*e*3/s.components*s.byteLength;case ta:return r*e*4/s.components*s.byteLength;case fg:return r*e*4/s.components*s.byteLength;case vf:case xf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yf:case Sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case om:case um:return Math.max(r,16)*Math.max(e,8)/4;case sm:case lm:return Math.max(r,8)*Math.max(e,8)/2;case cm:case fm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case hm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dm:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pm:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case mm:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gm:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case _m:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vm:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case xm:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ym:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Sm:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Mm:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Em:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Am:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Tm:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case bm:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Rm:case Cm:case wm:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Dm:case Um:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lm:case Nm:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z1(r){switch(r){case Ci:case oS:return{byteLength:1,components:1};case cu:case lS:case Eu:return{byteLength:2,components:1};case og:case lg:return{byteLength:2,components:4};case Ir:case sg:case Wa:return{byteLength:4,components:1};case uS:case cS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let r=null,e=!1,t=null,i=null;function s(l,c){t(l,c),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function H1(r){const e=new WeakMap;function t(f,p){const h=f.array,m=f.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,m),f.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,p,h){const m=p.array,_=p.updateRanges;if(r.bindBuffer(h,f),_.length===0)r.bufferSubData(h,0,m);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],M=_[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,_[v]=M)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const M=_[y];r.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,p),h.version=f.version}}return{get:s,remove:l,update:c}}var G1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,K1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
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
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eR=`#ifdef USE_IRIDESCENCE
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
#endif`,tR=`#ifdef USE_BUMPMAP
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
#endif`,nR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cR=`#define PI 3.141592653589793
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
} // validated`,fR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hR=`vec3 transformedNormal = objectNormal;
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
#endif`,dR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_R="gl_FragColor = linearToOutputTexel( gl_FragColor );",vR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xR=`#ifdef USE_ENVMAP
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
#endif`,yR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SR=`#ifdef USE_ENVMAP
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
#endif`,MR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ER=`#ifdef USE_ENVMAP
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
#endif`,AR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CR=`#ifdef USE_GRADIENTMAP
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
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LR=`uniform bool receiveShadow;
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
#endif`,NR=`#ifdef USE_ENVMAP
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
#endif`,OR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FR=`PhysicalMaterial material;
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
#endif`,zR=`struct PhysicalMaterial {
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
}`,HR=`
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
#endif`,GR=`#if defined( RE_IndirectDiffuse )
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
#endif`,VR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jR=`#if defined( USE_POINTS_UV )
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
#endif`,ZR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nC=`#ifdef USE_MORPHTARGETS
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
#endif`,iC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uC=`#ifdef USE_NORMALMAP
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
#endif`,cC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_C=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TC=`float getShadowMask() {
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
}`,bC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RC=`#ifdef USE_SKINNING
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
#endif`,CC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wC=`#ifdef USE_SKINNING
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
#endif`,DC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OC=`#ifdef USE_TRANSMISSION
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
#endif`,PC=`#ifdef USE_TRANSMISSION
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
#endif`,IC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GC=`uniform sampler2D t2D;
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
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YC=`#include <common>
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
}`,qC=`#if DEPTH_PACKING == 3200
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
}`,KC=`#define DISTANCE
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
}`,QC=`#define DISTANCE
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
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JC=`uniform float scale;
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
}`,$C=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#define LAMBERT
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
}`,iw=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,rw=`#define MATCAP
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
}`,sw=`#define NORMAL
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
}`,ow=`#define NORMAL
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
}`,lw=`#define PHONG
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
}`,uw=`#define PHONG
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
}`,cw=`#define STANDARD
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
}`,fw=`#define STANDARD
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
}`,hw=`#define TOON
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
}`,dw=`#define TOON
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
}`,pw=`uniform float size;
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#include <common>
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
}`,_w=`uniform vec3 color;
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
}`,vw=`uniform float rotation;
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
}`,xw=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:G1,alphahash_pars_fragment:V1,alphamap_fragment:k1,alphamap_pars_fragment:X1,alphatest_fragment:W1,alphatest_pars_fragment:Y1,aomap_fragment:q1,aomap_pars_fragment:K1,batching_pars_vertex:Q1,batching_vertex:j1,begin_vertex:Z1,beginnormal_vertex:J1,bsdfs:$1,iridescence_fragment:eR,bumpmap_pars_fragment:tR,clipping_planes_fragment:nR,clipping_planes_pars_fragment:iR,clipping_planes_pars_vertex:aR,clipping_planes_vertex:rR,color_fragment:sR,color_pars_fragment:oR,color_pars_vertex:lR,color_vertex:uR,common:cR,cube_uv_reflection_fragment:fR,defaultnormal_vertex:hR,displacementmap_pars_vertex:dR,displacementmap_vertex:pR,emissivemap_fragment:mR,emissivemap_pars_fragment:gR,colorspace_fragment:_R,colorspace_pars_fragment:vR,envmap_fragment:xR,envmap_common_pars_fragment:yR,envmap_pars_fragment:SR,envmap_pars_vertex:MR,envmap_physical_pars_fragment:NR,envmap_vertex:ER,fog_vertex:AR,fog_pars_vertex:TR,fog_fragment:bR,fog_pars_fragment:RR,gradientmap_pars_fragment:CR,lightmap_pars_fragment:wR,lights_lambert_fragment:DR,lights_lambert_pars_fragment:UR,lights_pars_begin:LR,lights_toon_fragment:OR,lights_toon_pars_fragment:PR,lights_phong_fragment:IR,lights_phong_pars_fragment:BR,lights_physical_fragment:FR,lights_physical_pars_fragment:zR,lights_fragment_begin:HR,lights_fragment_maps:GR,lights_fragment_end:VR,logdepthbuf_fragment:kR,logdepthbuf_pars_fragment:XR,logdepthbuf_pars_vertex:WR,logdepthbuf_vertex:YR,map_fragment:qR,map_pars_fragment:KR,map_particle_fragment:QR,map_particle_pars_fragment:jR,metalnessmap_fragment:ZR,metalnessmap_pars_fragment:JR,morphinstance_vertex:$R,morphcolor_vertex:eC,morphnormal_vertex:tC,morphtarget_pars_vertex:nC,morphtarget_vertex:iC,normal_fragment_begin:aC,normal_fragment_maps:rC,normal_pars_fragment:sC,normal_pars_vertex:oC,normal_vertex:lC,normalmap_pars_fragment:uC,clearcoat_normal_fragment_begin:cC,clearcoat_normal_fragment_maps:fC,clearcoat_pars_fragment:hC,iridescence_pars_fragment:dC,opaque_fragment:pC,packing:mC,premultiplied_alpha_fragment:gC,project_vertex:_C,dithering_fragment:vC,dithering_pars_fragment:xC,roughnessmap_fragment:yC,roughnessmap_pars_fragment:SC,shadowmap_pars_fragment:MC,shadowmap_pars_vertex:EC,shadowmap_vertex:AC,shadowmask_pars_fragment:TC,skinbase_vertex:bC,skinning_pars_vertex:RC,skinning_vertex:CC,skinnormal_vertex:wC,specularmap_fragment:DC,specularmap_pars_fragment:UC,tonemapping_fragment:LC,tonemapping_pars_fragment:NC,transmission_fragment:OC,transmission_pars_fragment:PC,uv_pars_fragment:IC,uv_pars_vertex:BC,uv_vertex:FC,worldpos_vertex:zC,background_vert:HC,background_frag:GC,backgroundCube_vert:VC,backgroundCube_frag:kC,cube_vert:XC,cube_frag:WC,depth_vert:YC,depth_frag:qC,distanceRGBA_vert:KC,distanceRGBA_frag:QC,equirect_vert:jC,equirect_frag:ZC,linedashed_vert:JC,linedashed_frag:$C,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:aw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:ow,meshphong_vert:lw,meshphong_frag:uw,meshphysical_vert:cw,meshphysical_frag:fw,meshtoon_vert:hw,meshtoon_frag:dw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:_w,sprite_vert:vw,sprite_frag:xw},Pe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},da={basic:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:ei([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:ei([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:ei([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:ei([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:ei([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:ei([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:ei([Pe.common,Pe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:ei([Pe.lights,Pe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};da.physical={uniforms:ei([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const of={r:0,b:0,g:0},hs=new ja,yw=new bn;function Sw(r,e,t,i,s,l,c){const f=new Bt(0);let p=l===!0?0:1,h,m,_=null,v=0,y=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function M(C){let b=!1;const L=E(C);L===null?x(f,p):L&&L.isColor&&(x(L,1),b=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(C,b){const L=E(b);L&&(L.isCubeTexture||L.mapping===Hf)?(m===void 0&&(m=new na(new Cu(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Xo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),hs.copy(b.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(yw.makeRotationFromEuler(hs)),m.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Xt,(_!==L||v!==L.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,y=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new na(new wu(2,2),new Wi({name:"BackgroundMaterial",uniforms:Xo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(L.colorSpace)!==Xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||y!==r.toneMapping)&&(h.material.needsUpdate=!0,_=L,v=L.version,y=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,b){C.getRGB(of,ES(r)),i.buffers.color.setClear(of.r,of.g,of.b,b,c)}function T(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,b=1){f.set(C),p=b,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,x(f,p)},render:M,addToRenderList:S,dispose:T}}function Mw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=v(null);let l=s,c=!1;function f(U,B,X,j,re){let ee=!1;const z=_(j,X,B);l!==z&&(l=z,h(l.object)),ee=y(U,j,X,re),ee&&E(U,j,X,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,b(U,B,X,j),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return r.createVertexArray()}function h(U){return r.bindVertexArray(U)}function m(U){return r.deleteVertexArray(U)}function _(U,B,X){const j=X.wireframe===!0;let re=i[U.id];re===void 0&&(re={},i[U.id]=re);let ee=re[B.id];ee===void 0&&(ee={},re[B.id]=ee);let z=ee[j];return z===void 0&&(z=v(p()),ee[j]=z),z}function v(U){const B=[],X=[],j=[];for(let re=0;re<t;re++)B[re]=0,X[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:j,object:U,attributes:{},index:null}}function y(U,B,X,j){const re=l.attributes,ee=B.attributes;let z=0;const Y=X.getAttributes();for(const k in Y)if(Y[k].location>=0){const O=re[k];let Z=ee[k];if(Z===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;z++}return l.attributesNum!==z||l.index!==j}function E(U,B,X,j){const re={},ee=B.attributes;let z=0;const Y=X.getAttributes();for(const k in Y)if(Y[k].location>=0){let O=ee[k];O===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),re[k]=Z,z++}l.attributes=re,l.attributesNum=z,l.index=j}function M(){const U=l.newAttributes;for(let B=0,X=U.length;B<X;B++)U[B]=0}function S(U){x(U,0)}function x(U,B){const X=l.newAttributes,j=l.enabledAttributes,re=l.attributeDivisors;X[U]=1,j[U]===0&&(r.enableVertexAttribArray(U),j[U]=1),re[U]!==B&&(r.vertexAttribDivisor(U,B),re[U]=B)}function T(){const U=l.newAttributes,B=l.enabledAttributes;for(let X=0,j=B.length;X<j;X++)B[X]!==U[X]&&(r.disableVertexAttribArray(X),B[X]=0)}function C(U,B,X,j,re,ee,z){z===!0?r.vertexAttribIPointer(U,B,X,re,ee):r.vertexAttribPointer(U,B,X,j,re,ee)}function b(U,B,X,j){M();const re=j.attributes,ee=X.getAttributes(),z=B.defaultAttributeValues;for(const Y in ee){const k=ee[Y];if(k.location>=0){let _e=re[Y];if(_e===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor)),_e!==void 0){const O=_e.normalized,Z=_e.itemSize,pe=e.get(_e);if(pe===void 0)continue;const Se=pe.buffer,be=pe.type,Be=pe.bytesPerElement,ne=be===r.INT||be===r.UNSIGNED_INT||_e.gpuType===sg;if(_e.isInterleavedBufferAttribute){const ge=_e.data,Re=ge.stride,je=_e.offset;if(ge.isInstancedInterleavedBuffer){for(let Ye=0;Ye<k.locationSize;Ye++)x(k.location+Ye,ge.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ye=0;Ye<k.locationSize;Ye++)S(k.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ye=0;Ye<k.locationSize;Ye++)C(k.location+Ye,Z/k.locationSize,be,O,Re*Be,(je+Z/k.locationSize*Ye)*Be,ne)}else{if(_e.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)x(k.location+ge,_e.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ge=0;ge<k.locationSize;ge++)S(k.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let ge=0;ge<k.locationSize;ge++)C(k.location+ge,Z/k.locationSize,be,O,Z*Be,Z/k.locationSize*ge*Be,ne)}}else if(z!==void 0){const O=z[Y];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(k.location,O);break;case 3:r.vertexAttrib3fv(k.location,O);break;case 4:r.vertexAttrib4fv(k.location,O);break;default:r.vertexAttrib1fv(k.location,O)}}}}T()}function L(){H();for(const U in i){const B=i[U];for(const X in B){const j=B[X];for(const re in j)m(j[re].object),delete j[re];delete B[X]}delete i[U]}}function P(U){if(i[U.id]===void 0)return;const B=i[U.id];for(const X in B){const j=B[X];for(const re in j)m(j[re].object),delete j[re];delete B[X]}delete i[U.id]}function I(U){for(const B in i){const X=i[B];if(X[U.id]===void 0)continue;const j=X[U.id];for(const re in j)m(j[re].object),delete j[re];delete X[U.id]}}function H(){R(),c=!0,l!==s&&(l=s,h(l.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:H,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:T}}function Ew(r,e,t){let i;function s(h){i=h}function l(h,m){r.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,_){_!==0&&(r.drawArraysInstanced(i,h,m,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,_);let y=0;for(let E=0;E<_;E++)y+=m[E];t.update(y,i,1)}function p(h,m,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,v,0,_);let E=0;for(let M=0;M<_;M++)E+=m[M]*v[M];t.update(E,i,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Aw(r,e,t,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==ta&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const H=I===Eu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ci&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wa&&!H)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:L,maxSamples:P}}function Tw(r){const e=this;let t=null,i=0,s=!1,l=!1;const c=new gs,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||i!==0||s;return s=v,i=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,M=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!s||E===null||E.length===0||l&&!S)l?m(null):h();else{const T=l?0:i,C=T*4;let b=x.clippingState||null;p.value=b,b=m(E,v,C,y);for(let L=0;L!==C;++L)b[L]=t[L];x.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,y,E){const M=_!==null?_.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const x=y+M*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(S===null||S.length<x)&&(S=new Float32Array(x));for(let C=0,b=y;C!==M;++C,b+=4)c.copy(_[C]).applyMatrix4(T,f),c.normal.toArray(S,b),S[b+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function bw(r){let e=new WeakMap;function t(c,f){return f===nm?c.mapping=Ho:f===im&&(c.mapping=Go),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===nm||f===im)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new D1(p.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const Uo=4,Yx=[.125,.215,.35,.446,.526,.582],Ss=20,Tp=new RS,qx=new Bt;let bp=null,Rp=0,Cp=0,wp=!1;const _s=(1+Math.sqrt(5))/2,wo=1/_s,Kx=[new ce(-_s,wo,0),new ce(_s,wo,0),new ce(-wo,0,_s),new ce(wo,0,_s),new ce(0,_s,-wo),new ce(0,_s,wo),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],Rw=new ce;class Qx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,l={}){const{size:c=256,position:f=Rw}=l;bp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,i,s,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bp,Rp,Cp),this._renderer.xr.enabled=wp,e.scissorTest=!1,lf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bp=this._renderer.getRenderTarget(),Rp=this._renderer.getActiveCubeFace(),Cp=this._renderer.getActiveMipmapLevel(),wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Eu,format:ta,colorSpace:Br,depthBuffer:!1},s=jx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cw(l)),this._blurMaterial=ww(l,e,t)}return s}_compileMaterial(e){const t=new na(this._lodPlanes[0],e);this._renderer.compile(t,Tp)}_sceneToCubeUV(e,t,i,s,l){const p=new Hi(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(qx),_.toneMapping=Nr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null));const M=new yS({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),S=new na(new Cu,M);let x=!1;const T=e.background;T?T.isColor&&(M.color.copy(T),e.background=null,x=!0):(M.color.copy(qx),x=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[C],l.y,l.z)):b===1?(p.up.set(0,0,h[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[C],l.z)):(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[C]));const L=this._cubeSize;lf(s,b*L,C>2?L:0,L,L),_.setRenderTarget(s),x&&_.render(S,p),_.render(e,p)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=y,_.autoClear=v,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ho||e.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new na(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;lf(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(c,Tp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Kx[(s-l-1)%Kx.length];this._blur(e,l-1,l,c,f)}t.autoClear=i}_blur(e,t,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,t,i,s,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new na(this._lodPlanes[s],h),v=h.uniforms,y=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Ss-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):Ss;S>Ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ss}`);const x=[];let T=0;for(let I=0;I<Ss;++I){const H=I/M,R=Math.exp(-H*H/2);x.push(R),I===0?T+=R:I<S&&(T+=2*R)}for(let I=0;I<x.length;I++)x[I]=x[I]/T;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:C}=this;v.dTheta.value=E,v.mipInt.value=C-i;const b=this._sizeLods[s],L=3*b*(s>C-Uo?s-C+Uo:0),P=4*(this._cubeSize-b);lf(t,L,P,3*b,2*b),p.setRenderTarget(t),p.render(_,Tp)}}function Cw(r){const e=[],t=[],i=[];let s=r;const l=r-Uo+1+Yx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>r-Uo?p=Yx[c-r+Uo-1]:c===0&&(p=0),i.push(p);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,M=3,S=2,x=1,T=new Float32Array(M*E*y),C=new Float32Array(S*E*y),b=new Float32Array(x*E*y);for(let P=0;P<y;P++){const I=P%3*2/3-1,H=P>2?0:-1,R=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];T.set(R,M*E*P),C.set(v,S*E*P);const U=[P,P,P,P,P,P];b.set(U,x*E*P)}const L=new Vr;L.setAttribute("position",new Xi(T,M)),L.setAttribute("uv",new Xi(C,S)),L.setAttribute("faceIndex",new Xi(b,x)),e.push(L),s>Uo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jx(r,e,t){const i=new aa(r,e,t);return i.texture.mapping=Hf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lf(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function ww(r,e,t){const i=new Float32Array(Ss),s=new ce(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gg(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Zx(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gg(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Jx(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function gg(){return`

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
	`}function Dw(r){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const p=f.mapping,h=p===nm||p===im,m=p===Ho||p===Go;if(h||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Qx(r)),_=h?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Qx(r)),_=h?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function s(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Uw(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&hu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lw(r,e,t,i){const s={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function h(_){const v=[],y=_.index,E=_.attributes.position;let M=0;if(y!==null){const T=y.array;M=y.version;for(let C=0,b=T.length;C<b;C+=3){const L=T[C+0],P=T[C+1],I=T[C+2];v.push(L,P,P,I,I,L)}}else if(E!==void 0){const T=E.array;M=E.version;for(let C=0,b=T.length/3-1;C<b;C+=3){const L=C+0,P=C+1,I=C+2;v.push(L,P,P,I,I,L)}}else return;const S=new(gS(v)?MS:SS)(v,1);S.version=M;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:m}}function Nw(r,e,t){let i;function s(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,y){r.drawElements(i,y,l,v*c),t.update(y,i,1)}function h(v,y,E){E!==0&&(r.drawElementsInstanced(i,y,l,v*c,E),t.update(y,i,E))}function m(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];t.update(S,i,1)}function _(v,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,l,v,0,M,0,E);let x=0;for(let T=0;T<E;T++)x+=y[T]*M[T];t.update(x,i,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Ow(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pw(r,e,t){const i=new WeakMap,s=new pn;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let U=function(){H.dispose(),i.delete(f),f.removeEventListener("dispose",U)};var y=U;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let L=f.attributes.position.count*b,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const I=new Float32Array(L*P*4*_),H=new _S(I,L,P,_);H.type=Wa,H.needsUpdate=!0;const R=b*4;for(let B=0;B<_;B++){const X=x[B],j=T[B],re=C[B],ee=L*P*4*B;for(let z=0;z<X.count;z++){const Y=z*R;E===!0&&(s.fromBufferAttribute(X,z),I[ee+Y+0]=s.x,I[ee+Y+1]=s.y,I[ee+Y+2]=s.z,I[ee+Y+3]=0),M===!0&&(s.fromBufferAttribute(j,z),I[ee+Y+4]=s.x,I[ee+Y+5]=s.y,I[ee+Y+6]=s.z,I[ee+Y+7]=0),S===!0&&(s.fromBufferAttribute(re,z),I[ee+Y+8]=s.x,I[ee+Y+9]=s.y,I[ee+Y+10]=s.z,I[ee+Y+11]=re.itemSize===4?s.w:1)}}v={count:_,texture:H,size:new vt(L,P)},i.set(f,v),f.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",M),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function Iw(r,e,t,i){let s=new WeakMap;function l(p){const h=i.render.frame,m=p.geometry,_=e.get(p,m);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==h&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),s.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return _}function c(){s=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}const wS=new Hn,$x=new mg(1,1),DS=new _S,US=new h1,LS=new AS,ey=[],ty=[],ny=new Float32Array(16),iy=new Float32Array(9),ay=new Float32Array(4);function el(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let l=ey[s];if(l===void 0&&(l=new Float32Array(s),ey[s]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function Rn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Cn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Gf(r,e){let t=ty[e];t===void 0&&(t=new Int32Array(e),ty[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Bw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2fv(this.addr,e),Cn(t,e)}}function zw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;r.uniform3fv(this.addr,e),Cn(t,e)}}function Hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4fv(this.addr,e),Cn(t,e)}}function Gw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;ay.set(i),r.uniformMatrix2fv(this.addr,!1,ay),Cn(t,i)}}function Vw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;iy.set(i),r.uniformMatrix3fv(this.addr,!1,iy),Cn(t,i)}}function kw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;ny.set(i),r.uniformMatrix4fv(this.addr,!1,ny),Cn(t,i)}}function Xw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2iv(this.addr,e),Cn(t,e)}}function Yw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3iv(this.addr,e),Cn(t,e)}}function qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4iv(this.addr,e),Cn(t,e)}}function Kw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;r.uniform2uiv(this.addr,e),Cn(t,e)}}function jw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;r.uniform3uiv(this.addr,e),Cn(t,e)}}function Zw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;r.uniform4uiv(this.addr,e),Cn(t,e)}}function Jw(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?($x.compareFunction=mS,l=$x):l=wS,t.setTexture2D(e||l,s)}function $w(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||US,s)}function e2(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||LS,s)}function t2(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||DS,s)}function n2(r){switch(r){case 5126:return Bw;case 35664:return Fw;case 35665:return zw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return kw;case 5124:case 35670:return Xw;case 35667:case 35671:return Ww;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return Kw;case 36294:return Qw;case 36295:return jw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return $w;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}function i2(r,e){r.uniform1fv(this.addr,e)}function a2(r,e){const t=el(e,this.size,2);r.uniform2fv(this.addr,t)}function r2(r,e){const t=el(e,this.size,3);r.uniform3fv(this.addr,t)}function s2(r,e){const t=el(e,this.size,4);r.uniform4fv(this.addr,t)}function o2(r,e){const t=el(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function l2(r,e){const t=el(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function u2(r,e){const t=el(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function c2(r,e){r.uniform1iv(this.addr,e)}function f2(r,e){r.uniform2iv(this.addr,e)}function h2(r,e){r.uniform3iv(this.addr,e)}function d2(r,e){r.uniform4iv(this.addr,e)}function p2(r,e){r.uniform1uiv(this.addr,e)}function m2(r,e){r.uniform2uiv(this.addr,e)}function g2(r,e){r.uniform3uiv(this.addr,e)}function _2(r,e){r.uniform4uiv(this.addr,e)}function v2(r,e,t){const i=this.cache,s=e.length,l=Gf(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||wS,l[c])}function x2(r,e,t){const i=this.cache,s=e.length,l=Gf(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||US,l[c])}function y2(r,e,t){const i=this.cache,s=e.length,l=Gf(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||LS,l[c])}function S2(r,e,t){const i=this.cache,s=e.length,l=Gf(t,s);Rn(i,l)||(r.uniform1iv(this.addr,l),Cn(i,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||DS,l[c])}function M2(r){switch(r){case 5126:return i2;case 35664:return a2;case 35665:return r2;case 35666:return s2;case 35674:return o2;case 35675:return l2;case 35676:return u2;case 5124:case 35670:return c2;case 35667:case 35671:return f2;case 35668:case 35672:return h2;case 35669:case 35673:return d2;case 5125:return p2;case 36294:return m2;case 36295:return g2;case 36296:return _2;case 35678:case 36198:case 36298:case 36306:case 35682:return v2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return S2}}class E2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n2(t.type)}}class A2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M2(t.type)}}class T2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,t[f.id],i)}}}const Dp=/(\w+)(\])?(\[|\.)?/g;function ry(r,e){r.seq.push(e),r.map[e.id]=e}function b2(r,e,t){const i=r.name,s=i.length;for(Dp.lastIndex=0;;){const l=Dp.exec(i),c=Dp.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===s){ry(t,h===void 0?new E2(f,r,e):new A2(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new T2(f),ry(t,_)),t=_}}}class Mf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),c=e.getUniformLocation(t,l.name);b2(l,c,this)}}setValue(e,t,i,s){const l=this.map[t];l!==void 0&&l.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let l=0,c=t.length;l!==c;++l){const f=t[l],p=i[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function sy(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const R2=37297;let C2=0;function w2(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const oy=new ht;function D2(r){Lt._getMatrix(oy,Lt.workingColorSpace,r);const e=`mat3( ${oy.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Rf:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ly(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+w2(r.getShaderSource(e),f)}else return l}function U2(r,e){const t=D2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L2(r,e){let t;switch(e){case Hb:t="Linear";break;case Gb:t="Reinhard";break;case Vb:t="Cineon";break;case kb:t="ACESFilmic";break;case Wb:t="AgX";break;case Yb:t="Neutral";break;case Xb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uf=new ce;function N2(){Lt.getLuminanceCoefficients(uf);const r=uf.x.toFixed(4),e=uf.y.toFixed(4),t=uf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(iu).join(`
`)}function P2(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I2(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=r.getActiveAttrib(e,s),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function iu(r){return r!==""}function uy(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bm(r){return r.replace(B2,z2)}const F2=new Map;function z2(r,e){let t=mt[e];if(t===void 0){const i=F2.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bm(t)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fy(r){return r.replace(H2,G2)}function G2(r,e,t,i){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function hy(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function V2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===aS?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Va&&(e="SHADOWMAP_TYPE_VSM"),e}function k2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ho:case Go:e="ENVMAP_TYPE_CUBE";break;case Hf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rS:e="ENVMAP_BLENDING_MULTIPLY";break;case Fb:e="ENVMAP_BLENDING_MIX";break;case zb:e="ENVMAP_BLENDING_ADD";break}return e}function Y2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q2(r,e,t,i){const s=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=V2(t),h=k2(t),m=X2(t),_=W2(t),v=Y2(t),y=O2(t),E=P2(l),M=s.createProgram();let S,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(iu).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(iu).join(`
`),x.length>0&&(x+=`
`)):(S=[hy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(iu).join(`
`),x=[hy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?mt.tonemapping_pars_fragment:"",t.toneMapping!==Nr?L2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,U2("linearToOutputTexel",t.outputColorSpace),N2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(iu).join(`
`)),c=Bm(c),c=uy(c,t),c=cy(c,t),f=Bm(f),f=uy(f,t),f=cy(f,t),c=fy(c),f=fy(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=T+S+c,b=T+x+f,L=sy(s,s.VERTEX_SHADER,C),P=sy(s,s.FRAGMENT_SHADER,b);s.attachShader(M,L),s.attachShader(M,P),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(r.debug.checkShaderErrors){const X=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(L)||"",re=s.getShaderInfoLog(P)||"",ee=X.trim(),z=j.trim(),Y=re.trim();let k=!0,_e=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,M,L,P);else{const O=ly(s,L,"vertex"),Z=ly(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+O+`
`+Z)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(z===""||Y==="")&&(_e=!1);_e&&(B.diagnostics={runnable:k,programLog:ee,vertexShader:{log:z,prefix:S},fragmentShader:{log:Y,prefix:x}})}s.deleteShader(L),s.deleteShader(P),H=new Mf(s,M),R=I2(s,M)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,R2)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let K2=0;class Q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j2(e),t.set(e,i)),i}}class j2{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}}function Z2(r,e,t,i,s,l,c){const f=new vS,p=new Q2,h=new Set,m=[],_=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return h.add(R),R===0?"uv":`uv${R}`}function S(R,U,B,X,j){const re=X.fog,ee=j.geometry,z=R.isMeshStandardMaterial?X.environment:null,Y=(R.isMeshStandardMaterial?t:e).get(R.envMap||z),k=Y&&Y.mapping===Hf?Y.image.height:null,_e=E[R.type];R.precision!==null&&(y=s.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Z=O!==void 0?O.length:0;let pe=0;ee.morphAttributes.position!==void 0&&(pe=1),ee.morphAttributes.normal!==void 0&&(pe=2),ee.morphAttributes.color!==void 0&&(pe=3);let Se,be,Be,ne;if(_e){const wt=da[_e];Se=wt.vertexShader,be=wt.fragmentShader}else Se=R.vertexShader,be=R.fragmentShader,p.update(R),Be=p.getVertexShaderID(R),ne=p.getFragmentShaderID(R);const ge=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),je=j.isInstancedMesh===!0,Ye=j.isBatchedMesh===!0,ct=!!R.map,xt=!!R.matcap,V=!!Y,bt=!!R.aoMap,st=!!R.lightMap,et=!!R.bumpMap,Ie=!!R.normalMap,Ot=!!R.displacementMap,Ge=!!R.emissiveMap,Fe=!!R.metalnessMap,lt=!!R.roughnessMap,Ct=R.anisotropy>0,F=R.clearcoat>0,w=R.dispersion>0,ie=R.iridescence>0,he=R.sheen>0,ve=R.transmission>0,fe=Ct&&!!R.anisotropyMap,ze=F&&!!R.clearcoatMap,Ce=F&&!!R.clearcoatNormalMap,qe=F&&!!R.clearcoatRoughnessMap,Qe=ie&&!!R.iridescenceMap,Me=ie&&!!R.iridescenceThicknessMap,Ne=he&&!!R.sheenColorMap,Je=he&&!!R.sheenRoughnessMap,We=!!R.specularMap,Ue=!!R.specularColorMap,ut=!!R.specularIntensityMap,q=ve&&!!R.transmissionMap,Te=ve&&!!R.thicknessMap,we=!!R.gradientMap,He=!!R.alphaMap,Ee=R.alphaTest>0,ye=!!R.alphaHash,Xe=!!R.extensions;let ot=Nr;R.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ot=r.toneMapping);const It={shaderID:_e,shaderType:R.type,shaderName:R.name,vertexShader:Se,fragmentShader:be,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:ne,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ye,batchingColor:Ye&&j._colorsTexture!==null,instancing:je,instancingColor:je&&j.instanceColor!==null,instancingMorph:je&&j.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Br,alphaToCoverage:!!R.alphaToCoverage,map:ct,matcap:xt,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:k,aoMap:bt,lightMap:st,bumpMap:et,normalMap:Ie,displacementMap:v&&Ot,emissiveMap:Ge,normalMapObjectSpace:Ie&&R.normalMapType===jb,normalMapTangentSpace:Ie&&R.normalMapType===Qb,metalnessMap:Fe,roughnessMap:lt,anisotropy:Ct,anisotropyMap:fe,clearcoat:F,clearcoatMap:ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,dispersion:w,iridescence:ie,iridescenceMap:Qe,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:Ne,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ue,specularIntensityMap:ut,transmission:ve,transmissionMap:q,thicknessMap:Te,gradientMap:we,opaque:R.transparent===!1&&R.blending===Oo&&R.alphaToCoverage===!1,alphaMap:He,alphaTest:Ee,alphaHash:ye,combine:R.combine,mapUv:ct&&M(R.map.channel),aoMapUv:bt&&M(R.aoMap.channel),lightMapUv:st&&M(R.lightMap.channel),bumpMapUv:et&&M(R.bumpMap.channel),normalMapUv:Ie&&M(R.normalMap.channel),displacementMapUv:Ot&&M(R.displacementMap.channel),emissiveMapUv:Ge&&M(R.emissiveMap.channel),metalnessMapUv:Fe&&M(R.metalnessMap.channel),roughnessMapUv:lt&&M(R.roughnessMap.channel),anisotropyMapUv:fe&&M(R.anisotropyMap.channel),clearcoatMapUv:ze&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:Je&&M(R.sheenRoughnessMap.channel),specularMapUv:We&&M(R.specularMap.channel),specularColorMapUv:Ue&&M(R.specularColorMap.channel),specularIntensityMapUv:ut&&M(R.specularIntensityMap.channel),transmissionMapUv:q&&M(R.transmissionMap.channel),thicknessMapUv:Te&&M(R.thicknessMap.channel),alphaMapUv:He&&M(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Ie||Ct),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ee.attributes.uv&&(ct||He),fog:!!re,useFog:R.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:j.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:pe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&R.map.isVideoTexture===!0&&Lt.getTransfer(R.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ge&&R.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(R.emissiveMap.colorSpace)===Xt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ei,flipSided:R.side===On,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Xe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&R.extensions.multiDraw===!0||Ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)U.push(B),U.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(T(U,R),C(U,R),U.push(r.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function T(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.numLightProbes),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function C(R,U){f.disableAll(),U.supportsVertexTextures&&f.enable(0),U.instancing&&f.enable(1),U.instancingColor&&f.enable(2),U.instancingMorph&&f.enable(3),U.matcap&&f.enable(4),U.envMap&&f.enable(5),U.normalMapObjectSpace&&f.enable(6),U.normalMapTangentSpace&&f.enable(7),U.clearcoat&&f.enable(8),U.iridescence&&f.enable(9),U.alphaTest&&f.enable(10),U.vertexColors&&f.enable(11),U.vertexAlphas&&f.enable(12),U.vertexUv1s&&f.enable(13),U.vertexUv2s&&f.enable(14),U.vertexUv3s&&f.enable(15),U.vertexTangents&&f.enable(16),U.anisotropy&&f.enable(17),U.alphaHash&&f.enable(18),U.batching&&f.enable(19),U.dispersion&&f.enable(20),U.batchingColor&&f.enable(21),U.gradientMap&&f.enable(22),R.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),R.push(f.mask)}function b(R){const U=E[R.type];let B;if(U){const X=da[U];B=b1.clone(X.uniforms)}else B=R.uniforms;return B}function L(R,U){let B;for(let X=0,j=m.length;X<j;X++){const re=m[X];if(re.cacheKey===U){B=re,++B.usedTimes;break}}return B===void 0&&(B=new q2(r,U,R,l),m.push(B)),B}function P(R){if(--R.usedTimes===0){const U=m.indexOf(R);m[U]=m[m.length-1],m.pop(),R.destroy()}}function I(R){p.remove(R)}function H(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:b,acquireProgram:L,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:H}}function J2(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function i(c){r.delete(c)}function s(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:l}}function $2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function py(){const r=[];let e=0;const t=[],i=[],s=[];function l(){e=0,t.length=0,i.length=0,s.length=0}function c(_,v,y,E,M,S){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:M,group:S},r[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=M,x.group=S),e++,x}function f(_,v,y,E,M,S){const x=c(_,v,y,E,M,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function p(_,v,y,E,M,S){const x=c(_,v,y,E,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(_,v){t.length>1&&t.sort(_||$2),i.length>1&&i.sort(v||dy),s.length>1&&s.sort(v||dy)}function m(){for(let _=e,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:l,push:f,unshift:p,finish:m,sort:h}}function eD(){let r=new WeakMap;function e(i,s){const l=r.get(i);let c;return l===void 0?(c=new py,r.set(i,[c])):s>=l.length?(c=new py,l.push(c)):c=l[s],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function tD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Bt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=t,t}}}function nD(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iD=0;function aD(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rD(r){const e=new tD,t=nD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new ce);const s=new ce,l=new bn,c=new bn;function f(h){let m=0,_=0,v=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,T=0,C=0,b=0,L=0,P=0,I=0;h.sort(aD);for(let R=0,U=h.length;R<U;R++){const B=h[R],X=B.color,j=B.intensity,re=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=X.r*j,_+=X.g*j,v+=X.b*j;else if(B.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(B.sh.coefficients[z],j);I++}else if(B.isDirectionalLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Y=B.shadow,k=t.get(B);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[y]=k,i.directionalShadowMap[y]=ee,i.directionalShadowMatrix[y]=B.shadow.matrix,T++}i.directional[y]=z,y++}else if(B.isSpotLight){const z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(X).multiplyScalar(j),z.distance=re,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,i.spot[M]=z;const Y=B.shadow;if(B.map&&(i.spotLightMap[L]=B.map,L++,Y.updateMatrices(B),B.castShadow&&P++),i.spotLightMatrix[M]=Y.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=ee,b++}M++}else if(B.isRectAreaLight){const z=e.get(B);z.color.copy(X).multiplyScalar(j),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=z,S++}else if(B.isPointLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const Y=B.shadow,k=t.get(B);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[E]=k,i.pointShadowMap[E]=ee,i.pointShadowMatrix[E]=B.shadow.matrix,C++}i.point[E]=z,E++}else if(B.isHemisphereLight){const z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(j),z.groundColor.copy(B.groundColor).multiplyScalar(j),i.hemi[x]=z,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const H=i.hash;(H.directionalLength!==y||H.pointLength!==E||H.spotLength!==M||H.rectAreaLength!==S||H.hemiLength!==x||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==b||H.numSpotMaps!==L||H.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=b+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,H.directionalLength=y,H.pointLength=E,H.spotLength=M,H.rectAreaLength=S,H.hemiLength=x,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=b,H.numSpotMaps=L,H.numLightProbes=I,i.version=iD++)}function p(h,m){let _=0,v=0,y=0,E=0,M=0;const S=m.matrixWorldInverse;for(let x=0,T=h.length;x<T;x++){const C=h[x];if(C.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),_++}else if(C.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(C.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(C.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(C.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:i}}function my(r){const e=new rD(r),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function sD(r){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new my(r),e.set(s,[f])):l>=c.length?(f=new my(r),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const oD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lD=`uniform sampler2D shadow_pass;
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
}`;function uD(r,e,t){let i=new TS;const s=new vt,l=new vt,c=new pn,f=new P1({depthPacking:Kb}),p=new I1,h={},m=t.maxTextureSize,_={[Qa]:On,[On]:Qa,[Ei]:Ei},v=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:oD,fragmentShader:lD}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Vr;E.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new na(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aS;let x=this.type;this.render=function(P,I,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const R=r.getRenderTarget(),U=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),X=r.state;X.setBlending(va),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=x!==Va&&this.type===Va,re=x===Va&&this.type!==Va;for(let ee=0,z=P.length;ee<z;ee++){const Y=P[ee],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const _e=k.getFrameExtents();if(s.multiply(_e),l.copy(k.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/_e.x),s.x=l.x*_e.x,k.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/_e.y),s.y=l.y*_e.y,k.mapSize.y=l.y)),k.map===null||j===!0||re===!0){const Z=this.type!==Va?{minFilter:ia,magFilter:ia}:{};k.map!==null&&k.map.dispose(),k.map=new aa(s.x,s.y,Z),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const O=k.getViewportCount();for(let Z=0;Z<O;Z++){const pe=k.getViewport(Z);c.set(l.x*pe.x,l.y*pe.y,l.x*pe.z,l.y*pe.w),X.viewport(c),k.updateMatrices(Y,Z),i=k.getFrustum(),b(I,H,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Va&&T(k,H),k.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(R,U,B)};function T(P,I){const H=e.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new aa(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,H,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,H,y,M,null)}function C(P,I,H,R){let U=null;const B=H.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)U=B;else if(U=H.isPointLight===!0?p:f,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=U.uuid,j=I.uuid;let re=h[X];re===void 0&&(re={},h[X]=re);let ee=re[j];ee===void 0&&(ee=U.clone(),re[j]=ee,I.addEventListener("dispose",L)),U=ee}if(U.visible=I.visible,U.wireframe=I.wireframe,R===Va?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:_[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,H.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const X=r.properties.get(U);X.light=H}return U}function b(P,I,H,R,U){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&U===Va)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld);const j=e.update(P),re=P.material;if(Array.isArray(re)){const ee=j.groups;for(let z=0,Y=ee.length;z<Y;z++){const k=ee[z],_e=re[k.materialIndex];if(_e&&_e.visible){const O=C(P,_e,R,U);P.onBeforeShadow(r,P,I,H,j,O,k),r.renderBufferDirect(H,null,j,O,P,k),P.onAfterShadow(r,P,I,H,j,O,k)}}}else if(re.visible){const ee=C(P,re,R,U);P.onBeforeShadow(r,P,I,H,j,ee,null),r.renderBufferDirect(H,null,j,ee,P,null),P.onAfterShadow(r,P,I,H,j,ee,null)}}const X=P.children;for(let j=0,re=X.length;j<re;j++)b(X[j],I,H,R,U)}function L(P){P.target.removeEventListener("dispose",L);for(const H in h){const R=h[H],U=P.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}const cD={[Qp]:jp,[Zp]:em,[Jp]:tm,[zo]:$p,[jp]:Qp,[em]:Zp,[tm]:Jp,[$p]:zo};function fD(r,e){function t(){let q=!1;const Te=new pn;let we=null;const He=new pn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!q&&(r.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){q=Ee},setClear:function(Ee,ye,Xe,ot,It){It===!0&&(Ee*=ot,ye*=ot,Xe*=ot),Te.set(Ee,ye,Xe,ot),He.equals(Te)===!1&&(r.clearColor(Ee,ye,Xe,ot),He.copy(Te))},reset:function(){q=!1,we=null,He.set(-1,0,0,0)}}}function i(){let q=!1,Te=!1,we=null,He=null,Ee=null;return{setReversed:function(ye){if(Te!==ye){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Te=ye;const ot=Ee;Ee=null,this.setClear(ot)}},getReversed:function(){return Te},setTest:function(ye){ye?ge(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(ye){we!==ye&&!q&&(r.depthMask(ye),we=ye)},setFunc:function(ye){if(Te&&(ye=cD[ye]),He!==ye){switch(ye){case Qp:r.depthFunc(r.NEVER);break;case jp:r.depthFunc(r.ALWAYS);break;case Zp:r.depthFunc(r.LESS);break;case zo:r.depthFunc(r.LEQUAL);break;case Jp:r.depthFunc(r.EQUAL);break;case $p:r.depthFunc(r.GEQUAL);break;case em:r.depthFunc(r.GREATER);break;case tm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=ye}},setLocked:function(ye){q=ye},setClear:function(ye){Ee!==ye&&(Te&&(ye=1-ye),r.clearDepth(ye),Ee=ye)},reset:function(){q=!1,we=null,He=null,Ee=null,Te=!1}}}function s(){let q=!1,Te=null,we=null,He=null,Ee=null,ye=null,Xe=null,ot=null,It=null;return{setTest:function(wt){q||(wt?ge(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(wt){Te!==wt&&!q&&(r.stencilMask(wt),Te=wt)},setFunc:function(wt,Yi,Sn){(we!==wt||He!==Yi||Ee!==Sn)&&(r.stencilFunc(wt,Yi,Sn),we=wt,He=Yi,Ee=Sn)},setOp:function(wt,Yi,Sn){(ye!==wt||Xe!==Yi||ot!==Sn)&&(r.stencilOp(wt,Yi,Sn),ye=wt,Xe=Yi,ot=Sn)},setLocked:function(wt){q=wt},setClear:function(wt){It!==wt&&(r.clearStencil(wt),It=wt)},reset:function(){q=!1,Te=null,we=null,He=null,Ee=null,ye=null,Xe=null,ot=null,It=null}}}const l=new t,c=new i,f=new s,p=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,T=null,C=null,b=null,L=null,P=null,I=new Bt(0,0,0),H=0,R=!1,U=null,B=null,X=null,j=null,re=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=Y>=2);let _e=null,O={};const Z=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Se=new pn().fromArray(Z),be=new pn().fromArray(pe);function Be(q,Te,we,He){const Ee=new Uint8Array(4),ye=r.createTexture();r.bindTexture(q,ye),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<we;Xe++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Te+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return ye}const ne={};ne[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ge(r.DEPTH_TEST),c.setFunc(zo),et(!1),Ie(Mx),ge(r.CULL_FACE),bt(va);function ge(q){m[q]!==!0&&(r.enable(q),m[q]=!0)}function Re(q){m[q]!==!1&&(r.disable(q),m[q]=!1)}function je(q,Te){return _[q]!==Te?(r.bindFramebuffer(q,Te),_[q]=Te,q===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Te),q===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ye(q,Te){let we=y,He=!1;if(q){we=v.get(Te),we===void 0&&(we=[],v.set(Te,we));const Ee=q.textures;if(we.length!==Ee.length||we[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Xe=Ee.length;ye<Xe;ye++)we[ye]=r.COLOR_ATTACHMENT0+ye;we.length=Ee.length,He=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,He=!0);He&&r.drawBuffers(we)}function ct(q){return E!==q?(r.useProgram(q),E=q,!0):!1}const xt={[ys]:r.FUNC_ADD,[Sb]:r.FUNC_SUBTRACT,[Mb]:r.FUNC_REVERSE_SUBTRACT};xt[Eb]=r.MIN,xt[Ab]=r.MAX;const V={[Tb]:r.ZERO,[bb]:r.ONE,[Rb]:r.SRC_COLOR,[qp]:r.SRC_ALPHA,[Nb]:r.SRC_ALPHA_SATURATE,[Ub]:r.DST_COLOR,[wb]:r.DST_ALPHA,[Cb]:r.ONE_MINUS_SRC_COLOR,[Kp]:r.ONE_MINUS_SRC_ALPHA,[Lb]:r.ONE_MINUS_DST_COLOR,[Db]:r.ONE_MINUS_DST_ALPHA,[Ob]:r.CONSTANT_COLOR,[Pb]:r.ONE_MINUS_CONSTANT_COLOR,[Ib]:r.CONSTANT_ALPHA,[Bb]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Te,we,He,Ee,ye,Xe,ot,It,wt){if(q===va){M===!0&&(Re(r.BLEND),M=!1);return}if(M===!1&&(ge(r.BLEND),M=!0),q!==yb){if(q!==S||wt!==R){if((x!==ys||b!==ys)&&(r.blendEquation(r.FUNC_ADD),x=ys,b=ys),wt)switch(q){case Oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ex:r.blendFunc(r.ONE,r.ONE);break;case Ax:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ex:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ax:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}T=null,C=null,L=null,P=null,I.set(0,0,0),H=0,S=q,R=wt}return}Ee=Ee||Te,ye=ye||we,Xe=Xe||He,(Te!==x||Ee!==b)&&(r.blendEquationSeparate(xt[Te],xt[Ee]),x=Te,b=Ee),(we!==T||He!==C||ye!==L||Xe!==P)&&(r.blendFuncSeparate(V[we],V[He],V[ye],V[Xe]),T=we,C=He,L=ye,P=Xe),(ot.equals(I)===!1||It!==H)&&(r.blendColor(ot.r,ot.g,ot.b,It),I.copy(ot),H=It),S=q,R=!1}function st(q,Te){q.side===Ei?Re(r.CULL_FACE):ge(r.CULL_FACE);let we=q.side===On;Te&&(we=!we),et(we),q.blending===Oo&&q.transparent===!1?bt(va):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const He=q.stencilWrite;f.setTest(He),He&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ge(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(q){U!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),U=q)}function Ie(q){q!==_b?(ge(r.CULL_FACE),q!==B&&(q===Mx?r.cullFace(r.BACK):q===vb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),B=q}function Ot(q){q!==X&&(z&&r.lineWidth(q),X=q)}function Ge(q,Te,we){q?(ge(r.POLYGON_OFFSET_FILL),(j!==Te||re!==we)&&(r.polygonOffset(Te,we),j=Te,re=we)):Re(r.POLYGON_OFFSET_FILL)}function Fe(q){q?ge(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function lt(q){q===void 0&&(q=r.TEXTURE0+ee-1),_e!==q&&(r.activeTexture(q),_e=q)}function Ct(q,Te,we){we===void 0&&(_e===null?we=r.TEXTURE0+ee-1:we=_e);let He=O[we];He===void 0&&(He={type:void 0,texture:void 0},O[we]=He),(He.type!==q||He.texture!==Te)&&(_e!==we&&(r.activeTexture(we),_e=we),r.bindTexture(q,Te||ne[q]),He.type=q,He.texture=Te)}function F(){const q=O[_e];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{r.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{r.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{r.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ce(){try{r.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{r.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qe(){try{r.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{r.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(q){Se.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Se.copy(q))}function Je(q){be.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),be.copy(q))}function We(q,Te){let we=h.get(Te);we===void 0&&(we=new WeakMap,h.set(Te,we));let He=we.get(q);He===void 0&&(He=r.getUniformBlockIndex(Te,q.name),we.set(q,He))}function Ue(q,Te){const He=h.get(Te).get(q);p.get(Te)!==He&&(r.uniformBlockBinding(Te,He,q.__bindingPointIndex),p.set(Te,He))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},_e=null,O={},_={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,T=null,C=null,b=null,L=null,P=null,I=new Bt(0,0,0),H=0,R=!1,U=null,B=null,X=null,j=null,re=null,Se.set(0,0,r.canvas.width,r.canvas.height),be.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ge,disable:Re,bindFramebuffer:je,drawBuffers:Ye,useProgram:ct,setBlending:bt,setMaterial:st,setFlipSided:et,setCullFace:Ie,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:Fe,activeTexture:lt,bindTexture:Ct,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:ie,texImage2D:Qe,texImage3D:Me,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:qe,texSubImage2D:he,texSubImage3D:ve,compressedTexSubImage2D:fe,compressedTexSubImage3D:ze,scissor:Ne,viewport:Je,reset:ut}}function hD(r,e,t,i,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new vt,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,w){return y?new OffscreenCanvas(F,w):wf("canvas")}function M(F,w,ie){let he=1;const ve=Ct(F);if((ve.width>ie||ve.height>ie)&&(he=ie/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const fe=Math.floor(he*ve.width),ze=Math.floor(he*ve.height);_===void 0&&(_=E(fe,ze));const Ce=w?E(fe,ze):_;return Ce.width=fe,Ce.height=ze,Ce.getContext("2d").drawImage(F,0,0,fe,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+fe+"x"+ze+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){r.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(F,w,ie,he,ve=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let fe=w;if(w===r.RED&&(ie===r.FLOAT&&(fe=r.R32F),ie===r.HALF_FLOAT&&(fe=r.R16F),ie===r.UNSIGNED_BYTE&&(fe=r.R8)),w===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.R8UI),ie===r.UNSIGNED_SHORT&&(fe=r.R16UI),ie===r.UNSIGNED_INT&&(fe=r.R32UI),ie===r.BYTE&&(fe=r.R8I),ie===r.SHORT&&(fe=r.R16I),ie===r.INT&&(fe=r.R32I)),w===r.RG&&(ie===r.FLOAT&&(fe=r.RG32F),ie===r.HALF_FLOAT&&(fe=r.RG16F),ie===r.UNSIGNED_BYTE&&(fe=r.RG8)),w===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RG8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RG16UI),ie===r.UNSIGNED_INT&&(fe=r.RG32UI),ie===r.BYTE&&(fe=r.RG8I),ie===r.SHORT&&(fe=r.RG16I),ie===r.INT&&(fe=r.RG32I)),w===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),ie===r.UNSIGNED_INT&&(fe=r.RGB32UI),ie===r.BYTE&&(fe=r.RGB8I),ie===r.SHORT&&(fe=r.RGB16I),ie===r.INT&&(fe=r.RGB32I)),w===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),ie===r.UNSIGNED_INT&&(fe=r.RGBA32UI),ie===r.BYTE&&(fe=r.RGBA8I),ie===r.SHORT&&(fe=r.RGBA16I),ie===r.INT&&(fe=r.RGBA32I)),w===r.RGB&&(ie===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),w===r.RGBA){const ze=ve?Rf:Lt.getTransfer(he);ie===r.FLOAT&&(fe=r.RGBA32F),ie===r.HALF_FLOAT&&(fe=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(fe=ze===Xt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(F,w){let ie;return F?w===null||w===Ir||w===Vo?ie=r.DEPTH24_STENCIL8:w===Wa?ie=r.DEPTH32F_STENCIL8:w===cu&&(ie=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ir||w===Vo?ie=r.DEPTH_COMPONENT24:w===Wa?ie=r.DEPTH_COMPONENT32F:w===cu&&(ie=r.DEPTH_COMPONENT16),ie}function L(F,w){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==ia&&F.minFilter!==Qn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function P(F){const w=F.target;w.removeEventListener("dispose",P),H(w),w.isVideoTexture&&m.delete(w)}function I(F){const w=F.target;w.removeEventListener("dispose",I),U(w)}function H(F){const w=i.get(F);if(w.__webglInit===void 0)return;const ie=F.source,he=v.get(ie);if(he){const ve=he[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(F),Object.keys(he).length===0&&v.delete(ie)}i.remove(F)}function R(F){const w=i.get(F);r.deleteTexture(w.__webglTexture);const ie=F.source,he=v.get(ie);delete he[w.__cacheKey],c.memory.textures--}function U(F){const w=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ve=0;ve<w.__webglFramebuffer[he].length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[he][ve]);else r.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)r.deleteFramebuffer(w.__webglFramebuffer[he]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=F.textures;for(let he=0,ve=ie.length;he<ve;he++){const fe=i.get(ie[he]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(ie[he])}i.remove(F)}let B=0;function X(){B=0}function j(){const F=B;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),B+=1,F}function re(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function ee(F,w){const ie=i.get(F);if(F.isVideoTexture&&Fe(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ie.__version!==F.version){const he=F.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ie,F,w);return}}else F.isExternalTexture&&(ie.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+w)}function z(F,w){const ie=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){ne(ie,F,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+w)}function Y(F,w){const ie=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){ne(ie,F,w);return}t.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+w)}function k(F,w){const ie=i.get(F);if(F.version>0&&ie.__version!==F.version){ge(ie,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+w)}const _e={[am]:r.REPEAT,[Ms]:r.CLAMP_TO_EDGE,[rm]:r.MIRRORED_REPEAT},O={[ia]:r.NEAREST,[qb]:r.NEAREST_MIPMAP_NEAREST,[Gc]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[ep]:r.LINEAR_MIPMAP_NEAREST,[Es]:r.LINEAR_MIPMAP_LINEAR},Z={[Zb]:r.NEVER,[i1]:r.ALWAYS,[Jb]:r.LESS,[mS]:r.LEQUAL,[$b]:r.EQUAL,[n1]:r.GEQUAL,[e1]:r.GREATER,[t1]:r.NOTEQUAL};function pe(F,w){if(w.type===Wa&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qn||w.magFilter===ep||w.magFilter===Gc||w.magFilter===Es||w.minFilter===Qn||w.minFilter===ep||w.minFilter===Gc||w.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,_e[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,_e[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,_e[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,O[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ia||w.minFilter!==Gc&&w.minFilter!==Es||w.type===Wa&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Se(F,w){let ie=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",P));const he=w.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const fe=re(w);if(fe!==F.__cacheKey){ve[fe]===void 0&&(ve[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),ve[fe].usedTimes++;const ze=ve[F.__cacheKey];ze!==void 0&&(ve[F.__cacheKey].usedTimes--,ze.usedTimes===0&&R(w)),F.__cacheKey=fe,F.__webglTexture=ve[fe].texture}return ie}function be(F,w,ie){return Math.floor(Math.floor(F/ie)/w)}function Be(F,w,ie,he){const fe=F.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,ie,he,w.data);else{fe.sort((Me,Ne)=>Me.start-Ne.start);let ze=0;for(let Me=1;Me<fe.length;Me++){const Ne=fe[ze],Je=fe[Me],We=Ne.start+Ne.count,Ue=be(Je.start,w.width,4),ut=be(Ne.start,w.width,4);Je.start<=We+1&&Ue===ut&&be(Je.start+Je.count-1,w.width,4)===Ue?Ne.count=Math.max(Ne.count,Je.start+Je.count-Ne.start):(++ze,fe[ze]=Je)}fe.length=ze+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),qe=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ne=fe.length;Me<Ne;Me++){const Je=fe[Me],We=Math.floor(Je.start/4),Ue=Math.ceil(Je.count/4),ut=We%w.width,q=Math.floor(We/w.width),Te=Ue,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,ut,q,Te,we,ie,he,w.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function ne(F,w,ie){let he=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=r.TEXTURE_3D);const ve=Se(F,w),fe=w.source;t.bindTexture(he,F.__webglTexture,r.TEXTURE0+ie);const ze=i.get(fe);if(fe.version!==ze.__version||ve===!0){t.activeTexture(r.TEXTURE0+ie);const Ce=Lt.getPrimaries(Lt.workingColorSpace),qe=w.colorSpace===pa?null:Lt.getPrimaries(w.colorSpace),Qe=w.colorSpace===pa||Ce===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Me=M(w.image,!1,s.maxTextureSize);Me=lt(w,Me);const Ne=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let We=C(w.internalFormat,Ne,Je,w.colorSpace,w.isVideoTexture);pe(he,w);let Ue;const ut=w.mipmaps,q=w.isVideoTexture!==!0,Te=ze.__version===void 0||ve===!0,we=fe.dataReady,He=L(w,Me);if(w.isDepthTexture)We=b(w.format===ko,w.type),Te&&(q?t.texStorage2D(r.TEXTURE_2D,1,We,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,Je,null));else if(w.isDataTexture)if(ut.length>0){q&&Te&&t.texStorage2D(r.TEXTURE_2D,He,We,ut[0].width,ut[0].height);for(let Ee=0,ye=ut.length;Ee<ye;Ee++)Ue=ut[Ee],q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Je,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ne,Je,Ue.data);w.generateMipmaps=!1}else q?(Te&&t.texStorage2D(r.TEXTURE_2D,He,We,Me.width,Me.height),we&&Be(w,Me,Ne,Je)):t.texImage2D(r.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,Je,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){q&&Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,We,ut[0].width,ut[0].height,Me.depth);for(let Ee=0,ye=ut.length;Ee<ye;Ee++)if(Ue=ut[Ee],w.format!==ta)if(Ne!==null)if(q){if(we)if(w.layerUpdates.size>0){const Xe=Wx(Ue.width,Ue.height,w.format,w.type);for(const ot of w.layerUpdates){const It=Ue.data.subarray(ot*Xe/Ue.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,ot,Ue.width,Ue.height,1,Ne,It)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ne,Ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,We,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Me.depth,Ne,Je,Ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Ee,We,Ue.width,Ue.height,Me.depth,0,Ne,Je,Ue.data)}else{q&&Te&&t.texStorage2D(r.TEXTURE_2D,He,We,ut[0].width,ut[0].height);for(let Ee=0,ye=ut.length;Ee<ye;Ee++)Ue=ut[Ee],w.format!==ta?Ne!==null?q?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Ue.data):t.compressedTexImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ne,Je,Ue.data):t.texImage2D(r.TEXTURE_2D,Ee,We,Ue.width,Ue.height,0,Ne,Je,Ue.data)}else if(w.isDataArrayTexture)if(q){if(Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,We,Me.width,Me.height,Me.depth),we)if(w.layerUpdates.size>0){const Ee=Wx(Me.width,Me.height,w.format,w.type);for(const ye of w.layerUpdates){const Xe=Me.data.subarray(ye*Ee/Me.data.BYTES_PER_ELEMENT,(ye+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Me.width,Me.height,1,Ne,Je,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Je,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ne,Je,Me.data);else if(w.isData3DTexture)q?(Te&&t.texStorage3D(r.TEXTURE_3D,He,We,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,Je,Me.data)):t.texImage3D(r.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ne,Je,Me.data);else if(w.isFramebufferTexture){if(Te)if(q)t.texStorage2D(r.TEXTURE_2D,He,We,Me.width,Me.height);else{let Ee=Me.width,ye=Me.height;for(let Xe=0;Xe<He;Xe++)t.texImage2D(r.TEXTURE_2D,Xe,We,Ee,ye,0,Ne,Je,null),Ee>>=1,ye>>=1}}else if(ut.length>0){if(q&&Te){const Ee=Ct(ut[0]);t.texStorage2D(r.TEXTURE_2D,He,We,Ee.width,Ee.height)}for(let Ee=0,ye=ut.length;Ee<ye;Ee++)Ue=ut[Ee],q?we&&t.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ne,Je,Ue):t.texImage2D(r.TEXTURE_2D,Ee,We,Ne,Je,Ue);w.generateMipmaps=!1}else if(q){if(Te){const Ee=Ct(Me);t.texStorage2D(r.TEXTURE_2D,He,We,Ee.width,Ee.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Je,Me)}else t.texImage2D(r.TEXTURE_2D,0,We,Ne,Je,Me);S(w)&&x(he),ze.__version=fe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ge(F,w,ie){if(w.image.length!==6)return;const he=Se(F,w),ve=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ie);const fe=i.get(ve);if(ve.version!==fe.__version||he===!0){t.activeTexture(r.TEXTURE0+ie);const ze=Lt.getPrimaries(Lt.workingColorSpace),Ce=w.colorSpace===pa?null:Lt.getPrimaries(w.colorSpace),qe=w.colorSpace===pa||ze===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!Qe&&!Me?Ne[ye]=M(w.image[ye],!0,s.maxCubemapSize):Ne[ye]=Me?w.image[ye].image:w.image[ye],Ne[ye]=lt(w,Ne[ye]);const Je=Ne[0],We=l.convert(w.format,w.colorSpace),Ue=l.convert(w.type),ut=C(w.internalFormat,We,Ue,w.colorSpace),q=w.isVideoTexture!==!0,Te=fe.__version===void 0||he===!0,we=ve.dataReady;let He=L(w,Je);pe(r.TEXTURE_CUBE_MAP,w);let Ee;if(Qe){q&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,Je.width,Je.height);for(let ye=0;ye<6;ye++){Ee=Ne[ye].mipmaps;for(let Xe=0;Xe<Ee.length;Xe++){const ot=Ee[Xe];w.format!==ta?We!==null?q?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,ot.width,ot.height,We,ot.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,0,0,ot.width,ot.height,We,Ue,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe,ut,ot.width,ot.height,0,We,Ue,ot.data)}}}else{if(Ee=w.mipmaps,q&&Te){Ee.length>0&&He++;const ye=Ct(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,He,ut,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Me){q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,We,Ue,Ne[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,Ne[ye].width,Ne[ye].height,0,We,Ue,Ne[ye].data);for(let Xe=0;Xe<Ee.length;Xe++){const It=Ee[Xe].image[ye].image;q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,It.width,It.height,We,Ue,It.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,ut,It.width,It.height,0,We,Ue,It.data)}}else{q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,We,Ue,Ne[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,We,Ue,Ne[ye]);for(let Xe=0;Xe<Ee.length;Xe++){const ot=Ee[Xe];q?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,0,0,We,Ue,ot.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Xe+1,ut,We,Ue,ot.image[ye])}}}S(w)&&x(r.TEXTURE_CUBE_MAP),fe.__version=ve.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Re(F,w,ie,he,ve,fe){const ze=l.convert(ie.format,ie.colorSpace),Ce=l.convert(ie.type),qe=C(ie.internalFormat,ze,Ce,ie.colorSpace),Qe=i.get(w),Me=i.get(ie);if(Me.__renderTarget=w,!Qe.__hasExternalTextures){const Ne=Math.max(1,w.width>>fe),Je=Math.max(1,w.height>>fe);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,fe,qe,Ne,Je,w.depth,0,ze,Ce,null):t.texImage2D(ve,fe,qe,Ne,Je,0,ze,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ve,Me.__webglTexture,0,Ot(w)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ve,Me.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(F,w,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){const he=w.depthTexture,ve=he&&he.isDepthTexture?he.type:null,fe=b(w.stencilBuffer,ve),ze=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Ot(w);Ge(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,fe,w.width,w.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,fe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ze,r.RENDERBUFFER,F)}else{const he=w.textures;for(let ve=0;ve<he.length;ve++){const fe=he[ve],ze=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),qe=C(fe.internalFormat,ze,Ce,fe.colorSpace),Qe=Ot(w);ie&&Ge(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,qe,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,qe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,qe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(w.depthTexture);he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const ve=he.__webglTexture,fe=Ot(w);if(w.depthTexture.format===fu)Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===ko)Ge(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ct(F){const w=i.get(F),ie=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const he=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=he}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const he=F.texture.mipmaps;he&&he.length>0?Ye(w.__webglFramebuffer[0],F):Ye(w.__webglFramebuffer,F)}else if(ie){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=r.createRenderbuffer(),je(w.__webglDepthbuffer[he],F,!1);else{const ve=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,fe)}}else{const he=F.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),je(w.__webglDepthbuffer,F,!1);else{const ve=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,fe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(F,w,ie){const he=i.get(F);w!==void 0&&Re(he.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&ct(F)}function V(F){const w=F.texture,ie=i.get(F),he=i.get(w);F.addEventListener("dispose",I);const ve=F.textures,fe=F.isWebGLCubeRenderTarget===!0,ze=ve.length>1;if(ze||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=w.version,c.memory.textures++),fe){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let qe=0;qe<w.mipmaps.length;qe++)ie.__webglFramebuffer[Ce][qe]=r.createFramebuffer()}else ie.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(ze)for(let Ce=0,qe=ve.length;Ce<qe;Ce++){const Qe=i.get(ve[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(F.samples>0&&Ge(F)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const qe=ve[Ce];ie.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const Qe=l.convert(qe.format,qe.colorSpace),Me=l.convert(qe.type),Ne=C(qe.internalFormat,Qe,Me,qe.colorSpace,F.isXRRenderTarget===!0),Je=Ot(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Ne,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),je(ie.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),pe(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let qe=0;qe<w.mipmaps.length;qe++)Re(ie.__webglFramebuffer[Ce][qe],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,qe);else Re(ie.__webglFramebuffer[Ce],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ce=0,qe=ve.length;Ce<qe;Ce++){const Qe=ve[Ce],Me=i.get(Qe);let Ne=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Me.__webglTexture),pe(Ne,Qe),Re(ie.__webglFramebuffer,F,Qe,r.COLOR_ATTACHMENT0+Ce,Ne,0),S(Qe)&&x(Ne)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),pe(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let qe=0;qe<w.mipmaps.length;qe++)Re(ie.__webglFramebuffer[qe],F,w,r.COLOR_ATTACHMENT0,Ce,qe);else Re(ie.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,Ce,0);S(w)&&x(Ce),t.unbindTexture()}F.depthBuffer&&ct(F)}function bt(F){const w=F.textures;for(let ie=0,he=w.length;ie<he;ie++){const ve=w[ie];if(S(ve)){const fe=T(F),ze=i.get(ve).__webglTexture;t.bindTexture(fe,ze),x(fe),t.unbindTexture()}}}const st=[],et=[];function Ie(F){if(F.samples>0){if(Ge(F)===!1){const w=F.textures,ie=F.width,he=F.height;let ve=r.COLOR_BUFFER_BIT;const fe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=i.get(F),Ce=w.length>1;if(Ce)for(let Qe=0;Qe<w.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const qe=F.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Qe=0;Qe<w.length;Qe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Qe]);const Me=i.get(w[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,ie,he,0,0,ie,he,ve,r.NEAREST),p===!0&&(st.length=0,et.length=0,st.push(r.COLOR_ATTACHMENT0+Qe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(st.push(fe),et.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<w.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,ze.__webglColorRenderbuffer[Qe]);const Me=i.get(w[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function Ot(F){return Math.min(s.maxSamples,F.samples)}function Ge(F){const w=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Fe(F){const w=c.render.frame;m.get(F)!==w&&(m.set(F,w),F.update())}function lt(F,w){const ie=F.colorSpace,he=F.format,ve=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ie!==Br&&ie!==pa&&(Lt.getTransfer(ie)===Xt?(he!==ta||ve!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function Ct(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=xt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ge}function dD(r,e){function t(i,s=pa){let l;const c=Lt.getTransfer(s);if(i===Ci)return r.UNSIGNED_BYTE;if(i===og)return r.UNSIGNED_SHORT_4_4_4_4;if(i===lg)return r.UNSIGNED_SHORT_5_5_5_1;if(i===uS)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===cS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===oS)return r.BYTE;if(i===lS)return r.SHORT;if(i===cu)return r.UNSIGNED_SHORT;if(i===sg)return r.INT;if(i===Ir)return r.UNSIGNED_INT;if(i===Wa)return r.FLOAT;if(i===Eu)return r.HALF_FLOAT;if(i===fS)return r.ALPHA;if(i===hS)return r.RGB;if(i===ta)return r.RGBA;if(i===fu)return r.DEPTH_COMPONENT;if(i===ko)return r.DEPTH_STENCIL;if(i===dS)return r.RED;if(i===ug)return r.RED_INTEGER;if(i===pS)return r.RG;if(i===cg)return r.RG_INTEGER;if(i===fg)return r.RGBA_INTEGER;if(i===vf||i===xf||i===yf||i===Sf)if(c===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===vf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===vf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sm||i===om||i===lm||i===um)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===sm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===om)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===um)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cm||i===fm||i===hm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===cm||i===fm)return c===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===hm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm||i===ym||i===Sm||i===Mm||i===Em||i===Am||i===Tm||i===bm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===dm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_m)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ym)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Em)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Am)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bm)return c===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rm||i===Cm||i===wm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Rm)return c===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dm||i===Um||i===Lm||i===Nm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Dm)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const pD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mD=`
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

}`;class gD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wi({vertexShader:pD,fragmentShader:mD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new na(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _D extends Gr{constructor(e,t){super();const i=this;let s=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,_=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new gD,x={},T=t.getContextAttributes();let C=null,b=null;const L=[],P=[],I=new vt;let H=null;const R=new Hi;R.viewport=new pn;const U=new Hi;U.viewport=new pn;const B=[R,U],X=new B1;let j=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=L[ne];return ge===void 0&&(ge=new Ep,L[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=L[ne];return ge===void 0&&(ge=new Ep,L[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=L[ne];return ge===void 0&&(ge=new Ep,L[ne]=ge),ge.getHandSpace()};function ee(ne){const ge=P.indexOf(ne.inputSource);if(ge===-1)return;const Re=L[ge];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,h||c),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<L.length;ne++){const ge=P[ne];ge!==null&&(P[ne]=null,L[ne].disconnect(ge))}j=null,re=null,S.reset();for(const ne in x)delete x[ne];e.setRenderTarget(C),y=null,v=null,_=null,s=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(H),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,je=null,Ye=null;T.depth&&(Ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=T.stencil?ko:fu,je=T.stencil?Vo:Ir);const ct={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ct),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new aa(v.textureWidth,v.textureHeight,{format:ta,type:Ci,depthTexture:new mg(v.textureWidth,v.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Re={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new aa(y.framebufferWidth,y.framebufferHeight,{format:ta,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await s.requestReferenceSpace(f),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ne){for(let ge=0;ge<ne.removed.length;ge++){const Re=ne.removed[ge],je=P.indexOf(Re);je>=0&&(P[je]=null,L[je].disconnect(Re))}for(let ge=0;ge<ne.added.length;ge++){const Re=ne.added[ge];let je=P.indexOf(Re);if(je===-1){for(let ct=0;ct<L.length;ct++)if(ct>=P.length){P.push(Re),je=ct;break}else if(P[ct]===null){P[ct]=Re,je=ct;break}if(je===-1)break}const Ye=L[je];Ye&&Ye.connect(Re)}}const k=new ce,_e=new ce;function O(ne,ge,Re){k.setFromMatrixPosition(ge.matrixWorld),_e.setFromMatrixPosition(Re.matrixWorld);const je=k.distanceTo(_e),Ye=ge.projectionMatrix.elements,ct=Re.projectionMatrix.elements,xt=Ye[14]/(Ye[10]-1),V=Ye[14]/(Ye[10]+1),bt=(Ye[9]+1)/Ye[5],st=(Ye[9]-1)/Ye[5],et=(Ye[8]-1)/Ye[0],Ie=(ct[8]+1)/ct[0],Ot=xt*et,Ge=xt*Ie,Fe=je/(-et+Ie),lt=Fe*-et;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(lt),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ye[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ct=xt+Fe,F=V+Fe,w=Ot-lt,ie=Ge+(je-lt),he=bt*V/F*Ct,ve=st*V/F*Ct;ne.projectionMatrix.makePerspective(w,ie,he,ve,Ct,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Z(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,Re=ne.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),X.near=U.near=R.near=ge,X.far=U.far=R.far=Re,(j!==X.near||re!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),j=X.near,re=X.far),X.layers.mask=ne.layers.mask|6,R.layers.mask=X.layers.mask&3,U.layers.mask=X.layers.mask&5;const je=ne.parent,Ye=X.cameras;Z(X,je);for(let ct=0;ct<Ye.length;ct++)Z(Ye[ct],je);Ye.length===2?O(X,R,U):X.projectionMatrix.copy(R.projectionMatrix),pe(ne,X,je)};function pe(ne,ge,Re){Re===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Pm*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(ne){p=ne,v!==null&&(v.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(ne){return x[ne]};let Se=null;function be(ne,ge){if(m=ge.getViewerPose(h||c),E=ge,m!==null){const Re=m.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let je=!1;Re.length!==X.cameras.length&&(X.cameras.length=0,je=!0);for(let V=0;V<Re.length;V++){const bt=Re[V];let st=null;if(y!==null)st=y.getViewport(bt);else{const Ie=_.getViewSubImage(v,bt);st=Ie.viewport,V===0&&(e.setRenderTargetTextures(b,Ie.colorTexture,Ie.depthStencilTexture),e.setRenderTarget(b))}let et=B[V];et===void 0&&(et=new Hi,et.layers.enable(V),et.viewport=new pn,B[V]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),V===0&&(X.matrix.copy(et.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),je===!0&&X.cameras.push(et)}const Ye=s.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=i.getBinding();const V=_.getDepthInformation(Re[0]);V&&V.isValid&&V.texture&&S.init(V,s.renderState)}if(Ye&&Ye.includes("camera-access")&&M){e.state.unbindTexture(),_=i.getBinding();for(let V=0;V<Re.length;V++){const bt=Re[V].camera;if(bt){let st=x[bt];st||(st=new bS,x[bt]=st);const et=_.getCameraImage(bt);st.sourceTexture=et}}}}for(let Re=0;Re<L.length;Re++){const je=P[Re],Ye=L[Re];je!==null&&Ye!==void 0&&Ye.update(je,ge,h||c)}Se&&Se(ne,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),E=null}const Be=new CS;Be.setAnimationLoop(be),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const ds=new ja,vD=new bn;function xD(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,ES(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,T,C,b){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,T,C):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===On&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===On&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const T=e.get(x),C=T.envMap,b=T.envMapRotation;C&&(S.envMap.value=C,ds.copy(b),ds.x*=-1,ds.y*=-1,ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(vD.makeRotationFromEuler(ds)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,T,C){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*T,S.scale.value=C*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,T){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===On&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const T=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yD(r,e,t,i){let s={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,C){const b=C.program;i.uniformBlockBinding(T,b)}function h(T,C){let b=s[T.id];b===void 0&&(E(T),b=m(T),s[T.id]=b,T.addEventListener("dispose",S));const L=C.program;i.updateUBOMapping(T,L);const P=e.render.frame;l[T.id]!==P&&(v(T),l[T.id]=P)}function m(T){const C=_();T.__bindingPointIndex=C;const b=r.createBuffer(),L=T.__size,P=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,L,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function _(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const C=s[T.id],b=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let P=0,I=b.length;P<I;P++){const H=Array.isArray(b[P])?b[P]:[b[P]];for(let R=0,U=H.length;R<U;R++){const B=H[R];if(y(B,P,R,L)===!0){const X=B.__offset,j=Array.isArray(B.value)?B.value:[B.value];let re=0;for(let ee=0;ee<j.length;ee++){const z=j[ee],Y=M(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,X+re,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,re),re+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(T,C,b,L){const P=T.value,I=C+"_"+b;if(L[I]===void 0)return typeof P=="number"||typeof P=="boolean"?L[I]=P:L[I]=P.clone(),!0;{const H=L[I];if(typeof P=="number"||typeof P=="boolean"){if(H!==P)return L[I]=P,!0}else if(H.equals(P)===!1)return H.copy(P),!0}return!1}function E(T){const C=T.uniforms;let b=0;const L=16;for(let I=0,H=C.length;I<H;I++){const R=Array.isArray(C[I])?C[I]:[C[I]];for(let U=0,B=R.length;U<B;U++){const X=R[U],j=Array.isArray(X.value)?X.value:[X.value];for(let re=0,ee=j.length;re<ee;re++){const z=j[re],Y=M(z),k=b%L,_e=k%Y.boundary,O=k+_e;b+=_e,O!==0&&L-O<Y.storage&&(b+=L-O),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=Y.storage}}}const P=b%L;return P>0&&(b+=L-P),T.__size=b,T.__cache={},this}function M(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),C}function S(T){const C=T.target;C.removeEventListener("dispose",S);const b=c.indexOf(C.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function x(){for(const T in s)r.deleteBuffer(s[T]);c=[],s={},l={}}return{bind:p,update:h,dispose:x}}class SD{constructor(e={}){const{canvas:t=r1(),context:i=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const T=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1;this._outputColorSpace=dn;let P=0,I=0,H=null,R=-1,U=null;const B=new pn,X=new pn;let j=null;const re=new Bt(0);let ee=0,z=t.width,Y=t.height,k=1,_e=null,O=null;const Z=new pn(0,0,z,Y),pe=new pn(0,0,z,Y);let Se=!1;const be=new TS;let Be=!1,ne=!1;const ge=new bn,Re=new ce,je=new pn,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function xt(){return H===null?k:1}let V=i;function bt(N,K){return t.getContext(N,K)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zf}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const K="webgl2";if(V=bt(K,N),V===null)throw bt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let st,et,Ie,Ot,Ge,Fe,lt,Ct,F,w,ie,he,ve,fe,ze,Ce,qe,Qe,Me,Ne,Je,We,Ue,ut;function q(){st=new Uw(V),st.init(),We=new dD(V,st),et=new Aw(V,st,e,We),Ie=new fD(V,st),et.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),Ot=new Ow(V),Ge=new J2,Fe=new hD(V,st,Ie,Ge,et,We,Ot),lt=new bw(b),Ct=new Dw(b),F=new H1(V),Ue=new Mw(V,F),w=new Lw(V,F,Ot,Ue),ie=new Iw(V,w,F,Ot),Me=new Pw(V,et,Fe),Ce=new Tw(Ge),he=new Z2(b,lt,Ct,st,et,Ue,Ce),ve=new xD(b,Ge),fe=new eD,ze=new sD(st),Qe=new Sw(b,lt,Ct,Ie,ie,y,p),qe=new uD(b,ie,et),ut=new yD(V,Ot,et,Ie),Ne=new Ew(V,st,Ot),Je=new Nw(V,st,Ot),Ot.programs=he.programs,b.capabilities=et,b.extensions=st,b.properties=Ge,b.renderLists=fe,b.shadowMap=qe,b.state=Ie,b.info=Ot}q();const Te=new _D(b,V);this.xr=Te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=st.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=st.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(z,Y,!1))},this.getSize=function(N){return N.set(z,Y)},this.setSize=function(N,K,le=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=N,Y=K,t.width=Math.floor(N*k),t.height=Math.floor(K*k),le===!0&&(t.style.width=N+"px",t.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(z*k,Y*k).floor()},this.setDrawingBufferSize=function(N,K,le){z=N,Y=K,k=le,t.width=Math.floor(N*le),t.height=Math.floor(K*le),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(Z)},this.setViewport=function(N,K,le,ue){N.isVector4?Z.set(N.x,N.y,N.z,N.w):Z.set(N,K,le,ue),Ie.viewport(B.copy(Z).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(pe)},this.setScissor=function(N,K,le,ue){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,K,le,ue),Ie.scissor(X.copy(pe).multiplyScalar(k).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){Ie.setScissorTest(Se=N)},this.setOpaqueSort=function(N){_e=N},this.setTransparentSort=function(N){O=N},this.getClearColor=function(N){return N.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(N=!0,K=!0,le=!0){let ue=0;if(N){let J=!1;if(H!==null){const Ae=H.texture.format;J=Ae===fg||Ae===cg||Ae===ug}if(J){const Ae=H.texture.type,Le=Ae===Ci||Ae===Ir||Ae===cu||Ae===Vo||Ae===og||Ae===lg,Ve=Qe.getClearColor(),Oe=Qe.getClearAlpha(),tt=Ve.r,it=Ve.g,Ke=Ve.b;Le?(E[0]=tt,E[1]=it,E[2]=Ke,E[3]=Oe,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=tt,M[1]=it,M[2]=Ke,M[3]=Oe,V.clearBufferiv(V.COLOR,0,M))}else ue|=V.COLOR_BUFFER_BIT}K&&(ue|=V.DEPTH_BUFFER_BIT),le&&(ue|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Qe.dispose(),fe.dispose(),ze.dispose(),Ge.dispose(),lt.dispose(),Ct.dispose(),ie.dispose(),Ue.dispose(),ut.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Sn),Te.removeEventListener("sessionend",Mn),rn.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=Ot.autoReset,K=qe.enabled,le=qe.autoUpdate,ue=qe.needsUpdate,J=qe.type;q(),Ot.autoReset=N,qe.enabled=K,qe.autoUpdate=le,qe.needsUpdate=ue,qe.type=J}function Ee(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ye(N){const K=N.target;K.removeEventListener("dispose",ye),Xe(K)}function Xe(N){ot(N),Ge.remove(N)}function ot(N){const K=Ge.get(N).programs;K!==void 0&&(K.forEach(function(le){he.releaseProgram(le)}),N.isShaderMaterial&&he.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,le,ue,J,Ae){K===null&&(K=Ye);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ve=er(N,K,le,ue,J);Ie.setMaterial(ue,Le);let Oe=le.index,tt=1;if(ue.wireframe===!0){if(Oe=w.getWireframeAttribute(le),Oe===void 0)return;tt=2}const it=le.drawRange,Ke=le.attributes.position;let dt=it.start*tt,Dt=(it.start+it.count)*tt;Ae!==null&&(dt=Math.max(dt,Ae.start*tt),Dt=Math.min(Dt,(Ae.start+Ae.count)*tt)),Oe!==null?(dt=Math.max(dt,0),Dt=Math.min(Dt,Oe.count)):Ke!=null&&(dt=Math.max(dt,0),Dt=Math.min(Dt,Ke.count));const Zt=Dt-dt;if(Zt<0||Zt===1/0)return;Ue.setup(J,ue,Ve,le,Oe);let Ht,pt=Ne;if(Oe!==null&&(Ht=F.get(Oe),pt=Je,pt.setIndex(Ht)),J.isMesh)ue.wireframe===!0?(Ie.setLineWidth(ue.wireframeLinewidth*xt()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(J.isLine){let $e=ue.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*xt()),J.isLineSegments?pt.setMode(V.LINES):J.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else J.isPoints?pt.setMode(V.POINTS):J.isSprite&&pt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)hu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const $e=J._multiDrawStarts,jt=J._multiDrawCounts,yt=J._multiDrawCount,Vn=Oe?F.get(Oe).bytesPerElement:1,qi=Ge.get(ue).currentProgram.getUniforms();for(let Zn=0;Zn<yt;Zn++)qi.setValue(V,"_gl_DrawID",Zn),pt.render($e[Zn]/Vn,jt[Zn])}else if(J.isInstancedMesh)pt.renderInstances(dt,Zt,J.count);else if(le.isInstancedBufferGeometry){const $e=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,jt=Math.min(le.instanceCount,$e);pt.renderInstances(dt,Zt,jt)}else pt.render(dt,Zt)};function It(N,K,le){N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=On,N.needsUpdate=!0,sa(N,K,le),N.side=Qa,N.needsUpdate=!0,sa(N,K,le),N.side=Ei):sa(N,K,le)}this.compile=function(N,K,le=null){le===null&&(le=N),x=ze.get(le),x.init(K),C.push(x),le.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==le&&N.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const ue=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){const Ve=Ae[Le];It(Ve,le,J),ue.add(Ve)}else It(Ae,le,J),ue.add(Ae)}),x=C.pop(),ue},this.compileAsync=function(N,K,le=null){const ue=this.compile(N,K,le);return new Promise(J=>{function Ae(){if(ue.forEach(function(Le){Ge.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){J(N);return}setTimeout(Ae,10)}st.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let wt=null;function Yi(N){wt&&wt(N)}function Sn(){rn.stop()}function Mn(){rn.start()}const rn=new CS;rn.setAnimationLoop(Yi),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(N){wt=N,Te.setAnimationLoop(N),N===null?rn.stop():rn.start()},Te.addEventListener("sessionstart",Sn),Te.addEventListener("sessionend",Mn),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(K),K=Te.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,K,H),x=ze.get(N,C.length),x.init(K),C.push(x),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),be.setFromProjectionMatrix(ge,ga,K.reversedDepth),ne=this.localClippingEnabled,Be=Ce.init(this.clippingPlanes,ne),S=fe.get(N,T.length),S.init(),T.push(S),Te.enabled===!0&&Te.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&ra(Ae,K,-1/0,b.sortObjects)}ra(N,K,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(_e,O),ct=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ct&&Qe.addToRenderList(S,N),this.info.render.frame++,Be===!0&&Ce.beginShadows();const le=x.state.shadowsArray;qe.render(le,N,K),Be===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,J=S.transmissive;if(x.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(J.length>0)for(let Le=0,Ve=Ae.length;Le<Ve;Le++){const Oe=Ae[Le];Uu(ue,J,N,Oe)}ct&&Qe.render(N);for(let Le=0,Ve=Ae.length;Le<Ve;Le++){const Oe=Ae[Le];Os(S,N,Oe,Oe.viewport)}}else J.length>0&&Uu(ue,J,N,K),ct&&Qe.render(N),Os(S,N,K);H!==null&&I===0&&(Fe.updateMultisampleRenderTarget(H),Fe.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(b,N,K),Ue.resetDefaultState(),R=-1,U=null,C.pop(),C.length>0?(x=C[C.length-1],Be===!0&&Ce.setGlobalState(b.clippingPlanes,x.state.camera)):x=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function ra(N,K,le,ue){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||be.intersectsSprite(N)){ue&&je.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);const Le=ie.update(N),Ve=N.material;Ve.visible&&S.push(N,Le,Ve,le,je.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||be.intersectsObject(N))){const Le=ie.update(N),Ve=N.material;if(ue&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),je.copy(N.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),je.copy(Le.boundingSphere.center)),je.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(Ve)){const Oe=Le.groups;for(let tt=0,it=Oe.length;tt<it;tt++){const Ke=Oe[tt],dt=Ve[Ke.materialIndex];dt&&dt.visible&&S.push(N,Le,dt,le,je.z,Ke)}}else Ve.visible&&S.push(N,Le,Ve,le,je.z,null)}}const Ae=N.children;for(let Le=0,Ve=Ae.length;Le<Ve;Le++)ra(Ae[Le],K,le,ue)}function Os(N,K,le,ue){const J=N.opaque,Ae=N.transmissive,Le=N.transparent;x.setupLightsView(le),Be===!0&&Ce.setGlobalState(b.clippingPlanes,le),ue&&Ie.viewport(B.copy(ue)),J.length>0&&Ps(J,K,le),Ae.length>0&&Ps(Ae,K,le),Le.length>0&&Ps(Le,K,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Uu(N,K,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new aa(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Eu:Ci,minFilter:Es,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ae=x.state.transmissionRenderTarget[ue.id],Le=ue.viewport||B;Ae.setSize(Le.z*b.transmissionResolutionScale,Le.w*b.transmissionResolutionScale);const Ve=b.getRenderTarget(),Oe=b.getActiveCubeFace(),tt=b.getActiveMipmapLevel();b.setRenderTarget(Ae),b.getClearColor(re),ee=b.getClearAlpha(),ee<1&&b.setClearColor(16777215,.5),b.clear(),ct&&Qe.render(le);const it=b.toneMapping;b.toneMapping=Nr;const Ke=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),Be===!0&&Ce.setGlobalState(b.clippingPlanes,ue),Ps(N,le,ue),Fe.updateMultisampleRenderTarget(Ae),Fe.updateRenderTargetMipmap(Ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Dt=0,Zt=K.length;Dt<Zt;Dt++){const Ht=K[Dt],pt=Ht.object,$e=Ht.geometry,jt=Ht.material,yt=Ht.group;if(jt.side===Ei&&pt.layers.test(ue.layers)){const Vn=jt.side;jt.side=On,jt.needsUpdate=!0,tl(pt,le,ue,$e,jt,yt),jt.side=Vn,jt.needsUpdate=!0,dt=!0}}dt===!0&&(Fe.updateMultisampleRenderTarget(Ae),Fe.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ve,Oe,tt),b.setClearColor(re,ee),Ke!==void 0&&(ue.viewport=Ke),b.toneMapping=it}function Ps(N,K,le){const ue=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Ae=N.length;J<Ae;J++){const Le=N[J],Ve=Le.object,Oe=Le.geometry,tt=Le.group;let it=Le.material;it.allowOverride===!0&&ue!==null&&(it=ue),Ve.layers.test(le.layers)&&tl(Ve,K,le,Oe,it,tt)}}function tl(N,K,le,ue,J,Ae){N.onBeforeRender(b,K,le,ue,J,Ae),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,K,le,ue,N,Ae),J.transparent===!0&&J.side===Ei&&J.forceSinglePass===!1?(J.side=On,J.needsUpdate=!0,b.renderBufferDirect(le,K,ue,J,N,Ae),J.side=Qa,J.needsUpdate=!0,b.renderBufferDirect(le,K,ue,J,N,Ae),J.side=Ei):b.renderBufferDirect(le,K,ue,J,N,Ae),N.onAfterRender(b,K,le,ue,J,Ae)}function sa(N,K,le){K.isScene!==!0&&(K=Ye);const ue=Ge.get(N),J=x.state.lights,Ae=x.state.shadowsArray,Le=J.state.version,Ve=he.getParameters(N,J.state,Ae,K,le),Oe=he.getProgramCacheKey(Ve);let tt=ue.programs;ue.environment=N.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(N.isMeshStandardMaterial?Ct:lt).get(N.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",ye),tt=new Map,ue.programs=tt);let it=tt.get(Oe);if(it!==void 0){if(ue.currentProgram===it&&ue.lightsStateVersion===Le)return Ma(N,Ve),it}else Ve.uniforms=he.getUniforms(N),N.onBeforeCompile(Ve,b),it=he.acquireProgram(Ve,Oe),tt.set(Oe,it),ue.uniforms=Ve.uniforms;const Ke=ue.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ke.clippingPlanes=Ce.uniform),Ma(N,Ve),ue.needsLights=tr(N),ue.lightsStateVersion=Le,ue.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.directionalShadowMap.value=J.state.directionalShadowMap,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotShadowMap.value=J.state.spotShadowMap,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMap.value=J.state.pointShadowMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),ue.currentProgram=it,ue.uniformsList=null,it}function Is(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=Mf.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function Ma(N,K){const le=Ge.get(N);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function er(N,K,le,ue,J){K.isScene!==!0&&(K=Ye),Fe.resetTextureUnits();const Ae=K.fog,Le=ue.isMeshStandardMaterial?K.environment:null,Ve=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Br,Oe=(ue.isMeshStandardMaterial?Ct:lt).get(ue.envMap||Le),tt=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,it=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ke=!!le.morphAttributes.position,dt=!!le.morphAttributes.normal,Dt=!!le.morphAttributes.color;let Zt=Nr;ue.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Zt=b.toneMapping);const Ht=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pt=Ht!==void 0?Ht.length:0,$e=Ge.get(ue),jt=x.state.lights;if(Be===!0&&(ne===!0||N!==U)){const sn=N===U&&ue.id===R;Ce.setState(ue,N,sn)}let yt=!1;ue.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==jt.state.version||$e.outputColorSpace!==Ve||J.isBatchedMesh&&$e.batching===!1||!J.isBatchedMesh&&$e.batching===!0||J.isBatchedMesh&&$e.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&$e.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&$e.instancing===!1||!J.isInstancedMesh&&$e.instancing===!0||J.isSkinnedMesh&&$e.skinning===!1||!J.isSkinnedMesh&&$e.skinning===!0||J.isInstancedMesh&&$e.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&$e.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&$e.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&$e.instancingMorph===!1&&J.morphTexture!==null||$e.envMap!==Oe||ue.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ce.numPlanes||$e.numIntersection!==Ce.numIntersection)||$e.vertexAlphas!==tt||$e.vertexTangents!==it||$e.morphTargets!==Ke||$e.morphNormals!==dt||$e.morphColors!==Dt||$e.toneMapping!==Zt||$e.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,$e.__version=ue.version);let Vn=$e.currentProgram;yt===!0&&(Vn=sa(ue,K,J));let qi=!1,Zn=!1,wn=!1;const Wt=Vn.getUniforms(),Jn=$e.uniforms;if(Ie.useProgram(Vn.program)&&(qi=!0,Zn=!0,wn=!0),ue.id!==R&&(R=ue.id,Zn=!0),qi||U!==N){Ie.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Wt.setValue(V,"projectionMatrix",N.projectionMatrix),Wt.setValue(V,"viewMatrix",N.matrixWorldInverse);const In=Wt.map.cameraPosition;In!==void 0&&In.setValue(V,Re.setFromMatrixPosition(N.matrixWorld)),et.logarithmicDepthBuffer&&Wt.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Wt.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),U!==N&&(U=N,Zn=!0,wn=!0)}if(J.isSkinnedMesh){Wt.setOptional(V,J,"bindMatrix"),Wt.setOptional(V,J,"bindMatrixInverse");const sn=J.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Wt.setValue(V,"boneTexture",sn.boneTexture,Fe))}J.isBatchedMesh&&(Wt.setOptional(V,J,"batchingTexture"),Wt.setValue(V,"batchingTexture",J._matricesTexture,Fe),Wt.setOptional(V,J,"batchingIdTexture"),Wt.setValue(V,"batchingIdTexture",J._indirectTexture,Fe),Wt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Wt.setValue(V,"batchingColorTexture",J._colorsTexture,Fe));const kn=le.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Me.update(J,le,Vn),(Zn||$e.receiveShadow!==J.receiveShadow)&&($e.receiveShadow=J.receiveShadow,Wt.setValue(V,"receiveShadow",J.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Jn.envMap.value=Oe,Jn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(Jn.envMapIntensity.value=K.environmentIntensity),Zn&&(Wt.setValue(V,"toneMappingExposure",b.toneMappingExposure),$e.needsLights&&Wr(Jn,wn),Ae&&ue.fog===!0&&ve.refreshFogUniforms(Jn,Ae),ve.refreshMaterialUniforms(Jn,ue,k,Y,x.state.transmissionRenderTarget[N.id]),Mf.upload(V,Is($e),Jn,Fe)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Mf.upload(V,Is($e),Jn,Fe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Wt.setValue(V,"center",J.center),Wt.setValue(V,"modelViewMatrix",J.modelViewMatrix),Wt.setValue(V,"normalMatrix",J.normalMatrix),Wt.setValue(V,"modelMatrix",J.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const sn=ue.uniformsGroups;for(let In=0,Bs=sn.length;In<Bs;In++){const ni=sn[In];ut.update(ni,Vn),ut.bind(ni,Vn)}}return Vn}function Wr(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function tr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,K,le){const ue=Ge.get(N);ue.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ge.get(N.texture).__webglTexture=K,Ge.get(N.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,K){const le=Ge.get(N);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const mn=V.createFramebuffer();this.setRenderTarget=function(N,K=0,le=0){H=N,P=K,I=le;let ue=!0,J=null,Ae=!1,Le=!1;if(N){const Oe=Ge.get(N);if(Oe.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(V.FRAMEBUFFER,null),ue=!1;else if(Oe.__webglFramebuffer===void 0)Fe.setupRenderTarget(N);else if(Oe.__hasExternalTextures)Fe.rebindTextures(N,Ge.get(N.texture).__webglTexture,Ge.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ke=N.depthTexture;if(Oe.__boundDepthTexture!==Ke){if(Ke!==null&&Ge.has(Ke)&&(N.width!==Ke.image.width||N.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const it=Ge.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[K])?J=it[K][le]:J=it[K],Ae=!0):N.samples>0&&Fe.useMultisampledRTT(N)===!1?J=Ge.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?J=it[le]:J=it,B.copy(N.viewport),X.copy(N.scissor),j=N.scissorTest}else B.copy(Z).multiplyScalar(k).floor(),X.copy(pe).multiplyScalar(k).floor(),j=Se;if(le!==0&&(J=mn),Ie.bindFramebuffer(V.FRAMEBUFFER,J)&&ue&&Ie.drawBuffers(N,J),Ie.viewport(B),Ie.scissor(X),Ie.setScissorTest(j),Ae){const Oe=Ge.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,le)}else if(Le){const Oe=K;for(let tt=0;tt<N.textures.length;tt++){const it=Ge.get(N.textures[tt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+tt,it.__webglTexture,le,Oe)}}else if(N!==null&&le!==0){const Oe=Ge.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,le)}R=-1},this.readRenderTargetPixels=function(N,K,le,ue,J,Ae,Le,Ve=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Ie.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const tt=N.textures[Ve],it=tt.format,Ke=tt.type;if(!et.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-ue&&le>=0&&le<=N.height-J&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(K,le,ue,J,We.convert(it),We.convert(Ke),Ae))}finally{const tt=H!==null?Ge.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,K,le,ue,J,Ae,Le,Ve=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ge.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(K>=0&&K<=N.width-ue&&le>=0&&le<=N.height-J){Ie.bindFramebuffer(V.FRAMEBUFFER,Oe);const tt=N.textures[Ve],it=tt.format,Ke=tt.type;if(!et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(K,le,ue,J,We.convert(it),We.convert(Ke),0);const Dt=H!==null?Ge.get(H).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,Dt);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await s1(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,dt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(dt),V.deleteSync(Zt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,K=null,le=0){const ue=Math.pow(2,-le),J=Math.floor(N.image.width*ue),Ae=Math.floor(N.image.height*ue),Le=K!==null?K.x:0,Ve=K!==null?K.y:0;Fe.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Le,Ve,J,Ae),Ie.unbindTexture()};const Lu=V.createFramebuffer(),Nu=V.createFramebuffer();this.copyTextureToTexture=function(N,K,le=null,ue=null,J=0,Ae=null){Ae===null&&(J!==0?(hu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=J,J=0):Ae=0);let Le,Ve,Oe,tt,it,Ke,dt,Dt,Zt;const Ht=N.isCompressedTexture?N.mipmaps[Ae]:N.image;if(le!==null)Le=le.max.x-le.min.x,Ve=le.max.y-le.min.y,Oe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,it=le.min.y,Ke=le.isBox3?le.min.z:0;else{const kn=Math.pow(2,-J);Le=Math.floor(Ht.width*kn),Ve=Math.floor(Ht.height*kn),N.isDataArrayTexture?Oe=Ht.depth:N.isData3DTexture?Oe=Math.floor(Ht.depth*kn):Oe=1,tt=0,it=0,Ke=0}ue!==null?(dt=ue.x,Dt=ue.y,Zt=ue.z):(dt=0,Dt=0,Zt=0);const pt=We.convert(K.format),$e=We.convert(K.type);let jt;K.isData3DTexture?(Fe.setTexture3D(K,0),jt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Fe.setTexture2DArray(K,0),jt=V.TEXTURE_2D_ARRAY):(Fe.setTexture2D(K,0),jt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const yt=V.getParameter(V.UNPACK_ROW_LENGTH),Vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Zn=V.getParameter(V.UNPACK_SKIP_ROWS),wn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke);const Wt=N.isDataArrayTexture||N.isData3DTexture,Jn=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const kn=Ge.get(N),sn=Ge.get(K),In=Ge.get(kn.__renderTarget),Bs=Ge.get(sn.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,In.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let ni=0;ni<Oe;ni++)Wt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(N).__webglTexture,J,Ke+ni),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ge.get(K).__webglTexture,Ae,Zt+ni)),V.blitFramebuffer(tt,it,Le,Ve,dt,Dt,Le,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||Ge.has(N)){const kn=Ge.get(N),sn=Ge.get(K);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Lu),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,Nu);for(let In=0;In<Oe;In++)Wt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kn.__webglTexture,J,Ke+In):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kn.__webglTexture,J),Jn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Ae,Zt+In):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Ae),J!==0?V.blitFramebuffer(tt,it,Le,Ve,dt,Dt,Le,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Jn?V.copyTexSubImage3D(jt,Ae,dt,Dt,Zt+In,tt,it,Le,Ve):V.copyTexSubImage2D(jt,Ae,dt,Dt,tt,it,Le,Ve);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Jn?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(jt,Ae,dt,Dt,Zt,Le,Ve,Oe,pt,$e,Ht.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(jt,Ae,dt,Dt,Zt,Le,Ve,Oe,pt,Ht.data):V.texSubImage3D(jt,Ae,dt,Dt,Zt,Le,Ve,Oe,pt,$e,Ht):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,dt,Dt,Le,Ve,pt,$e,Ht.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,dt,Dt,Ht.width,Ht.height,pt,Ht.data):V.texSubImage2D(V.TEXTURE_2D,Ae,dt,Dt,Le,Ve,pt,$e,Ht);V.pixelStorei(V.UNPACK_ROW_LENGTH,yt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,wn),Ae===0&&K.generateMipmaps&&V.generateMipmap(jt),Ie.unbindTexture()},this.initRenderTarget=function(N){Ge.get(N).__webglFramebuffer===void 0&&Fe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Fe.setTextureCube(N,0):N.isData3DTexture?Fe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Fe.setTexture2DArray(N,0):Fe.setTexture2D(N,0),Ie.unbindTexture()},this.resetState=function(){P=0,I=0,H=null,Ie.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Up=1/1e3,MD=1e3,ED=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Up}get fixedDelta(){return this._fixedDelta*Up}set fixedDelta(r){this._fixedDelta=r*MD}get elapsed(){return this._elapsed*Up}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},AD=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Vr;return t.setAttribute("position",new Xi(r,3)),t.setAttribute("uv",new Xi(e,2)),t})(),kr=class Fm{static get fullscreenGeometry(){return AD}constructor(e="Pass",t=new Im,i=new pg){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new na(Fm.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Im),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Au){}render(e,t,i,s,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof aa||t instanceof $o||t instanceof Hn||t instanceof Fm)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},TD=class extends kr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,i,s){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},bD=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,RD="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",CD=class extends Wi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Tn(null),opacity:new Tn(1)},blending:va,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bD,vertexShader:RD})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},wD=class extends kr{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new CD,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new aa(1,1,{minFilter:Qn,magFilter:Qn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,i,s){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ci?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===dn&&(this.renderTarget.texture.colorSpace=dn))}},gy=new Bt,NS=class extends kr{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,i,s){const l=this.overrideClearColor,c=this.overrideClearAlpha,f=r.getClearAlpha(),p=l!==null,h=c>=0;p?(r.getClearColor(gy),r.setClearColor(l,h?c:f)):h&&r.setClearAlpha(c),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),p?r.setClearColor(gy,f):h&&r.setClearAlpha(f)}},DD=class extends kr{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new NS(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,i,s){const l=r.getContext(),c=r.state.buffers,f=this.scene,p=this.camera,h=this.clearPass,m=this.inverted?0:1,_=1-m;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.stencil.setFunc(l.ALWAYS,m,4294967295),c.stencil.setClear(_),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(r,null):(h.render(r,e),h.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,p)):(r.setRenderTarget(e),r.render(f,p),r.setRenderTarget(t),r.render(f,p)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(l.EQUAL,1,4294967295),c.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.stencil.setLocked(!0)}},_y=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new wD,this.depthTexture=null,this.passes=[],this.timer=new ED,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new vt),t=r.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ci&&r.outputColorSpace===dn&&(this.inputBuffer.texture.colorSpace=dn,this.outputBuffer.texture.colorSpace=dn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(r,t,i)}}replaceRenderer(r,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(r),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new mg;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=ko,r.type=Vo):r.type=Ir,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,i){const s=this.renderer,l=s===null?new vt:s.getDrawingBufferSize(new vt),c={minFilter:Qn,magFilter:Qn,stencilBuffer:e,depthBuffer:r,type:t},f=new aa(l.width,l.height,c);return i>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=i),t===Ci&&s!==null&&s.outputColorSpace===dn&&(f.texture.colorSpace=dn),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new vt),l=i.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(r.setRenderer(i),r.setSize(s.width,s.height),r.initialize(i,l,c),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(r of t)r.setDepthTexture(f)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const l=(f,p)=>f||p.needsDepthTexture;e.reduce(l,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,s=this.outputBuffer,l=!1,c,f,p;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const h of this.passes)h.enabled&&(h.render(e,i,s,r,l),h.needsSwap&&(l&&(t.renderToScreen=h.renderToScreen,c=e.getContext(),f=e.state.buffers.stencil,f.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,s,r,l),f.setFunc(c.EQUAL,1,4294967295)),p=i,i=s,s=p),h instanceof DD?l=!0:h instanceof TD&&(l=!1))}setSize(r,e,t){const i=this.renderer,s=i.getSize(new vt);(r===void 0||e===void 0)&&(r=s.width,e=s.height),(s.width!==r||s.height!==e)&&i.setSize(r,e,t);const l=i.getDrawingBufferSize(new vt);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const c of this.passes)c.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),kr.fullscreenGeometry.dispose()}},bs={NONE:0,DEPTH:1,CONVOLUTION:2},Nt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},UD=class{constructor(){this.shaderParts=new Map([[Nt.FRAGMENT_HEAD,null],[Nt.FRAGMENT_MAIN_UV,null],[Nt.FRAGMENT_MAIN_IMAGE,null],[Nt.VERTEX_HEAD,null],[Nt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=bs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Br}},Lp=!1,vy=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ei:t=this.materialsFlatShadedDoubleSide;break;case On:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ei:t=this.materialsDoubleSide;break;case On:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Wi))return r.clone();const e=r.uniforms,t=new Map;for(const s in e){const l=e[s].value;l.isRenderTargetTexture&&(e[s].value=null,t.set(s,l))}const i=r.clone();for(const s of t)e[s[0]].value=s[1],i.uniforms[s[0]].value=s[1];return i}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Qa;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=On,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=Ei,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=On,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=Ei,i})}}render(r,e,t){const i=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Lp){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const l of s)l[0].material=l[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=s}r.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Lp}static set workaroundEnabled(r){Lp=r}},Et={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},LD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",ND="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",OD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",PD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",ID="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",BD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",FD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",zD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",HD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",GD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",VD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",kD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",XD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",WD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",YD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",qD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",KD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",QD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",jD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",ZD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",JD="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",$D="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",eU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",tU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",nU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",iU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",aU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",rU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",sU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",oU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",lU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",uU="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",cU=new Map([[Et.ADD,LD],[Et.ALPHA,ND],[Et.AVERAGE,OD],[Et.COLOR,PD],[Et.COLOR_BURN,ID],[Et.COLOR_DODGE,BD],[Et.DARKEN,FD],[Et.DIFFERENCE,zD],[Et.DIVIDE,HD],[Et.DST,null],[Et.EXCLUSION,GD],[Et.HARD_LIGHT,VD],[Et.HARD_MIX,kD],[Et.HUE,XD],[Et.INVERT,WD],[Et.INVERT_RGB,YD],[Et.LIGHTEN,qD],[Et.LINEAR_BURN,KD],[Et.LINEAR_DODGE,QD],[Et.LINEAR_LIGHT,jD],[Et.LUMINOSITY,ZD],[Et.MULTIPLY,JD],[Et.NEGATION,$D],[Et.NORMAL,eU],[Et.OVERLAY,tU],[Et.PIN_LIGHT,nU],[Et.REFLECT,iU],[Et.SATURATION,aU],[Et.SCREEN,rU],[Et.SOFT_LIGHT,sU],[Et.SRC,oU],[Et.SUBTRACT,lU],[Et.VIVID_LIGHT,uU]]),fU=class extends Gr{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new Tn(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return cU.get(this.blendFunction)}},OS=class extends Gr{constructor(r,e,{attributes:t=bs.NONE,blendFunction:i=Et.NORMAL,defines:s=new Map,uniforms:l=new Map,extensions:c=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=s,this.uniforms=l,this.extensions=c,this.blendMode=new fU(i),this.blendMode.addEventListener("change",p=>this.setChanged()),this._inputColorSpace=Br,this._outputColorSpace=pa}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=Au){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof aa||e instanceof $o||e instanceof Hn||e instanceof kr)&&this[r].dispose()}}},xy=class extends kr{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new NS,this.overrideMaterialManager=t===null?null:new vy(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new vy(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,i,s){const l=this.scene,c=this.camera,f=this.selection,p=c.layers.mask,h=l.background,m=r.shadowMap.autoUpdate,_=this.renderToScreen?null:e;f!==null&&c.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,c):r.render(l,c),c.layers.mask=p,l.background=h,r.shadowMap.autoUpdate=m}},hU=`#include <common>
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
}`,dU="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",pU=class extends Wi{constructor(r,e,t,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:zf.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Tn(null),depthBuffer:new Tn(null),resolution:new Tn(new vt),texelSize:new Tn(new vt),cameraNear:new Tn(.3),cameraFar:new Tn(1e3),aspect:new Tn(1),time:new Tn(0)},blending:va,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=Au){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=hU.replace(Nt.FRAGMENT_HEAD,r.get(Nt.FRAGMENT_HEAD)||"").replace(Nt.FRAGMENT_MAIN_UV,r.get(Nt.FRAGMENT_MAIN_UV)||"").replace(Nt.FRAGMENT_MAIN_IMAGE,r.get(Nt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=dU.replace(Nt.VERTEX_HEAD,r.get(Nt.VERTEX_HEAD)||"").replace(Nt.VERTEX_MAIN_SUPPORT,r.get(Nt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof Hi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Nt}};function yy(r,e,t){for(const i of e){const s="$1"+r+i.charAt(0).toUpperCase()+i.slice(1),l=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const c of t.entries())c[1]!==null&&t.set(c[0],c[1].replace(l,s))}}function mU(r,e,t){let i=e.getFragmentShader(),s=e.getVertexShader();const l=i!==void 0&&/mainImage/.test(i),c=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(t.attributes&bs.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,p=t.shaderParts;let h=p.get(Nt.FRAGMENT_HEAD)||"",m=p.get(Nt.FRAGMENT_MAIN_UV)||"",_=p.get(Nt.FRAGMENT_MAIN_IMAGE)||"",v=p.get(Nt.VERTEX_HEAD)||"",y=p.get(Nt.VERTEX_MAIN_SUPPORT)||"";const E=new Set,M=new Set;if(c&&(m+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const T=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);y+=`	${r}MainSupport(`,y+=T?`vUv);
`:`);
`;for(const C of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const b of C[1].split(/\s*,\s*/))t.varyings.add(b),E.add(b),M.add(b);for(const C of s.matchAll(f))M.add(C[1])}for(const T of i.matchAll(f))M.add(T[1]);for(const T of e.defines.keys())M.add(T.replace(/\([\w\s,]*\)/g,""));for(const T of e.uniforms.keys())M.add(T);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((T,C)=>t.uniforms.set(r+C.charAt(0).toUpperCase()+C.slice(1),T)),e.defines.forEach((T,C)=>t.defines.set(r+C.charAt(0).toUpperCase()+C.slice(1),T));const S=new Map([["fragment",i],["vertex",s]]);yy(r,M,t.defines),yy(r,M,S),i=S.get("fragment"),s=S.get("vertex");const x=e.blendMode;if(t.blendModes.set(x.blendFunction,x),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(_+=e.inputColorSpace===dn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==pa?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const T=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${r}MainImage(color0, UV, `,(t.attributes&bs.DEPTH)!==0&&T.test(i)&&(_+="depth, ",t.readDepth=!0),_+=`color1);
	`;const C=r+"BlendOpacity";t.uniforms.set(C,x.opacity),_+=`color0 = blend${x.blendFunction}(color0, color1, ${C});

	`,h+=`uniform float ${C};

`}if(h+=i+`
`,s!==null&&(v+=s+`
`),p.set(Nt.FRAGMENT_HEAD,h),p.set(Nt.FRAGMENT_MAIN_UV,m),p.set(Nt.FRAGMENT_MAIN_IMAGE,_),p.set(Nt.VERTEX_HEAD,v),p.set(Nt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const T of e.extensions)t.extensions.add(T)}}var Sy=class extends kr{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new pU(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new UD;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===Et.DST)r.attributes|=c.getAttributes()&bs.DEPTH;else{if((r.attributes&c.getAttributes()&bs.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);mU("e"+e++,c,r)}let t=r.shaderParts.get(Nt.FRAGMENT_HEAD),i=r.shaderParts.get(Nt.FRAGMENT_MAIN_IMAGE),s=r.shaderParts.get(Nt.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const c of r.blendModes.values())t+=c.getShaderCode().replace(l,`blend${c.blendFunction}`)+`
`;(r.attributes&bs.DEPTH)!==0?(r.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===dn&&(i+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Nt.FRAGMENT_HEAD,t),r.shaderParts.set(Nt.FRAGMENT_MAIN_IMAGE,i),r.shaderParts.set(Nt.FRAGMENT_MAIN_UV,s);for(const[c,f]of r.shaderParts)f!==null&&r.shaderParts.set(c,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=Au){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,i,s){for(const l of this.effects)l.update(r,e,i);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=i*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const i of this.effects)i.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==Ci&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};const gU=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const i=new Hn(e);i.minFilter=Qn,i.magFilter=Qn,i.generateMipmaps=!1;const s=[];let l=null;const c=64;let f=.1*64;const p=1/c,h=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},m=y=>{const E={x:y.x*64,y:(1-y.y)*64};let M=1;const S=b=>Math.sin(b*Math.PI/2),x=b=>-b*(b-2);y.age<c*.3?M=S(y.age/(c*.3)):M=x(1-(y.age-c*.3)/(c*.7))||0,M*=y.force;const T=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${M*255}`,C=320;t.shadowOffsetX=C,t.shadowOffsetY=C,t.shadowBlur=f,t.shadowColor=`rgba(${T},${.22*M})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(E.x-C,E.y-C,f,0,Math.PI*2),t.fill()};return{canvas:e,texture:i,addTouch:y=>{let E=0,M=0,S=0;if(l){const x=y.x-l.x,T=y.y-l.y;if(x===0&&T===0)return;const C=x*x+T*T,b=Math.sqrt(C);M=x/(b||1),S=T/(b||1),E=Math.min(C*1e4,1)}l={x:y.x,y:y.y},s.push({x:y.x,y:y.y,age:0,force:E,vx:M,vy:S})},update:()=>{h();for(let y=s.length-1;y>=0;y--){const E=s[y],M=E.force*p*(1-E.age/c);E.x+=E.vx*M,E.y+=E.vy*M,E.age++,E.age>c&&s.splice(y,1)}for(let y=0;y<s.length;y++)m(s[y]);i.needsUpdate=!0},set radiusScale(y){f=.1*64*y},get radiusScale(){return f/(.1*64)},size:64}},_U=(r,e)=>{const t=`
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
    `;return new OS("LiquidEffect",t,{uniforms:new Map([["uTexture",new Tn(r)],["uStrength",new Tn(e?.strength??.025)],["uTime",new Tn(0)],["uFreq",new Tn(e?.freq??4.5)]])})},My={square:0,circle:1,triangle:2,diamond:3},vU=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,xU=`
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
`,Np=10,yU=({variant:r="square",pixelSize:e=3,color:t="#201533",className:i,style:s,antialias:l=!0,patternScale:c=2,patternDensity:f=1,liquid:p=!1,liquidStrength:h=.1,liquidRadius:m=1,pixelSizeJitter:_=0,enableRipples:v=!0,rippleIntensityScale:y=1,rippleThickness:E=.1,rippleSpeed:M=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:x=!0,speed:T=.5,transparent:C=!0,edgeFade:b=.5,noiseAmount:L=0,interactive:P=!1})=>{const I=oe.useRef(null),H=oe.useRef({visible:!0}),R=oe.useRef(T),U=oe.useRef(null),B=oe.useRef(null);return oe.useEffect(()=>{const X=I.current;if(!X)return;R.current=T;const j=["antialias","liquid","noiseAmount","interactive"],re={antialias:l,liquid:p,noiseAmount:L,interactive:P};let ee=!1,z=null,Y=null;if(!U.current)ee=!0;else if(B.current){for(const k of j)if(B.current[k]!==re[k]){ee=!0;break}}if(ee){if(U.current){const Fe=U.current;Fe.resizeObserver?.disconnect(),cancelAnimationFrame(Fe.raf),Fe.quad?.geometry.dispose(),Fe.material.dispose(),Fe.composer?.dispose(),Fe.renderer.dispose(),Fe.renderer.domElement.parentElement===X&&X.removeChild(Fe.renderer.domElement),U.current=null}const k=document.createElement("canvas"),_e=k.getContext("webgl2",{antialias:l,alpha:!0});if(!_e)return;const O=new SD({canvas:k,context:_e,antialias:l,alpha:!0});O.domElement.style.width="100%",O.domElement.style.height="100%",O.domElement.style.pointerEvents=P?"auto":"none",O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),X.appendChild(O.domElement);const Z={uResolution:{value:new vt(0,0)},uTime:{value:0},uColor:{value:new Bt(t)},uClickPos:{value:Array.from({length:Np},()=>new vt(-1,-1))},uClickTimes:{value:new Float32Array(Np)},uShapeType:{value:My[r]??0},uPixelSize:{value:e*O.getPixelRatio()},uScale:{value:c},uDensity:{value:f},uPixelJitter:{value:_},uEnableRipples:{value:v?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:E},uRippleIntensity:{value:y},uEdgeFade:{value:b}},pe=new Im,Se=new RS(-1,1,1,-1,0,1),be=new Wi({vertexShader:vU,fragmentShader:xU,uniforms:Z,transparent:!0,glslVersion:Om,depthTest:!1,depthWrite:!1}),Be=new wu(2,2),ne=new na(Be,be);pe.add(ne);const ge=new F1,Re=()=>{const Fe=X.clientWidth||1,lt=X.clientHeight||1;O.setSize(Fe,lt,!1),Z.uResolution.value.set(O.domElement.width,O.domElement.height),U.current?.composer&&U.current.composer.setSize(O.domElement.width,O.domElement.height),Z.uPixelSize.value=e*O.getPixelRatio()};Re();const je=new ResizeObserver(Re);je.observe(X);const ct=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Fe=new Uint32Array(1);return window.crypto.getRandomValues(Fe),Fe[0]/4294967295}return Math.random()})()*1e3;let xt,V,bt;if(p){V=gU(),V.radiusScale=m,xt=new _y(O);const Fe=new xy(pe,Se);bt=_U(V.texture,{strength:h,freq:S});const lt=new Sy(Se,bt);lt.renderToScreen=!0,xt.addPass(Fe),xt.addPass(lt)}if(L>0){xt||(xt=new _y(O),xt.addPass(new xy(pe,Se)));const Fe=new OS("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new Tn(0)],["uAmount",new Tn(L)]])}),lt=new Sy(Se,Fe);lt.renderToScreen=!0,xt&&xt.passes.length>0&&xt.passes.forEach(Ct=>Ct.renderToScreen=!1),xt.addPass(lt)}xt&&xt.setSize(O.domElement.width,O.domElement.height);const st=Fe=>{const lt=O.domElement.getBoundingClientRect(),Ct=O.domElement.width/lt.width,F=O.domElement.height/lt.height,w=(Fe.clientX-lt.left)*Ct,ie=(lt.height-(Fe.clientY-lt.top))*F;return{fx:w,fy:ie,w:O.domElement.width,h:O.domElement.height}};let et=null,Ie=null;et=Fe=>{const{fx:lt,fy:Ct}=st(Fe),F=U.current?.clickIx??0;Z.uClickPos.value[F].set(lt,Ct),Z.uClickTimes.value[F]=Z.uTime.value,U.current&&(U.current.clickIx=(F+1)%Np)},Ie=Fe=>{if(!V)return;const{fx:lt,fy:Ct,w:F,h:w}=st(Fe);V.addTouch({x:lt/F,y:Ct/w})},P&&(O.domElement.addEventListener("pointerdown",et,{passive:!0}),O.domElement.addEventListener("pointermove",Ie,{passive:!0}),z=et,Y=Ie);let Ot=0;const Ge=()=>{if(x&&!H.current.visible){Ot=requestAnimationFrame(Ge);return}Z.uTime.value=ct+ge.getElapsedTime()*R.current,bt&&(bt.uniforms.get("uTime").value=Z.uTime.value),xt?(V&&V.update(),xt.passes.forEach(Fe=>{const lt=Fe.effects;lt&&lt.forEach(Ct=>{const F=Ct.uniforms?.get("uTime");F&&(F.value=Z.uTime.value)})}),xt.render()):O.render(pe,Se),Ot=requestAnimationFrame(Ge)};Ot=requestAnimationFrame(Ge),U.current={renderer:O,scene:pe,camera:Se,material:be,clock:ge,clickIx:0,uniforms:Z,resizeObserver:je,raf:Ot,quad:ne,timeOffset:ct,composer:xt,touch:V,liquidEffect:bt}}else{const k=U.current;if(k.uniforms.uShapeType.value=My[r]??0,k.uniforms.uPixelSize.value=e*k.renderer.getPixelRatio(),k.uniforms.uColor.value.set(t),k.uniforms.uScale.value=c,k.uniforms.uDensity.value=f,k.uniforms.uPixelJitter.value=_,k.uniforms.uEnableRipples.value=v?1:0,k.uniforms.uRippleIntensity.value=y,k.uniforms.uRippleThickness.value=E,k.uniforms.uRippleSpeed.value=M,k.uniforms.uEdgeFade.value=b,C?k.renderer.setClearAlpha(0):k.renderer.setClearColor(0,1),k.liquidEffect){const _e=k.liquidEffect;_e&&(_e.value=h);const O=k.liquidEffect.uniforms.get("uFreq");O&&(O.value=S)}k.touch&&(k.touch.radiusScale=m)}return B.current=re,()=>{if(U.current&&ee||!U.current)return;const k=U.current;k.resizeObserver?.disconnect(),cancelAnimationFrame(k.raf),k.quad?.geometry.dispose(),k.material.dispose(),k.composer?.dispose();try{P&&k.renderer&&k.renderer.domElement&&(z&&k.renderer.domElement.removeEventListener("pointerdown",z),Y&&k.renderer.domElement.removeEventListener("pointermove",Y))}catch{}k.renderer.dispose(),k.renderer.domElement.parentElement===X&&X.removeChild(k.renderer.domElement),U.current=null}},[l,p,L,e,c,f,v,y,E,M,_,b,C,h,m,S,x,r,t,T,P]),De.jsx("div",{ref:I,className:`pixel-blast-container ${i??""}`,style:s,"aria-label":"PixelBlast interactive background"})};function SU(r){const e=r.replace("#",""),t=parseInt(e.length===3?e.split("").map(c=>c+c).join(""):e,16),i=t>>16&255,s=t>>8&255,l=t&255;return[i,s,l]}function MU({color:r="#000000",strength:e=.6,style:t={}}){const i=Math.max(0,Math.min(1,e)),[s,l,c]=SU(r||"#000000"),f=Math.round(5+i*45),p=`linear-gradient(to bottom, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,h=`linear-gradient(to top, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,m=`linear-gradient(to right, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,_=`linear-gradient(to left, rgba(${s}, ${l}, ${c}, 1) 0%, rgba(${s}, ${l}, ${c}, 0) ${f}%)`,v={position:"fixed",inset:0,zIndex:1,pointerEvents:"none",backgroundImage:`${p}, ${h}, ${m}, ${_}`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",mixBlendMode:"normal",...t};return De.jsx("div",{"aria-hidden":!0,style:v})}function EU({interactive:r=!1}){return De.jsxs("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:0,overflow:"hidden",pointerEvents:r?"auto":"none"},children:[De.jsx(yU,{variant:"square",pixelSize:4,color:"#bdbdbd",patternScale:3,patternDensity:1.5,pixelSizeJitter:.5,enableRipples:!0,rippleSpeed:.5,rippleThickness:.08,rippleIntensityScale:1.5,liquid:!0,liquidStrength:0,liquidRadius:0,liquidWobbleSpeed:.5,speed:.5,edgeFade:0,transparent:!0,interactive:r}),De.jsx(MU,{color:"#e7e7e7",strength:.05})]})}const AU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACmCAYAAADpsLB6AAAAAXNSR0IArs4c6QAAAytJREFUeJzt2bFt8kAcQPF/PmUN5jiGYAG6LECbMkVKWhago6KjCRPAAqyTVP50IrF9h41BT+8nWZYjG114nI84EZIkSZIkSWJ7KT3x4+Pj+75DUZvPz8+iTq81L3o+n28ekG6TUor5fP59Op16g1bFjIiYzWY3D6zParWKzWbz6/ge+8b18bPZ7/cREUVBq26z5/O5OOYUYRpDA2232+Jz397eJr1mv9/H8XiMiIiHxazx6Bm53W5jsVj0jvNwOMTlcon1ej3ZNTUx//W+cqXrGdEcd+3zN7Y0yF/HJfu2cQ612+1+bV3n1vy81Ogx8xmWH5fs8xnaFbTt/Jp923iHWC6X/7e+867D7Xa73uv6jB6z8cgZWjJj28ZZK5+FfTMy1wRttqEh454xa2Zo6YwsnaFdM7ZtfEM0IcYIMoRr5ojyGfoIrpnZ8V9fYkpvnflaWbJuNrfWZhvjA+CamR3nb+711qUmerR82RkjqGvmQLXho2NtHbrmVj/O6zPFA4Dr140R1szD4VD9u051TamneALUmOKDkH8AIpvJ7+/vxeNcr9cREZNc8xSP86aaoTHCs9lndreYI4xNNyiN6f8zn1xKqfjc6i9AX19fxbNZw6WUiu+Id/vTRNMzJogxQYwJYkwQY4IYE8SYIMYEMSaIMUGMCWJMEGOCGBPEmCDGBDEmiDFBjAliTBBjghgTxJggxgQxJogxQYwJYkwQY4IYE8SYIMYEMSaIMUGMCWJMEGOCGBPEmCDGBDEmiDFBjAliTBBjghgTxJggxgQxJogxQYwJYkwQY4IYE8SYIMYEMSaIMUGMCWJMEGOCGBPEmCDGBDEmiDFBjAliTBBjghgTxJggxgQxJogxQYwJYkwQY4IYE8SYIMYEMSaIMUGMCWJMEGOCGBPEmCDGBDEmiDFBjAliTBBjghgTxJggxgQxJogxQYwJYkwQY4IYE8SYIMYEMSaIMUGMCWJMEGOCGBPEmCDGBDEmiDFBjAliTBBjghgTxJggxgQxJogxQYwJYkwQY4K81pycUoqU0vf9hqMhXmpOns/nhnyg0+nU2avqNtv3YpIkSZIkieMHtOog/nsFyKAAAAAASUVORK5CYII=",cf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAANhJREFUWIXtmNEJxCAMhn+Pm8kVXKND+OYKDuEa4gYu1T4p4nnXct6ZBvKBlMQi8TdGFBAEgTGqNbz3O10ofLDWVt2efWfOeXlAnNBawxizxxgVRgICgHNueWBcSCkBQBXxQR0Qd8gEDCHU1vq+GYeS4Rb+NyEEbNv21uYEiYA9vZhn/tJXfOVLsQi3ELBllJmjjEUjImX2yiEyyS0EpD4IZiDZwm39woXa1f8/M9avIauBo4n2vtb+JIzUQMa8ZKDWul5XhHNU7zDGyIvMRYZ34fLKIAhLOAAH5FcQ+JbvfwAAAABJRU5ErkJggg==",ff="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAAQJJREFUWIXtmN0NhCAMgOvlZmIF1mAI3lzBIVjDsAFLeU8QrOUQ5Sck/RIfRNKULy1BABiGmZglftm27RiXyjxorYO3L/7onOue0EwIIUBKeez7vgAlEABgXdfuic2CtRYAIEj8jE5odsgKfIMx5vSulKoSD8cxxpzGUvNa06QClVLhwUJL8JKoOFhUb3Ge6hWYwsugKiWWkxLxptruxH9KE4GphOO2i4VSc3wMSlZJZafi16KJwDtVlFsEJfcpb7aRHN1aeCQt98fhAnE75hYbz8XtTcUqjV/K5VfOOccH6T9Ya8Nhmg/SFbi0sBAiGGbyLHhASsk3MjchW9jfMjBMF37v5IsR0v/Q6gAAAABJRU5ErkJggg==",hf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAAPpJREFUWIXtmNENhCAMhn8vNxMrsIZD8OYKDsEahg1YSp8kXK9BgwVD0u9FEW3LT0sQQFGUgZnyxrqu+3uhjINzLun2pZ0xxu4BjYQxBtbafdu2CZyAALAsS/fARiGEAABJxM/bAY0Om4E1eO/T/TzPUmZv++zpN0dEQO/9T/C03ZK3/J6IZWAOHRTtK2WOVCZzdlpMtKiANGguYK6fXvP3awbYsyJEBcxnupYn37awc0WTEn6CVKZwdkrZXouIgHRdOwPj1rsaOyXu+M3tSIoH7lcuxqgb6QIhhLSZ1o20AH8lbIxJCivXTPSBtVZPZG7ClvB5yqAoXTgATzyNswCnp9kAAAAASUVORK5CYII=",df="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAAQtJREFUWIXtmNsNhCAQRYfNdmEftEAbFOGfLVgEbRA6oCn3C4I4uKiAyzonMeE5ztzwBiAIomNYmJnnebnPlX4Yx9Hr9o4rrbXNHeoJzjkIIRatNQNMQACAaZqaO9YLxhgAAC/i626HeqeIgEqp1XekX4m2R+yUBp3CZ5BS+rRSapXP6VPq360pJmCKeHS4YF15LPxe270+OXa+1Z2hmIChY2HgKeellOjUw0aya4sFe8TOnj9nqTKFnwTtwhepugampldYhq1hObbifI6dlD9X2FzlrLWPOUjnnhZCjDH+MK21ZtV34V8D2+yusBGQc+4V/keGYfDpEnGyuEAIQS8ymaB3YffKQBBN+ABF0o/ThPIEqwAAAABJRU5ErkJggg==",pf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAUCAYAAAAa2LrXAAAAAXNSR0IArs4c6QAAAPRJREFUWIXtmM0NgzAMhR9VZ8oKWcNDcGMFhvAaKBtkKTgRgUkpFHAayZ+UQwyKnMcz+QEMw6iYZtnp+34sl0o9tG2bdHvLhzFG9YRqwjkH7/04DEODnIAA0HWdemK1EEIAgCTiq3RCtaMmIDPv9q+OVwpVB86TvmPyRHRDRtdRFZCIwMyrye85k5lXTcYluXefJruIPMlR50ih5Rg54eWH0XCpuoBHkSKdFUOrxP96FSai1M6WpVYZF3fgJ3FkbHaU/BdiIfQVx/7K5igXY7SN9A4hhLSZto30DWxK2DmXFDa+08iA995uZA6SLeH5lsEwVJgAvVZ0i+yBi4IAAAAASUVORK5CYII=",Fr=({src:r,className:e="",containerStyle:t={},imageStyle:i={},scale:s,onScaleChange:l})=>{const c=oe.useRef(null),[f,p]=oe.useState(1),[h,m]=oe.useState({width:0,height:0}),_=s!==void 0?s:f;oe.useEffect(()=>{const E=new Image;E.onload=()=>{m({width:E.width,height:E.height});const M=()=>{if(c.current&&s===void 0){const{width:x}=c.current.getBoundingClientRect(),T=x/E.width,C=Math.max(.1,T);p(C),l&&l(C)}};M();const S=new ResizeObserver(M);return c.current&&S.observe(c.current),()=>S.disconnect()},E.src=r},[r,s,l]);const v={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",pointerEvents:"none",overflow:"hidden",...t},y={width:`${h.width*_}px`,height:`${h.height*_}px`,imageRendering:"pixelated",pointerEvents:"none",objectFit:"contain",maxWidth:"100%",maxHeight:"100%",...i};return De.jsx("div",{ref:c,className:`pixel-art-container ${e}`,style:v,children:De.jsx("img",{src:r,alt:"pixel art",style:y,draggable:!1})})},PS=({id:r,activeImage:e,normalImage:t,hoverImage:i,clickImage:s,onClick:l,className:c="",isActive:f=!1,hoverScale:p=1.05,clickScale:h=.95,activeScale:m=1.03})=>{const[_,v]=oe.useState("normal"),y=oe.useRef(null),E=()=>f&&e?e:_==="click"?s||i||t:_==="hover"&&i||t,M=()=>f?_==="click"?{transform:`scale(${h})`}:_==="hover"?{transform:`scale(${p})`}:{transform:`scale(${m})`}:_==="click"?{transform:`scale(${h})`}:_==="hover"?{transform:`scale(${p})`}:{transform:"scale(1)"},S=L=>{l&&l(r,L)},x=()=>{v("hover")},T=()=>{v("normal")},C=()=>{v("click")},b=()=>{v("hover")};return De.jsx("button",{ref:y,className:`image-button ${c}`,style:{width:"100%",height:"100%",background:"none",border:"none",cursor:"pointer",padding:0,transformOrigin:"center",...M()},onMouseEnter:x,onMouseLeave:T,onMouseDown:C,onMouseUp:b,onClick:S,"data-button-id":r,children:De.jsx(Fr,{src:E()})})};function TU({setActiveScreen:r,activeScreen:e}){const t=[{id:"chat",label:"chat",image:cf,hover:cf,click:cf,activeImage:cf},{id:"profile",label:"profile",image:ff,hover:ff,click:ff,activeImage:ff},{id:"gamedev",label:"gamedev",image:hf,hover:hf,click:hf,activeImage:hf},{id:"painting",label:"painting",image:df,hover:df,click:df,activeImage:df},{id:"music",label:"music",image:pf,hover:pf,click:pf,activeImage:pf}];return De.jsxs("div",{className:"sidebar-container",children:[De.jsx(Fr,{className:"sidebar-window",src:AU}),De.jsx("div",{className:"sidebar-list",children:t.map(i=>De.jsx(PS,{normalImage:i.image,hoverImage:i.hover,clickImage:i.click,activeImage:i.activeImage,onClick:()=>r(i.id),isActive:e===i.id},i.id))})]})}const bU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAYAAACrQz3mAAAAAXNSR0IArs4c6QAAArFJREFUeJzt2T+OskAch/HfvtlreI7hEF7AzgvYWlpY0noBOio6Gj0BXMDruBVvJuzCzMgfyTfPJyGEDZhZH4dxWTMAAAAAAABo+4o98XK5vJYdCoZcr9eoTt8pL9q27dsDwnucc5Zl2atpmmDQpJhmZrvd7u2BhZxOJ7vdbr+Ol9h3+sdbU1WVmVlU0KTbbNu20THXCNOZGqgoiuhzj8fjqtdUVWWPx8PMzD4WM8WnZ2RRFLbf74PjrOvans+n5Xm+2jUpMf8FXzlRf0Z0x2N7/42NDfLXccx+aJxTlWX5axs7N+XnsWaP6c8w/zhm78/QsaBD56fsh8Y7xeFw+L+FzuuHK8syeF3I7DE7n5yhMTN2aJyp/FkYmpG+Lmi3TQ1pS8ZMmaGxMzJ2ho7N2KHxTdGFmCPIFKyZM/Jn6CewZnrHf32Jib11+mtlzLrZ3Vq7bY4PAGumd+y/uf1tTEp0G/iyM0dQ1syJUsPbyNo6dc1NfpwXssYDgP7r2gxrZl3Xyb/rWtfE2sQToM4aHwT/A2DeTD6fz9HjzPPczGyVazbxOG+tGWozPJvdssVizjA2vCE2Jv/P3DjnXPS5yV+A7vd79GzGdM656DviYn+aYH3EFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMIcQUQkwhxBRCTCHEFEJMId8pJzvnzDn3Wm44mOIr5eQsywj5QU3TjPZKus2GXgwAAAAAAOj4AZesIJgBcx29AAAAAElFTkSuQmCC",RU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAAAQZJREFUaIHtl8ENwyAQBEkK4Zc6olThBvJISXm4gVSBqMM/N+J8gkRkWeFuF4jEzdPywbIcaHHOMAzDMAzDMIbmVGNQP83bervuv4fo1tedNidV/JHo3X+kRfDEP5dNXPO4QPNzxGuEJ4AFnNWTfvDTrBcO1uPOI64nlO5DzqOuo+NgzjNcTyjch3u+Jya+F+OK9yFSRGjHGfeedwT3kfqxs41D3ANTJUV8SYbP8SHCwl3XA9tdPHrTdHuMsEJZ8wNLTJNIrBaLZ2X4hPSw58i3jJnhcxTtIyuoJTwhXEB529QWrmjJIvHsPj9C2v9l29TA9S8K2+en861c18z5ly8p5Po0WvAGfM9cCxDY9y4AAAAASUVORK5CYII=";function CU(){return De.jsxs("div",{className:"avatar-container",children:[De.jsx(Fr,{className:"avatar-base",src:RU}),De.jsx(Fr,{className:"avatar-window",src:bU})]})}const wU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAAEoCAYAAAAnspS3AAAAAXNSR0IArs4c6QAABqZJREFUeJzt3T1u1AoUgFHzxDZYh7MINkDHBmgpKSjTsoF0qdLRwAqSDbAdXuWnEbxkbCczHuc7RxpdXeSJJkHx55n8DQMAAAAAAAAAAAAAAAAAAAAAAMu8mXvgly9ffp/2oQDAel+/fp3VtLdL3ujDw8PqBwQApzKO43B1dfX7/v7+aPwWhW8YhuHdu3erHxgNnz59Gr59+7a73TSXzsne9tfo7u5uGIZhVvwWvdT58PCw+/Bdykl26W6aTr5s7ebmZvaxHz9+POt97u7uhp8/fw7DMAzCx6MuJepLd9N0MbCNm5ub4f3790eP+/79+/Dr16/h+vr6bPdZEr5/jr7lM/nzP38v+57n4Sfdnva9zq0/bmv3Pc7J3vaC29vbv25PHbvk3+e6mPAdXtnvaTf/ntPJc2/7qefW79/a3Xx8Tva2b+3Dhw//3Y4d92fkbm9vj97vmIsJ37lsfUW3dt/TnE6ee9v3Orf+uK3dX8Oc7G3fwuGzu2PP9A5N8Ztuz43eUAzf1ldaa/dTzOlktLfd9Ezy2Fz6+XUp+2s3Resl4vUcFxO+ra+A1u57nkuv0C9l3+vc+uO2dt/jnOxtrzh85reFiwnf1ldaa3fTM8m5c+v3b+1uemb5p//7BpW5L18efm1vztf5ppc3p9tLxPJiwncuW1/Rrd33NKeT5972vc6tP25r99cwJ3vbn+swRH/enrIkkMMj38jyEvHLhW/rK621+ynmdDLa2256JnlsLv38upT9NVsayeGJrwU+92uEF/MD7IefFHvaTXPunOxth8mS36hy+MPo57iP39zCpi7lomTpbpouZo77/Pnz7GOvr6/Pdh/he8KlnGSX7qbp5AuPO1n4XuCxAcBJzA2fv8cHwO6N4zj72MV/j+/Hjx+znyUCwDmM4zj7VcncjzMA0CZ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAivABkCJ8AKQIHwApwgdAytslB4/jOIzj+Pt0DwcATuvNkoOvrq5ED4CLdn9//2TbFr3UeeyNAQAAAAAAAAAAAAAAAAAA0PUvzCkbNuca3MgAAAAASUVORK5CYII=",DU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIRJREFUOI1jZMAHZtz+j1MuQ5URlxQLPsMU5rbjNPMBzEIshmPaNuP2f3yGYRieXIlhMKqhJBqIy2CEoWQaiM1gRmoYiG4wE8UmYQGM1HIlDDxIrmSgiUtHDR0ihg6lxA8DVM/7FBqMu5Qi02DC5SmSwQyESv7kSgiDqJIfi+FYAZ46CgD1S0kppbdYDQAAAABJRU5ErkJggg==",UU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIRJREFUOI1jZMADTJ68+49L7oyMECMuORZ8hp3Z8paghdgMxxAwefLuPz7DMNT7CGMYjMIh1UBcBsMZ5BqIzWBGahiIbjATxSZhAYzUciUMmPgIM9DEpaOGDhFDh1Dih9tC7bxPqcE4SylyDSZYniIbzECo5PcRZmAgtuTHZjg2gK+OAgAb9VaYxhDgpAAAAABJRU5ErkJggg==";function LU(r){const{message:e,sender:t}=r;return De.jsxs("div",{className:t==="user"?"chat-message-user":"chat-message-nines",children:[t==="nines"&&De.jsx("div",{className:"chat-message-profile",children:De.jsx(Fr,{src:DU})}),De.jsx("div",{className:"chat-message-text",children:e}),t==="user"&&De.jsx("div",{className:"chat-message-profile",children:De.jsx(Fr,{className:"chat-message-profile",src:UU})})]})}function NU({chatMessages:r}){const e=oe.useRef(null);return oe.useEffect(()=>{e.current.scrollTop=e.current.scrollHeight},[r]),De.jsx("div",{className:"chat-messages-container",ref:e,children:r.map(t=>De.jsx(LU,{message:t.message,sender:t.sender},t.id))})}const OU=({normalImage:r,hoverImage:e,focusImage:t,placeholder:i="",value:s="",onChange:l,onFocus:c,onBlur:f,onSubmit:p,className:h="",maxLength:m,disabled:_=!1,fontSize:v="2vw"})=>{const[y,E]=oe.useState("normal"),M=oe.useRef(null),S=()=>y==="focus"?t||e||r:y==="hover"&&e||r,x=P=>{E("focus"),c&&c(P)},T=P=>{E("normal"),f&&f(P)},C=()=>{y!=="focus"&&E("hover")},b=()=>{y!=="focus"&&E("normal")},L=P=>{P.key==="Enter"&&p&&(P.preventDefault(),p(P))};return De.jsxs("div",{className:`pixel-input-container ${h}`,style:{position:"relative",width:"100%",height:"100%",cursor:_?"not-allowed":"text"},onMouseEnter:C,onMouseLeave:b,onClick:()=>M.current?.focus(),children:[De.jsx(Fr,{src:S(),containerStyle:{width:"100%",height:"100%",position:"absolute",top:0,left:0},imageStyle:{objectFit:"fill"}}),De.jsx("input",{ref:M,type:"text",placeholder:i,value:s,onChange:l,onFocus:x,onBlur:T,onKeyDown:L,maxLength:m,disabled:_,style:{width:"100%",height:"100%",background:"transparent",border:"none",outline:"none",padding:"0 20px",color:"white",fontFamily:"inherit",position:"relative",zIndex:1,cursor:"inherit",fontSize:v}})]})},Op="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAPCAYAAACFgM0XAAAAAXNSR0IArs4c6QAAAL9JREFUOI1j3HXv3X+GAQQsDAwMDK6KggNiuXzEXIgDGBgYGBhn3qG7A+QYGBiY6G4rGqCrA3a5CQ+sA7ABFlwS6K512/UWQxybGLI4NjmiHLDLTRjFEFziyHxs4tjUE+UAmGZyfEQqwBkFxPiUZg5A92VK5ToGBkd7hpTKdQy72oOwOhIbQFePDTDuuvfuv6uiIEpBJLf/IIqiR472WOVg4nL7D2KoQZbDZxZWB9ALyO0/OEjKAfmIuQxyA+QAAAuxWmko5ICRAAAAAElFTkSuQmCC",Pp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAAUCAYAAADGDQylAAAAAXNSR0IArs4c6QAAAJVJREFUaIHt2rEJwlAYhdH/BQcRd7BxHJ3CTawyjk1GCEgmUVsFG1GMuZzTve4++HikSKvTeCsI0NbbvZiJ0M09AL5FzMR4GfN0OP5+CXzIy0wMMRNDzMQQMzHETAwxE0PMxBAzMcRMDDETQ8zE8AsoMVaPh+tmN98S/kp3Oc894W1PMS/xAlBVNQ19883M4k1D36qq7ooDEP7AUvBuAAAAAElFTkSuQmCC";function PU({chatMessages:r,setChatMessages:e}){const[t,i]=oe.useState(""),s={greetings:["你好！我是Nines，很高兴为你服务！","嗨！有什么我可以帮助你的吗？","你好呀！今天过得怎么样？"],questions:["这是一个很好的问题，让我想想怎么回答你...","关于这个问题，我可以为你提供一些基本信息。","我理解你的疑问，让我尝试解释一下。"],help:["我可以帮你解答问题、提供信息或者只是聊聊天！","试试问我一些常见问题，或者告诉我你需要什么帮助。","我在这里随时为你提供帮助！"],thanks:["不客气！很高兴能帮到你！","这是我应该做的！还有什么需要帮助的吗？","谢谢你的认可！随时欢迎再来咨询。"],farewell:["再见！期待下次与你聊天！","祝你有个美好的一天！","再见啦，记得有问题随时来找我哦！"],default:["很有趣的观点！能告诉我更多吗？","我明白了，请继续。","这听起来很有意思！","好的，我记下了。","谢谢分享这个信息！"]};function l(m){const _=m.toLowerCase().trim();return _===""||_.length<2?"请告诉我更多信息，这样我才能更好地帮助你！":/(你好|嗨|hello|hi|早上好|下午好|晚上好)/.test(_)?c(s.greetings):/(谢谢|感谢|thank|thanks)/.test(_)?c(s.thanks):/(再见|拜拜|bye|goodbye|再会)/.test(_)?c(s.farewell):/(帮助|help|怎么|如何|怎么办|为什么|what|how|why)/.test(_)?c(s.help)+" "+c(s.questions):/(？|\?|吗|呢|什么|谁|哪里|when|where|who)/.test(_)?c(s.questions):c(s.default)}function c(m){return m[Math.floor(Math.random()*m.length)]}function f(m){i(m.target.value)}function p(){h()}async function h(){if(!t.trim())return;const m={message:t.trim(),sender:"user",id:crypto.randomUUID(),timestamp:new Date().toLocaleTimeString()},_=[...r,m];e(_),i(""),await new Promise(E=>setTimeout(E,500+Math.random()*1e3));const y={message:l(t),sender:"nines",id:crypto.randomUUID(),timestamp:new Date().toLocaleTimeString()};e([..._,y])}return De.jsx("div",{className:"chat-input-container",children:De.jsxs("div",{className:"chat-input-box",children:[De.jsx("div",{className:"input-wrapper",children:De.jsx(OU,{normalImage:Pp,hoverImage:Pp,focusImage:Pp,placeholder:"Say something...",value:t,onChange:f,onSubmit:p,fontSize:"2vw"})}),De.jsx("div",{className:"send-button",children:De.jsx(PS,{normalImage:Op,hoverImage:Op,clickImage:Op,onClick:h})})]})})}function Ey(){const[r,e]=oe.useState([]);return De.jsxs("div",{className:"chat-screen-container",children:[De.jsx(NU,{chatMessages:r}),De.jsx(PU,{chatMessages:r,setChatMessages:e})]})}function IU(){return De.jsx("div",{className:"profile-screen-container",children:De.jsx("h2",{children:"Profile Screen"})})}function BU(){return De.jsx("div",{className:"gamedev-screen-container",children:De.jsx("h2",{children:"GameDev Screen"})})}function ka(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function IS(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},_g,Gn,$t,Gi=1e8,Kt=1/Gi,zm=Math.PI*2,FU=zm/4,zU=0,BS=Math.sqrt,HU=Math.cos,GU=Math.sin,Pn=function(e){return typeof e=="string"},un=function(e){return typeof e=="function"},Za=function(e){return typeof e=="number"},vg=function(e){return typeof e>"u"},ya=function(e){return typeof e=="object"},li=function(e){return e!==!1},xg=function(){return typeof window<"u"},mf=function(e){return un(e)||Pn(e)},FS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,Hm=/(?:-?\.?\d|\.)+/gi,zS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,HS=/[+-]=-?[.\d]+/,GS=/[^,'"\[\]\s]+/gi,VU=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tn,ha,Gm,yg,wi={},Df={},VS,kS=function(e){return(Df=Yo(e,wi))&&hi},Sg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},du=function(e,t){return!t&&console.warn(e)},XS=function(e,t){return e&&(wi[e]=t)&&Df&&(Df[e]=t)||wi},pu=function(){return 0},kU={suppressEvents:!0,isStart:!0,kill:!1},Ef={suppressEvents:!0,kill:!1},XU={suppressEvents:!0},Mg={},Or=[],Vm={},WS,Mi={},Bp={},Ay=30,Af=[],Eg="",Ag=function(e){var t=e[0],i,s;if(ya(t)||un(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=Af.length;s--&&!Af[s].targetTest(t););i=Af[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new mM(e[s],i)))||e.splice(s,1);return e},Rs=function(e){return e._gsap||Ag(Vi(e))[0]._gsap},YS=function(e,t,i){return(i=e[t])&&un(i)?e[t]():vg(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},hn=function(e){return Math.round(e*1e5)/1e5||0},yn=function(e){return Math.round(e*1e7)/1e7||0},Io=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},WU=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Uf=function(){var e=Or.length,t=Or.slice(0),i,s;for(Vm={},Or.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Tg=function(e){return!!(e._initted||e._startAt||e.add)},qS=function(e,t,i,s){Or.length&&!Gn&&Uf(),e.render(t,i,!!(Gn&&t<0&&Tg(e))),Or.length&&!Gn&&Uf()},KS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(GS).length<2?t:Pn(e)?e.trim():e},QS=function(e){return e},Di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},YU=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},Yo=function(e,t){for(var i in t)e[i]=t[i];return e},Ty=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ya(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Lf=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},su=function(e){var t=e.parent||tn,i=e.keyframes?YU(jn(e.keyframes)):Di;if(li(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},qU=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},jS=function(e,t,i,s,l){var c=e[s],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},Vf=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=t._prev,c=t._next;l?l._next=c:e[i]===t&&(e[i]=c),c?c._prev=l:e[s]===t&&(e[s]=l),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},KU=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},km=function(e,t,i,s){return e._startAt&&(Gn?e._startAt.revert(Ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},QU=function r(e){return!e||e._ts&&r(e.parent)},by=function(e){return e._repeat?qo(e._tTime,e=e.duration()+e._rDelay)*e:0},qo=function(e,t){var i=Math.floor(e=yn(e/t));return e&&i===e?i-1:i},Nf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kf=function(e){return e._end=yn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Kt)||0))},Xf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kf(e),i._dirty||Cs(i,e)),e},ZS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Nf(e.rawTime(),t),(!t._dur||Du(0,t.totalDuration(),i)-t._tTime>Kt)&&t.render(i,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Kt}},ma=function(e,t,i,s){return t.parent&&zr(t),t._start=yn((Za(i)?i:i||e!==tn?zi(e,i,t):e._time)+t._delay),t._end=yn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jS(e,t,"_first","_last",e._sort?"_start":0),Xm(t)||(e._recent=t),s||ZS(e,t),e._ts<0&&Xf(e,e._tTime),e},JS=function(e,t){return(wi.ScrollTrigger||Sg("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},$S=function(e,t,i,s,l){if(Rg(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!Gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&WS!==Ai.frame)return Or.push(e),e._lazy=[l,s],1},jU=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Xm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZU=function(e,t,i,s){var l=e.ratio,c=t<0||!t&&(!e._start&&jU(e)&&!(!e._initted&&Xm(e))||(e._ts<0||e._dp._ts<0)&&!Xm(e))?0:1,f=e._rDelay,p=0,h,m,_;if(f&&e._repeat&&(p=Du(0,e._tDur,t),m=qo(p,f),e._yoyo&&m&1&&(c=1-c),m!==qo(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||Gn||s||e._zTime===Kt||!t&&e._zTime){if(!e._initted&&$S(e,t,s,i,p))return;for(_=e._zTime,e._zTime=t||(i?Kt:0),i||(i=t&&!_),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=p,h=e._pt;h;)h.r(c,h.d),h=h._next;t<0&&km(e,t,i,!0),e._onUpdate&&!i&&Ti(e,"onUpdate"),p&&e._repeat&&!i&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&zr(e,1),!i&&!Gn&&(Ti(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},JU=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Ko=function(e,t,i,s){var l=e._repeat,c=yn(t)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:yn(c*(l+1)+e._rDelay*l):c,f>0&&!s&&Xf(e,e._tTime=e._tDur*f),e.parent&&kf(e),i||Cs(e.parent,e),e},Ry=function(e){return e instanceof ti?Cs(e):Ko(e,e._dur)},$U={_start:0,endTime:pu,totalDuration:pu},zi=function r(e,t,i){var s=e.labels,l=e._recent||$U,c=e.duration()>=Gi?l.endTime(!1):e._dur,f,p,h;return Pn(t)&&(isNaN(t)||t in s)?(p=t.charAt(0),h=t.substr(-1)==="%",f=t.indexOf("="),p==="<"||p===">"?(f>=0&&(t=t.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(t in s||(s[t]=c),s[t]):(p=parseFloat(t.charAt(f-1)+t.substr(f+1)),h&&i&&(p=p/100*(jn(i)?i[0]:i).totalDuration()),f>1?r(e,t.substr(0,f-1),i)+p:c+p)):t==null?c:+t},ou=function(e,t,i){var s=Za(t[1]),l=(s?2:1)+(e<2?0:1),c=t[l],f,p;if(s&&(c.duration=t[1]),c.parent=i,e){for(f=c,p=i;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=li(p.vars.inherit)&&p.parent;c.immediateRender=li(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new xn(t[0],c,t[l+1])},Xr=function(e,t){return e||e===0?t(e):t},Du=function(e,t,i){return i<e?e:i>t?t:i},Kn=function(e,t){return!Pn(e)||!(t=VU.exec(e))?"":t[1]},e3=function(e,t,i){return Xr(i,function(s){return Du(e,t,s)})},Wm=[].slice,eM=function(e,t){return e&&ya(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ya(e[0]))&&!e.nodeType&&e!==ha},t3=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var l;return Pn(s)&&!t||eM(s,1)?(l=i).push.apply(l,Vi(s)):i.push(s)})||i},Vi=function(e,t,i){return $t&&!t&&$t.selector?$t.selector(e):Pn(e)&&!i&&(Gm||!Qo())?Wm.call((t||yg).querySelectorAll(e),0):jn(e)?t3(e,i):eM(e)?Wm.call(e,0):e?[e]:[]},Ym=function(e){return e=Vi(e)[0]||du("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vi(t,i.querySelectorAll?i:i===e?du("Invalid scope")||yg.createElement("div"):e)}},tM=function(e){return e.sort(function(){return .5-Math.random()})},nM=function(e){if(un(e))return e;var t=ya(e)?e:{each:e},i=ws(t.ease),s=t.from||0,l=parseFloat(t.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,h=t.axis,m=s,_=s;return Pn(s)?m=_={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(m=s[0],_=s[1]),function(v,y,E){var M=(E||t).length,S=c[M],x,T,C,b,L,P,I,H,R;if(!S){if(R=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!R){for(I=-Gi;I<(I=E[R++].getBoundingClientRect().left)&&R<M;);R<M&&R--}for(S=c[M]=[],x=p?Math.min(R,M)*m-.5:s%R,T=R===Gi?0:p?M*_/R-.5:s/R|0,I=0,H=Gi,P=0;P<M;P++)C=P%R-x,b=T-(P/R|0),S[P]=L=h?Math.abs(h==="y"?b:C):BS(C*C+b*b),L>I&&(I=L),L<H&&(H=L);s==="random"&&tM(S),S.max=I-H,S.min=H,S.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(R>M?M-1:h?h==="y"?M/R:R:Math.max(R,M/R))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Kn(t.amount||t.each)||0,i=i&&M<0?hM(i):i}return M=(S[v]-S.min)/S.max||0,yn(S.b+(i?i(M):M)*S.v)+S.u}},qm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=yn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Za(i)?0:Kn(i))}},iM=function(e,t){var i=jn(e),s,l;return!i&&ya(e)&&(s=i=e.radius||Gi,e.values?(e=Vi(e.values),(l=!Za(e[0]))&&(s*=s)):e=qm(e.increment)),Xr(t,i?un(e)?function(c){return l=e(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),h=Gi,m=0,_=e.length,v,y;_--;)l?(v=e[_].x-f,y=e[_].y-p,v=v*v+y*y):v=Math.abs(e[_]-f),v<h&&(h=v,m=_);return m=!s||h<=s?e[m]:c,l||m===c||Za(c)?m:m+Kn(c)}:qm(e))},aM=function(e,t,i,s){return Xr(jn(e)?!t:i===!0?!!(i=0):!s,function(){return jn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},n3=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(l,c){return c(l)},s)}},i3=function(e,t){return function(i){return e(parseFloat(i))+(t||Kn(i))}},a3=function(e,t,i){return sM(e,t,0,1,i)},rM=function(e,t,i){return Xr(i,function(s){return e[~~t(s)]})},r3=function r(e,t,i){var s=t-e;return jn(e)?rM(e,r(0,e.length),t):Xr(i,function(l){return(s+(l-e)%s)%s+e})},s3=function r(e,t,i){var s=t-e,l=s*2;return jn(e)?rM(e,r(0,e.length-1),t):Xr(i,function(c){return c=(l+(c-e)%l)%l||0,e+(c>s?l-c:c)})},mu=function(e){for(var t=0,i="",s,l,c,f;~(s=e.indexOf("random(",t));)c=e.indexOf(")",s),f=e.charAt(s+7)==="[",l=e.substr(s+7,c-s-7).match(f?GS:Hm),i+=e.substr(t,s-t)+aM(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),t=c+1;return i+e.substr(t,e.length-t)},sM=function(e,t,i,s,l){var c=t-e,f=s-i;return Xr(l,function(p){return i+((p-e)/c*f||0)})},o3=function r(e,t,i,s){var l=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!l){var c=Pn(e),f={},p,h,m,_,v;if(i===!0&&(s=1)&&(i=null),c)e={p:e},t={p:t};else if(jn(e)&&!jn(t)){for(m=[],_=e.length,v=_-2,h=1;h<_;h++)m.push(r(e[h-1],e[h]));_--,l=function(E){E*=_;var M=Math.min(v,~~E);return m[M](E-M)},i=t}else s||(e=Yo(jn(e)?[]:{},e));if(!m){for(p in t)bg.call(f,e,p,"get",t[p]);l=function(E){return Dg(E,f)||(c?e.p:e)}}}return Xr(i,l)},Cy=function(e,t,i){var s=e.labels,l=Gi,c,f,p;for(c in s)f=s[c]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Ti=function(e,t,i){var s=e.vars,l=s[t],c=$t,f=e._ctx,p,h,m;if(l)return p=s[t+"Params"],h=s.callbackScope||e,i&&Or.length&&Uf(),f&&($t=f),m=p?l.apply(h,p):l.call(h),$t=c,m},au=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gn),e.progress()<1&&Ti(e,"onInterrupt"),e},No,oM=[],lM=function(e){if(e)if(e=!e.name&&e.default||e,xg()||e.headless){var t=e.name,i=un(e),s=t&&!i&&e.init?function(){this._props=[]}:e,l={init:pu,render:Dg,add:bg,kill:E3,modifier:M3,rawVars:0},c={targetTest:0,get:0,getSetter:wg,aliases:{},register:0};if(Qo(),e!==s){if(Mi[t])return;Di(s,Di(Lf(e,l),c)),Yo(s.prototype,Yo(l,Lf(e,c))),Mi[s.prop=t]=s,e.targetTest&&(Af.push(s),Mg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}XS(t,s),e.register&&e.register(hi,s,ci)}else oM.push(e)},qt=255,ru={aqua:[0,qt,qt],lime:[0,qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qt],navy:[0,0,128],white:[qt,qt,qt],olive:[128,128,0],yellow:[qt,qt,0],orange:[qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qt,0,0],pink:[qt,192,203],cyan:[0,qt,qt],transparent:[qt,qt,qt,0]},Fp=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*qt+.5|0},uM=function(e,t,i){var s=e?Za(e)?[e>>16,e>>8&qt,e&qt]:0:ru.black,l,c,f,p,h,m,_,v,y,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ru[e])s=ru[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&qt,s&qt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&qt,e&qt]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(Hm),!t)p=+s[0]%360/360,h=+s[1]/100,m=+s[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,s.length>3&&(s[3]*=1),s[0]=Fp(p+1/3,l,c),s[1]=Fp(p,l,c),s[2]=Fp(p-1/3,l,c);else if(~e.indexOf("="))return s=e.match(zS),i&&s.length<4&&(s[3]=1),s}else s=e.match(Hm)||ru.transparent;s=s.map(Number)}return t&&!E&&(l=s[0]/qt,c=s[1]/qt,f=s[2]/qt,_=Math.max(l,c,f),v=Math.min(l,c,f),m=(_+v)/2,_===v?p=h=0:(y=_-v,h=m>.5?y/(2-_-v):y/(_+v),p=_===l?(c-f)/y+(c<f?6:0):_===c?(f-l)/y+2:(l-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(h*100+.5),s[2]=~~(m*100+.5)),i&&s.length<4&&(s[3]=1),s},cM=function(e){var t=[],i=[],s=-1;return e.split(Pr).forEach(function(l){var c=l.match(Lo)||[];t.push.apply(t,c),i.push(s+=c.length+1)}),t.c=i,t},wy=function(e,t,i){var s="",l=(e+s).match(Pr),c=t?"hsla(":"rgba(",f=0,p,h,m,_;if(!l)return e;if(l=l.map(function(v){return(v=uM(v,t,1))&&c+(t?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),i&&(m=cM(e),p=i.c,p.join(s)!==m.c.join(s)))for(h=e.replace(Pr,"1").split(Lo),_=h.length-1;f<_;f++)s+=h[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=e.split(Pr),_=h.length-1;f<_;f++)s+=h[f]+l[f];return s+h[_]},Pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ru)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),l3=/hsl[a]?\(/,fM=function(e){var t=e.join(" "),i;if(Pr.lastIndex=0,Pr.test(t))return i=l3.test(t),e[1]=wy(e[1],i),e[0]=wy(e[0],i,cM(e[1])),!0},gu,Ai=(function(){var r=Date.now,e=500,t=33,i=r(),s=i,l=1e3/240,c=l,f=[],p,h,m,_,v,y,E=function M(S){var x=r()-s,T=S===!0,C,b,L,P;if((x>e||x<0)&&(i+=x-t),s+=x,L=s-i,C=L-c,(C>0||T)&&(P=++_.frame,v=L-_.time*1e3,_.time=L=L/1e3,c+=C+(C>=l?4:l-C),b=1),T||(p=h(M)),b)for(y=0;y<f.length;y++)f[y](L,v,P,S)};return _={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){VS&&(!Gm&&xg()&&(ha=Gm=window,yg=ha.document||{},wi.gsap=hi,(ha.gsapVersions||(ha.gsapVersions=[])).push(hi.version),kS(Df||ha.GreenSockGlobals||!ha.gsap&&ha||{}),oM.forEach(lM)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&_.sleep(),h=m||function(S){return setTimeout(S,c-_.time*1e3+1|0)},gu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),gu=0,h=pu},lagSmoothing:function(S,x){e=S||1/0,t=Math.min(x||33,e)},fps:function(S){l=1e3/(S||240),c=_.time*1e3+l},add:function(S,x,T){var C=x?function(b,L,P,I){S(b,L,P,I),_.remove(C)}:S;return _.remove(S),f[T?"unshift":"push"](C),Qo(),C},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},_})(),Qo=function(){return!gu&&Ai.wake()},Tt={},u3=/^[\d.\-M][\d.\-,\s]/,c3=/["']/g,f3=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],l=1,c=i.length,f,p,h;l<c;l++)p=i[l],f=l!==c-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),t[s]=isNaN(h)?h.replace(c3,"").trim():+h,s=p.substr(f+1).trim();return t},h3=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},d3=function(e){var t=(e+"").split("("),i=Tt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[f3(t[1])]:h3(e).split(",").map(KS)):Tt._CE&&u3.test(e)?Tt._CE("",e):i},hM=function(e){return function(t){return 1-e(1-t)}},dM=function r(e,t){for(var i=e._first,s;i;)i instanceof ti?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=t)),i=i._next},ws=function(e,t){return e&&(un(e)?e:Tt[e]||d3(e))||t},Ns=function(e,t,i,s){i===void 0&&(i=function(p){return 1-t(1-p)}),s===void 0&&(s=function(p){return p<.5?t(p*2)/2:1-t((1-p)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:s},c;return ui(e,function(f){Tt[f]=wi[f]=l,Tt[c=f.toLowerCase()]=i;for(var p in l)Tt[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Tt[f+"."+p]=l[p]}),l},pM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},zp=function r(e,t,i){var s=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),c=l/zm*(Math.asin(1/s)||0),f=function(m){return m===1?1:s*Math.pow(2,-10*m)*GU((m-c)*l)+1},p=e==="out"?f:e==="in"?function(h){return 1-f(1-h)}:pM(f);return l=zm/l,p.config=function(h,m){return r(e,h,m)},p},Hp=function r(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:pM(i);return s.config=function(l){return r(e,l)},s};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ns(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;Ns("Elastic",zp("in"),zp("out"),zp());(function(r,e){var t=1/e,i=2*t,s=2.5*t,l=function(f){return f<t?r*f*f:f<i?r*Math.pow(f-1.5/e,2)+.75:f<s?r*(f-=2.25/e)*f+.9375:r*Math.pow(f-2.625/e,2)+.984375};Ns("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ns("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ns("Circ",function(r){return-(BS(1-r*r)-1)});Ns("Sine",function(r){return r===1?1:-HU(r*FU)+1});Ns("Back",Hp("in"),Hp("out"),Hp());Tt.SteppedEase=Tt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),l=t?1:0,c=1-Kt;return function(f){return((s*Du(0,c,f)|0)+l)*i}}};Wo.ease=Tt["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Eg+=r+","+r+"Params,"});var mM=function(e,t){this.id=zU++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:YS,this.set=t?t.getSetter:wg},_u=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ko(this,+t.duration,1,1),this.data=t.data,$t&&(this._ctx=$t,$t.data.push(this)),gu||Ai.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ko(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(Qo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Xf(this,i),!l._dp||l.parent||ZS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ma(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Kt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),qS(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+by(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+by(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?qo(this._tTime,l)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Kt?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Nf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Kt?0:this._rts,this.totalTime(Du(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),kf(this),KU(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Kt&&(this._tTime-=Kt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ma(s,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(li(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nf(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=XU);var s=Gn;return Gn=i,Tg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gn=s,this},e.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ry(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Ry(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(zi(this,i),li(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,li(s)),this._dur||(this._zTime=-Kt),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Kt,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-Kt)},e.eventCallback=function(i,s,l){var c=this.vars;return arguments.length>1?(s?(c[i]=s,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},e.then=function(i){var s=this;return new Promise(function(l){var c=un(i)?i:QS,f=function(){var h=s.then;s.then=null,un(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=h),l(c),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},e.kill=function(){au(this)},r})();Di(_u.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Kt,_prom:0,_ps:!1,_rts:1});var ti=(function(r){IS(e,r);function e(i,s){var l;return i===void 0&&(i={}),l=r.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=li(i.sortChildren),tn&&ma(i.parent||tn,ka(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&JS(ka(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(s,l,c){return ou(0,arguments,this),this},t.from=function(s,l,c){return ou(1,arguments,this),this},t.fromTo=function(s,l,c,f){return ou(2,arguments,this),this},t.set=function(s,l,c){return l.duration=0,l.parent=this,su(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new xn(s,l,zi(this,c),1),this},t.call=function(s,l,c){return ma(this,xn.delayedCall(0,s,l),c)},t.staggerTo=function(s,l,c,f,p,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new xn(s,c,zi(this,p)),this},t.staggerFrom=function(s,l,c,f,p,h,m){return c.runBackwards=1,su(c).immediateRender=li(c.immediateRender),this.staggerTo(s,l,c,f,p,h,m)},t.staggerFromTo=function(s,l,c,f,p,h,m,_){return f.startAt=c,su(f).immediateRender=li(f.immediateRender),this.staggerTo(s,l,f,p,h,m,_)},t.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=s<=0?0:yn(s),_=this._zTime<0!=s<0&&(this._initted||!h),v,y,E,M,S,x,T,C,b,L,P,I;if(this!==tn&&m>p&&s>=0&&(m=p),m!==this._tTime||c||_){if(f!==this._time&&h&&(m+=this._time-f,s+=this._time-f),v=m,b=this._start,C=this._ts,x=!C,_&&(h||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=yn(m%S),m===p?(M=this._repeat,v=h):(L=yn(m/S),M=~~L,M&&M===L&&(v=h,M--),v>h&&(v=h)),L=qo(this._tTime,S),!f&&this._tTime&&L!==M&&this._tTime-L*S-this._dur<=0&&(L=M),P&&M&1&&(v=h-v,I=1),M!==L&&!this._lock){var H=P&&L&1,R=H===(P&&M&1);if(M<L&&(H=!H),f=H?0:m%h?h:m,this._lock=1,this.render(f||(I?0:yn(M*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,R&&(this._lock=2,f=H?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;dM(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=JU(this,yn(f),yn(v)),T&&(m-=v-(v=T._start))),this._tTime=m,this._time=v,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&m&&!l&&!L&&(Ti(this,"onStart"),this._tTime!==m))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&T!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){T=0,E&&(m+=this._zTime=-Kt);break}}y=E}else{y=this._last;for(var U=s<0?s:v;y;){if(E=y._prev,(y._act||U<=y._end)&&y._ts&&T!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(U-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(U-y._start)*y._ts,l,c||Gn&&Tg(y)),v!==this._time||!this._ts&&!x){T=0,E&&(m+=this._zTime=U?-Kt:Kt);break}}y=E}}if(T&&!l&&(this.pause(),T.render(v>=f?0:-Kt)._zTime=v>=f?1:-1,this._ts))return this._start=b,kf(this),this.render(s,l,c);this._onUpdate&&!l&&Ti(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(b===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&zr(this,1),!l&&!(s<0&&!f)&&(m||f||!p)&&(Ti(this,m===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,l){var c=this;if(Za(l)||(l=zi(this,l,s)),!(s instanceof _u)){if(jn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Pn(s))return this.addLabel(s,l);if(un(s))s=xn.delayedCall(0,s);else return this}return this!==s?ma(this,s,l):this},t.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Gi);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof xn?l&&p.push(h):(c&&p.push(h),s&&p.push.apply(p,h.getChildren(!0,l,c)))),h=h._next;return p},t.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},t.remove=function(s){return Pn(s)?this.removeLabel(s):un(s)?this.killTweensOf(s):(s.parent===this&&Vf(this,s),s===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yn(Ai.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},t.addLabel=function(s,l){return this.labels[s]=zi(this,l),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,l,c){var f=xn.delayedCall(0,l||pu,c);return f.data="isPause",this._hasPause=1,ma(this,f,zi(this,s))},t.removePause=function(s){var l=this._first;for(s=zi(this,s);l;)l._start===s&&l.data==="isPause"&&zr(l),l=l._next},t.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Dr!==f[p]&&f[p].kill(s,l);return this},t.getTweensOf=function(s,l){for(var c=[],f=Vi(s),p=this._first,h=Za(l),m;p;)p instanceof xn?WU(p._targets,f)&&(h?(!Dr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(m=p.getTweensOf(f,l)).length&&c.push.apply(c,m),p=p._next;return c},t.tweenTo=function(s,l){l=l||{};var c=this,f=zi(c,s),p=l,h=p.startAt,m=p.onStart,_=p.onStartParams,v=p.immediateRender,y,E=xn.to(c,Di({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||Kt,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());E._dur!==S&&Ko(E,S,0,1).render(E._time,!0,!0),y=1}m&&m.apply(E,_||[])}},l));return v?E.render(0):E},t.tweenFromTo=function(s,l,c){return this.tweenTo(l,Di({startAt:{time:zi(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Cy(this,zi(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Cy(this,zi(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Kt)},t.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,h;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(h in p)p[h]>=c&&(p[h]+=s);return Cs(this)},t.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Cs(this)},t.totalDuration=function(s){var l=0,c=this,f=c._last,p=Gi,h,m,_;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(_=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ma(c,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!_&&!c._dp||_&&_.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;Ko(c,c===tn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(tn._ts&&(qS(tn,Nf(s,tn)),WS=Ai.frame),Ai.frame>=Ay){Ay+=Ri.autoSleep||120;var l=tn._first;if((!l||!l._ts)&&Ri.autoSleep&&Ai._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Ai.sleep()}}},e})(_u);Di(ti.prototype,{_lock:0,_hasPause:0,_forcing:0});var p3=function(e,t,i,s,l,c,f){var p=new ci(this._pt,e,t,0,1,SM,null,l),h=0,m=0,_,v,y,E,M,S,x,T;for(p.b=i,p.e=s,i+="",s+="",(x=~s.indexOf("random("))&&(s=mu(s)),c&&(T=[i,s],c(T,e,t),i=T[0],s=T[1]),v=i.match(Ip)||[];_=Ip.exec(s);)E=_[0],M=s.substring(h,_.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,p._pt={_next:p._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Io(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},h=Ip.lastIndex);return p.c=h<s.length?s.substring(h,s.length):"",p.fp=f,(HS.test(s)||x)&&(p.e=0),this._pt=p,p},bg=function(e,t,i,s,l,c,f,p,h,m){un(s)&&(s=s(l||0,e,c));var _=e[t],v=i!=="get"?i:un(_)?h?e[t.indexOf("set")||!un(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():_,y=un(_)?h?x3:xM:Cg,E;if(Pn(s)&&(~s.indexOf("random(")&&(s=mu(s)),s.charAt(1)==="="&&(E=Io(v,s)+(Kn(v)||0),(E||E===0)&&(s=E))),!m||v!==s||Km)return!isNaN(v*s)&&s!==""?(E=new ci(this._pt,e,t,+v||0,s-(v||0),typeof _=="boolean"?S3:yM,0,y),h&&(E.fp=h),f&&E.modifier(f,this,e),this._pt=E):(!_&&!(t in e)&&Sg(t,s),p3.call(this,e,t,v,s,y,p||Ri.stringFilter,h))},m3=function(e,t,i,s,l){if(un(e)&&(e=lu(e,l,t,i,s)),!ya(e)||e.style&&e.nodeType||jn(e)||FS(e))return Pn(e)?lu(e,l,t,i,s):e;var c={},f;for(f in e)c[f]=lu(e[f],l,t,i,s);return c},gM=function(e,t,i,s,l,c){var f,p,h,m;if(Mi[e]&&(f=new Mi[e]).init(l,f.rawVars?t[e]:m3(t[e],s,l,c,i),i,s,c)!==!1&&(i._pt=p=new ci(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==No))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=p;return f},Dr,Km,Rg=function r(e,t,i){var s=e.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,h=s.onUpdate,m=s.runBackwards,_=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=e._dur,M=e._startAt,S=e._targets,x=e.parent,T=x&&x.data==="nested"?x.vars.targets:S,C=e._overwrite==="auto"&&!_g,b=e.timeline,L,P,I,H,R,U,B,X,j,re,ee,z,Y;if(b&&(!v||!l)&&(l="none"),e._ease=ws(l,Wo.ease),e._yEase=_?hM(ws(_===!0?l:_,Wo.ease)):0,_&&e._yoyo&&!e._repeat&&(_=e._yEase,e._yEase=e._ease,e._ease=_),e._from=!b&&!!s.runBackwards,!b||v&&!s.stagger){if(X=S[0]?Rs(S[0]).harness:0,z=X&&s[X.prop],L=Lf(s,Mg),M&&(M._zTime<0&&M.progress(1),t<0&&m&&f&&!y?M.render(-1,!0):M.revert(m&&E?Ef:kU),M._lazy=0),c){if(zr(e._startAt=xn.set(S,Di({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&li(p),startAt:null,delay:0,onUpdate:h&&function(){return Ti(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gn||!f&&!y)&&e._startAt.revert(Ef),f&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(m&&E&&!M){if(t&&(f=!1),I=Di({overwrite:!1,data:"isFromStart",lazy:f&&!M&&li(p),immediateRender:f,stagger:0,parent:x},L),z&&(I[X.prop]=z),zr(e._startAt=xn.set(S,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gn?e._startAt.revert(Ef):e._startAt.render(-1,!0)),e._zTime=t,!f)r(e._startAt,Kt,Kt);else if(!t)return}for(e._pt=e._ptCache=0,p=E&&li(p)||p&&!E,P=0;P<S.length;P++){if(R=S[P],B=R._gsap||Ag(S)[P]._gsap,e._ptLookup[P]=re={},Vm[B.id]&&Or.length&&Uf(),ee=T===S?P:T.indexOf(R),X&&(j=new X).init(R,z||L,e,ee,T)!==!1&&(e._pt=H=new ci(e._pt,R,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(k){re[k]=H}),j.priority&&(U=1)),!X||z)for(I in L)Mi[I]&&(j=gM(I,L,e,ee,R,T))?j.priority&&(U=1):re[I]=H=bg.call(e,R,I,"get",L[I],ee,T,0,s.stringFilter);e._op&&e._op[P]&&e.kill(R,e._op[P]),C&&e._pt&&(Dr=e,tn.killTweensOf(R,re,e.globalTime(t)),Y=!e.parent,Dr=0),e._pt&&p&&(Vm[B.id]=1)}U&&MM(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Y,v&&t<=0&&b.render(Gi,!0,!0)},g3=function(e,t,i,s,l,c,f,p){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],m,_,v,y;if(!h)for(h=e._ptCache[t]=[],v=e._ptLookup,y=e._targets.length;y--;){if(m=v[y][t],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==t&&m.fp!==t;)m=m._next;if(!m)return Km=1,e.vars[t]="+=0",Rg(e,f),Km=0,p?du(t+" not eligible for reset"):1;h.push(m)}for(y=h.length;y--;)_=h[y],m=_._pt||_,m.s=(s||s===0)&&!l?s:m.s+(s||0)+c*m.c,m.c=i-m.s,_.e&&(_.e=hn(i)+Kn(_.e)),_.b&&(_.b=m.s+Kn(_.b))},_3=function(e,t){var i=e[0]?Rs(e[0]).harness:0,s=i&&i.aliases,l,c,f,p;if(!s)return t;l=Yo({},t);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},v3=function(e,t,i,s){var l=t.ease||s||"power1.inOut",c,f;if(jn(t))f=i[e]||(i[e]=[]),t.forEach(function(p,h){return f.push({t:h/(t.length-1)*100,v:p,e:l})});else for(c in t)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},lu=function(e,t,i,s,l){return un(e)?e.call(t,i,s,l):Pn(e)&&~e.indexOf("random(")?mu(e):e},_M=Eg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vM={};ui(_M+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vM[r]=1});var xn=(function(r){IS(e,r);function e(i,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=r.call(this,c?s:su(s))||this;var p=f.vars,h=p.duration,m=p.delay,_=p.immediateRender,v=p.stagger,y=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,x=p.yoyoEase,T=s.parent||tn,C=(jn(i)||FS(i)?Za(i[0]):"length"in s)?[i]:Vi(i),b,L,P,I,H,R,U,B;if(f._targets=C.length?Ag(C):du("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||mf(h)||mf(m)){if(s=f.vars,b=f.timeline=new ti({data:"nested",defaults:M||{},targets:T&&T.data==="nested"?T.vars.targets:C}),b.kill(),b.parent=b._dp=ka(f),b._start=0,v||mf(h)||mf(m)){if(I=C.length,U=v&&nM(v),ya(v))for(H in v)~_M.indexOf(H)&&(B||(B={}),B[H]=v[H]);for(L=0;L<I;L++)P=Lf(s,vM),P.stagger=0,x&&(P.yoyoEase=x),B&&Yo(P,B),R=C[L],P.duration=+lu(h,ka(f),L,R,C),P.delay=(+lu(m,ka(f),L,R,C)||0)-f._delay,!v&&I===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),b.to(R,P,U?U(L,R,C):0),b._ease=Tt.none;b.duration()?h=m=0:f.timeline=0}else if(E){su(Di(b.vars.defaults,{ease:"none"})),b._ease=ws(E.ease||s.ease||"none");var X=0,j,re,ee;if(jn(E))E.forEach(function(z){return b.to(C,z,">")}),b.duration();else{P={};for(H in E)H==="ease"||H==="easeEach"||v3(H,E[H],P,E.easeEach);for(H in P)for(j=P[H].sort(function(z,Y){return z.t-Y.t}),X=0,L=0;L<j.length;L++)re=j[L],ee={ease:re.e,duration:(re.t-(L?j[L-1].t:0))/100*h},ee[H]=re.v,b.to(C,ee,X),X+=ee.duration;b.duration()<h&&b.to({},{duration:h-b.duration()})}}h||f.duration(h=b.duration())}else f.timeline=0;return y===!0&&!_g&&(Dr=ka(f),tn.killTweensOf(C),Dr=0),ma(T,ka(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(_||!h&&!E&&f._start===yn(T._time)&&li(_)&&QU(ka(f))&&T.data!=="nested")&&(f._tTime=-Kt,f.render(Math.max(0,-m)||0)),S&&JS(ka(f),S),f}var t=e.prototype;return t.render=function(s,l,c){var f=this._time,p=this._tDur,h=this._dur,m=s<0,_=s>p-Kt&&!m?p:s<Kt?0:s,v,y,E,M,S,x,T,C,b;if(!h)ZU(this,s,l,c);else if(_!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=_,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+s,l,c);if(v=yn(_%M),_===p?(E=this._repeat,v=h):(S=yn(_/M),E=~~S,E&&E===S?(v=h,E--):v>h&&(v=h)),x=this._yoyo&&E&1,x&&(b=this._yEase,v=h-v),S=qo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=_,this;E!==S&&(C&&this._yEase&&dM(C,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(yn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if($S(this,m?s:v,c,l,_))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(s,l,c)}if(this._tTime=_,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(b||this._ease)(v/h),this._from&&(this.ratio=T=1-T),!f&&_&&!l&&!S&&(Ti(this,"onStart"),this._tTime!==_))return this;for(y=this._pt;y;)y.r(T,y.d),y=y._next;C&&C.render(s<0?s:C._dur*C._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(m&&km(this,s,l,c),Ti(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Ti(this,"onRepeat"),(_===this._tDur||!_)&&this._tTime===_&&(m&&!this._onUpdate&&km(this,s,!0,!0),(s||!h)&&(_===this._tDur&&this._ts>0||!_&&this._ts<0)&&zr(this,1),!l&&!(m&&!f)&&(_||f||x)&&(Ti(this,_===p?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,l,c,f,p){gu||Ai.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||Rg(this,h),m=this._ease(h/this._dur),g3(this,s,l,c,f,m,h,p)?this.resetTo(s,l,c,f,1):(Xf(this,0),this.parent||jS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?au(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Dr&&Dr.vars.overwrite!==!0)._first||au(this),this.parent&&c!==this.timeline.totalDuration()&&Ko(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Vi(s):f,h=this._ptLookup,m=this._pt,_,v,y,E,M,S,x;if((!l||l==="all")&&qU(f,p))return l==="all"&&(this._pt=0),au(this);for(_=this._op=this._op||[],l!=="all"&&(Pn(l)&&(M={},ui(l,function(T){return M[T]=1}),l=M),l=_3(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=h[x],l==="all"?(_[x]=l,E=v,y={}):(y=_[x]=_[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Vf(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&m&&au(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return ou(1,arguments)},e.delayedCall=function(s,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(s,l,c){return ou(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,c){return tn.killTweensOf(s,l,c)},e})(_u);Di(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(r){xn[r]=function(){var e=new ti,t=Wm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Cg=function(e,t,i){return e[t]=i},xM=function(e,t,i){return e[t](i)},x3=function(e,t,i,s){return e[t](s.fp,i)},y3=function(e,t,i){return e.setAttribute(t,i)},wg=function(e,t){return un(e[t])?xM:vg(e[t])&&e.setAttribute?y3:Cg},yM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},S3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},SM=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Dg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},M3=function(e,t,i,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(e,t,i),l=c},E3=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Vf(this,t,"_pt"):t.dep||(i=1),t=s;return!i},A3=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},MM=function(e){for(var t=e._pt,i,s,l,c;t;){for(i=t._next,s=l;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:l=t,(t._next=s)?s._prev=t:c=t,t=i}e._pt=l},ci=(function(){function r(t,i,s,l,c,f,p,h,m){this.t=i,this.s=l,this.c=c,this.p=s,this.r=f||yM,this.d=p||this,this.set=h||Cg,this.pr=m||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=A3,this.m=i,this.mt=l,this.tween=s},r})();ui(Eg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Mg[r]=1});wi.TweenMax=wi.TweenLite=xn;wi.TimelineLite=wi.TimelineMax=ti;tn=new ti({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=fM;var Ds=[],Tf={},T3=[],Dy=0,b3=0,Gp=function(e){return(Tf[e]||T3).map(function(t){return t()})},Qm=function(){var e=Date.now(),t=[];e-Dy>2&&(Gp("matchMediaInit"),Ds.forEach(function(i){var s=i.queries,l=i.conditions,c,f,p,h;for(f in s)c=ha.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,h=1);h&&(i.revert(),p&&t.push(i))}),Gp("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),Dy=e,Gp("matchMedia"))},EM=(function(){function r(t,i){this.selector=i&&Ym(i),this.data=[],this._r=[],this.isReverted=!1,this.id=b3++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,s,l){un(i)&&(l=s,s=i,i=un);var c=this,f=function(){var h=$t,m=c.selector,_;return h&&h!==c&&h.data.push(c),l&&(c.selector=Ym(l)),$t=c,_=s.apply(c,arguments),un(_)&&c._r.push(_),$t=h,c.selector=m,c.isReverted=!1,_};return c.last=f,i===un?f(c,function(p){return c.add(null,p)}):i?c[i]=f:f},e.ignore=function(i){var s=$t;$t=null,i(this),$t=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof r?i.push.apply(i,s.getTweens()):s instanceof xn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var l=this;if(i?(function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,_){return _.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),p=l.data.length;p--;)h=l.data[p],h instanceof ti?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof xn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ds.length;c--;)Ds[c].id===this.id&&Ds.splice(c,1)},e.revert=function(i){this.kill(i||{})},r})(),R3=(function(){function r(t){this.contexts=[],this.scope=t,$t&&$t.data.push(this)}var e=r.prototype;return e.add=function(i,s,l){ya(i)||(i={matches:i});var c=new EM(0,l||this.scope),f=c.conditions={},p,h,m;$t&&!c.selector&&(c.selector=$t.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(h in i)h==="all"?m=1:(p=ha.matchMedia(i[h]),p&&(Ds.indexOf(c)<0&&Ds.push(c),(f[h]=p.matches)&&(m=1),p.addListener?p.addListener(Qm):p.addEventListener("change",Qm)));return m&&s(c,function(_){return c.add(null,_)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},r})(),Of={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return lM(s)})},timeline:function(e){return new ti(e)},getTweensOf:function(e,t){return tn.getTweensOf(e,t)},getProperty:function(e,t,i,s){Pn(e)&&(e=Vi(e)[0]);var l=Rs(e||{}).get,c=i?QS:KS;return i==="native"&&(i=""),e&&(t?c((Mi[t]&&Mi[t].get||l)(e,t,i,s)):function(f,p,h){return c((Mi[f]&&Mi[f].get||l)(e,f,p,h))})},quickSetter:function(e,t,i){if(e=Vi(e),e.length>1){var s=e.map(function(m){return hi.quickSetter(m,t,i)}),l=s.length;return function(m){for(var _=l;_--;)s[_](m)}}e=e[0]||{};var c=Mi[t],f=Rs(e),p=f.harness&&(f.harness.aliases||{})[t]||t,h=c?function(m){var _=new c;No._pt=0,_.init(e,i?m+i:m,No,0,[e]),_.render(1,_),No._pt&&Dg(1,No)}:f.set(e,p);return c?h:function(m){return h(e,p,i?m+i:m,f,1)}},quickTo:function(e,t,i){var s,l=hi.to(e,Di((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(p,h,m){return l.resetTo(t,p,h,m)};return c.tween=l,c},isTweening:function(e){return tn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ws(e.ease,Wo.ease)),Ty(Wo,e||{})},config:function(e){return Ty(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,l=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Mi[f]&&!wi[f]&&du(t+" effect requires "+f+" plugin.")}),Bp[t]=function(f,p,h){return i(Vi(f),Di(p||{},l),h)},c&&(ti.prototype[t]=function(f,p,h){return this.add(Bp[t](f,ya(p)?p:(h=p)&&{},this),h)})},registerEase:function(e,t){Tt[e]=ws(t)},parseEase:function(e,t){return arguments.length?ws(e,t):Tt},getById:function(e){return tn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ti(e),s,l;for(i.smoothChildTiming=li(e.smoothChildTiming),tn.remove(i),i._dp=0,i._time=i._tTime=tn._time,s=tn._first;s;)l=s._next,(t||!(!s._dur&&s instanceof xn&&s.vars.onComplete===s._targets[0]))&&ma(i,s,s._start-s._delay),s=l;return ma(tn,i,0),i},context:function(e,t){return e?new EM(e,t):$t},matchMedia:function(e){return new R3(e)},matchMediaRefresh:function(){return Ds.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||Qm()},addEventListener:function(e,t){var i=Tf[e]||(Tf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Tf[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:r3,wrapYoyo:s3,distribute:nM,random:aM,snap:iM,normalize:a3,getUnit:Kn,clamp:e3,splitColor:uM,toArray:Vi,selector:Ym,mapRange:sM,pipe:n3,unitize:i3,interpolate:o3,shuffle:tM},install:kS,effects:Bp,ticker:Ai,updateRoot:ti.updateRoot,plugins:Mi,globalTimeline:tn,core:{PropTween:ci,globals:XS,Tween:xn,Timeline:ti,Animation:_u,getCache:Rs,_removeLinkedListItem:Vf,reverting:function(){return Gn},context:function(e){return e&&$t&&($t.data.push(e),e._ctx=$t),$t},suppressOverwrites:function(e){return _g=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Of[r]=xn[r]});Ai.add(ti.updateRoot);No=Of.to({},{duration:0});var C3=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},w3=function(e,t){var i=e._targets,s,l,c;for(s in t)for(l=i.length;l--;)c=e._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=C3(c,s)),c&&c.modifier&&c.modifier(t[s],e,i[l],s))},Vp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,h;if(Pn(l)&&(p={},ui(l,function(m){return p[m]=1}),l=p),t){p={};for(h in l)p[h]=t(l[h]);l=p}w3(f,l)}}}},hi=Of.registerPlugin({name:"attr",init:function(e,t,i,s,l){var c,f,p;this.tween=i;for(c in t)p=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(p||0)+"",t[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)Gn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Vp("roundProps",qm),Vp("modifiers"),Vp("snap",iM))||Of;xn.version=ti.version=hi.version="3.13.0";VS=1;xg()&&Qo();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Uy,Ur,Bo,Ug,As,Ly,Lg,D3=function(){return typeof window<"u"},Ja={},vs=180/Math.PI,Fo=Math.PI/180,Do=Math.atan2,Ny=1e8,Ng=/([A-Z])/g,U3=/(left|right|width|margin|padding|x)/i,L3=/[\s,\(]\S/,_a={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},N3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},AM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},TM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},I3=function(e,t,i){return e.style[t]=i},B3=function(e,t,i){return e.style.setProperty(t,i)},F3=function(e,t,i){return e._gsap[t]=i},z3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},H3=function(e,t,i,s,l){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},G3=function(e,t,i,s,l){var c=e._gsap;c[t]=i,c.renderTransform(l,c)},nn="transform",fi=nn+"Origin",V3=function r(e,t){var i=this,s=this.target,l=s.style,c=s._gsap;if(e in Ja&&l){if(this.tfm=this.tfm||{},e!=="transform")e=_a[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=Xa(s,f)}):this.tfm[e]=c.x?c[e]:Xa(s,e),e===fi&&(this.tfm.zOrigin=c.zOrigin);else return _a.transform.split(",").forEach(function(f){return r.call(i,f,t)});if(this.props.indexOf(nn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(fi,t,"")),e=nn}(l||t)&&this.props.push(e,t,l[e])},bM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},k3=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Ng,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=Lg(),(!l||!l.isStart)&&!i[nn]&&(bM(i),s.zOrigin&&i[fi]&&(i[fi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},RM=function(e,t){var i={target:e,props:[],revert:k3,save:V3};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},CM,Zm=function(e,t){var i=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return i&&i.style?i:Ur.createElement(e)},ki=function r(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Ng,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&r(e,jo(t)||t,1)||""},Oy="O,Moz,ms,Ms,Webkit".split(","),jo=function(e,t,i){var s=t||As,l=s.style,c=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(Oy[c]+e in l););return c<0?null:(c===3?"ms":c>=0?Oy[c]:"")+e},Jm=function(){D3()&&window.document&&(Uy=window,Ur=Uy.document,Bo=Ur.documentElement,As=Zm("div")||{style:{}},Zm("div"),nn=jo(nn),fi=nn+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",CM=!!jo("perspective"),Lg=hi.core.reverting,Ug=1)},Py=function(e){var t=e.ownerSVGElement,i=Zm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",i.appendChild(s),Bo.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),Bo.removeChild(i),l},Iy=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},wM=function(e){var t,i;try{t=e.getBBox()}catch{t=Py(e),i=1}return t&&(t.width||t.height)||i||(t=Py(e)),t&&!t.width&&!t.x&&!t.y?{x:+Iy(e,["x","cx","x1"])||0,y:+Iy(e,["y","cy","y1"])||0,width:0,height:0}:t},DM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wM(e))},Us=function(e,t){if(t){var i=e.style,s;t in Ja&&t!==fi&&(t=nn),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Ng,"-$1").toLowerCase())):i.removeAttribute(t)}},Lr=function(e,t,i,s,l,c){var f=new ci(e._pt,t,i,0,1,c?TM:AM);return e._pt=f,f.b=s,f.e=l,e._props.push(i),f},By={deg:1,rad:1,turn:1},X3={grid:1,flex:1},Hr=function r(e,t,i,s){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=As.style,p=U3.test(t),h=e.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),_=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||By[s]||By[c])return l;if(c!=="px"&&!v&&(l=r(e,t,i,"px")),x=e.getCTM&&DM(e),(y||c==="%")&&(Ja[t]||~t.indexOf("adius")))return E=x?e.getBBox()[p?"width":"height"]:e[m],hn(y?l/E*_:l/100*E);if(f[p?"width":"height"]=_+(v?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Ur||!M.appendChild)&&(M=Ur.body),S=M._gsap,S&&y&&S.width&&p&&S.time===Ai.time&&!S.uncache)return hn(l/S.width*_);if(y&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=_+s,E=e[m],T?e.style[t]=T:Us(e,t)}else(y||c==="%")&&!X3[ki(M,"display")]&&(f.position=ki(e,"position")),M===e&&(f.position="static"),M.appendChild(As),E=As[m],M.removeChild(As),f.position="absolute";return p&&y&&(S=Rs(M),S.time=Ai.time,S.width=M[m]),hn(v?E*l/_:E&&l?_/E*l:0)},Xa=function(e,t,i,s){var l;return Ug||Jm(),t in _a&&t!=="transform"&&(t=_a[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ja[t]&&t!=="transform"?(l=xu(e,s),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:If(ki(e,fi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Pf[t]&&Pf[t](e,t,i)||ki(e,t)||YS(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?Hr(e,t,l,i)+i:l},W3=function(e,t,i,s){if(!i||i==="none"){var l=jo(t,e,1),c=l&&ki(e,l,1);c&&c!==i?(t=l,i=c):t==="borderColor"&&(i=ki(e,"borderTopColor"))}var f=new ci(this._pt,e.style,t,0,1,SM),p=0,h=0,m,_,v,y,E,M,S,x,T,C,b,L;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=ki(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=ki(e,t)||s,M?e.style[t]=M:Us(e,t)),m=[i,s],fM(m),i=m[0],s=m[1],v=i.match(Lo)||[],L=s.match(Lo)||[],L.length){for(;_=Lo.exec(s);)S=_[0],T=s.substring(p,_.index),E?E=(E+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(E=1),S!==(M=v[h++]||"")&&(y=parseFloat(M)||0,b=M.substr((y+"").length),S.charAt(1)==="="&&(S=Io(y,S)+b),x=parseFloat(S),C=S.substr((x+"").length),p=Lo.lastIndex-C.length,C||(C=C||Ri.units[t]||b,p===s.length&&(s+=C,f.e+=C)),b!==C&&(y=Hr(e,t,M,C)||0),f._pt={_next:f._pt,p:T||h===1?T:",",s:y,c:x-y,m:E&&E<4||t==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=t==="display"&&s==="none"?TM:AM;return HS.test(s)&&(f.e=0),this._pt=f,f},Fy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Y3=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=Fy[i]||i,t[1]=Fy[s]||s,t.join(" ")},q3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,l=t.u,c=i._gsap,f,p,h;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],Ja[f]&&(p=1,f=f==="transformOrigin"?fi:nn),Us(i,f);p&&(Us(i,nn),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",xu(i,1),c.uncache=1,bM(s)))}},Pf={clearProps:function(e,t,i,s,l){if(l.data!=="isFromStart"){var c=e._pt=new ci(e._pt,t,i,0,0,q3);return c.u=s,c.pr=-10,c.tween=l,e._props.push(i),1}}},vu=[1,0,0,1,0,0],UM={},LM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zy=function(e){var t=ki(e,nn);return LM(t)?vu:t.substr(7).match(zS).map(hn)},Og=function(e,t){var i=e._gsap||Rs(e),s=e.style,l=zy(e),c,f,p,h;return i.svg&&e.getAttribute("transform")?(p=e.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?vu:l):(l===vu&&!e.offsetParent&&e!==Bo&&!i.svg&&(p=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,f=e.nextElementSibling,Bo.appendChild(e)),l=zy(e),p?s.display=p:Us(e,"display"),h&&(f?c.insertBefore(e,f):c?c.appendChild(e):Bo.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},$m=function(e,t,i,s,l,c){var f=e._gsap,p=l||Og(e,!0),h=f.xOrigin||0,m=f.yOrigin||0,_=f.xOffset||0,v=f.yOffset||0,y=p[0],E=p[1],M=p[2],S=p[3],x=p[4],T=p[5],C=t.split(" "),b=parseFloat(C[0])||0,L=parseFloat(C[1])||0,P,I,H,R;i?p!==vu&&(I=y*S-E*M)&&(H=b*(S/I)+L*(-M/I)+(M*T-S*x)/I,R=b*(-E/I)+L*(y/I)-(y*T-E*x)/I,b=H,L=R):(P=wM(e),b=P.x+(~C[0].indexOf("%")?b/100*P.width:b),L=P.y+(~(C[1]||C[0]).indexOf("%")?L/100*P.height:L)),s||s!==!1&&f.smooth?(x=b-h,T=L-m,f.xOffset=_+(x*y+T*M)-x,f.yOffset=v+(x*E+T*S)-T):f.xOffset=f.yOffset=0,f.xOrigin=b,f.yOrigin=L,f.smooth=!!s,f.origin=t,f.originIsAbsolute=!!i,e.style[fi]="0px 0px",c&&(Lr(c,f,"xOrigin",h,b),Lr(c,f,"yOrigin",m,L),Lr(c,f,"xOffset",_,f.xOffset),Lr(c,f,"yOffset",v,f.yOffset)),e.setAttribute("data-svg-origin",b+" "+L)},xu=function(e,t){var i=e._gsap||new mM(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,l=i.scaleX<0,c="px",f="deg",p=getComputedStyle(e),h=ki(e,fi)||"0",m,_,v,y,E,M,S,x,T,C,b,L,P,I,H,R,U,B,X,j,re,ee,z,Y,k,_e,O,Z,pe,Se,be,Be;return m=_=v=M=S=x=T=C=b=0,y=E=1,i.svg=!!(e.getCTM&&DM(e)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[nn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[nn]!=="none"?p[nn]:"")),s.scale=s.rotate=s.translate="none"),I=Og(e,i.svg),i.svg&&(i.uncache?(k=e.getBBox(),h=i.xOrigin-k.x+"px "+(i.yOrigin-k.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),$m(e,Y||h,!!Y||i.originIsAbsolute,i.smooth!==!1,I)),L=i.xOrigin||0,P=i.yOrigin||0,I!==vu&&(B=I[0],X=I[1],j=I[2],re=I[3],m=ee=I[4],_=z=I[5],I.length===6?(y=Math.sqrt(B*B+X*X),E=Math.sqrt(re*re+j*j),M=B||X?Do(X,B)*vs:0,T=j||re?Do(j,re)*vs+M:0,T&&(E*=Math.abs(Math.cos(T*Fo))),i.svg&&(m-=L-(L*B+P*j),_-=P-(L*X+P*re))):(Be=I[6],Se=I[7],O=I[8],Z=I[9],pe=I[10],be=I[11],m=I[12],_=I[13],v=I[14],H=Do(Be,pe),S=H*vs,H&&(R=Math.cos(-H),U=Math.sin(-H),Y=ee*R+O*U,k=z*R+Z*U,_e=Be*R+pe*U,O=ee*-U+O*R,Z=z*-U+Z*R,pe=Be*-U+pe*R,be=Se*-U+be*R,ee=Y,z=k,Be=_e),H=Do(-j,pe),x=H*vs,H&&(R=Math.cos(-H),U=Math.sin(-H),Y=B*R-O*U,k=X*R-Z*U,_e=j*R-pe*U,be=re*U+be*R,B=Y,X=k,j=_e),H=Do(X,B),M=H*vs,H&&(R=Math.cos(H),U=Math.sin(H),Y=B*R+X*U,k=ee*R+z*U,X=X*R-B*U,z=z*R-ee*U,B=Y,ee=k),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=hn(Math.sqrt(B*B+X*X+j*j)),E=hn(Math.sqrt(z*z+Be*Be)),H=Do(ee,z),T=Math.abs(H)>2e-4?H*vs:0,b=be?1/(be<0?-be:be):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!LM(ki(e,nn)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(l?(y*=-1,T+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=m-((i.xPercent=m&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-m)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=_-((i.yPercent=_&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-_)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=v+c,i.scaleX=hn(y),i.scaleY=hn(E),i.rotation=hn(M)+f,i.rotationX=hn(S)+f,i.rotationY=hn(x)+f,i.skewX=T+f,i.skewY=C+f,i.transformPerspective=b+c,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[fi]=If(h)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?Q3:CM?NM:K3,i.uncache=0,i},If=function(e){return(e=e.split(" "))[0]+" "+e[1]},kp=function(e,t,i){var s=Kn(t);return hn(parseFloat(t)+parseFloat(Hr(e,"x",i+"px",s)))+s},K3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,NM(e,t)},ps="0deg",nu="0px",ms=") ",NM=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.z,h=i.rotation,m=i.rotationY,_=i.rotationX,v=i.skewX,y=i.skewY,E=i.scaleX,M=i.scaleY,S=i.transformPerspective,x=i.force3D,T=i.target,C=i.zOrigin,b="",L=x==="auto"&&e&&e!==1||x===!0;if(C&&(_!==ps||m!==ps)){var P=parseFloat(m)*Fo,I=Math.sin(P),H=Math.cos(P),R;P=parseFloat(_)*Fo,R=Math.cos(P),c=kp(T,c,I*R*-C),f=kp(T,f,-Math.sin(P)*-C),p=kp(T,p,H*R*-C+C)}S!==nu&&(b+="perspective("+S+ms),(s||l)&&(b+="translate("+s+"%, "+l+"%) "),(L||c!==nu||f!==nu||p!==nu)&&(b+=p!==nu||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ms),h!==ps&&(b+="rotate("+h+ms),m!==ps&&(b+="rotateY("+m+ms),_!==ps&&(b+="rotateX("+_+ms),(v!==ps||y!==ps)&&(b+="skew("+v+", "+y+ms),(E!==1||M!==1)&&(b+="scale("+E+", "+M+ms),T.style[nn]=b||"translate(0, 0)"},Q3=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,p=i.rotation,h=i.skewX,m=i.skewY,_=i.scaleX,v=i.scaleY,y=i.target,E=i.xOrigin,M=i.yOrigin,S=i.xOffset,x=i.yOffset,T=i.forceCSS,C=parseFloat(c),b=parseFloat(f),L,P,I,H,R;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=Fo,h*=Fo,L=Math.cos(p)*_,P=Math.sin(p)*_,I=Math.sin(p-h)*-v,H=Math.cos(p-h)*v,h&&(m*=Fo,R=Math.tan(h-m),R=Math.sqrt(1+R*R),I*=R,H*=R,m&&(R=Math.tan(m),R=Math.sqrt(1+R*R),L*=R,P*=R)),L=hn(L),P=hn(P),I=hn(I),H=hn(H)):(L=_,H=v,P=I=0),(C&&!~(c+"").indexOf("px")||b&&!~(f+"").indexOf("px"))&&(C=Hr(y,"x",c,"px"),b=Hr(y,"y",f,"px")),(E||M||S||x)&&(C=hn(C+E-(E*L+M*I)+S),b=hn(b+M-(E*P+M*H)+x)),(s||l)&&(R=y.getBBox(),C=hn(C+s/100*R.width),b=hn(b+l/100*R.height)),R="matrix("+L+","+P+","+I+","+H+","+C+","+b+")",y.setAttribute("transform",R),T&&(y.style[nn]=R)},j3=function(e,t,i,s,l){var c=360,f=Pn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?vs:1),h=p-s,m=s+h+"deg",_,v;return f&&(_=l.split("_")[1],_==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),_==="cw"&&h<0?h=(h+c*Ny)%c-~~(h/c)*c:_==="ccw"&&h>0&&(h=(h-c*Ny)%c-~~(h/c)*c)),e._pt=v=new ci(e._pt,t,i,s,h,N3),v.e=m,v.u="deg",e._props.push(i),v},Hy=function(e,t){for(var i in t)e[i]=t[i];return e},Z3=function(e,t,i){var s=Hy({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,p,h,m,_,v,y,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),c[nn]=t,f=xu(i,1),Us(i,nn),i.setAttribute("transform",h)):(h=getComputedStyle(i)[nn],c[nn]=t,f=xu(i,1),c[nn]=h);for(p in Ja)h=s[p],m=f[p],h!==m&&l.indexOf(p)<0&&(y=Kn(h),E=Kn(m),_=y!==E?Hr(i,p,h,E):parseFloat(h),v=parseFloat(m),e._pt=new ci(e._pt,f,p,_,v-_,jm),e._pt.u=E||0,e._props.push(p));Hy(f,s)};ui("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",s="Bottom",l="Left",c=(e<3?[t,i,s,l]:[t+l,t+i,s+i,s+l]).map(function(f){return e<2?r+f:"border"+f+r});Pf[e>1?"border"+r:r]=function(f,p,h,m,_){var v,y;if(arguments.length<4)return v=c.map(function(E){return Xa(f,E,h)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(m+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,y,_)}});var OM={name:"css",register:Jm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,l){var c=this._props,f=e.style,p=i.vars.startAt,h,m,_,v,y,E,M,S,x,T,C,b,L,P,I,H;Ug||Jm(),this.styles=this.styles||RM(e),H=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(m=t[M],!(Mi[M]&&gM(M,t,i,s,e,l)))){if(y=typeof m,E=Pf[M],y==="function"&&(m=m.call(i,s,e,l),y=typeof m),y==="string"&&~m.indexOf("random(")&&(m=mu(m)),E)E(this,e,M,m,i)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),m+="",Pr.lastIndex=0,Pr.test(h)||(S=Kn(h),x=Kn(m)),x?S!==x&&(h=Hr(e,M,h,x)+x):S&&(m+=S),this.add(f,"setProperty",h,m,s,l,0,0,M),c.push(M),H.push(M,0,f[M]);else if(y!=="undefined"){if(p&&M in p?(h=typeof p[M]=="function"?p[M].call(i,s,e,l):p[M],Pn(h)&&~h.indexOf("random(")&&(h=mu(h)),Kn(h+"")||h==="auto"||(h+=Ri.units[M]||Kn(Xa(e,M))||""),(h+"").charAt(1)==="="&&(h=Xa(e,M))):h=Xa(e,M),v=parseFloat(h),T=y==="string"&&m.charAt(1)==="="&&m.substr(0,2),T&&(m=m.substr(2)),_=parseFloat(m),M in _a&&(M==="autoAlpha"&&(v===1&&Xa(e,"visibility")==="hidden"&&_&&(v=0),H.push("visibility",0,f.visibility),Lr(this,f,"visibility",v?"inherit":"hidden",_?"inherit":"hidden",!_)),M!=="scale"&&M!=="transform"&&(M=_a[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in Ja,C){if(this.styles.save(M),y==="string"&&m.substring(0,6)==="var(--"&&(m=ki(e,m.substring(4,m.indexOf(")"))),_=parseFloat(m)),b||(L=e._gsap,L.renderTransform&&!t.parseTransform||xu(e,t.parseTransform),P=t.smoothOrigin!==!1&&L.smooth,b=this._pt=new ci(this._pt,f,nn,0,1,L.renderTransform,L,0,-1),b.dep=1),M==="scale")this._pt=new ci(this._pt,L,"scaleY",L.scaleY,(T?Io(L.scaleY,T+_):_)-L.scaleY||0,jm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){H.push(fi,0,f[fi]),m=Y3(m),L.svg?$m(e,m,0,P,0,this):(x=parseFloat(m.split(" ")[2])||0,x!==L.zOrigin&&Lr(this,L,"zOrigin",L.zOrigin,x),Lr(this,f,M,If(h),If(m)));continue}else if(M==="svgOrigin"){$m(e,m,1,P,0,this);continue}else if(M in UM){j3(this,L,M,v,T?Io(v,T+m):m);continue}else if(M==="smoothOrigin"){Lr(this,L,"smooth",L.smooth,m);continue}else if(M==="force3D"){L[M]=m;continue}else if(M==="transform"){Z3(this,m,e);continue}}else M in f||(M=jo(M)||M);if(C||(_||_===0)&&(v||v===0)&&!L3.test(m)&&M in f)S=(h+"").substr((v+"").length),_||(_=0),x=Kn(m)||(M in Ri.units?Ri.units[M]:S),S!==x&&(v=Hr(e,M,h,x)),this._pt=new ci(this._pt,C?L:f,M,v,(T?Io(v,T+_):_)-v,!C&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?P3:jm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=O3);else if(M in f)W3.call(this,e,M,h,T?T+m:m);else if(M in e)this.add(e,M,h||e[M],T?T+m:m,s,l);else if(M!=="parseTransform"){Sg(M,m);continue}C||(M in f?H.push(M,0,f[M]):typeof e[M]=="function"?H.push(M,2,e[M]()):H.push(M,1,h||e[M])),c.push(M)}}I&&MM(this)},render:function(e,t){if(t.tween._time||!Lg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Xa,aliases:_a,getSetter:function(e,t,i){var s=_a[t];return s&&s.indexOf(",")<0&&(t=s),t in Ja&&t!==fi&&(e._gsap.x||Xa(e,"x"))?i&&Ly===i?t==="scale"?z3:F3:(Ly=i||{})&&(t==="scale"?H3:G3):e.style&&!vg(e.style[t])?I3:~t.indexOf("-")?B3:wg(e,t)},core:{_removeProperty:Us,_getMatrix:Og}};hi.utils.checkPrefix=jo;hi.core.getStyleSaver=RM;(function(r,e,t,i){var s=ui(r+","+e+","+t,function(l){Ja[l]=1});ui(e,function(l){Ri.units[l]="deg",UM[l]=1}),_a[s[13]]=r+","+e,ui(i,function(l){var c=l.split(":");_a[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ri.units[r]="px"});hi.registerPlugin(OM);var xs=hi.registerPlugin(OM)||hi;xs.core.Tween;function J3({isOpen:r,onClose:e,image:t}){return oe.useEffect(()=>{const i=s=>{s.key==="Escape"&&e()};return r&&(document.addEventListener("keydown",i),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",i),document.body.style.overflow="unset"}},[r,e]),!r||!t?null:De.jsx("div",{className:"modal-overlay",onClick:e,children:De.jsx("div",{className:"modal-content",onClick:i=>i.stopPropagation(),children:De.jsxs("div",{className:"modal-image-container",children:[De.jsx("img",{src:t.img,alt:t.title||"Image",className:"modal-image"}),De.jsxs("div",{className:"image-caption",children:[De.jsx("h3",{className:"caption-title",children:t.title||"Untitled"}),De.jsx("p",{className:"caption-description",children:t.description||"No description available."})]})]})})})}const $3=(r,e,t)=>{const i=()=>e[r.findIndex(c=>matchMedia(c).matches)]??t,[s,l]=oe.useState(i);return oe.useEffect(()=>{const c=()=>l(i);return r.forEach(f=>matchMedia(f).addEventListener("change",c)),()=>r.forEach(f=>matchMedia(f).removeEventListener("change",c))},[r]),s},eL=()=>{const r=oe.useRef(null),[e,t]=oe.useState({width:0,height:0});return oe.useLayoutEffect(()=>{if(!r.current)return;const i=new ResizeObserver(([s])=>{const{width:l,height:c}=s.contentRect;t({width:l,height:c})});return i.observe(r.current),()=>i.disconnect()},[]),[r,e]},tL=async r=>{await Promise.all(r.map(e=>new Promise(t=>{const i=new Image;i.src=e,i.onload=i.onerror=()=>t()})))},nL=({items:r,ease:e="power3.out",duration:t=.6,stagger:i=.05,animateFrom:s="bottom",scaleOnHover:l=!0,hoverScale:c=.95,blurToFocus:f=!0,colorShiftOnHover:p=!1,gap:h=10})=>{const m=$3(["(min-width:1500px)","(min-width:1000px)","(min-width:600px)","(min-width:400px)"],[5,4,3,2],1),[_,{width:v}]=eL(),[y,E]=oe.useState(!1),[M,S]=oe.useState(null),[x,T]=oe.useState(!1),C=B=>{const X=_.current?.getBoundingClientRect();if(!X)return{x:B.x,y:B.y};let j=s;if(s==="random"){const re=["top","bottom","left","right"];j=re[Math.floor(Math.random()*re.length)]}switch(j){case"top":return{x:B.x,y:-200};case"bottom":return{x:B.x,y:window.innerHeight+200};case"left":return{x:-200,y:B.y};case"right":return{x:window.innerWidth+200,y:B.y};case"center":return{x:X.width/2-B.w/2,y:X.height/2-B.h/2};default:return{x:B.x,y:B.y+100}}};oe.useEffect(()=>{tL(r.map(B=>B.img)).then(()=>E(!0))},[r]);const b=oe.useMemo(()=>{if(!v)return[];const B=new Array(m).fill(0),X=(v-(m-1)*h)/m;return r.map(j=>{const re=B.indexOf(Math.min(...B)),ee=X*re+h*re,z=j.height/2,Y=B[re]+(B[re]>0?h:0);return B[re]=Y+z,{...j,x:ee,y:Y,w:X,h:z}})},[m,r,v,h]),L=oe.useMemo(()=>{if(b.length===0)return"auto";const B=new Array(m).fill(0);b.forEach(j=>{const re=Math.floor(j.x/(j.w+h));B[re]=Math.max(B[re],j.y+j.h)});const X=Math.max(...B);return X>0?X:"auto"},[b,m,h]),P=oe.useRef(!1);oe.useLayoutEffect(()=>{y&&(b.forEach((B,X)=>{const j=`[data-key="${B.id}"]`,re={x:B.x,y:B.y,width:B.w,height:B.h};if(P.current)xs.to(j,{...re,duration:t,ease:e,overwrite:"auto"});else{const ee=C(B),z={opacity:0,x:ee.x,y:ee.y,width:B.w,height:B.h,...f&&{filter:"blur(10px)"}};xs.fromTo(j,z,{opacity:1,...re,...f&&{filter:"blur(0px)"},duration:.8,ease:"power3.out",delay:X*i})}}),P.current=!0)},[b,y,i,s,f,t,e]);const I=(B,X)=>{const j=B.currentTarget,re=`[data-key="${X.id}"]`;if(l&&xs.to(re,{scale:c,duration:.3,ease:"power2.out"}),p){const ee=j.querySelector(".color-overlay");ee&&xs.to(ee,{opacity:.3,duration:.3})}},H=(B,X)=>{const j=B.currentTarget,re=`[data-key="${X.id}"]`;if(l&&xs.to(re,{scale:1,duration:.3,ease:"power2.out"}),p){const ee=j.querySelector(".color-overlay");ee&&xs.to(ee,{opacity:0,duration:.3})}},R=B=>{S(B),T(!0)},U=()=>{T(!1),S(null)};return De.jsxs(De.Fragment,{children:[De.jsx("div",{ref:_,className:"list",style:{height:L},children:b.map(B=>De.jsx("div",{"data-key":B.id,className:"item-wrapper",onClick:()=>R(B),onMouseEnter:X=>I(X,B),onMouseLeave:X=>H(X,B),children:De.jsx("div",{className:"item-img",style:{backgroundImage:`url(${B.img})`},children:p&&De.jsx("div",{className:"color-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",opacity:0,pointerEvents:"none",borderRadius:"8px"}})})},B.id))}),De.jsx(J3,{isOpen:x,onClose:U,image:M})]})};function iL(){const r=[{id:"1",img:"https://picsum.photos/id/1015/600/900?grayscale",title:"山景",description:"黑白山脉风景，光影对比强烈",height:400},{id:"2",img:"https://picsum.photos/id/1011/600/750?grayscale",title:"森林小径",description:"幽静的森林小路，充满神秘感",height:250}];return De.jsx("div",{className:"painting-screen-container",children:De.jsx(nL,{items:r,ease:"power4.out",duration:.6,stagger:.1,animateFrom:"center",scaleOnHover:!0,hoverScale:.95,blurToFocus:!0,colorShiftOnHover:!1})})}function aL(){return De.jsx("div",{className:"music-screen-container",children:De.jsx("h2",{children:"Music Screen"})})}function rL({activeScreen:r}){const t={chat:Ey,profile:IU,gamedev:BU,painting:iL,music:aL}[r]||Ey;return De.jsxs("div",{className:"screen-container",children:[De.jsx(Fr,{className:"screen-window",src:wU}),De.jsx("div",{className:"screen-content",children:De.jsx(t,{})})]})}function sL(){const[r,e]=oe.useState("chat");return De.jsxs("div",{className:"content-container",children:[De.jsx("title",{children:"楽園"}),De.jsxs("div",{className:"content",children:[De.jsxs("div",{className:"sidebar-stack",children:[De.jsx(CU,{}),De.jsx(TU,{activeScreen:r,setActiveScreen:e})]}),De.jsx("div",{className:"screen-stack",children:De.jsx(rL,{activeScreen:r})}),De.jsx("div",{children:De.jsx(EU,{interactive:!0})})]})]})}function oL(){return De.jsx(De.Fragment,{children:De.jsxs(FT,{children:[De.jsx(Wp,{path:"/",element:De.jsx(sL,{})}),De.jsx(Wp,{path:"test",element:De.jsx(De.Fragment,{children:"test"})})]})})}qA.createRoot(document.getElementById("root")).render(De.jsx(oe.StrictMode,{children:De.jsx(ob,{children:De.jsx(oL,{})})}));
