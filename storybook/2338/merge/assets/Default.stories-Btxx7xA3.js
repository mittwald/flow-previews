import{j as r}from"./iframe-CEWg6_IX.js";import{a8 as c,Z as l,a5 as d}from"./IconWarning-D3143lfN.js";import{T as s}from"./Text-Bw_cIJde.js";import{L as n}from"./Link-ZNqsbLzN.js";import{N as t,a as p}from"./NavigationGroup-DqoYeXh9.js";import{L as m}from"./Label-BaJSnICs.js";import{B as x}from"./Badge-_G7MlIgi.js";import{C as u}from"./CounterBadge-DM327c2a.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./remote-BClk6GLL.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./utils-VWmQzJjV.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BQlkvxNG.js";import"./usePress-BNr3g4sC.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./Accordion-BLezxUq1.js";import"./dynamic-JOnDgprM.js";import"./Button-CA6AkUR_.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-Dbx5IXQT.js";import"./Content-CRiMoq0F.js";import"./Label.module-CUYTf9Jc.js";const rr={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},i={render:e=>r.jsxs(t,{"aria-label":"Companies",...e,children:[r.jsx(n,{children:"Apple"}),r.jsx(n,{"aria-current":"page",children:"mittwald"}),r.jsx(n,{children:"Adobe"}),r.jsx(n,{children:"Google"}),r.jsxs(n,{children:["Domains",r.jsx(x,{children:"New"})]}),r.jsxs(n,{children:["Notifications",r.jsx(u,{count:3})]})]})},a={render:e=>r.jsxs(t,{"aria-label":"Main menu",...e,children:[r.jsxs(n,{children:[r.jsx(c,{}),r.jsx(s,{children:"Customer"})]}),r.jsxs(n,{"aria-current":"page",children:[r.jsx(l,{}),r.jsx(s,{children:"Server"})]}),r.jsxs(n,{children:[r.jsx(d,{}),r.jsx(s,{children:"Project"})]})]})},o={render:e=>r.jsxs(t,{"aria-label":"Main navigation",...e,children:[r.jsxs(p,{collapsable:!0,children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Dashboard"}),r.jsx(n,{"aria-current":"page",children:"Performance"})]}),r.jsxs(p,{children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Apps"}),r.jsx(n,{children:"Databases"}),r.jsx(n,{children:"Domains"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const nr=["Default","WithIcons","WithGroups"];export{i as Default,o as WithGroups,a as WithIcons,nr as __namedExportsOrder,rr as default};
