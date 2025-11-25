import{j as r}from"./iframe-C7sy8eLt.js";import{H as a}from"./Heading-k3TZmz5u.js";import p from"./Default.stories-Bc1fIwt-.js";import{N as n}from"./Notification-BKYjv64k.js";import{T as c}from"./Text-CNjgj0Nh.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DIjd7Mwu.js";import"./index-Cpqj0oV0.js";import"./index-CQGWyvrR.js";import"./RSPContexts-BXBNaV8B.js";import"./utils-ClB0n4MX.js";import"./AlertIcon-pdEEQLjK.js";import"./IconWarning-BlJBP8EW.js";import"./useLocalizedStringFormatter-CTGu5obF.js";import"./context-CzQbumPb.js";import"./Button-BZw3q7YG.js";import"./LoadingSpinner-DOZFO_5L.js";import"./Button-Dbk_q6kB.js";import"./ProgressBar-DVj1Bza0.js";import"./Hidden-BiwDbxQo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Ah8T3Rlp.js";import"./useFocusable-BdiuUyMg.js";import"./Link-CYOMmfe5.js";import"./dynamic-xNYmGRJM.js";import"./browser-BbONOrP3.js";import"./EmulatedBoldText-D386pHKZ.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
