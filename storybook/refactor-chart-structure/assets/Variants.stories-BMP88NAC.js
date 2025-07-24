import{j as r}from"./iframe-B14Hztna.js";import{H as a}from"./Heading-BQAgHHsC.js";import b from"./Default.stories-pdco3Jx5.js";import{N as n}from"./Notification-C7SLi0tl.js";import{T as p}from"./Text-CvN8mc0t.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-uadcFCMp.js";import"./mergeRefs-Bv4UzjNV.js";import"./index-BavqP8B-.js";import"./Heading-CdQRJe-S.js";import"./RSPContexts-Bfi0I49R.js";import"./utils-DoVwnhJ7.js";import"./AlertIcon-CbWA53Xf.js";import"./IconWarning-EXdx-O5E.js";import"./useLocalizedStringFormatter-Dv2L7e6J.js";import"./context-ClRpg4Pi.js";import"./Button-CgtdFPzc.js";import"./LoadingSpinner-BUgI2O_m.js";import"./Button-C-dpYs0v.js";import"./ProgressBar-DTeLqJx_.js";import"./Label-Dj1DBquH.js";import"./Hidden-DEGhv2S1.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BQ9idzkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIDHtETH.js";import"./useFocus-DUtc_xDc.js";import"./useFocusRing-BniRYtyP.js";import"./useFocusable-qJIKezDE.js";import"./Link-BfBOEB9t.js";import"./dynamic-DKDa4OpU.js";import"./browser-DQtsHFqq.js";import"./EmulatedBoldText-CgkGARPI.js";import"./Text-CpIc-G8R.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
