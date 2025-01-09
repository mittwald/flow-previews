import{R as e,r as R}from"./index-BbMBc-iG.js";import"./IconApp-B_zPpa1A.js";import{F,c as H,f as $}from"./IconWarning-CceziLlX.js";import{T as v}from"./Text-D6naXSDy.js";import{L as a}from"./Link-DA4krcor.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as L}from"./PropsContextProvider-BgoMLKZk.js";import{P as w,O as k}from"./flowComponent-CaEd1ouJ.js";import{A as z}from"./Accordion-hX4camQQ.js";import{C as B}from"./Content-BbJKCc-f.js";import{W as J}from"./Wrap-DQq6jo70.js";import{d as K}from"./deepHas-C0IqBpIg.js";import{L as r}from"./Label-D6uleru1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./react-children-utilities-BBO5HXrA.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Text-oWh285ma.js";import"./utils-D4Vol65q.js";import"./index-CPTjWdH1.js";import"./index-U7Evrs-N.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-DotMbixf.js";import"./useFocusRing-DA2rHHrb.js";import"./useFocusable-BA3lYSOI.js";import"./dynamic-DKDa4OpU.js";import"./Button-1rw05oyV.js";import"./LoadingSpinner-y4xqeSCe.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Activity-BsnWhEMj.js";const Q="flow--navigation",U="flow--navigation--item",V="flow--navigation--icon",X="flow--navigation--text",Y="flow--navigation--control-icon",Z="flow--navigation--avatar",p={navigation:Q,item:U,switch:"flow--navigation--switch",icon:V,text:X,controlIcon:Y,avatar:Z},o=n=>{const{className:i,children:l,...s}=n,E=O(p.navigation,i),c=K(l,t),m={Link:{wrapWith:e.createElement("li",null),className:p.item,unstyled:!0,Text:{className:p.text},Icon:{className:p.icon}}};return e.createElement("nav",{className:E,role:"navigation",...s},e.createElement(L,{props:m,mergeInParentContext:!0},e.createElement(J,{if:!c},e.createElement("ul",null,l))))};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."}},composes:["PropsWithChildren"]};const ee="flow--navigation--navigation-group",ae="flow--navigation--navigation-group--collapsable",ne="flow--navigation--navigation-group--label",N={navigationGroup:ee,collapsable:ae,label:ne},t=n=>{const{children:i,className:l,collapsable:s,...E}=n,c=O(N.navigationGroup,s&&N.collapsable,l),m=R.useId(),b={Label:{id:m,className:N.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return s?e.createElement(L,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement(z,{defaultExpanded:!0,className:c},i,e.createElement(B,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(k,{id:"links"})))))):e.createElement(L,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement("section",{"aria-labelledby":m,className:c,...E},e.createElement(L,{mergeInParentContext:!0,props:b},i,e.createElement(k,{id:"Label"}),e.createElement("ul",null,e.createElement(k,{id:"links"}))))))};t.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Re={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},u={render:n=>e.createElement(o,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},g={render:n=>e.createElement(o,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement(F,null),e.createElement(v,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement(H,null),e.createElement(v,null,"Server")),e.createElement(a,null,e.createElement($,null),e.createElement(v,null,"Project")))},f={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},d={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},h={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite")))};var G,x,C;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
