import{j as r}from"./iframe-B0zV29Ol.js";import{H as a}from"./Heading-DWho-b1a.js";import p from"./Default.stories-DVWLpMBI.js";import{N as n}from"./Notification-Bao42zCB.js";import{T as c}from"./Text-DNMpJh06.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./index-Bap8DgrM.js";import"./RSPContexts-C-9bKQ2R.js";import"./utils-rMLWZEZ9.js";import"./AlertIcon-C4QVJ3jz.js";import"./IconWarning-DElUfIyP.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./context-CJ74nGTM.js";import"./Button-DMc7qjuD.js";import"./LoadingSpinner-91ddITMV.js";import"./Button-B7c7aZAn.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./Link-CXiCVjqZ.js";import"./dynamic-BDcWjd3V.js";import"./browser-D-MgOzku.js";import"./EmulatedBoldText-Z1g7CMab.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
