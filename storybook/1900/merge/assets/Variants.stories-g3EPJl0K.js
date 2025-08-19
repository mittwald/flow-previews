import{j as r}from"./iframe-dcfCh18n.js";import{H as a}from"./Heading-D8gQrocA.js";import b from"./Default.stories-B352cqTQ.js";import{N as n}from"./Notification-HWs8smVC.js";import{T as p}from"./Text-D7p3kvP7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./Heading-DaCQBB00.js";import"./RSPContexts-W4MNUJhM.js";import"./utils-CaaN6tMi.js";import"./AlertIcon-BH4Y-svb.js";import"./IconWarning-BWA_nqvd.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./context-BfLqp0TH.js";import"./Button-Da273mbx.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D8qJizcb.js";import"./ProgressBar-BcZD8tRU.js";import"./Label-DBNmmXrt.js";import"./Hidden-CnGKQwOV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CpnVZyQW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BgO5jEhv.js";import"./useFocus-DiEh5oG5.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocusable-Cdnk8Kqp.js";import"./Link-CVTly0St.js";import"./dynamic-DKDa4OpU.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";import"./Text-38QS6QcB.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
