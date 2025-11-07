import{j as r}from"./iframe-Gppgd95h.js";import{I as o}from"./IllustratedMessage-DprCkBro.js";import{H as s}from"./Heading-C1wKNzIE.js";import{T as t}from"./Text-ByRCXQub.js";import{B as m}from"./Button-CQheULfL.js";import{b as u,v as g}from"./IconWarning-CXl4-aHF.js";import{A as x}from"./ActionGroup-DDS_PemV.js";import{P as h}from"./ProgressBar-C_pI3_3Q.js";import{L as j}from"./Label-fQiFxC8W.js";import{S as f}from"./Section-CNS9p5rv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBC2W0-6.js";import"./index-eyLLmFq7.js";import"./index-C46OFllo.js";import"./RSPContexts-uyFjXPd-.js";import"./utils-B4V-7u16.js";import"./browser-BvSJi_ez.js";import"./EmulatedBoldText-BsRwGIpf.js";import"./LoadingSpinner-CWX_u-O3.js";import"./Button-D2lj5RUi.js";import"./ProgressBar-DZD68PrE.js";import"./Hidden-7U06UOp8.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Cby3fyqM.js";import"./useFocusRing-BZLy2WOf.js";import"./useFocusable-DX1uCwgO.js";import"./useLocalizedStringFormatter-nMq0Hiqv.js";import"./dynamic-Dx_-BW_E.js";import"./getActionGroupSlot-PuK0vT60.js";import"./useStatic-DlLFMLM2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BrAPCcNY.js";import"./Action-BLHsH70P.js";import"./context-MNDXyV03.js";import"./Dialog-CVc-VcQU.js";import"./OverlayArrow-DfX6d8e5.js";import"./useControlledState-CiQWtKCp.js";import"./Collection-DADNKWxZ.js";import"./CollectionBuilder-D91eRMtU.js";import"./SelectionIndicator-B1G8Paba.js";import"./Separator-DtbrqDaf.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
