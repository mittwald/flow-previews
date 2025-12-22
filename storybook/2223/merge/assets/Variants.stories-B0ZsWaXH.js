import{j as r}from"./iframe-a9513Vq6.js";import{H as n}from"./Heading-Bm0lzmg4.js";import c from"./Default.stories-Tt0E1rb3.js";import{N as a}from"./Notification-uLK2PpqJ.js";import{T as p}from"./Text-hxI3a1Rs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./index-CgKgRbSB.js";import"./Heading-35mryU7d.js";import"./RSPContexts-DpIEdSL7.js";import"./utils-Q60aVnZq.js";import"./AlertIcon-BNVWQsAg.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./Button-CbZraw7Z.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOdCqvu.js";import"./useFocus-CH_x6C_j.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./Link-Dnav6fqI.js";import"./dynamic-D7T7LY8j.js";import"./browser-CuCeyixq.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
