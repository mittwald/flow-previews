import{j as r}from"./iframe-BvEN2NvC.js";import{H as a}from"./Heading-BmIYVqpT.js";import p from"./Default.stories-C3dNYMqA.js";import{N as n}from"./Notification-Z9SSqstJ.js";import{T as c}from"./Text-B-pkYbpH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-O5-VKPQz.js";import"./mergeRefs-g8AQtJ3m.js";import"./index-Cj5OZb7o.js";import"./RSPContexts-BVxsMlKh.js";import"./utils-C9Kbpp7Q.js";import"./AlertIcon-DIx0PRwu.js";import"./IconWarning-BXkJ-YfP.js";import"./useLocalizedStringFormatter-DGN2LQ2z.js";import"./context-BaB4gzT5.js";import"./Button-Bs-8xdNz.js";import"./LoadingSpinner-sib-jng1.js";import"./Button-rdkFrasx.js";import"./ProgressBar-BQTQq0xH.js";import"./Hidden-BwWPEWcQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CLF9PT1b.js";import"./useFocusable-CY4PxcCA.js";import"./Link-8ro0Mgm2.js";import"./dynamic-DLGtdFUV.js";import"./browser-8558U_eE.js";import"./EmulatedBoldText-6Mje0LKd.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
