import{R as e,r as B}from"./index-Cs7sjTYM.js";import"./IconApp-DqdQf8xk.js";import{A as F,c as J,e as K}from"./IconWarning-Bz8aDAH7.js";import{T as k}from"./Text-Kq1Uppf8.js";import{L as a}from"./Link-jn5gxHTR.js";import{c as z}from"./clsx-B-dksMZM.js";import{P as E}from"./PropsContextProvider-CRusYdr1.js";import{P as w,O as N}from"./flowComponent-ioG1zo33.js";import{A as Q}from"./Accordion-Cf4iSfTk.js";import{C as U}from"./Content-BaT5-SuQ.js";import{W as V}from"./Wrap-DQq6jo70.js";import{d as X}from"./deepHas-C3achdHB.js";import{L as t}from"./Label-BjTAT_L8.js";import{S as Y}from"./Separator-DjnnN6s2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";import"./utils-Cd8r7pc9.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Dcn7RY69.js";import"./useFocusRing-CqFdZJbR.js";import"./useFocusable-CKybZYMg.js";import"./dynamic-DKDa4OpU.js";import"./Button-BWPqBSre.js";import"./LoadingSpinner-CEUYaNew.js";import"./Button-DKDQv6qd.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-uBW5QVzV.js";import"./react-children-utilities-CdZndyK3.js";import"./Separator-ZOqStrt8.js";import"./CollectionBuilder-B4BE-ZOx.js";const Z="flow--navigation",ee="flow--navigation--item",ae="flow--navigation--icon",ne="flow--navigation--text",re="flow--navigation--control-icon",te="flow--navigation--avatar",m={navigation:Z,item:ee,icon:ae,text:ne,controlIcon:re,avatar:te},o=n=>{const{className:i,children:l,...s}=n,b=z(m.navigation,i),c=X(l,r),p={Link:{wrapWith:e.createElement("li",null),className:m.item,unstyled:!0,Text:{className:m.text},Icon:{className:m.icon}}};return e.createElement("nav",{className:b,role:"navigation",...s},e.createElement(E,{props:p,mergeInParentContext:!0},e.createElement(V,{if:!c},e.createElement("ul",null,l))))};o.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const oe="flow--navigation--navigation-group",ie="flow--navigation--navigation-group--collapsable",le="flow--navigation--navigation-group--label",G={navigationGroup:oe,collapsable:ie,label:le},r=n=>{const{children:i,className:l,collapsable:s,...b}=n,c=z(G.navigationGroup,s&&G.collapsable,l),p=B.useId(),v={Label:{id:p,className:G.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return s?e.createElement(E,{mergeInParentContext:!0,props:v},e.createElement(w,null,e.createElement(Q,{defaultExpanded:!0,className:c},i,e.createElement(U,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(N,{id:"links"})))))):e.createElement(E,{mergeInParentContext:!0,props:v},e.createElement(w,null,e.createElement("section",{"aria-labelledby":p,className:c,...b},e.createElement(E,{mergeInParentContext:!0,props:v},i,e.createElement(N,{id:"Label"}),e.createElement("ul",null,e.createElement(N,{id:"links"}))))))};r.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Ke={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},u={render:n=>e.createElement(o,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},g={render:n=>e.createElement(o,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement(F,null),e.createElement(k,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement(J,null),e.createElement(k,null,"Server")),e.createElement(a,null,e.createElement(K,null),e.createElement(k,null,"Project")))},f={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,null,e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},d={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(Y,null),e.createElement(r,null,e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},h={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(r,{collapsable:!0},e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,{collapsable:!0},e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},L={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(r,{collapsable:!0},e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,null,e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")),e.createElement(r,{collapsable:!0},e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite")))};var C,x,D;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(D=(x=u.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var P,I,T;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,S,W;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(S=f.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var M,y,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var j,q,O;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(q=h.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,H,$;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup collapsable>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>

      <NavigationGroup collapsable>
        <Label>Components</Label>
        <Link href="#">Testsite</Link>
        <Link href="#">Testsite</Link>
        <Link href="#">Testsite</Link>
      </NavigationGroup>
    </Navigation>
}`,...($=(H=L.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const Qe=["Default","WithIcons","WithGroups","WithSeparator","WithCollapsableGroups","MixedGroups"];export{u as Default,L as MixedGroups,h as WithCollapsableGroups,f as WithGroups,g as WithIcons,d as WithSeparator,Qe as __namedExportsOrder,Ke as default};
