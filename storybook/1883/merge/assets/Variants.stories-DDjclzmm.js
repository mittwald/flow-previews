import{j as r}from"./iframe-DRWwRHPb.js";import{H as a}from"./Heading-l2lCrlvX.js";import b from"./Default.stories-BVO_-SlO.js";import{N as n}from"./Notification-DnbrrQTv.js";import{T as p}from"./Text-BIokAaTQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCWzTzuw.js";import"./mergeRefs-B0ExOAJ1.js";import"./index-DvYl_DKa.js";import"./Heading-Bw-EY3jL.js";import"./RSPContexts-BIfyYgqP.js";import"./utils-9ciE-ZWz.js";import"./AlertIcon-CLqrkwXR.js";import"./IconWarning-DhSonKOB.js";import"./useLocalizedStringFormatter-CU66bFG-.js";import"./context-jL0Ioa3t.js";import"./Button-C17kQQYD.js";import"./LoadingSpinner-B_6uztW9.js";import"./Button-BJEoKlME.js";import"./ProgressBar-lrbeVblJ.js";import"./Label-DWKl8ZCI.js";import"./Hidden-CgY-Zzb9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C1sZK0NB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DZFGRV58.js";import"./useFocus-Cklz1p5-.js";import"./useFocusRing-DwMv-ywr.js";import"./useFocusable-CTYzjUzk.js";import"./Link-qJQRVLBS.js";import"./dynamic-DKDa4OpU.js";import"./browser-ChcUEk5m.js";import"./EmulatedBoldText-w_oHSgVv.js";import"./Text-XTosNzcc.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
