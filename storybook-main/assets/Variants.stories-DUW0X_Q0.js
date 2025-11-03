import{j as e}from"./iframe-Bx5EipPE.js";import{A as n}from"./Alert-DWOWH2LA.js";import{H as i}from"./Heading-DhAPxMie.js";import{C as d}from"./Content-BPEEMkM8.js";import p from"./Default.stories-CDO6_rd4.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DV0ec5yj.js";import"./IconWarning-sXt69lXW.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./index-B2U9nMUa.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./context-CiBo84na.js";import"./dynamic-DMwV73o9.js";import"./RSPContexts-ByW7h33h.js";import"./utils-CqLTISaK.js";import"./Button-CFmBk-Ho.js";import"./Text-cL2QlUTP.js";import"./browser-YP_S1MMX.js";import"./EmulatedBoldText-DBVghW6y.js";import"./LoadingSpinner-BBcen_x5.js";import"./Button-CMS0XqzI.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./ActionGroup-No0FdeaF.js";import"./getActionGroupSlot-B1Q5BOiy.js";import"./useStatic-BSnv9Wf7.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Alert {...props}>
      <Heading>Storage is almost exceeded</Heading>
      <Content>
        Your storage space is over 80% utilized. We recommend that you upgrade
        the storage space to avoid disruptions during backups.
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Alert {...props}>
      <Heading>No SSL certificate could be issued</Heading>
      <Content>
        No SSL certificate could be issued for this domain because the domain IP
        does not point to your server IP.
      </Content>
    </Alert>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const q=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,q as __namedExportsOrder,$ as default};
