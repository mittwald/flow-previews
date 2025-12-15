import{j as r}from"./iframe-Can218wR.js";import{H as n}from"./Heading-8IBs5lHH.js";import p from"./Default.stories-7Gykuhpt.js";import{N as a}from"./Notification-Bij5M0u6.js";import{T as c}from"./Text-C2o8kJX0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./RSPContexts-DDMcPOu0.js";import"./utils-BpZeyfMN.js";import"./AlertIcon-BzlU70Rb.js";import"./IconWarning-BNaFuPnH.js";import"./remote-CHcOizPe.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./context-DZl3H9Sd.js";import"./Button-AcWb1Ypk.js";import"./LoadingSpinner-kXbrPTzW.js";import"./Button-DOjUwuNT.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./Link-DNZxb3XI.js";import"./dynamic-B5g7bVbH.js";import"./browser-BKQSdhjf.js";import"./EmulatedBoldText-CmVjk4cf.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
