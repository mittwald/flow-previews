import{R as e}from"./index-Cs7sjTYM.js";import{H as i}from"./Heading-DL0yWXQH.js";import T from"./Default.stories-TnhoukfU.js";import{N as s}from"./Notification-DlikJ26h.js";import{T as c}from"./Text-D9clVBM1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-D7ioKQ_2.js";import"./index-Cf-03bMR.js";import"./Heading-CS0RTEE1.js";import"./RSPContexts-BseA8goh.js";import"./utils-Bcr9fq-m.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./StatusIcon-Bu8Ld5YB.js";import"./IconApp-BOae6dD3.js";import"./IconWarning-DMnbQijb.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Link-te4PTND-.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Do5SRlXR.js";import"./useFocusRing-CRCkdtud.js";import"./useFocusable-B6dIjavV.js";import"./Button-CYsSx6EQ.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BLH-7Wh6.js";import"./Button-BCnEwtbK.js";import"./Hidden-DMUPAT4b.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-KzcdCwWD.js";const ee={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Storage almost exceeded"),e.createElement(c,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"No SSL certificate"),e.createElement(c,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},n={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"App installation finished"),e.createElement(c,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,S,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var b,x,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const re=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,n as Success,o as Warning,re as __namedExportsOrder,ee as default};
