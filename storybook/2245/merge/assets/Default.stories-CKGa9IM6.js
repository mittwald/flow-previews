import{j as e,r as C}from"./iframe-YnzBkBP1.js";import{F as h}from"./FieldDescription-2qU2oAnE.js";import{F as R}from"./FieldError-CkABddBr.js";import{L as a}from"./Label-F32H6fZQ.js";import{T as t}from"./TextField-BkH0m1Ij.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-CErt044E.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./index-C9L7IfWC.js";import"./browser-Sf85iaAd.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./utils-CRkRQkMM.js";import"./FieldError-BIVQARwB.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";import"./IconWarning-CfrgrK5w.js";import"./remote-psJ_k7Km.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./context-Dc351FW_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TsHYY7iw.js";import"./Hidden-Dq31wpMg.js";import"./TextFieldBase-_ovyDT6c.js";import"./useFieldComponent-BnDxVRXr.js";import"./TextField-tjbLvPcx.js";import"./RSPContexts-Mp6syAgQ.js";import"./Form-DTh0_D5U.js";import"./useLabel-DyCvkQuz.js";import"./Group-BECEQ48t.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocus-CEJfh5Ox.js";import"./Input-9KD990Lp.js";import"./useTextField-wFMqJwOy.js";import"./useFormReset-3oD77Uyk.js";import"./useControlledState-DwL8StHF.js";import"./useFocusable-BIzKoTBr.js";import"./useFormValidation-MbSolyNi.js";import"./useControlledHostValueProps-B6-BJ9eH.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
