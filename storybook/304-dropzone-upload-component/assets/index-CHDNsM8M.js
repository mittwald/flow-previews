import{R as l,r as a}from"./index-B-o1Wr-g.js";import{c as m}from"./clsx-B-dksMZM.js";const d=typeof document<"u"?l.useLayoutEffect:()=>{};function v(n){const e=a.useRef(null);return d(()=>{e.current=n},[n]),a.useCallback((...u)=>{const r=e.current;return r==null?void 0:r(...u)},[])}function y(n){let[e,u]=a.useState(n),r=a.useRef(null),t=v(()=>{if(!r.current)return;let o=r.current.next();if(o.done){r.current=null;return}e===o.value?t():u(o.value)});d(()=>{r.current&&t()});let c=v(o=>{r.current=o(e),t()});return[e,c]}const i={prefix:String(Math.round(Math.random()*1e10)),current:0},b=l.createContext(i),w=l.createContext(!1);let h=!!(typeof window<"u"&&window.document&&window.document.createElement),$=new WeakMap;function g(n=!1){let e=a.useContext(b),u=a.useRef(null);if(u.current===null&&!n){var r,t;let c=(t=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||t===void 0||(r=t.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(c){let o=$.get(c);o==null?$.set(c,{id:e.current,state:c.memoizedState}):c.memoizedState!==o.state&&(e.current=o.id,$.delete(c))}u.current=++e.current}return u.current}function C(n){let e=a.useContext(b);e===i&&!h&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let u=g(!!n),r=`react-aria${e.prefix}`;return n||`${r}-${u}`}function M(n){let e=l.useId(),[u]=a.useState(q()),r=u?"react-aria":`react-aria${i.prefix}`;return n||`${r}-${e}`}const k=typeof l.useId=="function"?M:C;function V(){return!1}function I(){return!0}function j(n){return()=>{}}function q(){return typeof l.useSyncExternalStore=="function"?l.useSyncExternalStore(j,V,I):a.useContext(w)}let z=!!(typeof window<"u"&&window.document&&window.document.createElement),f=new Map;function E(n){let[e,u]=a.useState(n),r=a.useRef(null),t=k(e),c=a.useCallback(o=>{r.current=o},[]);return z&&(f.has(t)&&!f.get(t).includes(c)?f.set(t,[...f.get(t),c]):f.set(t,[c])),d(()=>{let o=t;return()=>{f.delete(o)}},[t]),a.useEffect(()=>{let o=r.current;o&&(r.current=null,u(o))}),t}function P(n,e){if(n===e)return n;let u=f.get(n);if(u)return u.forEach(t=>t(e)),e;let r=f.get(e);return r?(r.forEach(t=>t(n)),n):e}function D(n=[]){let e=E(),[u,r]=y(e),t=a.useCallback(()=>{r(function*(){yield e,yield document.getElementById(e)?e:void 0})},[e,r]);return d(t,[e,t,...n]),u}function G(...n){return(...e)=>{for(let u of n)typeof u=="function"&&u(...e)}}function R(...n){let e={...n[0]};for(let u=1;u<n.length;u++){let r=n[u];for(let t in r){let c=e[t],o=r[t];typeof c=="function"&&typeof o=="function"&&t[0]==="o"&&t[1]==="n"&&t.charCodeAt(2)>=65&&t.charCodeAt(2)<=90?e[t]=G(c,o):(t==="className"||t==="UNSAFE_className")&&typeof c=="string"&&typeof o=="string"?e[t]=m(c,o):t==="id"&&c&&o?e.id=P(c,o):e[t]=o!==void 0?o:c}}return e}var x={exports:{}},S={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=a;function H(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var J=typeof Object.is=="function"?Object.is:H,K=s.useState,Q=s.useEffect,X=s.useLayoutEffect,Z=s.useDebugValue;function W(n,e){var u=e(),r=K({inst:{value:u,getSnapshot:e}}),t=r[0].inst,c=r[1];return X(function(){t.value=u,t.getSnapshot=e,p(t)&&c({inst:t})},[n,u,e]),Q(function(){return p(t)&&c({inst:t}),n(function(){p(t)&&c({inst:t})})},[n]),Z(u),u}function p(n){var e=n.getSnapshot;n=n.value;try{var u=e();return!J(n,u)}catch{return!0}}function F(n,e){return e()}var U=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?F:W;S.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:U;x.exports=S;var Y=x.exports;export{q as $,R as a,d as b,v as c,E as d,D as e,G as f,Y as s};