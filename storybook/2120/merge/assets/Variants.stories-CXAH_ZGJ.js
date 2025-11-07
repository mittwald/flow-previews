import{j as e}from"./iframe-BD-_0iQW.js";import{A as n}from"./Alert-BHqt2Xmz.js";import{H as i}from"./Heading-CKSpOG-B.js";import{C as d}from"./Content-D_2aIVNk.js";import p from"./Default.stories-DXtS_tTT.js";import"./index-nuYtCEEu.js";import"./AlertIcon-C-1FhtD4.js";import"./IconWarning-COe6pc-P.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./dynamic-Bn8R82lj.js";import"./RSPContexts-CSfMLF9v.js";import"./utils-DC-uQ7gt.js";import"./Button-Daqq-bhO.js";import"./Text-BiRW2WuP.js";import"./browser-CsfwbWLp.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./ActionGroup-L6iCTp2m.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
