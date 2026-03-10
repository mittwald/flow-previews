import{j as r}from"./iframe-Bge_iwzq.js";import{a8 as c,Z as l,a5 as d}from"./IconWarning-CnGwh2Y2.js";import{T as s}from"./Text-Bo3CKbUr.js";import{L as n}from"./Link-CwcCCToL.js";import{N as t,a as p}from"./NavigationGroup-DjJAAUNY.js";import{L as m}from"./Label-DsCIDP_n.js";import{B as x}from"./Badge-Bh1cbKsC.js";import{C as u}from"./CounterBadge-i4S7xxFa.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./remote-CO23tKXG.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./utils-rhPAe061.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-M-LntWI3.js";import"./usePress-BXEJU3rI.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./Accordion-DjLInd1h.js";import"./dynamic-C3MU2GF_.js";import"./Button-DYq5oiR6.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-DfbnkSMV.js";import"./Content-CuNOzgqd.js";import"./Label.module-CUYTf9Jc.js";const rr={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},i={render:e=>r.jsxs(t,{"aria-label":"Companies",...e,children:[r.jsx(n,{children:"Apple"}),r.jsx(n,{"aria-current":"page",children:"mittwald"}),r.jsx(n,{children:"Adobe"}),r.jsx(n,{children:"Google"}),r.jsxs(n,{children:["Domains",r.jsx(x,{children:"New"})]}),r.jsxs(n,{children:["Notifications",r.jsx(u,{count:3})]})]})},a={render:e=>r.jsxs(t,{"aria-label":"Main menu",...e,children:[r.jsxs(n,{children:[r.jsx(c,{}),r.jsx(s,{children:"Customer"})]}),r.jsxs(n,{"aria-current":"page",children:[r.jsx(l,{}),r.jsx(s,{children:"Server"})]}),r.jsxs(n,{children:[r.jsx(d,{}),r.jsx(s,{children:"Project"})]})]})},o={render:e=>r.jsxs(t,{"aria-label":"Main navigation",...e,children:[r.jsxs(p,{collapsable:!0,children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Dashboard"}),r.jsx(n,{"aria-current":"page",children:"Performance"})]}),r.jsxs(p,{children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Apps"}),r.jsx(n,{children:"Databases"}),r.jsx(n,{children:"Domains"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
