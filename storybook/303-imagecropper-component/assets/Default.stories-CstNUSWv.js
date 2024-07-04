import{R as e,r as R}from"./index-BwDkhjyp.js";import"./IconApp-C-B10zNi.js";import{t as F,u as $,i as z}from"./IconWarning-D08KcEGW.js";import{T as v}from"./Text-OHQxmlAI.js";import{L as a}from"./Link-DnpH0ML6.js";import{c as O}from"./clsx-B-dksMZM.js";import{d as B}from"./deepFindOfType-CmKNZ8si.js";import{P as h}from"./PropsContextProvider-DR_AoDrQ.js";import{M as N,P as k}from"./flowComponent-pf1ZT_RA.js";import{A as H}from"./Accordion-BtSL15Sg.js";import{C as J}from"./Content-D12a__op.js";import{W as K}from"./Wrap-DQq6jo70.js";import{L as o}from"./Label-DqyDhkXf.js";import{S as Q}from"./Separator-rF9M-VlY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";import"./utils-_0I8Kdxf.js";import"./index-D1Z7wIYD.js";import"./index-B8XB3FuZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CipJ8IEr.js";import"./useFocusable-Di1f8vLw.js";import"./react-children-utilities-CseWD4BL.js";import"./dynamic-DKDa4OpU.js";import"./Button-CGYujOOx.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Button-j9P20aTv.js";import"./Activity-DsHdYeGi.js";import"./Label-BbJlieEf.js";import"./Separator-DAfHJ8px.js";import"./Collection-BUjDbYEY.js";const U="flow--navigation",V="flow--navigation--item",X="flow--navigation--icon",Y="flow--navigation--text",Z="flow--navigation--control-icon",m={navigation:U,item:V,icon:X,text:Y,controlIcon:Z},t=n=>{const{className:i,children:l,...E}=n,L=O(m.navigation,i),s=!!B(l,r),c={Link:{wrapWith:e.createElement("li",null),className:m.item,unstyled:!0,Text:{className:m.text},Icon:{className:m.icon}}};return e.createElement("nav",{className:L,role:"navigation",...E},e.createElement(h,{props:c,mergeInParentContext:!0},e.createElement(K,{if:!s},e.createElement("ul",null,l))))};t.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["PropsWithChildren"]};const ee="flow--navigation--navigation-group",ae="flow--navigation--navigation-group--label",w={navigationGroup:ee,label:ae},r=n=>{const{children:i,className:l,collapsable:E,...L}=n,s=O(w.navigationGroup,l),c=R.useId(),b={Label:{id:c,className:w.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return E?e.createElement(h,{mergeInParentContext:!0,props:b},e.createElement(N,null,e.createElement(H,{defaultExpanded:!0,className:s},i,e.createElement(J,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(k,{id:"links"})))))):e.createElement(h,{mergeInParentContext:!0,props:b},e.createElement(N,null,e.createElement("section",{"aria-labelledby":c,className:s,...L},e.createElement(h,{mergeInParentContext:!0,props:b},i,e.createElement(k,{id:"Label"}),e.createElement("ul",null,e.createElement(k,{id:"links"}))))))};r.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Me={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},p={render:n=>e.createElement(t,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},u={render:n=>e.createElement(t,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement(F,null),e.createElement(v,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement($,null),e.createElement(v,null,"Server")),e.createElement(a,null,e.createElement(z,null),e.createElement(v,null,"Project")))},d={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,null,e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},g={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,null,e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(Q,null),e.createElement(r,null,e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},f={render:n=>e.createElement(t,{"aria-label":"Main navigation",...n},e.createElement(r,{collapsable:!0},e.createElement(o,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(r,{collapsable:!0},e.createElement(o,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))};var G,C,x;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var S,W,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var T,y,M;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(y=g.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var _,j,q;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const _e=["Default","WithIcons","WithGroups","WithSeparator","WithCollapsableGroups"];export{p as Default,f as WithCollapsableGroups,d as WithGroups,u as WithIcons,g as WithSeparator,_e as __namedExportsOrder,Me as default};
