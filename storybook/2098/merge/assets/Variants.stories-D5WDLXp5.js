import{j as r}from"./iframe-M-00ByYr.js";import{H as a}from"./Heading-Cc9x6iz-.js";import c from"./Default.stories-B3Cv889g.js";import{N as n}from"./Notification-HP3OQ_I5.js";import{T as p}from"./Text-Bt5YA1vc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./index-DpE53F72.js";import"./Heading-CaFtCNvg.js";import"./RSPContexts-D5gF1Lon.js";import"./utils-CzeOq9Jp.js";import"./AlertIcon-CtiPArRr.js";import"./IconWarning-BKX4jvdo.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./Button-Dye8aZJo.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./Link-GEBmnRKv.js";import"./dynamic-COr1kucW.js";import"./browser-DuQo-X1z.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const J=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,J as __namedExportsOrder,G as default};
