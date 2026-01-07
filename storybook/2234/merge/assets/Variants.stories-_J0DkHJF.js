import{j as r}from"./iframe-Cz8_C8zY.js";import{H as n}from"./Heading-4iah9onY.js";import c from"./Default.stories-BwIeyLyS.js";import{N as a}from"./Notification-DL19VFYJ.js";import{T as p}from"./Text-YjLUuftS.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./Heading-DjrC0KPL.js";import"./RSPContexts-CQQaQyDU.js";import"./utils-BAKlH2Lm.js";import"./AlertIcon-ljfi56tv.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./Button-D15OVnQK.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcZz-lB5.js";import"./useFocus-DFbFm1Xx.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./Link-eNCbHXBt.js";import"./dynamic-CeA3emBk.js";import"./browser-B6rfwAqc.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
