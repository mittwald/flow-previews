import{R as e}from"./index-BwDkhjyp.js";import{H as s}from"./Heading-CYnWOiGh.js";import T from"./Default.stories-BCSBnkRd.js";import{N as i}from"./Notification-Dj-pOtyH.js";import{T as c}from"./Text-OHQxmlAI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./flowComponent-pf1ZT_RA.js";import"./index-B8XB3FuZ.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-_0I8Kdxf.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./StatusIcon-xqfIiPK6.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Link-DnpH0ML6.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CipJ8IEr.js";import"./useFocusable-Di1f8vLw.js";import"./Button-CGYujOOx.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./Button-j9P20aTv.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";const V={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"Storage almost exceeded"),e.createElement(c,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"No SSL certificate"),e.createElement(c,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},n={args:{status:"success"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"App installation finished"),e.createElement(c,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
