import{j as r}from"./iframe-CMcq8v1f.js";import{H as a}from"./Heading-B3YRxumr.js";import c from"./Default.stories-DT9qVBP-.js";import{N as n}from"./Notification-CiHJk2Z8.js";import{T as p}from"./Text-DOkc_YZA.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./Heading-CmiL6R02.js";import"./RSPContexts-DoqEYCaI.js";import"./utils-B4_KO4f3.js";import"./AlertIcon-CmJKkQcL.js";import"./IconWarning-pzLTBmMV.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./Button-CRhbM7FI.js";import"./LoadingSpinner-DgAvzAIP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qWTNe4li.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./Link-BTcql2fF.js";import"./dynamic-FUMijUiW.js";import"./browser-BnbqEoZX.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";const G={...c,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
