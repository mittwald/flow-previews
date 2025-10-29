import{j as e}from"./iframe-fd4MG1i8.js";import{A as n}from"./Alert-n8YoHYU0.js";import{H as i}from"./Heading-FU4sLZaF.js";import{C as d}from"./Content-CX56arVC.js";import p from"./Default.stories-DzPpMBYw.js";import"./index-nuYtCEEu.js";import"./AlertIcon-I_P5oCVA.js";import"./IconWarning-9sqw3U7E.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./dynamic-BVBQ4rgw.js";import"./Heading--2_wnKY5.js";import"./RSPContexts-GsdtxIJ1.js";import"./utils-Cwcb_ph1.js";import"./Button-VeSKQaWX.js";import"./Text-Dcd0JdvI.js";import"./browser-Dh_0Zrut.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./ActionGroup-CZpdRo9u.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";const Q={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const U=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,U as __namedExportsOrder,Q as default};
