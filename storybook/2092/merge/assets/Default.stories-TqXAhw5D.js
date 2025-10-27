import{j as r}from"./iframe-DCa_XPw0.js";import{I as o}from"./IllustratedMessage-tt2_nDAE.js";import{H as l}from"./Heading-Ev2tnW6a.js";import{T as m}from"./Text-DnODaVEe.js";import{B as c}from"./Button-5vT2-_W4.js";import{b as d,l as u}from"./IconWarning-Q2oX1eiS.js";import{A as g}from"./ActionGroup-B0BJPAOp.js";import{P as h}from"./ProgressBar-CtkWTOKn.js";import{L as x}from"./Label-vDm2WQu9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./index-d5hFVLIP.js";import"./Heading-dctUcVn8.js";import"./RSPContexts-A2JzYqIb.js";import"./utils-CHsRUe2b.js";import"./browser-2ZL6lgPg.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Text-I5qgKc0V.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./context-CFo6-Xo4.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./Label-DCh_0unC.js";import"./Hidden-DqzRERrR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./dynamic-DrAw5ycp.js";import"./getActionGroupSlot-InsSo2J4.js";import"./useStatic-CrVdgLYB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-yc17DjJC.js";import"./Label.module-CUYTf9Jc.js";const tr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
