import{j as e}from"./iframe-B9DmQEvm.js";import{a7 as m,W as d,a2 as L}from"./IconWarning-DHbLseiS.js";import{T as h}from"./Text-DWnECR1V.js";import{L as r}from"./Link-DZQzqDqQ.js";import{N as o,a}from"./NavigationGroup-bOs2Paa-.js";import{L as i}from"./Label-CdjTRCcN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./remote-pOc8vwOE.js";import"./browser-B5MMVHjZ.js";import"./utils-Oe4-zNeB.js";import"./EmulatedBoldText-CcFQw1kW.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./context-f4__Yrtg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./Accordion-D4jAtFpD.js";import"./dynamic-D9zzs7eg.js";import"./Button-Dm4Gj0Ue.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./Content-JADEg-IW.js";const F={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>e.jsxs(o,{"aria-label":"Companies",...n,children:[e.jsx(r,{href:"https://www.apple.com",children:"Apple"}),e.jsx(r,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(r,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(r,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>e.jsxs(o,{"aria-label":"Main menu",...n,children:[e.jsxs(r,{children:[e.jsx(m,{}),e.jsx(h,{children:"Customer"})]}),e.jsxs(r,{"aria-current":"page",children:[e.jsx(d,{}),e.jsx(h,{children:"Server"})]}),e.jsxs(r,{children:[e.jsx(L,{}),e.jsx(h,{children:"Project"})]})]})},p={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},l={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},c={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const H=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{s as Default,c as MixedGroups,l as WithCollapsableGroups,p as WithGroups,t as WithIcons,H as __namedExportsOrder,F as default};
