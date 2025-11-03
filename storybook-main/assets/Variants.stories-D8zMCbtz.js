import{j as e}from"./iframe-C__sNFq5.js";import{A as n}from"./Alert-CJasCYlq.js";import{H as i}from"./Heading-Cn6OX0c5.js";import{C as d}from"./Content-DpPWD-Cp.js";import p from"./Default.stories-Bro-c4ss.js";import"./index-nuYtCEEu.js";import"./AlertIcon-w10mi-p6.js";import"./IconWarning-BuzGzrbs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./context-CMi9l8Yg.js";import"./dynamic-Bb5SDKXs.js";import"./RSPContexts-BMxPkdv6.js";import"./utils-Dqy6LFYQ.js";import"./Button-BDJI0X8N.js";import"./Text--GxX46L7.js";import"./browser-iGgi6T92.js";import"./EmulatedBoldText-Bh8SXQjk.js";import"./LoadingSpinner-B1HBgs-9.js";import"./Button-B_7NxfoI.js";import"./ProgressBar-DtGgBXAS.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./ActionGroup-BWUqf9tM.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./useStatic-DMsmAY9f.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
