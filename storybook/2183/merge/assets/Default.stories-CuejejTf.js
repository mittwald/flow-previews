import{j as r}from"./iframe-xTeLnFvu.js";import{I as o}from"./IllustratedMessage-CRerIsGu.js";import{H as s}from"./Heading-cElDoL_q.js";import{T as t}from"./Text-CX0dnSU4.js";import{B as d}from"./Button-BA5_aaZE.js";import{I as u}from"./IconApp-B1jeSMHX.js";import{I as g}from"./IconDanger-DpVgPae0.js";import{A as x}from"./ActionGroup-TgHXsP3h.js";import{P as h}from"./ProgressBar-BQfYC0W9.js";import{L as j}from"./Label-CVltlbUu.js";import{S as f}from"./Section-o_jduYUp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./Heading-Dpj368kt.js";import"./RSPContexts-BbeCs0tS.js";import"./utils-DAXmWa5w.js";import"./browser-RW8IAkpU.js";import"./EmulatedBoldText-st1IlPV2.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7tIPXbfR.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./remote-DmruOiXe.js";import"./dynamic-ndn1boAo.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./useStatic-DiiqycDM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BD020mGJ.js";import"./Label.module-lamhxTiw.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./Action-GyTbi50D.js";import"./context-B3gmiBCA.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";const ur={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},m={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <IllustratedMessage {...props}>
        <IconApp />
        <Heading>No apps installed</Heading>
        <Text>Create your first app to start working on your website.</Text>
      </IllustratedMessage>
    </Section>
}`,...m.parameters?.docs?.source}}};const gr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,m as InSection,p as Light,c as WithActionGroup,l as WithProgressBar,gr as __namedExportsOrder,ur as default};
