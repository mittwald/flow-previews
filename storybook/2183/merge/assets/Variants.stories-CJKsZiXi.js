import{j as e}from"./iframe-DCi2GPXy.js";import{A as a}from"./Alert-Bog5bm6D.js";import{H as n}from"./Heading-NyshyzbT.js";import{C as p}from"./Content-D7i3lVVV.js";import m from"./Default.stories-QLfWSDhj.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BsLVKBuC.js";import"./IconChevronDown-DONjXQZK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./remote-BdJtJUco.js";import"./IconDanger-RXl46e71.js";import"./IconInfo-Bx5Ze7ly.js";import"./IconCircleCheck-CSqkttT0.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./dynamic-68RthJrk.js";import"./Heading-ogCw2BOE.js";import"./RSPContexts-BfriozQD.js";import"./utils-vPyJ8qyD.js";import"./Text-DKbhm8jI.js";import"./browser-rXh1EgRD.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./Button-BvlVjfXN.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./Label-DnXzFWpe.js";import"./Hidden-DFhlcUMl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./ActionGroup-BxCfhcrh.js";import"./getActionGroupSlot-7vmQNanS.js";import"./useStatic-jalrqC7_.js";import"./LayoutCard-DaH1CwSA.js";import"./Section-DQ10C63T.js";import"./ContextMenuSection-D110vvwB.js";import"./lib-90ocxLs-.js";import"./Action-DSvpN5_w.js";import"./context-sCXpQMxk.js";import"./Dialog-DTMFojiS.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./dummyText-CX_I_Wpl.js";const ve={...m,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
