import{r as f,R as e}from"./index-Cs7sjTYM.js";import{$ as w,L as u}from"./Link-2KAChNSN.js";import{c as C}from"./clsx-B-dksMZM.js";import"./IconApp-BOae6dD3.js";import{w as I}from"./IconWarning-DMnbQijb.js";import{a as L}from"./Collection-BSVICx61.js";import{$ as R,d as S,a as A}from"./utils-BBsc42SX.js";import{c as O,d as j,b as T}from"./CollectionBuilder-C1pJ_vaJ.js";import{$ as _}from"./filterDOMProps-CeZl_uWj.js";import{P as z}from"./PropsContextProvider-BmJWDS_p.js";import{a as W,s as q}from"./storyBackgrounds-GFSAi-dI.js";const p=f.createContext(null);function K(r,t){[r,t]=R(r,t,p);let{CollectionRoot:c}=f.useContext(L);return e.createElement(O,{content:e.createElement(j,r)},o=>{var a;return e.createElement("ol",{ref:t,..._(r,{labelable:!0}),slot:r.slot||void 0,style:r.style,className:(a=r.className)!==null&&a!==void 0?a:"react-aria-Breadcrumbs"},e.createElement(p.Provider,{value:r},e.createElement(c,{collection:o})))})}const M=f.forwardRef(K),F=T("item",function(t,c,o){let a=o.nextKey==null,{isDisabled:s,onAction:n}=S(p),P={"aria-current":a?"page":null,isDisabled:s||a,onPress:()=>n==null?void 0:n(o.key)},$=A({...o.props,children:o.rendered,values:{isDisabled:s||a,isCurrent:a},defaultClassName:"react-aria-Breadcrumb"});return e.createElement("li",{..._(t),...$,ref:c,"data-disabled":s||a||void 0,"data-current":a||void 0},e.createElement(w.Provider,{value:P},$.children))}),G="flow--breadcrumb",H="flow--breadcrumb--link",J="flow--breadcrumb--breadcrumb-item",Q="flow--breadcrumb--icon",U="flow--breadcrumb--dark",V="flow--breadcrumb--light",i={breadcrumb:G,link:H,breadcrumbItem:J,icon:Q,dark:U,light:V},D=r=>{const{children:t}=r,c=C(i.breadcrumbItem);return e.createElement(F,{className:c},t,e.createElement(I,{size:"s",className:i.icon}))};D.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};const b=r=>{const{children:t,className:c,color:o="primary",...a}=r,s=C(i.breadcrumb,i[o],c),n={Link:{unstyled:!0,className:i.link,wrapWith:e.createElement(D,null)}};return e.createElement(M,{...a,className:s},e.createElement(z,{props:n},t))};b.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "dark" | "light"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'}]},description:'@default "primary"'}},composes:["Omit","PropsWithChildren"]};const X={title:"Navigation/Breadcrumb",component:b,render:r=>e.createElement(b,{...r},e.createElement(u,{href:"#"},"Project"),e.createElement(u,{href:"#"},"Apps"),e.createElement(u,{href:"#"},"App")),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},l={},d={args:{color:"dark"},parameters:{backgrounds:W}},m={args:{color:"light"},parameters:{backgrounds:q}};var g,k,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,y,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(E=(y=d.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var v,B,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(N=(B=m.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const Y=["Default","Dark","Light"],me=Object.freeze(Object.defineProperty({__proto__:null,Dark:d,Default:l,Light:m,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{b as B,me as D,X as m};