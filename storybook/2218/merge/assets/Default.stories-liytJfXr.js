import{j as r}from"./iframe-BVdPrJ3b.js";import{I as o}from"./IllustratedMessage-CdYyDGay.js";import{H as t}from"./Heading-CFOSEH3z.js";import{T as s}from"./Text-nQWL8z2r.js";import{B as d}from"./Button-DWZoHS5b.js";import{b as u,n as g}from"./IconWarning-YADbbYCH.js";import{A as x}from"./ActionGroup-x2U4gVAf.js";import{P as h}from"./ProgressBar-DLmbd2RN.js";import{L as j}from"./Label-CzweG7Yl.js";import{S as f}from"./Section-B0Q_DjwJ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./Heading-BpzKqMX-.js";import"./RSPContexts-Bdb5uPWt.js";import"./utils-BEq1Wr11.js";import"./browser-DSBfFWZr.js";import"./EmulatedBoldText-BVln2yP5.js";import"./Text-CmXVeCCc.js";import"./LoadingSpinner-DBvrX9Qx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./context-D026yTy_.js";import"./remote-CTgJkn4z.js";import"./Button-BCUp5wJP.js";import"./ProgressBar-D7sWQ_td.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CZZK6Myr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUwPxRbX.js";import"./useFocus-DKH0A8r5.js";import"./useFocusRing-D6WsekYV.js";import"./useFocusable-CP0kX89o.js";import"./dynamic-VccpDVll.js";import"./getActionGroupSlot-l8kcu2OD.js";import"./useStatic-BX7NV0z1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CbvNqpBv.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-97x_J9aj.js";import"./Action-D5COu0gZ.js";import"./context-CCTeyNcb.js";import"./Dialog-BIQQDMqR.js";import"./OverlayArrow-DJuQPxkq.js";import"./useControlledState-CgIeep-j.js";import"./Collection-BL4wwMNo.js";import"./CollectionBuilder-CV7Ejkkp.js";import"./SelectionIndicator-BRRaId4S.js";import"./Separator-oDuFt3L8.js";import"./SelectionManager-C_oDRx_o.js";import"./useEvent-DCTAoM_e.js";import"./useCollator-CjJjrWZi.js";import"./FocusScope-Bh-KjmdJ.js";import"./VisuallyHidden-BtVtJU_V.js";const Sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},l={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <IllustratedMessage {...props}>
        <IconApp />
        <Heading>No apps installed</Heading>
        <Text>Create your first app to start working on your website.</Text>
      </IllustratedMessage>
    </Section>
}`,...l.parameters?.docs?.source}}};const Br=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,l as InSection,p as Light,c as WithActionGroup,m as WithProgressBar,Br as __namedExportsOrder,Sr as default};
