import{j as r}from"./iframe-BcqfzoOA.js";import{a8 as c,Z as l,a5 as d}from"./IconWarning-Bupv8NYZ.js";import{T as s}from"./Text-1XRmWCfn.js";import{L as n}from"./Link-YqMugRW6.js";import{N as t,a as p}from"./NavigationGroup-DKIxPkLR.js";import{L as m}from"./Label-CQjtN3Gn.js";import{B as x}from"./Badge-V_AjlRtV.js";import{C as u}from"./CounterBadge-CLK01Zov.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./remote-x3smQXnv.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./utils-Bwp7PlhH.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BgTDZkkG.js";import"./usePress-Lauho74f.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocusable-B97W14wM.js";import"./Accordion-Drvvp0Fv.js";import"./dynamic-CQVZMaTn.js";import"./Button-C2msjhlA.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./Activity-eGns25BO.js";import"./Content-B5PlHrRz.js";import"./Label.module-CUYTf9Jc.js";const rr={title:"Navigation/Navigation",component:t,parameters:{controls:{exclude:["className"]}}},i={render:e=>r.jsxs(t,{"aria-label":"Companies",...e,children:[r.jsx(n,{children:"Apple"}),r.jsx(n,{"aria-current":"page",children:"mittwald"}),r.jsx(n,{children:"Adobe"}),r.jsx(n,{children:"Google"}),r.jsxs(n,{children:["Domains",r.jsx(x,{children:"New"})]}),r.jsxs(n,{children:["Notifications",r.jsx(u,{count:3})]})]})},a={render:e=>r.jsxs(t,{"aria-label":"Main menu",...e,children:[r.jsxs(n,{children:[r.jsx(c,{}),r.jsx(s,{children:"Customer"})]}),r.jsxs(n,{"aria-current":"page",children:[r.jsx(l,{}),r.jsx(s,{children:"Server"})]}),r.jsxs(n,{children:[r.jsx(d,{}),r.jsx(s,{children:"Project"})]})]})},o={render:e=>r.jsxs(t,{"aria-label":"Main navigation",...e,children:[r.jsxs(p,{collapsable:!0,children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Dashboard"}),r.jsx(n,{"aria-current":"page",children:"Performance"})]}),r.jsxs(p,{children:[r.jsx(m,{children:"General"}),r.jsx(n,{children:"Apps"}),r.jsx(n,{children:"Databases"}),r.jsx(n,{children:"Domains"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
