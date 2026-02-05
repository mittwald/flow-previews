import{j as e}from"./iframe-DdPUg3l1.js";import{A as a}from"./Alert-L5j_9PHt.js";import{H as n}from"./Heading-L1WE8Mc-.js";import{C as p}from"./Content-DSTOuvEd.js";import d from"./Default.stories-fhlvJ_aN.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-PzDvVuZo.js";import"./IconWarning-CBjvo3Bl.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./index-DfF1Hh-7.js";import"./remote-C_Lvi_2k.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./context-eo9HPzgD.js";import"./dynamic-nfXH0DAB.js";import"./Heading-Daf4DLe6.js";import"./RSPContexts-DWbGf7NE.js";import"./utils-CZc2hRnH.js";import"./Text-DjGrgiDc.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./Button-BArDp6jY.js";import"./LoadingSpinner-CrAIHNN2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CezSw_uu.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4aurJT7.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./ActionGroup-DKw0Osps.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./useStatic-BSymBvZm.js";import"./LayoutCard-BKr-27Hh.js";import"./Section-B-inExSs.js";import"./ContextMenuSection-CdzHr0DY.js";import"./Action-C8Qj_gPz.js";import"./context-Dvh-zisW.js";import"./Dialog-B4itYT93.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
