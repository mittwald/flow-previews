import{j as r}from"./iframe-CH4VWYyw.js";import{H as a}from"./Heading-luYK-1U3.js";import p from"./Default.stories-BNKfK63q.js";import{N as n}from"./Notification-CnHkVc1m.js";import{T as c}from"./Text-DppnPY0e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./RSPContexts-COBXgLKc.js";import"./utils-B0RtSKxF.js";import"./AlertIcon-DXRGAj5W.js";import"./IconWarning-CUVmf0iP.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./context-C0jF3YAi.js";import"./Button-CMjimR4T.js";import"./LoadingSpinner-CM0pL980.js";import"./Button-C7FjL3VL.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./Link-CdVmxRjb.js";import"./dynamic-BXkfH89u.js";import"./browser-DUOSIs8m.js";import"./EmulatedBoldText-BLn1bvyP.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
