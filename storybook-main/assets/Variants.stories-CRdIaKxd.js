import{j as e}from"./iframe-BB26x0WO.js";import{A as a}from"./Alert-9MF9pbBr.js";import{H as n}from"./Heading-DjuXjgcE.js";import{C as p}from"./Content-stq0oOLC.js";import d from"./Default.stories-Cy0XxvzL.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-8w60vasN.js";import"./IconWarning-xtBRgQwR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./index-CQcoQf9d.js";import"./remote-BOIRgCVv.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./dynamic-iWxR2zWf.js";import"./Heading-CYNLL9tG.js";import"./RSPContexts-DeiYbaO6.js";import"./utils-B0cjT-cu.js";import"./Text-CVJJy1PS.js";import"./browser-CM4yKXDn.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./Button-BTY4YrG_.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./ActionGroup-B49LzYT3.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./useStatic-CBwNmb4h.js";import"./LayoutCard-CmEcsiqC.js";import"./Section-IPK-m1wF.js";import"./ContextMenuSection-DGimkJAp.js";import"./Action-DydPJm0t.js";import"./context-tsnqiuvV.js";import"./Dialog-rd60ApeF.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
