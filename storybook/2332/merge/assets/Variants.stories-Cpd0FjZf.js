import{j as r}from"./iframe-DCel2PhG.js";import{H as n}from"./Heading-DPAdBgTw.js";import c from"./Default.stories-B7PPg6f7.js";import{N as a}from"./Notification-7XpNFkJe.js";import{T as p}from"./Text-CfcNN3C1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./index-DcvCSlSd.js";import"./Heading-Cs7GlIOt.js";import"./RSPContexts-BWRH8UQz.js";import"./utils-jFfJrK0I.js";import"./AlertIcon-C6GnHejw.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./Button-CjhaH8vt.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./Link-Dn3de3aq.js";import"./dynamic-CoRoJ1gY.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
