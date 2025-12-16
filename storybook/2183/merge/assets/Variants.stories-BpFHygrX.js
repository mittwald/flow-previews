import{j as e}from"./iframe-ChZoSAk9.js";import{A as a}from"./Alert-htaN1kc8.js";import{H as n}from"./Heading-BFoi8RIL.js";import{C as p}from"./Content-D-Qpjw7t.js";import m from"./Default.stories-kFWgEB2n.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DeYsfQR_.js";import"./IconApp-jg62nbZM.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./remote-CMT6q-r_.js";import"./IconDanger-bNuP_yaN.js";import"./IconInfo-DHgWbHqo.js";import"./IconCircleCheck-DyvU8reI.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./dynamic-D_MCnPMN.js";import"./Heading-zVGhBSeg.js";import"./RSPContexts-BuIIeKa7.js";import"./utils-3orXHcy8.js";import"./Text-DeId_uwd.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./Button-igkSssls.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./ActionGroup-BqXbSba3.js";import"./getActionGroupSlot-D9Q9Xlmq.js";import"./useStatic-YkfQLHoK.js";import"./LayoutCard-YcDQHaby.js";import"./Section-aVFZU63j.js";import"./ContextMenuSection-b1V79oDp.js";import"./lib-90ocxLs-.js";import"./Action-CVNqq51W.js";import"./context-DK_eOJFA.js";import"./Dialog-B1ggtFGC.js";import"./OverlayArrow-BwEdTwQI.js";import"./useControlledState-CXwLHBKW.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useEvent-D5qx-uIw.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./dummyText-CX_I_Wpl.js";const ve={...m,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ae=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,Ae as __namedExportsOrder,ve as default};
