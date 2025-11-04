import{j as r}from"./iframe-UywY67Bv.js";import{H as a}from"./Heading-DokAbZVz.js";import p from"./Default.stories-Cr8XVXo0.js";import{N as n}from"./Notification-DuT0orJi.js";import{T as c}from"./Text-ACfuEtxv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./index-BZZbJWsv.js";import"./RSPContexts-DKA2ogYJ.js";import"./utils-Q3LyW17A.js";import"./AlertIcon-BnqUCYzd.js";import"./IconWarning-DwFhTB3p.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./Button-Gbk6h-JG.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./ProgressBar-BT1yEvUw.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CEJ8z4sH.js";import"./useFocusable-D_AejfVj.js";import"./Link-CLqTFJh1.js";import"./dynamic-D6UsKhYE.js";import"./browser-89HKgK6A.js";import"./EmulatedBoldText-IS2YzD6-.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
