import{j as r}from"./iframe-wn9t8CHT.js";import{H as n}from"./Heading-BtcPMLbU.js";import c from"./Default.stories-BaO_UfTZ.js";import{N as a}from"./Notification-C3NWkDQn.js";import{T as p}from"./Text-vlZ105c0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./Heading-BifW3h1d.js";import"./RSPContexts-CP6K_mUq.js";import"./utils-BBqjM3mV.js";import"./AlertIcon-CswpW_U3.js";import"./IconWarning-B-Wnft1S.js";import"./remote-BKPU2Q50.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./context-DUIKEoYM.js";import"./Button-CkMrcy8B.js";import"./LoadingSpinner-C5pntlan.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C_8bimI7.js";import"./ProgressBar-DYDTpv9y.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfKSfnQU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-febwKXtN.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./useFocusable-MJ0CU3Gf.js";import"./Link-CQfFXbKR.js";import"./dynamic-Ce3zwrtf.js";import"./browser-C4GSjbSD.js";import"./EmulatedBoldText-BRurVn-6.js";import"./Text-CigTZLQg.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <strong>My Project</strong> is over 80%
        utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <strong>example.de</strong>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <strong>My WordPress</strong> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const K=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,K as __namedExportsOrder,J as default};
