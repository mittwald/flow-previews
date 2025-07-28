import{j as r}from"./iframe-vEDY1jTX.js";import{H as a}from"./Heading-Db4wCs5d.js";import b from"./Default.stories-JEvYNo9F.js";import{N as n}from"./Notification-ClZepMH7.js";import{T as p}from"./Text-75grQ_r_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./Heading-DtsmO95s.js";import"./RSPContexts-DWSs-nZQ.js";import"./utils-gfhUS_KB.js";import"./AlertIcon-BCKcL_jo.js";import"./IconWarning-Br_z56yn.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./context-DTpTEKQR.js";import"./Button-xQdRWtXu.js";import"./LoadingSpinner-DEOdZhCL.js";import"./Button-CkK3LebK.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocus-bOn2kcoo.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./Link--4zZE2Gh.js";import"./dynamic-DKDa4OpU.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";import"./Text-C6tNNGeu.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
