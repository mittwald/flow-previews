import{j as r}from"./iframe-DVp3wyW8.js";import{H as a}from"./Heading-VOEAcbBw.js";import p from"./Default.stories-CWNtc80b.js";import{N as n}from"./Notification-M6D_CpCT.js";import{T as c}from"./Text-x2NLhZ_6.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DOD6KTqp.js";import"./index-CSWZRCbA.js";import"./index-CnZiUiqa.js";import"./RSPContexts-CQ8PUfHG.js";import"./utils-CK_bkg3x.js";import"./AlertIcon-C0fW6UTj.js";import"./IconWarning-btspmSaz.js";import"./useLocalizedStringFormatter-BDNlhScJ.js";import"./context-BTkZkFrl.js";import"./Button-BGy_040K.js";import"./LoadingSpinner-BvAyWbCS.js";import"./Button-ComzTzlH.js";import"./ProgressBar-BEtx-YzR.js";import"./Hidden-QjALVdSt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Drt37fC5.js";import"./useFocusable-CbEG4JhP.js";import"./Link-CMULlE06.js";import"./dynamic-DGFrs7WZ.js";import"./browser-qRiPvlbV.js";import"./EmulatedBoldText-CHhmc0Op.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
