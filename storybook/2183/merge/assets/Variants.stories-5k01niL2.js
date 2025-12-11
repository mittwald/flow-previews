import{j as r}from"./iframe-B9DmQEvm.js";import{H as n}from"./Heading-DwjnBE1G.js";import p from"./Default.stories-lYzXm5Cg.js";import{N as a}from"./Notification-D4DyPezB.js";import{T as c}from"./Text-DWnECR1V.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./RSPContexts-CotCKDbU.js";import"./utils-Oe4-zNeB.js";import"./AlertIcon-DNW_OXFb.js";import"./IconWarning-DHbLseiS.js";import"./remote-pOc8vwOE.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./context-f4__Yrtg.js";import"./Button-Dm4Gj0Ue.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./Link-DZQzqDqQ.js";import"./dynamic-D9zzs7eg.js";import"./browser-B5MMVHjZ.js";import"./EmulatedBoldText-CcFQw1kW.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
