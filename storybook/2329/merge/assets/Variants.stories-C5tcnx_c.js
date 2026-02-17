import{j as e}from"./iframe-DU1OTSEW.js";import{A as a}from"./Alert-CVc71XNW.js";import{H as n}from"./Heading-Cl160jiD.js";import{C as p}from"./Content-BXIdNakr.js";import d from"./Default.stories-CGMQ3Tkf.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-_4be_GIR.js";import"./IconWarning-BOLd-bsg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./index-Ben_k6_D.js";import"./remote-C4J6eDzq.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./dynamic-BTXPuCk3.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./utils-Dj7KEBV3.js";import"./Text-BlwSaqXM.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./Button-C02FBbwW.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DCIqPyrL.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./ActionGroup-BZNfB_OW.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./useStatic-B4QbuKZS.js";import"./LayoutCard-C-jRo7YI.js";import"./Section-DIfoCaa5.js";import"./ContextMenuSection-B26kJYav.js";import"./ActionBatch-BeODW9YZ.js";import"./useOverlayController-CN_E_UXR.js";import"./Dialog-rIHNVDTB.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useControlledState-C4NYpY3o.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
