import{j as r}from"./iframe-DALg75d7.js";import{N as o}from"./NumberField-Cc7z_ror.js";import{L as t}from"./Label-CllN_pGF.js";import{F as c}from"./FieldDescription-CPnssZ8z.js";import{F as g}from"./FieldError-JMY6vjHT.js";import{C as x,a as b}from"./ContextualHelpTrigger-D1Z_d8HK.js";import{B as h}from"./Button-CxCFU3Sm.js";import{T as F}from"./Text-BfSm9wB3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BaBZIB3g.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./useControlledHostValueProps-Ce6KWhnZ.js";import"./Button-CAn5W5h2.js";import"./utils-CCMGMBS3.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./context-D-SwIuvT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./FieldError-B5AAUQ1i.js";import"./Text-CuJqaQ90.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useControlledState-10c65vgi.js";import"./useFormValidation-jiwCVXG0.js";import"./useSpinButton-BpR069r_.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./useFormReset-D3blZuYj.js";import"./useEvent-BxcVXIUM.js";import"./useTextField-B5pPfAtE.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-DFPDtyNS.js";import"./useOverlayController-CJNm9GBn.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./OverlayContextProvider-BeL-SPbw.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./OverlayTrigger-DY2Hgbuf.js";import"./LoadingSpinner-DKmXkdSk.js";import"./browser-BOjJAEEq.js";import"./EmulatedBoldText-BXgIlIDh.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Rr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Rr as __namedExportsOrder,Or as default};
