import{j as e}from"./iframe-Ye-9ROja.js";import{A as n}from"./Alert-CoX8Glo_.js";import{H as i}from"./Heading-ETrbJF6H.js";import{C as d}from"./Content-J12nk9kF.js";import p from"./Default.stories-DVWvx3_K.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Cms0_lyO.js";import"./IconWarning-C5ScV98r.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./index-MGNRFzGq.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./context-BMOJ7e9i.js";import"./dynamic-1eLzqo0n.js";import"./RSPContexts-CFmCNefB.js";import"./utils-CF6YsxS1.js";import"./Button-CSXrQkPS.js";import"./Text-Bsxj-TZS.js";import"./browser-BcPcK0wn.js";import"./EmulatedBoldText-Bx43jLQW.js";import"./LoadingSpinner-BKm3aKU7.js";import"./Button-COBj9UNQ.js";import"./ProgressBar-Dc-dQlrj.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CJrPyvnd.js";import"./useFocusable-CkKnxemF.js";import"./ActionGroup-DnXdefyU.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./useStatic-BBGAeEE_.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
