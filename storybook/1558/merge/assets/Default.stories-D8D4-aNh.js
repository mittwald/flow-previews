import{j as r}from"./iframe-BIwOddjN.js";import{I as o}from"./IllustratedMessage-BbFEjBTE.js";import{H as l}from"./Heading-Bnq9f_Vp.js";import{T as m}from"./Text-3VIHsAGv.js";import{B as c}from"./Button-DVKpBB_-.js";import{b as d,p as C}from"./IconWarning-DNMJ1XNo.js";import{A as v}from"./ActionGroup-CROpn8dS.js";import{P as w}from"./ProgressBar-CkOsQuQK.js";import{L}from"./Label-B4Iiqc5w.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./Heading-CXpceP0M.js";import"./RSPContexts-CSo-c8h2.js";import"./utils-DPukZ4w7.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Text-D1MRO4dn.js";import"./LoadingSpinner-CG5b-Kig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./context-CbJ8Tawl.js";import"./Button-DDY6r886.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-4QX-FuAL.js";import"./useFocus-Cj2Pu7gn.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./dynamic-copMXHk7.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./useStatic-CAHKYPS0.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-MjIMLPyN.js";const yr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(M=p.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const Ir=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,Ir as __namedExportsOrder,yr as default};
