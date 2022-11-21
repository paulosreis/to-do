function jv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var us=Symbol.for("react.element"),Vv=Symbol.for("react.portal"),Hv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),Qd=Symbol.iterator;function ey(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,Cp={};function Br(t,e,n){this.props=t,this.context=e,this.refs=Cp,this.updater=n||wp}Br.prototype.isReactComponent={};Br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sp(){}Sp.prototype=Br.prototype;function tc(t,e,n){this.props=t,this.context=e,this.refs=Cp,this.updater=n||wp}var nc=tc.prototype=new Sp;nc.constructor=tc;Ep(nc,Br.prototype);nc.isPureReactComponent=!0;var Yd=Array.isArray,Ip=Object.prototype.hasOwnProperty,rc={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function Tp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ip.call(e,r)&&!kp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:us,type:t,key:s,ref:o,props:i,_owner:rc.current}}function ty(t,e){return{$$typeof:us,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ic(t){return typeof t=="object"&&t!==null&&t.$$typeof===us}function ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xd=/\/+/g;function Hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ny(""+t.key):e.toString(36)}function Xs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case us:case Vv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hl(o,0):r,Yd(i)?(n="",t!=null&&(n=t.replace(Xd,"$&/")+"/"),Xs(i,e,n,"",function(u){return u})):i!=null&&(ic(i)&&(i=ty(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Hl(s,l);o+=Xs(s,e,n,a,i)}else if(a=ey(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Hl(s,l++),o+=Xs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xs(t,e,n){if(t==null)return t;var r=[],i=0;return Xs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},Js={transition:null},iy={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Js,ReactCurrentOwner:rc};z.Children={map:xs,forEach:function(t,e,n){xs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xs(t,function(){e++}),e},toArray:function(t){return xs(t,function(e){return e})||[]},only:function(t){if(!ic(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Br;z.Fragment=Hv;z.Profiler=Kv;z.PureComponent=tc;z.StrictMode=Gv;z.Suspense=Xv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ep({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ip.call(e,a)&&!kp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:us,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qv,_context:t},t.Consumer=t};z.createElement=Tp;z.createFactory=function(t){var e=Tp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Yv,render:t}};z.isValidElement=ic;z.lazy=function(t){return{$$typeof:Zv,_payload:{_status:-1,_result:t},_init:ry}};z.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=Js.transition;Js.transition={};try{t()}finally{Js.transition=e}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(t,e){return Oe.current.useCallback(t,e)};z.useContext=function(t){return Oe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Oe.current.useEffect(t,e)};z.useId=function(){return Oe.current.useId()};z.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Oe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};z.useRef=function(t){return Oe.current.useRef(t)};z.useState=function(t){return Oe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Oe.current.useTransition()};z.version="18.2.0";(function(t){t.exports=z})(A);const Np=$v(A.exports),Da=jv({__proto__:null,default:Np},[A.exports]);var La={},Rp={exports:{}},Ve={},Pp={exports:{}},xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,D){var L=k.length;k.push(D);e:for(;0<L;){var ie=L-1>>>1,ue=k[ie];if(0<i(ue,D))k[ie]=D,k[L]=ue,L=ie;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],L=k.pop();if(L!==D){k[0]=L;e:for(var ie=0,ue=k.length,Rs=ue>>>1;ie<Rs;){var wn=2*(ie+1)-1,Vl=k[wn],En=wn+1,Ps=k[En];if(0>i(Vl,L))En<ue&&0>i(Ps,Vl)?(k[ie]=Ps,k[En]=L,ie=En):(k[ie]=Vl,k[wn]=L,ie=wn);else if(En<ue&&0>i(Ps,L))k[ie]=Ps,k[En]=L,ie=En;else break e}}return D}function i(k,D){var L=k.sortIndex-D.sortIndex;return L!==0?L:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,p=!1,_=!1,v=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(k){if(v=!1,g(k),!_)if(n(a)!==null)_=!0,jl(S);else{var D=n(u);D!==null&&$l(y,D.startTime-k)}}function S(k,D){_=!1,v&&(v=!1,m(R),R=-1),p=!0;var L=h;try{for(g(D),c=n(a);c!==null&&(!(c.expirationTime>D)||k&&!et());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,h=c.priorityLevel;var ue=ie(c.expirationTime<=D);D=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(a)&&r(a),g(D)}else r(a);c=n(a)}if(c!==null)var Rs=!0;else{var wn=n(u);wn!==null&&$l(y,wn.startTime-D),Rs=!1}return Rs}finally{c=null,h=L,p=!1}}var T=!1,N=null,R=-1,q=5,F=-1;function et(){return!(t.unstable_now()-F<q)}function Xr(){if(N!==null){var k=t.unstable_now();F=k;var D=!0;try{D=N(!0,k)}finally{D?Jr():(T=!1,N=null)}}else T=!1}var Jr;if(typeof f=="function")Jr=function(){f(Xr)};else if(typeof MessageChannel<"u"){var qd=new MessageChannel,Bv=qd.port2;qd.port1.onmessage=Xr,Jr=function(){Bv.postMessage(null)}}else Jr=function(){P(Xr,0)};function jl(k){N=k,T||(T=!0,Jr())}function $l(k,D){R=P(function(){k(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,jl(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return k()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=h;h=k;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(k,D,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,k){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,k={id:d++,callback:D,priorityLevel:k,startTime:L,expirationTime:ue,sortIndex:-1},L>ie?(k.sortIndex=L,e(u,k),n(a)===null&&k===n(u)&&(v?(m(R),R=-1):v=!0,$l(y,L-ie))):(k.sortIndex=ue,e(a,k),_||p||(_=!0,jl(S))),k},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(k){var D=h;return function(){var L=h;h=D;try{return k.apply(this,arguments)}finally{h=L}}}})(xp);(function(t){t.exports=xp})(Pp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=A.exports,$e=Pp.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,Di={};function Qn(t,e){Nr(t,e),Nr(t+"Capture",e)}function Nr(t,e){for(Di[t]=e,t=0;t<e.length;t++)Ap.add(e[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},Zd={};function oy(t){return Ma.call(Zd,t)?!0:Ma.call(Jd,t)?!1:sy.test(t)?Zd[t]=!0:(Jd[t]=!0,!1)}function ly(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ay(t,e,n,r){if(e===null||typeof e>"u"||ly(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var sc=/[\-:]([a-z])/g;function oc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sc,oc);Ee[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sc,oc);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sc,oc);Ee[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function lc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ay(e,n,i,r)&&(n=null),r||i===null?oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ft=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Lp=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),Fa=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),cc=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Mp=Symbol.for("react.offscreen"),eh=Symbol.iterator;function Zr(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,Gl;function fi(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Kl=!1;function ql(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fi(t):""}function uy(t){switch(t.tag){case 5:return fi(t.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return t=ql(t.type,!1),t;case 11:return t=ql(t.type.render,!1),t;case 1:return t=ql(t.type,!0),t;default:return""}}function za(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case nr:return"Fragment";case tr:return"Portal";case ba:return"Profiler";case ac:return"StrictMode";case Fa:return"Suspense";case Ua:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lp:return(t.displayName||"Context")+".Consumer";case Dp:return(t._context.displayName||"Context")+".Provider";case uc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cc:return e=t.displayName||null,e!==null?e:za(t.type)||"Memo";case Bt:e=t._payload,t=t._init;try{return za(t(e))}catch{}}return null}function cy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(e);case 8:return e===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dy(t){var e=bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function As(t){t._valueTracker||(t._valueTracker=dy(t))}function Fp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wa(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Up(t,e){e=e.checked,e!=null&&lc(t,"checked",e,!1)}function Ba(t,e){Up(t,e);var n=hn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ja(t,e.type,n):e.hasOwnProperty("defaultValue")&&ja(t,e.type,hn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ja(t,e,n){(e!=="number"||po(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pi=Array.isArray;function mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $a(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(pi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hn(n)}}function zp(t,e){var n=hn(e.value),r=hn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ds,Bp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ds.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Li(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hy=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(t){hy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yi[e]=yi[t]})});function jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yi.hasOwnProperty(t)&&yi[t]?(""+e).trim():e+"px"}function $p(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fy=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(t,e){if(e){if(fy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ga(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qa=null,gr=null,_r=null;function sh(t){if(t=hs(t)){if(typeof qa!="function")throw Error(w(280));var e=t.stateNode;e&&(e=cl(e),qa(t.stateNode,t.type,e))}}function Vp(t){gr?_r?_r.push(t):_r=[t]:gr=t}function Hp(){if(gr){var t=gr,e=_r;if(_r=gr=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function Gp(t,e){return t(e)}function Kp(){}var Ql=!1;function qp(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return Gp(t,e,n)}finally{Ql=!1,(gr!==null||_r!==null)&&(Kp(),Hp())}}function Mi(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Qa=!1;if(Ot)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Qa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Qa=!1}function py(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var wi=!1,mo=null,go=!1,Ya=null,my={onError:function(t){wi=!0,mo=t}};function gy(t,e,n,r,i,s,o,l,a){wi=!1,mo=null,py.apply(my,arguments)}function _y(t,e,n,r,i,s,o,l,a){if(gy.apply(this,arguments),wi){if(wi){var u=mo;wi=!1,mo=null}else throw Error(w(198));go||(go=!0,Ya=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(Yn(t)!==t)throw Error(w(188))}function vy(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return oh(i),t;if(s===r)return oh(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Yp(t){return t=vy(t),t!==null?Xp(t):null}function Xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xp(t);if(e!==null)return e;t=t.sibling}return null}var Jp=$e.unstable_scheduleCallback,lh=$e.unstable_cancelCallback,yy=$e.unstable_shouldYield,wy=$e.unstable_requestPaint,se=$e.unstable_now,Ey=$e.unstable_getCurrentPriorityLevel,hc=$e.unstable_ImmediatePriority,Zp=$e.unstable_UserBlockingPriority,_o=$e.unstable_NormalPriority,Cy=$e.unstable_LowPriority,em=$e.unstable_IdlePriority,ol=null,_t=null;function Sy(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Ty,Iy=Math.log,ky=Math.LN2;function Ty(t){return t>>>=0,t===0?32:31-(Iy(t)/ky|0)|0}var Ls=64,Ms=4194304;function mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=mi(l):(s&=o,s!==0&&(r=mi(s)))}else o=n&~i,o!==0?r=mi(o):s!==0&&(r=mi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ny(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ry(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Ny(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Xa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tm(){var t=Ls;return Ls<<=1,(Ls&4194240)===0&&(Ls=64),t}function Yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function Py(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function nm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rm,pc,im,sm,om,Ja=!1,bs=[],Zt=null,en=null,tn=null,bi=new Map,Fi=new Map,$t=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function ti(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=hs(e),e!==null&&pc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Oy(t,e,n,r,i){switch(e){case"focusin":return Zt=ti(Zt,t,e,n,r,i),!0;case"dragenter":return en=ti(en,t,e,n,r,i),!0;case"mouseover":return tn=ti(tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bi.set(s,ti(bi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fi.set(s,ti(Fi.get(s)||null,t,e,n,r,i)),!0}return!1}function lm(t){var e=Tn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=Qp(n),e!==null){t.blockedOn=e,om(t.priority,function(){im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return e=hs(n),e!==null&&pc(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){Zs(t)&&n.delete(e)}function Ay(){Ja=!1,Zt!==null&&Zs(Zt)&&(Zt=null),en!==null&&Zs(en)&&(en=null),tn!==null&&Zs(tn)&&(tn=null),bi.forEach(uh),Fi.forEach(uh)}function ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Ja||(Ja=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,Ay)))}function Ui(t){function e(i){return ni(i,t)}if(0<bs.length){ni(bs[0],t);for(var n=1;n<bs.length;n++){var r=bs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zt!==null&&ni(Zt,t),en!==null&&ni(en,t),tn!==null&&ni(tn,t),bi.forEach(e),Fi.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&$t.shift()}var vr=Ft.ReactCurrentBatchConfig,yo=!0;function Dy(t,e,n,r){var i=j,s=vr.transition;vr.transition=null;try{j=1,mc(t,e,n,r)}finally{j=i,vr.transition=s}}function Ly(t,e,n,r){var i=j,s=vr.transition;vr.transition=null;try{j=4,mc(t,e,n,r)}finally{j=i,vr.transition=s}}function mc(t,e,n,r){if(yo){var i=Za(t,e,n,r);if(i===null)oa(t,e,r,wo,n),ah(t,r);else if(Oy(i,t,e,n,r))r.stopPropagation();else if(ah(t,r),e&4&&-1<xy.indexOf(t)){for(;i!==null;){var s=hs(i);if(s!==null&&rm(s),s=Za(t,e,n,r),s===null&&oa(t,e,r,wo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oa(t,e,r,null,n)}}var wo=null;function Za(t,e,n,r){if(wo=null,t=dc(r),t=Tn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wo=t,null}function am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ey()){case hc:return 1;case Zp:return 4;case _o:case Cy:return 16;case em:return 536870912;default:return 16}default:return 16}}var Qt=null,gc=null,eo=null;function um(){if(eo)return eo;var t,e=gc,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return eo=i.slice(t,1<r?1-r:void 0)}function to(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function ch(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:ch,this.isPropagationStopped=ch,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=He(jr),ds=ee({},jr,{view:0,detail:0}),My=He(ds),Xl,Jl,ri,ll=ee({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(Xl=t.screenX-ri.screenX,Jl=t.screenY-ri.screenY):Jl=Xl=0,ri=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),dh=He(ll),by=ee({},ll,{dataTransfer:0}),Fy=He(by),Uy=ee({},ds,{relatedTarget:0}),Zl=He(Uy),zy=ee({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wy=He(zy),By=ee({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jy=He(By),$y=ee({},jr,{data:0}),hh=He($y),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gy[t])?!!e[t]:!1}function vc(){return Ky}var qy=ee({},ds,{key:function(t){if(t.key){var e=Vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qy=He(qy),Yy=ee({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=He(Yy),Xy=ee({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Jy=He(Xy),Zy=ee({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=He(Zy),t0=ee({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=He(t0),r0=[9,13,27,32],yc=Ot&&"CompositionEvent"in window,Ei=null;Ot&&"documentMode"in document&&(Ei=document.documentMode);var i0=Ot&&"TextEvent"in window&&!Ei,cm=Ot&&(!yc||Ei&&8<Ei&&11>=Ei),ph=String.fromCharCode(32),mh=!1;function dm(t,e){switch(t){case"keyup":return r0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function s0(t,e){switch(t){case"compositionend":return hm(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function o0(t,e){if(rr)return t==="compositionend"||!yc&&dm(t,e)?(t=um(),eo=gc=Qt=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cm&&e.locale!=="ko"?null:e.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!l0[t.type]:e==="textarea"}function fm(t,e,n,r){Vp(r),e=Eo(e,"onChange"),0<e.length&&(n=new _c("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ci=null,zi=null;function a0(t){Im(t,0)}function al(t){var e=or(t);if(Fp(e))return t}function u0(t,e){if(t==="change")return e}var pm=!1;if(Ot){var ea;if(Ot){var ta="oninput"in document;if(!ta){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),ta=typeof _h.oninput=="function"}ea=ta}else ea=!1;pm=ea&&(!document.documentMode||9<document.documentMode)}function vh(){Ci&&(Ci.detachEvent("onpropertychange",mm),zi=Ci=null)}function mm(t){if(t.propertyName==="value"&&al(zi)){var e=[];fm(e,zi,t,dc(t)),qp(a0,e)}}function c0(t,e,n){t==="focusin"?(vh(),Ci=e,zi=n,Ci.attachEvent("onpropertychange",mm)):t==="focusout"&&vh()}function d0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(zi)}function h0(t,e){if(t==="click")return al(e)}function f0(t,e){if(t==="input"||t==="change")return al(e)}function p0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:p0;function Wi(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ma.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=yh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _m(){for(var t=window,e=po();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=po(t.document)}return e}function wc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m0(t){var e=_m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gm(n.ownerDocument.documentElement,n)){if(r!==null&&wc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wh(n,s);var o=wh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=Ot&&"documentMode"in document&&11>=document.documentMode,ir=null,eu=null,Si=null,tu=!1;function Eh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||ir==null||ir!==po(r)||(r=ir,"selectionStart"in r&&wc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&Wi(Si,r)||(Si=r,r=Eo(eu,"onSelect"),0<r.length&&(e=new _c("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ir)))}function Us(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var sr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionend:Us("Transition","TransitionEnd")},na={},vm={};Ot&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function ul(t){if(na[t])return na[t];if(!sr[t])return t;var e=sr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vm)return na[t]=e[n];return t}var ym=ul("animationend"),wm=ul("animationiteration"),Em=ul("animationstart"),Cm=ul("transitionend"),Sm=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(t,e){Sm.set(t,e),Qn(e,[t])}for(var ra=0;ra<Ch.length;ra++){var ia=Ch[ra],_0=ia.toLowerCase(),v0=ia[0].toUpperCase()+ia.slice(1);gn(_0,"on"+v0)}gn(ym,"onAnimationEnd");gn(wm,"onAnimationIteration");gn(Em,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Cm,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Sh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_y(r,e,void 0,t),t.currentTarget=null}function Im(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}}}if(go)throw t=Ya,go=!1,Ya=null,t}function Q(t,e){var n=e[ou];n===void 0&&(n=e[ou]=new Set);var r=t+"__bubble";n.has(r)||(km(e,t,2,!1),n.add(r))}function sa(t,e,n){var r=0;e&&(r|=4),km(n,t,r,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[zs]){t[zs]=!0,Ap.forEach(function(n){n!=="selectionchange"&&(y0.has(n)||sa(n,!1,t),sa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,sa("selectionchange",!1,e))}}function km(t,e,n,r){switch(am(e)){case 1:var i=Dy;break;case 4:i=Ly;break;default:i=mc}n=i.bind(null,e,n,t),i=void 0,!Qa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oa(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Tn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}qp(function(){var u=s,d=dc(n),c=[];e:{var h=Sm.get(t);if(h!==void 0){var p=_c,_=t;switch(t){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":p=Qy;break;case"focusin":_="focus",p=Zl;break;case"focusout":_="blur",p=Zl;break;case"beforeblur":case"afterblur":p=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Jy;break;case ym:case wm:case Em:p=Wy;break;case Cm:p=e0;break;case"scroll":p=My;break;case"wheel":p=n0;break;case"copy":case"cut":case"paste":p=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=fh}var v=(e&4)!==0,P=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,g;f!==null;){g=f;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,m!==null&&(y=Mi(f,m),y!=null&&v.push(ji(f,y,g)))),P)break;f=f.return}0<v.length&&(h=new p(h,_,null,n,d),c.push({event:h,listeners:v}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ka&&(_=n.relatedTarget||n.fromElement)&&(Tn(_)||_[At]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Tn(_):null,_!==null&&(P=Yn(_),_!==P||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=dh,y="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=fh,y="onPointerLeave",m="onPointerEnter",f="pointer"),P=p==null?h:or(p),g=_==null?h:or(_),h=new v(y,f+"leave",p,n,d),h.target=P,h.relatedTarget=g,y=null,Tn(d)===u&&(v=new v(m,f+"enter",_,n,d),v.target=g,v.relatedTarget=P,y=v),P=y,p&&_)t:{for(v=p,m=_,f=0,g=v;g;g=Zn(g))f++;for(g=0,y=m;y;y=Zn(y))g++;for(;0<f-g;)v=Zn(v),f--;for(;0<g-f;)m=Zn(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Zn(v),m=Zn(m)}v=null}else v=null;p!==null&&Ih(c,h,p,v,!1),_!==null&&P!==null&&Ih(c,P,_,v,!0)}}e:{if(h=u?or(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=u0;else if(gh(h))if(pm)S=f0;else{S=d0;var T=c0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=h0);if(S&&(S=S(t,u))){fm(c,S,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ja(h,"number",h.value)}switch(T=u?or(u):window,t){case"focusin":(gh(T)||T.contentEditable==="true")&&(ir=T,eu=u,Si=null);break;case"focusout":Si=eu=ir=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Eh(c,n,d);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Eh(c,n,d)}var N;if(yc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else rr?dm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(cm&&n.locale!=="ko"&&(rr||R!=="onCompositionStart"?R==="onCompositionEnd"&&rr&&(N=um()):(Qt=d,gc="value"in Qt?Qt.value:Qt.textContent,rr=!0)),T=Eo(u,R),0<T.length&&(R=new hh(R,t,null,n,d),c.push({event:R,listeners:T}),N?R.data=N:(N=hm(n),N!==null&&(R.data=N)))),(N=i0?s0(t,n):o0(t,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Im(c,e)})}function ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mi(t,n),s!=null&&r.unshift(ji(t,s,i)),s=Mi(t,e),s!=null&&r.push(ji(t,s,i))),t=t.return}return r}function Zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ih(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Mi(n,s),a!=null&&o.unshift(ji(n,a,l))):i||(a=Mi(n,s),a!=null&&o.push(ji(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var w0=/\r\n?/g,E0=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(w0,`
`).replace(E0,"")}function Ws(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(w(425))}function Co(){}var nu=null,ru=null;function iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,S0=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(I0)}:su;function I0(t){setTimeout(function(){throw t})}function la(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $r=Math.random().toString(36).slice(2),gt="__reactFiber$"+$r,$i="__reactProps$"+$r,At="__reactContainer$"+$r,ou="__reactEvents$"+$r,k0="__reactListeners$"+$r,T0="__reactHandles$"+$r;function Tn(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[At]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nh(t);t!==null;){if(n=t[gt])return n;t=Nh(t)}return e}t=n,n=t.parentNode}return null}function hs(t){return t=t[gt]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function cl(t){return t[$i]||null}var lu=[],lr=-1;function _n(t){return{current:t}}function Y(t){0>lr||(t.current=lu[lr],lu[lr]=null,lr--)}function K(t,e){lr++,lu[lr]=t.current,t.current=e}var fn={},Te=_n(fn),Fe=_n(!1),bn=fn;function Rr(t,e){var n=t.type.contextTypes;if(!n)return fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function So(){Y(Fe),Y(Te)}function Rh(t,e,n){if(Te.current!==fn)throw Error(w(168));K(Te,e),K(Fe,n)}function Tm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,cy(t)||"Unknown",i));return ee({},n,r)}function Io(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fn,bn=Te.current,K(Te,t),K(Fe,Fe.current),!0}function Ph(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Tm(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,Y(Fe),Y(Te),K(Te,t)):Y(Fe),K(Fe,n)}var St=null,dl=!1,aa=!1;function Nm(t){St===null?St=[t]:St.push(t)}function N0(t){dl=!0,Nm(t)}function vn(){if(!aa&&St!==null){aa=!0;var t=0,e=j;try{var n=St;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,dl=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),Jp(hc,vn),i}finally{j=e,aa=!1}}return null}var ar=[],ur=0,ko=null,To=0,Ke=[],qe=0,Fn=null,It=1,kt="";function Cn(t,e){ar[ur++]=To,ar[ur++]=ko,ko=t,To=e}function Rm(t,e,n){Ke[qe++]=It,Ke[qe++]=kt,Ke[qe++]=Fn,Fn=t;var r=It;t=kt;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,It=1<<32-lt(e)+i|n<<i|r,kt=s+t}else It=1<<s|n<<i|r,kt=t}function Ec(t){t.return!==null&&(Cn(t,1),Rm(t,1,0))}function Cc(t){for(;t===ko;)ko=ar[--ur],ar[ur]=null,To=ar[--ur],ar[ur]=null;for(;t===Fn;)Fn=Ke[--qe],Ke[qe]=null,kt=Ke[--qe],Ke[qe]=null,It=Ke[--qe],Ke[qe]=null}var je=null,Be=null,X=!1,it=null;function Pm(t,e){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,je=t,Be=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,je=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fn!==null?{id:It,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,je=t,Be=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(X){var e=Be;if(e){var n=e;if(!xh(t,e)){if(au(t))throw Error(w(418));e=nn(n.nextSibling);var r=je;e&&xh(t,e)?Pm(r,n):(t.flags=t.flags&-4097|2,X=!1,je=t)}}else{if(au(t))throw Error(w(418));t.flags=t.flags&-4097|2,X=!1,je=t}}}function Oh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;je=t}function Bs(t){if(t!==je)return!1;if(!X)return Oh(t),X=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!iu(t.type,t.memoizedProps)),e&&(e=Be)){if(au(t))throw xm(),Error(w(418));for(;e;)Pm(t,e),e=nn(e.nextSibling)}if(Oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=je?nn(t.stateNode.nextSibling):null;return!0}function xm(){for(var t=Be;t;)t=nn(t.nextSibling)}function Pr(){Be=je=null,X=!1}function Sc(t){it===null?it=[t]:it.push(t)}var R0=Ft.ReactCurrentBatchConfig;function nt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var No=_n(null),Ro=null,cr=null,Ic=null;function kc(){Ic=cr=Ro=null}function Tc(t){var e=No.current;Y(No),t._currentValue=e}function cu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yr(t,e){Ro=t,Ic=cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Le=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:e,next:null},cr===null){if(Ro===null)throw Error(w(308));cr=t,Ro.dependencies={lanes:0,firstContext:t}}else cr=cr.next=t;return e}var Nn=null;function Nc(t){Nn===null?Nn=[t]:Nn.push(t)}function Om(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jt=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(W&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,Nc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function no(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}function Ah(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Po(t,e,n,r){var i=t.updateQueue;jt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(p,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(p,c,h):_,h==null)break e;c=ee({},c,h);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,a=c):d=d.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=c}}function Dh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Dm=new Op.Component().refs;function du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=on(t),s=Pt(r,i);s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(at(e,t,i,r),no(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=on(t),s=Pt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(at(e,t,i,r),no(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=on(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,r),e!==null&&(at(e,t,r,n),no(e,t,r))}};function Lh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,s):!0}function Lm(t,e,n){var r=!1,i=fn,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Ue(e)?bn:Te.current,r=e.contextTypes,s=(r=r!=null)?Rr(t,i):fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function hu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Dm,Rc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Ue(e)?bn:Te.current,i.context=Rr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(du(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hl.enqueueReplaceState(i,i.state,null),Po(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Dm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function js(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bh(t){var e=t._init;return e(t._payload)}function Mm(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=ln(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,y){return f===null||f.tag!==6?(f=ma(g,m.mode,y),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,y){var S=g.type;return S===nr?d(m,f,g.props.children,y,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&bh(S)===f.type)?(y=i(f,g.props),y.ref=ii(m,f,g),y.return=m,y):(y=ao(g.type,g.key,g.props,null,m.mode,y),y.ref=ii(m,f,g),y.return=m,y)}function u(m,f,g,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ga(g,m.mode,y),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,y,S){return f===null||f.tag!==7?(f=An(g,m.mode,y,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ma(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Os:return g=ao(f.type,f.key,f.props,null,m.mode,g),g.ref=ii(m,null,f),g.return=m,g;case tr:return f=ga(f,m.mode,g),f.return=m,f;case Bt:var y=f._init;return c(m,y(f._payload),g)}if(pi(f)||Zr(f))return f=An(f,m.mode,g,null),f.return=m,f;js(m,f)}return null}function h(m,f,g,y){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(m,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:return g.key===S?a(m,f,g,y):null;case tr:return g.key===S?u(m,f,g,y):null;case Bt:return S=g._init,h(m,f,S(g._payload),y)}if(pi(g)||Zr(g))return S!==null?null:d(m,f,g,y,null);js(m,g)}return null}function p(m,f,g,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(g)||null,l(f,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Os:return m=m.get(y.key===null?g:y.key)||null,a(f,m,y,S);case tr:return m=m.get(y.key===null?g:y.key)||null,u(f,m,y,S);case Bt:var T=y._init;return p(m,f,g,T(y._payload),S)}if(pi(y)||Zr(y))return m=m.get(g)||null,d(f,m,y,S,null);js(f,y)}return null}function _(m,f,g,y){for(var S=null,T=null,N=f,R=f=0,q=null;N!==null&&R<g.length;R++){N.index>R?(q=N,N=null):q=N.sibling;var F=h(m,N,g[R],y);if(F===null){N===null&&(N=q);break}t&&N&&F.alternate===null&&e(m,N),f=s(F,f,R),T===null?S=F:T.sibling=F,T=F,N=q}if(R===g.length)return n(m,N),X&&Cn(m,R),S;if(N===null){for(;R<g.length;R++)N=c(m,g[R],y),N!==null&&(f=s(N,f,R),T===null?S=N:T.sibling=N,T=N);return X&&Cn(m,R),S}for(N=r(m,N);R<g.length;R++)q=p(N,m,R,g[R],y),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?R:q.key),f=s(q,f,R),T===null?S=q:T.sibling=q,T=q);return t&&N.forEach(function(et){return e(m,et)}),X&&Cn(m,R),S}function v(m,f,g,y){var S=Zr(g);if(typeof S!="function")throw Error(w(150));if(g=S.call(g),g==null)throw Error(w(151));for(var T=S=null,N=f,R=f=0,q=null,F=g.next();N!==null&&!F.done;R++,F=g.next()){N.index>R?(q=N,N=null):q=N.sibling;var et=h(m,N,F.value,y);if(et===null){N===null&&(N=q);break}t&&N&&et.alternate===null&&e(m,N),f=s(et,f,R),T===null?S=et:T.sibling=et,T=et,N=q}if(F.done)return n(m,N),X&&Cn(m,R),S;if(N===null){for(;!F.done;R++,F=g.next())F=c(m,F.value,y),F!==null&&(f=s(F,f,R),T===null?S=F:T.sibling=F,T=F);return X&&Cn(m,R),S}for(N=r(m,N);!F.done;R++,F=g.next())F=p(N,m,R,F.value,y),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?R:F.key),f=s(F,f,R),T===null?S=F:T.sibling=F,T=F);return t&&N.forEach(function(Xr){return e(m,Xr)}),X&&Cn(m,R),S}function P(m,f,g,y){if(typeof g=="object"&&g!==null&&g.type===nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Os:e:{for(var S=g.key,T=f;T!==null;){if(T.key===S){if(S=g.type,S===nr){if(T.tag===7){n(m,T.sibling),f=i(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bt&&bh(S)===T.type){n(m,T.sibling),f=i(T,g.props),f.ref=ii(m,T,g),f.return=m,m=f;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===nr?(f=An(g.props.children,m.mode,y,g.key),f.return=m,m=f):(y=ao(g.type,g.key,g.props,null,m.mode,y),y.ref=ii(m,f,g),y.return=m,m=y)}return o(m);case tr:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=ga(g,m.mode,y),f.return=m,m=f}return o(m);case Bt:return T=g._init,P(m,f,T(g._payload),y)}if(pi(g))return _(m,f,g,y);if(Zr(g))return v(m,f,g,y);js(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=ma(g,m.mode,y),f.return=m,m=f),o(m)):n(m,f)}return P}var xr=Mm(!0),bm=Mm(!1),fs={},vt=_n(fs),Vi=_n(fs),Hi=_n(fs);function Rn(t){if(t===fs)throw Error(w(174));return t}function Pc(t,e){switch(K(Hi,e),K(Vi,t),K(vt,fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Va(e,t)}Y(vt),K(vt,e)}function Or(){Y(vt),Y(Vi),Y(Hi)}function Fm(t){Rn(Hi.current);var e=Rn(vt.current),n=Va(e,t.type);e!==n&&(K(Vi,t),K(vt,n))}function xc(t){Vi.current===t&&(Y(vt),Y(Vi))}var J=_n(0);function xo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ua=[];function Oc(){for(var t=0;t<ua.length;t++)ua[t]._workInProgressVersionPrimary=null;ua.length=0}var ro=Ft.ReactCurrentDispatcher,ca=Ft.ReactCurrentBatchConfig,Un=0,Z=null,le=null,de=null,Oo=!1,Ii=!1,Gi=0,P0=0;function Se(){throw Error(w(321))}function Ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function Dc(t,e,n,r,i,s){if(Un=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ro.current=t===null||t.memoizedState===null?D0:L0,t=n(r,i),Ii){s=0;do{if(Ii=!1,Gi=0,25<=s)throw Error(w(301));s+=1,de=le=null,e.updateQueue=null,ro.current=M0,t=n(r,i)}while(Ii)}if(ro.current=Ao,e=le!==null&&le.next!==null,Un=0,de=le=Z=null,Oo=!1,e)throw Error(w(300));return t}function Lc(){var t=Gi!==0;return Gi=0,t}function pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=t:de=de.next=t,de}function Ze(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=de===null?Z.memoizedState:de.next;if(e!==null)de=e,le=t;else{if(t===null)throw Error(w(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?Z.memoizedState=de=t:de=de.next=t}return de}function Ki(t,e){return typeof e=="function"?e(t):e}function da(t){var e=Ze(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Un&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Z.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ha(t){var e=Ze(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Um(){}function zm(t,e){var n=Z,r=Ze(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,Mc(jm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,qi(9,Bm.bind(null,n,r,i,e),void 0,null),me===null)throw Error(w(349));(Un&30)!==0||Wm(n,e,i)}return i}function Wm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,r){e.value=n,e.getSnapshot=r,$m(e)&&Vm(t)}function jm(t,e,n){return n(function(){$m(e)&&Vm(t)})}function $m(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function Vm(t){var e=Dt(t,1);e!==null&&at(e,t,1,-1)}function Fh(t){var e=pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},e.queue=t,t=t.dispatch=A0.bind(null,Z,t),[e.memoizedState,t]}function qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hm(){return Ze().memoizedState}function io(t,e,n,r){var i=pt();Z.flags|=t,i.memoizedState=qi(1|e,n,void 0,r===void 0?null:r)}function fl(t,e,n,r){var i=Ze();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=qi(e,n,s,r);return}}Z.flags|=t,i.memoizedState=qi(1|e,n,s,r)}function Uh(t,e){return io(8390656,8,t,e)}function Mc(t,e){return fl(2048,8,t,e)}function Gm(t,e){return fl(4,2,t,e)}function Km(t,e){return fl(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qm(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,qm.bind(null,e,t),n)}function bc(){}function Ym(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xm(t,e){var n=Ze();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jm(t,e,n){return(Un&21)===0?(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n):(ct(n,e)||(n=tm(),Z.lanes|=n,zn|=n,t.baseState=!0),e)}function x0(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=ca.transition;ca.transition={};try{t(!1),e()}finally{j=n,ca.transition=r}}function Zm(){return Ze().memoizedState}function O0(t,e,n){var r=on(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eg(t))tg(e,n);else if(n=Om(t,e,n,r),n!==null){var i=Pe();at(n,t,r,i),ng(n,e,r)}}function A0(t,e,n){var r=on(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eg(t))tg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Nc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Om(t,e,i,r),n!==null&&(i=Pe(),at(n,t,r,i),ng(n,e,r))}}function eg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function tg(t,e){Ii=Oo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ng(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fc(t,n)}}var Ao={readContext:Je,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},D0={readContext:Je,useCallback:function(t,e){return pt().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Uh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,io(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return io(4194308,4,t,e)},useInsertionEffect:function(t,e){return io(4,2,t,e)},useMemo:function(t,e){var n=pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=O0.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=pt();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:bc,useDeferredValue:function(t){return pt().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=x0.bind(null,t[1]),pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=pt();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),me===null)throw Error(w(349));(Un&30)!==0||Wm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uh(jm.bind(null,r,s,t),[t]),r.flags|=2048,qi(9,Bm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pt(),e=me.identifierPrefix;if(X){var n=kt,r=It;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},L0={readContext:Je,useCallback:Ym,useContext:Je,useEffect:Mc,useImperativeHandle:Qm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Xm,useReducer:da,useRef:Hm,useState:function(){return da(Ki)},useDebugValue:bc,useDeferredValue:function(t){var e=Ze();return Jm(e,le.memoizedState,t)},useTransition:function(){var t=da(Ki)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Um,useSyncExternalStore:zm,useId:Zm,unstable_isNewReconciler:!1},M0={readContext:Je,useCallback:Ym,useContext:Je,useEffect:Mc,useImperativeHandle:Qm,useInsertionEffect:Gm,useLayoutEffect:Km,useMemo:Xm,useReducer:ha,useRef:Hm,useState:function(){return ha(Ki)},useDebugValue:bc,useDeferredValue:function(t){var e=Ze();return le===null?e.memoizedState=t:Jm(e,le.memoizedState,t)},useTransition:function(){var t=ha(Ki)[0],e=Ze().memoizedState;return[t,e]},useMutableSource:Um,useSyncExternalStore:zm,useId:Zm,unstable_isNewReconciler:!1};function Ar(t,e){try{var n="",r=e;do n+=uy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fa(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function rg(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lo||(Lo=!0,Su=r),fu(t,e)},n}function ig(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fu(t,e),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new b0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y0.bind(null,t,e,n),e.then(t,t))}function Wh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,rn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var F0=Ft.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?bm(e,null,n,r):xr(e,t.child,n,r)}function jh(t,e,n,r,i){n=n.render;var s=e.ref;return yr(e,i),r=Dc(t,e,n,r,s,i),n=Lc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(X&&n&&Ec(e),e.flags|=1,Re(t,e,r,i),e.child)}function $h(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sg(t,e,s,r,i)):(t=ao(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function sg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Le=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return pu(t,e,n,r,i)}function og(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(hr,We),We|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(hr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(hr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(hr,We),We|=r;return Re(t,e,i,n),e.child}function lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pu(t,e,n,r,i){var s=Ue(n)?bn:Te.current;return s=Rr(e,s),yr(e,i),n=Dc(t,e,n,r,s,i),r=Lc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(X&&r&&Ec(e),e.flags|=1,Re(t,e,n,i),e.child)}function Vh(t,e,n,r,i){if(Ue(n)){var s=!0;Io(e)}else s=!1;if(yr(e,i),e.stateNode===null)so(t,e),Lm(e,n,r),hu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Ue(n)?bn:Te.current,u=Rr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Mh(e,o,r,u),jt=!1;var h=e.memoizedState;o.state=h,Po(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||jt?(typeof d=="function"&&(du(e,n,d,r),a=e.memoizedState),(l=jt||Lh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Am(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=Ue(n)?bn:Te.current,a=Rr(e,a));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Mh(e,o,r,a),jt=!1,h=e.memoizedState,o.state=h,Po(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Fe.current||jt?(typeof p=="function"&&(du(e,n,p,r),_=e.memoizedState),(u=jt||Lh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return mu(t,e,n,r,s,i)}function mu(t,e,n,r,i,s){lg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ph(e,n,!1),Lt(t,e,s);r=e.stateNode,F0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xr(e,t.child,null,s),e.child=xr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&Ph(e,n,!0),e.child}function ag(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),Pc(t,e.containerInfo)}function Hh(t,e,n,r,i){return Pr(),Sc(i),e.flags|=256,Re(t,e,n,r),e.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function ug(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(J,i&1),t===null)return uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),t=An(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_u(n),e.memoizedState=gu,t):Fc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return U0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=An(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_u(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gu,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fc(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $s(t,e,n,r){return r!==null&&Sc(r),xr(e,t.child,null,n),t=Fc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fa(Error(w(422))),$s(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=gl({mode:"visible",children:r.children},i,0,null),s=An(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&xr(e,t.child,null,o),e.child.memoizedState=_u(o),e.memoizedState=gu,s);if((e.mode&1)===0)return $s(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=fa(s,r,void 0),$s(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),at(r,t,i,-1))}return $c(),r=fa(Error(w(421))),$s(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=X0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=nn(i.nextSibling),je=e,X=!0,it=null,t!==null&&(Ke[qe++]=It,Ke[qe++]=kt,Ke[qe++]=Fn,It=t.id,kt=t.overflow,Fn=e),e=Fc(e,r.children),e.flags|=4096,e)}function Gh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cu(t.return,e,n)}function pa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=J.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,n,e);else if(t.tag===19)Gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(J,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pa(e,!0,n,null,s);break;case"together":pa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function so(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z0(t,e,n){switch(e.tag){case 3:ag(e),Pr();break;case 5:Fm(e);break;case 1:Ue(e.type)&&Io(e);break;case 4:Pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(No,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?ug(t,e,n):(K(J,J.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return cg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,og(t,e,n)}return Lt(t,e,n)}var dg,vu,hg,fg;dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vu=function(){};hg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rn(vt.current);var s=null;switch(n){case"input":i=Wa(t,i),r=Wa(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=$a(t,i),r=$a(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Co)}Ha(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Di.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Di.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fg=function(t,e,n,r){n!==r&&(e.flags|=4)};function si(t,e){if(!X)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function W0(t,e,n){var r=e.pendingProps;switch(Cc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Ue(e.type)&&So(),Ie(e),null;case 3:return r=e.stateNode,Or(),Y(Fe),Y(Te),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,it!==null&&(Tu(it),it=null))),vu(t,e),Ie(e),null;case 5:xc(e);var i=Rn(Hi.current);if(n=e.type,t!==null&&e.stateNode!=null)hg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ie(e),null}if(t=Rn(vt.current),Bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[$i]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<gi.length;i++)Q(gi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":th(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":rh(r,s),Q("invalid",r)}Ha(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ws(r.textContent,l,t),i=["children",""+l]):Di.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":As(r),nh(r,s,!0);break;case"textarea":As(r),ih(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Co)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[$i]=r,dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ga(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<gi.length;i++)Q(gi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":th(t,r),i=Wa(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Q("invalid",t);break;case"textarea":rh(t,r),i=$a(t,r),Q("invalid",t);break;default:i=r}Ha(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?$p(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Bp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Li(t,a):typeof a=="number"&&Li(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Di.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&lc(t,s,a,o))}switch(n){case"input":As(t),nh(t,r,!1);break;case"textarea":As(t),ih(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)fg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Rn(Hi.current),Rn(vt.current),Bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=je,t!==null))switch(t.tag){case 3:Ws(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ws(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return Ie(e),null;case 13:if(Y(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&Be!==null&&(e.mode&1)!==0&&(e.flags&128)===0)xm(),Pr(),e.flags|=98560,s=!1;else if(s=Bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[gt]=e}else Pr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else it!==null&&(Tu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(J.current&1)!==0?ae===0&&(ae=3):$c())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Or(),vu(t,e),t===null&&Bi(e.stateNode.containerInfo),Ie(e),null;case 10:return Tc(e.type._context),Ie(e),null;case 17:return Ue(e.type)&&So(),Ie(e),null;case 19:if(Y(J),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)si(s,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=xo(t),o!==null){for(e.flags|=128,si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Dr&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304)}else{if(!r)if(t=xo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return Ie(e),null}else 2*se()-s.renderingStartTime>Dr&&n!==1073741824&&(e.flags|=128,r=!0,si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=J.current,K(J,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return jc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(We&1073741824)!==0&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function B0(t,e){switch(Cc(e),e.tag){case 1:return Ue(e.type)&&So(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Or(),Y(Fe),Y(Te),Oc(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return xc(e),null;case 13:if(Y(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Pr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(J),null;case 4:return Or(),null;case 10:return Tc(e.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Vs=!1,ke=!1,j0=typeof WeakSet=="function"?WeakSet:Set,I=null;function dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function yu(t,e,n){try{n()}catch(r){te(t,e,r)}}var Kh=!1;function $0(t,e){if(nu=yo,t=_m(),wc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:t,selectionRange:n},yo=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,P=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),P);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){te(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=Kh,Kh=!1,_}function ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yu(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pg(t){var e=t.alternate;e!==null&&(t.alternate=null,pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[$i],delete e[ou],delete e[k0],delete e[T0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mg(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Co));else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}var ge=null,rt=!1;function zt(t,e,n){for(n=n.child;n!==null;)gg(t,e,n),n=n.sibling}function gg(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:ke||dr(n,e);case 6:var r=ge,i=rt;ge=null,zt(t,e,n),ge=r,rt=i,ge!==null&&(rt?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(rt?(t=ge,n=n.stateNode,t.nodeType===8?la(t.parentNode,n):t.nodeType===1&&la(t,n),Ui(t)):la(ge,n.stateNode));break;case 4:r=ge,i=rt,ge=n.stateNode.containerInfo,rt=!0,zt(t,e,n),ge=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&yu(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!ke&&(dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,zt(t,e,n),ke=r):zt(t,e,n);break;default:zt(t,e,n)}}function Qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j0),e.forEach(function(r){var i=J0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,rt=!1;break e;case 3:ge=l.stateNode.containerInfo,rt=!0;break e;case 4:ge=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ge===null)throw Error(w(160));gg(s,o,i),ge=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_g(e,t),e=e.sibling}function _g(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),ft(t),r&4){try{ki(3,t,t.return),pl(3,t)}catch(v){te(t,t.return,v)}try{ki(5,t,t.return)}catch(v){te(t,t.return,v)}}break;case 1:tt(e,t),ft(t),r&512&&n!==null&&dr(n,n.return);break;case 5:if(tt(e,t),ft(t),r&512&&n!==null&&dr(n,n.return),t.flags&32){var i=t.stateNode;try{Li(i,"")}catch(v){te(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Up(i,s),Ga(l,o);var u=Ga(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?$p(i,c):d==="dangerouslySetInnerHTML"?Bp(i,c):d==="children"?Li(i,c):lc(i,d,c,u)}switch(l){case"input":Ba(i,s);break;case"textarea":zp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?mr(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[$i]=s}catch(v){te(t,t.return,v)}}break;case 6:if(tt(e,t),ft(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){te(t,t.return,v)}}break;case 3:if(tt(e,t),ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(e.containerInfo)}catch(v){te(t,t.return,v)}break;case 4:tt(e,t),ft(t);break;case 13:tt(e,t),ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=se())),r&4&&Qh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||d,tt(e,t),ke=u):tt(e,t),ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&(t.mode&1)!==0)for(I=t,d=t.child;d!==null;){for(c=I=d;I!==null;){switch(h=I,p=h.child,h.tag){case 0:case 11:case 14:case 15:ki(4,h,h.return);break;case 1:dr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:dr(h,h.return);break;case 22:if(h.memoizedState!==null){Xh(c);continue}}p!==null?(p.return=h,I=p):Xh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=jp("display",o))}catch(v){te(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){te(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),ft(t),r&4&&Qh(t);break;case 21:break;default:tt(e,t),ft(t)}}function ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var s=qh(t);Cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qh(t);Eu(t,l,o);break;default:throw Error(w(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V0(t,e,n){I=t,vg(t)}function vg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ke;l=Vs;var u=ke;if(Vs=o,(ke=a)&&!u)for(I=i;I!==null;)o=I,a=o.child,o.tag===22&&o.memoizedState!==null?Jh(i):a!==null?(a.return=o,I=a):Jh(i);for(;s!==null;)I=s,vg(s),s=s.sibling;I=i,Vs=l,ke=u}Yh(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Yh(t)}}function Yh(t){for(;I!==null;){var e=I;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:ke||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ui(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ke||e.flags&512&&wu(e)}catch(h){te(e,e.return,h)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Xh(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Jh(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{wu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{wu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){I=null;break}var l=e.sibling;if(l!==null){l.return=e.return,I=l;break}I=e.return}}var H0=Math.ceil,Do=Ft.ReactCurrentDispatcher,Uc=Ft.ReactCurrentOwner,Xe=Ft.ReactCurrentBatchConfig,W=0,me=null,oe=null,ye=0,We=0,hr=_n(0),ae=0,Qi=null,zn=0,ml=0,zc=0,Ti=null,De=null,Wc=0,Dr=1/0,Ct=null,Lo=!1,Su=null,sn=null,Hs=!1,Yt=null,Mo=0,Ni=0,Iu=null,oo=-1,lo=0;function Pe(){return(W&6)!==0?se():oo!==-1?oo:oo=se()}function on(t){return(t.mode&1)===0?1:(W&2)!==0&&ye!==0?ye&-ye:R0.transition!==null?(lo===0&&(lo=tm()),lo):(t=j,t!==0||(t=window.event,t=t===void 0?16:am(t.type)),t)}function at(t,e,n,r){if(50<Ni)throw Ni=0,Iu=null,Error(w(185));cs(t,n,r),((W&2)===0||t!==me)&&(t===me&&((W&2)===0&&(ml|=n),ae===4&&Vt(t,ye)),ze(t,r),n===1&&W===0&&(e.mode&1)===0&&(Dr=se()+500,dl&&vn()))}function ze(t,e){var n=t.callbackNode;Ry(t,e);var r=vo(t,t===me?ye:0);if(r===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?N0(Zh.bind(null,t)):Nm(Zh.bind(null,t)),S0(function(){(W&6)===0&&vn()}),n=null;else{switch(nm(r)){case 1:n=hc;break;case 4:n=Zp;break;case 16:n=_o;break;case 536870912:n=em;break;default:n=_o}n=Tg(n,yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yg(t,e){if(oo=-1,lo=0,(W&6)!==0)throw Error(w(327));var n=t.callbackNode;if(wr()&&t.callbackNode!==n)return null;var r=vo(t,t===me?ye:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=bo(t,r);else{e=r;var i=W;W|=2;var s=Eg();(me!==t||ye!==e)&&(Ct=null,Dr=se()+500,On(t,e));do try{q0();break}catch(l){wg(t,l)}while(1);kc(),Do.current=s,W=i,oe!==null?e=0:(me=null,ye=0,e=ae)}if(e!==0){if(e===2&&(i=Xa(t),i!==0&&(r=i,e=ku(t,i))),e===1)throw n=Qi,On(t,0),Vt(t,r),ze(t,se()),n;if(e===6)Vt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!G0(i)&&(e=bo(t,r),e===2&&(s=Xa(t),s!==0&&(r=s,e=ku(t,s))),e===1))throw n=Qi,On(t,0),Vt(t,r),ze(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Sn(t,De,Ct);break;case 3:if(Vt(t,r),(r&130023424)===r&&(e=Wc+500-se(),10<e)){if(vo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=su(Sn.bind(null,t,De,Ct),e);break}Sn(t,De,Ct);break;case 4:if(Vt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*H0(r/1960))-r,10<r){t.timeoutHandle=su(Sn.bind(null,t,De,Ct),r);break}Sn(t,De,Ct);break;case 5:Sn(t,De,Ct);break;default:throw Error(w(329))}}}return ze(t,se()),t.callbackNode===n?yg.bind(null,t):null}function ku(t,e){var n=Ti;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=bo(t,e),t!==2&&(e=De,De=n,e!==null&&Tu(e)),t}function Tu(t){De===null?De=t:De.push.apply(De,t)}function G0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vt(t,e){for(e&=~zc,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Zh(t){if((W&6)!==0)throw Error(w(327));wr();var e=vo(t,0);if((e&1)===0)return ze(t,se()),null;var n=bo(t,e);if(t.tag!==0&&n===2){var r=Xa(t);r!==0&&(e=r,n=ku(t,r))}if(n===1)throw n=Qi,On(t,0),Vt(t,e),ze(t,se()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sn(t,De,Ct),ze(t,se()),null}function Bc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Dr=se()+500,dl&&vn())}}function Wn(t){Yt!==null&&Yt.tag===0&&(W&6)===0&&wr();var e=W;W|=1;var n=Xe.transition,r=j;try{if(Xe.transition=null,j=1,t)return t()}finally{j=r,Xe.transition=n,W=e,(W&6)===0&&vn()}}function jc(){We=hr.current,Y(hr)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C0(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Or(),Y(Fe),Y(Te),Oc();break;case 5:xc(r);break;case 4:Or();break;case 13:Y(J);break;case 19:Y(J);break;case 10:Tc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(me=t,oe=t=ln(t.current,null),ye=We=e,ae=0,Qi=null,zc=ml=zn=0,De=Ti=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function wg(t,e){do{var n=oe;try{if(kc(),ro.current=Ao,Oo){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oo=!1}if(Un=0,de=le=Z=null,Ii=!1,Gi=0,Uc.current=null,n===null||n.return===null){ae=1,Qi=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ye,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Wh(o);if(p!==null){p.flags&=-257,Bh(p,o,l,s,e),p.mode&1&&zh(s,u,e),e=p,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if((e&1)===0){zh(s,u,e),$c();break e}a=Error(w(426))}}else if(X&&l.mode&1){var P=Wh(o);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),Bh(P,o,l,s,e),Sc(Ar(a,l));break e}}s=a=Ar(a,l),ae!==4&&(ae=2),Ti===null?Ti=[s]:Ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=rg(s,a,e);Ah(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sn===null||!sn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ig(s,l,e);Ah(s,y);break e}}s=s.return}while(s!==null)}Sg(n)}catch(S){e=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Eg(){var t=Do.current;return Do.current=Ao,t===null?Ao:t}function $c(){(ae===0||ae===3||ae===2)&&(ae=4),me===null||(zn&268435455)===0&&(ml&268435455)===0||Vt(me,ye)}function bo(t,e){var n=W;W|=2;var r=Eg();(me!==t||ye!==e)&&(Ct=null,On(t,e));do try{K0();break}catch(i){wg(t,i)}while(1);if(kc(),W=n,Do.current=r,oe!==null)throw Error(w(261));return me=null,ye=0,ae}function K0(){for(;oe!==null;)Cg(oe)}function q0(){for(;oe!==null&&!yy();)Cg(oe)}function Cg(t){var e=kg(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?Sg(t):oe=e,Uc.current=null}function Sg(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=W0(n,e,We),n!==null){oe=n;return}}else{if(n=B0(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,oe=null;return}}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ae===0&&(ae=5)}function Sn(t,e,n){var r=j,i=Xe.transition;try{Xe.transition=null,j=1,Q0(t,e,n,r)}finally{Xe.transition=i,j=r}return null}function Q0(t,e,n,r){do wr();while(Yt!==null);if((W&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Py(t,s),t===me&&(oe=me=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Hs||(Hs=!0,Tg(_o,function(){return wr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Xe.transition,Xe.transition=null;var o=j;j=1;var l=W;W|=4,Uc.current=null,$0(t,n),_g(n,t),m0(ru),yo=!!nu,ru=nu=null,t.current=n,V0(n),wy(),W=l,j=o,Xe.transition=s}else t.current=n;if(Hs&&(Hs=!1,Yt=t,Mo=i),s=t.pendingLanes,s===0&&(sn=null),Sy(n.stateNode),ze(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lo)throw Lo=!1,t=Su,Su=null,t;return(Mo&1)!==0&&t.tag!==0&&wr(),s=t.pendingLanes,(s&1)!==0?t===Iu?Ni++:(Ni=0,Iu=t):Ni=0,vn(),null}function wr(){if(Yt!==null){var t=nm(Mo),e=Xe.transition,n=j;try{if(Xe.transition=null,j=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,Mo=0,(W&6)!==0)throw Error(w(331));var i=W;for(W|=4,I=t.current;I!==null;){var s=I,o=s.child;if((I.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:ki(8,d,s)}var c=d.child;if(c!==null)c.return=d,I=c;else for(;I!==null;){d=I;var h=d.sibling,p=d.return;if(pg(d),d===u){I=null;break}if(h!==null){h.return=p,I=h;break}I=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var P=v.sibling;v.sibling=null,v=P}while(v!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ki(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,I=m;break e}I=s.return}}var f=t.current;for(I=f;I!==null;){o=I;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,I=g;else e:for(o=f;I!==null;){if(l=I,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(S){te(l,l.return,S)}if(l===o){I=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,I=y;break e}I=l.return}}if(W=i,vn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{j=n,Xe.transition=e}}return!1}function ef(t,e,n){e=Ar(n,e),e=rg(t,e,1),t=rn(t,e,1),e=Pe(),t!==null&&(cs(t,1,e),ze(t,e))}function te(t,e,n){if(t.tag===3)ef(t,t,n);else for(;e!==null;){if(e.tag===3){ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=Ar(n,t),t=ig(e,t,1),e=rn(e,t,1),t=Pe(),e!==null&&(cs(e,1,t),ze(e,t));break}}e=e.return}}function Y0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(ye&n)===n&&(ae===4||ae===3&&(ye&130023424)===ye&&500>se()-Wc?On(t,0):zc|=n),ze(t,e)}function Ig(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ms,Ms<<=1,(Ms&130023424)===0&&(Ms=4194304)));var n=Pe();t=Dt(t,e),t!==null&&(cs(t,e,n),ze(t,n))}function X0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ig(t,n)}function J0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Ig(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Le=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Le=!1,z0(t,e,n);Le=(t.flags&131072)!==0}else Le=!1,X&&(e.flags&1048576)!==0&&Rm(e,To,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;so(t,e),t=e.pendingProps;var i=Rr(e,Te.current);yr(e,n),i=Dc(null,e,r,t,i,n);var s=Lc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,Io(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rc(e),i.updater=hl,e.stateNode=i,i._reactInternals=e,hu(e,r,t,n),e=mu(null,e,r,!0,s,n)):(e.tag=0,X&&s&&Ec(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(so(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ew(r),t=nt(r,t),i){case 0:e=pu(null,e,r,t,n);break e;case 1:e=Vh(null,e,r,t,n);break e;case 11:e=jh(null,e,r,t,n);break e;case 14:e=$h(null,e,r,nt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),pu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Vh(t,e,r,i,n);case 3:e:{if(ag(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Am(t,e),Po(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ar(Error(w(423)),e),e=Hh(t,e,r,n,i);break e}else if(r!==i){i=Ar(Error(w(424)),e),e=Hh(t,e,r,n,i);break e}else for(Be=nn(e.stateNode.containerInfo.firstChild),je=e,X=!0,it=null,n=bm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pr(),r===i){e=Lt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return Fm(e),t===null&&uu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,iu(r,i)?o=null:s!==null&&iu(r,s)&&(e.flags|=32),lg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&uu(e),null;case 13:return ug(t,e,n);case 4:return Pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),jh(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(No,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!Fe.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yr(e,n),i=Je(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),$h(t,e,r,i,n);case 15:return sg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),so(t,e),e.tag=1,Ue(r)?(t=!0,Io(e)):t=!1,yr(e,n),Lm(e,r,i),hu(e,r,i,n),mu(null,e,r,!0,t,n);case 19:return cg(t,e,n);case 22:return og(t,e,n)}throw Error(w(156,e.tag))};function Tg(t,e){return Jp(t,e)}function Z0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,n,r){return new Z0(t,e,n,r)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ew(t){if(typeof t=="function")return Vc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uc)return 11;if(t===cc)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ao(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case nr:return An(n.children,i,s,e);case ac:o=8,i|=8;break;case ba:return t=Qe(12,n,e,i|2),t.elementType=ba,t.lanes=s,t;case Fa:return t=Qe(13,n,e,i),t.elementType=Fa,t.lanes=s,t;case Ua:return t=Qe(19,n,e,i),t.elementType=Ua,t.lanes=s,t;case Mp:return gl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dp:o=10;break e;case Lp:o=9;break e;case uc:o=11;break e;case cc:o=14;break e;case Bt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function An(t,e,n,r){return t=Qe(7,t,r,e),t.lanes=n,t}function gl(t,e,n,r){return t=Qe(22,t,r,e),t.elementType=Mp,t.lanes=n,t.stateNode={isHidden:!1},t}function ma(t,e,n){return t=Qe(6,t,null,e),t.lanes=n,t}function ga(t,e,n){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hc(t,e,n,r,i,s,o,l,a){return t=new tw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(s),t}function nw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ng(t){if(!t)return fn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Tm(t,n,e)}return e}function Rg(t,e,n,r,i,s,o,l,a){return t=Hc(n,r,!0,t,i,s,o,l,a),t.context=Ng(null),n=t.current,r=Pe(),i=on(n),s=Pt(r,i),s.callback=e!=null?e:null,rn(n,s,i),t.current.lanes=i,cs(t,i,r),ze(t,r),t}function _l(t,e,n,r){var i=e.current,s=Pe(),o=on(i);return n=Ng(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rn(i,e,o),t!==null&&(at(t,i,o,s),no(t,i,o)),o}function Fo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gc(t,e){tf(t,e),(t=t.alternate)&&tf(t,e)}function rw(){return null}var Pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kc(t){this._internalRoot=t}vl.prototype.render=Kc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));_l(t,e,null,null)};vl.prototype.unmount=Kc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){_l(null,t,null,null)}),e[At]=null}};function vl(t){this._internalRoot=t}vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&lm(t)}};function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function iw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fo(o);s.call(u)}}var o=Rg(e,r,t,0,null,!1,!1,"",nf);return t._reactRootContainer=o,t[At]=o.current,Bi(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Fo(a);l.call(u)}}var a=Hc(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=a,t[At]=a.current,Bi(t.nodeType===8?t.parentNode:t),Wn(function(){_l(e,a,n,r)}),a}function wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Fo(o);l.call(a)}}_l(e,o,t,i)}else o=iw(n,e,t,i,r);return Fo(o)}rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mi(e.pendingLanes);n!==0&&(fc(e,n|1),ze(e,se()),(W&6)===0&&(Dr=se()+500,vn()))}break;case 13:Wn(function(){var r=Dt(t,1);if(r!==null){var i=Pe();at(r,t,1,i)}}),Gc(t,1)}};pc=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=Pe();at(e,t,134217728,n)}Gc(t,134217728)}};im=function(t){if(t.tag===13){var e=on(t),n=Dt(t,e);if(n!==null){var r=Pe();at(n,t,e,r)}Gc(t,e)}};sm=function(){return j};om=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};qa=function(t,e,n){switch(e){case"input":if(Ba(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(w(90));Fp(r),Ba(r,i)}}}break;case"textarea":zp(t,n);break;case"select":e=n.value,e!=null&&mr(t,!!n.multiple,e,!1)}};Gp=Bc;Kp=Wn;var sw={usingClientEntryPoint:!1,Events:[hs,or,cl,Vp,Hp,Bc]},oi={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ow={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yp(t),t===null?null:t.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||rw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gs.isDisabled&&Gs.supportsFiber)try{ol=Gs.inject(ow),_t=Gs}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw;Ve.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(e))throw Error(w(200));return nw(t,e,null,n)};Ve.createRoot=function(t,e){if(!qc(t))throw Error(w(299));var n=!1,r="",i=Pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hc(t,1,!1,null,null,n,!1,r,i),t[At]=e.current,Bi(t.nodeType===8?t.parentNode:t),new Kc(e)};Ve.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Yp(e),t=t===null?null:t.stateNode,t};Ve.flushSync=function(t){return Wn(t)};Ve.hydrate=function(t,e,n){if(!yl(e))throw Error(w(200));return wl(null,t,e,!0,n)};Ve.hydrateRoot=function(t,e,n){if(!qc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rg(e,null,t,1,n!=null?n:null,i,!1,s,o),t[At]=e.current,Bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vl(e)};Ve.render=function(t,e,n){if(!yl(e))throw Error(w(200));return wl(null,t,e,!1,n)};Ve.unmountComponentAtNode=function(t){if(!yl(t))throw Error(w(40));return t._reactRootContainer?(Wn(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1};Ve.unstable_batchedUpdates=Bc;Ve.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yl(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return wl(t,e,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ve})(Rp);var rf=Rp.exports;La.createRoot=rf.createRoot,La.hydrateRoot=rf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Vr(e)},Vr=function(t){return new Error("Firebase Database ("+xg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(h=64)),r.push(n[d],n[c],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Og(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const h=s<<2|l>>4;if(r.push(h),u!==64){const p=l<<4&240|u>>2;if(r.push(p),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ag=function(t){const e=Og(t);return Qc.encodeByteArray(e,!0)},Uo=function(t){return Ag(t).replace(/\./g,"")},zo=function(t){try{return Qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){return Dg(void 0,t)}function Dg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uw(n)||(t[n]=Dg(t[n],e[n]));return t}function uw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dw(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mg(){return xg.NODE_ADMIN===!0}function hw(){return typeof indexedDB=="object"}function fw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=()=>pw().__FIREBASE_DEFAULTS__,gw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zo(t[1]);return e&&JSON.parse(e)},Xc=()=>{try{return mw()||gw()||_w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bg=t=>{var e,n;return(n=(e=Xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vw=t=>{const e=bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yw=()=>{var t;return(t=Xc())===null||t===void 0?void 0:t.config},Fg=t=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Uo(JSON.stringify(n)),Uo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ew,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yn(i,l,r)}}function Cw(t,e){return t.replace(Sw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Yi(zo(s[0])||""),n=Yi(zo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Iw=function(t){const e=Ug(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kw=function(t){const e=Ug(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Lr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sf(s)&&sf(o)){if(!Bo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nw(t,e){const n=new Rw(t,e);return n.subscribe.bind(n)}class Rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_a),i.error===void 0&&(i.error=_a),i.complete===void 0&&(i.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _a(){}function El(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ps;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dw(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(t){return t===In?void 0:t}function Dw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Mw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},bw=V.INFO,Fw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Uw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jc{constructor(e){this.name=e,this._logLevel=bw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const zw=(t,e)=>e.some(n=>t instanceof n);let of,lf;function Ww(){return of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zg=new WeakMap,Ru=new WeakMap,Wg=new WeakMap,va=new WeakMap,Zc=new WeakMap;function jw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zg.set(n,t)}).catch(()=>{}),Zc.set(e,t),e}function $w(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vw(t){Pu=t(Pu)}function Hw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ya(this),e,...n);return Wg.set(r,e.sort?e.sort():[e]),an(r)}:Bw().includes(t)?function(...e){return t.apply(ya(this),e),an(zg.get(this))}:function(...e){return an(t.apply(ya(this),e))}}function Gw(t){return typeof t=="function"?Hw(t):(t instanceof IDBTransaction&&$w(t),zw(t,Ww())?new Proxy(t,Pu):t)}function an(t){if(t instanceof IDBRequest)return jw(t);if(va.has(t))return va.get(t);const e=Gw(t);return e!==t&&(va.set(t,e),Zc.set(e,t)),e}const ya=t=>Zc.get(t);function Kw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=an(o);return r&&o.addEventListener("upgradeneeded",a=>{r(an(o.result),a.oldVersion,a.newVersion,an(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const qw=["get","getKey","getAll","getAllKeys","count"],Qw=["put","add","delete","clear"],wa=new Map;function af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Qw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return wa.set(e,s),s}Vw(t=>({...t,get:(e,n,r)=>af(e,n)||t.get(e,n,r),has:(e,n)=>!!af(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",uf="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Jc("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",eE="@firebase/analytics",tE="@firebase/app-check-compat",nE="@firebase/app-check",rE="@firebase/auth",iE="@firebase/auth-compat",sE="@firebase/database",oE="@firebase/database-compat",lE="@firebase/functions",aE="@firebase/functions-compat",uE="@firebase/installations",cE="@firebase/installations-compat",dE="@firebase/messaging",hE="@firebase/messaging-compat",fE="@firebase/performance",pE="@firebase/performance-compat",mE="@firebase/remote-config",gE="@firebase/remote-config-compat",_E="@firebase/storage",vE="@firebase/storage-compat",yE="@firebase/firestore",wE="@firebase/firestore-compat",EE="firebase",CE="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="[DEFAULT]",SE={[xu]:"fire-core",[Jw]:"fire-core-compat",[eE]:"fire-analytics",[Zw]:"fire-analytics-compat",[nE]:"fire-app-check",[tE]:"fire-app-check-compat",[rE]:"fire-auth",[iE]:"fire-auth-compat",[sE]:"fire-rtdb",[oE]:"fire-rtdb-compat",[lE]:"fire-fn",[aE]:"fire-fn-compat",[uE]:"fire-iid",[cE]:"fire-iid-compat",[dE]:"fire-fcm",[hE]:"fire-fcm-compat",[fE]:"fire-perf",[pE]:"fire-perf-compat",[mE]:"fire-rc",[gE]:"fire-rc-compat",[_E]:"fire-gcs",[vE]:"fire-gcs-compat",[yE]:"fire-fst",[wE]:"fire-fst-compat","fire-js":"fire-js",[EE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Map,Au=new Map;function IE(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Au.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,t);for(const n of jo.values())IE(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new ms("app","Firebase",kE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=CE;function Bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=yw()),!n)throw un.create("no-options");const s=jo.get(i);if(s){if(Bo(n,s.options)&&Bo(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new Lw(i);for(const a of Au.values())o.addComponent(a);const l=new TE(n,r,o);return jo.set(i,l),l}function jg(t=Ou){const e=jo.get(t);if(!e&&t===Ou)return Bg();if(!e)throw un.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=SE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(l.join(" "));return}Mr(new Bn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",RE=1,Xi="firebase-heartbeat-store";let Ea=null;function $g(){return Ea||(Ea=Kw(NE,RE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xi)}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),Ea}async function PE(t){var e;try{return(await $g()).transaction(Xi).objectStore(Xi).get(Vg(t))}catch(n){if(n instanceof yn)jn.warn(n.message);else{const r=un.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});jn.warn(r.message)}}}async function cf(t,e){var n;try{const i=(await $g()).transaction(Xi,"readwrite");return await i.objectStore(Xi).put(e,Vg(t)),i.done}catch(r){if(r instanceof yn)jn.warn(r.message);else{const i=un.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});jn.warn(i.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1024,OE=30*24*60*60*1e3;class AE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=df();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=OE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=df(),{heartbeatsToSend:n,unsentEntries:r}=DE(this._heartbeatsCache.heartbeats),i=Uo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function df(){return new Date().toISOString().substring(0,10)}function DE(t,e=xE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hw()?fw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hf(t){return Uo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){Mr(new Bn("platform-logger",e=>new Yw(e),"PRIVATE")),Mr(new Bn("heartbeat",e=>new AE(e),"PRIVATE")),cn(xu,uf,t),cn(xu,uf,"esm2017"),cn("fire-js","")}ME("");function td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bE=Hg,Gg=new ms("auth","Firebase",Hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Jc("@firebase/auth");function uo(t,...e){ff.logLevel<=V.ERROR&&ff.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,...e){throw nd(t,...e)}function yt(t,...e){return nd(t,...e)}function FE(t,e,n){const r=Object.assign(Object.assign({},bE()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gg.create(t,...e)}function O(t,e,...n){if(!t)throw nd(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function Mt(t,e){t||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=new Map;function Nt(t){Mt(t instanceof Function,"Expected a class definition");let e=pf.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){const n=ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bo(s,e!=null?e:{}))return i;dt(i,"already-initialized")}return n.initialize({options:e})}function zE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WE(){return mf()==="http:"||mf()==="https:"}function mf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WE()||cw()||"connection"in navigator)?navigator.onLine:!0}function jE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=Yc()||Lg()}get(){return BE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new _s(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,i={}){return qg(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Hr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Kg.fetch()(Qg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function qg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$E),e);try{const i=new HE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ks(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ks(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ks(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ks(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FE(t,d,u);dt(t,d)}}catch(i){if(i instanceof yn)throw i;dt(t,"network-request-failed")}}async function ws(t,e,n,r,i={}){const s=await ys(t,e,n,r,i);return"mfaPendingCredential"in s&&dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rd(t.config,i):`${t.config.apiScheme}://${i}`}class HE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),VE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ks(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function KE(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qE(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),i=id(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ri(Ca(i.auth_time)),issuedAtTime:Ri(Ca(i.iat)),expirationTime:Ri(Ca(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ca(t){return Number(t)*1e3}function id(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=zo(r);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function QE(t){const e=id(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&YE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ji(t,KE(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eC(s.providerUserInfo):[],l=ZE(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yg(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function JE(t){const e=Ge(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function eC(t){return t.map(e=>{var{providerId:n}=e,r=td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){const n=await qg(t,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Kg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):QE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qE(this,e)}reload(){return JE(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ji(this,GE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:y,isAnonymous:S,providerData:T,stsTokenManager:N}=n;O(g&&N,e,"internal-error");const R=Zi.fromJSON(this.name,N);O(typeof g=="string",e,"internal-error"),Wt(c,e.name),Wt(h,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof S=="boolean",e,"internal-error"),Wt(p,e.name),Wt(_,e.name),Wt(v,e.name),Wt(P,e.name),Wt(m,e.name),Wt(f,e.name);const q=new Dn({uid:g,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:S,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(q.providerData=T.map(F=>Object.assign({},F))),P&&(q._redirectEventId=P),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new Dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $o(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const gf=Xg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=co(this.userKey,i.apiKey,s),this.fullPersistenceKey=co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(Nt(gf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(gf);const o=co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Dn._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Er(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(sd(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jg(t=Ne()){return/firefox\//i.test(t)}function sd(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(t=Ne()){return/crios\//i.test(t)}function e_(t=Ne()){return/iemobile/i.test(t)}function t_(t=Ne()){return/android/i.test(t)}function n_(t=Ne()){return/blackberry/i.test(t)}function r_(t=Ne()){return/webos/i.test(t)}function Sl(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nC(t=Ne()){var e;return Sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rC(){return dw()&&document.documentMode===10}function i_(t=Ne()){return Sl(t)||t_(t)||r_(t)||n_(t)||/windows phone/i.test(t)||e_(t)}function iC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e=[]){let n;switch(t){case"Browser":n=_f(Ne());break;case"Worker":n=`${_f(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new sC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await $o(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ge(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Es(t){return Ge(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nw(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lC(t,e,n){const r=Es(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=o_(e),{host:o,port:l}=aC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uC()}function o_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aC(t){const e=o_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yf(o)}}}function yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function cC(t,e){return ys(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return ws(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){return ws(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function fC(t,e){return ws(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends od{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new es(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new es(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hC(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fC(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e){return ws(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="http://localhost";class $n extends od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=td(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gC(t){const e=_i(vi(t)).link,n=e?_i(vi(e)).deep_link_id:null,r=_i(vi(t)).deep_link_id;return(r?_i(vi(r)).link:null)||r||n||e||t}class ld{constructor(e){var n,r,i,s,o,l;const a=_i(vi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=mC((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=gC(e);try{return new ld(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.providerId=Gr.PROVIDER_ID}static credential(e,n){return es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ld.parseLink(n);return O(r,"argument-error"),es._fromEmailAndCode(e,r.code,r.tenantId)}}Gr.PROVIDER_ID="password";Gr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends l_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Cs{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Cs{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Cs{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return ws(t,"POST","/v1/accounts:signUp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dn._fromIdTokenResponse(e,r,i),o=wf(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wf(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vo(e,n,r,i)}}function a_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vo._fromErrorAndOperation(t,s,e,r):s})}async function vC(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Ji(t,a_(i,s,e,t),n);O(o.idToken,i,"internal-error");const l=id(o.idToken);O(l,i,"internal-error");const{sub:a}=l;return O(t.uid===a,i,"user-mismatch"),Vn._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&dt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(t,e,n=!1){const r="signIn",i=await a_(t,r,e),s=await Vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wC(t,e){return u_(Es(t),e)}async function EC(t,e,n){const r=Es(t),i=await _C(r,{returnSecureToken:!0,email:e,password:n}),s=await Vn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function CC(t,e,n){return wC(Ge(t),Gr.credential(e,n))}function SC(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function IC(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function kC(t){return Ge(t).signOut()}const Ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){const t=Ne();return sd(t)||Sl(t)}const NC=1e3,RC=10;class d_ extends c_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TC()&&iC(),this.fallbackToPolling=i_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const PC=d_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends c_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const f_=h_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Il(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await xC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Il.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=ad("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function AC(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function DC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MC(){return p_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="firebaseLocalStorageDb",bC=1,Go="firebaseLocalStorage",g_="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function FC(){const t=indexedDB.deleteDatabase(m_);return new Ss(t).toPromise()}function Lu(){const t=indexedDB.open(m_,bC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:g_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await FC(),e(await Lu()))})})}async function Ef(t,e,n){const r=kl(t,!0).put({[g_]:e,value:n});return new Ss(r).toPromise()}async function UC(t,e){const n=kl(t,!1).get(e),r=await new Ss(n).toPromise();return r===void 0?null:r.value}function Cf(t,e){const n=kl(t,!0).delete(e);return new Ss(n).toPromise()}const zC=800,WC=3;class __{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(MC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lu();return await Ef(e,Ho,"1"),await Cf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new Ss(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}__.type="LOCAL";const BC=__;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $C(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jC().appendChild(r)})}function VC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){return e?Nt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GC(t){return u_(t.auth,new ud(t),t.bypassAuthState)}function KC(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),yC(n,new ud(t),t.bypassAuthState)}async function qC(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),vC(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return qC;case"reauthViaPopup":case"reauthViaRedirect":return KC;default:dt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new _s(2e3,1e4);class fr extends v_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,QC.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC="pendingRedirect",ho=new Map;class XC extends v_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await JC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JC(t,e){const n=tS(e),r=eS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ZC(t,e){ho.set(t._key(),e)}function eS(t){return Nt(t._redirectPersistence)}function tS(t){return co(YC,t.config.apiKey,t.name)}async function nS(t,e,n=!1){const r=Es(t),i=HC(r,e),o=await new XC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=10*60*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aS=/^https?/;async function uS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oS(t);for(const n of e)try{if(cS(n))return}catch{}dt(t,"unauthorized-domain")}function cS(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aS.test(n))return!1;if(lS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new _s(3e4,6e4);function If(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hS(t){return new Promise((e,n)=>{var r,i,s;function o(){If(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{If(),n(yt(t,"network-request-failed"))},timeout:dS.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const l=VC("iframefcb");return wt()[l]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},$C(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw fo=null,e})}let fo=null;function fS(t){return fo=fo||hS(t),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new _s(5e3,15e3),mS="__/auth/iframe",gS="emulator/auth/iframe",_S={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yS(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rd(e,gS):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=vS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function wS(t){const e=await fS(t),n=wt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:yS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_S,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),l=wt().setTimeout(()=>{s(o)},pS.get());function a(){wt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CS=500,SS=600,IS="_blank",kS="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TS(t,e,n,r=CS,i=SS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},ES),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ne().toLowerCase();n&&(l=Zg(u)?IS:n),Jg(u)&&(e=e||kS,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(nC(u)&&l!=="_self")return NS(e||"",l),new kf(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new kf(c)}function NS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="__/auth/handler",PS="emulator/auth/handler";function Tf(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof l_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Cs){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${xS(t)}?${Hr(l).slice(1)}`}function xS({config:t}){return t.emulator?rd(t,PS):`https://${t.authDomain}/${RS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="webStorageSupport";class OS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f_,this._completeRedirectFn=nS,this._overrideRedirectResult=ZC}async _openPopup(e,n,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Tf(e,n,r,Du(),i);return TS(e,o,ad())}async _openRedirect(e,n,r,i){return await this._originValidation(e),AC(Tf(e,n,r,Du(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wS(e),r=new iS(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sa,{type:Sa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sa];o!==void 0&&n(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i_()||sd()||Sl()}}const AS=OS;var Nf="@firebase/auth",Rf="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function MS(t){Mr(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{O(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s_(t)},d=new oC(l,a,u);return zE(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new Bn("auth-internal",e=>{const n=Es(e.getProvider("auth").getImmediate());return(r=>new DS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Nf,Rf,LS(t)),cn(Nf,Rf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=5*60,FS=Fg("authIdTokenMaxAge")||bS;let Pf=null;const US=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FS)return;const i=n==null?void 0:n.token;Pf!==i&&(Pf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zS(t=jg()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UE(t,{popupRedirectResolver:AS,persistence:[BC,PC,f_]}),r=Fg("authTokenSyncURL");if(r){const s=US(r);IC(n,s,()=>s(n.currentUser)),SC(n,o=>s(o))}const i=bg("auth");return i&&lC(n,`http://${i}`),n}MS("Browser");var WS="firebase",BS="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(WS,BS,"app");const xf="@firebase/database",Of="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w_="";function jS(t){w_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $S(e)}}catch{}return new VS},Pn=E_("localStorage"),Mu=E_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Jc("@firebase/database"),HS=function(){let t=1;return function(){return t++}}(),C_=function(t){const e=xw(t),n=new Tw;n.update(e);const r=n.digest();return Qc.encodeByteArray(r)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Is.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Ln=null,Af=!0;const GS=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sr.logLevel=V.VERBOSE,Ln=Sr.log.bind(Sr),e&&Mu.set("logging_enabled",!0)):typeof t=="function"?Ln=t:(Ln=null,Mu.remove("logging_enabled"))},ve=function(...t){if(Af===!0&&(Af=!1,Ln===null&&Mu.get("logging_enabled")===!0&&GS(!0)),Ln){const e=Is.apply(null,t);Ln(e)}},ks=function(t){return function(...e){ve(t,...e)}},bu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);Sr.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw Sr.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+Is(...t);Sr.warn(e)},KS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},br="[MIN_NAME]",Hn="[MAX_NAME]",Xn=function(t,e){if(t===e)return 0;if(t===br||e===Hn)return-1;if(e===br||t===Hn)return 1;{const n=Df(t),r=Df(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},QS=function(t,e){return t===e?0:t<e?-1:1},li=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},dd=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=dd(t[e[r]]);return n+="}",n},S_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const I_=function(t){E(!cd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},YS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function JS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ZS=new RegExp("^-?(0*)\\d{1,10}$"),eI=-2147483648,tI=2147483647,Df=function(t){if(ZS.test(t)){const e=Number(t);if(e>=eI&&e<=tI)return e}return null},Kr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},nI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class Ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ir.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="5",k_="v",T_="s",N_="r",R_="f",P_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,x_="ls",O_="p",Fu="ac",A_="websocket",D_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function M_(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===A_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===D_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sI(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return aw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={},ka={};function fd(t){const e=t.toString();return Ia[e]||(Ia[e]=new oI),Ia[e]}function lI(t,e){const n=t.toString();return ka[n]||(ka[n]=e()),ka[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Kr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="start",uI="close",cI="pLPCommand",dI="pRTLPCB",b_="id",F_="pw",U_="ser",hI="cb",fI="seg",pI="ts",mI="d",gI="dframe",z_=1870,W_=30,_I=z_-W_,vI=25e3,yI=3e4;class pr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ks(e),this.stats_=fd(n),this.urlFn=a=>(this.appCheckToken&&(a[Fu]=this.appCheckToken),M_(n,D_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yI)),qS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lf)this.id=l,this.password=a;else if(o===uI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lf]="t",r[U_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[k_]=hd,this.transportSessionId&&(r[T_]=this.transportSessionId),this.lastSessionId&&(r[x_]=this.lastSessionId),this.applicationId&&(r[O_]=this.applicationId),this.appCheckToken&&(r[Fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(r[N_]=R_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pr.forceAllow_=!0}static forceDisallow(){pr.forceDisallow_=!0}static isAvailable(){return pr.forceAllow_?!0:!pr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YS()&&!XS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ag(n),i=S_(r,_I);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gI]="t",r[b_]=e,r[F_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HS(),window[cI+this.uniqueCallbackIdentifier]=e,window[dI+this.uniqueCallbackIdentifier]=n,this.myIFrame=pd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[b_]=this.myID,e[F_]=this.myPW,e[U_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+W_+r.length<=z_;){const o=this.pendingSegs.shift();r=r+"&"+fI+i+"="+o.seg+"&"+pI+i+"="+o.ts+"&"+mI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(vI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=16384,EI=45e3;let Ko=null;typeof MozWebSocket<"u"?Ko=MozWebSocket:typeof WebSocket<"u"&&(Ko=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ks(this.connId),this.stats_=fd(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[k_]=hd,typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(o[N_]=R_),n&&(o[T_]=n),r&&(o[x_]=r),i&&(o[Fu]=i),s&&(o[O_]=s),M_(e,A_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;Mg(),this.mySock=new Ko(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ko!==null&&!st.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Yi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S_(n,wI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=6e4,SI=5e3,II=10*1024,kI=100*1024,Ta="t",Mf="d",TI="s",bf="r",NI="e",Ff="o",Uf="a",zf="n",Wf="p",RI="h";class PI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ks("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>kI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>II?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ta in e){const n=e[Ta];n===Uf?this.upgradeIfSecondaryHealthy_():n===bf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ff&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=li("t",e),r=li("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=li("t",e),r=li("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=li(Ta,e);if(Mf in e){const r=e[Mf];if(n===RI)this.onHandshake_(r);else if(n===zf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===TI?this.onConnectionShutdown_(r):n===bf?this.onReset_(r):n===NI?bu("Server Error: "+r):n===Ff?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),hd!==r&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends j_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qo}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=32,jf=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function md(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return Me(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function OI(t,e){const n=ns(t,0),r=ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Xn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function gd(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class AI{constructor(e,n){this.errorPrefix_=n,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cl(this.parts_[r]);V_(this)}}function DI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cl(e),V_(t)}function LI(t){const e=t.parts_.pop();t.byteLength_-=Cl(e),t.parts_.length>0&&(t.byteLength_-=1)}function V_(t){if(t.byteLength_>jf)throw new Error(t.errorPrefix_+"has a key path longer than "+jf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bf+") or object contains a cycle "+kn(t))}function kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends j_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _d}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1e3,MI=60*5*1e3,$f=30*1e3,bI=1.3,FI=3e4,UI="server_kill",Vf=3;class xt extends B_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=MI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Mg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_d.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ps,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const r=Lr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$f)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bu("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FI&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new PI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{xe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(UI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&xe(c),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nu(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Vf&&(this.reconnectDelay_=$f,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Vf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+w_.replace(/\./g,"-")]=1,Yc()?e["framework.cordova"]=1:Lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qo.getInstance().currentlyOnline();return Nu(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(br,e),i=new b(br,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class H_ extends Tl{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Vr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Hn,qs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,qs)}toString(){return".key"}}const kr=new H_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:he.RED,this.left=i!=null?i:be.EMPTY_NODE,this.right=s!=null?s:be.EMPTY_NODE}copy(e,n,r,i,s){return new he(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}he.RED=!0;he.BLACK=!1;class zI{copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,he.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,he.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qs(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new zI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t,e){return Xn(t.name,e.name)}function vd(t,e){return Xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;function BI(t){Uu=t}const G_=function(t){return typeof t=="number"?"number:"+I_(t):"string:"+t},K_=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else E(t===Uu||t.isEmpty(),"priority of unexpected type.");E(t===Uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),K_(this.priorityNode_)}static set __childrenNodeConstructor(e){Hf=e}static get __childrenNodeConstructor(){return Hf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:M(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=I_(this.value_):e+=this.value_,this.lazyHash_=C_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q_,Q_;function jI(t){q_=t}function $I(t){Q_=t}class VI extends Tl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Hn,new ce("[PRIORITY-POST]",Q_))}makePost(e,n){const r=q_(e);return new b(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new VI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=Math.log(2);class GI{constructor(e){const n=s=>parseInt(Math.log(s)/HI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new he(h,c.node,he.BLACK,null,null);{const p=parseInt(d/2,10)+a,_=i(a,p),v=i(p+1,u);return c=t[p],h=n?n(c):c,new he(h,c.node,he.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const P=c-_,m=c;c-=_;const f=i(P+1,m),g=t[P],y=n?n(g):g;p(new he(y,g.node,v,null,f))},p=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),P=Math.pow(2,a.count-(_+1));v?h(P,he.BLACK):(h(P,he.BLACK),h(P,he.RED))}return d},o=new GI(t.length),l=s(o);return new be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const er={};class Rt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(er&&re,"ChildrenNode.ts has not been loaded"),Na=Na||new Rt({".priority":er},{".priority":re}),Na}get(e){const n=Lr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){E(e!==kr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Qo(r,e.getCompare()):l=er;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Rt(d,u)}addToIndexes(e,n){const r=Wo(this.indexes_,(i,s)=>{const o=Lr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===er)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Qo(l,o.getCompare())}else return er;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new Rt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wo(this.indexes_,i=>{if(i===er)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new Rt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&K_(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ui||(ui=new x(new be(vd),null,Rt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ui}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ui:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ui:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{E(M(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G_(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":C_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===kr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===kr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===kr?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KI extends x{constructor(){super(new be(vd),x.EMPTY_NODE,Rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Ts=new KI;Object.defineProperties(b,{MIN:{value:new b(br,x.EMPTY_NODE)},MAX:{value:new b(Hn,Ts)}});H_.__EMPTY_NODE=x.EMPTY_NODE;ce.__childrenNodeConstructor=x;BI(Ts);$I(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=!0;function fe(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,fe(e))}if(!(t instanceof Array)&&qI){const n=[];let r=!1;if(Ce(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=fe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=Qo(n,WI,o=>o.name,vd);if(r){const o=Qo(n,re.getCompare());return new x(s,fe(e),new Rt({".priority":o},{".priority":re}))}else return new x(s,fe(e),Rt.Default)}else{let n=x.EMPTY_NODE;return Ce(t,(r,i)=>{if(Et(t,r)&&r.substring(0,1)!=="."){const s=fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(fe(e))}}jI(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends Tl{constructor(e){super(),this.indexPath_=e,E(!U(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xn(e.name,n.name):s}makePost(e,n){const r=fe(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new b(Hn,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends Tl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=fe(e);return new b(n,r)}toString(){return".value"}}const XI=new YI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){return{type:"value",snapshotNode:t}}function Fr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function JI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rs(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Fr(n,r)):o.trackChildChange(is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(rs(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(is(i,s,o))}else r.trackChildChange(Fr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.indexedFilter_=new yd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const c=this.index_.getCompare();l=(h,p)=>c(p,h)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,d=!1;for(;a.hasNext();){const c=a.getNext();!d&&l(s,c)<=0&&(d=!0),d&&u<this.limit_&&l(c,o)<=0?u++:i=i.updateImmediateChild(c.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,p)=>c(p,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,a);if(d&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(is(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rs(n,c));const v=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Fr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(rs(u.name,u.node)),s.trackChildChange(Fr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:br}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new wd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ek(t){return t.loadsAllData()?new yd(t.getIndex()):t.hasLimit()?new ZI(t):new ss(t)}function Gf(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===XI?n="$value":t.index_===kr?n="$key":(E(t.index_ instanceof QI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_&&(e.startAt=pe(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+pe(t.indexStartName_))),t.endSet_&&(e.endAt=pe(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+pe(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends B_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ks("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Gf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Lr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Yo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gf(e._queryParams),r=e._path.toString(),i=new ps;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Hr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Yi(l.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(){return{value:null,children:new Map}}function X_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Xo());const i=t.children.get(r);e=G(e),X_(i,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):nk(t,(r,i)=>{const s=new $(e.toString()+"/"+r);zu(i,s,n)})}function nk(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=10*1e3,ik=30*1e3,sk=5*60*1e3;class ok{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rk(e);const r=qf+(ik-qf)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ce(e,(i,s)=>{s>0&&Et(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*sk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Ed(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ot.ACK_USER_WRITE,this.source=Ed()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Jo(B(),n,this.revert)}}else return E(M(this.path)===e,"operationForChild called for unrelated child."),new Jo(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new os(this.source,B()):new os(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ot.OVERWRITE}operationForChild(e){return U(this.path)?new Gn(this.source,B(),this.snap.getImmediateChild(e)):new Gn(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ot.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new Gn(this.source,B(),n.value):new Ur(this.source,B(),n)}else return E(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ur(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ak(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(JI(o.childName,o.snapshotNode))}),ci(t,i,"child_removed",e,r,n),ci(t,i,"child_added",e,r,n),ci(t,i,"child_moved",s,r,n),ci(t,i,"child_changed",e,r,n),ci(t,i,"value",e,r,n),i}function ci(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>ck(t,l,a)),o.forEach(l=>{const a=uk(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function uk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ck(t,e,n){if(e.childName==null||n.childName==null)throw Vr("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){return{eventCache:t,serverCache:e}}function xi(t,e,n,r){return Nl(new Kn(e,n,r),t.serverCache)}function J_(t,e,n,r){return Nl(t.eventCache,new Kn(e,n,r))}function Wu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;const dk=()=>(Ra||(Ra=new be(QS)),Ra);class H{constructor(e,n=dk()){this.value=e,this.children=n}static fromObject(e){let n=new H(null);return Ce(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:ne(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new H(null)}}set(e,n){if(U(e))return new H(n,this.children);{const r=M(e),s=(this.children.get(r)||new H(null)).set(G(e),n),o=this.children.insert(r,s);return new H(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new H(null):new H(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(U(e))return n;{const r=M(e),s=(this.children.get(r)||new H(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new H(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(G(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),ne(n,i),r):new H(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new H(null))}}function Oi(t,e,n){if(U(e))return new ut(new H(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new H(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function Bu(t,e,n){let r=t;return Ce(n,(i,s)=>{r=Oi(r,ne(e,i),s)}),r}function Qf(t,e){if(U(e))return ut.empty();{const n=t.writeTree_.setTree(e,new H(null));return new ut(n)}}function ju(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function Yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function dn(t,e){if(U(e))return t;{const n=Jn(t,e);return n!=null?new ut(new H(n)):new ut(t.writeTree_.subtree(e))}}function $u(t){return t.writeTree_.isEmpty()}function zr(t,e){return Z_(B(),t.writeTree_,e)}function Z_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Z_(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e){return rv(e,t)}function hk(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Oi(t.visibleWrites,e,n)),t.lastWriteId=r}function fk(t,e,n,r){E(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Bu(t.visibleWrites,e,n),t.lastWriteId=r}function pk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mk(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gk(l,r.path)?i=!1:Ye(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return _k(t),!0;if(r.snap)t.visibleWrites=Qf(t.visibleWrites,r.path);else{const l=r.children;Ce(l,a=>{t.visibleWrites=Qf(t.visibleWrites,ne(r.path,a))})}return!0}else return!1}function gk(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ne(t.path,n),e))return!0;return!1}function _k(t){t.visibleWrites=ev(t.allWrites,vk,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vk(t){return t.visible}function ev(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ye(n,o)?(l=Me(n,o),r=Oi(r,l,s.snap)):Ye(o,n)&&(l=Me(o,n),r=Oi(r,B(),s.snap.getChild(l)));else if(s.children){if(Ye(n,o))l=Me(n,o),r=Bu(r,l,s.children);else if(Ye(o,n))if(l=Me(o,n),U(l))r=Bu(r,B(),s.children);else{const a=Lr(s.children,M(l));if(a){const u=a.getChild(G(l));r=Oi(r,B(),u)}}}else throw Vr("WriteRecord should have .snap or .children")}}return r}function tv(t,e,n,r,i){if(!r&&!i){const s=Jn(t.visibleWrites,e);if(s!=null)return s;{const o=dn(t.visibleWrites,e);if($u(o))return n;if(n==null&&!ju(o,B()))return null;{const l=n||x.EMPTY_NODE;return zr(o,l)}}}else{const s=dn(t.visibleWrites,e);if(!i&&$u(s))return n;if(!i&&n==null&&!ju(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ye(u.path,e)||Ye(e,u.path))},l=ev(t.allWrites,o,e),a=n||x.EMPTY_NODE;return zr(l,a)}}}function yk(t,e,n){let r=x.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=dn(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=zr(dn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=dn(t.visibleWrites,e);return Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function wk(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(ju(t.visibleWrites,s))return null;{const o=dn(t.visibleWrites,s);return $u(o)?i.getChild(n):zr(o,i.getChild(n))}}function Ek(t,e,n,r){const i=ne(e,n),s=Jn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=dn(t.visibleWrites,i);return zr(o,r.getNode().getImmediateChild(n))}else return null}function Ck(t,e){return Jn(t.visibleWrites,e)}function Sk(t,e,n,r,i,s,o){let l;const a=dn(t.visibleWrites,e),u=Jn(a,B());if(u!=null)l=u;else if(n!=null)l=zr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=h.getNext();for(;p&&d.length<i;)c(p,r)!==0&&d.push(p),p=h.getNext();return d}else return[]}function Ik(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Zo(t,e,n,r){return tv(t.writeTree,t.treePath,e,n,r)}function kd(t,e){return yk(t.writeTree,t.treePath,e)}function Xf(t,e,n,r){return wk(t.writeTree,t.treePath,e,n,r)}function el(t,e){return Ck(t.writeTree,ne(t.treePath,e))}function kk(t,e,n,r,i,s){return Sk(t.writeTree,t.treePath,e,n,r,i,s)}function Td(t,e,n){return Ek(t.writeTree,t.treePath,e,n)}function nv(t,e){return rv(ne(t.treePath,e),t.writeTree)}function rv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Fr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,is(r,e.snapshotNode,i.oldSnap));else throw Vr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const iv=new Nk;class Nd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Td(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),s=kk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){return{filter:t}}function Pk(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xk(t,e,n,r,i){const s=new Tk;let o,l;if(n.type===ot.OVERWRITE){const u=n;u.source.fromUser?o=Vu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=tl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ot.MERGE){const u=n;u.source.fromUser?o=Ak(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ot.ACK_USER_WRITE){const u=n;u.revert?o=Mk(t,e,u.path,r,i,s):o=Dk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ot.LISTEN_COMPLETE)o=Lk(t,e,n.path,r,s);else throw Vr("Unknown operation type: "+n.type);const a=s.getChanges();return Ok(e,o,a),{viewCache:o,changes:a}}function Ok(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Y_(Wu(e)))}}function sv(t,e,n,r,i,s){const o=e.eventCache;if(el(r,n)!=null)return e;{let l,a;if(U(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qn(e),d=u instanceof x?u:x.EMPTY_NODE,c=kd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Zo(r,qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){E(pn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Xf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Xf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Td(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return xi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function tl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),p,null)}else{const p=M(n);if(!a.isCompleteForPath(n)&&pn(n)>1)return e;const _=G(n),P=a.getNode().getImmediateChild(p).updateChild(_,r);p===".priority"?u=d.updatePriority(a.getNode(),P):u=d.updateChild(a.getNode(),p,P,_,iv,null)}const c=J_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new Nd(i,c,s);return sv(t,c,n,i,h,l)}function Vu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Nd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=xi(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=xi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),p=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const v=d.getCompleteChild(c);v!=null?md(h)===".priority"&&v.getChild($_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=x.EMPTY_NODE}if(p.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=xi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Jf(t,e){return t.eventCache.isCompleteForChild(e)}function Ak(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ne(n,a);Jf(e,M(d))&&(l=Vu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ne(n,a);Jf(e,M(d))||(l=Vu(t,l,d,u,i,s,o))}),l}function Zf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Hu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new H(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const p=e.serverCache.getNode().getImmediateChild(c),_=Zf(t,p,h);a=tl(t,a,new $(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const p=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!p){const _=e.serverCache.getNode().getImmediateChild(c),v=Zf(t,_,h);a=tl(t,a,new $(c),v,i,s,o,l)}}),a}function Dk(t,e,n,r,i,s,o){if(el(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return tl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new H(null);return a.getNode().forEachChild(kr,(d,c)=>{u=u.set(new $(d),c)}),Hu(t,e,n,u,i,s,l,o)}else return e}else{let u=new H(null);return r.foreach((d,c)=>{const h=ne(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Hu(t,e,n,u,i,s,l,o)}}function Lk(t,e,n,r,i){const s=e.serverCache,o=J_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return sv(t,o,n,r,iv,i)}function Mk(t,e,n,r,i,s){let o;if(el(r,n)!=null)return e;{const l=new Nd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zo(r,qn(e));else{const c=e.serverCache.getNode();E(c instanceof x,"serverChildren would be complete if leaf node"),d=kd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=M(n);let c=Td(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,G(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,x.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zo(r,qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||el(r,B())!=null,xi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new yd(r.getIndex()),s=ek(r);this.processor_=Rk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),d=new Kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Nl(c,d),this.eventGenerator_=new lk(this.query_)}get query(){return this.query_}}function Fk(t){return t.viewCache_.serverCache.getNode()}function Uk(t,e){const n=qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function ep(t){return t.eventRegistrations_.length===0}function zk(t,e){t.eventRegistrations_.push(e)}function tp(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function np(t,e,n,r){e.type===ot.MERGE&&e.source.queryId!==null&&(E(qn(t.viewCache_),"We should always have a full cache before handling merges"),E(Wu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=xk(t.processor_,i,e,n,r);return Pk(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ov(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Wk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(Fr(s,o))}),n.isFullyInitialized()&&r.push(Y_(n.getNode())),ov(t,r,n.getNode(),e)}function ov(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ak(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nl;class Bk{constructor(){this.views=new Map}}function jk(t){E(!nl,"__referenceConstructor has already been defined"),nl=t}function $k(){return E(nl,"Reference.ts has not been loaded"),nl}function Vk(t){return t.views.size===0}function Rd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),np(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(np(o,e,n,r));return s}}function Hk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zo(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=kd(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=Nl(new Kn(l,a,!1),new Kn(r,i,!1));return new bk(e,u)}return o}function Gk(t,e,n,r,i,s){const o=Hk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zk(o,n),Wk(o,n)}function Kk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=mn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(tp(u,n,r)),ep(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(tp(a,n,r)),ep(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!mn(t)&&s.push(new($k())(e._repo,e._path)),{removed:s,events:o}}function lv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tr(t,e){let n=null;for(const r of t.views.values())n=n||Uk(r,e);return n}function av(t,e){if(e._queryParams.loadsAllData())return Rl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function uv(t,e){return av(t,e)!=null}function mn(t){return Rl(t)!=null}function Rl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl;function qk(t){E(!rl,"__referenceConstructor has already been defined"),rl=t}function Qk(){return E(rl,"Reference.ts has not been loaded"),rl}let Yk=1;class rp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=Ik(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cv(t,e,n,r,i){return hk(t.pendingWriteTree_,e,n,r,i),i?qr(t,new Gn(Ed(),e,n)):[]}function Xk(t,e,n,r){fk(t.pendingWriteTree_,e,n,r);const i=H.fromObject(n);return qr(t,new Ur(Ed(),e,i))}function Xt(t,e,n=!1){const r=pk(t.pendingWriteTree_,e);if(mk(t.pendingWriteTree_,e)){let s=new H(null);return r.snap!=null?s=s.set(B(),!0):Ce(r.children,o=>{s=s.set(new $(o),!0)}),qr(t,new Jo(r.path,s,n))}else return[]}function Pl(t,e,n){return qr(t,new Gn(Cd(),e,n))}function Jk(t,e,n){const r=H.fromObject(n);return qr(t,new Ur(Cd(),e,r))}function Zk(t,e){return qr(t,new os(Cd(),e))}function eT(t,e,n){const r=xd(t,n);if(r){const i=Od(r),s=i.path,o=i.queryId,l=Me(s,e),a=new os(Sd(o),l);return Ad(t,s,a)}else return[]}function Gu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||uv(o,e))){const a=Kk(o,e,n,r);Vk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,p)=>mn(p));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const p=rT(h);for(let _=0;_<p.length;++_){const v=p[_],P=v.query,m=fv(t,v);t.listenProvider_.startListening(Ai(P),il(t,P),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ai(e),null):u.forEach(h=>{const p=t.queryToTagMap.get(xl(h));t.listenProvider_.stopListening(Ai(h),p)}))}iT(t,u)}return l}function tT(t,e,n,r){const i=xd(t,r);if(i!=null){const s=Od(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Gn(Sd(l),a,n);return Ad(t,o,u)}else return[]}function nT(t,e,n,r){const i=xd(t,r);if(i){const s=Od(i),o=s.path,l=s.queryId,a=Me(o,e),u=H.fromObject(n),d=new Ur(Sd(l),a,u);return Ad(t,o,d)}else return[]}function ip(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,p)=>{const _=Me(h,i);s=s||Tr(p,_),o=o||mn(p)});let l=t.syncPointTree_.get(i);l?(o=o||mn(l),s=s||Tr(l,B())):(l=new Bk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const v=Tr(_,B());v&&(s=s.updateImmediateChild(p,v))}));const u=uv(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=xl(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=sT();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const d=Id(t.pendingWriteTree_,i);let c=Gk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=av(l,e);c=c.concat(oT(t,e,h))}return c}function Pd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Tr(l,a);if(u)return u});return tv(i,e,s,n,!0)}function qr(t,e){return dv(e,t.syncPointTree_,null,Id(t.pendingWriteTree_,B()))}function dv(t,e,n,r){if(U(t.path))return hv(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Tr(i,B()));let s=[];const o=M(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=nv(r,o);s=s.concat(dv(l,a,u,d))}return i&&(s=s.concat(Rd(i,t,r,n))),s}}function hv(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Tr(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=nv(r,o),d=t.operationForChild(o);d&&(s=s.concat(hv(d,l,a,u)))}),i&&(s=s.concat(Rd(i,t,r,n))),s}function fv(t,e){const n=e.query,r=il(t,n);return{hashFn:()=>(Fk(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?eT(t,n._path,r):Zk(t,n._path);{const s=JS(i,n);return Gu(t,n,null,s)}}}}function il(t,e){const n=xl(e);return t.queryToTagMap.get(n)}function xl(t){return t._path.toString()+"$"+t._queryIdentifier}function xd(t,e){return t.tagToQueryMap.get(e)}function Od(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function Ad(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Id(t.pendingWriteTree_,e);return Rd(r,n,i,null)}function rT(t){return t.fold((e,n,r)=>{if(n&&mn(n))return[Rl(n)];{let i=[];return n&&(i=lv(n)),Ce(r,(s,o)=>{i=i.concat(o)}),i}})}function Ai(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Qk())(t._repo,t._path):t}function iT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function sT(){return Yk++}function oT(t,e,n){const r=e._path,i=il(t,e),s=fv(t,n),o=t.listenProvider_.startListening(Ai(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!mn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&mn(d))return[Rl(d).query];{let h=[];return d&&(h=h.concat(lv(d).map(p=>p.query))),Ce(c,(p,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ai(d),il(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dd(n)}node(){return this.node_}}class Ld{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new Ld(this.syncTree_,n)}node(){return Pd(this.syncTree_,this.path_)}}const lT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sp=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return aT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uT(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},aT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},uT=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},pv=function(t,e,n,r){return Md(e,new Ld(n,t),r)},mv=function(t,e,n){return Md(t,new Dd(e),n)};function Md(t,e,n){const r=t.getPriority().val(),i=sp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=sp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,fe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(re,(l,a)=>{const u=Md(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Fd(t,e){let n=e instanceof $?e:new $(e),r=t,i=M(n);for(;i!==null;){const s=Lr(r.node.children,i)||{children:{},childCount:0};r=new bd(i,r,s),n=G(n),i=M(n)}return r}function Qr(t){return t.node.value}function gv(t,e){t.node.value=e,Ku(t)}function _v(t){return t.node.childCount>0}function cT(t){return Qr(t)===void 0&&!_v(t)}function Ol(t,e){Ce(t.node.children,(n,r)=>{e(new bd(n,t,r))})}function vv(t,e,n,r){n&&!r&&e(t),Ol(t,i=>{vv(i,e,!0,r)}),n&&r&&e(t)}function dT(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ns(t){return new $(t.parent===null?t.name:Ns(t.parent)+"/"+t.name)}function Ku(t){t.parent!==null&&hT(t.parent,t.name,t)}function hT(t,e,n){const r=cT(n),i=Et(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ku(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/[\[\].#$\/\u0000-\u001F\u007F]/,pT=/[\[\].#$\u0000-\u001F\u007F]/,Pa=10*1024*1024,Ud=function(t){return typeof t=="string"&&t.length!==0&&!fT.test(t)},yv=function(t){return typeof t=="string"&&t.length!==0&&!pT.test(t)},mT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yv(t)},gT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!cd(t)||t&&typeof t=="object"&&Et(t,".sv")},_T=function(t,e,n,r){r&&e===void 0||Al(El(t,"value"),e,n)},Al=function(t,e,n){const r=n instanceof $?new AI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kn(r));if(typeof e=="function")throw new Error(t+"contains a function "+kn(r)+" with contents = "+e.toString());if(cd(e))throw new Error(t+"contains "+e.toString()+" "+kn(r));if(typeof e=="string"&&e.length>Pa/3&&Cl(e)>Pa)throw new Error(t+"contains a string greater than "+Pa+" utf8 bytes "+kn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ud(o)))throw new Error(t+" contains an invalid key ("+o+") "+kn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DI(r,o),Al(t,l,r),LI(r)}),i&&s)throw new Error(t+' contains ".value" child '+kn(r)+" in addition to actual children.")}},vT=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ud(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ye(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},yT=function(t,e,n,r){if(r&&e===void 0)return;const i=El(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ce(e,(o,l)=>{const a=new $(o);if(Al(i,l,ne(n,a)),md(a)===".priority"&&!gT(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),vT(i,s)},wv=function(t,e,n,r){if(!(r&&n===void 0)&&!yv(n))throw new Error(El(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wv(t,e,n,r)},Ev=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ET=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ud(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mT(n))throw new Error(El(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!gd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Cv(t,e,n){Dl(t,n),Sv(t,r=>gd(r,e))}function ht(t,e,n){Dl(t,n),Sv(t,r=>Ye(r,e)||Ye(e,r))}function Sv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ST(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ST(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ln&&ve("event: "+n.toString()),Kr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="repo_interrupt",kT=25;class TT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xo(),this.transactionQueueTree_=new bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NT(t,e,n){if(t.stats_=fd(t.repoInfo_),t.forceRestClient_||nI())t.server_=new Yo(t.repoInfo_,(r,i,s,o)=>{op(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{op(t,r,i,s,o)},r=>{lp(t,r)},r=>{PT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=lI(t.repoInfo_,()=>new ok(t.stats_,t.server_)),t.infoData_=new tk,t.infoSyncTree_=new rp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Pl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),zd(t,"connected",!1),t.serverSyncTree_=new rp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);ht(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function RT(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ll(t){return lT({timestamp:RT(t)})}function op(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Wo(n,u=>fe(u));o=nT(t.serverSyncTree_,s,a,i)}else{const a=fe(n);o=tT(t.serverSyncTree_,s,a,i)}else if(r){const a=Wo(n,u=>fe(u));o=Jk(t.serverSyncTree_,s,a)}else{const a=fe(n);o=Pl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Wr(t,s)),ht(t.eventQueue_,l,o)}function lp(t,e){zd(t,"connected",e),e===!1&&AT(t)}function PT(t,e){Ce(e,(n,r)=>{zd(t,n,r)})}function zd(t,e,n){const r=new $("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(r,i);const s=Pl(t.infoSyncTree_,r,i);ht(t.eventQueue_,r,s)}function Wd(t){return t.nextWriteId_++}function xT(t,e,n,r,i){Ml(t,"set",{path:e.toString(),value:n,priority:r});const s=Ll(t),o=fe(n,r),l=Pd(t.serverSyncTree_,e),a=mv(o,l,s),u=Wd(t),d=cv(t.serverSyncTree_,e,a,u,!0);Dl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||xe("set at "+e+" failed: "+h);const v=Xt(t.serverSyncTree_,u,!_);ht(t.eventQueue_,e,v),qu(t,i,h,p)});const c=jd(t,e);Wr(t,c),ht(t.eventQueue_,c,[])}function OT(t,e,n,r){Ml(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ll(t),o={};if(Ce(n,(l,a)=>{i=!1,o[l]=pv(ne(e,l),fe(a),t.serverSyncTree_,s)}),i)ve("update() called with empty data.  Don't do anything."),qu(t,r,"ok",void 0);else{const l=Wd(t),a=Xk(t.serverSyncTree_,e,o,l);Dl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||xe("update at "+e+" failed: "+u);const h=Xt(t.serverSyncTree_,l,!c),p=h.length>0?Wr(t,e):e;ht(t.eventQueue_,p,h),qu(t,r,u,d)}),Ce(n,u=>{const d=jd(t,ne(e,u));Wr(t,d)}),ht(t.eventQueue_,e,[])}}function AT(t){Ml(t,"onDisconnectEvents");const e=Ll(t),n=Xo();zu(t.onDisconnect_,B(),(i,s)=>{const o=pv(i,s,t.serverSyncTree_,e);X_(n,i,o)});let r=[];zu(n,B(),(i,s)=>{r=r.concat(Pl(t.serverSyncTree_,i,s));const o=jd(t,i);Wr(t,o)}),t.onDisconnect_=Xo(),ht(t.eventQueue_,B(),r)}function DT(t,e,n){let r;M(e._path)===".info"?r=ip(t.infoSyncTree_,e,n):r=ip(t.serverSyncTree_,e,n),Cv(t.eventQueue_,e._path,r)}function ap(t,e,n){let r;M(e._path)===".info"?r=Gu(t.infoSyncTree_,e,n):r=Gu(t.serverSyncTree_,e,n),Cv(t.eventQueue_,e._path,r)}function LT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(IT)}function Ml(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function qu(t,e,n,r){e&&Kr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Iv(t,e,n){return Pd(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Bd(t,e=t.transactionQueueTree_){if(e||bl(t,e),Qr(e)){const n=Tv(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&MT(t,Ns(e),n)}else _v(e)&&Ol(e,n=>{Bd(t,n)})}function MT(t,e,n){const r=n.map(u=>u.currentWriteId),i=Iv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Me(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ml(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Xt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();bl(t,Fd(t.transactionQueueTree_,e)),Bd(t,t.transactionQueueTree_),ht(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Kr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{xe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Wr(t,e)}},o)}function Wr(t,e){const n=kv(t,e),r=Ns(n),i=Tv(t,n);return bT(t,i,r),r}function bT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=kT)d=!0,c="maxretry",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Iv(t,a.path,o);a.currentInputSnapshot=h;const p=e[l].update(h.val());if(p!==void 0){Al("transaction failed: Data returned ",p,a.path);let _=fe(p);typeof p=="object"&&p!=null&&Et(p,".priority")||(_=_.updatePriority(h.getPriority()));const P=a.currentWriteId,m=Ll(t),f=mv(_,h,m);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Wd(t),o.splice(o.indexOf(P),1),i=i.concat(cv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Xt(t.serverSyncTree_,P,!0))}else d=!0,c="nodata",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}bl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Kr(r[l]);Bd(t,t.transactionQueueTree_)}function kv(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Qr(r)===void 0;)r=Fd(r,n),e=G(e),n=M(e);return r}function Tv(t,e){const n=[];return Nv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Nv(t,e,n){const r=Qr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ol(e,i=>{Nv(t,i,n)})}function bl(t,e){const n=Qr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,gv(e,n.length>0?n:void 0)}Ol(e,r=>{bl(t,r)})}function jd(t,e){const n=Ns(kv(t,e)),r=Fd(t.transactionQueueTree_,e);return dT(r,i=>{xa(t,i)}),xa(t,r),vv(r,i=>{xa(t,i)}),n}function xa(t,e){const n=Qr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?gv(e,void 0):n.length=s+1,ht(t.eventQueue_,Ns(e),i);for(let o=0;o<r.length;o++)Kr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const up=function(t,e){const n=zT(t),r=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||KS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new L_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},zT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=FT(t.substring(d,c)));const h=UT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class Pv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:md(this._path)}get ref(){return new Ut(this._repo,this._path)}get _queryIdentifier(){const e=Kf(this._queryParams),n=dd(e);return n==="{}"?"default":n}get _queryObject(){return Kf(this._queryParams)}isEqual(e){if(e=Ge(e),!(e instanceof $d))return!1;const n=this._repo===e._repo,r=gd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+xI(this._path)}}class Ut extends $d{constructor(e,n){super(e,n,new wd,!1)}get parent(){const e=$_(this._path);return e===null?null:new Ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=sl(this.ref,e);return new ls(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ls(i,sl(this.ref,r),re)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function di(t,e){return t=Ge(t),t._checkNotDeleted("ref"),e!==void 0?sl(t._root,e):t._root}function sl(t,e){return t=Ge(t),M(t._path)===null?wT("child","path",e,!1):wv("child","path",e,!1),new Ut(t._repo,ne(t._path,e))}function BT(t){return Ev("remove",t._path),xv(t,null)}function xv(t,e){t=Ge(t),Ev("set",t._path),_T("set",e,t._path,!1);const n=new ps;return xT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cp(t,e){yT("update",e,t._path,!1);const n=new ps;return OT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Vd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Rv("value",this,new ls(e.snapshotNode,new Ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pv(this,e,n):null}matches(e){return e instanceof Vd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Hd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pv(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=sl(new Ut(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Rv(e.type,this,new ls(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Hd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function jT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{ap(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new WT(n,s||void 0),l=e==="value"?new Vd(o):new Hd(e,o);return DT(t._repo,t,l),()=>ap(t._repo,t,l)}function $T(t,e,n,r){return jT(t,"value",e,n,r)}jk(Ut);qk(Ut);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let HT=!1;function GT(t,e,n,r){t.repoInfo_=new L_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function KT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=up(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[VT]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=up(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Ir(Ir.OWNER):new iI(t.name,t.options,e);ET("Invalid Firebase Database URL",o),U(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=QT(l,t,d,new rI(t.name,n));return new YT(c,t)}function qT(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LT(t),delete n[t.key]}function QT(t,e,n,r){let i=Qu[e.name];i||(i={},Qu[e.name]=i);let s=i[t.toURLString()];return s&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new TT(t,HT,n,r),i[t.toURLString()]=s,s}class YT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ut(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function XT(t=jg(),e){const n=ed(t,"database").getImmediate({identifier:e}),r=vw("database");return r&&JT(n,...r),n}function JT(t,e,n,r={}){t=Ge(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ir(Ir.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ww(r.mockUserToken,t.app.options.projectId);s=new Ir(o)}GT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){jS(gs),Mr(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return KT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(xf,Of,t),cn(xf,Of,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZT();const e1={apiKey:"AIzaSyDVG8jaiT_ChayoC9MU0hCyb3TAscMUXDM",authDomain:"todo-list-50b55.firebaseapp.com",databaseURL:"https://todo-list-50b55-default-rtdb.firebaseio.com",projectId:"todo-list-50b55",storageBucket:"todo-list-50b55.appspot.com",messagingSenderId:"513249985088",appId:"1:513249985088:web:735444d6d9e2e2b21915a5"},t1=Bg(e1),hi=XT(t1),mt=zS();/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},as.apply(this,arguments)}var Jt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jt||(Jt={}));const dp="popstate";function n1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Yu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gd(i)}return s1(e,n,null,t)}function r1(){return Math.random().toString(36).substr(2,8)}function hp(t){return{usr:t.state,key:t.key}}function Yu(t,e,n,r){return n===void 0&&(n=null),as({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Yr(e):e,{state:n,key:e&&e.key||r||r1()})}function Gd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function i1(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Gd(t);return new URL(n,e)}function s1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jt.Pop,a=null;function u(){l=Jt.Pop,a&&a({action:l,location:h.location})}function d(p,_){l=Jt.Push;let v=Yu(h.location,p,_);n&&n(v,p);let P=hp(v),m=h.createHref(v);try{o.pushState(P,"",m)}catch{i.location.assign(m)}s&&a&&a({action:l,location:h.location})}function c(p,_){l=Jt.Replace;let v=Yu(h.location,p,_);n&&n(v,p);let P=hp(v),m=h.createHref(v);o.replaceState(P,"",m),s&&a&&a({action:l,location:h.location})}let h={get action(){return l},get location(){return t(i,o)},listen(p){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(dp,u),a=p,()=>{i.removeEventListener(dp,u),a=null}},createHref(p){return e(i,p)},encodeLocation(p){let _=i1(Gd(p));return as({},p,{pathname:_.pathname,search:_.search,hash:_.hash})},push:d,replace:c,go(p){return o.go(p)}};return h}var fp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fp||(fp={}));function o1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Yr(e):e,i=Av(r.pathname||"/",n);if(i==null)return null;let s=Ov(t);l1(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=g1(s[l],y1(i));return o}function Ov(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(we(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=Mn([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(we(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Ov(i.children,e,a,l)),!(i.path==null&&!i.index)&&e.push({path:l,score:p1(l,i.index),routesMeta:a})}),e}function l1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:m1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a1=/^:\w+$/,u1=3,c1=2,d1=1,h1=10,f1=-2,pp=t=>t==="*";function p1(t,e){let n=t.split("/"),r=n.length;return n.some(pp)&&(r+=f1),e&&(r+=c1),n.filter(i=>!pp(i)).reduce((i,s)=>i+(a1.test(s)?u1:s===""?d1:h1),r)}function m1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function g1(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=_1({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let c=l.route;s.push({params:r,pathname:Mn([i,d.pathname]),pathnameBase:k1(Mn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Mn([i,d.pathnameBase]))}return s}function _1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=v1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let h=l[c]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=w1(l[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function v1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function y1(t){try{return decodeURI(t)}catch(e){return Kd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function w1(t,e){try{return decodeURIComponent(t)}catch(n){return Kd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Av(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yr(t):t;return{pathname:n?n.startsWith("/")?n:C1(n,e):e,search:T1(r),hash:N1(i)}}function C1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function I1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Yr(t):(i=as({},t),we(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let c=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=E1(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Mn=t=>t.join("/").replace(/\/\/+/g,"/"),k1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),T1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,N1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class R1{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function P1(t){return t instanceof R1}const x1=new Set(["POST","PUT","PATCH","DELETE"]);[...x1];var Fl={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O1=A.exports,A1=Symbol.for("react.element"),D1=Symbol.for("react.fragment"),L1=Object.prototype.hasOwnProperty,M1=O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b1={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L1.call(e,r)&&!b1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:A1,type:t,key:s,ref:o,props:i,_owner:M1.current}}Ul.Fragment=D1;Ul.jsx=Dv;Ul.jsxs=Dv;(function(t){t.exports=Ul})(Fl);const Lv=Fl.exports.Fragment,C=Fl.exports.jsx,_e=Fl.exports.jsxs;/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}function F1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const U1=typeof Object.is=="function"?Object.is:F1,{useState:z1,useEffect:W1,useLayoutEffect:B1,useDebugValue:j1}=Da;function $1(t,e,n){const r=e(),[{inst:i},s]=z1({inst:{value:r,getSnapshot:e}});return B1(()=>{i.value=r,i.getSnapshot=e,Aa(i)&&s({inst:i})},[t,r,e]),W1(()=>(Aa(i)&&s({inst:i}),t(()=>{Aa(i)&&s({inst:i})})),[t]),j1(r),r}function Aa(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!U1(n,r)}catch{return!0}}function V1(t,e,n){return e()}const H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G1=!H1,K1=G1?V1:$1;"useSyncExternalStore"in Da&&(t=>t.useSyncExternalStore)(Da);const q1=A.exports.createContext(null),Q1=A.exports.createContext(null),Mv=A.exports.createContext(null),bv=A.exports.createContext(null),zl=A.exports.createContext(null),Wl=A.exports.createContext({outlet:null,matches:[]}),Fv=A.exports.createContext(null);function Bl(){return A.exports.useContext(zl)!=null}function Uv(){return Bl()||we(!1),A.exports.useContext(zl).location}function zv(){Bl()||we(!1);let{basename:t,navigator:e}=A.exports.useContext(bv),{matches:n}=A.exports.useContext(Wl),{pathname:r}=Uv(),i=JSON.stringify(S1(n).map(l=>l.pathnameBase)),s=A.exports.useRef(!1);return A.exports.useEffect(()=>{s.current=!0}),A.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=I1(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Mn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function Y1(t,e){Bl()||we(!1);let n=A.exports.useContext(Mv),{matches:r}=A.exports.useContext(Wl),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Uv(),a;if(e){var u;let _=typeof e=="string"?Yr(e):e;o==="/"||((u=_.pathname)==null?void 0:u.startsWith(o))||we(!1),a=_}else a=l;let d=a.pathname||"/",c=o==="/"?d:d.slice(o.length)||"/",h=o1(t,{pathname:c}),p=eN(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:Mn([o,_.pathname]),pathnameBase:_.pathnameBase==="/"?o:Mn([o,_.pathnameBase])})),r,n||void 0);return e&&p?C(zl.Provider,{value:{location:Xu({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:Jt.Pop},children:p}):p}function X1(){let t=nN(),e=P1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return _e(Lv,{children:[C("h2",{children:"Unhandled Thrown Error!"}),C("h3",{style:{fontStyle:"italic"},children:e}),n?C("pre",{style:i,children:n}):null,C("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),_e("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",C("code",{style:s,children:"errorElement"})," props on\xA0",C("code",{style:s,children:"<Route>"})]})]})}class J1 extends A.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C(Fv.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Z1(t){let{routeContext:e,match:n,children:r}=t,i=A.exports.useContext(q1);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),C(Wl.Provider,{value:e,children:r})}function eN(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||we(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||C(X1,{}):null,d=()=>C(Z1,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?C(J1,{location:n.location,component:u,error:a,children:d()}):d()},null)}var mp;(function(t){t.UseRevalidator="useRevalidator"})(mp||(mp={}));var Ju;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ju||(Ju={}));function tN(t){let e=A.exports.useContext(Mv);return e||we(!1),e}function nN(){var t;let e=A.exports.useContext(Fv),n=tN(Ju.UseRouteError),r=A.exports.useContext(Wl),i=r.matches[r.matches.length-1];return e||(r||we(!1),i.route.id||we(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Zu(t){we(!1)}function rN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jt.Pop,navigator:s,static:o=!1}=t;Bl()&&we(!1);let l=e.replace(/^\/*/,"/"),a=A.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Yr(r));let{pathname:u="/",search:d="",hash:c="",state:h=null,key:p="default"}=r,_=A.exports.useMemo(()=>{let v=Av(u,l);return v==null?null:{pathname:v,search:d,hash:c,state:h,key:p}},[l,u,d,c,h,p]);return _==null?null:C(bv.Provider,{value:a,children:C(zl.Provider,{children:n,value:{location:_,navigationType:i}})})}function iN(t){let{children:e,location:n}=t,r=A.exports.useContext(Q1),i=r&&!e?r.router.routes:ec(e);return Y1(i,n)}var gp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(gp||(gp={}));new Promise(()=>{});function ec(t,e){e===void 0&&(e=[]);let n=[];return A.exports.Children.forEach(t,(r,i)=>{if(!A.exports.isValidElement(r))return;if(r.type===A.exports.Fragment){n.push.apply(n,ec(r.props.children,e));return}r.type!==Zu&&we(!1),!r.props.index||!r.props.children||we(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=ec(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sN(t){let{basename:e,children:n,window:r}=t,i=A.exports.useRef();i.current==null&&(i.current=n1({window:r,v5Compat:!0}));let s=i.current,[o,l]=A.exports.useState({action:s.action,location:s.location});return A.exports.useLayoutEffect(()=>s.listen(l),[s]),C(rN,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var _p;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(_p||(_p={}));var vp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vp||(vp={}));function oN(){const[t,e]=A.exports.useState(""),[n,r]=A.exports.useState(""),[i,s]=A.exports.useState(!1),[o,l]=A.exports.useState({email:"",confirmEmail:"",password:"",confirmPassword:""}),a=zv();A.exports.useEffect(()=>{mt.onAuthStateChanged(p=>{p&&a("/homepage")})},[]);const u=p=>{e(p.target.value)},d=p=>{r(p.target.value)},c=()=>{CC(mt,t,n).then(()=>{a("/homepage")}).catch(p=>alert(p.message))},h=()=>{if(o.email!==o.confirmEmail){alert("Confirma\xE7\xE3o de email diferente do principal");return}else if(o.password!==o.confirmPassword){alert("Confirma\xE7\xE3o de senha diferente da principal");return}EC(mt,o.email,o.password).then(()=>{a("/homepage")}).catch(p=>alert(p.message))};return C("div",{className:"welcome",children:_e("main",{className:"container-login",children:[C("h1",{className:"titulo",children:"To-do"}),C("div",{className:"main-form",children:i?_e("div",{className:"form-register",children:[C("h3",{className:"criar-conta",children:"Criar nova conta"}),C("div",{children:C("input",{id:"email-address-register",name:"email",type:"email",value:o.email,onChange:p=>l({...o,email:p.target.value}),autoComplete:"email",required:!0,placeholder:"Email"})}),C("div",{children:C("input",{id:"email-address-confirm",name:"email",type:"email",value:o.confirmEmail,onChange:p=>l({...o,confirmEmail:p.target.value}),autoComplete:"email",required:!0,placeholder:"Confirmar email"})}),C("div",{children:C("input",{id:"password-register",name:"password",type:"password",value:o.password,onChange:p=>l({...o,password:p.target.value}),autoComplete:"current-password",required:!0,placeholder:"Senha"})}),C("div",{children:C("input",{id:"password-confirm",name:"password-confirm",type:"password",value:o.confirmPassword,onChange:p=>l({...o,confirmPassword:p.target.value}),autoComplete:"current-password",required:!0,placeholder:"Confirmar senha"})}),C("button",{className:"botao-registrar",onClick:h,children:"Registrar"}),C("button",{className:"botao-cancelar",onClick:()=>s(!1),children:"Cancelar"})]}):_e("div",{className:"form-login",children:[C("div",{children:C("input",{id:"email-address-login",name:"email",type:"email",onChange:u,value:t,autoComplete:"email",required:!0,placeholder:"Email"})}),C("div",{children:C("input",{id:"password",name:"password-login",type:"password",onChange:d,value:n,autoComplete:"current-password",required:!0,placeholder:"Senha"})}),C("button",{type:"submit",className:"botao-entrar",onClick:c,children:"Entrar"}),C("button",{className:"criar-conta",onClick:()=>s(!0),children:"Criar uma conta"})]})})]})})}var xn=256,Wv=[],yp=256,Ys;for(;xn--;)Wv[xn]=(xn+256).toString(16).substring(1);function lN(t){var e=0,n=t||11;if(!Ys||xn+n>yp*2)for(Ys="",xn=0;e<yp;e++)Ys+=Wv[Math.random()*256|0];return Ys.substring(xn,xn+++n)}function aN(){const[t,e]=A.exports.useState(!1),[n,r]=A.exports.useState(""),[i,s]=A.exports.useState([]),[o,l]=A.exports.useState(!1),[a,u]=A.exports.useState(""),d=zv();A.exports.useEffect(()=>{mt.onAuthStateChanged(f=>{f?$T(di(hi,`/${mt.currentUser.uid}`),g=>{s([]);const y=g.val();y!==null&&Object.values(y).map(S=>{s(T=>[...T,S])})}):f||d("/")})},[]);const c=()=>{kC(mt).then(()=>{d("/")}).catch(f=>{alert(f.message)})},h=f=>{f.preventDefault();const g=lN();if(n===""){alert("Por favor, insira um nome para a tarefa!");return}xv(di(hi,`/${mt.currentUser.uid}/${g}`),{todo:n,uidd:g,completed:!1}),r("")},p=f=>{t||m(),l(!0),r(f.todo),u(f.uidd)},_=()=>{if(n===""){alert("Por favor, insira um nome para a tarefa!");return}cp(di(hi,`/${mt.currentUser.uid}/${a}`),{todo:n,tempUidd:a}),r(""),l(!1),m()},v=f=>{BT(di(hi,`/${mt.currentUser.uid}/${f}`))},P=f=>{cp(di(hi,`/${mt.currentUser.uid}/${f.uidd}`),{completed:!f.completed})},m=()=>{e(!t),r(""),l(!1)};return _e("div",{children:[_e("header",{children:[C("h2",{children:"To-do"}),C("button",{onClick:c,children:C("span",{className:"material-icons-outlined md-32 white",children:"logout"})})]}),_e("main",{className:"todo-container",children:[C("h1",{children:"To-do"}),_e("section",{id:"toolbar",children:[C("div",{id:"search",children:_e("form",{children:[C("input",{type:"text",id:"search-input",placeholder:"Buscar tarefa"}),C("span",{id:"icon-search",className:"material-icons-outlined md-32",children:"search"}),C("button",{id:"erase-button",className:"hide",children:C("span",{className:"material-icons-outlined",children:"backspace"})})]})}),C("div",{id:"filter",children:_e("div",{className:"filter-select",children:[C("span",{className:"material-icons-outlined icon-filter md-32",children:"filter_list"}),_e("select",{id:"filter-select",children:[C("option",{value:"all",children:"Todas"}),C("option",{value:"done",children:"Feitas"}),C("option",{value:"todo",children:"A fazer"})]})]})})]}),C("section",{id:"todo-list",children:i.map(f=>_e("div",{className:f.completed?"todo done":"todo",children:[_e("div",{className:"card-info",children:[C("button",{className:"finish-todo",onClick:()=>P(f),children:C("span",{className:"material-icons-outlined md-32",children:f.completed?"check_box":"check_box_outline_blank"})}),C("h4",{className:"edit-todo",onClick:()=>p(f),children:f.todo})]}),C("button",{className:"remove-todo",onClick:()=>v(f.uidd),children:C("span",{className:"material-icons-outlined md-32",children:"delete"})})]}))}),t?C(Lv,{children:o?_e("form",{className:"form-control",children:[C("input",{autoFocus:!0,type:"text",id:"todo-edit",value:n,onChange:f=>r(f.target.value)}),C("button",{type:"submit",onClick:_,children:C("span",{className:"material-icons-outlined md-32",children:"done"})}),C("button",{id:"cancel-edit-button",onClick:m,children:C("span",{className:"material-icons-outlined md-32",children:"close"})})]}):_e("form",{className:"form-control",children:[C("input",{autoFocus:!0,type:"text",id:"todo-input",value:n,onChange:f=>r(f.target.value),placeholder:"Insira o nome da tarefa..."}),C("button",{type:"submit",onClick:h,children:C("span",{className:"material-icons-outlined md-32",children:"done"})}),C("button",{id:"cancel-input-button",onClick:m,children:C("span",{className:"material-icons-outlined md-32",children:"close"})})]})}):C("button",{id:"button-input-task",onClick:m,children:C("span",{className:"material-icons-outlined md-64",children:"add_circle"})})]})]})}function uN(){return C("div",{className:"app",children:C(sN,{children:_e(iN,{children:[C(Zu,{path:"/",element:C(oN,{})}),C(Zu,{path:"/homepage",element:C(aN,{})})]})})})}La.createRoot(document.getElementById("root")).render(C(Np.StrictMode,{children:C(uN,{})}));
