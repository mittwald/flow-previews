import{j as r}from"./iframe-xTeLnFvu.js";import{N as o}from"./NumberField-BZyaEuhg.js";import{L as t}from"./Label-CVltlbUu.js";import{F as c}from"./TranslationProvider-Y_3SKiEv.js";import{F as g}from"./FieldError-oOsFR_NQ.js";import{C as x,a as b}from"./ContextualHelpTrigger-BfS-lIFj.js";import{B as h}from"./Button-BA5_aaZE.js";import{T as F}from"./Text-CX0dnSU4.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Brjsz3RP.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./Activity-D0VzS_Xj.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./IconChevronDown-CJpdgLSM.js";import"./IconChevronUp-Cq8tLTp9.js";import"./IconMinus-BFUcuDWR.js";import"./IconPlus-CIWM42cg.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./Button-6mLbsxm5.js";import"./utils-DAXmWa5w.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7tIPXbfR.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./FieldError-Cxb9ZjML.js";import"./browser-RW8IAkpU.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./SelectionIndicator-vxn3ib0k.js";import"./useFormValidation-CD-qIFlG.js";import"./useSpinButton-9mQA_vpd.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./useFormReset-Co6bkbVB.js";import"./useTextField-CSw7_eNz.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./ariaLive-DoOsJYhU.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DpVgPae0.js";import"./Popover-Bnk-bUnY.js";import"./OverlayTrigger-BsTWTOxj.js";import"./IconInfo-C432apET.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./EmulatedBoldText-st1IlPV2.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Ar as __namedExportsOrder,yr as default};
