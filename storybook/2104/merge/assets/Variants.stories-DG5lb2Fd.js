import{j as r}from"./iframe-CXJD44gU.js";import{H as a}from"./Heading-BqJcdYMf.js";import p from"./Default.stories-C36osY0c.js";import{N as n}from"./Notification-D9-cNcGL.js";import{T as c}from"./Text-D7qfRA1L.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./index-CRJWytS4.js";import"./RSPContexts-DduoqfxZ.js";import"./utils-BNVflTSU.js";import"./AlertIcon-D9uZzc44.js";import"./IconWarning-BGBHXtCn.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./context-FTDoYYrb.js";import"./Button-Cqh03G4a.js";import"./LoadingSpinner-GTDlM8Wf.js";import"./Button-BYCRTXMY.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./Link-DiqcoEP6.js";import"./dynamic-By6FwFol.js";import"./browser-BB5suZC2.js";import"./EmulatedBoldText-BVX9n63_.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const R=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,R as __namedExportsOrder,O as default};
