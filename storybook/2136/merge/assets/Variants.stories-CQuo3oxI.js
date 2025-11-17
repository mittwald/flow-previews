import{j as r}from"./iframe-DBiC_ZnR.js";import{H as a}from"./Heading-DAHW42f0.js";import p from"./Default.stories-D29Q67bc.js";import{N as n}from"./Notification-GKnJp8ZA.js";import{T as c}from"./Text-BcLTITKQ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0XIYrNX.js";import"./index-Bp9tFnUt.js";import"./index-CVV0Ew5-.js";import"./RSPContexts-BN9qRqww.js";import"./utils-DtstTdJR.js";import"./AlertIcon-_-sw5S_n.js";import"./IconWarning-CK2ZGKNK.js";import"./useLocalizedStringFormatter-D7iDpTHP.js";import"./context-7Lcog2P0.js";import"./Button-Dz2v4SBO.js";import"./LoadingSpinner-TzV_vALb.js";import"./Button-L3lWig61.js";import"./ProgressBar-DmZeIXpS.js";import"./Hidden-Dw7083pg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DtYok8JN.js";import"./useFocusable-CIN_gk5Z.js";import"./Link-D0ngLqvb.js";import"./dynamic-CtV33ye2.js";import"./browser-DU6w9x_W.js";import"./EmulatedBoldText-ClmR1Uhh.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
