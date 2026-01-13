import{j as r}from"./iframe-D5OSMSYj.js";import{H as n}from"./Heading-CnkvXclq.js";import c from"./Default.stories-U2Pb8xra.js";import{N as a}from"./Notification-B7AwQRyY.js";import{T as p}from"./Text-DAhCT_ah.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./index-Bwk6EGM5.js";import"./Heading-BpBqAeXs.js";import"./RSPContexts-BzWalm_3.js";import"./utils-B2fStg81.js";import"./AlertIcon-CDVTToII.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./Button-DTe5su69.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./Link-D6eMXHDa.js";import"./dynamic-B1x5IqP1.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
