import{j as r}from"./iframe-CIhdjqSz.js";import{N as o}from"./NumberField-MGzzCTaR.js";import{L as t}from"./Label-DvNJKWaN.js";import{F as c}from"./FieldDescription-CyU-MK8M.js";import{F as g}from"./FieldError-C6Vi3jlh.js";import{C as x,a as b}from"./ContextualHelpTrigger-B1ruzjxQ.js";import{B as h}from"./Button--NFWCTgK.js";import{T as F}from"./Text-DgrqnOua.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BDBEatho.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./useControlledHostValueProps-BmBohk80.js";import"./Button-DTpgNeLS.js";import"./utils-3Ll5mTsj.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./FieldError-BrGZX-9W.js";import"./Text-BWZGL9q7.js";import"./Form-C-8UFtdt.js";import"./Group-DY21f0zL.js";import"./Input-DGuJ7Hsu.js";import"./useControlledState-Bhs9bgfq.js";import"./useFormValidation-kYNpgjw2.js";import"./useSpinButton-BlTg-3Ex.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./useFormReset-CCc0UGFI.js";import"./useEvent-kjaJonnh.js";import"./useTextField-Bg2pWp0I.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";import"./Popover-BtssMKQJ.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./Dialog-BaKpGYJ_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./SelectionManager-BQHZJ_z4.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./VisuallyHidden-Szd7uPuS.js";import"./OverlayTrigger-DlE73CJz.js";import"./LoadingSpinner-CnQRgWlh.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
