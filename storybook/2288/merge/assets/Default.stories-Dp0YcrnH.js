import{j as e}from"./iframe-Bj8CIgLy.js";import{T as a}from"./TextArea-CdFbDJ3d.js";import{L as s}from"./Label-DCfOJgVU.js";import{F as x}from"./FieldDescription-tBjikzHa.js";import{F as z}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-C4_qES-F.js";import"./useFieldComponent-DFS7CEov.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./TextField-DWq53d6e.js";import"./utils-D41FTHpf.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-C3RQOwqv.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Group-C2p9sJyZ.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocus-BJLP4kuV.js";import"./Input-DxRXMpsm.js";import"./Hidden-DWJk28Vx.js";import"./Label-BAoc3jdD.js";import"./useTextField-gMvFPb5G.js";import"./useFormReset-DPVe5t_C.js";import"./useControlledState-C0IHmt74.js";import"./useFocusable-DNf9Dm0r.js";import"./useFormValidation-CuYWsRMr.js";import"./useControlledHostValueProps-D2bTA6r2.js";import"./Label.module-CUYTf9Jc.js";import"./Text-BbFFlg8m.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,le={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...b.parameters?.docs?.source}}};const pe=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,pe as __namedExportsOrder,le as default};
