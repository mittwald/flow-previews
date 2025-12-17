import{j as r}from"./iframe-DnYi-t8H.js";import{N as o}from"./NumberField-72cVf7vB.js";import{L as t}from"./Label-DliS2X1j.js";import{F as c}from"./FieldDescription-Dv0mKlK_.js";import{F as g}from"./FieldError-9-oFldGv.js";import{C as x,a as b}from"./ContextualHelpTrigger-jwppJyOX.js";import{B as h}from"./Button-CGm1W1qT.js";import{T as F}from"./Text-Bl1v2nei.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BC1W_qCr.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./clsx-B-dksMZM.js";import"./index-B9w1U9jw.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconChevronDown-CS_afpu-.js";import"./IconChevronUp-CUSrUhPL.js";import"./IconMinus-CT0Ta-Yw.js";import"./IconPlus-Bcop-y2x.js";import"./useControlledHostValueProps-CY46Idh6.js";import"./Button-DvsL5VIA.js";import"./utils-DErHybyt.js";import"./ProgressBar-C0arnLiQ.js";import"./Label-DpP4Z3U4.js";import"./Hidden-D2dwjMI8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CvNtERHu.js";import"./context-BormPWP-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BSFKAxA8.js";import"./useFocus-Cp5_bDzt.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocusable-CJcfCTZ3.js";import"./FieldError-DFN_xfpl.js";import"./Text-CnHQzzWa.js";import"./Form-BNVSNvMr.js";import"./Group-trRaFn9q.js";import"./Input-Ci5DOXXh.js";import"./useControlledState-CUB7XdW4.js";import"./useFormValidation-D4Tsj5aM.js";import"./useSpinButton-CdXuuupI.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./useFormReset-CY2BFsrw.js";import"./useEvent-BzaRCHg1.js";import"./useTextField-DyhgGonc.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CDad_7H2.js";import"./Popover-BLsbaJHt.js";import"./OverlayContextProvider-B_Yv-het.js";import"./context-EfU6UTnF.js";import"./useStatic-nPTr3XXM.js";import"./Dialog-_g0NQG0c.js";import"./RSPContexts-fnRhq3x5.js";import"./OverlayArrow-Cdm9aZ0d.js";import"./Collection-Dl9RCK9z.js";import"./CollectionBuilder-Dz2l6Qz0.js";import"./SelectionIndicator-B3bHR6It.js";import"./Separator-DF_Ka3NA.js";import"./SelectionManager-D2Yq1xXP.js";import"./useCollator-b7BSiHgL.js";import"./FocusScope-CymXO5HE.js";import"./VisuallyHidden-BnpIJKhq.js";import"./useOverlayController-C4BihEJv.js";import"./OverlayTrigger-CMvzQfjH.js";import"./IconInfo-_QICPALr.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./browser-Cx51Q07l.js";import"./EmulatedBoldText-C_7kGQpM.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
