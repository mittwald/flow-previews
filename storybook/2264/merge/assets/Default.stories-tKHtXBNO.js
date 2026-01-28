import{j as e}from"./iframe-HHIIuBER.js";import{a9 as d,Y as L,a4 as f}from"./IconWarning-CPuUEZGY.js";import{T as m}from"./Text-1gTdtZLR.js";import{L as r}from"./Link-CB4tGySl.js";import{N as o,a}from"./NavigationGroup-CAn-ctzj.js";import{L as i}from"./Label-CBXKH6Tn.js";import{B as x}from"./Badge-WQuRAAdc.js";import{C as u}from"./CounterBadge-CMliL1Oz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./index-CXDCOpiF.js";import"./remote-MyOm1NIW.js";import"./browser-BiwdkBmz.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./utils-Cg0Q0SJj.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus--KWf2FGc.js";import"./usePress-DR7SsbUT.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./Accordion-CkF9rWAk.js";import"./dynamic-UvYry7O0.js";import"./Button-D9uXd6kS.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-Dym3Xpqs.js";import"./Content-Fx75tQH7.js";import"./Label.module-CUYTf9Jc.js";const ae={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>e.jsxs(o,{"aria-label":"Companies",...n,children:[e.jsx(r,{href:"https://www.apple.com",children:"Apple"}),e.jsx(r,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),e.jsx(r,{href:"https://www.adobe.com",children:"Adobe"}),e.jsx(r,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>e.jsxs(o,{"aria-label":"Main menu",...n,children:[e.jsxs(r,{children:[e.jsx(d,{}),e.jsx(m,{children:"Customer"})]}),e.jsxs(r,{"aria-current":"page",children:[e.jsx(L,{}),e.jsx(m,{children:"Server"})]}),e.jsxs(r,{children:[e.jsx(f,{}),e.jsx(m,{children:"Project"})]})]})},p={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},l={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]})]})},c={render:n=>e.jsxs(o,{"aria-label":"Main navigation",...n,children:[e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Dashboard"}),e.jsx(r,{href:"#","aria-current":"page",children:"Performance"})]}),e.jsxs(a,{children:[e.jsx(i,{children:"General"}),e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsx(r,{href:"#",children:"Domains"})]}),e.jsxs(a,{collapsable:!0,children:[e.jsx(i,{children:"Components"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"}),e.jsx(r,{href:"#",children:"Testsite"})]})]})},h={render:n=>e.jsxs(o,{"aria-label":"Navigation",...n,children:[e.jsx(r,{href:"#",children:"Apps"}),e.jsx(r,{href:"#",children:"Databases"}),e.jsxs(r,{href:"#",children:["Domains",e.jsx(x,{children:"New"})]}),e.jsxs(r,{href:"#",children:["Notifications",e.jsx(u,{count:3})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
