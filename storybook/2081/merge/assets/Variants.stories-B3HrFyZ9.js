import{j as r}from"./iframe-Cxe2R7_6.js";import{H as a}from"./Heading-BGX___zH.js";import b from"./Default.stories-BwlArOfk.js";import{N as n}from"./Notification-MMU1kJfI.js";import{T as p}from"./Text-BRz7lILS.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./index-C9WdiMZF.js";import"./Heading-Cg-1JubH.js";import"./RSPContexts-BTHaIq-S.js";import"./utils-DyWdIPZh.js";import"./AlertIcon-VhJiS59g.js";import"./IconWarning-Jidhe8u4.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./Button-DDreAfBq.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./Link-B5-ksQ_w.js";import"./dynamic-C5ZbgSqQ.js";import"./browser-eQsbTmR1.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./Text-DwJdwITw.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
