(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Qf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function BS(){if(Mv)return Lo;Mv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Tv;function IS(){return Tv||(Tv=1,Qf.exports=BS()),Qf.exports}var Mn=IS(),Jf={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function FS(){if(bv)return ct;bv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(N,J,Se){this.props=N,this.context=J,this.refs=A,this.updater=Se||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function U(N,J,Se){this.props=N,this.context=J,this.refs=A,this.updater=Se||y}var L=U.prototype=new v;L.constructor=U,M(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function z(N,J,Se,ye,De,Ge){return Se=Ge.ref,{$$typeof:a,type:N,key:J,ref:Se!==void 0?Se:null,props:Ge}}function Z(N,J){return z(N.type,J,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function w(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return J[Se]})}var H=/\/+/g;function ne(N,J){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):J.toString(36)}function ue(){}function pe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ue,ue):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Q(N,J,Se,ye,De){var Ge=typeof N;(Ge==="undefined"||Ge==="boolean")&&(N=null);var ee=!1;if(N===null)ee=!0;else switch(Ge){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(N.$$typeof){case a:case e:ee=!0;break;case g:return ee=N._init,Q(ee(N._payload),J,Se,ye,De)}}if(ee)return De=De(N),ee=ye===""?"."+ne(N,0):ye,D(De)?(Se="",ee!=null&&(Se=ee.replace(H,"$&/")+"/"),Q(De,J,Se,"",function(Ie){return Ie})):De!=null&&(C(De)&&(De=Z(De,Se+(De.key==null||N&&N.key===De.key?"":(""+De.key).replace(H,"$&/")+"/")+ee)),J.push(De)),1;ee=0;var me=ye===""?".":ye+":";if(D(N))for(var Re=0;Re<N.length;Re++)ye=N[Re],Ge=me+ne(ye,Re),ee+=Q(ye,J,Se,Ge,De);else if(Re=x(N),typeof Re=="function")for(N=Re.call(N),Re=0;!(ye=N.next()).done;)ye=ye.value,Ge=me+ne(ye,Re++),ee+=Q(ye,J,Se,Ge,De);else if(Ge==="object"){if(typeof N.then=="function")return Q(pe(N),J,Se,ye,De);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ee}function P(N,J,Se){if(N==null)return N;var ye=[],De=0;return Q(N,ye,"","",function(Ge){return J.call(Se,Ge,De++)}),ye}function k(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var W=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function xe(){}return ct.Children={map:P,forEach:function(N,J,Se){P(N,function(){J.apply(this,arguments)},Se)},count:function(N){var J=0;return P(N,function(){J++}),J},toArray:function(N){return P(N,function(J){return J})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ct.Component=S,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=U,ct.StrictMode=s,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ct.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},ct.cache=function(N){return function(){return N.apply(null,arguments)}},ct.cloneElement=function(N,J,Se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ye=M({},N.props),De=N.key,Ge=void 0;if(J!=null)for(ee in J.ref!==void 0&&(Ge=void 0),J.key!==void 0&&(De=""+J.key),J)!G.call(J,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&J.ref===void 0||(ye[ee]=J[ee]);var ee=arguments.length-2;if(ee===1)ye.children=Se;else if(1<ee){for(var me=Array(ee),Re=0;Re<ee;Re++)me[Re]=arguments[Re+2];ye.children=me}return z(N.type,De,void 0,void 0,Ge,ye)},ct.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ct.createElement=function(N,J,Se){var ye,De={},Ge=null;if(J!=null)for(ye in J.key!==void 0&&(Ge=""+J.key),J)G.call(J,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(De[ye]=J[ye]);var ee=arguments.length-2;if(ee===1)De.children=Se;else if(1<ee){for(var me=Array(ee),Re=0;Re<ee;Re++)me[Re]=arguments[Re+2];De.children=me}if(N&&N.defaultProps)for(ye in ee=N.defaultProps,ee)De[ye]===void 0&&(De[ye]=ee[ye]);return z(N,Ge,void 0,void 0,null,De)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(N){return{$$typeof:d,render:N}},ct.isValidElement=C,ct.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:k}},ct.memo=function(N,J){return{$$typeof:p,type:N,compare:J===void 0?null:J}},ct.startTransition=function(N){var J=I.T,Se={};I.T=Se;try{var ye=N(),De=I.S;De!==null&&De(Se,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(xe,W)}catch(Ge){W(Ge)}finally{I.T=J}},ct.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ct.use=function(N){return I.H.use(N)},ct.useActionState=function(N,J,Se){return I.H.useActionState(N,J,Se)},ct.useCallback=function(N,J){return I.H.useCallback(N,J)},ct.useContext=function(N){return I.H.useContext(N)},ct.useDebugValue=function(){},ct.useDeferredValue=function(N,J){return I.H.useDeferredValue(N,J)},ct.useEffect=function(N,J,Se){var ye=I.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(N,J)},ct.useId=function(){return I.H.useId()},ct.useImperativeHandle=function(N,J,Se){return I.H.useImperativeHandle(N,J,Se)},ct.useInsertionEffect=function(N,J){return I.H.useInsertionEffect(N,J)},ct.useLayoutEffect=function(N,J){return I.H.useLayoutEffect(N,J)},ct.useMemo=function(N,J){return I.H.useMemo(N,J)},ct.useOptimistic=function(N,J){return I.H.useOptimistic(N,J)},ct.useReducer=function(N,J,Se){return I.H.useReducer(N,J,Se)},ct.useRef=function(N){return I.H.useRef(N)},ct.useState=function(N){return I.H.useState(N)},ct.useSyncExternalStore=function(N,J,Se){return I.H.useSyncExternalStore(N,J,Se)},ct.useTransition=function(){return I.H.useTransition()},ct.version="19.1.1",ct}var Av;function Od(){return Av||(Av=1,Jf.exports=FS()),Jf.exports}var de=Od(),$f={exports:{}},No={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function zS(){return Rv||(Rv=1,(function(a){function e(P,k){var W=P.length;P.push(k);e:for(;0<W;){var xe=W-1>>>1,N=P[xe];if(0<l(N,k))P[xe]=k,P[W]=N,W=xe;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var k=P[0],W=P.pop();if(W!==k){P[0]=W;e:for(var xe=0,N=P.length,J=N>>>1;xe<J;){var Se=2*(xe+1)-1,ye=P[Se],De=Se+1,Ge=P[De];if(0>l(ye,W))De<N&&0>l(Ge,ye)?(P[xe]=Ge,P[De]=W,xe=De):(P[xe]=ye,P[Se]=W,xe=Se);else if(De<N&&0>l(Ge,W))P[xe]=Ge,P[De]=W,xe=De;else break e}}return k}function l(P,k){var W=P.sortIndex-k.sortIndex;return W!==0?W:P.id-k.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var k=i(p);k!==null;){if(k.callback===null)s(p);else if(k.startTime<=P)s(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=i(p)}}function I(P){if(A=!1,D(P),!M)if(i(m)!==null)M=!0,G||(G=!0,ne());else{var k=i(p);k!==null&&Q(I,k.startTime-P)}}var G=!1,z=-1,Z=5,C=-1;function w(){return S?!0:!(a.unstable_now()-C<Z)}function H(){if(S=!1,G){var P=a.unstable_now();C=P;var k=!0;try{e:{M=!1,A&&(A=!1,U(z),z=-1),y=!0;var W=x;try{t:{for(D(P),_=i(m);_!==null&&!(_.expirationTime>P&&w());){var xe=_.callback;if(typeof xe=="function"){_.callback=null,x=_.priorityLevel;var N=xe(_.expirationTime<=P);if(P=a.unstable_now(),typeof N=="function"){_.callback=N,D(P),k=!0;break t}_===i(m)&&s(m),D(P)}else s(m);_=i(m)}if(_!==null)k=!0;else{var J=i(p);J!==null&&Q(I,J.startTime-P),k=!1}}break e}finally{_=null,x=W,y=!1}k=void 0}}finally{k?ne():G=!1}}}var ne;if(typeof L=="function")ne=function(){L(H)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=H,ne=function(){pe.postMessage(null)}}else ne=function(){v(H,0)};function Q(P,k){z=v(function(){P(a.unstable_now())},k)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(P){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var W=x;x=k;try{return P()}finally{x=W}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return k()}finally{x=W}},a.unstable_scheduleCallback=function(P,k,W){var xe=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xe+W:xe):W=xe,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=W+N,P={id:g++,callback:k,priorityLevel:P,startTime:W,expirationTime:N,sortIndex:-1},W>xe?(P.sortIndex=W,e(p,P),i(m)===null&&P===i(p)&&(A?(U(z),z=-1):A=!0,Q(I,W-xe))):(P.sortIndex=N,e(m,P),M||y||(M=!0,G||(G=!0,ne()))),P},a.unstable_shouldYield=w,a.unstable_wrapCallback=function(P){var k=x;return function(){var W=x;x=k;try{return P.apply(this,arguments)}finally{x=W}}}})(th)),th}var Cv;function HS(){return Cv||(Cv=1,eh.exports=zS()),eh.exports}var nh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function GS(){if(wv)return Nn;wv=1;var a=Od();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var Dv;function VS(){if(Dv)return nh.exports;Dv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),nh.exports=GS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function kS(){if(Uv)return No;Uv=1;var a=HS(),e=Od(),i=VS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===r)return d(c),t;if(h===o)return d(c),n;h=h.sibling}throw Error(s(188))}if(r.return!==o.return)r=c,o=h;else{for(var E=!1,b=c.child;b;){if(b===r){E=!0,r=c,o=h;break}if(b===o){E=!0,o=c,r=h;break}b=b.sibling}if(!E){for(b=h.child;b;){if(b===r){E=!0,r=h,o=c;break}if(b===o){E=!0,o=h,r=c;break}b=b.sibling}if(!E)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var Q=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xe=[],N=-1;function J(t){return{current:t}}function Se(t){0>N||(t.current=xe[N],xe[N]=null,N--)}function ye(t,n){N++,xe[N]=t.current,t.current=n}var De=J(null),Ge=J(null),ee=J(null),me=J(null);function Re(t,n){switch(ye(ee,n),ye(Ge,t),ye(De,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Qg(n),t=Jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(De),ye(De,t)}function Ie(){Se(De),Se(Ge),Se(ee)}function He(t){t.memoizedState!==null&&ye(me,t);var n=De.current,r=Jg(n,t.type);n!==r&&(ye(Ge,t),ye(De,r))}function lt(t){Ge.current===t&&(Se(De),Se(Ge)),me.current===t&&(Se(me),Ro._currentValue=W)}var Zt=Object.prototype.hasOwnProperty,F=a.unstable_scheduleCallback,Dt=a.unstable_cancelCallback,at=a.unstable_shouldYield,$e=a.unstable_requestPaint,Ee=a.unstable_now,st=a.unstable_getCurrentPriorityLevel,Be=a.unstable_ImmediatePriority,Qe=a.unstable_UserBlockingPriority,Ht=a.unstable_NormalPriority,Xt=a.unstable_LowPriority,O=a.unstable_IdlePriority,T=a.log,te=a.unstable_setDisableYieldValue,ce=null,ge=null;function le(t){if(typeof T=="function"&&te(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(ce,t)}catch{}}var Fe=Math.clz32?Math.clz32:Ze,Ce=Math.log,qe=Math.LN2;function Ze(t){return t>>>=0,t===0?32:31-(Ce(t)/qe|0)|0}var Me=256,Ne=4194304;function je(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=je(o):(E&=b,E!==0?c=je(E):r||(r=b&~t,r!==0&&(c=je(r))))):(b=o&~h,b!==0?c=je(b):E!==0?c=je(E):r||(r=o&~t,r!==0&&(c=je(r)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:c}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ae(){var t=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),t}function we(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Te(t,n,r,o,c,h){var E=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(r=E&~r;0<r;){var fe=31-Fe(r),ve=1<<fe;b[fe]=0,B[fe]=-1;var ie=$[fe];if(ie!==null)for($[fe]=null,fe=0;fe<ie.length;fe++){var ae=ie[fe];ae!==null&&(ae.lane&=-536870913)}r&=~ve}o!==0&&_e(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function _e(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194090}function Xe(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Fe(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:vv(t.type))}function gi(t,n){var r=k.p;try{return k.p=t,n()}finally{k.p=r}}var cn=Math.random().toString(36).slice(2),fn="__reactFiber$"+cn,Qt="__reactProps$"+cn,wi="__reactContainer$"+cn,Dr="__reactEvents$"+cn,tl="__reactListeners$"+cn,Ur="__reactHandles$"+cn,Fs="__reactResources$"+cn,Di="__reactMarker$"+cn;function Lr(t){delete t[fn],delete t[Qt],delete t[Dr],delete t[tl],delete t[Ur]}function Vi(t){var n=t[fn];if(n)return n;for(var r=t.parentNode;r;){if(n=r[wi]||r[fn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=nv(t);t!==null;){if(r=t[fn])return r;t=nv(t)}return n}t=r,r=t.parentNode}return null}function ga(t){if(t=t[fn]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ja(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function va(t){var n=t[Fs];return n||(n=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(t){t[Di]=!0}var nl=new Set,il={};function R(t,n){q(t,n),q(t+"Capture",n)}function q(t,n){for(il[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},K={};function be(t){return Zt.call(K,t)?!0:Zt.call(se,t)?!1:re.test(t)?K[t]=!0:(se[t]=!0,!1)}function Le(t,n,r){if(be(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ve(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Oe(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}var et,nt;function Ye(t){if(et===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);et=n&&n[1]||"",nt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+nt}var ht=!1;function bt(t,n){if(!t||ht)return"";ht=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ae){var ie=ae}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ae){ie=ae}t.call(ve.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],b=h[1];if(E&&b){var B=E.split(`
`),$=b.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var fe=`
`+B[o].replace(" at new "," at ");return t.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",t.displayName)),fe}while(1<=o&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ye(r):""}function qt(t){switch(t.tag){case 26:case 27:case 5:return Ye(t.type);case 16:return Ye("Lazy");case 13:return Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return Ye("Activity");default:return""}}function Pt(t){try{var n="";do n+=qt(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wt(t){var n=Je(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _t(t){t._valueTracker||(t._valueTracker=Wt(t))}function Dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Je(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function _n(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(t,n,r,o,c,h,E,b){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+dt(n)):t.value!==""+dt(n)&&(t.value=""+dt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Un(t,E,dt(n)):r!=null?Un(t,E,dt(r)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+dt(b):t.removeAttribute("name")}function Fn(t,n,r,o,c,h,E,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;r=r!=null?""+dt(r):"",n=n!=null?""+dt(n):r,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Un(t,n,r){n==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Jt(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+dt(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function bn(t,n,r){if(n!=null&&(n=""+dt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+dt(r):""}function Nr(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(Q(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=dt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function Gn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var N0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||N0.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Jd(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&Qd(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&Qd(t,h,n[h])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return P0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ju=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Or=null,Pr=null;function $d(t){var n=ga(t);if(n&&(t=n.stateNode)){var r=t[Qt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gt(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[Qt]||null;if(!c)throw Error(s(90));Gt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Dn(o)}break e;case"textarea":bn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&Jt(t,!!r.multiple,n,!1)}}}var Ju=!1;function ep(t,n,r){if(Ju)return t(n,r);Ju=!0;try{var o=t(n);return o}finally{if(Ju=!1,(Or!==null||Pr!==null)&&(kl(),Or&&(n=Or,t=Pr,Pr=Or=null,$d(n),t)))for(n=0;n<t.length;n++)$d(t[n])}}function zs(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Qt]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if(ki)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{$u=!1}var _a=null,ec=null,rl=null;function tp(){if(rl)return rl;var t,n=ec,r=n.length,o,c="value"in _a?_a.value:_a.textContent,h=c.length;for(t=0;t<r&&n[t]===c[t];t++);var E=r-t;for(o=1;o<=E&&n[r-o]===c[h-o];o++);return rl=c.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function np(){return!1}function Vn(t){function n(r,o,c,h,E){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(r=t[b],this[b]=r?r(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ol:np,this.isPropagationStopped=np,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Vn($a),Gs=g({},$a,{view:0,detail:0}),B0=Vn(Gs),tc,nc,Vs,ul=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(tc=t.screenX-Vs.screenX,nc=t.screenY-Vs.screenY):nc=tc=0,Vs=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),ip=Vn(ul),I0=g({},ul,{dataTransfer:0}),F0=Vn(I0),z0=g({},Gs,{relatedTarget:0}),ic=Vn(z0),H0=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Vn(H0),V0=g({},$a,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k0=Vn(V0),X0=g({},$a,{data:0}),ap=Vn(X0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Y0[t])?!!n[t]:!1}function ac(){return Z0}var K0=g({},Gs,{key:function(t){if(t.key){var n=W0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j0=Vn(K0),Q0=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Vn(Q0),J0=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),$0=Vn(J0),ex=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=Vn(ex),nx=g({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=Vn(nx),ax=g({},$a,{newState:0,oldState:0}),rx=Vn(ax),sx=[9,13,27,32],rc=ki&&"CompositionEvent"in window,ks=null;ki&&"documentMode"in document&&(ks=document.documentMode);var ox=ki&&"TextEvent"in window&&!ks,sp=ki&&(!rc||ks&&8<ks&&11>=ks),op=" ",lp=!1;function up(t,n){switch(t){case"keyup":return sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function lx(t,n){switch(t){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return t=n.data,t===op&&lp?null:t;default:return null}}function ux(t,n){if(Br)return t==="compositionend"||!rc&&up(t,n)?(t=tp(),rl=ec=_a=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cx[t.type]:n==="textarea"}function hp(t,n,r,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=Kl(n,"onChange"),0<n.length&&(r=new ll("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Xs=null,Ws=null;function fx(t){qg(t,0)}function cl(t){var n=Ja(t);if(Dn(n))return t}function dp(t,n){if(t==="change")return n}var pp=!1;if(ki){var sc;if(ki){var oc="oninput"in document;if(!oc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),oc=typeof mp.oninput=="function"}sc=oc}else sc=!1;pp=sc&&(!document.documentMode||9<document.documentMode)}function gp(){Xs&&(Xs.detachEvent("onpropertychange",vp),Ws=Xs=null)}function vp(t){if(t.propertyName==="value"&&cl(Ws)){var n=[];hp(n,Ws,t,Qu(t)),ep(fx,n)}}function hx(t,n,r){t==="focusin"?(gp(),Xs=n,Ws=r,Xs.attachEvent("onpropertychange",vp)):t==="focusout"&&gp()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl(Ws)}function px(t,n){if(t==="click")return cl(n)}function mx(t,n){if(t==="input"||t==="change")return cl(n)}function gx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:gx;function qs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Zt.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var r=_p(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_p(r)}}function Sp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vi(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=vi(t.document)}return n}function lc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var vx=ki&&"documentMode"in document&&11>=document.documentMode,Ir=null,uc=null,Ys=null,cc=!1;function Ep(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cc||Ir==null||Ir!==vi(o)||(o=Ir,"selectionStart"in o&&lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=Kl(uc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Ir)))}function er(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Fr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},fc={},Mp={};ki&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function tr(t){if(fc[t])return fc[t];if(!Fr[t])return t;var n=Fr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Mp)return fc[t]=n[r];return t}var Tp=tr("animationend"),bp=tr("animationiteration"),Ap=tr("animationstart"),_x=tr("transitionrun"),xx=tr("transitionstart"),Sx=tr("transitioncancel"),Rp=tr("transitionend"),Cp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function _i(t,n){Cp.set(t,n),R(n,[t])}var wp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var r=wp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:Pt(n)},wp.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var si=[],zr=0,dc=0;function fl(){for(var t=zr,n=dc=zr=0;n<t;){var r=si[n];si[n++]=null;var o=si[n];si[n++]=null;var c=si[n];si[n++]=null;var h=si[n];if(si[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}h!==0&&Dp(r,c,h)}}function hl(t,n,r,o){si[zr++]=t,si[zr++]=n,si[zr++]=r,si[zr++]=o,dc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function pc(t,n,r,o){return hl(t,n,r,o),dl(t)}function Hr(t,n){return hl(t,null,null,n),dl(t)}function Dp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Fe(r),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=r|536870912),h):null}function dl(t){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function yx(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,r,o){return new yx(t,n,r,o)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var r=t.alternate;return r===null?(r=Zn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Up(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,r,o,c,h){var E=0;if(o=t,typeof t=="function")mc(t)&&(E=1);else if(typeof t=="string")E=MS(t,r,De.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Zn(31,r,n,c),t.elementType=C,t.lanes=h,t;case M:return nr(r.children,c,h,n);case A:E=8,c|=24;break;case S:return t=Zn(12,r,n,c|2),t.elementType=S,t.lanes=h,t;case I:return t=Zn(13,r,n,c),t.elementType=I,t.lanes=h,t;case G:return t=Zn(19,r,n,c),t.elementType=G,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case L:E=10;break e;case U:E=9;break e;case D:E=11;break e;case z:E=14;break e;case Z:E=16,o=null;break e}E=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(E,r,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function nr(t,n,r,o){return t=Zn(7,t,o,n),t.lanes=r,t}function gc(t,n,r){return t=Zn(6,t,null,n),t.lanes=r,t}function vc(t,n,r){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vr=[],kr=0,ml=null,gl=0,oi=[],li=0,ir=null,Wi=1,qi="";function ar(t,n){Vr[kr++]=gl,Vr[kr++]=ml,ml=t,gl=n}function Lp(t,n,r){oi[li++]=Wi,oi[li++]=qi,oi[li++]=ir,ir=t;var o=Wi;t=qi;var c=32-Fe(o)-1;o&=~(1<<c),r+=1;var h=32-Fe(n)+c;if(30<h){var E=c-c%5;h=(o&(1<<E)-1).toString(32),o>>=E,c-=E,Wi=1<<32-Fe(n)+c|r<<c|o,qi=h+t}else Wi=1<<h|r<<c|o,qi=t}function _c(t){t.return!==null&&(ar(t,1),Lp(t,1,0))}function xc(t){for(;t===ml;)ml=Vr[--kr],Vr[kr]=null,gl=Vr[--kr],Vr[kr]=null;for(;t===ir;)ir=oi[--li],oi[li]=null,qi=oi[--li],oi[li]=null,Wi=oi[--li],oi[li]=null}var zn=null,$t=null,wt=!1,rr=null,Ui=!1,Sc=Error(s(519));function sr(t){var n=Error(s(418,""));throw js(ri(n,t)),Sc}function Np(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Qt]=o,r){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(r=0;r<yo.length;r++)St(yo[r],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Fn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_t(n);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Nr(n,o.value,o.defaultValue,o.children),_t(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||jg(n.textContent,r)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||sr(t)}function Op(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:zn=zn.return}}function Zs(t){if(t!==zn)return!1;if(!wt)return Op(t),wt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||If(t.type,t.memoizedProps)),r=!r),r&&$t&&sr(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){$t=Si(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Oa(t.type)?(t=Gf,Gf=null,$t=t):$t=n):$t=zn?Si(t.stateNode.nextSibling):null;return!0}function Ks(){$t=zn=null,wt=!1}function Pp(){var t=rr;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),rr=null),t}function js(t){rr===null?rr=[t]:rr.push(t)}var yc=J(null),or=null,Yi=null;function xa(t,n,r){ye(yc,n._currentValue),n._currentValue=r}function Zi(t){t._currentValue=yc.current,Se(yc)}function Ec(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Mc(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var E=c.child;h=h.firstContext;e:for(;h!==null;){var b=h;h=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){h.lanes|=r,b=h.alternate,b!==null&&(b.lanes|=r),Ec(h.return,r,t),o||(E=null);break e}h=b.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(s(341));E.lanes|=r,h=E.alternate,h!==null&&(h.lanes|=r),Ec(E,r,t),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===t){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function Qs(t,n,r,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var b=c.type;Yn(c.pendingProps.value,E.value)||(t!==null?t.push(b):t=[b])}}else if(c===me.current){if(E=c.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&Mc(n,t,r,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function lr(t){or=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Bp(or,t)}function _l(t,n){return or===null&&lr(t),Bp(t,n)}function Bp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return r}var Ex=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},Mx=a.unstable_scheduleCallback,Tx=a.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new Ex,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&Mx(Tx,function(){t.controller.abort()})}var $s=null,bc=0,Xr=0,Wr=null;function bx(t,n){if($s===null){var r=$s=[];bc=0,Xr=Cf(),Wr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return bc++,n.then(Ip,Ip),n}function Ip(){if(--bc===0&&$s!==null){Wr!==null&&(Wr.status="fulfilled");var t=$s;$s=null,Xr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ax(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Fp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&bx(t,n),Fp!==null&&Fp(t,n)};var ur=J(null);function Ac(){var t=ur.current;return t!==null?t:kt.pooledCache}function xl(t,n){n===null?ye(ur,ur.current):ye(ur,n.pool)}function zp(){var t=Ac();return t===null?null:{parent:hn._currentValue,pool:t}}var eo=Error(s(460)),Hp=Error(s(474)),Sl=Error(s(542)),Rc={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yl(){}function Vp(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(yl,yl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t;default:if(typeof n.status=="string")n.then(yl,yl);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xp(t),t}throw to=n,eo}}var to=null;function kp(){if(to===null)throw Error(s(459));var t=to;return to=null,t}function Xp(t){if(t===eo||t===Sl)throw Error(s(483))}var Sa=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=dl(t),Dp(t,null,r),n}return hl(t,o,n,r),dl(t)}function no(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Xe(t,r)}}function Dc(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?c=h=E:h=h.next=E,r=r.next}while(r!==null);h===null?c=h=n:h=h.next=n}else c=h=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Uc=!1;function io(){if(Uc){var t=Wr;if(t!==null)throw t}}function ao(t,n,r,o){Uc=!1;var c=t.updateQueue;Sa=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,$=B.next;B.next=null,E===null?h=$:E.next=$,E=B;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,b=fe.lastBaseUpdate,b!==E&&(b===null?fe.firstBaseUpdate=$:b.next=$,fe.lastBaseUpdate=B))}if(h!==null){var ve=c.baseState;E=0,fe=$=B=null,b=h;do{var ie=b.lane&-536870913,ae=ie!==b.lane;if(ae?(Mt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Xr&&(Uc=!0),fe!==null&&(fe=fe.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var rt=t,tt=b;ie=n;var Ft=r;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){ve=rt.call(Ft,ve,ie);break e}ve=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ie=typeof rt=="function"?rt.call(Ft,ve,ie):rt,ie==null)break e;ve=g({},ve,ie);break e;case 2:Sa=!0}}ie=b.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:b.tag,payload:b.payload,callback:b.callback,next:null},fe===null?($=fe=ae,B=ve):fe=fe.next=ae,E|=ie;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ae=b,b=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);fe===null&&(B=ve),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=fe,h===null&&(c.shared.lanes=0),Da|=E,t.lanes=E,t.memoizedState=ve}}function Wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function qp(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Wp(r[t],n)}var qr=J(null),El=J(0);function Yp(t,n){t=ta,ye(El,t),ye(qr,n),ta=t|n.baseLanes}function Lc(){ye(El,ta),ye(qr,qr.current)}function Nc(){ta=El.current,Se(qr),Se(El)}var Ma=0,mt=null,Bt=null,on=null,Ml=!1,Yr=!1,cr=!1,Tl=0,ro=0,Zr=null,Rx=0;function tn(){throw Error(s(321))}function Oc(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Yn(t[r],n[r]))return!1;return!0}function Pc(t,n,r,o,c,h){return Ma=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Dm:Um,cr=!1,h=r(o,c),cr=!1,Yr&&(h=Kp(n,r,o,c)),Zp(t),h}function Zp(t){P.H=Dl;var n=Bt!==null&&Bt.next!==null;if(Ma=0,on=Bt=mt=null,Ml=!1,ro=0,Zr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&vl(t)&&(xn=!0))}function Kp(t,n,r,o){mt=t;var c=0;do{if(Yr&&(Zr=null),ro=0,Yr=!1,25<=c)throw Error(s(301));if(c+=1,on=Bt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Ox,h=n(r,o)}while(Yr);return h}function Cx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Bt!==null?Bt.memoizedState:null)!==t&&(mt.flags|=1024),n}function Bc(){var t=Tl!==0;return Tl=0,t}function Ic(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Fc(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Ma=0,on=Bt=mt=null,Yr=!1,ro=Tl=0,Zr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?mt.memoizedState=on=t:on=on.next=t,on}function ln(){if(Bt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var n=on===null?mt.memoizedState:on.next;if(n!==null)on=n,Bt=t;else{if(t===null)throw mt.alternate===null?Error(s(467)):Error(s(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},on===null?mt.memoizedState=on=t:on=on.next=t}return on}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,Zr===null&&(Zr=[]),t=Vp(Zr,t,n),n=mt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Dm:Um),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===L)return Ln(t)}throw Error(s(438,String(t)))}function Hc(t){var n=null,r=mt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=zc(),mt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=w;return n.index++,r}function Ki(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=ln();return Gc(n,Bt,t)}function Gc(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var b=E=null,B=null,$=n,fe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(Mt&ve)===ve:(Ma&ve)===ve){var ie=$.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Xr&&(fe=!0);else if((Ma&ie)===ie){$=$.next,ie===Xr&&(fe=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=ve,E=h):B=B.next=ve,mt.lanes|=ie,Da|=ie;ve=$.action,cr&&r(h,ve),h=$.hasEagerState?$.eagerState:r(h,ve)}else ie={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=ie,E=h):B=B.next=ie,mt.lanes|=ve,Da|=ve;$=$.next}while($!==null&&$!==n);if(B===null?E=h:B.next=b,!Yn(h,t.memoizedState)&&(xn=!0,fe&&(r=Wr,r!==null)))throw r;t.memoizedState=h,t.baseState=E,t.baseQueue=B,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Vc(t){var n=ln(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,h=n.memoizedState;if(c!==null){r.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);Yn(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function jp(t,n,r){var o=mt,c=ln(),h=wt;if(h){if(r===void 0)throw Error(s(407));r=r()}else r=n();var E=!Yn((Bt||c).memoizedState,r);E&&(c.memoizedState=r,xn=!0),c=c.queue;var b=$p.bind(null,o,c,t);if(oo(2048,8,b,[t]),c.getSnapshot!==n||E||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Rl(),Jp.bind(null,o,c,r,n),null),kt===null)throw Error(s(349));h||(Ma&124)!==0||Qp(o,n,r)}return r}function Qp(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=mt.updateQueue,n===null?(n=zc(),mt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Jp(t,n,r,o){n.value=r,n.getSnapshot=o,em(n)&&tm(t)}function $p(t,n,r){return r(function(){em(n)&&tm(t)})}function em(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Yn(t,r)}catch{return!0}}function tm(t){var n=Hr(t,2);n!==null&&$n(n,t,2)}function kc(t){var n=kn();if(typeof t=="function"){var r=t;if(t=r(),cr){le(!0);try{r()}finally{le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function nm(t,n,r,o){return t.baseState=r,Gc(t,Bt,typeof o=="function"?o:Ki)}function wx(t,n,r,o,c){if(wl(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};P.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,im(n,h)):(h.next=r.next,n.pending=r.next=h)}}function im(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=P.T,E={};P.T=E;try{var b=r(c,o),B=P.S;B!==null&&B(E,b),am(t,n,b)}catch($){Xc(t,n,$)}finally{P.T=h}}else try{h=r(c,o),am(t,n,h)}catch($){Xc(t,n,$)}}function am(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){rm(t,n,o)},function(o){return Xc(t,n,o)}):rm(t,n,r)}function rm(t,n,r){n.status="fulfilled",n.value=r,sm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,im(t,r)))}function Xc(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,sm(n),n=n.next;while(n!==o)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function om(t,n){return n}function lm(t,n){if(wt){var r=kt.formState;if(r!==null){e:{var o=mt;if(wt){if($t){t:{for(var c=$t,h=Ui;c.nodeType!==8;){if(!h){c=null;break t}if(c=Si(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){$t=Si(c.nextSibling),o=c.data==="F!";break e}}sr(o)}o=!1}o&&(n=r[0])}}return r=kn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},r.queue=o,r=Rm.bind(null,mt,o),o.dispatch=r,o=kc(!1),h=Kc.bind(null,mt,!1,o.queue),o=kn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=wx.bind(null,mt,c,h,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function um(t){var n=ln();return cm(n,Bt,t)}function cm(t,n,r){if(n=Gc(t,n,om)[0],t=Al(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(E){throw E===eo?Sl:E}else o=n;n=ln();var c=n.queue,h=c.dispatch;return r!==n.memoizedState&&(mt.flags|=2048,Kr(9,Rl(),Dx.bind(null,c,r),null)),[o,h,t]}function Dx(t,n){t.action=n}function fm(t){var n=ln(),r=Bt;if(r!==null)return cm(n,r,t);ln(),n=n.memoizedState,r=ln();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function Kr(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=zc(),mt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function hm(){return ln().memoizedState}function Cl(t,n,r,o){var c=kn();o=o===void 0?null:o,mt.flags|=t,c.memoizedState=Kr(1|n,Rl(),r,o)}function oo(t,n,r,o){var c=ln();o=o===void 0?null:o;var h=c.memoizedState.inst;Bt!==null&&o!==null&&Oc(o,Bt.memoizedState.deps)?c.memoizedState=Kr(n,h,r,o):(mt.flags|=t,c.memoizedState=Kr(1|n,h,r,o))}function dm(t,n){Cl(8390656,8,t,n)}function pm(t,n){oo(2048,8,t,n)}function mm(t,n){return oo(4,2,t,n)}function gm(t,n){return oo(4,4,t,n)}function vm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,r){r=r!=null?r.concat([t]):null,oo(4,4,vm.bind(null,n,t),r)}function Wc(){}function xm(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Oc(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Sm(t,n){var r=ln();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Oc(n,o[1]))return o[0];if(o=t(),cr){le(!0);try{t()}finally{le(!1)}}return r.memoizedState=[o,n],o}function qc(t,n,r){return r===void 0||(Ma&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=Mg(),mt.lanes|=t,Da|=t,r)}function ym(t,n,r,o){return Yn(r,n)?r:qr.current!==null?(t=qc(t,r,o),Yn(t,n)||(xn=!0),t):(Ma&42)===0?(xn=!0,t.memoizedState=r):(t=Mg(),mt.lanes|=t,Da|=t,n)}function Em(t,n,r,o,c){var h=k.p;k.p=h!==0&&8>h?h:8;var E=P.T,b={};P.T=b,Kc(t,!1,n,r);try{var B=c(),$=P.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=Ax(B,o);lo(t,n,fe,Jn(t))}else lo(t,n,o,Jn(t))}catch(ve){lo(t,n,{then:function(){},status:"rejected",reason:ve},Jn())}finally{k.p=h,P.T=E}}function Ux(){}function Yc(t,n,r,o){if(t.tag!==5)throw Error(s(476));var c=Mm(t).queue;Em(t,c,n,W,r===null?Ux:function(){return Tm(t),r(o)})}function Mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:W},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Tm(t){var n=Mm(t).next.queue;lo(t,n,{},Jn())}function Zc(){return Ln(Ro)}function bm(){return ln().memoizedState}function Am(){return ln().memoizedState}function Lx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=Jn();t=ya(r);var o=Ea(n,t,r);o!==null&&($n(o,n,r),no(o,n,r)),n={cache:Tc()},t.payload=n;return}n=n.return}}function Nx(t,n,r){var o=Jn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},wl(t)?Cm(n,r):(r=pc(t,n,r,o),r!==null&&($n(r,t,o),wm(r,n,o)))}function Rm(t,n,r){var o=Jn();lo(t,n,r,o)}function lo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Cm(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,b=h(E,r);if(c.hasEagerState=!0,c.eagerState=b,Yn(b,E))return hl(t,n,c,0),kt===null&&fl(),!1}catch{}finally{}if(r=pc(t,n,c,o),r!==null)return $n(r,t,o),wm(r,n,o),!0}return!1}function Kc(t,n,r,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(s(479))}else n=pc(t,r,o,2),n!==null&&$n(n,t,2)}function wl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function Cm(t,n){Yr=Ml=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function wm(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Xe(t,r)}}var Dl={readContext:Ln,use:bl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn},Dm={readContext:Ln,use:bl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:dm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Cl(4194308,4,vm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var r=kn();n=n===void 0?null:n;var o=t();if(cr){le(!0);try{t()}finally{le(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=kn();if(r!==void 0){var c=r(n);if(cr){le(!0);try{r(n)}finally{le(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Nx.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=kc(t);var n=t.queue,r=Rm.bind(null,mt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Wc,useDeferredValue:function(t,n){var r=kn();return qc(r,t,n)},useTransition:function(){var t=kc(!1);return t=Em.bind(null,mt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=mt,c=kn();if(wt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),kt===null)throw Error(s(349));(Mt&124)!==0||Qp(o,n,r)}c.memoizedState=r;var h={value:r,getSnapshot:n};return c.queue=h,dm($p.bind(null,o,h,t),[t]),o.flags|=2048,Kr(9,Rl(),Jp.bind(null,o,h,r,n),null),r},useId:function(){var t=kn(),n=kt.identifierPrefix;if(wt){var r=qi,o=Wi;r=(o&~(1<<32-Fe(o)-1)).toString(32)+r,n="«"+n+"R"+r,r=Tl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=Rx++,n="«"+n+"r"+r.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Zc,useFormState:lm,useActionState:lm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Kc.bind(null,mt,!0,r),r.dispatch=n,[t,n]},useMemoCache:Hc,useCacheRefresh:function(){return kn().memoizedState=Lx.bind(null,mt)}},Um={readContext:Ln,use:bl,useCallback:xm,useContext:Ln,useEffect:pm,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:Al,useRef:hm,useState:function(){return Al(Ki)},useDebugValue:Wc,useDeferredValue:function(t,n){var r=ln();return ym(r,Bt.memoizedState,t,n)},useTransition:function(){var t=Al(Ki)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:jp,useId:bm,useHostTransitionStatus:Zc,useFormState:um,useActionState:um,useOptimistic:function(t,n){var r=ln();return nm(r,Bt,t,n)},useMemoCache:Hc,useCacheRefresh:Am},Ox={readContext:Ln,use:bl,useCallback:xm,useContext:Ln,useEffect:pm,useImperativeHandle:_m,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:Sm,useReducer:Vc,useRef:hm,useState:function(){return Vc(Ki)},useDebugValue:Wc,useDeferredValue:function(t,n){var r=ln();return Bt===null?qc(r,t,n):ym(r,Bt.memoizedState,t,n)},useTransition:function(){var t=Vc(Ki)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:jp,useId:bm,useHostTransitionStatus:Zc,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var r=ln();return Bt!==null?nm(r,Bt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:Am},jr=null,uo=0;function Ul(t){var n=uo;return uo+=1,jr===null&&(jr=[]),Vp(jr,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lm(t){var n=t._init;return n(t._payload)}function Nm(t){function n(Y,V){if(t){var j=Y.deletions;j===null?(Y.deletions=[V],Y.flags|=16):j.push(V)}}function r(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Xi(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,j){return Y.index=j,t?(j=Y.alternate,j!==null?(j=j.index,j<V?(Y.flags|=67108866,V):j):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,j,he){return V===null||V.tag!==6?(V=gc(j,Y.mode,he),V.return=Y,V):(V=c(V,j),V.return=Y,V)}function B(Y,V,j,he){var ke=j.type;return ke===M?fe(Y,V,j.props.children,he,j.key):V!==null&&(V.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Z&&Lm(ke)===V.type)?(V=c(V,j.props),co(V,j),V.return=Y,V):(V=pl(j.type,j.key,j.props,null,Y.mode,he),co(V,j),V.return=Y,V)}function $(Y,V,j,he){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=vc(j,Y.mode,he),V.return=Y,V):(V=c(V,j.children||[]),V.return=Y,V)}function fe(Y,V,j,he,ke){return V===null||V.tag!==7?(V=nr(j,Y.mode,he,ke),V.return=Y,V):(V=c(V,j),V.return=Y,V)}function ve(Y,V,j){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gc(""+V,Y.mode,j),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return j=pl(V.type,V.key,V.props,null,Y.mode,j),co(j,V),j.return=Y,j;case y:return V=vc(V,Y.mode,j),V.return=Y,V;case Z:var he=V._init;return V=he(V._payload),ve(Y,V,j)}if(Q(V)||ne(V))return V=nr(V,Y.mode,j,null),V.return=Y,V;if(typeof V.then=="function")return ve(Y,Ul(V),j);if(V.$$typeof===L)return ve(Y,_l(Y,V),j);Ll(Y,V)}return null}function ie(Y,V,j,he){var ke=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ke!==null?null:b(Y,V,""+j,he);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return j.key===ke?B(Y,V,j,he):null;case y:return j.key===ke?$(Y,V,j,he):null;case Z:return ke=j._init,j=ke(j._payload),ie(Y,V,j,he)}if(Q(j)||ne(j))return ke!==null?null:fe(Y,V,j,he,null);if(typeof j.then=="function")return ie(Y,V,Ul(j),he);if(j.$$typeof===L)return ie(Y,V,_l(Y,j),he);Ll(Y,j)}return null}function ae(Y,V,j,he,ke){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return Y=Y.get(j)||null,b(V,Y,""+he,ke);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case x:return Y=Y.get(he.key===null?j:he.key)||null,B(V,Y,he,ke);case y:return Y=Y.get(he.key===null?j:he.key)||null,$(V,Y,he,ke);case Z:var gt=he._init;return he=gt(he._payload),ae(Y,V,j,he,ke)}if(Q(he)||ne(he))return Y=Y.get(j)||null,fe(V,Y,he,ke,null);if(typeof he.then=="function")return ae(Y,V,j,Ul(he),ke);if(he.$$typeof===L)return ae(Y,V,j,_l(V,he),ke);Ll(V,he)}return null}function rt(Y,V,j,he){for(var ke=null,gt=null,Ke=V,it=V=0,yn=null;Ke!==null&&it<j.length;it++){Ke.index>it?(yn=Ke,Ke=null):yn=Ke.sibling;var At=ie(Y,Ke,j[it],he);if(At===null){Ke===null&&(Ke=yn);break}t&&Ke&&At.alternate===null&&n(Y,Ke),V=h(At,V,it),gt===null?ke=At:gt.sibling=At,gt=At,Ke=yn}if(it===j.length)return r(Y,Ke),wt&&ar(Y,it),ke;if(Ke===null){for(;it<j.length;it++)Ke=ve(Y,j[it],he),Ke!==null&&(V=h(Ke,V,it),gt===null?ke=Ke:gt.sibling=Ke,gt=Ke);return wt&&ar(Y,it),ke}for(Ke=o(Ke);it<j.length;it++)yn=ae(Ke,Y,it,j[it],he),yn!==null&&(t&&yn.alternate!==null&&Ke.delete(yn.key===null?it:yn.key),V=h(yn,V,it),gt===null?ke=yn:gt.sibling=yn,gt=yn);return t&&Ke.forEach(function(za){return n(Y,za)}),wt&&ar(Y,it),ke}function tt(Y,V,j,he){if(j==null)throw Error(s(151));for(var ke=null,gt=null,Ke=V,it=V=0,yn=null,At=j.next();Ke!==null&&!At.done;it++,At=j.next()){Ke.index>it?(yn=Ke,Ke=null):yn=Ke.sibling;var za=ie(Y,Ke,At.value,he);if(za===null){Ke===null&&(Ke=yn);break}t&&Ke&&za.alternate===null&&n(Y,Ke),V=h(za,V,it),gt===null?ke=za:gt.sibling=za,gt=za,Ke=yn}if(At.done)return r(Y,Ke),wt&&ar(Y,it),ke;if(Ke===null){for(;!At.done;it++,At=j.next())At=ve(Y,At.value,he),At!==null&&(V=h(At,V,it),gt===null?ke=At:gt.sibling=At,gt=At);return wt&&ar(Y,it),ke}for(Ke=o(Ke);!At.done;it++,At=j.next())At=ae(Ke,Y,it,At.value,he),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?it:At.key),V=h(At,V,it),gt===null?ke=At:gt.sibling=At,gt=At);return t&&Ke.forEach(function(PS){return n(Y,PS)}),wt&&ar(Y,it),ke}function Ft(Y,V,j,he){if(typeof j=="object"&&j!==null&&j.type===M&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case x:e:{for(var ke=j.key;V!==null;){if(V.key===ke){if(ke=j.type,ke===M){if(V.tag===7){r(Y,V.sibling),he=c(V,j.props.children),he.return=Y,Y=he;break e}}else if(V.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Z&&Lm(ke)===V.type){r(Y,V.sibling),he=c(V,j.props),co(he,j),he.return=Y,Y=he;break e}r(Y,V);break}else n(Y,V);V=V.sibling}j.type===M?(he=nr(j.props.children,Y.mode,he,j.key),he.return=Y,Y=he):(he=pl(j.type,j.key,j.props,null,Y.mode,he),co(he,j),he.return=Y,Y=he)}return E(Y);case y:e:{for(ke=j.key;V!==null;){if(V.key===ke)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){r(Y,V.sibling),he=c(V,j.children||[]),he.return=Y,Y=he;break e}else{r(Y,V);break}else n(Y,V);V=V.sibling}he=vc(j,Y.mode,he),he.return=Y,Y=he}return E(Y);case Z:return ke=j._init,j=ke(j._payload),Ft(Y,V,j,he)}if(Q(j))return rt(Y,V,j,he);if(ne(j)){if(ke=ne(j),typeof ke!="function")throw Error(s(150));return j=ke.call(j),tt(Y,V,j,he)}if(typeof j.then=="function")return Ft(Y,V,Ul(j),he);if(j.$$typeof===L)return Ft(Y,V,_l(Y,j),he);Ll(Y,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,V!==null&&V.tag===6?(r(Y,V.sibling),he=c(V,j),he.return=Y,Y=he):(r(Y,V),he=gc(j,Y.mode,he),he.return=Y,Y=he),E(Y)):r(Y,V)}return function(Y,V,j,he){try{uo=0;var ke=Ft(Y,V,j,he);return jr=null,ke}catch(Ke){if(Ke===eo||Ke===Sl)throw Ke;var gt=Zn(29,Ke,null,Y.mode);return gt.lanes=he,gt.return=Y,gt}finally{}}}var Qr=Nm(!0),Om=Nm(!1),ui=J(null),Li=null;function Ta(t){var n=t.alternate;ye(dn,dn.current&1),ye(ui,t),Li===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(Li=t)}function Pm(t){if(t.tag===22){if(ye(dn,dn.current),ye(ui,t),Li===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Li=t)}}else ba()}function ba(){ye(dn,dn.current),ye(ui,ui.current)}function ji(t){Se(ui),Li===t&&(Li=null),Se(dn)}var dn=J(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Hf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function jc(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Qc={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=Jn(),c=ya(o);c.payload=n,r!=null&&(c.callback=r),n=Ea(t,c,o),n!==null&&($n(n,t,o),no(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=Jn(),c=ya(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=Ea(t,c,o),n!==null&&($n(n,t,o),no(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=Jn(),o=ya(r);o.tag=2,n!=null&&(o.callback=n),n=Ea(t,o,r),n!==null&&($n(n,t,r),no(n,t,r))}};function Bm(t,n,r,o,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!qs(r,o)||!qs(c,h):!0}function Im(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Qc.enqueueReplaceState(n,n.state,null)}function fr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Fm(t){Ol(t)}function zm(t){console.error(t)}function Hm(t){Ol(t)}function Pl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Jc(t,n,r){return r=ya(r),r.tag=3,r.payload={element:null},r.callback=function(){Pl(t,n)},r}function Vm(t){return t=ya(t),t.tag=3,t}function km(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){Gm(n,r,o)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Gm(n,r,o),typeof c!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Px(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Qs(n,r,c,!0),r=ui.current,r!==null){switch(r.tag){case 13:return Li===null?Mf():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===Rc?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),bf(t,o,c)),!1;case 22:return r.flags|=65536,o===Rc?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),bf(t,o,c)),!1}throw Error(s(435,r.tag))}return bf(t,o,c),Mf(),!1}if(wt)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Sc&&(t=Error(s(422),{cause:o}),js(ri(t,r)))):(o!==Sc&&(n=Error(s(423),{cause:o}),js(ri(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ri(o,r),c=Jc(t.stateNode,o,c),Dc(t,c),en!==4&&(en=2)),!1;var h=Error(s(520),{cause:o});if(h=ri(h,r),_o===null?_o=[h]:_o.push(h),en!==4&&(en=2),n===null)return!0;o=ri(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Jc(r.stateNode,o,t),Dc(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ua===null||!Ua.has(h))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Vm(c),km(c,t,r,o),Dc(r,c),!1}r=r.return}while(r!==null);return!1}var Xm=Error(s(461)),xn=!1;function An(t,n,r,o){n.child=t===null?Om(n,null,r,o):Qr(n,t.child,r,o)}function Wm(t,n,r,o,c){r=r.render;var h=n.ref;if("ref"in o){var E={};for(var b in o)b!=="ref"&&(E[b]=o[b])}else E=o;return lr(n),o=Pc(t,n,r,E,h,c),b=Bc(),t!==null&&!xn?(Ic(t,n,c),Qi(t,n,c)):(wt&&b&&_c(n),n.flags|=1,An(t,n,o,c),n.child)}function qm(t,n,r,o,c){if(t===null){var h=r.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,Ym(t,n,h,o,c)):(t=pl(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!of(t,c)){var E=h.memoizedProps;if(r=r.compare,r=r!==null?r:qs,r(E,o)&&t.ref===n.ref)return Qi(t,n,c)}return n.flags|=1,t=Xi(h,o),t.ref=n.ref,t.return=n,n.child=t}function Ym(t,n,r,o,c){if(t!==null){var h=t.memoizedProps;if(qs(h,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=h,of(t,c))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,Qi(t,n,c)}return $c(t,n,r,o,c)}function Zm(t,n,r){var o=n.pendingProps,c=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|r:r,t!==null){for(c=n.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Km(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,h!==null?h.cachePool:null),h!==null?Yp(n,h):Lc(),Pm(n);else return n.lanes=n.childLanes=536870912,Km(t,n,h!==null?h.baseLanes|r:r,r)}else h!==null?(xl(n,h.cachePool),Yp(n,h),ba(),n.memoizedState=null):(t!==null&&xl(n,null),Lc(),ba());return An(t,n,c,r),n.child}function Km(t,n,r,o){var c=Ac();return c=c===null?null:{parent:hn._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&xl(n,null),Lc(),Pm(n),t!==null&&Qs(t,n,o,!0),null}function Bl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function $c(t,n,r,o,c){return lr(n),r=Pc(t,n,r,o,void 0,c),o=Bc(),t!==null&&!xn?(Ic(t,n,c),Qi(t,n,c)):(wt&&o&&_c(n),n.flags|=1,An(t,n,r,c),n.child)}function jm(t,n,r,o,c,h){return lr(n),n.updateQueue=null,r=Kp(n,o,r,c),Zp(t),o=Bc(),t!==null&&!xn?(Ic(t,n,h),Qi(t,n,h)):(wt&&o&&_c(n),n.flags|=1,An(t,n,r,h),n.child)}function Qm(t,n,r,o,c){if(lr(n),n.stateNode===null){var h=Gr,E=r.contextType;typeof E=="object"&&E!==null&&(h=Ln(E)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Qc,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Cc(n),E=r.contextType,h.context=typeof E=="object"&&E!==null?Ln(E):Gr,h.state=n.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(jc(n,r,E,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&Qc.enqueueReplaceState(h,h.state,null),ao(n,o,h,c),io(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var b=n.memoizedProps,B=fr(r,b);h.props=B;var $=h.context,fe=r.contextType;E=Gr,typeof fe=="object"&&fe!==null&&(E=Ln(fe));var ve=r.getDerivedStateFromProps;fe=typeof ve=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,fe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||$!==E)&&Im(n,h,o,E),Sa=!1;var ie=n.memoizedState;h.state=ie,ao(n,o,h,c),io(),$=n.memoizedState,b||ie!==$||Sa?(typeof ve=="function"&&(jc(n,r,ve,o),$=n.memoizedState),(B=Sa||Bm(n,r,B,o,ie,$,E))?(fe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=E,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,wc(t,n),E=n.memoizedProps,fe=fr(r,E),h.props=fe,ve=n.pendingProps,ie=h.context,$=r.contextType,B=Gr,typeof $=="object"&&$!==null&&(B=Ln($)),b=r.getDerivedStateFromProps,($=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==ve||ie!==B)&&Im(n,h,o,B),Sa=!1,ie=n.memoizedState,h.state=ie,ao(n,o,h,c),io();var ae=n.memoizedState;E!==ve||ie!==ae||Sa||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof b=="function"&&(jc(n,r,b,o),ae=n.memoizedState),(fe=Sa||Bm(n,r,fe,o,ie,ae,B)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ae,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ae,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ae),h.props=o,h.state=ae,h.context=B,o=fe):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Bl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Qr(n,t.child,null,c),n.child=Qr(n,null,r,c)):An(t,n,r,c),n.memoizedState=h.state,t=n.child):t=Qi(t,n,c),t}function Jm(t,n,r,o){return Ks(),n.flags|=256,An(t,n,r,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(t){return{baseLanes:t,cachePool:zp()}}function nf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ci),t}function $m(t,n,r){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(c?Ta(n):ba(),wt){var b=$t,B;if(B=b){e:{for(B=b,b=Ui;B.nodeType!==8;){if(!b){b=null;break e}if(B=Si(B.nextSibling),B===null){b=null;break e}}b=B}b!==null?(n.memoizedState={dehydrated:b,treeContext:ir!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},B=Zn(18,null,null,0),B.stateNode=b,B.return=n,n.child=B,zn=n,$t=null,B=!0):B=!1}B||sr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Hf(b)?n.lanes=32:n.lanes=536870912,null;ji(n)}return b=o.children,o=o.fallback,c?(ba(),c=n.mode,b=Il({mode:"hidden",children:b},c),o=nr(o,c,r,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=tf(r),c.childLanes=nf(t,E,r),n.memoizedState=ef,o):(Ta(n),af(n,b))}if(B=t.memoizedState,B!==null&&(b=B.dehydrated,b!==null)){if(h)n.flags&256?(Ta(n),n.flags&=-257,n=rf(t,n,r)):n.memoizedState!==null?(ba(),n.child=t.child,n.flags|=128,n=null):(ba(),c=o.fallback,b=n.mode,o=Il({mode:"visible",children:o.children},b),c=nr(c,b,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Qr(n,t.child,null,r),o=n.child,o.memoizedState=tf(r),o.childLanes=nf(t,E,r),n.memoizedState=ef,n=c);else if(Ta(n),Hf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(s(419)),o.stack="",o.digest=E,js({value:o,source:null,stack:null}),n=rf(t,n,r)}else if(xn||Qs(t,n,r,!1),E=(r&t.childLanes)!==0,xn||E){if(E=kt,E!==null&&(o=r&-r,o=(o&42)!==0?1:ot(o),o=(o&(E.suspendedLanes|r))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,Hr(t,o),$n(E,t,o),Xm;b.data==="$?"||Mf(),n=rf(t,n,r)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,$t=Si(b.nextSibling),zn=n,wt=!0,rr=null,Ui=!1,t!==null&&(oi[li++]=Wi,oi[li++]=qi,oi[li++]=ir,Wi=t.id,qi=t.overflow,ir=n),n=af(n,o.children),n.flags|=4096);return n}return c?(ba(),c=o.fallback,b=n.mode,B=t.child,$=B.sibling,o=Xi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?c=Xi($,c):(c=nr(c,b,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=t.child.memoizedState,b===null?b=tf(r):(B=b.cachePool,B!==null?($=hn._currentValue,B=B.parent!==$?{parent:$,pool:$}:B):B=zp(),b={baseLanes:b.baseLanes|r,cachePool:B}),c.memoizedState=b,c.childLanes=nf(t,E,r),n.memoizedState=ef,o):(Ta(n),r=t.child,t=r.sibling,r=Xi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=r,n.memoizedState=null,r)}function af(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=Zn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function rf(t,n,r){return Qr(n,t.child,null,r),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ec(t.return,n,r)}function sf(t,n,r,o,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=r,h.tailMode=c)}function tg(t,n,r){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(An(t,n,o.children,r),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,r,n);else if(t.tag===19)eg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(dn,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&Nl(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),sf(n,!1,c,r,h);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}sf(n,!0,r,null,h);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qi(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Da|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Qs(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Xi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Xi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Bx(t,n,r){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),xa(n,hn,t.memoizedState.cache),Ks();break;case 27:case 5:He(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(r&n.child.childLanes)!==0?$m(t,n,r):(Ta(n),t=Qi(t,n,r),t!==null?t.sibling:null);Ta(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Qs(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return tg(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,Zm(t,n,r);case 24:xa(n,hn,t.memoizedState.cache)}return Qi(t,n,r)}function ng(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!of(t,r)&&(n.flags&128)===0)return xn=!1,Bx(t,n,r);xn=(t.flags&131072)!==0}else xn=!1,wt&&(n.flags&1048576)!==0&&Lp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")mc(o)?(t=fr(o,t),n.tag=1,n=Qm(null,n,o,t,r)):(n.tag=0,n=$c(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===D){n.tag=11,n=Wm(null,n,o,t,r);break e}else if(c===z){n.tag=14,n=qm(null,n,o,t,r);break e}}throw n=pe(o)||o,Error(s(306,n,""))}}return n;case 0:return $c(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=fr(o,n.pendingProps),Qm(t,n,o,c,r);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,wc(t,n),ao(n,o,null,r);var E=n.memoizedState;if(o=E.cache,xa(n,hn,o),o!==h.cache&&Mc(n,[hn],r,!0),io(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jm(t,n,o,r);break e}else if(o!==c){c=ri(Error(s(424)),n),js(c),n=Jm(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Si(t.firstChild),zn=n,wt=!0,rr=null,Ui=!0,r=Om(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ks(),o===c){n=Qi(t,n,r);break e}An(t,n,o,r)}n=n.child}return n;case 26:return Bl(t,n),t===null?(r=sv(n.type,null,n.pendingProps,null))?n.memoizedState=r:wt||(r=n.type,t=n.pendingProps,o=Ql(ee.current).createElement(r),o[fn]=n,o[Qt]=t,Cn(o,r,t),sn(o),n.stateNode=o):n.memoizedState=sv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&wt&&(o=n.stateNode=iv(n.type,n.pendingProps,ee.current),zn=n,Ui=!0,c=$t,Oa(n.type)?(Gf=c,$t=Si(o.firstChild)):$t=c),An(t,n,n.pendingProps.children,r),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((c=o=$t)&&(o=cS(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,zn=n,$t=Si(o.firstChild),Ui=!1,c=!0):c=!1),c||sr(n)),He(n),c=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,If(c,h)?o=null:E!==null&&If(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=Pc(t,n,Cx,null,null,r),Ro._currentValue=c),Bl(t,n),An(t,n,o,r),n.child;case 6:return t===null&&wt&&((t=r=$t)&&(r=fS(r,n.pendingProps,Ui),r!==null?(n.stateNode=r,zn=n,$t=null,t=!0):t=!1),t||sr(n)),null;case 13:return $m(t,n,r);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Qr(n,null,o,r):An(t,n,o,r),n.child;case 11:return Wm(t,n,n.type,n.pendingProps,r);case 7:return An(t,n,n.pendingProps,r),n.child;case 8:return An(t,n,n.pendingProps.children,r),n.child;case 12:return An(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),An(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,lr(n),c=Ln(c),o=o(c),n.flags|=1,An(t,n,o,r),n.child;case 14:return qm(t,n,n.type,n.pendingProps,r);case 15:return Ym(t,n,n.type,n.pendingProps,r);case 19:return tg(t,n,r);case 31:return o=n.pendingProps,r=n.mode,o={mode:o.mode,children:o.children},t===null?(r=Il(o,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=Xi(t.child,o),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return Zm(t,n,r);case 24:return lr(n),o=Ln(hn),t===null?(c=Ac(),c===null&&(c=kt,h=Tc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=r),c=h),n.memoizedState={parent:o,cache:c},Cc(n),xa(n,hn,c)):((t.lanes&r)!==0&&(wc(t,n),ao(n,null,null,r),io()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),xa(n,hn,o)):(o=h.cache,xa(n,hn,o),o!==c.cache&&Mc(n,[hn],r,!0))),An(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(t){t.flags|=4}function ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fv(n)){if(n=ui.current,n!==null&&((Mt&4194048)===Mt?Li!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Li))throw to=Rc,Hp;t.flags|=8192}}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,ts|=n)}function fo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Ix(t,n,r){var o=n.pendingProps;switch(xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(hn),Ie(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pp())),Kt(n),null;case 26:return r=n.memoizedState,t===null?(Ji(n),r!==null?(Kt(n),ig(n,r)):(Kt(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Ji(n),Kt(n),ig(n,r)):(Kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Ji(n),Kt(n),n.flags&=-16777217),null;case 27:lt(n),r=ee.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=De.current,Zs(n)?Np(n):(t=iv(c,o,r),n.stateNode=t,Ji(n))}return Kt(n),null;case 5:if(lt(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(t=De.current,Zs(n))Np(n);else{switch(c=Ql(ee.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[fn]=n,t[Qt]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Cn(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ji(n)}}return Kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ee.current,Zs(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=zn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[fn]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||jg(t.nodeValue,r)),t||sr(n)}else t=Ql(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Zs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[fn]=n}else Ks(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=Pp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Fl(n,n.updateQueue),Kt(n),null;case 4:return Ie(),t===null&&Lf(n.stateNode.containerInfo),Kt(n),null;case 10:return Zi(n.type),Kt(n),null;case 19:if(Se(dn),c=n.memoizedState,c===null)return Kt(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)fo(c,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Nl(t),h!==null){for(n.flags|=128,fo(c,!1),t=h.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Up(r,t),r=r.sibling;return ye(dn,dn.current&1|2),n.child}t=t.sibling}c.tail!==null&&Ee()>Gl&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Nl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!wt)return Kt(n),null}else 2*Ee()-c.renderingStartTime>Gl&&r!==536870912&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ee(),n.sibling=null,t=dn.current,ye(dn,o?t&1|2:t&1),n):(Kt(n),null);case 22:case 23:return ji(n),Nc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),r=n.updateQueue,r!==null&&Fl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&Se(ur),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Zi(hn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fx(t,n){switch(xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(hn),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 13:if(ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ks()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Se(dn),null;case 4:return Ie(),null;case 10:return Zi(n.type),null;case 22:case 23:return ji(n),Nc(),t!==null&&Se(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(hn),null;case 25:return null;default:return null}}function ag(t,n){switch(xc(n),n.tag){case 3:Zi(hn),Ie();break;case 26:case 27:case 5:lt(n);break;case 4:Ie();break;case 13:ji(n);break;case 19:Se(dn);break;case 10:Zi(n.type);break;case 22:case 23:ji(n),Nc(),t!==null&&Se(ur);break;case 24:Zi(hn)}}function ho(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var h=r.create,E=r.inst;o=h(),E.destroy=o}r=r.next}while(r!==c)}}catch(b){Vt(n,n.return,b)}}function Aa(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var E=o.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,c=n;var B=r,$=b;try{$()}catch(fe){Vt(c,B,fe)}}}o=o.next}while(o!==h)}}catch(fe){Vt(n,n.return,fe)}}function rg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{qp(n,r)}catch(o){Vt(t,t.return,o)}}}function sg(t,n,r){r.props=fr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Vt(t,n,o)}}function po(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(c){Vt(t,n,c)}}function Ni(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Vt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Vt(t,n,c)}else r.current=null}function og(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Vt(t,t.return,c)}}function lf(t,n,r){try{var o=t.stateNode;rS(o,t.type,r,n),o[Qt]=n}catch(c){Vt(t,t.return,c)}}function lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=jl));else if(o!==4&&(o===27&&Oa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(cf(t,n,r),t=t.sibling;t!==null;)cf(t,n,r),t=t.sibling}function zl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(zl(t,n,r),t=t.sibling;t!==null;)zl(t,n,r),t=t.sibling}function ug(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,r),n[fn]=t,n[Qt]=r}catch(h){Vt(t,t.return,h)}}var $i=!1,nn=!1,ff=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function zx(t,n){if(t=t.containerInfo,Pf=iu,t=yp(t),lc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var E=0,b=-1,B=-1,$=0,fe=0,ve=t,ie=null;t:for(;;){for(var ae;ve!==r||c!==0&&ve.nodeType!==3||(b=E+c),ve!==h||o!==0&&ve.nodeType!==3||(B=E+o),ve.nodeType===3&&(E+=ve.nodeValue.length),(ae=ve.firstChild)!==null;)ie=ve,ve=ae;for(;;){if(ve===t)break t;if(ie===r&&++$===c&&(b=E),ie===h&&++fe===o&&(B=E),(ae=ve.nextSibling)!==null)break;ve=ie,ie=ve.parentNode}ve=ae}r=b===-1||B===-1?null:{start:b,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bf={focusedElem:t,selectionRange:r},iu=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,c=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var rt=fr(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(rt,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Vt(r,r.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)zf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function fg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(t,r),o&4&&ho(5,r);break;case 1:if(Ra(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){Vt(r,r.return,E)}else{var c=fr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Vt(r,r.return,E)}}o&64&&rg(r),o&512&&po(r,r.return);break;case 3:if(Ra(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{qp(t,n)}catch(E){Vt(r,r.return,E)}}break;case 27:n===null&&o&4&&ug(r);case 26:case 5:Ra(t,r),n===null&&o&4&&og(r),o&512&&po(r,r.return);break;case 12:Ra(t,r);break;case 13:Ra(t,r),o&4&&pg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Zx.bind(null,r),hS(t,r))));break;case 22:if(o=r.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||nn,c=$i;var h=nn;$i=o,(nn=n)&&!h?Ca(t,r,(r.subtreeFlags&8772)!==0):Ra(t,r),$i=c,nn=h}break;case 30:break;default:Ra(t,r)}}function hg(t){var n=t.alternate;n!==null&&(t.alternate=null,hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Lr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Yt=null,Xn=!1;function ea(t,n,r){for(r=r.child;r!==null;)dg(t,n,r),r=r.sibling}function dg(t,n,r){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(ce,r)}catch{}switch(r.tag){case 26:nn||Ni(r,n),ea(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:nn||Ni(r,n);var o=Yt,c=Xn;Oa(r.type)&&(Yt=r.stateNode,Xn=!1),ea(t,n,r),Mo(r.stateNode),Yt=o,Xn=c;break;case 5:nn||Ni(r,n);case 6:if(o=Yt,c=Xn,Yt=null,ea(t,n,r),Yt=o,Xn=c,Yt!==null)if(Xn)try{(Yt.nodeType===9?Yt.body:Yt.nodeName==="HTML"?Yt.ownerDocument.body:Yt).removeChild(r.stateNode)}catch(h){Vt(r,n,h)}else try{Yt.removeChild(r.stateNode)}catch(h){Vt(r,n,h)}break;case 18:Yt!==null&&(Xn?(t=Yt,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Uo(t)):tv(Yt,r.stateNode));break;case 4:o=Yt,c=Xn,Yt=r.stateNode.containerInfo,Xn=!0,ea(t,n,r),Yt=o,Xn=c;break;case 0:case 11:case 14:case 15:nn||Aa(2,r,n),nn||Aa(4,r,n),ea(t,n,r);break;case 1:nn||(Ni(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&sg(r,n,o)),ea(t,n,r);break;case 21:ea(t,n,r);break;case 22:nn=(o=nn)||r.memoizedState!==null,ea(t,n,r),nn=o;break;default:ea(t,n,r)}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(r){Vt(n,n.return,r)}}function Hx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new cg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new cg),n;default:throw Error(s(435,t.tag))}}function hf(t,n){var r=Hx(t);n.forEach(function(o){var c=Kx.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function Kn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],h=t,E=n,b=E;e:for(;b!==null;){switch(b.tag){case 27:if(Oa(b.type)){Yt=b.stateNode,Xn=!1;break e}break;case 5:Yt=b.stateNode,Xn=!1;break e;case 3:case 4:Yt=b.stateNode.containerInfo,Xn=!0;break e}b=b.return}if(Yt===null)throw Error(s(160));dg(h,E,c),Yt=null,Xn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)mg(n,t),n=n.sibling}var xi=null;function mg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),jn(t),o&4&&(Aa(3,t,t.return),ho(3,t),Aa(5,t,t.return));break;case 1:Kn(n,t),jn(t),o&512&&(nn||r===null||Ni(r,r.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=xi;if(Kn(n,t),jn(t),o&512&&(nn||r===null||Ni(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Di]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Cn(h,o,r),h[fn]=t,sn(h),o=h;break e;case"link":var E=uv("link","href",c).get(o+(r.href||""));if(E){for(var b=0;b<E.length;b++)if(h=E[b],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(b,1);break t}}h=c.createElement(o),Cn(h,o,r),c.head.appendChild(h);break;case"meta":if(E=uv("meta","content",c).get(o+(r.content||""))){for(b=0;b<E.length;b++)if(h=E[b],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(b,1);break t}}h=c.createElement(o),Cn(h,o,r),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[fn]=t,sn(h),o=h}t.stateNode=o}else cv(c,t.type,t.stateNode);else t.stateNode=lv(c,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?cv(c,t.type,t.stateNode):lv(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&lf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Kn(n,t),jn(t),o&512&&(nn||r===null||Ni(r,r.return)),r!==null&&o&4&&lf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Kn(n,t),jn(t),o&512&&(nn||r===null||Ni(r,r.return)),t.flags&32){c=t.stateNode;try{Gn(c,"")}catch(ae){Vt(t,t.return,ae)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,lf(t,c,r!==null?r.memoizedProps:c)),o&1024&&(ff=!0);break;case 6:if(Kn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ae){Vt(t,t.return,ae)}}break;case 3:if(eu=null,c=xi,xi=Jl(n.containerInfo),Kn(n,t),xi=c,jn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ae){Vt(t,t.return,ae)}ff&&(ff=!1,gg(t));break;case 4:o=xi,xi=Jl(t.stateNode.containerInfo),Kn(n,t),jn(t),xi=o;break;case 12:Kn(n,t),jn(t);break;case 13:Kn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(_f=Ee()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hf(t,o)));break;case 22:c=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,$=$i,fe=nn;if($i=$||c,nn=fe||B,Kn(n,t),nn=fe,$i=$,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(r===null||B||$i||nn||hr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(h=B.stateNode,c)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=B.stateNode;var ve=B.memoizedProps.style,ie=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;b.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Vt(B,B.return,ae)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ae){Vt(B,B.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,hf(t,r))));break;case 19:Kn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hf(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(lg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var c=r.stateNode,h=uf(t);zl(t,h,c);break;case 5:var E=r.stateNode;r.flags&32&&(Gn(E,""),r.flags&=-33);var b=uf(t);zl(t,b,E);break;case 3:case 4:var B=r.stateNode.containerInfo,$=uf(t);cf(t,$,B);break;default:throw Error(s(161))}}catch(fe){Vt(t,t.return,fe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(t,n.alternate,n),n=n.sibling}function hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hr(n);break;case 1:Ni(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&sg(n,n.return,r),hr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ni(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}t=t.sibling}}function Ca(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:Ca(c,h,r),ho(4,h);break;case 1:if(Ca(c,h,r),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Vt(o,o.return,$)}if(o=h,c=o.updateQueue,c!==null){var b=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Wp(B[c],b)}catch($){Vt(o,o.return,$)}}r&&E&64&&rg(h),po(h,h.return);break;case 27:ug(h);case 26:case 5:Ca(c,h,r),r&&o===null&&E&4&&og(h),po(h,h.return);break;case 12:Ca(c,h,r);break;case 13:Ca(c,h,r),r&&E&4&&pg(c,h);break;case 22:h.memoizedState===null&&Ca(c,h,r),po(h,h.return);break;case 30:break;default:Ca(c,h,r)}n=n.sibling}}function df(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Js(r))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function Oi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vg(t,n,r,o),n=n.sibling}function vg(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,r,o),c&2048&&ho(9,n);break;case 1:Oi(t,n,r,o);break;case 3:Oi(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){Oi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,b=h.onPostCommit;typeof b=="function"&&b(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Vt(n,n.return,B)}}else Oi(t,n,r,o);break;case 13:Oi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?Oi(t,n,r,o):mo(t,n):h._visibility&2?Oi(t,n,r,o):(h._visibility|=2,Jr(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&df(E,n);break;case 24:Oi(t,n,r,o),c&2048&&pf(n.alternate,n);break;default:Oi(t,n,r,o)}}function Jr(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,b=r,B=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:Jr(h,E,b,B,c),ho(8,E);break;case 23:break;case 22:var fe=E.stateNode;E.memoizedState!==null?fe._visibility&2?Jr(h,E,b,B,c):mo(h,E):(fe._visibility|=2,Jr(h,E,b,B,c)),c&&$&2048&&df(E.alternate,E);break;case 24:Jr(h,E,b,B,c),c&&$&2048&&pf(E.alternate,E);break;default:Jr(h,E,b,B,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:mo(r,o),c&2048&&df(o.alternate,o);break;case 24:mo(r,o),c&2048&&pf(o.alternate,o);break;default:mo(r,o)}n=n.sibling}}var go=8192;function $r(t){if(t.subtreeFlags&go)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 26:$r(t),t.flags&go&&t.memoizedState!==null&&bS(xi,t.memoizedState,t.memoizedProps);break;case 5:$r(t);break;case 3:case 4:var n=xi;xi=Jl(t.stateNode.containerInfo),$r(t),xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,$r(t),go=n):$r(t));break;default:$r(t)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,yg(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sg(t),t=t.sibling}function Sg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):vo(t);break;default:vo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,yg(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Hl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function yg(t,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:Aa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var c=o.sibling,h=o.return;if(hg(o),o===r){Sn=null;break e}if(c!==null){c.return=h,Sn=c;break e}Sn=h}}}var Gx={getCacheForType:function(t){var n=Ln(hn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},Vx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,kt=null,xt=null,Mt=0,Ot=0,Qn=null,wa=!1,es=!1,mf=!1,ta=0,en=0,Da=0,dr=0,gf=0,ci=0,ts=0,_o=null,Wn=null,vf=!1,_f=0,Gl=1/0,Vl=null,Ua=null,Rn=0,La=null,ns=null,is=0,xf=0,Sf=null,Eg=null,xo=0,yf=null;function Jn(){if((Nt&2)!==0&&Mt!==0)return Mt&-Mt;if(P.T!==null){var t=Xr;return t!==0?t:Cf()}return Tt()}function Mg(){ci===0&&(ci=(Mt&536870912)===0||wt?X():536870912);var t=ui.current;return t!==null&&(t.flags|=32),ci}function $n(t,n,r){(t===kt&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)&&(as(t,0),Na(t,Mt,ci,!1)),ze(t,r),((Nt&2)===0||t!==kt)&&(t===kt&&((Nt&2)===0&&(dr|=r),en===4&&Na(t,Mt,ci,!1)),Pi(t))}function Tg(t,n,r){if((Nt&6)!==0)throw Error(s(327));var o=!r&&(n&124)===0&&(n&t.expiredLanes)===0||Ue(t,n),c=o?Wx(t,n):Tf(t,n,!0),h=o;do{if(c===0){es&&!o&&Na(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!kx(r)){c=Tf(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var b=t;c=_o;var B=b.current.memoizedState.isDehydrated;if(B&&(as(b,E).flags|=256),E=Tf(b,E,!1),E!==2){if(mf&&!B){b.errorRecoveryDisabledLanes|=h,dr|=h,c=4;break e}h=Wn,Wn=c,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}c=E}if(h=!1,c!==2)continue}}if(c===1){as(t,0),Na(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,ci,!wa);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=_f+300-Ee(),10<c)){if(Na(o,n,ci,!wa),We(o,0,!0)!==0)break e;o.timeoutHandle=$g(bg.bind(null,o,r,Wn,Vl,vf,n,ci,dr,ts,wa,h,2,-0,0),c);break e}bg(o,r,Wn,Vl,vf,n,ci,dr,ts,wa,h,0,-0,0)}}break}while(!0);Pi(t)}function bg(t,n,r,o,c,h,E,b,B,$,fe,ve,ie,ae){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:TS},_g(n),ve=AS(),ve!==null)){t.cancelPendingCommit=ve(Lg.bind(null,t,n,h,r,o,c,E,b,B,fe,1,ie,ae)),Na(t,h,E,!$);return}Lg(t,n,h,r,o,c,E,b,B)}function kx(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],h=c.getSnapshot;c=c.value;try{if(!Yn(h(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(t,n,r,o){n&=~gf,n&=~dr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Fe(c),E=1<<h;o[h]=-1,c&=~E}r!==0&&_e(t,r,n)}function kl(){return(Nt&6)===0?(So(0),!1):!0}function Ef(){if(xt!==null){if(Ot===0)var t=xt.return;else t=xt,Yi=or=null,Fc(t),jr=null,uo=0,t=xt;for(;t!==null;)ag(t.alternate,t),t=t.return;xt=null}}function as(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,oS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ef(),kt=t,xt=r=Xi(t.current,null),Mt=n,Ot=0,Qn=null,wa=!1,es=Ue(t,n),mf=!1,ts=ci=gf=dr=Da=en=0,Wn=_o=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Fe(o),h=1<<c;n|=t[c],o&=~h}return ta=n,fl(),r}function Ag(t,n){mt=null,P.H=Dl,n===eo||n===Sl?(n=kp(),Ot=3):n===Hp?(n=kp(),Ot=4):Ot=n===Xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,xt===null&&(en=1,Pl(t,ri(n,t.current)))}function Rg(){var t=P.H;return P.H=Dl,t===null?Dl:t}function Cg(){var t=P.A;return P.A=Gx,t}function Mf(){en=4,wa||(Mt&4194048)!==Mt&&ui.current!==null||(es=!0),(Da&134217727)===0&&(dr&134217727)===0||kt===null||Na(kt,Mt,ci,!1)}function Tf(t,n,r){var o=Nt;Nt|=2;var c=Rg(),h=Cg();(kt!==t||Mt!==n)&&(Vl=null,as(t,n)),n=!1;var E=en;e:do try{if(Ot!==0&&xt!==null){var b=xt,B=Qn;switch(Ot){case 8:Ef(),E=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var $=Ot;if(Ot=0,Qn=null,rs(t,b,B,$),r&&es){E=0;break e}break;default:$=Ot,Ot=0,Qn=null,rs(t,b,B,$)}}Xx(),E=en;break}catch(fe){Ag(t,fe)}while(!0);return n&&t.shellSuspendCounter++,Yi=or=null,Nt=o,P.H=c,P.A=h,xt===null&&(kt=null,Mt=0,fl()),E}function Xx(){for(;xt!==null;)wg(xt)}function Wx(t,n){var r=Nt;Nt|=2;var o=Rg(),c=Cg();kt!==t||Mt!==n?(Vl=null,Gl=Ee()+500,as(t,n)):es=Ue(t,n);e:do try{if(Ot!==0&&xt!==null){n=xt;var h=Qn;t:switch(Ot){case 1:Ot=0,Qn=null,rs(t,n,h,1);break;case 2:case 9:if(Gp(h)){Ot=0,Qn=null,Dg(n);break}n=function(){Ot!==2&&Ot!==9||kt!==t||(Ot=7),Pi(t)},h.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:Gp(h)?(Ot=0,Qn=null,Dg(n)):(Ot=0,Qn=null,rs(t,n,h,7));break;case 5:var E=null;switch(xt.tag){case 26:E=xt.memoizedState;case 5:case 27:var b=xt;if(!E||fv(E)){Ot=0,Qn=null;var B=b.sibling;if(B!==null)xt=B;else{var $=b.return;$!==null?(xt=$,Xl($)):xt=null}break t}}Ot=0,Qn=null,rs(t,n,h,5);break;case 6:Ot=0,Qn=null,rs(t,n,h,6);break;case 8:Ef(),en=6;break e;default:throw Error(s(462))}}qx();break}catch(fe){Ag(t,fe)}while(!0);return Yi=or=null,P.H=o,P.A=c,Nt=r,xt!==null?0:(kt=null,Mt=0,fl(),en)}function qx(){for(;xt!==null&&!at();)wg(xt)}function wg(t){var n=ng(t.alternate,t,ta);t.memoizedProps=t.pendingProps,n===null?Xl(t):xt=n}function Dg(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=jm(r,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=jm(r,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Fc(n);default:ag(r,n),n=xt=Up(n,ta),n=ng(r,n,ta)}t.memoizedProps=t.pendingProps,n===null?Xl(t):xt=n}function rs(t,n,r,o){Yi=or=null,Fc(n),jr=null,uo=0;var c=n.return;try{if(Px(t,c,n,r,Mt)){en=1,Pl(t,ri(r,t.current)),xt=null;return}}catch(h){if(c!==null)throw xt=c,h;en=1,Pl(t,ri(r,t.current)),xt=null;return}n.flags&32768?(wt||o===1?t=!0:es||(Mt&536870912)!==0?t=!1:(wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ui.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ug(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Ug(n,wa);return}t=n.return;var r=Ix(n.alternate,n,ta);if(r!==null){xt=r;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);en===0&&(en=5)}function Ug(t,n){do{var r=Fx(t.alternate,t);if(r!==null){r.flags&=32767,xt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=r}while(t!==null);en=6,xt=null}function Lg(t,n,r,o,c,h,E,b,B){t.cancelPendingCommit=null;do Wl();while(Rn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=dc,Te(t,r,h,E,b,B),t===kt&&(xt=kt=null,Mt=0),ns=n,La=t,is=r,xf=h,Sf=c,Eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jx(Ht,function(){return Ig(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=k.p,k.p=2,E=Nt,Nt|=4;try{zx(t,n,r)}finally{Nt=E,k.p=c,P.T=o}}Rn=1,Ng(),Og(),Pg()}}function Ng(){if(Rn===1){Rn=0;var t=La,n=ns,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null;var o=k.p;k.p=2;var c=Nt;Nt|=4;try{mg(n,t);var h=Bf,E=yp(t.containerInfo),b=h.focusedElem,B=h.selectionRange;if(E!==b&&b&&b.ownerDocument&&Sp(b.ownerDocument.documentElement,b)){if(B!==null&&lc(b)){var $=B.start,fe=B.end;if(fe===void 0&&(fe=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(fe,b.value.length);else{var ve=b.ownerDocument||document,ie=ve&&ve.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),rt=b.textContent.length,tt=Math.min(B.start,rt),Ft=B.end===void 0?tt:Math.min(B.end,rt);!ae.extend&&tt>Ft&&(E=Ft,Ft=tt,tt=E);var Y=xp(b,tt),V=xp(b,Ft);if(Y&&V&&(ae.rangeCount!==1||ae.anchorNode!==Y.node||ae.anchorOffset!==Y.offset||ae.focusNode!==V.node||ae.focusOffset!==V.offset)){var j=ve.createRange();j.setStart(Y.node,Y.offset),ae.removeAllRanges(),tt>Ft?(ae.addRange(j),ae.extend(V.node,V.offset)):(j.setEnd(V.node,V.offset),ae.addRange(j))}}}}for(ve=[],ae=b;ae=ae.parentNode;)ae.nodeType===1&&ve.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ve.length;b++){var he=ve[b];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}iu=!!Pf,Bf=Pf=null}finally{Nt=c,k.p=o,P.T=r}}t.current=n,Rn=2}}function Og(){if(Rn===2){Rn=0;var t=La,n=ns,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=P.T,P.T=null;var o=k.p;k.p=2;var c=Nt;Nt|=4;try{fg(t,n.alternate,n)}finally{Nt=c,k.p=o,P.T=r}}Rn=3}}function Pg(){if(Rn===4||Rn===3){Rn=0,$e();var t=La,n=ns,r=is,o=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,ns=La=null,Bg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ua=null),Ut(r),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=k.p,k.p=2,P.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var b=o[E];h(b.value,{componentStack:b.stack})}}finally{P.T=n,k.p=c}}(is&3)!==0&&Wl(),Pi(t),c=t.pendingLanes,(r&4194090)!==0&&(c&42)!==0?t===yf?xo++:(xo=0,yf=t):xo=0,So(0)}}function Bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Wl(t){return Ng(),Og(),Pg(),Ig()}function Ig(){if(Rn!==5)return!1;var t=La,n=xf;xf=0;var r=Ut(is),o=P.T,c=k.p;try{k.p=32>r?32:r,P.T=null,r=Sf,Sf=null;var h=La,E=is;if(Rn=0,ns=La=null,is=0,(Nt&6)!==0)throw Error(s(331));var b=Nt;if(Nt|=4,Sg(h.current),vg(h,h.current,E,r),Nt=b,So(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(ce,h)}catch{}return!0}finally{k.p=c,P.T=o,Bg(t,n)}}function Fg(t,n,r){n=ri(r,n),n=Jc(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(ze(t,2),Pi(t))}function Vt(t,n,r){if(t.tag===3)Fg(t,t,r);else for(;n!==null;){if(n.tag===3){Fg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){t=ri(r,t),r=Vm(2),o=Ea(n,r,2),o!==null&&(km(r,o,n,t),ze(o,2),Pi(o));break}}n=n.return}}function bf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Vx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(mf=!0,c.add(r),t=Yx.bind(null,t,n,r),n.then(t,t))}function Yx(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,kt===t&&(Mt&r)===r&&(en===4||en===3&&(Mt&62914560)===Mt&&300>Ee()-_f?(Nt&2)===0&&as(t,0):gf|=r,ts===Mt&&(ts=0)),Pi(t)}function zg(t,n){n===0&&(n=Ae()),t=Hr(t,n),t!==null&&(ze(t,n),Pi(t))}function Zx(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),zg(t,r)}function Kx(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),zg(t,r)}function jx(t,n){return F(t,n)}var ql=null,ss=null,Af=!1,Yl=!1,Rf=!1,pr=0;function Pi(t){t!==ss&&t.next===null&&(ss===null?ql=ss=t:ss=ss.next=t),Yl=!0,Af||(Af=!0,Jx())}function So(t,n){if(!Rf&&Yl){Rf=!0;do for(var r=!1,o=ql;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var E=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Fe(42|t)+1)-1,h&=c&~(E&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,kg(o,h))}else h=Mt,h=We(o,o===kt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ue(o,h)||(r=!0,kg(o,h));o=o.next}while(r);Rf=!1}}function Qx(){Hg()}function Hg(){Yl=Af=!1;var t=0;pr!==0&&(sS()&&(t=pr),pr=0);for(var n=Ee(),r=null,o=ql;o!==null;){var c=o.next,h=Gg(o,n);h===0?(o.next=null,r===null?ql=c:r.next=c,c===null&&(ss=r)):(r=o,(t!==0||(h&3)!==0)&&(Yl=!0)),o=c}So(t)}function Gg(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Fe(h),b=1<<E,B=c[E];B===-1?((b&r)===0||(b&o)!==0)&&(c[E]=ut(b,n)):B<=n&&(t.expiredLanes|=b),h&=~b}if(n=kt,r=Mt,r=We(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ot===2||Ot===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Dt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ue(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Dt(o),Ut(r)){case 2:case 8:r=Qe;break;case 32:r=Ht;break;case 268435456:r=O;break;default:r=Ht}return o=Vg.bind(null,t),r=F(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Dt(o),t.callbackPriority=2,t.callbackNode=null,2}function Vg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Wl()&&t.callbackNode!==r)return null;var o=Mt;return o=We(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Tg(t,o,n),Gg(t,Ee()),t.callbackNode!=null&&t.callbackNode===r?Vg.bind(null,t):null)}function kg(t,n){if(Wl())return null;Tg(t,n,!0)}function Jx(){lS(function(){(Nt&6)!==0?F(Be,Qx):Hg()})}function Cf(){return pr===0&&(pr=X()),pr}function Xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function Wg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function $x(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var h=Xg((c[Qt]||null).action),E=o.submitter;E&&(n=(n=E[Qt]||null)?Xg(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var b=new ll("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pr!==0){var B=E?Wg(c,E):new FormData(c);Yc(r,{pending:!0,data:B,method:c.method,action:h},null,B)}}else typeof h=="function"&&(b.preventDefault(),B=E?Wg(c,E):new FormData(c),Yc(r,{pending:!0,data:B,method:c.method,action:h},h,B))},currentTarget:c}]})}}for(var wf=0;wf<hc.length;wf++){var Df=hc[wf],eS=Df.toLowerCase(),tS=Df[0].toUpperCase()+Df.slice(1);_i(eS,"on"+tS)}_i(Tp,"onAnimationEnd"),_i(bp,"onAnimationIteration"),_i(Ap,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(_x,"onTransitionRun"),_i(xx,"onTransitionStart"),_i(Sx,"onTransitionCancel"),_i(Rp,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function qg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var b=o[E],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==h&&c.isPropagationStopped())break e;h=b,c.currentTarget=$;try{h(c)}catch(fe){Ol(fe)}c.currentTarget=null,h=B}else for(E=0;E<o.length;E++){if(b=o[E],B=b.instance,$=b.currentTarget,b=b.listener,B!==h&&c.isPropagationStopped())break e;h=b,c.currentTarget=$;try{h(c)}catch(fe){Ol(fe)}c.currentTarget=null,h=B}}}}function St(t,n){var r=n[Dr];r===void 0&&(r=n[Dr]=new Set);var o=t+"__bubble";r.has(o)||(Yg(n,t,2,!1),r.add(o))}function Uf(t,n,r){var o=0;n&&(o|=4),Yg(r,t,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[Zl]){t[Zl]=!0,nl.forEach(function(r){r!=="selectionchange"&&(nS.has(r)||Uf(r,!1,t),Uf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Uf("selectionchange",!1,n))}}function Yg(t,n,r,o){switch(vv(n)){case 2:var c=wS;break;case 8:c=DS;break;default:c=qf}r=c.bind(null,n,r,t),c=void 0,!$u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Nf(t,n,r,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var b=o.stateNode.containerInfo;if(b===c)break;if(E===4)for(E=o.return;E!==null;){var B=E.tag;if((B===3||B===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;b!==null;){if(E=Vi(b),E===null)return;if(B=E.tag,B===5||B===6||B===26||B===27){o=h=E;continue e}b=b.parentNode}}o=o.return}ep(function(){var $=h,fe=Qu(r),ve=[];e:{var ie=Cp.get(t);if(ie!==void 0){var ae=ll,rt=t;switch(t){case"keypress":if(sl(r)===0)break e;case"keydown":case"keyup":ae=j0;break;case"focusin":rt="focus",ae=ic;break;case"focusout":rt="blur",ae=ic;break;case"beforeblur":case"afterblur":ae=ic;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=$0;break;case Tp:case bp:case Ap:ae=G0;break;case Rp:ae=tx;break;case"scroll":case"scrollend":ae=B0;break;case"wheel":ae=ix;break;case"copy":case"cut":case"paste":ae=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=rp;break;case"toggle":case"beforetoggle":ae=rx}var tt=(n&4)!==0,Ft=!tt&&(t==="scroll"||t==="scrollend"),Y=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var V=$,j;V!==null;){var he=V;if(j=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||j===null||Y===null||(he=zs(V,Y),he!=null&&tt.push(Eo(V,he,j))),Ft)break;V=V.return}0<tt.length&&(ie=new ae(ie,rt,null,r,fe),ve.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&r!==ju&&(rt=r.relatedTarget||r.fromElement)&&(Vi(rt)||rt[wi]))break e;if((ae||ie)&&(ie=fe.window===fe?fe:(ie=fe.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(rt=r.relatedTarget||r.toElement,ae=$,rt=rt?Vi(rt):null,rt!==null&&(Ft=u(rt),tt=rt.tag,rt!==Ft||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ae=null,rt=$),ae!==rt)){if(tt=ip,he="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=rp,he="onPointerLeave",Y="onPointerEnter",V="pointer"),Ft=ae==null?ie:Ja(ae),j=rt==null?ie:Ja(rt),ie=new tt(he,V+"leave",ae,r,fe),ie.target=Ft,ie.relatedTarget=j,he=null,Vi(fe)===$&&(tt=new tt(Y,V+"enter",rt,r,fe),tt.target=j,tt.relatedTarget=Ft,he=tt),Ft=he,ae&&rt)t:{for(tt=ae,Y=rt,V=0,j=tt;j;j=os(j))V++;for(j=0,he=Y;he;he=os(he))j++;for(;0<V-j;)tt=os(tt),V--;for(;0<j-V;)Y=os(Y),j--;for(;V--;){if(tt===Y||Y!==null&&tt===Y.alternate)break t;tt=os(tt),Y=os(Y)}tt=null}else tt=null;ae!==null&&Zg(ve,ie,ae,tt,!1),rt!==null&&Ft!==null&&Zg(ve,Ft,rt,tt,!0)}}e:{if(ie=$?Ja($):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var ke=dp;else if(fp(ie))if(pp)ke=mx;else{ke=dx;var gt=hx}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?$&&Ku($.elementType)&&(ke=dp):ke=px;if(ke&&(ke=ke(t,$))){hp(ve,ke,r,fe);break e}gt&&gt(t,ie,$),t==="focusout"&&$&&ie.type==="number"&&$.memoizedProps.value!=null&&Un(ie,"number",ie.value)}switch(gt=$?Ja($):window,t){case"focusin":(fp(gt)||gt.contentEditable==="true")&&(Ir=gt,uc=$,Ys=null);break;case"focusout":Ys=uc=Ir=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Ep(ve,r,fe);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Ep(ve,r,fe)}var Ke;if(rc)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Br?up(t,r)&&(it="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(it="onCompositionStart");it&&(sp&&r.locale!=="ko"&&(Br||it!=="onCompositionStart"?it==="onCompositionEnd"&&Br&&(Ke=tp()):(_a=fe,ec="value"in _a?_a.value:_a.textContent,Br=!0)),gt=Kl($,it),0<gt.length&&(it=new ap(it,t,null,r,fe),ve.push({event:it,listeners:gt}),Ke?it.data=Ke:(Ke=cp(r),Ke!==null&&(it.data=Ke)))),(Ke=ox?lx(t,r):ux(t,r))&&(it=Kl($,"onBeforeInput"),0<it.length&&(gt=new ap("onBeforeInput","beforeinput",null,r,fe),ve.push({event:gt,listeners:it}),gt.data=Ke)),$x(ve,t,$,r,fe)}qg(ve,n)})}function Eo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Kl(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=zs(t,r),c!=null&&o.unshift(Eo(t,c,h)),c=zs(t,n),c!=null&&o.push(Eo(t,c,h))),t.tag===3)return o;t=t.return}return[]}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zg(t,n,r,o,c){for(var h=n._reactName,E=[];r!==null&&r!==o;){var b=r,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||$===null||(B=$,c?($=zs(r,h),$!=null&&E.unshift(Eo(r,$,B))):c||($=zs(r,h),$!=null&&E.push(Eo(r,$,B)))),r=r.return}E.length!==0&&t.push({event:n,listeners:E})}var iS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(iS,`
`).replace(aS,"")}function jg(t,n){return n=Kg(n),Kg(t)===n}function jl(){}function It(t,n,r,o,c,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gn(t,""+o);break;case"className":Ve(t,"class",o);break;case"tabIndex":Ve(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(t,r,o);break;case"style":Jd(t,o,h);break;case"data":if(n!=="object"){Ve(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=al(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&It(t,n,"name",c.name,c,null),It(t,n,"formEncType",c.formEncType,c,null),It(t,n,"formMethod",c.formMethod,c,null),It(t,n,"formTarget",c.formTarget,c,null)):(It(t,n,"encType",c.encType,c,null),It(t,n,"method",c.method,c,null),It(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=al(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=jl);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=O0.get(r)||r,Le(t,r,o))}}function Of(t,n,r,o,c,h){switch(r){case"style":Jd(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gn(t,o):(typeof o=="number"||typeof o=="bigint")&&Gn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),h=t[Qt]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Le(t,r,o)}}}function Cn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,c=!1,h;for(h in r)if(r.hasOwnProperty(h)){var E=r[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(t,n,h,E,r,null)}}c&&It(t,n,"srcSet",r.srcSet,r,null),o&&It(t,n,"src",r.src,r,null);return;case"input":St("invalid",t);var b=h=E=c=null,B=null,$=null;for(o in r)if(r.hasOwnProperty(o)){var fe=r[o];if(fe!=null)switch(o){case"name":c=fe;break;case"type":E=fe;break;case"checked":B=fe;break;case"defaultChecked":$=fe;break;case"value":h=fe;break;case"defaultValue":b=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:It(t,n,o,fe,r,null)}}Fn(t,h,b,B,$,E,c,!1),_t(t);return;case"select":St("invalid",t),o=E=h=null;for(c in r)if(r.hasOwnProperty(c)&&(b=r[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":E=b;break;case"multiple":o=b;default:It(t,n,c,b,r,null)}n=h,r=E,t.multiple=!!o,n!=null?Jt(t,!!o,n,!1):r!=null&&Jt(t,!!o,r,!0);return;case"textarea":St("invalid",t),h=c=o=null;for(E in r)if(r.hasOwnProperty(E)&&(b=r[E],b!=null))switch(E){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:It(t,n,E,b,r,null)}Nr(t,o,c,h),_t(t);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(t,n,B,o,r,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<yo.length;o++)St(yo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in r)if(r.hasOwnProperty($)&&(o=r[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:It(t,n,$,o,r,null)}return;default:if(Ku(n)){for(fe in r)r.hasOwnProperty(fe)&&(o=r[fe],o!==void 0&&Of(t,n,fe,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&It(t,n,b,o,r,null))}function rS(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,E=null,b=null,B=null,$=null,fe=null;for(ae in r){var ve=r[ae];if(r.hasOwnProperty(ae)&&ve!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(ae)||It(t,n,ae,null,o,ve)}}for(var ie in o){var ae=o[ie];if(ve=r[ie],o.hasOwnProperty(ie)&&(ae!=null||ve!=null))switch(ie){case"type":h=ae;break;case"name":c=ae;break;case"checked":$=ae;break;case"defaultChecked":fe=ae;break;case"value":E=ae;break;case"defaultValue":b=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:ae!==ve&&It(t,n,ie,ae,o,ve)}}Gt(t,E,b,B,$,fe,h,c);return;case"select":ae=E=b=ie=null;for(h in r)if(B=r[h],r.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ae=B;default:o.hasOwnProperty(h)||It(t,n,h,null,o,B)}for(c in o)if(h=o[c],B=r[c],o.hasOwnProperty(c)&&(h!=null||B!=null))switch(c){case"value":ie=h;break;case"defaultValue":b=h;break;case"multiple":E=h;default:h!==B&&It(t,n,c,h,o,B)}n=b,r=E,o=ae,ie!=null?Jt(t,!!r,ie,!1):!!o!=!!r&&(n!=null?Jt(t,!!r,n,!0):Jt(t,!!r,r?[]:"",!1));return;case"textarea":ae=ie=null;for(b in r)if(c=r[b],r.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:It(t,n,b,null,o,c)}for(E in o)if(c=o[E],h=r[E],o.hasOwnProperty(E)&&(c!=null||h!=null))switch(E){case"value":ie=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&It(t,n,E,c,o,h)}bn(t,ie,ae);return;case"option":for(var rt in r)if(ie=r[rt],r.hasOwnProperty(rt)&&ie!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:It(t,n,rt,null,o,ie)}for(B in o)if(ie=o[B],ae=r[B],o.hasOwnProperty(B)&&ie!==ae&&(ie!=null||ae!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:It(t,n,B,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in r)ie=r[tt],r.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&It(t,n,tt,null,o,ie);for($ in o)if(ie=o[$],ae=r[$],o.hasOwnProperty($)&&ie!==ae&&(ie!=null||ae!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(s(137,n));break;default:It(t,n,$,ie,o,ae)}return;default:if(Ku(n)){for(var Ft in r)ie=r[Ft],r.hasOwnProperty(Ft)&&ie!==void 0&&!o.hasOwnProperty(Ft)&&Of(t,n,Ft,void 0,o,ie);for(fe in o)ie=o[fe],ae=r[fe],!o.hasOwnProperty(fe)||ie===ae||ie===void 0&&ae===void 0||Of(t,n,fe,ie,o,ae);return}}for(var Y in r)ie=r[Y],r.hasOwnProperty(Y)&&ie!=null&&!o.hasOwnProperty(Y)&&It(t,n,Y,null,o,ie);for(ve in o)ie=o[ve],ae=r[ve],!o.hasOwnProperty(ve)||ie===ae||ie==null&&ae==null||It(t,n,ve,ie,o,ae)}var Pf=null,Bf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function Qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function sS(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(t){return ev.resolve(null).then(t).catch(uS)}:$g;function uS(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function tv(t,n){var r=n,o=0,c=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"){if(0<o&&8>o){r=o;var E=t.ownerDocument;if(r&1&&Mo(E.documentElement),r&2&&Mo(E.body),r&4)for(r=E.head,Mo(r),E=r.firstChild;E;){var b=E.nextSibling,B=E.nodeName;E[Di]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=b}}if(c===0){t.removeChild(h),Uo(n);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:o=r.charCodeAt(0)-48;else o=0;r=h}while(r);Uo(n)}function zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":zf(r),Lr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function cS(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Di])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function fS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Si(t.nextSibling),t===null))return null;return t}function Hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function hS(t,n){var r=t.ownerDocument;if(t.data!=="$?"||r.readyState==="complete")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Gf=null;function nv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function iv(t,n,r){switch(n=Ql(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Lr(t)}var fi=new Map,av=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=k.d;k.d={f:dS,r:pS,D:mS,C:gS,L:vS,m:_S,X:SS,S:xS,M:yS};function dS(){var t=na.f(),n=kl();return t||n}function pS(t){var n=ga(t);n!==null&&n.tag===5&&n.type==="form"?Tm(n):na.r(t)}var ls=typeof document>"u"?null:document;function rv(t,n,r){var o=ls;if(o&&typeof n=="string"&&n){var c=_n(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),av.has(c)||(av.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",t),sn(n),o.head.appendChild(n)))}}function mS(t){na.D(t),rv("dns-prefetch",t,null)}function gS(t,n){na.C(t,n),rv("preconnect",t,n)}function vS(t,n,r){na.L(t,n,r);var o=ls;if(o&&t&&n){var c='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+_n(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+_n(r.imageSizes)+'"]')):c+='[href="'+_n(t)+'"]';var h=c;switch(n){case"style":h=us(t);break;case"script":h=cs(t)}fi.has(h)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),fi.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(To(h))||n==="script"&&o.querySelector(bo(h))||(n=o.createElement("link"),Cn(n,"link",t),sn(n),o.head.appendChild(n)))}}function _S(t,n){na.m(t,n);var r=ls;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_n(o)+'"][href="'+_n(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=cs(t)}if(!fi.has(h)&&(t=g({rel:"modulepreload",href:t},n),fi.set(h,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(bo(h)))return}o=r.createElement("link"),Cn(o,"link",t),sn(o),r.head.appendChild(o)}}}function xS(t,n,r){na.S(t,n,r);var o=ls;if(o&&t){var c=va(o).hoistableStyles,h=us(t);n=n||"default";var E=c.get(h);if(!E){var b={loading:0,preload:null};if(E=o.querySelector(To(h)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=fi.get(h))&&Vf(t,r);var B=E=o.createElement("link");sn(B),Cn(B,"link",t),B._p=new Promise(function($,fe){B.onload=$,B.onerror=fe}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:b},c.set(h,E)}}}function SS(t,n){na.X(t,n);var r=ls;if(r&&t){var o=va(r).hoistableScripts,c=cs(t),h=o.get(c);h||(h=r.querySelector(bo(c)),h||(t=g({src:t,async:!0},n),(n=fi.get(c))&&kf(t,n),h=r.createElement("script"),sn(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function yS(t,n){na.M(t,n);var r=ls;if(r&&t){var o=va(r).hoistableScripts,c=cs(t),h=o.get(c);h||(h=r.querySelector(bo(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&kf(t,n),h=r.createElement("script"),sn(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function sv(t,n,r,o){var c=(c=ee.current)?Jl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=us(r.href),r=va(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=us(r.href);var h=va(c).hoistableStyles,E=h.get(t);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=c.querySelector(To(t)))&&!h._p&&(E.instance=h,E.state.loading=5),fi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},fi.set(t,r),h||ES(c,t,r,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(r),r=va(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function us(t){return'href="'+_n(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function ov(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function ES(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),sn(n),t.head.appendChild(n))}function cs(t){return'[src="'+_n(t)+'"]'}function bo(t){return"script[async]"+t}function lv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+_n(r.href)+'"]');if(o)return n.instance=o,sn(o),o;var c=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),sn(o),Cn(o,"style",c),$l(o,r.precedence,t),n.instance=o;case"stylesheet":c=us(r.href);var h=t.querySelector(To(c));if(h)return n.state.loading|=4,n.instance=h,sn(h),h;o=ov(r),(c=fi.get(c))&&Vf(o,c),h=(t.ownerDocument||t).createElement("link"),sn(h);var E=h;return E._p=new Promise(function(b,B){E.onload=b,E.onerror=B}),Cn(h,"link",o),n.state.loading|=4,$l(h,r.precedence,t),n.instance=h;case"script":return h=cs(r.src),(c=t.querySelector(bo(h)))?(n.instance=c,sn(c),c):(o=r,(c=fi.get(h))&&(o=g({},r),kf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),sn(c),Cn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,r.precedence,t));return n.instance}function $l(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,E=0;E<o.length;E++){var b=o[E];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var eu=null;function uv(t,n,r){if(eu===null){var o=new Map,c=eu=new Map;c.set(r,o)}else c=eu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var h=r[c];if(!(h[Di]||h[fn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var b=o.get(E);b?b.push(h):o.set(E,[h])}}return o}function cv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function MS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ao=null;function TS(){}function bS(t,n,r){if(Ao===null)throw Error(s(475));var o=Ao;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=us(r.href),h=t.querySelector(To(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=tu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,sn(h);return}h=t.ownerDocument||t,r=ov(r),(c=fi.get(c))&&Vf(r,c),h=h.createElement("link"),sn(h);var E=h;E._p=new Promise(function(b,B){E.onload=b,E.onerror=B}),Cn(h,"link",r),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function AS(){if(Ao===null)throw Error(s(475));var t=Ao;return t.stylesheets&&t.count===0&&Xf(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Xf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nu=null;function Xf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nu=new Map,n.forEach(RS,t),nu=null,tu.call(t))}function RS(t,n){if(!(n.state.loading&4)){var r=nu.get(t);if(r)var o=r.get(null);else{r=new Map,nu.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var E=c[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),o=E)}o&&r.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),h=r.get(E)||o,h===o&&r.set(null,c),r.set(E,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function CS(t,n,r,o,c,h,E,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function hv(t,n,r,o,c,h,E,b,B,$,fe,ve){return t=new CS(t,n,r,E,b,B,$,ve),n=1,h===!0&&(n|=24),h=Zn(3,null,null,n),t.current=h,h.stateNode=t,n=Tc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Cc(h),t}function dv(t){return t?(t=Gr,t):Gr}function pv(t,n,r,o,c,h){c=dv(c),o.context===null?o.context=c:o.pendingContext=c,o=ya(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ea(t,o,n),r!==null&&($n(r,t,n),no(r,t,n))}function mv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Wf(t,n){mv(t,n),(t=t.alternate)&&mv(t,n)}function gv(t){if(t.tag===13){var n=Hr(t,67108864);n!==null&&$n(n,t,67108864),Wf(t,67108864)}}var iu=!0;function wS(t,n,r,o){var c=P.T;P.T=null;var h=k.p;try{k.p=2,qf(t,n,r,o)}finally{k.p=h,P.T=c}}function DS(t,n,r,o){var c=P.T;P.T=null;var h=k.p;try{k.p=8,qf(t,n,r,o)}finally{k.p=h,P.T=c}}function qf(t,n,r,o){if(iu){var c=Yf(o);if(c===null)Nf(t,n,o,au,r),_v(t,o);else if(LS(c,t,n,r,o))o.stopPropagation();else if(_v(t,o),n&4&&-1<US.indexOf(t)){for(;c!==null;){var h=ga(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=je(h.pendingLanes);if(E!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var B=1<<31-Fe(E);b.entanglements[1]|=B,E&=~B}Pi(h),(Nt&6)===0&&(Gl=Ee()+500,So(0))}}break;case 13:b=Hr(h,2),b!==null&&$n(b,h,2),kl(),Wf(h,2)}if(h=Yf(o),h===null&&Nf(t,n,o,au,r),h===c)break;c=h}c!==null&&o.stopPropagation()}else Nf(t,n,o,null,r)}}function Yf(t){return t=Qu(t),Zf(t)}var au=null;function Zf(t){if(au=null,t=Vi(t),t!==null){var n=u(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return au=t,null}function vv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case Be:return 2;case Qe:return 8;case Ht:case Xt:return 32;case O:return 268435456;default:return 32}default:return 32}}var Kf=!1,Pa=null,Ba=null,Ia=null,Co=new Map,wo=new Map,Fa=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _v(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,r,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=ga(n),n!==null&&gv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function LS(t,n,r,o,c){switch(n){case"focusin":return Pa=Do(Pa,t,n,r,o,c),!0;case"dragenter":return Ba=Do(Ba,t,n,r,o,c),!0;case"mouseover":return Ia=Do(Ia,t,n,r,o,c),!0;case"pointerover":var h=c.pointerId;return Co.set(h,Do(Co.get(h)||null,t,n,r,o,c)),!0;case"gotpointercapture":return h=c.pointerId,wo.set(h,Do(wo.get(h)||null,t,n,r,o,c)),!0}return!1}function xv(t){var n=Vi(t.target);if(n!==null){var r=u(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,gi(t.priority,function(){if(r.tag===13){var o=Jn();o=ot(o);var c=Hr(r,o);c!==null&&$n(c,r,o),Wf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Yf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);ju=o,r.target.dispatchEvent(o),ju=null}else return n=ga(r),n!==null&&gv(n),t.blockedOn=r,!1;n.shift()}return!0}function Sv(t,n,r){ru(t)&&r.delete(n)}function NS(){Kf=!1,Pa!==null&&ru(Pa)&&(Pa=null),Ba!==null&&ru(Ba)&&(Ba=null),Ia!==null&&ru(Ia)&&(Ia=null),Co.forEach(Sv),wo.forEach(Sv)}function su(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,NS)))}var ou=null;function yv(t){ou!==t&&(ou=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ou===t&&(ou=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Zf(o||r)===null)continue;break}var h=ga(r);h!==null&&(t.splice(n,3),n-=3,Yc(h,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Uo(t){function n(B){return su(B,t)}Pa!==null&&su(Pa,t),Ba!==null&&su(Ba,t),Ia!==null&&su(Ia,t),Co.forEach(n),wo.forEach(n);for(var r=0;r<Fa.length;r++){var o=Fa[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Fa.length&&(r=Fa[0],r.blockedOn===null);)xv(r),r.blockedOn===null&&Fa.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],h=r[o+1],E=c[Qt]||null;if(typeof h=="function")E||yv(r);else if(E){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,E=h[Qt]||null)b=E.formAction;else if(Zf(c)!==null)continue}else b=E.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),yv(r)}}}function jf(t){this._internalRoot=t}lu.prototype.render=jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=Jn();pv(r,o,t,n,null,null)},lu.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pv(t.current,2,null,t,null,null),kl(),n[wi]=null}};function lu(t){this._internalRoot=t}lu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Fa.length&&n!==0&&n<Fa[r].priority;r++);Fa.splice(r,0,t),r===0&&xv(t)}};var Ev=e.version;if(Ev!=="19.1.1")throw Error(s(527,Ev,"19.1.1"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var OS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uu.isDisabled&&uu.supportsFiber)try{ce=uu.inject(OS),ge=uu}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",c=Fm,h=zm,E=Hm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=hv(t,1,!1,null,null,r,o,c,h,E,b,null),t[wi]=n.current,Lf(t),new jf(n)},No.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,c="",h=Fm,E=zm,b=Hm,B=null,$=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(B=r.unstable_transitionCallbacks),r.formState!==void 0&&($=r.formState)),n=hv(t,1,!0,n,r??null,o,c,h,E,b,B,$),n.context=dv(null),r=n.current,o=Jn(),o=ot(o),c=ya(o),c.callback=null,Ea(r,c,o),r=o,n.current.lanes=r,ze(n,r),Pi(n),t[wi]=n.current,Lf(t),new lu(n)},No.version="19.1.1",No}var Lv;function XS(){if(Lv)return $f.exports;Lv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),$f.exports=kS(),$f.exports}var WS=XS();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Nv="popstate";function qS(a={}){function e(s,l){let{pathname:u,search:f,hash:d}=s.location;return zh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Go(l)}return ZS(e,i,null,a)}function jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Hi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YS(){return Math.random().toString(36).substring(2,10)}function Ov(a,e){return{usr:a.state,key:a.key,idx:e}}function zh(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Os(e):e,state:i,key:e&&e.key||s||YS()}}function Go({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Os(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function ZS(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let S=g(),v=S==null?null:S-p;p=S,m&&m({action:d,location:A.location,delta:v})}function x(S,v){d="PUSH";let U=zh(A.location,S,v);p=g()+1;let L=Ov(U,p),D=A.createHref(U);try{f.pushState(L,"",D)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(D)}u&&m&&m({action:d,location:A.location,delta:1})}function y(S,v){d="REPLACE";let U=zh(A.location,S,v);p=g();let L=Ov(U,p),D=A.createHref(U);f.replaceState(L,"",D),u&&m&&m({action:d,location:A.location,delta:0})}function M(S){return KS(S)}let A={get action(){return d},get location(){return a(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Nv,_),m=S,()=>{l.removeEventListener(Nv,_),m=null}},createHref(S){return e(l,S)},createURL:M,encodeLocation(S){let v=M(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:y,go(S){return f.go(S)}};return A}function KS(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),jt(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Go(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function z_(a,e,i="/"){return jS(a,e,i,!1)}function jS(a,e,i,s){let l=typeof e=="string"?Os(e):e,u=ha(l.pathname||"/",i);if(u==null)return null;let f=H_(a);QS(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=ly(u);d=sy(f[m],p,s)}return d}function H_(a,e=[],i=[],s="",l=!1){let u=(f,d,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&m)return;jt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let _=ca([s,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),H_(f.children,e,x,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:ay(_,f.index),routesMeta:x})};return a.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of G_(f.path))u(f,d,!0,m)}),e}function G_(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=G_(s.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function QS(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:ry(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var JS=/^:[\w-]+$/,$S=3,ey=2,ty=1,ny=10,iy=-2,Pv=a=>a==="*";function ay(a,e){let i=a.split("/"),s=i.length;return i.some(Pv)&&(s+=iy),e&&(s+=ey),i.filter(l=>!Pv(l)).reduce((l,u)=>l+(JS.test(u)?$S:u===""?ty:ny),s)}function ry(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function sy(a,e,i=!1){let{routesMeta:s}=a,l={},u="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=Hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!_&&p&&i&&!s[s.length-1].route.index&&(_=Hu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:ca([u,_.pathname]),pathnameBase:hy(ca([u,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(u=ca([u,_.pathnameBase]))}return f}function Hu(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=oy(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:_},x)=>{if(g==="*"){let M=d[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const y=d[x];return _&&!y?p[g]=void 0:p[g]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:a}}function oy(a,e=!1,i=!0){Hi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function ly(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ha(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function uy(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Os(a):a;return{pathname:i?i.startsWith("/")?i:cy(i,e):e,search:dy(s),hash:py(l)}}function cy(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ih(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fy(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function V_(a){let e=fy(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function k_(a,e,i,s=!1){let l;typeof a=="string"?l=Os(a):(l={...a},jt(!l.pathname||!l.pathname.includes("?"),ih("?","pathname","search",l)),jt(!l.pathname||!l.pathname.includes("#"),ih("#","pathname","hash",l)),jt(!l.search||!l.search.includes("#"),ih("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let _=e.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}d=_>=0?e[_]:"/"}let m=uy(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ca=a=>a.join("/").replace(/\/\/+/g,"/"),hy=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),dy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,py=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function my(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var X_=["POST","PUT","PATCH","DELETE"];new Set(X_);var gy=["GET",...X_];new Set(gy);var Ps=de.createContext(null);Ps.displayName="DataRouter";var Xu=de.createContext(null);Xu.displayName="DataRouterState";de.createContext(!1);var W_=de.createContext({isTransitioning:!1});W_.displayName="ViewTransition";var vy=de.createContext(new Map);vy.displayName="Fetchers";var _y=de.createContext(null);_y.displayName="Await";var Gi=de.createContext(null);Gi.displayName="Navigation";var Wo=de.createContext(null);Wo.displayName="Location";var ma=de.createContext({outlet:null,matches:[],isDataRoute:!1});ma.displayName="Route";var Pd=de.createContext(null);Pd.displayName="RouteError";function xy(a,{relative:e}={}){jt(qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=de.useContext(Gi),{hash:l,pathname:u,search:f}=Yo(a,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:ca([i,u])),s.createHref({pathname:d,search:f,hash:l})}function qo(){return de.useContext(Wo)!=null}function wr(){return jt(qo(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(Wo).location}var q_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y_(a){de.useContext(Gi).static||de.useLayoutEffect(a)}function Sy(){let{isDataRoute:a}=de.useContext(ma);return a?Ny():yy()}function yy(){jt(qo(),"useNavigate() may be used only in the context of a <Router> component.");let a=de.useContext(Ps),{basename:e,navigator:i}=de.useContext(Gi),{matches:s}=de.useContext(ma),{pathname:l}=wr(),u=JSON.stringify(V_(s)),f=de.useRef(!1);return Y_(()=>{f.current=!0}),de.useCallback((m,p={})=>{if(Hi(f.current,q_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=k_(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ca([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,a])}de.createContext(null);function Yo(a,{relative:e}={}){let{matches:i}=de.useContext(ma),{pathname:s}=wr(),l=JSON.stringify(V_(i));return de.useMemo(()=>k_(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function Ey(a,e){return Z_(a,e)}function Z_(a,e,i,s,l){jt(qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=de.useContext(Gi),{matches:f}=de.useContext(ma),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let U=_&&_.path||"";K_(p,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let x=wr(),y;if(e){let U=typeof e=="string"?Os(e):e;jt(g==="/"||U.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),y=U}else y=x;let M=y.pathname||"/",A=M;if(g!=="/"){let U=g.replace(/^\//,"").split("/");A="/"+M.replace(/^\//,"").split("/").slice(U.length).join("/")}let S=z_(a,{pathname:A});Hi(_||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Hi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Ry(S&&S.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:ca([g,u.encodeLocation?u.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ca([g,u.encodeLocation?u.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,s,l);return e&&v?de.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function My(){let a=Ly(),e=my(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:u},"ErrorBoundary")," or"," ",de.createElement("code",{style:u},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),i?de.createElement("pre",{style:l},i):null,f)}var Ty=de.createElement(My,null),by=class extends de.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?de.createElement(ma.Provider,{value:this.props.routeContext},de.createElement(Pd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ay({routeContext:a,match:e,children:i}){let s=de.useContext(Ps);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(ma.Provider,{value:a},i)}function Ry(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let u=a,f=i?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);jt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:_,errors:x}=i,y=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||y){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,_)=>{let x,y=!1,M=null,A=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,M=g.route.errorElement||Ty,d&&(m<0&&_===0?(K_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,A=null):m===_&&(y=!0,A=g.route.hydrateFallbackElement||null)));let S=e.concat(u.slice(0,_+1)),v=()=>{let U;return x?U=M:y?U=A:g.route.Component?U=de.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=p,de.createElement(Ay,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?de.createElement(by,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:s}):v()},null)}function Bd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cy(a){let e=de.useContext(Ps);return jt(e,Bd(a)),e}function wy(a){let e=de.useContext(Xu);return jt(e,Bd(a)),e}function Dy(a){let e=de.useContext(ma);return jt(e,Bd(a)),e}function Id(a){let e=Dy(a),i=e.matches[e.matches.length-1];return jt(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function Uy(){return Id("useRouteId")}function Ly(){let a=de.useContext(Pd),e=wy("useRouteError"),i=Id("useRouteError");return a!==void 0?a:e.errors?.[i]}function Ny(){let{router:a}=Cy("useNavigate"),e=Id("useNavigate"),i=de.useRef(!1);return Y_(()=>{i.current=!0}),de.useCallback(async(l,u={})=>{Hi(i.current,q_),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var Bv={};function K_(a,e,i){!e&&!Bv[a]&&(Bv[a]=!0,Hi(!1,i))}de.memo(Oy);function Oy({routes:a,future:e,state:i,unstable_onError:s}){return Z_(a,void 0,i,s,e)}function Hh(a){jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Py({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:u=!1}){jt(!qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),d=de.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Os(i));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:x="default"}=i,y=de.useMemo(()=>{let M=ha(m,f);return M==null?null:{location:{pathname:M,search:p,hash:g,state:_,key:x},navigationType:s}},[f,m,p,g,_,x,s]);return Hi(y!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:de.createElement(Gi.Provider,{value:d},de.createElement(Wo.Provider,{children:e,value:y}))}function By({children:a,location:e}){return Ey(Gh(a),e)}function Gh(a,e=[]){let i=[];return de.Children.forEach(a,(s,l)=>{if(!de.isValidElement(s))return;let u=[...e,l];if(s.type===de.Fragment){i.push.apply(i,Gh(s.props.children,u));return}jt(s.type===Hh,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Gh(s.props.children,u)),i.push(f)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function Wu(a){return a!=null&&typeof a.tagName=="string"}function Iy(a){return Wu(a)&&a.tagName.toLowerCase()==="button"}function Fy(a){return Wu(a)&&a.tagName.toLowerCase()==="form"}function zy(a){return Wu(a)&&a.tagName.toLowerCase()==="input"}function Hy(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function Gy(a,e){return a.button===0&&(!e||e==="_self")&&!Hy(a)}var cu=null;function Vy(){if(cu===null)try{new FormData(document.createElement("form"),0),cu=!1}catch{cu=!0}return cu}var ky=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ah(a){return a!=null&&!ky.has(a)?(Hi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):a}function Xy(a,e){let i,s,l,u,f;if(Fy(a)){let d=a.getAttribute("action");s=d?ha(d,e):null,i=a.getAttribute("method")||Nu,l=ah(a.getAttribute("enctype"))||Ou,u=new FormData(a)}else if(Iy(a)||zy(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(s=m?ha(m,e):null,i=a.getAttribute("formmethod")||d.getAttribute("method")||Nu,l=ah(a.getAttribute("formenctype"))||ah(d.getAttribute("enctype"))||Ou,u=new FormData(d,a),!Vy()){let{name:p,type:g,value:_}=a;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,_)}}else{if(Wu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,s=null,l=Ou,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fd(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Wy(a,e,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&ha(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function qy(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yy(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function Zy(a,e,i){let s=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await qy(u,i);return f.links?f.links():[]}return[]}));return Jy(s.flat(1).filter(Yy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Iv(a,e,i,s,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let g=s.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let _=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Ky(a,e,{includeHydrateFallback:i}={}){return jy(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function jy(a){return[...new Set(a)]}function Qy(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function Jy(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let u=JSON.stringify(Qy(l));return i.has(u)||(i.add(u),s.push({key:u,link:l})),s},[])}function j_(){let a=de.useContext(Ps);return Fd(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function $y(){let a=de.useContext(Xu);return Fd(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var zd=de.createContext(void 0);zd.displayName="FrameworkContext";function Q_(){let a=de.useContext(zd);return Fd(a,"You must render this element inside a <HydratedRouter> element"),a}function eE(a,e){let i=de.useContext(zd),[s,l]=de.useState(!1),[u,f]=de.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,x=de.useRef(null);de.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let A=v=>{v.forEach(U=>{f(U.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[a]),de.useEffect(()=>{if(s){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[s]);let y=()=>{l(!0)},M=()=>{l(!1),f(!1)};return i?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Oo(d,y),onBlur:Oo(m,M),onMouseEnter:Oo(p,y),onMouseLeave:Oo(g,M),onTouchStart:Oo(_,y)}]:[!1,x,{}]}function Oo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function tE({page:a,...e}){let{router:i}=j_(),s=de.useMemo(()=>z_(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?de.createElement(iE,{page:a,matches:s,...e}):null}function nE(a){let{manifest:e,routeModules:i}=Q_(),[s,l]=de.useState([]);return de.useEffect(()=>{let u=!1;return Zy(a,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,i]),s}function iE({page:a,matches:e,...i}){let s=wr(),{manifest:l,routeModules:u}=Q_(),{basename:f}=j_(),{loaderData:d,matches:m}=$y(),p=de.useMemo(()=>Iv(a,e,m,l,s,"data"),[a,e,m,l,s]),g=de.useMemo(()=>Iv(a,e,m,l,s,"assets"),[a,e,m,l,s]),_=de.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let M=new Set,A=!1;if(e.forEach(v=>{let U=l.routes[v.route.id];!U||!U.hasLoader||(!p.some(L=>L.route.id===v.route.id)&&v.route.id in d&&u[v.route.id]?.shouldRevalidate||U.hasClientLoader?A=!0:M.add(v.route.id))}),M.size===0)return[];let S=Wy(a,f,"data");return A&&M.size>0&&S.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[f,d,s,l,p,e,a,u]),x=de.useMemo(()=>Ky(g,l),[g,l]),y=nE(g);return de.createElement(de.Fragment,null,_.map(M=>de.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),x.map(M=>de.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:A})=>de.createElement("link",{key:M,nonce:i.nonce,...A})))}function aE(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var J_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{J_&&(window.__reactRouterVersion="7.9.1")}catch{}function rE({basename:a,children:e,window:i}){let s=de.useRef();s.current==null&&(s.current=qS({window:i,v5Compat:!0}));let l=s.current,[u,f]=de.useState({action:l.action,location:l.location}),d=de.useCallback(m=>{de.startTransition(()=>f(m))},[f]);return de.useLayoutEffect(()=>l.listen(d),[l,d]),de.createElement(Py,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:l})}var $_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e0=de.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:_,...x},y){let{basename:M}=de.useContext(Gi),A=typeof p=="string"&&$_.test(p),S,v=!1;if(typeof p=="string"&&A&&(S=p,J_))try{let C=new URL(window.location.href),w=p.startsWith("//")?new URL(C.protocol+p):new URL(p),H=ha(w.pathname,M);w.origin===C.origin&&H!=null?p=H+w.search+w.hash:v=!0}catch{Hi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=xy(p,{relative:l}),[L,D,I]=eE(s,x),G=uE(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:_});function z(C){e&&e(C),C.defaultPrevented||G(C)}let Z=de.createElement("a",{...x,...I,href:S||U,onClick:v||u?e:z,ref:aE(y,D),target:m,"data-discover":!A&&i==="render"?"true":void 0});return L&&!A?de.createElement(de.Fragment,null,Z,de.createElement(tE,{page:U})):Z});e0.displayName="Link";var sE=de.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let _=Yo(f,{relative:p.relative}),x=wr(),y=de.useContext(Xu),{navigator:M,basename:A}=de.useContext(Gi),S=y!=null&&pE(_)&&d===!0,v=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,U=x.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&A&&(L=ha(L,A)||L);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let I=U===v||!l&&U.startsWith(v)&&U.charAt(D)==="/",G=L!=null&&(L===v||!l&&L.startsWith(v)&&L.charAt(v.length)==="/"),z={isActive:I,isPending:G,isTransitioning:S},Z=I?e:void 0,C;typeof s=="function"?C=s(z):C=[s,I?"active":null,G?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let w=typeof u=="function"?u(z):u;return de.createElement(e0,{...p,"aria-current":Z,className:C,ref:g,style:w,to:f,viewTransition:d},typeof m=="function"?m(z):m)});sE.displayName="NavLink";var oE=de.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:u,method:f=Nu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...x},y)=>{let M=hE(),A=dE(d,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&$_.test(d),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,I=D?.getAttribute("formmethod")||f;M(D||L.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:_})};return de.createElement("form",{ref:y,method:S,action:A,onSubmit:s?m:U,...x,"data-discover":!v&&a==="render"?"true":void 0})});oE.displayName="Form";function lE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t0(a){let e=de.useContext(Ps);return jt(e,lE(a)),e}function uE(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=Sy(),m=wr(),p=Yo(a,{relative:u});return de.useCallback(g=>{if(Gy(g,e)){g.preventDefault();let _=i!==void 0?i:Go(m)===Go(p);d(a,{replace:_,state:s,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,s,e,a,l,u,f])}var cE=0,fE=()=>`__${String(++cE)}__`;function hE(){let{router:a}=t0("useSubmit"),{basename:e}=de.useContext(Gi),i=Uy();return de.useCallback(async(s,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=Xy(s,e);if(l.navigate===!1){let g=l.fetcherKey||fE();await a.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function dE(a,{relative:e}={}){let{basename:i}=de.useContext(Gi),s=de.useContext(ma);jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...Yo(a||".",{relative:e})},f=wr();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ca([i,u.pathname])),Go(u)}function pE(a,{relative:e}={}){let i=de.useContext(W_);jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=t0("useViewTransitionState"),l=Yo(a,{relative:e});if(!i.isTransitioning)return!1;let u=ha(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ha(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Hu(l.pathname,f)!=null||Hu(l.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qu="180",mE=0,Fv=1,gE=2,n0=1,vE=2,la=3,da=0,Tn=1,ni=2,zi=0,As=1,zv=2,Hv=3,Gv=4,_E=5,Mr=100,xE=101,SE=102,yE=103,EE=104,ME=200,TE=201,bE=202,AE=203,Vh=204,kh=205,RE=206,CE=207,wE=208,DE=209,UE=210,LE=211,NE=212,OE=213,PE=214,Xh=0,Wh=1,qh=2,Cs=3,Yh=4,Zh=5,Kh=6,jh=7,i0=0,BE=1,IE=2,qa=0,FE=1,zE=2,HE=3,GE=4,VE=5,kE=6,XE=7,a0=300,ws=301,Ds=302,Qh=303,Jh=304,Yu=306,$h=1e3,br=1001,ed=1002,Ri=1003,WE=1004,fu=1005,Bn=1006,rh=1007,Ar=1008,ai=1009,r0=1010,s0=1011,Vo=1012,Hd=1013,Ya=1014,ua=1015,Zo=1016,Gd=1017,Vd=1018,Us=1020,o0=35902,l0=35899,u0=1021,c0=1022,bi=1023,ko=1026,Ls=1027,f0=1028,kd=1029,h0=1030,Xd=1031,Wd=1033,Pu=33776,Bu=33777,Iu=33778,Fu=33779,td=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,ud=37809,cd=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,vd=37817,_d=37818,xd=37819,Sd=37820,yd=37821,Ed=36492,Md=36494,Td=36495,bd=36283,Ad=36284,Rd=36285,Cd=36286,Ko=3200,qE=3201,YE=0,ZE=1,Ii="",an="srgb",Za="srgb-linear",Gu="linear",zt="srgb",fs=7680,Vv=519,KE=512,jE=513,QE=514,d0=515,JE=516,$E=517,eM=518,tM=519,kv=35044,wd="300 es",Fi=2e3,Vu=2001;class Ka{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Dd=180/Math.PI;function jo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Et(a,e,i){return Math.max(e,Math.min(i,a))}function nM(a,e){return(a%e+e)%e}function oh(a,e,i){return(1-i)*a+i*e}function Po(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,i=0){vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*s-f*l+e.x,this.y=u*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const x=u[f+0],y=u[f+1],M=u[f+2],A=u[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=M,e[i+3]=A;return}if(_!==A||m!==x||p!==y||g!==M){let S=1-d;const v=m*x+p*y+g*M+_*A,U=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const I=Math.sqrt(L),G=Math.atan2(I,v*U);S=Math.sin(S*G)/I,d=Math.sin(d*G)/I}const D=d*U;if(m=m*S+x*D,p=p*S+y*D,g=g*S+M*D,_=_*S+A*D,S===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=I,p*=I,g*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,u,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=u[f],x=u[f+1],y=u[f+2],M=u[f+3];return e[i]=d*M+g*_+m*y-p*x,e[i+1]=m*M+g*x+p*_-d*y,e[i+2]=p*M+g*y+d*x-m*_,e[i+3]=g*M-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(u/2),x=m(s/2),y=m(l/2),M=m(u/2);switch(f){case"XYZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"YXZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"ZXY":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"ZYX":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"YZX":this._x=x*g*_+p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_-x*y*M;break;case"XZY":this._x=x*g*_-p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(f-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(u-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(f-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-s*p,this._z=u*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=f*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Xv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Xv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),g=2*(d*i-u*l),_=2*(u*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-u*_,this.z=l+m*_+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new oe,Xv=new Qo;class ft{constructor(e,i,s,l,u,f,d,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p)}set(e,i,s,l,u,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],x=s[2],y=s[5],M=s[8],A=l[0],S=l[3],v=l[6],U=l[1],L=l[4],D=l[7],I=l[2],G=l[5],z=l[8];return u[0]=f*A+d*U+m*I,u[3]=f*S+d*L+m*G,u[6]=f*v+d*D+m*z,u[1]=p*A+g*U+_*I,u[4]=p*S+g*L+_*G,u[7]=p*v+g*D+_*z,u[2]=x*A+y*U+M*I,u[5]=x*S+y*L+M*G,u[8]=x*v+y*D+M*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-s*u*g+s*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*f-d*p,x=d*m-g*u,y=p*u-f*m,M=i*_+s*x+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(l*p-g*s)*A,e[2]=(d*s-l*f)*A,e[3]=x*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=y*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(uh.makeScale(e,i)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,i){return this.premultiply(uh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new ft;function p0(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ku(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function iM(){const a=ku("canvas");return a.style.display="block",a}const Wv={};function Xo(a){a in Wv||(Wv[a]=!0,console.warn(a))}function aM(a,e,i){return new Promise(function(s,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const qv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const a={enabled:!0,workingColorSpace:Za,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===zt&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ii?Gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Za]:{primaries:e,whitePoint:s,transfer:Gu,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:qv,fromXYZ:Yv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),a}const Rt=rM();function fa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Rs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let hs;class sM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{hs===void 0&&(hs=ku("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=hs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ku("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=fa(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(ch(l[f].image)):u.push(ch(l[f]))}else u=ch(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ch(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?sM.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lM=0;const fh=new oe;class wn extends Ka{constructor(e=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,s=br,l=br,u=Bn,f=Ar,d=bi,m=ai,p=wn.DEFAULT_ANISOTROPY,g=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=jo(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==a0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=a0;wn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],M=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,I=(v+1)/2,G=(g+x)/4,z=(_+A)/4,Z=(M+S)/4;return L>D&&L>I?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=G/s,u=z/s):D>I?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=G/l,u=Z/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=z/u,l=Z/u),this.set(s,l,u,i),this}let U=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(_-A)/U,this.z=(x-g)/U,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends Ka{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new wn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new qd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends uM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class m0 extends wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,yi):yi.fromBufferAttribute(u,f),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hu.copy(s.boundingBox)),hu.applyMatrix4(e.matrixWorld),this.union(hu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),du.subVectors(this.max,Bo),ds.subVectors(e.a,Bo),ps.subVectors(e.b,Bo),ms.subVectors(e.c,Bo),Ha.subVectors(ps,ds),Ga.subVectors(ms,ps),mr.subVectors(ds,ms);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-mr.z,mr.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,mr.z,0,-mr.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-mr.y,mr.x,0];return!hh(i,ds,ps,ms,du)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,ds,ps,ms,du))?!1:(pu.crossVectors(Ha,Ga),i=[pu.x,pu.y,pu.z],hh(i,ds,ps,ms,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ia),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ia=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],yi=new oe,hu=new Jo,ds=new oe,ps=new oe,ms=new oe,Ha=new oe,Ga=new oe,mr=new oe,Bo=new oe,du=new oe,pu=new oe,gr=new oe;function hh(a,e,i,s,l){for(let u=0,f=a.length-3;u<=f;u+=3){gr.fromArray(a,u);const d=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=e.dot(gr),p=i.dot(gr),g=s.dot(gr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fM=new Jo,Io=new oe,dh=new oe;class Yd{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):fM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(dh)),this.expandByPoint(Io.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const aa=new oe,ph=new oe,mu=new oe,Va=new oe,mh=new oe,gu=new oe,gh=new oe;class hM{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ph.copy(e).add(i).multiplyScalar(.5),mu.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(ph);const u=e.distanceTo(i)*.5,f=-this.direction.dot(mu),d=Va.dot(this.direction),m=-Va.dot(mu),p=Va.lengthSq(),g=Math.abs(1-f*f);let _,x,y,M;if(g>0)if(_=f*m-d,x=f*d-m,M=u*g,_>=0)if(x>=-M)if(x<=M){const A=1/g;_*=A,x*=A,y=_*(_+f*x+2*d)+x*(f*_+x+2*m)+p}else x=u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-f*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(_=Math.max(0,-(f*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p);else x=f>0?-u:u,_=Math.max(0,-(f*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ph).addScaledVector(mu,x),y}intersectSphere(e,i){aa.subVectors(e.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,aa)!==null}intersectTriangle(e,i,s,l,u){mh.subVectors(i,e),gu.subVectors(s,e),gh.crossVectors(mh,gu);let f=this.direction.dot(gh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,e);const m=d*this.direction.dot(gu.crossVectors(Va,gu));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Va));if(p<0||m+p>f)return null;const g=-d*Va.dot(gh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,i,s,l,u,f,d,m,p,g,_,x,y,M,A,S){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,f,d,m,p,g,_,x,y,M,A,S)}set(e,i,s,l,u,f,d,m,p,g,_,x,y,M,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),u=1/gs.setFromMatrixColumn(e,1).length(),f=1/gs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=f*g,y=f*_,M=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+M*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,M=p*g,A=p*_;i[0]=x+A*d,i[4]=M*d-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=y*d-M,i[6]=A+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,M=p*g,A=p*_;i[0]=x-A*d,i[4]=-f*_,i[8]=M+y*d,i[1]=y+M*d,i[5]=f*g,i[9]=A-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*g,y=f*_,M=d*g,A=d*_;i[0]=m*g,i[4]=M*p-y,i[8]=x*p+A,i[1]=m*_,i[5]=A*p+x,i[9]=y*p-M,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,y=f*p,M=d*m,A=d*p;i[0]=m*g,i[4]=A-x*_,i[8]=M*_+y,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+M,i[10]=x-A*_}else if(e.order==="XZY"){const x=f*m,y=f*p,M=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+A,i[5]=f*g,i[9]=y*_-M,i[2]=M*_-y,i[6]=d*g,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,pM)}lookAt(e,i,s){const l=this.elements;return ei.subVectors(e,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ka.crossVectors(s,ei),ka.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ka.crossVectors(s,ei)),ka.normalize(),vu.crossVectors(ei,ka),l[0]=ka.x,l[4]=vu.x,l[8]=ei.x,l[1]=ka.y,l[5]=vu.y,l[9]=ei.y,l[2]=ka.z,l[6]=vu.z,l[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],x=s[9],y=s[13],M=s[2],A=s[6],S=s[10],v=s[14],U=s[3],L=s[7],D=s[11],I=s[15],G=l[0],z=l[4],Z=l[8],C=l[12],w=l[1],H=l[5],ne=l[9],ue=l[13],pe=l[2],Q=l[6],P=l[10],k=l[14],W=l[3],xe=l[7],N=l[11],J=l[15];return u[0]=f*G+d*w+m*pe+p*W,u[4]=f*z+d*H+m*Q+p*xe,u[8]=f*Z+d*ne+m*P+p*N,u[12]=f*C+d*ue+m*k+p*J,u[1]=g*G+_*w+x*pe+y*W,u[5]=g*z+_*H+x*Q+y*xe,u[9]=g*Z+_*ne+x*P+y*N,u[13]=g*C+_*ue+x*k+y*J,u[2]=M*G+A*w+S*pe+v*W,u[6]=M*z+A*H+S*Q+v*xe,u[10]=M*Z+A*ne+S*P+v*N,u[14]=M*C+A*ue+S*k+v*J,u[3]=U*G+L*w+D*pe+I*W,u[7]=U*z+L*H+D*Q+I*xe,u[11]=U*Z+L*ne+D*P+I*N,u[15]=U*C+L*ue+D*k+I*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+u*m*_-l*p*_-u*d*x+s*p*x+l*d*y-s*m*y)+A*(+i*m*y-i*p*x+u*f*x-l*f*y+l*p*g-u*m*g)+S*(+i*p*_-i*d*y-u*f*_+s*f*y+u*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*x+l*f*_-s*f*x+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],M=e[12],A=e[13],S=e[14],v=e[15],U=_*S*p-A*x*p+A*m*y-d*S*y-_*m*v+d*x*v,L=M*x*p-g*S*p-M*m*y+f*S*y+g*m*v-f*x*v,D=g*A*p-M*_*p+M*d*y-f*A*y-g*d*v+f*_*v,I=M*_*m-g*A*m-M*d*x+f*A*x+g*d*S-f*_*S,G=i*U+s*L+l*D+u*I;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=U*z,e[1]=(A*x*u-_*S*u-A*l*y+s*S*y+_*l*v-s*x*v)*z,e[2]=(d*S*u-A*m*u+A*l*p-s*S*p-d*l*v+s*m*v)*z,e[3]=(_*m*u-d*x*u-_*l*p+s*x*p+d*l*y-s*m*y)*z,e[4]=L*z,e[5]=(g*S*u-M*x*u+M*l*y-i*S*y-g*l*v+i*x*v)*z,e[6]=(M*m*u-f*S*u-M*l*p+i*S*p+f*l*v-i*m*v)*z,e[7]=(f*x*u-g*m*u+g*l*p-i*x*p-f*l*y+i*m*y)*z,e[8]=D*z,e[9]=(M*_*u-g*A*u-M*s*y+i*A*y+g*s*v-i*_*v)*z,e[10]=(f*A*u-M*d*u+M*s*p-i*A*p-f*s*v+i*d*v)*z,e[11]=(g*d*u-f*_*u-g*s*p+i*_*p+f*s*y-i*d*y)*z,e[12]=I*z,e[13]=(g*A*l-M*_*l+M*s*x-i*A*x-g*s*S+i*_*S)*z,e[14]=(M*d*l-f*A*l-M*s*m+i*A*m+f*s*S-i*d*S)*z,e[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=e.x,d=e.y,m=e.z,p=u*f,g=u*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,f){return this.set(1,s,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,_=d+d,x=u*p,y=u*g,M=u*_,A=f*g,S=f*_,v=d*_,U=m*p,L=m*g,D=m*_,I=s.x,G=s.y,z=s.z;return l[0]=(1-(A+v))*I,l[1]=(y+D)*I,l[2]=(M-L)*I,l[3]=0,l[4]=(y-D)*G,l[5]=(1-(x+v))*G,l[6]=(S+U)*G,l[7]=0,l[8]=(M+L)*z,l[9]=(S-U)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=gs.set(l[0],l[1],l[2]).length();const f=gs.set(l[4],l[5],l[6]).length(),d=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Ei.copy(this);const p=1/u,g=1/f,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),s.x=u,s.y=f,s.z=d,this}makePerspective(e,i,s,l,u,f,d=Fi,m=!1){const p=this.elements,g=2*u/(i-e),_=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(m)M=u/(f-u),A=f*u/(f-u);else if(d===Fi)M=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===Vu)M=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,f,d=Fi,m=!1){const p=this.elements,g=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let M,A;if(m)M=1/(f-u),A=f/(f-u);else if(d===Fi)M=-2/(f-u),A=-(f+u)/(f-u);else if(d===Vu)M=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const gs=new oe,Ei=new mn,dM=new oe(0,0,0),pM=new oe(1,1,1),ka=new oe,vu=new oe,ei=new oe,Zv=new mn,Kv=new Qo;class pa{constructor(e=0,i=0,s=0,l=pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Kv.setFromEuler(this),this.setFromQuaternion(Kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pa.DEFAULT_ORDER="XYZ";class g0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const jv=new oe,vs=new Qo,ra=new mn,_u=new oe,Fo=new oe,gM=new oe,vM=new Qo,Qv=new oe(1,0,0),Jv=new oe(0,1,0),$v=new oe(0,0,1),e_={type:"added"},_M={type:"removed"},_s={type:"childadded",child:null},vh={type:"childremoved",child:null};class ii extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new oe,i=new pa,s=new Qo,l=new oe(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ft}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Qv,e)}rotateY(e){return this.rotateOnAxis(Jv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,i){return jv.copy(e).applyQuaternion(this.quaternion),this.position.add(jv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Qv,e)}translateY(e){return this.translateOnAxis(Jv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_u.copy(e):_u.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Fo,_u,this.up):ra.lookAt(_u,Fo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ra),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_M),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),x=f(e.skeletons),y=f(e.animations),M=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ii.DEFAULT_UP=new oe(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new oe,sa=new oe,_h=new oe,oa=new oe,xs=new oe,Ss=new oe,t_=new oe,xh=new oe,Sh=new oe,yh=new oe,Eh=new rn,Mh=new rn,Th=new rn;class Ti{constructor(e=new oe,i=new oe,s=new oe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Mi.subVectors(l,i),sa.subVectors(s,i),_h.subVectors(e,i);const f=Mi.dot(Mi),d=Mi.dot(sa),m=Mi.dot(_h),p=sa.dot(sa),g=sa.dot(_h),_=f*p-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,M=(f*g-d*m)*x;return u.set(1-y-M,M,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(e,i,s,l,u,f,d,m){return this.getBarycoord(e,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,f){return Eh.setScalar(0),Mh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,i),Mh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Eh,u.x),f.addScaledVector(Mh,u.y),f.addScaledVector(Th,u.z),f}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),sa.subVectors(e,i),Mi.cross(sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Mi.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let f,d;xs.subVectors(l,s),Ss.subVectors(u,s),xh.subVectors(e,s);const m=xs.dot(xh),p=Ss.dot(xh);if(m<=0&&p<=0)return i.copy(s);Sh.subVectors(e,l);const g=xs.dot(Sh),_=Ss.dot(Sh);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(xs,f);yh.subVectors(e,u);const y=xs.dot(yh),M=Ss.dot(yh);if(M>=0&&y<=M)return i.copy(u);const A=y*p-m*M;if(A<=0&&p>=0&&M<=0)return d=p/(p-M),i.copy(s).addScaledVector(Ss,d);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return t_.subVectors(u,l),d=(_-g)/(_-g+(y-M)),i.copy(l).addScaledVector(t_,d);const v=1/(S+A+x);return f=A*v,d=x*v,i.copy(s).addScaledVector(xs,f).addScaledVector(Ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},xu={h:0,s:0,l:0};function bh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Lt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=nM(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=bh(f,u,e+1/3),this.g=bh(f,u,e),this.b=bh(f,u,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=an){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=an){const s=v0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,u=Pn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=an){Rt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==an?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(xu);const s=oh(Xa.h,xu.h,i),l=oh(Xa.s,xu.s,i),u=oh(Xa.l,xu.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Lt;Lt.NAMES=v0;let xM=0;class Bs extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=As,this.side=da,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(s.blending=this.blending),this.side!==da&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==Mr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _0 extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new oe,Su=new vt;let SM=0;class pi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=kv,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(e),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),u=qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kv&&(e.usage=this.usage),e}}class x0 extends pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class S0 extends pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Rr extends pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let yM=0;const hi=new mn,Ah=new ii,ys=new oe,ti=new Jo,zo=new Jo,En=new oe;class ja extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?S0:x0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ft().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,s){return hi.makeTranslation(e,i,s),this.applyMatrix4(hi),this}scale(e,i,s){return hi.makeScale(e,i,s),this.applyMatrix4(hi),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Rr(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ti.min,zo.min),ti.expandByPoint(En),En.addVectors(ti.max,zo.max),ti.expandByPoint(En)):(ti.expandByPoint(zo.min),ti.expandByPoint(zo.max))}ti.getCenter(s);let l=0;for(let u=0,f=e.count;u<f;u++)En.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(En));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)En.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(e,p),En.add(ys)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new oe,m[Z]=new oe;const p=new oe,g=new oe,_=new oe,x=new vt,y=new vt,M=new vt,A=new oe,S=new oe;function v(Z,C,w){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,C),_.fromBufferAttribute(s,w),x.fromBufferAttribute(u,Z),y.fromBufferAttribute(u,C),M.fromBufferAttribute(u,w),g.sub(p),_.sub(p),y.sub(x),M.sub(x);const H=1/(y.x*M.y-M.x*y.y);isFinite(H)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(H),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(H),d[Z].add(A),d[C].add(A),d[w].add(A),m[Z].add(S),m[C].add(S),m[w].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Z=0,C=U.length;Z<C;++Z){const w=U[Z],H=w.start,ne=w.count;for(let ue=H,pe=H+ne;ue<pe;ue+=3)v(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new oe,D=new oe,I=new oe,G=new oe;function z(Z){I.fromBufferAttribute(l,Z),G.copy(I);const C=d[Z];L.copy(C),L.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(G,C);const H=D.dot(m[Z])<0?-1:1;f.setXYZW(Z,L.x,L.y,L.z,H)}for(let Z=0,C=U.length;Z<C;++Z){const w=U[Z],H=w.start,ne=w.count;for(let ue=H,pe=H+ne;ue<pe;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new oe,u=new oe,f=new oe,d=new oe,m=new oe,p=new oe,g=new oe,_=new oe;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),d.add(g),m.add(g),p.add(g),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,M=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)x[M++]=p[y++]}return new pi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ja,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n_=new mn,vr=new hM,yu=new Yd,i_=new oe,Eu=new oe,Mu=new oe,Tu=new oe,Rh=new oe,bu=new oe,a_=new oe,Au=new oe;class Ai extends ii{constructor(e=new ja,i=new _0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){bu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(Rh.fromBufferAttribute(_,e),f?bu.addScaledVector(Rh,g):bu.addScaledVector(Rh.sub(i),g))}i.add(bu)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yu.copy(s.boundingSphere),yu.applyMatrix4(u),vr.copy(e.ray).recast(e.near),!(yu.containsPoint(vr.origin)===!1&&(vr.intersectSphere(yu,i_)===null||vr.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(n_.copy(u).invert(),vr.copy(e.ray).applyMatrix4(n_),!(s.boundingBox!==null&&vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,vr)))}_computeIntersections(e,i,s){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],U=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=U,I=L;D<I;D+=3){const G=d.getX(D),z=d.getX(D+1),Z=d.getX(D+2);l=Ru(this,v,e,s,p,g,_,G,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const U=d.getX(S),L=d.getX(S+1),D=d.getX(S+2);l=Ru(this,f,e,s,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=f[S.materialIndex],U=Math.max(S.start,y.start),L=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=U,I=L;D<I;D+=3){const G=D,z=D+1,Z=D+2;l=Ru(this,v,e,s,p,g,_,G,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const U=S,L=S+1,D=S+2;l=Ru(this,f,e,s,p,g,_,U,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function EM(a,e,i,s,l,u,f,d){let m;if(e.side===Tn?m=s.intersectTriangle(f,u,l,!0,d):m=s.intersectTriangle(l,u,f,e.side===da,d),m===null)return null;Au.copy(d),Au.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Au);return p<i.near||p>i.far?null:{distance:p,point:Au.clone(),object:a}}function Ru(a,e,i,s,l,u,f,d,m,p){a.getVertexPosition(d,Eu),a.getVertexPosition(m,Mu),a.getVertexPosition(p,Tu);const g=EM(a,e,i,s,Eu,Mu,Tu,a_);if(g){const _=new oe;Ti.getBarycoord(a_,Eu,Mu,Tu,_),l&&(g.uv=Ti.getInterpolatedAttribute(l,d,m,p,_,new vt)),u&&(g.uv1=Ti.getInterpolatedAttribute(u,d,m,p,_,new vt)),f&&(g.normal=Ti.getInterpolatedAttribute(f,d,m,p,_,new oe),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new oe,materialIndex:0};Ti.getNormal(Eu,Mu,Tu,x.normal),g.face=x,g.barycoord=_}return g}class $o extends ja{constructor(e=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,s,i,e,f,u,0),M("z","y","x",1,-1,s,i,-e,f,u,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,u,4),M("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Rr(p,3)),this.setAttribute("normal",new Rr(g,3)),this.setAttribute("uv",new Rr(_,2));function M(A,S,v,U,L,D,I,G,z,Z,C){const w=D/z,H=I/Z,ne=D/2,ue=I/2,pe=G/2,Q=z+1,P=Z+1;let k=0,W=0;const xe=new oe;for(let N=0;N<P;N++){const J=N*H-ue;for(let Se=0;Se<Q;Se++){const ye=Se*w-ne;xe[A]=ye*U,xe[S]=J*L,xe[v]=pe,p.push(xe.x,xe.y,xe.z),xe[A]=0,xe[S]=0,xe[v]=G>0?1:-1,g.push(xe.x,xe.y,xe.z),_.push(Se/z),_.push(1-N/Z),k+=1}}for(let N=0;N<Z;N++)for(let J=0;J<z;J++){const Se=x+J+Q*N,ye=x+J+Q*(N+1),De=x+(J+1)+Q*(N+1),Ge=x+(J+1)+Q*N;m.push(Se,ye,Ge),m.push(ye,De,Ge),W+=6}d.addGroup(y,W,C),y+=W,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Hn(a){const e={};for(let i=0;i<a.length;i++){const s=Ns(a[i]);for(const l in s)e[l]=s[l]}return e}function MM(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function y0(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const TM={clone:Ns,merge:Hn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zd extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new oe,r_=new vt,s_=new vt;class di extends Zd{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Wa.x,Wa.y).multiplyScalar(-e/Wa.z)}getViewSize(e,i){return this.getViewBounds(e,r_,s_),i.subVectors(s_,r_)}setViewOffset(e,i,s,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ms=1;class RM extends ii{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Es,Ms,e,i);l.layers=this.layers,this.add(l);const u=new di(Es,Ms,e,i);u.layers=this.layers,this.add(u);const f=new di(Es,Ms,e,i);f.layers=this.layers,this.add(f);const d=new di(Es,Ms,e,i);d.layers=this.layers,this.add(d);const m=new di(Es,Ms,e,i);m.layers=this.layers,this.add(m);const p=new di(Es,Ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(_,x,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class E0 extends wn{constructor(e=[],i=ws,s,l,u,f,d,m,p,g){super(e,i,s,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends Ci{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new E0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $o(5,5,5),u=new mi({name:"CubemapFromEquirect",uniforms:Ns(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Tn,blending:zi});u.uniforms.tEquirect.value=i;const f=new Ai(l,u),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Bn),new RM(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(u)}}class Cu extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Cu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Ud extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wh=new oe,DM=new oe,UM=new ft;class yr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=wh.subVectors(s,i).cross(DM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||UM.getNormalMatrix(e),l=this.coplanarPoint(wh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Yd,LM=new vt(.5,.5),wu=new oe;class M0{constructor(e=new yr,i=new yr,s=new yr,l=new yr,u=new yr,f=new yr){this.planes=[e,i,s,l,u,f]}set(e,i,s,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Fi,s=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],_=u[5],x=u[6],y=u[7],M=u[8],A=u[9],S=u[10],v=u[11],U=u[12],L=u[13],D=u[14],I=u[15];if(l[0].setComponents(p-f,y-g,v-M,I-U).normalize(),l[1].setComponents(p+f,y+g,v+M,I+U).normalize(),l[2].setComponents(p+d,y+_,v+A,I+L).normalize(),l[3].setComponents(p-d,y-_,v-A,I-L).normalize(),s)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,y-x,v-S,I-D).normalize();else if(l[4].setComponents(p-m,y-x,v-S,I-D).normalize(),i===Fi)l[5].setComponents(p+m,y+x,v+S,I+D).normalize();else if(i===Vu)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const i=LM.distanceTo(e.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wu.x=l.normal.x>0?e.max.x:e.min.x,wu.y=l.normal.y>0?e.max.y:e.min.y,wu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kd extends wn{constructor(e,i,s=Ya,l,u,f,d=Ri,m=Ri,p,g=ko,_=1){if(g!==ko&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,u,f,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class T0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends ja{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=e/d,x=i/m,y=[],M=[],A=[],S=[];for(let v=0;v<g;v++){const U=v*x-f;for(let L=0;L<p;L++){const D=L*_-u;M.push(D,-U,0),A.push(0,0,1),S.push(L/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<d;U++){const L=U+p*v,D=U+p*(v+1),I=U+1+p*(v+1),G=U+1+p*v;y.push(L,D,G),y.push(D,I,G)}this.setIndex(y),this.setAttribute("position",new Rr(M,3)),this.setAttribute("normal",new Rr(A,3)),this.setAttribute("uv",new Rr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}class NM extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ko,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class b0 extends Zd{constructor(e=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class PM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class pn{constructor(e){this.value=e}clone(){return new pn(this.value.clone===void 0?this.value:this.value.clone())}}function o_(a,e,i,s){const l=IM(s);switch(i){case u0:return a*e;case f0:return a*e/l.components*l.byteLength;case kd:return a*e/l.components*l.byteLength;case h0:return a*e*2/l.components*l.byteLength;case Xd:return a*e*2/l.components*l.byteLength;case c0:return a*e*3/l.components*l.byteLength;case bi:return a*e*4/l.components*l.byteLength;case Wd:return a*e*4/l.components*l.byteLength;case Pu:case Bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Fu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case nd:case ad:return Math.max(a,16)*Math.max(e,8)/4;case td:case id:return Math.max(a,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case cd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ed:case Md:case Td:return Math.ceil(a/4)*Math.ceil(e/4)*16;case bd:case Ad:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Rd:case Cd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IM(a){switch(a){case ai:case r0:return{byteLength:1,components:1};case Vo:case s0:case Zo:return{byteLength:2,components:1};case Gd:case Vd:return{byteLength:2,components:4};case Ya:case Hd:case ua:return{byteLength:4,components:1};case o0:case l0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A0(){let a=null,e=!1,i=null,s=null;function l(u,f){i(u,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){a=u}}}function FM(a){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(a.bindBuffer(p,d),_.length===0)a.bufferSubData(p,0,g);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],A=_[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const A=_[y];a.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
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
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
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
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YM=`#ifdef USE_BATCHING
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
#endif`,ZM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,uT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
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
#endif`,IT=`struct PhysicalMaterial {
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
}`,FT=`
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZT=`#if defined( USE_POINTS_UV )
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
#endif`,KT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mb=`float getShadowMask() {
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,nA=`#define MATCAP
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
}`,iA=`#define MATCAP
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
}`,aA=`#define NORMAL
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
}`,rA=`#define NORMAL
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
}`,sA=`#define PHONG
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
}`,oA=`#define PHONG
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
}`,lA=`#define STANDARD
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
}`,uA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,fA=`#define TOON
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
}`,hA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 color;
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
}`,gA=`uniform float rotation;
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
}`,vA=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:kM,alphatest_pars_fragment:XM,aomap_fragment:WM,aomap_pars_fragment:qM,batching_pars_vertex:YM,batching_vertex:ZM,begin_vertex:KM,beginnormal_vertex:jM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:$M,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:aT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:lT,cube_uv_reflection_fragment:uT,defaultnormal_vertex:cT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:vT,envmap_common_pars_fragment:_T,envmap_pars_fragment:xT,envmap_pars_vertex:ST,envmap_physical_pars_fragment:UT,envmap_vertex:yT,fog_vertex:ET,fog_pars_vertex:MT,fog_fragment:TT,fog_pars_fragment:bT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:wT,lights_pars_begin:DT,lights_toon_fragment:LT,lights_toon_pars_fragment:NT,lights_phong_fragment:OT,lights_phong_pars_fragment:PT,lights_physical_fragment:BT,lights_physical_pars_fragment:IT,lights_fragment_begin:FT,lights_fragment_maps:zT,lights_fragment_end:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:XT,map_fragment:WT,map_pars_fragment:qT,map_particle_fragment:YT,map_particle_pars_fragment:ZT,metalnessmap_fragment:KT,metalnessmap_pars_fragment:jT,morphinstance_vertex:QT,morphcolor_vertex:JT,morphnormal_vertex:$T,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:ab,normal_pars_vertex:rb,normal_vertex:sb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:cb,iridescence_pars_fragment:fb,opaque_fragment:hb,packing:db,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:vb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:Sb,shadowmap_pars_vertex:yb,shadowmap_vertex:Eb,shadowmask_pars_fragment:Mb,skinbase_vertex:Tb,skinning_pars_vertex:bb,skinning_vertex:Ab,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:wb,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Lb,transmission_pars_fragment:Nb,uv_pars_fragment:Ob,uv_pars_vertex:Pb,uv_vertex:Bb,worldpos_vertex:Ib,background_vert:Fb,background_frag:zb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:kb,depth_vert:Xb,depth_frag:Wb,distanceRGBA_vert:qb,distanceRGBA_frag:Yb,equirect_vert:Zb,equirect_frag:Kb,linedashed_vert:jb,linedashed_frag:Qb,meshbasic_vert:Jb,meshbasic_frag:$b,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:aA,meshnormal_frag:rA,meshphong_vert:sA,meshphong_frag:oA,meshphysical_vert:lA,meshphysical_frag:uA,meshtoon_vert:cA,meshtoon_frag:fA,points_vert:hA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:vA},Pe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Hn([Pe.lights,Pe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Du={r:0,b:0,g:0},xr=new pa,_A=new mn;function xA(a,e,i,s,l,u,f){const d=new Lt(0);let m=u===!0?0:1,p,g,_=null,x=0,y=null;function M(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const I=M(L);I===null?v(d,m):I&&I.isColor&&(v(I,1),D=!0);const G=a.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function S(L,D){const I=M(D);I&&(I.isCubeTexture||I.mapping===Yu)?(g===void 0&&(g=new Ai(new $o(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Ns(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),xr.copy(D.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(xr)),g.material.toneMapped=Rt.getTransfer(I.colorSpace)!==zt,(_!==I||x!==I.version||y!==a.toneMapping)&&(g.material.needsUpdate=!0,_=I,x=I.version,y=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ai(new el(2,2),new mi({name:"BackgroundMaterial",uniforms:Ns(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:da,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(I.colorSpace)!==zt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,_=I,x=I.version,y=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,D){L.getRGB(Du,y0(a)),s.buffers.color.setClear(Du.r,Du.g,Du.b,D,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:S,dispose:U}}function SA(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,f=!1;function d(w,H,ne,ue,pe){let Q=!1;const P=_(ue,ne,H);u!==P&&(u=P,p(u.object)),Q=y(w,ue,ne,pe),Q&&M(w,ue,ne,pe),pe!==null&&e.update(pe,a.ELEMENT_ARRAY_BUFFER),(Q||f)&&(f=!1,D(w,H,ne,ue),pe!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return a.createVertexArray()}function p(w){return a.bindVertexArray(w)}function g(w){return a.deleteVertexArray(w)}function _(w,H,ne){const ue=ne.wireframe===!0;let pe=s[w.id];pe===void 0&&(pe={},s[w.id]=pe);let Q=pe[H.id];Q===void 0&&(Q={},pe[H.id]=Q);let P=Q[ue];return P===void 0&&(P=x(m()),Q[ue]=P),P}function x(w){const H=[],ne=[],ue=[];for(let pe=0;pe<i;pe++)H[pe]=0,ne[pe]=0,ue[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ne,attributeDivisors:ue,object:w,attributes:{},index:null}}function y(w,H,ne,ue){const pe=u.attributes,Q=H.attributes;let P=0;const k=ne.getAttributes();for(const W in k)if(k[W].location>=0){const N=pe[W];let J=Q[W];if(J===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;P++}return u.attributesNum!==P||u.index!==ue}function M(w,H,ne,ue){const pe={},Q=H.attributes;let P=0;const k=ne.getAttributes();for(const W in k)if(k[W].location>=0){let N=Q[W];N===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),pe[W]=J,P++}u.attributes=pe,u.attributesNum=P,u.index=ue}function A(){const w=u.newAttributes;for(let H=0,ne=w.length;H<ne;H++)w[H]=0}function S(w){v(w,0)}function v(w,H){const ne=u.newAttributes,ue=u.enabledAttributes,pe=u.attributeDivisors;ne[w]=1,ue[w]===0&&(a.enableVertexAttribArray(w),ue[w]=1),pe[w]!==H&&(a.vertexAttribDivisor(w,H),pe[w]=H)}function U(){const w=u.newAttributes,H=u.enabledAttributes;for(let ne=0,ue=H.length;ne<ue;ne++)H[ne]!==w[ne]&&(a.disableVertexAttribArray(ne),H[ne]=0)}function L(w,H,ne,ue,pe,Q,P){P===!0?a.vertexAttribIPointer(w,H,ne,pe,Q):a.vertexAttribPointer(w,H,ne,ue,pe,Q)}function D(w,H,ne,ue){A();const pe=ue.attributes,Q=ne.getAttributes(),P=H.defaultAttributeValues;for(const k in Q){const W=Q[k];if(W.location>=0){let xe=pe[k];if(xe===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),xe!==void 0){const N=xe.normalized,J=xe.itemSize,Se=e.get(xe);if(Se===void 0)continue;const ye=Se.buffer,De=Se.type,Ge=Se.bytesPerElement,ee=De===a.INT||De===a.UNSIGNED_INT||xe.gpuType===Hd;if(xe.isInterleavedBufferAttribute){const me=xe.data,Re=me.stride,Ie=xe.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)v(W.location+He,me.meshPerAttribute);w.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<W.locationSize;He++)S(W.location+He);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let He=0;He<W.locationSize;He++)L(W.location+He,J/W.locationSize,De,N,Re*Ge,(Ie+J/W.locationSize*He)*Ge,ee)}else{if(xe.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)v(W.location+me,xe.meshPerAttribute);w.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let me=0;me<W.locationSize;me++)S(W.location+me);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let me=0;me<W.locationSize;me++)L(W.location+me,J/W.locationSize,De,N,J*Ge,J/W.locationSize*me*Ge,ee)}}else if(P!==void 0){const N=P[k];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(W.location,N);break;case 3:a.vertexAttrib3fv(W.location,N);break;case 4:a.vertexAttrib4fv(W.location,N);break;default:a.vertexAttrib1fv(W.location,N)}}}}U()}function I(){Z();for(const w in s){const H=s[w];for(const ne in H){const ue=H[ne];for(const pe in ue)g(ue[pe].object),delete ue[pe];delete H[ne]}delete s[w]}}function G(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const ne in H){const ue=H[ne];for(const pe in ue)g(ue[pe].object),delete ue[pe];delete H[ne]}delete s[w.id]}function z(w){for(const H in s){const ne=s[H];if(ne[w.id]===void 0)continue;const ue=ne[w.id];for(const pe in ue)g(ue[pe].object),delete ue[pe];delete ne[w.id]}}function Z(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:U}}function yA(a,e,i){let s;function l(p){s=p}function u(p,g){a.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(a.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];i.update(y,s,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A]*x[A];i.update(M,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function EA(a,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==bi&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ua&&!Z)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),D=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,G=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:I,maxSamples:G}}function MA(a){const e=this;let i=null,s=0,l=!1,u=!1;const f=new yr,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=a.get(_);if(!l||M===null||M.length===0||u&&!S)u?g(null):p();else{const U=u?0:s,L=U*4;let D=v.clippingState||null;m.value=D,D=g(M,x,L,y);for(let I=0;I!==L;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,x,y,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,M!==!0||S===null){const v=y+A*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,D=y;L!==A;++L,D+=4)f.copy(_[L]).applyMatrix4(U,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function TA(a){let e=new WeakMap;function i(f,d){return d===Qh?f.mapping=ws:d===Jh&&(f.mapping=Ds),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qh||d===Jh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new CM(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const bs=4,l_=[.125,.215,.35,.446,.526,.582],Tr=20,Dh=new b0,u_=new Lt;let Uh=null,Lh=0,Nh=0,Oh=!1;const Er=(1+Math.sqrt(5))/2,Ts=1/Er,c_=[new oe(-Er,Ts,0),new oe(Er,Ts,0),new oe(-Ts,0,Er),new oe(Ts,0,Er),new oe(0,Er,-Ts),new oe(0,Er,Ts),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],bA=new oe;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=bA}=u;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ws||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Zo,format:bi,colorSpace:Za,depthBuffer:!1},l=h_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AA(u)),this._blurMaterial=RA(u,e,i)}return l}_compileMaterial(e){const i=new Ai(this._lodPlanes[0],e);this._renderer.compile(i,Dh)}_sceneToCubeUV(e,i,s,l,u){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(u_),_.toneMapping=qa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new _0({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),S=new Ai(new $o,A);let v=!1;const U=e.background;U?U.isColor&&(A.color.copy(U),e.background=null,v=!0):(A.color.copy(u_),v=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const I=this._cubeSize;Uu(l,D*I,L>2?I:0,I,I),_.setRenderTarget(l),v&&_.render(S,m),_.render(e,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ws||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Ai(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Uu(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Dh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=c_[(l-u-1)%c_.length];this._blur(e,u-1,u,f,d)}i.autoClear=s}_blur(e,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",u),this._halfBlur(f,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ai(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Tr-1),A=u/M,S=isFinite(u)?1+Math.floor(g*A):Tr;S>Tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Tr}`);const v=[];let U=0;for(let z=0;z<Tr;++z){const Z=z/A,C=Math.exp(-Z*Z/2);v.push(C),z===0?U+=C:z<S&&(U+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/U;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-s;const D=this._sizeLods[l],I=3*D*(l>L-bs?l-L+bs:0),G=4*(this._cubeSize-D);Uu(i,I,G,3*D,2*D),m.setRenderTarget(i),m.render(_,Dh)}}function AA(a){const e=[],i=[],s=[];let l=a;const u=a-bs+1+l_.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>a-bs?m=l_[f-a+bs-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,A=3,S=2,v=1,U=new Float32Array(A*M*y),L=new Float32Array(S*M*y),D=new Float32Array(v*M*y);for(let G=0;G<y;G++){const z=G%3*2/3-1,Z=G>2?0:-1,C=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];U.set(C,A*M*G),L.set(x,S*M*G);const w=[G,G,G,G,G,G];D.set(w,v*M*G)}const I=new ja;I.setAttribute("position",new pi(U,A)),I.setAttribute("uv",new pi(L,S)),I.setAttribute("faceIndex",new pi(D,v)),e.push(I),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function h_(a,e,i){const s=new Ci(a,e,i);return s.texture.mapping=Yu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Uu(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function RA(a,e,i){const s=new Float32Array(Tr),l=new oe(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function d_(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function p_(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function CA(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,g=m===ws||m===Ds;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new f_(a)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new f_(a)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function wA(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function DA(a,e,i,s){const l={},u=new WeakMap;function f(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],a.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let A=0;if(y!==null){const U=y.array;A=y.version;for(let L=0,D=U.length;L<D;L+=3){const I=U[L+0],G=U[L+1],z=U[L+2];x.push(I,G,G,z,z,I)}}else if(M!==void 0){const U=M.array;A=M.version;for(let L=0,D=U.length/3-1;L<D;L+=3){const I=L+0,G=L+1,z=L+2;x.push(I,G,G,z,z,I)}}else return;const S=new(p0(x)?S0:x0)(x,1);S.version=A;const v=u.get(_);v&&e.remove(v),u.set(_,S)}function g(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function UA(a,e,i){let s;function l(x){s=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){a.drawElements(s,y,u,x*f),i.update(y,s,1)}function p(x,y,M){M!==0&&(a.drawElementsInstanced(s,y,u,x*f,M),i.update(y,s,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];i.update(S,s,1)}function _(x,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,A,0,M);let v=0;for(let U=0;U<M;U++)v+=y[U]*A[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function LA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=d*(u/3);break;case a.LINES:i.lines+=d*(u/2);break;case a.LINE_STRIP:i.lines+=d*(u-1);break;case a.LINE_LOOP:i.lines+=d*u;break;case a.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NA(a,e,i){const s=new WeakMap,l=new rn;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let w=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;M===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let I=d.attributes.position.count*D,G=1;I>e.maxTextureSize&&(G=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*G*4*_),Z=new m0(z,I,G,_);Z.type=ua,Z.needsUpdate=!0;const C=D*4;for(let H=0;H<_;H++){const ne=v[H],ue=U[H],pe=L[H],Q=I*G*4*H;for(let P=0;P<ne.count;P++){const k=P*C;M===!0&&(l.fromBufferAttribute(ne,P),z[Q+k+0]=l.x,z[Q+k+1]=l.y,z[Q+k+2]=l.z,z[Q+k+3]=0),A===!0&&(l.fromBufferAttribute(ue,P),z[Q+k+4]=l.x,z[Q+k+5]=l.y,z[Q+k+6]=l.z,z[Q+k+7]=0),S===!0&&(l.fromBufferAttribute(pe,P),z[Q+k+8]=l.x,z[Q+k+9]=l.y,z[Q+k+10]=l.z,z[Q+k+11]=pe.itemSize===4?l.w:1)}}x={count:_,texture:Z,size:new vt(I,G)},s.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",A),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function OA(a,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const R0=new wn,m_=new Kd(1,1),C0=new m0,w0=new cM,D0=new E0,g_=[],v_=[],__=new Float32Array(16),x_=new Float32Array(9),S_=new Float32Array(4);function Is(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let u=g_[l];if(u===void 0&&(u=new Float32Array(l),g_[l]=u),e!==0){s.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,a[f].toArray(u,d)}return u}function gn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function vn(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Zu(a,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function PA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function BA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2fv(this.addr,e),vn(i,e)}}function IA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;a.uniform3fv(this.addr,e),vn(i,e)}}function FA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4fv(this.addr,e),vn(i,e)}}function zA(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;S_.set(s),a.uniformMatrix2fv(this.addr,!1,S_),vn(i,s)}}function HA(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;x_.set(s),a.uniformMatrix3fv(this.addr,!1,x_),vn(i,s)}}function GA(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,s))return;__.set(s),a.uniformMatrix4fv(this.addr,!1,__),vn(i,s)}}function VA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function kA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2iv(this.addr,e),vn(i,e)}}function XA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;a.uniform3iv(this.addr,e),vn(i,e)}}function WA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4iv(this.addr,e),vn(i,e)}}function qA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function YA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;a.uniform2uiv(this.addr,e),vn(i,e)}}function ZA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;a.uniform3uiv(this.addr,e),vn(i,e)}}function KA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;a.uniform4uiv(this.addr,e),vn(i,e)}}function jA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(m_.compareFunction=d0,u=m_):u=R0,i.setTexture2D(e||u,l)}function QA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||w0,l)}function JA(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||D0,l)}function $A(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||C0,l)}function e1(a){switch(a){case 5126:return PA;case 35664:return BA;case 35665:return IA;case 35666:return FA;case 35674:return zA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return qA;case 36294:return YA;case 36295:return ZA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}function t1(a,e){a.uniform1fv(this.addr,e)}function n1(a,e){const i=Is(e,this.size,2);a.uniform2fv(this.addr,i)}function i1(a,e){const i=Is(e,this.size,3);a.uniform3fv(this.addr,i)}function a1(a,e){const i=Is(e,this.size,4);a.uniform4fv(this.addr,i)}function r1(a,e){const i=Is(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function s1(a,e){const i=Is(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function o1(a,e){const i=Is(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function l1(a,e){a.uniform1iv(this.addr,e)}function u1(a,e){a.uniform2iv(this.addr,e)}function c1(a,e){a.uniform3iv(this.addr,e)}function f1(a,e){a.uniform4iv(this.addr,e)}function h1(a,e){a.uniform1uiv(this.addr,e)}function d1(a,e){a.uniform2uiv(this.addr,e)}function p1(a,e){a.uniform3uiv(this.addr,e)}function m1(a,e){a.uniform4uiv(this.addr,e)}function g1(a,e,i){const s=this.cache,l=e.length,u=Zu(i,l);gn(s,u)||(a.uniform1iv(this.addr,u),vn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||R0,u[f])}function v1(a,e,i){const s=this.cache,l=e.length,u=Zu(i,l);gn(s,u)||(a.uniform1iv(this.addr,u),vn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||w0,u[f])}function _1(a,e,i){const s=this.cache,l=e.length,u=Zu(i,l);gn(s,u)||(a.uniform1iv(this.addr,u),vn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||D0,u[f])}function x1(a,e,i){const s=this.cache,l=e.length,u=Zu(i,l);gn(s,u)||(a.uniform1iv(this.addr,u),vn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||C0,u[f])}function S1(a){switch(a){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return a1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return u1;case 35668:case 35672:return c1;case 35669:case 35673:return f1;case 5125:return h1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}class y1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=e1(i.type)}}class E1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=S1(i.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function y_(a,e){a.seq.push(e),a.map[e.id]=e}function T1(a,e,i){const s=a.name,l=s.length;for(Ph.lastIndex=0;;){const u=Ph.exec(s),f=Ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){y_(i,p===void 0?new y1(d,a,e):new E1(d,a,e));break}else{let _=i.map[d];_===void 0&&(_=new M1(d),y_(i,_)),i=_}}}class zu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);T1(u,f,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function E_(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const b1=37297;let A1=0;function R1(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const M_=new ft;function C1(a){Rt._getMatrix(M_,Rt.workingColorSpace,a);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(a)){case Gu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function T_(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+R1(a.getShaderSource(e),d)}else return u}function w1(a,e){const i=C1(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function D1(a,e){let i;switch(e){case FE:i="Linear";break;case zE:i="Reinhard";break;case HE:i="Cineon";break;case GE:i="ACESFilmic";break;case kE:i="AgX";break;case XE:i="Neutral";break;case VE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lu=new oe;function U1(){Rt.getLuminanceCoefficients(Lu);const a=Lu.x.toFixed(4),e=Lu.y.toFixed(4),i=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function N1(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function O1(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=a.getActiveAttrib(e,l),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return i}function Ho(a){return a!==""}function b_(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(a){return a.replace(P1,I1)}const B1=new Map;function I1(a,e){let i=pt[e];if(i===void 0){const s=B1.get(e);if(s!==void 0)i=pt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ld(i)}const F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(a){return a.replace(F1,z1)}function z1(a,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C_(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function H1(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===vE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===la&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ws:case Ds:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V1(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function k1(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case i0:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function X1(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function W1(a,e,i,s){const l=a.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=H1(i),p=G1(i),g=V1(i),_=k1(i),x=X1(i),y=L1(i),M=N1(u),A=l.createProgram();let S,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),v.length>0&&(v+=`
`)):(S=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),v=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pt.tonemapping_pars_fragment:"",i.toneMapping!==qa?D1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,w1("linearToOutputTexel",i.outputColorSpace),U1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),f=Ld(f),f=b_(f,i),f=A_(f,i),d=Ld(d),d=b_(d,i),d=A_(d,i),f=R_(f),d=R_(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+S+f,D=U+v+d,I=E_(l,l.VERTEX_SHADER,L),G=E_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,I),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(H){if(a.debug.checkShaderErrors){const ne=l.getProgramInfoLog(A)||"",ue=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(G)||"",Q=ne.trim(),P=ue.trim(),k=pe.trim();let W=!0,xe=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,A,I,G);else{const N=T_(l,I,"vertex"),J=T_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+N+`
`+J)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||k==="")&&(xe=!1);xe&&(H.diagnostics={runnable:W,programLog:Q,vertexShader:{log:P,prefix:S},fragmentShader:{log:k,prefix:v}})}l.deleteShader(I),l.deleteShader(G),Z=new zu(l,A),C=O1(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,b1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=A1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=G,this}let q1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Z1(e),i.set(e,s)),s}}class Z1{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}}function K1(a,e,i,s,l,u,f){const d=new g0,m=new Y1,p=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,H,ne,ue){const pe=ne.fog,Q=ue.geometry,P=C.isMeshStandardMaterial?ne.environment:null,k=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),W=k&&k.mapping===Yu?k.image.height:null,xe=M[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const N=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,J=N!==void 0?N.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let ye,De,Ge,ee;if(xe){const Tt=Bi[xe];ye=Tt.vertexShader,De=Tt.fragmentShader}else ye=C.vertexShader,De=C.fragmentShader,m.update(C),Ge=m.getVertexShaderID(C),ee=m.getFragmentShaderID(C);const me=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Ie=ue.isInstancedMesh===!0,He=ue.isBatchedMesh===!0,lt=!!C.map,Zt=!!C.matcap,F=!!k,Dt=!!C.aoMap,at=!!C.lightMap,$e=!!C.bumpMap,Ee=!!C.normalMap,st=!!C.displacementMap,Be=!!C.emissiveMap,Qe=!!C.metalnessMap,Ht=!!C.roughnessMap,Xt=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,te=C.iridescence>0,ce=C.sheen>0,ge=C.transmission>0,le=Xt&&!!C.anisotropyMap,Fe=O&&!!C.clearcoatMap,Ce=O&&!!C.clearcoatNormalMap,qe=O&&!!C.clearcoatRoughnessMap,Ze=te&&!!C.iridescenceMap,Me=te&&!!C.iridescenceThicknessMap,Ne=ce&&!!C.sheenColorMap,je=ce&&!!C.sheenRoughnessMap,We=!!C.specularMap,Ue=!!C.specularColorMap,ut=!!C.specularIntensityMap,X=ge&&!!C.transmissionMap,Ae=ge&&!!C.thicknessMap,we=!!C.gradientMap,ze=!!C.alphaMap,Te=C.alphaTest>0,_e=!!C.alphaHash,Xe=!!C.extensions;let ot=qa;C.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ot=a.toneMapping);const Ut={shaderID:xe,shaderType:C.type,shaderName:C.name,vertexShader:ye,fragmentShader:De,defines:C.defines,customVertexShaderID:Ge,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:He,batchingColor:He&&ue._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ue.instanceColor!==null,instancingMorph:Ie&&ue.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Za,alphaToCoverage:!!C.alphaToCoverage,map:lt,matcap:Zt,envMap:F,envMapMode:F&&k.mapping,envMapCubeUVHeight:W,aoMap:Dt,lightMap:at,bumpMap:$e,normalMap:Ee,displacementMap:x&&st,emissiveMap:Be,normalMapObjectSpace:Ee&&C.normalMapType===ZE,normalMapTangentSpace:Ee&&C.normalMapType===YE,metalnessMap:Qe,roughnessMap:Ht,anisotropy:Xt,anisotropyMap:le,clearcoat:O,clearcoatMap:Fe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:qe,dispersion:T,iridescence:te,iridescenceMap:Ze,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:Ne,sheenRoughnessMap:je,specularMap:We,specularColorMap:Ue,specularIntensityMap:ut,transmission:ge,transmissionMap:X,thicknessMap:Ae,gradientMap:we,opaque:C.transparent===!1&&C.blending===As&&C.alphaToCoverage===!1,alphaMap:ze,alphaTest:Te,alphaHash:_e,combine:C.combine,mapUv:lt&&A(C.map.channel),aoMapUv:Dt&&A(C.aoMap.channel),lightMapUv:at&&A(C.lightMap.channel),bumpMapUv:$e&&A(C.bumpMap.channel),normalMapUv:Ee&&A(C.normalMap.channel),displacementMapUv:st&&A(C.displacementMap.channel),emissiveMapUv:Be&&A(C.emissiveMap.channel),metalnessMapUv:Qe&&A(C.metalnessMap.channel),roughnessMapUv:Ht&&A(C.roughnessMap.channel),anisotropyMapUv:le&&A(C.anisotropyMap.channel),clearcoatMapUv:Fe&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:je&&A(C.sheenRoughnessMap.channel),specularMapUv:We&&A(C.specularMap.channel),specularColorMapUv:Ue&&A(C.specularColorMap.channel),specularIntensityMapUv:ut&&A(C.specularIntensityMap.channel),transmissionMapUv:X&&A(C.transmissionMap.channel),thicknessMapUv:Ae&&A(C.thicknessMap.channel),alphaMapUv:ze&&A(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ee||Xt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!Q.attributes.uv&&(lt||ze),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:ue.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:ot,decodeVideoTexture:lt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===zt,decodeVideoTextureEmissive:Be&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===zt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ni,flipSided:C.side===Tn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xe&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&C.extensions.multiDraw===!0||He)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)w.push(H),w.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(U(w,C),L(w,C),w.push(a.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function U(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const w=M[C.type];let H;if(w){const ne=Bi[w];H=TM.clone(ne.uniforms)}else H=C.uniforms;return H}function I(C,w){let H;for(let ne=0,ue=g.length;ne<ue;ne++){const pe=g[ne];if(pe.cacheKey===w){H=pe,++H.usedTimes;break}}return H===void 0&&(H=new W1(a,w,C,u),g.push(H)),H}function G(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:G,releaseShaderCache:z,programs:g,dispose:Z}}function j1(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function s(f){a.delete(f)}function l(f,d,m){a.get(f)[d]=m}function u(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function Q1(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function w_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function D_(){const a=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function f(_,x,y,M,A,S){let v=a[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:A,group:S},a[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,x,y,M,A,S){const v=f(_,x,y,M,A,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,x,y,M,A,S){const v=f(_,x,y,M,A,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||Q1),s.length>1&&s.sort(x||w_),l.length>1&&l.sort(x||w_)}function g(){for(let _=e,x=a.length;_<x;_++){const y=a[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function J1(){let a=new WeakMap;function e(s,l){const u=a.get(s);let f;return u===void 0?(f=new D_,a.set(s,[f])):l>=u.length?(f=new D_,u.push(f)):f=u[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function $1(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Lt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=i,i}}}function eR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let tR=0;function nR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function iR(a){const e=new $1,i=eR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const l=new oe,u=new mn,f=new mn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,M=0,A=0,S=0,v=0,U=0,L=0,D=0,I=0,G=0,z=0;p.sort(nR);for(let C=0,w=p.length;C<w;C++){const H=p[C],ne=H.color,ue=H.intensity,pe=H.distance,Q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ne.r*ue,_+=ne.g*ue,x+=ne.b*ue;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],ue);z++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const k=H.shadow,W=i.get(H);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,s.directionalShadow[y]=W,s.directionalShadowMap[y]=Q,s.directionalShadowMatrix[y]=H.shadow.matrix,U++}s.directional[y]=P,y++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ne).multiplyScalar(ue),P.distance=pe,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[A]=P;const k=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,k.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[A]=k.matrix,H.castShadow){const W=i.get(H);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,s.spotShadow[A]=W,s.spotShadowMap[A]=Q,D++}A++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(ne).multiplyScalar(ue),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=P,S++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const k=H.shadow,W=i.get(H);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,s.pointShadow[M]=W,s.pointShadowMap[M]=Q,s.pointShadowMatrix[M]=H.shadow.matrix,L++}s.point[M]=P,M++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(ue),P.groundColor.copy(H.groundColor).multiplyScalar(ue),s.hemi[v]=P,v++}}S>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==y||Z.pointLength!==M||Z.spotLength!==A||Z.rectAreaLength!==S||Z.hemiLength!==v||Z.numDirectionalShadows!==U||Z.numPointShadows!==L||Z.numSpotShadows!==D||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=M,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+I-G,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=z,Z.directionalLength=y,Z.pointLength=M,Z.spotLength=A,Z.rectAreaLength=S,Z.hemiLength=v,Z.numDirectionalShadows=U,Z.numPointShadows=L,Z.numSpotShadows=D,Z.numSpotMaps=I,Z.numLightProbes=z,s.version=tR++)}function m(p,g){let _=0,x=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const D=s.rectArea[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),u.copy(L.matrixWorld),u.premultiply(S),f.extractRotation(u),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:s}}function U_(a){const e=new iR(a),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function f(g){s.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function aR(a){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new U_(a),e.set(l,[d])):u>=f.length?(d=new U_(a),f.push(d)):d=f[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
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
}`;function oR(a,e,i){let s=new M0;const l=new vt,u=new vt,f=new rn,d=new NM({depthPacking:qE}),m=new OM,p={},g=i.maxTextureSize,_={[da]:Tn,[Tn]:da,[ni]:ni},x=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:rR,fragmentShader:sR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new ja;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ai(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let v=this.type;this.render=function(G,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=a.getRenderTarget(),w=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),ne=a.state;ne.setBlending(zi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ue=v!==la&&this.type===la,pe=v===la&&this.type!==la;for(let Q=0,P=G.length;Q<P;Q++){const k=G[Q],W=k.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const xe=W.getFrameExtents();if(l.multiply(xe),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xe.x),l.x=u.x*xe.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xe.y),l.y=u.y*xe.y,W.mapSize.y=u.y)),W.map===null||ue===!0||pe===!0){const J=this.type!==la?{minFilter:Ri,magFilter:Ri}:{};W.map!==null&&W.map.dispose(),W.map=new Ci(l.x,l.y,J),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const N=W.getViewportCount();for(let J=0;J<N;J++){const Se=W.getViewport(J);f.set(u.x*Se.x,u.y*Se.y,u.x*Se.z,u.y*Se.w),ne.viewport(f),W.updateMatrices(k,J),s=W.getFrustum(),D(z,Z,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===la&&U(W,Z),W.needsUpdate=!1}v=this.type,S.needsUpdate=!1,a.setRenderTarget(C,w,H)};function U(G,z){const Z=e.update(A);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,y.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ci(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,a.setRenderTarget(G.mapPass),a.clear(),a.renderBufferDirect(z,null,Z,x,A,null),y.uniforms.shadow_pass.value=G.mapPass.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,a.setRenderTarget(G.map),a.clear(),a.renderBufferDirect(z,null,Z,y,A,null)}function L(G,z,Z,C){let w=null;const H=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)w=H;else if(w=Z.isPointLight===!0?m:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=w.uuid,ue=z.uuid;let pe=p[ne];pe===void 0&&(pe={},p[ne]=pe);let Q=pe[ue];Q===void 0&&(Q=w.clone(),pe[ue]=Q,z.addEventListener("dispose",I)),w=Q}if(w.visible=z.visible,w.wireframe=z.wireframe,C===la?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=a.properties.get(w);ne.light=Z}return w}function D(G,z,Z,C,w){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===la)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const ue=e.update(G),pe=G.material;if(Array.isArray(pe)){const Q=ue.groups;for(let P=0,k=Q.length;P<k;P++){const W=Q[P],xe=pe[W.materialIndex];if(xe&&xe.visible){const N=L(G,xe,C,w);G.onBeforeShadow(a,G,z,Z,ue,N,W),a.renderBufferDirect(Z,null,ue,N,G,W),G.onAfterShadow(a,G,z,Z,ue,N,W)}}}else if(pe.visible){const Q=L(G,pe,C,w);G.onBeforeShadow(a,G,z,Z,ue,Q,null),a.renderBufferDirect(Z,null,ue,Q,G,null),G.onAfterShadow(a,G,z,Z,ue,Q,null)}}const ne=G.children;for(let ue=0,pe=ne.length;ue<pe;ue++)D(ne[ue],z,Z,C,w)}function I(G){G.target.removeEventListener("dispose",I);for(const Z in p){const C=p[Z],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const lR={[Xh]:Wh,[qh]:Kh,[Yh]:jh,[Cs]:Zh,[Wh]:Xh,[Kh]:qh,[jh]:Yh,[Zh]:Cs};function uR(a,e){function i(){let X=!1;const Ae=new rn;let we=null;const ze=new rn(0,0,0,0);return{setMask:function(Te){we!==Te&&!X&&(a.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){X=Te},setClear:function(Te,_e,Xe,ot,Ut){Ut===!0&&(Te*=ot,_e*=ot,Xe*=ot),Ae.set(Te,_e,Xe,ot),ze.equals(Ae)===!1&&(a.clearColor(Te,_e,Xe,ot),ze.copy(Ae))},reset:function(){X=!1,we=null,ze.set(-1,0,0,0)}}}function s(){let X=!1,Ae=!1,we=null,ze=null,Te=null;return{setReversed:function(_e){if(Ae!==_e){const Xe=e.get("EXT_clip_control");_e?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const ot=Te;Te=null,this.setClear(ot)}},getReversed:function(){return Ae},setTest:function(_e){_e?me(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(_e){we!==_e&&!X&&(a.depthMask(_e),we=_e)},setFunc:function(_e){if(Ae&&(_e=lR[_e]),ze!==_e){switch(_e){case Xh:a.depthFunc(a.NEVER);break;case Wh:a.depthFunc(a.ALWAYS);break;case qh:a.depthFunc(a.LESS);break;case Cs:a.depthFunc(a.LEQUAL);break;case Yh:a.depthFunc(a.EQUAL);break;case Zh:a.depthFunc(a.GEQUAL);break;case Kh:a.depthFunc(a.GREATER);break;case jh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ze=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Te!==_e&&(Ae&&(_e=1-_e),a.clearDepth(_e),Te=_e)},reset:function(){X=!1,we=null,ze=null,Te=null,Ae=!1}}}function l(){let X=!1,Ae=null,we=null,ze=null,Te=null,_e=null,Xe=null,ot=null,Ut=null;return{setTest:function(Tt){X||(Tt?me(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Tt){Ae!==Tt&&!X&&(a.stencilMask(Tt),Ae=Tt)},setFunc:function(Tt,gi,cn){(we!==Tt||ze!==gi||Te!==cn)&&(a.stencilFunc(Tt,gi,cn),we=Tt,ze=gi,Te=cn)},setOp:function(Tt,gi,cn){(_e!==Tt||Xe!==gi||ot!==cn)&&(a.stencilOp(Tt,gi,cn),_e=Tt,Xe=gi,ot=cn)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Ut!==Tt&&(a.clearStencil(Tt),Ut=Tt)},reset:function(){X=!1,Ae=null,we=null,ze=null,Te=null,_e=null,Xe=null,ot=null,Ut=null}}}const u=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,U=null,L=null,D=null,I=null,G=null,z=new Lt(0,0,0),Z=0,C=!1,w=null,H=null,ne=null,ue=null,pe=null;const Q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const W=a.getParameter(a.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=k>=2);let xe=null,N={};const J=a.getParameter(a.SCISSOR_BOX),Se=a.getParameter(a.VIEWPORT),ye=new rn().fromArray(J),De=new rn().fromArray(Se);function Ge(X,Ae,we,ze){const Te=new Uint8Array(4),_e=a.createTexture();a.bindTexture(X,_e),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<we;Xe++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,ze,0,a.RGBA,a.UNSIGNED_BYTE,Te):a.texImage2D(Ae+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Te);return _e}const ee={};ee[a.TEXTURE_2D]=Ge(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=Ge(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=Ge(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=Ge(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),me(a.DEPTH_TEST),f.setFunc(Cs),$e(!1),Ee(Fv),me(a.CULL_FACE),Dt(zi);function me(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function Re(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function Ie(X,Ae){return _[X]!==Ae?(a.bindFramebuffer(X,Ae),_[X]=Ae,X===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ae),X===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(X,Ae){let we=y,ze=!1;if(X){we=x.get(Ae),we===void 0&&(we=[],x.set(Ae,we));const Te=X.textures;if(we.length!==Te.length||we[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,Xe=Te.length;_e<Xe;_e++)we[_e]=a.COLOR_ATTACHMENT0+_e;we.length=Te.length,ze=!0}}else we[0]!==a.BACK&&(we[0]=a.BACK,ze=!0);ze&&a.drawBuffers(we)}function lt(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const Zt={[Mr]:a.FUNC_ADD,[xE]:a.FUNC_SUBTRACT,[SE]:a.FUNC_REVERSE_SUBTRACT};Zt[yE]=a.MIN,Zt[EE]=a.MAX;const F={[ME]:a.ZERO,[TE]:a.ONE,[bE]:a.SRC_COLOR,[Vh]:a.SRC_ALPHA,[UE]:a.SRC_ALPHA_SATURATE,[wE]:a.DST_COLOR,[RE]:a.DST_ALPHA,[AE]:a.ONE_MINUS_SRC_COLOR,[kh]:a.ONE_MINUS_SRC_ALPHA,[DE]:a.ONE_MINUS_DST_COLOR,[CE]:a.ONE_MINUS_DST_ALPHA,[LE]:a.CONSTANT_COLOR,[NE]:a.ONE_MINUS_CONSTANT_COLOR,[OE]:a.CONSTANT_ALPHA,[PE]:a.ONE_MINUS_CONSTANT_ALPHA};function Dt(X,Ae,we,ze,Te,_e,Xe,ot,Ut,Tt){if(X===zi){A===!0&&(Re(a.BLEND),A=!1);return}if(A===!1&&(me(a.BLEND),A=!0),X!==_E){if(X!==S||Tt!==C){if((v!==Mr||D!==Mr)&&(a.blendEquation(a.FUNC_ADD),v=Mr,D=Mr),Tt)switch(X){case As:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case zv:a.blendFunc(a.ONE,a.ONE);break;case Hv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Gv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case As:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case zv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Hv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,L=null,I=null,G=null,z.set(0,0,0),Z=0,S=X,C=Tt}return}Te=Te||Ae,_e=_e||we,Xe=Xe||ze,(Ae!==v||Te!==D)&&(a.blendEquationSeparate(Zt[Ae],Zt[Te]),v=Ae,D=Te),(we!==U||ze!==L||_e!==I||Xe!==G)&&(a.blendFuncSeparate(F[we],F[ze],F[_e],F[Xe]),U=we,L=ze,I=_e,G=Xe),(ot.equals(z)===!1||Ut!==Z)&&(a.blendColor(ot.r,ot.g,ot.b,Ut),z.copy(ot),Z=Ut),S=X,C=!1}function at(X,Ae){X.side===ni?Re(a.CULL_FACE):me(a.CULL_FACE);let we=X.side===Tn;Ae&&(we=!we),$e(we),X.blending===As&&X.transparent===!1?Dt(zi):Dt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;d.setTest(ze),ze&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Be(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function $e(X){w!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),w=X)}function Ee(X){X!==mE?(me(a.CULL_FACE),X!==H&&(X===Fv?a.cullFace(a.BACK):X===gE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),H=X}function st(X){X!==ne&&(P&&a.lineWidth(X),ne=X)}function Be(X,Ae,we){X?(me(a.POLYGON_OFFSET_FILL),(ue!==Ae||pe!==we)&&(a.polygonOffset(Ae,we),ue=Ae,pe=we)):Re(a.POLYGON_OFFSET_FILL)}function Qe(X){X?me(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function Ht(X){X===void 0&&(X=a.TEXTURE0+Q-1),xe!==X&&(a.activeTexture(X),xe=X)}function Xt(X,Ae,we){we===void 0&&(xe===null?we=a.TEXTURE0+Q-1:we=xe);let ze=N[we];ze===void 0&&(ze={type:void 0,texture:void 0},N[we]=ze),(ze.type!==X||ze.texture!==Ae)&&(xe!==we&&(a.activeTexture(we),xe=we),a.bindTexture(X,Ae||ee[X]),ze.type=X,ze.texture=Ae)}function O(){const X=N[xe];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ze(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(X){ye.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function je(X){De.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),De.copy(X))}function We(X,Ae){let we=p.get(Ae);we===void 0&&(we=new WeakMap,p.set(Ae,we));let ze=we.get(X);ze===void 0&&(ze=a.getUniformBlockIndex(Ae,X.name),we.set(X,ze))}function Ue(X,Ae){const ze=p.get(Ae).get(X);m.get(Ae)!==ze&&(a.uniformBlockBinding(Ae,ze,X.__bindingPointIndex),m.set(Ae,ze))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},xe=null,N={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,U=null,L=null,D=null,I=null,G=null,z=new Lt(0,0,0),Z=0,C=!1,w=null,H=null,ne=null,ue=null,pe=null,ye.set(0,0,a.canvas.width,a.canvas.height),De.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:me,disable:Re,bindFramebuffer:Ie,drawBuffers:He,useProgram:lt,setBlending:Dt,setMaterial:at,setFlipSided:$e,setCullFace:Ee,setLineWidth:st,setPolygonOffset:Be,setScissorTest:Qe,activeTexture:Ht,bindTexture:Xt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:Ze,texImage3D:Me,updateUBOMapping:We,uniformBlockBinding:Ue,texStorage2D:Ce,texStorage3D:qe,texSubImage2D:ce,texSubImage3D:ge,compressedTexSubImage2D:le,compressedTexSubImage3D:Fe,scissor:Ne,viewport:je,reset:ut}}function cR(a,e,i,s,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new vt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return y?new OffscreenCanvas(O,T):ku("canvas")}function A(O,T,te){let ce=1;const ge=Xt(O);if((ge.width>te||ge.height>te)&&(ce=te/Math.max(ge.width,ge.height)),ce<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const le=Math.floor(ce*ge.width),Fe=Math.floor(ce*ge.height);_===void 0&&(_=M(le,Fe));const Ce=T?M(le,Fe):_;return Ce.width=le,Ce.height=Fe,Ce.getContext("2d").drawImage(O,0,0,le,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+le+"x"+Fe+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function S(O){return O.generateMipmaps}function v(O){a.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(O,T,te,ce,ge=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let le=T;if(T===a.RED&&(te===a.FLOAT&&(le=a.R32F),te===a.HALF_FLOAT&&(le=a.R16F),te===a.UNSIGNED_BYTE&&(le=a.R8)),T===a.RED_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.R8UI),te===a.UNSIGNED_SHORT&&(le=a.R16UI),te===a.UNSIGNED_INT&&(le=a.R32UI),te===a.BYTE&&(le=a.R8I),te===a.SHORT&&(le=a.R16I),te===a.INT&&(le=a.R32I)),T===a.RG&&(te===a.FLOAT&&(le=a.RG32F),te===a.HALF_FLOAT&&(le=a.RG16F),te===a.UNSIGNED_BYTE&&(le=a.RG8)),T===a.RG_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RG8UI),te===a.UNSIGNED_SHORT&&(le=a.RG16UI),te===a.UNSIGNED_INT&&(le=a.RG32UI),te===a.BYTE&&(le=a.RG8I),te===a.SHORT&&(le=a.RG16I),te===a.INT&&(le=a.RG32I)),T===a.RGB_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RGB8UI),te===a.UNSIGNED_SHORT&&(le=a.RGB16UI),te===a.UNSIGNED_INT&&(le=a.RGB32UI),te===a.BYTE&&(le=a.RGB8I),te===a.SHORT&&(le=a.RGB16I),te===a.INT&&(le=a.RGB32I)),T===a.RGBA_INTEGER&&(te===a.UNSIGNED_BYTE&&(le=a.RGBA8UI),te===a.UNSIGNED_SHORT&&(le=a.RGBA16UI),te===a.UNSIGNED_INT&&(le=a.RGBA32UI),te===a.BYTE&&(le=a.RGBA8I),te===a.SHORT&&(le=a.RGBA16I),te===a.INT&&(le=a.RGBA32I)),T===a.RGB&&(te===a.UNSIGNED_INT_5_9_9_9_REV&&(le=a.RGB9_E5),te===a.UNSIGNED_INT_10F_11F_11F_REV&&(le=a.R11F_G11F_B10F)),T===a.RGBA){const Fe=ge?Gu:Rt.getTransfer(ce);te===a.FLOAT&&(le=a.RGBA32F),te===a.HALF_FLOAT&&(le=a.RGBA16F),te===a.UNSIGNED_BYTE&&(le=Fe===zt?a.SRGB8_ALPHA8:a.RGBA8),te===a.UNSIGNED_SHORT_4_4_4_4&&(le=a.RGBA4),te===a.UNSIGNED_SHORT_5_5_5_1&&(le=a.RGB5_A1)}return(le===a.R16F||le===a.R32F||le===a.RG16F||le===a.RG32F||le===a.RGBA16F||le===a.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(O,T){let te;return O?T===null||T===Ya||T===Us?te=a.DEPTH24_STENCIL8:T===ua?te=a.DEPTH32F_STENCIL8:T===Vo&&(te=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ya||T===Us?te=a.DEPTH_COMPONENT24:T===ua?te=a.DEPTH_COMPONENT32F:T===Vo&&(te=a.DEPTH_COMPONENT16),te}function I(O,T){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ri&&O.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function G(O){const T=O.target;T.removeEventListener("dispose",G),Z(T),T.isVideoTexture&&g.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),w(T)}function Z(O){const T=s.get(O);if(T.__webglInit===void 0)return;const te=O.source,ce=x.get(te);if(ce){const ge=ce[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(O),Object.keys(ce).length===0&&x.delete(te)}s.remove(O)}function C(O){const T=s.get(O);a.deleteTexture(T.__webglTexture);const te=O.source,ce=x.get(te);delete ce[T.__cacheKey],f.memory.textures--}function w(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ge=0;ge<T.__webglFramebuffer[ce].length;ge++)a.deleteFramebuffer(T.__webglFramebuffer[ce][ge]);else a.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)a.deleteFramebuffer(T.__webglFramebuffer[ce]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=O.textures;for(let ce=0,ge=te.length;ce<ge;ce++){const le=s.get(te[ce]);le.__webglTexture&&(a.deleteTexture(le.__webglTexture),f.memory.textures--),s.remove(te[ce])}s.remove(O)}let H=0;function ne(){H=0}function ue(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function pe(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function Q(O,T){const te=s.get(O);if(O.isVideoTexture&&Qe(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const ce=O.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,O,T);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,te.__webglTexture,a.TEXTURE0+T)}function P(O,T){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){ee(te,O,T);return}i.bindTexture(a.TEXTURE_2D_ARRAY,te.__webglTexture,a.TEXTURE0+T)}function k(O,T){const te=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){ee(te,O,T);return}i.bindTexture(a.TEXTURE_3D,te.__webglTexture,a.TEXTURE0+T)}function W(O,T){const te=s.get(O);if(O.version>0&&te.__version!==O.version){me(te,O,T);return}i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture,a.TEXTURE0+T)}const xe={[$h]:a.REPEAT,[br]:a.CLAMP_TO_EDGE,[ed]:a.MIRRORED_REPEAT},N={[Ri]:a.NEAREST,[WE]:a.NEAREST_MIPMAP_NEAREST,[fu]:a.NEAREST_MIPMAP_LINEAR,[Bn]:a.LINEAR,[rh]:a.LINEAR_MIPMAP_NEAREST,[Ar]:a.LINEAR_MIPMAP_LINEAR},J={[KE]:a.NEVER,[tM]:a.ALWAYS,[jE]:a.LESS,[d0]:a.LEQUAL,[QE]:a.EQUAL,[eM]:a.GEQUAL,[JE]:a.GREATER,[$E]:a.NOTEQUAL};function Se(O,T){if(T.type===ua&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===rh||T.magFilter===fu||T.magFilter===Ar||T.minFilter===Bn||T.minFilter===rh||T.minFilter===fu||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,xe[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,xe[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,xe[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,N[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==fu&&T.minFilter!==Ar||T.type===ua&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function ye(O,T){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",G));const ce=T.source;let ge=x.get(ce);ge===void 0&&(ge={},x.set(ce,ge));const le=pe(T);if(le!==O.__cacheKey){ge[le]===void 0&&(ge[le]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,te=!0),ge[le].usedTimes++;const Fe=ge[O.__cacheKey];Fe!==void 0&&(ge[O.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(T)),O.__cacheKey=le,O.__webglTexture=ge[le].texture}return te}function De(O,T,te){return Math.floor(Math.floor(O/te)/T)}function Ge(O,T,te,ce){const le=O.updateRanges;if(le.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,te,ce,T.data);else{le.sort((Me,Ne)=>Me.start-Ne.start);let Fe=0;for(let Me=1;Me<le.length;Me++){const Ne=le[Fe],je=le[Me],We=Ne.start+Ne.count,Ue=De(je.start,T.width,4),ut=De(Ne.start,T.width,4);je.start<=We+1&&Ue===ut&&De(je.start+je.count-1,T.width,4)===Ue?Ne.count=Math.max(Ne.count,je.start+je.count-Ne.start):(++Fe,le[Fe]=je)}le.length=Fe+1;const Ce=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ze=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Ne=le.length;Me<Ne;Me++){const je=le[Me],We=Math.floor(je.start/4),Ue=Math.ceil(je.count/4),ut=We%T.width,X=Math.floor(We/T.width),Ae=Ue,we=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,ut,X,Ae,we,te,ce,T.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ce),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ze)}}function ee(O,T,te){let ce=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=a.TEXTURE_3D);const ge=ye(O,T),le=T.source;i.bindTexture(ce,O.__webglTexture,a.TEXTURE0+te);const Fe=s.get(le);if(le.version!==Fe.__version||ge===!0){i.activeTexture(a.TEXTURE0+te);const Ce=Rt.getPrimaries(Rt.workingColorSpace),qe=T.colorSpace===Ii?null:Rt.getPrimaries(T.colorSpace),Ze=T.colorSpace===Ii||Ce===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Me=A(T.image,!1,l.maxTextureSize);Me=Ht(T,Me);const Ne=u.convert(T.format,T.colorSpace),je=u.convert(T.type);let We=L(T.internalFormat,Ne,je,T.colorSpace,T.isVideoTexture);Se(ce,T);let Ue;const ut=T.mipmaps,X=T.isVideoTexture!==!0,Ae=Fe.__version===void 0||ge===!0,we=le.dataReady,ze=I(T,Me);if(T.isDepthTexture)We=D(T.format===Ls,T.type),Ae&&(X?i.texStorage2D(a.TEXTURE_2D,1,We,Me.width,Me.height):i.texImage2D(a.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,je,null));else if(T.isDataTexture)if(ut.length>0){X&&Ae&&i.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Te=0,_e=ut.length;Te<_e;Te++)Ue=ut[Te],X?we&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Ne,je,Ue.data):i.texImage2D(a.TEXTURE_2D,Te,We,Ue.width,Ue.height,0,Ne,je,Ue.data);T.generateMipmaps=!1}else X?(Ae&&i.texStorage2D(a.TEXTURE_2D,ze,We,Me.width,Me.height),we&&Ge(T,Me,Ne,je)):i.texImage2D(a.TEXTURE_2D,0,We,Me.width,Me.height,0,Ne,je,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ae&&i.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,ut[0].width,ut[0].height,Me.depth);for(let Te=0,_e=ut.length;Te<_e;Te++)if(Ue=ut[Te],T.format!==bi)if(Ne!==null)if(X){if(we)if(T.layerUpdates.size>0){const Xe=o_(Ue.width,Ue.height,T.format,T.type);for(const ot of T.layerUpdates){const Ut=Ue.data.subarray(ot*Xe/Ue.data.BYTES_PER_ELEMENT,(ot+1)*Xe/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,ot,Ue.width,Ue.height,1,Ne,Ut)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Me.depth,Ne,Ue.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Te,We,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,Me.depth,Ne,je,Ue.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Te,We,Ue.width,Ue.height,Me.depth,0,Ne,je,Ue.data)}else{X&&Ae&&i.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Te=0,_e=ut.length;Te<_e;Te++)Ue=ut[Te],T.format!==bi?Ne!==null?X?we&&i.compressedTexSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Ne,Ue.data):i.compressedTexImage2D(a.TEXTURE_2D,Te,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,Ne,je,Ue.data):i.texImage2D(a.TEXTURE_2D,Te,We,Ue.width,Ue.height,0,Ne,je,Ue.data)}else if(T.isDataArrayTexture)if(X){if(Ae&&i.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,Me.width,Me.height,Me.depth),we)if(T.layerUpdates.size>0){const Te=o_(Me.width,Me.height,T.format,T.type);for(const _e of T.layerUpdates){const Xe=Me.data.subarray(_e*Te/Me.data.BYTES_PER_ELEMENT,(_e+1)*Te/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Ne,je,Xe)}T.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,je,Me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,We,Me.width,Me.height,Me.depth,0,Ne,je,Me.data);else if(T.isData3DTexture)X?(Ae&&i.texStorage3D(a.TEXTURE_3D,ze,We,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,je,Me.data)):i.texImage3D(a.TEXTURE_3D,0,We,Me.width,Me.height,Me.depth,0,Ne,je,Me.data);else if(T.isFramebufferTexture){if(Ae)if(X)i.texStorage2D(a.TEXTURE_2D,ze,We,Me.width,Me.height);else{let Te=Me.width,_e=Me.height;for(let Xe=0;Xe<ze;Xe++)i.texImage2D(a.TEXTURE_2D,Xe,We,Te,_e,0,Ne,je,null),Te>>=1,_e>>=1}}else if(ut.length>0){if(X&&Ae){const Te=Xt(ut[0]);i.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height)}for(let Te=0,_e=ut.length;Te<_e;Te++)Ue=ut[Te],X?we&&i.texSubImage2D(a.TEXTURE_2D,Te,0,0,Ne,je,Ue):i.texImage2D(a.TEXTURE_2D,Te,We,Ne,je,Ue);T.generateMipmaps=!1}else if(X){if(Ae){const Te=Xt(Me);i.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height)}we&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ne,je,Me)}else i.texImage2D(a.TEXTURE_2D,0,We,Ne,je,Me);S(T)&&v(ce),Fe.__version=le.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function me(O,T,te){if(T.image.length!==6)return;const ce=ye(O,T),ge=T.source;i.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+te);const le=s.get(ge);if(ge.version!==le.__version||ce===!0){i.activeTexture(a.TEXTURE0+te);const Fe=Rt.getPrimaries(Rt.workingColorSpace),Ce=T.colorSpace===Ii?null:Rt.getPrimaries(T.colorSpace),qe=T.colorSpace===Ii||Fe===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ze=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let _e=0;_e<6;_e++)!Ze&&!Me?Ne[_e]=A(T.image[_e],!0,l.maxCubemapSize):Ne[_e]=Me?T.image[_e].image:T.image[_e],Ne[_e]=Ht(T,Ne[_e]);const je=Ne[0],We=u.convert(T.format,T.colorSpace),Ue=u.convert(T.type),ut=L(T.internalFormat,We,Ue,T.colorSpace),X=T.isVideoTexture!==!0,Ae=le.__version===void 0||ce===!0,we=ge.dataReady;let ze=I(T,je);Se(a.TEXTURE_CUBE_MAP,T);let Te;if(Ze){X&&Ae&&i.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,je.width,je.height);for(let _e=0;_e<6;_e++){Te=Ne[_e].mipmaps;for(let Xe=0;Xe<Te.length;Xe++){const ot=Te[Xe];T.format!==bi?We!==null?X?we&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,ot.width,ot.height,We,ot.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ut,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,0,0,ot.width,ot.height,We,Ue,ot.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe,ut,ot.width,ot.height,0,We,Ue,ot.data)}}}else{if(Te=T.mipmaps,X&&Ae){Te.length>0&&ze++;const _e=Xt(Ne[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ne[_e].width,Ne[_e].height,We,Ue,Ne[_e].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,Ne[_e].width,Ne[_e].height,0,We,Ue,Ne[_e].data);for(let Xe=0;Xe<Te.length;Xe++){const Ut=Te[Xe].image[_e].image;X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,Ut.width,Ut.height,We,Ue,Ut.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ut,Ut.width,Ut.height,0,We,Ue,Ut.data)}}else{X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,We,Ue,Ne[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,We,Ue,Ne[_e]);for(let Xe=0;Xe<Te.length;Xe++){const ot=Te[Xe];X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,0,0,We,Ue,ot.image[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Xe+1,ut,We,Ue,ot.image[_e])}}}S(T)&&v(a.TEXTURE_CUBE_MAP),le.__version=ge.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Re(O,T,te,ce,ge,le){const Fe=u.convert(te.format,te.colorSpace),Ce=u.convert(te.type),qe=L(te.internalFormat,Fe,Ce,te.colorSpace),Ze=s.get(T),Me=s.get(te);if(Me.__renderTarget=T,!Ze.__hasExternalTextures){const Ne=Math.max(1,T.width>>le),je=Math.max(1,T.height>>le);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?i.texImage3D(ge,le,qe,Ne,je,T.depth,0,Fe,Ce,null):i.texImage2D(ge,le,qe,Ne,je,0,Fe,Ce,null)}i.bindFramebuffer(a.FRAMEBUFFER,O),Be(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ce,ge,Me.__webglTexture,0,st(T)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ce,ge,Me.__webglTexture,le),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ie(O,T,te){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const ce=T.depthTexture,ge=ce&&ce.isDepthTexture?ce.type:null,le=D(T.stencilBuffer,ge),Fe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=st(T);Be(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,le,T.width,T.height):te?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,le,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,le,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,O)}else{const ce=T.textures;for(let ge=0;ge<ce.length;ge++){const le=ce[ge],Fe=u.convert(le.format,le.colorSpace),Ce=u.convert(le.type),qe=L(le.internalFormat,Fe,Ce,le.colorSpace),Ze=st(T);te&&Be(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,qe,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ze,qe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,qe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function He(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=s.get(T.depthTexture);ce.__renderTarget=T,(!ce.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const ge=ce.__webglTexture,le=st(T);if(T.depthTexture.format===ko)Be(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0,le):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Ls)Be(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0,le):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function lt(O){const T=s.get(O),te=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const ce=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",ge)};ce.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=ce}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ce=O.texture.mipmaps;ce&&ce.length>0?He(T.__webglFramebuffer[0],O):He(T.__webglFramebuffer,O)}else if(te){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=a.createRenderbuffer(),Ie(T.__webglDepthbuffer[ce],O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer[ce];a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,le)}}else{const ce=O.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Ie(T.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,le),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,le)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(O,T,te){const ce=s.get(O);T!==void 0&&Re(ce.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),te!==void 0&&lt(O)}function F(O){const T=O.texture,te=s.get(O),ce=s.get(T);O.addEventListener("dispose",z);const ge=O.textures,le=O.isWebGLCubeRenderTarget===!0,Fe=ge.length>1;if(Fe||(ce.__webglTexture===void 0&&(ce.__webglTexture=a.createTexture()),ce.__version=T.version,f.memory.textures++),le){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let qe=0;qe<T.mipmaps.length;qe++)te.__webglFramebuffer[Ce][qe]=a.createFramebuffer()}else te.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=a.createFramebuffer()}else te.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let Ce=0,qe=ge.length;Ce<qe;Ce++){const Ze=s.get(ge[Ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&Be(O)===!1){te.__webglMultisampledFramebuffer=a.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const qe=ge[Ce];te.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const Ze=u.convert(qe.format,qe.colorSpace),Me=u.convert(qe.type),Ne=L(qe.internalFormat,Ze,Me,qe.colorSpace,O.isXRRenderTarget===!0),je=st(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,je,Ne,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=a.createRenderbuffer(),Ie(te.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(le){i.bindTexture(a.TEXTURE_CUBE_MAP,ce.__webglTexture),Se(a.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)Re(te.__webglFramebuffer[Ce][qe],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,qe);else Re(te.__webglFramebuffer[Ce],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&v(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let Ce=0,qe=ge.length;Ce<qe;Ce++){const Ze=ge[Ce],Me=s.get(Ze);let Ne=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ne=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Me.__webglTexture),Se(Ne,Ze),Re(te.__webglFramebuffer,O,Ze,a.COLOR_ATTACHMENT0+Ce,Ne,0),S(Ze)&&v(Ne)}i.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ce,ce.__webglTexture),Se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)Re(te.__webglFramebuffer[qe],O,T,a.COLOR_ATTACHMENT0,Ce,qe);else Re(te.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,Ce,0);S(T)&&v(Ce),i.unbindTexture()}O.depthBuffer&&lt(O)}function Dt(O){const T=O.textures;for(let te=0,ce=T.length;te<ce;te++){const ge=T[te];if(S(ge)){const le=U(O),Fe=s.get(ge).__webglTexture;i.bindTexture(le,Fe),v(le),i.unbindTexture()}}}const at=[],$e=[];function Ee(O){if(O.samples>0){if(Be(O)===!1){const T=O.textures,te=O.width,ce=O.height;let ge=a.COLOR_BUFFER_BIT;const le=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=s.get(O),Ce=T.length>1;if(Ce)for(let Ze=0;Ze<T.length;Ze++)i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const qe=O.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ze=0;Ze<T.length;Ze++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ze]);const Me=s.get(T[Ze]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,te,ce,0,0,te,ce,ge,a.NEAREST),m===!0&&(at.length=0,$e.length=0,at.push(a.COLOR_ATTACHMENT0+Ze),O.depthBuffer&&O.resolveDepthBuffer===!1&&(at.push(le),$e.push(le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$e)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let Ze=0;Ze<T.length;Ze++){i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ze]);const Me=s.get(T[Ze]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ze,a.TEXTURE_2D,Me,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function st(O){return Math.min(l.maxSamples,O.samples)}function Be(O){const T=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Ht(O,T){const te=O.colorSpace,ce=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==Za&&te!==Ii&&(Rt.getTransfer(te)===zt?(ce!==bi||ge!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=ne,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Be}function fR(a,e){function i(s,l=Ii){let u;const f=Rt.getTransfer(l);if(s===ai)return a.UNSIGNED_BYTE;if(s===Gd)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Vd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===o0)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===l0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===r0)return a.BYTE;if(s===s0)return a.SHORT;if(s===Vo)return a.UNSIGNED_SHORT;if(s===Hd)return a.INT;if(s===Ya)return a.UNSIGNED_INT;if(s===ua)return a.FLOAT;if(s===Zo)return a.HALF_FLOAT;if(s===u0)return a.ALPHA;if(s===c0)return a.RGB;if(s===bi)return a.RGBA;if(s===ko)return a.DEPTH_COMPONENT;if(s===Ls)return a.DEPTH_STENCIL;if(s===f0)return a.RED;if(s===kd)return a.RED_INTEGER;if(s===h0)return a.RG;if(s===Xd)return a.RG_INTEGER;if(s===Wd)return a.RGBA_INTEGER;if(s===Pu||s===Bu||s===Iu||s===Fu)if(f===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Iu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===nd||s===id||s===ad)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===td)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===id)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ad)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rd||s===sd||s===od)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===rd||s===sd)return f===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===od)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ld||s===ud||s===cd||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd||s===Sd||s===yd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ld)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ud)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_d)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ed||s===Md||s===Td)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Ed)return f===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bd||s===Ad||s===Rd||s===Cd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===bd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Us?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new T0(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new mi({vertexShader:hR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new el(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Ka{constructor(e,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new pR,v={},U=i.getContextAttributes();let L=null,D=null;const I=[],G=[],z=new vt;let Z=null;const C=new di;C.viewport=new rn;const w=new di;w.viewport=new rn;const H=[C,w],ne=new PM;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let me=I[ee];return me===void 0&&(me=new Ch,I[ee]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ee){let me=I[ee];return me===void 0&&(me=new Ch,I[ee]=me),me.getGripSpace()},this.getHand=function(ee){let me=I[ee];return me===void 0&&(me=new Ch,I[ee]=me),me.getHandSpace()};function Q(ee){const me=G.indexOf(ee.inputSource);if(me===-1)return;const Re=I[me];Re!==void 0&&(Re.update(ee.inputSource,ee.frame,p||f),Re.dispatchEvent({type:ee.type,data:ee.inputSource}))}function P(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",k);for(let ee=0;ee<I.length;ee++){const me=G[ee];me!==null&&(G[ee]=null,I[ee].disconnect(me))}ue=null,pe=null,S.reset();for(const ee in v)delete v[ee];e.setRenderTarget(L),y=null,x=null,_=null,l=null,D=null,Ge.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",P),l.addEventListener("inputsourceschange",k),U.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ie=null,He=null;U.depth&&(He=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=U.stencil?Ls:ko,Ie=U.stencil?Us:Ya);const lt={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(lt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Ci(x.textureWidth,x.textureHeight,{format:bi,type:ai,depthTexture:new Kd(x.textureWidth,x.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Ci(y.framebufferWidth,y.framebufferHeight,{format:bi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ge.setContext(l),Ge.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(ee){for(let me=0;me<ee.removed.length;me++){const Re=ee.removed[me],Ie=G.indexOf(Re);Ie>=0&&(G[Ie]=null,I[Ie].disconnect(Re))}for(let me=0;me<ee.added.length;me++){const Re=ee.added[me];let Ie=G.indexOf(Re);if(Ie===-1){for(let lt=0;lt<I.length;lt++)if(lt>=G.length){G.push(Re),Ie=lt;break}else if(G[lt]===null){G[lt]=Re,Ie=lt;break}if(Ie===-1)break}const He=I[Ie];He&&He.connect(Re)}}const W=new oe,xe=new oe;function N(ee,me,Re){W.setFromMatrixPosition(me.matrixWorld),xe.setFromMatrixPosition(Re.matrixWorld);const Ie=W.distanceTo(xe),He=me.projectionMatrix.elements,lt=Re.projectionMatrix.elements,Zt=He[14]/(He[10]-1),F=He[14]/(He[10]+1),Dt=(He[9]+1)/He[5],at=(He[9]-1)/He[5],$e=(He[8]-1)/He[0],Ee=(lt[8]+1)/lt[0],st=Zt*$e,Be=Zt*Ee,Qe=Ie/(-$e+Ee),Ht=Qe*-$e;if(me.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ht),ee.translateZ(Qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),He[10]===-1)ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Xt=Zt+Qe,O=F+Qe,T=st-Ht,te=Be+(Ie-Ht),ce=Dt*F/O*Xt,ge=at*F/O*Xt;ee.projectionMatrix.makePerspective(T,te,ce,ge,Xt,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function J(ee,me){me===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(me.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let me=ee.near,Re=ee.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),ne.near=w.near=C.near=me,ne.far=w.far=C.far=Re,(ue!==ne.near||pe!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),ue=ne.near,pe=ne.far),ne.layers.mask=ee.layers.mask|6,C.layers.mask=ne.layers.mask&3,w.layers.mask=ne.layers.mask&5;const Ie=ee.parent,He=ne.cameras;J(ne,Ie);for(let lt=0;lt<He.length;lt++)J(He[lt],Ie);He.length===2?N(ne,C,w):ne.projectionMatrix.copy(C.projectionMatrix),Se(ee,ne,Ie)};function Se(ee,me,Re){Re===null?ee.matrix.copy(me.matrixWorld):(ee.matrix.copy(Re.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(me.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(me.projectionMatrix),ee.projectionMatrixInverse.copy(me.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Dd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ee){m=ee,x!==null&&(x.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(ee){return v[ee]};let ye=null;function De(ee,me){if(g=me.getViewerPose(p||f),M=me,g!==null){const Re=g.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let Ie=!1;Re.length!==ne.cameras.length&&(ne.cameras.length=0,Ie=!0);for(let F=0;F<Re.length;F++){const Dt=Re[F];let at=null;if(y!==null)at=y.getViewport(Dt);else{const Ee=_.getViewSubImage(x,Dt);at=Ee.viewport,F===0&&(e.setRenderTargetTextures(D,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(D))}let $e=H[F];$e===void 0&&($e=new di,$e.layers.enable(F),$e.viewport=new rn,H[F]=$e),$e.matrix.fromArray(Dt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Dt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(at.x,at.y,at.width,at.height),F===0&&(ne.matrix.copy($e.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ie===!0&&ne.cameras.push($e)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const F=_.getDepthInformation(Re[0]);F&&F.isValid&&F.texture&&S.init(F,l.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),_=s.getBinding();for(let F=0;F<Re.length;F++){const Dt=Re[F].camera;if(Dt){let at=v[Dt];at||(at=new T0,v[Dt]=at);const $e=_.getCameraImage(Dt);at.sourceTexture=$e}}}}for(let Re=0;Re<I.length;Re++){const Ie=G[Re],He=I[Re];Ie!==null&&He!==void 0&&He.update(Ie,me,p||f)}ye&&ye(ee,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),M=null}const Ge=new A0;Ge.setAnimationLoop(De),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const Sr=new pa,gR=new mn;function vR(a,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,y0(a)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,U,L,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),_(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,D)):v.isMeshMatcapMaterial?(u(S,v),M(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),A(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,U,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Tn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Tn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const U=e.get(v),L=U.envMap,D=U.envMapRotation;L&&(S.envMap.value=L,Sr.copy(D),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),S.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(Sr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,U,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*U,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,U){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const U=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function _R(a,e,i,s){let l={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const D=L.program;s.uniformBlockBinding(U,D)}function p(U,L){let D=l[U.id];D===void 0&&(M(U),D=g(U),l[U.id]=D,U.addEventListener("dispose",S));const I=L.program;s.updateUBOMapping(U,I);const G=e.render.frame;u[U.id]!==G&&(x(U),u[U.id]=G)}function g(U){const L=_();U.__bindingPointIndex=L;const D=a.createBuffer(),I=U.__size,G=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,I,G),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,D),D}function _(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const L=l[U.id],D=U.uniforms,I=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let G=0,z=D.length;G<z;G++){const Z=Array.isArray(D[G])?D[G]:[D[G]];for(let C=0,w=Z.length;C<w;C++){const H=Z[C];if(y(H,G,C,I)===!0){const ne=H.__offset,ue=Array.isArray(H.value)?H.value:[H.value];let pe=0;for(let Q=0;Q<ue.length;Q++){const P=ue[Q],k=A(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,a.bufferSubData(a.UNIFORM_BUFFER,ne+pe,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,pe),pe+=k.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,ne,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(U,L,D,I){const G=U.value,z=L+"_"+D;if(I[z]===void 0)return typeof G=="number"||typeof G=="boolean"?I[z]=G:I[z]=G.clone(),!0;{const Z=I[z];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return I[z]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function M(U){const L=U.uniforms;let D=0;const I=16;for(let z=0,Z=L.length;z<Z;z++){const C=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,H=C.length;w<H;w++){const ne=C[w],ue=Array.isArray(ne.value)?ne.value:[ne.value];for(let pe=0,Q=ue.length;pe<Q;pe++){const P=ue[pe],k=A(P),W=D%I,xe=W%k.boundary,N=W+xe;D+=xe,N!==0&&I-N<k.storage&&(D+=I-N),ne.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=D,D+=k.storage}}}const G=D%I;return G>0&&(D+=I-G),U.__size=D,U.__cache={},this}function A(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function v(){for(const U in l)a.deleteBuffer(l[U]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}class xR{constructor(e={}){const{canvas:i=iM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const U=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=an;let G=0,z=0,Z=null,C=-1,w=null;const H=new rn,ne=new rn;let ue=null;const pe=new Lt(0);let Q=0,P=i.width,k=i.height,W=1,xe=null,N=null;const J=new rn(0,0,P,k),Se=new rn(0,0,P,k);let ye=!1;const De=new M0;let Ge=!1,ee=!1;const me=new mn,Re=new oe,Ie=new rn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Zt(){return Z===null?W:1}let F=s;function Dt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qu}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),F===null){const q="webgl2";if(F=Dt(q,R),F===null)throw Dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,$e,Ee,st,Be,Qe,Ht,Xt,O,T,te,ce,ge,le,Fe,Ce,qe,Ze,Me,Ne,je,We,Ue,ut;function X(){at=new wA(F),at.init(),We=new fR(F,at),$e=new EA(F,at,e,We),Ee=new uR(F,at),$e.reversedDepthBuffer&&x&&Ee.buffers.depth.setReversed(!0),st=new LA(F),Be=new j1,Qe=new cR(F,at,Ee,Be,$e,We,st),Ht=new TA(D),Xt=new CA(D),O=new FM(F),Ue=new SA(F,O),T=new DA(F,O,st,Ue),te=new OA(F,T,O,st),Me=new NA(F,$e,Qe),Ce=new MA(Be),ce=new K1(D,Ht,Xt,at,$e,Ue,Ce),ge=new vR(D,Be),le=new J1,Fe=new aR(at),Ze=new xA(D,Ht,Xt,Ee,te,y,m),qe=new oR(D,te,$e),ut=new _R(F,st,$e,Ee),Ne=new yA(F,at,st),je=new UA(F,at,st),st.programs=ce.programs,D.capabilities=$e,D.extensions=at,D.properties=Be,D.renderLists=le,D.shadowMap=qe,D.state=Ee,D.info=st}X();const Ae=new mR(D,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(P,k,!1))},this.getSize=function(R){return R.set(P,k)},this.setSize=function(R,q,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,k=q,i.width=Math.floor(R*W),i.height=Math.floor(q*W),re===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*W,k*W).floor()},this.setDrawingBufferSize=function(R,q,re){P=R,k=q,W=re,i.width=Math.floor(R*re),i.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,q,re,se){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,q,re,se),Ee.viewport(H.copy(J).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,q,re,se){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,q,re,se),Ee.scissor(ne.copy(Se).multiplyScalar(W).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Ee.setScissorTest(ye=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let se=0;if(R){let K=!1;if(Z!==null){const be=Z.texture.format;K=be===Wd||be===Xd||be===kd}if(K){const be=Z.texture.type,Le=be===ai||be===Ya||be===Vo||be===Us||be===Gd||be===Vd,Ve=Ze.getClearColor(),Oe=Ze.getClearAlpha(),et=Ve.r,nt=Ve.g,Ye=Ve.b;Le?(M[0]=et,M[1]=nt,M[2]=Ye,M[3]=Oe,F.clearBufferuiv(F.COLOR,0,M)):(A[0]=et,A[1]=nt,A[2]=Ye,A[3]=Oe,F.clearBufferiv(F.COLOR,0,A))}else se|=F.COLOR_BUFFER_BIT}q&&(se|=F.DEPTH_BUFFER_BIT),re&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ze.dispose(),le.dispose(),Fe.dispose(),Be.dispose(),Ht.dispose(),Xt.dispose(),te.dispose(),Ue.dispose(),ut.dispose(),ce.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",cn),Ae.removeEventListener("sessionend",fn),Qt.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=st.autoReset,q=qe.enabled,re=qe.autoUpdate,se=qe.needsUpdate,K=qe.type;X(),st.autoReset=R,qe.enabled=q,qe.autoUpdate=re,qe.needsUpdate=se,qe.type=K}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _e(R){const q=R.target;q.removeEventListener("dispose",_e),Xe(q)}function Xe(R){ot(R),Be.remove(R)}function ot(R){const q=Be.get(R).programs;q!==void 0&&(q.forEach(function(re){ce.releaseProgram(re)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,se,K,be){q===null&&(q=He);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Ve=ga(R,q,re,se,K);Ee.setMaterial(se,Le);let Oe=re.index,et=1;if(se.wireframe===!0){if(Oe=T.getWireframeAttribute(re),Oe===void 0)return;et=2}const nt=re.drawRange,Ye=re.attributes.position;let ht=nt.start*et,bt=(nt.start+nt.count)*et;be!==null&&(ht=Math.max(ht,be.start*et),bt=Math.min(bt,(be.start+be.count)*et)),Oe!==null?(ht=Math.max(ht,0),bt=Math.min(bt,Oe.count)):Ye!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ye.count));const qt=bt-ht;if(qt<0||qt===1/0)return;Ue.setup(K,se,Ve,re,Oe);let Pt,dt=Ne;if(Oe!==null&&(Pt=O.get(Oe),dt=je,dt.setIndex(Pt)),K.isMesh)se.wireframe===!0?(Ee.setLineWidth(se.wireframeLinewidth*Zt()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(K.isLine){let Je=se.linewidth;Je===void 0&&(Je=1),Ee.setLineWidth(Je*Zt()),K.isLineSegments?dt.setMode(F.LINES):K.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else K.isPoints?dt.setMode(F.POINTS):K.isSprite&&dt.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Je=K._multiDrawStarts,Wt=K._multiDrawCounts,_t=K._multiDrawCount,Dn=Oe?O.get(Oe).bytesPerElement:1,vi=Be.get(se).currentProgram.getUniforms();for(let In=0;In<_t;In++)vi.setValue(F,"_gl_DrawID",In),dt.render(Je[In]/Dn,Wt[In])}else if(K.isInstancedMesh)dt.renderInstances(ht,qt,K.count);else if(re.isInstancedBufferGeometry){const Je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wt=Math.min(re.instanceCount,Je);dt.renderInstances(ht,qt,Wt)}else dt.render(ht,qt)};function Ut(R,q,re){R.transparent===!0&&R.side===ni&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Di(R,q,re),R.side=da,R.needsUpdate=!0,Di(R,q,re),R.side=ni):Di(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),v=Fe.get(re),v.init(q),L.push(v),re.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==re&&R.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const se=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const be=K.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const Ve=be[Le];Ut(Ve,re,K),se.add(Ve)}else Ut(be,re,K),se.add(be)}),v=L.pop(),se},this.compileAsync=function(R,q,re=null){const se=this.compile(R,q,re);return new Promise(K=>{function be(){if(se.forEach(function(Le){Be.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){K(R);return}setTimeout(be,10)}at.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Tt=null;function gi(R){Tt&&Tt(R)}function cn(){Qt.stop()}function fn(){Qt.start()}const Qt=new A0;Qt.setAnimationLoop(gi),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(R){Tt=R,Ae.setAnimationLoop(R),R===null?Qt.stop():Qt.start()},Ae.addEventListener("sessionstart",cn),Ae.addEventListener("sessionend",fn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(q),q=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,Z),v=Fe.get(R,L.length),v.init(q),L.push(v),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),De.setFromProjectionMatrix(me,Fi,q.reversedDepth),ee=this.localClippingEnabled,Ge=Ce.init(this.clippingPlanes,ee),S=le.get(R,U.length),S.init(),U.push(S),Ae.enabled===!0&&Ae.isPresenting===!0){const be=D.xr.getDepthSensingMesh();be!==null&&wi(be,q,-1/0,D.sortObjects)}wi(R,q,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(xe,N),lt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,lt&&Ze.addToRenderList(S,R),this.info.render.frame++,Ge===!0&&Ce.beginShadows();const re=v.state.shadowsArray;qe.render(re,R,q),Ge===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,K=S.transmissive;if(v.setupLights(),q.isArrayCamera){const be=q.cameras;if(K.length>0)for(let Le=0,Ve=be.length;Le<Ve;Le++){const Oe=be[Le];tl(se,K,R,Oe)}lt&&Ze.render(R);for(let Le=0,Ve=be.length;Le<Ve;Le++){const Oe=be[Le];Dr(S,R,Oe,Oe.viewport)}}else K.length>0&&tl(se,K,R,q),lt&&Ze.render(R),Dr(S,R,q);Z!==null&&z===0&&(Qe.updateMultisampleRenderTarget(Z),Qe.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(D,R,q),Ue.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],Ge===!0&&Ce.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function wi(R,q,re,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||De.intersectsSprite(R)){se&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(me);const Le=te.update(R),Ve=R.material;Ve.visible&&S.push(R,Le,Ve,re,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||De.intersectsObject(R))){const Le=te.update(R),Ve=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ie.copy(Le.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(me)),Array.isArray(Ve)){const Oe=Le.groups;for(let et=0,nt=Oe.length;et<nt;et++){const Ye=Oe[et],ht=Ve[Ye.materialIndex];ht&&ht.visible&&S.push(R,Le,ht,re,Ie.z,Ye)}}else Ve.visible&&S.push(R,Le,Ve,re,Ie.z,null)}}const be=R.children;for(let Le=0,Ve=be.length;Le<Ve;Le++)wi(be[Le],q,re,se)}function Dr(R,q,re,se){const K=R.opaque,be=R.transmissive,Le=R.transparent;v.setupLightsView(re),Ge===!0&&Ce.setGlobalState(D.clippingPlanes,re),se&&Ee.viewport(H.copy(se)),K.length>0&&Ur(K,q,re),be.length>0&&Ur(be,q,re),Le.length>0&&Ur(Le,q,re),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function tl(R,q,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[se.id]===void 0&&(v.state.transmissionRenderTarget[se.id]=new Ci(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Zo:ai,minFilter:Ar,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const be=v.state.transmissionRenderTarget[se.id],Le=se.viewport||H;be.setSize(Le.z*D.transmissionResolutionScale,Le.w*D.transmissionResolutionScale);const Ve=D.getRenderTarget(),Oe=D.getActiveCubeFace(),et=D.getActiveMipmapLevel();D.setRenderTarget(be),D.getClearColor(pe),Q=D.getClearAlpha(),Q<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Ze.render(re);const nt=D.toneMapping;D.toneMapping=qa;const Ye=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),v.setupLightsView(se),Ge===!0&&Ce.setGlobalState(D.clippingPlanes,se),Ur(R,re,se),Qe.updateMultisampleRenderTarget(be),Qe.updateRenderTargetMipmap(be),at.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let bt=0,qt=q.length;bt<qt;bt++){const Pt=q[bt],dt=Pt.object,Je=Pt.geometry,Wt=Pt.material,_t=Pt.group;if(Wt.side===ni&&dt.layers.test(se.layers)){const Dn=Wt.side;Wt.side=Tn,Wt.needsUpdate=!0,Fs(dt,re,se,Je,Wt,_t),Wt.side=Dn,Wt.needsUpdate=!0,ht=!0}}ht===!0&&(Qe.updateMultisampleRenderTarget(be),Qe.updateRenderTargetMipmap(be))}D.setRenderTarget(Ve,Oe,et),D.setClearColor(pe,Q),Ye!==void 0&&(se.viewport=Ye),D.toneMapping=nt}function Ur(R,q,re){const se=q.isScene===!0?q.overrideMaterial:null;for(let K=0,be=R.length;K<be;K++){const Le=R[K],Ve=Le.object,Oe=Le.geometry,et=Le.group;let nt=Le.material;nt.allowOverride===!0&&se!==null&&(nt=se),Ve.layers.test(re.layers)&&Fs(Ve,q,re,Oe,nt,et)}}function Fs(R,q,re,se,K,be){R.onBeforeRender(D,q,re,se,K,be),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,q,re,se,R,be),K.transparent===!0&&K.side===ni&&K.forceSinglePass===!1?(K.side=Tn,K.needsUpdate=!0,D.renderBufferDirect(re,q,se,K,R,be),K.side=da,K.needsUpdate=!0,D.renderBufferDirect(re,q,se,K,R,be),K.side=ni):D.renderBufferDirect(re,q,se,K,R,be),R.onAfterRender(D,q,re,se,K,be)}function Di(R,q,re){q.isScene!==!0&&(q=He);const se=Be.get(R),K=v.state.lights,be=v.state.shadowsArray,Le=K.state.version,Ve=ce.getParameters(R,K.state,be,q,re),Oe=ce.getProgramCacheKey(Ve);let et=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?Xt:Ht).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",_e),et=new Map,se.programs=et);let nt=et.get(Oe);if(nt!==void 0){if(se.currentProgram===nt&&se.lightsStateVersion===Le)return Vi(R,Ve),nt}else Ve.uniforms=ce.getUniforms(R),R.onBeforeCompile(Ve,D),nt=ce.acquireProgram(Ve,Oe),et.set(Oe,nt),se.uniforms=Ve.uniforms;const Ye=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ce.uniform),Vi(R,Ve),se.needsLights=va(R),se.lightsStateVersion=Le,se.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),se.currentProgram=nt,se.uniformsList=null,nt}function Lr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=zu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Vi(R,q){const re=Be.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function ga(R,q,re,se,K){q.isScene!==!0&&(q=He),Qe.resetTextureUnits();const be=q.fog,Le=se.isMeshStandardMaterial?q.environment:null,Ve=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Za,Oe=(se.isMeshStandardMaterial?Xt:Ht).get(se.envMap||Le),et=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!re.morphAttributes.position,ht=!!re.morphAttributes.normal,bt=!!re.morphAttributes.color;let qt=qa;se.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qt=D.toneMapping);const Pt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,dt=Pt!==void 0?Pt.length:0,Je=Be.get(se),Wt=v.state.lights;if(Ge===!0&&(ee===!0||R!==w)){const Jt=R===w&&se.id===C;Ce.setState(se,R,Jt)}let _t=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wt.state.version||Je.outputColorSpace!==Ve||K.isBatchedMesh&&Je.batching===!1||!K.isBatchedMesh&&Je.batching===!0||K.isBatchedMesh&&Je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Je.instancing===!1||!K.isInstancedMesh&&Je.instancing===!0||K.isSkinnedMesh&&Je.skinning===!1||!K.isSkinnedMesh&&Je.skinning===!0||K.isInstancedMesh&&Je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Je.instancingMorph===!1&&K.morphTexture!==null||Je.envMap!==Oe||se.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ce.numPlanes||Je.numIntersection!==Ce.numIntersection)||Je.vertexAlphas!==et||Je.vertexTangents!==nt||Je.morphTargets!==Ye||Je.morphNormals!==ht||Je.morphColors!==bt||Je.toneMapping!==qt||Je.morphTargetsCount!==dt)&&(_t=!0):(_t=!0,Je.__version=se.version);let Dn=Je.currentProgram;_t===!0&&(Dn=Di(se,q,K));let vi=!1,In=!1,_n=!1;const Gt=Dn.getUniforms(),Fn=Je.uniforms;if(Ee.useProgram(Dn.program)&&(vi=!0,In=!0,_n=!0),se.id!==C&&(C=se.id,In=!0),vi||w!==R){Ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(F,"projectionMatrix",R.projectionMatrix),Gt.setValue(F,"viewMatrix",R.matrixWorldInverse);const bn=Gt.map.cameraPosition;bn!==void 0&&bn.setValue(F,Re.setFromMatrixPosition(R.matrixWorld)),$e.logarithmicDepthBuffer&&Gt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,In=!0,_n=!0)}if(K.isSkinnedMesh){Gt.setOptional(F,K,"bindMatrix"),Gt.setOptional(F,K,"bindMatrixInverse");const Jt=K.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Gt.setValue(F,"boneTexture",Jt.boneTexture,Qe))}K.isBatchedMesh&&(Gt.setOptional(F,K,"batchingTexture"),Gt.setValue(F,"batchingTexture",K._matricesTexture,Qe),Gt.setOptional(F,K,"batchingIdTexture"),Gt.setValue(F,"batchingIdTexture",K._indirectTexture,Qe),Gt.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(F,"batchingColorTexture",K._colorsTexture,Qe));const Un=re.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Me.update(K,re,Dn),(In||Je.receiveShadow!==K.receiveShadow)&&(Je.receiveShadow=K.receiveShadow,Gt.setValue(F,"receiveShadow",K.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Fn.envMap.value=Oe,Fn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Fn.envMapIntensity.value=q.environmentIntensity),In&&(Gt.setValue(F,"toneMappingExposure",D.toneMappingExposure),Je.needsLights&&Ja(Fn,_n),be&&se.fog===!0&&ge.refreshFogUniforms(Fn,be),ge.refreshMaterialUniforms(Fn,se,W,k,v.state.transmissionRenderTarget[R.id]),zu.upload(F,Lr(Je),Fn,Qe)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(zu.upload(F,Lr(Je),Fn,Qe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(F,"center",K.center),Gt.setValue(F,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(F,"normalMatrix",K.normalMatrix),Gt.setValue(F,"modelMatrix",K.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Jt=se.uniformsGroups;for(let bn=0,Nr=Jt.length;bn<Nr;bn++){const Gn=Jt[bn];ut.update(Gn,Dn),ut.bind(Gn,Dn)}}return Dn}function Ja(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function va(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,q,re){const se=Be.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Be.get(R.texture).__webglTexture=q,Be.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:re,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=Be.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const sn=F.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){Z=R,G=q,z=re;let se=!0,K=null,be=!1,Le=!1;if(R){const Oe=Be.get(R);if(Oe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(Oe.__webglFramebuffer===void 0)Qe.setupRenderTarget(R);else if(Oe.__hasExternalTextures)Qe.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(Oe.__boundDepthTexture!==Ye){if(Ye!==null&&Be.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const nt=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?K=nt[q][re]:K=nt[q],be=!0):R.samples>0&&Qe.useMultisampledRTT(R)===!1?K=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[re]:K=nt,H.copy(R.viewport),ne.copy(R.scissor),ue=R.scissorTest}else H.copy(J).multiplyScalar(W).floor(),ne.copy(Se).multiplyScalar(W).floor(),ue=ye;if(re!==0&&(K=sn),Ee.bindFramebuffer(F.FRAMEBUFFER,K)&&se&&Ee.drawBuffers(R,K),Ee.viewport(H),Ee.scissor(ne),Ee.setScissorTest(ue),be){const Oe=Be.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,re)}else if(Le){const Oe=q;for(let et=0;et<R.textures.length;et++){const nt=Be.get(R.textures[et]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+et,nt.__webglTexture,re,Oe)}}else if(R!==null&&re!==0){const Oe=Be.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oe.__webglTexture,re)}C=-1},this.readRenderTargetPixels=function(R,q,re,se,K,be,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){Ee.bindFramebuffer(F.FRAMEBUFFER,Oe);try{const et=R.textures[Ve],nt=et.format,Ye=et.type;if(!$e.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&re>=0&&re<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve),F.readPixels(q,re,se,K,We.convert(nt),We.convert(Ye),be))}finally{const et=Z!==null?Be.get(Z).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,se,K,be,Le,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe)if(q>=0&&q<=R.width-se&&re>=0&&re<=R.height-K){Ee.bindFramebuffer(F.FRAMEBUFFER,Oe);const et=R.textures[Ve],nt=et.format,Ye=et.type;if(!$e.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ht),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ve),F.readPixels(q,re,se,K,We.convert(nt),We.convert(Ye),0);const bt=Z!==null?Be.get(Z).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,bt);const qt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await aM(F,qt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ht),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.deleteBuffer(ht),F.deleteSync(qt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const se=Math.pow(2,-re),K=Math.floor(R.image.width*se),be=Math.floor(R.image.height*se),Le=q!==null?q.x:0,Ve=q!==null?q.y:0;Qe.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Le,Ve,K,be),Ee.unbindTexture()};const nl=F.createFramebuffer(),il=F.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,se=null,K=0,be=null){be===null&&(K!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=K,K=0):be=0);let Le,Ve,Oe,et,nt,Ye,ht,bt,qt;const Pt=R.isCompressedTexture?R.mipmaps[be]:R.image;if(re!==null)Le=re.max.x-re.min.x,Ve=re.max.y-re.min.y,Oe=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,nt=re.min.y,Ye=re.isBox3?re.min.z:0;else{const Un=Math.pow(2,-K);Le=Math.floor(Pt.width*Un),Ve=Math.floor(Pt.height*Un),R.isDataArrayTexture?Oe=Pt.depth:R.isData3DTexture?Oe=Math.floor(Pt.depth*Un):Oe=1,et=0,nt=0,Ye=0}se!==null?(ht=se.x,bt=se.y,qt=se.z):(ht=0,bt=0,qt=0);const dt=We.convert(q.format),Je=We.convert(q.type);let Wt;q.isData3DTexture?(Qe.setTexture3D(q,0),Wt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Qe.setTexture2DArray(q,0),Wt=F.TEXTURE_2D_ARRAY):(Qe.setTexture2D(q,0),Wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=F.getParameter(F.UNPACK_ROW_LENGTH),Dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),In=F.getParameter(F.UNPACK_SKIP_ROWS),_n=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const Gt=R.isDataArrayTexture||R.isData3DTexture,Fn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Un=Be.get(R),Jt=Be.get(q),bn=Be.get(Un.__renderTarget),Nr=Be.get(Jt.__renderTarget);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Gn=0;Gn<Oe;Gn++)Gt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(R).__webglTexture,K,Ye+Gn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(q).__webglTexture,be,qt+Gn)),F.blitFramebuffer(et,nt,Le,Ve,ht,bt,Le,Ve,F.DEPTH_BUFFER_BIT,F.NEAREST);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Be.has(R)){const Un=Be.get(R),Jt=Be.get(q);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,nl),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,il);for(let bn=0;bn<Oe;bn++)Gt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,K,Ye+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,K),Fn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Jt.__webglTexture,be,qt+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Jt.__webglTexture,be),K!==0?F.blitFramebuffer(et,nt,Le,Ve,ht,bt,Le,Ve,F.COLOR_BUFFER_BIT,F.NEAREST):Fn?F.copyTexSubImage3D(Wt,be,ht,bt,qt+bn,et,nt,Le,Ve):F.copyTexSubImage2D(Wt,be,ht,bt,et,nt,Le,Ve);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Wt,be,ht,bt,qt,Le,Ve,Oe,dt,Je,Pt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Wt,be,ht,bt,qt,Le,Ve,Oe,dt,Pt.data):F.texSubImage3D(Wt,be,ht,bt,qt,Le,Ve,Oe,dt,Je,Pt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,ht,bt,Le,Ve,dt,Je,Pt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,ht,bt,Pt.width,Pt.height,dt,Pt.data):F.texSubImage2D(F.TEXTURE_2D,be,ht,bt,Le,Ve,dt,Je,Pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,_t),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,In),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_n),be===0&&q.generateMipmaps&&F.generateMipmap(Wt),Ee.unbindTexture()},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&Qe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Qe.setTextureCube(R,0):R.isData3DTexture?Qe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Qe.setTexture2DArray(R,0):Qe.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){G=0,z=0,Z=null,Ee.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Bh=1/1e3,SR=1e3,yR=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Bh}get fixedDelta(){return this._fixedDelta*Bh}set fixedDelta(a){this._fixedDelta=a*SR}get elapsed(){return this._elapsed*Bh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},ER=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new ja;return i.setAttribute("position",new pi(a,3)),i.setAttribute("uv",new pi(e,2)),i})(),Qa=class Nd{static get fullscreenGeometry(){return ER}constructor(e="Pass",i=new Ud,s=new Zd){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new Ai(Nd.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Ud),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=Ko){}render(e,i,s,l,u){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof Ci||i instanceof Bs||i instanceof wn||i instanceof Nd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},MR=class extends Qa{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const u=a.state.buffers.stencil;u.setLocked(!1),u.setTest(!1)}},TR=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,bR="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",AR=class extends mi{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new pn(null),opacity:new pn(1)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TR,vertexShader:bR})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},RR=class extends Qa{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new AR,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new Ci(1,1,{minFilter:Bn,magFilter:Bn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==ai?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===an&&(this.renderTarget.texture.colorSpace=an))}},L_=new Lt,U0=class extends Qa{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const u=this.overrideClearColor,f=this.overrideClearAlpha,d=a.getClearAlpha(),m=u!==null,p=f>=0;m?(a.getClearColor(L_),a.setClearColor(u,p?f:d)):p&&a.setClearAlpha(f),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),m?a.setClearColor(L_,d):p&&a.setClearAlpha(d)}},CR=class extends Qa{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new U0(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const u=a.getContext(),f=a.state.buffers,d=this.scene,m=this.camera,p=this.clearPass,g=this.inverted?0:1,_=1-g;f.color.setMask(!1),f.depth.setMask(!1),f.color.setLocked(!0),f.depth.setLocked(!0),f.stencil.setTest(!0),f.stencil.setOp(u.REPLACE,u.REPLACE,u.REPLACE),f.stencil.setFunc(u.ALWAYS,g,4294967295),f.stencil.setClear(_),f.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(a,null):(p.render(a,e),p.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,m)):(a.setRenderTarget(e),a.render(d,m),a.setRenderTarget(i),a.render(d,m)),f.color.setLocked(!1),f.depth.setLocked(!1),f.stencil.setLocked(!1),f.stencil.setFunc(u.EQUAL,1,4294967295),f.stencil.setOp(u.KEEP,u.KEEP,u.KEEP),f.stencil.setLocked(!0)}},N_=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new RR,this.depthTexture=null,this.passes=[],this.timer=new yR,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new vt),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===ai&&a.outputColorSpace===an&&(this.inputBuffer.texture.colorSpace=an,this.outputBuffer.texture.colorSpace=an,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.depthTexture=new Kd;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=Ls,a.type=Us):a.type=Ya,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,u=l===null?new vt:l.getDrawingBufferSize(new vt),f={minFilter:Bn,magFilter:Bn,stencilBuffer:e,depthBuffer:a,type:i},d=new Ci(u.width,u.height,f);return s>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=s),i===ai&&l!==null&&l.outputColorSpace===an&&(d.texture.colorSpace=an),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new vt),u=s.getContext().getContextAttributes().alpha,f=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,u,f),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of i)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const u=(d,m)=>d||m.needsDepthTexture;e.reduce(u,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,u=!1,f,d,m;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,s,l,a,u),p.needsSwap&&(u&&(i.renderToScreen=p.renderToScreen,f=e.getContext(),d=e.state.buffers.stencil,d.setFunc(f.NOTEQUAL,1,4294967295),i.render(e,s,l,a,u),d.setFunc(f.EQUAL,1,4294967295)),m=s,s=l,l=m),p instanceof CR?u=!0:p instanceof MR&&(u=!1))}setSize(a,e,i){const s=this.renderer,l=s.getSize(new vt);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const u=s.getDrawingBufferSize(new vt);this.inputBuffer.setSize(u.width,u.height),this.outputBuffer.setSize(u.width,u.height);for(const f of this.passes)f.setSize(u.width,u.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Qa.fullscreenGeometry.dispose()}},Cr={NONE:0,DEPTH:1,CONVOLUTION:2},Ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},wR=class{constructor(){this.shaderParts=new Map([[Ct.FRAGMENT_HEAD,null],[Ct.FRAGMENT_MAIN_UV,null],[Ct.FRAGMENT_MAIN_IMAGE,null],[Ct.VERTEX_HEAD,null],[Ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Cr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Za}},Ih=!1,O_=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case ni:i=this.materialsFlatShadedDoubleSide;break;case Tn:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case ni:i=this.materialsDoubleSide;break;case Tn:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof mi))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const u=e[l].value;u.isRenderTargetTexture&&(e[l].value=null,i.set(l,u))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=da;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=Tn,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=ni,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=Tn,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=ni,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Ih){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const u of l)u[0].material=u[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Ih}static set workaroundEnabled(a){Ih=a}},yt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},DR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",UR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",LR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",NR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",OR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",PR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",BR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",IR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",FR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",zR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",HR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",GR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",VR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",kR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",XR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",WR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",qR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",YR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",ZR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",KR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",jR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",QR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",JR="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",$R="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",eC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",tC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",nC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",iC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",aC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",rC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",sC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",oC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",lC=new Map([[yt.ADD,DR],[yt.ALPHA,UR],[yt.AVERAGE,LR],[yt.COLOR,NR],[yt.COLOR_BURN,OR],[yt.COLOR_DODGE,PR],[yt.DARKEN,BR],[yt.DIFFERENCE,IR],[yt.DIVIDE,FR],[yt.DST,null],[yt.EXCLUSION,zR],[yt.HARD_LIGHT,HR],[yt.HARD_MIX,GR],[yt.HUE,VR],[yt.INVERT,kR],[yt.INVERT_RGB,XR],[yt.LIGHTEN,WR],[yt.LINEAR_BURN,qR],[yt.LINEAR_DODGE,YR],[yt.LINEAR_LIGHT,ZR],[yt.LUMINOSITY,KR],[yt.MULTIPLY,jR],[yt.NEGATION,QR],[yt.NORMAL,JR],[yt.OVERLAY,$R],[yt.PIN_LIGHT,eC],[yt.REFLECT,tC],[yt.SATURATION,nC],[yt.SCREEN,iC],[yt.SOFT_LIGHT,aC],[yt.SRC,rC],[yt.SUBTRACT,sC],[yt.VIVID_LIGHT,oC]]),uC=class extends Ka{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new pn(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return lC.get(this.blendFunction)}},L0=class extends Ka{constructor(a,e,{attributes:i=Cr.NONE,blendFunction:s=yt.NORMAL,defines:l=new Map,uniforms:u=new Map,extensions:f=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=u,this.extensions=f,this.blendMode=new uC(s),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=Za,this._outputColorSpace=Ii}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Ko){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof Ci||e instanceof Bs||e instanceof wn||e instanceof Qa)&&this[a].dispose()}}},P_=class extends Qa{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new U0,this.overrideMaterialManager=i===null?null:new O_(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new O_(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const u=this.scene,f=this.camera,d=this.selection,m=f.layers.mask,p=u.background,g=a.shadowMap.autoUpdate,_=this.renderToScreen?null:e;d!==null&&f.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(u.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(_),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,u,f):a.render(u,f),f.layers.mask=m,u.background=p,a.shadowMap.autoUpdate=g}},cC=`#include <common>
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
}`,fC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",hC=class extends mi{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:qu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new pn(null),depthBuffer:new pn(null),resolution:new pn(new vt),texelSize:new pn(new vt),cameraNear:new pn(.3),cameraFar:new pn(1e3),aspect:new pn(1),time:new pn(0)},blending:zi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Ko){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=cC.replace(Ct.FRAGMENT_HEAD,a.get(Ct.FRAGMENT_HEAD)||"").replace(Ct.FRAGMENT_MAIN_UV,a.get(Ct.FRAGMENT_MAIN_UV)||"").replace(Ct.FRAGMENT_MAIN_IMAGE,a.get(Ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=fC.replace(Ct.VERTEX_HEAD,a.get(Ct.VERTEX_HEAD)||"").replace(Ct.VERTEX_MAIN_SUPPORT,a.get(Ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof di?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Ct}};function B_(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),u=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const f of i.entries())f[1]!==null&&i.set(f[0],f[1].replace(u,l))}}function dC(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const u=s!==void 0&&/mainImage/.test(s),f=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(f&&(i.attributes&Cr.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!u&&!f)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Ct.FRAGMENT_HEAD)||"",g=m.get(Ct.FRAGMENT_MAIN_UV)||"",_=m.get(Ct.FRAGMENT_MAIN_IMAGE)||"",x=m.get(Ct.VERTEX_HEAD)||"",y=m.get(Ct.VERTEX_MAIN_SUPPORT)||"";const M=new Set,A=new Set;if(f&&(g+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const U=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);y+=`	${a}MainSupport(`,y+=U?`vUv);
`:`);
`;for(const L of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const D of L[1].split(/\s*,\s*/))i.varyings.add(D),M.add(D),A.add(D);for(const L of l.matchAll(d))A.add(L[1])}for(const U of s.matchAll(d))A.add(U[1]);for(const U of e.defines.keys())A.add(U.replace(/\([\w\s,]*\)/g,""));for(const U of e.uniforms.keys())A.add(U);A.delete("while"),A.delete("for"),A.delete("if"),e.uniforms.forEach((U,L)=>i.uniforms.set(a+L.charAt(0).toUpperCase()+L.slice(1),U)),e.defines.forEach((U,L)=>i.defines.set(a+L.charAt(0).toUpperCase()+L.slice(1),U));const S=new Map([["fragment",s],["vertex",l]]);B_(a,A,i.defines),B_(a,A,S),s=S.get("fragment"),l=S.get("vertex");const v=e.blendMode;if(i.blendModes.set(v.blendFunction,v),u){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(_+=e.inputColorSpace===an?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ii?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const U=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;_+=`${a}MainImage(color0, UV, `,(i.attributes&Cr.DEPTH)!==0&&U.test(s)&&(_+="depth, ",i.readDepth=!0),_+=`color1);
	`;const L=a+"BlendOpacity";i.uniforms.set(L,v.opacity),_+=`color0 = blend${v.blendFunction}(color0, color1, ${L});

	`,p+=`uniform float ${L};

`}if(p+=s+`
`,l!==null&&(x+=l+`
`),m.set(Ct.FRAGMENT_HEAD,p),m.set(Ct.FRAGMENT_MAIN_UV,g),m.set(Ct.FRAGMENT_MAIN_IMAGE,_),m.set(Ct.VERTEX_HEAD,x),m.set(Ct.VERTEX_MAIN_SUPPORT,y),e.extensions!==null)for(const U of e.extensions)i.extensions.add(U)}}var I_=class extends Qa{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new hC(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new wR;let e=0;for(const f of this.effects)if(f.blendMode.blendFunction===yt.DST)a.attributes|=f.getAttributes()&Cr.DEPTH;else{if((a.attributes&f.getAttributes()&Cr.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${f.name})`);dC("e"+e++,f,a)}let i=a.shaderParts.get(Ct.FRAGMENT_HEAD),s=a.shaderParts.get(Ct.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Ct.FRAGMENT_MAIN_UV);const u=/\bblend\b/g;for(const f of a.blendModes.values())i+=f.getShaderCode().replace(u,`blend${f.blendFunction}`)+`
`;(a.attributes&Cr.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===an&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Ct.FRAGMENT_HEAD,i),a.shaderParts.set(Ct.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Ct.FRAGMENT_MAIN_UV,l);for(const[f,d]of a.shaderParts)d!==null&&a.shaderParts.set(f,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Ko){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const u of this.effects)u.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const u=this.fullscreenMaterial;u.inputBuffer=e.texture,u.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==ai&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const pC=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d");if(!i)throw new Error("2D context not available");i.fillStyle="black",i.fillRect(0,0,e.width,e.height);const s=new wn(e);s.minFilter=Bn,s.magFilter=Bn,s.generateMipmaps=!1;const l=[];let u=null;const f=64;let d=.1*64;const m=1/f,p=()=>{i.fillStyle="black",i.fillRect(0,0,e.width,e.height)},g=y=>{const M={x:y.x*64,y:(1-y.y)*64};let A=1;const S=D=>Math.sin(D*Math.PI/2),v=D=>-D*(D-2);y.age<f*.3?A=S(y.age/(f*.3)):A=v(1-(y.age-f*.3)/(f*.7))||0,A*=y.force;const U=`${(y.vx+1)/2*255}, ${(y.vy+1)/2*255}, ${A*255}`,L=320;i.shadowOffsetX=L,i.shadowOffsetY=L,i.shadowBlur=d,i.shadowColor=`rgba(${U},${.22*A})`,i.beginPath(),i.fillStyle="rgba(255,0,0,1)",i.arc(M.x-L,M.y-L,d,0,Math.PI*2),i.fill()};return{canvas:e,texture:s,addTouch:y=>{let M=0,A=0,S=0;if(u){const v=y.x-u.x,U=y.y-u.y;if(v===0&&U===0)return;const L=v*v+U*U,D=Math.sqrt(L);A=v/(D||1),S=U/(D||1),M=Math.min(L*1e4,1)}u={x:y.x,y:y.y},l.push({x:y.x,y:y.y,age:0,force:M,vx:A,vy:S})},update:()=>{p();for(let y=l.length-1;y>=0;y--){const M=l[y],A=M.force*m*(1-M.age/f);M.x+=M.vx*A,M.y+=M.vy*A,M.age++,M.age>f&&l.splice(y,1)}for(let y=0;y<l.length;y++)g(l[y]);s.needsUpdate=!0},set radiusScale(y){d=.1*64*y},get radiusScale(){return d/(.1*64)},size:64}},mC=(a,e)=>{const i=`
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
    `;return new L0("LiquidEffect",i,{uniforms:new Map([["uTexture",new pn(a)],["uStrength",new pn(e?.strength??.025)],["uTime",new pn(0)],["uFreq",new pn(e?.freq??4.5)]])})},F_={square:0,circle:1,triangle:2,diamond:3},gC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,vC=`
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
`,Fh=10,_C=({variant:a="square",pixelSize:e=3,color:i="#B19EEF",className:s,style:l,antialias:u=!0,patternScale:f=2,patternDensity:d=1,liquid:m=!1,liquidStrength:p=.1,liquidRadius:g=1,pixelSizeJitter:_=0,enableRipples:x=!0,rippleIntensityScale:y=1,rippleThickness:M=.1,rippleSpeed:A=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:v=!0,speed:U=.5,transparent:L=!0,edgeFade:D=.5,noiseAmount:I=0})=>{const G=de.useRef(null),z=de.useRef({visible:!0}),Z=de.useRef(U),C=de.useRef(null),w=de.useRef(null);return de.useEffect(()=>{const H=G.current;if(!H)return;Z.current=U;const ne=["antialias","liquid","noiseAmount"],ue={antialias:u,liquid:m,noiseAmount:I};let pe=!1;if(!C.current)pe=!0;else if(w.current){for(const Q of ne)if(w.current[Q]!==ue[Q]){pe=!0;break}}if(pe){if(C.current){const Ee=C.current;Ee.resizeObserver?.disconnect(),cancelAnimationFrame(Ee.raf),Ee.quad?.geometry.dispose(),Ee.material.dispose(),Ee.composer?.dispose(),Ee.renderer.dispose(),Ee.renderer.domElement.parentElement===H&&H.removeChild(Ee.renderer.domElement),C.current=null}const Q=document.createElement("canvas"),P=Q.getContext("webgl2",{antialias:u,alpha:!0});if(!P)return;const k=new xR({canvas:Q,context:P,antialias:u,alpha:!0});k.domElement.style.width="100%",k.domElement.style.height="100%",k.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),H.appendChild(k.domElement);const W={uResolution:{value:new vt(0,0)},uTime:{value:0},uColor:{value:new Lt(i)},uClickPos:{value:Array.from({length:Fh},()=>new vt(-1,-1))},uClickTimes:{value:new Float32Array(Fh)},uShapeType:{value:F_[a]??0},uPixelSize:{value:e*k.getPixelRatio()},uScale:{value:f},uDensity:{value:d},uPixelJitter:{value:_},uEnableRipples:{value:x?1:0},uRippleSpeed:{value:A},uRippleThickness:{value:M},uRippleIntensity:{value:y},uEdgeFade:{value:D}},xe=new Ud,N=new b0(-1,1,1,-1,0,1),J=new mi({vertexShader:gC,fragmentShader:vC,uniforms:W,transparent:!0,glslVersion:wd,depthTest:!1,depthWrite:!1}),Se=new el(2,2),ye=new Ai(Se,J);xe.add(ye);const De=new BM,Ge=()=>{const Ee=H.clientWidth||1,st=H.clientHeight||1;k.setSize(Ee,st,!1),W.uResolution.value.set(k.domElement.width,k.domElement.height),C.current?.composer&&C.current.composer.setSize(k.domElement.width,k.domElement.height),W.uPixelSize.value=e*k.getPixelRatio()};Ge();const ee=new ResizeObserver(Ge);ee.observe(H);const Re=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Ee=new Uint32Array(1);return window.crypto.getRandomValues(Ee),Ee[0]/4294967295}return Math.random()})()*1e3;let Ie,He,lt;if(m){He=pC(),He.radiusScale=g,Ie=new N_(k);const Ee=new P_(xe,N);lt=mC(He.texture,{strength:p,freq:S});const st=new I_(N,lt);st.renderToScreen=!0,Ie.addPass(Ee),Ie.addPass(st)}if(I>0){Ie||(Ie=new N_(k),Ie.addPass(new P_(xe,N)));const Ee=new L0("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new pn(0)],["uAmount",new pn(I)]])}),st=new I_(N,Ee);st.renderToScreen=!0,Ie&&Ie.passes.length>0&&Ie.passes.forEach(Be=>Be.renderToScreen=!1),Ie.addPass(st)}Ie&&Ie.setSize(k.domElement.width,k.domElement.height);const Zt=Ee=>{const st=k.domElement.getBoundingClientRect(),Be=k.domElement.width/st.width,Qe=k.domElement.height/st.height,Ht=(Ee.clientX-st.left)*Be,Xt=(st.height-(Ee.clientY-st.top))*Qe;return{fx:Ht,fy:Xt,w:k.domElement.width,h:k.domElement.height}},F=Ee=>{const{fx:st,fy:Be}=Zt(Ee),Qe=C.current?.clickIx??0;W.uClickPos.value[Qe].set(st,Be),W.uClickTimes.value[Qe]=W.uTime.value,C.current&&(C.current.clickIx=(Qe+1)%Fh)},Dt=Ee=>{if(!He)return;const{fx:st,fy:Be,w:Qe,h:Ht}=Zt(Ee);He.addTouch({x:st/Qe,y:Be/Ht})};k.domElement.addEventListener("pointerdown",F,{passive:!0}),k.domElement.addEventListener("pointermove",Dt,{passive:!0});let at=0;const $e=()=>{if(v&&!z.current.visible){at=requestAnimationFrame($e);return}W.uTime.value=Re+De.getElapsedTime()*Z.current,lt&&(lt.uniforms.get("uTime").value=W.uTime.value),Ie?(He&&He.update(),Ie.passes.forEach(Ee=>{const st=Ee.effects;st&&st.forEach(Be=>{const Qe=Be.uniforms?.get("uTime");Qe&&(Qe.value=W.uTime.value)})}),Ie.render()):k.render(xe,N),at=requestAnimationFrame($e)};at=requestAnimationFrame($e),C.current={renderer:k,scene:xe,camera:N,material:J,clock:De,clickIx:0,uniforms:W,resizeObserver:ee,raf:at,quad:ye,timeOffset:Re,composer:Ie,touch:He,liquidEffect:lt}}else{const Q=C.current;if(Q.uniforms.uShapeType.value=F_[a]??0,Q.uniforms.uPixelSize.value=e*Q.renderer.getPixelRatio(),Q.uniforms.uColor.value.set(i),Q.uniforms.uScale.value=f,Q.uniforms.uDensity.value=d,Q.uniforms.uPixelJitter.value=_,Q.uniforms.uEnableRipples.value=x?1:0,Q.uniforms.uRippleIntensity.value=y,Q.uniforms.uRippleThickness.value=M,Q.uniforms.uRippleSpeed.value=A,Q.uniforms.uEdgeFade.value=D,L?Q.renderer.setClearAlpha(0):Q.renderer.setClearColor(0,1),Q.liquidEffect){const P=Q.liquidEffect;P&&(P.value=p);const k=Q.liquidEffect.uniforms.get("uFreq");k&&(k.value=S)}Q.touch&&(Q.touch.radiusScale=g)}return w.current=ue,()=>{if(C.current&&pe||!C.current)return;const Q=C.current;Q.resizeObserver?.disconnect(),cancelAnimationFrame(Q.raf),Q.quad?.geometry.dispose(),Q.material.dispose(),Q.composer?.dispose(),Q.renderer.dispose(),Q.renderer.domElement.parentElement===H&&H.removeChild(Q.renderer.domElement),C.current=null}},[u,m,I,e,f,d,x,y,M,A,_,D,L,p,g,S,v,a,i,U]),Mn.jsx("div",{ref:G,className:`pixel-blast-container ${s??""}`,style:l,"aria-label":"PixelBlast interactive background"})};function xC(a){const e=a.replace("#",""),i=parseInt(e.length===3?e.split("").map(f=>f+f).join(""):e,16),s=i>>16&255,l=i>>8&255,u=i&255;return[s,l,u]}function SC({color:a="#000000",strength:e=.6,style:i={}}){const s=Math.max(0,Math.min(1,e)),[l,u,f]=xC(a||"#000000"),d=Math.round(5+s*45),m=`linear-gradient(to bottom, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,p=`linear-gradient(to top, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,g=`linear-gradient(to right, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,_=`linear-gradient(to left, rgba(${l}, ${u}, ${f}, 1) 0%, rgba(${l}, ${u}, ${f}, 0) ${d}%)`,x={position:"fixed",inset:0,zIndex:1,pointerEvents:"none",backgroundImage:`${m}, ${p}, ${g}, ${_}`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",mixBlendMode:"normal",...i};return Mn.jsx("div",{"aria-hidden":!0,style:x})}function yC(){return Mn.jsxs("div",{style:{position:"fixed",inset:0,width:"100vw",height:"100vh",zIndex:0,overflow:"hidden"},children:[Mn.jsx(_C,{variant:"square",pixelSize:4,color:"#19A7CE",patternScale:3,patternDensity:1.5,pixelSizeJitter:1.5,enableRipples:!0,rippleSpeed:.5,rippleThickness:.08,rippleIntensityScale:1.5,liquid:!0,liquidStrength:0,liquidRadius:0,liquidWobbleSpeed:.5,speed:.5,edgeFade:0,transparent:!0}),Mn.jsx(SC,{color:"#146C94",strength:.05})]})}function EC(){return Mn.jsxs(Mn.Fragment,{children:[Mn.jsx("title",{children:"楽園"}),Mn.jsx(yC,{})]})}function MC(){return Mn.jsxs(By,{children:[Mn.jsx(Hh,{path:"/",element:Mn.jsx(EC,{})}),Mn.jsx(Hh,{path:"test",element:Mn.jsx(Mn.Fragment,{children:"test"})})]})}WS.createRoot(document.getElementById("root")).render(Mn.jsx(de.StrictMode,{children:Mn.jsx(rE,{children:Mn.jsx(MC,{})})}));
