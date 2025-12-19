import{j as r}from"./iframe-d8TPt7Dq.js";import{a7 as m,W as d,a2 as L}from"./IconWarning-BBwUIuFu.js";import{T as h}from"./Text-B_83j2CJ.js";import{L as e}from"./Link-BAvXncIq.js";import{N as o,a}from"./NavigationGroup-CiK7_SKe.js";import{L as i}from"./Label-DUZNK_N3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./index-hNZo4M03.js";import"./remote-DqOJ-OtV.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./utils-CQWCrNEN.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./Accordion-Bhrc9szW.js";import"./dynamic-q6Z3lF5f.js";import"./Button-CG9B_DsC.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-DVnxiacN.js";import"./Content-Dz547LVF.js";import"./Label.module-CUYTf9Jc.js";const Z={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>r.jsxs(o,{"aria-label":"Companies",...n,children:[r.jsx(e,{href:"https://www.apple.com",children:"Apple"}),r.jsx(e,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),r.jsx(e,{href:"https://www.adobe.com",children:"Adobe"}),r.jsx(e,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>r.jsxs(o,{"aria-label":"Main menu",...n,children:[r.jsxs(e,{children:[r.jsx(m,{}),r.jsx(h,{children:"Customer"})]}),r.jsxs(e,{"aria-current":"page",children:[r.jsx(d,{}),r.jsx(h,{children:"Server"})]}),r.jsxs(e,{children:[r.jsx(L,{}),r.jsx(h,{children:"Project"})]})]})},p={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},l={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},c={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{s as Default,c as MixedGroups,l as WithCollapsableGroups,p as WithGroups,t as WithIcons,$ as __namedExportsOrder,Z as default};
