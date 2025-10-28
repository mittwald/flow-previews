import{j as r}from"./iframe-BvCo0Jms.js";import{H as a}from"./Heading-B5ZCmgMS.js";import c from"./Default.stories-fDqpRjVT.js";import{N as n}from"./Notification-28uorjA_.js";import{T as p}from"./Text-CM7-JVVa.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./Heading-DDeE-fbN.js";import"./RSPContexts-DqErA_gH.js";import"./utils-Cw2xzcbV.js";import"./AlertIcon-DogTvW9h.js";import"./IconWarning-DF-Lhcnu.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./Button-BdRFLyHU.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./Link-BkqgumxN.js";import"./dynamic-BmXp7BE9.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const J=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,J as __namedExportsOrder,G as default};
