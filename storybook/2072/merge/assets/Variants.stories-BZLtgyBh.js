import{j as r}from"./iframe-C3jdvmqu.js";import{H as a}from"./Heading-BZdy5d_w.js";import p from"./Default.stories-DACs53lW.js";import{N as n}from"./Notification-Scrbw5NS.js";import{T as c}from"./Text-by0jRlX4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./RSPContexts-n5O79WrS.js";import"./utils-Bnm0gbPW.js";import"./AlertIcon-DkwIeu6U.js";import"./IconWarning-B93hkDaL.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./context-KJ9X431h.js";import"./Button-crBjhbVY.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./Button-BIwZHIrt.js";import"./ProgressBar-BH_IM9sd.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./Link-DBmT5h1W.js";import"./dynamic-D5Qg0LEH.js";import"./browser-p2mffppm.js";import"./EmulatedBoldText-PDbCHW4-.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
