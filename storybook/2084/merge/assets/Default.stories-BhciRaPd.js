import{j as r}from"./iframe-BdeexEb8.js";import{I as o}from"./IllustratedMessage-C-_B-Mia.js";import{H as l}from"./Heading-CaWv9CDj.js";import{T as m}from"./Text-G8amV_-h.js";import{B as c}from"./Button-8DtAEqjD.js";import{b as d,l as u}from"./IconWarning-CtsbdbUA.js";import{A as g}from"./ActionGroup-CZfxN9v5.js";import{P as h}from"./ProgressBar-BIFkzIQc.js";import{L as x}from"./Label-B8MQOgYT.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9dNYku3.js";import"./index-D-gFJj9O.js";import"./index-DrTgVdtP.js";import"./Heading-CXwQx98o.js";import"./RSPContexts-BujZOMoI.js";import"./utils-BE4tcj7E.js";import"./browser-CYlNocNO.js";import"./EmulatedBoldText-ZcdE1rVE.js";import"./Text-C7oFtPVp.js";import"./LoadingSpinner-f45dISc_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BAYb9Fap.js";import"./context-D6yVr_mO.js";import"./Button-m7osfjr7.js";import"./ProgressBar-BoDGUte7.js";import"./Label-0GucTR7O.js";import"./Hidden-CQyoiK8N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-_lz56ByA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BF3KJpSX.js";import"./useFocus-DOIh0B1Z.js";import"./useFocusRing-rBTaS5qD.js";import"./useFocusable-BJo0-JcZ.js";import"./dynamic-B5dXdtKW.js";import"./getActionGroupSlot-mkbPIyZa.js";import"./useStatic-DlCxFiK7.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DYh52-5q.js";import"./Label.module-CUYTf9Jc.js";const tr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ar=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,ar as __namedExportsOrder,tr as default};
