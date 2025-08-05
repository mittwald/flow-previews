import{j as r}from"./iframe-BrFbgMdZ.js";import{H as a}from"./Heading-PSfhCvE2.js";import b from"./Default.stories-ChzGTsOw.js";import{N as n}from"./Notification-DQPWpXi9.js";import{T as p}from"./Text-C3YpUANr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DlKSdUnj.js";import"./mergeRefs-CglpECzs.js";import"./index-CsZHFADM.js";import"./Heading-Dffh2t79.js";import"./RSPContexts-Dtf8PKxD.js";import"./utils-uGt6lEHy.js";import"./AlertIcon-TCHqZPRR.js";import"./IconWarning-aBCbZP3e.js";import"./useLocalizedStringFormatter-BeYnnAMh.js";import"./context-B0-ElNi2.js";import"./Button-DrqjXTlc.js";import"./LoadingSpinner-3OtgiQa9.js";import"./Button-dFM767hW.js";import"./ProgressBar-CACYrIaY.js";import"./Label-Dtl4zIvG.js";import"./Hidden-UstvKMMQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BY-hcXqn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IpqNhXgC.js";import"./useFocus-D9Wd5vZ-.js";import"./useFocusRing-Dpc6yEcL.js";import"./useFocusable-BzJo03Xl.js";import"./Link-BZqig0ju.js";import"./dynamic-DKDa4OpU.js";import"./browser-BeJxvhux.js";import"./EmulatedBoldText-CmWQu6L0.js";import"./Text-B3veiim8.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
