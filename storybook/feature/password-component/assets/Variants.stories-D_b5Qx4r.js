import{R as e}from"./index-BwDkhjyp.js";import{H as s}from"./Heading-CWJy5QRX.js";import T from"./Default.stories-B_D6wKRZ.js";import{N as i}from"./Notification-CxhxHn9G.js";import{T as c}from"./Text-9sk1yuEP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./flowComponent-arII6e68.js";import"./index-B8XB3FuZ.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-B-mS0hjG.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./StatusIcon-ER_a_72l.js";import"./IconApp-DBpcl0fC.js";import"./IconWarning-BftDN5EW.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./Link-C8DSbxNB.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C1ab-RBW.js";import"./useFocusable-CtcwBWSa.js";import"./Button-D6AAkLLn.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-flulPeUb.js";import"./Button-C6BAnfYv.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-BuIyiEeX.js";const V={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"Storage almost exceeded"),e.createElement(c,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"No SSL certificate"),e.createElement(c,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},n={args:{status:"success"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"App installation finished"),e.createElement(c,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const X=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,n as Success,o as Warning,X as __namedExportsOrder,V as default};