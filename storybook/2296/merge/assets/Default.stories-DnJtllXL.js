import{j as r}from"./iframe-DdPUg3l1.js";import{N as o}from"./NumberField-Cubdke4X.js";import{L as t}from"./Label-CBiKyrhF.js";import{F as c}from"./FieldDescription-DwbcR2ZF.js";import{F as g}from"./FieldError-Brd6jVZQ.js";import{C as x,a as b}from"./ContextualHelpTrigger-DQmRaLhL.js";import{B as h}from"./Button-BArDp6jY.js";import{T as F}from"./Text-DjGrgiDc.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CO5pYfeq.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./clsx-B-dksMZM.js";import"./index-DfF1Hh-7.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./useControlledHostValueProps-CH_JLeXe.js";import"./Button-CezSw_uu.js";import"./utils-CZc2hRnH.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./context-eo9HPzgD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C4aurJT7.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./FieldError-DDOFx421.js";import"./Text-JRLUlLnO.js";import"./Form-0LpxOP9r.js";import"./Group-D63BMUZR.js";import"./Input--TqM61uI.js";import"./useControlledState-vD92hbDx.js";import"./useFormValidation-ChceI0Vn.js";import"./useSpinButton-D7cexjzG.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./useFormReset-B7Z_bYQn.js";import"./useEvent-ZVXwlSCj.js";import"./useTextField-DjpmRkhm.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";import"./Popover-MzjGOrse.js";import"./useOverlayController-CNjuPWf4.js";import"./context-Dvh-zisW.js";import"./useStatic-BSymBvZm.js";import"./OverlayContextProvider-CWnaXv7P.js";import"./Dialog-B4itYT93.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";import"./OverlayTrigger-Dxt_ykXt.js";import"./LoadingSpinner-CrAIHNN2.js";import"./browser-CdIpgqNn.js";import"./EmulatedBoldText-DdQb5yyc.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
