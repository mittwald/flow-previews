import{j as r}from"./iframe-D6fHsxXv.js";import{H as a}from"./Heading-CN7gV4ri.js";import p from"./Default.stories-B-JHFOnp.js";import{N as n}from"./Notification-C3O4RVn7.js";import{T as c}from"./Text-BlUe4lOx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./RSPContexts-ot9YLsND.js";import"./utils-CX0v46bh.js";import"./AlertIcon-y7uDyP2w.js";import"./IconWarning-BQPhDOnw.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";import"./Button-ByZH5IaN.js";import"./LoadingSpinner-YR9PsY9I.js";import"./Button-CGoM5cNA.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./Link-BXLnihOz.js";import"./dynamic-BLI65pIy.js";import"./browser-CwuXyXeK.js";import"./EmulatedBoldText-C3KADN9z.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
