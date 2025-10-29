import{j as r}from"./iframe-CUHqcL_I.js";import{H as a}from"./Heading-Do04wJKe.js";import p from"./Default.stories-Bi4cF2sZ.js";import{N as n}from"./Notification-B0eLpSBG.js";import{T as c}from"./Text-9dBC56cL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BjSKuQCX.js";import"./index-CrtpoxY-.js";import"./index-CTAmePsE.js";import"./RSPContexts-CQETDyCZ.js";import"./utils-yOUeLBa9.js";import"./AlertIcon-Dy-osvDK.js";import"./IconWarning-C3AAIkW7.js";import"./useLocalizedStringFormatter-CdK5FACb.js";import"./context-DsJ462Ut.js";import"./Button-DrygTKxs.js";import"./LoadingSpinner-tg8gDUA6.js";import"./Button-Gx1b59X2.js";import"./ProgressBar-CSMSR9VB.js";import"./Hidden-DlQVfkRs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DaG9LpkP.js";import"./useFocusable-BfYOI4CR.js";import"./Link-DkZTrzTy.js";import"./dynamic-B87jRkTU.js";import"./browser-Cw9CdHqj.js";import"./EmulatedBoldText-3j1WcMoY.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
