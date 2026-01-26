import{j as r}from"./iframe-B-_izELn.js";import{H as n}from"./Heading-BAMsaaGA.js";import c from"./Default.stories-DMhh0Mwl.js";import{N as a}from"./Notification-DTOA1H9y.js";import{T as p}from"./Text-B9UK706u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./index-C24wTi9Q.js";import"./Heading-DVKq7Ots.js";import"./RSPContexts-k_uvwm8O.js";import"./utils-CTzaLK4l.js";import"./AlertIcon-DHh3kTXL.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./Button-rB1lHab_.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./Link-bJ7V2ojH.js";import"./dynamic-bdsqC1kS.js";import"./browser-C9rDHpHO.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
