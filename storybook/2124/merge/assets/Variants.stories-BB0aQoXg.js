import{j as r}from"./iframe-BUpOconN.js";import{H as a}from"./Heading-BGtG9kd2.js";import p from"./Default.stories-scD2Da41.js";import{N as n}from"./Notification-B53uF-St.js";import{T as c}from"./Text-BmeR1AHd.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./index-DbC_ni2B.js";import"./RSPContexts-DHzB_yYn.js";import"./utils-D0zgVK2Q.js";import"./AlertIcon-BFFrkh8K.js";import"./IconWarning-BhCngq7e.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./context-BerssnGJ.js";import"./Button-BI2nRdMO.js";import"./LoadingSpinner-BP3hPEk8.js";import"./Button-kwZ3-LYf.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./Link-Drjv9HvP.js";import"./dynamic-BC3S0Bwc.js";import"./browser-BvUtNH1Q.js";import"./EmulatedBoldText-BYxux4hO.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
