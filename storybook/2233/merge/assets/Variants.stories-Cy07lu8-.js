import{j as e}from"./iframe-BpfR1GYm.js";import{A as a}from"./Alert-BXLpfJz9.js";import{H as n}from"./Heading-gFHdw-hu.js";import{C as p}from"./Content-J9b4UxrO.js";import d from"./Default.stories-Dpl7KXBj.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BPm48GUQ.js";import"./IconWarning-BOf1a1NO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./remote-Cr2dkfGH.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./dynamic-B2LUuPCk.js";import"./Heading-BjKLoeTv.js";import"./RSPContexts-DDsKHTka.js";import"./utils-z0hzRCNL.js";import"./Text-jE0jlBS1.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./Button-C4OB0yac.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VEcsoWoE.js";import"./useFocus-ZHbPEGRJ.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./ActionGroup-CzX-fkcj.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./useStatic-C8Msussh.js";import"./LayoutCard-D3U-RCul.js";import"./Section-dj9_tl4m.js";import"./ContextMenuSection-DF0tWoMk.js";import"./Action-BgYAV17K.js";import"./context-CfiW950r.js";import"./Dialog-B9wBOAXv.js";import"./OverlayArrow-CweGqLKW.js";import"./useControlledState-Bs2ReOE0.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
