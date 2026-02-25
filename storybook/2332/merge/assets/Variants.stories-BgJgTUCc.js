import{j as r}from"./iframe-CFTqgbub.js";import{H as n}from"./Heading-439pSAMO.js";import c from"./Default.stories-1MbSL-Te.js";import{N as a}from"./Notification-BpTjmDnT.js";import{T as p}from"./Text-DGb4Yj-N.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./Heading-D2J3_q6l.js";import"./RSPContexts-CFURB7yy.js";import"./utils-B4tY5r2S.js";import"./AlertIcon-DR1EaW6b.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./Button-DYo4uywI.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKBgz7xZ.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./Link-J9e9j8q_.js";import"./dynamic-GrVhUXuF.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";import"./Text-Djzy7Vo0.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
