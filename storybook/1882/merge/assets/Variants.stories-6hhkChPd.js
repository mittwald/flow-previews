import{j as r}from"./iframe-sBvqvo7_.js";import{H as a}from"./Heading-DL2JXIVD.js";import b from"./Default.stories-Dx5sdAZR.js";import{N as n}from"./Notification-6032p4MC.js";import{T as p}from"./Text-C6wVel0M.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./Heading-BmYY4TiC.js";import"./RSPContexts-E7RieiUt.js";import"./utils-B2LriU5l.js";import"./AlertIcon-CC6BbgD1.js";import"./IconWarning-BMngykPL.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./context-C3R-osbZ.js";import"./Button-J4OQPVw4.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C8-y5amo.js";import"./ProgressBar-BAnWuAWU.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAWuGzS8.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-seZ0T8mb.js";import"./useFocus-CVs-BOzj.js";import"./useFocusRing-B1VapAs-.js";import"./useFocusable-DA4OWrdg.js";import"./Link-CxjEWmHh.js";import"./dynamic-DKDa4OpU.js";import"./browser-DLpa1UK_.js";import"./EmulatedBoldText-MyVSeX0t.js";import"./Text-CAc83Hwb.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
