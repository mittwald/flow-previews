import{j as r}from"./iframe-xTeLnFvu.js";import{H as n}from"./Heading-cElDoL_q.js";import c from"./Default.stories-BbJDCEm4.js";import{N as a}from"./Notification-CnNn9PW-.js";import{T as p}from"./Text-CX0dnSU4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./Heading-Dpj368kt.js";import"./RSPContexts-BbeCs0tS.js";import"./utils-DAXmWa5w.js";import"./AlertIcon-DqbdA5zC.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconDanger-DpVgPae0.js";import"./IconInfo-C432apET.js";import"./IconCircleCheck-DTnVc5u6.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./Button-BA5_aaZE.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./IconClose-CqXP_7hn.js";import"./Link-CSHVAz2z.js";import"./IconDownload-CEpEnyol.js";import"./dynamic-ndn1boAo.js";import"./browser-RW8IAkpU.js";import"./EmulatedBoldText-st1IlPV2.js";const K={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Q=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,Q as __namedExportsOrder,K as default};
