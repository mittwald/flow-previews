import{j as e}from"./iframe-DQPKoo92.js";import{A as a}from"./Alert-C44y8C4k.js";import{H as n}from"./Heading-BY6Bbsl0.js";import{C as p}from"./Content-BOD0dwE4.js";import d from"./Default.stories-CCg-Tf23.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-v4rlNZlK.js";import"./IconWarning-CpLICj99.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./index-CnP3WCIP.js";import"./remote-BNYVvti7.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./dynamic-DGh7GyZ8.js";import"./Heading-CRkNhhGs.js";import"./RSPContexts-C1KLf5C0.js";import"./utils-XAdJPTNp.js";import"./Text-C51WlGhJ.js";import"./browser-ChlnFVHS.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./Button-0l0f_jx8.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7sB4TeW.js";import"./ProgressBar-Cy5AjeoP.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DkBHutKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByCBMVLm.js";import"./useFocus-BE88ppMu.js";import"./useFocusRing-Cni30Eah.js";import"./useFocusable-DX4YK8A-.js";import"./ActionGroup-BPPgCs6z.js";import"./getActionGroupSlot-BNoomJEc.js";import"./useStatic-AmwUmW1y.js";import"./LayoutCard-BL5U1v4D.js";import"./Section-CU_KJgGZ.js";import"./ContextMenuSection-BCwogbjE.js";import"./Action-DXbaOV3K.js";import"./context-Fi_0LQNU.js";import"./Dialog-DjFTJjHY.js";import"./OverlayArrow-CG2s7j2J.js";import"./useControlledState-CudIhSdL.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
