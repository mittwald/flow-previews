import{j as e}from"./iframe-lFICOVMG.js";import{ab as d,Z as L,a6 as f}from"./IconWarning-4K-DqIQK.js";import{T as m}from"./Text-BQwiR71m.js";import{L as r}from"./Link-CbinGVB-.js";import{N as o,a}from"./NavigationGroup-K-qXHyLW.js";import{L as i}from"./Label-WsCexfXL.js";import{B as x}from"./Badge-CA8Iu6Ux.js";import{C as u}from"./CounterBadge-cbRJdXQm.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./remote-CRPYY61Z.js";import"./browser-CN95VINd.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";import"./utils-DhhSlmx9.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-fqIQg8qR.js";import"./usePress-BW_bFHXv.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./Accordion-CoF1eLf2.js";import"./dynamic-0KpQiqy3.js";import"./Button-Cf-KBW4_.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-D0zgcYxr.js";import"./Content-CcAghgec.js";import"./Label.module-CUYTf9Jc.js";const ae={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>e.jsxs(o,{"aria-label":"Companies",...n,children:[e.jsx(r,{href:"https://www.apple.com",children:"Apple"}),e.jsx(r,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(r,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(r,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>e.jsxs(o,{"aria-label":"Main menu",...n,children:[e.jsxs(r,{children:[e.jsx(d,{}),e.jsx(m,{children:"Customer"})]}),e.jsxs(r,{"aria-current":"page",children:[e.jsx(L,{}),e.jsx(m,{children:"Server"})]}),e.jsxs(r,{children:[e.jsx(f,{}),e.jsx(m,{children:"Project"})]})]})},p={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},l={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},c={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"})]})]})},h={render:n=>e.jsxs(o,{"aria-label":"Navigation",...n,children:[e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsxs(r,{href:"#",children:["Domains",e.jsx(x,{children:"New"})]}),e.jsxs(r,{href:"#",children:["Notifications",e.jsx(u,{count:3})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
