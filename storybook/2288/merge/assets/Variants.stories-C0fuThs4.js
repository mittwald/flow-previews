import{j as e}from"./iframe-BipmDVic.js";import{A as a}from"./Alert-CnpJqvP3.js";import{H as n}from"./Heading-BRGw-waJ.js";import{C as p}from"./Content-C3tDFab4.js";import d from"./Default.stories-8Ym6yf--.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Cy_cDr6j.js";import"./IconWarning-CGnZi41_.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./index-DhRV0L_D.js";import"./remote-Bx5-otuG.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./dynamic-5Me7t2_P.js";import"./Heading-uHa7bb0l.js";import"./RSPContexts-EgPs8m3a.js";import"./utils-BmvAbY6y.js";import"./Text-D0LSWbFT.js";import"./browser-CR-oUB3P.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./Button-BuQAY4x2.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BGUPUAq5.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useFocusable-CoJ_GBdx.js";import"./ActionGroup-CHTlX6Wu.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./useStatic-DNvp4EKT.js";import"./LayoutCard-BR1SfFRE.js";import"./Section-BSyGStrt.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Action-B2seXdE0.js";import"./context-DDKbSZpU.js";import"./Dialog-BXIha8hU.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
