import{j as e}from"./iframe-BwxXT37i.js";import{A as a}from"./Alert-CkMaQEhG.js";import{H as n}from"./Heading-3o8VfDUm.js";import{C as p}from"./Content-DSJl7gyc.js";import d from"./Default.stories-BeWAFsP6.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DLpjaGh3.js";import"./IconWarning-Dl-kSkvo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./index-DuE4n7_M.js";import"./remote-DESTNxfj.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./context-CQJLc664.js";import"./dynamic-dswMj1gt.js";import"./Heading-DQrX8nPA.js";import"./RSPContexts-CqVOzJuC.js";import"./utils-CJgL2cA6.js";import"./Text-COIxE5M6.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Text-CMM9EMAj.js";import"./Button-BPaKVUIt.js";import"./LoadingSpinner-C1b88oeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./ActionGroup-BeR34umf.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./useStatic-DbyoNtmr.js";import"./LayoutCard-Ctl_Th3r.js";import"./Section-DkCPmDIf.js";import"./ContextMenuSection-DLmcvkG_.js";import"./ActionBatch-BYAp_qkn.js";import"./useOverlayController-Clvgh-dL.js";import"./Dialog-B0vuTUBy.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./VisuallyHidden-BP4pgppw.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
