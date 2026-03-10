import{j as e}from"./iframe-BOfxQ126.js";import{A as a}from"./Alert-DMB8Y7a9.js";import{H as n}from"./Heading-XWK9z325.js";import{C as p}from"./Content-C0CTBJnI.js";import d from"./Default.stories-CYAQqcQU.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CIUnjm1o.js";import"./IconWarning-BoBPkWIf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./index-X6kmY2GD.js";import"./remote-DjEyU7NV.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./dynamic-BEImSkKK.js";import"./Heading-t8wVFZ6a.js";import"./RSPContexts-8t9TLuqJ.js";import"./utils-Ca0-H8MP.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./Button-y6FeYCBC.js";import"./LoadingSpinner-BjosoRSs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-up0eurfY.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./ActionGroup-BJX7-2AL.js";import"./getActionGroupSlot-RLrBfD2i.js";import"./useStatic-DMadDPeg.js";import"./LayoutCard-CeSa2iFj.js";import"./Section-C6FrpL68.js";import"./ContextMenuSection-cxjJtW6K.js";import"./ActionBatch-B3OckZQJ.js";import"./useOverlayController-NqoHBo9l.js";import"./Dialog-CCDN7DJz.js";import"./OverlayArrow-DOAKdHdF.js";import"./useControlledState-DE1u8yHr.js";import"./Collection-B3wPaI_q.js";import"./CollectionBuilder-D0zf41op.js";import"./SelectionIndicator-DVX-Gi0p.js";import"./Separator-BU8JOY49.js";import"./SelectionManager-ItpN5XhA.js";import"./useEvent-BMn21gml.js";import"./useCollator-CnlvukHk.js";import"./FocusScope-CCHjHw-t.js";import"./VisuallyHidden-DfBCvB4u.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
