import{j as e,r as C}from"./iframe-CdVpWnc8.js";import{F as h}from"./FieldDescription-CO9NCU0r.js";import{F as R}from"./FieldError-0fRgmDO9.js";import{L as a}from"./Label-CQQzXuOB.js";import{T as t}from"./TextField-B0oGRJXX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-KDInGMjK.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./utils-ClIic5nH.js";import"./FieldError-U_T6R5BY.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./TextFieldBase-D2gwtZ4Z.js";import"./useFieldComponent-pH8UQhzW.js";import"./TextField-BwTHsd-m.js";import"./RSPContexts-PfgqXwd-.js";import"./Form-BAj6LeSM.js";import"./useLabel-BKXkodj0.js";import"./Group-B1_lIqzJ.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocus-DZX-xW1t.js";import"./Input-CCUGOCeS.js";import"./useTextField-c4bMHwAM.js";import"./useFormReset-D5EHipFr.js";import"./useControlledState-B7ztCH5k.js";import"./useFocusable-CzSEJZTE.js";import"./useFormValidation-5isdk9bY.js";import"./useControlledHostValueProps-CZNxzonQ.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
