import{j as r}from"./iframe-BbaYMYQ1.js";import{H as a}from"./Heading-lbjZQMyr.js";import p from"./Default.stories-CEQEyugI.js";import{N as n}from"./Notification-Dm5qCZlZ.js";import{T as c}from"./Text-8_g1DnjB.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./index-DF7s3pP8.js";import"./RSPContexts-vimGF_ZT.js";import"./utils-C-StNnVz.js";import"./AlertIcon-CRnyQnM7.js";import"./IconWarning-CkjtEKGs.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-DxIVJg5X.js";import"./Button-KIO5b-Hc.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Button-B8_E6hAa.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./Link-rPNj3DYm.js";import"./dynamic-CvfiG9eK.js";import"./browser-CF0_O6rk.js";import"./EmulatedBoldText-_shc_-go.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
