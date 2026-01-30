import{j as r}from"./iframe-CZIIjdGx.js";import{H as n}from"./Heading-4cAYx9fy.js";import c from"./Default.stories-CiB9y-md.js";import{N as a}from"./Notification-wkDYRerr.js";import{T as p}from"./Text-B-NqQsb3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./Heading-CVLd5xWO.js";import"./RSPContexts-BcZ6F9IB.js";import"./utils-CzlwFdSi.js";import"./AlertIcon-WrrDZg35.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./Button-ECMB5KMY.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFDeIEOr.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useFocusable-deUO30SV.js";import"./Link-BEFP1Tne.js";import"./dynamic-gRVBa7iD.js";import"./browser-Cl51s5Ql.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
