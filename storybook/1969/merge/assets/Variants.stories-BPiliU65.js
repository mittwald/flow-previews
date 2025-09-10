import{j as r}from"./iframe-DxsUlawc.js";import{H as a}from"./Heading-BOztv1gg.js";import b from"./Default.stories-CjekpDts.js";import{N as n}from"./Notification-B45Nb5TO.js";import{T as p}from"./Text-BghZAovJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xQDv9zm6.js";import"./mergeRefs-CIUzaBPj.js";import"./index-CXZ1ulCu.js";import"./Heading-CLK_5_44.js";import"./RSPContexts-D24GGWc4.js";import"./utils-anS-nfaS.js";import"./AlertIcon-8o1e_Dxx.js";import"./IconWarning-CxX_lufW.js";import"./useLocalizedStringFormatter-B7ecu7MW.js";import"./context-Pme8S34O.js";import"./Button-IG1UbGgX.js";import"./LoadingSpinner-B_W_hnSA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D6Z7YYpb.js";import"./ProgressBar-litaDe0V.js";import"./Label-DR2p3ljL.js";import"./Hidden-DmCEYrWx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CBxP0DvO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuZIkaGu.js";import"./useFocus-19elgRbR.js";import"./useFocusRing-NqyRw62N.js";import"./useFocusable-Dsjl8uYb.js";import"./Link-CztFBomh.js";import"./dynamic-DKDa4OpU.js";import"./browser-GG2yXHGk.js";import"./EmulatedBoldText-HMke4BSZ.js";import"./Text-w8QkFxXB.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
