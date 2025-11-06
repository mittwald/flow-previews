import{j as e}from"./iframe-Cn_Uksv1.js";import{A as n}from"./Alert-CTEBmpK4.js";import{H as i}from"./Heading-BQmLpAQ1.js";import{C as d}from"./Content-BOlga6nV.js";import p from"./Default.stories-DCiZ3kmV.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CsVXI5gr.js";import"./IconWarning-ktzgJVul.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./index-C0zdnCAL.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./context-B2OLF-YE.js";import"./dynamic-DNsdEAu1.js";import"./RSPContexts-CKwSRM_H.js";import"./utils-B-f9gd93.js";import"./Button-uqtApCO2.js";import"./Text-D6EVKQHX.js";import"./browser-BnRg_GS1.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./LoadingSpinner-DSg47w65.js";import"./Button-FEoS725w.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./ActionGroup-UNAE9QI0.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./useStatic-CJPRi5oj.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
