import{j as r}from"./iframe-EtTbRQoM.js";import{I as o}from"./IllustratedMessage-CwqfCiYS.js";import{H as l}from"./Heading-YEToWG6x.js";import{T as m}from"./Text-CAO-zPwU.js";import{B as c}from"./Button-DxuCaQyR.js";import{b as d,l as u}from"./IconWarning-CO-lUcxm.js";import{A as g}from"./ActionGroup-Cl4D3H2T.js";import{P as h}from"./ProgressBar-B-vO3P2s.js";import{L as x}from"./Label-BHPxSoWd.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./Heading-DTQh2nx3.js";import"./RSPContexts-Cv7znJuu.js";import"./utils-C_hvyJpn.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./Text-CANjZEUs.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./filterDOMProps-i7L6S0l1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./dynamic-Cv7GHFn6.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Bb1Xs2MC.js";const or={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const sr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,sr as __namedExportsOrder,or as default};
