import{j as r}from"./iframe-D8FrJ-CZ.js";import{H as a}from"./Heading-BCUHArUZ.js";import b from"./Default.stories-Yhzf04cg.js";import{N as n}from"./Notification-Bta3wGRb.js";import{T as p}from"./Text-CijQgHlf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./Heading-BoE0fvKk.js";import"./RSPContexts-DvajV3uw.js";import"./utils-DLru3qrQ.js";import"./AlertIcon-BnbAx-wW.js";import"./IconWarning-C11FXGxU.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./context-Dz2Qbbtu.js";import"./Button-Cq__NSNu.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVdJDgqt.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-mcSHbC1W.js";import"./useFocus-_KFCgimG.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./Link-DVmWaJ_j.js";import"./dynamic-DKDa4OpU.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./Text-CjVOmJR3.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
