import{j as r}from"./iframe-BIwOddjN.js";import{H as a}from"./Heading-Bnq9f_Vp.js";import b from"./Default.stories-CT_aOAtb.js";import{N as n}from"./Notification-DekwYVXN.js";import{T as p}from"./Text-3VIHsAGv.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./Heading-CXpceP0M.js";import"./RSPContexts-CSo-c8h2.js";import"./utils-DPukZ4w7.js";import"./AlertIcon-CEV0HGaV.js";import"./IconWarning-DNMJ1XNo.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./context-CbJ8Tawl.js";import"./Button-DVKpBB_-.js";import"./LoadingSpinner-CG5b-Kig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DDY6r886.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-4QX-FuAL.js";import"./useFocus-Cj2Pu7gn.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./Link-AePDBOUr.js";import"./dynamic-copMXHk7.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Text-D1MRO4dn.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ir=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ir as __namedExportsOrder,sr as default};
