import{j as r}from"./iframe-CdVpWnc8.js";import{H as n}from"./Heading-6HXp4W0i.js";import c from"./Default.stories-CPzh1ox_.js";import{N as a}from"./Notification-lAyoVRo6.js";import{T as p}from"./Text-KDInGMjK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./Heading-BFrSNe6W.js";import"./RSPContexts-PfgqXwd-.js";import"./utils-ClIic5nH.js";import"./AlertIcon-DVQphOxP.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Button-BYd_Eo9F.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./Link-I6ryM9ra.js";import"./dynamic-Dpbpwd3I.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
