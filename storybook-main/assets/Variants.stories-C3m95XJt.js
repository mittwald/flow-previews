import{j as r}from"./iframe-Q1VSciNm.js";import{H as n}from"./Heading-D8FX4Qh8.js";import c from"./Default.stories-3hmBG5ts.js";import{N as a}from"./Notification-C57nR8lH.js";import{T as p}from"./Text-1lLVDQct.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./Heading-BIQD_zbY.js";import"./RSPContexts-MtiuAHte.js";import"./utils-Cfx54F97.js";import"./AlertIcon-C25ddq9s.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./Button-BkL5LUHK.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./Link-BJjOeBY1.js";import"./dynamic-B-3r4dJt.js";import"./browser-DUAAaQNQ.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
