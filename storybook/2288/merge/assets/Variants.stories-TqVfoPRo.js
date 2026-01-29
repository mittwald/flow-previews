import{j as r}from"./iframe-BUwXHbLV.js";import{H as n}from"./Heading-DVvJZI_m.js";import c from"./Default.stories-CRiaj3Fr.js";import{N as a}from"./Notification-D4uOROWM.js";import{T as p}from"./Text-DQHJUI0D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BccdMpKE.js";import"./index-hu2bK8ld.js";import"./index-B1fishDV.js";import"./Heading-Bx_NYZMu.js";import"./RSPContexts-CfLLQl4G.js";import"./utils-JDwP1GoF.js";import"./AlertIcon-Dx8NA4Z8.js";import"./IconWarning-DpZLdH-i.js";import"./remote-DgECwzV4.js";import"./useLocalizedStringFormatter-CRJgNNZn.js";import"./context-DM2fd8XH.js";import"./Button-C47X2BbH.js";import"./LoadingSpinner-KdI7mP_U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNkVsOQ0.js";import"./ProgressBar-BJDPOd_q.js";import"./Label-DCpzAobK.js";import"./Hidden-C60b8p3I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcLR3Pis.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BcgTA6VC.js";import"./useFocus-B6YbSr7t.js";import"./useFocusRing-DaHiZmYv.js";import"./useFocusable-Dbq66Fw_.js";import"./Link-CLMsl6et.js";import"./dynamic-jPtu3qAR.js";import"./browser-DgSxuaKY.js";import"./EmulatedBoldText-gevFAAZ0.js";import"./Text-foJVwDWR.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
