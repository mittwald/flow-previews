import{j as r}from"./iframe-DhEtuAZk.js";import{I as o}from"./IllustratedMessage-BD1lBLs6.js";import{H as s}from"./Heading-w8VDel3v.js";import{T as t}from"./Text-CrxTC35E.js";import{B as m}from"./Button-BY9Kr7Ye.js";import{b as u,v as g}from"./IconWarning-CZNr6BH3.js";import{A as x}from"./ActionGroup-ESJbAOgN.js";import{P as h}from"./ProgressBar-DuPgLyUc.js";import{L as j}from"./Label-BGOtPgJY.js";import{S as f}from"./Section-D4Gr2eQE.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./RSPContexts-CP8S-33J.js";import"./utils-DSKmOAaE.js";import"./browser-CRwqe8Ti.js";import"./EmulatedBoldText-DZREZbVk.js";import"./LoadingSpinner-DZTinZ99.js";import"./Button-DH0rVXA4.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B4_4eL8K.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./dynamic-CwxkBJO8.js";import"./getActionGroupSlot-B2enF2gG.js";import"./useStatic-OTFolAlH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Cz5DfYh0.js";import"./Action-BVtpAmgk.js";import"./context-D6NPEI3P.js";import"./Dialog-CGia85P_.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
