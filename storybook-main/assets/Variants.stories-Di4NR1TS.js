import{j as e}from"./iframe-Dx38AIDT.js";import{A as a}from"./Alert-B0DaSYrZ.js";import{H as n}from"./Heading-z0nw7kl0.js";import{C as p}from"./Content-DSBqSoeM.js";import d from"./Default.stories-C_WUOSMl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BbY5ij-p.js";import"./IconWarning-tem5fYZU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./index-C4zw0wF6.js";import"./remote-C7_Ru_dB.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./dynamic-Cw331Sxy.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./utils-uxa8p5vl.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./Button-Bhwtl7lS.js";import"./LoadingSpinner-CAXp-11u.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./ActionGroup-CluBBM4L.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./useStatic-CD9yQ0OW.js";import"./LayoutCard-DtWBcYeK.js";import"./Section-CzQEEFga.js";import"./ContextMenuSection-Bnn5st86.js";import"./ActionBatch-B-iA-QhY.js";import"./useOverlayController-Cqh70DsD.js";import"./Dialog-BIvPa65M.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
