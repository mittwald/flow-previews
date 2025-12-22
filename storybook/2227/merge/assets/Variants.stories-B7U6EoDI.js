import{j as e}from"./iframe-XJIuIQsX.js";import{A as a}from"./Alert-Dm-GEyqj.js";import{H as n}from"./Heading-M0mrZOb3.js";import{C as p}from"./Content-DGwv7Ips.js";import d from"./Default.stories-F2825Ufj.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-u3QLPLoz.js";import"./IconWarning-Dh1UuZN-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./remote-Ep0bJUq6.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./context-DW91oCRu.js";import"./dynamic-BLJCE7jR.js";import"./Heading-BJR3kI60.js";import"./RSPContexts-CKZ7RQV4.js";import"./utils-OSbsBMtV.js";import"./Text-CrMkSLGe.js";import"./browser-BhoN5hvb.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./Button-B3qcLgg7.js";import"./LoadingSpinner-CuoS48qC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAG3sHuP.js";import"./ProgressBar-BrwhHLJj.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEhEh88f.js";import"./useFocus-CATpB0h3.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./ActionGroup-CXEtNV5m.js";import"./getActionGroupSlot-Cw46BERC.js";import"./useStatic-Badjbl0n.js";import"./LayoutCard-DbjaP5YT.js";import"./Section-ec-jB7Az.js";import"./ContextMenuSection-Bgb904Cq.js";import"./Action-Dpd9i1rx.js";import"./context-BdOjCQgT.js";import"./Dialog-DrSVAvJg.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
