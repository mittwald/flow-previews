import{j as r}from"./iframe-Bl9ZNzly.js";import{I as o}from"./IllustratedMessage-LspQ7VGl.js";import{H as s}from"./Heading-6r91OnV5.js";import{T as t}from"./Text-DVbVn-gX.js";import{B as m}from"./Button-C43dgBgP.js";import{b as u,t as g}from"./IconWarning-CdD_Vr9D.js";import{A as x}from"./ActionGroup-B7w-C4eg.js";import{P as h}from"./ProgressBar-Btc4VOSd.js";import{L as j}from"./Label-DNzUxKIf.js";import{S as f}from"./Section-CDNuzGQn.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DcJmUF2I.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./RSPContexts-CKPxvq-y.js";import"./utils-Ba3Wc4Cj.js";import"./browser-DgAJHjYP.js";import"./EmulatedBoldText-C2RodUkO.js";import"./LoadingSpinner-BmMjYWfH.js";import"./Button-CmlWxNPG.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BsRR-XG9.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./dynamic-DN5dqmlD.js";import"./getActionGroupSlot-BTnOUAI3.js";import"./useStatic-CHy8y9O8.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DkfP-nrK.js";import"./context-B3t2ll3v.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";const sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
