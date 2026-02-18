import{j as r}from"./iframe-tDsAeGKm.js";import{H as n}from"./Heading-B57Tu_dh.js";import c from"./Default.stories-C8HtreCR.js";import{N as a}from"./Notification-0nYN79EU.js";import{T as p}from"./Text-D5NMs6cZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BfLM0c2n.js";import"./index-bKgupbLj.js";import"./index-B9moyWSs.js";import"./Heading-DyHmtFkg.js";import"./RSPContexts-1mHRta2c.js";import"./utils-DhX5ITDy.js";import"./AlertIcon-BN6nSUvJ.js";import"./IconWarning-DKvGabEh.js";import"./remote-Dyxf39S8.js";import"./useLocalizedStringFormatter-Ble8CxqU.js";import"./context-B8HhXai5.js";import"./Button-jRtlVENb.js";import"./LoadingSpinner-cVZxppZv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSgsBLqC.js";import"./ProgressBar-cVZAXAEA.js";import"./Label-CtdEoG3D.js";import"./Hidden-S5GeLDqu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CvQ5_So8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DsHBwD0o.js";import"./useFocus-BJatrcMj.js";import"./useFocusRing-O-BrOcuV.js";import"./useFocusable-Dhs_EAwV.js";import"./Link-D7bQunCc.js";import"./dynamic-CfRao1zO.js";import"./browser-CATpO6nC.js";import"./EmulatedBoldText-B_3WWRWD.js";import"./Text-B29urVwj.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
