import{j as r}from"./iframe-CCJYfocm.js";import{H as a}from"./Heading-DPpg3tUR.js";import b from"./Default.stories-4LmJB7gk.js";import{N as n}from"./Notification-D9g6IdgI.js";import{T as p}from"./Text-oKQCGqUf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2Y3k6X1.js";import"./mergeRefs-A29wE7X8.js";import"./index-zIu0Aebb.js";import"./Heading-DjiA9CZu.js";import"./RSPContexts-DtIV_XWn.js";import"./utils-OhB6egAd.js";import"./AlertIcon-BGt8UsN8.js";import"./IconWarning-zKFwDxee.js";import"./useLocalizedStringFormatter-MhDzL5qd.js";import"./context-CpznRjhe.js";import"./Button-hb7RSFxN.js";import"./LoadingSpinner-Cz7ScZS_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dp1voZV2.js";import"./ProgressBar-Bltfi6Tm.js";import"./Label-yb6vzwnx.js";import"./Hidden-D09nfSIf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DWLXZ_5I.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-nD__UC.js";import"./useFocus-ByyEn-Pe.js";import"./useFocusRing-D9TEPTC8.js";import"./useFocusable-C8TAEKG6.js";import"./Link-BeQWh_nD.js";import"./dynamic-DKDa4OpU.js";import"./browser-B7o8lEj9.js";import"./EmulatedBoldText-CzNN3IMB.js";import"./Text-COyZC_d0.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
