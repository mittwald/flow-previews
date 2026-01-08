import{j as e}from"./iframe-DqAMh1gn.js";import{A as a}from"./Alert-ACpdYAvh.js";import{H as n}from"./Heading-Cop9Lz_q.js";import{C as p}from"./Content-Bf8h4lUz.js";import d from"./Default.stories-C8xlvBae.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-C7t-BIgM.js";import"./IconWarning-BV3xGinn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./remote-BXLOBgAx.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./dynamic-CAN3WNRI.js";import"./Heading-DO-ilkLm.js";import"./RSPContexts-A1MHH_Cz.js";import"./utils-WhkxUCK6.js";import"./Text-1p9r91sB.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./Text-DmUxfOW-.js";import"./Button-BzL2mXU9.js";import"./LoadingSpinner-BWCnwVbS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRXTkefG.js";import"./ProgressBar-CxeXPRaQ.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BKYm2rJO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ClkvTl3z.js";import"./useFocus-Cr8fiyXD.js";import"./useFocusRing-BN14JWVs.js";import"./useFocusable-DO1mJmot.js";import"./ActionGroup-DpF-aUms.js";import"./getActionGroupSlot-BJX70W99.js";import"./useStatic-BuuX2mtG.js";import"./LayoutCard-DD_OcAXh.js";import"./Section-DqN2VLIl.js";import"./ContextMenuSection-CNlzjKiC.js";import"./Action-B_T5lnyR.js";import"./context-ChmspXAM.js";import"./Dialog-AIPHRx2P.js";import"./OverlayArrow-DNiZVgAH.js";import"./useControlledState-ChPR7hzM.js";import"./Collection-CQjuLfpr.js";import"./CollectionBuilder-Dk_6EAPH.js";import"./SelectionIndicator-Qt-acHPk.js";import"./Separator-CEkzsxq5.js";import"./SelectionManager-CsReWWw0.js";import"./useEvent-DRkjAlB5.js";import"./useCollator-DvzaADfo.js";import"./FocusScope-azgg1m0B.js";import"./VisuallyHidden-B3gyx1tV.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
