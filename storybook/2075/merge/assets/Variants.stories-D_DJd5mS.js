import{j as r}from"./iframe-D3XbVUAE.js";import{H as a}from"./Heading-BRhqG7uw.js";import b from"./Default.stories-H5UAX2kJ.js";import{N as n}from"./Notification-xS5FM60K.js";import{T as p}from"./Text-D8iCnd0a.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./index-BE_iNncf.js";import"./Heading-C9v1QtIG.js";import"./RSPContexts-BakoLx3C.js";import"./utils-BWY6h_sn.js";import"./AlertIcon-Bt_v5txF.js";import"./IconWarning-DpoKEiS2.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./Button-DI43yX0M.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./Link-Bj7b6F5o.js";import"./dynamic-GIq4BKTG.js";import"./browser-DZQtGRWw.js";import"./EmulatedBoldText-C38wPnte.js";import"./Text-D1dMR7Bg.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
