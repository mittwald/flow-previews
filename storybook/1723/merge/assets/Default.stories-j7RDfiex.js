import{j as e,r as g}from"./iframe-BpEavT04.js";import{B as j}from"./Button-CCZgVc0N.js";import{F as x}from"./FieldDescription-Vq0coIIu.js";import{F as S}from"./FieldError-DY8OUBEl.js";import{L as o}from"./Label-CiJybHgW.js";import{u as C,F as f}from"./Form-CXoJvbIg.js";import{s as T}from"./Action-h-c20zp_.js";import{T as t}from"./TextField-CXYiBKHe.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./IconWarning-vA6HsYJq.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Text-DWLjOUr2.js";import"./utils-CpHgE-S6.js";import"./LoadingSpinner-CRDc6voB.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./FieldError-BmEWAGf_.js";import"./dynamic-DKDa4OpU.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./getActionGroupSlot-B7TFfcap.js";import"./TextFieldBase-rHnY8ewp.js";import"./FormField.module-B9AzUSUD.js";import"./TextField-CoVUwaSO.js";import"./Form-DJ2svD4f.js";import"./Group-DG2VW6yX.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./useControlledState-Cjeeyz03.js";import"./ReactAriaControlledValueFix-BKN3vDTM.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ge={title:"Form Controls/TextField",component:t,render:r=>e.jsx(t,{onChange:F("onChange"),...r,children:e.jsx(o,{children:"First name"})})},s={},a={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(o,{children:"URL"}),e.jsx(x,{children:'Start with "https://"'})]})},p={render:r=>e.jsx(t,{...r,defaultValue:"https://mittwald.de",children:e.jsx(o,{children:"URL"})})},l={render:r=>{const[h,L]=g.useState("");return e.jsx(t,{...r,value:h,onChange:b=>L(b.toUpperCase()),children:e.jsx(o,{children:"URL"})})}},m={render:r=>e.jsx(t,{...r,placeholder:"https://",children:e.jsx(o,{children:"URL"})})},d={render:r=>e.jsxs(t,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(o,{children:"URL"}),e.jsx(S,{children:"Invalid input"}),e.jsx(x,{children:'Start with "https://"'})]})},c={render:r=>{const h=C();return e.jsxs(f,{form:h,onSubmit:async()=>await T(2e3),children:[e.jsx(t,{...r,type:"email",inputMode:"email",isRequired:!0,children:e.jsx(o,{children:"Email"})}),e.jsx("br",{}),e.jsx(j,{type:"submit",children:"Submit"})]})}},u={args:{showCharacterCount:!0,maxLength:10},render:r=>e.jsx(t,{onChange:F("onChange"),...r,children:e.jsx(o,{children:"User name"})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <TextField {...props} type="email" inputMode="email" isRequired>
          <Label>Email</Label>
        </TextField>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const je=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","WithForm","ShowCharacterCount"];export{s as Default,a as Disabled,i as Required,u as ShowCharacterCount,l as WithControlledValue,p as WithDefaultValue,n as WithFieldDescription,d as WithFieldError,c as WithForm,m as WithPlaceholder,je as __namedExportsOrder,ge as default};
