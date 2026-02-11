import{j as e}from"./iframe-B___tkgA.js";import{A as a}from"./Alert-BbqcBDJr.js";import{H as n}from"./Heading-LM5CzMob.js";import{C as p}from"./Content-C2QasWMk.js";import d from"./Default.stories-sBTiU8vt.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-COjYyYJX.js";import"./IconWarning-DnK3ATSm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bo9LBx3J.js";import"./index-CJe1Xv2T.js";import"./index-2yYueaxI.js";import"./remote-CwYVL4Pl.js";import"./useLocalizedStringFormatter-BO-JJMTJ.js";import"./context-CHjly9N5.js";import"./dynamic-BEuCOou2.js";import"./Heading-2NkxAW1G.js";import"./RSPContexts-xv2R9swO.js";import"./utils-BoKG2kRw.js";import"./Text-C5KW7r-3.js";import"./browser-C6gsgKxf.js";import"./EmulatedBoldText-BcNjSABl.js";import"./Text-CbxRuAhG.js";import"./Button-CK4qYUON.js";import"./LoadingSpinner-gELkMREc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-dgLzajPx.js";import"./ProgressBar-CdmwSyiz.js";import"./Label-BwlZgh8W.js";import"./Hidden-DKsxRYjN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CH6QmtjC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-XNzvlEPV.js";import"./useFocus-x-GTmi1B.js";import"./useFocusRing-BdE9QsVo.js";import"./useFocusable-DdN6L3mC.js";import"./ActionGroup-BHdTvu9o.js";import"./getActionGroupSlot-CLc7h3ns.js";import"./useStatic-DSdFfo4Y.js";import"./LayoutCard-p7z_TzzR.js";import"./Section-DE9sm5BA.js";import"./ContextMenuSection-BssuI41M.js";import"./Action-DRwD3AMr.js";import"./context-iZF9qbeo.js";import"./Dialog-SqXlQhu9.js";import"./OverlayArrow-De6KLSjI.js";import"./useControlledState-xG-Gpz3Z.js";import"./Collection-XdP36m4g.js";import"./CollectionBuilder-BV7ZWrgu.js";import"./SelectionIndicator-D7aQ_5Xi.js";import"./Separator-7ST9riI-.js";import"./SelectionManager-BkOmbFBM.js";import"./useEvent-FGSNypfV.js";import"./useCollator-C6qS_GFX.js";import"./FocusScope-6XhI78W1.js";import"./VisuallyHidden-feej_kfu.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
