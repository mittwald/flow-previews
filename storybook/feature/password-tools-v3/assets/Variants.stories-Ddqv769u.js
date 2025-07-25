import{j as r}from"./iframe-BBx9-gCC.js";import{H as a}from"./Heading-CjnzzP7a.js";import b from"./Default.stories-Dw3lPDdy.js";import{N as n}from"./Notification-UwqlPd5i.js";import{T as p}from"./Text-BRZqhCt6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJQMRhIz.js";import"./mergeRefs-CjwhAStn.js";import"./index-CiDUljAk.js";import"./Heading--tvq-06a.js";import"./RSPContexts-JH7zjLDh.js";import"./utils-SrU--Gh3.js";import"./AlertIcon-CbYeSYGw.js";import"./IconWarning-47GPuUwW.js";import"./useLocalizedStringFormatter-BhZ19fOj.js";import"./context-Ck7bCMhf.js";import"./Button-Ddotms0d.js";import"./LoadingSpinner-AZclZqAu.js";import"./Button-L3SI-iJl.js";import"./ProgressBar-CJ4YAGIN.js";import"./Label-CVor_bqX.js";import"./Hidden-BTXZmZLy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CF_pOETX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dpgdsh2n.js";import"./useFocus-BXsHwCAW.js";import"./useFocusRing-D6klBOWk.js";import"./useFocusable-D4Fl883K.js";import"./Link-2j6OoWyU.js";import"./dynamic-DKDa4OpU.js";import"./browser-Bo5IRxBw.js";import"./EmulatedBoldText-BvDF2M3d.js";import"./Text--Ew1YFd1.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
