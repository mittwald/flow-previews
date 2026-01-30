import{j as e}from"./iframe-CGL3Ztd8.js";import{A as a}from"./Alert-BOcNny2-.js";import{H as n}from"./Heading-DBE0Oj6w.js";import{C as p}from"./Content-CnEBeOqD.js";import d from"./Default.stories-DWihW36H.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DM1knw9_.js";import"./IconWarning-CMBZCdTm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./index-eHspQkB2.js";import"./remote-DEzwzibY.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./dynamic-C8bvHICk.js";import"./Heading-CeHJVvL3.js";import"./RSPContexts-Dbu6eLkb.js";import"./utils-BPLHaINM.js";import"./Text-_sa0OuU0.js";import"./browser-Dk-cIrUN.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./Button-CdFi_Gvp.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpWTOkQr.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./ActionGroup-CrScu9QD.js";import"./getActionGroupSlot-D2X8q845.js";import"./useStatic-aF_CYkuk.js";import"./LayoutCard-B9U3UDLr.js";import"./Section-DahycNJE.js";import"./ContextMenuSection-DZtKonlo.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./Dialog-D5rIpj4K.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
