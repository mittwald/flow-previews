import{j as e}from"./iframe-B8r8XrPb.js";import{T as a}from"./TextArea-DYphRlrx.js";import{L as s}from"./Label-PmVCxAho.js";import{F as x}from"./FieldDescription-B6QY2e39.js";import{F as z}from"./FieldError-Cr-OeICt.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-c9yYS2qO.js";import"./useFieldComponent-DByhNd_z.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./utils-B2sHMxfy.js";import"./Text-DsIbOJYe.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./TextField-DYkOEqpl.js";import"./RSPContexts-Do_0M-hc.js";import"./Form-C0W2Agsa.js";import"./useLabel-Bn_yI2FK.js";import"./Group-DkjxT4kZ.js";import"./useFocusRing-DGaivw0f.js";import"./useFocus-Co_XlsN_.js";import"./Input-Cyh52Hgt.js";import"./Hidden-C0uurl-T.js";import"./Label-DhvUjtv7.js";import"./useTextField-BBBf5j1Z.js";import"./useFormReset-Cpg0SQow.js";import"./useControlledState-Dhb_P5xS.js";import"./useFocusable-USAcjdfT.js";import"./useFormValidation-DuuScCCl.js";import"./ReactAriaControlledValueFix-PV676lWb.js";import"./Label.module-CUYTf9Jc.js";import"./Text-CxxNxEUo.js";import"./browser-5JWtNQpe.js";import"./EmulatedBoldText-DH8-rljC.js";import"./IconWarning-BnpSGPSL.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowHorizontalResize:!0}},R={args:{allowVerticalResize:!0}},b={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...b.parameters?.docs?.source}}};const ne=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,ne as __namedExportsOrder,ie as default};
