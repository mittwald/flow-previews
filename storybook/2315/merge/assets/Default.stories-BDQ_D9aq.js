import{j as r}from"./iframe-BKpTcuej.js";import{N as o}from"./NumberField-M0xdOiqC.js";import{L as t}from"./Label-sjxWv79d.js";import{F as c}from"./FieldDescription-B8eaQXaP.js";import{F as g}from"./FieldError-BmJ7-crS.js";import{C as x,a as b}from"./ContextualHelpTrigger-DmwbxD1V.js";import{B as h}from"./Button-CHR5Lto_.js";import{T as F}from"./Text-ChzZQXaT.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-AXq55mny.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./clsx-B-dksMZM.js";import"./index-DwEhfHus.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./useControlledHostValueProps-BTfwsBK-.js";import"./Button-WezQgFMH.js";import"./utils-BuTqHWUg.js";import"./ProgressBar-gtPQqryh.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLAZgdhb.js";import"./context-Bt___W0l.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwvZqs_N.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useFocusable-8gC31DNg.js";import"./FieldError-Bf7-_15k.js";import"./Text-_5F14b0c.js";import"./Form-fml-60gz.js";import"./Group-aKg9TIpc.js";import"./Input-u4H7iO9I.js";import"./useControlledState-C61mrJlx.js";import"./useFormValidation-6yUCZE8C.js";import"./useSpinButton-C5wEpcm8.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./useFormReset-DjxTrJRS.js";import"./useEvent-DisABsaa.js";import"./useTextField-DFYLeiX4.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";import"./Popover-pxlmKNyd.js";import"./useOverlayController-C8fdBT6C.js";import"./context-Do1O8LUQ.js";import"./useStatic-D1T02rpq.js";import"./OverlayContextProvider-DjenE3bO.js";import"./Dialog-CnIAbR2d.js";import"./RSPContexts-CNLAcvzw.js";import"./OverlayArrow-BRMGn8Rx.js";import"./Collection-DBuLuq_j.js";import"./CollectionBuilder-BAfr6v0X.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./Separator-DsMLA7TC.js";import"./SelectionManager-DoV1m8OU.js";import"./useCollator-28QKhnaq.js";import"./FocusScope-CaneGuiO.js";import"./VisuallyHidden-DjSqpFWl.js";import"./OverlayTrigger-C56VcKX9.js";import"./LoadingSpinner-CSX_cmFV.js";import"./browser-DdR_cYXU.js";import"./EmulatedBoldText-DTp9riJA.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
