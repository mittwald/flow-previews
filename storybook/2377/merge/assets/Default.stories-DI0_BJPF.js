import{j as e}from"./iframe-JHVlk64D.js";import{S as o}from"./SearchField-CjhfzTA9.js";import{L as n}from"./Label-BVSjd_Ef.js";import{F as d}from"./FieldDescription-CHp3BkQc.js";import{F as l}from"./FieldError-DkKHEf-8.js";import{K as u}from"./Kbd-CYQar0o1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Dm_EHwx7.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./Button-BViHWx5D.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./Text-D35H-2yr.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./utils-D9FbIhNL.js";import"./LoadingSpinner-Bl1fRewj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./context-ArJ603f0.js";import"./Button-CV338ZHI.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./FieldError-CB6gvg8S.js";import"./RSPContexts-BaSES6Qq.js";import"./Form-C3MOdK6R.js";import"./Group-BpUbtBKw.js";import"./Input-D75LvDxG.js";import"./useControlledState-BK0dEcU9.js";import"./useTextField-D6sOxTHB.js";import"./useFormReset-CuVjUJoL.js";import"./useFormValidation-BHVZgCg5.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:h("onChange"),...r})},s={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(d,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(l,{children:"Invalid search value"})})},c={render:r=>e.jsx(o,{...r,children:e.jsx(u,{keys:["mod","k"]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Kbd keys={["mod", "k"]} />
    </SearchField>
}`,...c.parameters?.docs?.source}}};const dr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError","WithKbd"];export{s as Default,t as Disabled,i as ReadOnly,a as WithFieldDescription,m as WithFieldError,c as WithKbd,p as WithLabel,dr as __namedExportsOrder,nr as default};
