import{j as r}from"./iframe-DwkHntCQ.js";import{N as o}from"./NumberField-BwipWtk8.js";import{L as t}from"./Label-IsfDEsPh.js";import{F as c}from"./FieldDescription-DY5ANAML.js";import{F as g}from"./useFieldComponent-DTLstJQQ.js";import{C as x,a as b}from"./ContextualHelpTrigger-CzVJho9R.js";import{B as h}from"./Button-DN4_LEM9.js";import{T as F}from"./Text-DBgNVic9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./index-Cx9MYi32.js";import"./IconWarning-CscgxAB5.js";import"./ReactAriaControlledValueFix-DNP-65Ab.js";import"./utils-Di7WFWpe.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./context-BkqugFd7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BCP8B4jj.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./Form-DZTCn0e1.js";import"./Group-BnJXXyrI.js";import"./Input-CxNU6sM9.js";import"./Text-BtFh1iC6.js";import"./useControlledState-DyDKUpf4.js";import"./useFormValidation-D01J8um2.js";import"./useSpinButton-DCR3hj-y.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./useFormReset-BUY4HIau.js";import"./useEvent-N-KGhH9j.js";import"./useTextField-CMn55DJk.js";import"./Label.module-CUYTf9Jc.js";import"./VisuallyHidden-CVpyzdGa.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";import"./Popover-DvylaOgQ.js";import"./useOverlayController-Dk9bMBr8.js";import"./context-DyX3upIJ.js";import"./useStatic-BqeeL3zA.js";import"./OverlayContextProvider-DEtKF3P2.js";import"./Dialog-Cj1dv_FM.js";import"./RSPContexts-CHr_tkrx.js";import"./OverlayArrow-BCGgH0Vq.js";import"./Collection-C9EPSj0q.js";import"./CollectionBuilder-CpTUcuaV.js";import"./SelectionIndicator-BmVEKeRD.js";import"./Separator-D5X37L1x.js";import"./SelectionManager-BDJUyJ7N.js";import"./useCollator-DA-keOw9.js";import"./FocusScope-wRqNTiuk.js";import"./ClearPropsContextView-CxP4Y2-5.js";import"./OverlayTrigger-Dz-k30Wm.js";import"./ControlledNotification-B20ejBs1.js";import"./LoadingSpinner-Bd24wSd4.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const qr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,qr as __namedExportsOrder,Tr as default};
