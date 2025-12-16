import{j as r}from"./iframe-jqgUclr4.js";import{N as o}from"./NumberField-sxReJ5mQ.js";import{L as t}from"./Label-B_zOvN70.js";import{F as c}from"./FieldDescription-BpCIxkVt.js";import{F as g}from"./FieldError-C5F3bfgz.js";import{C as x,a as b}from"./ContextualHelpTrigger-BZva7YNv.js";import{B as h}from"./Button-Df2EGOwf.js";import{T as F}from"./Text-B-prTEID.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-C0Pt2yH0.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./clsx-B-dksMZM.js";import"./index-KptOOerd.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconChevronDown-B9Uj9rRW.js";import"./IconChevronUp--xXx7H3_.js";import"./IconMinus-B0I6QV1Y.js";import"./IconPlus-_L-EdiBf.js";import"./useControlledHostValueProps-BbYne8gB.js";import"./Button-BXhO4gzH.js";import"./utils-5IALZqjS.js";import"./ProgressBar-BcVh39-H.js";import"./Label-BRPoLfQP.js";import"./Hidden-DkAwJJ8c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./context-BwRvgyRH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./FieldError-DSvmLOVG.js";import"./Text-tTF8cKGK.js";import"./Form-BMNY4Kb2.js";import"./Group-N_eJQU5l.js";import"./Input-Dn37EEpO.js";import"./useControlledState-Cu6J25_e.js";import"./useFormValidation-BWQF9tl0.js";import"./useSpinButton-2ePtc_EQ.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./useFormReset-BuHZrSbJ.js";import"./useEvent-DIea5lRE.js";import"./useTextField-BDtQfqtc.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BMQW6rjZ.js";import"./Popover-DoC5dA8I.js";import"./OverlayContextProvider-Couwo4Zm.js";import"./context-BZOmdfdu.js";import"./useStatic-Hn0frKun.js";import"./Dialog-MLUvkWk2.js";import"./RSPContexts-BB1SZI7P.js";import"./OverlayArrow-ERqZtQI-.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./SelectionManager-Bd2Xd50m.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./useOverlayController-BJtvb9v-.js";import"./OverlayTrigger-DYf82eWt.js";import"./IconInfo-Fmslxo20.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./browser-EX5vhkWE.js";import"./EmulatedBoldText-B9oQd6gk.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const vr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,vr as __namedExportsOrder,Ur as default};
