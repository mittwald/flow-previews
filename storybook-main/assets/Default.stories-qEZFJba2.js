import{j as r}from"./iframe-Dswl8YqW.js";import{I as o}from"./IllustratedMessage-D_Xe6Xjh.js";import{H as s}from"./Heading-iCy8jlSp.js";import{T as t}from"./Text-CuuEScv1.js";import{B as m}from"./Button-BlDvIS3Y.js";import{b as u,x as g}from"./IconWarning-Dt5PaZc0.js";import{A as x}from"./ActionGroup-DkHaLZ1F.js";import{P as h}from"./ProgressBar-D1AqnunX.js";import{L as j}from"./Label-CMIuj4QW.js";import{S as f}from"./Section-B6yNflVq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./RSPContexts-CB74f7ZL.js";import"./utils-7BbO5OC0.js";import"./browser-BqLtz9Zq.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Button-CdXhm7oQ.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DC5A8m43.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./dynamic-DeI_eRCJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-B16hb8ja.js";import"./context-BYCR6GGl.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./useStatic-DgEZfjHg.js";const or={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <IllustratedMessage {...props}>
        <IconApp />
        <Heading>No apps installed</Heading>
        <Text>Create your first app to start working on your website.</Text>
      </IllustratedMessage>
    </Section>
}`,...d.parameters?.docs?.source}}};const sr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,d as InSection,p as Light,c as WithActionGroup,l as WithProgressBar,sr as __namedExportsOrder,or as default};
