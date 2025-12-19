import{j as e}from"./iframe-BVdPrJ3b.js";import{A as a}from"./Alert-2H5MA2nS.js";import{H as n}from"./Heading-CFOSEH3z.js";import{C as p}from"./Content-k2o_zaJ5.js";import d from"./Default.stories-MeR5AJgm.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BrrSUnxf.js";import"./IconWarning-YADbbYCH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./remote-CTgJkn4z.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./dynamic-VccpDVll.js";import"./Heading-BpzKqMX-.js";import"./RSPContexts-Bdb5uPWt.js";import"./utils-BEq1Wr11.js";import"./Text-nQWL8z2r.js";import"./browser-DSBfFWZr.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./Button-DWZoHS5b.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./ActionGroup-x2U4gVAf.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./useStatic-BX7NV0z1.js";import"./LayoutCard-BUAkctIs.js";import"./Section-B0Q_DjwJ.js";import"./ContextMenuSection-97x_J9aj.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./Dialog-BIQQDMqR.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
