import{j as e}from"./iframe-COrLnxQ5.js";import{A as a}from"./Alert-BAKF7-6j.js";import{H as n}from"./Heading--g-KOjmd.js";import{C as p}from"./Content-B4mAPZYH.js";import d from"./Default.stories-BNFprbuC.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DPoTsBR0.js";import"./IconWarning-CG-OJrgb.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./remote-DmDOnO_p.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./dynamic-6q-iLiJj.js";import"./Heading-B77ZBR05.js";import"./RSPContexts-Ds5AG3kQ.js";import"./utils-VsjjISTT.js";import"./Text-xUIxpGpZ.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./Text-DGq4TjGO.js";import"./Button-B5T-9t49.js";import"./LoadingSpinner-BLCck0My.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XrgEKXm-.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYo5WNMt.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./ActionGroup-BkAJhlM8.js";import"./getActionGroupSlot-CizQjHpL.js";import"./useStatic-CZwWlCB5.js";import"./LayoutCard-Be7aPR1E.js";import"./Section-BHGdwW8g.js";import"./ContextMenuSection-Beuid9XD.js";import"./Action-DL1crjzC.js";import"./context-Dy8NilHt.js";import"./Dialog-CXGseDzt.js";import"./OverlayArrow-B9AznsvA.js";import"./useControlledState-B-eslxlj.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./VisuallyHidden-DMXfMtnF.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
