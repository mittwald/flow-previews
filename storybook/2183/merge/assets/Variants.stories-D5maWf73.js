import{j as r}from"./iframe-BoCc-iJU.js";import{H as n}from"./Heading-OdXvBm6_.js";import c from"./Default.stories-CsUTSfFp.js";import{N as a}from"./Notification-bXlOlzyW.js";import{T as p}from"./Text-CxsQklp2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./Heading-YPCfOeK8.js";import"./RSPContexts-ZqX2hjEE.js";import"./utils-P0pc5_a9.js";import"./AlertIcon-DfqoVasd.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconDanger-CyJfzsCE.js";import"./IconInfo-Dl8EXL_5.js";import"./IconCircleCheck-BMW89HOF.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Button-XooD-Xiy.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./IconClose-C5BWra8K.js";import"./Link-DnmLO2gK.js";import"./IconDownload-BjOEhnZl.js";import"./dynamic-CBUiQ56u.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
