import{j as r}from"./iframe-k0i0tSJI.js";import{H as a}from"./Heading-CnN6g1-i.js";import b from"./Default.stories-CH3dMsQv.js";import{N as n}from"./Notification-CkuZ35Z7.js";import{T as p}from"./Text-Cgxvqary.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./Heading-CjvbCWNJ.js";import"./RSPContexts-DMQIQMHx.js";import"./utils-BgzpsI0V.js";import"./AlertIcon-CorkigaR.js";import"./IconWarning-Dg2SDivU.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./context-C6mYXPQf.js";import"./Button-oL_0-1Fa.js";import"./LoadingSpinner-DmRdTw1-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-S7ehKHFA.js";import"./ProgressBar-BxBVznBa.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-r92EfUV9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BmNwYdlA.js";import"./useFocus-rEgPF8zF.js";import"./useFocusRing-CO9MadZb.js";import"./useFocusable-B3ABF-8R.js";import"./Link-BeuT36KM.js";import"./dynamic-BLAyWru4.js";import"./browser-4UXY86st.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./Text-BxPl3Uwa.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
