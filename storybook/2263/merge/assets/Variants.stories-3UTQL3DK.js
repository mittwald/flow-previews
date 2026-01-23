import{j as e}from"./iframe-Pk_Kk4JL.js";import{A as a}from"./Alert-BojmLLtX.js";import{H as n}from"./Heading-wNCcNm7o.js";import{C as p}from"./Content-Cb3yoLz5.js";import d from"./Default.stories-Bl3o7hbD.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BQAdHRLg.js";import"./IconWarning-BZbEOivs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-c6eRnhhg.js";import"./index-Cry2UgUa.js";import"./index-BO3AnCjb.js";import"./remote-jZTk_Znj.js";import"./useLocalizedStringFormatter-DWczizNw.js";import"./context-CrHSUJ76.js";import"./dynamic-I4mA0X6x.js";import"./Heading-CHcXaZb2.js";import"./RSPContexts-DW-Mep96.js";import"./utils-CLxMEgR2.js";import"./Text-yAUoHBmv.js";import"./browser-DxGxcnNA.js";import"./EmulatedBoldText-B0MH6cxw.js";import"./Text-cuBcImQE.js";import"./Button-D9QX6l1e.js";import"./LoadingSpinner-DPjJtv8A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmNC7e_S.js";import"./ProgressBar-R9Q052Y1.js";import"./Label-BhzG_WzN.js";import"./Hidden-D3BnJIdN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C5txBCfY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhJiygMU.js";import"./useFocus-CG8bKOp6.js";import"./useFocusRing-Cf40KqTj.js";import"./useFocusable-6mL9jMN5.js";import"./ActionGroup-Bf9c-qmg.js";import"./getActionGroupSlot-CPzpUO6W.js";import"./useStatic-i-ZCX3ob.js";import"./LayoutCard-rF7vKsyt.js";import"./Section-CNK16UAG.js";import"./ContextMenuSection-C_1sxa8j.js";import"./Action-C8SSnKxx.js";import"./context-DgSiNkYd.js";import"./Dialog-hqEaC_v2.js";import"./OverlayArrow-CX4Z7_7Y.js";import"./useControlledState-48Ld73MP.js";import"./Collection-BHxA-DrM.js";import"./CollectionBuilder-DoPbpSH9.js";import"./SelectionIndicator-yei3WI6a.js";import"./Separator-BBzznqX8.js";import"./SelectionManager-BkRtV5Co.js";import"./useEvent-CPz9WXw8.js";import"./useCollator-Doi6oCed.js";import"./FocusScope-CxdKQmWN.js";import"./VisuallyHidden-DaiW9JEZ.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
