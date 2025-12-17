import{j as r}from"./iframe-UtMdsYXa.js";import{N as o}from"./NumberField-BO0VQOnP.js";import{L as t}from"./Label-CXp4zhoD.js";import{F as c}from"./FieldDescription-CycxOvY5.js";import{F as g}from"./FieldError-BmlJMAuy.js";import{C as x,a as b}from"./ContextualHelpTrigger-Cf_ZKb7M.js";import{B as h}from"./Button-pSxy78IN.js";import{T as F}from"./Text-TG940Z8h.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CylG0yj1.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./clsx-B-dksMZM.js";import"./index-BrcrHHEG.js";import"./IconChevronDown-DitnVNWB.js";import"./remote-YAokn8An.js";import"./IconChevronUp-DjcxU7d1.js";import"./IconMinus-BOhysiTq.js";import"./IconPlus-DRQNfNMI.js";import"./useControlledHostValueProps-B7T2q5Ai.js";import"./Button-DZZrikYU.js";import"./utils-43m9YPYy.js";import"./ProgressBar-BxQgVB3L.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./context-BpPaGDcf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";import"./FieldError-BkBhZCre.js";import"./Text-3HTz8ZLb.js";import"./Form-47Gl7tXu.js";import"./Group-DduxZHYS.js";import"./Input-CzvnxGbl.js";import"./useControlledState-DYYNjqGW.js";import"./useFormValidation-BfzGcjKC.js";import"./useSpinButton-BRr8AOXv.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./useFormReset-ZjFHD53Q.js";import"./useEvent-CJ7SBUWT.js";import"./useTextField-CdhqVKev.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-hxBcn6Cd.js";import"./Popover-ClMUWpbW.js";import"./OverlayContextProvider-WN6o_2cy.js";import"./context-BLALRgjO.js";import"./useStatic-CvZMYmSw.js";import"./Dialog-BGnO5-Kp.js";import"./RSPContexts-CAfmMSBB.js";import"./OverlayArrow-DHpPSdaa.js";import"./Collection-5zvqan3L.js";import"./CollectionBuilder-D_G3_Vuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./Separator-BuVWMkAV.js";import"./SelectionManager-DB_XnTm4.js";import"./useCollator-BSunnwIT.js";import"./FocusScope-ZZQ9tzAD.js";import"./VisuallyHidden-DNcxVgpY.js";import"./useOverlayController-BCXLE78B.js";import"./OverlayTrigger-B8jlE4Hb.js";import"./IconInfo-B6FISfBK.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./browser-DFxdAZBn.js";import"./EmulatedBoldText-CWBgkHDb.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
