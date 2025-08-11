import{j as r}from"./iframe-Cvd7_oGo.js";import{H as a}from"./Heading-B-L-D_0d.js";import b from"./Default.stories-BAhZGkAt.js";import{N as n}from"./Notification-H58l6OKj.js";import{T as p}from"./Text-hU5scIVG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./Heading-CH9Zg8Ky.js";import"./RSPContexts-BNHCum3R.js";import"./utils-DLoLmG8U.js";import"./AlertIcon-bSN5b0uQ.js";import"./IconWarning-x_Sg-cyk.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./context-CPCW_rIy.js";import"./Button-sQLGDwHF.js";import"./LoadingSpinner-CO56yyEM.js";import"./Button-DH0dq0mD.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C20I_MYv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./useFocus-mBCJQH3P.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./Link-C_V13rNI.js";import"./dynamic-DKDa4OpU.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./Text-K3zhr9uI.js";const or={...b,title:"Status/Notifications/Notification/Status"},t={},o={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(p,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},s={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(p,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(p,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
