import{j as r}from"./iframe-Dld40DlB.js";import{H as a}from"./Heading-BAwA_6k1.js";import p from"./Default.stories-D4dMouyD.js";import{N as n}from"./Notification-Cb6Pnxnq.js";import{T as c}from"./Text-TesoHDfv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-g3olMzzw.js";import"./index-Dshvly-6.js";import"./index-CruVUoMH.js";import"./RSPContexts-DRmXF-Vp.js";import"./utils-D4Q7WLr3.js";import"./AlertIcon-CxtEeq0v.js";import"./IconWarning-Bslq8B7t.js";import"./useLocalizedStringFormatter-BddSeuov.js";import"./context-CvXLvg4O.js";import"./Button-DIo8wcxN.js";import"./LoadingSpinner-C26eHY8y.js";import"./Button-rvCZddFR.js";import"./ProgressBar-A7FXjRZm.js";import"./Hidden-CiXaNdIj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BAtU7oif.js";import"./useFocusable-BrkdujEf.js";import"./Link-Henk7h9t.js";import"./dynamic-DLhXud-a.js";import"./browser-bPFV2Ji3.js";import"./EmulatedBoldText-Df4Xti5W.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
