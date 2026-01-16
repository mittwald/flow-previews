import{j as e,r as C}from"./iframe-DZ4teeW0.js";import{F as h}from"./FieldDescription-wBHtE-uB.js";import{F as R}from"./FieldError-AZ-rkViQ.js";import{L as a}from"./Label-DoWn6F4v.js";import{T as t}from"./TextField-LBvSvYZk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-C4YBtGrU.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./browser-BOIGtlkn.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./utils-CmR_RyV0.js";import"./FieldError-DkoCPEDN.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./context-CZC3VL3b.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./TextFieldBase-G_iOTL3r.js";import"./useFieldComponent-D07Wu5hH.js";import"./TextField-DVn_L58j.js";import"./RSPContexts-BvqxEhTE.js";import"./Form-DzpbW5Q4.js";import"./useLabel-CN_YQU3T.js";import"./Group-CcFwVgnp.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocus-DPzONbd_.js";import"./Input-D0qY3wir.js";import"./useTextField-BGWNueLQ.js";import"./useFormReset-CHb94_Ie.js";import"./useControlledState-CE05dG3o.js";import"./useFocusable-V-w09cqm.js";import"./useFormValidation-DQHMrpfA.js";import"./useControlledHostValueProps-uUZrCOOz.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const de=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{o as Default,s as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,de as __namedExportsOrder,le as default};
