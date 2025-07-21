import{j as r}from"./iframe-p6Bp2Ow-.js";import{H as a}from"./Heading-Cfc5zEsW.js";import b from"./Default.stories-zYw-tk48.js";import{N as n}from"./Notification-D8ybFwAR.js";import{T as p}from"./Text-BtmxEKoY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./Heading-ietWoT3o.js";import"./RSPContexts-D2-zMuP7.js";import"./utils-CnAbB5du.js";import"./AlertIcon-C3hQApSW.js";import"./IconWarning-_xRihr7t.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./context-BreHr6W7.js";import"./Button-BLeGlv8j.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./Button-DuvBnjq7.js";import"./ProgressBar-NAttgbiM.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Db1j6kak.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./useFocus-DgSV50G0.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./Link-DQg1GU9j.js";import"./dynamic-DKDa4OpU.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./Text-Cx3sBrCD.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
