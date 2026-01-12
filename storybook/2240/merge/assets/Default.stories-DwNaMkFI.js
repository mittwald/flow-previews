import{j as e}from"./iframe-Bt_Ape3b.js";import{T as a}from"./TextArea-Bp0tCNpF.js";import{L as s}from"./Label-LBQHmcU0.js";import{F as x}from"./FieldDescription-BVGH4033.js";import{F as z}from"./FieldError-DvZju2Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-BLvJh4XV.js";import"./useFieldComponent-QpDNRghi.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./TextField-BJdO3hjf.js";import"./utils-DGGum7sG.js";import"./FieldError-Cd4omKy3.js";import"./Text-DwU1R_Cs.js";import"./filterDOMProps-i7L6S0l1.js";import"./RSPContexts-CtPg4mPr.js";import"./Form-E_SZdIUl.js";import"./useLabel-BAWBHbvC.js";import"./Group-MbSsCM3Y.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocus-C-togmBu.js";import"./Input-DtIcDeFz.js";import"./Hidden-CJIrU941.js";import"./Label-Bfb_thp3.js";import"./useTextField-DKaBY6Vl.js";import"./useFormReset-BU_Yh1RY.js";import"./useControlledState-Bw01eRXu.js";import"./useFocusable-BX_sV3cU.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useControlledHostValueProps-D-YKizXP.js";import"./Label.module-CUYTf9Jc.js";import"./Text-Bs2hbxJA.js";import"./browser-BI8hAkYP.js";import"./EmulatedBoldText-213nH2nf.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
