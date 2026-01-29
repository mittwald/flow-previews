import{j as e,r as C}from"./iframe-CV15FJMl.js";import{F as h}from"./FieldDescription-BbUtqeWX.js";import{F as R}from"./FieldError-e14SOUTJ.js";import{L as a}from"./Label-BYiN1vfD.js";import{T as t}from"./TextField-B9Sj9JY1.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Text-DO3jYkuR.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./browser-8BNXX35r.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./utils-B45PgFGd.js";import"./FieldError-CDBleeuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./TextFieldBase-CM4cdUAH.js";import"./useFieldComponent-4syZJMEs.js";import"./TextField-C5RLv0sl.js";import"./RSPContexts-09abhkzW.js";import"./Form-B5_Ftb3l.js";import"./useLabel-DgTpLYXb.js";import"./Group-Oc33WXVS.js";import"./useFocusRing-CoS5ESqQ.js";import"./useFocus-C3kMSW21.js";import"./Input-Wuyb26cC.js";import"./useTextField-DH39Jsbq.js";import"./useFormReset-DQt01LcM.js";import"./useControlledState-Br5i43rk.js";import"./useFocusable-DenRoGzb.js";import"./useFormValidation-rdndu8q5.js";import"./useControlledHostValueProps-CzUjaEYd.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"First name"})})},o={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:r=>e.jsxs(t,{...r,children:[e.jsx(a,{children:"URL"}),e.jsx(h,{children:'Start with "https://"'})]})},l={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(a,{children:"URL"})})},d={render:r=>{const[F,g]=C.useState("");return e.jsx(t,{...r,value:F,onChange:L=>g(L.toUpperCase()),children:e.jsx(a,{children:"URL"})})}},c={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(a,{children:"URL"})})},m={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"URL"}),e.jsx(R,{children:"Invalid input"}),e.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:x("onChange"),...r,children:e.jsx(a,{children:"User name"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
