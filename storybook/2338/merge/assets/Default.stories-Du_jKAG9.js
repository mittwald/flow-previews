import{j as r}from"./iframe-BFddea_x.js";import{a8 as c,Z as l,a5 as d}from"./IconWarning-Cwahpn-Q.js";import{T as s}from"./Text-B70YymId.js";import{L as n}from"./Link-DtC85Uv0.js";import{N as t,a as p}from"./NavigationGroup-xbQ9QaW-.js";import{L as m}from"./Label-Cyz25dCh.js";import{B as x}from"./Badge-Jb0Vhep2.js";import{C as u}from"./CounterBadge-CLtToH9G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./remote-DmjGOFpp.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./utils-D-aZUMcZ.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./usePress-DZQSLH7U.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./Accordion-Dz-X5tw6.js";import"./dynamic-C85Jl_PG.js";import"./Button-DmFob37h.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-C0iptnnh.js";import"./Content-CWzMlKrq.js";import"./Label.module-CUYTf9Jc.js";const nr={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},e={render:i=>r.jsxs(t,{"aria-label":"Companies",...i,children:[r.jsx(n,{children:"Apple"}),r.jsx(n,{"aria-current":"page",children:"mittwald"}),r.jsx(n,{children:"Adobe"}),r.jsx(n,{children:"Google"}),r.jsxs(n,{children:["Domains",r.jsx(x,{children:"New"})]}),r.jsxs(n,{children:["Notifications",r.jsx(u,{count:3})]})]})},a={render:i=>r.jsxs(t,{"aria-label":"Main menu",...i,children:[r.jsxs(n,{children:[r.jsx(c,{}),r.jsx(s,{children:"Customer"})]}),r.jsxs(n,{"aria-current":"page",children:[r.jsx(l,{}),r.jsx(s,{children:"Server"})]}),r.jsxs(n,{children:[r.jsx(d,{}),r.jsx(s,{children:"Project"})]})]})},o={render:i=>r.jsxs(t,{"aria-label":"Main navigation",...i,children:[r.jsxs(p,{collapsable:!0,children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Dashboard"}),r.jsx(n,{"aria-current":"page",children:"Performance"})]}),r.jsxs(p,{children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Apps"}),r.jsx(n,{children:"Databases"}),r.jsx(n,{children:"Domains"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
