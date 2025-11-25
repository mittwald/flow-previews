import{j as r}from"./iframe-Damah4Gk.js";import{H as a}from"./Heading-DZZNbrhC.js";import p from"./Default.stories-D-XPh32f.js";import{N as n}from"./Notification-D6I6SJC0.js";import{T as c}from"./Text-CM2awg96.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYYwi6hk.js";import"./index-13wtP10s.js";import"./index-CEgKTzya.js";import"./RSPContexts-CTihTM1c.js";import"./utils-DZ-wAWvz.js";import"./AlertIcon-DULCpNPH.js";import"./IconWarning-C31Nhmtw.js";import"./useLocalizedStringFormatter-DBwS74mm.js";import"./context-Ame_q6FO.js";import"./Button-DRLWgNzR.js";import"./LoadingSpinner-1d0BHocu.js";import"./Button-D6H5v8ae.js";import"./ProgressBar-ApaXpyYi.js";import"./Hidden-CW7-PSlS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CjNeZb4R.js";import"./useFocusable-BIU-PHPJ.js";import"./Link-BsL3p7F7.js";import"./dynamic-CEjum6Vy.js";import"./browser-BpoY0pz3.js";import"./EmulatedBoldText-CePfFl55.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
