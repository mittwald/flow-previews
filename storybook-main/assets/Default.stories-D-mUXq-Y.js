import{j as r}from"./iframe-DALqHAyB.js";import{T as s}from"./TextArea-2lQdk6QK.js";import{L as a}from"./Label-DyIG2v27.js";import{F as h}from"./FieldDescription-DA7yQQcX.js";import{F as g}from"./useFieldComponent-CuLkv2Wr.js";import"./index-nuYtCEEu.js";import"./TextFieldBase-oGqtL2rG.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./TextField-CjKAtJ6I.js";import"./utils-C0MA_VWy.js";import"./RSPContexts-CoCveTu3.js";import"./Form-DuNFHANS.js";import"./useLabel-85XHUWXZ.js";import"./Group-Co0gZnxS.js";import"./useFocusRing-BpmoLA66.js";import"./useFocus-CR3niFsF.js";import"./Input-D7GaT3Mp.js";import"./Hidden-SLgE1qP8.js";import"./Label-D28Pduqa.js";import"./Text-vTixOjUz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useTextField-Di0sHcGC.js";import"./useFormReset-C8DxwuW7.js";import"./useControlledState-BAMCZ0BN.js";import"./useFocusable-UlymAToY.js";import"./useFormValidation-C14rVgab.js";import"./flowComponent-CvsgRxlP.js";import"./ReactAriaControlledValueFix-BUPP8sB2.js";import"./Label.module-CUYTf9Jc.js";import"./Text-BxJmp77a.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./IconWarning-CcDUp5xj.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,sr={title:"Form Controls/TextArea",component:s,render:e=>r.jsx(s,{onChange:x("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(h,{children:"Starts with ssh-rsa"})]})},p={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},d={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},l={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(g,{children:"Invalid Key"})]})},m={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};const ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","Resizeable"];export{o as Default,t as Disabled,i as ReadOnly,n as Required,u as Resizeable,m as ShowCharacterCount,p as WithDefaultValue,c as WithFieldDescription,l as WithFieldError,d as WithPlaceholder,ar as __namedExportsOrder,sr as default};
