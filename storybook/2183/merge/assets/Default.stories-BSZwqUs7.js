import{j as r}from"./iframe-CH_aTfEL.js";import{N as o}from"./NumberField-Dfhm_048.js";import{L as t}from"./Label-BqL_a1sm.js";import{F as c}from"./TranslationProvider-CWofhASx.js";import{F as g}from"./FieldError-DGABQFH-.js";import{C as x,a as b}from"./ContextualHelpTrigger-f7AeISbo.js";import{B as h}from"./Button-D53gB1eO.js";import{T as F}from"./Text-BRh_x9bF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-JY3HqOd-.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./Activity-DkWdwXP6.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./IconChevronDown-DVqZDkk2.js";import"./IconChevronUp-B4YHebjG.js";import"./IconMinus-CTSAZjS8.js";import"./IconPlus-Djm2bbkt.js";import"./useControlledHostValueProps-CI7mWjRd.js";import"./Button-B1aqxMhV.js";import"./utils-C8srcrY8.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./FieldError-CHaTpVnh.js";import"./browser-CjAUGP0i.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./SelectionIndicator-CMFVzQc5.js";import"./useFormValidation-qjJTrH9J.js";import"./useSpinButton-DNTXEWKr.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./useFormReset-P8yugG2W.js";import"./useTextField-CGjCcs3_.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./context-DeId9iUj.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./ariaLive-Cw13p-6Q.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DRvJdcN_.js";import"./Popover-mq_MJ5zE.js";import"./OverlayTrigger-5pOe9hS7.js";import"./IconInfo-CiEpJHC7.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./EmulatedBoldText-D1x6Y0F_.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ar=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Ar as __namedExportsOrder,yr as default};
