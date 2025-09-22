import{j as r}from"./iframe-D6MXtoeF.js";import{H as a}from"./Heading-DsViAiwO.js";import b from"./Default.stories-BCYJMiRE.js";import{N as n}from"./Notification-DWhkH3aI.js";import{T as p}from"./Text-BFMh0nyW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./Heading-D9_UVGue.js";import"./RSPContexts-DRsXlI21.js";import"./utils-B7M3k9FN.js";import"./AlertIcon-LL4KJs-J.js";import"./IconWarning-BzCByWga.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./context-Ck2zuvqd.js";import"./Button-Cps8fs86.js";import"./LoadingSpinner-BP-swr7r.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-QOiUMIUW.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D8eXzRI6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ct6Wvp4V.js";import"./useFocus-DFkM6utj.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./Link-CeX6_1AI.js";import"./dynamic-DKDa4OpU.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";import"./Text-X88WQLD_.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
