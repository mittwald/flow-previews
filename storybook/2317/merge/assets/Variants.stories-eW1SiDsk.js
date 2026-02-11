import{j as e}from"./iframe-Czt-X4mt.js";import{A as a}from"./Alert-3ZUKAXkF.js";import{H as n}from"./Heading-53sbNT6w.js";import{C as p}from"./Content-jnZmEVum.js";import d from"./Default.stories-CIxp7VZF.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DBLlr2Uy.js";import"./IconWarning-CEtgECHE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./index-Dtw36EGp.js";import"./remote-hRcAmPck.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./dynamic-BXoid3qz.js";import"./Heading-DpW_T125.js";import"./RSPContexts-BGSIbyEV.js";import"./utils-CU6JriEK.js";import"./Text-8ynHQhOY.js";import"./browser-CPd8oh-y.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./Button-CD6msFpC.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEVH16Jn.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./ActionGroup-DjlBFa1z.js";import"./getActionGroupSlot-5QVk2C33.js";import"./useStatic-C0a0tu6G.js";import"./LayoutCard-CCG9FBKu.js";import"./Section-D-QcuIGE.js";import"./ContextMenuSection-CUYBU0Kr.js";import"./Action-BQrZ3ZgM.js";import"./context-CNfFuvDb.js";import"./Dialog-CYkX7YiI.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
