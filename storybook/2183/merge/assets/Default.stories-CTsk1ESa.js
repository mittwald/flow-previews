import{j as r}from"./iframe-CxIv4jMu.js";import{N as o}from"./NumberField-C6HpRojy.js";import{L as t}from"./Label-B_OvHsx4.js";import{F as c}from"./FieldDescription-BwqMpCOu.js";import{F as g}from"./FieldError-DD8s_Iuw.js";import{C as x,a as b}from"./ContextualHelpTrigger-Ci3fLzs9.js";import{B as h}from"./Button-Bv_lacgK.js";import{T as F}from"./Text-D7X_oIFw.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-gOqU5qjG.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./clsx-B-dksMZM.js";import"./index-4jtxG-aw.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconChevronDown-CbPWV6n3.js";import"./IconChevronUp-Ca9sL2ah.js";import"./IconMinus-e5figboL.js";import"./IconPlus-DBelTaUU.js";import"./useControlledHostValueProps-DABy4eCt.js";import"./Button-FNhyxeGp.js";import"./utils-BWuSdLWz.js";import"./ProgressBar-azejEpMz.js";import"./Label-V3_Oag-T.js";import"./Hidden-BIUsGAI2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./context-XT4iJWgw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./FieldError-B56fKNUE.js";import"./Text-C4fvncMS.js";import"./Form-48q0jMI2.js";import"./Group-SdAlNVRd.js";import"./Input-F9Cu5nN7.js";import"./useControlledState-BE-Fn8Ja.js";import"./useFormValidation-NfxZ5VuI.js";import"./useSpinButton-BQIp3M8O.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./useFormReset-BBuG3pIa.js";import"./useEvent-C9rtN4FC.js";import"./useTextField-BmAs3MOD.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-WvpDQ4XT.js";import"./Popover-J4OcnVW4.js";import"./OverlayContextProvider-B75krDNs.js";import"./context-Di3B4AKc.js";import"./useStatic-WZbZ24So.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./OverlayArrow-C0nssBLY.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";import"./useOverlayController-Bkc1EAsb.js";import"./OverlayTrigger-Dib8Vm9x.js";import"./IconInfo-BNrVxMDi.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
