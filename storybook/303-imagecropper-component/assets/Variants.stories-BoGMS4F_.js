import{R as e}from"./index-Cs7sjTYM.js";import{H as n}from"./Heading-TK7j1OMP.js";import T from"./Default.stories-C61fW9_e.js";import{N as s}from"./Notification-DJ1U_tHf.js";import{T as p}from"./Text-U6fXasfV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./Heading-eVsuDLmW.js";import"./RSPContexts-BseA8goh.js";import"./utils-BwYH5X3X.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./AlertIcon-BlaLswVm.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-CKNdQ7e9.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Link-CANUX3pR.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-1fQJjpyE.js";import"./useFocusRing-if03xCoO.js";import"./useFocusable-VJrkZIcY.js";import"./Button-DXVDIrTY.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvQ8syNA.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dd84vsje.js";const ie={...T,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"Storage almost exceeded"),e.createElement(p,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"No SSL certificate"),e.createElement(p,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},i={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(n,null,"App installation finished"),e.createElement(p,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const ne=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,i as Success,o as Warning,ne as __namedExportsOrder,ie as default};
