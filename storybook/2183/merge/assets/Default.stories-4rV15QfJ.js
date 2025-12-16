import{j as e}from"./iframe-xTeLnFvu.js";import{S as o}from"./SearchField-Czz-jgJ2.js";import{L as n}from"./Label-CVltlbUu.js";import{F as c}from"./TranslationProvider-Y_3SKiEv.js";import{F as d}from"./FieldError-oOsFR_NQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Brjsz3RP.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./Activity-D0VzS_Xj.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./Button-BA5_aaZE.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./Text-CX0dnSU4.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./EmulatedBoldText-st1IlPV2.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7tIPXbfR.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./IconClose-CqXP_7hn.js";import"./IconSearch-D00n2xIM.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./FieldError-Cxb9ZjML.js";import"./RSPContexts-BbeCs0tS.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./SelectionIndicator-vxn3ib0k.js";import"./useTextField-CSw7_eNz.js";import"./useFormReset-Co6bkbVB.js";import"./useFormValidation-CD-qIFlG.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./context-B3gmiBCA.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DpVgPae0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ur={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
