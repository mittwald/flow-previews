import{j as r}from"./iframe-DITmTDde.js";import{N as o}from"./NumberField-Dn4f1tpu.js";import{L as t}from"./Label-DcnJ5Vhi.js";import{F as c}from"./FieldDescription-BGaJf4ya.js";import{F as g}from"./FieldError-CBw2sGOe.js";import{C as x,a as b}from"./ContextualHelpTrigger-DcoizUeG.js";import{B as h}from"./Button-DgKZKMvA.js";import{T as F}from"./Text-B4ALgTL8.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CR_sI6nz.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./clsx-B-dksMZM.js";import"./index-oEm39XqO.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./useControlledHostValueProps-DAUukQ8V.js";import"./Button-CsPSNcu1.js";import"./utils-C40myb20.js";import"./ProgressBar-DNk1ASVc.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZbkZQ01.js";import"./context-CEC4U_pc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cwz_fpS2.js";import"./useFocus-DrnrNdFb.js";import"./useFocusRing-DXc99t-B.js";import"./useFocusable-m8WXVW9y.js";import"./FieldError-B8qSKLtD.js";import"./Text-rw4H23NJ.js";import"./Form-C6LPNxyn.js";import"./Group-BcWNK89K.js";import"./Input-tNtxpliI.js";import"./useControlledState-D6UlgZp0.js";import"./useFormValidation-gmIFw0Kx.js";import"./useSpinButton-CoagFp8N.js";import"./useLocalizedStringFormatter-IPLp48A-.js";import"./useFormReset-vbhoemIT.js";import"./useEvent-CgJsVtlm.js";import"./useTextField-Mn5K0qmA.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-Zpv4dzR_.js";import"./useOverlayController-D0uk_tci.js";import"./context-fizPycLA.js";import"./useStatic-OoNPiP3V.js";import"./OverlayContextProvider-4GqAJ6zk.js";import"./Dialog-Bmgfq9R9.js";import"./RSPContexts-jFJkk-mB.js";import"./OverlayArrow-CD7gdoFk.js";import"./Collection-CIVuuc0n.js";import"./CollectionBuilder-IVJxZg8U.js";import"./SelectionIndicator-711mCjj0.js";import"./Separator-BPOzmHFV.js";import"./SelectionManager-WdH-qHQg.js";import"./useCollator-CsbGxztB.js";import"./FocusScope-zqNAAOXF.js";import"./VisuallyHidden-CcOPNtcw.js";import"./OverlayTrigger-D23x4NHr.js";import"./LoadingSpinner-CQhA1l2h.js";import"./browser-wgtkTybB.js";import"./EmulatedBoldText-CTBn_63u.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
