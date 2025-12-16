import{j as r}from"./iframe-m11uA8ph.js";import{H as n}from"./Heading-B1gnURmx.js";import c from"./Default.stories-D9acFYXW.js";import{N as a}from"./Notification-pxuCqRVg.js";import{T as p}from"./Text-C8eG2T-4.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./index-Cy6hiSze.js";import"./Heading-C-dZ-n10.js";import"./RSPContexts-CBB4rOO8.js";import"./utils-B2Atf1IZ.js";import"./AlertIcon-CxXcO4S6.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconDanger-BFD4weFl.js";import"./IconInfo-B54pVzu5.js";import"./IconCircleCheck-DtVkr2LX.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./context-CT-J1WHN.js";import"./Button-Dypt8iw9.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Hg1-qkLa.js";import"./ProgressBar-C1zZy1Lx.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./IconClose-CZ6WFvAF.js";import"./Link-B8ve4p3X.js";import"./IconDownload-D78Vb8cl.js";import"./dynamic-x9dWH5I2.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";import"./Text-CHaozABk.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
