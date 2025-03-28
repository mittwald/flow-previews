import{R as e,r as R}from"./index-B-o1Wr-g.js";import"./IconApp-3W3XzCjg.js";import{E as $,d as z,o as B}from"./IconWarning-DPCXsjOp.js";import{T as v}from"./Text-9mML8Z29.js";import{L as a}from"./Link-0AxiFhT_.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as f}from"./PropsContextProvider-BHq6Fnml.js";import{O as h,P as w}from"./flowComponent-Bz6Io0hO.js";import{A as F}from"./Accordion-CvBpLO0-.js";import{C as H}from"./Content-Cg8Hfq9T.js";import{L as r}from"./Label-YqoRtSRe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-R-rrVGxo.js";import"./utils-7gTBvjqH.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-BXVt7Q_3.js";import"./dynamic-DKDa4OpU.js";import"./Button-BdwkYmUJ.js";import"./LoadingSpinner-DrWRflEB.js";import"./Button-fHRiK0T5.js";import"./ProgressBar--OmPGqUT.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-BWfzpBOU.js";const J="flow--navigation",K="flow--navigation--item",Q="flow--navigation--icon",U="flow--navigation--control-icon",V="flow--navigation--avatar",c={navigation:J,item:K,switch:"flow--navigation--switch",icon:Q,controlIcon:U,avatar:V},o=n=>{const{className:i,children:L,...l}=n,E=O(c.navigation,i),s={Link:{wrapWith:e.createElement("li",null),className:c.item,unstyled:!0,Text:{className:c.text},Icon:{className:c.icon},tunnelId:"links"}};return e.createElement("nav",{className:E,role:"navigation",...l},e.createElement(f,{props:s,mergeInParentContext:!0},e.createElement("ul",null,e.createElement(h,{id:"links"})),L))};o.__docgenInfo={description:"",methods:[],displayName:"Navigation",props:{className:{required:!1,tsType:{name:"string"},description:"The elements class name."}},composes:["PropsWithChildren"]};const X="flow--navigation--navigation-group",Y="flow--navigation--navigation-group--collapsable",Z="flow--navigation--navigation-group--label",k={navigationGroup:X,collapsable:Y,label:Z},t=n=>{const{children:i,className:L,collapsable:l,...E}=n,s=O(k.navigationGroup,l&&k.collapsable,L),N=R.useId(),b={Label:{id:N,className:k.label,"aria-hidden":!0},Link:{tunnelId:"groupLinks"}};return l?e.createElement(f,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement(F,{defaultExpanded:!0,className:s},i,e.createElement(H,{clearPropsContext:!1},e.createElement("ul",null,e.createElement(h,{id:"groupLinks"})))))):e.createElement(f,{mergeInParentContext:!0,props:b},e.createElement(w,null,e.createElement("section",{"aria-labelledby":N,className:s,...E},e.createElement(f,{mergeInParentContext:!0,props:b},i,e.createElement(h,{id:"Label"}),e.createElement("ul",null,e.createElement(h,{id:"groupLinks"}))))))};t.__docgenInfo={description:"",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const _e={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},p={render:n=>e.createElement(o,{"aria-label":"Companies",...n},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},m={render:n=>e.createElement(o,{"aria-label":"Main menu",...n},e.createElement(a,null,e.createElement($,null),e.createElement(v,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement(z,null),e.createElement(v,null,"Server")),e.createElement(a,null,e.createElement(B,null),e.createElement(v,null,"Project")))},u={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},g={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},d={render:n=>e.createElement(o,{"aria-label":"Main navigation",...n},e.createElement(t,{collapsable:!0},e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(t,null,e.createElement(r,null,"General"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")),e.createElement(t,{collapsable:!0},e.createElement(r,null,"Components"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite"),e.createElement(a,{href:"#"},"Testsite")))};var G,C,x;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(x=(C=p.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var I,P,D;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(P=m.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,A,M;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var S,W,y;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var _,j,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(j=d.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const je=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{p as Default,d as MixedGroups,g as WithCollapsableGroups,u as WithGroups,m as WithIcons,je as __namedExportsOrder,_e as default};
