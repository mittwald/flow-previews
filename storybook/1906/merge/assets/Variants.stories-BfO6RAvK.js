import{j as e}from"./iframe-B9oS1eAm.js";import{A as a}from"./Alert-DmsPp3yx.js";import{H as n}from"./Heading-DxBk4dsC.js";import{C as p}from"./Content-BYVWNdIq.js";import d from"./Default.stories-DLFEcxcb.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CyL6LR1b.js";import"./IconWarning-CbErselp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./index-CYuWkd4j.js";import"./remote-B89JZTQ6.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./dynamic-D5cDPq7G.js";import"./Heading-DFJD7l83.js";import"./RSPContexts-BiSXvS4y.js";import"./utils-CkbQ6lDO.js";import"./Text-D9DZPtYx.js";import"./browser-DuZ3LDHb.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./Button-DYAI_N0q.js";import"./LoadingSpinner-BCe3g54S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./ActionGroup-C8kGbhyk.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./useStatic-D0W9io-P.js";import"./LayoutCard-BpzFgZly.js";import"./Section-BlZng62t.js";import"./ContextMenuSection-B77fxBO-.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./Dialog-DQxs1UCg.js";import"./OverlayArrow-D190ErXx.js";import"./useControlledState-BhPlyXsf.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./VisuallyHidden-D5FMvG_d.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
