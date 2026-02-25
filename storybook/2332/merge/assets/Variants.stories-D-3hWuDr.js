import{j as e}from"./iframe-PZSwL5UI.js";import{A as a}from"./Alert-BV2qENr4.js";import{H as n}from"./Heading-DkYLS7Fi.js";import{C as p}from"./Content-DRuiMhgn.js";import d from"./Default.stories-BUkBP0Qr.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BtM4zuia.js";import"./IconWarning-Brl3hUMe.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./index-Da7vmrj1.js";import"./remote-mdYu2fN6.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./dynamic-DDVyub9n.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./utils-lOj21ZD_.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./Button-Dx8ytIXV.js";import"./LoadingSpinner-kHlSwNnH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./ActionGroup-CuC620Qy.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./useStatic-Bw6k9Sf5.js";import"./LayoutCard-BwyTnhJL.js";import"./Section-Ly32yzfQ.js";import"./ContextMenuSection-B4TWz5w1.js";import"./ActionBatch-KmZgQ_FO.js";import"./useOverlayController-BVZAJrcY.js";import"./Dialog-BxivZnjn.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
