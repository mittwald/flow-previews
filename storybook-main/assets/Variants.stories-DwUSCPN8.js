import{j as r}from"./iframe-CqRNQciv.js";import{H as a}from"./Heading-CQg1SG_l.js";import b from"./Default.stories-BfXpfVxo.js";import{N as n}from"./Notification-DyijAvM1.js";import{T as p}from"./Text-BmM8CnJX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQfe9ict.js";import"./mergeRefs-ClD3ZqgW.js";import"./index-BklbjYgM.js";import"./Heading-D9MkxIpz.js";import"./RSPContexts-Cux7rZ-z.js";import"./utils-CDZvBAhZ.js";import"./AlertIcon-Dcz2iNlR.js";import"./IconWarning-Byt1rMjk.js";import"./useLocalizedStringFormatter-Ctan4lLb.js";import"./context-DEliiBST.js";import"./Button-BQVO0si3.js";import"./LoadingSpinner-B7q__8zb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cp6wFlJh.js";import"./ProgressBar-BcNp5lkE.js";import"./Label-D-Urwdt3.js";import"./Hidden-B2J6qN6V.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B8y4VsiL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Qa0Hjq2B.js";import"./useFocus-C23Lw-eJ.js";import"./useFocusRing-B0f1J6LY.js";import"./useFocusable-Bbxq5z2c.js";import"./Link-vZo3h5bB.js";import"./dynamic-DKDa4OpU.js";import"./browser-DF98vWDx.js";import"./EmulatedBoldText-Dxetj7v-.js";import"./Text-DPg2upf1.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
