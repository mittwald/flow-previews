import{j as r}from"./iframe-D2Ryv2XM.js";import{H as n}from"./Heading-DXhz_H9M.js";import c from"./Default.stories-3FDqQX9z.js";import{N as a}from"./Notification-D4rxCZSU.js";import{T as p}from"./Text-BztGJEd5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./Heading-DRwXALuA.js";import"./RSPContexts-B-8XijCb.js";import"./utils-BqLZYyR8.js";import"./AlertIcon-D3MSBmRY.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./IconDanger-DUFERqG9.js";import"./IconInfo-DLzcvNiF.js";import"./IconCircleCheck-V25Lv6Jk.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Button-0ymElbGx.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./Label-BRB94mKh.js";import"./Hidden-BS4L5nhJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./IconClose-thb6C0kQ.js";import"./Link-BZBtmYlQ.js";import"./IconDownload-CSZW-VM9.js";import"./dynamic-CYMBERZG.js";import"./browser-k7JOs1GI.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
