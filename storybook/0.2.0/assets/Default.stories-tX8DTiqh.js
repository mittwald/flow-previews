import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as F}from"./index-Cf9XvIV_.js";import"./IconApp-DoH4uGTw.js";import{F as H,c as R,f as $}from"./IconWarning--dCRo9Au.js";import{T as b}from"./Text-CISO88fp.js";import{L as r}from"./Link-jw9GFn8F.js";import{c as q}from"./clsx-B-dksMZM.js";import{P as f}from"./PropsContextProvider-CWFvCxZj.js";import{k as N,O as v}from"./flowComponent-CGvK_9lq.js";import{A as z}from"./Accordion-BOHl03hS.js";import{C as B}from"./Content-D-_uD6v5.js";import{W as J}from"./Wrap-DQq6jo70.js";import{d as K}from"./deepHas-BJtwnIX5.js";import{L as i}from"./Label-wJy7v2v_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./react-children-utilities-C_p-_B4N.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-y-0OLV69.js";import"./Text-DUOeOfAn.js";import"./utils-DbIpkr2E.js";import"./index-CoqFY4cC.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-6Arr-Ydv.js";import"./useFocusRing-Jnne1fGl.js";import"./useFocusable-DSRH2vY_.js";import"./dynamic-DKDa4OpU.js";import"./Button-D4koA9OF.js";import"./LoadingSpinner-DuhR3UMI.js";import"./Button-Cft9vso-.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Activity-zbaAc-K6.js";const Q="flow--src--navigation",U="flow--src--navigation--item",V="flow--src--navigation--icon",X="flow--src--navigation--text",Y="flow--src--navigation--control-icon",Z="flow--src--navigation--avatar",m={navigation:Q,item:U,switch:"flow--src--navigation--switch",icon:V,text:X,controlIcon:Y,avatar:Z},o=n=>{const{className:s,children:t,...l}=n,j=q(m.navigation,s),c=K(t,a),p={Link:{wrapWith:e.jsx("li",{}),className:m.item,unstyled:!0,Text:{className:m.text},Icon:{className:m.icon}}};return e.jsx("nav",{className:j,role:"navigation",...l,children:e.jsx(f,{props:p,mergeInParentContext:!0,children:e.jsx(J,{if:!c,children:e.jsx("ul",{children:t})})})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Navigation",composes:["PropsWithChildren","PropsWithClassName"]};const ee="flow--src--navigation--navigation-group",re="flow--src--navigation--navigation-group--collapsable",ne="flow--src--navigation--navigation-group--label",k={navigationGroup:ee,collapsable:re,label:ne},a=n=>{const{children:s,className:t,collapsable:l,...j}=n,c=q(k.navigationGroup,l&&k.collapsable,t),p=F.useId(),L={Label:{id:p,className:k.label,"aria-hidden":!0},Link:{tunnelId:"links"}};return l?e.jsx(f,{mergeInParentContext:!0,props:L,children:e.jsx(N,{children:e.jsxs(z,{defaultExpanded:!0,className:c,children:[s,e.jsx(B,{clearPropsContext:!1,children:e.jsx("ul",{children:e.jsx(v,{id:"links"})})})]})})}):e.jsx(f,{mergeInParentContext:!0,props:L,children:e.jsx(N,{children:e.jsx("section",{"aria-labelledby":p,className:c,...j,children:e.jsxs(f,{mergeInParentContext:!0,props:L,children:[s,e.jsx(v,{id:"Label"}),e.jsx("ul",{children:e.jsx(v,{id:"links"})})]})})})})};a.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"NavigationGroup",props:{collapsable:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PropsWithChildren"]};const Re={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},d={render:n=>e.jsxs(o,{"aria-label":"Companies",...n,children:[e.jsx(r,{href:"https://www.apple.com",children:"Apple"}),e.jsx(r,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(r,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(r,{href:"https://www.google.com",children:"Google"})]})},h={render:n=>e.jsxs(o,{"aria-label":"Main menu",...n,children:[e.jsxs(r,{children:[e.jsx(H,{}),e.jsx(b,{children:"Customer"})]}),e.jsxs(r,{"aria-current":"page",children:[e.jsx(R,{}),e.jsx(b,{children:"Server"})]}),e.jsxs(r,{children:[e.jsx($,{}),e.jsx(b,{children:"Project"})]})]})},x={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},g={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},u={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"})]})]})};var w,G,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(C=(G=d.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var P,D,I;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(D=h.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,A,W;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(W=(A=x.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var M,S,y;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(y=(S=g.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var _,E,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const $e=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{d as Default,u as MixedGroups,g as WithCollapsableGroups,x as WithGroups,h as WithIcons,$e as __namedExportsOrder,Re as default};
