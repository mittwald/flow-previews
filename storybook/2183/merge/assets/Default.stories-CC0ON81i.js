import{j as r}from"./iframe-XAYsosb6.js";import{I as e}from"./IllustratedMessage-vPO9RGCN.js";import{H as t}from"./Heading-BGBIb9Bc.js";import{T as s}from"./Text-D0dxXYDJ.js";import{B as d}from"./Button-BxhqNEtZ.js";import{I as u}from"./IconChevronDown-CLHuWDBx.js";import{I as g}from"./IconDanger-Bj-mV1cE.js";import{A as x}from"./ActionGroup-cuM3yDJU.js";import{P as h}from"./ProgressBar-nWOUwp93.js";import{L as j}from"./Label-CXTzqQ-l.js";import{S as f}from"./Section-j_rAfVvf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./Heading-BKwICOnt.js";import"./RSPContexts-DZiMI1g6.js";import"./utils-mpNKu3Qr.js";import"./browser-CF4AtnhZ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./IconX-BuTdVgor.js";import"./IconCheck-CATZaWGa.js";import"./LoadingSpinner-BRBaERdC.js";import"./ariaLive-Z7x17Sr2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./remote-DUrH5qha.js";import"./Button-Bqhr8ozs.js";import"./ProgressBar-BRENX_vG.js";import"./Label-jhCIdmWo.js";import"./Hidden-BXwhawaS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-vx5-dYQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqzrclQw.js";import"./useFocus-6tpgkBNV.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocusable-NtGVjwhY.js";import"./dynamic-CAhkKb1T.js";import"./getActionGroupSlot-DqFoxLUz.js";import"./useStatic-CmdDHpQe.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BO07y-CQ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-PBWMY4Bl.js";import"./lib-90ocxLs-.js";import"./Action-Sm7peXAz.js";import"./context-CKFjVc7D.js";import"./Dialog-B6Y78fzh.js";import"./OverlayArrow-TFGGeUC5.js";import"./useControlledState-DFlLGPV3.js";import"./Collection-DT0XSz1p.js";import"./CollectionBuilder-7sWRFWqn.js";import"./SelectionIndicator-CzOKaojY.js";import"./Separator-CYgNn2Xy.js";import"./SelectionManager-moo-j50V.js";import"./useEvent-BPTus2_l.js";import"./useCollator-Bwevici6.js";import"./FocusScope-utk7FKt0.js";import"./VisuallyHidden-BgleADuq.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(j,{children:"Storage"})})]})},l={render:o=>r.jsx(f,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Mr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,l as InSection,p as Light,c as WithActionGroup,m as WithProgressBar,Mr as __namedExportsOrder,Hr as default};
