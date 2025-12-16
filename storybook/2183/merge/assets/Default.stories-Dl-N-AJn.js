import{j as r}from"./iframe-ChZoSAk9.js";import{N as o}from"./NumberField-BL_WH8Yd.js";import{L as t}from"./Label-BtQBKk3e.js";import{F as c}from"./FieldDescription-C8pMBaks.js";import{F as g}from"./FieldError-D0FcbU4f.js";import{C as x,a as b}from"./ContextualHelpTrigger-BN-mU_uj.js";import{B as h}from"./Button-igkSssls.js";import{T as F}from"./Text-DeId_uwd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CTbZHLtq.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./clsx-B-dksMZM.js";import"./index-0x3bxhbi.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconChevronDown-CJhDZ6B_.js";import"./IconChevronUp-Mzb7Z-19.js";import"./IconMinus-Bd-huTvL.js";import"./IconPlus-BIH__R1o.js";import"./useControlledHostValueProps-COJ6lWMZ.js";import"./Button-BAWw_35t.js";import"./utils-3orXHcy8.js";import"./ProgressBar-Bd4jHgjB.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./context-CKHtHj1o.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./FieldError-krJUZi9_.js";import"./Text-DWCX6muZ.js";import"./Form-DiR4hcFZ.js";import"./Group-BO5rtvFF.js";import"./Input-C1UIQQj8.js";import"./useControlledState-CXwLHBKW.js";import"./useFormValidation-DrPCugNK.js";import"./useSpinButton-BQexWXlG.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./useFormReset-DlW87ulD.js";import"./useEvent-D5qx-uIw.js";import"./useTextField-BJpggVQl.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-bNuP_yaN.js";import"./Popover-DbbRxBDt.js";import"./OverlayContextProvider-CAospS2T.js";import"./context-DK_eOJFA.js";import"./useStatic-YkfQLHoK.js";import"./Dialog-B1ggtFGC.js";import"./RSPContexts-BuIIeKa7.js";import"./OverlayArrow-BwEdTwQI.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./useOverlayController-Dp1HHV7H.js";import"./OverlayTrigger-Do-fZ53q.js";import"./IconInfo-DHgWbHqo.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
