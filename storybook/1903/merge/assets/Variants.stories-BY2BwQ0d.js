import{j as r}from"./iframe-_AHHYLe8.js";import{H as a}from"./Heading-X58ltJnb.js";import b from"./Default.stories-DgnX_m8E.js";import{N as n}from"./Notification-BIovR6Tk.js";import{T as p}from"./Text-Cmtv_jKA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./Heading-C2hoDKBp.js";import"./RSPContexts-D87DkYMD.js";import"./utils-q-IwrKfZ.js";import"./AlertIcon-DQ1Eq19D.js";import"./IconWarning-CK_fmTss.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./context-CUyryTbq.js";import"./Button-DpBb7dXP.js";import"./LoadingSpinner-DRmJrHkB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C5j2D-85.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-lAnn0GIu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSHe1cmn.js";import"./useFocus-Cc4rXbR6.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./Link-BvyDULsm.js";import"./dynamic-DKDa4OpU.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./Text-Bojy_plc.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
