import{j as r}from"./iframe-pec-daIN.js";import{N as o}from"./NumberField-mTLKMGbc.js";import{L as t}from"./Label-CElVOifK.js";import{F as c}from"./FieldDescription-C3yB_B9f.js";import{F as g}from"./FieldError-r6Iz548x.js";import{C as x,a as b}from"./ContextualHelpTrigger-C8o2AL-5.js";import{B as h}from"./Button-TbsWowXg.js";import{T as F}from"./Text-KadZ5_Og.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BVaTpDhT.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./IconWarning-BNWGnhvf.js";import"./remote-CL_x9DF5.js";import"./useControlledHostValueProps-DES1YIm6.js";import"./Button-BVdTMk7w.js";import"./utils-DgvXfbTX.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./context-6wXKo3vr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXePSkUY.js";import"./useFocus-8lECnDuB.js";import"./useFocusRing-D1bapTtD.js";import"./useFocusable-DHeceSRU.js";import"./FieldError-DRdVsyAa.js";import"./Text-ChVSp7Zj.js";import"./Form-D9urj6j4.js";import"./Group-DrdjXHuf.js";import"./Input-nceBJ8Dt.js";import"./useControlledState-C8wEjdVb.js";import"./useFormValidation-Cw4fPepy.js";import"./useSpinButton-C_YuM6x8.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./useFormReset-DlmAX50c.js";import"./useEvent-TrAkXyi-.js";import"./useTextField-DMccosFc.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";import"./Popover-DLd5G0Ef.js";import"./useOverlayController-BZ8CrQho.js";import"./context-CSF0VmIA.js";import"./useStatic-DtKIUYIw.js";import"./OverlayContextProvider-DRuVjJJZ.js";import"./Dialog-CHeMFU-y.js";import"./RSPContexts-CXn4NsJp.js";import"./OverlayArrow-DWFODRfO.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./OverlayTrigger-LLvsqu3e.js";import"./LoadingSpinner-DJdNJN2d.js";import"./browser-CB013lxp.js";import"./EmulatedBoldText-CH8TmYXX.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
