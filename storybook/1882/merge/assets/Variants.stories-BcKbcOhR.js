import{j as r}from"./iframe-TjmQ4-hc.js";import{H as a}from"./Heading-Cig5HHsR.js";import b from"./Default.stories-DyEbPmSM.js";import{N as n}from"./Notification-Bs1s7RYZ.js";import{T as p}from"./Text-B1ccA9_H.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-mrDLBKOi.js";import"./mergeRefs-mF2yj4e0.js";import"./index-D7o1-TZH.js";import"./Heading-WZScnp-T.js";import"./RSPContexts-DCrZu0Mf.js";import"./utils-DD1RW9f4.js";import"./AlertIcon-TNLy8y1j.js";import"./IconWarning-1inC7auC.js";import"./useLocalizedStringFormatter-CDqIJOhp.js";import"./context-R7iXnnvL.js";import"./Button-CjK60Gy6.js";import"./LoadingSpinner-NnONiqHm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ZmvxJ__-.js";import"./ProgressBar-BJaRqoq-.js";import"./Label-bbA9jqHU.js";import"./Hidden-30ERZiSw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-d8aoteAS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BK59oRjy.js";import"./useFocus-Bp-EL3Xp.js";import"./useFocusRing-D7ZBK5Fy.js";import"./useFocusable-BjM2CItA.js";import"./Link-X4gYmyl2.js";import"./dynamic-DKDa4OpU.js";import"./browser-CuXK39lt.js";import"./EmulatedBoldText-CMH1yXpY.js";import"./Text-C2aObJTh.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
