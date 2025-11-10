import{j as r}from"./iframe-CVnOevS7.js";import{I as o}from"./IllustratedMessage-CmJ3l5DD.js";import{H as s}from"./Heading-DfGW7LfL.js";import{T as t}from"./Text-Bxez-FPO.js";import{B as m}from"./Button-Cf7B0HY9.js";import{b as u,v as g}from"./IconWarning-B_svJUl9.js";import{A as x}from"./ActionGroup-B3X5o9oq.js";import{P as h}from"./ProgressBar-Cz8XcWEU.js";import{L as j}from"./Label-CAmF3EV2.js";import{S as f}from"./Section-bMj7sGFO.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./index-Cr689PiB.js";import"./RSPContexts-DjbnK2VB.js";import"./utils-CGDhhS2B.js";import"./browser-DLVk8Qjw.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B1NGcly_.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./dynamic-DEpoJ_Zh.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./useStatic-CGYI-bhE.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CYdy4Ftw.js";import"./Action-CUQVeG4t.js";import"./context-CfRoeqvW.js";import"./Dialog-WTjaYKjI.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
