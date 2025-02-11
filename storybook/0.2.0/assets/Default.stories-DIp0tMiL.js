import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-BZISi7jw.js";import"./IconApp-CvS4gYeI.js";import{A as $,d as z,o as B}from"./IconWarning-DAd9lBo7.js";import{T as b}from"./Text-DydX6P1D.js";import{L as n}from"./Link-DN83aF9R.js";import{c as O}from"./clsx-B-dksMZM.js";import{P as u}from"./PropsContextProvider-CnD-oO9S.js";import{S as g,A as N}from"./flowComponent-C3EXXnsB.js";import{A as F}from"./Accordion-tyrPm_NR.js";import{C as H}from"./Content-BJeTMXn-.js";import{L as i}from"./Label-CyCuQBvx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./index-IBhSrjl6.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DZCrAIzv.js";import"./useFocusRing-DzGSygZM.js";import"./useFocusable-CdO2YIL_.js";import"./index-DdDGTNSf.js";import"./index-C0qn59OO.js";import"./dynamic-DKDa4OpU.js";import"./Button-Cr64kAxY.js";import"./LoadingSpinner-DsriZvYV.js";import"./Button-DrJb4gk9.js";import"./ProgressBar-CZau9lss.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-DrXcoKbv.js";const J="flow--navigation",K="flow--navigation--item",Q="flow--navigation--icon",p={navigation:J,item:K,icon:Q},o=r=>{const{className:s,children:f,...t}=r,L=O(p.navigation,s),l={Link:{wrapWith:e.jsx("li",{}),className:p.item,unstyled:!0,Text:{className:p.text},Icon:{className:p.icon},tunnelId:"links"}};return e.jsx("nav",{className:L,role:"navigation",...t,children:e.jsxs(u,{props:l,mergeInParentContext:!0,children:[e.jsx("ul",{children:e.jsx(g,{id:"links"})}),f]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Navigation",composes:["PropsWithChildren","PropsWithClassName"]};const U="flow--navigation--navigation-group",V="flow--navigation--navigation-group--collapsable",X="flow--navigation--navigation-group--label",k={navigationGroup:U,collapsable:V,label:X},a=r=>{const{children:s,className:f,collapsable:t,...L}=r,l=O(k.navigationGroup,t&&k.collapsable,f),v=R.useId(),j={Label:{id:v,className:k.label,"aria-hidden":!0},Link:{tunnelId:"groupLinks"}};return t?e.jsx(u,{mergeInParentContext:!0,props:j,children:e.jsx(N,{children:e.jsxs(F,{defaultExpanded:!0,className:l,children:[s,e.jsx(H,{clearPropsContext:!1,children:e.jsx("ul",{children:e.jsx(g,{id:"groupLinks"})})})]})})}):e.jsx(u,{mergeInParentContext:!0,props:j,children:e.jsx(N,{children:e.jsx("section",{"aria-labelledby":v,className:l,...L,children:e.jsxs(u,{mergeInParentContext:!0,props:j,children:[s,e.jsx(g,{id:"Label"}),e.jsx("ul",{children:e.jsx(g,{id:"groupLinks"})})]})})})})};a.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const ye={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},c={render:r=>e.jsxs(o,{"aria-label":"Companies",...r,children:[e.jsx(n,{href:"https://www.apple.com",children:"Apple"}),e.jsx(n,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(n,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(n,{href:"https://www.google.com",children:"Google"})]})},d={render:r=>e.jsxs(o,{"aria-label":"Main menu",...r,children:[e.jsxs(n,{children:[e.jsx($,{}),e.jsx(b,{children:"Customer"})]}),e.jsxs(n,{"aria-current":"page",children:[e.jsx(z,{}),e.jsx(b,{children:"Server"})]}),e.jsxs(n,{children:[e.jsx(B,{}),e.jsx(b,{children:"Project"})]})]})},m={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},h={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},x={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"})]})]})};var w,G,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(C=(G=c.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var P,D,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,A,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(A=m.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var S,W,y;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(W=h.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var _,E,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(E=x.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};const _e=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{c as Default,x as MixedGroups,h as WithCollapsableGroups,m as WithGroups,d as WithIcons,_e as __namedExportsOrder,ye as default};
