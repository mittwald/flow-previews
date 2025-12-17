import{j as r}from"./iframe-CuoLN6Ak.js";import{N as o}from"./NumberField-CouW-8Xu.js";import{L as t}from"./Label-CaF-n4li.js";import{F as c}from"./FieldDescription-B83QXWUS.js";import{F as g}from"./FieldError-BXdT0ENq.js";import{C as x,a as b}from"./ContextualHelpTrigger-rUevOoil.js";import{B as h}from"./Button-Cfn_KBZi.js";import{T as F}from"./Text-DdChUKUI.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CpAAuxDf.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./clsx-B-dksMZM.js";import"./index-BaIyL5kt.js";import"./IconApp-BDJ8KTSO.js";import"./remote-JKpMdsKf.js";import"./IconChevronDown-4snbGUoC.js";import"./IconChevronUp-BvdxLkuM.js";import"./IconMinus-BCb9Sxkp.js";import"./IconPlus-KR3tLT6u.js";import"./useControlledHostValueProps-BqZEo0r9.js";import"./Button-D6bHbdkl.js";import"./utils-C2NHa3pd.js";import"./ProgressBar-DQXQN5uc.js";import"./Label-D3KIvHQC.js";import"./Hidden-DgR9vk0-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./context-DM2sT4iG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./FieldError-zdBOb0_m.js";import"./Text-C8IviCt6.js";import"./Form-BoKLrbzS.js";import"./Group-y2y6-45-.js";import"./Input-CSQeI68y.js";import"./useControlledState-ItXXMvHS.js";import"./useFormValidation-BeXwm1Ez.js";import"./useSpinButton-BkARdxK_.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./useFormReset-Cj_2aRsw.js";import"./useEvent-CGtQDWm6.js";import"./useTextField-DuTAd_dm.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CxUQbc1u.js";import"./Popover-DXwzYIUP.js";import"./OverlayContextProvider-DODbX18A.js";import"./context-Cxg_dyF2.js";import"./useStatic-DF3kEdZS.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./OverlayArrow-C99iKRaY.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";import"./useOverlayController-BQNvHxuF.js";import"./OverlayTrigger-BBfxPtJK.js";import"./IconInfo-D2rw_1io.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./browser-t1e5k5Lt.js";import"./EmulatedBoldText-BNHG0Gfg.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
