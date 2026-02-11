import{j as r}from"./iframe-lFICOVMG.js";import{H as n}from"./Heading-DcmPVh6J.js";import c from"./Default.stories-BItkEvWM.js";import{N as a}from"./Notification-3vDnnUW0.js";import{T as p}from"./Text-BQwiR71m.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./index-DUpWbeKv.js";import"./Heading-BZr6A1TW.js";import"./RSPContexts-BmMWqIzn.js";import"./utils-DhhSlmx9.js";import"./AlertIcon-BTBT69bo.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./context-Sy7BhgRt.js";import"./Button-Cf-KBW4_.js";import"./LoadingSpinner-DqvYatLg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dv_7IODh.js";import"./ProgressBar-CyrV5_rh.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-A9ok_7_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BW_bFHXv.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useFocusable-ByJ0NNOg.js";import"./Link-CbinGVB-.js";import"./dynamic-0KpQiqy3.js";import"./browser-CN95VINd.js";import"./EmulatedBoldText-BsTUWTNh.js";import"./Text-CinvLCxd.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
