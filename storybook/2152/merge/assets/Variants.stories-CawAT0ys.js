import{j as r}from"./iframe-CwbJq3r1.js";import{H as a}from"./Heading-FVvo5o9O.js";import p from"./Default.stories-RVumJ8Ph.js";import{N as n}from"./Notification-Cfojyaki.js";import{T as c}from"./Text-CrE3MVm4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./index-BteSo1JG.js";import"./RSPContexts-y_L0XZPW.js";import"./utils-CPaMkJSd.js";import"./AlertIcon-D4SK6nAz.js";import"./IconWarning--_iZ6FJr.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./context-BZjsOLmp.js";import"./Button-CDiKsYfE.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Button-Bhd7ARuI.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./Link-BAl7QXrG.js";import"./dynamic-IznNfavT.js";import"./browser-kBiuzLEF.js";import"./EmulatedBoldText-BqYq2ptk.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
