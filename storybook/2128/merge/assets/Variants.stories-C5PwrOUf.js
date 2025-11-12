import{j as e}from"./iframe-DvmgUBW7.js";import{A as n}from"./Alert-DS4wdr90.js";import{H as i}from"./Heading-CqrprVNa.js";import{C as d}from"./Content-BTmNLdH3.js";import p from"./Default.stories-DLau-eHJ.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DccMdP4x.js";import"./IconWarning-Dv-oLMD9.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./index-BNqf21ov.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./context-DzqJJy5k.js";import"./dynamic-BrPxZX7i.js";import"./RSPContexts-DdvBd_E1.js";import"./utils-BtCbht9n.js";import"./Button-C1BHOQWK.js";import"./Text-Dbew3mLe.js";import"./browser-DnTWaRxE.js";import"./EmulatedBoldText-xJj6r1Ey.js";import"./LoadingSpinner-DLZner8z.js";import"./Button-mFUbi7ER.js";import"./ProgressBar-CrOV3NyN.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BavcHLfj.js";import"./useFocusable-CKxgRqhR.js";import"./ActionGroup-CjT6ddTh.js";import"./getActionGroupSlot-BfXlTAt-.js";import"./useStatic-Jt5HUTTZ.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
