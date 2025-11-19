import{j as r}from"./iframe-ChXgWPPC.js";import{H as a}from"./Heading-DMHDZ_u6.js";import p from"./Default.stories-j_l0Dgpr.js";import{N as n}from"./Notification-BADXrVSo.js";import{T as c}from"./Text-B34O2ICL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./index-CUhsAGa6.js";import"./RSPContexts-T2aOxEw5.js";import"./utils-DiB9MypO.js";import"./AlertIcon-DTTgmXrL.js";import"./IconWarning-BNdWvzeJ.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./context-29WSV5fn.js";import"./Button-DdSGnULn.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Button-DACNP5IV.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./Link-B12snMlw.js";import"./dynamic-nfc0SAk9.js";import"./browser-DjrPe_WT.js";import"./EmulatedBoldText-BEs_gMjx.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
