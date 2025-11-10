import{j as e}from"./iframe-DVp3wyW8.js";import{A as n}from"./Alert-CEm4e_SW.js";import{H as i}from"./Heading-VOEAcbBw.js";import{C as d}from"./Content-O95-U-Qr.js";import p from"./Default.stories-CyQfpoI6.js";import"./index-nuYtCEEu.js";import"./AlertIcon-C0fW6UTj.js";import"./IconWarning-btspmSaz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./index-CnZiUiqa.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./context-BTkZkFrl.js";import"./dynamic-DGFrs7WZ.js";import"./RSPContexts-CQ8PUfHG.js";import"./utils-CK_bkg3x.js";import"./Button-BGy_040K.js";import"./Text-x2NLhZ_6.js";import"./browser-qRiPvlbV.js";import"./EmulatedBoldText-CHhmc0Op.js";import"./LoadingSpinner-BvAyWbCS.js";import"./Button-ComzTzlH.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./ActionGroup-pi-cPFOK.js";import"./getActionGroupSlot-D9iU03Oh.js";import"./useStatic-INcP8lHW.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
