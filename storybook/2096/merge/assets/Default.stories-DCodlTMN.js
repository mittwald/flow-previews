import{j as r}from"./iframe-Tz0J7D4Y.js";import{N as o}from"./NumberField-BWVrsjzv.js";import{L as t}from"./Label-B5yMZfoe.js";import{F as c}from"./FieldDescription-DfQkIZob.js";import{F as g}from"./useFieldComponent-C0OSANtm.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bq_GJ0ZO.js";import{B as h}from"./Button-DpdNCW8h.js";import{T as F}from"./Text-C3A_eB8w.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./index-DcQDRvJj.js";import"./IconWarning-GPTcuJJ8.js";import"./ReactAriaControlledValueFix-rP8sVaUU.js";import"./utils-ja91N2Nx.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./context-B1lt5Uf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./Form-CgZM-WfL.js";import"./Group-BWtr-S31.js";import"./Input-fTg0rFoa.js";import"./Text-c129sBMT.js";import"./useControlledState-JfMoTEl5.js";import"./useFormValidation-BhAnQ22o.js";import"./useSpinButton-B8giHKN1.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./useFormReset-Dr7kbm5c.js";import"./useEvent-C9-diYfc.js";import"./useTextField-BJgUARR-.js";import"./Label.module-CUYTf9Jc.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";import"./Popover-Js2RBZWb.js";import"./context-CCjUHDCq.js";import"./useStatic-BDAMVNvv.js";import"./OverlayContextProvider-0YowFgKZ.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./ClearPropsContextView-CQKiSpfA.js";import"./OverlayTrigger-CPl48xIm.js";import"./ControlledNotification-36h8tVEY.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./browser-D-jX3MAX.js";import"./EmulatedBoldText-BtDnNRTP.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
