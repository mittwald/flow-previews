import{j as e}from"./iframe-VGYf9uSR.js";import{A as n}from"./Alert-CTp7C3VO.js";import{H as i}from"./Heading-D2Jr2YRs.js";import{C as p}from"./Content-BQB-04b5.js";import d from"./Default.stories-DNmG8y5a.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BmC6g05h.js";import"./IconChevronDown-Dgoj3MhV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./remote-B1HlY5fu.js";import"./IconDanger-B5Kx1O1H.js";import"./IconInfo-poMXff9G.js";import"./IconCircleCheck--RtJ5U3q.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./dynamic-BXsOFxWd.js";import"./Heading-CvNhLKAf.js";import"./RSPContexts-D2Dnlu1I.js";import"./utils-BB4afhje.js";import"./Text-CGbJaU4z.js";import"./browser-BY7YAvyX.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./Button-C33JxfbF.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./ActionGroup-BlzYnYWF.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./useStatic-DRLyxIeE.js";import"./LayoutCard-1u8pm7Ff.js";import"./Section-DooU3tnD.js";import"./ContextMenuSection-BlQWtT47.js";import"./lib-90ocxLs-.js";import"./Action-BU572vpz.js";import"./context-DPoGZDoo.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const ie=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,a as Success,o as Warning,ie as __namedExportsOrder,ne as default};
