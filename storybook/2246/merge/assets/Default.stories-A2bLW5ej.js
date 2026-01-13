import{j as e}from"./iframe-D5OSMSYj.js";import{S as o}from"./SearchField-DYc4Hg7Z.js";import{L as n}from"./Label-CF1-K3Zk.js";import{F as c}from"./FieldDescription--3BD_Kcq.js";import{F as d}from"./FieldError-DkXkFVgN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-yQbkUBpw.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./clsx-B-dksMZM.js";import"./index-Bwk6EGM5.js";import"./Button-DTe5su69.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./Text-DAhCT_ah.js";import"./browser-CPg_spJX.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./utils-B2fStg81.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./Label-Bh0iBwH8.js";import"./Hidden-NmD_pG7l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./useControlledHostValueProps-d9R3T6JC.js";import"./FieldError-SdvWZoRR.js";import"./RSPContexts-BzWalm_3.js";import"./Form-RJ7gT7dr.js";import"./Group-DPq_fDos.js";import"./Input-DK63hDT9.js";import"./useControlledState-BLX_f1Wx.js";import"./useTextField-CYoB5YV1.js";import"./useFormReset-C4H0cf_a.js";import"./useFormValidation-BzDFxNXO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,pr as __namedExportsOrder,ar as default};
