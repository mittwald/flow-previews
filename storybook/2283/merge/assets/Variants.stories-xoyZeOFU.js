import{j as e}from"./iframe-DcJYxA4H.js";import{A as a}from"./Alert-DL58F57Y.js";import{H as n}from"./Heading-CIr8mTXG.js";import{C as p}from"./Content-CMZGeW12.js";import d from"./Default.stories-CH1PTOb0.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-5jttAq4b.js";import"./IconWarning-C1b-rglK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./index-BLaZpk-P.js";import"./remote-Bz3vE1W1.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./dynamic-BeRAROrj.js";import"./Heading-BwYTefZe.js";import"./RSPContexts-B2T9ptP_.js";import"./utils-DilzIpMR.js";import"./Text-DtgxB8-I.js";import"./browser-DuGwj8Dx.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./Button-ByRmZgOS.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoiuKGvm.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./ActionGroup-B_pSbWAL.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./useStatic-CtzGIMZo.js";import"./LayoutCard--vIPIp7X.js";import"./Section-BfQoljOJ.js";import"./ContextMenuSection-QDoQ1eGc.js";import"./Action-Dlz18l4c.js";import"./context-D2f0m16x.js";import"./Dialog-Dz1EswEt.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useControlledState-BqUYry3y.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./VisuallyHidden-5QTr2j1N.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
