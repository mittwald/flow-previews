import{j as r}from"./iframe-l1bkuF5f.js";import{H as n}from"./Heading-DaHrt9QJ.js";import c from"./Default.stories-C2e_rT8y.js";import{N as a}from"./Notification-AlCZ0hTa.js";import{T as p}from"./Text-BKhP8tr9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./index-BcUcgGWs.js";import"./Heading-B0CySuUv.js";import"./RSPContexts-D359D01x.js";import"./utils-DCQYs-TM.js";import"./AlertIcon-DudqDlux.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./Button-pfxdB-3A.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./Link-Df9iO5Qx.js";import"./dynamic-BrVBKZhY.js";import"./browser-BVqvvpC_.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
