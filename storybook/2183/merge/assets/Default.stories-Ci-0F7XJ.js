import{j as e}from"./iframe-CgbY6Bes.js";import{S as o}from"./SearchField-CJ3F12Lg.js";import{L as n}from"./Label-4ok8fPIv.js";import{F as c}from"./TranslationProvider-BcRRsHoV.js";import{F as d}from"./FieldError-CfVeuV3t.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DU5_3SMj.js";import"./PropsContextProvider-CTdpdvjF.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./Activity-CqdR7Ddt.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./LoadingSpinner-BWpI0HIx.js";import"./Button-AhSsxt5Y.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./EmulatedBoldText-C19QTVcg.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7mjZSuw.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./IconClose-uPOAYLU1.js";import"./IconSearch-DmfDVUKE.js";import"./useControlledHostValueProps-Dbgf5Bkh.js";import"./FieldError-ZCijCAEA.js";import"./RSPContexts-nmNOlAeI.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./useTextField-BZjORKhe.js";import"./useFormReset-DHRVeg6P.js";import"./useFormValidation-B0VcAod8.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-BX16aSJY.js";import"./context-dInkHyA4.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-D9oAFjYl.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <FieldDescription>Press enter to search</FieldDescription>
    </SearchField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Label>Suche</Label>
    </SearchField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props} defaultValue="test" isInvalid>
      <FieldError>Invalid search value</FieldError>
    </SearchField>
}`,...m.parameters?.docs?.source}}};const hr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,hr as __namedExportsOrder,ur as default};
