import{j as r}from"./iframe-DBT7gULD.js";import{I as o}from"./IllustratedMessage-CCV8_Obm.js";import{H as s}from"./Heading-CxhJw16G.js";import{T as t}from"./Text-BcenBV84.js";import{B as m}from"./Button-CCcVMCFh.js";import{b as u,x as g}from"./IconWarning-BUJnRJXc.js";import{A as x}from"./ActionGroup-BaRaSr0H.js";import{P as h}from"./ProgressBar-DwVQ0bzm.js";import{L as j}from"./Label-CB-Jrcob.js";import{S as f}from"./Section-D6BoVeKj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./index-pYm4_kYT.js";import"./RSPContexts-Dom4UWqx.js";import"./utils-D0uB-Zwx.js";import"./browser-DvkhEBxs.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./LoadingSpinner-UyNbbNkS.js";import"./Button-C-UpDsRO.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DTlkSZ0Y.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./dynamic-DeRu_afx.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./useStatic-CqxwceTm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BSuRheR8.js";import"./context-D6D-GlPg.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";const sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const tr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,d as InSection,p as Light,c as WithActionGroup,l as WithProgressBar,tr as __namedExportsOrder,sr as default};
