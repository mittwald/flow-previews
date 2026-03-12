import{j as e}from"./iframe-C8tsaODo.js";import{S as o}from"./SearchField-CF6PVAmS.js";import{L as n}from"./Label-1oLHWqvU.js";import{F as d}from"./FieldDescription-BZoE01SC.js";import{F as l}from"./FieldError-EQJdnOUU.js";import{K as u}from"./Kbd-Cu176xZl.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-FgbLRzY4.js";import"./flowComponent-BTZ0wFju.js";import"./index-CLgTDDI2.js";import"./clsx-B-dksMZM.js";import"./index-BNoG6unV.js";import"./Button-BxguJBhT.js";import"./IconWarning-Up7WC4e0.js";import"./remote-Ckar2tK9.js";import"./Text-BE7lE0T8.js";import"./browser-qgMJ3NzC.js";import"./EmulatedBoldText-RMBLGP7I.js";import"./Text-BkxlIu3p.js";import"./utils-CdcYI7XL.js";import"./LoadingSpinner-C-PnKOui.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bu8yFg8Y.js";import"./context-BwdmRhET.js";import"./Button-Dm2nITC7.js";import"./ProgressBar-DplTBNX0.js";import"./Label-D1q-_ISO.js";import"./Hidden-BspDtBD-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oJhcJRxp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-vv50L64r.js";import"./useFocus-D0DC1KKH.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-DauayxVe.js";import"./useFocusable-BW2xec3w.js";import"./useControlledHostValueProps-D0AOVaZQ.js";import"./FieldError-DSXMmXMO.js";import"./RSPContexts-DtfJrVYY.js";import"./Form-Ch0mipSV.js";import"./Group-DRewra_w.js";import"./Input-ConcdJ9I.js";import"./useControlledState-CN29789s.js";import"./useTextField-BlhjZ_T-.js";import"./useFormReset-BpTKK099.js";import"./useFormValidation-CZJdaAR2.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlUc9teP.js";import"./AlertIcon-DJlFLAIk.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,nr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:h("onChange"),...r})},s={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(d,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(l,{children:"Invalid search value"})})},c={render:r=>e.jsx(o,{...r,children:e.jsx(u,{keys:["mod","k"]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
