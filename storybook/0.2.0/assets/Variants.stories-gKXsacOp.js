import{j as r}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{H as a}from"./Heading-B6ntI1Uh.js";import b from"./Default.stories-WAYY4iYO.js";import{N as n}from"./Notification-JBjevJ2t.js";import{T as p}from"./Text-CISO88fp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./Heading-TsowwGP7.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DbIpkr2E.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-4Snor4aq.js";import"./IconApp-DoH4uGTw.js";import"./react-children-utilities-C_p-_B4N.js";import"./IconWarning--dCRo9Au.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Link-jw9GFn8F.js";import"./filterDOMProps-BSfnXAP7.js";import"./usePress-6Arr-Ydv.js";import"./useFocusRing-Jnne1fGl.js";import"./useFocusable-DSRH2vY_.js";import"./Button-D4koA9OF.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DuhR3UMI.js";import"./Button-Cft9vso-.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-y-0OLV69.js";import"./Text-DUOeOfAn.js";const mr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
