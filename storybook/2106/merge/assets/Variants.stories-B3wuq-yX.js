import{j as e}from"./iframe-Cvytdoxw.js";import{A as n}from"./Alert-CR-srYX8.js";import{H as i}from"./Heading-CmmEit1O.js";import{C as d}from"./Content-CqmkYIyJ.js";import p from"./Default.stories-BZyYxQkx.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CukGBwNm.js";import"./IconWarning-DXcNdK9V.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BakvHPDm.js";import"./index-D8rYYAP0.js";import"./index-CTthHXbC.js";import"./useLocalizedStringFormatter-Bip3mv8b.js";import"./context-Cn_ZHjoc.js";import"./dynamic-BZ_eTWTP.js";import"./RSPContexts-Cd4dinro.js";import"./utils-cle9p6h6.js";import"./Button-Cr3d2kpx.js";import"./Text-DIznXbTR.js";import"./browser-DEx-HDtZ.js";import"./EmulatedBoldText-D3YXTSUL.js";import"./LoadingSpinner-DkHZrmVz.js";import"./Button-B_aqk9rc.js";import"./ProgressBar-Ba3c9wf0.js";import"./Hidden-C4KiavwU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DUuUR0t2.js";import"./useFocusable-suhCImuH.js";import"./ActionGroup-D9Rk5LUe.js";import"./getActionGroupSlot-CmO7nmQr.js";import"./useStatic-Dta6Atim.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
