import{j as r}from"./iframe-BsZhBXal.js";import{H as n}from"./Heading-DRqNFlD6.js";import c from"./Default.stories-BK42yTxE.js";import{N as a}from"./Notification-Y9pMDROS.js";import{T as p}from"./Text-CWir5uzG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./Heading-CZksgabI.js";import"./RSPContexts-CGJG9_Ew.js";import"./utils-D7f3lHNi.js";import"./AlertIcon-Dxf78ivN.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconDanger-D44A5Pyv.js";import"./IconInfo-Do6A0oHF.js";import"./IconCircleCheck-BfY3bhV4.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Button-Cxmuw7nD.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./IconClose-sASTaX21.js";import"./Link-DFHN4z_6.js";import"./IconDownload-CWVrnZrh.js";import"./dynamic-V9DMyUPi.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
