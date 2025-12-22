import{j as e}from"./iframe-CcUuYubL.js";import{A as a}from"./Alert-GGlqovJz.js";import{H as n}from"./Heading-BKl3Ob1v.js";import{C as p}from"./Content-DB6Udo0c.js";import d from"./Default.stories-DbdNU0tl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CFwObQfk.js";import"./IconWarning-BDjC6xOL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./index-C6oVqO8J.js";import"./remote-DfJLRaxN.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./context-BiAKFHSE.js";import"./dynamic-BvCZ3AJL.js";import"./Heading-DhOjZbSl.js";import"./RSPContexts-CCIxlK1Q.js";import"./utils-B3A9CwVo.js";import"./Text-DY9Wsurd.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";import"./Text-B0FzOrzN.js";import"./Button-hsF3uCN8.js";import"./LoadingSpinner-BSrbl83B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-Fqqf34.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./ActionGroup-DcOYVajW.js";import"./getActionGroupSlot-COit0AjF.js";import"./useStatic-DtEAcyvY.js";import"./LayoutCard-CH-RsNcx.js";import"./Section-nZGbnrhV.js";import"./ContextMenuSection-DMta75t3.js";import"./Action-B5lNwIyS.js";import"./context-BjvrdVaN.js";import"./Dialog-mDFWR8fO.js";import"./OverlayArrow-LMNtsg17.js";import"./useControlledState-Cd7zGKC9.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./SelectionManager-Cr3dwni9.js";import"./useEvent-BHYxhhiC.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
