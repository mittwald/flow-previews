import{j as r}from"./iframe-Cf8YTZ8I.js";import{H as a}from"./Heading-wniAMg2X.js";import b from"./Default.stories-DJNeJI7o.js";import{N as n}from"./Notification-BDRRbsZj.js";import{T as p}from"./Text-CzCYKR38.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./Heading-BTyyAlZI.js";import"./RSPContexts-Dm9xNQ69.js";import"./utils-mApyKjAg.js";import"./AlertIcon-BV4AMgLi.js";import"./IconWarning-qh9NwBsS.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./context-D-u3TSjV.js";import"./Button-BNQl0TTz.js";import"./LoadingSpinner-CGCXLsJe.js";import"./Button-BRubt609.js";import"./ProgressBar-rV3H6G0W.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kBnuahGK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjpkCDJv.js";import"./useFocus-_Kohxctg.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./Link-zrzIKBQn.js";import"./dynamic-DKDa4OpU.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";import"./Text-CQanMjNI.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
