import{j as r}from"./iframe-B2KmHf-y.js";import{I as o}from"./IllustratedMessage-DdzY5Am1.js";import{H as l}from"./Heading-iOnu2cWd.js";import{T as m}from"./Text-BTzROJ4u.js";import{B as c}from"./Button-BbFeJzIv.js";import{b as d,m as C}from"./IconWarning-BfZFkMSG.js";import{A as v}from"./ActionGroup-uK1MkQbw.js";import{P as w}from"./ProgressBar-DQME49ch.js";import{L}from"./Label-CEurSWF2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./Heading-D_u-YVrE.js";import"./RSPContexts-D8MVQLAj.js";import"./utils-CGNLDjxu.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./Text-BzjjTZNC.js";import"./LoadingSpinner-BqqlEuny.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./context-BMg6CKyL.js";import"./Button-DtifiV_Y.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-p5QRldAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DTR6VjFp.js";import"./useFocus-BfYJCy_-.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./useStatic-CZG3tzpM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BlxEsPff.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
