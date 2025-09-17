import{j as r}from"./iframe-BmaCy5vn.js";import{H as a}from"./Heading-DvU7HY66.js";import b from"./Default.stories-tgzE1Jmf.js";import{N as n}from"./Notification-CtRZ3Any.js";import{T as p}from"./Text-Bb5YosKE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./Heading---3yDhu1.js";import"./RSPContexts-BWdUGPyC.js";import"./utils-BTcDldbE.js";import"./AlertIcon-DQaZLe-4.js";import"./IconWarning-HxJndVZz.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./context-D74MXKTM.js";import"./Button-D_WPZvgQ.js";import"./LoadingSpinner-ht0ZG28N.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-wePQNGHF.js";import"./ProgressBar-DbkKYMEg.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-aIW9IeHZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D_L0SfOg.js";import"./useFocus-eJJI3D_B.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocusable-BZM-anb5.js";import"./Link-tHmjwLpd.js";import"./dynamic-DKDa4OpU.js";import"./browser-CHe_8eCl.js";import"./EmulatedBoldText-6eMdCTCE.js";import"./Text-DKW9AlZS.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
