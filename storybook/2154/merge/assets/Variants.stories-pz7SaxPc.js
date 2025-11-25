import{j as r}from"./iframe-BGRRgBVS.js";import{H as a}from"./Heading-Cumb0HFc.js";import p from"./Default.stories-R4F8sjnV.js";import{N as n}from"./Notification-BxWa1kbr.js";import{T as c}from"./Text-DzPdDmfA.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./index-BMa1Nvcv.js";import"./RSPContexts-DYF8VjHX.js";import"./utils-Csx1o_4e.js";import"./AlertIcon-DXcBlIQl.js";import"./IconWarning-H-qi_LLu.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./context-u16jW8Lq.js";import"./Button-DE3NXKd3.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Button-BqwVNYKG.js";import"./ProgressBar-DH5v7dhL.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./Link-DUHrLYIV.js";import"./dynamic-BLodhe7F.js";import"./browser-ClmblGlM.js";import"./EmulatedBoldText-DrL9qLDd.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
