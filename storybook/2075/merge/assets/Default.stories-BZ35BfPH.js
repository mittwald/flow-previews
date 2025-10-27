import{j as e,r as C}from"./iframe-QQgxjfU-.js";import{F as h}from"./FieldDescription-ByaGBmYT.js";import{F as R}from"./useFieldComponent-B5mMljfV.js";import{L as a}from"./Label-TUk01fEf.js";import{T as t}from"./TextField--NJ6hk1w.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./Text-CRs-OO-e.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./index-3NdHptBj.js";import"./browser-CvCNE6Dh.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Text-D_WC5Uss.js";import"./utils-DhA81qjX.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CSQYjrC1.js";import"./react-children-utilities-2-HBtGkG.js";import"./ClearPropsContext-C1xOcMSE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./context-CRx6Bs8B.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./TextFieldBase-1UDxpFo8.js";import"./TextField-Cw982LxM.js";import"./RSPContexts-CsH1Ib1c.js";import"./Form-w-Aai7lh.js";import"./useLabel-BVJbXyTi.js";import"./Group-fEBq4Exh.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocus-0cMRA2DE.js";import"./Input-BMf7xRQe.js";import"./useTextField-CzPGIxLo.js";import"./useFormReset-C3QpCCH-.js";import"./useControlledState-CkoNAxF1.js";import"./useFocusable-ClkP-4lm.js";import"./useFormValidation-CrlfASAQ.js";import"./ReactAriaControlledValueFix-1vIdF7qI.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ne=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{s as Default,o as Disabled,i as ReadOnly,n as Required,u as ShowCharacterCount,d as WithControlledValue,l as WithDefaultValue,p as WithFieldDescription,m as WithFieldError,c as WithPlaceholder,ne as __namedExportsOrder,ie as default};
