import{j as r}from"./iframe-DM7qDJWN.js";import{N as o}from"./NumberField-CT_pEs_a.js";import{L as t}from"./Label-BIhRdzJz.js";import{F as c}from"./FieldDescription-BnJyB75w.js";import{F as g}from"./FieldError-yptSAddh.js";import{C as x,a as b}from"./ContextualHelpTrigger-DWWzFWqF.js";import{B as h}from"./Button-Dc6TEAeS.js";import{T as F}from"./Text-DFbMev3D.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DWfL7CEw.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./clsx-B-dksMZM.js";import"./index-Zik4_3jH.js";import"./IconWarning-Ck-PBl-h.js";import"./remote-CkIQ4maL.js";import"./useControlledHostValueProps-CKa29mBp.js";import"./Button-Cle7Q0jH.js";import"./utils-DCh3KcEQ.js";import"./ProgressBar-XdjtveJ3.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./context-Bdkwq7qF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DcE1V40F.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./useFocusable-jnMsXBmm.js";import"./FieldError-CDF7zCEW.js";import"./Text-CqLEY5m0.js";import"./Form-DD0plB0K.js";import"./Group-V_zeLWI4.js";import"./Input-SfHIWI_P.js";import"./useControlledState-CGBhCpgz.js";import"./useFormValidation-BjtvC6sH.js";import"./useSpinButton-6B8j-AZ3.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./useFormReset-DEHhMcAF.js";import"./useEvent-h15Gin5m.js";import"./useTextField-BQE_0n2Q.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";import"./Popover-C6WGT-mG.js";import"./useOverlayController-BWbKAOxQ.js";import"./context-CLl5kDsk.js";import"./useStatic-Dwurevey.js";import"./OverlayContextProvider-CHeMGzMk.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./OverlayTrigger-DjZ_tJ2j.js";import"./LoadingSpinner-BB2_lVH8.js";import"./browser-GV4Evxlh.js";import"./EmulatedBoldText-DY5AV1Fo.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
