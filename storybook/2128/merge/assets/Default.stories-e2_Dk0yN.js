import{j as r}from"./iframe-DvmgUBW7.js";import{I as o}from"./IllustratedMessage-Bw3BtaeA.js";import{H as s}from"./Heading-CqrprVNa.js";import{T as t}from"./Text-Dbew3mLe.js";import{B as m}from"./Button-C1BHOQWK.js";import{b as u,v as g}from"./IconWarning-Dv-oLMD9.js";import{A as x}from"./ActionGroup-CjT6ddTh.js";import{P as h}from"./ProgressBar-BluggdId.js";import{L as j}from"./Label-Ga4tjpL7.js";import{S as f}from"./Section-F_cOrMuH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./index-BNqf21ov.js";import"./RSPContexts-DdvBd_E1.js";import"./utils-BtCbht9n.js";import"./browser-DnTWaRxE.js";import"./EmulatedBoldText-xJj6r1Ey.js";import"./LoadingSpinner-DLZner8z.js";import"./Button-mFUbi7ER.js";import"./ProgressBar-CrOV3NyN.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DzqJJy5k.js";import"./useFocusRing-BavcHLfj.js";import"./useFocusable-CKxgRqhR.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./dynamic-BrPxZX7i.js";import"./getActionGroupSlot-BfXlTAt-.js";import"./useStatic-Jt5HUTTZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BEHnIW2z.js";import"./Action-BYpc3qQh.js";import"./context-BiUxtsr9.js";import"./Dialog-BHVsz8CY.js";import"./OverlayArrow-DmicGHSR.js";import"./useControlledState-7pcPESrW.js";import"./Collection-BxeXiNok.js";import"./CollectionBuilder-DyXjZa--.js";import"./SelectionIndicator-C5hL4auF.js";import"./Separator-5Yj5luET.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
