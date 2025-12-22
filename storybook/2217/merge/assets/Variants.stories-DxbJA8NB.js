import{j as r}from"./iframe-Du65Ph_c.js";import{H as n}from"./Heading-t4nXMG5j.js";import c from"./Default.stories-CItkh1g0.js";import{N as a}from"./Notification-DrC5Zzta.js";import{T as p}from"./Text-CtX5enn3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./index-c0t27COx.js";import"./Heading-BTx9jAYe.js";import"./RSPContexts-CGKyxyrO.js";import"./utils-xIJEb5Gc.js";import"./AlertIcon-CiJO5KdE.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./Button-2wmaPnFC.js";import"./LoadingSpinner-DEfGApvw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjwwJrCh.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./Link-WyYnnYYE.js";import"./dynamic-CtEU0XPC.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
