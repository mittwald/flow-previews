import{j as r}from"./iframe-Bju5tM19.js";import{H as a}from"./Heading-BvGOAURU.js";import c from"./Default.stories-CYqnrU5g.js";import{N as n}from"./Notification-DtuAY-5s.js";import{T as p}from"./Text-Ctwf1INQ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./index-v7jxlCcy.js";import"./Heading-BJwwNeLw.js";import"./RSPContexts-CuZAMKB6.js";import"./utils-CHaPYnRu.js";import"./AlertIcon-ngpN1HUE.js";import"./IconWarning-EseH3oBy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./Button-D01G-2Tc.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./Link-CwjgeQHd.js";import"./dynamic-KamcoLNc.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
