import{j as r}from"./iframe-Ckegua2-.js";import{H as a}from"./Heading-CD3Wslox.js";import p from"./Default.stories-utEuvGf9.js";import{N as n}from"./Notification-Cb_wPwY7.js";import{T as c}from"./Text-Bc5eZX2G.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./RSPContexts-B2_NTObV.js";import"./utils-CYmNuJtI.js";import"./AlertIcon-Dy5HewGT.js";import"./IconWarning-Gc4Ng5zo.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./context-Dskisrvm.js";import"./Button-DoXsYGKN.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./Button-DWZpmyCC.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./Link-D6ZKnidg.js";import"./dynamic-6Flvv8a3.js";import"./browser-CQVzEu0I.js";import"./EmulatedBoldText-DGrw2Xfi.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
