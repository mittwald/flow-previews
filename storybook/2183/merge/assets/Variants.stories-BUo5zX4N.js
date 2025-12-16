import{j as r}from"./iframe-D7SrQHv2.js";import{H as n}from"./Heading-Bt8iyrDh.js";import c from"./Default.stories-BhY0bdyw.js";import{N as a}from"./Notification-BVTBjD5h.js";import{T as p}from"./Text-DGpwmxCB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./Heading-CAzYiv_H.js";import"./RSPContexts-BbVjh3iw.js";import"./utils-CiuuAwJm.js";import"./AlertIcon-3CetsPmI.js";import"./IconChevronDown-CXRERNRA.js";import"./remote-DGKmlYcY.js";import"./IconDanger-Bz8n8vBB.js";import"./IconInfo-Da8TkM4N.js";import"./IconCircleCheck-xyI2D9cA.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./Button-BDlkh_ZH.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./Label-mdRoqDLO.js";import"./Hidden-4rkKn0h6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./IconClose-BrraBxGX.js";import"./Link-DH9EdT9n.js";import"./IconDownload-Bi5nT00r.js";import"./dynamic-CUG3tgkH.js";import"./browser-DrK2T41E.js";import"./EmulatedBoldText-ChURRL1S.js";import"./Text-BPF9cVJc.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
