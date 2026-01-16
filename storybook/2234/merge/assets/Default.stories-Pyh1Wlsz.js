import{j as r}from"./iframe-DZ4teeW0.js";import{N as o}from"./NumberField-DxIlSafi.js";import{L as t}from"./Label-DoWn6F4v.js";import{F as c}from"./FieldDescription-wBHtE-uB.js";import{F as g}from"./FieldError-AZ-rkViQ.js";import{C as x,a as b}from"./ContextualHelpTrigger-ymVarl2_.js";import{B as h}from"./Button-DKoFnNBZ.js";import{T as F}from"./Text-C4YBtGrU.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-D07Wu5hH.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./clsx-B-dksMZM.js";import"./index-hJtfnrYv.js";import"./IconWarning-BMXzPSbA.js";import"./remote-C7mA51oY.js";import"./useControlledHostValueProps-uUZrCOOz.js";import"./Button-BNevv18m.js";import"./utils-CmR_RyV0.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./context-CZC3VL3b.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DM-2A3ZD.js";import"./useFocus-DPzONbd_.js";import"./useFocusRing-Bi_KX66p.js";import"./useFocusable-V-w09cqm.js";import"./FieldError-DkoCPEDN.js";import"./Text-BkVlga5W.js";import"./Form-DzpbW5Q4.js";import"./Group-CcFwVgnp.js";import"./Input-D0qY3wir.js";import"./useControlledState-CE05dG3o.js";import"./useFormValidation-DQHMrpfA.js";import"./useSpinButton-CCOAGhtu.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./useFormReset-CHb94_Ie.js";import"./useEvent-Rvr_SgMv.js";import"./useTextField-BGWNueLQ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";import"./Popover-O3EK8S3M.js";import"./useOverlayController-CclcYwrc.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./OverlayContextProvider-Bp1oUVk4.js";import"./Dialog-mp_BsC5B.js";import"./RSPContexts-BvqxEhTE.js";import"./OverlayArrow-DMnQ82Lw.js";import"./Collection-w_out5sE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./SelectionIndicator-C2FrsSd1.js";import"./Separator-Dh-vjBlE.js";import"./SelectionManager-W-Kl84XM.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";import"./OverlayTrigger-DrQSWpcn.js";import"./LoadingSpinner-DJRFuNH9.js";import"./browser-BOIGtlkn.js";import"./EmulatedBoldText-D386c9ln.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
