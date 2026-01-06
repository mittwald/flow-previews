import{j as e}from"./iframe-BAg_Vkif.js";import{A as a}from"./Alert-Dh5w4qtU.js";import{H as n}from"./Heading-Dn2ss8TC.js";import{C as p}from"./Content-DJ9loXLW.js";import d from"./Default.stories-DrnuBxhl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Ce-Fu2Pm.js";import"./IconWarning-eOJWxr99.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./index-ClwrdcL8.js";import"./remote-OUS6bpte.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./dynamic-eE1nsZvE.js";import"./Heading-DM0DAFfT.js";import"./RSPContexts-DM5FD37h.js";import"./utils-BI8UFEcl.js";import"./Text-Cv_CDcg6.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./Button-CNza9GnT.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./ActionGroup-DE4bxHka.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./useStatic-DpED2Oge.js";import"./LayoutCard-De3SrqoF.js";import"./Section-k31Ld_a5.js";import"./ContextMenuSection-BZOfIkxf.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./Dialog-BlnwYq_Z.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
