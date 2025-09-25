import{j as r}from"./iframe-DOdCrrz9.js";import{H as a}from"./Heading-B3Vm_Aux.js";import b from"./Default.stories-n7SbKNdy.js";import{N as n}from"./Notification-DC1alBt9.js";import{T as p}from"./Text-BFGg7rBT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./Heading-BOxaabaZ.js";import"./RSPContexts-OikXJV7Y.js";import"./utils-BhoG2uU0.js";import"./AlertIcon-B7trzxux.js";import"./IconWarning-B_Db9Y2d.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./context-B_SSW0HI.js";import"./Button-B4t52lNZ.js";import"./LoadingSpinner-iDIwh9pR.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BQ3dFx8x.js";import"./ProgressBar-CMaicEWm.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-nPFfwg7P.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cgctm68w.js";import"./useFocus-D8b650dP.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocusable-C6B3BW3Y.js";import"./Link-Bnix3hme.js";import"./dynamic-bhcJ8YER.js";import"./browser-ChoqAG5f.js";import"./EmulatedBoldText-CTisuoOf.js";import"./Text-Cec-yt4l.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
