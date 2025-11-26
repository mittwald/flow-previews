import{j as r}from"./iframe-Bdha8Dos.js";import{I as o}from"./IllustratedMessage-Cnrnw12O.js";import{H as s}from"./Heading-D7df73UY.js";import{T as t}from"./Text-DoSb3lbH.js";import{B as m}from"./Button-C0-Fr6HH.js";import{b as u,x as g}from"./IconWarning-BYkVHlH3.js";import{A as x}from"./ActionGroup-BdiJCCv8.js";import{P as h}from"./ProgressBar-DXWjfO91.js";import{L as j}from"./Label-Dn2sUami.js";import{S as f}from"./Section-Yfvm1zIN.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./index-Dy-GF6N8.js";import"./RSPContexts-CAeHzh3l.js";import"./utils-DRkQtTgN.js";import"./browser-Dc0PT9zF.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./LoadingSpinner-KHyfkLfb.js";import"./Button-BzZ_Ef_b.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-3OjubdPM.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./dynamic-DRPW6Rpg.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CLh9Cweu.js";import"./context-5Dj5ASGX.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./useStatic-BN3Mf5gg.js";const or={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
