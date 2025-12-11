import{j as r}from"./iframe-Bo-CC4om.js";import{H as n}from"./Heading-BHjCTnZi.js";import p from"./Default.stories-CeSSfRhO.js";import{N as a}from"./Notification-CxiWXGjP.js";import{T as c}from"./Text-FWtYFqa_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./RSPContexts-BIpJdst2.js";import"./utils-BE4vzmGc.js";import"./AlertIcon-mGxxCUjy.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./Button-DsbAYxy6.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./Link-Cjmbqaeu.js";import"./dynamic-DI9mkNr1.js";import"./browser-CQUdwXOL.js";import"./EmulatedBoldText-DaZX5sg6.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
