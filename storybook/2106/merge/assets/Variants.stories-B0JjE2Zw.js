import{j as r}from"./iframe-9u6Ufs56.js";import{H as a}from"./Heading-3nkwrjYk.js";import p from"./Default.stories-CYsj62j4.js";import{N as n}from"./Notification-CrQoxCY-.js";import{T as c}from"./Text-DBIGrc3m.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./index-B3MDoUBn.js";import"./RSPContexts-CT2QL-I8.js";import"./utils-8ZPSUmH_.js";import"./AlertIcon-C5b9VCt7.js";import"./IconWarning-e2U-5o25.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./Button-_dn7QVPB.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Link-Brltyk4S.js";import"./dynamic-CQrWC-Om.js";import"./browser-BeFavaxk.js";import"./EmulatedBoldText-DTSNQZDs.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
