import{j as r}from"./iframe-CywxDTj6.js";import{N as o}from"./NumberField-CHWR-6tj.js";import{L as t}from"./Label-D6CHoy0y.js";import{F as c}from"./FieldDescription-Ce5UPLEI.js";import{F as g}from"./FieldError-zwomljJ3.js";import{C as x,a as b}from"./ContextualHelpTrigger-FvPMYmI8.js";import{B as h}from"./Button-Dt6rqZC2.js";import{T as F}from"./Text-vlJOJK2L.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DA2iK2GC.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./useControlledHostValueProps-CdUTecqJ.js";import"./Button-DzvzizsP.js";import"./utils-JmAwA3ix.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./context-Wz-N3Tdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./FieldError-fWQdbmrt.js";import"./Text-Dc57gZlo.js";import"./Form-B03hL8Gq.js";import"./Group-Dmh4PTRU.js";import"./Input-CoVkAmRj.js";import"./useControlledState-CrIAtAXB.js";import"./useFormValidation-CXUK0Gt0.js";import"./useSpinButton-Gd5YFhh6.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./useFormReset-CCwx8s_G.js";import"./useEvent-CDXAxsds.js";import"./useTextField-D7eiRyT5.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-CRD9Qx5x.js";import"./useOverlayController-CQzVIUEY.js";import"./context-DM4I0BsB.js";import"./useStatic-B4t8cENg.js";import"./OverlayContextProvider-C85v0gvj.js";import"./Dialog-RfbYVzK-.js";import"./RSPContexts-DB0ICqF0.js";import"./OverlayArrow-kC1F2-h6.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./SelectionManager-Mk_lDA9T.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./VisuallyHidden-CBo5v6jz.js";import"./OverlayTrigger-DpHz--ek.js";import"./LoadingSpinner-Byj--1Pk.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
