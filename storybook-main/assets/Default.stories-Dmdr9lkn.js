import{j as e}from"./iframe-DQCyQvTg.js";import{S as o}from"./SearchField-C2vcbd9F.js";import{L as n}from"./Label-Bpn5fam4.js";import{F as c}from"./FieldDescription-6JasakGe.js";import{F as d}from"./FieldError-Db3KB_ND.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BQB8jFXR.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./Button-BuvZu5FH.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Text-Dy3rf6Sf.js";import"./browser-NLzega1a.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./utils-B-47qEzM.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./useControlledHostValueProps-CVxN_pM4.js";import"./FieldError-BsUvM9FZ.js";import"./RSPContexts-CbSXEXlJ.js";import"./Form-Ca14id66.js";import"./Group-_bvz-aPU.js";import"./Input-kTwoopyR.js";import"./useControlledState-CSGe32xq.js";import"./useTextField-D5bi8loT.js";import"./useFormReset-3qpl4kR-.js";import"./useFormValidation-DWTcfSBl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
