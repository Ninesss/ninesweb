(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var eh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function HS(){if(bv)return No;bv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:u}}return No.Fragment=e,No.jsx=i,No.jsxs=i,No}var Rv;function GS(){return Rv||(Rv=1,eh.exports=HS()),eh.exports}var nt=GS(),th={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function VS(){if(Cv)return ft;Cv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function S(w,K,_e){this.props=w,this.context=K,this.refs=b,this.updater=_e||y}S.prototype.isReactComponent={},S.prototype.setState=function(w,K){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,K,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(w,K,_e){this.props=w,this.context=K,this.refs=b,this.updater=_e||y}var N=L.prototype=new _;N.constructor=L,M(N,S.prototype),N.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function H(w,K,_e,ye,we,Ge){return _e=Ge.ref,{$$typeof:a,type:w,key:K,ref:_e!==void 0?_e:null,props:Ge}}function j(w,K){return H(w.type,K,void 0,void 0,void 0,w.props)}function D(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function C(w){var K={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(_e){return K[_e]})}var V=/\/+/g;function J(w,K){return typeof w=="object"&&w!==null&&w.key!=null?C(""+w.key):K.toString(36)}function ue(){}function me(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ue,ue):(w.status="pending",w.then(function(K){w.status==="pending"&&(w.status="fulfilled",w.value=K)},function(K){w.status==="pending"&&(w.status="rejected",w.reason=K)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function oe(w,K,_e,ye,we){var Ge=typeof w;(Ge==="undefined"||Ge==="boolean")&&(w=null);var ee=!1;if(w===null)ee=!0;else switch(Ge){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(w.$$typeof){case a:case e:ee=!0;break;case g:return ee=w._init,oe(ee(w._payload),K,_e,ye,we)}}if(ee)return we=we(w),ee=ye===""?"."+J(w,0):ye,U(we)?(_e="",ee!=null&&(_e=ee.replace(V,"$&/")+"/"),oe(we,K,_e,"",function(je){return je})):we!=null&&(D(we)&&(we=j(we,_e+(we.key==null||w&&w.key===we.key?"":(""+we.key).replace(V,"$&/")+"/")+ee)),K.push(we)),1;ee=0;var pe=ye===""?".":ye+":";if(U(w))for(var be=0;be<w.length;be++)ye=w[be],Ge=pe+J(ye,be),ee+=oe(ye,K,_e,Ge,we);else if(be=x(w),typeof be=="function")for(w=be.call(w),be=0;!(ye=w.next()).done;)ye=ye.value,Ge=pe+J(ye,be++),ee+=oe(ye,K,_e,Ge,we);else if(Ge==="object"){if(typeof w.then=="function")return oe(me(w),K,_e,ye,we);throw K=String(w),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ee}function I(w,K,_e){if(w==null)return w;var ye=[],we=0;return oe(w,ye,"","",function(Ge){return K.call(_e,Ge,we++)}),ye}function Y(w){if(w._status===-1){var K=w._result;K=K(),K.then(function(_e){(w._status===0||w._status===-1)&&(w._status=1,w._result=_e)},function(_e){(w._status===0||w._status===-1)&&(w._status=2,w._result=_e)}),w._status===-1&&(w._status=0,w._result=K)}if(w._status===1)return w._result.default;throw w._result}var z=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Se(){}return ft.Children={map:I,forEach:function(w,K,_e){I(w,function(){K.apply(this,arguments)},_e)},count:function(w){var K=0;return I(w,function(){K++}),K},toArray:function(w){return I(w,function(K){return K})||[]},only:function(w){if(!D(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ft.Component=S,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=L,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ft.__COMPILER_RUNTIME={__proto__:null,c:function(w){return B.H.useMemoCache(w)}},ft.cache=function(w){return function(){return w.apply(null,arguments)}},ft.cloneElement=function(w,K,_e){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ye=M({},w.props),we=w.key,Ge=void 0;if(K!=null)for(ee in K.ref!==void 0&&(Ge=void 0),K.key!==void 0&&(we=""+K.key),K)!G.call(K,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&K.ref===void 0||(ye[ee]=K[ee]);var ee=arguments.length-2;if(ee===1)ye.children=_e;else if(1<ee){for(var pe=Array(ee),be=0;be<ee;be++)pe[be]=arguments[be+2];ye.children=pe}return H(w.type,we,void 0,void 0,Ge,ye)},ft.createContext=function(w){return w={$$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},ft.createElement=function(w,K,_e){var ye,we={},Ge=null;if(K!=null)for(ye in K.key!==void 0&&(Ge=""+K.key),K)G.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(we[ye]=K[ye]);var ee=arguments.length-2;if(ee===1)we.children=_e;else if(1<ee){for(var pe=Array(ee),be=0;be<ee;be++)pe[be]=arguments[be+2];we.children=pe}if(w&&w.defaultProps)for(ye in ee=w.defaultProps,ee)we[ye]===void 0&&(we[ye]=ee[ye]);return H(w,Ge,void 0,void 0,null,we)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(w){return{$$typeof:d,render:w}},ft.isValidElement=D,ft.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:Y}},ft.memo=function(w,K){return{$$typeof:p,type:w,compare:K===void 0?null:K}},ft.startTransition=function(w){var K=B.T,_e={};B.T=_e;try{var ye=w(),we=B.S;we!==null&&we(_e,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(Se,z)}catch(Ge){z(Ge)}finally{B.T=K}},ft.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ft.use=function(w){return B.H.use(w)},ft.useActionState=function(w,K,_e){return B.H.useActionState(w,K,_e)},ft.useCallback=function(w,K){return B.H.useCallback(w,K)},ft.useContext=function(w){return B.H.useContext(w)},ft.useDebugValue=function(){},ft.useDeferredValue=function(w,K){return B.H.useDeferredValue(w,K)},ft.useEffect=function(w,K,_e){var ye=B.H;if(typeof _e=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(w,K)},ft.useId=function(){return B.H.useId()},ft.useImperativeHandle=function(w,K,_e){return B.H.useImperativeHandle(w,K,_e)},ft.useInsertionEffect=function(w,K){return B.H.useInsertionEffect(w,K)},ft.useLayoutEffect=function(w,K){return B.H.useLayoutEffect(w,K)},ft.useMemo=function(w,K){return B.H.useMemo(w,K)},ft.useOptimistic=function(w,K){return B.H.useOptimistic(w,K)},ft.useReducer=function(w,K,_e){return B.H.useReducer(w,K,_e)},ft.useRef=function(w){return B.H.useRef(w)},ft.useState=function(w){return B.H.useState(w)},ft.useSyncExternalStore=function(w,K,_e){return B.H.useSyncExternalStore(w,K,_e)},ft.useTransition=function(){return B.H.useTransition()},ft.version="19.1.1",ft}var wv;function Id(){return wv||(wv=1,th.exports=VS()),th.exports}var fe=Id(),nh={exports:{}},Oo={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function kS(){return Dv||(Dv=1,(function(a){function e(I,Y){var z=I.length;I.push(Y);e:for(;0<z;){var Se=z-1>>>1,w=I[Se];if(0<l(w,Y))I[Se]=Y,I[z]=w,z=Se;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Y=I[0],z=I.pop();if(z!==Y){I[0]=z;e:for(var Se=0,w=I.length,K=w>>>1;Se<K;){var _e=2*(Se+1)-1,ye=I[_e],we=_e+1,Ge=I[we];if(0>l(ye,z))we<w&&0>l(Ge,ye)?(I[Se]=Ge,I[we]=z,Se=we):(I[Se]=ye,I[_e]=z,Se=_e);else if(we<w&&0>l(Ge,z))I[Se]=Ge,I[we]=z,Se=we;else break e}}return Y}function l(I,Y){var z=I.sortIndex-Y.sortIndex;return z!==0?z:I.id-Y.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,x=3,y=!1,M=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=I)s(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function B(I){if(b=!1,U(I),!M)if(i(m)!==null)M=!0,G||(G=!0,J());else{var Y=i(p);Y!==null&&oe(B,Y.startTime-I)}}var G=!1,H=-1,j=5,D=-1;function C(){return S?!0:!(a.unstable_now()-D<j)}function V(){if(S=!1,G){var I=a.unstable_now();D=I;var Y=!0;try{e:{M=!1,b&&(b=!1,L(H),H=-1),y=!0;var z=x;try{t:{for(U(I),v=i(m);v!==null&&!(v.expirationTime>I&&C());){var Se=v.callback;if(typeof Se=="function"){v.callback=null,x=v.priorityLevel;var w=Se(v.expirationTime<=I);if(I=a.unstable_now(),typeof w=="function"){v.callback=w,U(I),Y=!0;break t}v===i(m)&&s(m),U(I)}else s(m);v=i(m)}if(v!==null)Y=!0;else{var K=i(p);K!==null&&oe(B,K.startTime-I),Y=!1}}break e}finally{v=null,x=z,y=!1}Y=void 0}}finally{Y?J():G=!1}}}var J;if(typeof N=="function")J=function(){N(V)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,me=ue.port2;ue.port1.onmessage=V,J=function(){me.postMessage(null)}}else J=function(){_(V,0)};function oe(I,Y){H=_(function(){I(a.unstable_now())},Y)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(I){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var z=x;x=Y;try{return I()}finally{x=z}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var z=x;x=I;try{return Y()}finally{x=z}},a.unstable_scheduleCallback=function(I,Y,z){var Se=a.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Se+z:Se):z=Se,I){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=z+w,I={id:g++,callback:Y,priorityLevel:I,startTime:z,expirationTime:w,sortIndex:-1},z>Se?(I.sortIndex=z,e(p,I),i(m)===null&&I===i(p)&&(b?(L(H),H=-1):b=!0,oe(B,z-Se))):(I.sortIndex=w,e(m,I),M||y||(M=!0,G||(G=!0,J()))),I},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(I){var Y=x;return function(){var z=x;x=Y;try{return I.apply(this,arguments)}finally{x=z}}}})(ah)),ah}var Uv;function XS(){return Uv||(Uv=1,ih.exports=kS()),ih.exports}var rh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function WS(){if(Lv)return Nn;Lv=1;var a=Id();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var Nv;function qS(){if(Nv)return rh.exports;Nv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),rh.exports=WS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function YS(){if(Ov)return Oo;Ov=1;var a=XS(),e=Id(),i=qS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return d(c),t;if(h===o)return d(c),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=h;else{for(var E=!1,A=c.child;A;){if(A===r){E=!0,r=c,o=h;break}if(A===o){E=!0,o=c,r=h;break}A=A.sibling}if(!E){for(A=h.child;A;){if(A===r){E=!0,r=h,o=c;break}if(A===o){E=!0,o=h,r=c;break}A=A.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case N:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var oe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Se=[],w=-1;function K(t){return{current:t}}function _e(t){0>w||(t.current=Se[w],Se[w]=null,w--)}function ye(t,n){w++,Se[w]=t.current,t.current=n}var we=K(null),Ge=K(null),ee=K(null),pe=K(null);function be(t,n){switch(ye(ee,n),ye(Ge,t),ye(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ev(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ev(n),t=tv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}_e(we),ye(we,t)}function je(){_e(we),_e(Ge),_e(ee)}function We(t){t.memoizedState!==null&&ye(pe,t);var n=we.current,r=tv(n,t.type);n!==r&&(ye(Ge,t),ye(we,r))}function ct(t){Ge.current===t&&(_e(we),_e(Ge)),pe.current===t&&(_e(pe),Co._currentValue=z)}var xt=Object.prototype.hasOwnProperty,F=a.unstable_scheduleCallback,At=a.unstable_cancelCallback,st=a.unstable_shouldYield,$e=a.unstable_requestPaint,Pe=a.unstable_now,Nt=a.unstable_getCurrentPriorityLevel,ze=a.unstable_ImmediatePriority,Be=a.unstable_UserBlockingPriority,lt=a.unstable_NormalPriority,Rt=a.unstable_LowPriority,O=a.unstable_IdlePriority,T=a.log,te=a.unstable_setDisableYieldValue,ce=null,ge=null;function le(t){if(typeof T=="function"&&te(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(ce,t)}catch{}}var Ie=Math.clz32?Math.clz32:Ze,Re=Math.log,qe=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Re(t)/qe|0)|0}var Ee=256,Le=4194304;function Qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xe(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?c=Qe(o):(E&=A,E!==0?c=Qe(E):r||(r=A&~t,r!==0&&(c=Qe(r))))):(A=o&~h,A!==0?c=Qe(A):E!==0?c=Qe(E):r||(r=o&~t,r!==0&&(c=Qe(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Ae(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function Ce(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Fe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Me(t,n,r,o,c,h){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(r=E&~r;0<r;){var he=31-Ie(r),ve=1<<he;A[he]=0,P[he]=-1;var ne=$[he];if(ne!==null)for($[he]=null,he=0;he<ne.length;he++){var ie=ne[he];ie!==null&&(ie.lane&=-536870913)}r&=~ve}o!==0&&xe(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function xe(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ie(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function ke(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ie(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Sv(t.type))}function vi(t,n){var r=Y.p;try{return Y.p=t,n()}finally{Y.p=r}}var fn=Math.random().toString(36).slice(2),hn="__reactFiber$"+fn,Jt="__reactProps$"+fn,Di="__reactContainer$"+fn,Ur="__reactEvents$"+fn,al="__reactListeners$"+fn,Lr="__reactHandles$"+fn,zs="__reactResources$"+fn,Ui="__reactMarker$"+fn;function Nr(t){delete t[hn],delete t[Jt],delete t[Ur],delete t[al],delete t[Lr]}function ki(t){var n=t[hn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Di]||r[hn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=rv(t);t!==null;){if(r=t[hn])return r;t=rv(t)}return n}t=r,r=t.parentNode}return null}function va(t){if(t=t[hn]||t[Di]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $a(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function _a(t){var n=t[zs];return n||(n=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(t){t[Ui]=!0}var rl=new Set,sl={};function R(t,n){W(t,n),W(t+"Capture",n)}function W(t,n){for(sl[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Z={};function Te(t){return xt.call(Z,t)?!0:xt.call(re,t)?!1:ae.test(t)?Z[t]=!0:(re[t]=!0,!1)}function Ue(t,n,r){if(Te(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function He(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ne(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var et,it;function Ye(t){if(et===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",it=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+it}var dt=!1;function wt(t,n){if(!t||dt)return"";dt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ie){ne=ie}t.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],A=h[1];if(E&&A){var P=E.split(`
`),$=A.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var he=`
`+P[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=c);break}}}finally{dt=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ye(r):""}function Zt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return Ye("Activity");default:return""}}function zt(t){try{var n="";do n+=Zt(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function pt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t){var n=Je(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function St(t){t._valueTracker||(t._valueTracker=Yt(t))}function Dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Je(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function xn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xt(t,n,r,o,c,h,E,A){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pt(n)):t.value!==""+pt(n)&&(t.value=""+pt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Un(t,E,pt(n)):r!=null?Un(t,E,pt(r)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+pt(A):t.removeAttribute("name")}function Fn(t,n,r,o,c,h,E,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;r=r!=null?""+pt(r):"",n=n!=null?""+pt(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Un(t,n,r){n==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function $t(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+pt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function An(t,n,r){if(n!=null&&(n=""+pt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+pt(r):""}function Or(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(oe(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=pt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Vn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var I0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||I0.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function tp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&ep(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&ep(t,h,n[h])}function Ju(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),z0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(t){return z0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $u=null;function ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Br=null;function np(t){var n=va(t);if(n&&(t=n.stateNode)){var r=t[Jt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xt(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[Jt]||null;if(!c)throw Error(s(90));Xt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Dn(o)}break e;case"textarea":An(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&$t(t,!!r.multiple,n,!1)}}}var tc=!1;function ip(t,n,r){if(tc)return t(n,r);tc=!0;try{var o=t(n);return o}finally{if(tc=!1,(Pr!==null||Br!==null)&&(ql(),Pr&&(n=Pr,t=Br,Br=Pr=null,np(n),t)))for(n=0;n<t.length;n++)np(t[n])}}function Hs(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Jt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=!1;if(Xi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{nc=!1}var xa=null,ic=null,ll=null;function ap(){if(ll)return ll;var t,n=ic,r=n.length,o,c="value"in xa?xa.value:xa.textContent,h=c.length;for(t=0;t<r&&n[t]===c[t];t++);var E=r-t;for(o=1;o<=E&&n[r-o]===c[h-o];o++);return ll=c.slice(t,1<o?1-o:void 0)}function ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function rp(){return!1}function kn(t){function n(r,o,c,h,E){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:rp,this.isPropagationStopped=rp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=kn(er),Vs=g({},er,{view:0,detail:0}),H0=kn(Vs),ac,rc,ks,hl=g({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(ac=t.screenX-ks.screenX,rc=t.screenY-ks.screenY):rc=ac=0,ks=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),sp=kn(hl),G0=g({},hl,{dataTransfer:0}),V0=kn(G0),k0=g({},Vs,{relatedTarget:0}),sc=kn(k0),X0=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),W0=kn(X0),q0=g({},er,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y0=kn(q0),Z0=g({},er,{data:0}),op=kn(Z0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Q0[t])?!!n[t]:!1}function oc(){return J0}var $0=g({},Vs,{key:function(t){if(t.key){var n=j0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=kn($0),tx=g({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=kn(tx),nx=g({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),ix=kn(nx),ax=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=kn(ax),sx=g({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=kn(sx),lx=g({},er,{newState:0,oldState:0}),ux=kn(lx),cx=[9,13,27,32],lc=Xi&&"CompositionEvent"in window,Xs=null;Xi&&"documentMode"in document&&(Xs=document.documentMode);var fx=Xi&&"TextEvent"in window&&!Xs,up=Xi&&(!lc||Xs&&8<Xs&&11>=Xs),cp=" ",fp=!1;function hp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function hx(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(fp=!0,cp);case"textInput":return t=n.data,t===cp&&fp?null:t;default:return null}}function dx(t,n){if(Ir)return t==="compositionend"||!lc&&hp(t,n)?(t=ap(),ll=ic=xa=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!px[t.type]:n==="textarea"}function mp(t,n,r,o){Pr?Br?Br.push(o):Br=[o]:Pr=o,n=Jl(n,"onChange"),0<n.length&&(r=new fl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Ws=null,qs=null;function mx(t){jg(t,0)}function dl(t){var n=$a(t);if(Dn(n))return t}function gp(t,n){if(t==="change")return n}var vp=!1;if(Xi){var uc;if(Xi){var cc="oninput"in document;if(!cc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),cc=typeof _p.oninput=="function"}uc=cc}else uc=!1;vp=uc&&(!document.documentMode||9<document.documentMode)}function xp(){Ws&&(Ws.detachEvent("onpropertychange",Sp),qs=Ws=null)}function Sp(t){if(t.propertyName==="value"&&dl(qs)){var n=[];mp(n,qs,t,ec(t)),ip(mx,n)}}function gx(t,n,r){t==="focusin"?(xp(),Ws=n,qs=r,Ws.attachEvent("onpropertychange",Sp)):t==="focusout"&&xp()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(qs)}function _x(t,n){if(t==="click")return dl(n)}function xx(t,n){if(t==="input"||t==="change")return dl(n)}function Sx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Sx;function Ys(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!xt.call(n,c)||!Zn(t[c],n[c]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,n){var r=yp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=yp(r)}}function Mp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Mp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Tp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_i(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=_i(t.document)}return n}function fc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=Xi&&"documentMode"in document&&11>=document.documentMode,Fr=null,hc=null,Zs=null,dc=!1;function Ap(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;dc||Fr==null||Fr!==_i(o)||(o=Fr,"selectionStart"in o&&fc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zs&&Ys(Zs,o)||(Zs=o,o=Jl(hc,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Fr)))}function tr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var zr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},pc={},bp={};Xi&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function nr(t){if(pc[t])return pc[t];if(!zr[t])return t;var n=zr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in bp)return pc[t]=n[r];return t}var Rp=nr("animationend"),Cp=nr("animationiteration"),wp=nr("animationstart"),Ex=nr("transitionrun"),Mx=nr("transitionstart"),Tx=nr("transitioncancel"),Dp=nr("transitionend"),Up=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function xi(t,n){Up.set(t,n),R(n,[t])}var Lp=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var r=Lp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:zt(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:zt(n)}}var oi=[],Hr=0,gc=0;function pl(){for(var t=Hr,n=gc=Hr=0;n<t;){var r=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var c=oi[n];oi[n++]=null;var h=oi[n];if(oi[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}h!==0&&Np(r,c,h)}}function ml(t,n,r,o){oi[Hr++]=t,oi[Hr++]=n,oi[Hr++]=r,oi[Hr++]=o,gc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function vc(t,n,r,o){return ml(t,n,r,o),gl(t)}function Gr(t,n){return ml(t,null,null,n),gl(t)}function Np(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Ie(r),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function gl(t){if(50<So)throw So=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function Ax(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,r,o){return new Ax(t,n,r,o)}function _c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var r=t.alternate;return r===null?(r=jn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Op(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,r,o,c,h){var E=0;if(o=t,typeof t=="function")_c(t)&&(E=1);else if(typeof t=="string")E=RS(t,r,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=jn(31,r,n,c),t.elementType=D,t.lanes=h,t;case M:return ir(r.children,c,h,n);case b:E=8,c|=24;break;case S:return t=jn(12,r,n,c|2),t.elementType=S,t.lanes=h,t;case B:return t=jn(13,r,n,c),t.elementType=B,t.lanes=h,t;case G:return t=jn(19,r,n,c),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case N:E=10;break e;case L:E=9;break e;case U:E=11;break e;case H:E=14;break e;case j:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=jn(E,r,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function ir(t,n,r,o){return t=jn(7,t,o,n),t.lanes=r,t}function xc(t,n,r){return t=jn(6,t,null,n),t.lanes=r,t}function Sc(t,n,r){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var kr=[],Xr=0,_l=null,xl=0,li=[],ui=0,ar=null,qi=1,Yi="";function rr(t,n){kr[Xr++]=xl,kr[Xr++]=_l,_l=t,xl=n}function Pp(t,n,r){li[ui++]=qi,li[ui++]=Yi,li[ui++]=ar,ar=t;var o=qi;t=Yi;var c=32-Ie(o)-1;o&=~(1<<c),r+=1;var h=32-Ie(n)+c;if(30<h){var E=c-c%5;h=(o&(1<<E)-1).toString(32),o>>=E,c-=E,qi=1<<32-Ie(n)+c|r<<c|o,Yi=h+t}else qi=1<<h|r<<c|o,Yi=t}function yc(t){t.return!==null&&(rr(t,1),Pp(t,1,0))}function Ec(t){for(;t===_l;)_l=kr[--Xr],kr[Xr]=null,xl=kr[--Xr],kr[Xr]=null;for(;t===ar;)ar=li[--ui],li[ui]=null,Yi=li[--ui],li[ui]=null,qi=li[--ui],li[ui]=null}var zn=null,en=null,Ot=!1,sr=null,Li=!1,Mc=Error(s(519));function or(t){var n=Error(s(418,""));throw Qs(si(n,t)),Mc}function Bp(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[hn]=t,n[Jt]=o,r){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(r=0;r<Eo.length;r++)Et(Eo[r],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),St(n);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Or(n,o.value,o.defaultValue,o.children),St(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||$g(n.textContent,r)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=$l),n=!0):n=!1,n||or(t)}function Ip(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:zn=zn.return}}function js(t){if(t!==zn)return!1;if(!Ot)return Ip(t),Ot=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Hf(t.type,t.memoizedProps)),r=!r),r&&en&&or(t),Ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){en=yi(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}en=null}}else n===27?(n=en,Pa(t.type)?(t=Xf,Xf=null,en=t):en=n):en=zn?yi(t.stateNode.nextSibling):null;return!0}function Ks(){en=zn=null,Ot=!1}function Fp(){var t=sr;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),sr=null),t}function Qs(t){sr===null?sr=[t]:sr.push(t)}var Tc=K(null),lr=null,Zi=null;function Sa(t,n,r){ye(Tc,n._currentValue),n._currentValue=r}function ji(t){t._currentValue=Tc.current,_e(Tc)}function Ac(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function bc(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var E=c.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=c;for(var P=0;P<n.length;P++)if(A.context===n[P]){h.lanes|=r,A=h.alternate,A!==null&&(A.lanes|=r),Ac(h.return,r,t),o||(E=null);break e}h=A.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(s(341));E.lanes|=r,h=E.alternate,h!==null&&(h.lanes|=r),Ac(E,r,t),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===t){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function Js(t,n,r,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=c.type;Zn(c.pendingProps.value,E.value)||(t!==null?t.push(A):t=[A])}}else if(c===pe.current){if(E=c.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}c=c.return}t!==null&&bc(n,t,r,o),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){lr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return zp(lr,t)}function yl(t,n){return lr===null&&ur(t),zp(t,n)}function zp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(t===null)throw Error(s(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return r}var bx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},Rx=a.unstable_scheduleCallback,Cx=a.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rc(){return{controller:new bx,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&Rx(Cx,function(){t.controller.abort()})}var eo=null,Cc=0,Wr=0,qr=null;function wx(t,n){if(eo===null){var r=eo=[];Cc=0,Wr=Uf(),qr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Cc++,n.then(Hp,Hp),n}function Hp(){if(--Cc===0&&eo!==null){qr!==null&&(qr.status="fulfilled");var t=eo;eo=null,Wr=0,qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dx(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Gp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(t,n),Gp!==null&&Gp(t,n)};var cr=K(null);function wc(){var t=cr.current;return t!==null?t:qt.pooledCache}function El(t,n){n===null?ye(cr,cr.current):ye(cr,n.pool)}function Vp(){var t=wc();return t===null?null:{parent:dn._currentValue,pool:t}}var to=Error(s(460)),kp=Error(s(474)),Ml=Error(s(542)),Dc={then:function(){}};function Xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Tl(){}function Wp(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Tl,Tl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t;default:if(typeof n.status=="string")n.then(Tl,Tl);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Yp(t),t}throw no=n,to}}var no=null;function qp(){if(no===null)throw Error(s(459));var t=no;return no=null,t}function Yp(t){if(t===to||t===Ml)throw Error(s(483))}var ya=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=gl(t),Np(t,null,r),n}return ml(t,o,n,r),gl(t)}function io(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ke(t,r)}}function Nc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=E:h=h.next=E,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Oc=!1;function ao(){if(Oc){var t=qr;if(t!==null)throw t}}function ro(t,n,r,o){Oc=!1;var c=t.updateQueue;ya=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var P=A,$=P.next;P.next=null,E===null?h=$:E.next=$,E=P;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==E&&(A===null?he.firstBaseUpdate=$:A.next=$,he.lastBaseUpdate=P))}if(h!==null){var ve=c.baseState;E=0,he=$=P=null,A=h;do{var ne=A.lane&-536870913,ie=ne!==A.lane;if(ie?(bt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Wr&&(Oc=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var rt=t,tt=A;ne=n;var Vt=r;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){ve=rt.call(Vt,ve,ne);break e}ve=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ne=typeof rt=="function"?rt.call(Vt,ve,ne):rt,ne==null)break e;ve=g({},ve,ne);break e;case 2:ya=!0}}ne=A.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?($=he=ie,P=ve):he=he.next=ie,E|=ne;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ie=A,A=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);he===null&&(P=ve),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=he,h===null&&(c.shared.lanes=0),Ua|=E,t.lanes=E,t.memoizedState=ve}}function Zp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function jp(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Zp(r[t],n)}var Yr=K(null),Al=K(0);function Kp(t,n){t=na,ye(Al,t),ye(Yr,n),na=t|n.baseLanes}function Pc(){ye(Al,na),ye(Yr,Yr.current)}function Bc(){na=Al.current,_e(Yr),_e(Al)}var Ta=0,gt=null,Ht=null,ln=null,bl=!1,Zr=!1,fr=!1,Rl=0,so=0,jr=null,Ux=0;function nn(){throw Error(s(321))}function Ic(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Zn(t[r],n[r]))return!1;return!0}function Fc(t,n,r,o,c,h){return Ta=h,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Nm:Om,fr=!1,h=r(o,c),fr=!1,Zr&&(h=Jp(n,r,o,c)),Qp(t),h}function Qp(t){I.H=Nl;var n=Ht!==null&&Ht.next!==null;if(Ta=0,ln=Ht=gt=null,bl=!1,so=0,jr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&Sl(t)&&(Sn=!0))}function Jp(t,n,r,o){gt=t;var c=0;do{if(Zr&&(jr=null),so=0,Zr=!1,25<=c)throw Error(s(301));if(c+=1,ln=Ht=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Fx,h=n(r,o)}while(Zr);return h}function Lx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(gt.flags|=1024),n}function zc(){var t=Rl!==0;return Rl=0,t}function Hc(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Gc(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}Ta=0,ln=Ht=gt=null,Zr=!1,so=Rl=0,jr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?gt.memoizedState=ln=t:ln=ln.next=t,ln}function un(){if(Ht===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=ln===null?gt.memoizedState:ln.next;if(n!==null)ln=n,Ht=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ln===null?gt.memoizedState=ln=t:ln=ln.next=t}return ln}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,jr===null&&(jr=[]),t=Wp(jr,t,n),n=gt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Nm:Om),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===N)return Ln(t)}throw Error(s(438,String(t)))}function kc(t){var n=null,r=gt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Vc(),gt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function Ki(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=un();return Xc(n,Ht,t)}function Xc(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var A=E=null,P=null,$=n,he=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(bt&ve)===ve:(Ta&ve)===ve){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Wr&&(he=!0);else if((Ta&ne)===ne){$=$.next,ne===Wr&&(he=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=ve,E=h):P=P.next=ve,gt.lanes|=ne,Ua|=ne;ve=$.action,fr&&r(h,ve),h=$.hasEagerState?$.eagerState:r(h,ve)}else ne={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(A=P=ne,E=h):P=P.next=ne,gt.lanes|=ve,Ua|=ve;$=$.next}while($!==null&&$!==n);if(P===null?E=h:P.next=A,!Zn(h,t.memoizedState)&&(Sn=!0,he&&(r=qr,r!==null)))throw r;t.memoizedState=h,t.baseState=E,t.baseQueue=P,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Wc(t){var n=un(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);Zn(h,n.memoizedState)||(Sn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function $p(t,n,r){var o=gt,c=un(),h=Ot;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var E=!Zn((Ht||c).memoizedState,r);E&&(c.memoizedState=r,Sn=!0),c=c.queue;var A=nm.bind(null,o,c,t);if(lo(2048,8,A,[t]),c.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Dl(),tm.bind(null,o,c,r,n),null),qt===null)throw Error(s(349));h||(Ta&124)!==0||em(o,n,r)}return r}function em(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=gt.updateQueue,n===null?(n=Vc(),gt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function tm(t,n,r,o){n.value=r,n.getSnapshot=o,im(n)&&am(t)}function nm(t,n,r){return r(function(){im(n)&&am(t)})}function im(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Zn(t,r)}catch{return!0}}function am(t){var n=Gr(t,2);n!==null&&ei(n,t,2)}function qc(t){var n=Xn();if(typeof t=="function"){var r=t;if(t=r(),fr){le(!0);try{r()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function rm(t,n,r,o){return t.baseState=r,Xc(t,Ht,typeof o=="function"?o:Ki)}function Nx(t,n,r,o,c){if(Ll(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};I.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,sm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function sm(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=I.T,E={};I.T=E;try{var A=r(c,o),P=I.S;P!==null&&P(E,A),om(t,n,A)}catch($){Yc(t,n,$)}finally{I.T=h}}else try{h=r(c,o),om(t,n,h)}catch($){Yc(t,n,$)}}function om(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){lm(t,n,o)},function(o){return Yc(t,n,o)}):lm(t,n,r)}function lm(t,n,r){n.status="fulfilled",n.value=r,um(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,sm(t,r)))}function Yc(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,um(n),n=n.next;while(n!==o)}t.action=null}function um(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function fm(t,n){if(Ot){var r=qt.formState;if(r!==null){e:{var o=gt;if(Ot){if(en){t:{for(var c=en,h=Li;c.nodeType!==8;){if(!h){c=null;break t}if(c=yi(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){en=yi(c.nextSibling),o=c.data==="F!";break e}}or(o)}o=!1}o&&(n=r[0])}}return r=Xn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},r.queue=o,r=Dm.bind(null,gt,o),o.dispatch=r,o=qc(!1),h=Jc.bind(null,gt,!1,o.queue),o=Xn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=Nx.bind(null,gt,c,h,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function hm(t){var n=un();return dm(n,Ht,t)}function dm(t,n,r){if(n=Xc(t,n,cm)[0],t=wl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(E){throw E===to?Ml:E}else o=n;n=un();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(gt.flags|=2048,Kr(9,Dl(),Ox.bind(null,c,r),null)),[o,h,t]}function Ox(t,n){t.action=n}function pm(t){var n=un(),r=Ht;if(r!==null)return dm(n,r,t);un(),n=n.memoizedState,r=un();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Kr(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=Vc(),gt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Dl(){return{destroy:void 0,resource:void 0}}function mm(){return un().memoizedState}function Ul(t,n,r,o){var c=Xn();o=o===void 0?null:o,gt.flags|=t,c.memoizedState=Kr(1|n,Dl(),r,o)}function lo(t,n,r,o){var c=un();o=o===void 0?null:o;var h=c.memoizedState.inst;Ht!==null&&o!==null&&Ic(o,Ht.memoizedState.deps)?c.memoizedState=Kr(n,h,r,o):(gt.flags|=t,c.memoizedState=Kr(1|n,h,r,o))}function gm(t,n){Ul(8390656,8,t,n)}function vm(t,n){lo(2048,8,t,n)}function _m(t,n){return lo(4,2,t,n)}function xm(t,n){return lo(4,4,t,n)}function Sm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ym(t,n,r){r=r!=null?r.concat([t]):null,lo(4,4,Sm.bind(null,n,t),r)}function Zc(){}function Em(t,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Ic(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Mm(t,n){var r=un();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Ic(n,o[1]))return o[0];if(o=t(),fr){le(!0);try{t()}finally{le(!1)}}return r.memoizedState=[o,n],o}function jc(t,n,r){return r===void 0||(Ta&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=bg(),gt.lanes|=t,Ua|=t,r)}function Tm(t,n,r,o){return Zn(r,n)?r:Yr.current!==null?(t=jc(t,r,o),Zn(t,n)||(Sn=!0),t):(Ta&42)===0?(Sn=!0,t.memoizedState=r):(t=bg(),gt.lanes|=t,Ua|=t,n)}function Am(t,n,r,o,c){var h=Y.p;Y.p=h!==0&&8>h?h:8;var E=I.T,A={};I.T=A,Jc(t,!1,n,r);try{var P=c(),$=I.S;if($!==null&&$(A,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var he=Dx(P,o);uo(t,n,he,$n(t))}else uo(t,n,o,$n(t))}catch(ve){uo(t,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{Y.p=h,I.T=E}}function Px(){}function Kc(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=bm(t).queue;Am(t,c,n,z,r===null?Px:function(){return Rm(t),r(o)})}function bm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:z},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rm(t){var n=bm(t).next.queue;uo(t,n,{},$n())}function Qc(){return Ln(Co)}function Cm(){return un().memoizedState}function wm(){return un().memoizedState}function Bx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=$n();t=Ea(r);var o=Ma(n,t,r);o!==null&&(ei(o,n,r),io(o,n,r)),n={cache:Rc()},t.payload=n;return}n=n.return}}function Ix(t,n,r){var o=$n();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Ll(t)?Um(n,r):(r=vc(t,n,r,o),r!==null&&(ei(r,t,o),Lm(r,n,o)))}function Dm(t,n,r){var o=$n();uo(t,n,r,o)}function uo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))Um(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,A=h(E,r);if(c.hasEagerState=!0,c.eagerState=A,Zn(A,E))return ml(t,n,c,0),qt===null&&pl(),!1}catch{}finally{}if(r=vc(t,n,c,o),r!==null)return ei(r,t,o),Lm(r,n,o),!0}return!1}function Jc(t,n,r,o){if(o={lane:2,revertLane:Uf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(s(479))}else n=vc(t,r,o,2),n!==null&&ei(n,t,2)}function Ll(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function Um(t,n){Zr=bl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Lm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,ke(t,r)}}var Nl={readContext:Ln,use:Cl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},Nm={readContext:Ln,use:Cl,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:gm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Ul(4194308,4,Sm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Ul(4194308,4,t,n)},useInsertionEffect:function(t,n){Ul(4,2,t,n)},useMemo:function(t,n){var r=Xn();n=n===void 0?null:n;var o=t();if(fr){le(!0);try{t()}finally{le(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Xn();if(r!==void 0){var c=r(n);if(fr){le(!0);try{r(n)}finally{le(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Ix.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=qc(t);var n=t.queue,r=Dm.bind(null,gt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Zc,useDeferredValue:function(t,n){var r=Xn();return jc(r,t,n)},useTransition:function(){var t=qc(!1);return t=Am.bind(null,gt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=gt,c=Xn();if(Ot){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),qt===null)throw Error(s(349));(bt&124)!==0||em(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,gm(nm.bind(null,o,h,t),[t]),o.flags|=2048,Kr(9,Dl(),tm.bind(null,o,h,r,n),null),r},useId:function(){var t=Xn(),n=qt.identifierPrefix;if(Ot){var r=Yi,o=qi;r=(o&~(1<<32-Ie(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=Rl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Ux++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Qc,useFormState:fm,useActionState:fm,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Jc.bind(null,gt,!0,r),r.dispatch=n,[t,n]},useMemoCache:kc,useCacheRefresh:function(){return Xn().memoizedState=Bx.bind(null,gt)}},Om={readContext:Ln,use:Cl,useCallback:Em,useContext:Ln,useEffect:vm,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:xm,useMemo:Mm,useReducer:wl,useRef:mm,useState:function(){return wl(Ki)},useDebugValue:Zc,useDeferredValue:function(t,n){var r=un();return Tm(r,Ht.memoizedState,t,n)},useTransition:function(){var t=wl(Ki)[0],n=un().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qc,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var r=un();return rm(r,Ht,t,n)},useMemoCache:kc,useCacheRefresh:wm},Fx={readContext:Ln,use:Cl,useCallback:Em,useContext:Ln,useEffect:vm,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:xm,useMemo:Mm,useReducer:Wc,useRef:mm,useState:function(){return Wc(Ki)},useDebugValue:Zc,useDeferredValue:function(t,n){var r=un();return Ht===null?jc(r,t,n):Tm(r,Ht.memoizedState,t,n)},useTransition:function(){var t=Wc(Ki)[0],n=un().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qc,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var r=un();return Ht!==null?rm(r,Ht,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:kc,useCacheRefresh:wm},Qr=null,co=0;function Ol(t){var n=co;return co+=1,Qr===null&&(Qr=[]),Wp(Qr,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){var n=t._init;return n(t._payload)}function Bm(t){function n(q,k){if(t){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function r(q,k){if(!t)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function c(q,k){return q=Wi(q,k),q.index=0,q.sibling=null,q}function h(q,k,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function E(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,k,Q,de){return k===null||k.tag!==6?(k=xc(Q,q.mode,de),k.return=q,k):(k=c(k,Q),k.return=q,k)}function P(q,k,Q,de){var Ve=Q.type;return Ve===M?he(q,k,Q.props.children,de,Q.key):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===j&&Pm(Ve)===k.type)?(k=c(k,Q.props),fo(k,Q),k.return=q,k):(k=vl(Q.type,Q.key,Q.props,null,q.mode,de),fo(k,Q),k.return=q,k)}function $(q,k,Q,de){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=Sc(Q,q.mode,de),k.return=q,k):(k=c(k,Q.children||[]),k.return=q,k)}function he(q,k,Q,de,Ve){return k===null||k.tag!==7?(k=ir(Q,q.mode,de,Ve),k.return=q,k):(k=c(k,Q),k.return=q,k)}function ve(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=xc(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return Q=vl(k.type,k.key,k.props,null,q.mode,Q),fo(Q,k),Q.return=q,Q;case y:return k=Sc(k,q.mode,Q),k.return=q,k;case j:var de=k._init;return k=de(k._payload),ve(q,k,Q)}if(oe(k)||J(k))return k=ir(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return ve(q,Ol(k),Q);if(k.$$typeof===N)return ve(q,yl(q,k),Q);Pl(q,k)}return null}function ne(q,k,Q,de){var Ve=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Ve!==null?null:A(q,k,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return Q.key===Ve?P(q,k,Q,de):null;case y:return Q.key===Ve?$(q,k,Q,de):null;case j:return Ve=Q._init,Q=Ve(Q._payload),ne(q,k,Q,de)}if(oe(Q)||J(Q))return Ve!==null?null:he(q,k,Q,de,null);if(typeof Q.then=="function")return ne(q,k,Ol(Q),de);if(Q.$$typeof===N)return ne(q,k,yl(q,Q),de);Pl(q,Q)}return null}function ie(q,k,Q,de,Ve){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return q=q.get(Q)||null,A(k,q,""+de,Ve);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case x:return q=q.get(de.key===null?Q:de.key)||null,P(k,q,de,Ve);case y:return q=q.get(de.key===null?Q:de.key)||null,$(k,q,de,Ve);case j:var vt=de._init;return de=vt(de._payload),ie(q,k,Q,de,Ve)}if(oe(de)||J(de))return q=q.get(Q)||null,he(k,q,de,Ve,null);if(typeof de.then=="function")return ie(q,k,Q,Ol(de),Ve);if(de.$$typeof===N)return ie(q,k,Q,yl(k,de),Ve);Pl(k,de)}return null}function rt(q,k,Q,de){for(var Ve=null,vt=null,Ke=k,at=k=0,En=null;Ke!==null&&at<Q.length;at++){Ke.index>at?(En=Ke,Ke=null):En=Ke.sibling;var Dt=ne(q,Ke,Q[at],de);if(Dt===null){Ke===null&&(Ke=En);break}t&&Ke&&Dt.alternate===null&&n(q,Ke),k=h(Dt,k,at),vt===null?Ve=Dt:vt.sibling=Dt,vt=Dt,Ke=En}if(at===Q.length)return r(q,Ke),Ot&&rr(q,at),Ve;if(Ke===null){for(;at<Q.length;at++)Ke=ve(q,Q[at],de),Ke!==null&&(k=h(Ke,k,at),vt===null?Ve=Ke:vt.sibling=Ke,vt=Ke);return Ot&&rr(q,at),Ve}for(Ke=o(Ke);at<Q.length;at++)En=ie(Ke,q,at,Q[at],de),En!==null&&(t&&En.alternate!==null&&Ke.delete(En.key===null?at:En.key),k=h(En,k,at),vt===null?Ve=En:vt.sibling=En,vt=En);return t&&Ke.forEach(function(Ha){return n(q,Ha)}),Ot&&rr(q,at),Ve}function tt(q,k,Q,de){if(Q==null)throw Error(s(151));for(var Ve=null,vt=null,Ke=k,at=k=0,En=null,Dt=Q.next();Ke!==null&&!Dt.done;at++,Dt=Q.next()){Ke.index>at?(En=Ke,Ke=null):En=Ke.sibling;var Ha=ne(q,Ke,Dt.value,de);if(Ha===null){Ke===null&&(Ke=En);break}t&&Ke&&Ha.alternate===null&&n(q,Ke),k=h(Ha,k,at),vt===null?Ve=Ha:vt.sibling=Ha,vt=Ha,Ke=En}if(Dt.done)return r(q,Ke),Ot&&rr(q,at),Ve;if(Ke===null){for(;!Dt.done;at++,Dt=Q.next())Dt=ve(q,Dt.value,de),Dt!==null&&(k=h(Dt,k,at),vt===null?Ve=Dt:vt.sibling=Dt,vt=Dt);return Ot&&rr(q,at),Ve}for(Ke=o(Ke);!Dt.done;at++,Dt=Q.next())Dt=ie(Ke,q,at,Dt.value,de),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?at:Dt.key),k=h(Dt,k,at),vt===null?Ve=Dt:vt.sibling=Dt,vt=Dt);return t&&Ke.forEach(function(zS){return n(q,zS)}),Ot&&rr(q,at),Ve}function Vt(q,k,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:e:{for(var Ve=Q.key;k!==null;){if(k.key===Ve){if(Ve=Q.type,Ve===M){if(k.tag===7){r(q,k.sibling),de=c(k,Q.props.children),de.return=q,q=de;break e}}else if(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===j&&Pm(Ve)===k.type){r(q,k.sibling),de=c(k,Q.props),fo(de,Q),de.return=q,q=de;break e}r(q,k);break}else n(q,k);k=k.sibling}Q.type===M?(de=ir(Q.props.children,q.mode,de,Q.key),de.return=q,q=de):(de=vl(Q.type,Q.key,Q.props,null,q.mode,de),fo(de,Q),de.return=q,q=de)}return E(q);case y:e:{for(Ve=Q.key;k!==null;){if(k.key===Ve)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){r(q,k.sibling),de=c(k,Q.children||[]),de.return=q,q=de;break e}else{r(q,k);break}else n(q,k);k=k.sibling}de=Sc(Q,q.mode,de),de.return=q,q=de}return E(q);case j:return Ve=Q._init,Q=Ve(Q._payload),Vt(q,k,Q,de)}if(oe(Q))return rt(q,k,Q,de);if(J(Q)){if(Ve=J(Q),typeof Ve!="function")throw Error(s(150));return Q=Ve.call(Q),tt(q,k,Q,de)}if(typeof Q.then=="function")return Vt(q,k,Ol(Q),de);if(Q.$$typeof===N)return Vt(q,k,yl(q,Q),de);Pl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(r(q,k.sibling),de=c(k,Q),de.return=q,q=de):(r(q,k),de=xc(Q,q.mode,de),de.return=q,q=de),E(q)):r(q,k)}return function(q,k,Q,de){try{co=0;var Ve=Vt(q,k,Q,de);return Qr=null,Ve}catch(Ke){if(Ke===to||Ke===Ml)throw Ke;var vt=jn(29,Ke,null,q.mode);return vt.lanes=de,vt.return=q,vt}finally{}}}var Jr=Bm(!0),Im=Bm(!1),ci=K(null),Ni=null;function Aa(t){var n=t.alternate;ye(pn,pn.current&1),ye(ci,t),Ni===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Ni=t)}function Fm(t){if(t.tag===22){if(ye(pn,pn.current),ye(ci,t),Ni===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ni=t)}}else ba()}function ba(){ye(pn,pn.current),ye(ci,ci.current)}function Qi(t){_e(ci),Ni===t&&(Ni=null),_e(pn)}var pn=K(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||kf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $c(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ef={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=$n(),c=Ea(o);c.payload=n,r!=null&&(c.callback=r),n=Ma(t,c,o),n!==null&&(ei(n,t,o),io(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=$n(),c=Ea(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=Ma(t,c,o),n!==null&&(ei(n,t,o),io(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=$n(),o=Ea(r);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,r),n!==null&&(ei(n,t,r),io(n,t,r))}};function zm(t,n,r,o,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!Ys(r,o)||!Ys(c,h):!0}function Hm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function hr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gm(t){Il(t)}function Vm(t){console.error(t)}function km(t){Il(t)}function Fl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Xm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(t,n,r){return r=Ea(r),r.tag=3,r.payload={element:null},r.callback=function(){Fl(t,n)},r}function Wm(t){return t=Ea(t),t.tag=3,t}function qm(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){Xm(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Xm(n,r,o),typeof c!="function"&&(La===null?La=new Set([this]):La.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function zx(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Js(n,r,c,!0),r=ci.current,r!==null){switch(r.tag){case 13:return Ni===null?bf():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Dc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Cf(t,o,c)),!1;case 22:return r.flags|=65536,o===Dc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Cf(t,o,c)),!1}throw Error(s(435,r.tag))}return Cf(t,o,c),bf(),!1}if(Ot)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Mc&&(t=Error(s(422),{cause:o}),Qs(si(t,r)))):(o!==Mc&&(n=Error(s(423),{cause:o}),Qs(si(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=si(o,r),c=tf(t.stateNode,o,c),Nc(t,c),tn!==4&&(tn=2)),!1;var h=Error(s(520),{cause:o});if(h=si(h,r),xo===null?xo=[h]:xo.push(h),tn!==4&&(tn=2),n===null)return!0;o=si(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=tf(r.stateNode,o,t),Nc(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(La===null||!La.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Wm(c),qm(c,t,r,o),Nc(r,c),!1}r=r.return}while(r!==null);return!1}var Ym=Error(s(461)),Sn=!1;function bn(t,n,r,o){n.child=t===null?Im(n,null,r,o):Jr(n,t.child,r,o)}function Zm(t,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var E={};for(var A in o)A!=="ref"&&(E[A]=o[A])}else E=o;return ur(n),o=Fc(t,n,r,E,h,c),A=zc(),t!==null&&!Sn?(Hc(t,n,c),Ji(t,n,c)):(Ot&&A&&yc(n),n.flags|=1,bn(t,n,o,c),n.child)}function jm(t,n,r,o,c){if(t===null){var h=r.type;return typeof h=="function"&&!_c(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Km(t,n,h,o,c)):(t=vl(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!cf(t,c)){var E=h.memoizedProps;if(r=r.compare,r=r!==null?r:Ys,r(E,o)&&t.ref===n.ref)return Ji(t,n,c)}return n.flags|=1,t=Wi(h,o),t.ref=n.ref,t.return=n,n.child=t}function Km(t,n,r,o,c){if(t!==null){var h=t.memoizedProps;if(Ys(h,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=h,cf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,Ji(t,n,c)}return nf(t,n,r,o,c)}function Qm(t,n,r){var o=n.pendingProps,c=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,t!==null){for(c=n.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Jm(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,h!==null?h.cachePool:null),h!==null?Kp(n,h):Pc(),Fm(n);else return n.lanes=n.childLanes=536870912,Jm(t,n,h!==null?h.baseLanes|r:r,r)}else h!==null?(El(n,h.cachePool),Kp(n,h),ba(),n.memoizedState=null):(t!==null&&El(n,null),Pc(),ba());return bn(t,n,c,r),n.child}function Jm(t,n,r,o){var c=wc();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&El(n,null),Pc(),Fm(n),t!==null&&Js(t,n,o,!0),null}function zl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function nf(t,n,r,o,c){return ur(n),r=Fc(t,n,r,o,void 0,c),o=zc(),t!==null&&!Sn?(Hc(t,n,c),Ji(t,n,c)):(Ot&&o&&yc(n),n.flags|=1,bn(t,n,r,c),n.child)}function $m(t,n,r,o,c,h){return ur(n),n.updateQueue=null,r=Jp(n,o,r,c),Qp(t),o=zc(),t!==null&&!Sn?(Hc(t,n,h),Ji(t,n,h)):(Ot&&o&&yc(n),n.flags|=1,bn(t,n,r,h),n.child)}function eg(t,n,r,o,c){if(ur(n),n.stateNode===null){var h=Vr,E=r.contextType;typeof E=="object"&&E!==null&&(h=Ln(E)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=ef,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Uc(n),E=r.contextType,h.context=typeof E=="object"&&E!==null?Ln(E):Vr,h.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&($c(n,r,E,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&ef.enqueueReplaceState(h,h.state,null),ro(n,o,h,c),ao(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var A=n.memoizedProps,P=hr(r,A);h.props=P;var $=h.context,he=r.contextType;E=Vr,typeof he=="object"&&he!==null&&(E=Ln(he));var ve=r.getDerivedStateFromProps;he=typeof ve=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||$!==E)&&Hm(n,h,o,E),ya=!1;var ne=n.memoizedState;h.state=ne,ro(n,o,h,c),ao(),$=n.memoizedState,A||ne!==$||ya?(typeof ve=="function"&&($c(n,r,ve,o),$=n.memoizedState),(P=ya||zm(n,r,P,o,ne,$,E))?(he||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=E,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Lc(t,n),E=n.memoizedProps,he=hr(r,E),h.props=he,ve=n.pendingProps,ne=h.context,$=r.contextType,P=Vr,typeof $=="object"&&$!==null&&(P=Ln($)),A=r.getDerivedStateFromProps,($=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==ve||ne!==P)&&Hm(n,h,o,P),ya=!1,ne=n.memoizedState,h.state=ne,ro(n,o,h,c),ao();var ie=n.memoizedState;E!==ve||ne!==ie||ya||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof A=="function"&&($c(n,r,A,o),ie=n.memoizedState),(he=ya||zm(n,r,he,o,ne,ie,P)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ie,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ie,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),h.props=o,h.state=ie,h.context=P,o=he):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,zl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Jr(n,t.child,null,c),n.child=Jr(n,null,r,c)):bn(t,n,r,c),n.memoizedState=h.state,t=n.child):t=Ji(t,n,c),t}function tg(t,n,r,o){return Ks(),n.flags|=256,bn(t,n,r,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:Vp()}}function sf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=fi),t}function ng(t,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ot){if(c?Aa(n):ba(),Ot){var A=en,P;if(P=A){e:{for(P=A,A=Li;P.nodeType!==8;){if(!A){A=null;break e}if(P=yi(P.nextSibling),P===null){A=null;break e}}A=P}A!==null?(n.memoizedState={dehydrated:A,treeContext:ar!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},P=jn(18,null,null,0),P.stateNode=A,P.return=n,n.child=P,zn=n,en=null,P=!0):P=!1}P||or(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return kf(A)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return A=o.children,o=o.fallback,c?(ba(),c=n.mode,A=Hl({mode:"hidden",children:A},c),o=ir(o,c,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=rf(r),c.childLanes=sf(t,E,r),n.memoizedState=af,o):(Aa(n),of(n,A))}if(P=t.memoizedState,P!==null&&(A=P.dehydrated,A!==null)){if(h)n.flags&256?(Aa(n),n.flags&=-257,n=lf(t,n,r)):n.memoizedState!==null?(ba(),n.child=t.child,n.flags|=128,n=null):(ba(),c=o.fallback,A=n.mode,o=Hl({mode:"visible",children:o.children},A),c=ir(c,A,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Jr(n,t.child,null,r),o=n.child,o.memoizedState=rf(r),o.childLanes=sf(t,E,r),n.memoizedState=af,n=c);else if(Aa(n),kf(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(s(419)),o.stack="",o.digest=E,Qs({value:o,source:null,stack:null}),n=lf(t,n,r)}else if(Sn||Js(t,n,r,!1),E=(r&t.childLanes)!==0,Sn||E){if(E=qt,E!==null&&(o=r&-r,o=(o&42)!==0?1:ot(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Gr(t,o),ei(E,t,o),Ym;A.data==="$?"||bf(),n=lf(t,n,r)}else A.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,en=yi(A.nextSibling),zn=n,Ot=!0,sr=null,Li=!1,t!==null&&(li[ui++]=qi,li[ui++]=Yi,li[ui++]=ar,qi=t.id,Yi=t.overflow,ar=n),n=of(n,o.children),n.flags|=4096);return n}return c?(ba(),c=o.fallback,A=n.mode,P=t.child,$=P.sibling,o=Wi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Wi($,c):(c=ir(c,A,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=t.child.memoizedState,A===null?A=rf(r):(P=A.cachePool,P!==null?($=dn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Vp(),A={baseLanes:A.baseLanes|r,cachePool:P}),c.memoizedState=A,c.childLanes=sf(t,E,r),n.memoizedState=af,o):(Aa(n),r=t.child,t=r.sibling,r=Wi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=r,n.memoizedState=null,r)}function of(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=jn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function lf(t,n,r){return Jr(n,t.child,null,r),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ig(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ac(t.return,n,r)}function uf(t,n,r,o,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=c)}function ag(t,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(bn(t,n,o.children,r),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,r,n);else if(t.tag===19)ig(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(pn,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Bl(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),uf(n,!1,c,r,h);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Bl(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}uf(n,!0,r,null,h);break;case"together":uf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Js(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Wi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Wi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function Hx(t,n,r){switch(n.tag){case 3:be(n,n.stateNode.containerInfo),Sa(n,dn,t.memoizedState.cache),Ks();break;case 27:case 5:We(n);break;case 4:be(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?ng(t,n,r):(Aa(n),t=Ji(t,n,r),t!==null?t.sibling:null);Aa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Js(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return ag(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,Qm(t,n,r);case 24:Sa(n,dn,t.memoizedState.cache)}return Ji(t,n,r)}function rg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!cf(t,r)&&(n.flags&128)===0)return Sn=!1,Hx(t,n,r);Sn=(t.flags&131072)!==0}else Sn=!1,Ot&&(n.flags&1048576)!==0&&Pp(n,xl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")_c(o)?(t=hr(o,t),n.tag=1,n=eg(null,n,o,t,r)):(n.tag=0,n=nf(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=Zm(null,n,o,t,r);break e}else if(c===H){n.tag=14,n=jm(null,n,o,t,r);break e}}throw n=me(o)||o,Error(s(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=hr(o,n.pendingProps),eg(t,n,o,c,r);case 3:e:{if(be(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Lc(t,n),ro(n,o,null,r);var E=n.memoizedState;if(o=E.cache,Sa(n,dn,o),o!==h.cache&&bc(n,[dn],r,!0),ao(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=tg(t,n,o,r);break e}else if(o!==c){c=si(Error(s(424)),n),Qs(c),n=tg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=yi(t.firstChild),zn=n,Ot=!0,sr=null,Li=!0,r=Im(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ks(),o===c){n=Ji(t,n,r);break e}bn(t,n,o,r)}n=n.child}return n;case 26:return zl(t,n),t===null?(r=uv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ot||(r=n.type,t=n.pendingProps,o=eu(ee.current).createElement(r),o[hn]=n,o[Jt]=t,Cn(o,r,t),on(o),n.stateNode=o):n.memoizedState=uv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&Ot&&(o=n.stateNode=sv(n.type,n.pendingProps,ee.current),zn=n,Li=!0,c=en,Pa(n.type)?(Xf=c,en=yi(o.firstChild)):en=c),bn(t,n,n.pendingProps.children,r),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ot&&((c=o=en)&&(o=pS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,zn=n,en=yi(o.firstChild),Li=!1,c=!0):c=!1),c||or(n)),We(n),c=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,Hf(c,h)?o=null:E!==null&&Hf(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=Fc(t,n,Lx,null,null,r),Co._currentValue=c),zl(t,n),bn(t,n,o,r),n.child;case 6:return t===null&&Ot&&((t=r=en)&&(r=mS(r,n.pendingProps,Li),r!==null?(n.stateNode=r,zn=n,en=null,t=!0):t=!1),t||or(n)),null;case 13:return ng(t,n,r);case 4:return be(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Jr(n,null,o,r):bn(t,n,o,r),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,r);case 7:return bn(t,n,n.pendingProps,r),n.child;case 8:return bn(t,n,n.pendingProps.children,r),n.child;case 12:return bn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),bn(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ur(n),c=Ln(c),o=o(c),n.flags|=1,bn(t,n,o,r),n.child;case 14:return jm(t,n,n.type,n.pendingProps,r);case 15:return Km(t,n,n.type,n.pendingProps,r);case 19:return ag(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Hl(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Wi(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Qm(t,n,r);case 24:return ur(n),o=Ln(dn),t===null?(c=wc(),c===null&&(c=qt,h=Rc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},Uc(n),Sa(n,dn,c)):((t.lanes&r)!==0&&(Lc(t,n),ro(n,null,null,r),ao()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,dn,o)):(o=h.cache,Sa(n,dn,o),o!==c.cache&&bc(n,[dn],r,!0))),bn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(t){t.flags|=4}function sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!pv(n)){if(n=ci.current,n!==null&&((bt&4194048)===bt?Ni!==null:(bt&62914560)!==bt&&(bt&536870912)===0||n!==Ni))throw no=Dc,kp;t.flags|=8192}}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,ns|=n)}function ho(t,n){if(!Ot)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Gx(t,n,r){var o=n.pendingProps;switch(Ec(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(dn),je(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(js(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fp())),Kt(n),null;case 26:return r=n.memoizedState,t===null?($i(n),r!==null?(Kt(n),sg(n,r)):(Kt(n),n.flags&=-16777217)):r?r!==t.memoizedState?($i(n),Kt(n),sg(n,r)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&$i(n),Kt(n),n.flags&=-16777217),null;case 27:ct(n),r=ee.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=we.current,js(n)?Bp(n):(t=sv(c,o,r),n.stateNode=t,$i(n))}return Kt(n),null;case 5:if(ct(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=we.current,js(n))Bp(n);else{switch(c=eu(ee.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[hn]=n,t[Jt]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Cn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&$i(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,js(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=zn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[hn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||$g(t.nodeValue,r)),t||or(n)}else t=eu(t).createTextNode(o),t[hn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=js(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[hn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=Fp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Gl(n,n.updateQueue),Kt(n),null;case 4:return je(),t===null&&Pf(n.stateNode.containerInfo),Kt(n),null;case 10:return ji(n.type),Kt(n),null;case 19:if(_e(pn),c=n.memoizedState,c===null)return Kt(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)ho(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Bl(t),h!==null){for(n.flags|=128,ho(c,!1),t=h.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Op(r,t),r=r.sibling;return ye(pn,pn.current&1|2),n.child}t=t.sibling}c.tail!==null&&Pe()>Xl&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304)}else{if(!o)if(t=Bl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),ho(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Ot)return Kt(n),null}else 2*Pe()-c.renderingStartTime>Xl&&r!==536870912&&(n.flags|=128,o=!0,ho(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Pe(),n.sibling=null,t=pn.current,ye(pn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return Qi(n),Bc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),r=n.updateQueue,r!==null&&Gl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&_e(cr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(dn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Vx(t,n){switch(Ec(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(dn),je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 13:if(Qi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _e(pn),null;case 4:return je(),null;case 10:return ji(n.type),null;case 22:case 23:return Qi(n),Bc(),t!==null&&_e(cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(dn),null;case 25:return null;default:return null}}function og(t,n){switch(Ec(n),n.tag){case 3:ji(dn),je();break;case 26:case 27:case 5:ct(n);break;case 4:je();break;case 13:Qi(n);break;case 19:_e(pn);break;case 10:ji(n.type);break;case 22:case 23:Qi(n),Bc(),t!==null&&_e(cr);break;case 24:ji(dn)}}function po(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var h=r.create,E=r.inst;o=h(),E.destroy=o}r=r.next}while(r!==c)}}catch(A){Wt(n,n.return,A)}}function Ra(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var E=o.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,c=n;var P=r,$=A;try{$()}catch(he){Wt(c,P,he)}}}o=o.next}while(o!==h)}}catch(he){Wt(n,n.return,he)}}function lg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{jp(n,r)}catch(o){Wt(t,t.return,o)}}}function ug(t,n,r){r.props=hr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Wt(t,n,o)}}function mo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){Wt(t,n,c)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Wt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Wt(t,n,c)}else r.current=null}function cg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Wt(t,t.return,c)}}function ff(t,n,r){try{var o=t.stateNode;uS(o,t.type,r,n),o[Jt]=n}catch(c){Wt(t,t.return,c)}}function fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=$l));else if(o!==4&&(o===27&&Pa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(df(t,n,r),t=t.sibling;t!==null;)df(t,n,r),t=t.sibling}function Vl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Pa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Vl(t,n,r),t=t.sibling;t!==null;)Vl(t,n,r),t=t.sibling}function hg(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,r),n[hn]=t,n[Jt]=r}catch(h){Wt(t,t.return,h)}}var ea=!1,an=!1,pf=!1,dg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function kx(t,n){if(t=t.containerInfo,Ff=su,t=Tp(t),fc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var E=0,A=-1,P=-1,$=0,he=0,ve=t,ne=null;t:for(;;){for(var ie;ve!==r||c!==0&&ve.nodeType!==3||(A=E+c),ve!==h||o!==0&&ve.nodeType!==3||(P=E+o),ve.nodeType===3&&(E+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===t)break t;if(ne===r&&++$===c&&(A=E),ne===h&&++he===o&&(P=E),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}r=A===-1||P===-1?null:{start:A,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(zf={focusedElem:t,selectionRange:r},su=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,c=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var rt=hr(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(rt,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Wt(r,r.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Vf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function pg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(t,r),o&4&&po(5,r);break;case 1:if(Ca(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){Wt(r,r.return,E)}else{var c=hr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Wt(r,r.return,E)}}o&64&&lg(r),o&512&&mo(r,r.return);break;case 3:if(Ca(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{jp(t,n)}catch(E){Wt(r,r.return,E)}}break;case 27:n===null&&o&4&&hg(r);case 26:case 5:Ca(t,r),n===null&&o&4&&cg(r),o&512&&mo(r,r.return);break;case 12:Ca(t,r);break;case 13:Ca(t,r),o&4&&vg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Jx.bind(null,r),gS(t,r))));break;case 22:if(o=r.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||an,c=ea;var h=an;ea=o,(an=n)&&!h?wa(t,r,(r.subtreeFlags&8772)!==0):Ca(t,r),ea=c,an=h}break;case 30:break;default:Ca(t,r)}}function mg(t){var n=t.alternate;n!==null&&(t.alternate=null,mg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Nr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Wn=!1;function ta(t,n,r){for(r=r.child;r!==null;)gg(t,n,r),r=r.sibling}function gg(t,n,r){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(ce,r)}catch{}switch(r.tag){case 26:an||Oi(r,n),ta(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:an||Oi(r,n);var o=jt,c=Wn;Pa(r.type)&&(jt=r.stateNode,Wn=!1),ta(t,n,r),To(r.stateNode),jt=o,Wn=c;break;case 5:an||Oi(r,n);case 6:if(o=jt,c=Wn,jt=null,ta(t,n,r),jt=o,Wn=c,jt!==null)if(Wn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(r.stateNode)}catch(h){Wt(r,n,h)}else try{jt.removeChild(r.stateNode)}catch(h){Wt(r,n,h)}break;case 18:jt!==null&&(Wn?(t=jt,av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Lo(t)):av(jt,r.stateNode));break;case 4:o=jt,c=Wn,jt=r.stateNode.containerInfo,Wn=!0,ta(t,n,r),jt=o,Wn=c;break;case 0:case 11:case 14:case 15:an||Ra(2,r,n),an||Ra(4,r,n),ta(t,n,r);break;case 1:an||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ug(r,n,o)),ta(t,n,r);break;case 21:ta(t,n,r);break;case 22:an=(o=an)||r.memoizedState!==null,ta(t,n,r),an=o;break;default:ta(t,n,r)}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lo(t)}catch(r){Wt(n,n.return,r)}}function Xx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new dg),n;default:throw Error(s(435,t.tag))}}function mf(t,n){var r=Xx(t);n.forEach(function(o){var c=$x.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function Kn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],h=t,E=n,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(Pa(A.type)){jt=A.stateNode,Wn=!1;break e}break;case 5:jt=A.stateNode,Wn=!1;break e;case 3:case 4:jt=A.stateNode.containerInfo,Wn=!0;break e}A=A.return}if(jt===null)throw Error(s(160));gg(h,E,c),jt=null,Wn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)_g(n,t),n=n.sibling}var Si=null;function _g(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(Ra(3,t,t.return),po(3,t),Ra(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(an||r===null||Oi(r,r.return)),o&64&&ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Si;if(Kn(n,t),Qn(t),o&512&&(an||r===null||Oi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Ui]||h[hn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Cn(h,o,r),h[hn]=t,on(h),o=h;break e;case"link":var E=hv("link","href",c).get(o+(r.href||""));if(E){for(var A=0;A<E.length;A++)if(h=E[A],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(A,1);break t}}h=c.createElement(o),Cn(h,o,r),c.head.appendChild(h);break;case"meta":if(E=hv("meta","content",c).get(o+(r.content||""))){for(A=0;A<E.length;A++)if(h=E[A],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(A,1);break t}}h=c.createElement(o),Cn(h,o,r),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[hn]=t,on(h),o=h}t.stateNode=o}else dv(c,t.type,t.stateNode);else t.stateNode=fv(c,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?dv(c,t.type,t.stateNode):fv(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&ff(t,t.memoizedProps,r.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(an||r===null||Oi(r,r.return)),r!==null&&o&4&&ff(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(an||r===null||Oi(r,r.return)),t.flags&32){c=t.stateNode;try{Vn(c,"")}catch(ie){Wt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,ff(t,c,r!==null?r.memoizedProps:c)),o&1024&&(pf=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ie){Wt(t,t.return,ie)}}break;case 3:if(iu=null,c=Si,Si=tu(n.containerInfo),Kn(n,t),Si=c,Qn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(ie){Wt(t,t.return,ie)}pf&&(pf=!1,xg(t));break;case 4:o=Si,Si=tu(t.stateNode.containerInfo),Kn(n,t),Qn(t),Si=o;break;case 12:Kn(n,t),Qn(t);break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yf=Pe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 22:c=t.memoizedState!==null;var P=r!==null&&r.memoizedState!==null,$=ea,he=an;if(ea=$||c,an=he||P,Kn(n,t),an=he,ea=$,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||P||ea||an||dr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){P=r=n;try{if(h=P.stateNode,c)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=P.stateNode;var ve=P.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Wt(P,P.return,ie)}}}else if(n.tag===6){if(r===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ie){Wt(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,mf(t,r))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,mf(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(fg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,h=hf(t);Vl(t,h,c);break;case 5:var E=r.stateNode;r.flags&32&&(Vn(E,""),r.flags&=-33);var A=hf(t);Vl(t,A,E);break;case 3:case 4:var P=r.stateNode.containerInfo,$=hf(t);df(t,$,P);break;default:throw Error(s(161))}}catch(he){Wt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function xg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),dr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&ug(n,n.return,r),dr(n);break;case 27:To(n.stateNode);case 26:case 5:Oi(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function wa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:wa(c,h,r),po(4,h);break;case 1:if(wa(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Wt(o,o.return,$)}if(o=h,c=o.updateQueue,c!==null){var A=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Zp(P[c],A)}catch($){Wt(o,o.return,$)}}r&&E&64&&lg(h),mo(h,h.return);break;case 27:hg(h);case 26:case 5:wa(c,h,r),r&&o===null&&E&4&&cg(h),mo(h,h.return);break;case 12:wa(c,h,r);break;case 13:wa(c,h,r),r&&E&4&&vg(c,h);break;case 22:h.memoizedState===null&&wa(c,h,r),mo(h,h.return);break;case 30:break;default:wa(c,h,r)}n=n.sibling}}function gf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&$s(r))}function vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function Pi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(t,n,r,o),n=n.sibling}function Sg(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,r,o),c&2048&&po(9,n);break;case 1:Pi(t,n,r,o);break;case 3:Pi(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(c&2048){Pi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,A=h.onPostCommit;typeof A=="function"&&A(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Wt(n,n.return,P)}}else Pi(t,n,r,o);break;case 13:Pi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?Pi(t,n,r,o):go(t,n):h._visibility&2?Pi(t,n,r,o):(h._visibility|=2,$r(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&gf(E,n);break;case 24:Pi(t,n,r,o),c&2048&&vf(n.alternate,n);break;default:Pi(t,n,r,o)}}function $r(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,A=r,P=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:$r(h,E,A,P,c),po(8,E);break;case 23:break;case 22:var he=E.stateNode;E.memoizedState!==null?he._visibility&2?$r(h,E,A,P,c):go(h,E):(he._visibility|=2,$r(h,E,A,P,c)),c&&$&2048&&gf(E.alternate,E);break;case 24:$r(h,E,A,P,c),c&&$&2048&&vf(E.alternate,E);break;default:$r(h,E,A,P,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:go(r,o),c&2048&&gf(o.alternate,o);break;case 24:go(r,o),c&2048&&vf(o.alternate,o);break;default:go(r,o)}n=n.sibling}}var vo=8192;function es(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)yg(t),t=t.sibling}function yg(t){switch(t.tag){case 26:es(t),t.flags&vo&&t.memoizedState!==null&&wS(Si,t.memoizedState,t.memoizedProps);break;case 5:es(t);break;case 3:case 4:var n=Si;Si=tu(t.stateNode.containerInfo),es(t),Si=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=vo,vo=16777216,es(t),vo=n):es(t));break;default:es(t)}}function Eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];yn=o,Tg(o,t)}Eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mg(t),t=t.sibling}function Mg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):_o(t);break;default:_o(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];yn=o,Tg(o,t)}Eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),kl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function Tg(t,n){for(;yn!==null;){var r=yn;switch(r.tag){case 0:case 11:case 15:Ra(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,yn=o;else e:for(r=t;yn!==null;){o=yn;var c=o.sibling,h=o.return;if(mg(o),o===r){yn=null;break e}if(c!==null){c.return=h,yn=c;break e}yn=h}}}var Wx={getCacheForType:function(t){var n=Ln(dn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},qx=typeof WeakMap=="function"?WeakMap:Map,It=0,qt=null,yt=null,bt=0,Ft=0,Jn=null,Da=!1,ts=!1,_f=!1,na=0,tn=0,Ua=0,pr=0,xf=0,fi=0,ns=0,xo=null,qn=null,Sf=!1,yf=0,Xl=1/0,Wl=null,La=null,Rn=0,Na=null,is=null,as=0,Ef=0,Mf=null,Ag=null,So=0,Tf=null;function $n(){if((It&2)!==0&&bt!==0)return bt&-bt;if(I.T!==null){var t=Wr;return t!==0?t:Uf()}return Ct()}function bg(){fi===0&&(fi=(bt&536870912)===0||Ot?X():536870912);var t=ci.current;return t!==null&&(t.flags|=32),fi}function ei(t,n,r){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Oa(t,bt,fi,!1)),Fe(t,r),((It&2)===0||t!==qt)&&(t===qt&&((It&2)===0&&(pr|=r),tn===4&&Oa(t,bt,fi,!1)),Bi(t))}function Rg(t,n,r){if((It&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||De(t,n),c=o?jx(t,n):Rf(t,n,!0),h=o;do{if(c===0){ts&&!o&&Oa(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!Yx(r)){c=Rf(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var A=t;c=xo;var P=A.current.memoizedState.isDehydrated;if(P&&(rs(A,E).flags|=256),E=Rf(A,E,!1),E!==2){if(_f&&!P){A.errorRecoveryDisabledLanes|=h,pr|=h,c=4;break e}h=qn,qn=c,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}c=E}if(h=!1,c!==2)continue}}if(c===1){rs(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,fi,!Da);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=yf+300-Pe(),10<c)){if(Oa(o,n,fi,!Da),Xe(o,0,!0)!==0)break e;o.timeoutHandle=nv(Cg.bind(null,o,r,qn,Wl,Sf,n,fi,pr,ns,Da,h,2,-0,0),c);break e}Cg(o,r,qn,Wl,Sf,n,fi,pr,ns,Da,h,0,-0,0)}}break}while(!0);Bi(t)}function Cg(t,n,r,o,c,h,E,A,P,$,he,ve,ne,ie){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:CS},yg(n),ve=DS(),ve!==null)){t.cancelPendingCommit=ve(Pg.bind(null,t,n,h,r,o,c,E,A,P,he,1,ne,ie)),Oa(t,h,E,!$);return}Pg(t,n,h,r,o,c,E,A,P)}function Yx(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,r,o){n&=~xf,n&=~pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Ie(c),E=1<<h;o[h]=-1,c&=~E}r!==0&&xe(t,r,n)}function ql(){return(It&6)===0?(yo(0),!1):!0}function Af(){if(yt!==null){if(Ft===0)var t=yt.return;else t=yt,Zi=lr=null,Gc(t),Qr=null,co=0,t=yt;for(;t!==null;)og(t.alternate,t),t=t.return;yt=null}}function rs(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,fS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Af(),qt=t,yt=r=Wi(t.current,null),bt=n,Ft=0,Jn=null,Da=!1,ts=De(t,n),_f=!1,ns=fi=xf=pr=Ua=tn=0,qn=xo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ie(o),h=1<<c;n|=t[c],o&=~h}return na=n,pl(),r}function wg(t,n){gt=null,I.H=Nl,n===to||n===Ml?(n=qp(),Ft=3):n===kp?(n=qp(),Ft=4):Ft=n===Ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,yt===null&&(tn=1,Fl(t,si(n,t.current)))}function Dg(){var t=I.H;return I.H=Nl,t===null?Nl:t}function Ug(){var t=I.A;return I.A=Wx,t}function bf(){tn=4,Da||(bt&4194048)!==bt&&ci.current!==null||(ts=!0),(Ua&134217727)===0&&(pr&134217727)===0||qt===null||Oa(qt,bt,fi,!1)}function Rf(t,n,r){var o=It;It|=2;var c=Dg(),h=Ug();(qt!==t||bt!==n)&&(Wl=null,rs(t,n)),n=!1;var E=tn;e:do try{if(Ft!==0&&yt!==null){var A=yt,P=Jn;switch(Ft){case 8:Af(),E=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var $=Ft;if(Ft=0,Jn=null,ss(t,A,P,$),r&&ts){E=0;break e}break;default:$=Ft,Ft=0,Jn=null,ss(t,A,P,$)}}Zx(),E=tn;break}catch(he){wg(t,he)}while(!0);return n&&t.shellSuspendCounter++,Zi=lr=null,It=o,I.H=c,I.A=h,yt===null&&(qt=null,bt=0,pl()),E}function Zx(){for(;yt!==null;)Lg(yt)}function jx(t,n){var r=It;It|=2;var o=Dg(),c=Ug();qt!==t||bt!==n?(Wl=null,Xl=Pe()+500,rs(t,n)):ts=De(t,n);e:do try{if(Ft!==0&&yt!==null){n=yt;var h=Jn;t:switch(Ft){case 1:Ft=0,Jn=null,ss(t,n,h,1);break;case 2:case 9:if(Xp(h)){Ft=0,Jn=null,Ng(n);break}n=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Bi(t)},h.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Xp(h)?(Ft=0,Jn=null,Ng(n)):(Ft=0,Jn=null,ss(t,n,h,7));break;case 5:var E=null;switch(yt.tag){case 26:E=yt.memoizedState;case 5:case 27:var A=yt;if(!E||pv(E)){Ft=0,Jn=null;var P=A.sibling;if(P!==null)yt=P;else{var $=A.return;$!==null?(yt=$,Yl($)):yt=null}break t}}Ft=0,Jn=null,ss(t,n,h,5);break;case 6:Ft=0,Jn=null,ss(t,n,h,6);break;case 8:Af(),tn=6;break e;default:throw Error(s(462))}}Kx();break}catch(he){wg(t,he)}while(!0);return Zi=lr=null,I.H=o,I.A=c,It=r,yt!==null?0:(qt=null,bt=0,pl(),tn)}function Kx(){for(;yt!==null&&!st();)Lg(yt)}function Lg(t){var n=rg(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?Yl(t):yt=n}function Ng(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=$m(r,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=$m(r,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Gc(n);default:og(r,n),n=yt=Op(n,na),n=rg(r,n,na)}t.memoizedProps=t.pendingProps,n===null?Yl(t):yt=n}function ss(t,n,r,o){Zi=lr=null,Gc(n),Qr=null,co=0;var c=n.return;try{if(zx(t,c,n,r,bt)){tn=1,Fl(t,si(r,t.current)),yt=null;return}}catch(h){if(c!==null)throw yt=c,h;tn=1,Fl(t,si(r,t.current)),yt=null;return}n.flags&32768?(Ot||o===1?t=!0:ts||(bt&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){Og(n,Da);return}t=n.return;var r=Gx(n.alternate,n,na);if(r!==null){yt=r;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);tn===0&&(tn=5)}function Og(t,n){do{var r=Vx(t.alternate,t);if(r!==null){r.flags&=32767,yt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=r}while(t!==null);tn=6,yt=null}function Pg(t,n,r,o,c,h,E,A,P){t.cancelPendingCommit=null;do Zl();while(Rn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=gc,Me(t,r,h,E,A,P),t===qt&&(yt=qt=null,bt=0),is=n,Na=t,as=r,Ef=h,Mf=c,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,eS(lt,function(){return Hg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=Y.p,Y.p=2,E=It,It|=4;try{kx(t,n,r)}finally{It=E,Y.p=c,I.T=o}}Rn=1,Bg(),Ig(),Fg()}}function Bg(){if(Rn===1){Rn=0;var t=Na,n=is,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var o=Y.p;Y.p=2;var c=It;It|=4;try{_g(n,t);var h=zf,E=Tp(t.containerInfo),A=h.focusedElem,P=h.selectionRange;if(E!==A&&A&&A.ownerDocument&&Mp(A.ownerDocument.documentElement,A)){if(P!==null&&fc(A)){var $=P.start,he=P.end;if(he===void 0&&(he=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(he,A.value.length);else{var ve=A.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),rt=A.textContent.length,tt=Math.min(P.start,rt),Vt=P.end===void 0?tt:Math.min(P.end,rt);!ie.extend&&tt>Vt&&(E=Vt,Vt=tt,tt=E);var q=Ep(A,tt),k=Ep(A,Vt);if(q&&k&&(ie.rangeCount!==1||ie.anchorNode!==q.node||ie.anchorOffset!==q.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var Q=ve.createRange();Q.setStart(q.node,q.offset),ie.removeAllRanges(),tt>Vt?(ie.addRange(Q),ie.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ie.addRange(Q))}}}}for(ve=[],ie=A;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var de=ve[A];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}su=!!Ff,zf=Ff=null}finally{It=c,Y.p=o,I.T=r}}t.current=n,Rn=2}}function Ig(){if(Rn===2){Rn=0;var t=Na,n=is,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var o=Y.p;Y.p=2;var c=It;It|=4;try{pg(t,n.alternate,n)}finally{It=c,Y.p=o,I.T=r}}Rn=3}}function Fg(){if(Rn===4||Rn===3){Rn=0,$e();var t=Na,n=is,r=as,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,is=Na=null,zg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(La=null),Pt(r),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=Y.p,Y.p=2,I.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var A=o[E];h(A.value,{componentStack:A.stack})}}finally{I.T=n,Y.p=c}}(as&3)!==0&&Zl(),Bi(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===Tf?So++:(So=0,Tf=t):So=0,yo(0)}}function zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function Zl(t){return Bg(),Ig(),Fg(),Hg()}function Hg(){if(Rn!==5)return!1;var t=Na,n=Ef;Ef=0;var r=Pt(as),o=I.T,c=Y.p;try{Y.p=32>r?32:r,I.T=null,r=Mf,Mf=null;var h=Na,E=as;if(Rn=0,is=Na=null,as=0,(It&6)!==0)throw Error(s(331));var A=It;if(It|=4,Mg(h.current),Sg(h,h.current,E,r),It=A,yo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(ce,h)}catch{}return!0}finally{Y.p=c,I.T=o,zg(t,n)}}function Gg(t,n,r){n=si(r,n),n=tf(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(Fe(t,2),Bi(t))}function Wt(t,n,r){if(t.tag===3)Gg(t,t,r);else for(;n!==null;){if(n.tag===3){Gg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))){t=si(r,t),r=Wm(2),o=Ma(n,r,2),o!==null&&(qm(r,o,n,t),Fe(o,2),Bi(o));break}}n=n.return}}function Cf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new qx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(_f=!0,c.add(r),t=Qx.bind(null,t,n,r),n.then(t,t))}function Qx(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,qt===t&&(bt&r)===r&&(tn===4||tn===3&&(bt&62914560)===bt&&300>Pe()-yf?(It&2)===0&&rs(t,0):xf|=r,ns===bt&&(ns=0)),Bi(t)}function Vg(t,n){n===0&&(n=Ae()),t=Gr(t,n),t!==null&&(Fe(t,n),Bi(t))}function Jx(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Vg(t,r)}function $x(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Vg(t,r)}function eS(t,n){return F(t,n)}var jl=null,os=null,wf=!1,Kl=!1,Df=!1,mr=0;function Bi(t){t!==os&&t.next===null&&(os===null?jl=os=t:os=os.next=t),Kl=!0,wf||(wf=!0,nS())}function yo(t,n){if(!Df&&Kl){Df=!0;do for(var r=!1,o=jl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var E=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-Ie(42|t)+1)-1,h&=c&~(E&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,qg(o,h))}else h=bt,h=Xe(o,o===qt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||De(o,h)||(r=!0,qg(o,h));o=o.next}while(r);Df=!1}}function tS(){kg()}function kg(){Kl=wf=!1;var t=0;mr!==0&&(cS()&&(t=mr),mr=0);for(var n=Pe(),r=null,o=jl;o!==null;){var c=o.next,h=Xg(o,n);h===0?(o.next=null,r===null?jl=c:r.next=c,c===null&&(os=r)):(r=o,(t!==0||(h&3)!==0)&&(Kl=!0)),o=c}yo(t)}function Xg(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Ie(h),A=1<<E,P=c[E];P===-1?((A&r)===0||(A&o)!==0)&&(c[E]=ut(A,n)):P<=n&&(t.expiredLanes|=A),h&=~A}if(n=qt,r=bt,r=Xe(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&At(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||De(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&At(o),Pt(r)){case 2:case 8:r=Be;break;case 32:r=lt;break;case 268435456:r=O;break;default:r=lt}return o=Wg.bind(null,t),r=F(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&At(o),t.callbackPriority=2,t.callbackNode=null,2}function Wg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Zl()&&t.callbackNode!==r)return null;var o=bt;return o=Xe(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Rg(t,o,n),Xg(t,Pe()),t.callbackNode!=null&&t.callbackNode===r?Wg.bind(null,t):null)}function qg(t,n){if(Zl())return null;Rg(t,n,!0)}function nS(){hS(function(){(It&6)!==0?F(ze,tS):kg()})}function Uf(){return mr===0&&(mr=X()),mr}function Yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ol(""+t)}function Zg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function iS(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=Yg((c[Jt]||null).action),E=o.submitter;E&&(n=(n=E[Jt]||null)?Yg(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var A=new fl("action","action",null,o,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(mr!==0){var P=E?Zg(c,E):new FormData(c);Kc(r,{pending:!0,data:P,method:c.method,action:h},null,P)}}else typeof h=="function"&&(A.preventDefault(),P=E?Zg(c,E):new FormData(c),Kc(r,{pending:!0,data:P,method:c.method,action:h},h,P))},currentTarget:c}]})}}for(var Lf=0;Lf<mc.length;Lf++){var Nf=mc[Lf],aS=Nf.toLowerCase(),rS=Nf[0].toUpperCase()+Nf.slice(1);xi(aS,"on"+rS)}xi(Rp,"onAnimationEnd"),xi(Cp,"onAnimationIteration"),xi(wp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ex,"onTransitionRun"),xi(Mx,"onTransitionStart"),xi(Tx,"onTransitionCancel"),xi(Dp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function jg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var A=o[E],P=A.instance,$=A.currentTarget;if(A=A.listener,P!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=$;try{h(c)}catch(he){Il(he)}c.currentTarget=null,h=P}else for(E=0;E<o.length;E++){if(A=o[E],P=A.instance,$=A.currentTarget,A=A.listener,P!==h&&c.isPropagationStopped())break e;h=A,c.currentTarget=$;try{h(c)}catch(he){Il(he)}c.currentTarget=null,h=P}}}}function Et(t,n){var r=n[Ur];r===void 0&&(r=n[Ur]=new Set);var o=t+"__bubble";r.has(o)||(Kg(n,t,2,!1),r.add(o))}function Of(t,n,r){var o=0;n&&(o|=4),Kg(r,t,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[Ql]){t[Ql]=!0,rl.forEach(function(r){r!=="selectionchange"&&(sS.has(r)||Of(r,!1,t),Of(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Of("selectionchange",!1,n))}}function Kg(t,n,r,o){switch(Sv(n)){case 2:var c=NS;break;case 8:c=OS;break;default:c=jf}r=c.bind(null,n,r,t),c=void 0,!nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Bf(t,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var A=o.stateNode.containerInfo;if(A===c)break;if(E===4)for(E=o.return;E!==null;){var P=E.tag;if((P===3||P===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;A!==null;){if(E=ki(A),E===null)return;if(P=E.tag,P===5||P===6||P===26||P===27){o=h=E;continue e}A=A.parentNode}}o=o.return}ip(function(){var $=h,he=ec(r),ve=[];e:{var ne=Up.get(t);if(ne!==void 0){var ie=fl,rt=t;switch(t){case"keypress":if(ul(r)===0)break e;case"keydown":case"keyup":ie=ex;break;case"focusin":rt="focus",ie=sc;break;case"focusout":rt="blur",ie=sc;break;case"beforeblur":case"afterblur":ie=sc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=ix;break;case Rp:case Cp:case wp:ie=W0;break;case Dp:ie=rx;break;case"scroll":case"scrollend":ie=H0;break;case"wheel":ie=ox;break;case"copy":case"cut":case"paste":ie=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=lp;break;case"toggle":case"beforetoggle":ie=ux}var tt=(n&4)!==0,Vt=!tt&&(t==="scroll"||t==="scrollend"),q=tt?ne!==null?ne+"Capture":null:ne;tt=[];for(var k=$,Q;k!==null;){var de=k;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||q===null||(de=Hs(k,q),de!=null&&tt.push(Mo(k,de,Q))),Vt)break;k=k.return}0<tt.length&&(ne=new ie(ne,rt,null,r,he),ve.push({event:ne,listeners:tt}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&r!==$u&&(rt=r.relatedTarget||r.fromElement)&&(ki(rt)||rt[Di]))break e;if((ie||ne)&&(ne=he.window===he?he:(ne=he.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(rt=r.relatedTarget||r.toElement,ie=$,rt=rt?ki(rt):null,rt!==null&&(Vt=u(rt),tt=rt.tag,rt!==Vt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ie=null,rt=$),ie!==rt)){if(tt=sp,de="onMouseLeave",q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=lp,de="onPointerLeave",q="onPointerEnter",k="pointer"),Vt=ie==null?ne:$a(ie),Q=rt==null?ne:$a(rt),ne=new tt(de,k+"leave",ie,r,he),ne.target=Vt,ne.relatedTarget=Q,de=null,ki(he)===$&&(tt=new tt(q,k+"enter",rt,r,he),tt.target=Q,tt.relatedTarget=Vt,de=tt),Vt=de,ie&&rt)t:{for(tt=ie,q=rt,k=0,Q=tt;Q;Q=ls(Q))k++;for(Q=0,de=q;de;de=ls(de))Q++;for(;0<k-Q;)tt=ls(tt),k--;for(;0<Q-k;)q=ls(q),Q--;for(;k--;){if(tt===q||q!==null&&tt===q.alternate)break t;tt=ls(tt),q=ls(q)}tt=null}else tt=null;ie!==null&&Qg(ve,ne,ie,tt,!1),rt!==null&&Vt!==null&&Qg(ve,Vt,rt,tt,!0)}}e:{if(ne=$?$a($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var Ve=gp;else if(pp(ne))if(vp)Ve=xx;else{Ve=vx;var vt=gx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Ju($.elementType)&&(Ve=gp):Ve=_x;if(Ve&&(Ve=Ve(t,$))){mp(ve,Ve,r,he);break e}vt&&vt(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Un(ne,"number",ne.value)}switch(vt=$?$a($):window,t){case"focusin":(pp(vt)||vt.contentEditable==="true")&&(Fr=vt,hc=$,Zs=null);break;case"focusout":Zs=hc=Fr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Ap(ve,r,he);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Ap(ve,r,he)}var Ke;if(lc)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Ir?hp(t,r)&&(at="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(at="onCompositionStart");at&&(up&&r.locale!=="ko"&&(Ir||at!=="onCompositionStart"?at==="onCompositionEnd"&&Ir&&(Ke=ap()):(xa=he,ic="value"in xa?xa.value:xa.textContent,Ir=!0)),vt=Jl($,at),0<vt.length&&(at=new op(at,t,null,r,he),ve.push({event:at,listeners:vt}),Ke?at.data=Ke:(Ke=dp(r),Ke!==null&&(at.data=Ke)))),(Ke=fx?hx(t,r):dx(t,r))&&(at=Jl($,"onBeforeInput"),0<at.length&&(vt=new op("onBeforeInput","beforeinput",null,r,he),ve.push({event:vt,listeners:at}),vt.data=Ke)),iS(ve,t,$,r,he)}jg(ve,n)})}function Mo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Jl(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Hs(t,r),c!=null&&o.unshift(Mo(t,c,h)),c=Hs(t,n),c!=null&&o.push(Mo(t,c,h))),t.tag===3)return o;t=t.return}return[]}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qg(t,n,r,o,c){for(var h=n._reactName,E=[];r!==null&&r!==o;){var A=r,P=A.alternate,$=A.stateNode;if(A=A.tag,P!==null&&P===o)break;A!==5&&A!==26&&A!==27||$===null||(P=$,c?($=Hs(r,h),$!=null&&E.unshift(Mo(r,$,P))):c||($=Hs(r,h),$!=null&&E.push(Mo(r,$,P)))),r=r.return}E.length!==0&&t.push({event:n,listeners:E})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function Jg(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(lS,"")}function $g(t,n){return n=Jg(n),Jg(t)===n}function $l(){}function Gt(t,n,r,o,c,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(t,""+o);break;case"className":He(t,"class",o);break;case"tabIndex":He(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,r,o);break;case"style":tp(t,o,h);break;case"data":if(n!=="object"){He(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ol(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Gt(t,n,"name",c.name,c,null),Gt(t,n,"formEncType",c.formEncType,c,null),Gt(t,n,"formMethod",c.formMethod,c,null),Gt(t,n,"formTarget",c.formTarget,c,null)):(Gt(t,n,"encType",c.encType,c,null),Gt(t,n,"method",c.method,c,null),Gt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ol(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=$l);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ol(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ue(t,"popover",o);break;case"xlinkActuate":Ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ne(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ne(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ne(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ne(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ue(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=F0.get(r)||r,Ue(t,r,o))}}function If(t,n,r,o,c,h){switch(r){case"style":tp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&Vn(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$l);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sl.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),h=t[Jt]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Ue(t,r,o)}}}function Cn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var E=r[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,h,E,r,null)}}c&&Gt(t,n,"srcSet",r.srcSet,r,null),o&&Gt(t,n,"src",r.src,r,null);return;case"input":Et("invalid",t);var A=h=E=c=null,P=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var he=r[o];if(he!=null)switch(o){case"name":c=he;break;case"type":E=he;break;case"checked":P=he;break;case"defaultChecked":$=he;break;case"value":h=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Gt(t,n,o,he,r,null)}}Fn(t,h,A,P,$,E,c,!1),St(t);return;case"select":Et("invalid",t),o=E=h=null;for(c in r)if(r.hasOwnProperty(c)&&(A=r[c],A!=null))switch(c){case"value":h=A;break;case"defaultValue":E=A;break;case"multiple":o=A;default:Gt(t,n,c,A,r,null)}n=h,r=E,t.multiple=!!o,n!=null?$t(t,!!o,n,!1):r!=null&&$t(t,!!o,r,!0);return;case"textarea":Et("invalid",t),h=c=o=null;for(E in r)if(r.hasOwnProperty(E)&&(A=r[E],A!=null))switch(E){case"value":o=A;break;case"defaultValue":c=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Gt(t,n,E,A,r,null)}Or(t,o,c,h),St(t);return;case"option":for(P in r)if(r.hasOwnProperty(P)&&(o=r[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Gt(t,n,P,o,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)Et(Eo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(t,n,$,o,r,null)}return;default:if(Ju(n)){for(he in r)r.hasOwnProperty(he)&&(o=r[he],o!==void 0&&If(t,n,he,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&Gt(t,n,A,o,r,null))}function uS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,E=null,A=null,P=null,$=null,he=null;for(ie in r){var ve=r[ie];if(r.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=ve;default:o.hasOwnProperty(ie)||Gt(t,n,ie,null,o,ve)}}for(var ne in o){var ie=o[ne];if(ve=r[ne],o.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":h=ie;break;case"name":c=ie;break;case"checked":$=ie;break;case"defaultChecked":he=ie;break;case"value":E=ie;break;case"defaultValue":A=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:ie!==ve&&Gt(t,n,ne,ie,o,ve)}}Xt(t,E,A,P,$,he,h,c);return;case"select":ie=E=A=ne=null;for(h in r)if(P=r[h],r.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":ie=P;default:o.hasOwnProperty(h)||Gt(t,n,h,null,o,P)}for(c in o)if(h=o[c],P=r[c],o.hasOwnProperty(c)&&(h!=null||P!=null))switch(c){case"value":ne=h;break;case"defaultValue":A=h;break;case"multiple":E=h;default:h!==P&&Gt(t,n,c,h,o,P)}n=A,r=E,o=ie,ne!=null?$t(t,!!r,ne,!1):!!o!=!!r&&(n!=null?$t(t,!!r,n,!0):$t(t,!!r,r?[]:"",!1));return;case"textarea":ie=ne=null;for(A in r)if(c=r[A],r.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Gt(t,n,A,null,o,c)}for(E in o)if(c=o[E],h=r[E],o.hasOwnProperty(E)&&(c!=null||h!=null))switch(E){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Gt(t,n,E,c,o,h)}An(t,ne,ie);return;case"option":for(var rt in r)if(ne=r[rt],r.hasOwnProperty(rt)&&ne!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Gt(t,n,rt,null,o,ne)}for(P in o)if(ne=o[P],ie=r[P],o.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Gt(t,n,P,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in r)ne=r[tt],r.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt)&&Gt(t,n,tt,null,o,ne);for($ in o)if(ne=o[$],ie=r[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Gt(t,n,$,ne,o,ie)}return;default:if(Ju(n)){for(var Vt in r)ne=r[Vt],r.hasOwnProperty(Vt)&&ne!==void 0&&!o.hasOwnProperty(Vt)&&If(t,n,Vt,void 0,o,ne);for(he in o)ne=o[he],ie=r[he],!o.hasOwnProperty(he)||ne===ie||ne===void 0&&ie===void 0||If(t,n,he,ne,o,ie);return}}for(var q in r)ne=r[q],r.hasOwnProperty(q)&&ne!=null&&!o.hasOwnProperty(q)&&Gt(t,n,q,null,o,ne);for(ve in o)ne=o[ve],ie=r[ve],!o.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Gt(t,n,ve,ne,o,ie)}var Ff=null,zf=null;function eu(t){return t.nodeType===9?t:t.ownerDocument}function ev(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function cS(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(t){return iv.resolve(null).then(t).catch(dS)}:nv;function dS(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function av(t,n){var r=n,o=0,c=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var E=t.ownerDocument;if(r&1&&To(E.documentElement),r&2&&To(E.body),r&4)for(r=E.head,To(r),E=r.firstChild;E;){var A=E.nextSibling,P=E.nodeName;E[Ui]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=A}}if(c===0){t.removeChild(h),Lo(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);Lo(n)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Vf(r),Nr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function pS(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ui])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function mS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=yi(t.nextSibling),t===null))return null;return t}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function gS(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Xf=null;function rv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function sv(t,n,r){switch(n=eu(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Nr(t)}var hi=new Map,ov=new Set;function tu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=Y.d;Y.d={f:vS,r:_S,D:xS,C:SS,L:yS,m:ES,X:TS,S:MS,M:AS};function vS(){var t=ia.f(),n=ql();return t||n}function _S(t){var n=va(t);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ia.r(t)}var us=typeof document>"u"?null:document;function lv(t,n,r){var o=us;if(o&&typeof n=="string"&&n){var c=xn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),ov.has(c)||(ov.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),on(n),o.head.appendChild(n)))}}function xS(t){ia.D(t),lv("dns-prefetch",t,null)}function SS(t,n){ia.C(t,n),lv("preconnect",t,n)}function yS(t,n,r){ia.L(t,n,r);var o=us;if(o&&t&&n){var c='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+xn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+xn(r.imageSizes)+'"]')):c+='[href="'+xn(t)+'"]';var h=c;switch(n){case"style":h=cs(t);break;case"script":h=fs(t)}hi.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),hi.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(bo(h))||(n=o.createElement("link"),Cn(n,"link",t),on(n),o.head.appendChild(n)))}}function ES(t,n){ia.m(t,n);var r=us;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(t)}if(!hi.has(h)&&(t=g({rel:"modulepreload",href:t},n),hi.set(h,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bo(h)))return}o=r.createElement("link"),Cn(o,"link",t),on(o),r.head.appendChild(o)}}}function MS(t,n,r){ia.S(t,n,r);var o=us;if(o&&t){var c=_a(o).hoistableStyles,h=cs(t);n=n||"default";var E=c.get(h);if(!E){var A={loading:0,preload:null};if(E=o.querySelector(Ao(h)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=hi.get(h))&&Wf(t,r);var P=E=o.createElement("link");on(P),Cn(P,"link",t),P._p=new Promise(function($,he){P.onload=$,P.onerror=he}),P.addEventListener("load",function(){A.loading|=1}),P.addEventListener("error",function(){A.loading|=2}),A.loading|=4,nu(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:A},c.set(h,E)}}}function TS(t,n){ia.X(t,n);var r=us;if(r&&t){var o=_a(r).hoistableScripts,c=fs(t),h=o.get(c);h||(h=r.querySelector(bo(c)),h||(t=g({src:t,async:!0},n),(n=hi.get(c))&&qf(t,n),h=r.createElement("script"),on(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function AS(t,n){ia.M(t,n);var r=us;if(r&&t){var o=_a(r).hoistableScripts,c=fs(t),h=o.get(c);h||(h=r.querySelector(bo(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(c))&&qf(t,n),h=r.createElement("script"),on(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function uv(t,n,r,o){var c=(c=ee.current)?tu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=cs(r.href),r=_a(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=cs(r.href);var h=_a(c).hoistableStyles,E=h.get(t);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=c.querySelector(Ao(t)))&&!h._p&&(E.instance=h,E.state.loading=5),hi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},hi.set(t,r),h||bS(c,t,r,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(r),r=_a(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function cs(t){return'href="'+xn(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function cv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function bS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),on(n),t.head.appendChild(n))}function fs(t){return'[src="'+xn(t)+'"]'}function bo(t){return"script[async]"+t}function fv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+xn(r.href)+'"]');if(o)return n.instance=o,on(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),on(o),Cn(o,"style",c),nu(o,r.precedence,t),n.instance=o;case"stylesheet":c=cs(r.href);var h=t.querySelector(Ao(c));if(h)return n.state.loading|=4,n.instance=h,on(h),h;o=cv(r),(c=hi.get(c))&&Wf(o,c),h=(t.ownerDocument||t).createElement("link"),on(h);var E=h;return E._p=new Promise(function(A,P){E.onload=A,E.onerror=P}),Cn(h,"link",o),n.state.loading|=4,nu(h,r.precedence,t),n.instance=h;case"script":return h=fs(r.src),(c=t.querySelector(bo(h)))?(n.instance=c,on(c),c):(o=r,(c=hi.get(h))&&(o=g({},r),qf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),on(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,nu(o,r.precedence,t));return n.instance}function nu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,E=0;E<o.length;E++){var A=o[E];if(A.dataset.precedence===n)h=A;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var iu=null;function hv(t,n,r){if(iu===null){var o=new Map,c=iu=new Map;c.set(r,o)}else c=iu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var h=r[c];if(!(h[Ui]||h[hn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var A=o.get(E);A?A.push(h):o.set(E,[h])}}return o}function dv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function RS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ro=null;function CS(){}function wS(t,n,r){if(Ro===null)throw Error(s(475));var o=Ro;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=cs(r.href),h=t.querySelector(Ao(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=au.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,on(h);return}h=t.ownerDocument||t,r=cv(r),(c=hi.get(c))&&Wf(r,c),h=h.createElement("link"),on(h);var E=h;E._p=new Promise(function(A,P){E.onload=A,E.onerror=P}),Cn(h,"link",r),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=au.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function DS(){if(Ro===null)throw Error(s(475));var t=Ro;return t.stylesheets&&t.count===0&&Yf(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Yf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function au(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function Yf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,n.forEach(US,t),ru=null,au.call(t))}function US(t,n){if(!(n.state.loading&4)){var r=ru.get(t);if(r)var o=r.get(null);else{r=new Map,ru.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var E=c[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),h=r.get(E)||o,h===o&&r.set(null,c),r.set(E,c),this.count++,o=au.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function LS(t,n,r,o,c,h,E,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function mv(t,n,r,o,c,h,E,A,P,$,he,ve){return t=new LS(t,n,r,E,A,P,$,ve),n=1,h===!0&&(n|=24),h=jn(3,null,null,n),t.current=h,h.stateNode=t,n=Rc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Uc(h),t}function gv(t){return t?(t=Vr,t):Vr}function vv(t,n,r,o,c,h){c=gv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ea(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ma(t,o,n),r!==null&&(ei(r,t,n),io(r,t,n))}function _v(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Zf(t,n){_v(t,n),(t=t.alternate)&&_v(t,n)}function xv(t){if(t.tag===13){var n=Gr(t,67108864);n!==null&&ei(n,t,67108864),Zf(t,67108864)}}var su=!0;function NS(t,n,r,o){var c=I.T;I.T=null;var h=Y.p;try{Y.p=2,jf(t,n,r,o)}finally{Y.p=h,I.T=c}}function OS(t,n,r,o){var c=I.T;I.T=null;var h=Y.p;try{Y.p=8,jf(t,n,r,o)}finally{Y.p=h,I.T=c}}function jf(t,n,r,o){if(su){var c=Kf(o);if(c===null)Bf(t,n,o,ou,r),yv(t,o);else if(BS(c,t,n,r,o))o.stopPropagation();else if(yv(t,o),n&4&&-1<PS.indexOf(t)){for(;c!==null;){var h=va(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Qe(h.pendingLanes);if(E!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var P=1<<31-Ie(E);A.entanglements[1]|=P,E&=~P}Bi(h),(It&6)===0&&(Xl=Pe()+500,yo(0))}}break;case 13:A=Gr(h,2),A!==null&&ei(A,h,2),ql(),Zf(h,2)}if(h=Kf(o),h===null&&Bf(t,n,o,ou,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else Bf(t,n,o,null,r)}}function Kf(t){return t=ec(t),Qf(t)}var ou=null;function Qf(t){if(ou=null,t=ki(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ou=t,null}function Sv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case ze:return 2;case Be:return 8;case lt:case Rt:return 32;case O:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ba=null,Ia=null,Fa=null,wo=new Map,Do=new Map,za=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yv(t,n){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,r,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=va(n),n!==null&&xv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function BS(t,n,r,o,c){switch(n){case"focusin":return Ba=Uo(Ba,t,n,r,o,c),!0;case"dragenter":return Ia=Uo(Ia,t,n,r,o,c),!0;case"mouseover":return Fa=Uo(Fa,t,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return wo.set(h,Uo(wo.get(h)||null,t,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Do.set(h,Uo(Do.get(h)||null,t,n,r,o,c)),!0}return!1}function Ev(t){var n=ki(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,vi(t.priority,function(){if(r.tag===13){var o=$n();o=ot(o);var c=Gr(r,o);c!==null&&ei(c,r,o),Zf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Kf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);$u=o,r.target.dispatchEvent(o),$u=null}else return n=va(r),n!==null&&xv(n),t.blockedOn=r,!1;n.shift()}return!0}function Mv(t,n,r){lu(t)&&r.delete(n)}function IS(){Jf=!1,Ba!==null&&lu(Ba)&&(Ba=null),Ia!==null&&lu(Ia)&&(Ia=null),Fa!==null&&lu(Fa)&&(Fa=null),wo.forEach(Mv),Do.forEach(Mv)}function uu(t,n){t.blockedOn===n&&(t.blockedOn=null,Jf||(Jf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,IS)))}var cu=null;function Tv(t){cu!==t&&(cu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){cu===t&&(cu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Qf(o||r)===null)continue;break}var h=va(r);h!==null&&(t.splice(n,3),n-=3,Kc(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Lo(t){function n(P){return uu(P,t)}Ba!==null&&uu(Ba,t),Ia!==null&&uu(Ia,t),Fa!==null&&uu(Fa,t),wo.forEach(n),Do.forEach(n);for(var r=0;r<za.length;r++){var o=za[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<za.length&&(r=za[0],r.blockedOn===null);)Ev(r),r.blockedOn===null&&za.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],E=c[Jt]||null;if(typeof h=="function")E||Tv(r);else if(E){var A=null;if(h&&h.hasAttribute("formAction")){if(c=h,E=h[Jt]||null)A=E.formAction;else if(Qf(c)!==null)continue}else A=E.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),Tv(r)}}}function $f(t){this._internalRoot=t}fu.prototype.render=$f.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=$n();vv(r,o,t,n,null,null)},fu.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;vv(t.current,2,null,t,null,null),ql(),n[Di]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ct();t={blockedOn:null,target:t,priority:n};for(var r=0;r<za.length&&n!==0&&n<za[r].priority;r++);za.splice(r,0,t),r===0&&Ev(t)}};var Av=e.version;if(Av!=="19.1.1")throw Error(s(527,Av,"19.1.1"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var FS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{ce=hu.inject(FS),ge=hu}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=Gm,h=Vm,E=km,A=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=mv(t,1,!1,null,null,r,o,c,h,E,A,null),t[Di]=n.current,Pf(t),new $f(n)},Oo.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",h=Gm,E=Vm,A=km,P=null,$=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(P=r.unstable_transitionCallbacks),r.formState!==void 0&&($=r.formState)),n=mv(t,1,!0,n,r??null,o,c,h,E,A,P,$),n.context=gv(null),r=n.current,o=$n(),o=ot(o),c=Ea(o),c.callback=null,Ma(r,c,o),r=o,n.current.lanes=r,Fe(n,r),Bi(n),t[Di]=n.current,Pf(t),new fu(n)},Oo.version="19.1.1",Oo}var Pv;function ZS(){if(Pv)return nh.exports;Pv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),nh.exports=YS(),nh.exports}var jS=ZS();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bv="popstate";function KS(a={}){function e(s,l){let{pathname:u,search:f,hash:d}=s.location;return Vh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:ko(l)}return JS(e,i,null,a)}function Qt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Gi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QS(){return Math.random().toString(36).substring(2,10)}function Iv(a,e){return{usr:a.state,key:a.key,idx:e}}function Vh(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:i,key:e&&e.key||s||QS()}}function ko({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Ps(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function JS(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:b.location,delta:_})}function x(S,_){d="PUSH";let L=Vh(b.location,S,_);p=g()+1;let N=Iv(L,p),U=b.createHref(L);try{f.pushState(N,"",U)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(U)}u&&m&&m({action:d,location:b.location,delta:1})}function y(S,_){d="REPLACE";let L=Vh(b.location,S,_);p=g();let N=Iv(L,p),U=b.createHref(L);f.replaceState(N,"",U),u&&m&&m({action:d,location:b.location,delta:0})}function M(S){return $S(S)}let b={get action(){return d},get location(){return a(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Bv,v),m=S,()=>{l.removeEventListener(Bv,v),m=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let _=M(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:y,go(S){return f.go(S)}};return b}function $S(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:ko(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function k_(a,e,i="/"){return ey(a,e,i,!1)}function ey(a,e,i,s){let l=typeof e=="string"?Ps(e):e,u=da(l.pathname||"/",i);if(u==null)return null;let f=X_(a);ty(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=hy(u);d=cy(f[m],p,s)}return d}function X_(a,e=[],i=[],s="",l=!1){let u=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;Qt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let v=fa([s,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),X_(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:ly(v,f.index),routesMeta:x})};return a.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of W_(f.path))u(f,d,!0,m)}),e}function W_(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=W_(s.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function ty(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:uy(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var ny=/^:[\w-]+$/,iy=3,ay=2,ry=1,sy=10,oy=-2,Fv=a=>a==="*";function ly(a,e){let i=a.split("/"),s=i.length;return i.some(Fv)&&(s+=oy),e&&(s+=ay),i.filter(l=>!Fv(l)).reduce((l,u)=>l+(ny.test(u)?iy:u===""?ry:sy),s)}function uy(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function cy(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=ku({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&i&&!s[s.length-1].route.index&&(v=ku({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:fa([u,v.pathname]),pathnameBase:gy(fa([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=fa([u,v.pathnameBase]))}return f}function ku(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=fy(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let M=d[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const y=d[x];return v&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:a}}function fy(a,e=!1,i=!0){Gi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function hy(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function da(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function dy(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Ps(a):a;return{pathname:i?i.startsWith("/")?i:py(i,e):e,search:vy(s),hash:_y(l)}}function py(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function sh(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function my(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function q_(a){let e=my(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Y_(a,e,i,s=!1){let l;typeof a=="string"?l=Ps(a):(l={...a},Qt(!l.pathname||!l.pathname.includes("?"),sh("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),sh("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),sh("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?e[v]:"/"}let m=dy(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var fa=a=>a.join("/").replace(/\/\/+/g,"/"),gy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),vy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,_y=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function xy(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Z_=["POST","PUT","PATCH","DELETE"];new Set(Z_);var Sy=["GET",...Z_];new Set(Sy);var Bs=fe.createContext(null);Bs.displayName="DataRouter";var Yu=fe.createContext(null);Yu.displayName="DataRouterState";fe.createContext(!1);var j_=fe.createContext({isTransitioning:!1});j_.displayName="ViewTransition";var yy=fe.createContext(new Map);yy.displayName="Fetchers";var Ey=fe.createContext(null);Ey.displayName="Await";var Vi=fe.createContext(null);Vi.displayName="Navigation";var Zo=fe.createContext(null);Zo.displayName="Location";var ga=fe.createContext({outlet:null,matches:[],isDataRoute:!1});ga.displayName="Route";var Fd=fe.createContext(null);Fd.displayName="RouteError";function My(a,{relative:e}={}){Qt(jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=fe.useContext(Vi),{hash:l,pathname:u,search:f}=Ko(a,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:fa([i,u])),s.createHref({pathname:d,search:f,hash:l})}function jo(){return fe.useContext(Zo)!=null}function Dr(){return Qt(jo(),"useLocation() may be used only in the context of a <Router> component."),fe.useContext(Zo).location}var K_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q_(a){fe.useContext(Vi).static||fe.useLayoutEffect(a)}function Ty(){let{isDataRoute:a}=fe.useContext(ga);return a?Iy():Ay()}function Ay(){Qt(jo(),"useNavigate() may be used only in the context of a <Router> component.");let a=fe.useContext(Bs),{basename:e,navigator:i}=fe.useContext(Vi),{matches:s}=fe.useContext(ga),{pathname:l}=Dr(),u=JSON.stringify(q_(s)),f=fe.useRef(!1);return Q_(()=>{f.current=!0}),fe.useCallback((m,p={})=>{if(Gi(f.current,K_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Y_(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:fa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,a])}fe.createContext(null);function Ko(a,{relative:e}={}){let{matches:i}=fe.useContext(ga),{pathname:s}=Dr(),l=JSON.stringify(q_(i));return fe.useMemo(()=>Y_(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function by(a,e){return J_(a,e)}function J_(a,e,i,s,l){Qt(jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=fe.useContext(Vi),{matches:f}=fe.useContext(ga),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let L=v&&v.path||"";$_(p,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=Dr(),y;if(e){let L=typeof e=="string"?Ps(e):e;Qt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),y=L}else y=x;let M=y.pathname||"/",b=M;if(g!=="/"){let L=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=k_(a,{pathname:b});Gi(v||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Gi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Uy(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:fa([g,u.encodeLocation?u.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:fa([g,u.encodeLocation?u.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),f,i,s,l);return e&&_?fe.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function Ry(){let a=By(),e=xy(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=fe.createElement(fe.Fragment,null,fe.createElement("p",null,"💿 Hey developer 👋"),fe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",fe.createElement("code",{style:u},"ErrorBoundary")," or"," ",fe.createElement("code",{style:u},"errorElement")," prop on your route.")),fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),i?fe.createElement("pre",{style:l},i):null,f)}var Cy=fe.createElement(Ry,null),wy=class extends fe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?fe.createElement(ga.Provider,{value:this.props.routeContext},fe.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Dy({routeContext:a,match:e,children:i}){let s=fe.useContext(Bs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),fe.createElement(ga.Provider,{value:a},i)}function Uy(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let u=a,f=i?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:x}=i,y=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||y){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let x,y=!1,M=null,b=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,M=g.route.errorElement||Cy,d&&(m<0&&v===0?($_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,b=null):m===v&&(y=!0,b=g.route.hydrateFallbackElement||null)));let S=e.concat(u.slice(0,v+1)),_=()=>{let L;return x?L=M:y?L=b:g.route.Component?L=fe.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,fe.createElement(Dy,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?fe.createElement(wy,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:s}):_()},null)}function zd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ly(a){let e=fe.useContext(Bs);return Qt(e,zd(a)),e}function Ny(a){let e=fe.useContext(Yu);return Qt(e,zd(a)),e}function Oy(a){let e=fe.useContext(ga);return Qt(e,zd(a)),e}function Hd(a){let e=Oy(a),i=e.matches[e.matches.length-1];return Qt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Py(){return Hd("useRouteId")}function By(){let a=fe.useContext(Fd),e=Ny("useRouteError"),i=Hd("useRouteError");return a!==void 0?a:e.errors?.[i]}function Iy(){let{router:a}=Ly("useNavigate"),e=Hd("useNavigate"),i=fe.useRef(!1);return Q_(()=>{i.current=!0}),fe.useCallback(async(l,u={})=>{Gi(i.current,K_),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var zv={};function $_(a,e,i){!e&&!zv[a]&&(zv[a]=!0,Gi(!1,i))}fe.memo(Fy);function Fy({routes:a,future:e,state:i,unstable_onError:s}){return J_(a,void 0,i,s,e)}function kh(a){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zy({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){Qt(!jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=fe.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Ps(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=i,y=fe.useMemo(()=>{let M=da(m,f);return M==null?null:{location:{pathname:M,search:p,hash:g,state:v,key:x},navigationType:s}},[f,m,p,g,v,x,s]);return Gi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:fe.createElement(Vi.Provider,{value:d},fe.createElement(Zo.Provider,{children:e,value:y}))}function Hy({children:a,location:e}){return by(Xh(a),e)}function Xh(a,e=[]){let i=[];return fe.Children.forEach(a,(s,l)=>{if(!fe.isValidElement(s))return;let u=[...e,l];if(s.type===fe.Fragment){i.push.apply(i,Xh(s.props.children,u));return}Qt(s.type===kh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Xh(s.props.children,u)),i.push(f)}),i}var Bu="get",Iu="application/x-www-form-urlencoded";function Zu(a){return a!=null&&typeof a.tagName=="string"}function Gy(a){return Zu(a)&&a.tagName.toLowerCase()==="button"}function Vy(a){return Zu(a)&&a.tagName.toLowerCase()==="form"}function ky(a){return Zu(a)&&a.tagName.toLowerCase()==="input"}function Xy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Wy(a,e){return a.button===0&&(!e||e==="_self")&&!Xy(a)}var du=null;function qy(){if(du===null)try{new FormData(document.createElement("form"),0),du=!1}catch{du=!0}return du}var Yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function oh(a){return a!=null&&!Yy.has(a)?(Gi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):a}function Zy(a,e){let i,s,l,u,f;if(Vy(a)){let d=a.getAttribute("action");s=d?da(d,e):null,i=a.getAttribute("method")||Bu,l=oh(a.getAttribute("enctype"))||Iu,u=new FormData(a)}else if(Gy(a)||ky(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(s=m?da(m,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||Bu,l=oh(a.getAttribute("formenctype"))||oh(d.getAttribute("enctype"))||Iu,u=new FormData(d,a),!qy()){let{name:p,type:g,value:v}=a;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(Zu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bu,s=null,l=Iu,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gd(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function jy(a,e,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&da(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function Ky(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Jy(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await Ky(u,i);return f.links?f.links():[]}return[]}));return nE(s.flat(1).filter(Qy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Hv(a,e,i,s,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function $y(a,e,{includeHydrateFallback:i}={}){return eE(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function eE(a){return[...new Set(a)]}function tE(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function nE(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(tE(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function e0(){let a=fe.useContext(Bs);return Gd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function iE(){let a=fe.useContext(Yu);return Gd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Vd=fe.createContext(void 0);Vd.displayName="FrameworkContext";function t0(){let a=fe.useContext(Vd);return Gd(a,"You must render this element inside a <HydratedRouter> element"),a}function aE(a,e){let i=fe.useContext(Vd),[s,l]=fe.useState(!1),[u,f]=fe.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=fe.useRef(null);fe.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(b,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),fe.useEffect(()=>{if(s){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[s]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Po(d,y),onBlur:Po(m,M),onMouseEnter:Po(p,y),onMouseLeave:Po(g,M),onTouchStart:Po(v,y)}]:[!1,x,{}]}function Po(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function rE({page:a,...e}){let{router:i}=e0(),s=fe.useMemo(()=>k_(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?fe.createElement(oE,{page:a,matches:s,...e}):null}function sE(a){let{manifest:e,routeModules:i}=t0(),[s,l]=fe.useState([]);return fe.useEffect(()=>{let u=!1;return Jy(a,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,i]),s}function oE({page:a,matches:e,...i}){let s=Dr(),{manifest:l,routeModules:u}=t0(),{basename:f}=e0(),{loaderData:d,matches:m}=iE(),p=fe.useMemo(()=>Hv(a,e,m,l,s,"data"),[a,e,m,l,s]),g=fe.useMemo(()=>Hv(a,e,m,l,s,"assets"),[a,e,m,l,s]),v=fe.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let M=new Set,b=!1;if(e.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||L.hasClientLoader?b=!0:M.add(_.route.id))}),M.size===0)return[];let S=jy(a,f,"data");return b&&M.size>0&&S.searchParams.set("_routes",e.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,s,l,p,e,a,u]),x=fe.useMemo(()=>$y(g,l),[g,l]),y=sE(g);return fe.createElement(fe.Fragment,null,v.map(M=>fe.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),x.map(M=>fe.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:b})=>fe.createElement("link",{key:M,nonce:i.nonce,...b})))}function lE(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.9.1")}catch{}function uE({basename:a,children:e,window:i}){let s=fe.useRef();s.current==null&&(s.current=KS({window:i,v5Compat:!0}));let l=s.current,[u,f]=fe.useState({action:l.action,location:l.location}),d=fe.useCallback(m=>{fe.startTransition(()=>f(m))},[f]);return fe.useLayoutEffect(()=>l.listen(d),[l,d]),fe.createElement(zy,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:l})}var i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=fe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},y){let{basename:M}=fe.useContext(Vi),b=typeof p=="string"&&i0.test(p),S,_=!1;if(typeof p=="string"&&b&&(S=p,n0))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),V=da(C.pathname,M);C.origin===D.origin&&V!=null?p=V+C.search+C.hash:_=!0}catch{Gi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=My(p,{relative:l}),[N,U,B]=aE(s,x),G=dE(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function H(D){e&&e(D),D.defaultPrevented||G(D)}let j=fe.createElement("a",{...x,...B,href:S||L,onClick:_||u?e:H,ref:lE(y,U),target:m,"data-discover":!b&&i==="render"?"true":void 0});return N&&!b?fe.createElement(fe.Fragment,null,j,fe.createElement(rE,{page:L})):j});a0.displayName="Link";var cE=fe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let v=Ko(f,{relative:p.relative}),x=Dr(),y=fe.useContext(Yu),{navigator:M,basename:b}=fe.useContext(Vi),S=y!=null&&_E(v)&&d===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,L=x.pathname,N=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(L=L.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&b&&(N=da(N,b)||N);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=L===_||!l&&L.startsWith(_)&&L.charAt(U)==="/",G=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),H={isActive:B,isPending:G,isTransitioning:S},j=B?e:void 0,D;typeof s=="function"?D=s(H):D=[s,B?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(H):u;return fe.createElement(a0,{...p,"aria-current":j,className:D,ref:g,style:C,to:f,viewTransition:d},typeof m=="function"?m(H):m)});cE.displayName="NavLink";var fE=fe.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=Bu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},y)=>{let M=gE(),b=vE(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&i0.test(d),L=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let U=N.nativeEvent.submitter,B=U?.getAttribute("formmethod")||f;M(U||N.currentTarget,{fetcherKey:e,method:B,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return fe.createElement("form",{ref:y,method:S,action:b,onSubmit:s?m:L,...x,"data-discover":!_&&a==="render"?"true":void 0})});fE.displayName="Form";function hE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(a){let e=fe.useContext(Bs);return Qt(e,hE(a)),e}function dE(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=Ty(),m=Dr(),p=Ko(a,{relative:u});return fe.useCallback(g=>{if(Wy(g,e)){g.preventDefault();let v=i!==void 0?i:ko(m)===ko(p);d(a,{replace:v,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,s,e,a,l,u,f])}var pE=0,mE=()=>`__${String(++pE)}__`;function gE(){let{router:a}=r0("useSubmit"),{basename:e}=fe.useContext(Vi),i=Py();return fe.useCallback(async(s,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=Zy(s,e);if(l.navigate===!1){let g=l.fetcherKey||mE();await a.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function vE(a,{relative:e}={}){let{basename:i}=fe.useContext(Vi),s=fe.useContext(ga);Qt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Ko(a||".",{relative:e})},f=Dr();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:fa([i,u.pathname])),ko(u)}function _E(a,{relative:e}={}){let i=fe.useContext(j_);Qt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=r0("useViewTransitionState"),l=Ko(a,{relative:e});if(!i.isTransitioning)return!1;let u=da(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=da(i.nextLocation.pathname,s)||i.nextLocation.pathname;return ku(l.pathname,f)!=null||ku(l.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="180",xE=0,Gv=1,SE=2,s0=1,yE=2,ua=3,pa=0,Tn=1,ii=2,Hi=0,Rs=1,Vv=2,kv=3,Xv=4,EE=5,Tr=100,ME=101,TE=102,AE=103,bE=104,RE=200,CE=201,wE=202,DE=203,Wh=204,qh=205,UE=206,LE=207,NE=208,OE=209,PE=210,BE=211,IE=212,FE=213,zE=214,Yh=0,Zh=1,jh=2,ws=3,Kh=4,Qh=5,Jh=6,$h=7,o0=0,HE=1,GE=2,Ya=0,VE=1,kE=2,XE=3,WE=4,qE=5,YE=6,ZE=7,l0=300,Ds=301,Us=302,ed=303,td=304,Ku=306,nd=1e3,br=1001,id=1002,Ci=1003,jE=1004,pu=1005,Bn=1006,lh=1007,Rr=1008,ri=1009,u0=1010,c0=1011,Xo=1012,kd=1013,Za=1014,ca=1015,Qo=1016,Xd=1017,Wd=1018,Ls=1020,f0=35902,h0=35899,d0=1021,p0=1022,bi=1023,Wo=1026,Ns=1027,m0=1028,qd=1029,g0=1030,Yd=1031,Zd=1033,Fu=33776,zu=33777,Hu=33778,Gu=33779,ad=35840,rd=35841,sd=35842,od=35843,ld=36196,ud=37492,cd=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,vd=37814,_d=37815,xd=37816,Sd=37817,yd=37818,Ed=37819,Md=37820,Td=37821,Ad=36492,bd=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,Jo=3200,KE=3201,QE=0,JE=1,Fi="",rn="srgb",ja="srgb-linear",Xu="linear",kt="srgb",hs=7680,Wv=519,$E=512,eM=513,tM=514,v0=515,nM=516,iM=517,aM=518,rM=519,qv=35044,Ld="300 es",zi=2e3,Wu=2001;class Ka{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=Math.PI/180,Nd=180/Math.PI;function $o(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Tt(a,e,i){return Math.max(e,Math.min(i,a))}function sM(a,e){return(a%e+e)%e}function ch(a,e,i){return(1-i)*a+i*e}function Bo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Yn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,i=0){_t.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const x=u[f+0],y=u[f+1],M=u[f+2],b=u[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=M,e[i+3]=b;return}if(v!==b||m!==x||p!==y||g!==M){let S=1-d;const _=m*x+p*y+g*M+v*b,L=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const B=Math.sqrt(N),G=Math.atan2(B,_*L);S=Math.sin(S*G)/B,d=Math.sin(d*G)/B}const U=d*L;if(m=m*S+x*U,p=p*S+y*U,g=g*S+M*U,v=v*S+b*U,S===1-d){const B=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=B,p*=B,g*=B,v*=B}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,u,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=u[f],x=u[f+1],y=u[f+2],M=u[f+3];return e[i]=d*M+g*v+m*y-p*x,e[i+1]=m*M+g*x+p*v-d*y,e[i+2]=p*M+g*y+d*x-m*v,e[i+3]=g*M-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),v=d(u/2),x=m(s/2),y=m(l/2),M=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v-x*y*M;break;case"YXZ":this._x=x*g*v+p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v+x*y*M;break;case"ZXY":this._x=x*g*v-p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v-x*y*M;break;case"ZYX":this._x=x*g*v-p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v+x*y*M;break;case"YZX":this._x=x*g*v+p*y*M,this._y=p*y*v+x*g*M,this._z=p*g*M-x*y*v,this._w=p*g*v-x*y*M;break;case"XZY":this._x=x*g*v-p*y*M,this._y=p*y*v-x*g*M,this._z=p*g*M+x*y*v,this._w=p*g*v+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],x=s+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(f-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(u-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(f-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-s*p,this._z=u*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,i=0,s=0){se.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Yv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Yv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),g=2*(d*i-u*l),v=2*(u*s-f*i);return this.x=i+m*p+f*v-d*g,this.y=s+m*g+d*p-u*v,this.z=l+m*v+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return fh.copy(this).projectOnVector(e),this.sub(fh)}reflect(e){return this.sub(fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Tt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new se,Yv=new el;class ht{constructor(e,i,s,l,u,f,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p)}set(e,i,s,l,u,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],v=s[7],x=s[2],y=s[5],M=s[8],b=l[0],S=l[3],_=l[6],L=l[1],N=l[4],U=l[7],B=l[2],G=l[5],H=l[8];return u[0]=f*b+d*L+m*B,u[3]=f*S+d*N+m*G,u[6]=f*_+d*U+m*H,u[1]=p*b+g*L+v*B,u[4]=p*S+g*N+v*G,u[7]=p*_+g*U+v*H,u[2]=x*b+y*L+M*B,u[5]=x*S+y*N+M*G,u[8]=x*_+y*U+M*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-s*u*g+s*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=g*f-d*p,x=d*m-g*u,y=p*u-f*m,M=i*v+s*x+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(l*p-g*s)*b,e[2]=(d*s-l*f)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-d*i)*b,e[6]=y*b,e[7]=(s*m-p*i)*b,e[8]=(f*i-s*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(hh.makeScale(e,i)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,i){return this.premultiply(hh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new ht;function _0(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function qu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function oM(){const a=qu("canvas");return a.style.display="block",a}const Zv={};function qo(a){a in Zv||(Zv[a]=!0,console.warn(a))}function lM(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const jv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const a={enabled:!0,workingColorSpace:ja,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===kt&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fi?Xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[ja]:{primaries:e,whitePoint:s,transfer:Xu,toXYZ:jv,fromXYZ:Kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:jv,fromXYZ:Kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),a}const Ut=uM();function ha(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Cs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ds;class cM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ds===void 0&&(ds=qu("canvas")),ds.width=e.width,ds.height=e.height;const l=ds.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ds}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ha(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fM=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(dh(l[f].image)):u.push(dh(l[f]))}else u=dh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function dh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?cM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;const ph=new se;class wn extends Ka{constructor(e=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,s=br,l=br,u=Bn,f=Rr,d=bi,m=ri,p=wn.DEFAULT_ANISOTROPY,g=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=$o(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=l0;wn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],y=m[5],M=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,B=(_+1)/2,G=(g+x)/4,H=(v+b)/4,j=(M+S)/4;return N>U&&N>B?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=G/s,u=H/s):U>B?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=G/l,u=j/l):B<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(B),s=H/u,l=j/u),this.set(s,l,u,i),this}let L=Math.sqrt((S-M)*(S-M)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(v-b)/L,this.z=(x-g)/L,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Tt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Ka{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new wn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends dM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class x0 extends wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mu.copy(s.boundingBox)),mu.applyMatrix4(e.matrixWorld),this.union(mu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),gu.subVectors(this.max,Io),ps.subVectors(e.a,Io),ms.subVectors(e.b,Io),gs.subVectors(e.c,Io),Ga.subVectors(ms,ps),Va.subVectors(gs,ms),gr.subVectors(ps,gs);let i=[0,-Ga.z,Ga.y,0,-Va.z,Va.y,0,-gr.z,gr.y,Ga.z,0,-Ga.x,Va.z,0,-Va.x,gr.z,0,-gr.x,-Ga.y,Ga.x,0,-Va.y,Va.x,0,-gr.y,gr.x,0];return!mh(i,ps,ms,gs,gu)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,ps,ms,gs,gu))?!1:(vu.crossVectors(Ga,Va),i=[vu.x,vu.y,vu.z],mh(i,ps,ms,gs,gu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new se,new se,new se,new se,new se,new se,new se,new se],Ei=new se,mu=new tl,ps=new se,ms=new se,gs=new se,Ga=new se,Va=new se,gr=new se,Io=new se,gu=new se,vu=new se,vr=new se;function mh(a,e,i,s,l){for(let u=0,f=a.length-3;u<=f;u+=3){vr.fromArray(a,u);const d=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=e.dot(vr),p=i.dot(vr),g=s.dot(vr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const mM=new tl,Fo=new se,gh=new se;class Kd{constructor(e=new se,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):mM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(gh)),this.expandByPoint(Fo.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ra=new se,vh=new se,_u=new se,ka=new se,_h=new se,xu=new se,xh=new se;class gM{constructor(e=new se,i=new se(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){vh.copy(e).add(i).multiplyScalar(.5),_u.copy(i).sub(e).normalize(),ka.copy(this.origin).sub(vh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(_u),d=ka.dot(this.direction),m=-ka.dot(_u),p=ka.lengthSq(),g=Math.abs(1-f*f);let v,x,y,M;if(g>0)if(v=f*m-d,x=f*d-m,M=u*g,v>=0)if(x>=-M)if(x<=M){const b=1/g;v*=b,x*=b,y=v*(v+f*x+2*d)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-M?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p):x<=M?(v=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-m),u),y=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(vh).addScaledVector(_u,x),y}intersectSphere(e,i){ra.subVectors(e.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ra)!==null}intersectTriangle(e,i,s,l,u){_h.subVectors(i,e),xu.subVectors(s,e),xh.crossVectors(_h,xu);let f=this.direction.dot(xh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ka.subVectors(this.origin,e);const m=d*this.direction.dot(xu.crossVectors(ka,xu));if(m<0)return null;const p=d*this.direction.dot(_h.cross(ka));if(p<0||m+p>f)return null;const g=-d*ka.dot(xh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn{constructor(e,i,s,l,u,f,d,m,p,g,v,x,y,M,b,S){gn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p,g,v,x,y,M,b,S)}set(e,i,s,l,u,f,d,m,p,g,v,x,y,M,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=M,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),u=1/vs.setFromMatrixColumn(e,1).length(),f=1/vs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*v,M=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+M*p,i[5]=x-b*p,i[9]=-d*m,i[2]=b-x*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,y=m*v,M=p*g,b=p*v;i[0]=x+b*d,i[4]=M*d-y,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=y*d-M,i[6]=b+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,y=m*v,M=p*g,b=p*v;i[0]=x-b*d,i[4]=-f*v,i[8]=M+y*d,i[1]=y+M*d,i[5]=f*g,i[9]=b-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,y=f*v,M=d*g,b=d*v;i[0]=m*g,i[4]=M*p-y,i[8]=x*p+b,i[1]=m*v,i[5]=b*p+x,i[9]=y*p-M,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*p,M=d*m,b=d*p;i[0]=m*g,i[4]=b-x*v,i[8]=M*v+y,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+M,i[10]=x-b*v}else if(e.order==="XZY"){const x=f*m,y=f*p,M=d*m,b=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=x*v+b,i[5]=f*g,i[9]=y*v-M,i[2]=M*v-y,i[6]=d*g,i[10]=b*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,_M)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Xa.crossVectors(s,ti),Xa.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Xa.crossVectors(s,ti)),Xa.normalize(),Su.crossVectors(ti,Xa),l[0]=Xa.x,l[4]=Su.x,l[8]=ti.x,l[1]=Xa.y,l[5]=Su.y,l[9]=ti.y,l[2]=Xa.z,l[6]=Su.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],v=s[5],x=s[9],y=s[13],M=s[2],b=s[6],S=s[10],_=s[14],L=s[3],N=s[7],U=s[11],B=s[15],G=l[0],H=l[4],j=l[8],D=l[12],C=l[1],V=l[5],J=l[9],ue=l[13],me=l[2],oe=l[6],I=l[10],Y=l[14],z=l[3],Se=l[7],w=l[11],K=l[15];return u[0]=f*G+d*C+m*me+p*z,u[4]=f*H+d*V+m*oe+p*Se,u[8]=f*j+d*J+m*I+p*w,u[12]=f*D+d*ue+m*Y+p*K,u[1]=g*G+v*C+x*me+y*z,u[5]=g*H+v*V+x*oe+y*Se,u[9]=g*j+v*J+x*I+y*w,u[13]=g*D+v*ue+x*Y+y*K,u[2]=M*G+b*C+S*me+_*z,u[6]=M*H+b*V+S*oe+_*Se,u[10]=M*j+b*J+S*I+_*w,u[14]=M*D+b*ue+S*Y+_*K,u[3]=L*G+N*C+U*me+B*z,u[7]=L*H+N*V+U*oe+B*Se,u[11]=L*j+N*J+U*I+B*w,u[15]=L*D+N*ue+U*Y+B*K,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],y=e[14],M=e[3],b=e[7],S=e[11],_=e[15];return M*(+u*m*v-l*p*v-u*d*x+s*p*x+l*d*y-s*m*y)+b*(+i*m*y-i*p*x+u*f*x-l*f*y+l*p*g-u*m*g)+S*(+i*p*v-i*d*y-u*f*v+s*f*y+u*d*g-s*p*g)+_*(-l*d*g-i*m*v+i*d*x+l*f*v-s*f*x+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],y=e[11],M=e[12],b=e[13],S=e[14],_=e[15],L=v*S*p-b*x*p+b*m*y-d*S*y-v*m*_+d*x*_,N=M*x*p-g*S*p-M*m*y+f*S*y+g*m*_-f*x*_,U=g*b*p-M*v*p+M*d*y-f*b*y-g*d*_+f*v*_,B=M*v*m-g*b*m-M*d*x+f*b*x+g*d*S-f*v*S,G=i*L+s*N+l*U+u*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/G;return e[0]=L*H,e[1]=(b*x*u-v*S*u-b*l*y+s*S*y+v*l*_-s*x*_)*H,e[2]=(d*S*u-b*m*u+b*l*p-s*S*p-d*l*_+s*m*_)*H,e[3]=(v*m*u-d*x*u-v*l*p+s*x*p+d*l*y-s*m*y)*H,e[4]=N*H,e[5]=(g*S*u-M*x*u+M*l*y-i*S*y-g*l*_+i*x*_)*H,e[6]=(M*m*u-f*S*u-M*l*p+i*S*p+f*l*_-i*m*_)*H,e[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*y+i*m*y)*H,e[8]=U*H,e[9]=(M*v*u-g*b*u-M*s*y+i*b*y+g*s*_-i*v*_)*H,e[10]=(f*b*u-M*d*u+M*s*p-i*b*p-f*s*_+i*d*_)*H,e[11]=(g*d*u-f*v*u-g*s*p+i*v*p+f*s*y-i*d*y)*H,e[12]=B*H,e[13]=(g*b*l-M*v*l+M*s*x-i*b*x-g*s*S+i*v*S)*H,e[14]=(M*d*l-f*b*l-M*s*m+i*b*m+f*s*S-i*d*S)*H,e[15]=(f*v*l-g*d*l+g*s*m-i*v*m-f*s*x+i*d*x)*H,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,d=e.y,m=e.z,p=u*f,g=u*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,v=d+d,x=u*p,y=u*g,M=u*v,b=f*g,S=f*v,_=d*v,L=m*p,N=m*g,U=m*v,B=s.x,G=s.y,H=s.z;return l[0]=(1-(b+_))*B,l[1]=(y+U)*B,l[2]=(M-N)*B,l[3]=0,l[4]=(y-U)*G,l[5]=(1-(x+_))*G,l[6]=(S+L)*G,l[7]=0,l[8]=(M+N)*H,l[9]=(S-L)*H,l[10]=(1-(x+b))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Mi.copy(this);const p=1/u,g=1/f,v=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),s.x=u,s.y=f,s.z=d,this}makePerspective(e,i,s,l,u,f,d=zi,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,b;if(m)M=u/(f-u),b=f*u/(f-u);else if(d===zi)M=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(d===Wu)M=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,d=zi,m=!1){const p=this.elements,g=2/(i-e),v=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let M,b;if(m)M=1/(f-u),b=f/(f-u);else if(d===zi)M=-2/(f-u),b=-(f+u)/(f-u);else if(d===Wu)M=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const vs=new se,Mi=new gn,vM=new se(0,0,0),_M=new se(1,1,1),Xa=new se,Su=new se,ti=new se,Qv=new gn,Jv=new el;class ma{constructor(e=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xM=0;const $v=new se,_s=new el,sa=new gn,yu=new se,zo=new se,SM=new se,yM=new el,e_=new se(1,0,0),t_=new se(0,1,0),n_=new se(0,0,1),i_={type:"added"},EM={type:"removed"},xs={type:"childadded",child:null},Sh={type:"childremoved",child:null};class ai extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new se,i=new ma,s=new el,l=new se(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new gn},normalMatrix:{value:new ht}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?yu.copy(e):yu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(zo,yu,this.up):sa.lookAt(yu,zo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(sa),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(EM),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,yM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),y=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ai.DEFAULT_UP=new se(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new se,oa=new se,yh=new se,la=new se,Ss=new se,ys=new se,a_=new se,Eh=new se,Mh=new se,Th=new se,Ah=new sn,bh=new sn,Rh=new sn;class Ai{constructor(e=new se,i=new se,s=new se){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ti.subVectors(e,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ti.subVectors(l,i),oa.subVectors(s,i),yh.subVectors(e,i);const f=Ti.dot(Ti),d=Ti.dot(oa),m=Ti.dot(yh),p=oa.dot(oa),g=oa.dot(yh),v=f*p-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(p*m-d*g)*x,M=(f*g-d*m)*x;return u.set(1-y-M,M,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,s,l,u,f,d,m){return this.getBarycoord(e,i,s,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,la.x),m.addScaledVector(f,la.y),m.addScaledVector(d,la.z),m)}static getInterpolatedAttribute(e,i,s,l,u,f){return Ah.setScalar(0),bh.setScalar(0),Rh.setScalar(0),Ah.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ah,u.x),f.addScaledVector(bh,u.y),f.addScaledVector(Rh,u.z),f}static isFrontFacing(e,i,s,l){return Ti.subVectors(s,i),oa.subVectors(e,i),Ti.cross(oa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,d;Ss.subVectors(l,s),ys.subVectors(u,s),Eh.subVectors(e,s);const m=Ss.dot(Eh),p=ys.dot(Eh);if(m<=0&&p<=0)return i.copy(s);Mh.subVectors(e,l);const g=Ss.dot(Mh),v=ys.dot(Mh);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(Ss,f);Th.subVectors(e,u);const y=Ss.dot(Th),M=ys.dot(Th);if(M>=0&&y<=M)return i.copy(u);const b=y*p-m*M;if(b<=0&&p>=0&&M<=0)return d=p/(p-M),i.copy(s).addScaledVector(ys,d);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return a_.subVectors(u,l),d=(v-g)/(v-g+(y-M)),i.copy(l).addScaledVector(a_,d);const _=1/(S+b+x);return f=b*_,d=x*_,i.copy(s).addScaledVector(Ss,f).addScaledVector(ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wa={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Ch(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=sM(e,1),i=Tt(i,0,1),s=Tt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=Ch(f,u,e+1/3),this.g=Ch(f,u,e),this.b=Ch(f,u,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=rn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=rn){const s=y0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Ut.workingToColorSpace(Pn.copy(this),e),Math.round(Tt(Pn.r*255,0,255))*65536+Math.round(Tt(Pn.g*255,0,255))*256+Math.round(Tt(Pn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,u=Pn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=rn){Ut.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==rn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Wa),this.setHSL(Wa.h+e,Wa.s+i,Wa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Wa),e.getHSL(Eu);const s=ch(Wa.h,Eu.h,i),l=ch(Wa.s,Eu.s,i),u=ch(Wa.l,Eu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Bt;Bt.NAMES=y0;let MM=0;class Is extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Rs,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(s.blending=this.blending),this.side!==pa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wh&&(s.blendSrc=this.blendSrc),this.blendDst!==qh&&(s.blendDst=this.blendDst),this.blendEquation!==Tr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class E0 extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new se,Mu=new _t;let TM=0;class mi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=qv,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(e),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Bo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qv&&(e.usage=this.usage),e}}class M0 extends mi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class T0 extends mi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Cr extends mi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let AM=0;const di=new gn,wh=new ai,Es=new se,ni=new tl,Ho=new tl,Mn=new se;class Qa extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?T0:M0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ht().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,s){return di.makeTranslation(e,i,s),this.applyMatrix4(di),this}scale(e,i,s){return di.makeScale(e,i,s),this.applyMatrix4(di),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Cr(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ni.min,Ho.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,Ho.max),ni.expandByPoint(Mn)):(ni.expandByPoint(Ho.min),ni.expandByPoint(Ho.max))}ni.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)Mn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(Es.fromBufferAttribute(e,p),Mn.add(Es)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new se,m[j]=new se;const p=new se,g=new se,v=new se,x=new _t,y=new _t,M=new _t,b=new se,S=new se;function _(j,D,C){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),x.fromBufferAttribute(u,j),y.fromBufferAttribute(u,D),M.fromBufferAttribute(u,C),g.sub(p),v.sub(p),y.sub(x),M.sub(x);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(V),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(V),d[j].add(b),d[D].add(b),d[C].add(b),m[j].add(S),m[D].add(S),m[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,D=L.length;j<D;++j){const C=L[j],V=C.start,J=C.count;for(let ue=V,me=V+J;ue<me;ue+=3)_(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const N=new se,U=new se,B=new se,G=new se;function H(j){B.fromBufferAttribute(l,j),G.copy(B);const D=d[j];N.copy(D),N.sub(B.multiplyScalar(B.dot(D))).normalize(),U.crossVectors(G,D);const V=U.dot(m[j])<0?-1:1;f.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,D=L.length;j<D;++j){const C=L[j],V=C.start,J=C.count;for(let ue=V,me=V+J;ue<me;ue+=3)H(e.getX(ue+0)),H(e.getX(ue+1)),H(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new se,u=new se,f=new se,d=new se,m=new se,p=new se,g=new se,v=new se;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),b=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,v=d.normalized,x=new p.constructor(m.length*g);let y=0,M=0;for(let b=0,S=m.length;b<S;b++){d.isInterleavedBufferAttribute?y=m[b]*d.data.stride+d.offset:y=m[b]*g;for(let _=0;_<g;_++)x[M++]=p[y++]}return new mi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qa,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const x=p[g],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new gn,_r=new gM,Tu=new Kd,s_=new se,Au=new se,bu=new se,Ru=new se,Dh=new se,Cu=new se,o_=new se,wu=new se;class Ri extends ai{constructor(e=new Qa,i=new E0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Cu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Dh.fromBufferAttribute(v,e),f?Cu.addScaledVector(Dh,g):Cu.addScaledVector(Dh.sub(i),g))}i.add(Cu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tu.copy(s.boundingSphere),Tu.applyMatrix4(u),_r.copy(e.ray).recast(e.near),!(Tu.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Tu,s_)===null||_r.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(u).invert(),_r.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&_r.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,_r)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,b=x.length;M<b;M++){const S=x[M],_=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let U=L,B=N;U<B;U+=3){const G=d.getX(U),H=d.getX(U+1),j=d.getX(U+2);l=Du(this,_,e,s,p,g,v,G,H,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let S=M,_=b;S<_;S+=3){const L=d.getX(S),N=d.getX(S+1),U=d.getX(S+2);l=Du(this,f,e,s,p,g,v,L,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,b=x.length;M<b;M++){const S=x[M],_=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=L,B=N;U<B;U+=3){const G=U,H=U+1,j=U+2;l=Du(this,_,e,s,p,g,v,G,H,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let S=M,_=b;S<_;S+=3){const L=S,N=S+1,U=S+2;l=Du(this,f,e,s,p,g,v,L,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function bM(a,e,i,s,l,u,f,d){let m;if(e.side===Tn?m=s.intersectTriangle(f,u,l,!0,d):m=s.intersectTriangle(l,u,f,e.side===pa,d),m===null)return null;wu.copy(d),wu.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:a}}function Du(a,e,i,s,l,u,f,d,m,p){a.getVertexPosition(d,Au),a.getVertexPosition(m,bu),a.getVertexPosition(p,Ru);const g=bM(a,e,i,s,Au,bu,Ru,o_);if(g){const v=new se;Ai.getBarycoord(o_,Au,bu,Ru,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,m,p,v,new _t)),u&&(g.uv1=Ai.getInterpolatedAttribute(u,d,m,p,v,new _t)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,m,p,v,new se),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new se,materialIndex:0};Ai.getNormal(Au,bu,Ru,x.normal),g.face=x,g.barycoord=v}return g}class nl extends Qa{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,y=0;M("z","y","x",-1,-1,s,i,e,f,u,0),M("z","y","x",1,-1,s,i,-e,f,u,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,u,4),M("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Cr(p,3)),this.setAttribute("normal",new Cr(g,3)),this.setAttribute("uv",new Cr(v,2));function M(b,S,_,L,N,U,B,G,H,j,D){const C=U/H,V=B/j,J=U/2,ue=B/2,me=G/2,oe=H+1,I=j+1;let Y=0,z=0;const Se=new se;for(let w=0;w<I;w++){const K=w*V-ue;for(let _e=0;_e<oe;_e++){const ye=_e*C-J;Se[b]=ye*L,Se[S]=K*N,Se[_]=me,p.push(Se.x,Se.y,Se.z),Se[b]=0,Se[S]=0,Se[_]=G>0?1:-1,g.push(Se.x,Se.y,Se.z),v.push(_e/H),v.push(1-w/j),Y+=1}}for(let w=0;w<j;w++)for(let K=0;K<H;K++){const _e=x+K+oe*w,ye=x+K+oe*(w+1),we=x+(K+1)+oe*(w+1),Ge=x+(K+1)+oe*w;m.push(_e,ye,Ge),m.push(ye,we,Ge),z+=6}d.addGroup(y,z,D),y+=z,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(a){const e={};for(let i=0;i<a.length;i++){const s=Os(a[i]);for(const l in s)e[l]=s[l]}return e}function RM(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function A0(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const CM={clone:Os,merge:Gn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=RM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Qd extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new se,l_=new _t,u_=new _t;class pi extends Qd{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,l_,u_),i.subVectors(u_,l_)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(uh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Ts=1;class UM extends ai{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Ms,Ts,e,i);l.layers=this.layers,this.add(l);const u=new pi(Ms,Ts,e,i);u.layers=this.layers,this.add(u);const f=new pi(Ms,Ts,e,i);f.layers=this.layers,this.add(f);const d=new pi(Ms,Ts,e,i);d.layers=this.layers,this.add(d);const m=new pi(Ms,Ts,e,i);m.layers=this.layers,this.add(m);const p=new pi(Ms,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,x,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class b0 extends wn{constructor(e=[],i=Ds,s,l,u,f,d,m,p,g){super(e,i,s,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LM extends wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new b0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),u=new gi({name:"CubemapFromEquirect",uniforms:Os(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Tn,blending:Hi});u.uniforms.tEquirect.value=i;const f=new Ri(l,u),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Bn),new UM(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}class Uu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,s),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Uu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Od extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Lh=new se,OM=new se,PM=new ht;class Er{constructor(e=new se(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Lh.subVectors(s,i).cross(OM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||PM.getNormalMatrix(e),l=this.coplanarPoint(Lh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Kd,BM=new _t(.5,.5),Lu=new se;class R0{constructor(e=new Er,i=new Er,s=new Er,l=new Er,u=new Er,f=new Er){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=zi,s=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],y=u[7],M=u[8],b=u[9],S=u[10],_=u[11],L=u[12],N=u[13],U=u[14],B=u[15];if(l[0].setComponents(p-f,y-g,_-M,B-L).normalize(),l[1].setComponents(p+f,y+g,_+M,B+L).normalize(),l[2].setComponents(p+d,y+v,_+b,B+N).normalize(),l[3].setComponents(p-d,y-v,_-b,B-N).normalize(),s)l[4].setComponents(m,x,S,U).normalize(),l[5].setComponents(p-m,y-x,_-S,B-U).normalize();else if(l[4].setComponents(p-m,y-x,_-S,B-U).normalize(),i===zi)l[5].setComponents(p+m,y+x,_+S,B+U).normalize();else if(i===Wu)l[5].setComponents(m,x,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const i=BM.distanceTo(e.center);return xr.radius=.7071067811865476+i,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lu.x=l.normal.x>0?e.max.x:e.min.x,Lu.y=l.normal.y>0?e.max.y:e.min.y,Lu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jd extends wn{constructor(e,i,s=Za,l,u,f,d=Ci,m=Ci,p,g=Wo,v=1){if(g!==Wo&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,u,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class C0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends Qa{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,v=e/d,x=i/m,y=[],M=[],b=[],S=[];for(let _=0;_<g;_++){const L=_*x-f;for(let N=0;N<p;N++){const U=N*v-u;M.push(U,-L,0),b.push(0,0,1),S.push(N/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const N=L+p*_,U=L+p*(_+1),B=L+1+p*(_+1),G=L+1+p*_;y.push(N,U,G),y.push(U,B,G)}this.setIndex(y),this.setAttribute("position",new Cr(M,3)),this.setAttribute("normal",new Cr(b,3)),this.setAttribute("uv",new Cr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}class IM extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FM extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class w0 extends Qd{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zM extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class HM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class mn{constructor(e){this.value=e}clone(){return new mn(this.value.clone===void 0?this.value:this.value.clone())}}function c_(a,e,i,s){const l=GM(s);switch(i){case d0:return a*e;case m0:return a*e/l.components*l.byteLength;case qd:return a*e/l.components*l.byteLength;case g0:return a*e*2/l.components*l.byteLength;case Yd:return a*e*2/l.components*l.byteLength;case p0:return a*e*3/l.components*l.byteLength;case bi:return a*e*4/l.components*l.byteLength;case Zd:return a*e*4/l.components*l.byteLength;case Fu:case zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(a,16)*Math.max(e,8)/4;case ad:case sd:return Math.max(a,8)*Math.max(e,8)/2;case ld:case ud:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case cd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ad:case bd:case Rd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Cd:case wd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Dd:case Ud:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GM(a){switch(a){case ri:case u0:return{byteLength:1,components:1};case Xo:case c0:case Qo:return{byteLength:2,components:1};case Xd:case Wd:return{byteLength:2,components:4};case Za:case kd:case ca:return{byteLength:4,components:1};case f0:case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D0(){let a=null,e=!1,i=null,s=null;function l(u,f){i(u,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function VM(a){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,d),v.length===0)a.bufferSubData(p,0,g);else{v.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<v.length;y++){const M=v[x],b=v[y];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++x,v[x]=b)}v.length=x+1;for(let y=0,M=v.length;y<M;y++){const b=v[y];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
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
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nT=`#ifdef USE_IRIDESCENCE
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
#endif`,iT=`#ifdef USE_BUMPMAP
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
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hT=`#define PI 3.141592653589793
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
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pT=`vec3 transformedNormal = objectNormal;
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
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
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
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
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
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
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
#endif`,GT=`struct PhysicalMaterial {
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
}`,VT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
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
#endif`,rA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fA=`#ifdef USE_NORMALMAP
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
#endif`,hA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RA=`float getShadowMask() {
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
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UA=`#ifdef USE_SKINNING
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
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
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
}`,jA=`#if DEPTH_PACKING == 3200
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
}`,KA=`#define DISTANCE
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
}`,QA=`#define DISTANCE
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`uniform float scale;
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
}`,tb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,ab=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,sb=`#define MATCAP
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
}`,ob=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,cb=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,hb=`#define STANDARD
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
}`,db=`#define STANDARD
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,vb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,xb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,yb=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:kM,alphahash_pars_fragment:XM,alphamap_fragment:WM,alphamap_pars_fragment:qM,alphatest_fragment:YM,alphatest_pars_fragment:ZM,aomap_fragment:jM,aomap_pars_fragment:KM,batching_pars_vertex:QM,batching_vertex:JM,begin_vertex:$M,beginnormal_vertex:eT,bsdfs:tT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:aT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:lT,color_pars_fragment:uT,color_pars_vertex:cT,color_vertex:fT,common:hT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:vT,emissivemap_pars_fragment:_T,colorspace_fragment:xT,colorspace_pars_fragment:ST,envmap_fragment:yT,envmap_common_pars_fragment:ET,envmap_pars_fragment:MT,envmap_pars_vertex:TT,envmap_physical_pars_fragment:PT,envmap_vertex:AT,fog_vertex:bT,fog_pars_vertex:RT,fog_fragment:CT,fog_pars_fragment:wT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:UT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:OT,lights_toon_fragment:BT,lights_toon_pars_fragment:IT,lights_phong_fragment:FT,lights_phong_pars_fragment:zT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:VT,lights_fragment_maps:kT,lights_fragment_end:XT,logdepthbuf_fragment:WT,logdepthbuf_pars_fragment:qT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:ZT,map_fragment:jT,map_pars_fragment:KT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:eA,morphinstance_vertex:tA,morphcolor_vertex:nA,morphnormal_vertex:iA,morphtarget_pars_vertex:aA,morphtarget_vertex:rA,normal_fragment_begin:sA,normal_fragment_maps:oA,normal_pars_fragment:lA,normal_pars_vertex:uA,normal_vertex:cA,normalmap_pars_fragment:fA,clearcoat_normal_fragment_begin:hA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:pA,iridescence_pars_fragment:mA,opaque_fragment:gA,packing:vA,premultiplied_alpha_fragment:_A,project_vertex:xA,dithering_fragment:SA,dithering_pars_fragment:yA,roughnessmap_fragment:EA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:TA,shadowmap_pars_vertex:AA,shadowmap_vertex:bA,shadowmask_pars_fragment:RA,skinbase_vertex:CA,skinning_pars_vertex:wA,skinning_vertex:DA,skinnormal_vertex:UA,specularmap_fragment:LA,specularmap_pars_fragment:NA,tonemapping_fragment:OA,tonemapping_pars_fragment:PA,transmission_fragment:BA,transmission_pars_fragment:IA,uv_pars_fragment:FA,uv_pars_vertex:zA,uv_vertex:HA,worldpos_vertex:GA,background_vert:VA,background_frag:kA,backgroundCube_vert:XA,backgroundCube_frag:WA,cube_vert:qA,cube_frag:YA,depth_vert:ZA,depth_frag:jA,distanceRGBA_vert:KA,distanceRGBA_frag:QA,equirect_vert:JA,equirect_frag:$A,linedashed_vert:eb,linedashed_frag:tb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:ab,meshlambert_frag:rb,meshmatcap_vert:sb,meshmatcap_frag:ob,meshnormal_vert:lb,meshnormal_frag:ub,meshphong_vert:cb,meshphong_frag:fb,meshphysical_vert:hb,meshphysical_frag:db,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:vb,shadow_vert:_b,shadow_frag:xb,sprite_vert:Sb,sprite_frag:yb},Oe={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ii={basic:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Gn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Gn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Gn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Bt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Gn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Gn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Gn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Gn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Gn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Gn([Oe.common,Oe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Gn([Oe.lights,Oe.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ii.physical={uniforms:Gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Nu={r:0,b:0,g:0},Sr=new ma,Eb=new gn;function Mb(a,e,i,s,l,u,f){const d=new Bt(0);let m=u===!0?0:1,p,g,v=null,x=0,y=null;function M(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function b(N){let U=!1;const B=M(N);B===null?_(d,m):B&&B.isColor&&(_(B,1),U=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(N,U){const B=M(U);B&&(B.isCubeTexture||B.mapping===Ku)?(g===void 0&&(g=new Ri(new nl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Os(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,H,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(U.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(Sr)),g.material.toneMapped=Ut.getTransfer(B.colorSpace)!==kt,(v!==B||x!==B.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,v=B,x=B.version,y=a.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ri(new il(2,2),new gi({name:"BackgroundMaterial",uniforms:Os(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(B.colorSpace)!==kt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(v!==B||x!==B.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,v=B,x=B.version,y=a.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(Nu,A0(a)),s.buffers.color.setClear(Nu.r,Nu.g,Nu.b,U,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:b,addToRenderList:S,dispose:L}}function Tb(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,f=!1;function d(C,V,J,ue,me){let oe=!1;const I=v(ue,J,V);u!==I&&(u=I,p(u.object)),oe=y(C,ue,J,me),oe&&M(C,ue,J,me),me!==null&&e.update(me,a.ELEMENT_ARRAY_BUFFER),(oe||f)&&(f=!1,U(C,V,J,ue),me!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return a.createVertexArray()}function p(C){return a.bindVertexArray(C)}function g(C){return a.deleteVertexArray(C)}function v(C,V,J){const ue=J.wireframe===!0;let me=s[C.id];me===void 0&&(me={},s[C.id]=me);let oe=me[V.id];oe===void 0&&(oe={},me[V.id]=oe);let I=oe[ue];return I===void 0&&(I=x(m()),oe[ue]=I),I}function x(C){const V=[],J=[],ue=[];for(let me=0;me<i;me++)V[me]=0,J[me]=0,ue[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:ue,object:C,attributes:{},index:null}}function y(C,V,J,ue){const me=u.attributes,oe=V.attributes;let I=0;const Y=J.getAttributes();for(const z in Y)if(Y[z].location>=0){const w=me[z];let K=oe[z];if(K===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),w===void 0||w.attribute!==K||K&&w.data!==K.data)return!0;I++}return u.attributesNum!==I||u.index!==ue}function M(C,V,J,ue){const me={},oe=V.attributes;let I=0;const Y=J.getAttributes();for(const z in Y)if(Y[z].location>=0){let w=oe[z];w===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(w=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(w=C.instanceColor));const K={};K.attribute=w,w&&w.data&&(K.data=w.data),me[z]=K,I++}u.attributes=me,u.attributesNum=I,u.index=ue}function b(){const C=u.newAttributes;for(let V=0,J=C.length;V<J;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const J=u.newAttributes,ue=u.enabledAttributes,me=u.attributeDivisors;J[C]=1,ue[C]===0&&(a.enableVertexAttribArray(C),ue[C]=1),me[C]!==V&&(a.vertexAttribDivisor(C,V),me[C]=V)}function L(){const C=u.newAttributes,V=u.enabledAttributes;for(let J=0,ue=V.length;J<ue;J++)V[J]!==C[J]&&(a.disableVertexAttribArray(J),V[J]=0)}function N(C,V,J,ue,me,oe,I){I===!0?a.vertexAttribIPointer(C,V,J,me,oe):a.vertexAttribPointer(C,V,J,ue,me,oe)}function U(C,V,J,ue){b();const me=ue.attributes,oe=J.getAttributes(),I=V.defaultAttributeValues;for(const Y in oe){const z=oe[Y];if(z.location>=0){let Se=me[Y];if(Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const w=Se.normalized,K=Se.itemSize,_e=e.get(Se);if(_e===void 0)continue;const ye=_e.buffer,we=_e.type,Ge=_e.bytesPerElement,ee=we===a.INT||we===a.UNSIGNED_INT||Se.gpuType===kd;if(Se.isInterleavedBufferAttribute){const pe=Se.data,be=pe.stride,je=Se.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<z.locationSize;We++)_(z.location+We,pe.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<z.locationSize;We++)S(z.location+We);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let We=0;We<z.locationSize;We++)N(z.location+We,K/z.locationSize,we,w,be*Ge,(je+K/z.locationSize*We)*Ge,ee)}else{if(Se.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)_(z.location+pe,Se.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let pe=0;pe<z.locationSize;pe++)S(z.location+pe);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let pe=0;pe<z.locationSize;pe++)N(z.location+pe,K/z.locationSize,we,w,K*Ge,K/z.locationSize*pe*Ge,ee)}}else if(I!==void 0){const w=I[Y];if(w!==void 0)switch(w.length){case 2:a.vertexAttrib2fv(z.location,w);break;case 3:a.vertexAttrib3fv(z.location,w);break;case 4:a.vertexAttrib4fv(z.location,w);break;default:a.vertexAttrib1fv(z.location,w)}}}}L()}function B(){j();for(const C in s){const V=s[C];for(const J in V){const ue=V[J];for(const me in ue)g(ue[me].object),delete ue[me];delete V[J]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const J in V){const ue=V[J];for(const me in ue)g(ue[me].object),delete ue[me];delete V[J]}delete s[C.id]}function H(C){for(const V in s){const J=s[V];if(J[C.id]===void 0)continue;const ue=J[C.id];for(const me in ue)g(ue[me].object),delete ue[me];delete J[C.id]}}function j(){D(),f=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:H,initAttributes:b,enableAttribute:S,disableUnusedAttributes:L}}function Ab(a,e,i){let s;function l(p){s=p}function u(p,g){a.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,v){v!==0&&(a.drawArraysInstanced(s,p,g,v),i.update(g,s,v))}function d(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];i.update(y,s,1)}function m(p,g,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*x[b];i.update(M,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bb(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==bi&&s.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(H){const j=H===Qo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==ri&&s.convert(H)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ca&&!j)}function m(H){if(H==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,G=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:B,maxSamples:G}}function Rb(a){const e=this;let i=null,s=0,l=!1,u=!1;const f=new Er,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||s!==0||l;return l=x,s=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const M=v.clippingPlanes,b=v.clipIntersection,S=v.clipShadows,_=a.get(v);if(!l||M===null||M.length===0||u&&!S)u?g(null):p();else{const L=u?0:s,N=L*4;let U=_.clippingState||null;m.value=U,U=g(M,x,N,y);for(let B=0;B!==N;++B)U[B]=i[B];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,y,M){const b=v!==null?v.length:0;let S=null;if(b!==0){if(S=m.value,M!==!0||S===null){const _=y+b*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,U=y;N!==b;++N,U+=4)f.copy(v[N]).applyMatrix4(L,d),f.normal.toArray(S,U),S[U+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function Cb(a){let e=new WeakMap;function i(f,d){return d===ed?f.mapping=Ds:d===td&&(f.mapping=Us),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===ed||d===td)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new LM(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const bs=4,f_=[.125,.215,.35,.446,.526,.582],Ar=20,Nh=new w0,h_=new Bt;let Oh=null,Ph=0,Bh=0,Ih=!1;const Mr=(1+Math.sqrt(5))/2,As=1/Mr,d_=[new se(-Mr,As,0),new se(Mr,As,0),new se(-As,0,Mr),new se(As,0,Mr),new se(0,Mr,-As),new se(0,Mr,As),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],wb=new se;class p_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=wb}=u;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Ph,Bh),this._renderer.xr.enabled=Ih,e.scissorTest=!1,Ou(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Qo,format:bi,colorSpace:ja,depthBuffer:!1},l=m_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Db(u)),this._blurMaterial=Ub(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,Nh)}_sceneToCubeUV(e,i,s,l,u){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(h_),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new E0({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),S=new Ri(new nl,b);let _=!1;const L=e.background;L?L.isColor&&(b.color.copy(L),e.background=null,_=!0):(b.color.copy(h_),_=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const B=this._cubeSize;Ou(l,U*B,N>2?B:0,B,B),v.setRenderTarget(l),_&&v.render(S,m),v.render(e,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ds||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ou(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Nh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=d_[(l-u-1)%d_.length];this._blur(e,u-1,u,f,d)}i.autoClear=s}_blur(e,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",u),this._halfBlur(f,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ar-1),b=u/M,S=isFinite(u)?1+Math.floor(g*b):Ar;S>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ar}`);const _=[];let L=0;for(let H=0;H<Ar;++H){const j=H/b,D=Math.exp(-j*j/2);_.push(D),H===0?L+=D:H<S&&(L+=2*D)}for(let H=0;H<_.length;H++)_[H]=_[H]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=M,x.mipInt.value=N-s;const U=this._sizeLods[l],B=3*U*(l>N-bs?l-N+bs:0),G=4*(this._cubeSize-U);Ou(i,B,G,3*U,2*U),m.setRenderTarget(i),m.render(v,Nh)}}function Db(a){const e=[],i=[],s=[];let l=a;const u=a-bs+1+f_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>a-bs?m=f_[f-a+bs-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,b=3,S=2,_=1,L=new Float32Array(b*M*y),N=new Float32Array(S*M*y),U=new Float32Array(_*M*y);for(let G=0;G<y;G++){const H=G%3*2/3-1,j=G>2?0:-1,D=[H,j,0,H+2/3,j,0,H+2/3,j+1,0,H,j,0,H+2/3,j+1,0,H,j+1,0];L.set(D,b*M*G),N.set(x,S*M*G);const C=[G,G,G,G,G,G];U.set(C,_*M*G)}const B=new Qa;B.setAttribute("position",new mi(L,b)),B.setAttribute("uv",new mi(N,S)),B.setAttribute("faceIndex",new mi(U,_)),e.push(B),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function m_(a,e,i){const s=new wi(a,e,i);return s.texture.mapping=Ku,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ou(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function Ub(a,e,i){const s=new Float32Array(Ar),l=new se(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function g_(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function v_(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function Lb(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ed||m===td,g=m===Ds||m===Us;if(p||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new p_(a)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new p_(a)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Nb(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&qo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Ob(a,e,i,s){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,M=v.attributes.position;let b=0;if(y!==null){const L=y.array;b=y.version;for(let N=0,U=L.length;N<U;N+=3){const B=L[N+0],G=L[N+1],H=L[N+2];x.push(B,G,G,H,H,B)}}else if(M!==void 0){const L=M.array;b=M.version;for(let N=0,U=L.length/3-1;N<U;N+=3){const B=N+0,G=N+1,H=N+2;x.push(B,G,G,H,H,B)}}else return;const S=new(_0(x)?T0:M0)(x,1);S.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function Pb(a,e,i){let s;function l(x){s=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){a.drawElements(s,y,u,x*f),i.update(y,s,1)}function p(x,y,M){M!==0&&(a.drawElementsInstanced(s,y,u,x*f,M),i.update(y,s,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,M);let S=0;for(let _=0;_<M;_++)S+=y[_];i.update(S,s,1)}function v(x,y,M,b){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)p(x[_]/f,y[_],b[_]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,b,0,M);let _=0;for(let L=0;L<M;L++)_+=y[L]*b[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function Bb(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(u/3);break;case a.LINES:i.lines+=d*(u/2);break;case a.LINE_STRIP:i.lines+=d*(u-1);break;case a.LINE_LOOP:i.lines+=d*u;break;case a.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Ib(a,e,i){const s=new WeakMap,l=new sn;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),b===!0&&(U=2),S===!0&&(U=3);let B=d.attributes.position.count*U,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const H=new Float32Array(B*G*4*v),j=new x0(H,B,G,v);j.type=ca,j.needsUpdate=!0;const D=U*4;for(let V=0;V<v;V++){const J=_[V],ue=L[V],me=N[V],oe=B*G*4*V;for(let I=0;I<J.count;I++){const Y=I*D;M===!0&&(l.fromBufferAttribute(J,I),H[oe+Y+0]=l.x,H[oe+Y+1]=l.y,H[oe+Y+2]=l.z,H[oe+Y+3]=0),b===!0&&(l.fromBufferAttribute(ue,I),H[oe+Y+4]=l.x,H[oe+Y+5]=l.y,H[oe+Y+6]=l.z,H[oe+Y+7]=0),S===!0&&(l.fromBufferAttribute(me,I),H[oe+Y+8]=l.x,H[oe+Y+9]=l.y,H[oe+Y+10]=l.z,H[oe+Y+11]=me.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new _t(B,G)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function Fb(a,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const U0=new wn,__=new Jd(1,1),L0=new x0,N0=new pM,O0=new b0,x_=[],S_=[],y_=new Float32Array(16),E_=new Float32Array(9),M_=new Float32Array(4);function Fs(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=x_[l];if(u===void 0&&(u=new Float32Array(l),x_[l]=u),e!==0){s.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(u,d)}return u}function vn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function _n(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Qu(a,e){let i=S_[e];i===void 0&&(i=new Int32Array(e),S_[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function zb(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function Hb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2fv(this.addr,e),_n(i,e)}}function Gb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;a.uniform3fv(this.addr,e),_n(i,e)}}function Vb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4fv(this.addr,e),_n(i,e)}}function kb(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;M_.set(s),a.uniformMatrix2fv(this.addr,!1,M_),_n(i,s)}}function Xb(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;E_.set(s),a.uniformMatrix3fv(this.addr,!1,E_),_n(i,s)}}function Wb(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;y_.set(s),a.uniformMatrix4fv(this.addr,!1,y_),_n(i,s)}}function qb(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function Yb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2iv(this.addr,e),_n(i,e)}}function Zb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3iv(this.addr,e),_n(i,e)}}function jb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4iv(this.addr,e),_n(i,e)}}function Kb(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function Qb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2uiv(this.addr,e),_n(i,e)}}function Jb(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3uiv(this.addr,e),_n(i,e)}}function $b(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4uiv(this.addr,e),_n(i,e)}}function e1(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(__.compareFunction=v0,u=__):u=U0,i.setTexture2D(e||u,l)}function t1(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||N0,l)}function n1(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||O0,l)}function i1(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||L0,l)}function a1(a){switch(a){case 5126:return zb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Zb;case 35669:case 35673:return jb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function r1(a,e){a.uniform1fv(this.addr,e)}function s1(a,e){const i=Fs(e,this.size,2);a.uniform2fv(this.addr,i)}function o1(a,e){const i=Fs(e,this.size,3);a.uniform3fv(this.addr,i)}function l1(a,e){const i=Fs(e,this.size,4);a.uniform4fv(this.addr,i)}function u1(a,e){const i=Fs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function c1(a,e){const i=Fs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function f1(a,e){const i=Fs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function h1(a,e){a.uniform1iv(this.addr,e)}function d1(a,e){a.uniform2iv(this.addr,e)}function p1(a,e){a.uniform3iv(this.addr,e)}function m1(a,e){a.uniform4iv(this.addr,e)}function g1(a,e){a.uniform1uiv(this.addr,e)}function v1(a,e){a.uniform2uiv(this.addr,e)}function _1(a,e){a.uniform3uiv(this.addr,e)}function x1(a,e){a.uniform4uiv(this.addr,e)}function S1(a,e,i){const s=this.cache,l=e.length,u=Qu(i,l);vn(s,u)||(a.uniform1iv(this.addr,u),_n(s,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||U0,u[f])}function y1(a,e,i){const s=this.cache,l=e.length,u=Qu(i,l);vn(s,u)||(a.uniform1iv(this.addr,u),_n(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||N0,u[f])}function E1(a,e,i){const s=this.cache,l=e.length,u=Qu(i,l);vn(s,u)||(a.uniform1iv(this.addr,u),_n(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||O0,u[f])}function M1(a,e,i){const s=this.cache,l=e.length,u=Qu(i,l);vn(s,u)||(a.uniform1iv(this.addr,u),_n(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||L0,u[f])}function T1(a){switch(a){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return l1;case 35674:return u1;case 35675:return c1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return M1}}class A1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=a1(i.type)}}class b1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T1(i.type)}}class R1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function T_(a,e){a.seq.push(e),a.map[e.id]=e}function C1(a,e,i){const s=a.name,l=s.length;for(Fh.lastIndex=0;;){const u=Fh.exec(s),f=Fh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){T_(i,p===void 0?new A1(d,a,e):new b1(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new R1(d),T_(i,v)),i=v}}}class Vu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);C1(u,f,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function A_(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const w1=37297;let D1=0;function U1(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const b_=new ht;function L1(a){Ut._getMatrix(b_,Ut.workingColorSpace,a);const e=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(a)){case Xu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function R_(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+U1(a.getShaderSource(e),d)}else return u}function N1(a,e){const i=L1(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function O1(a,e){let i;switch(e){case VE:i="Linear";break;case kE:i="Reinhard";break;case XE:i="Cineon";break;case WE:i="ACESFilmic";break;case YE:i="AgX";break;case ZE:i="Neutral";break;case qE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pu=new se;function P1(){Ut.getLuminanceCoefficients(Pu);const a=Pu.x.toFixed(4),e=Pu.y.toFixed(4),i=Pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function I1(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function F1(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function Vo(a){return a!==""}function C_(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(a){return a.replace(z1,G1)}const H1=new Map;function G1(a,e){let i=mt[e];if(i===void 0){const s=H1.get(e);if(s!==void 0)i=mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pd(i)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(a){return a.replace(V1,k1)}function k1(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function U_(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X1(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===yE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case HE:e="ENVMAP_BLENDING_MIX";break;case GE:e="ENVMAP_BLENDING_ADD";break}return e}function Z1(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function j1(a,e,i,s){const l=a.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=X1(i),p=W1(i),g=q1(i),v=Y1(i),x=Z1(i),y=B1(i),M=I1(u),b=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?mt.tonemapping_pars_fragment:"",i.toneMapping!==Ya?O1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,N1("linearToOutputTexel",i.outputColorSpace),P1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),f=Pd(f),f=C_(f,i),f=w_(f,i),d=Pd(d),d=C_(d,i),d=w_(d,i),f=D_(f),d=D_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=L+S+f,U=L+_+d,B=A_(l,l.VERTEX_SHADER,N),G=A_(l,l.FRAGMENT_SHADER,U);l.attachShader(b,B),l.attachShader(b,G),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function H(V){if(a.debug.checkShaderErrors){const J=l.getProgramInfoLog(b)||"",ue=l.getShaderInfoLog(B)||"",me=l.getShaderInfoLog(G)||"",oe=J.trim(),I=ue.trim(),Y=me.trim();let z=!0,Se=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(z=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,B,G);else{const w=R_(l,B,"vertex"),K=R_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+oe+`
`+w+`
`+K)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(I===""||Y==="")&&(Se=!1);Se&&(V.diagnostics={runnable:z,programLog:oe,vertexShader:{log:I,prefix:S},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(B),l.deleteShader(G),j=new Vu(l,b),D=F1(l,b)}let j;this.getUniforms=function(){return j===void 0&&H(this),j};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,w1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=G,this}let K1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new J1(e),i.set(e,s)),s}}class J1{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}}function $1(a,e,i,s,l,u,f){const d=new S0,m=new Q1,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,V,J,ue){const me=J.fog,oe=ue.geometry,I=D.isMeshStandardMaterial?J.environment:null,Y=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),z=Y&&Y.mapping===Ku?Y.image.height:null,Se=M[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const w=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,K=w!==void 0?w.length:0;let _e=0;oe.morphAttributes.position!==void 0&&(_e=1),oe.morphAttributes.normal!==void 0&&(_e=2),oe.morphAttributes.color!==void 0&&(_e=3);let ye,we,Ge,ee;if(Se){const Ct=Ii[Se];ye=Ct.vertexShader,we=Ct.fragmentShader}else ye=D.vertexShader,we=D.fragmentShader,m.update(D),Ge=m.getVertexShaderID(D),ee=m.getFragmentShaderID(D);const pe=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),je=ue.isInstancedMesh===!0,We=ue.isBatchedMesh===!0,ct=!!D.map,xt=!!D.matcap,F=!!Y,At=!!D.aoMap,st=!!D.lightMap,$e=!!D.bumpMap,Pe=!!D.normalMap,Nt=!!D.displacementMap,ze=!!D.emissiveMap,Be=!!D.metalnessMap,lt=!!D.roughnessMap,Rt=D.anisotropy>0,O=D.clearcoat>0,T=D.dispersion>0,te=D.iridescence>0,ce=D.sheen>0,ge=D.transmission>0,le=Rt&&!!D.anisotropyMap,Ie=O&&!!D.clearcoatMap,Re=O&&!!D.clearcoatNormalMap,qe=O&&!!D.clearcoatRoughnessMap,Ze=te&&!!D.iridescenceMap,Ee=te&&!!D.iridescenceThicknessMap,Le=ce&&!!D.sheenColorMap,Qe=ce&&!!D.sheenRoughnessMap,Xe=!!D.specularMap,De=!!D.specularColorMap,ut=!!D.specularIntensityMap,X=ge&&!!D.transmissionMap,Ae=ge&&!!D.thicknessMap,Ce=!!D.gradientMap,Fe=!!D.alphaMap,Me=D.alphaTest>0,xe=!!D.alphaHash,ke=!!D.extensions;let ot=Ya;D.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ot=a.toneMapping);const Pt={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:ye,fragmentShader:we,defines:D.defines,customVertexShaderID:Ge,customFragmentShaderID:ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:We,batchingColor:We&&ue._colorsTexture!==null,instancing:je,instancingColor:je&&ue.instanceColor!==null,instancingMorph:je&&ue.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ja,alphaToCoverage:!!D.alphaToCoverage,map:ct,matcap:xt,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:z,aoMap:At,lightMap:st,bumpMap:$e,normalMap:Pe,displacementMap:x&&Nt,emissiveMap:ze,normalMapObjectSpace:Pe&&D.normalMapType===JE,normalMapTangentSpace:Pe&&D.normalMapType===QE,metalnessMap:Be,roughnessMap:lt,anisotropy:Rt,anisotropyMap:le,clearcoat:O,clearcoatMap:Ie,clearcoatNormalMap:Re,clearcoatRoughnessMap:qe,dispersion:T,iridescence:te,iridescenceMap:Ze,iridescenceThicknessMap:Ee,sheen:ce,sheenColorMap:Le,sheenRoughnessMap:Qe,specularMap:Xe,specularColorMap:De,specularIntensityMap:ut,transmission:ge,transmissionMap:X,thicknessMap:Ae,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:xe,combine:D.combine,mapUv:ct&&b(D.map.channel),aoMapUv:At&&b(D.aoMap.channel),lightMapUv:st&&b(D.lightMap.channel),bumpMapUv:$e&&b(D.bumpMap.channel),normalMapUv:Pe&&b(D.normalMap.channel),displacementMapUv:Nt&&b(D.displacementMap.channel),emissiveMapUv:ze&&b(D.emissiveMap.channel),metalnessMapUv:Be&&b(D.metalnessMap.channel),roughnessMapUv:lt&&b(D.roughnessMap.channel),anisotropyMapUv:le&&b(D.anisotropyMap.channel),clearcoatMapUv:Ie&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&b(D.sheenRoughnessMap.channel),specularMapUv:Xe&&b(D.specularMap.channel),specularColorMapUv:De&&b(D.specularColorMap.channel),specularIntensityMapUv:ut&&b(D.specularIntensityMap.channel),transmissionMapUv:X&&b(D.transmissionMap.channel),thicknessMapUv:Ae&&b(D.thicknessMap.channel),alphaMapUv:Fe&&b(D.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Pe||Rt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!oe.attributes.uv&&(ct||Fe),fog:!!me,useFog:D.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:ue.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_e,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&D.map.isVideoTexture===!0&&Ut.getTransfer(D.map.colorSpace)===kt,decodeVideoTextureEmissive:ze&&D.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(D.emissiveMap.colorSpace)===kt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ii,flipSided:D.side===Tn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ke&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&D.extensions.multiDraw===!0||We)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(L(C,D),N(C,D),C.push(a.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const C=M[D.type];let V;if(C){const J=Ii[C];V=CM.clone(J.uniforms)}else V=D.uniforms;return V}function B(D,C){let V;for(let J=0,ue=g.length;J<ue;J++){const me=g[J];if(me.cacheKey===C){V=me,++V.usedTimes;break}}return V===void 0&&(V=new j1(a,C,D,u),g.push(V)),V}function G(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function H(D){m.remove(D)}function j(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:B,releaseProgram:G,releaseShaderCache:H,programs:g,dispose:j}}function eR(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,m){a.get(f)[d]=m}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function tR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function L_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function N_(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(v,x,y,M,b,S){let _=a[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:M,renderOrder:v.renderOrder,z:b,group:S},a[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=b,_.group=S),e++,_}function d(v,x,y,M,b,S){const _=f(v,x,y,M,b,S);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,M,b,S){const _=f(v,x,y,M,b,S);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||tR),s.length>1&&s.sort(x||L_),l.length>1&&l.sort(x||L_)}function g(){for(let v=e,x=a.length;v<x;v++){const y=a[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function nR(){let a=new WeakMap;function e(s,l){const u=a.get(s);let f;return u===void 0?(f=new N_,a.set(s,[f])):l>=u.length?(f=new N_,u.push(f)):f=u[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function iR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new se,color:new Bt};break;case"SpotLight":i={position:new se,direction:new se,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":i={color:new Bt,position:new se,halfWidth:new se,halfHeight:new se};break}return a[e.id]=i,i}}}function aR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let rR=0;function sR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function oR(a){const e=new iR,i=aR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new se);const l=new se,u=new gn,f=new gn;function d(p){let g=0,v=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,M=0,b=0,S=0,_=0,L=0,N=0,U=0,B=0,G=0,H=0;p.sort(sR);for(let D=0,C=p.length;D<C;D++){const V=p[D],J=V.color,ue=V.intensity,me=V.distance,oe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=J.r*ue,v+=J.g*ue,x+=J.b*ue;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],ue);H++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,z=i.get(V);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,s.directionalShadow[y]=z,s.directionalShadowMap[y]=oe,s.directionalShadowMatrix[y]=V.shadow.matrix,L++}s.directional[y]=I,y++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(J).multiplyScalar(ue),I.distance=me,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[b]=I;const Y=V.shadow;if(V.map&&(s.spotLightMap[B]=V.map,B++,Y.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[b]=Y.matrix,V.castShadow){const z=i.get(V);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,s.spotShadow[b]=z,s.spotShadowMap[b]=oe,U++}b++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(J).multiplyScalar(ue),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Y=V.shadow,z=i.get(V);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,s.pointShadow[M]=z,s.pointShadowMap[M]=oe,s.pointShadowMatrix[M]=V.shadow.matrix,N++}s.point[M]=I,M++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(ue),I.groundColor.copy(V.groundColor).multiplyScalar(ue),s.hemi[_]=I,_++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==y||j.pointLength!==M||j.spotLength!==b||j.rectAreaLength!==S||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==N||j.numSpotShadows!==U||j.numSpotMaps!==B||j.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=b,s.rectArea.length=S,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=H,j.directionalLength=y,j.pointLength=M,j.spotLength=b,j.rectAreaLength=S,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=N,j.numSpotShadows=U,j.numSpotMaps=B,j.numLightProbes=H,s.version=rR++)}function m(p,g){let v=0,x=0,y=0,M=0,b=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const N=p[_];if(N.isDirectionalLight){const U=s.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const U=s.rectArea[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),f.identity(),u.copy(N.matrixWorld),u.premultiply(S),f.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),M++}else if(N.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),b++}}}return{setup:d,setupView:m,state:s}}function O_(a){const e=new oR(a),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function f(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function lR(a){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new O_(a),e.set(l,[d])):u>=f.length?(d=new O_(a),f.push(d)):d=f[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cR=`uniform sampler2D shadow_pass;
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
}`;function fR(a,e,i){let s=new R0;const l=new _t,u=new _t,f=new sn,d=new IM({depthPacking:KE}),m=new FM,p={},g=i.maxTextureSize,v={[pa]:Tn,[Tn]:pa,[ii]:ii},x=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:uR,fragmentShader:cR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Qa;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ri(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s0;let _=this.type;this.render=function(G,H,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const D=a.getRenderTarget(),C=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),J=a.state;J.setBlending(Hi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ue=_!==ua&&this.type===ua,me=_===ua&&this.type!==ua;for(let oe=0,I=G.length;oe<I;oe++){const Y=G[oe],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const Se=z.getFrameExtents();if(l.multiply(Se),u.copy(z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Se.x),l.x=u.x*Se.x,z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Se.y),l.y=u.y*Se.y,z.mapSize.y=u.y)),z.map===null||ue===!0||me===!0){const K=this.type!==ua?{minFilter:Ci,magFilter:Ci}:{};z.map!==null&&z.map.dispose(),z.map=new wi(l.x,l.y,K),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const w=z.getViewportCount();for(let K=0;K<w;K++){const _e=z.getViewport(K);f.set(u.x*_e.x,u.y*_e.y,u.x*_e.z,u.y*_e.w),J.viewport(f),z.updateMatrices(Y,K),s=z.getFrustum(),U(H,j,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ua&&L(z,j),z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,a.setRenderTarget(D,C,V)};function L(G,H){const j=e.update(b);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new wi(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,a.setRenderTarget(G.mapPass),a.clear(),a.renderBufferDirect(H,null,j,x,b,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,a.setRenderTarget(G.map),a.clear(),a.renderBufferDirect(H,null,j,y,b,null)}function N(G,H,j,D){let C=null;const V=j.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,a.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const J=C.uuid,ue=H.uuid;let me=p[J];me===void 0&&(me={},p[J]=me);let oe=me[ue];oe===void 0&&(oe=C.clone(),me[ue]=oe,H.addEventListener("dispose",B)),C=oe}if(C.visible=H.visible,C.wireframe=H.wireframe,D===ua?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:v[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=a.properties.get(C);J.light=j}return C}function U(G,H,j,D,C){if(G.visible===!1)return;if(G.layers.test(H.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ua)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,G.matrixWorld);const ue=e.update(G),me=G.material;if(Array.isArray(me)){const oe=ue.groups;for(let I=0,Y=oe.length;I<Y;I++){const z=oe[I],Se=me[z.materialIndex];if(Se&&Se.visible){const w=N(G,Se,D,C);G.onBeforeShadow(a,G,H,j,ue,w,z),a.renderBufferDirect(j,null,ue,w,G,z),G.onAfterShadow(a,G,H,j,ue,w,z)}}}else if(me.visible){const oe=N(G,me,D,C);G.onBeforeShadow(a,G,H,j,ue,oe,null),a.renderBufferDirect(j,null,ue,oe,G,null),G.onAfterShadow(a,G,H,j,ue,oe,null)}}const J=G.children;for(let ue=0,me=J.length;ue<me;ue++)U(J[ue],H,j,D,C)}function B(G){G.target.removeEventListener("dispose",B);for(const j in p){const D=p[j],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const hR={[Yh]:Zh,[jh]:Jh,[Kh]:$h,[ws]:Qh,[Zh]:Yh,[Jh]:jh,[$h]:Kh,[Qh]:ws};function dR(a,e){function i(){let X=!1;const Ae=new sn;let Ce=null;const Fe=new sn(0,0,0,0);return{setMask:function(Me){Ce!==Me&&!X&&(a.colorMask(Me,Me,Me,Me),Ce=Me)},setLocked:function(Me){X=Me},setClear:function(Me,xe,ke,ot,Pt){Pt===!0&&(Me*=ot,xe*=ot,ke*=ot),Ae.set(Me,xe,ke,ot),Fe.equals(Ae)===!1&&(a.clearColor(Me,xe,ke,ot),Fe.copy(Ae))},reset:function(){X=!1,Ce=null,Fe.set(-1,0,0,0)}}}function s(){let X=!1,Ae=!1,Ce=null,Fe=null,Me=null;return{setReversed:function(xe){if(Ae!==xe){const ke=e.get("EXT_clip_control");xe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const ot=Me;Me=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(xe){xe?pe(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(xe){Ce!==xe&&!X&&(a.depthMask(xe),Ce=xe)},setFunc:function(xe){if(Ae&&(xe=hR[xe]),Fe!==xe){switch(xe){case Yh:a.depthFunc(a.NEVER);break;case Zh:a.depthFunc(a.ALWAYS);break;case jh:a.depthFunc(a.LESS);break;case ws:a.depthFunc(a.LEQUAL);break;case Kh:a.depthFunc(a.EQUAL);break;case Qh:a.depthFunc(a.GEQUAL);break;case Jh:a.depthFunc(a.GREATER);break;case $h:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Me!==xe&&(Ae&&(xe=1-xe),a.clearDepth(xe),Me=xe)},reset:function(){X=!1,Ce=null,Fe=null,Me=null,Ae=!1}}}function l(){let X=!1,Ae=null,Ce=null,Fe=null,Me=null,xe=null,ke=null,ot=null,Pt=null;return{setTest:function(Ct){X||(Ct?pe(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(Ct){Ae!==Ct&&!X&&(a.stencilMask(Ct),Ae=Ct)},setFunc:function(Ct,vi,fn){(Ce!==Ct||Fe!==vi||Me!==fn)&&(a.stencilFunc(Ct,vi,fn),Ce=Ct,Fe=vi,Me=fn)},setOp:function(Ct,vi,fn){(xe!==Ct||ke!==vi||ot!==fn)&&(a.stencilOp(Ct,vi,fn),xe=Ct,ke=vi,ot=fn)},setLocked:function(Ct){X=Ct},setClear:function(Ct){Pt!==Ct&&(a.clearStencil(Ct),Pt=Ct)},reset:function(){X=!1,Ae=null,Ce=null,Fe=null,Me=null,xe=null,ke=null,ot=null,Pt=null}}}const u=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,y=[],M=null,b=!1,S=null,_=null,L=null,N=null,U=null,B=null,G=null,H=new Bt(0,0,0),j=0,D=!1,C=null,V=null,J=null,ue=null,me=null;const oe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const z=a.getParameter(a.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=Y>=2);let Se=null,w={};const K=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),ye=new sn().fromArray(K),we=new sn().fromArray(_e);function Ge(X,Ae,Ce,Fe){const Me=new Uint8Array(4),xe=a.createTexture();a.bindTexture(X,xe),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<Ce;ke++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,Me):a.texImage2D(Ae+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Me);return xe}const ee={};ee[a.TEXTURE_2D]=Ge(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=Ge(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=Ge(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=Ge(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),pe(a.DEPTH_TEST),f.setFunc(ws),$e(!1),Pe(Gv),pe(a.CULL_FACE),At(Hi);function pe(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function be(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function je(X,Ae){return v[X]!==Ae?(a.bindFramebuffer(X,Ae),v[X]=Ae,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ae),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function We(X,Ae){let Ce=y,Fe=!1;if(X){Ce=x.get(Ae),Ce===void 0&&(Ce=[],x.set(Ae,Ce));const Me=X.textures;if(Ce.length!==Me.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let xe=0,ke=Me.length;xe<ke;xe++)Ce[xe]=a.COLOR_ATTACHMENT0+xe;Ce.length=Me.length,Fe=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(Ce)}function ct(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const xt={[Tr]:a.FUNC_ADD,[ME]:a.FUNC_SUBTRACT,[TE]:a.FUNC_REVERSE_SUBTRACT};xt[AE]=a.MIN,xt[bE]=a.MAX;const F={[RE]:a.ZERO,[CE]:a.ONE,[wE]:a.SRC_COLOR,[Wh]:a.SRC_ALPHA,[PE]:a.SRC_ALPHA_SATURATE,[NE]:a.DST_COLOR,[UE]:a.DST_ALPHA,[DE]:a.ONE_MINUS_SRC_COLOR,[qh]:a.ONE_MINUS_SRC_ALPHA,[OE]:a.ONE_MINUS_DST_COLOR,[LE]:a.ONE_MINUS_DST_ALPHA,[BE]:a.CONSTANT_COLOR,[IE]:a.ONE_MINUS_CONSTANT_COLOR,[FE]:a.CONSTANT_ALPHA,[zE]:a.ONE_MINUS_CONSTANT_ALPHA};function At(X,Ae,Ce,Fe,Me,xe,ke,ot,Pt,Ct){if(X===Hi){b===!0&&(be(a.BLEND),b=!1);return}if(b===!1&&(pe(a.BLEND),b=!0),X!==EE){if(X!==S||Ct!==D){if((_!==Tr||U!==Tr)&&(a.blendEquation(a.FUNC_ADD),_=Tr,U=Tr),Ct)switch(X){case Rs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vv:a.blendFunc(a.ONE,a.ONE);break;case kv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Xv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Vv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case kv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,N=null,B=null,G=null,H.set(0,0,0),j=0,S=X,D=Ct}return}Me=Me||Ae,xe=xe||Ce,ke=ke||Fe,(Ae!==_||Me!==U)&&(a.blendEquationSeparate(xt[Ae],xt[Me]),_=Ae,U=Me),(Ce!==L||Fe!==N||xe!==B||ke!==G)&&(a.blendFuncSeparate(F[Ce],F[Fe],F[xe],F[ke]),L=Ce,N=Fe,B=xe,G=ke),(ot.equals(H)===!1||Pt!==j)&&(a.blendColor(ot.r,ot.g,ot.b,Pt),H.copy(ot),j=Pt),S=X,D=!1}function st(X,Ae){X.side===ii?be(a.CULL_FACE):pe(a.CULL_FACE);let Ce=X.side===Tn;Ae&&(Ce=!Ce),$e(Ce),X.blending===Rs&&X.transparent===!1?At(Hi):At(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const Fe=X.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function $e(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function Pe(X){X!==xE?(pe(a.CULL_FACE),X!==V&&(X===Gv?a.cullFace(a.BACK):X===SE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),V=X}function Nt(X){X!==J&&(I&&a.lineWidth(X),J=X)}function ze(X,Ae,Ce){X?(pe(a.POLYGON_OFFSET_FILL),(ue!==Ae||me!==Ce)&&(a.polygonOffset(Ae,Ce),ue=Ae,me=Ce)):be(a.POLYGON_OFFSET_FILL)}function Be(X){X?pe(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function lt(X){X===void 0&&(X=a.TEXTURE0+oe-1),Se!==X&&(a.activeTexture(X),Se=X)}function Rt(X,Ae,Ce){Ce===void 0&&(Se===null?Ce=a.TEXTURE0+oe-1:Ce=Se);let Fe=w[Ce];Fe===void 0&&(Fe={type:void 0,texture:void 0},w[Ce]=Fe),(Fe.type!==X||Fe.texture!==Ae)&&(Se!==Ce&&(a.activeTexture(Ce),Se=Ce),a.bindTexture(X,Ae||ee[X]),Fe.type=X,Fe.texture=Ae)}function O(){const X=w[Se];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(X){ye.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function Qe(X){we.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),we.copy(X))}function Xe(X,Ae){let Ce=p.get(Ae);Ce===void 0&&(Ce=new WeakMap,p.set(Ae,Ce));let Fe=Ce.get(X);Fe===void 0&&(Fe=a.getUniformBlockIndex(Ae,X.name),Ce.set(X,Fe))}function De(X,Ae){const Fe=p.get(Ae).get(X);m.get(Ae)!==Fe&&(a.uniformBlockBinding(Ae,Fe,X.__bindingPointIndex),m.set(Ae,Fe))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},Se=null,w={},v={},x=new WeakMap,y=[],M=null,b=!1,S=null,_=null,L=null,N=null,U=null,B=null,G=null,H=new Bt(0,0,0),j=0,D=!1,C=null,V=null,J=null,ue=null,me=null,ye.set(0,0,a.canvas.width,a.canvas.height),we.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:pe,disable:be,bindFramebuffer:je,drawBuffers:We,useProgram:ct,setBlending:At,setMaterial:st,setFlipSided:$e,setCullFace:Pe,setLineWidth:Nt,setPolygonOffset:ze,setScissorTest:Be,activeTexture:lt,bindTexture:Rt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:Ze,texImage3D:Ee,updateUBOMapping:Xe,uniformBlockBinding:De,texStorage2D:Re,texStorage3D:qe,texSubImage2D:ce,texSubImage3D:ge,compressedTexSubImage2D:le,compressedTexSubImage3D:Ie,scissor:Le,viewport:Qe,reset:ut}}function pR(a,e,i,s,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _t,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return y?new OffscreenCanvas(O,T):qu("canvas")}function b(O,T,te){let ce=1;const ge=Rt(O);if((ge.width>te||ge.height>te)&&(ce=te/Math.max(ge.width,ge.height)),ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const le=Math.floor(ce*ge.width),Ie=Math.floor(ce*ge.height);v===void 0&&(v=M(le,Ie));const Re=T?M(le,Ie):v;return Re.width=le,Re.height=Ie,Re.getContext("2d").drawImage(O,0,0,le,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+Ie+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function S(O){return O.generateMipmaps}function _(O){a.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function N(O,T,te,ce,ge=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let le=T;if(T===a.RED&&(te===a.FLOAT&&(le=a.R32F),te===a.HALF_FLOAT&&(le=a.R16F),te===a.UNSIGNED_BYTE&&(le=a.R8)),T===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.R8UI),te===a.UNSIGNED_SHORT&&(le=a.R16UI),te===a.UNSIGNED_INT&&(le=a.R32UI),te===a.BYTE&&(le=a.R8I),te===a.SHORT&&(le=a.R16I),te===a.INT&&(le=a.R32I)),T===a.RG&&(te===a.FLOAT&&(le=a.RG32F),te===a.HALF_FLOAT&&(le=a.RG16F),te===a.UNSIGNED_BYTE&&(le=a.RG8)),T===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RG8UI),te===a.UNSIGNED_SHORT&&(le=a.RG16UI),te===a.UNSIGNED_INT&&(le=a.RG32UI),te===a.BYTE&&(le=a.RG8I),te===a.SHORT&&(le=a.RG16I),te===a.INT&&(le=a.RG32I)),T===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RGB8UI),te===a.UNSIGNED_SHORT&&(le=a.RGB16UI),te===a.UNSIGNED_INT&&(le=a.RGB32UI),te===a.BYTE&&(le=a.RGB8I),te===a.SHORT&&(le=a.RGB16I),te===a.INT&&(le=a.RGB32I)),T===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(le=a.RGBA16UI),te===a.UNSIGNED_INT&&(le=a.RGBA32UI),te===a.BYTE&&(le=a.RGBA8I),te===a.SHORT&&(le=a.RGBA16I),te===a.INT&&(le=a.RGBA32I)),T===a.RGB&&(te===a.UNSIGNED_INT_5_9_9_9_REV&&(le=a.RGB9_E5),te===a.UNSIGNED_INT_10F_11F_11F_REV&&(le=a.R11F_G11F_B10F)),T===a.RGBA){const Ie=ge?Xu:Ut.getTransfer(ce);te===a.FLOAT&&(le=a.RGBA32F),te===a.HALF_FLOAT&&(le=a.RGBA16F),te===a.UNSIGNED_BYTE&&(le=Ie===kt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(le=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(le=a.RGB5_A1)}return(le===a.R16F||le===a.R32F||le===a.RG16F||le===a.RG32F||le===a.RGBA16F||le===a.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function U(O,T){let te;return O?T===null||T===Za||T===Ls?te=a.DEPTH24_STENCIL8:T===ca?te=a.DEPTH32F_STENCIL8:T===Xo&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Za||T===Ls?te=a.DEPTH_COMPONENT24:T===ca?te=a.DEPTH_COMPONENT32F:T===Xo&&(te=a.DEPTH_COMPONENT16),te}function B(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),j(T),T.isVideoTexture&&g.delete(T)}function H(O){const T=O.target;T.removeEventListener("dispose",H),C(T)}function j(O){const T=s.get(O);if(T.__webglInit===void 0)return;const te=O.source,ce=x.get(te);if(ce){const ge=ce[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(O),Object.keys(ce).length===0&&x.delete(te)}s.remove(O)}function D(O){const T=s.get(O);a.deleteTexture(T.__webglTexture);const te=O.source,ce=x.get(te);delete ce[T.__cacheKey],f.memory.textures--}function C(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ge=0;ge<T.__webglFramebuffer[ce].length;ge++)a.deleteFramebuffer(T.__webglFramebuffer[ce][ge]);else a.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)a.deleteFramebuffer(T.__webglFramebuffer[ce]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=O.textures;for(let ce=0,ge=te.length;ce<ge;ce++){const le=s.get(te[ce]);le.__webglTexture&&(a.deleteTexture(le.__webglTexture),f.memory.textures--),s.remove(te[ce])}s.remove(O)}let V=0;function J(){V=0}function ue(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function me(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function oe(O,T){const te=s.get(O);if(O.isVideoTexture&&Be(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const ce=O.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,O,T);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+T)}function I(O,T){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){ee(te,O,T);return}i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+T)}function Y(O,T){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){ee(te,O,T);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+T)}function z(O,T){const te=s.get(O);if(O.version>0&&te.__version!==O.version){pe(te,O,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+T)}const Se={[nd]:a.REPEAT,[br]:a.CLAMP_TO_EDGE,[id]:a.MIRRORED_REPEAT},w={[Ci]:a.NEAREST,[jE]:a.NEAREST_MIPMAP_NEAREST,[pu]:a.NEAREST_MIPMAP_LINEAR,[Bn]:a.LINEAR,[lh]:a.LINEAR_MIPMAP_NEAREST,[Rr]:a.LINEAR_MIPMAP_LINEAR},K={[$E]:a.NEVER,[rM]:a.ALWAYS,[eM]:a.LESS,[v0]:a.LEQUAL,[tM]:a.EQUAL,[aM]:a.GEQUAL,[nM]:a.GREATER,[iM]:a.NOTEQUAL};function _e(O,T){if(T.type===ca&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===lh||T.magFilter===pu||T.magFilter===Rr||T.minFilter===Bn||T.minFilter===lh||T.minFilter===pu||T.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Se[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Se[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Se[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,w[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,w[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==pu&&T.minFilter!==Rr||T.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ye(O,T){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const ce=T.source;let ge=x.get(ce);ge===void 0&&(ge={},x.set(ce,ge));const le=me(T);if(le!==O.__cacheKey){ge[le]===void 0&&(ge[le]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ge[le].usedTimes++;const Ie=ge[O.__cacheKey];Ie!==void 0&&(ge[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&D(T)),O.__cacheKey=le,O.__webglTexture=ge[le].texture}return te}function we(O,T,te){return Math.floor(Math.floor(O/te)/T)}function Ge(O,T,te,ce){const le=O.updateRanges;if(le.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,te,ce,T.data);else{le.sort((Ee,Le)=>Ee.start-Le.start);let Ie=0;for(let Ee=1;Ee<le.length;Ee++){const Le=le[Ie],Qe=le[Ee],Xe=Le.start+Le.count,De=we(Qe.start,T.width,4),ut=we(Le.start,T.width,4);Qe.start<=Xe+1&&De===ut&&we(Qe.start+Qe.count-1,T.width,4)===De?Le.count=Math.max(Le.count,Qe.start+Qe.count-Le.start):(++Ie,le[Ie]=Qe)}le.length=Ie+1;const Re=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ze=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Le=le.length;Ee<Le;Ee++){const Qe=le[Ee],Xe=Math.floor(Qe.start/4),De=Math.ceil(Qe.count/4),ut=Xe%T.width,X=Math.floor(Xe/T.width),Ae=De,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,ut,X,Ae,Ce,te,ce,T.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Re),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ze)}}function ee(O,T,te){let ce=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=a.TEXTURE_3D);const ge=ye(O,T),le=T.source;i.bindTexture(ce,O.__webglTexture,a.TEXTURE0+te);const Ie=s.get(le);if(le.version!==Ie.__version||ge===!0){i.activeTexture(a.TEXTURE0+te);const Re=Ut.getPrimaries(Ut.workingColorSpace),qe=T.colorSpace===Fi?null:Ut.getPrimaries(T.colorSpace),Ze=T.colorSpace===Fi||Re===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ee=b(T.image,!1,l.maxTextureSize);Ee=lt(T,Ee);const Le=u.convert(T.format,T.colorSpace),Qe=u.convert(T.type);let Xe=N(T.internalFormat,Le,Qe,T.colorSpace,T.isVideoTexture);_e(ce,T);let De;const ut=T.mipmaps,X=T.isVideoTexture!==!0,Ae=Ie.__version===void 0||ge===!0,Ce=le.dataReady,Fe=B(T,Ee);if(T.isDepthTexture)Xe=U(T.format===Ns,T.type),Ae&&(X?i.texStorage2D(a.TEXTURE_2D,1,Xe,Ee.width,Ee.height):i.texImage2D(a.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Le,Qe,null));else if(T.isDataTexture)if(ut.length>0){X&&Ae&&i.texStorage2D(a.TEXTURE_2D,Fe,Xe,ut[0].width,ut[0].height);for(let Me=0,xe=ut.length;Me<xe;Me++)De=ut[Me],X?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,De.width,De.height,Le,Qe,De.data):i.texImage2D(a.TEXTURE_2D,Me,Xe,De.width,De.height,0,Le,Qe,De.data);T.generateMipmaps=!1}else X?(Ae&&i.texStorage2D(a.TEXTURE_2D,Fe,Xe,Ee.width,Ee.height),Ce&&Ge(T,Ee,Le,Qe)):i.texImage2D(a.TEXTURE_2D,0,Xe,Ee.width,Ee.height,0,Le,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ae&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Xe,ut[0].width,ut[0].height,Ee.depth);for(let Me=0,xe=ut.length;Me<xe;Me++)if(De=ut[Me],T.format!==bi)if(Le!==null)if(X){if(Ce)if(T.layerUpdates.size>0){const ke=c_(De.width,De.height,T.format,T.type);for(const ot of T.layerUpdates){const Pt=De.data.subarray(ot*ke/De.data.BYTES_PER_ELEMENT,(ot+1)*ke/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,ot,De.width,De.height,1,Le,Pt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Le,De.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,Xe,De.width,De.height,Ee.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ce&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,Ee.depth,Le,Qe,De.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Me,Xe,De.width,De.height,Ee.depth,0,Le,Qe,De.data)}else{X&&Ae&&i.texStorage2D(a.TEXTURE_2D,Fe,Xe,ut[0].width,ut[0].height);for(let Me=0,xe=ut.length;Me<xe;Me++)De=ut[Me],T.format!==bi?Le!==null?X?Ce&&i.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,De.width,De.height,Le,De.data):i.compressedTexImage2D(a.TEXTURE_2D,Me,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,De.width,De.height,Le,Qe,De.data):i.texImage2D(a.TEXTURE_2D,Me,Xe,De.width,De.height,0,Le,Qe,De.data)}else if(T.isDataArrayTexture)if(X){if(Ae&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,Xe,Ee.width,Ee.height,Ee.depth),Ce)if(T.layerUpdates.size>0){const Me=c_(Ee.width,Ee.height,T.format,T.type);for(const xe of T.layerUpdates){const ke=Ee.data.subarray(xe*Me/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,xe,Ee.width,Ee.height,1,Le,Qe,ke)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,Qe,Ee.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,Ee.width,Ee.height,Ee.depth,0,Le,Qe,Ee.data);else if(T.isData3DTexture)X?(Ae&&i.texStorage3D(a.TEXTURE_3D,Fe,Xe,Ee.width,Ee.height,Ee.depth),Ce&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Le,Qe,Ee.data)):i.texImage3D(a.TEXTURE_3D,0,Xe,Ee.width,Ee.height,Ee.depth,0,Le,Qe,Ee.data);else if(T.isFramebufferTexture){if(Ae)if(X)i.texStorage2D(a.TEXTURE_2D,Fe,Xe,Ee.width,Ee.height);else{let Me=Ee.width,xe=Ee.height;for(let ke=0;ke<Fe;ke++)i.texImage2D(a.TEXTURE_2D,ke,Xe,Me,xe,0,Le,Qe,null),Me>>=1,xe>>=1}}else if(ut.length>0){if(X&&Ae){const Me=Rt(ut[0]);i.texStorage2D(a.TEXTURE_2D,Fe,Xe,Me.width,Me.height)}for(let Me=0,xe=ut.length;Me<xe;Me++)De=ut[Me],X?Ce&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Le,Qe,De):i.texImage2D(a.TEXTURE_2D,Me,Xe,Le,Qe,De);T.generateMipmaps=!1}else if(X){if(Ae){const Me=Rt(Ee);i.texStorage2D(a.TEXTURE_2D,Fe,Xe,Me.width,Me.height)}Ce&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Qe,Ee)}else i.texImage2D(a.TEXTURE_2D,0,Xe,Le,Qe,Ee);S(T)&&_(ce),Ie.__version=le.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function pe(O,T,te){if(T.image.length!==6)return;const ce=ye(O,T),ge=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+te);const le=s.get(ge);if(ge.version!==le.__version||ce===!0){i.activeTexture(a.TEXTURE0+te);const Ie=Ut.getPrimaries(Ut.workingColorSpace),Re=T.colorSpace===Fi?null:Ut.getPrimaries(T.colorSpace),qe=T.colorSpace===Fi||Ie===Re?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let xe=0;xe<6;xe++)!Ze&&!Ee?Le[xe]=b(T.image[xe],!0,l.maxCubemapSize):Le[xe]=Ee?T.image[xe].image:T.image[xe],Le[xe]=lt(T,Le[xe]);const Qe=Le[0],Xe=u.convert(T.format,T.colorSpace),De=u.convert(T.type),ut=N(T.internalFormat,Xe,De,T.colorSpace),X=T.isVideoTexture!==!0,Ae=le.__version===void 0||ce===!0,Ce=ge.dataReady;let Fe=B(T,Qe);_e(a.TEXTURE_CUBE_MAP,T);let Me;if(Ze){X&&Ae&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ut,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){Me=Le[xe].mipmaps;for(let ke=0;ke<Me.length;ke++){const ot=Me[ke];T.format!==bi?Xe!==null?X?Ce&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,ot.width,ot.height,Xe,ot.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,ot.width,ot.height,Xe,De,ot.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,ut,ot.width,ot.height,0,Xe,De,ot.data)}}}else{if(Me=T.mipmaps,X&&Ae){Me.length>0&&Fe++;const xe=Rt(Le[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ut,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ee){X?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Le[xe].width,Le[xe].height,Xe,De,Le[xe].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Le[xe].width,Le[xe].height,0,Xe,De,Le[xe].data);for(let ke=0;ke<Me.length;ke++){const Pt=Me[ke].image[xe].image;X?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,Pt.width,Pt.height,Xe,De,Pt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,ut,Pt.width,Pt.height,0,Xe,De,Pt.data)}}else{X?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe,De,Le[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Xe,De,Le[xe]);for(let ke=0;ke<Me.length;ke++){const ot=Me[ke];X?Ce&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,Xe,De,ot.image[xe]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,ut,Xe,De,ot.image[xe])}}}S(T)&&_(a.TEXTURE_CUBE_MAP),le.__version=ge.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function be(O,T,te,ce,ge,le){const Ie=u.convert(te.format,te.colorSpace),Re=u.convert(te.type),qe=N(te.internalFormat,Ie,Re,te.colorSpace),Ze=s.get(T),Ee=s.get(te);if(Ee.__renderTarget=T,!Ze.__hasExternalTextures){const Le=Math.max(1,T.width>>le),Qe=Math.max(1,T.height>>le);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?i.texImage3D(ge,le,qe,Le,Qe,T.depth,0,Ie,Re,null):i.texImage2D(ge,le,qe,Le,Qe,0,Ie,Re,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),ze(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,ge,Ee.__webglTexture,0,Nt(T)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ce,ge,Ee.__webglTexture,le),i.bindFramebuffer(a.FRAMEBUFFER,null)}function je(O,T,te){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const ce=T.depthTexture,ge=ce&&ce.isDepthTexture?ce.type:null,le=U(T.stencilBuffer,ge),Ie=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=Nt(T);ze(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Re,le,T.width,T.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,le,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,le,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,O)}else{const ce=T.textures;for(let ge=0;ge<ce.length;ge++){const le=ce[ge],Ie=u.convert(le.format,le.colorSpace),Re=u.convert(le.type),qe=N(le.internalFormat,Ie,Re,le.colorSpace),Ze=Nt(T);te&&ze(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,qe,T.width,T.height):ze(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ze,qe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,qe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function We(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=s.get(T.depthTexture);ce.__renderTarget=T,(!ce.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const ge=ce.__webglTexture,le=Nt(T);if(T.depthTexture.format===Wo)ze(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0,le):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Ns)ze(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0,le):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ct(O){const T=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ce=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",ge)};ce.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=ce}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ce=O.texture.mipmaps;ce&&ce.length>0?We(T.__webglFramebuffer[0],O):We(T.__webglFramebuffer,O)}else if(te){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=a.createRenderbuffer(),je(T.__webglDepthbuffer[ce],O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[ce];a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,le)}}else{const ce=O.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),je(T.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,le)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(O,T,te){const ce=s.get(O);T!==void 0&&be(ce.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&ct(O)}function F(O){const T=O.texture,te=s.get(O),ce=s.get(T);O.addEventListener("dispose",H);const ge=O.textures,le=O.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture()),ce.__version=T.version,f.memory.textures++),le){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let qe=0;qe<T.mipmaps.length;qe++)te.__webglFramebuffer[Re][qe]=a.createFramebuffer()}else te.__webglFramebuffer[Re]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)te.__webglFramebuffer[Re]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let Re=0,qe=ge.length;Re<qe;Re++){const Ze=s.get(ge[Re]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&ze(O)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ge.length;Re++){const qe=ge[Re];te.__webglColorRenderbuffer[Re]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const Ze=u.convert(qe.format,qe.colorSpace),Ee=u.convert(qe.type),Le=N(qe.internalFormat,Ze,Ee,qe.colorSpace,O.isXRRenderTarget===!0),Qe=Nt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Qe,Le,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),je(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(le){i.bindTexture(a.TEXTURE_CUBE_MAP,ce.__webglTexture),_e(a.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)be(te.__webglFramebuffer[Re][qe],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe);else be(te.__webglFramebuffer[Re],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(T)&&_(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let Re=0,qe=ge.length;Re<qe;Re++){const Ze=ge[Re],Ee=s.get(Ze);let Le=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Le,Ee.__webglTexture),_e(Le,Ze),be(te.__webglFramebuffer,O,Ze,a.COLOR_ATTACHMENT0+Re,Le,0),S(Ze)&&_(Le)}i.unbindTexture()}else{let Re=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Re,ce.__webglTexture),_e(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)be(te.__webglFramebuffer[qe],O,T,a.COLOR_ATTACHMENT0,Re,qe);else be(te.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,Re,0);S(T)&&_(Re),i.unbindTexture()}O.depthBuffer&&ct(O)}function At(O){const T=O.textures;for(let te=0,ce=T.length;te<ce;te++){const ge=T[te];if(S(ge)){const le=L(O),Ie=s.get(ge).__webglTexture;i.bindTexture(le,Ie),_(le),i.unbindTexture()}}}const st=[],$e=[];function Pe(O){if(O.samples>0){if(ze(O)===!1){const T=O.textures,te=O.width,ce=O.height;let ge=a.COLOR_BUFFER_BIT;const le=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=s.get(O),Re=T.length>1;if(Re)for(let Ze=0;Ze<T.length;Ze++)i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const qe=O.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),Re){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ze]);const Ee=s.get(T[Ze]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ee,0)}a.blitFramebuffer(0,0,te,ce,0,0,te,ce,ge,a.NEAREST),m===!0&&(st.length=0,$e.length=0,st.push(a.COLOR_ATTACHMENT0+Ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(st.push(le),$e.push(le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$e)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Re)for(let Ze=0;Ze<T.length;Ze++){i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ze]);const Ee=s.get(T[Ze]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,Ee,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Nt(O){return Math.min(l.maxSamples,O.samples)}function ze(O){const T=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Be(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function lt(O,T){const te=O.colorSpace,ce=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==ja&&te!==Fi&&(Ut.getTransfer(te)===kt?(ce!==bi||ge!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Rt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=J,this.setTexture2D=oe,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=xt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ze}function mR(a,e){function i(s,l=Fi){let u;const f=Ut.getTransfer(l);if(s===ri)return a.UNSIGNED_BYTE;if(s===Xd)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Wd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===f0)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===h0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===u0)return a.BYTE;if(s===c0)return a.SHORT;if(s===Xo)return a.UNSIGNED_SHORT;if(s===kd)return a.INT;if(s===Za)return a.UNSIGNED_INT;if(s===ca)return a.FLOAT;if(s===Qo)return a.HALF_FLOAT;if(s===d0)return a.ALPHA;if(s===p0)return a.RGB;if(s===bi)return a.RGBA;if(s===Wo)return a.DEPTH_COMPONENT;if(s===Ns)return a.DEPTH_STENCIL;if(s===m0)return a.RED;if(s===qd)return a.RED_INTEGER;if(s===g0)return a.RG;if(s===Yd)return a.RG_INTEGER;if(s===Zd)return a.RGBA_INTEGER;if(s===Fu||s===zu||s===Hu||s===Gu)if(f===kt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Fu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Fu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===rd||s===sd||s===od)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===ad)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===ud||s===cd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===ld||s===ud)return f===kt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===cd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===Sd||s===yd||s===Ed||s===Md||s===Td)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===fd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ed)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Td)return f===kt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ad||s===bd||s===Rd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Ad)return f===kt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Cd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ud)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ls?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
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

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new C0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new gi({vertexShader:gR,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new il(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends Ka{constructor(e,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,x=null,y=null,M=null;const b=typeof XRWebGLBinding<"u",S=new _R,_={},L=i.getContextAttributes();let N=null,U=null;const B=[],G=[],H=new _t;let j=null;const D=new pi;D.viewport=new sn;const C=new pi;C.viewport=new sn;const V=[D,C],J=new zM;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=B[ee];return pe===void 0&&(pe=new Uh,B[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=B[ee];return pe===void 0&&(pe=new Uh,B[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=B[ee];return pe===void 0&&(pe=new Uh,B[ee]=pe),pe.getHandSpace()};function oe(ee){const pe=G.indexOf(ee.inputSource);if(pe===-1)return;const be=B[pe];be!==void 0&&(be.update(ee.inputSource,ee.frame,p||f),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function I(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<B.length;ee++){const pe=G[ee];pe!==null&&(G[ee]=null,B[ee].disconnect(pe))}ue=null,me=null,S.reset();for(const ee in _)delete _[ee];e.setRenderTarget(N),y=null,x=null,v=null,l=null,U=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(j),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",I),l.addEventListener("inputsourceschange",Y),L.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(H),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,je=null,We=null;L.depth&&(We=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,be=L.stencil?Ns:Wo,je=L.stencil?Ls:Za);const ct={colorFormat:i.RGBA8,depthFormat:We,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(ct),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new wi(x.textureWidth,x.textureHeight,{format:bi,type:ri,depthTexture:new Jd(x.textureWidth,x.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,be),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new wi(y.framebufferWidth,y.framebufferHeight,{format:bi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ee){for(let pe=0;pe<ee.removed.length;pe++){const be=ee.removed[pe],je=G.indexOf(be);je>=0&&(G[je]=null,B[je].disconnect(be))}for(let pe=0;pe<ee.added.length;pe++){const be=ee.added[pe];let je=G.indexOf(be);if(je===-1){for(let ct=0;ct<B.length;ct++)if(ct>=G.length){G.push(be),je=ct;break}else if(G[ct]===null){G[ct]=be,je=ct;break}if(je===-1)break}const We=B[je];We&&We.connect(be)}}const z=new se,Se=new se;function w(ee,pe,be){z.setFromMatrixPosition(pe.matrixWorld),Se.setFromMatrixPosition(be.matrixWorld);const je=z.distanceTo(Se),We=pe.projectionMatrix.elements,ct=be.projectionMatrix.elements,xt=We[14]/(We[10]-1),F=We[14]/(We[10]+1),At=(We[9]+1)/We[5],st=(We[9]-1)/We[5],$e=(We[8]-1)/We[0],Pe=(ct[8]+1)/ct[0],Nt=xt*$e,ze=xt*Pe,Be=je/(-$e+Pe),lt=Be*-$e;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(lt),ee.translateZ(Be),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),We[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Rt=xt+Be,O=F+Be,T=Nt-lt,te=ze+(je-lt),ce=At*F/O*Rt,ge=st*F/O*Rt;ee.projectionMatrix.makePerspective(T,te,ce,ge,Rt,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let pe=ee.near,be=ee.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(be=S.depthFar)),J.near=C.near=D.near=pe,J.far=C.far=D.far=be,(ue!==J.near||me!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ue=J.near,me=J.far),J.layers.mask=ee.layers.mask|6,D.layers.mask=J.layers.mask&3,C.layers.mask=J.layers.mask&5;const je=ee.parent,We=J.cameras;K(J,je);for(let ct=0;ct<We.length;ct++)K(We[ct],je);We.length===2?w(J,D,C):J.projectionMatrix.copy(D.projectionMatrix),_e(ee,J,je)};function _e(ee,pe,be){be===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Nd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ee){m=ee,x!==null&&(x.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(ee){return _[ee]};let ye=null;function we(ee,pe){if(g=pe.getViewerPose(p||f),M=pe,g!==null){const be=g.views;y!==null&&(e.setRenderTargetFramebuffer(U,y.framebuffer),e.setRenderTarget(U));let je=!1;be.length!==J.cameras.length&&(J.cameras.length=0,je=!0);for(let F=0;F<be.length;F++){const At=be[F];let st=null;if(y!==null)st=y.getViewport(At);else{const Pe=v.getViewSubImage(x,At);st=Pe.viewport,F===0&&(e.setRenderTargetTextures(U,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(U))}let $e=V[F];$e===void 0&&($e=new pi,$e.layers.enable(F),$e.viewport=new sn,V[F]=$e),$e.matrix.fromArray(At.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(At.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(st.x,st.y,st.width,st.height),F===0&&(J.matrix.copy($e.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),je===!0&&J.cameras.push($e)}const We=l.enabledFeatures;if(We&&We.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){v=s.getBinding();const F=v.getDepthInformation(be[0]);F&&F.isValid&&F.texture&&S.init(F,l.renderState)}if(We&&We.includes("camera-access")&&b){e.state.unbindTexture(),v=s.getBinding();for(let F=0;F<be.length;F++){const At=be[F].camera;if(At){let st=_[At];st||(st=new C0,_[At]=st);const $e=v.getCameraImage(At);st.sourceTexture=$e}}}}for(let be=0;be<B.length;be++){const je=G[be],We=B[be];je!==null&&We!==void 0&&We.update(je,pe,p||f)}ye&&ye(ee,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Ge=new D0;Ge.setAnimationLoop(we),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const yr=new ma,SR=new gn;function yR(a,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,A0(a)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,U)):_.isMeshMatcapMaterial?(u(S,_),M(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),b(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,L,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Tn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Tn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),N=L.envMap,U=L.envMapRotation;N&&(S.envMap.value=N,yr.copy(U),yr.x*=-1,yr.y*=-1,yr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),S.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(yr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ER(a,e,i,s){let l={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,N){const U=N.program;s.uniformBlockBinding(L,U)}function p(L,N){let U=l[L.id];U===void 0&&(M(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",S));const B=N.program;s.updateUBOMapping(L,B);const G=e.render.frame;u[L.id]!==G&&(x(L),u[L.id]=G)}function g(L){const N=v();L.__bindingPointIndex=N;const U=a.createBuffer(),B=L.__size,G=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,B,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,N,U),U}function v(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const N=l[L.id],U=L.uniforms,B=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,N);for(let G=0,H=U.length;G<H;G++){const j=Array.isArray(U[G])?U[G]:[U[G]];for(let D=0,C=j.length;D<C;D++){const V=j[D];if(y(V,G,D,B)===!0){const J=V.__offset,ue=Array.isArray(V.value)?V.value:[V.value];let me=0;for(let oe=0;oe<ue.length;oe++){const I=ue[oe],Y=b(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,J+me,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,me),me+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,J,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(L,N,U,B){const G=L.value,H=N+"_"+U;if(B[H]===void 0)return typeof G=="number"||typeof G=="boolean"?B[H]=G:B[H]=G.clone(),!0;{const j=B[H];if(typeof G=="number"||typeof G=="boolean"){if(j!==G)return B[H]=G,!0}else if(j.equals(G)===!1)return j.copy(G),!0}return!1}function M(L){const N=L.uniforms;let U=0;const B=16;for(let H=0,j=N.length;H<j;H++){const D=Array.isArray(N[H])?N[H]:[N[H]];for(let C=0,V=D.length;C<V;C++){const J=D[C],ue=Array.isArray(J.value)?J.value:[J.value];for(let me=0,oe=ue.length;me<oe;me++){const I=ue[me],Y=b(I),z=U%B,Se=z%Y.boundary,w=z+Se;U+=Se,w!==0&&B-w<Y.storage&&(U+=B-w),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=U,U+=Y.storage}}}const G=U%B;return G>0&&(U+=B-G),L.__size=U,L.__cache={},this}function b(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class MR{constructor(e={}){const{canvas:i=oM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),b=new Int32Array(4);let S=null,_=null;const L=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=rn;let G=0,H=0,j=null,D=-1,C=null;const V=new sn,J=new sn;let ue=null;const me=new Bt(0);let oe=0,I=i.width,Y=i.height,z=1,Se=null,w=null;const K=new sn(0,0,I,Y),_e=new sn(0,0,I,Y);let ye=!1;const we=new R0;let Ge=!1,ee=!1;const pe=new gn,be=new se,je=new sn,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function xt(){return j===null?z:1}let F=s;function At(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ju}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Me,!1),F===null){const W="webgl2";if(F=At(W,R),F===null)throw At(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let st,$e,Pe,Nt,ze,Be,lt,Rt,O,T,te,ce,ge,le,Ie,Re,qe,Ze,Ee,Le,Qe,Xe,De,ut;function X(){st=new Nb(F),st.init(),Xe=new mR(F,st),$e=new bb(F,st,e,Xe),Pe=new dR(F,st),$e.reversedDepthBuffer&&x&&Pe.buffers.depth.setReversed(!0),Nt=new Bb(F),ze=new eR,Be=new pR(F,st,Pe,ze,$e,Xe,Nt),lt=new Cb(U),Rt=new Lb(U),O=new VM(F),De=new Tb(F,O),T=new Ob(F,O,Nt,De),te=new Fb(F,T,O,Nt),Ee=new Ib(F,$e,Be),Re=new Rb(ze),ce=new $1(U,lt,Rt,st,$e,De,Re),ge=new yR(U,ze),le=new nR,Ie=new lR(st),Ze=new Mb(U,lt,Rt,Pe,te,y,m),qe=new fR(U,te,$e),ut=new ER(F,Nt,$e,Pe),Le=new Ab(F,st,Nt),Qe=new Pb(F,st,Nt),Nt.programs=ce.programs,U.capabilities=$e,U.extensions=st,U.properties=ze,U.renderLists=le,U.shadowMap=qe,U.state=Pe,U.info=Nt}X();const Ae=new xR(U,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(I,Y,!1))},this.getSize=function(R){return R.set(I,Y)},this.setSize=function(R,W,ae=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Y=W,i.width=Math.floor(R*z),i.height=Math.floor(W*z),ae===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(I*z,Y*z).floor()},this.setDrawingBufferSize=function(R,W,ae){I=R,Y=W,z=ae,i.width=Math.floor(R*ae),i.height=Math.floor(W*ae),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,W,ae,re){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,W,ae,re),Pe.viewport(V.copy(K).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(_e)},this.setScissor=function(R,W,ae,re){R.isVector4?_e.set(R.x,R.y,R.z,R.w):_e.set(R,W,ae,re),Pe.scissor(J.copy(_e).multiplyScalar(z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Pe.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){w=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ae=!0){let re=0;if(R){let Z=!1;if(j!==null){const Te=j.texture.format;Z=Te===Zd||Te===Yd||Te===qd}if(Z){const Te=j.texture.type,Ue=Te===ri||Te===Za||Te===Xo||Te===Ls||Te===Xd||Te===Wd,He=Ze.getClearColor(),Ne=Ze.getClearAlpha(),et=He.r,it=He.g,Ye=He.b;Ue?(M[0]=et,M[1]=it,M[2]=Ye,M[3]=Ne,F.clearBufferuiv(F.COLOR,0,M)):(b[0]=et,b[1]=it,b[2]=Ye,b[3]=Ne,F.clearBufferiv(F.COLOR,0,b))}else re|=F.COLOR_BUFFER_BIT}W&&(re|=F.DEPTH_BUFFER_BIT),ae&&(re|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Me,!1),Ze.dispose(),le.dispose(),Ie.dispose(),ze.dispose(),lt.dispose(),Rt.dispose(),te.dispose(),De.dispose(),ut.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",fn),Ae.removeEventListener("sessionend",hn),Jt.stop()};function Ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=Nt.autoReset,W=qe.enabled,ae=qe.autoUpdate,re=qe.needsUpdate,Z=qe.type;X(),Nt.autoReset=R,qe.enabled=W,qe.autoUpdate=ae,qe.needsUpdate=re,qe.type=Z}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const W=R.target;W.removeEventListener("dispose",xe),ke(W)}function ke(R){ot(R),ze.remove(R)}function ot(R){const W=ze.get(R).programs;W!==void 0&&(W.forEach(function(ae){ce.releaseProgram(ae)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ae,re,Z,Te){W===null&&(W=We);const Ue=Z.isMesh&&Z.matrixWorld.determinant()<0,He=va(R,W,ae,re,Z);Pe.setMaterial(re,Ue);let Ne=ae.index,et=1;if(re.wireframe===!0){if(Ne=T.getWireframeAttribute(ae),Ne===void 0)return;et=2}const it=ae.drawRange,Ye=ae.attributes.position;let dt=it.start*et,wt=(it.start+it.count)*et;Te!==null&&(dt=Math.max(dt,Te.start*et),wt=Math.min(wt,(Te.start+Te.count)*et)),Ne!==null?(dt=Math.max(dt,0),wt=Math.min(wt,Ne.count)):Ye!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Ye.count));const Zt=wt-dt;if(Zt<0||Zt===1/0)return;De.setup(Z,re,He,ae,Ne);let zt,pt=Le;if(Ne!==null&&(zt=O.get(Ne),pt=Qe,pt.setIndex(zt)),Z.isMesh)re.wireframe===!0?(Pe.setLineWidth(re.wireframeLinewidth*xt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(Z.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*xt()),Z.isLineSegments?pt.setMode(F.LINES):Z.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else Z.isPoints?pt.setMode(F.POINTS):Z.isSprite&&pt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,Yt=Z._multiDrawCounts,St=Z._multiDrawCount,Dn=Ne?O.get(Ne).bytesPerElement:1,_i=ze.get(re).currentProgram.getUniforms();for(let In=0;In<St;In++)_i.setValue(F,"_gl_DrawID",In),pt.render(Je[In]/Dn,Yt[In])}else if(Z.isInstancedMesh)pt.renderInstances(dt,Zt,Z.count);else if(ae.isInstancedBufferGeometry){const Je=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Yt=Math.min(ae.instanceCount,Je);pt.renderInstances(dt,Zt,Yt)}else pt.render(dt,Zt)};function Pt(R,W,ae){R.transparent===!0&&R.side===ii&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Ui(R,W,ae),R.side=pa,R.needsUpdate=!0,Ui(R,W,ae),R.side=ii):Ui(R,W,ae)}this.compile=function(R,W,ae=null){ae===null&&(ae=R),_=Ie.get(ae),_.init(W),N.push(_),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const re=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const He=Te[Ue];Pt(He,ae,Z),re.add(He)}else Pt(Te,ae,Z),re.add(Te)}),_=N.pop(),re},this.compileAsync=function(R,W,ae=null){const re=this.compile(R,W,ae);return new Promise(Z=>{function Te(){if(re.forEach(function(Ue){ze.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){Z(R);return}setTimeout(Te,10)}st.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ct=null;function vi(R){Ct&&Ct(R)}function fn(){Jt.stop()}function hn(){Jt.start()}const Jt=new D0;Jt.setAnimationLoop(vi),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(R){Ct=R,Ae.setAnimationLoop(R),R===null?Jt.stop():Jt.start()},Ae.addEventListener("sessionstart",fn),Ae.addEventListener("sessionend",hn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,j),_=Ie.get(R,N.length),_.init(W),N.push(_),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),we.setFromProjectionMatrix(pe,zi,W.reversedDepth),ee=this.localClippingEnabled,Ge=Re.init(this.clippingPlanes,ee),S=le.get(R,L.length),S.init(),L.push(S),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&Di(Te,W,-1/0,U.sortObjects)}Di(R,W,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Se,w),ct=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ct&&Ze.addToRenderList(S,R),this.info.render.frame++,Ge===!0&&Re.beginShadows();const ae=_.state.shadowsArray;qe.render(ae,R,W),Ge===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=S.opaque,Z=S.transmissive;if(_.setupLights(),W.isArrayCamera){const Te=W.cameras;if(Z.length>0)for(let Ue=0,He=Te.length;Ue<He;Ue++){const Ne=Te[Ue];al(re,Z,R,Ne)}ct&&Ze.render(R);for(let Ue=0,He=Te.length;Ue<He;Ue++){const Ne=Te[Ue];Ur(S,R,Ne,Ne.viewport)}}else Z.length>0&&al(re,Z,R,W),ct&&Ze.render(R),Ur(S,R,W);j!==null&&H===0&&(Be.updateMultisampleRenderTarget(j),Be.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(U,R,W),De.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],Ge===!0&&Re.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Di(R,W,ae,re){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){re&&je.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pe);const Ue=te.update(R),He=R.material;He.visible&&S.push(R,Ue,He,ae,je.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const Ue=te.update(R),He=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),je.copy(R.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),je.copy(Ue.boundingSphere.center)),je.applyMatrix4(R.matrixWorld).applyMatrix4(pe)),Array.isArray(He)){const Ne=Ue.groups;for(let et=0,it=Ne.length;et<it;et++){const Ye=Ne[et],dt=He[Ye.materialIndex];dt&&dt.visible&&S.push(R,Ue,dt,ae,je.z,Ye)}}else He.visible&&S.push(R,Ue,He,ae,je.z,null)}}const Te=R.children;for(let Ue=0,He=Te.length;Ue<He;Ue++)Di(Te[Ue],W,ae,re)}function Ur(R,W,ae,re){const Z=R.opaque,Te=R.transmissive,Ue=R.transparent;_.setupLightsView(ae),Ge===!0&&Re.setGlobalState(U.clippingPlanes,ae),re&&Pe.viewport(V.copy(re)),Z.length>0&&Lr(Z,W,ae),Te.length>0&&Lr(Te,W,ae),Ue.length>0&&Lr(Ue,W,ae),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function al(R,W,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[re.id]===void 0&&(_.state.transmissionRenderTarget[re.id]=new wi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Qo:ri,minFilter:Rr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Te=_.state.transmissionRenderTarget[re.id],Ue=re.viewport||V;Te.setSize(Ue.z*U.transmissionResolutionScale,Ue.w*U.transmissionResolutionScale);const He=U.getRenderTarget(),Ne=U.getActiveCubeFace(),et=U.getActiveMipmapLevel();U.setRenderTarget(Te),U.getClearColor(me),oe=U.getClearAlpha(),oe<1&&U.setClearColor(16777215,.5),U.clear(),ct&&Ze.render(ae);const it=U.toneMapping;U.toneMapping=Ya;const Ye=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),_.setupLightsView(re),Ge===!0&&Re.setGlobalState(U.clippingPlanes,re),Lr(R,ae,re),Be.updateMultisampleRenderTarget(Te),Be.updateRenderTargetMipmap(Te),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,Zt=W.length;wt<Zt;wt++){const zt=W[wt],pt=zt.object,Je=zt.geometry,Yt=zt.material,St=zt.group;if(Yt.side===ii&&pt.layers.test(re.layers)){const Dn=Yt.side;Yt.side=Tn,Yt.needsUpdate=!0,zs(pt,ae,re,Je,Yt,St),Yt.side=Dn,Yt.needsUpdate=!0,dt=!0}}dt===!0&&(Be.updateMultisampleRenderTarget(Te),Be.updateRenderTargetMipmap(Te))}U.setRenderTarget(He,Ne,et),U.setClearColor(me,oe),Ye!==void 0&&(re.viewport=Ye),U.toneMapping=it}function Lr(R,W,ae){const re=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ue=R[Z],He=Ue.object,Ne=Ue.geometry,et=Ue.group;let it=Ue.material;it.allowOverride===!0&&re!==null&&(it=re),He.layers.test(ae.layers)&&zs(He,W,ae,Ne,it,et)}}function zs(R,W,ae,re,Z,Te){R.onBeforeRender(U,W,ae,re,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,W,ae,re,R,Te),Z.transparent===!0&&Z.side===ii&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,U.renderBufferDirect(ae,W,re,Z,R,Te),Z.side=pa,Z.needsUpdate=!0,U.renderBufferDirect(ae,W,re,Z,R,Te),Z.side=ii):U.renderBufferDirect(ae,W,re,Z,R,Te),R.onAfterRender(U,W,ae,re,Z,Te)}function Ui(R,W,ae){W.isScene!==!0&&(W=We);const re=ze.get(R),Z=_.state.lights,Te=_.state.shadowsArray,Ue=Z.state.version,He=ce.getParameters(R,Z.state,Te,W,ae),Ne=ce.getProgramCacheKey(He);let et=re.programs;re.environment=R.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(R.isMeshStandardMaterial?Rt:lt).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",xe),et=new Map,re.programs=et);let it=et.get(Ne);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Ue)return ki(R,He),it}else He.uniforms=ce.getUniforms(R),R.onBeforeCompile(He,U),it=ce.acquireProgram(He,Ne),et.set(Ne,it),re.uniforms=He.uniforms;const Ye=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Re.uniform),ki(R,He),re.needsLights=_a(R),re.lightsStateVersion=Ue,re.needsLights&&(Ye.ambientLightColor.value=Z.state.ambient,Ye.lightProbe.value=Z.state.probe,Ye.directionalLights.value=Z.state.directional,Ye.directionalLightShadows.value=Z.state.directionalShadow,Ye.spotLights.value=Z.state.spot,Ye.spotLightShadows.value=Z.state.spotShadow,Ye.rectAreaLights.value=Z.state.rectArea,Ye.ltc_1.value=Z.state.rectAreaLTC1,Ye.ltc_2.value=Z.state.rectAreaLTC2,Ye.pointLights.value=Z.state.point,Ye.pointLightShadows.value=Z.state.pointShadow,Ye.hemisphereLights.value=Z.state.hemi,Ye.directionalShadowMap.value=Z.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ye.spotShadowMap.value=Z.state.spotShadowMap,Ye.spotLightMatrix.value=Z.state.spotLightMatrix,Ye.spotLightMap.value=Z.state.spotLightMap,Ye.pointShadowMap.value=Z.state.pointShadowMap,Ye.pointShadowMatrix.value=Z.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function Nr(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ki(R,W){const ae=ze.get(R);ae.outputColorSpace=W.outputColorSpace,ae.batching=W.batching,ae.batchingColor=W.batchingColor,ae.instancing=W.instancing,ae.instancingColor=W.instancingColor,ae.instancingMorph=W.instancingMorph,ae.skinning=W.skinning,ae.morphTargets=W.morphTargets,ae.morphNormals=W.morphNormals,ae.morphColors=W.morphColors,ae.morphTargetsCount=W.morphTargetsCount,ae.numClippingPlanes=W.numClippingPlanes,ae.numIntersection=W.numClipIntersection,ae.vertexAlphas=W.vertexAlphas,ae.vertexTangents=W.vertexTangents,ae.toneMapping=W.toneMapping}function va(R,W,ae,re,Z){W.isScene!==!0&&(W=We),Be.resetTextureUnits();const Te=W.fog,Ue=re.isMeshStandardMaterial?W.environment:null,He=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ja,Ne=(re.isMeshStandardMaterial?Rt:lt).get(re.envMap||Ue),et=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!ae.morphAttributes.position,dt=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let Zt=Ya;re.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Zt=U.toneMapping);const zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,pt=zt!==void 0?zt.length:0,Je=ze.get(re),Yt=_.state.lights;if(Ge===!0&&(ee===!0||R!==C)){const $t=R===C&&re.id===D;Re.setState(re,R,$t)}let St=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Yt.state.version||Je.outputColorSpace!==He||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==Ne||re.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Re.numPlanes||Je.numIntersection!==Re.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==it||Je.morphTargets!==Ye||Je.morphNormals!==dt||Je.morphColors!==wt||Je.toneMapping!==Zt||Je.morphTargetsCount!==pt)&&(St=!0):(St=!0,Je.__version=re.version);let Dn=Je.currentProgram;St===!0&&(Dn=Ui(re,W,Z));let _i=!1,In=!1,xn=!1;const Xt=Dn.getUniforms(),Fn=Je.uniforms;if(Pe.useProgram(Dn.program)&&(_i=!0,In=!0,xn=!0),re.id!==D&&(D=re.id,In=!0),_i||C!==R){Pe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Xt.setValue(F,"projectionMatrix",R.projectionMatrix),Xt.setValue(F,"viewMatrix",R.matrixWorldInverse);const An=Xt.map.cameraPosition;An!==void 0&&An.setValue(F,be.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Xt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Xt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,In=!0,xn=!0)}if(Z.isSkinnedMesh){Xt.setOptional(F,Z,"bindMatrix"),Xt.setOptional(F,Z,"bindMatrixInverse");const $t=Z.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Xt.setValue(F,"boneTexture",$t.boneTexture,Be))}Z.isBatchedMesh&&(Xt.setOptional(F,Z,"batchingTexture"),Xt.setValue(F,"batchingTexture",Z._matricesTexture,Be),Xt.setOptional(F,Z,"batchingIdTexture"),Xt.setValue(F,"batchingIdTexture",Z._indirectTexture,Be),Xt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Xt.setValue(F,"batchingColorTexture",Z._colorsTexture,Be));const Un=ae.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ee.update(Z,ae,Dn),(In||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,Xt.setValue(F,"receiveShadow",Z.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Fn.envMap.value=Ne,Fn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Fn.envMapIntensity.value=W.environmentIntensity),In&&(Xt.setValue(F,"toneMappingExposure",U.toneMappingExposure),Je.needsLights&&$a(Fn,xn),Te&&re.fog===!0&&ge.refreshFogUniforms(Fn,Te),ge.refreshMaterialUniforms(Fn,re,z,Y,_.state.transmissionRenderTarget[R.id]),Vu.upload(F,Nr(Je),Fn,Be)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Vu.upload(F,Nr(Je),Fn,Be),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Xt.setValue(F,"center",Z.center),Xt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Xt.setValue(F,"normalMatrix",Z.normalMatrix),Xt.setValue(F,"modelMatrix",Z.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const $t=re.uniformsGroups;for(let An=0,Or=$t.length;An<Or;An++){const Vn=$t[An];ut.update(Vn,Dn),ut.bind(Vn,Dn)}}return Dn}function $a(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function _a(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,W,ae){const re=ze.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ze.get(R.texture).__webglTexture=W,ze.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ae=ze.get(R);ae.__webglFramebuffer=W,ae.__useDefaultFramebuffer=W===void 0};const on=F.createFramebuffer();this.setRenderTarget=function(R,W=0,ae=0){j=R,G=W,H=ae;let re=!0,Z=null,Te=!1,Ue=!1;if(R){const Ne=ze.get(R);if(Ne.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(F.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)Be.setupRenderTarget(R);else if(Ne.__hasExternalTextures)Be.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Ne.__boundDepthTexture!==Ye){if(Ye!==null&&ze.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const it=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[W])?Z=it[W][ae]:Z=it[W],Te=!0):R.samples>0&&Be.useMultisampledRTT(R)===!1?Z=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[ae]:Z=it,V.copy(R.viewport),J.copy(R.scissor),ue=R.scissorTest}else V.copy(K).multiplyScalar(z).floor(),J.copy(_e).multiplyScalar(z).floor(),ue=ye;if(ae!==0&&(Z=on),Pe.bindFramebuffer(F.FRAMEBUFFER,Z)&&re&&Pe.drawBuffers(R,Z),Pe.viewport(V),Pe.scissor(J),Pe.setScissorTest(ue),Te){const Ne=ze.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,ae)}else if(Ue){const Ne=W;for(let et=0;et<R.textures.length;et++){const it=ze.get(R.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,it.__webglTexture,ae,Ne)}}else if(R!==null&&ae!==0){const Ne=ze.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,W,ae,re,Z,Te,Ue,He=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){Pe.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const et=R.textures[He],it=et.format,Ye=et.type;if(!$e.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-re&&ae>=0&&ae<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ae,re,Z,Xe.convert(it),Xe.convert(Ye),Te))}finally{const et=j!==null?ze.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,W,ae,re,Z,Te,Ue,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(W>=0&&W<=R.width-re&&ae>=0&&ae<=R.height-Z){Pe.bindFramebuffer(F.FRAMEBUFFER,Ne);const et=R.textures[He],it=et.format,Ye=et.type;if(!$e.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+He),F.readPixels(W,ae,re,Z,Xe.convert(it),Xe.convert(Ye),0);const wt=j!==null?ze.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,wt);const Zt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lM(F,Zt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(dt),F.deleteSync(Zt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ae=0){const re=Math.pow(2,-ae),Z=Math.floor(R.image.width*re),Te=Math.floor(R.image.height*re),Ue=W!==null?W.x:0,He=W!==null?W.y:0;Be.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,Ue,He,Z,Te),Pe.unbindTexture()};const rl=F.createFramebuffer(),sl=F.createFramebuffer();this.copyTextureToTexture=function(R,W,ae=null,re=null,Z=0,Te=null){Te===null&&(Z!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ue,He,Ne,et,it,Ye,dt,wt,Zt;const zt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)Ue=ae.max.x-ae.min.x,He=ae.max.y-ae.min.y,Ne=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,it=ae.min.y,Ye=ae.isBox3?ae.min.z:0;else{const Un=Math.pow(2,-Z);Ue=Math.floor(zt.width*Un),He=Math.floor(zt.height*Un),R.isDataArrayTexture?Ne=zt.depth:R.isData3DTexture?Ne=Math.floor(zt.depth*Un):Ne=1,et=0,it=0,Ye=0}re!==null?(dt=re.x,wt=re.y,Zt=re.z):(dt=0,wt=0,Zt=0);const pt=Xe.convert(W.format),Je=Xe.convert(W.type);let Yt;W.isData3DTexture?(Be.setTexture3D(W,0),Yt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Be.setTexture2DArray(W,0),Yt=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(W,0),Yt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),Dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_i=F.getParameter(F.UNPACK_SKIP_PIXELS),In=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const Xt=R.isDataArrayTexture||R.isData3DTexture,Fn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Un=ze.get(R),$t=ze.get(W),An=ze.get(Un.__renderTarget),Or=ze.get($t.__renderTarget);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Vn=0;Vn<Ne;Vn++)Xt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,Z,Ye+Vn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,Te,Zt+Vn)),F.blitFramebuffer(et,it,Ue,He,dt,wt,Ue,He,F.DEPTH_BUFFER_BIT,F.NEAREST);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||ze.has(R)){const Un=ze.get(R),$t=ze.get(W);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,rl),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,sl);for(let An=0;An<Ne;An++)Xt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,Z,Ye+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,Z),Fn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,Te,Zt+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,Te),Z!==0?F.blitFramebuffer(et,it,Ue,He,dt,wt,Ue,He,F.COLOR_BUFFER_BIT,F.NEAREST):Fn?F.copyTexSubImage3D(Yt,Te,dt,wt,Zt+An,et,it,Ue,He):F.copyTexSubImage2D(Yt,Te,dt,wt,et,it,Ue,He);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Yt,Te,dt,wt,Zt,Ue,He,Ne,pt,Je,zt.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,Te,dt,wt,Zt,Ue,He,Ne,pt,zt.data):F.texSubImage3D(Yt,Te,dt,wt,Zt,Ue,He,Ne,pt,Je,zt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,dt,wt,Ue,He,pt,Je,zt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,dt,wt,zt.width,zt.height,pt,zt.data):F.texSubImage2D(F.TEXTURE_2D,Te,dt,wt,Ue,He,pt,Je,zt);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_i),F.pixelStorei(F.UNPACK_SKIP_ROWS,In),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),Te===0&&W.generateMipmaps&&F.generateMipmap(Yt),Pe.unbindTexture()},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&Be.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Be.setTextureCube(R,0):R.isData3DTexture?Be.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Be.setTexture2DArray(R,0):Be.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){G=0,H=0,j=null,Pe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var zh=1/1e3,TR=1e3,AR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*zh}get fixedDelta(){return this._fixedDelta*zh}set fixedDelta(a){this._fixedDelta=a*TR}get elapsed(){return this._elapsed*zh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},bR=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new Qa;return i.setAttribute("position",new mi(a,3)),i.setAttribute("uv",new mi(e,2)),i})(),Ja=class Bd{static get fullscreenGeometry(){return bR}constructor(e="Pass",i=new Od,s=new Qd){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Ri(Bd.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Od),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=Jo){}render(e,i,s,l,u){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof wi||i instanceof Is||i instanceof wn||i instanceof Bd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},RR=class extends Ja{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const u=a.state.buffers.stencil;u.setLocked(!1),u.setTest(!1)}},CR=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,wR="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",DR=class extends gi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new mn(null),opacity:new mn(1)},blending:Hi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:CR,vertexShader:wR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},UR=class extends Ja{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new DR,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new wi(1,1,{minFilter:Bn,magFilter:Bn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==ri?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===rn&&(this.renderTarget.texture.colorSpace=rn))}},P_=new Bt,P0=class extends Ja{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const u=this.overrideClearColor,f=this.overrideClearAlpha,d=a.getClearAlpha(),m=u!==null,p=f>=0;m?(a.getClearColor(P_),a.setClearColor(u,p?f:d)):p&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),m?a.setClearColor(P_,d):p&&a.setClearAlpha(d)}},LR=class extends Ja{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new P0(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const u=a.getContext(),f=a.state.buffers,d=this.scene,m=this.camera,p=this.clearPass,g=this.inverted?0:1,v=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),f.stencil.setFunc(u.ALWAYS,g,4294967295),f.stencil.setClear(v),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(a,null):(p.render(a,e),p.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,m)):(a.setRenderTarget(e),a.render(d,m),a.setRenderTarget(i),a.render(d,m)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(u.EQUAL,1,4294967295),f.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),f.stencil.setLocked(!0)}},B_=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new UR,this.depthTexture=null,this.passes=[],this.timer=new AR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new _t),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===ri&&a.outputColorSpace===rn&&(this.inputBuffer.texture.colorSpace=rn,this.outputBuffer.texture.colorSpace=rn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.depthTexture=new Jd;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Ns,a.type=Ls):a.type=Za,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,u=l===null?new _t:l.getDrawingBufferSize(new _t),f={minFilter:Bn,magFilter:Bn,stencilBuffer:e,depthBuffer:a,type:i},d=new wi(u.width,u.height,f);return s>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=s),i===ri&&l!==null&&l.outputColorSpace===rn&&(d.texture.colorSpace=rn),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new _t),u=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,u,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of i)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const u=(d,m)=>d||m.needsDepthTexture;e.reduce(u,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,u=!1,f,d,m;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,s,l,a,u),p.needsSwap&&(u&&(i.renderToScreen=p.renderToScreen,f=e.getContext(),d=e.state.buffers.stencil,d.setFunc(f.NOTEQUAL,1,4294967295),i.render(e,s,l,a,u),d.setFunc(f.EQUAL,1,4294967295)),m=s,s=l,l=m),p instanceof LR?u=!0:p instanceof RR&&(u=!1))}setSize(a,e,i){const s=this.renderer,l=s.getSize(new _t);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const u=s.getDrawingBufferSize(new _t);this.inputBuffer.setSize(u.width,u.height),this.outputBuffer.setSize(u.width,u.height);for(const f of this.passes)f.setSize(u.width,u.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Ja.fullscreenGeometry.dispose()}},wr={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},NR=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=wr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ja}},Hh=!1,I_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case ii:i=this.materialsFlatShadedDoubleSide;break;case Tn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case ii:i=this.materialsDoubleSide;break;case Tn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof gi))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const u=e[l].value;u.isRenderTargetTexture&&(e[l].value=null,i.set(l,u))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=pa;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=Tn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=ii,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Tn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=ii,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Hh){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const u of l)u[0].material=u[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Hh}static set workaroundEnabled(a){Hh=a}},Mt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},OR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",PR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",BR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",IR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",FR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",zR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",HR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",GR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",VR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",kR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",XR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",WR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",qR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",YR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",ZR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",jR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",KR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",QR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",JR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",$R="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",eC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",tC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",nC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",iC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",aC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",rC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",sC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",oC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",lC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",uC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",cC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",fC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",hC=new Map([[Mt.ADD,OR],[Mt.ALPHA,PR],[Mt.AVERAGE,BR],[Mt.COLOR,IR],[Mt.COLOR_BURN,FR],[Mt.COLOR_DODGE,zR],[Mt.DARKEN,HR],[Mt.DIFFERENCE,GR],[Mt.DIVIDE,VR],[Mt.DST,null],[Mt.EXCLUSION,kR],[Mt.HARD_LIGHT,XR],[Mt.HARD_MIX,WR],[Mt.HUE,qR],[Mt.INVERT,YR],[Mt.INVERT_RGB,ZR],[Mt.LIGHTEN,jR],[Mt.LINEAR_BURN,KR],[Mt.LINEAR_DODGE,QR],[Mt.LINEAR_LIGHT,JR],[Mt.LUMINOSITY,$R],[Mt.MULTIPLY,eC],[Mt.NEGATION,tC],[Mt.NORMAL,nC],[Mt.OVERLAY,iC],[Mt.PIN_LIGHT,aC],[Mt.REFLECT,rC],[Mt.SATURATION,sC],[Mt.SCREEN,oC],[Mt.SOFT_LIGHT,lC],[Mt.SRC,uC],[Mt.SUBTRACT,cC],[Mt.VIVID_LIGHT,fC]]),dC=class extends Ka{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new mn(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return hC.get(this.blendFunction)}},B0=class extends Ka{constructor(a,e,{attributes:i=wr.NONE,blendFunction:s=Mt.NORMAL,defines:l=new Map,uniforms:u=new Map,extensions:f=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=u,this.extensions=f,this.blendMode=new dC(s),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=ja,this._outputColorSpace=Fi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Jo){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof wi||e instanceof Is||e instanceof wn||e instanceof Ja)&&this[a].dispose()}}},F_=class extends Ja{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new P0,this.overrideMaterialManager=i===null?null:new I_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new I_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const u=this.scene,f=this.camera,d=this.selection,m=f.layers.mask,p=u.background,g=a.shadowMap.autoUpdate,v=this.renderToScreen?null:e;d!==null&&f.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(u.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,u,f):a.render(u,f),f.layers.mask=m,u.background=p,a.shadowMap.autoUpdate=g}},pC=`#include <common>
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
}`,mC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",gC=class extends gi{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ju.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new mn(null),depthBuffer:new mn(null),resolution:new mn(new _t),texelSize:new mn(new _t),cameraNear:new mn(.3),cameraFar:new mn(1e3),aspect:new mn(1),time:new mn(0)},blending:Hi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Jo){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=pC.replace(Lt.FRAGMENT_HEAD,a.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,a.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,a.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=mC.replace(Lt.VERTEX_HEAD,a.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,a.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof pi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Lt}};function z_(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),u=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(u,l))}}function vC(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const u=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&wr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!u&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Lt.FRAGMENT_HEAD)||"",g=m.get(Lt.FRAGMENT_MAIN_UV)||"",v=m.get(Lt.FRAGMENT_MAIN_IMAGE)||"",x=m.get(Lt.VERTEX_HEAD)||"",y=m.get(Lt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,b=new Set;if(f&&(g+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${a}MainSupport(`,y+=L?`vUv);
`:`);
`;for(const N of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const U of N[1].split(/\s*,\s*/))i.varyings.add(U),M.add(U),b.add(U);for(const N of l.matchAll(d))b.add(N[1])}for(const L of s.matchAll(d))b.add(L[1]);for(const L of e.defines.keys())b.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())b.add(L);b.delete("while"),b.delete("for"),b.delete("if"),e.uniforms.forEach((L,N)=>i.uniforms.set(a+N.charAt(0).toUpperCase()+N.slice(1),L)),e.defines.forEach((L,N)=>i.defines.set(a+N.charAt(0).toUpperCase()+N.slice(1),L));const S=new Map([["fragment",s],["vertex",l]]);z_(a,b,i.defines),z_(a,b,S),s=S.get("fragment"),l=S.get("vertex");const _=e.blendMode;if(i.blendModes.set(_.blendFunction,_),u){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(v+=e.inputColorSpace===rn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Fi?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${a}MainImage(color0, UV, `,(i.attributes&wr.DEPTH)!==0&&L.test(s)&&(v+="depth, ",i.readDepth=!0),v+=`color1);
	`;const N=a+"BlendOpacity";i.uniforms.set(N,_.opacity),v+=`color0 = blend${_.blendFunction}(color0, color1, ${N});

	`,p+=`uniform float ${N};

`}if(p+=s+`
`,l!==null&&(x+=l+`
`),m.set(Lt.FRAGMENT_HEAD,p),m.set(Lt.FRAGMENT_MAIN_UV,g),m.set(Lt.FRAGMENT_MAIN_IMAGE,v),m.set(Lt.VERTEX_HEAD,x),m.set(Lt.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const L of e.extensions)i.extensions.add(L)}}var H_=class extends Ja{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new gC(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new NR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===Mt.DST)a.attributes|=f.getAttributes()&wr.DEPTH;else{if((a.attributes&f.getAttributes()&wr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);vC("e"+e++,f,a)}let i=a.shaderParts.get(Lt.FRAGMENT_HEAD),s=a.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const u=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(u,`blend${f.blendFunction}`)+`
`;(a.attributes&wr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===rn&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Lt.FRAGMENT_HEAD,i),a.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[f,d]of a.shaderParts)d!==null&&a.shaderParts.set(f,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Jo){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const u of this.effects)u.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const u=this.fullscreenMaterial;u.inputBuffer=e.texture,u.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==ri&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const _C=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,e.width,e.height);const s=new wn(e);s.minFilter=Bn,s.magFilter=Bn,s.generateMipmaps=!1;const l=[];let u=null;const f=64;let d=.1*64;const m=1/f,p=()=>{i.fillStyle="black",i.fillRect(0,0,e.width,e.height)},g=y=>{const M={x:y.x*64,y:(1-y.y)*64};let b=1;const S=U=>Math.sin(U*Math.PI/2),_=U=>-U*(U-2);y.age<f*.3?b=S(y.age/(f*.3)):b=_(1-(y.age-f*.3)/(f*.7))||0,b*=y.force;const L=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${b*255}`,N=320;i.shadowOffsetX=N,i.shadowOffsetY=N,i.shadowBlur=d,i.shadowColor=`rgba(${L},${.22*b})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(M.x-N,M.y-N,d,0,Math.PI*2),i.fill()};return{canvas:e,texture:s,addTouch:y=>{let M=0,b=0,S=0;if(u){const _=y.x-u.x,L=y.y-u.y;if(_===0&&L===0)return;const N=_*_+L*L,U=Math.sqrt(N);b=_/(U||1),S=L/(U||1),M=Math.min(N*1e4,1)}u={x:y.x,y:y.y},l.push({x:y.x,y:y.y,age:0,force:M,vx:b,vy:S})},update:()=>{p();for(let y=l.length-1;y>=0;y--){const M=l[y],b=M.force*m*(1-M.age/f);M.x+=M.vx*b,M.y+=M.vy*b,M.age++,M.age>f&&l.splice(y,1)}for(let y=0;y<l.length;y++)g(l[y]);s.needsUpdate=!0},set radiusScale(y){d=.1*64*y},get radiusScale(){return d/(.1*64)},size:64}},xC=(a,e)=>{const i=`
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
    `;return new B0("LiquidEffect",i,{uniforms:new Map([["uTexture",new mn(a)],["uStrength",new mn(e?.strength??.025)],["uTime",new mn(0)],["uFreq",new mn(e?.freq??4.5)]])})},G_={square:0,circle:1,triangle:2,diamond:3},SC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,yC=`
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
`,Gh=10,EC=({variant:a="square",pixelSize:e=3,color:i="#201533",className:s,style:l,antialias:u=!0,patternScale:f=2,patternDensity:d=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:g=1,pixelSizeJitter:v=0,enableRipples:x=!0,rippleIntensityScale:y=1,rippleThickness:M=.1,rippleSpeed:b=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:_=!0,speed:L=.5,transparent:N=!0,edgeFade:U=.5,noiseAmount:B=0,interactive:G=!1})=>{const H=fe.useRef(null),j=fe.useRef({visible:!0}),D=fe.useRef(L),C=fe.useRef(null),V=fe.useRef(null);return fe.useEffect(()=>{const J=H.current;if(!J)return;D.current=L;const ue=["antialias","liquid","noiseAmount","interactive"],me={antialias:u,liquid:m,noiseAmount:B,interactive:G};let oe=!1,I=null,Y=null;if(!C.current)oe=!0;else if(V.current){for(const z of ue)if(V.current[z]!==me[z]){oe=!0;break}}if(oe){if(C.current){const Be=C.current;Be.resizeObserver?.disconnect(),cancelAnimationFrame(Be.raf),Be.quad?.geometry.dispose(),Be.material.dispose(),Be.composer?.dispose(),Be.renderer.dispose(),Be.renderer.domElement.parentElement===J&&J.removeChild(Be.renderer.domElement),C.current=null}const z=document.createElement("canvas"),Se=z.getContext("webgl2",{antialias:u,alpha:!0});if(!Se)return;const w=new MR({canvas:z,context:Se,antialias:u,alpha:!0});w.domElement.style.width="100%",w.domElement.style.height="100%",w.domElement.style.pointerEvents=G?"auto":"none",w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),J.appendChild(w.domElement);const K={uResolution:{value:new _t(0,0)},uTime:{value:0},uColor:{value:new Bt(i)},uClickPos:{value:Array.from({length:Gh},()=>new _t(-1,-1))},uClickTimes:{value:new Float32Array(Gh)},uShapeType:{value:G_[a]??0},uPixelSize:{value:e*w.getPixelRatio()},uScale:{value:f},uDensity:{value:d},uPixelJitter:{value:v},uEnableRipples:{value:x?1:0},uRippleSpeed:{value:b},uRippleThickness:{value:M},uRippleIntensity:{value:y},uEdgeFade:{value:U}},_e=new Od,ye=new w0(-1,1,1,-1,0,1),we=new gi({vertexShader:SC,fragmentShader:yC,uniforms:K,transparent:!0,glslVersion:Ld,depthTest:!1,depthWrite:!1}),Ge=new il(2,2),ee=new Ri(Ge,we);_e.add(ee);const pe=new HM,be=()=>{const Be=J.clientWidth||1,lt=J.clientHeight||1;w.setSize(Be,lt,!1),K.uResolution.value.set(w.domElement.width,w.domElement.height),C.current?.composer&&C.current.composer.setSize(w.domElement.width,w.domElement.height),K.uPixelSize.value=e*w.getPixelRatio()};be();const je=new ResizeObserver(be);je.observe(J);const ct=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Be=new Uint32Array(1);return window.crypto.getRandomValues(Be),Be[0]/4294967295}return Math.random()})()*1e3;let xt,F,At;if(m){F=_C(),F.radiusScale=g,xt=new B_(w);const Be=new F_(_e,ye);At=xC(F.texture,{strength:p,freq:S});const lt=new H_(ye,At);lt.renderToScreen=!0,xt.addPass(Be),xt.addPass(lt)}if(B>0){xt||(xt=new B_(w),xt.addPass(new F_(_e,ye)));const Be=new B0("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new mn(0)],["uAmount",new mn(B)]])}),lt=new H_(ye,Be);lt.renderToScreen=!0,xt&&xt.passes.length>0&&xt.passes.forEach(Rt=>Rt.renderToScreen=!1),xt.addPass(lt)}xt&&xt.setSize(w.domElement.width,w.domElement.height);const st=Be=>{const lt=w.domElement.getBoundingClientRect(),Rt=w.domElement.width/lt.width,O=w.domElement.height/lt.height,T=(Be.clientX-lt.left)*Rt,te=(lt.height-(Be.clientY-lt.top))*O;return{fx:T,fy:te,w:w.domElement.width,h:w.domElement.height}};let $e=null,Pe=null;$e=Be=>{const{fx:lt,fy:Rt}=st(Be),O=C.current?.clickIx??0;K.uClickPos.value[O].set(lt,Rt),K.uClickTimes.value[O]=K.uTime.value,C.current&&(C.current.clickIx=(O+1)%Gh)},Pe=Be=>{if(!F)return;const{fx:lt,fy:Rt,w:O,h:T}=st(Be);F.addTouch({x:lt/O,y:Rt/T})},G&&(w.domElement.addEventListener("pointerdown",$e,{passive:!0}),w.domElement.addEventListener("pointermove",Pe,{passive:!0}),I=$e,Y=Pe);let Nt=0;const ze=()=>{if(_&&!j.current.visible){Nt=requestAnimationFrame(ze);return}K.uTime.value=ct+pe.getElapsedTime()*D.current,At&&(At.uniforms.get("uTime").value=K.uTime.value),xt?(F&&F.update(),xt.passes.forEach(Be=>{const lt=Be.effects;lt&&lt.forEach(Rt=>{const O=Rt.uniforms?.get("uTime");O&&(O.value=K.uTime.value)})}),xt.render()):w.render(_e,ye),Nt=requestAnimationFrame(ze)};Nt=requestAnimationFrame(ze),C.current={renderer:w,scene:_e,camera:ye,material:we,clock:pe,clickIx:0,uniforms:K,resizeObserver:je,raf:Nt,quad:ee,timeOffset:ct,composer:xt,touch:F,liquidEffect:At}}else{const z=C.current;if(z.uniforms.uShapeType.value=G_[a]??0,z.uniforms.uPixelSize.value=e*z.renderer.getPixelRatio(),z.uniforms.uColor.value.set(i),z.uniforms.uScale.value=f,z.uniforms.uDensity.value=d,z.uniforms.uPixelJitter.value=v,z.uniforms.uEnableRipples.value=x?1:0,z.uniforms.uRippleIntensity.value=y,z.uniforms.uRippleThickness.value=M,z.uniforms.uRippleSpeed.value=b,z.uniforms.uEdgeFade.value=U,N?z.renderer.setClearAlpha(0):z.renderer.setClearColor(0,1),z.liquidEffect){const Se=z.liquidEffect;Se&&(Se.value=p);const w=z.liquidEffect.uniforms.get("uFreq");w&&(w.value=S)}z.touch&&(z.touch.radiusScale=g)}return V.current=me,()=>{if(C.current&&oe||!C.current)return;const z=C.current;z.resizeObserver?.disconnect(),cancelAnimationFrame(z.raf),z.quad?.geometry.dispose(),z.material.dispose(),z.composer?.dispose();try{G&&z.renderer&&z.renderer.domElement&&(I&&z.renderer.domElement.removeEventListener("pointerdown",I),Y&&z.renderer.domElement.removeEventListener("pointermove",Y))}catch{}z.renderer.dispose(),z.renderer.domElement.parentElement===J&&J.removeChild(z.renderer.domElement),C.current=null}},[u,m,B,e,f,d,x,y,M,b,v,U,N,p,g,S,_,a,i,L,G]),nt.jsx("div",{ref:H,className:`pixel-blast-container ${s??""}`,style:l,"aria-label":"PixelBlast interactive background"})};function MC(a){const e=a.replace("#",""),i=parseInt(e.length===3?e.split("").map(f=>f+f).join(""):e,16),s=i>>16&255,l=i>>8&255,u=i&255;return[s,l,u]}function TC({color:a="#000000",strength:e=.6,style:i={}}){const s=Math.max(0,Math.min(1,e)),[l,u,f]=MC(a||"#000000"),d=Math.round(5+s*45),m=`linear-gradient(to bottom, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,p=`linear-gradient(to top, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,g=`linear-gradient(to right, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,v=`linear-gradient(to left, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,x={position:"fixed",inset:0,zIndex:1,pointerEvents:"none",backgroundImage:`${m}, ${p}, ${g}, ${v}`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",mixBlendMode:"normal",...i};return nt.jsx("div",{"aria-hidden":!0,style:x})}function AC({interactive:a=!1}){return nt.jsxs("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:0,overflow:"hidden",pointerEvents:a?"auto":"none"},children:[nt.jsx(EC,{variant:"square",pixelSize:4,color:"#203562",patternScale:3,patternDensity:1.5,pixelSizeJitter:1.5,enableRipples:!0,rippleSpeed:.5,rippleThickness:.08,rippleIntensityScale:1.5,liquid:!0,liquidStrength:0,liquidRadius:0,liquidWobbleSpeed:.5,speed:.5,edgeFade:0,transparent:!0,interactive:a}),nt.jsx(TC,{color:"#201533",strength:.05})]})}const bC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAAXNSR0IArs4c6QAAAT5JREFUaIHt2jGKwkAYxfH3iReQLYXVwiNsrmC1/XoDj+IZAsZTWKVZttkmHiEEm5SaI4yFDBg1OHEJzyzvDylmmOLH8CVVLC2ODj1tCADz9MB2tG6arM54AHDLGVfToskiAfzN+6KyYnmeahhwppOy8ai2jsoqeM836NgY3G57fu8szmFxfrN3fQ5svMX53VH9+Hyrrd1ydvccbWzQ8JFo+nBcjw+Y+KisaiPQZs9Xw2fjkZlZF9agdoF7+Fo7sGf+rwnPSnhWwrMSnpXwrIRnJTwr4VkJz0p4VsKzEp6V8KyEZyU8K+FZCc9KeFbCsxKelfCshGclPCvhWQnPSnhWL4t3zjU+vpfFh/R/8MwfQp+pdzc/WSRuUPwCfcNfwvfZxiwtjm6eHvD+/cO2PewSDv8j9DRZkVnheTgAnABQUGtysVsplgAAAABJRU5ErkJggg==",Go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAICAYAAACRbl3VAAAAAXNSR0IArs4c6QAAAGBJREFUOI1jYKAx2HXv3X9S1LNg0+imJMSITQybGmR12MSwOQ7ZfGxsFM0wNi4xdHlS9BIjBg8hSgCx0YIv1GCAhQFLdOASwwaQ1cGCnJB56OqQo5ooXwwIQE4fowAJAAD3cIZxtTODeAAAAABJRU5ErkJggg==",Hn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAICAYAAACRbl3VAAAAAXNSR0IArs4c6QAAAGBJREFUOI1jYKAxuBme/J8U9SzYNKqvnMuITQybGmR12MSwOQ7ZfGxsFM0wNi4xdHlS9BIjBg8hSgCx0YIv1GCAhQFLdOASwwaQ1cGCnJB56OqQo5ooXwwIQE4fowAJAAC+mHN1F45KcQAAAABJRU5ErkJggg==",Yo=({src:a,className:e="",containerStyle:i={},imageStyle:s={}})=>{const l=fe.useRef(null),[u,f]=fe.useState(1),[d,m]=fe.useState({width:0,height:0});fe.useEffect(()=>{const v=new Image;v.onload=()=>{m({width:v.width,height:v.height});const x=()=>{if(l.current){const{width:M}=l.current.getBoundingClientRect(),b=Math.floor(M/v.width);f(Math.max(1,b))}};x();const y=new ResizeObserver(x);return l.current&&y.observe(l.current),()=>y.disconnect()},v.src=a},[a]);const p={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",pointerEvents:"none",...i},g={width:`${d.width*u}px`,height:`${d.height*u}px`,imageRendering:"pixelated",pointerEvents:"none",...s};return nt.jsx("div",{ref:l,className:`pixel-art-container ${e}`,style:p,children:nt.jsx("img",{src:a,alt:"pixel art",style:g,draggable:!1})})},RC=({id:a,activeImage:e,normalImage:i,hoverImage:s,clickImage:l,onClick:u,className:f="",isActive:d=!1,hoverScale:m=1.05,clickScale:p=.95,activeScale:g=1.02})=>{const[v,x]=fe.useState("normal"),y=fe.useRef(null),M=()=>d&&e?e:v==="click"?l||s||i:v==="hover"&&s||i,b=()=>d?v==="click"?{transform:`scale(${p})`}:v==="hover"?{transform:`scale(${m})`}:{transform:`scale(${g})`}:v==="click"?{transform:`scale(${p})`}:v==="hover"?{transform:`scale(${m})`}:{transform:"scale(1)"},S=B=>{u&&u(a,B)},_=()=>{x("hover")},L=()=>{x("normal")},N=()=>{x("click")},U=()=>{x("hover")};return nt.jsx("button",{ref:y,className:`image-button ${f}`,style:{width:"100%",height:"100%",background:"none",border:"none",cursor:"pointer",padding:0,transformOrigin:"center",...b()},onMouseEnter:_,onMouseLeave:L,onMouseDown:N,onMouseUp:U,onClick:S,"data-button-id":a,children:nt.jsx(Yo,{src:M()})})};function CC({setActiveScreen:a,activeScreen:e}){const i=[{id:"chat",label:"chat",image:Go,hover:Hn,click:Hn,activeImage:Hn},{id:"profile",label:"profile",image:Go,hover:Hn,click:Hn,activeImage:Hn},{id:"gamedev",label:"gamedev",image:Go,hover:Hn,click:Hn,activeImage:Hn},{id:"paint",label:"paint",image:Go,hover:Hn,click:Hn,activeImage:Hn},{id:"music",label:"music",image:Go,hover:Hn,click:Hn,activeImage:Hn}];return nt.jsxs("div",{className:"sidebar-container",children:[nt.jsx(Yo,{className:"sidebar-window",src:bC}),nt.jsx("div",{className:"sidebar-list",children:i.map(s=>nt.jsx(RC,{normalImage:s.image,hoverImage:s.hover,clickImage:s.click,activeImage:s.activeImage,onClick:()=>a(s.id),isActive:e===s.id,activeScale:1.05},s.id))})]})}const wC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAAAQtJREFUaIHt2r0NgkAYxvHnDAsQSwsoGEFWsHIAN2AUZqDAKaxojI0NjkCIDaUywlmQS/hMDg15JHn/HccVv5CXa0Bl5VtjpTkAcMhebMfs/DRu8ACgo4CrmZF3SgHz5E1hVbM8X+VY7FmkfOd2rsOqtl4zbRY2Wve4NO+dSgqopBis9feBjVdJMTqq++O2c62jYHQfbWwwcUhMHRz98QETH1Z1ZwTmrJk6+HznqiWgk0XDp2mz5l1vGuyZ/zXBsxI8K8GzEjwrwbMSPCvBsxI8K8GzEjwrwbMSPCvBsxI8K8GzEjyr1eG9U6o35R1YG74Nf+Zn5bRuAMBf/0TRhsN8UPPTmMyyz8AB4AO2SFHT+R9ZlwAAAABJRU5ErkJggg==",DC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAAXNSR0IArs4c6QAAAQZJREFUaIHtl8ENwyAQBEkK4Zc6olThBvJISXm4gVSBqMM/N+J8gkRkWeFuF4jEzdPywbIcaHHOMAzDMAzDMIbmVGNQP83bervuv4fo1tedNidV/JHo3X+kRfDEP5dNXPO4QPNzxGuEJ4AFnNWTfvDTrBcO1uPOI64nlO5DzqOuo+NgzjNcTyjch3u+Jya+F+OK9yFSRGjHGfeedwT3kfqxs41D3ANTJUV8SYbP8SHCwl3XA9tdPHrTdHuMsEJZ8wNLTJNIrBaLZ2X4hPSw58i3jJnhcxTtIyuoJTwhXEB529QWrmjJIvHsPj9C2v9l29TA9S8K2+en861c18z5ly8p5Po0WvAGfM9cCxDY9y4AAAAASUVORK5CYII=";function UC(){return nt.jsxs("div",{className:"avatar-container",children:[nt.jsx(Yo,{className:"avatar-base",src:DC}),nt.jsx(Yo,{className:"avatar-window",src:wC})]})}const LC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACBCAYAAABzRnCiAAAAAXNSR0IArs4c6QAAAnNJREFUeJzt3DFKHUEAgOFZ8QKSUogWHiFewSoH8AYexTNYmFOkshGbNOYIImks1SNsCnnBpwZMoj75832wxQ4LO8XPMLssO51c3swDotbHGGPv5HrV84AXt318eBf4GGPMBzurnQ28oK394zEWK/jC7tXtquYDr2L9GdfASpxvbiyd717dPntsYe2V5wgv5vvXu2fF6ehiTEcXj8YeXjcEzns3HV08uXX+9PnD0vl8sPPkdbYovGtPvfz43QuRh1uVIXDes92r26Xtxp+MLSwFfr65Mb3GRO+bple/BRHzPI9x8HhVfs7Y1unZPB4GLj5qPGSSJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBE6awEkTOGkCJ03gpAmcNIGTJnDSBM67NU3TXx8LAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0gROmsBJEzhpAidN4KQJnDSBkyZw0tbvn8zz/GY3nqbpze7F/8sKTprASRM4aQInTeCkCZw0gZMmcNIETprASRM4aQInTeCkCZw0gZMmcNIETprASRM4aQInTeCkCZw0gZO29F8U/yqhxgpOmsBJEzhpAidN4KQJnDSBkyZw0gROxjzPv44FgZOztX88r11+G0Pg1NyP+8f5l2k6ubyZ906ux8fTs1XPDf7Z/bjH4mOr7ePDFU8LXs4i7jHG+Ak2P2ahrAmNtQAAAABJRU5ErkJggg==";function V_(){return nt.jsx("div",{className:"chat-screen-container",children:nt.jsx("h2",{children:"Chat Screen"})})}function NC(){return nt.jsx("div",{className:"profile-screen-container",children:nt.jsx("h2",{children:"Profile Screen"})})}function OC(){return nt.jsx("div",{className:"gamedev-screen-container",children:nt.jsx("h2",{children:"GameDev Screen"})})}function PC(){return nt.jsx("div",{className:"paint-screen-container",children:nt.jsx("h2",{children:"Paint Screen"})})}function BC(){return nt.jsx("div",{className:"music-screen-container",children:nt.jsx("h2",{children:"Music Screen"})})}function IC({activeScreen:a}){const i={chat:V_,profile:NC,gamedev:OC,paint:PC,music:BC}[a]||V_;return nt.jsxs("div",{className:"screen-container",children:[nt.jsx(Yo,{className:"screen-window",src:LC}),nt.jsx("div",{className:"screen-content",children:nt.jsx(i,{})})]})}function FC(){const[a,e]=fe.useState("chat");return nt.jsxs("div",{className:"content-container",children:[nt.jsx("title",{children:"楽園"}),nt.jsxs("div",{className:"content",children:[nt.jsxs("div",{className:"sidebar-stack",children:[nt.jsx(UC,{}),nt.jsx(CC,{activeScreen:a,setActiveScreen:e})]}),nt.jsx("div",{className:"screen-stack",children:nt.jsx(IC,{activeScreen:a})}),nt.jsx("div",{children:nt.jsx(AC,{interactive:!0})})]})]})}function zC(){return nt.jsx(nt.Fragment,{children:nt.jsxs(Hy,{children:[nt.jsx(kh,{path:"/",element:nt.jsx(FC,{})}),nt.jsx(kh,{path:"test",element:nt.jsx(nt.Fragment,{children:"test"})})]})})}jS.createRoot(document.getElementById("root")).render(nt.jsx(fe.StrictMode,{children:nt.jsx(uE,{children:nt.jsx(zC,{})})}));
