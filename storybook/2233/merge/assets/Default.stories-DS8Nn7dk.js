import{j as r}from"./iframe-DkC9HeFh.js";import{I as o}from"./IllustratedMessage-NSJXsdGZ.js";import{H as t}from"./Heading-C5UH4Hr2.js";import{T as s}from"./Text-B-gx4bXK.js";import{B as d}from"./Button-B7ieOWfK.js";import{b as u,m as g}from"./IconWarning-6DY0-AAa.js";import{A as x}from"./ActionGroup-fpt_mN-q.js";import{P as h}from"./ProgressBar-Ba8RQik3.js";import{L as j}from"./Label-Bmyd95n1.js";import{S as f}from"./Section-C5sab7e9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./Heading-C_Zexpqw.js";import"./RSPContexts-CKa7E1cC.js";import"./utils-CQbe0cgS.js";import"./browser-tA6G_ksz.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./remote-C2KQESr1.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./dynamic-DDaduNaQ.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./useStatic-8Ma0Gu-h.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-CMWyugut.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-nkrIclXc.js";import"./Action-BeqMUzE-.js";import"./context-Z29bubao.js";import"./Dialog-BJyrAoE0.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";const Sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},l={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
