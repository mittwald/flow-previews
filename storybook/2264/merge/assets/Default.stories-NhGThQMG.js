import{j as e}from"./iframe-BrcQhcwR.js";import{S as o}from"./SearchField-CGVsVAPs.js";import{L as n}from"./Label-eB0oKMGS.js";import{F as c}from"./FieldDescription-8e-MGFTK.js";import{F as d}from"./FieldError-D24voWaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CsbQ-7mY.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./clsx-B-dksMZM.js";import"./index-CSUT2NCR.js";import"./Button-DdI6TSg5.js";import"./IconWarning-MWZFtagw.js";import"./remote-BHShYJ5P.js";import"./Text-PyhJCmvh.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./utils-DM5Jp8EX.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBaWFJWg.js";import"./useFocus-BKws8v7-.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./useControlledHostValueProps-B_1Yxsae.js";import"./FieldError-BZvulriJ.js";import"./RSPContexts-CLcTs2D_.js";import"./Form-DI5rGqIO.js";import"./Group-kTgIroHk.js";import"./Input-CFsccwbB.js";import"./useControlledState-DsUZezc6.js";import"./useTextField-y15xLcpn.js";import"./useFormReset-BHDJFB5Q.js";import"./useFormValidation-CstoYpvO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
