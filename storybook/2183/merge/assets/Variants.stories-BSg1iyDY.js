import{j as r}from"./iframe-AfMfDnul.js";import{H as n}from"./Heading-Cl5UGWqj.js";import p from"./Default.stories-DgKvj9t5.js";import{N as a}from"./Notification-Dq4SIvAb.js";import{T as c}from"./Text-XXGzm8bZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./RSPContexts-C5kaCkGg.js";import"./utils-wHWs8Mhj.js";import"./AlertIcon-q77oMlDX.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./context-ESdZ7ZET.js";import"./Button-Dz-J0BZY.js";import"./LoadingSpinner-C1jt85JD.js";import"./Button-CnuzJqL8.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./Link-hXv3E1Ra.js";import"./dynamic-B22nf4Sq.js";import"./browser-D3b8NrdU.js";import"./EmulatedBoldText-pgpRP3jm.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <strong>My Project</strong> is over 80%
        utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <strong>example.de</strong>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <strong>My WordPress</strong> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const $=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,$ as __namedExportsOrder,R as default};
