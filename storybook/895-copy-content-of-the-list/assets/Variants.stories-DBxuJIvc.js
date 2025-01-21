import{R as e}from"./index-B-o1Wr-g.js";import{H as n}from"./Heading-Cx3jvWcZ.js";import T from"./Default.stories-BEaI7PmL.js";import{N as s}from"./Notification-Cu0mhIuK.js";import{T as p}from"./Text-Cl00oEZR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./useAltKeySelectionProps-Dqsvf2Or.js";import"./Heading-CrY40Q5a.js";import"./RSPContexts-BT50PPhj.js";import"./utils-7gTBvjqH.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-hqV0yrG9.js";import"./IconApp--rto3B0B.js";import"./IconWarning-C7RtCnUV.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Link-C3npivZV.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C3EQNDer.js";import"./useFocusRing-CTDVvBmm.js";import"./useFocusable-BXVt7Q_3.js";import"./Button-DL4zOTEl.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D3THsmJZ.js";import"./Button-CFfO75lD.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-R-rrVGxo.js";const pe={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"Storage almost exceeded"),e.createElement(p,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"No SSL certificate"),e.createElement(p,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},i={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"App installation finished"),e.createElement(p,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(N=(S=a.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var b,x,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const me=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,i as Success,o as Warning,me as __namedExportsOrder,pe as default};
