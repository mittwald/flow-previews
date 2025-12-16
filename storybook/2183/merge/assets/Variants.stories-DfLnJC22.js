import{j as r}from"./iframe-B9O3ZODG.js";import{H as n}from"./Heading-BQ_vmWxW.js";import c from"./Default.stories-DA4sWL9Z.js";import{N as a}from"./Notification-BfLS88ya.js";import{T as p}from"./Text-BRHICk1_.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./Heading-BjnD-4Wn.js";import"./RSPContexts-_UgIwAnW.js";import"./utils-B6bG5pl_.js";import"./AlertIcon-BSfgzRZK.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconDanger-Aj7LdC1h.js";import"./IconInfo-CP1DE9vh.js";import"./IconCircleCheck-DUTQyL60.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Button-_bqaGPGi.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./Label-CUW7vXaw.js";import"./Hidden-1Y6zqjHd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./IconClose-D20P1kS2.js";import"./Link-CsFblSGZ.js";import"./IconDownload-Dp6b4ayR.js";import"./dynamic-18R3GcKE.js";import"./browser-B4_YLigQ.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";const tr={...c,title:"Status/Notifications/Notification/Status"},o={},e={args:{status:"warning"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:t=>r.jsxs(a,{...t,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
