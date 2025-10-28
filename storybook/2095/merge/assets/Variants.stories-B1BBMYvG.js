import{j as r}from"./iframe-DGdLAJHm.js";import{H as a}from"./Heading-CRDqmGt0.js";import c from"./Default.stories-Ptifk_I5.js";import{N as n}from"./Notification-BliiONzr.js";import{T as p}from"./Text-DFxon6If.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./Heading-DVxPUCYC.js";import"./RSPContexts-4eF2sDK2.js";import"./utils-DMxNMt2r.js";import"./AlertIcon-DxCavQbn.js";import"./IconWarning-BY1Q-g8P.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./context-CokKTPHD.js";import"./Button-B6Mqr-fI.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLeCNjtK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B2gRAimw.js";import"./useFocus-Cj45nHC3.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./Link-7RMwdF8f.js";import"./dynamic-DckDcmFh.js";import"./browser-DtJMxQoE.js";import"./EmulatedBoldText-l3o70VD0.js";import"./Text-C5DwW8tZ.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const J=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,J as __namedExportsOrder,G as default};
