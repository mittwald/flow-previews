import{j as r}from"./iframe-BvCo0Jms.js";import{I as o}from"./IllustratedMessage-CIfFHVRx.js";import{H as l}from"./Heading-B5ZCmgMS.js";import{T as m}from"./Text-CM7-JVVa.js";import{B as c}from"./Button-BdRFLyHU.js";import{b as d,z as u}from"./IconWarning-DF-Lhcnu.js";import{A as g}from"./ActionGroup-BBtpfHLw.js";import{P as h}from"./ProgressBar-VyMIfi81.js";import{L as x}from"./Label-9SlnZKrY.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./Heading-DDeE-fbN.js";import"./RSPContexts-DqErA_gH.js";import"./utils-Cw2xzcbV.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";import"./dynamic-BmXp7BE9.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./useStatic-BT5cYh4l.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BCpPdTQ6.js";import"./Label.module-CUYTf9Jc.js";const tr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
