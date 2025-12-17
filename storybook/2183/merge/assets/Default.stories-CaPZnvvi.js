import{j as e,r as I}from"./iframe-BoCc-iJU.js";import{c as D,a as M}from"./IconApp-C2RMdkv5.js";import{I as y}from"./IconProject-B7XDODCn.js";import{I as P}from"./IconServer-Bu2IVIqM.js";import{T as f}from"./Text-CxsQklp2.js";import{L as n}from"./Link-DnmLO2gK.js";import{c as w}from"./clsx-B-dksMZM.js";import{f as G,P as v,N as k,R as b}from"./flowComponent-aIKmACWg.js";import{L as i}from"./Label-DGwnCcrv.js";import{A as T}from"./Accordion-NGt6ZcAj.js";import{C as A}from"./Content-XgYiWb_X.js";import"./preload-helper-PPVm8Dsz.js";import"./remote-DSbtRD5R.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./utils-P0pc5_a9.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./IconDownload-BjOEhnZl.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./Label.module-CUYTf9Jc.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./dynamic-CBUiQ56u.js";import"./Button-XooD-Xiy.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./IconChevronDown-D9tEXZzD.js";import"./Activity-8n8QGwNb.js";const _=[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]],S=D("outline","building","Building",_),C=r=>e.jsx(M,{...r,children:e.jsx(S,{})});C.__docgenInfo={description:"",methods:[],displayName:"IconCustomer"};const W="flow--navigation",E="flow--navigation--item",R="flow--navigation--icon",j={navigation:W,item:E,icon:R},o=G("Navigation",r=>{const{className:t,children:u,ref:l,...x}=r,p=w(j.navigation,t),s={wrapWith:e.jsx("li",{}),className:j.item,unstyled:!0,Icon:{className:j.icon}};return e.jsx(v,{props:{Link:{...s,tunnelId:"links"},NavigationGroup:{Link:s}},children:e.jsx(k,{children:e.jsxs("nav",{className:p,role:"navigation",...x,ref:l,children:[e.jsx("ul",{children:e.jsx(b,{id:"links"})}),u]})})})});o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Navigation"};const B="flow--navigation--navigation-group",O="flow--navigation--navigation-group--collapsable",V="flow--navigation--navigation-group--label",L={navigationGroup:B,collapsable:O,label:V},a=G("NavigationGroup",r=>{const{children:t,className:u,collapsable:l,...x}=r,p=w(L.navigationGroup,l&&L.collapsable,u),s=I.useId(),N={Label:{id:s,className:L.label},Link:{tunnelId:"groupLinks"}};return l?e.jsx(v,{props:N,children:e.jsx(k,{children:e.jsxs(T,{defaultExpanded:!0,className:p,children:[t,e.jsx(A,{children:e.jsx("ul",{children:e.jsx(b,{id:"groupLinks"})})})]})})}):e.jsx(v,{props:N,children:e.jsx(k,{children:e.jsxs("section",{"aria-labelledby":s,className:p,...x,children:[t,e.jsx("ul",{children:e.jsx(b,{id:"groupLinks"})})]})})})});a.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"NavigationGroup"};const Pe={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},c={render:r=>e.jsxs(o,{"aria-label":"Companies",...r,children:[e.jsx(n,{href:"https://www.apple.com",children:"Apple"}),e.jsx(n,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(n,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(n,{href:"https://www.google.com",children:"Google"})]})},d={render:r=>e.jsxs(o,{"aria-label":"Main menu",...r,children:[e.jsxs(n,{children:[e.jsx(C,{}),e.jsx(f,{children:"Customer"})]}),e.jsxs(n,{"aria-current":"page",children:[e.jsx(P,{}),e.jsx(f,{children:"Server"})]}),e.jsxs(n,{children:[e.jsx(y,{}),e.jsx(f,{children:"Project"})]})]})},h={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},m={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]})]})},g={render:r=>e.jsxs(o,{"aria-label":"Main navigation",...r,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Dashboard"}),e.jsx(n,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(n,{href:"#",children:"Apps"}),e.jsx(n,{href:"#",children:"Databases"}),e.jsx(n,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"}),e.jsx(n,{href:"#",children:"Testsite"})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Te=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{c as Default,g as MixedGroups,m as WithCollapsableGroups,h as WithGroups,d as WithIcons,Te as __namedExportsOrder,Pe as default};
