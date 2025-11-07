import{j as e}from"./iframe-C_rr3K7B.js";import{A as n}from"./Alert-BSB-fYgU.js";import{H as i}from"./Heading-zxknCt_n.js";import{C as d}from"./Content-RrSqeXWH.js";import p from"./Default.stories-ByU1BREc.js";import"./index-nuYtCEEu.js";import"./AlertIcon-iBCzN4pZ.js";import"./IconWarning-DU_TTROa.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./dynamic-BFlSKedW.js";import"./RSPContexts-zcKIqYdj.js";import"./utils-C4h6fUQR.js";import"./Button-DCjyK8f2.js";import"./Text-BsSJXbbR.js";import"./browser-E0G6tvzo.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./LoadingSpinner-CRVrq6rR.js";import"./Button-B3n1VqY_.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./ActionGroup-DsFsbzBm.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./useStatic-BCUpaw5v.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
