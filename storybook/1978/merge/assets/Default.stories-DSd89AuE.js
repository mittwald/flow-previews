import{j as r}from"./iframe-BwL5TE8j.js";import{I as o}from"./IllustratedMessage-r7_9Saxo.js";import{H as l}from"./Heading-CfBpJMd-.js";import{T as m}from"./Text-DGokGAz6.js";import{B as c}from"./Button-aac4MlcR.js";import{b as d,m as C}from"./IconWarning-CFzxGyJP.js";import{A as v}from"./ActionGroup-CW3rR86s.js";import{P as w}from"./ProgressBar-Bya8trSg.js";import{L}from"./Label-DWj4cilU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbKMeUzs.js";import"./mergeRefs-BHw4ks4u.js";import"./index-CZakacYE.js";import"./Heading-KvETIO-A.js";import"./RSPContexts-twmoior-.js";import"./utils-D5K6eLjb.js";import"./browser-BFoEGF9u.js";import"./EmulatedBoldText-C4JMZ2uF.js";import"./Text-lZrUqOdv.js";import"./LoadingSpinner-xuWixoMH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-B8lu9hLL.js";import"./context-CLDbs9sm.js";import"./Button-BJbpMApz.js";import"./ProgressBar-BqBMnQMD.js";import"./Label-CyvFU2WD.js";import"./Hidden-Bk94MQHU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-0Q5rWqkC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-H2LW6Ly5.js";import"./useFocus-B2onYDnw.js";import"./useFocusRing-Dnm1Bceh.js";import"./useFocusable-DDKZ0z65.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D5WSPsgm.js";import"./useStatic-lPJ6-trN.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Ds17uUqw.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var f,k,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var I,B,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(A=(B=n.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var T,G,D;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props}>
      <IconApp />
      <Heading>No apps installed</Heading>
      <Text>Create your first app to start working on your website.</Text>
      <ActionGroup>
        <Button variant="soft" color="secondary">
          Go back
        </Button>
        <Button>Create app</Button>
      </ActionGroup>
    </IllustratedMessage>
}`,...(D=(G=i.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var H,M,S;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props}>
      <IconApp />
      <Heading>App is installing</Heading>
      <Text>This can take a couple of minutes.</Text>
      <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
      style: "unit",
      unit: "gigabyte"
    }} {...props}>
        <Label>Storage</Label>
      </ProgressBar>
    </IllustratedMessage>
}`,...(S=(M=p.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const yr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,yr as __namedExportsOrder,kr as default};
