import{j as r}from"./iframe-CfnfnCWP.js";import{H as a}from"./Heading-OB0ZBXrr.js";import p from"./Default.stories-CWkedEFG.js";import{N as n}from"./Notification-B_cV56tQ.js";import{T as c}from"./Text-C5_UpO0B.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./index-jLgmF_bk.js";import"./RSPContexts-D_4T2k7b.js";import"./utils-DU1zOm8r.js";import"./AlertIcon-CjvlmAGq.js";import"./IconWarning-C231uJAl.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./context-Bzg-jxuH.js";import"./Button-CV55_Sir.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./Link-1qGklXs3.js";import"./dynamic-DF8Fk99D.js";import"./browser-Ch5bUTc0.js";import"./EmulatedBoldText-CoueItQ2.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
