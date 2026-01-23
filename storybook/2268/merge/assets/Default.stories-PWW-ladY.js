import{j as r}from"./iframe-iY_Mn_oy.js";import{N as o}from"./NumberField-C5wVvUG8.js";import{L as t}from"./Label-3EuxSz5j.js";import{F as c}from"./FieldDescription-DHPoAUPt.js";import{F as g}from"./FieldError-rrdHjYdT.js";import{C as x,a as b}from"./ContextualHelpTrigger-DouULUw9.js";import{B as h}from"./Button-BXdn408E.js";import{T as F}from"./Text-C2ZCo6gl.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Cxjop7r-.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./useControlledHostValueProps-7A2CJ7V9.js";import"./Button-BELa7hv8.js";import"./utils-C-pMCGM-.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./context-DIbVk5_z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./FieldError-BP_EVNQV.js";import"./Text-CktBEW1F.js";import"./Form-2TpMp3Y3.js";import"./Group-CDmjKrYo.js";import"./Input-B3denzrL.js";import"./useControlledState-DUH-ni6I.js";import"./useFormValidation-B6OmY3vR.js";import"./useSpinButton-CL7ZiCar.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./useFormReset-DJj-QXR5.js";import"./useEvent-BHEixncs.js";import"./useTextField-BqkIOSVN.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";import"./Popover-CTmqafGM.js";import"./useOverlayController-B66mlXsj.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./OverlayContextProvider-CEfkP99K.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";import"./OverlayTrigger-D-Sv7Auh.js";import"./LoadingSpinner-C14k5CPB.js";import"./browser-DK9hE6UN.js";import"./EmulatedBoldText-CHIJjbeg.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
