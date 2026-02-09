import{j as e}from"./iframe-nlVW-CPZ.js";import{T as a}from"./TextArea-gUMmQRfu.js";import{L as s}from"./Label-BuWy1qrT.js";import{F as x}from"./FieldDescription-a2tRS2_K.js";import{F as z}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./utils-CyuEFqip.js";import"./useFieldComponent-DOzg870F.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./TextField-D0tY8Qlz.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-DlUCcPRc.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./Group-w-lYdjjN.js";import"./useFocusRing-0Z36i33d.js";import"./useFocus-CD1ZzMvo.js";import"./Input-BlMpicf_.js";import"./Hidden-B4CC7Km1.js";import"./Label-txjD4aFE.js";import"./useTextField-C4USa82P.js";import"./useFormReset-J8eUPjf8.js";import"./useControlledState-ywoEmBU4.js";import"./useFocusable-DHxyzauV.js";import"./useFormValidation-DqSMo-uw.js";import"./Label.module-CUYTf9Jc.js";import"./Text-BzuDjaz9.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ce={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},d={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const le=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,m as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,d as WithFieldError,p as WithPlaceholder,le as __namedExportsOrder,ce as default};
