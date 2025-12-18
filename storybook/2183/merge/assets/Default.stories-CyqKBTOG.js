import{j as r}from"./iframe-C9fRvTrj.js";import{N as o}from"./NumberField-DuKeb2QP.js";import{L as t}from"./Label-BRzY6dIy.js";import{F as c}from"./FieldDescription-D93KtgO4.js";import{F as g}from"./FieldError-Bd58Epno.js";import{C as x,a as b}from"./ContextualHelpTrigger-71Am93L7.js";import{B as h}from"./Button-BYUXEkA_.js";import{T as F}from"./Text-D323xmXD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-jGlg5Icl.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./clsx-B-dksMZM.js";import"./index-CLvMUAwA.js";import"./IconChevronDown-D_WjmewV.js";import"./remote-BH-MD2MY.js";import"./IconChevronUp-CTRpFAKb.js";import"./IconMinus-6If3rLGA.js";import"./IconPlus-IOGsAeee.js";import"./useControlledHostValueProps-DvGioMkI.js";import"./Button-CwWpYEN0.js";import"./utils-CPkfOZj3.js";import"./ProgressBar-DI2IDnVu.js";import"./Label-DetJ9FyC.js";import"./Hidden-D46P9k-k.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./context-Bv4btMDO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./FieldError-BSiYpFWr.js";import"./Text-BRNikD3K.js";import"./Form-FOSkHwoF.js";import"./Group-DtY3YVtI.js";import"./Input-Cvlim89t.js";import"./useControlledState-BGzazcEz.js";import"./useFormValidation-BLFhZbJU.js";import"./useSpinButton-D9vYyTc5.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./useFormReset-CS_NLM25.js";import"./useEvent-CG8oG6I6.js";import"./useTextField-BpilKR79.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-Cax3VcTl.js";import"./Popover-DDuwRsLL.js";import"./OverlayContextProvider-CHFdaBg3.js";import"./context-CrKYMuPA.js";import"./useStatic-0FUtvL5U.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./OverlayArrow-iEWyRd5r.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./useOverlayController-MVFXohJh.js";import"./OverlayTrigger-DYVHY-Wc.js";import"./IconInfo-DW6nA0fy.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./browser-CUSAF5aW.js";import"./EmulatedBoldText-CPA2fMYQ.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
