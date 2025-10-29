import{j as r}from"./iframe-BFuSR0CY.js";import{N as o}from"./NumberField-C3uW32we.js";import{L as t}from"./Label-Bzfu9tdI.js";import{F as c}from"./FieldDescription-DReTe5UI.js";import{F as g}from"./useFieldComponent-DvAk7ROg.js";import{C as x,a as b}from"./ContextualHelpTrigger-C_PjFtWq.js";import{B as h}from"./Button-B8_RMB4T.js";import{T as F}from"./Text-BXhKPUqX.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./IconWarning-BDLPxpKm.js";import"./ReactAriaControlledValueFix-CD5iZKpR.js";import"./utils-CEuw8CkJ.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./context-6pf_efel.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./Form-CopJ-XT2.js";import"./Group-ln6N3sDl.js";import"./Input-Dy1mfW1m.js";import"./Text-CVe1O8QA.js";import"./useControlledState-Y8_jrThy.js";import"./useFormValidation-Dt4bKs4p.js";import"./useSpinButton-w_X_7RVJ.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./useFormReset-CMQHaKTN.js";import"./useEvent-D6E-W8z_.js";import"./useTextField-DzB7yg8E.js";import"./Label.module-CUYTf9Jc.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";import"./Popover-DHySGxM6.js";import"./context-CFFRtyxF.js";import"./useStatic-BcQq_-tU.js";import"./OverlayContextProvider-CfKGEq1m.js";import"./Dialog-D9CJ_WbB.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./ClearPropsContextView-BzCLuTLO.js";import"./OverlayTrigger-CApgQhCu.js";import"./ControlledNotification-4GKhJW90.js";import"./LoadingSpinner-CF0vj0R_.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
