import{j as r}from"./iframe-DyMBbPqz.js";import{H as a}from"./Heading-CGGLd8uz.js";import b from"./Default.stories-MqfKffpy.js";import{N as n}from"./Notification-DgwRcaCI.js";import{T as p}from"./Text-CukGSnAt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./Heading-DRXAMfzE.js";import"./RSPContexts-BQIv_6Ah.js";import"./utils-CVBG1xQY.js";import"./AlertIcon-BGQeThm8.js";import"./IconWarning-ZZpE0RLv.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./context-Da3l2mom.js";import"./Button-BlPqNUGj.js";import"./LoadingSpinner-zaoUk7MO.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B4XEqpsk.js";import"./ProgressBar-78wlbF0l.js";import"./Label-BeoFpfOq.js";import"./Hidden-DDXBBs4Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_qDqqXns.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3aMe8WM.js";import"./useFocus-DU8oSjU-.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocusable-DC8rXwC1.js";import"./Link-k0csAJr-.js";import"./dynamic-DKDa4OpU.js";import"./browser-n8MK_CxL.js";import"./EmulatedBoldText-xvO4zYSH.js";import"./Text-CM2C2q3t.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
