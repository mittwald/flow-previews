import{j as r}from"./iframe-BO4how7V.js";import{H as a}from"./Heading-CDkPtIgK.js";import c from"./Default.stories-CllcgJ0E.js";import{N as n}from"./Notification-ByHCf9Vx.js";import{T as p}from"./Text-k4VuksKp.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./index-CzMnHAtb.js";import"./Heading-DCJd85qW.js";import"./RSPContexts-C8zlTsZJ.js";import"./utils-BpiWkIEZ.js";import"./AlertIcon-Yi86FBzt.js";import"./IconWarning-riXPckyc.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./Button-BRSyykRx.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-T2VJnm-n.js";import"./ProgressBar-Cb_Q8Aey.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-n8mYYh.js";import"./useFocus-CFrGhCIR.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./Link-D-rJ9IkI.js";import"./dynamic-DPbzu-N4.js";import"./browser-9RCZAQdm.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
