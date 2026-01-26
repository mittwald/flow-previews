import{j as r}from"./iframe-ICCBaEZ0.js";import{N as o}from"./NumberField-DQqtfSfv.js";import{L as t}from"./Label-CdS4JTo9.js";import{F as c}from"./FieldDescription-CTX2Nbt4.js";import{F as g}from"./FieldError-CXiPiawI.js";import{C as x,a as b}from"./ContextualHelpTrigger-kLpHcv6Z.js";import{B as h}from"./Button-BPUjkcWl.js";import{T as F}from"./Text-wotACWdr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-C2gLyH5u.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./useControlledHostValueProps--FOjf0QU.js";import"./Button-CEB885Bq.js";import"./utils-Bdyed02U.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./FieldError-Uso8nKHu.js";import"./Text-6VRpzXYD.js";import"./Form-Dqb0_Mn-.js";import"./Group-Kcal-yRn.js";import"./Input-CQyHZiU6.js";import"./useControlledState-0-xiytms.js";import"./useFormValidation-BK0HiA-u.js";import"./useSpinButton-DTXOxlbQ.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./useFormReset-mc9YwuWr.js";import"./useEvent-DVme5dXh.js";import"./useTextField-1ZJA7UcR.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";import"./Popover-BznUFd8V.js";import"./useOverlayController-CTkEh9O7.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./OverlayContextProvider-DutSGNyV.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./OverlayTrigger-CZVSbWDN.js";import"./LoadingSpinner-DZTaEi_R.js";import"./browser-BXZux_wF.js";import"./EmulatedBoldText-CJhsU2oU.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
