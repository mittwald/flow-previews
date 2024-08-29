import{R as e}from"./index-Cs7sjTYM.js";import{H as s}from"./Heading-D7D2AfHG.js";import T from"./Default.stories-CbSfg7lr.js";import{N as i}from"./Notification-x3a8Mg6B.js";import{T as c}from"./Text-DFobm8NI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-CGcDuTyg.js";import"./index-BU4L-DQy.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./utils-CgpzwoFP.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./StatusIcon-PsWdr6Bh.js";import"./IconApp-DlGeanLT.js";import"./IconWarning-7CQMiFuJ.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Link-DLyaZHDu.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-TtIakmbz.js";import"./useFocusable-d27K8b19.js";import"./Button-B_t9QHMQ.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D_gN5Unn.js";import"./Button-bmyhD0xA.js";import"./Hidden-BsXGu--s.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";const Z={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"Storage almost exceeded"),e.createElement(c,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"No SSL certificate"),e.createElement(c,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},n={args:{status:"success"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"App installation finished"),e.createElement(c,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const ee=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,n as Success,o as Warning,ee as __namedExportsOrder,Z as default};
