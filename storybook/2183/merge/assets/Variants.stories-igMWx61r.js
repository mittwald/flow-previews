import{j as r}from"./iframe-DlUIOFNy.js";import{H as n}from"./Heading-D1MelrAZ.js";import c from"./Default.stories-Cy3cDy89.js";import{N as a}from"./Notification-CXHrwbHQ.js";import{T as p}from"./Text-D41gwIdF.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./Heading-Bf3Yh3j7.js";import"./RSPContexts-C5mxBSfV.js";import"./utils-D5WuX1D5.js";import"./AlertIcon-qLUbwofU.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconDanger-BLbNCJeo.js";import"./IconInfo-DM35t2dP.js";import"./IconCircleCheck-Bc8CsmMT.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Button-Dl6JLVXM.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./IconClose-3AFdREu1.js";import"./Link-98KJxluq.js";import"./IconDownload-Bl5yOVd-.js";import"./dynamic-C-FseJcp.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
