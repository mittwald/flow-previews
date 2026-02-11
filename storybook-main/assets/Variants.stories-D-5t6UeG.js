import{j as e}from"./iframe-DzjGvN4s.js";import{A as a}from"./Alert-C9vFcRTi.js";import{H as n}from"./Heading-J6woGLR_.js";import{C as p}from"./Content-Dmqb4m3D.js";import d from"./Default.stories-CgFnlbxx.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-C0w0dGgz.js";import"./IconWarning-s7NSVc-U.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./remote-cWDQ0h3n.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./dynamic-D8j0vgwF.js";import"./Heading-DMPfqJKh.js";import"./RSPContexts-D4WEG-B8.js";import"./utils-CaY6-C_T.js";import"./Text--QhKw61r.js";import"./browser-DnRnaS9W.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./Button-BJ_Dg9g5.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3so-j8A.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./ActionGroup-7GnL-udW.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./useStatic-CvNWVJY5.js";import"./LayoutCard-aWt8OjWH.js";import"./Section-BM-LoTUP.js";import"./ContextMenuSection-ehzNPOBV.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./Dialog-BxRkHkZu.js";import"./OverlayArrow-k_B_Hrky.js";import"./useControlledState-DSekeTPZ.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
