import{j as r}from"./iframe-Cbm1tYQ5.js";import{N as o}from"./NumberField-DVO-iGDA.js";import{L as t}from"./Label-C1u7fixG.js";import{F as c}from"./FieldDescription-Ct8S77_6.js";import{F as g}from"./FieldError-DdEKXl5v.js";import{C as x,a as b}from"./ContextualHelpTrigger-CR8dQst0.js";import{B as h}from"./Button-Cqfz7zcL.js";import{T as F}from"./Text-K6yu7K7n.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BRiGBo1N.js";import"./flowComponent-BdgFVdCI.js";import"./index-DnzctHoT.js";import"./clsx-B-dksMZM.js";import"./index-cwYx15Z_.js";import"./IconWarning-HRESMERf.js";import"./remote-CNywZcFz.js";import"./useControlledHostValueProps-CPKej2US.js";import"./Button-DMDpRFJa.js";import"./utils-CwSfACxU.js";import"./ProgressBar-BRc7Paog.js";import"./Label-z3gRbOqe.js";import"./Hidden-Ct3-vkmZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BhJmZsby.js";import"./context-CpUEkiXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D-cWxohr.js";import"./useFocus-DGTwh-gS.js";import"./useFocusRing-2ds-u5nI.js";import"./useFocusable-DfxkJnS0.js";import"./FieldError-b__4rZn4.js";import"./Text-CRfwxtsq.js";import"./Form-DE723K-l.js";import"./Group-BVQg3o8h.js";import"./Input-KBjiAAgX.js";import"./useControlledState-CcdBsJdv.js";import"./useFormValidation-SL6QRRh_.js";import"./useSpinButton-CwT4QGD9.js";import"./useLocalizedStringFormatter-DOOHcy82.js";import"./useFormReset-DovDq4jf.js";import"./useEvent-CIGBudko.js";import"./useTextField-DOevCIiu.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-JWgofNcm.js";import"./AlertIcon-CDhVv57V.js";import"./Popover-DTr9x_xz.js";import"./useOverlayController-BSdz9lOP.js";import"./useStatic-CSSB8BCl.js";import"./OverlayContextProvider-DDpjWSCr.js";import"./Dialog-DOWWi4PD.js";import"./RSPContexts-BN50OY8k.js";import"./OverlayArrow-DLVTOKg_.js";import"./Collection-My4n8esd.js";import"./CollectionBuilder-BRfzWkKh.js";import"./SelectionIndicator-oJF9tjaE.js";import"./Separator-DziD0EOf.js";import"./SelectionManager-Xen2pH3E.js";import"./useCollator-D1MkjfpC.js";import"./FocusScope-BGzNCZ_B.js";import"./VisuallyHidden--ZEPdGNY.js";import"./OverlayTrigger-CQGtynqr.js";import"./LoadingSpinner-CziFUZ0y.js";import"./browser-BO2LE4a1.js";import"./EmulatedBoldText-DOwlcjUH.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
