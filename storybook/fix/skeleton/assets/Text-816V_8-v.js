import{R as t}from"./index-BwDkhjyp.js";import{C as x,P as E}from"./PropsContextProvider-DwTel3aB.js";import{g as v}from"./_commonjsHelpers-BosuxZz1.js";import{f as g}from"./flowComponent-DpPOHS38.js";import{E as h}from"./EmulatedBoldText-B1t6hs5E.js";import{W as T}from"./Wrap-DQq6jo70.js";import{c as w}from"./clsx-B-dksMZM.js";import{$ as C}from"./Text-DqgvIX4k.js";var P=function(r,a,l,o,m,s,n,c){if(!r){var e;if(a===void 0)e=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[l,o,m,s,n,c],f=0;e=new Error(a.replace(/%s/g,function(){return i[f++]})),e.name="Invariant Violation"}throw e.framesToPop=1,e}},y=P;const k=v(y),$="flow--text--light",b="flow--text--dark",d={light:$,dark:b},N=g("Text",r=>{const{children:a,className:l,elementType:o="span",emulateBoldWidth:m,refProp:s,color:n,...c}=r,e=w(n&&d[n],!n&&d.dark,l),i={...c,className:e},f={Link:{inline:!0}},p=t.createElement(E,{props:f},t.createElement(T,{if:m},t.createElement(h,null,a)));if(!r.slot){const u=o;return t.createElement(u,{...i,ref:s},p)}return k(typeof o=="string","'elementType' in Text component must be of type string"),t.createElement(x,null,t.createElement(C,{...i,elementType:o,ref:s},p))});N.__docgenInfo={description:"",methods:[],displayName:"Text"};export{N as T,k as i};