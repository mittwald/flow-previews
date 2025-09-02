import{j as r}from"./iframe-yblUafAy.js";import{H as a}from"./Heading-DXeuEdn1.js";import b from"./Default.stories-BiwbYQt9.js";import{N as n}from"./Notification-BhWQNxSc.js";import{T as p}from"./Text-Bue8FNqz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./Heading-CCkmSZ_4.js";import"./RSPContexts-D2F1j_VZ.js";import"./utils-Cuf_iXmO.js";import"./AlertIcon-EVvVnOif.js";import"./IconWarning-FTunGjDP.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./context-DmpjBdtt.js";import"./Button-D2p8-L8R.js";import"./LoadingSpinner-Y4JEbMCH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Zp10QsFY.js";import"./ProgressBar-p6bTWqPO.js";import"./Label-g9pCZyAY.js";import"./Hidden-C5uXlRoq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DopEiXYz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-io38-WAj.js";import"./useFocus-BRMNIepO.js";import"./useFocusRing-BEFChVB0.js";import"./useFocusable-BbfkEIfW.js";import"./Link-CPuEUI8f.js";import"./dynamic-DKDa4OpU.js";import"./browser-B_6hcHr6.js";import"./EmulatedBoldText-FggCtMpU.js";import"./Text-DWcsfeqF.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
