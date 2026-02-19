import{j as r}from"./iframe-DYssR0ZO.js";import{H as n}from"./Heading-De8T3vTM.js";import c from"./Default.stories-BC5elIZi.js";import{N as a}from"./Notification-B9WkD6ZF.js";import{T as p}from"./Text-S9F4vE2H.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./index-DD53_4h2.js";import"./Heading-CZjnkckI.js";import"./RSPContexts-CDW_96-t.js";import"./utils-C3q1cDFY.js";import"./AlertIcon-AvW8zEgb.js";import"./IconWarning-BhLXBIfL.js";import"./remote-cHYIdIzb.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./context-CUXiPoRo.js";import"./Button-DWrm_dbc.js";import"./LoadingSpinner-lL7MHRW7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-xSc99ptM.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useFocusable-CmCmEjiW.js";import"./Link-BfMlRe4o.js";import"./dynamic-3BYImiyG.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Text-C48KhL8P.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
