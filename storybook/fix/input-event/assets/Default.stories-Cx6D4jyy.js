import{j as r}from"./iframe-D5sJq8Pp.js";import{I as o}from"./IllustratedMessage-BayvsayP.js";import{H as l}from"./Heading-D3Bf2r0X.js";import{T as m}from"./Text-DSs6zbpd.js";import{B as c}from"./Button-6TUR0Zrk.js";import{b as d,m as C}from"./IconWarning-DOhF27zV.js";import{A as v}from"./ActionGroup-BQAzYZMD.js";import{P as w}from"./ProgressBar-BVyZHc4E.js";import{L}from"./Label-C9pkE3_l.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./Heading-Clo5dAHJ.js";import"./RSPContexts-DjLkZjo9.js";import"./utils-9AX_qn18.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";import"./Text-DkuK7F_5.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./context-C2iapZe2.js";import"./Button-B2KXtDin.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ch8Q4uqY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./useFocus-RhB9nR94.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DeknL7IW.js";import"./useStatic-C2JikVB-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CkmQobE6.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
