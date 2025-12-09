import{j as r}from"./iframe-BfTJ8OoU.js";import{I as o}from"./IllustratedMessage-D4r4pUSf.js";import{H as s}from"./Heading-C_Cd2XWG.js";import{T as t}from"./Text-ChPpwgcs.js";import{B as m}from"./Button-CAnEum-p.js";import{b as u,t as g}from"./IconWarning-CnDmU8KM.js";import{A as x}from"./ActionGroup-BXvzv2B4.js";import{P as h}from"./ProgressBar-BlJq2aYe.js";import{L as j}from"./Label-OsD2mDHN.js";import{S as f}from"./Section-ieM08Mfc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./RSPContexts-B_hP9IPu.js";import"./utils-CAkX6XFC.js";import"./browser-_NOMM9Cq.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DfwvGs8v.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./dynamic-BLLy2Odl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-D59IIsbr.js";import"./context-DqfyIwOm.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";const or={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
