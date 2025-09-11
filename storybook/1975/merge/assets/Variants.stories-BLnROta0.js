import{j as r}from"./iframe-CyjdJwA_.js";import{H as a}from"./Heading-BlOPZbVl.js";import b from"./Default.stories-DC6OBzj5.js";import{N as n}from"./Notification-D3XW3F6P.js";import{T as p}from"./Text-usW35pyR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./Heading-DUgzyzjX.js";import"./RSPContexts-CNBrQuIV.js";import"./utils-BrA2SjLY.js";import"./AlertIcon-DX20iwEQ.js";import"./IconWarning-BNd_xcWu.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./context-U2uVXE2j.js";import"./Button-CWr2AVcL.js";import"./LoadingSpinner-Cs_zZqgK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtnX1sXm.js";import"./ProgressBar-ClszfSN8.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CugdBF8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DeuQBFn_.js";import"./useFocus-kh_9V4VQ.js";import"./useFocusRing-CIRJex-W.js";import"./useFocusable-Bd5Kcxc9.js";import"./Link-CwsSu8y8.js";import"./dynamic-DKDa4OpU.js";import"./browser-COCGQLuR.js";import"./EmulatedBoldText-Cm98uRnm.js";import"./Text-D5hkVXTt.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
