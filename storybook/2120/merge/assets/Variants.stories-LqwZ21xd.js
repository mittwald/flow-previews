import{j as e}from"./iframe-Bzotfv2d.js";import{A as n}from"./Alert-eyCmAgC6.js";import{H as i}from"./Heading-DTNjAjmU.js";import{C as d}from"./Content-D54xBao4.js";import p from"./Default.stories-B7Bv94u4.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CgsKNc5r.js";import"./IconWarning-DA_wmemp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ce43WGqS.js";import"./index-Dtu7UrbV.js";import"./index-s2lSSiFB.js";import"./useLocalizedStringFormatter-CEUFB_Kk.js";import"./context-CZ6Qg3vv.js";import"./dynamic-XEUS-i0b.js";import"./RSPContexts-94nDykOv.js";import"./utils-F6vOfgTC.js";import"./Button-B5Yu3Ofr.js";import"./Text-C-DP5r93.js";import"./browser-Da6kOqay.js";import"./EmulatedBoldText-CowooJQh.js";import"./LoadingSpinner-B7Dg5gJY.js";import"./Button-DKhocf4j.js";import"./ProgressBar-DrjjCA4M.js";import"./Hidden-A2gmu8PL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bwoimiux.js";import"./useFocusable-DtwtCMr6.js";import"./ActionGroup-THbN8B7U.js";import"./getActionGroupSlot-DupNakeF.js";import"./useStatic-CUbPzepq.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
