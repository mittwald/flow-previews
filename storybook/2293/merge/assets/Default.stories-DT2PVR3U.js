import{j as r}from"./iframe-BBHdjMJ6.js";import{N as o}from"./NumberField-CwquDuiB.js";import{L as t}from"./Label-D4z-eNsD.js";import{F as c}from"./FieldDescription-C-QWZBIG.js";import{F as g}from"./FieldError-DdPPmb_Z.js";import{C as x,a as b}from"./ContextualHelpTrigger-KvdUgcXJ.js";import{B as h}from"./Button-P5io5pgW.js";import{T as F}from"./Text--O-2RTYx.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DcHfvLKR.js";import"./flowComponent-Dr_ijNQm.js";import"./index-DnL9UocU.js";import"./clsx-B-dksMZM.js";import"./index-FWsSj9e8.js";import"./IconWarning-CyXtdbqA.js";import"./remote-BykRkK4-.js";import"./useControlledHostValueProps-Bh4DAuTR.js";import"./Button-DU6B0w55.js";import"./utils-gePwv3Li.js";import"./ProgressBar-C-Wzcy4_.js";import"./Label-Cq91lcPj.js";import"./Hidden-DJEpRFXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDbjeNSC.js";import"./context-XjgBcoVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BicAkDgM.js";import"./useFocus-CRClO8Jv.js";import"./useFocusRing-ClLYF0Wy.js";import"./useFocusable-CfkxnlZA.js";import"./FieldError-D_l7_28D.js";import"./Text-CkngT02A.js";import"./Form-Dur_LiI2.js";import"./Group-BKul3vV0.js";import"./Input-a6j3yjSB.js";import"./useControlledState-CTrYQ-In.js";import"./useFormValidation-jj6Fwru_.js";import"./useSpinButton-towavnni.js";import"./useLocalizedStringFormatter-BwLVFU66.js";import"./useFormReset-CMCffA9I.js";import"./useEvent-0gy1gNIh.js";import"./useTextField-BtK0z8dg.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Du4ye3-W.js";import"./AlertIcon-BGgK2Oqf.js";import"./Popover-ZlNB2WlB.js";import"./useOverlayController-CB3s63Hy.js";import"./context-DiIk_s_n.js";import"./useStatic-C9-mjYGz.js";import"./OverlayContextProvider-Co9CnEOm.js";import"./Dialog-BeRC8Qw9.js";import"./RSPContexts-C5-K-EZi.js";import"./OverlayArrow-D6Rp8cyC.js";import"./Collection-C6Dl6i0H.js";import"./CollectionBuilder-DfMW8xNP.js";import"./SelectionIndicator-DJhqJXB-.js";import"./Separator-Dx2ExPSk.js";import"./SelectionManager-CKq6y8XV.js";import"./useCollator-CP6m8uNZ.js";import"./FocusScope-0pM5bnV4.js";import"./VisuallyHidden-D-7oSl-x.js";import"./OverlayTrigger-xwaQ_4qt.js";import"./LoadingSpinner-Crr5qNPb.js";import"./browser-BpCzgQab.js";import"./EmulatedBoldText-DKBJ0QzH.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
