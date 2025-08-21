import{j as r}from"./iframe-BvdD6qXg.js";import{H as a}from"./Heading-4ynE8vAD.js";import b from"./Default.stories-hFRD0B5J.js";import{N as n}from"./Notification-Dn7XUoqj.js";import{T as p}from"./Text-CCdgZxrm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BF7i2FhK.js";import"./mergeRefs-Dnf-Pw23.js";import"./index-DnH4257v.js";import"./Heading-C-rB2L_h.js";import"./RSPContexts-Myyfynwt.js";import"./utils-DLyEFlgv.js";import"./AlertIcon-DNNQdUqp.js";import"./IconWarning-BNkxb_83.js";import"./useLocalizedStringFormatter-CRa4f4Ro.js";import"./context-CM85t4Ux.js";import"./Button-7ivsFGmn.js";import"./LoadingSpinner-BmDETFjn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DQnvmhgF.js";import"./ProgressBar-Bt3oFLCo.js";import"./Label-BA_GTzaI.js";import"./Hidden-DJ1F2YbP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-qrx4I7MD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-2QIW6EnW.js";import"./useFocus-ByAGBV0g.js";import"./useFocusRing-CImSweUq.js";import"./useFocusable-0-dkSgyo.js";import"./Link-B-UxIpFt.js";import"./dynamic-DKDa4OpU.js";import"./browser-D0kBFYzL.js";import"./EmulatedBoldText-DlBeGY0R.js";import"./Text-D84jcunx.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
