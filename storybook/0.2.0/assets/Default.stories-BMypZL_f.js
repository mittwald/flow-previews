import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as z}from"./index-Cf9XvIV_.js";import"./IconApp-DYEF1khQ.js";import{z as R,c as $,n as B}from"./IconWarning-DAGL0qzm.js";import{T as b}from"./Text-CaginIuu.js";import{L as n}from"./Link-C01lbCyx.js";import{c as q}from"./clsx-B-dksMZM.js";import{P as g}from"./PropsContextProvider-CWFvCxZj.js";import{O as u,k as N}from"./flowComponent-DxoeBNET.js";import{A as F}from"./Accordion-C4ZQPBIX.js";import{C as H}from"./Content-D_KNUpg9.js";import{L as i}from"./Label-CytRHo_R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-BK3pbL47.js";import"./utils-DjOXyFua.js";import"./index-CoqFY4cC.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-lNW0gZrs.js";import"./useFocusRing-CvMz7Q_e.js";import"./useFocusable-CNLx9CCl.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./dynamic-DKDa4OpU.js";import"./Button-5K6As1fH.js";import"./LoadingSpinner-C2VB9MCl.js";import"./Button-D76OI_vo.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Activity-BxqOpB43.js";const J="flow--navigation",K="flow--navigation--item",Q="flow--navigation--icon",U="flow--navigation--control-icon",V="flow--navigation--avatar",c={navigation:J,item:K,switch:"flow--navigation--switch",icon:Q,controlIcon:U,avatar:V},o=r=>{const{className:s,children:f,...t}=r,L=q(c.navigation,s),l={Link:{wrapWith:e.jsx("li",{}),className:c.item,unstyled:!0,Text:{className:c.text},Icon:{className:c.icon},tunnelId:"links"}};return e.jsx("nav",{className:L,role:"navigation",...t,children:e.jsxs(g,{props:l,mergeInParentContext:!0,children:[e.jsx("ul",{children:e.jsx(u,{id:"links"})}),f]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Navigation",composes:["PropsWithChildren","PropsWithClassName"]};const X="flow--navigation--navigation-group",Y="flow--navigation--navigation-group--collapsable",Z="flow--navigation--navigation-group--label",v={navigationGroup:X,collapsable:Y,label:Z},a=r=>{const{children:s,className:f,collapsable:t,...L}=r,l=q(v.navigationGroup,t&&v.collapsable,f),k=z.useId(),j={Label:{id:k,className:v.label,"aria-hidden":!0},Link:{tunnelId:"groupLinks"}};return t?e.jsx(g,{mergeInParentContext:!0,props:j,children:e.jsx(N,{children:e.jsxs(F,{defaultExpanded:!0,className:l,children:[s,e.jsx(H,{clearPropsContext:!1,children:e.jsx("ul",{children:e.jsx(u,{id:"groupLinks"})})})]})})}):e.jsx(g,{mergeInParentContext:!0,props:j,children:e.jsx(N,{children:e.jsx("section",{"aria-labelledby":k,className:l,...L,children:e.jsxs(g,{mergeInParentContext:!0,props:j,children:[s,e.jsx(u,{id:"Label"}),e.jsx("ul",{children:e.jsx(u,{id:"groupLinks"})})]})})})})};a.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Ee={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},p={render:r=>e.jsxs(o,{"aria-label":"Companies",...r,children:[e.jsx(n,{href:"https://www.apple.com",children:"Apple"}),e.jsx(n,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(n,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(n,{href:"https://www.google.com",children:"Google"})]})},d={render:r=>e.jsxs(o,{"aria-label":"Main menu",...r,children:[e.jsxs(n,{children:[e.jsx(R,{}),e.jsx(b,{children:"Customer"})]}),e.jsxs(n,{"aria-current":"page",children:[e.jsx($,{}),e.jsx(b,{children:"Server"})]}),e.jsxs(n,{children:[e.jsx(B,{}),e.jsx(b,{children:"Project"})]})]})},h={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},m={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},x={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"})]})]})};var w,G,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(C=(G=p.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var I,P,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(D=(P=d.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var T,A,M;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,S,y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(y=(S=m.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,E,O;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Oe=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{p as Default,x as MixedGroups,m as WithCollapsableGroups,h as WithGroups,d as WithIcons,Oe as __namedExportsOrder,Ee as default};
