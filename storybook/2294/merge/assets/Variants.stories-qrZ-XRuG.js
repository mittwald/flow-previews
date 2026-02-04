import{j as r}from"./iframe-Da9Lw8R_.js";import{H as n}from"./Heading-p9-3Hmaq.js";import c from"./Default.stories-CI6uIQ9_.js";import{N as a}from"./Notification-B3XOxFaO.js";import{T as p}from"./Text-l_fYsQ08.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./index-TT_JC2bB.js";import"./Heading-CheJhR1R.js";import"./RSPContexts-CqxOCNft.js";import"./utils-Cwd4tFKX.js";import"./AlertIcon-Co0MJDJf.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./context-CsdpTyhd.js";import"./Button-CkcTXATp.js";import"./LoadingSpinner-DXGsR4uF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CzbwBi45.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIogNAwh.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./Link-E8fc7JGi.js";import"./dynamic-bM8H28Zu.js";import"./browser-DDWH8I0V.js";import"./EmulatedBoldText-CVyVzJMR.js";import"./Text-CpGlsQu3.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
