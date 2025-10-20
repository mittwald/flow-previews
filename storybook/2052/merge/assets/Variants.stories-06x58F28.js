import{j as r}from"./iframe-CwuqIU3i.js";import{H as a}from"./Heading-IfYlGqVo.js";import b from"./Default.stories-CrHgHdpH.js";import{N as n}from"./Notification-FuxOUrRK.js";import{T as p}from"./Text-Dbs8GmZM.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./index-DdRMNQVP.js";import"./Heading-C5Mr4Kjc.js";import"./RSPContexts-BJREWOlr.js";import"./utils-BNUN6Z86.js";import"./AlertIcon-DAOrSmNj.js";import"./IconWarning-DfuZN-Hc.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./Button-BqbqUci_.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./Link-BR92CTno.js";import"./dynamic-DTSFzVL0.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
