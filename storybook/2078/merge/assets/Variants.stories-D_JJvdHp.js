import{j as r}from"./iframe-kP2HEfFS.js";import{H as n}from"./Heading-BD2z6cnX.js";import c from"./Default.stories-BjIuQebW.js";import{N as a}from"./Notification-Ci6c8CzP.js";import{T as p}from"./Text-DmTsXHLN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./Heading-BzscSBm2.js";import"./RSPContexts-BgFmjUDe.js";import"./utils-C12UPk0k.js";import"./AlertIcon-BKaF02an.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./Button-D2SKyW-T.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./Link-Ct2fGP39.js";import"./dynamic-Bb3YYypk.js";import"./browser-CLBqp6VR.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
