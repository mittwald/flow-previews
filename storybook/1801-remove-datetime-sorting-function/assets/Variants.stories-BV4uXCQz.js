import{j as r}from"./iframe-5e2kPeup.js";import{H as a}from"./Heading-Da8IGzQL.js";import b from"./Default.stories-DoecK8Nv.js";import{N as n}from"./Notification-CX0xTZC9.js";import{T as p}from"./Text-CEKkIKYs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./Heading-0mE3T3ep.js";import"./RSPContexts-DWx74BAe.js";import"./utils-Bj-e-2L9.js";import"./AlertIcon-4i-_h-D8.js";import"./IconWarning-CAYwnCqi.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./context-BlWBKAs5.js";import"./Button-BSAdG0Rb.js";import"./LoadingSpinner-D5xWaFe2.js";import"./Button-DovRDHW7.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocus-CgJ_pcIH.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";import"./Link-VHwN6L0N.js";import"./dynamic-DKDa4OpU.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./Text-DiRiFDT_.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
