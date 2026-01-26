import{j as r}from"./iframe-B-_izELn.js";import{N as o}from"./NumberField-C76NqvCT.js";import{L as t}from"./Label-xN0BMhRq.js";import{F as c}from"./FieldDescription-Bm61smCN.js";import{F as g}from"./FieldError-C2OlbqQW.js";import{C as x,a as b}from"./ContextualHelpTrigger-h5qI-wui.js";import{B as h}from"./Button-rB1lHab_.js";import{T as F}from"./Text-B9UK706u.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Kyt2SdHG.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./clsx-B-dksMZM.js";import"./index-C24wTi9Q.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./useControlledHostValueProps-DNK8lF1k.js";import"./Button-RawUYYof.js";import"./utils-CTzaLK4l.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./context-CP_ivtNk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./FieldError-2QNeUIGm.js";import"./Text-Cbq-V_qs.js";import"./Form-CwweEOY6.js";import"./Group-CL4KrlTp.js";import"./Input-Ch7XH0d5.js";import"./useControlledState-tdUQVzVH.js";import"./useFormValidation-d7hQTD7K.js";import"./useSpinButton-CkmMsUAo.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./useFormReset-BUoUtOhQ.js";import"./useEvent-DwiqP_vq.js";import"./useTextField-BA5-wrv-.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";import"./Popover-BgKMlpHY.js";import"./useOverlayController-DRATrlGn.js";import"./context--GYGv0Su.js";import"./useStatic-k4uG0_kr.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";import"./OverlayTrigger-DaYOrCfk.js";import"./LoadingSpinner-BCeR-IPA.js";import"./browser-C9rDHpHO.js";import"./EmulatedBoldText-DO19SLv9.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
