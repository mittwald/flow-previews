import{j as e}from"./iframe-BUwXHbLV.js";import{A as a}from"./Alert-02BQnMa1.js";import{H as n}from"./Heading-DVvJZI_m.js";import{C as p}from"./Content-BB0aPxBH.js";import d from"./Default.stories-D0AAKWox.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Dx8NA4Z8.js";import"./IconWarning-DpZLdH-i.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./remote-DgECwzV4.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./dynamic-jPtu3qAR.js";import"./Heading-Bx_NYZMu.js";import"./RSPContexts-CfLLQl4G.js";import"./utils-JDwP1GoF.js";import"./Text-DQHJUI0D.js";import"./browser-DgSxuaKY.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";import"./Button-C47X2BbH.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcgTA6VC.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./ActionGroup-B01MVWJe.js";import"./getActionGroupSlot-BbKcnB6j.js";import"./useStatic-BtWsPYN-.js";import"./LayoutCard-De5q3GLF.js";import"./Section-DvLGNmum.js";import"./ContextMenuSection-C1ahiJOH.js";import"./Action-Wt0sSzk-.js";import"./context-BtwGTzrQ.js";import"./Dialog-2n0yrNbm.js";import"./OverlayArrow-CQQ2-IZh.js";import"./useControlledState-DYrRTv7P.js";import"./Collection-X5iiX-bG.js";import"./CollectionBuilder-BS4P0rnp.js";import"./SelectionIndicator-CP3BVA3N.js";import"./Separator-BSF4rUHh.js";import"./SelectionManager-DzUqgA1m.js";import"./useEvent-BDYLqd-z.js";import"./useCollator-DJB12Mbt.js";import"./FocusScope-l2gJymgt.js";import"./VisuallyHidden-Cs-P9S0b.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
