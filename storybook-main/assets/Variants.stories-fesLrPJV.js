import{j as r}from"./iframe-PPscN4tr.js";import{H as a}from"./Heading-BOw_RV8p.js";import b from"./Default.stories-D2aYy8Fc.js";import{N as n}from"./Notification-rG9v0s4O.js";import{T as p}from"./Text-Cr4g403k.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./Heading-__tDMM6f.js";import"./RSPContexts-CmKI408-.js";import"./utils-DsPiQVUE.js";import"./AlertIcon-DscLT5-Z.js";import"./IconWarning-DCjExedU.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./context-BC4DP49M.js";import"./Button-DOt7fXGF.js";import"./LoadingSpinner-BmIM-aij.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dq2iCs8C.js";import"./ProgressBar-jJ6XsPfz.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKGHEFGx.js";import"./useFocus-C4zNlByO.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";import"./Link-CzUGCU7X.js";import"./dynamic-DLKBnFH6.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Text-DOZF1D9Q.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
