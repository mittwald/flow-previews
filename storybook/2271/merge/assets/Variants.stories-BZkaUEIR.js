import{j as e}from"./iframe-BK9Ry9wr.js";import{A as a}from"./Alert-CVCJwZtx.js";import{H as n}from"./Heading-DbP6ax1z.js";import{C as p}from"./Content-C4_N8Xvq.js";import d from"./Default.stories-DUmREckW.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CZTB9fHB.js";import"./IconWarning-ClqYagFF.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./remote-BKPS1KcS.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./dynamic-QikLaQcI.js";import"./Heading-AwuUEGOn.js";import"./RSPContexts--7QpwlJX.js";import"./utils-DO-BnPGQ.js";import"./Text-kkda9Q25.js";import"./browser-DDyWafud.js";import"./EmulatedBoldText-NOAnNUmj.js";import"./Text-Cq5Rc76r.js";import"./Button-CHbQbW2n.js";import"./LoadingSpinner-FeF_CDXe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnSM8-vw.js";import"./ProgressBar-EpzEHd1o.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MQsZvy4I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DlcvFeQS.js";import"./useFocus-C5fN754a.js";import"./useFocusRing-Dknf048Z.js";import"./useFocusable-CjhkSx1Q.js";import"./ActionGroup-B30hSGLL.js";import"./getActionGroupSlot-BQEdHt4G.js";import"./useStatic-D1EtWzUP.js";import"./LayoutCard-BtajJueZ.js";import"./Section-Cd3PiQqp.js";import"./ContextMenuSection-BoFqJWQI.js";import"./Action-CpYeBO1D.js";import"./context-BUIiTJfL.js";import"./Dialog-CFBRHxwp.js";import"./OverlayArrow-CRZVDLqR.js";import"./useControlledState-D5gBJyZQ.js";import"./Collection-DA19Hn3z.js";import"./CollectionBuilder-D0V9DfFD.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./Separator-C7FW_ZyO.js";import"./SelectionManager-BORRpVca.js";import"./useEvent-C7NWigLs.js";import"./useCollator-DyL6zZr9.js";import"./FocusScope-Lcnwzjdv.js";import"./VisuallyHidden-D79PysQv.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...i.parameters?.docs?.source}}};const ge=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ge as __namedExportsOrder,he as default};
