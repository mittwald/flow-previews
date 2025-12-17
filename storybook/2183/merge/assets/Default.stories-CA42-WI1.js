import{j as r}from"./iframe-Eg8-wFCR.js";import{N as o}from"./NumberField-DReD2BCP.js";import{L as t}from"./Label-1lc8IvKU.js";import{F as c}from"./FieldDescription-CAHlR0jD.js";import{F as g}from"./FieldError-D_RdlzA4.js";import{C as x,a as b}from"./ContextualHelpTrigger-_TnWLgmE.js";import{B as h}from"./Button-bx6caw1c.js";import{T as F}from"./Text-cFe2oWr9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CePCnb_B.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./clsx-B-dksMZM.js";import"./index-7P9p2RDg.js";import"./IconChevronDown-CB7etEhV.js";import"./remote-DyWsWGYm.js";import"./IconChevronUp-C-Jbvsg8.js";import"./IconMinus-B2spDGa9.js";import"./IconPlus-CvfHg6EE.js";import"./useControlledHostValueProps-CMYSf_Mb.js";import"./Button-DrB4xT8J.js";import"./utils-DpUmHG9o.js";import"./ProgressBar-BDU9deru.js";import"./Label-ayphvmky.js";import"./Hidden-CPM5AGUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./context-D30M243T.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./FieldError-BwCFTN-W.js";import"./Text-CVQZ1Ff_.js";import"./Form-DkJGoq-X.js";import"./Group-BHVgCnMY.js";import"./Input-q1ZC5BdI.js";import"./useControlledState-B4vwiKN6.js";import"./useFormValidation-D_eOv9kq.js";import"./useSpinButton-B0Jr9cE5.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./useFormReset-BOxw_xUS.js";import"./useEvent-Cv81pFWJ.js";import"./useTextField-BX8mCjCv.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-Djal8A6_.js";import"./Popover-k3YNshBd.js";import"./OverlayContextProvider-BxKFxtc4.js";import"./context-W5o617c2.js";import"./useStatic-BFryEnnL.js";import"./Dialog-BIruH5Sw.js";import"./RSPContexts-ajqDrbBU.js";import"./OverlayArrow-CDko6Bkl.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";import"./useOverlayController-D2lpnQmk.js";import"./OverlayTrigger-BlFtNgbQ.js";import"./IconInfo-M4KFZ-Cm.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ur=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,Ur as __namedExportsOrder,Ir as default};
