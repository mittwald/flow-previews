import{j as r}from"./iframe-D8Xbwx9P.js";import{H as n}from"./Heading-YQCh4-8a.js";import c from"./Default.stories-D8HMksMb.js";import{N as a}from"./Notification-BJf7RBKi.js";import{T as p}from"./Text-ZHIm2izM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./Heading-B1sGhKQ8.js";import"./RSPContexts-CsOhl7yw.js";import"./utils-C3Tuzz6i.js";import"./AlertIcon-C7EXb0VS.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./IconDanger-DO15Hi94.js";import"./IconInfo-DCSuWSbX.js";import"./IconCircleCheck-BX2W763_.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./context-CMvcEg-k.js";import"./Button-DnjfJoF3.js";import"./IconX-HMFf4w5l.js";import"./IconCheck-Djd4ZBy_.js";import"./LoadingSpinner-CRZU7QZf.js";import"./ariaLive-CRfqyPSL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WVOu4VhQ.js";import"./ProgressBar-CVumlVqB.js";import"./Label-rFd_FIkn.js";import"./Hidden-zhCtJ-LB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./IconClose-nKEyU94I.js";import"./Link-B1DHXQTn.js";import"./IconDownload-aMfHl3BX.js";import"./dynamic-C7V4-Zrv.js";import"./browser-BEcu8ny4.js";import"./EmulatedBoldText-Cd0UPmPK.js";import"./Text-C0Eqp9FN.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const or=["Info","Warning","Danger","Success"];export{s as Danger,o as Info,i as Success,e as Warning,or as __namedExportsOrder,tr as default};
