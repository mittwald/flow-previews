import{r as i,R as m}from"./index-uCp2LrAq.js";import{b as N}from"./index-CFQDndEx.js";const d=i.createContext({});d.Provider;const T=()=>i.useContext(d),I=e=>{const{children:r}=e;return m.createElement(d.Provider,{value:{}},r)};I.__docgenInfo={description:"",methods:[],displayName:"ClearPropsContext"};var b=function(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,a;n<o;n++)(a||!(n in r))&&(a||(a=Array.prototype.slice.call(r,0,n)),a[n]=r[n]);return e.concat(a||Array.prototype.slice.call(r))};function k(e,r,t){var n=function(a){return e.apply(void 0,b([a],Array.from(r),!1))},o=t??e.lazy;return o===void 0?n:Object.assign(n,{lazy:o,lazyArgs:r})}function y(e,r,t){var n=e.length-r.length;if(n===0)return e.apply(void 0,Array.from(r));if(n===1)return k(e,r,t);throw new Error("Wrong number of arguments")}function u(){return y(Object.entries,arguments)}(function(e){e.strict=e})(u||(u={}));var c=function(e){return typeof e=="object"&&e!==null};function D(){return y(A,arguments)}function A(e,r){for(var t={},n=0,o=u.strict(e);n<o.length;n++){var a=o[n],s=a[0],p=a[1],l=r(p,s);t[s]=l}return t}const C=e=>{const r=typeof e;return e!==null&&(r==="object"||r==="function")},P=new Set(["__proto__","prototype","constructor"]),_=new Set("0123456789");function w(e){const r=[];let t="",n="start",o=!1;for(const a of e)switch(a){case"\\":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd")throw new Error("Invalid character after an index");o&&(t+=a),n="property",o=!o;break}case".":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd"){n="property";break}if(o){o=!1,t+=a;break}if(P.has(t))return[];r.push(t),t="",n="property";break}case"[":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd"){n="index";break}if(o){o=!1,t+=a;break}if(n==="property"){if(P.has(t))return[];r.push(t),t=""}n="index";break}case"]":{if(n==="index"){r.push(Number.parseInt(t,10)),t="",n="indexEnd";break}if(n==="indexEnd")throw new Error("Invalid character after an index")}default:{if(n==="index"&&!_.has(a))throw new Error("Invalid character in an index");if(n==="indexEnd")throw new Error("Invalid character after an index");n==="start"&&(n="property"),o&&(o=!1,t+="\\"),t+=a}}switch(o&&(t+="\\"),n){case"property":{if(P.has(t))return[];r.push(t);break}case"index":throw new Error("Index was not closed");case"start":{r.push("");break}}return r}function x(e,r){if(typeof r!="number"&&Array.isArray(e)){const t=Number.parseInt(r,10);return Number.isInteger(t)&&e[t]===e[r]}return!1}function q(e,r){if(x(e,r))throw new Error("Cannot use string index")}function K(e,r,t){if(!C(e)||typeof r!="string")return t===void 0?e:t;const n=w(r);if(n.length===0)return t;for(let o=0;o<n.length;o++){const a=n[o];if(x(e,a)?e=o===n.length-1?void 0:null:e=e[a],e==null){if(o!==n.length-1)return t;break}}return e===void 0?t:e}function O(e,r,t){if(!C(e)||typeof r!="string")return e;const n=e,o=w(r);for(let a=0;a<o.length;a++){const s=o[a];q(e,s),a===o.length-1?e[s]=t:C(e[s])||(e[s]=typeof o[a+1]=="number"?[]:{}),e=e[s]}return n}const R=(e={})=>(...r)=>{const{mergeClassNames:t=!0,mergeEventHandler:n=!0}=e,o=N(...r);if(c(o)){if(!t)for(const a of r)c(a)&&"className"in o&&"className"in a&&(o.className=a.className);if(!n){for(const a of r)if(c(a))for(const[s,p]of Object.entries(a))/^on[A-Z]/.test(s)&&O(o,s,p)}}return o},M=R({mergeClassNames:!1,mergeEventHandler:!1}),S=(e={},r={})=>{const t=Object.keys({...e,...r});return Object.fromEntries(t.map(n=>[n,M(e[n],r[n])]))},h=i.createContext(void 0),V=()=>i.useContext(h),W=h.Provider,g=e=>{const{children:r,propsContext:t}=e,n=V(),o=D(t,a=>a&&"render"in a&&a.render!==!1?a.render:void 0);return m.createElement(W,{value:{render:o,parentContext:n}},r)};g.__docgenInfo={description:"",methods:[],displayName:"PropsContextRenderProvider",props:{propsContext:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  [C in FlowComponentName]: ComponentPropsContext<C>;
}`,signature:{properties:[{key:{name:"FlowComponentPropsTypes",required:!0},value:{name:"intersection",raw:`Partial<{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}> &
  PropsContext`,elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}`,signature:{properties:[{key:{name:"FlowComponentPropsTypes[C]",raw:"FlowComponentPropsTypes[C]",required:!0},value:{name:"union",raw:`| FlowComponentPropType<C, P>
| DynamicProp<C, P>`,elements:[{name:"FlowComponentPropsTypes[C][P]",raw:"FlowComponentProps<C>[P]"},{name:"DynamicProp",elements:[{name:"C"},{name:"P"}],raw:"DynamicProp<C, P>"}]}}]}}],raw:`Partial<{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}>`},{name:"PropsContext"}]}}]}}],raw:`Partial<{
  [C in FlowComponentName]: ComponentPropsContext<C>;
}>`},description:""}},composes:["PropsWithChildren"]};const z=e=>{const{props:r,dependencies:t=[],mergeInParentContext:n=!1,children:o,...a}=e,s=T(),p=i.useMemo(()=>r,t),l=i.useMemo(()=>n?S(s,r):r,[p,s,n]),f=i.isValidElement(o)?{...a,...o.props}:a,v=[o,...Object.entries(f).flatMap(F=>F)],E=i.useMemo(()=>i.isValidElement(o)?i.cloneElement(o,f):o,v);return m.createElement(g,{propsContext:r},m.createElement(d.Provider,{value:l},E))};z.__docgenInfo={description:"",methods:[],displayName:"PropsContextProvider",props:{props:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  [C in FlowComponentName]: ComponentPropsContext<C>;
}`,signature:{properties:[{key:{name:"FlowComponentPropsTypes",required:!0},value:{name:"intersection",raw:`Partial<{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}> &
  PropsContext`,elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}`,signature:{properties:[{key:{name:"FlowComponentPropsTypes[C]",raw:"FlowComponentPropsTypes[C]",required:!0},value:{name:"union",raw:`| FlowComponentPropType<C, P>
| DynamicProp<C, P>`,elements:[{name:"FlowComponentPropsTypes[C][P]",raw:"FlowComponentProps<C>[P]"},{name:"DynamicProp",elements:[{name:"C"},{name:"P"}],raw:"DynamicProp<C, P>"}]}}]}}],raw:`Partial<{
  [P in FlowComponentPropName<C>]:
    | FlowComponentPropType<C, P>
    | DynamicProp<C, P>;
}>`},{name:"PropsContext"}]}}]}}],raw:`Partial<{
  [C in FlowComponentName]: ComponentPropsContext<C>;
}>`},description:""},dependencies:{required:!1,tsType:{name:"DependencyList"},description:""},mergeInParentContext:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};export{I as C,z as P,V as a,W as b,K as g,S as m,y as p,T as u};
