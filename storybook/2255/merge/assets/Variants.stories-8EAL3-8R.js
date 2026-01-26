import{j as r}from"./iframe-CO_SbVCH.js";import{H as n}from"./Heading-CF6gKKdb.js";import c from"./Default.stories-Dk-qDmuj.js";import{N as a}from"./Notification-D0Crqibv.js";import{T as p}from"./Text-DxwcuI28.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./index-CiuYSwxA.js";import"./Heading-Ij8bChZd.js";import"./RSPContexts-BwOC89i_.js";import"./utils-D6Fob7yO.js";import"./AlertIcon-3Vdm-iqE.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./context-CagKbUB8.js";import"./Button-D1ylE5rB.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./Link-Errn0UdC.js";import"./dynamic-7BzGeVfl.js";import"./browser-DqZUP5aL.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
