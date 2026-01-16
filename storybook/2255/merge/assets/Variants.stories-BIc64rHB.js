import{j as r}from"./iframe-DEsugzBP.js";import{H as n}from"./Heading-Di_kcqRZ.js";import c from"./Default.stories-C2oIJAub.js";import{N as a}from"./Notification-DM2SVVd1.js";import{T as p}from"./Text-CGG2whlc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./Heading-B1qRR7lK.js";import"./RSPContexts-BS5BTC1y.js";import"./utils-k3goWFVI.js";import"./AlertIcon-CMe_dxq6.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./context-BA9NBDMH.js";import"./Button-Bh57nksp.js";import"./LoadingSpinner-DJgoXeas.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D-exCq-2.js";import"./ProgressBar-C-Sj7koa.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn9RRRKS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CsaWzeZC.js";import"./useFocus-B3AZuBYY.js";import"./useFocusRing-DuZx28fv.js";import"./useFocusable-Bwqhhmq3.js";import"./Link-DfJDbkJP.js";import"./dynamic-FU-wbqWq.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";import"./Text-CGX30jhe.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const K=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,K as __namedExportsOrder,J as default};
