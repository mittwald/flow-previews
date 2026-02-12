import{j as r}from"./iframe-DeaTJDua.js";import{H as n}from"./Heading-DNOFGRof.js";import c from"./Default.stories-DZepkx37.js";import{N as a}from"./Notification-h6ImabIx.js";import{T as p}from"./Text-DmX-Z1ax.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./Heading-Bb4nX13J.js";import"./RSPContexts-n2YtmRLP.js";import"./utils-DAn_19Le.js";import"./AlertIcon-KKj1r8Dh.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./context-DpHy2B7Z.js";import"./Button-Cbxy7DVV.js";import"./LoadingSpinner-tY2JT6X0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BGs6tBRd.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./Link-CeQaTb3H.js";import"./dynamic-_cZQrmBt.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";const J={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
