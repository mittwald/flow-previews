import{j as r}from"./iframe-CNIcTJYh.js";import{N as o}from"./NumberField-CITO-6Oq.js";import{L as t}from"./Label-Dk1BsiHf.js";import{F as c}from"./FieldDescription-D4T9Jptd.js";import{F as g}from"./FieldError-CRJL1-ZW.js";import{C as x,a as b}from"./ContextualHelpTrigger-Byh6waEB.js";import{B as h}from"./Button-DAjUCwya.js";import{T as F}from"./Text-6t0QtAeQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BcSx3cQM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./useControlledHostValueProps-CCy3mJ8p.js";import"./Button-BxwMmJez.js";import"./utils-BMrW0rs-.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./context-C-_0n7Mf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./FieldError-C-WtBUhj.js";import"./Text-D2vn8IUC.js";import"./Form-DFzq_6cf.js";import"./Group-B3nGsmaJ.js";import"./Input-DXXfkxpG.js";import"./useControlledState-aVbBpOCK.js";import"./useFormValidation-Cl_ELzYY.js";import"./useSpinButton-Dr2RrRJj.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./useFormReset-ClGEeDTe.js";import"./useEvent-BbgFwTon.js";import"./useTextField-DUQ7sCSl.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";import"./Popover-DmppkICQ.js";import"./useOverlayController-DAzTf57J.js";import"./context-CHGIk6I_.js";import"./useStatic-J4GDP0vf.js";import"./OverlayContextProvider-DLVotmKz.js";import"./Dialog-C8--keRD.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./OverlayTrigger-DLlBnUgI.js";import"./LoadingSpinner-D1M8B3tV.js";import"./browser-e5gpn1Ib.js";import"./EmulatedBoldText-Cp_XieAh.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
