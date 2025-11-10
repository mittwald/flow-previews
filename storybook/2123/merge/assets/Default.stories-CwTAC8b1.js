import{j as r}from"./iframe-Bb2Dt4gO.js";import{I as o}from"./IllustratedMessage-vyKWjEfX.js";import{H as s}from"./Heading-BwEM0wnm.js";import{T as t}from"./Text-DlHja6rG.js";import{B as m}from"./Button-4ByktXkK.js";import{b as u,v as g}from"./IconWarning-ncqjKY0i.js";import{A as x}from"./ActionGroup-CCvmBmqO.js";import{P as h}from"./ProgressBar-DfD_5qPB.js";import{L as j}from"./Label-CRmoZTP3.js";import{S as f}from"./Section-C0-TyT9T.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./index-P4MnPsl7.js";import"./RSPContexts-ScA0jBqq.js";import"./utils-BRWgyZeC.js";import"./browser-C45ETDbe.js";import"./EmulatedBoldText-BkxAkbDy.js";import"./LoadingSpinner-BExDoLYl.js";import"./Button-BSQSoIIB.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-OBblbX9f.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./dynamic-BQ6J2UuW.js";import"./getActionGroupSlot-BbHFGHkf.js";import"./useStatic-CQaBBZXk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BSAi3nGx.js";import"./Action-Bp0Zr2aj.js";import"./context-CWQK-DX0.js";import"./Dialog-D5KTniQT.js";import"./OverlayArrow-BPrkRyf_.js";import"./useControlledState-C9bMDpWq.js";import"./Collection-By7hYb7j.js";import"./CollectionBuilder-DXrUA6kr.js";import"./SelectionIndicator-BSio2Upk.js";import"./Separator-BddUv5iq.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const pr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,d as InSection,p as Light,c as WithActionGroup,l as WithProgressBar,pr as __namedExportsOrder,ir as default};
