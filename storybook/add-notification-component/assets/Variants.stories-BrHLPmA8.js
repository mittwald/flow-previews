import{R as e}from"./index-uCp2LrAq.js";import{H as s}from"./Heading-DFwFiMSa.js";import T from"./Default.stories-C7OgNTXz.js";import{N as i}from"./Notification-ioxDAWo1.js";import{T as c}from"./Text-DaXThI_-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./flowComponent-Ca66243O.js";import"./index-BOkhicXD.js";import"./RSPContexts-CJnKmcd7.js";import"./utils-DZgOXw50.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./StatusIcon-DFdh7BB5.js";import"./IconApp-BaqjkNZn.js";import"./IconWarning-DdgHm-gJ.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Link-C0MH8egB.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./useFocusable-DpEA8Hsr.js";import"./Action-C4y8uw1U.js";import"./useOverlayController-uhA2g3Cs.js";import"./getActionGroupSlot-CgY4eby_.js";import"./dynamic-DKDa4OpU.js";import"./Button-gAEWO2zU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BN2ufjn_.js";import"./Button-D4VcI4Uu.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";const re={...T,title:"Status/Notification/Status"},t={},o={args:{status:"warning"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"Storage almost exceeded"),e.createElement(c,null,"The storage in your project ",e.createElement("b",null,"My Project")," is over 80% utilized."))},a={args:{status:"danger"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"No SSL certificate"),e.createElement(c,null,"No SSL certificate could be issued for ",e.createElement("b",null,"example.de"),"."))},n={args:{status:"success"},render:r=>e.createElement(i,{...r},e.createElement(s,null,"App installation finished"),e.createElement(c,null,"Your app ",e.createElement("b",null,"My WordPress")," has been installed."))};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,S,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,E,N;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const te=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,n as Success,o as Warning,te as __namedExportsOrder,re as default};
