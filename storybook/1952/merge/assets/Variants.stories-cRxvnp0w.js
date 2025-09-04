import{j as r}from"./iframe-Nqcw2rDw.js";import{H as a}from"./Heading-DLlnavsX.js";import b from"./Default.stories-BMXxLb6G.js";import{N as n}from"./Notification-u7yScCFq.js";import{T as p}from"./Text-xc4JCB-X.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ChoPgDKo.js";import"./mergeRefs-DwiHgjVG.js";import"./index-Cq0EiWeo.js";import"./Heading-Bj6_gbh2.js";import"./RSPContexts-iQSSy6Xo.js";import"./utils-Bp1w5lkv.js";import"./AlertIcon-IAYTQDay.js";import"./IconWarning-B5Ig4VhK.js";import"./useLocalizedStringFormatter-mfo6vHdn.js";import"./context-Btv9vDKp.js";import"./Button-Cgaohe9-.js";import"./LoadingSpinner-Bp03oye4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-qshs3T0G.js";import"./ProgressBar-Sv3Hk_vO.js";import"./Label-CtCba6z0.js";import"./Hidden-CAJLdDr-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DV1Mt0Tl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLwwvcX7.js";import"./useFocus-C0d_BuOG.js";import"./useFocusRing-CuYhL92s.js";import"./useFocusable-C3WyBOJs.js";import"./Link-BIxmoJHl.js";import"./dynamic-DKDa4OpU.js";import"./browser-BgnnD3cg.js";import"./EmulatedBoldText-Cwk1IhrY.js";import"./Text-CIgQjC5i.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
