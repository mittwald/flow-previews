import{j as r}from"./iframe-BAg_Vkif.js";import{I as o}from"./IllustratedMessage-Biw662sz.js";import{H as t}from"./Heading-Dn2ss8TC.js";import{T as s}from"./Text-Cv_CDcg6.js";import{B as d}from"./Button-CNza9GnT.js";import{b as u,o as g}from"./IconWarning-eOJWxr99.js";import{A as x}from"./ActionGroup-DE4bxHka.js";import{P as h}from"./ProgressBar-AoU2eTvn.js";import{L as j}from"./Label-DDreQZVm.js";import{S as f}from"./Section-k31Ld_a5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./index-ClwrdcL8.js";import"./Heading-DM0DAFfT.js";import"./RSPContexts-DM5FD37h.js";import"./utils-BI8UFEcl.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./remote-OUS6bpte.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./dynamic-eE1nsZvE.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./useStatic-DpED2Oge.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-sbKU5ia-.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BZOfIkxf.js";import"./Action-BOjxF4Dl.js";import"./context-BAbefeLZ.js";import"./Dialog-BlnwYq_Z.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";const Sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},l={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
