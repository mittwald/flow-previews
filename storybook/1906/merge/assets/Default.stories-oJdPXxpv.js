import{j as e,r as C}from"./iframe-S6a6IBGW.js";import{F as h}from"./FieldDescription-BbDHCmf8.js";import{F as R}from"./FieldError-BcgoZm7g.js";import{L as a}from"./Label-caCQNiXZ.js";import{T as t}from"./TextField-CF1EpCD8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CLecf1p6.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./index-C8QsAo4A.js";import"./browser-C6w_OiT9.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./utils-B8ercvf4.js";import"./FieldError-BRuAmhML.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";import"./IconWarning-D0GzEl3K.js";import"./remote-CCjzztUh.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./TextFieldBase-CVkm9PCu.js";import"./useFieldComponent-C7YS4lAg.js";import"./TextField-E7LLUMXU.js";import"./RSPContexts-DL3JmftS.js";import"./Form-n7Om2L0f.js";import"./useLabel-I1naabyM.js";import"./Group-_IqKYLf1.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocus--oJxMCZo.js";import"./Input-BCdJg_3v.js";import"./useTextField-BpiGn0fy.js";import"./useFormReset-DK3gdO9Q.js";import"./useControlledState-BHa0sYDq.js";import"./useFocusable-DTyt-kbS.js";import"./useFormValidation-DHFSk2Ol.js";import"./useControlledHostValueProps-CCflrE_G.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
