import{j as r}from"./iframe-QjFTiyQe.js";import{H as a}from"./Heading-B7tG6tmq.js";import b from"./Default.stories-B2-oB4Zi.js";import{N as n}from"./Notification-OxyVDpbK.js";import{T as p}from"./Text-BZfLsL9o.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./Heading-CKgYV3oq.js";import"./RSPContexts-D-dV82T_.js";import"./utils-r8e_N1jc.js";import"./AlertIcon-C4_np_LO.js";import"./IconWarning-I1gVfg4d.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./context-CTF16ofK.js";import"./Button-DswPXoPV.js";import"./LoadingSpinner-DWbOqfQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Czs8nreM.js";import"./ProgressBar-gZUBqeyg.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BzcwXIx3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CnoQHIlJ.js";import"./useFocus-CRsfU1Oq.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocusable-D3z6GPZp.js";import"./Link-D-LDFCDO.js";import"./dynamic-BXiQW-1E.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Text-C66hVS57.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ir=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ir as __namedExportsOrder,sr as default};
