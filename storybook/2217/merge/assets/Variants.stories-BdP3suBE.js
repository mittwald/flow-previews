import{j as e}from"./iframe-CywxDTj6.js";import{A as a}from"./Alert-B8OhBb3d.js";import{H as n}from"./Heading-DXOJNO6C.js";import{C as p}from"./Content-J8ZeJdWr.js";import d from"./Default.stories-CRlAJtM1.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-B_eZBptx.js";import"./IconWarning-BQFONsdl.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./index-CFicy-UB.js";import"./remote-DxJecAWu.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./context-Wz-N3Tdz.js";import"./dynamic-D64zpBY8.js";import"./Heading-C30wQAmC.js";import"./RSPContexts-DB0ICqF0.js";import"./utils-JmAwA3ix.js";import"./Text-vlJOJK2L.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./Button-Dt6rqZC2.js";import"./LoadingSpinner-Byj--1Pk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DzvzizsP.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./ActionGroup-C_Gw-9qw.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./useStatic-B4t8cENg.js";import"./LayoutCard-Cc75chyW.js";import"./Section-DFnKKkTa.js";import"./ContextMenuSection-DDk2X5KZ.js";import"./Action-DyuzWneU.js";import"./context-DM4I0BsB.js";import"./Dialog-RfbYVzK-.js";import"./OverlayArrow-kC1F2-h6.js";import"./useControlledState-CrIAtAXB.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./VisuallyHidden-CBo5v6jz.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
