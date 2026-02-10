import{j as r}from"./iframe-1XlmVqd5.js";import{H as n}from"./Heading-BHa3WEIV.js";import c from"./Default.stories-BptQ8RV2.js";import{N as a}from"./Notification-D190ZpuP.js";import{T as p}from"./Text-DoMRIGKc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./Heading-CLPLrGSK.js";import"./RSPContexts-Dq529x8m.js";import"./utils-DcI_f0WL.js";import"./AlertIcon-B1ETMix0.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./Button-QkNnHSXc.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CBxBnL8r.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./Link-BSlR1LLq.js";import"./dynamic-pa5Mho8z.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
