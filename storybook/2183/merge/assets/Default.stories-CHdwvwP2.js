import{j as r}from"./iframe-CH_aTfEL.js";import{I as o}from"./IllustratedMessage-3OOtTgjn.js";import{H as s}from"./Heading-YtZItkx8.js";import{T as t}from"./Text-BRh_x9bF.js";import{B as d}from"./Button-D53gB1eO.js";import{I as u}from"./IconApp-B8Pdxs7V.js";import{I as g}from"./IconDanger-DRvJdcN_.js";import{A as x}from"./ActionGroup-DOhwLXSI.js";import{P as h}from"./ProgressBar-N-04SOqZ.js";import{L as j}from"./Label-BqL_a1sm.js";import{S as f}from"./Section-B-U_9AN9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./Heading-DKHBxjOZ.js";import"./RSPContexts-BB0WSv2m.js";import"./utils-C8srcrY8.js";import"./browser-CjAUGP0i.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./remote-ZsoG4C7l.js";import"./dynamic-vwb-6_Ta.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./useStatic-DNN3uXbB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-1fNq6hkT.js";import"./Label.module-lamhxTiw.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./Action-WNrTLAcY.js";import"./context-DeId9iUj.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";const ur={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},m={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
