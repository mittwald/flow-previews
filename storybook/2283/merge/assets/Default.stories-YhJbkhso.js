import{j as e,r as C}from"./iframe-DcJYxA4H.js";import{F as h}from"./FieldDescription-DgkERfUc.js";import{F as R}from"./FieldError-B2Tu46Cr.js";import{L as a}from"./Label-DYsIDPwe.js";import{T as t}from"./TextField-Bg0iyGBM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DtgxB8-I.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./index-BLaZpk-P.js";import"./browser-DuGwj8Dx.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./utils-DilzIpMR.js";import"./FieldError-BmNSHu0e.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./TextFieldBase-CRFHOErC.js";import"./useFieldComponent-rnjT2dRC.js";import"./TextField-D_iglgqs.js";import"./RSPContexts-B2T9ptP_.js";import"./Form-C2ZrGthD.js";import"./useLabel-DpAfaget.js";import"./Group--doBvykr.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocus-CBKKPZUx.js";import"./Input-Cz4fvs1s.js";import"./useTextField-DpGaW4Tx.js";import"./useFormReset-BxLymg31.js";import"./useControlledState-BqUYry3y.js";import"./useFocusable-CBOZtalu.js";import"./useFormValidation-CxhT4ib7.js";import"./useControlledHostValueProps-B3OONvK6.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
