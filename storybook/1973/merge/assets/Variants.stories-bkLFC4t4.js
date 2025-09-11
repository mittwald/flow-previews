import{j as r}from"./iframe-DvGStSYQ.js";import{H as a}from"./Heading-CcAer-3o.js";import b from"./Default.stories-CoDjS0a0.js";import{N as n}from"./Notification-bLg9sQfj.js";import{T as p}from"./Text-aqY_knFC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQyMUqli.js";import"./mergeRefs-D5I-7zq8.js";import"./index-vxu4sbw1.js";import"./Heading-Cluu2882.js";import"./RSPContexts-Dwdml_ht.js";import"./utils-BfKSOXmh.js";import"./AlertIcon-cai6D9wi.js";import"./IconWarning-PCMncW0h.js";import"./useLocalizedStringFormatter-B959dniX.js";import"./context-AtsIIwtl.js";import"./Button-DjKTL3-y.js";import"./LoadingSpinner-KPhGKvxN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSYAfZ7k.js";import"./ProgressBar-BElErXd2.js";import"./Label-BsSwZl9V.js";import"./Hidden-D8kwZn2S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-pezwcoCn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-i0ws38c9.js";import"./useFocus-Dk72H1bO.js";import"./useFocusRing-ldGrbWty.js";import"./useFocusable-51csEq1k.js";import"./Link-zvNuQUgJ.js";import"./dynamic-DKDa4OpU.js";import"./browser-B7JgWknh.js";import"./EmulatedBoldText-CaZEOFKE.js";import"./Text-C8nQapVu.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
