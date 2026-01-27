import{j as r}from"./iframe-EUG4rdOg.js";import{H as n}from"./Heading-Bi7E6SrE.js";import c from"./Default.stories-DvQPPRKc.js";import{N as a}from"./Notification-DGYNtz_T.js";import{T as p}from"./Text-DlICJI4S.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./index-Dmbpubym.js";import"./Heading-DsDU_kOR.js";import"./RSPContexts-DeOxvpD0.js";import"./utils-DJPQq0Ir.js";import"./AlertIcon-C4O6kAyM.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./Button-CEake6G1.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./Link-DH1Vm4ZB.js";import"./dynamic-B-NoN6qZ.js";import"./browser-Dr5hWFfi.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
