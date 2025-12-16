import{j as r}from"./iframe-m11uA8ph.js";import{N as o}from"./NumberField-COpt-9fQ.js";import{L as t}from"./Label-C80bgPDj.js";import{F as c}from"./FieldDescription-CZNBqhnU.js";import{F as g}from"./FieldError-DSWXJfK8.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dt7v5TkY.js";import{B as h}from"./Button-Dypt8iw9.js";import{T as F}from"./Text-C8eG2T-4.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BhKi7qXb.js";import"./flowComponent-BWpYHXve.js";import"./index-bz12lFZh.js";import"./clsx-B-dksMZM.js";import"./index-Cy6hiSze.js";import"./IconApp-DUFlag-8.js";import"./remote-D5wxRFjH.js";import"./IconChevronDown-BaoYQ2TJ.js";import"./IconChevronUp-Ma3SJyVc.js";import"./IconMinus-Z0s893hH.js";import"./IconPlus-B1uJM_pz.js";import"./useControlledHostValueProps-BPdzbdZO.js";import"./Button-Hg1-qkLa.js";import"./utils-B2Atf1IZ.js";import"./ProgressBar-C1zZy1Lx.js";import"./Label-BUyu-zI1.js";import"./Hidden-BdAfB0qw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BIKmTmt-.js";import"./context-CT-J1WHN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D0Bh9t0W.js";import"./useFocus-DtmXh1uW.js";import"./useFocusRing-faXrGzgs.js";import"./useFocusable-BsiT1idP.js";import"./FieldError-BiQycVeh.js";import"./Text-CHaozABk.js";import"./Form-CFmmdLEh.js";import"./Group-CiFhizhu.js";import"./Input-ChfHUhhf.js";import"./useControlledState-CQIt1v1r.js";import"./useFormValidation-dI-EyrI5.js";import"./useSpinButton-Ba1zgatk.js";import"./useLocalizedStringFormatter-D5x5gorP.js";import"./useFormReset-CdvwVVbr.js";import"./useEvent-DarMwBx2.js";import"./useTextField-BUjD2wuQ.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BFD4weFl.js";import"./Popover-DAWJqysh.js";import"./OverlayContextProvider-CUWJ5C28.js";import"./context-BDVCp3x_.js";import"./useStatic-BIf93y4q.js";import"./Dialog-Dzvm1uhq.js";import"./RSPContexts-CBB4rOO8.js";import"./OverlayArrow-DhFl9stJ.js";import"./Collection-DuF4MxNY.js";import"./CollectionBuilder-SD0NxqFv.js";import"./SelectionIndicator-DxPJbj4p.js";import"./Separator-IY7J1-ik.js";import"./SelectionManager-mPOWfQXK.js";import"./useCollator-DrH01YYh.js";import"./FocusScope-DjZtu4PZ.js";import"./VisuallyHidden-BQh9j932.js";import"./useOverlayController-ChyiSk8n.js";import"./OverlayTrigger-DKPQhf9L.js";import"./IconInfo-B54pVzu5.js";import"./IconX-1BBDmAKp.js";import"./IconCheck-DjytHR08.js";import"./LoadingSpinner-DVUozLgf.js";import"./ariaLive-CqaAz1_k.js";import"./browser-BsJUI2_B.js";import"./EmulatedBoldText-Dm9yhtB7.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
