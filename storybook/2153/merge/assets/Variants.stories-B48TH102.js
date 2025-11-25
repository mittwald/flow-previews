import{j as r}from"./iframe-B2xkRX6A.js";import{H as a}from"./Heading-C47Y59gw.js";import p from"./Default.stories-9ciLl8zs.js";import{N as n}from"./Notification-UiqXE8jo.js";import{T as c}from"./Text-CCe4xaNb.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D639mhqg.js";import"./index-CgXs-3w1.js";import"./index-Ddwq7UUc.js";import"./RSPContexts-CwQQ0l-4.js";import"./utils-Bn0vlKhH.js";import"./AlertIcon-CEpZA0Vz.js";import"./IconWarning-D3UwWGLP.js";import"./useLocalizedStringFormatter-CFLWoqqs.js";import"./context-0lXYs95B.js";import"./Button-dkMnbJWG.js";import"./LoadingSpinner-kT-Lxibs.js";import"./Button-ZZalAwAh.js";import"./ProgressBar-B8kHCfIw.js";import"./Hidden-WUyQGACH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bx_AG6Dt.js";import"./useFocusable-DULkbCFr.js";import"./Link-BRl6hkBv.js";import"./dynamic-D0Nrpf8a.js";import"./browser-QmAcXv_F.js";import"./EmulatedBoldText-C1Q2Dtf3.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
