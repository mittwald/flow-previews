import{j as e}from"./iframe-N2ZMMBua.js";import{A as n}from"./Alert-C4x5XvaN.js";import{H as i}from"./Heading-UwbM-u6i.js";import{C as d}from"./Content-DKIO4hDm.js";import p from"./Default.stories-CNBAtjqG.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DP3sd6M_.js";import"./IconWarning-BFO_JV1T.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./context-CVOB-S2d.js";import"./dynamic-Bg49ug6j.js";import"./RSPContexts-W5rfe12r.js";import"./utils-UqP59DSc.js";import"./Button-CQTX7C-7.js";import"./Text-B0nKVVvA.js";import"./browser-C3uOmI6O.js";import"./EmulatedBoldText-zrEG-jWJ.js";import"./LoadingSpinner-BF2HGxsW.js";import"./Button-ckJwL_Qm.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./ActionGroup-CcC1RkNL.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./useStatic-BK7FFX-B.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
