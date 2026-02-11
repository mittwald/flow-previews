import{j as r}from"./iframe-CLJtUSH1.js";import{N as o}from"./NumberField-FoUvEGq0.js";import{L as t}from"./Label-CL2lxKWa.js";import{F as c}from"./FieldDescription-Durr1uPe.js";import{F as g}from"./FieldError-DOHJV3_t.js";import{C as x,a as b}from"./ContextualHelpTrigger-dVrhj3-l.js";import{B as h}from"./Button-BdSBoC_f.js";import{T as F}from"./Text-B6Fe6olk.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BH0Y7qa0.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./clsx-B-dksMZM.js";import"./index-C5KxKItK.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./useControlledHostValueProps-DozfvDTN.js";import"./Button-DGFUplit.js";import"./utils-DvtEjNbs.js";import"./ProgressBar-eED3hhac.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./context-DZMEEftG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-bTiOWaRI.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useFocusable-DsRGTtrf.js";import"./FieldError-DZmbq2tb.js";import"./Text-COsBjVJz.js";import"./Form-DsvsQY6J.js";import"./Group-D9i1M0Ig.js";import"./Input-CzVRJw_9.js";import"./useControlledState-BRozYY3l.js";import"./useFormValidation-vO_E-FCH.js";import"./useSpinButton-DPaHlIPe.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./useFormReset-3JYpIfMS.js";import"./useEvent-B0QpT_fK.js";import"./useTextField-DNGW8mQ7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./Popover-Drep9alX.js";import"./useOverlayController-DZqu7_3H.js";import"./context-jvIE4x8v.js";import"./useStatic-Dks4Zmqh.js";import"./OverlayContextProvider-BNfa_JMj.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./OverlayTrigger-B7jN7CHJ.js";import"./LoadingSpinner-D1C6LJRF.js";import"./browser-BMt8iY1_.js";import"./EmulatedBoldText-BqLHzBf0.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
