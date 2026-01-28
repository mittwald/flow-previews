import{j as e,r as C}from"./iframe-lb0QDBc2.js";import{F as h}from"./FieldDescription-D5GA7Uzb.js";import{F as R}from"./FieldError-BAOq6bLD.js";import{L as a}from"./Label-DP_lb_cz.js";import{T as t}from"./TextField-CZ2SQloU.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-Bvo-yLEA.js";import"./flowComponent-CMLBvcrR.js";import"./index-B9b6xQ5S.js";import"./index-DLJvSM0l.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./Text-DV3fQztC.js";import"./utils-r2dAqIcX.js";import"./FieldError-dmorJJtq.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DpQCB0Tk.js";import"./AlertIcon-DWhGd_Tx.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./context-DKVhGweU.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./TextFieldBase-Fxeb6rCc.js";import"./useFieldComponent-DzHSa8uO.js";import"./TextField-DJs8gWWO.js";import"./RSPContexts-YTE8c3lP.js";import"./Form-DtivvrEr.js";import"./useLabel-DBnvm8X4.js";import"./Group-x-kTcwBS.js";import"./useFocusRing-J18h0CnC.js";import"./useFocus-B48NrLMU.js";import"./Input-CDuEdvXx.js";import"./useTextField-CV_ELvki.js";import"./useFormReset-BIwT2nL6.js";import"./useControlledState-BS6Up44I.js";import"./useFocusable-BRnBN5zK.js";import"./useFormValidation-M5q2KkbC.js";import"./useControlledHostValueProps-DOsneGRp.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
