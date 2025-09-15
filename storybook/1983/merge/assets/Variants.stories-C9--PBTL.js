import{j as r}from"./iframe-Bok6IQju.js";import{H as a}from"./Heading-CZgaWX2U.js";import b from"./Default.stories-E8zTMoCd.js";import{N as n}from"./Notification-XUygZmiY.js";import{T as p}from"./Text-BAsYg4gL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./Heading-5Y7g4Kq0.js";import"./RSPContexts-DI5gwLuS.js";import"./utils-Cq7OaFeW.js";import"./AlertIcon-B9bXLpXV.js";import"./IconWarning-DqBq2uRB.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./context-BMAErJH4.js";import"./Button-I2NsynHm.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CF3vMWYC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./Link-DP9F-20c.js";import"./dynamic-BxA90To4.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
