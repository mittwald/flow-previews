import{j as r}from"./iframe-CPSqmfOl.js";import{H as a}from"./Heading-ChvCWS9D.js";import b from"./Default.stories-02SuaH3h.js";import{N as n}from"./Notification-DIQYrnWJ.js";import{T as p}from"./Text-CpNtEmk9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./Heading-5KhJiSKA.js";import"./RSPContexts-D2HT_eZz.js";import"./utils-Bp4pxj2u.js";import"./AlertIcon-CT1xx5Ft.js";import"./IconWarning-Dz0_MR_L.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./context-DzKnIoVi.js";import"./Button-hKWpSws2.js";import"./LoadingSpinner-DLNH37Uk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-e2WWi27E.js";import"./ProgressBar-BjfkTy0Q.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGlbpXp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIALPEwc.js";import"./useFocus-BS8EzIP7.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./Link-DzxC0aXJ.js";import"./dynamic-DKDa4OpU.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";import"./Text-BvvdQ7EK.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
