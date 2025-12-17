import{j as e}from"./iframe-CQakcPxy.js";import{A as a}from"./Alert-BMJldBGO.js";import{H as n}from"./Heading-Dcbcxbjg.js";import{C as p}from"./Content-DNuv7GRL.js";import m from"./Default.stories-DK-wRCRn.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BdYELhGX.js";import"./IconChevronDown-DRX1rHio.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./remote-DEFV7i-V.js";import"./IconDanger-BPWM_X_l.js";import"./IconInfo-BWnzaeUk.js";import"./IconCircleCheck-D-3tUwVE.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./dynamic-smSIHOJr.js";import"./Heading-BFz_o3go.js";import"./RSPContexts-BrDe4Bm2.js";import"./utils-kpK_hrRV.js";import"./Text-BtxvTgzr.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./Button-BgdUtfaQ.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./ActionGroup-BNhvl4_-.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./LayoutCard-J-1emr4t.js";import"./Section-B-CKtBZu.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Action-DugCc7r9.js";import"./context-BwdTo_HZ.js";import"./Dialog-B0kzP3Mz.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./dummyText-CX_I_Wpl.js";const ve={...m,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
