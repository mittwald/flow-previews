import{j as r}from"./iframe-JHVlk64D.js";import{N as o}from"./NumberField-ByfNYM4k.js";import{L as t}from"./Label-BVSjd_Ef.js";import{F as c}from"./FieldDescription-CHp3BkQc.js";import{F as g}from"./FieldError-DkKHEf-8.js";import{C as x,a as b}from"./ContextualHelpTrigger-B7cBolBP.js";import{B as h}from"./Button-BViHWx5D.js";import{T as F}from"./Text-D35H-2yr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Dm_EHwx7.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./IconWarning-D57fWT31.js";import"./remote-CdnDmctD.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./Button-CV338ZHI.js";import"./utils-D9FbIhNL.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./context-ArJ603f0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dt-0MkOU.js";import"./useFocus-Cks5m45E.js";import"./platform-Dz8CwCz0.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocusable-vxzxlCI8.js";import"./FieldError-CB6gvg8S.js";import"./Text-BPDMqDL5.js";import"./Form-C3MOdK6R.js";import"./Group-BpUbtBKw.js";import"./Input-D75LvDxG.js";import"./useControlledState-BK0dEcU9.js";import"./useFormValidation-BHVZgCg5.js";import"./useSpinButton-B336AnrV.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./useFormReset-CuVjUJoL.js";import"./useEvent-CalNBU8C.js";import"./useTextField-D6sOxTHB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./Popover-KhMzeTk6.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./Dialog-DIqACfnD.js";import"./RSPContexts-BaSES6Qq.js";import"./OverlayArrow-DI9sbb4v.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./OverlayTrigger-CMrYL6HW.js";import"./LoadingSpinner-Bl1fRewj.js";import"./browser-CH4iE_n_.js";import"./EmulatedBoldText-DwNSiPCb.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
