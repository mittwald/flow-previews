import{j as r}from"./iframe-CKZ3lvbD.js";import{N as o}from"./NumberField-CKL5dh2H.js";import{L as t}from"./Label-GTbkpoc2.js";import{F as c}from"./FieldDescription-G4RsrN-A.js";import{F as g}from"./FieldError-BAXRdB0p.js";import{C as x,a as b}from"./ContextualHelpTrigger-CZudG9-6.js";import{B as h}from"./Button-CJlIPsW5.js";import{T as F}from"./Text-C_6aanp2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-sXfPOyeP.js";import"./flowComponent-CG3eh15W.js";import"./index-C7ZQKQyg.js";import"./clsx-B-dksMZM.js";import"./index-4RPaTPNn.js";import"./IconWarning-C7p1kK8i.js";import"./remote-CtPArtkt.js";import"./useControlledHostValueProps-el4q383E.js";import"./Button-BHDMacWQ.js";import"./utils-BvJRIsTz.js";import"./ProgressBar-aA2LYAol.js";import"./Label-CNWA-9aF.js";import"./Hidden-CSZFPuze.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-GmF_fUr4.js";import"./context-C9x0o2NL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqAXD8t.js";import"./useFocus-C_IvCZ_Q.js";import"./useFocusRing-BEfvRwzV.js";import"./useFocusable-C7EwfmGM.js";import"./FieldError-BqwxYxeF.js";import"./Text-CCMj3K8Y.js";import"./Form-akuVNupd.js";import"./Group-BXHCPMTj.js";import"./Input-DyPHNw9T.js";import"./useControlledState-DyEi02IX.js";import"./useFormValidation-BpwCrRY1.js";import"./useSpinButton-CWH1AI88.js";import"./useLocalizedStringFormatter-DIxPxHlf.js";import"./useFormReset-C_HfEwX8.js";import"./useEvent-BnoBTd1m.js";import"./useTextField-Bb4VUV4A.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BzzQHSYi.js";import"./AlertIcon-DDOfYHUc.js";import"./Popover-BaFxU9kE.js";import"./useOverlayController-CXRFu3Cx.js";import"./context-Ca4O4Dr-.js";import"./useStatic-B8hmur2r.js";import"./OverlayContextProvider-CR_6hmPV.js";import"./Dialog-C-Rr13fs.js";import"./RSPContexts-lOz_fmPr.js";import"./OverlayArrow-Dn7uJ_Mq.js";import"./Collection-8TFUhRy4.js";import"./CollectionBuilder-DlZiYq_X.js";import"./SelectionIndicator-Lac2coO-.js";import"./Separator-CX2sLzIc.js";import"./SelectionManager-BD0CXj_-.js";import"./useCollator-DWyyMPNk.js";import"./FocusScope-WJghiIyT.js";import"./VisuallyHidden-CqTmIJ-k.js";import"./OverlayTrigger-C1yyJzXM.js";import"./LoadingSpinner-D6ABJv6G.js";import"./browser-burL9SPa.js";import"./EmulatedBoldText-DqsKkhpE.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
