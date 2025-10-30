import{j as e}from"./iframe-DGNlk_vV.js";import{A as n}from"./Alert-XjfM08Aq.js";import{H as i}from"./Heading-L3PTpp92.js";import{C as d}from"./Content-ol93GJzs.js";import p from"./Default.stories-mr3tHAYP.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DkXhyzKN.js";import"./IconWarning-C6wJTaOd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./index-Bbt_YQGl.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./context-BQuOJgUT.js";import"./dynamic-CKWjdq05.js";import"./RSPContexts-ClaGjYhr.js";import"./utils-DL8q1so0.js";import"./Button-DhezJY1m.js";import"./Text-DsxTDDTq.js";import"./browser-ec9CZx7q.js";import"./EmulatedBoldText-Bby43l11.js";import"./LoadingSpinner-Vfx511Qq.js";import"./Button-DpZIFY9G.js";import"./ProgressBar-BoB3EqYI.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DxF43p1t.js";import"./useFocusable-CXOlwDl1.js";import"./ActionGroup-B5jvEoxw.js";import"./getActionGroupSlot-DqNd_pBE.js";import"./useStatic-D_bMrpdM.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
