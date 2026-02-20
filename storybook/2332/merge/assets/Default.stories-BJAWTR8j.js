import{j as e}from"./iframe-Bas3a7fO.js";import{ab as d,Z as L,a6 as f}from"./IconWarning-9FMOeqa7.js";import{T as m}from"./Text-D06q46lu.js";import{L as r}from"./Link-CvzlSJYo.js";import{N as o,a}from"./NavigationGroup-BPV53K0J.js";import{L as i}from"./Label-QWyaEZ02.js";import{B as x}from"./Badge-BXnBihAe.js";import{C as u}from"./CounterBadge-rnEqBlnT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./index-CuTcGtc9.js";import"./remote-CQRN9i7s.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./utils-eswKxOcw.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BpOhXbga.js";import"./usePress-BXALpkIT.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./Accordion-DAAYF80U.js";import"./dynamic-CtBYvx23.js";import"./Button-CCev3q47.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-DHCempQt.js";import"./Content-jsO27phX.js";import"./Label.module-CUYTf9Jc.js";const ae={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>e.jsxs(o,{"aria-label":"Companies",...n,children:[e.jsx(r,{href:"https://www.apple.com",children:"Apple"}),e.jsx(r,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(r,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(r,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>e.jsxs(o,{"aria-label":"Main menu",...n,children:[e.jsxs(r,{children:[e.jsx(d,{}),e.jsx(m,{children:"Customer"})]}),e.jsxs(r,{"aria-current":"page",children:[e.jsx(L,{}),e.jsx(m,{children:"Server"})]}),e.jsxs(r,{children:[e.jsx(f,{}),e.jsx(m,{children:"Project"})]})]})},p={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},l={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},c={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"})]})]})},h={render:n=>e.jsxs(o,{"aria-label":"Navigation",...n,children:[e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsxs(r,{href:"#",children:["Domains",e.jsx(x,{children:"New"})]}),e.jsxs(r,{href:"#",children:["Notifications",e.jsx(u,{count:3})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Navigation" {...props}>
      <Link href="#">Apps</Link>
      <Link href="#">Databases</Link>
      <Link href="#">
        Domains<Badge>New</Badge>
      </Link>
      <Link href="#">
        Notifications
        <CounterBadge count={3} />
      </Link>
    </Navigation>
}`,...h.parameters?.docs?.source}}};const ie=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups","WithBadges"];export{s as Default,c as MixedGroups,h as WithBadges,l as WithCollapsableGroups,p as WithGroups,t as WithIcons,ie as __namedExportsOrder,ae as default};
