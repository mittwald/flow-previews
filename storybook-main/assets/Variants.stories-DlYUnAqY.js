import{j as e}from"./iframe-agbTJ2rk.js";import{A as a}from"./Alert-CnNHI-KX.js";import{H as n}from"./Heading-CGG9RSyu.js";import{C as p}from"./Content-v0RivIxF.js";import d from"./Default.stories-BkmkcIJp.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DN21MApN.js";import"./IconWarning-DBJeVzaP.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Tp6-knTL.js";import"./index-Ck1XmQF-.js";import"./index-DPEh44cd.js";import"./remote-zpHok2y4.js";import"./useLocalizedStringFormatter-DfJx7LFE.js";import"./context-DNnfn7OO.js";import"./dynamic-9PkN5S4U.js";import"./Heading-Clp5RNdF.js";import"./RSPContexts-H7hhohAE.js";import"./utils-Cg5Rmuuc.js";import"./Text-DmtEYLwi.js";import"./browser-DcYn1DNE.js";import"./EmulatedBoldText-_6M-JboB.js";import"./Text-B3pB98UM.js";import"./Button-Br9Yc6cY.js";import"./LoadingSpinner-CHOtYrBZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-KwBkKB1A.js";import"./ProgressBar-Dtf2TWy6.js";import"./Label-Da0PgXCv.js";import"./Hidden-DehNc1Kw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-COQ7NCDT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DrXmkjxU.js";import"./useFocus-BFA9Y66r.js";import"./useFocusRing-Df3re3NP.js";import"./useFocusable-Dcrl6Kh-.js";import"./ActionGroup-B8CTPXx_.js";import"./getActionGroupSlot-_GbbmTSO.js";import"./useStatic-C0pFV-a-.js";import"./LayoutCard-Dj6HWevn.js";import"./Section-CtAmdGju.js";import"./ContextMenuSection-BNQ2j9mF.js";import"./Action-KXOin-yd.js";import"./context-Dm2xLzXZ.js";import"./Dialog-A1OcXUz0.js";import"./OverlayArrow-CJVRO-c0.js";import"./useControlledState-JGLxFfPu.js";import"./Collection-BaJavd6-.js";import"./CollectionBuilder-DOQcLAsT.js";import"./SelectionIndicator-DWRc_aAr.js";import"./Separator-CPdY11g5.js";import"./SelectionManager-CzUgCcIX.js";import"./useEvent-CRzL3U9d.js";import"./useCollator-CQ6xU2WO.js";import"./FocusScope-COCAXuyM.js";import"./VisuallyHidden-C-SP4JvM.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
