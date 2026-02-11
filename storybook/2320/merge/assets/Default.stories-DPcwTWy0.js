import{j as r}from"./iframe-BRGIT6aC.js";import{N as o}from"./NumberField-CmNSaHe7.js";import{L as t}from"./Label-DYHgdjdj.js";import{F as c}from"./FieldDescription-BhKmM-2J.js";import{F as g}from"./FieldError-BPfKA2u4.js";import{C as x,a as b}from"./ContextualHelpTrigger-DxD9VKZc.js";import{B as h}from"./Button-CQ_f9ZVl.js";import{T as F}from"./Text-RxDad6dn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CMRD4Pyo.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./useControlledHostValueProps-BPfEHTeU.js";import"./Button-BCc16_FM.js";import"./utils-D-ssFu49.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./context-C5al0DRJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CGLZGzkl.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./FieldError-f7o5-LTX.js";import"./Text-CBpyQBbE.js";import"./Form-97YOGsKi.js";import"./Group-COVCD_be.js";import"./Input-CEj_QPsV.js";import"./useControlledState-C2xaeP2Y.js";import"./useFormValidation-D-IfNlYy.js";import"./useSpinButton-BN7kr9uz.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./useFormReset-CXZmek7W.js";import"./useEvent-C0jUKnCT.js";import"./useTextField-BXyTAsaB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";import"./Popover-D5tJ855F.js";import"./useOverlayController-BV2mbNRJ.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./OverlayContextProvider-BehX_G0U.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./OverlayTrigger-DrqrLZow.js";import"./LoadingSpinner-BjEAsOxv.js";import"./browser-BYxlW31W.js";import"./EmulatedBoldText-D5rj6KVU.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
