import{R as e,r as R}from"./index-Cs7sjTYM.js";import"./IconApp-Cq7w81Gv.js";import{x as H,y as $,c as z}from"./IconWarning-CJaqzhMN.js";import{T as v}from"./Text-34Ntf1C-.js";import{L as a}from"./Link-czJ5iA8c.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as h}from"./PropsContextProvider-CRusYdr1.js";import{P as N,O as k}from"./flowComponent-aK1NJH1f.js";import{A as B}from"./Accordion-DswOOOz5.js";import{C as F}from"./Content-Cv42N3s-.js";import{W as J}from"./Wrap-DQq6jo70.js";import{d as K}from"./deepHas-C3achdHB.js";import{L as o}from"./Label-Caz8bPl_.js";import{S as Q}from"./Separator-CjN-M4fA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";import"./utils-Cd8r7pc9.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dcn7RY69.js";import"./useFocusRing-CqFdZJbR.js";import"./useFocusable-CKybZYMg.js";import"./dynamic-DKDa4OpU.js";import"./Button-BeM2fd8M.js";import"./LoadingSpinner-BTjqfxYI.js";import"./Button-DKDQv6qd.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-Cr-Aqo1o.js";import"./react-children-utilities-CdZndyK3.js";import"./Separator-ZOqStrt8.js";import"./CollectionBuilder-B4BE-ZOx.js";const U="flow--navigation",V="flow--navigation--item",X="flow--navigation--icon",Y="flow--navigation--text",Z="flow--navigation--control-icon",c={navigation:U,item:V,icon:X,text:Y,controlIcon:Z},t=n=>{const{className:i,children:l,...E}=n,L=O(c.navigation,i),s=K(l,r),m={Link:{wrapWith:e.createElement("li",null),className:c.item,unstyled:!0,Text:{className:c.text},Icon:{className:c.icon}}};return e.createElement("nav",{className:L,role:"navigation",...E},e.createElement(h,{props:m,mergeInParentContext:!0},e.createElement(J,{if:!s},e.createElement("ul",null,l))))};t.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const ee="flow--navigation--navigation-group",ae="flow--navigation--navigation-group--label",w={navigationGroup:ee,label:ae},r=n=>{const{children:i,className:l,collapsable:E,...L}=n,s=O(w.navigationGroup,l),m=R.useId(),b={Label:{id:m,className:w.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return E?e.createElement(h,{mergeInParentContext:!0,props:b},e.createElement(N,null,e.createElement(B,{defaultExpanded:!0,className:s},i,e.createElement(F,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(k,{id:"links"})))))):e.createElement(h,{mergeInParentContext:!0,props:b},e.createElement(N,null,e.createElement("section",{"aria-labelledby":m,className:s,...L},e.createElement(h,{mergeInParentContext:!0,props:b},i,e.createElement(k,{id:"Label"}),e.createElement("ul",null,e.createElement(k,{id:"links"}))))))};r.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const He={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},p={render:n=>e.createElement(t,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},u={render:n=>e.createElement(t,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement(H,null),e.createElement(v,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement($,null),e.createElement(v,null,"Server")),e.createElement(a,null,e.createElement(z,null),e.createElement(v,null,"Project")))},g={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,null,e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},d={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(Q,null),e.createElement(r,null,e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},f={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,{collapsable:!0},e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,{collapsable:!0},e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))};var G,C,x;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(x=(C=p.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var P,D,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,W,A;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(W=g.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var T,y,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <Separator />

      <NavigationGroup>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(M=(y=d.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var _,j,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup collapsable>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup collapsable>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const $e=["Default","WithIcons","WithGroups","WithSeparator","WithCollapsableGroups"];export{p as Default,f as WithCollapsableGroups,g as WithGroups,u as WithIcons,d as WithSeparator,$e as __namedExportsOrder,He as default};