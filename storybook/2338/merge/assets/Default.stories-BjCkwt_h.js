import{j as r}from"./iframe-DBOgS3cI.js";import{T as s}from"./TextArea-DnmWXGwj.js";import{L as a}from"./Label-DEbA9P8V.js";import{F as d}from"./FieldDescription-CSCgjXc1.js";import{F as m}from"./FieldError-DG3wyRNr.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./utils-BhJeINWq.js";import"./useFieldComponent-pONIfnVv.js";import"./useControlledHostValueProps-Biih5Sjk.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./TextField-BdIP0Lrm.js";import"./FieldError-C8B5aabp.js";import"./Text-TZlAM5yA.js";import"./filterDOMProps-BNnC3YgW.js";import"./RSPContexts-Dpo7G8Um.js";import"./Form-BBY5sklR.js";import"./useLabel-ClWLYl61.js";import"./Group-DPP3NL9M.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocus-C3U4okCI.js";import"./Input-1Fi11bbE.js";import"./Hidden-DDnoFhwK.js";import"./Label-DiLXicnZ.js";import"./useTextField-DdxpKlHp.js";import"./useFormReset-M_TceD0b.js";import"./useControlledState-Pjvp5Vn-.js";import"./useFocusable-Jw6d-A2p.js";import"./useFormValidation-BF3CckmA.js";import"./Label.module-CUYTf9Jc.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./AlertText-C0iLtgHk.js";import"./AlertIcon-CCMDdz-U.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Form Controls/TextArea",component:s,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1,allowResize:!1},argTypes:{allowResize:{control:"inline-radio",options:[!1,!0,"horizontal","vertical"]}},render:e=>r.jsx(s,{onChange:u("onChange"),...e,children:r.jsx(a,{children:"Message"})})},o={},t={render:e=>r.jsxs(s,{...e,children:[r.jsx(a,{children:"Public Key"}),r.jsx(d,{children:"Starts with ssh-rsa"})]})},i={render:e=>r.jsx(s,{...e,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:r.jsx(a,{children:"Public Key"})})},p={render:e=>r.jsx(s,{...e,placeholder:"ssh-rsa...",children:r.jsx(a,{children:"Public Key"})})},n={render:e=>r.jsxs(s,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(a,{children:"Public Key"}),r.jsx(m,{children:"Invalid Key"})]})},l={args:{showCharacterCount:!0,maxLength:100}},c={args:{rows:3,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 3,
    autoResizeMaxRows: 5
  }
}`,...c.parameters?.docs?.source}}};const sr=["Default","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable"];export{c as AutoResizeable,o as Default,l as ShowCharacterCount,i as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,p as WithPlaceholder,sr as __namedExportsOrder,er as default};
