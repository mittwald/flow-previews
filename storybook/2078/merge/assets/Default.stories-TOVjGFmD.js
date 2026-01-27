import{j as r}from"./iframe-kP2HEfFS.js";import{N as o}from"./NumberField-jxxdBmVO.js";import{L as t}from"./Label-o-9raADe.js";import{F as c}from"./FieldDescription-BziMx8Bm.js";import{F as g}from"./FieldError-CJUuAB6W.js";import{C as x,a as b}from"./ContextualHelpTrigger-qxifvWEU.js";import{B as h}from"./Button-D2SKyW-T.js";import{T as F}from"./Text-DmTsXHLN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-D28HcwQQ.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./useControlledHostValueProps-B56CX2d2.js";import"./Button-BPAnAcar.js";import"./utils-C12UPk0k.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./context-C1J5EAXU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./FieldError-BL6ZnBFp.js";import"./Text-Bt0sFzeR.js";import"./Form-D51h5Mwy.js";import"./Group-kUVC2JK5.js";import"./Input-pH48-oWo.js";import"./useControlledState-K2EmMrc1.js";import"./useFormValidation-CKIaBDhF.js";import"./useSpinButton-CT-PSPj_.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./useFormReset-BTQYEics.js";import"./useEvent-BZyKNwjW.js";import"./useTextField-G-5KfczL.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./Popover-rKvPy3vS.js";import"./useOverlayController-BKD7nFkO.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./OverlayContextProvider-BizSMrSr.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./OverlayTrigger-iZasDHkJ.js";import"./LoadingSpinner-DqLZcArG.js";import"./browser-CLBqp6VR.js";import"./EmulatedBoldText-DuA7OeuM.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
