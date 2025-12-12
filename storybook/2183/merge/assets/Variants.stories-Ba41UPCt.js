import{j as r}from"./iframe-Cun9xEvG.js";import{H as n}from"./Heading-Bz0fxZKP.js";import p from"./Default.stories-CMzgS7Hr.js";import{N as a}from"./Notification-CPdts9a5.js";import{T as c}from"./Text-46CNKReN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./RSPContexts-DVf4IkrV.js";import"./utils-S5M_7oVk.js";import"./AlertIcon-BYwbyTte.js";import"./IconWarning-CPVRn4jW.js";import"./remote-BgISxXks.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./context-CTkEoG47.js";import"./Button-Be9JkCpV.js";import"./LoadingSpinner-BiAtSGtu.js";import"./Button-D2k4TCQe.js";import"./ProgressBar-c76aO61i.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./Link-C9__0RQZ.js";import"./dynamic-Bm0M0-O-.js";import"./browser-BgnuhwhB.js";import"./EmulatedBoldText-2bJ0isTU.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <strong>example.de</strong>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <strong>My WordPress</strong> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const $=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,$ as __namedExportsOrder,R as default};
