import{j as r}from"./iframe-CcUuYubL.js";import{N as o}from"./NumberField-DjC-DoxF.js";import{L as t}from"./Label-L2Rin-A2.js";import{F as c}from"./FieldDescription-ADxnhLyC.js";import{F as g}from"./FieldError-BP_boiRG.js";import{C as x,a as b}from"./ContextualHelpTrigger-CIsf0tZR.js";import{B as h}from"./Button-hsF3uCN8.js";import{T as F}from"./Text-DY9Wsurd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DfHGJXnI.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./clsx-B-dksMZM.js";import"./index-C6oVqO8J.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./useControlledHostValueProps-BYMfCzES.js";import"./Button-D-Fqqf34.js";import"./utils-B3A9CwVo.js";import"./ProgressBar-Cx5KzXiF.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-4jeMa91n.js";import"./context-BiAKFHSE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BQdte7r9.js";import"./useFocus-tKANsd5T.js";import"./useFocusRing-CorDS6JG.js";import"./useFocusable-D38UQMpJ.js";import"./FieldError-BzVPBYcu.js";import"./Text-B0FzOrzN.js";import"./Form-D1MNyHLC.js";import"./Group-C9hqVmoY.js";import"./Input-BEUYik2Y.js";import"./useControlledState-Cd7zGKC9.js";import"./useFormValidation-ey4MT9ZA.js";import"./useSpinButton-jXT_XycC.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";import"./useFormReset-CtXF-ibf.js";import"./useEvent-BHYxhhiC.js";import"./useTextField-hY4MTqvA.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-DmUHZ-tA.js";import"./useOverlayController-fROC4phl.js";import"./context-BjvrdVaN.js";import"./useStatic-DtEAcyvY.js";import"./OverlayContextProvider-Br3sAK21.js";import"./Dialog-mDFWR8fO.js";import"./RSPContexts-CCIxlK1Q.js";import"./OverlayArrow-LMNtsg17.js";import"./Collection-DrwZoIdd.js";import"./CollectionBuilder-B_ze3f0a.js";import"./SelectionIndicator-DgBShxS7.js";import"./Separator-CC01ZKOL.js";import"./SelectionManager-Cr3dwni9.js";import"./useCollator-z0uw1QeA.js";import"./FocusScope-BV2sx_oo.js";import"./VisuallyHidden-DlLFaNIr.js";import"./OverlayTrigger-DwWDWrw1.js";import"./LoadingSpinner-BSrbl83B.js";import"./browser-DepVz5kj.js";import"./EmulatedBoldText-IgYc1KUF.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
