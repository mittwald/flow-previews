import{j as r}from"./iframe-CgbY6Bes.js";import{N as o}from"./NumberField-BjJLXyG2.js";import{L as t}from"./Label-4ok8fPIv.js";import{F as c}from"./TranslationProvider-BcRRsHoV.js";import{F as g}from"./FieldError-CfVeuV3t.js";import{C as x,a as b}from"./ContextualHelpTrigger-CW5JyZeF.js";import{B as h}from"./Button-AhSsxt5Y.js";import{T as F}from"./Text-VVW0omSC.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DU5_3SMj.js";import"./PropsContextProvider-CTdpdvjF.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./Activity-CqdR7Ddt.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./LoadingSpinner-BWpI0HIx.js";import"./IconChevronUp-cGnUjSr-.js";import"./IconMinus-BNQsdtCG.js";import"./IconPlus-BSRQaknL.js";import"./useControlledHostValueProps-Dbgf5Bkh.js";import"./Button-B5ZFMN0X.js";import"./utils-C1D540aj.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7mjZSuw.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./FieldError-ZCijCAEA.js";import"./browser-C7soFJnH.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./useFormValidation-B0VcAod8.js";import"./useSpinButton-DfRWms62.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./useFormReset-DHRVeg6P.js";import"./useTextField-BZjORKhe.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-BX16aSJY.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./ariaLive-BHE3J_Iw.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-D9oAFjYl.js";import"./Popover-BypcnTMO.js";import"./OverlayTrigger-CrSGYObS.js";import"./IconInfo-DhQADKs6.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./EmulatedBoldText-C19QTVcg.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Lr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,yr as __namedExportsOrder,Lr as default};
