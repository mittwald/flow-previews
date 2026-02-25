import{j as e}from"./iframe-teIxY4wP.js";import{A as a}from"./Alert-Bp6BVLnp.js";import{H as n}from"./Heading-BcZ49Txx.js";import{C as p}from"./Content-C4FtWXhl.js";import d from"./Default.stories-BFfyXEXK.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-nbGMee0S.js";import"./IconWarning-C8c-iA3p.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3BP6Vj1.js";import"./index-Ctx6H3Hx.js";import"./index-SbFVnFKt.js";import"./remote-DC3yMzFm.js";import"./useLocalizedStringFormatter-cjXC4-Kw.js";import"./context-Bkxu1haQ.js";import"./dynamic-Bd0vnJCs.js";import"./Heading-CqSJbJuk.js";import"./RSPContexts-DVypfZug.js";import"./utils-C8wUhSun.js";import"./Text-CB74-0Ir.js";import"./browser-ClA0f7pc.js";import"./EmulatedBoldText-C0BZfzN3.js";import"./Text-BEd6-Qqe.js";import"./Button-CCmGuoae.js";import"./LoadingSpinner-CKqfIoaL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DPcEERaP.js";import"./ProgressBar-uiVLSJyQ.js";import"./Label-CnpPAxdS.js";import"./Hidden-CVxq3czE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BwGc14jy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Znh85jsw.js";import"./useFocus-Pnl5w-Ue.js";import"./useFocusRing-DM5Gti31.js";import"./useFocusable-C4kMCM88.js";import"./ActionGroup-CZ4gZfnQ.js";import"./getActionGroupSlot-BwsAD19l.js";import"./useStatic-JzrpAx77.js";import"./LayoutCard-CF2xhifX.js";import"./Section-CeVx7gOS.js";import"./ContextMenuSection-DZpqaSo0.js";import"./ActionBatch-BzoAcrhu.js";import"./useOverlayController-2V9dFGfh.js";import"./Dialog-CPTLkUM-.js";import"./OverlayArrow-BnOVUBMe.js";import"./useControlledState-Dnjkc9fO.js";import"./Collection-CPWnsoE7.js";import"./CollectionBuilder-6gbuY_L9.js";import"./SelectionIndicator-DFQRQ6iO.js";import"./Separator-BaKjxxxO.js";import"./SelectionManager-Th26CzKh.js";import"./useEvent-BcVdyav8.js";import"./useCollator-Dsy6DAyA.js";import"./FocusScope-Crjq_ymp.js";import"./VisuallyHidden-BEOGf6u-.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
