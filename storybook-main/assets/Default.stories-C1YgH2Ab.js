import{j as e}from"./iframe-BO4how7V.js";import{T as a}from"./TextArea-BeEPBHbr.js";import{L as s}from"./Label-Dg0lhbqP.js";import{F as x}from"./FieldDescription-CJgVFelr.js";import{F as z}from"./useFieldComponent-CjWlILZl.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-DX5oMAlQ.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./index-B3PYSYUw.js";import"./clsx-B-dksMZM.js";import"./index-CzMnHAtb.js";import"./TextField-LacAyjo3.js";import"./utils-BpiWkIEZ.js";import"./RSPContexts-C8zlTsZJ.js";import"./Form-hZ8SLhDT.js";import"./useLabel-R_XjJcRU.js";import"./Group-BtVQV9Eb.js";import"./useFocusRing-cZUm55wA.js";import"./useFocus-CFrGhCIR.js";import"./Input-C8s0JVaR.js";import"./Hidden-cuI6d2d2.js";import"./Label-HRe2PJ1I.js";import"./Text-BwppUNzg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-shmblCKI.js";import"./useFormReset-DKBI04Qj.js";import"./useControlledState-Dy2CU0s2.js";import"./useFocusable-Dm6zCBge.js";import"./useFormValidation-BHRl0fwc.js";import"./flowComponent-_BWaP51b.js";import"./ReactAriaControlledValueFix-BjDsGSLB.js";import"./Label.module-CUYTf9Jc.js";import"./Text-k4VuksKp.js";import"./browser-9RCZAQdm.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./IconWarning-riXPckyc.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ie={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowHorizontalResize:!0}},R={args:{allowVerticalResize:!0}},b={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
