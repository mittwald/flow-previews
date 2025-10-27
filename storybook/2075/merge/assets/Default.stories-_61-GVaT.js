import{j as e}from"./iframe-C3YinX3s.js";import{T as s}from"./TextArea-1OZlcyRA.js";import{L as a}from"./Label-vc6tDbdp.js";import{F as x}from"./FieldDescription-DuQ-cxei.js";import{F as R}from"./useFieldComponent-unfYr68o.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-BYRjDC0U.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./context-XadyItFl.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./TextField-DsXX1XS3.js";import"./utils-CkQtaKCN.js";import"./RSPContexts-DbIyirJn.js";import"./Form-BCJL5_dO.js";import"./useLabel-6oysTp78.js";import"./Group-CAUzS8Z9.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocus-DuIK45_5.js";import"./Input-MWLT5DSw.js";import"./Hidden-RtymAw99.js";import"./Label-uL4LTRYY.js";import"./Text-2o-hGpxv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-ZOQ3uZr1.js";import"./useFormReset-BgD1M5By.js";import"./useControlledState-DTNxqflL.js";import"./useFocusable-Cpx8bVI7.js";import"./useFormValidation-mKao3Dkx.js";import"./flowComponent-DbYaKppP.js";import"./ReactAriaControlledValueFix-bFYYT4Mj.js";import"./Label.module-CUYTf9Jc.js";import"./Text-40KOd3GJ.js";import"./browser-DlgIuTl3.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./IconWarning-6TASCfRR.js";import"./react-children-utilities-Tlnpa_z4.js";import"./ClearPropsContext-CJ1szkV5.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,te={title:"Form Controls/TextArea",component:s,render:r=>e.jsx(s,{onChange:f("onChange"),...r,children:e.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(s,{...r,children:[e.jsx(a,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(s,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(a,{children:"Public Key"})})},p={render:r=>e.jsx(s,{...r,placeholder:"ssh-rsa...",children:e.jsx(a,{children:"Public Key"})})},d={render:r=>e.jsxs(s,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(a,{children:"Public Key"}),e.jsx(R,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowHorizontalResize:!0}},b={args:{allowVerticalResize:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...b.parameters?.docs?.source}}};const ie=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,ie as __namedExportsOrder,te as default};
