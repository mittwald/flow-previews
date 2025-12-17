import{j as e}from"./iframe-BoCc-iJU.js";import{S as o}from"./SearchField-Dk4dhF5F.js";import{L as n}from"./Label-DGwnCcrv.js";import{F as c}from"./FieldDescription-DAwt_2_X.js";import{F as d}from"./FieldError-gHUqbDM9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BP-lIfvD.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./clsx-B-dksMZM.js";import"./index-CpJJlR3B.js";import"./Button-XooD-Xiy.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./browser-BzlHG3zD.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./utils-P0pc5_a9.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./IconClose-C5BWra8K.js";import"./IconSearch-Dkad9_Gw.js";import"./useControlledHostValueProps-Cdc0IVz3.js";import"./FieldError-Cv1yZmyj.js";import"./RSPContexts-ZqX2hjEE.js";import"./Form-AyX8lm4h.js";import"./Group-DUY-xJc3.js";import"./Input-BVdlr_HZ.js";import"./useControlledState-Bp_HlHxi.js";import"./useTextField-Zsr4se75.js";import"./useFormReset-Bkd1XrYX.js";import"./useFormValidation-DSNLWRBM.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CyJfzsCE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const dr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,dr as __namedExportsOrder,cr as default};
