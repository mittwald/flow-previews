import{j as r}from"./iframe-BAtUELBR.js";import{I as o}from"./IllustratedMessage-3w_NRHcG.js";import{H as l}from"./Heading-WI-2mpz5.js";import{T as m}from"./Text-DzMLmIhZ.js";import{B as c}from"./Button-BEq1XaV7.js";import{b as d,m as C}from"./IconWarning-h84dHhem.js";import{A as v}from"./ActionGroup-DylyHBpW.js";import{P as w}from"./ProgressBar-CTEbY_OZ.js";import{L}from"./Label-QEHCu_aF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./Heading-ByYwZp8f.js";import"./RSPContexts-DQlzARDq.js";import"./utils-UbQMFgd1.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Text-j2Uyll_5.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./context-DbLHYHiQ.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DmioRyAZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B88qu-VD.js";import"./useFocus-DJUZ2En4.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./useStatic-D26yqcd1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BWksJp9z.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
