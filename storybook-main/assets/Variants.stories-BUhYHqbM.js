import{j as r}from"./iframe-Gppgd95h.js";import{H as a}from"./Heading-C1wKNzIE.js";import p from"./Default.stories-WzptI14W.js";import{N as n}from"./Notification-BJB-3CMf.js";import{T as c}from"./Text-ByRCXQub.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./index-C46OFllo.js";import"./RSPContexts-uyFjXPd-.js";import"./utils-B4V-7u16.js";import"./AlertIcon-DQP9zo97.js";import"./IconWarning-CXl4-aHF.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./context-Cby3fyqM.js";import"./Button-CQheULfL.js";import"./LoadingSpinner-CWX_u-O3.js";import"./Button-D2lj5RUi.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./Link-1H4K_8fk.js";import"./dynamic-Dx_-BW_E.js";import"./browser-BvSJi_ez.js";import"./EmulatedBoldText-BsRwGIpf.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
