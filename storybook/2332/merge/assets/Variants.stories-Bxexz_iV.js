import{j as e}from"./iframe-DunzINT4.js";import{A as a}from"./Alert-CJoUEBke.js";import{H as n}from"./Heading-ClXpNfz0.js";import{C as p}from"./Content-C85uPduS.js";import d from"./Default.stories-CUVmrXqU.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Bju3yLvF.js";import"./IconWarning-kFcnfyhN.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./index-Wl0ZfLjP.js";import"./remote-BHsosJBg.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./dynamic--RH-hhxe.js";import"./Heading-B3Dcho9D.js";import"./RSPContexts-DYG4soUM.js";import"./utils-B66WPIWK.js";import"./Text-DTHO_DRR.js";import"./browser-CUqULdV9.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./Text-CMXpTIb-.js";import"./Button-D4ye7DRq.js";import"./LoadingSpinner-CzZyxAnt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VDpDAbVy.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./ActionGroup-CU6CeMc_.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./useStatic-CPAaCdO2.js";import"./LayoutCard-DRsIjjVk.js";import"./Section-M7f3R8gL.js";import"./ContextMenuSection-BBATHhHi.js";import"./ActionBatch-CdGiFur7.js";import"./useOverlayController-CeSeYZW0.js";import"./Dialog-Da1bNoxP.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
