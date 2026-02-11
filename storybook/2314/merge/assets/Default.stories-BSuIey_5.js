import{j as r}from"./iframe-CtuK0rEJ.js";import{N as o}from"./NumberField-Mo4Yyrwf.js";import{L as t}from"./Label-Cngj9T_J.js";import{F as c}from"./FieldDescription-BqM7i6ko.js";import{F as g}from"./FieldError-BKJxUnBZ.js";import{C as x,a as b}from"./ContextualHelpTrigger-Ci-04t-O.js";import{B as h}from"./Button-CC2cGGC1.js";import{T as F}from"./Text-CyAseKfN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CPjzSNK0.js";import"./flowComponent-BsiSvDfm.js";import"./index-DyfnOEiT.js";import"./clsx-B-dksMZM.js";import"./index-DPf65gvx.js";import"./IconWarning-BSe4G4Pm.js";import"./remote-DD8nhYq_.js";import"./useControlledHostValueProps-DO0HHcXX.js";import"./Button-CSRC_w1a.js";import"./utils-C1DNWP44.js";import"./ProgressBar-D8lgnq4k.js";import"./Label-BIhxl5Mj.js";import"./Hidden-lRNITHFC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DJNpTGh1.js";import"./context-BLHFXQwL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Da2cRPrr.js";import"./useFocus-N-Pc0sLJ.js";import"./useFocusRing-Dq2x8hiG.js";import"./useFocusable-AhKszEdS.js";import"./FieldError-AgjktxA6.js";import"./Text-DmIZo_mX.js";import"./Form-8SXxse9a.js";import"./Group-CRx_nl1e.js";import"./Input-BchQzUPE.js";import"./useControlledState-Cc_BEFH0.js";import"./useFormValidation-uULaRcd4.js";import"./useSpinButton-vzdSg9cR.js";import"./useLocalizedStringFormatter-C0fwd0wV.js";import"./useFormReset-C6F9Oqzr.js";import"./useEvent-D8j21rfZ.js";import"./useTextField-Dry1ib5S.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-i0FuOWey.js";import"./AlertIcon-CPMEIwAr.js";import"./Popover-fZyy-KqV.js";import"./useOverlayController-B6-IGISv.js";import"./context-CuLUjLGN.js";import"./useStatic-M0CnbsK2.js";import"./OverlayContextProvider-C66rhlmO.js";import"./Dialog-DqwEKDxA.js";import"./RSPContexts-Ci8ojbfD.js";import"./OverlayArrow-D5uKmzPJ.js";import"./Collection-B0ADhrnF.js";import"./CollectionBuilder-DAn9FB1h.js";import"./SelectionIndicator-Ds2JAiCA.js";import"./Separator-CEf8TdmS.js";import"./SelectionManager-CRpdvIdx.js";import"./useCollator-BzRay_B5.js";import"./FocusScope-Cm3IhtBV.js";import"./VisuallyHidden-D1Q1E2fL.js";import"./OverlayTrigger-Bu3GFQ-B.js";import"./LoadingSpinner-CJNtrFTB.js";import"./browser-Up8UMddv.js";import"./EmulatedBoldText-BeUk81Jn.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
