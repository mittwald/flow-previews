import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{H as a}from"./Heading-PeUUhGKy.js";import b from"./Default.stories-BqAQYX6N.js";import{N as n}from"./Notification-DT7apvN8.js";import{T as p}from"./Text-BciG-yUw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D9Ku3jRC.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-OyBYAyl7.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./Heading-glOOglw2.js";import"./RSPContexts-Cbm9ZJUe.js";import"./utils-CNUJJGcD.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./AlertIcon-83cVUtMq.js";import"./IconWarning-D0mx6M9Q.js";import"./useLocalizedStringFormatter-De8CUlme.js";import"./context-B2NjtFkN.js";import"./Button-D18ZHKvD.js";import"./LoadingSpinner-G3ilYILK.js";import"./Button-BTfgqu_0.js";import"./ProgressBar-BDeVoaCo.js";import"./Label-DsLtIi5U.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-XC8v3O7U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWaDT6O_.js";import"./useFocus-Ck8e1iB7.js";import"./useFocusRing-BmK03SYd.js";import"./useFocusable-CxpMFfxV.js";import"./Link-CJ81ev2g.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-BJ9sUP_l.js";const mr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,S,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const dr=["Info","Warning","Danger","Success"];export{i as Danger,t as Info,s as Success,o as Warning,dr as __namedExportsOrder,mr as default};
