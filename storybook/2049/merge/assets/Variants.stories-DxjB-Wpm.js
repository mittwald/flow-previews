import{j as r}from"./iframe-8Gn-cQAI.js";import{H as a}from"./Heading-hkF7brSR.js";import b from"./Default.stories-fP2ugFS_.js";import{N as n}from"./Notification-BVGtZgc2.js";import{T as p}from"./Text-CaltWpnJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./index-UEc6MpK_.js";import"./Heading-CLQt8OMj.js";import"./RSPContexts-BLLLZDxH.js";import"./utils-GVjct8zS.js";import"./AlertIcon-BzAZToZL.js";import"./IconWarning-D4orWaCC.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./Button-BYLyJZ8T.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./Link-5Km-wuq7.js";import"./dynamic-rXbOiSCg.js";import"./browser-BcQIid3c.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./Text-YtT3E9ZO.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
