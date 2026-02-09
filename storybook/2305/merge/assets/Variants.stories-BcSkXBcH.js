import{j as r}from"./iframe-nlVW-CPZ.js";import{H as n}from"./Heading-BvsEXDXR.js";import c from"./Default.stories-BLB6r08F.js";import{N as a}from"./Notification-Ci_idKLD.js";import{T as p}from"./Text-BzuDjaz9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./Heading-Bfj0TRqM.js";import"./RSPContexts-DlUCcPRc.js";import"./utils-CyuEFqip.js";import"./AlertIcon-Dr5phtoY.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./Button-_Sn69Jgj.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./Link-Dyc1bKEd.js";import"./dynamic-Dsm5lbml.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
