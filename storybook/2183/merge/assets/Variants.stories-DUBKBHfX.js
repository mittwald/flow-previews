import{j as e}from"./iframe-CgbY6Bes.js";import{A as n}from"./Alert-CytYuZiy.js";import{H as i}from"./Heading-Dy8Qo0Zu.js";import{C as p}from"./Content-CAJDDH_j.js";import d from"./Default.stories-DXrST89A.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Bwqj2F_1.js";import"./IconChevronDown-BgfzzCeX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTdpdvjF.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./remote-VFFVCOtz.js";import"./IconDanger-D9oAFjYl.js";import"./IconInfo-DhQADKs6.js";import"./IconCircleCheck-C6E5jCI_.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./context-B7mjZSuw.js";import"./dynamic-eD-KrC4d.js";import"./Heading-C-qIe53v.js";import"./RSPContexts-nmNOlAeI.js";import"./utils-C1D540aj.js";import"./Text-VVW0omSC.js";import"./browser-C7soFJnH.js";import"./EmulatedBoldText-C19QTVcg.js";import"./Button-AhSsxt5Y.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./ActionGroup-CWjy7TJK.js";import"./getActionGroupSlot-DScHYJoT.js";import"./useStatic-YWRRTJxv.js";import"./LayoutCard-D2W5RdPC.js";import"./Section-BDBFnTnO.js";import"./ContextMenuSection-ChZ4OnoY.js";import"./lib-90ocxLs-.js";import"./Action-fZniNiQj.js";import"./context-dInkHyA4.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const ie=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,a as Success,o as Warning,ie as __namedExportsOrder,ne as default};
