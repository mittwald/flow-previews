import{j as r}from"./iframe-Bx5EipPE.js";import{H as a}from"./Heading-DhAPxMie.js";import p from"./Default.stories-qgRZoU6M.js";import{N as n}from"./Notification-CGSW0KyE.js";import{T as c}from"./Text-cL2QlUTP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./index-B2U9nMUa.js";import"./RSPContexts-ByW7h33h.js";import"./utils-CqLTISaK.js";import"./AlertIcon-DV0ec5yj.js";import"./IconWarning-sXt69lXW.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./context-CiBo84na.js";import"./Button-CFmBk-Ho.js";import"./LoadingSpinner-BBcen_x5.js";import"./Button-CMS0XqzI.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./Link-C2LG0YAc.js";import"./dynamic-DMwV73o9.js";import"./browser-YP_S1MMX.js";import"./EmulatedBoldText-DBVghW6y.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const R=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,R as __namedExportsOrder,O as default};
