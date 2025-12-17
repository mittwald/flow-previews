import{j as e}from"./iframe-BJ1-yygM.js";import{A as a}from"./Alert-CbysDakc.js";import{H as n}from"./Heading-D6aYHOG-.js";import{C as p}from"./Content-CFpBjhPg.js";import m from"./Default.stories-BkbxezIP.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CnQXyn1d.js";import"./IconChevronDown-CrWkAVaz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./remote-CmT8aojC.js";import"./IconDanger-CYKvK3jT.js";import"./IconInfo-D8-cEu7p.js";import"./IconCircleCheck-BFEG22El.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./dynamic-80JeIFF7.js";import"./Heading-CdNRKyim.js";import"./RSPContexts-50ouH6ts.js";import"./utils-CcDDSJ_p.js";import"./Text-DheJl8Kj.js";import"./browser-DT5Kx7EO.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./Button-Cjtrvck7.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhOdN5WZ.js";import"./ProgressBar-M3cNuExw.js";import"./Label-CzmfrLRz.js";import"./Hidden-DoQenIIt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./ActionGroup-eYecTP4S.js";import"./getActionGroupSlot-0vgdHqUy.js";import"./useStatic-hN62Mrr5.js";import"./LayoutCard-BJNlNNg6.js";import"./Section-bElmBl_A.js";import"./ContextMenuSection-D1y8_-WQ.js";import"./lib-90ocxLs-.js";import"./Action-BvXzPu3R.js";import"./context-C5k-fmhI.js";import"./Dialog-e6B9GMJE.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useEvent-BqUxelCP.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./dummyText-CX_I_Wpl.js";const ve={...m,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ae=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,Ae as __namedExportsOrder,ve as default};
