import{R as e,r as R}from"./index-B-o1Wr-g.js";import"./IconApp--rto3B0B.js";import{F,c as H,f as $}from"./IconWarning-C7RtCnUV.js";import{T as v}from"./Text-DPEzzey4.js";import{L as a}from"./Link-Du1HWJ4e.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as L}from"./PropsContextProvider-BHq6Fnml.js";import{P as w,O as k}from"./flowComponent-SXQnFwcy.js";import{A as z}from"./Accordion-CSyvSCZg.js";import{C as B}from"./Content-BRrO9N7C.js";import{W as J}from"./Wrap-DQq6jo70.js";import{d as K}from"./deepHas-qlU7dqTi.js";import{L as r}from"./Label-BFoBZBqy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./utils-CCebJm36.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-CjESOWAx.js";import"./dynamic-DKDa4OpU.js";import"./Button-TH90Unv1.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-BWfzpBOU.js";import"./react-children-utilities-D14ImiYi.js";const Q="flow--navigation",U="flow--navigation--item",V="flow--navigation--icon",X="flow--navigation--text",Y="flow--navigation--control-icon",Z="flow--navigation--avatar",p={navigation:Q,item:U,switch:"flow--navigation--switch",icon:V,text:X,controlIcon:Y,avatar:Z},o=n=>{const{className:i,children:l,...s}=n,E=O(p.navigation,i),c=K(l,t),m={Link:{wrapWith:e.createElement("li",null),className:p.item,unstyled:!0,Text:{className:p.text},Icon:{className:p.icon}}};return e.createElement("nav",{className:E,role:"navigation",...s},e.createElement(L,{props:m,mergeInParentContext:!0},e.createElement(J,{if:!c},e.createElement("ul",null,l))))};o.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."}},composes:["PropsWithChildren"]};const ee="flow--navigation--navigation-group",ae="flow--navigation--navigation-group--collapsable",ne="flow--navigation--navigation-group--label",N={navigationGroup:ee,collapsable:ae,label:ne},t=n=>{const{children:i,className:l,collapsable:s,...E}=n,c=O(N.navigationGroup,s&&N.collapsable,l),m=R.useId(),b={Label:{id:m,className:N.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return s?e.createElement(L,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement(z,{defaultExpanded:!0,className:c},i,e.createElement(B,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(k,{id:"links"})))))):e.createElement(L,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement("section",{"aria-labelledby":m,className:c,...E},e.createElement(L,{mergeInParentContext:!0,props:b},i,e.createElement(k,{id:"Label"}),e.createElement("ul",null,e.createElement(k,{id:"links"}))))))};t.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Re={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},u={render:n=>e.createElement(o,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},g={render:n=>e.createElement(o,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement(F,null),e.createElement(v,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement(H,null),e.createElement(v,null,"Server")),e.createElement(a,null,e.createElement($,null),e.createElement(v,null,"Project")))},f={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},d={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},h={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite")))};var G,x,C;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,D,I;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,A,W;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(A=f.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var M,S,y;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,j,q;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(j=h.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const Fe=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{u as Default,h as MixedGroups,d as WithCollapsableGroups,f as WithGroups,g as WithIcons,Fe as __namedExportsOrder,Re as default};
