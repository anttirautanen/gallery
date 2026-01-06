(function(p,v){typeof exports=="object"&&typeof module<"u"?v(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],v):(p=typeof globalThis<"u"?globalThis:p||self,v(p.Gallery={},p.React,p.styled))})(this,(function(p,v,m){"use strict";var k=typeof document<"u"?document.currentScript:null,g={exports:{}},h={};var A;function V(){if(A)return h;A=1;var t=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function i(l,s,f){var d=null;if(f!==void 0&&(d=""+f),s.key!==void 0&&(d=""+s.key),"key"in s){f={};for(var b in s)b!=="key"&&(f[b]=s[b])}else f=s;return s=f.ref,{$$typeof:t,type:l,key:d,ref:s!==void 0?s:null,props:f}}return h.Fragment=c,h.jsx=i,h.jsxs=i,h}var _={};var $;function X(){return $||($=1,process.env.NODE_ENV!=="production"&&(function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===be?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case ce:return"Profiler";case se:return"StrictMode";case fe:return"Suspense";case de:return"SuspenseList";case pe:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ae:return"Portal";case le:return e.displayName||"Context";case ie:return(e._context.displayName||"Context")+".Consumer";case ue:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case me:return r=e.displayName||null,r!==null?r:t(e.type)||"Memo";case x:r=e._payload,e=e._init;try{return t(e(r))}catch{}}return null}function c(e){return""+e}function i(e){try{c(e);var r=!1}catch{r=!0}if(r){r=console;var n=r.error,o=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",o),c(e)}}function l(e){if(e===j)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===x)return"<...>";try{var r=t(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function s(){var e=y.A;return e===null?null:e.getOwner()}function f(){return Error("react-stack-top-frame")}function d(e){if(F.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function b(e,r){function n(){z||(z=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function R(){var e=t(this.type);return M[e]||(M[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function oe(e,r,n,o,w,S){var a=n.ref;return e={$$typeof:U,type:e,key:r,props:n,_owner:o},(a!==void 0?a:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:R}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:w}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:S}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function D(e,r,n,o,w,S){var a=r.children;if(a!==void 0)if(o)if(ve(a)){for(o=0;o<a.length;o++)G(a[o]);Object.freeze&&Object.freeze(a)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else G(a);if(F.call(r,"key")){a=t(e);var E=Object.keys(r).filter(function(Ee){return Ee!=="key"});o=0<E.length?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}",J[a+o]||(E=0<E.length?"{"+E.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,a,E,a),J[a+o]=!0)}if(a=null,n!==void 0&&(i(n),a=""+n),d(r)&&(i(r.key),a=""+r.key),"key"in r){n={};for(var P in r)P!=="key"&&(n[P]=r[P])}else n=r;return a&&b(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),oe(e,a,n,s(),w,S)}function G(e){L(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===x&&(e._payload.status==="fulfilled"?L(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function L(e){return typeof e=="object"&&e!==null&&e.$$typeof===U}var T=v,U=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),le=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),be=Symbol.for("react.client.reference"),y=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.prototype.hasOwnProperty,ve=Array.isArray,O=console.createTask?console.createTask:function(){return null};T={react_stack_bottom_frame:function(e){return e()}};var z,M={},W=T.react_stack_bottom_frame.bind(T,f)(),q=O(l(f)),J={};_.Fragment=j,_.jsx=function(e,r,n){var o=1e4>y.recentlyCreatedOwnerStacks++;return D(e,r,n,!1,o?Error("react-stack-top-frame"):W,o?O(l(e)):q)},_.jsxs=function(e,r,n){var o=1e4>y.recentlyCreatedOwnerStacks++;return D(e,r,n,!0,o?Error("react-stack-top-frame"):W,o?O(l(e)):q)}})()),_}var C;function H(){return C||(C=1,process.env.NODE_ENV==="production"?g.exports=V():g.exports=X()),g.exports}var u=H();const N="4vw";function B(t){const c=t.path.replace("../../public","");return Array.from({length:t.imageCount},(i,l)=>new URL(`${c}thumbs/${l+1}.jpeg`,typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:k&&k.tagName.toUpperCase()==="SCRIPT"&&k.src||new URL("gallery.umd.cjs",document.baseURI).href))}const Z=({gallery:t})=>{const c=B(t);return v.useEffect(()=>{const i=new ResizeObserver(()=>{document.documentElement.style.setProperty("--scrollbar-width",window.innerWidth-document.documentElement.clientWidth+"px")});return i.observe(document.body),()=>{i.disconnect()}},[]),u.jsxs("div",{children:[u.jsx(K,{$padding:N,children:t.name}),u.jsx(v.Suspense,{fallback:u.jsx("div",{children:"LOADING IMAGE..."}),children:u.jsx(Q,{gallery:t,thumbImageUrls:c})})]})},Q=({gallery:t,thumbImageUrls:c})=>{const i=t.grid.match(/".*"/g);if(!i)return u.jsxs(I,{children:["Could not detect row count.",u.jsx("pre",{children:t.grid})]});const l=t.grid.match(/"(.*)"/);if(!l||!l[1])return u.jsxs(I,{children:["Could not detect column count.",u.jsx("pre",{children:t.grid})]});const s=i.length,d=l[1].split(" ").length;return u.jsx(ee,{$areas:t.grid,$padding:N,$columnCount:d,$rowCount:s,children:c.map((b,R)=>u.jsxs(re,{$area:ne[R],children:[u.jsx(Y,{children:t.captions[R]}),u.jsx(te,{$imagePath:b.href})]},b.href))})},K=m.h2`
  justify-self: center;
  background-color: #fff9f3;
  clip-path: polygon(0 0.05em, 100% 0, calc(100% - 0.2em) 100%, 0.1em calc(100% - 0.05em));
  font-family: monospace;
  font-weight: 700;
  font-size: 6vmin;
  letter-spacing: 0.02em;
  line-height: 0.85;
  margin: 2em 0 calc(-${({$padding:t})=>t} / 2) 0;
  padding: ${({$padding:t})=>t};
  text-align: center;
  text-shadow: 0 0 1em rgba(255, 255, 0, 0.5);
`,I=m.div`
  background: #b11b07;
  color: #fff;
  font-weight: 600;
  padding: 4vw;
`,ee=m.div`
  background: #000;
  display: grid;
  gap: 2vw;
  padding: ${({$padding:t})=>t};

  ${({$areas:t,$columnCount:c,$rowCount:i,$padding:l})=>{const s=`${(c-1)*2}vw`,f=m.css`calc(100vw - ${l} - ${l} - ${s} - var(--scrollbar-width))`,d=m.css`calc(${f} / ${c})`;return m.css`
      grid-template-areas: ${t};
      grid-template-columns: repeat(${c}, ${d});
      grid-template-rows: repeat(${i}, ${d});
    `}}
`,Y=m.div`
  background: #000;
  color: #fff9f3;
  font-size: 0.9em;
  font-family: monospace;
  left: 0;
  opacity: 0;
  padding: 0.5em 0.5em;
  position: absolute;
  right: 0;
  bottom: -0.5em;
  transition: all 0.1s;
  word-break: break-word;
`,re=m.div`
  display: grid;
  grid-area: ${({$area:t})=>t};
  position: relative;

  &:hover ${Y} {
    opacity: 1;
    bottom: 0;
  }
`,te=m.div`
  background-image: url("${({$imagePath:t})=>t}");
  background-size: cover;
  background-position: center;
`,ne=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];p.Gallery=Z,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})}));
