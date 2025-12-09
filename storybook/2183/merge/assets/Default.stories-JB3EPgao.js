import{j as r}from"./iframe-BqP6npnu.js";import{I as o}from"./IllustratedMessage-Ccc6Ijre.js";import{H as s}from"./Heading-Dc3wJcTH.js";import{T as t}from"./Text-DywGJIRt.js";import{B as m}from"./Button-CINxW6TG.js";import{b as u,s as g}from"./IconWarning-DbZ28gHF.js";import{A as x}from"./ActionGroup-DkEZCvBM.js";import{P as h}from"./ProgressBar-CMJ4ivwe.js";import{L as j}from"./Label-Dvn9fxen.js";import{S as f}from"./Section-BgyjzhPc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./RSPContexts-DNFW1N-a.js";import"./utils-Co5LfTVH.js";import"./browser-DXN0P2CK.js";import"./EmulatedBoldText-Htc9gLg0.js";import"./LoadingSpinner-C4lBONmO.js";import"./Button-Cqxj8v2u.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dpv25OMu.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./remote-CSf0dxK4.js";import"./dynamic-S48VUeic.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CLq0DkHM.js";import"./context-WZRL0rNv.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./useStatic-BDpTt2fP.js";const sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
