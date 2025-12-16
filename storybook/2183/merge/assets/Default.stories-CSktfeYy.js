import{j as e}from"./iframe-VGYf9uSR.js";import{S as o}from"./SearchField-CTvWDrI_.js";import{L as n}from"./Label--ix077tG.js";import{F as c}from"./TranslationProvider-Ck575ucT.js";import{F as d}from"./FieldError-CLzXjLUN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DiUYLu0s.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./Activity-CX_biUm5.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./Button-C33JxfbF.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./Text-CGbJaU4z.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./IconClose-C4Rk0te9.js";import"./IconSearch-CVnLmRK-.js";import"./useControlledHostValueProps-zg0QpAjj.js";import"./FieldError-AWx0XaHn.js";import"./RSPContexts-D2Dnlu1I.js";import"./Form-CEBTvUmY.js";import"./Group-DDpm-w1G.js";import"./Input-DAGTqZv7.js";import"./SelectionIndicator-Byl_MQLN.js";import"./useTextField-3t2wWbTv.js";import"./useFormReset-D2LFGRel.js";import"./useFormValidation-DNcRsa8m.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./Separator-BZpKfwRn.js";import"./useStatic-DRLyxIeE.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-B5Kx1O1H.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
