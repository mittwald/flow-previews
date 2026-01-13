import{j as r}from"./iframe-rOlqB43H.js";import{H as n}from"./Heading-D93Lplv4.js";import c from"./Default.stories-DQ26KMOg.js";import{N as a}from"./Notification-CuAEAEgY.js";import{T as p}from"./Text-CXuVairg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./Heading-Ds9JRynb.js";import"./RSPContexts-D_fvST6z.js";import"./utils-Ccj3VlSZ.js";import"./AlertIcon-BISUoRMj.js";import"./IconWarning-Di5b70C_.js";import"./remote-DT0xwqhP.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./context-C0IlT2TZ.js";import"./Button-Bjmah8F5.js";import"./LoadingSpinner-BbLFRhi0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CW-dJdjv.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D4qdaxsz.js";import"./useFocus-B5EXjvsK.js";import"./useFocusRing-lBaj0PQL.js";import"./useFocusable-vYreZ1I2.js";import"./Link-EuD5iJUs.js";import"./dynamic-DIoaqwvI.js";import"./browser-DeRtoS4T.js";import"./EmulatedBoldText-td0NnrMW.js";import"./Text-CjxKuecI.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
