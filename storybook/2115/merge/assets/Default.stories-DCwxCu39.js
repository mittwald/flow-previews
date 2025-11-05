import{j as r}from"./iframe-B0zV29Ol.js";import{I as o}from"./IllustratedMessage-D7GonCXS.js";import{H as l}from"./Heading-DWho-b1a.js";import{T as d}from"./Text-DNMpJh06.js";import{B as c}from"./Button-DMc7qjuD.js";import{b as m,v as u}from"./IconWarning-DElUfIyP.js";import{A as g}from"./ActionGroup-x0yzCgdG.js";import{P as h}from"./ProgressBar-D-Sdoekq.js";import{L as x}from"./Label-CO7dcuDN.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./index-Bap8DgrM.js";import"./RSPContexts-C-9bKQ2R.js";import"./utils-rMLWZEZ9.js";import"./browser-D-MgOzku.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./LoadingSpinner-91ddITMV.js";import"./Button-B7c7aZAn.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CJ74nGTM.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./dynamic-BDcWjd3V.js";import"./getActionGroupSlot-CT-ODnzp.js";import"./useStatic-CBy74o7G.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Cipm40qu.js";const Q={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(m,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},a={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(d,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},t={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(m,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(m,{}),r.jsx(l,{children:"App is installing"}),r.jsx(d,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const U=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{a as Danger,t as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,U as __namedExportsOrder,Q as default};
