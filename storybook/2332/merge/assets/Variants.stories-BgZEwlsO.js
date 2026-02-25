import{j as e}from"./iframe-COJ9RE48.js";import{A as a}from"./Alert-BDw6Uzq1.js";import{H as n}from"./Heading-DxYLpioN.js";import{C as p}from"./Content-CnaSOdl5.js";import d from"./Default.stories-BTpvfbOa.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BTDbiAGg.js";import"./IconWarning-BMwiqmvN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./remote-BHpqvLOn.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./context-6fEx4cd5.js";import"./dynamic-CTxK5DLa.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./utils-mqorQ4Bj.js";import"./Text-Bzpr-GrC.js";import"./browser-DOjt7J27.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./Button-CMQanS4m.js";import"./LoadingSpinner-CBTolouR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BX1Wpmoy.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CI06DRQW.js";import"./useFocus-C0sdQCtL.js";import"./useFocusRing-CTczndmn.js";import"./useFocusable-_fwbj2-b.js";import"./ActionGroup-De8HYD8X.js";import"./getActionGroupSlot-CmDqFskk.js";import"./useStatic-BccM3ree.js";import"./LayoutCard-BVwGY8YG.js";import"./Section-CUB_WQoM.js";import"./ContextMenuSection-BD_6r0jM.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./Dialog-Bn1iAsfr.js";import"./OverlayArrow-BueQpaoQ.js";import"./useControlledState-BKL31WKE.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
