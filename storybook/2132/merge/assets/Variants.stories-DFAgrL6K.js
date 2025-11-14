import{j as r}from"./iframe-U-SQzk2U.js";import{H as a}from"./Heading-LgN9kaRj.js";import p from"./Default.stories-BwqjwptP.js";import{N as n}from"./Notification-tY-Mb6kR.js";import{T as c}from"./Text-MZxPcWY_.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./RSPContexts-CXcRuCAV.js";import"./utils-DoPZZ_D6.js";import"./AlertIcon-81NvLES1.js";import"./IconWarning-CDCEBJyf.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./context-DG48XepE.js";import"./Button-B_mH5guI.js";import"./LoadingSpinner-CC-MYLRK.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./Link-C1W3HrwR.js";import"./dynamic-BNi_8Fxs.js";import"./browser-w1PF0DBJ.js";import"./EmulatedBoldText-2j5mm0bP.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
