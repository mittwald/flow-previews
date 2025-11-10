import{j as r}from"./iframe-D4AGuMnx.js";import{H as a}from"./Heading-BsaQzqWp.js";import p from"./Default.stories-B3VUPXc8.js";import{N as n}from"./Notification-CH_kjSuU.js";import{T as c}from"./Text-BtpbrdrH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./index-DNvdHJqk.js";import"./RSPContexts-B4Pxvc-Q.js";import"./utils-CqMmhAxq.js";import"./AlertIcon-DIdf3aQ3.js";import"./IconWarning-BC3tK9kj.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./Button-DtTeM47l.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./Link-BLPRVcLK.js";import"./dynamic-oZwQWaGw.js";import"./browser-3OZPWisM.js";import"./EmulatedBoldText-IEU2-xTn.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
