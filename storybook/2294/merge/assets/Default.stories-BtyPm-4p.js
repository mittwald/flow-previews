import{j as e}from"./iframe-BAsHckrK.js";import{S as o}from"./SearchField-Ssm4cSk5.js";import{L as n}from"./Label-DVOhOuhT.js";import{F as c}from"./FieldDescription-CD7ak6-M.js";import{F as d}from"./FieldError-ZX2j7DJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-uzP_CJXZ.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./clsx-B-dksMZM.js";import"./index-Cf_R1xcK.js";import"./Button-CAoYj-yB.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./Text-B__BY7tJ.js";import"./browser-tZCM2k1B.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./utils-AcXTY-LA.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BtuPSsUz.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocusable-DEw7yEFU.js";import"./useControlledHostValueProps-DIe9Ntlu.js";import"./FieldError-Ch8lYR65.js";import"./RSPContexts-CrAnBcro.js";import"./Form-BEcGmyNR.js";import"./Group-D8US-dbe.js";import"./Input-DVOtN3yU.js";import"./useControlledState-DIA42IR3.js";import"./useTextField-DFE5rIX1.js";import"./useFormReset-BBc75pQ_.js";import"./useFormValidation-l5tjlCjY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
