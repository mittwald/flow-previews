import{j as r}from"./iframe-Dy6b_FCP.js";import{H as a}from"./Heading-BfvZKiwZ.js";import p from"./Default.stories-SmwyVgwd.js";import{N as n}from"./Notification-Bngipq1y.js";import{T as c}from"./Text-1cPTkrsR.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DrrEN2JN.js";import"./index-CVEy0Z38.js";import"./index-DfVSRZN_.js";import"./RSPContexts-BxpxaOEB.js";import"./utils-Dr97TsDg.js";import"./AlertIcon-Bz-v7qCT.js";import"./IconWarning-DNcE7GB8.js";import"./useLocalizedStringFormatter-IeR6u1dk.js";import"./context-Cmxdn71P.js";import"./Button-GOXJIQJf.js";import"./LoadingSpinner-CtFn_aG9.js";import"./Button-D4hzfdEM.js";import"./ProgressBar-BRblqXhL.js";import"./Hidden-CO8a8gup.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DcnqUpu3.js";import"./useFocusable-CceqWekp.js";import"./Link-Dm_YWPlU.js";import"./dynamic-BsH-tVs9.js";import"./browser-B3C2hSkY.js";import"./EmulatedBoldText-rn83c_he.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
