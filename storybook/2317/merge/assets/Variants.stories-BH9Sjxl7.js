import{j as r}from"./iframe-DN5oj4yX.js";import{H as n}from"./Heading-CAunjdNa.js";import c from"./Default.stories-CNNy4HTu.js";import{N as a}from"./Notification-CgsCb-PC.js";import{T as p}from"./Text-B6wg_w_v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./Heading-sKqg2l7g.js";import"./RSPContexts-CT4Rd2GX.js";import"./utils-u73lU7bl.js";import"./AlertIcon-DDaSQZAJ.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./Button-CF7BcIrS.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dDK8KT2l.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./Link-DmqPF8TL.js";import"./dynamic-D_PfG4t1.js";import"./browser-t02O3gv-.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
