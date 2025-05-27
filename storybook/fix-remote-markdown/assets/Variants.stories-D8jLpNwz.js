import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{H as a}from"./Heading-DdMK9uxY.js";import b from"./Default.stories-DN1TtHGZ.js";import{N as n}from"./Notification-Cuqpjp8F.js";import{T as p}from"./Text-D7P1-Ebs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DBqjDBJq.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./Heading-BFHXViOZ.js";import"./RSPContexts-9nj2DFX_.js";import"./utils-DvYDvJ-W.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./AlertIcon-Dv6wshpu.js";import"./IconWarning-CTsWIAx0.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./Button-jIw9nnwC.js";import"./LoadingSpinner-DN0dUJdB.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./Link-bjfdK99o.js";import"./dynamic-DKDa4OpU.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-1CJ30n_Q.js";const nr={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},i={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},s={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,S,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const pr=["Info","Warning","Danger","Success"];export{i as Danger,t as Info,s as Success,o as Warning,pr as __namedExportsOrder,nr as default};
