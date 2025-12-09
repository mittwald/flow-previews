import{j as r}from"./iframe-CLIUsYfM.js";import{H as a}from"./Heading-CKk-OBgv.js";import p from"./Default.stories-CA29G5fV.js";import{N as n}from"./Notification-B6oOrQsf.js";import{T as c}from"./Text-D2QQWQR9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./RSPContexts-DWZje-yD.js";import"./utils-Duab__sA.js";import"./AlertIcon-NB0p5Yms.js";import"./IconWarning-DzQ9tJI9.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./context-CpkmeH1J.js";import"./Button-C446Wk0s.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./Link-D5lmNW05.js";import"./dynamic-BTR_FaAn.js";import"./browser-D_3azSPf.js";import"./EmulatedBoldText-BUnoqqKP.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
