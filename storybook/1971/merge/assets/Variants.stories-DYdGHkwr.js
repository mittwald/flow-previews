import{j as r}from"./iframe-JrijvI0G.js";import{H as a}from"./Heading-C_XHAp4M.js";import b from"./Default.stories-DgqoMyrG.js";import{N as n}from"./Notification-C32KplwP.js";import{T as p}from"./Text-9s7Vdafx.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./Heading-BW0daRbe.js";import"./RSPContexts-bEimFc0k.js";import"./utils-DhZkrhHH.js";import"./AlertIcon-BdSR7S12.js";import"./IconWarning-B3U3_U2s.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./context-CnkMg4nA.js";import"./Button-nOLp9HyP.js";import"./LoadingSpinner-BpDSxo2f.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bp13GR3E.js";import"./ProgressBar-D10mUZdz.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D5nQ4vXC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JaoXEhrO.js";import"./useFocus-DA61-eEI.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocusable-DIk21gkV.js";import"./Link-3TLUsjGm.js";import"./dynamic-BUc0KwfX.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./Text-Bm8Zb_oa.js";const sr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ir=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ir as __namedExportsOrder,sr as default};
