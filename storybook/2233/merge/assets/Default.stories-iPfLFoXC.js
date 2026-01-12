import{j as r}from"./iframe-BUX4ZqHF.js";import{N as o}from"./NumberField-CldMpCLi.js";import{L as t}from"./Label-kgnV-RXM.js";import{F as c}from"./FieldDescription-DA8sVKuh.js";import{F as g}from"./FieldError-BcNphJCj.js";import{C as x,a as b}from"./ContextualHelpTrigger-CRL1lMTN.js";import{B as h}from"./Button-BQks1Fwk.js";import{T as F}from"./Text-CCD2jWDE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-L2xw4dQD.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./clsx-B-dksMZM.js";import"./index-BP0Kc6JB.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./useControlledHostValueProps-BQgkkibT.js";import"./Button-C7cH5OT2.js";import"./utils-D9iTInv6.js";import"./ProgressBar-D_H4fWP7.js";import"./Label-I8DqILoy.js";import"./Hidden-CmsGFsNY.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./context-DdyqVFXP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./FieldError-DwISghd1.js";import"./Text-BG7MORzn.js";import"./Form-Dyklbi3v.js";import"./Group-DB1vfutX.js";import"./Input-Dt9-alkO.js";import"./useControlledState-CgyNYXn6.js";import"./useFormValidation-CdmTUY1H.js";import"./useSpinButton-CwLb1spK.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./useFormReset-DwYjTvSA.js";import"./useEvent-CCX_Td5o.js";import"./useTextField-DrmwD8Vx.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";import"./Popover-Cjs7ZgFB.js";import"./useOverlayController-Di9xJg3a.js";import"./context-DLe4PJj-.js";import"./useStatic-HiZWtrs6.js";import"./OverlayContextProvider-DK3zJnZ3.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";import"./OverlayTrigger-DrYjWhwY.js";import"./LoadingSpinner-DAzOOzOm.js";import"./browser-D0x3Xdqp.js";import"./EmulatedBoldText-B3B0n9A6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
