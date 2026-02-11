import{j as e}from"./iframe-DzjGvN4s.js";import{S as o}from"./SearchField-CYDI3Wo2.js";import{L as n}from"./Label-B3AoafTb.js";import{F as c}from"./FieldDescription-Bk9-3UzX.js";import{F as d}from"./FieldError-wOx9kOaR.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BsZ1NoTf.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./clsx-B-dksMZM.js";import"./index-CvRHkpxf.js";import"./Button-BJ_Dg9g5.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./Text--QhKw61r.js";import"./browser-DnRnaS9W.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./utils-CaY6-C_T.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./context-kL1uqGsw.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3so-j8A.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useFocusable-CvI9gOnC.js";import"./useControlledHostValueProps-B88rGyy5.js";import"./FieldError-Cm2eS0Qx.js";import"./RSPContexts-D4WEG-B8.js";import"./Form-C7-6k5t9.js";import"./Group-BEToeHeW.js";import"./Input-BbhuOsE_.js";import"./useControlledState-DSekeTPZ.js";import"./useTextField-Cth1_8nw.js";import"./useFormReset-lQZuuaDU.js";import"./useFormValidation-CCaCqHBd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
