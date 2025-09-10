import{j as r}from"./iframe-DcFGg16D.js";import{H as a}from"./Heading-n_TZDmqA.js";import b from"./Default.stories-BzU-fpPf.js";import{N as n}from"./Notification-CcDA5tsF.js";import{T as p}from"./Text-DMVvzt3E.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BUogT5Xb.js";import"./mergeRefs-OVYq_ib7.js";import"./index-CDaG_HQK.js";import"./Heading-B3gs3td_.js";import"./RSPContexts-BGgHSZk2.js";import"./utils-MGL4-aZB.js";import"./AlertIcon-C1ZFlsX4.js";import"./IconWarning-CHPRxwlr.js";import"./useLocalizedStringFormatter-BA09CE4K.js";import"./context-2JOSlQoN.js";import"./Button-DJ4LLcBR.js";import"./LoadingSpinner-B2KP9AW1.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-eLaBErzq.js";import"./ProgressBar-B1oFmI6J.js";import"./Label-DA_WgLUG.js";import"./Hidden-Cmuw7QWn.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BWfTCaKH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dxku2mh7.js";import"./useFocus-U4AMFjB6.js";import"./useFocusRing-C2kFO1mh.js";import"./useFocusable-CBHGItg9.js";import"./Link-DQW6N6eW.js";import"./dynamic-DKDa4OpU.js";import"./browser-CVxrqIOh.js";import"./EmulatedBoldText-BLYaA1Bn.js";import"./Text-Bo-pyWRw.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
