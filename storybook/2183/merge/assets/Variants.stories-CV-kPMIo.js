import{j as e}from"./iframe-Bqcpbrss.js";import{A as a}from"./Alert-DI9LwR5l.js";import{H as n}from"./Heading-BG_QqVK-.js";import{C as p}from"./Content-BAy1Pxe2.js";import d from"./Default.stories-bPMZ8vR9.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-glPdrYUy.js";import"./IconWarning-dEqiOsyE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./index-H5GW8qHY.js";import"./remote-DG6VBXek.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./dynamic-Dekqokaj.js";import"./Heading-BNK1YdHX.js";import"./RSPContexts-DpyQuSVh.js";import"./utils-BJedWkRC.js";import"./Text-BTcvwTq1.js";import"./browser-C4ue27yU.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./Button-Cnlerii9.js";import"./LoadingSpinner-CCDMAFHO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./ActionGroup-6G6paD9M.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./useStatic-DxBp64zy.js";import"./LayoutCard-C8zdNUur.js";import"./Section-Bc1hD-fo.js";import"./ContextMenuSection-C08RkJTE.js";import"./Action-B2JQUsel.js";import"./context-ChzSVWNL.js";import"./Dialog-Dpg78GNT.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
