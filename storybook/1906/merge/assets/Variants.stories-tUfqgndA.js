import{j as e}from"./iframe-B_TkxfTi.js";import{A as a}from"./Alert-CdAhK1GY.js";import{H as n}from"./Heading-DO4971VL.js";import{C as p}from"./Content-BY3AvhYP.js";import d from"./Default.stories-B87Mbu0Z.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DJdpqIO-.js";import"./IconWarning-C-Vc31bm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./index-B6XMVbfI.js";import"./remote-BarzyRQ7.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./dynamic-BusjqWiY.js";import"./Heading-_1YYOm-_.js";import"./RSPContexts-CP1vSDTy.js";import"./utils-CEh0pYpN.js";import"./Text-DZTN4U6B.js";import"./browser-CLjLvoWS.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./Button-RJdr80c6.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./ActionGroup-DrzSRVMS.js";import"./getActionGroupSlot-DtLKsNou.js";import"./useStatic-cRv7_xgS.js";import"./LayoutCard-CN3oo34x.js";import"./Section-DuAyIwjj.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Action-BwMJcjOW.js";import"./context-D9DgwULu.js";import"./Dialog-ChZYysky.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./VisuallyHidden-BGokW8gm.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
