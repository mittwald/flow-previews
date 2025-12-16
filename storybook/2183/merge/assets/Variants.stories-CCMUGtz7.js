import{j as r}from"./iframe-pNOm8Wja.js";import{H as n}from"./Heading-mhDH31L5.js";import c from"./Default.stories-C5Vu3xwq.js";import{N as a}from"./Notification-PMOjReOJ.js";import{T as p}from"./Text-_46BQ-Z5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./Heading-YerowFDN.js";import"./RSPContexts-CPamdU7s.js";import"./utils-BknOSkFt.js";import"./AlertIcon-DhrYOJcg.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconDanger-DCkcPuhV.js";import"./IconInfo-CPi1obw3.js";import"./IconCircleCheck-B-uJhcRx.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./Button-CgV_q1F1.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./IconClose-2-gSc2c5.js";import"./Link-B5wRiSOx.js";import"./IconDownload-Ew1lHoEM.js";import"./dynamic-CkcNveyu.js";import"./browser-CBsMsG9c.js";import"./EmulatedBoldText-C8Hc8u3o.js";const K={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Q=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,Q as __namedExportsOrder,K as default};
