import{j as e}from"./iframe-BLnMNn74.js";import{A as n}from"./Alert-DpWN8tfH.js";import{H as i}from"./Heading-D0fV1MUw.js";import{C as d}from"./Content-D01rsQck.js";import p from"./Default.stories-BKNCQe1x.js";import"./index-nuYtCEEu.js";import"./AlertIcon-D_ZK5_qh.js";import"./IconWarning-DVYn3YAA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./index-BEG_ZaEs.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./context-DeTRhxa_.js";import"./dynamic-lDfDlCad.js";import"./RSPContexts-PYGgvhgu.js";import"./utils-mouUCLqv.js";import"./Text-BLxKn04K.js";import"./browser-3pbWDgJF.js";import"./EmulatedBoldText-Y_QL0NOh.js";import"./Button-BheRlZ5y.js";import"./LoadingSpinner-CXYzRfKv.js";import"./Button-DcXCtAho.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./ActionGroup-D4qujtmo.js";import"./Section-C4IRs01H.js";import"./context-tC_fb_7Z.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./useStatic-C1gHOY5o.js";import"./LayoutCard-BJitsBmJ.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Q=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,Q as __namedExportsOrder,M as default};
