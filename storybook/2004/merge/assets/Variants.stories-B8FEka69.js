import{j as r}from"./iframe-D1JKOwdq.js";import{H as a}from"./Heading-R_2RsziQ.js";import b from"./Default.stories-DLnEXlPy.js";import{N as n}from"./Notification-BLucsQIh.js";import{T as p}from"./Text-Cv35yGBC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKqNcsdJ.js";import"./mergeRefs-CYbnUoq6.js";import"./index-DOZ5qla4.js";import"./Heading-B9dYxPkj.js";import"./RSPContexts-CoUOlwWC.js";import"./utils-BVsEXjGQ.js";import"./AlertIcon-rosmqw-p.js";import"./IconWarning-DZISCuC-.js";import"./useLocalizedStringFormatter-CIU1pqtk.js";import"./context-Bzqo5E_q.js";import"./Button-DG818FIU.js";import"./LoadingSpinner-D-A5UE94.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DG6zvYi3.js";import"./ProgressBar-4Tm_fzI6.js";import"./Label-CseS0v8E.js";import"./Hidden-Dr2BftiN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Uyswehsd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CwJM0Ele.js";import"./useFocus-CYEgIwnz.js";import"./useFocusRing-8cxgDEwk.js";import"./useFocusable-wd6aWIaf.js";import"./Link-C-obq11P.js";import"./dynamic-ar8rpZDa.js";import"./browser-BI97FZcU.js";import"./EmulatedBoldText-d9mRwZf5.js";import"./Text-BIeeVT6X.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
