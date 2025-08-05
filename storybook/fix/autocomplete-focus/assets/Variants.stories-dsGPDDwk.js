import{j as r}from"./iframe-BwUhuRm7.js";import{H as a}from"./Heading-GXPWlFkJ.js";import b from"./Default.stories-D6uGOIdv.js";import{N as n}from"./Notification-BRqgPrft.js";import{T as p}from"./Text-BBSS7FYM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./Heading-D-Wyg3yU.js";import"./RSPContexts-cnUhnSXF.js";import"./utils-DDoNb5qO.js";import"./AlertIcon-rskT8OW9.js";import"./IconWarning-DVI2HiM9.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./context-bUzCuHOu.js";import"./Button-DXRAI5C8.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./Button-Ds18dV5B.js";import"./ProgressBar-ByXy0FjY.js";import"./Label-D-Cavg7S.js";import"./Hidden-DCcQ90cW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CJJXcYYW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMqEl6WQ.js";import"./useFocus-BdFL2QuQ.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocusable-BiRHUtLW.js";import"./Link-Bf90H_J7.js";import"./dynamic-DKDa4OpU.js";import"./browser-CwFUDHtx.js";import"./EmulatedBoldText-Do_4Bp9I.js";import"./Text-CbUcC8Oz.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,S,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const sr=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,sr as __namedExportsOrder,or as default};
