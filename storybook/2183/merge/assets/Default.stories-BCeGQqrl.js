import{j as r}from"./iframe-nUnY8CpM.js";import{N as o}from"./NumberField-daI4gFtV.js";import{L as t}from"./Label-CarGuai1.js";import{F as c}from"./FieldDescription-CiRWpG91.js";import{F as g}from"./FieldError-Dl4XoXDz.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bw2VGBGE.js";import{B as h}from"./Button-Drav3_ks.js";import{T as F}from"./Text-CKSRxaE3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CwsJxGlb.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./clsx-B-dksMZM.js";import"./index-D5rarCk0.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconChevronUp-DxEMzp96.js";import"./IconMinus-CfFVVBzr.js";import"./IconPlus-BLpLyUlX.js";import"./useControlledHostValueProps-DFslcMmj.js";import"./Button-BQlojcF-.js";import"./utils-DtyHAF7C.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./context-B5Mk59jD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./FieldError-CG7ulvH_.js";import"./Text-4n54moM_.js";import"./Form-DX8kqEOp.js";import"./Group-BykXvQmq.js";import"./Input-B5TNmDN2.js";import"./useControlledState-CaC4m18c.js";import"./useFormValidation-BmCGlg1a.js";import"./useSpinButton-BG_Wc5dG.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./useFormReset-B9MhH15U.js";import"./useEvent-DGx-2GiN.js";import"./useTextField-BpK1hl2r.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BtbJ86A5.js";import"./Popover-DAIMajuO.js";import"./OverlayContextProvider-QZV7xJtt.js";import"./context-CUJwrxJk.js";import"./useStatic-D4OCIKv7.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./useOverlayController-D3ZcYAE3.js";import"./OverlayTrigger-CW0LF_M5.js";import"./IconInfo-BRSoGua_.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
