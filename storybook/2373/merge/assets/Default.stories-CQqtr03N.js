import{j as e}from"./iframe-BOfxQ126.js";import{S as o}from"./SearchField-DINJ3GV6.js";import{L as n}from"./Label-CqRpIaXO.js";import{F as d}from"./FieldDescription-BJeDAEM1.js";import{F as l}from"./FieldError-DCo5F_nc.js";import{S as u}from"./ShortcutKey-CKjmZAyj.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-D5YpTCds.js";import"./flowComponent-sv_DULJq.js";import"./index-BJ7B_kXa.js";import"./clsx-B-dksMZM.js";import"./index-X6kmY2GD.js";import"./Button-y6FeYCBC.js";import"./IconWarning-BoBPkWIf.js";import"./remote-DjEyU7NV.js";import"./Text-kIO13lDY.js";import"./browser-Ch4oJYG9.js";import"./EmulatedBoldText-LIZTvG-s.js";import"./Text-OoL-eb0_.js";import"./utils-Ca0-H8MP.js";import"./LoadingSpinner-BjosoRSs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DE5_GH3M.js";import"./context-Bpmop-v_.js";import"./Button-6yn426ID.js";import"./ProgressBar-BM4farBg.js";import"./Label-CbvEG18U.js";import"./Hidden-BUteoyFO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5EK40Aa-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-up0eurfY.js";import"./useFocus-CUROCE8M.js";import"./useFocusRing-i6kyKwnh.js";import"./useFocusable-C918yQby.js";import"./useControlledHostValueProps-C2Pi2SXC.js";import"./FieldError-GcSEBXG9.js";import"./RSPContexts-8t9TLuqJ.js";import"./Form-CRtfSpWI.js";import"./Group-CfOaYHrv.js";import"./Input-Dk2m6F6l.js";import"./useControlledState-DE1u8yHr.js";import"./useTextField-B-yXo6Fk.js";import"./useFormReset-B-rsDa9Z.js";import"./useFormValidation-CxieGJiT.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DpLHter-.js";import"./AlertIcon-CIUnjm1o.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:h("onChange"),...r})},t={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(d,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(l,{children:"Invalid search value"})})},c={render:r=>e.jsx(o,{...r,children:e.jsx(u,{keys:["mod","k"]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      <ShortcutKey keys={["mod", "k"]} />
    </SearchField>
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError","WithShortcutKey"];export{t as Default,s as Disabled,i as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,c as WithShortcutKey,nr as __namedExportsOrder,cr as default};
