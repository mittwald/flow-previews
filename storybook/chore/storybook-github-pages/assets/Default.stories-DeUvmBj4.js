import{R as e,r as v}from"./index-BwDkhjyp.js";import"./IconApp-Bwxw5AuI.js";import{B as _,C as D,h as A}from"./IconWarning-DFvgIVCz.js";import"./index-HBuN0i9E.js";import"./index-BN5xuRyU.js";import{c as T}from"./clsx-B-dksMZM.js";import{d as S}from"./deepFindOfType-CmKNZ8si.js";import{W as j,T as f}from"./Text-DFvNZx2y.js";import{P as y,A as M}from"./flowComponent-DnUs06RV.js";import"./index-kone6XRS.js";import{L as n}from"./Link-xRgpZhJ6.js";import{L as E}from"./Label-BY-lGqJc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./react-children-utilities-CseWD4BL.js";import"./import-Cu03TQlK.js";import"./index-B8XB3FuZ.js";import"./real-module-_6R3Ww0Q.js";import"./index-dhKWstfL.js";const q="flow--navigation",O="flow--navigation--item",R="flow--navigation--icon",B="flow--navigation--text",F="flow--navigation--control-icon",l={navigation:q,item:O,icon:R,text:B,controlIcon:F},a=t=>{const{className:d,children:o,...u}=t,g=T(l.navigation,d),i=!!S(o,r),s={Link:{render:(h,W)=>e.createElement("li",null,e.createElement(h,{...W,className:l.item,unstyled:!0})),Text:{className:l.text},Icon:{className:l.icon}}};return e.createElement("nav",{className:g,role:"navigation",...u},e.createElement(y,{props:s},e.createElement(j,{if:!i},e.createElement("ul",null,o))))};a.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const $="flow--navigation--navigation-group",z="flow--navigation--navigation-group--label",w={navigationGroup:$,label:z},r=t=>{const{children:d,className:o,...u}=t,g=T(w.navigationGroup,o),i=v.useId(),s=v.useId(),h={Label:{tunnelId:s,id:i,className:w.label,"aria-hidden":!0}};return e.createElement("section",{"aria-labelledby":i,className:g,...u},e.createElement(y,{mergeInParentContext:!0,props:h},e.createElement(M,{id:s}),e.createElement("ul",null,d)))};r.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",composes:["PropsWithChildren"]};r.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",composes:["PropsWithChildren"]};a.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const ce={title:"Navigation/Navigation",component:a,parameters:{controls:{exclude:["className"]}}},c={render:t=>e.createElement(a,{"aria-label":"Companies",...t},e.createElement(n,{href:"https://www.apple.com"},"Apple"),e.createElement(n,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(n,{href:"https://www.adobe.com"},"Adobe"),e.createElement(n,{href:"https://www.google.com"},"Google"))},m={render:t=>e.createElement(a,{"aria-label":"Main menu",...t},e.createElement(n,null,e.createElement(_,null),e.createElement(f,null,"Customer")),e.createElement(n,{"aria-current":"page"},e.createElement(D,null),e.createElement(f,null,"Server")),e.createElement(n,null,e.createElement(A,null),e.createElement(f,null,"Project")))},p={render:t=>e.createElement(a,{"aria-label":"Main navigation",...t},e.createElement(r,null,e.createElement(E,null,"General"),e.createElement(n,{href:"#"},"Dashboard"),e.createElement(n,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,null,e.createElement(E,null,"Components"),e.createElement(n,{href:"#"},"Apps"),e.createElement(n,{href:"#"},"Databases"),e.createElement(n,{href:"#"},"Domains")))};var N,L,b;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(b=(L=c.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var k,x,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main menu" {...props}>
      <Link>
        <IconCustomer />
        <Text>Customer</Text>
      </Link>
      <Link aria-current="page">
        <IconServer />
        <Text>Server</Text>
      </Link>
      <Link>
        <IconProject />
        <Text>Project</Text>
      </Link>
    </Navigation>
}`,...(I=(x=m.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var C,G,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(P=(G=p.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const me=["Default","WithIcons","WithGroups"];export{c as Default,p as WithGroups,m as WithIcons,me as __namedExportsOrder,ce as default};
