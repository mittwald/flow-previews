import{j as r}from"./iframe-BBgxZ9_Z.js";import{H as a}from"./Heading-Bdm7kJ9W.js";import b from"./Default.stories-DLVVgdvL.js";import{N as n}from"./Notification-BtS_eLi_.js";import{T as p}from"./Text-DGcNKUf7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-IdqCMJT1.js";import"./mergeRefs-BLmxAuNF.js";import"./index-BhvP9-i6.js";import"./Heading-B8IOml0A.js";import"./RSPContexts-3v3yZrnH.js";import"./utils-MwuRBPAU.js";import"./AlertIcon-CH5FEca7.js";import"./IconWarning-8HHOdEAt.js";import"./useLocalizedStringFormatter-oXVl5QY8.js";import"./context-1V9oDOBq.js";import"./Button-B-lzkDqv.js";import"./LoadingSpinner-AMSMSqlY.js";import"./Button-CYTZuBnH.js";import"./ProgressBar-DwujBMLa.js";import"./Label-Di9QaZZ3.js";import"./Hidden-k-QU5_bv.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtD9pvoh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTZ5yxFT.js";import"./useFocus-BbdsXgPj.js";import"./useFocusRing-LpVKnpiI.js";import"./useFocusable-CfVMEKsh.js";import"./Link-iu9eKawv.js";import"./dynamic-DKDa4OpU.js";import"./browser-XdNXsdMD.js";import"./EmulatedBoldText-Bf9Yi8oc.js";import"./Text-D0NxCgiz.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
