import{j as r}from"./iframe-BuQIW6_u.js";import{H as a}from"./Heading-CT_713bG.js";import b from"./Default.stories-DLTQqw9s.js";import{N as n}from"./Notification-Db2uL-47.js";import{T as p}from"./Text-8TMWzlfF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./Heading-B-jFBTau.js";import"./RSPContexts-CueUa63T.js";import"./utils-C3-2IFIX.js";import"./AlertIcon-flRsCpQE.js";import"./IconWarning-CTHW-5ya.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./Button-DlXaalMD.js";import"./LoadingSpinner-BBuxslej.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BKD05Onb.js";import"./ProgressBar-CnP9HTSN.js";import"./Label-Bj6uOgB2.js";import"./Hidden-kXch4Bq4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-V7qiuXiw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKHC3-jq.js";import"./useFocus-CJRfh2Zc.js";import"./useFocusRing-DhNL4Zu8.js";import"./useFocusable-5iT1iM-_.js";import"./Link-nQAkOiiB.js";import"./dynamic-DKDa4OpU.js";import"./browser-DTjbbqmr.js";import"./EmulatedBoldText-jJ_haocf.js";import"./Text-CA4hy8xs.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
