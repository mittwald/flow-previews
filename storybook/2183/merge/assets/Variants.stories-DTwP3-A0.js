import{j as r}from"./iframe-B9uPShpw.js";import{H as n}from"./Heading-DBAsiMEO.js";import c from"./Default.stories-DUZRpG6E.js";import{N as a}from"./Notification-Dpta6L-1.js";import{T as p}from"./Text-CNAgZ6Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./Heading-CYXOOsdy.js";import"./RSPContexts-D3LiPnZ6.js";import"./utils-Daj4d2Cf.js";import"./AlertIcon-6dNNjxf1.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconDanger-q09hWhBt.js";import"./IconInfo-Bfvw7frE.js";import"./IconCircleCheck-DXYqfVMU.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./context-C9xya_TD.js";import"./Button-BmSId73m.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CfSbOp9X.js";import"./ProgressBar-BCTL0_PO.js";import"./Label-DMYXGfMz.js";import"./Hidden-DXuNaD-Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./IconClose-DaLRBiGv.js";import"./Link-Co5dRX6L.js";import"./IconDownload-DzBKjaFz.js";import"./dynamic-DCdgkrTe.js";import"./browser-DkOndk9b.js";import"./EmulatedBoldText-CttSSL63.js";import"./Text-BY4f0OUC.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const or=["Info","Warning","Danger","Success"];export{s as Danger,o as Info,i as Success,e as Warning,or as __namedExportsOrder,tr as default};
