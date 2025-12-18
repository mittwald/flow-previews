import{j as r}from"./iframe-Y3MbZLc0.js";import{H as a}from"./Heading-CVXAzirZ.js";import p from"./Default.stories-BDqoOp09.js";import{N as n}from"./Notification-CsliJkcB.js";import{T as c}from"./Text-C_4wJYC6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./RSPContexts-q4i_V3tQ.js";import"./utils-DRnq9lS5.js";import"./AlertIcon-CV8NrYRI.js";import"./IconWarning-B3PcMPJB.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./context-CS7ddlXF.js";import"./Button-C-4kPg6X.js";import"./LoadingSpinner-6Ne33LZp.js";import"./Button-kcvbJBhw.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./Link-Dl5kPNf7.js";import"./dynamic-D67dccmA.js";import"./browser-BiLdcyq-.js";import"./EmulatedBoldText-C3IQk-9R.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
