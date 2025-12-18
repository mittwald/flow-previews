import{j as r}from"./iframe-DZYTde4e.js";import{H as a}from"./Heading-CAPeE680.js";import p from"./Default.stories-CXaBkGDa.js";import{N as n}from"./Notification-Boctb1zI.js";import{T as c}from"./Text-BDClvQAl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgtZzzdB.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./RSPContexts-BlMA0jp2.js";import"./utils-Z6vXhZ96.js";import"./AlertIcon-DI40NDQv.js";import"./IconWarning-DXCUbPmL.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./context-Du59aHbH.js";import"./Button-CI_UMDNZ.js";import"./LoadingSpinner-qhZotF0H.js";import"./Button-CC2_Lwz2.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./Link-DC_xwsX0.js";import"./dynamic-Cr3CK9yB.js";import"./browser-D1RFTwuv.js";import"./EmulatedBoldText-S-B02nx0.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const R=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,R as __namedExportsOrder,O as default};
