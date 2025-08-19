import{j as r}from"./iframe-_AHHYLe8.js";import{I as o}from"./IllustratedMessage-B09EU6bW.js";import{H as l}from"./Heading-X58ltJnb.js";import{T as m}from"./Text-Cmtv_jKA.js";import{B as c}from"./Button-DpBb7dXP.js";import{b as d,m as C}from"./IconWarning-CK_fmTss.js";import{A as v}from"./ActionGroup-CEp8kbRn.js";import{P as w}from"./ProgressBar-CQZZGbPo.js";import{L}from"./Label-CmGN6q6h.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CHGKeBFG.js";import"./mergeRefs-1cSVj6Oa.js";import"./index-Bz79hXTU.js";import"./Heading-C2hoDKBp.js";import"./RSPContexts-D87DkYMD.js";import"./utils-q-IwrKfZ.js";import"./browser-BP_Bp9A3.js";import"./EmulatedBoldText-DqfdeQcp.js";import"./Text-Bojy_plc.js";import"./LoadingSpinner-DRmJrHkB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Ci9IX6ka.js";import"./context-CUyryTbq.js";import"./Button-C5j2D-85.js";import"./ProgressBar-Djy6cDSn.js";import"./Label-tq8rl8zN.js";import"./Hidden-BCt71K2Z.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-lAnn0GIu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSHe1cmn.js";import"./useFocus-Cc4rXbR6.js";import"./useFocusRing-BzxKD0KU.js";import"./useFocusable-DpxzpP9y.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-NbcIocov.js";import"./useStatic-D0qKbiKB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-B2IExTl4.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
