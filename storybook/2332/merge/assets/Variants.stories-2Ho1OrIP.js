import{j as e}from"./iframe-CDsKaBRg.js";import{A as a}from"./Alert-C1fj7hks.js";import{H as n}from"./Heading-DaIr1sLA.js";import{C as p}from"./Content-hDAUdQXl.js";import d from"./Default.stories-BVplxUZT.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BRHbbzl7.js";import"./IconWarning-BO7Rp0Xm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./index-RjKRi-BV.js";import"./remote-CceIEVln.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./dynamic-CtOpUuGK.js";import"./Heading-CTLIsxjY.js";import"./RSPContexts-B8A9jPpa.js";import"./utils-D_LVRUjq.js";import"./Text-BC05_GH2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./Button-DrVGXfuQ.js";import"./LoadingSpinner-COR3vr_l.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./ActionGroup-DpRNak7X.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./useStatic-B_kqalTp.js";import"./LayoutCard-gnmMsCua.js";import"./Section-COUCeP8U.js";import"./ContextMenuSection-BtR3HXLs.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./Dialog-C4SGct0D.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
