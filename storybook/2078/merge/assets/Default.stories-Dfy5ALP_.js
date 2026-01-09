import{j as r}from"./iframe-BoA7YzYm.js";import{I as o}from"./IllustratedMessage-SdPVwbRa.js";import{H as t}from"./Heading-gW7z3NjW.js";import{T as s}from"./Text-Dcujjsgx.js";import{B as d}from"./Button-BKFimoLG.js";import{b as u,n as g}from"./IconWarning-Cm4x5FHH.js";import{A as x}from"./ActionGroup-CAgPe75f.js";import{P as h}from"./ProgressBar-B90B6HOo.js";import{L as j}from"./Label-Cjbbehtk.js";import{S as f}from"./Section-MYLyhPiL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./Heading-BxB-LiTB.js";import"./RSPContexts-D0KJsdCX.js";import"./utils-CbCfmbCJ.js";import"./browser--2iaZute.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./remote-W2BsjsJq.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./dynamic-DYpyzP7H.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./useStatic-BAyQxveA.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BDyfQRwj.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CVwpYLx9.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./Dialog-BDOoN61w.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";const Sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},l={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
