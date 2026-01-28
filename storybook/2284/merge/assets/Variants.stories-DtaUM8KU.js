import{j as r}from"./iframe-BbsOAs33.js";import{H as n}from"./Heading-BC6iu52J.js";import c from"./Default.stories-CA82kqMk.js";import{N as a}from"./Notification-CCVxFghp.js";import{T as p}from"./Text-BYxWYBBY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./index-32jMpZgo.js";import"./Heading-Delp_XvT.js";import"./RSPContexts-DfamIfkg.js";import"./utils-d4vW56Wr.js";import"./AlertIcon-B34gK9Vj.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./Button-CAGXh9YY.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuEkD-Mt.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./Link-CZ64J4jt.js";import"./dynamic-CoVYgUcD.js";import"./browser-6_CJeJSO.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
