import{j as e,r as C}from"./iframe-CvJspzLv.js";import{F as h}from"./FieldDescription-DYsoHdVt.js";import{F as R}from"./FieldError-DQmh2MYp.js";import{L as a}from"./Label-DfZOYrgY.js";import{T as t}from"./TextField-D890uTHI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-QUQe3Lsq.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./index-Df150GVy.js";import"./browser-CBUTrPGa.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./utils-BL4G7l_u.js";import"./FieldError-DlX11YEn.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./TextFieldBase-6J4u6VBA.js";import"./useFieldComponent-43Bszd6x.js";import"./TextField-DPOg2TtI.js";import"./RSPContexts-fR-6qryz.js";import"./Form-5NfLIR8x.js";import"./useLabel-DfL38sGR.js";import"./Group-C7yLTez3.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocus-DbFf9Ktc.js";import"./Input-qFXimabr.js";import"./useTextField-Bm9nr_bd.js";import"./useFormReset-ukaISav3.js";import"./useControlledState-DsktkqC9.js";import"./useFocusable-C5zGZvV-.js";import"./useFormValidation-CwZe5cTQ.js";import"./useControlledHostValueProps-Cd6juLCH.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
