import{j as r}from"./iframe-D_IiP5QF.js";import{H as a}from"./Heading-DD9mIgnZ.js";import p from"./Default.stories-D0Q2uqUU.js";import{N as n}from"./Notification-BI6q-vGx.js";import{T as c}from"./Text-DtkWnfcs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./RSPContexts-rRqbWPHZ.js";import"./utils-BUDUz3oT.js";import"./AlertIcon-CiVM0veU.js";import"./IconWarning-CeWNQ8u9.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./context-CzHIh5kC.js";import"./Button-DslN622a.js";import"./LoadingSpinner-DAahn8uY.js";import"./Button-wMdqoBKT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./Link-1CuEWTvW.js";import"./dynamic-0ssToOFv.js";import"./browser-Xi37Uwf1.js";import"./EmulatedBoldText-D1D5MzAW.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
