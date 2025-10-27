import{j as e,r as C}from"./iframe-B0qqkRSc.js";import{F as h}from"./FieldDescription-CX2AXiNE.js";import{F as R}from"./useFieldComponent-BdE163vq.js";import{L as a}from"./Label-Bathhgam.js";import{T as t}from"./TextField-CifTHc1k.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./Text-BrTaOrXE.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./utils-fD_u--Rs.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BPZvpYf1.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./context-D99v7Uqm.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./TextFieldBase-CBLAjS1_.js";import"./TextField-OdvHxJmp.js";import"./RSPContexts-JwdHw2w4.js";import"./Form-Dg4UU0-2.js";import"./useLabel-sSRBc7PO.js";import"./Group-n_vUHkH-.js";import"./useFocusRing-6YYb42D4.js";import"./useFocus-D6s77d5g.js";import"./Input-C6zpuO0N.js";import"./useTextField-23Ik_eMK.js";import"./useFormReset-CSVsou9A.js";import"./useControlledState-CB1SzgEG.js";import"./useFocusable-BBZGyB5D.js";import"./useFormValidation-Vh8OxI1q.js";import"./ReactAriaControlledValueFix-DRAhRQZp.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},s={},o={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
