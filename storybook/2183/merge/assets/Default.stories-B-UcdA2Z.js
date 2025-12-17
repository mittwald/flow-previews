import{j as r}from"./iframe-CQakcPxy.js";import{I as e}from"./IllustratedMessage-CnU8p6XR.js";import{H as t}from"./Heading-Dcbcxbjg.js";import{T as s}from"./Text-BtxvTgzr.js";import{B as d}from"./Button-BgdUtfaQ.js";import{I as u}from"./IconChevronDown-DRX1rHio.js";import{I as g}from"./IconDanger-BPWM_X_l.js";import{A as x}from"./ActionGroup-BNhvl4_-.js";import{P as h}from"./ProgressBar-Dl8BPxm1.js";import{L as j}from"./Label-Bciz4GF2.js";import{S as f}from"./Section-B-CKtBZu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./Heading-BFz_o3go.js";import"./RSPContexts-BrDe4Bm2.js";import"./utils-kpK_hrRV.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./remote-DEFV7i-V.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./dynamic-smSIHOJr.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DErNzk32.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Action-DugCc7r9.js";import"./context-BwdTo_HZ.js";import"./Dialog-B0kzP3Mz.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(j,{children:"Storage"})})]})},l={render:o=>r.jsx(f,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
