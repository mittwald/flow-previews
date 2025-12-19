import{j as e}from"./iframe-d8TPt7Dq.js";import{T as a}from"./TextArea-DVFtUF2z.js";import{L as s}from"./Label-DUZNK_N3.js";import{F as x}from"./FieldDescription-CQGlo9YG.js";import{F as z}from"./FieldError-Z630sQ-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-CrCDv3B5.js";import"./useFieldComponent-XccPD61N.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./TextField-DzbzMCaM.js";import"./utils-CQWCrNEN.js";import"./FieldError-D74Rm1AJ.js";import"./Text-CbFZ93_1.js";import"./filterDOMProps-i7L6S0l1.js";import"./RSPContexts-Bn3c_trp.js";import"./Form-bB72J6qo.js";import"./useLabel-CyX9DgZ-.js";import"./Group-Bs1XJ8tf.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocus-Dzzsimxq.js";import"./Input-Cp9jMkj6.js";import"./Hidden-DwOTALl4.js";import"./Label-Ddce6lPW.js";import"./useTextField-BALSLGms.js";import"./useFormReset-AO5_sbxL.js";import"./useControlledState-Du7Hq4ap.js";import"./useFocusable-Blyv-8JB.js";import"./useFormValidation-DzABwrGN.js";import"./useControlledHostValueProps-CJz_h5pu.js";import"./Label.module-CUYTf9Jc.js";import"./Text-B_83j2CJ.js";import"./browser-Cq89yPle.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const ce=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,ce as __namedExportsOrder,ne as default};
