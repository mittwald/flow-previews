import{j as r}from"./iframe-CgWIZppF.js";import{N as o}from"./NumberField-CPXLN3sg.js";import{L as t}from"./Label-8Ls1PMPy.js";import{F as c}from"./FieldDescription-k5usNxcY.js";import{F as g}from"./FieldError-Dr7a0W2N.js";import{C as x,a as b}from"./ContextualHelpTrigger-CfC9NVkJ.js";import{B as h}from"./Button-B2z86NVg.js";import{T as F}from"./Text-B7pZrZSG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BZyKlvwh.js";import"./flowComponent-n6uWZ_Yk.js";import"./index-DK9ZOg9l.js";import"./clsx-B-dksMZM.js";import"./index-D8vpbAff.js";import"./IconWarning-CJrmQcXC.js";import"./remote-DVGHPh_8.js";import"./useControlledHostValueProps-NWqFGbi9.js";import"./Button-C_sZyB84.js";import"./utils-CqFMFg3g.js";import"./ProgressBar-CMi9IWJp.js";import"./Label-Bv5UhUCK.js";import"./Hidden-td7Ld2aU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMBsm_3O.js";import"./context-DG5uy-SY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoCxa2CI.js";import"./useFocus-ClWOKyYK.js";import"./useFocusRing-pEE2Rwro.js";import"./useFocusable-Dp8viQw7.js";import"./FieldError-xtpbDfud.js";import"./Text-C3p6npBl.js";import"./Form-BaHtPP4t.js";import"./Group-C5HUn3mH.js";import"./Input-jwk6Ly15.js";import"./useControlledState-ii3oWk08.js";import"./useFormValidation-DKxVhdCK.js";import"./useSpinButton-D9Bo4_pi.js";import"./useLocalizedStringFormatter-6cAQP3rP.js";import"./useFormReset-BEtHvHxA.js";import"./useEvent-C_2qUUzn.js";import"./useTextField-CrxwcKhu.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-1Hxb36ee.js";import"./useOverlayController-CUfZ3j8o.js";import"./context-B2MrOWQ_.js";import"./useStatic-CFKrTcwu.js";import"./OverlayContextProvider-BJpURIjJ.js";import"./Dialog-R-LZrA7I.js";import"./RSPContexts-CAKQ_-J3.js";import"./OverlayArrow-CNLX7-2g.js";import"./Collection-DXGs2lV9.js";import"./CollectionBuilder-CoS6mLvq.js";import"./SelectionIndicator-xmkzz9vO.js";import"./Separator-pxi-Jkjv.js";import"./SelectionManager-BFnz3p05.js";import"./useCollator-BRse2HwO.js";import"./FocusScope-CYlUipby.js";import"./VisuallyHidden-BDyUoc3v.js";import"./OverlayTrigger-Ch4_MWoX.js";import"./LoadingSpinner-nmzfTpX1.js";import"./browser-C8d3FCf4.js";import"./EmulatedBoldText-iMswxomY.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
