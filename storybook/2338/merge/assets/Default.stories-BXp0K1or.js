import{j as r}from"./iframe-CtEjVB66.js";import{a8 as c,Z as l,a5 as d}from"./IconWarning-1CkAUSYF.js";import{T as s}from"./Text-QCKh6xRo.js";import{L as n}from"./Link-DMg6xFRD.js";import{N as t,a as p}from"./NavigationGroup-CNOAAWUQ.js";import{L as m}from"./Label-CvAjEv-1.js";import{B as x}from"./Badge-COE-ORBX.js";import{C as u}from"./CounterBadge-ByPm-_ow.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./remote-4O72-jdB.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./utils-BuEQZICT.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./usePress-Cre2k4PJ.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./Accordion-CQr9w1G2.js";import"./dynamic-BbkFIR2Q.js";import"./Button-BbnjmOHy.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-C_jcRTUZ.js";import"./Content-BV9uIs25.js";import"./Label.module-CUYTf9Jc.js";const nr={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},e={render:i=>r.jsxs(t,{"aria-label":"Companies",...i,children:[r.jsx(n,{children:"Apple"}),r.jsx(n,{"aria-current":"page",children:"mittwald"}),r.jsx(n,{children:"Adobe"}),r.jsx(n,{children:"Google"}),r.jsxs(n,{children:["Domains",r.jsx(x,{children:"New"})]}),r.jsxs(n,{children:["Notifications",r.jsx(u,{count:3})]})]})},a={render:i=>r.jsxs(t,{"aria-label":"Main menu",...i,children:[r.jsxs(n,{children:[r.jsx(c,{}),r.jsx(s,{children:"Customer"})]}),r.jsxs(n,{"aria-current":"page",children:[r.jsx(l,{}),r.jsx(s,{children:"Server"})]}),r.jsxs(n,{children:[r.jsx(d,{}),r.jsx(s,{children:"Project"})]})]})},o={render:i=>r.jsxs(t,{"aria-label":"Main navigation",...i,children:[r.jsxs(p,{collapsable:!0,children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Dashboard"}),r.jsx(n,{"aria-current":"page",children:"Performance"})]}),r.jsxs(p,{children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Apps"}),r.jsx(n,{children:"Databases"}),r.jsx(n,{children:"Domains"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link>Apple</Link>
      <Link aria-current="page">mittwald</Link>
      <Link>Adobe</Link>
      <Link>Google</Link>
      <Link>
        Domains<Badge>New</Badge>
      </Link>
      <Link>
        Notifications
        <CounterBadge count={3} />
      </Link>
    </Navigation>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup collapsable>
        <Label>General</Label>
        <Link>Dashboard</Link>
        <Link aria-current="page">Performance</Link>
      </NavigationGroup>

      <NavigationGroup>
        <Label>General</Label>
        <Link>Apps</Link>
        <Link>Databases</Link>
        <Link>Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...o.parameters?.docs?.source}}};const ir=["Default","WithIcons","WithGroups"];export{e as Default,o as WithGroups,a as WithIcons,ir as __namedExportsOrder,nr as default};
