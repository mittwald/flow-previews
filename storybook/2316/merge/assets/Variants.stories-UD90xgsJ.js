import{j as r}from"./iframe-Cq8OhOqi.js";import{H as n}from"./Heading-Di8lkzs2.js";import c from"./Default.stories--RIvn7-j.js";import{N as a}from"./Notification-DD6x-Ydl.js";import{T as p}from"./Text-CeV8P7pg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./Heading-CPXM0mEb.js";import"./RSPContexts-CKy-IICl.js";import"./utils-Bubk6yJw.js";import"./AlertIcon-4JwX6npd.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./Button-BU-3gGXz.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ProgressBar-pI249SR8.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ChoIOqc4.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useFocusable-Cka2f_Hf.js";import"./Link-Dj4WQhqO.js";import"./dynamic-fC-Lgr30.js";import"./browser-D1jWek88.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
