import{j as r}from"./iframe-BrERPjH0.js";import{N as o}from"./NumberField-B92tf3sN.js";import{L as t}from"./Label-CrwXzsx_.js";import{F as c}from"./FieldDescription-6rmHkF1O.js";import{F as g}from"./FieldError-H2u6oDij.js";import{C as x,a as b}from"./ContextualHelpTrigger-BXYHfpVC.js";import{B as h}from"./Button-BwrtrMsn.js";import{T as F}from"./Text-Bge3UWaD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-WOZCxk1N.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./clsx-B-dksMZM.js";import"./index-DzMVKTvo.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconChevronUp-B668N1KS.js";import"./IconMinus-C82BAOMG.js";import"./IconPlus-CoujBPxb.js";import"./useControlledHostValueProps-cnkiYDDE.js";import"./Button-DaDxLfby.js";import"./utils-DSRl4UW4.js";import"./ProgressBar-DcK7zEgl.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./context-DvwVEH9h.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./FieldError-DI8l-yzx.js";import"./Text-CFQd4N__.js";import"./Form-CRLN4oBl.js";import"./Group-D-Zc97xh.js";import"./Input-D0yPZXTG.js";import"./useControlledState-C9HQthZh.js";import"./useFormValidation-sc5NnAzh.js";import"./useSpinButton-D1RTbvLc.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./useFormReset-Bw5L0YJo.js";import"./useEvent-CWpAuNO7.js";import"./useTextField-BeG6791T.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CeY6S6MU.js";import"./Popover-rrZDRUOl.js";import"./OverlayContextProvider-Br7VoKzI.js";import"./context-kHaIXrog.js";import"./useStatic-DyRcj1Uc.js";import"./Dialog-ByWgeyFx.js";import"./RSPContexts-BfqcGdFg.js";import"./OverlayArrow-gzfZyYcK.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./SelectionManager-BZAXigYb.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./useOverlayController-B5SJ3UbO.js";import"./OverlayTrigger-DjPuFV2R.js";import"./IconInfo-B68XsGh2.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./browser-YFSmfPOL.js";import"./EmulatedBoldText-ihVL4TkF.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ur=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,Ur as __namedExportsOrder,Ir as default};
