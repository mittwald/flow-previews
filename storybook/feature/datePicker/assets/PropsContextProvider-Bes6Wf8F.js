import{r as i,R as p}from"./index-uCp2LrAq.js";import{b as E}from"./index-CFQDndEx.js";const m=i.createContext({});m.Provider;const v=()=>i.useContext(m),N=e=>{const{children:r}=e;return p.createElement(m.Provider,{value:{}},r)};N.__docgenInfo={description:"",methods:[],displayName:"ClearPropsContext"};function T(e,r,o){let n=t=>e(t,...r);return o===void 0?n:Object.assign(n,{lazy:o,lazyArgs:r})}function I(e,r,o){let n=e.length-r.length;if(n===0)return e(...r);if(n===1)return T(e,r,o);throw new Error("Wrong number of arguments")}function b(...e){return I(k,e)}function k(e,r){let o={};for(let[n,t]of Object.entries(e)){let a=r(t,n,e);o[n]=a}return o}var d=e=>typeof e=="object"&&e!==null;const P=e=>{const r=typeof e;return e!==null&&(r==="object"||r==="function")},c=new Set(["__proto__","prototype","constructor"]),D=new Set("0123456789");function f(e){const r=[];let o="",n="start",t=!1;for(const a of e)switch(a){case"\\":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd")throw new Error("Invalid character after an index");t&&(o+=a),n="property",t=!t;break}case".":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd"){n="property";break}if(t){t=!1,o+=a;break}if(c.has(o))return[];r.push(o),o="",n="property";break}case"[":{if(n==="index")throw new Error("Invalid character in an index");if(n==="indexEnd"){n="index";break}if(t){t=!1,o+=a;break}if(n==="property"){if(c.has(o))return[];r.push(o),o=""}n="index";break}case"]":{if(n==="index"){r.push(Number.parseInt(o,10)),o="",n="indexEnd";break}if(n==="indexEnd")throw new Error("Invalid character after an index")}default:{if(n==="index"&&!D.has(a))throw new Error("Invalid character in an index");if(n==="indexEnd")throw new Error("Invalid character after an index");n==="start"&&(n="property"),t&&(t=!1,o+="\\"),o+=a}}switch(t&&(o+="\\"),n){case"property":{if(c.has(o))return[];r.push(o);break}case"index":throw new Error("Index was not closed");case"start":{r.push("");break}}return r}function w(e,r){if(typeof r!="number"&&Array.isArray(e)){const o=Number.parseInt(r,10);return Number.isInteger(o)&&e[o]===e[r]}return!1}function _(e,r){if(w(e,r))throw new Error("Cannot use string index")}function z(e,r,o){if(!P(e)||typeof r!="string")return o===void 0?e:o;const n=f(r);if(n.length===0)return o;for(let t=0;t<n.length;t++){const a=n[t];if(w(e,a)?e=t===n.length-1?void 0:null:e=e[a],e==null){if(t!==n.length-1)return o;break}}return e===void 0?o:e}function q(e,r,o){if(!P(e)||typeof r!="string")return e;const n=e,t=f(r);for(let a=0;a<t.length;a++){const s=t[a];_(e,s),a===t.length-1?e[s]=o:P(e[s])||(e[s]=typeof t[a+1]=="number"?[]:{}),e=e[s]}return n}const O=(e={})=>(...r)=>{const{mergeClassNames:o=!0,mergeEventHandler:n=!0}=e,t=E(...r);if(d(t)){if(!o)for(const a of r)d(a)&&"className"in t&&"className"in a&&(t.className=a.className);if(!n){for(const a of r)if(d(a))for(const[s,l]of Object.entries(a))/^on[A-Z]/.test(s)&&q(t,s,l)}}return t},R=O({mergeClassNames:!1,mergeEventHandler:!1}),A=(e={},r={})=>{const o=Object.keys({...e,...r});return Object.fromEntries(o.map(n=>[n,R(e[n],r[n])]))},y=i.createContext(void 0),M=()=>i.useContext(y),S=y.Provider,x=e=>{const{children:r,propsContext:o}=e,n=M(),t=b(o,a=>a&&"render"in a&&a.render!==!1?a.render:void 0);return p.createElement(S,{value:{render:t,parentContext:n}},r)};x.__docgenInfo={description:"",methods:[],displayName:"PropsContextRenderProvider",props:{propsContext:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}},composes:["PropsWithChildren"]};const W=e=>{const{props:r,dependencies:o=[],mergeInParentContext:n=!1,children:t,...a}=e,s=v(),l=i.useMemo(()=>r,o),C=i.useMemo(()=>n?A(s,r):r,[l,s,n]),u=i.isValidElement(t)?{...a,...t.props}:a,h=[t,...Object.entries(u).flatMap(F=>F)],g=i.useMemo(()=>i.isValidElement(t)?i.cloneElement(t,u):t,h);return p.createElement(x,{propsContext:r},p.createElement(m.Provider,{value:C},g))};W.__docgenInfo={description:"",methods:[],displayName:"PropsContextProvider",props:{props:{required:!0,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},dependencies:{required:!1,tsType:{name:"DependencyList"},description:""},mergeInParentContext:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};export{N as C,W as P,v as a,M as b,S as c,z as g,A as m,I as u};
