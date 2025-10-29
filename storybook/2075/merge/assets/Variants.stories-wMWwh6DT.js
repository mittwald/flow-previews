import{j as r}from"./iframe-BFuSR0CY.js";import{H as a}from"./Heading-CGhPkmp1.js";import c from"./Default.stories-BF-QnKHK.js";import{N as n}from"./Notification-aN4uY2p7.js";import{T as p}from"./Text-BXhKPUqX.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./Heading-BHjkLbk1.js";import"./RSPContexts-Df5wrtNL.js";import"./utils-CEuw8CkJ.js";import"./AlertIcon-DfJo_e7v.js";import"./IconWarning-BDLPxpKm.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./Button-B8_RMB4T.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./Link-DWegYKZ9.js";import"./dynamic-BFfatATg.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const J=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,J as __namedExportsOrder,G as default};
