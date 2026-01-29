import{j as r}from"./iframe-CdVpWnc8.js";import{N as o}from"./NumberField-DsQzWAPr.js";import{L as t}from"./Label-CQQzXuOB.js";import{F as c}from"./FieldDescription-CO9NCU0r.js";import{F as g}from"./FieldError-0fRgmDO9.js";import{C as x,a as b}from"./ContextualHelpTrigger-C-FdhOOn.js";import{B as h}from"./Button-BYd_Eo9F.js";import{T as F}from"./Text-KDInGMjK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-pH8UQhzW.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./useControlledHostValueProps-CZNxzonQ.js";import"./Button-skPPmItL.js";import"./utils-ClIic5nH.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./context-Bg-StFGN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./FieldError-U_T6R5BY.js";import"./Text-DmePsxpx.js";import"./Form-BAj6LeSM.js";import"./Group-B1_lIqzJ.js";import"./Input-CCUGOCeS.js";import"./useControlledState-B7ztCH5k.js";import"./useFormValidation-5isdk9bY.js";import"./useSpinButton-BUGyI61e.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./useFormReset-D5EHipFr.js";import"./useEvent-lhMNtMgY.js";import"./useTextField-c4bMHwAM.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./Popover-CKAofXvl.js";import"./useOverlayController-BFg7GYyz.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./OverlayTrigger-DZLdxrfo.js";import"./LoadingSpinner-CjZME6JA.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
