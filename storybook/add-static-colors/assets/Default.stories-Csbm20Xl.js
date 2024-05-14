import{r as p,R as r}from"./index-BwDkhjyp.js";import"./index-DRPLF6b1.js";import{c as _}from"./clsx-B-dksMZM.js";import"./IconApp-D-kcT16p.js";import{y as P}from"./IconWarning-Cw7drCLR.js";import{$ as C,a as S}from"./Collection-D_WRBQDn.js";import{a as D}from"./utils-D7InqjV7.js";import{$ as R,L as u}from"./Link-CWeksfmF.js";import{$ as w}from"./filterDOMProps-CeZl_uWj.js";import{P as W}from"./flowComponent-B3-LTTWn.js";const A=p.createContext(null);function F(e,a){[e,a]=D(e,a,A);let{portal:c,collection:t}=C(e);return r.createElement(r.Fragment,null,c,r.createElement(O,{props:e,collection:t,breadcrumbsRef:a}))}function O({props:e,collection:a,breadcrumbsRef:c}){var t;return r.createElement("ol",{ref:c,...w(e,{labelable:!0}),slot:e.slot||void 0,style:e.style,className:(t=e.className)!==null&&t!==void 0?t:"react-aria-Breadcrumbs"},[...a].map((o,s)=>r.createElement(L,{key:o.key,node:o,isCurrent:s===a.size-1,isDisabled:e.isDisabled,onAction:e.onAction})))}const T=p.forwardRef(F);function j(e,a){return S("item",e,a,e.children)}const z=p.forwardRef(j);function L({node:e,isCurrent:a,isDisabled:c,onAction:t}){let o={"aria-current":a?"page":null,isDisabled:c||a,onPress:()=>t==null?void 0:t(e.key)};var s;return r.createElement("li",{...w(e.props),ref:e.props.ref,style:e.props.style,className:(s=e.props.className)!==null&&s!==void 0?s:"react-aria-Breadcrumb"},r.createElement(R.Provider,{value:o},e.rendered))}const q="flow--breadcrumb",M="flow--breadcrumb--link",G="flow--breadcrumb--breadcrumb-item",H="flow--breadcrumb--icon",m={breadcrumb:q,link:M,breadcrumbItem:G,icon:H,"static-black":"flow--breadcrumb--static-black","static-white":"flow--breadcrumb--static-white"},b=e=>{const{children:a}=e,c=_(m.breadcrumbItem);return r.createElement(z,{className:c},a,r.createElement(P,{size:"s",className:m.icon}))};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",composes:["PropsWithChildren"]};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",composes:["PropsWithChildren"]};const d=e=>{const{children:a,className:c,color:t="primary",...o}=e,s=_(m.breadcrumb,m[t],c),N={Link:{render:(x,I)=>r.createElement(b,null,r.createElement(x,{...I,unstyled:!0,className:m.link}))}};return r.createElement(T,{...o,className:s},r.createElement(W,{props:N},a))};d.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "static-black" | "static-white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"static-black"'},{name:"literal",value:'"static-white"'}]},description:'@default "primary"'}},composes:["Omit","PropsWithChildren"]};d.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "static-black" | "static-white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"static-black"'},{name:"literal",value:'"static-white"'}]},description:'@default "primary"'}},composes:["Omit","PropsWithChildren"]};const J={title:"Navigation/Breadcrumb",component:d,render:e=>r.createElement(d,{...e},r.createElement(u,{href:"#"},"Project"),r.createElement(u,{href:"#"},"Apps"),r.createElement(u,{href:"#"},"App")),argTypes:{color:{control:"inline-radio",options:["primary","static-black","static-white"]}}},n={},l={args:{color:"static-black"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#E0EBFF"}]}}},i={args:{color:"static-white"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#002A7B"}]}}};var f,$,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=($=n.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var h,v,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "static-black"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#E0EBFF"
      }]
    }
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,E,B;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: "static-white"
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{
        name: "dark",
        value: "#002A7B"
      }]
    }
  }
}`,...(B=(E=i.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const K=["Default","StaticBlack","StaticWhite"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:n,StaticBlack:l,StaticWhite:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{d as B,ce as D,J as m};
