import{j as e}from"./iframe-CfnfnCWP.js";import{A as n}from"./Alert-CMM8UOVE.js";import{H as i}from"./Heading-OB0ZBXrr.js";import{C as d}from"./Content-DUix3Zjx.js";import p from"./Default.stories-6KGGlEj-.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CjvlmAGq.js";import"./IconWarning-C231uJAl.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./index-jLgmF_bk.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./context-Bzg-jxuH.js";import"./dynamic-DF8Fk99D.js";import"./RSPContexts-D_4T2k7b.js";import"./utils-DU1zOm8r.js";import"./Button-CV55_Sir.js";import"./Text-C5_UpO0B.js";import"./browser-Ch5bUTc0.js";import"./EmulatedBoldText-CoueItQ2.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./ActionGroup-ptJvXf99.js";import"./getActionGroupSlot-BW2T13eN.js";import"./useStatic-tVkquGmk.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
