import{j as r}from"./iframe-Iz-jrQ83.js";import{I as o}from"./IllustratedMessage-C0h_ZeIA.js";import{H as l}from"./Heading-C6NSSN9v.js";import{T as m}from"./Text-Dk41Q_nF.js";import{B as c}from"./Button-vOPcRaQ8.js";import{b as d,q as C}from"./IconWarning-BfmxR99x.js";import{A as v}from"./ActionGroup-DrtwoAla.js";import{P as w}from"./ProgressBar-jD2CYuaz.js";import{L}from"./Label-BLFOHaT0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qg-SXpsr.js";import"./mergeRefs-B-yJitBg.js";import"./index-BEFFWu2J.js";import"./Heading-LjQ3pJ7P.js";import"./RSPContexts-BeWSySSO.js";import"./utils-Dydu0pBS.js";import"./browser-njf7oZ8k.js";import"./EmulatedBoldText-MtcJVW3r.js";import"./Text-DcONEmQQ.js";import"./LoadingSpinner-BKi8wNla.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CutEnP0C.js";import"./context-BdTRL7oB.js";import"./Button-P11Hto4i.js";import"./ProgressBar-xCJgXxXU.js";import"./Label-BK3HXmgw.js";import"./Hidden-BljdK-_8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BXusGe9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CAUR_6bc.js";import"./useFocus-p13hF2Sk.js";import"./useFocusRing-DSCSSA3t.js";import"./useFocusable-D1JGAIsJ.js";import"./dynamic-Bo4plrg9.js";import"./getActionGroupSlot-DopO3qdD.js";import"./useStatic-D6VuC2u7.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Bs3Mkc7q.js";const kr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(C,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(w,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(L,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
