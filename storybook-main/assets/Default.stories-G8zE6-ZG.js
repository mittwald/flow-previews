import{j as r}from"./iframe-DGnxviCN.js";import{N as o}from"./NumberField-D3eLDpBV.js";import{L as t}from"./Label-C_bFUpyc.js";import{F as c}from"./FieldDescription-CXMcujUG.js";import{F as g}from"./FieldError-D8VjacOs.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dt-AN9cE.js";import{B as h}from"./Button-BVsKVkL8.js";import{T as F}from"./Text-VNnveGPv.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-YlKWY1fY.js";import"./flowComponent-BKDhK7wE.js";import"./index-BGEs2x-a.js";import"./clsx-B-dksMZM.js";import"./index-CLLV6gyd.js";import"./IconWarning-B9r0STX6.js";import"./remote-B6BjMgpw.js";import"./useControlledHostValueProps-BIbkMX3_.js";import"./Button-BPmMTYs3.js";import"./utils-BkfS5ksp.js";import"./ProgressBar-BzVgRhsE.js";import"./Label-5xK8AOcv.js";import"./Hidden-v-Wf_Hux.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BPNr7xBu.js";import"./context-UPqYfqWR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyY11qHx.js";import"./useFocus--s-Wd8Ep.js";import"./useFocusRing-Bv9AUNti.js";import"./useFocusable-Qpttz7ZN.js";import"./FieldError-er7nowFJ.js";import"./Text-DvHtl8Bn.js";import"./Form-DxH8Icum.js";import"./Group-Bidst4UD.js";import"./Input-BlrdZkUM.js";import"./useControlledState-Tnf2yuXg.js";import"./useFormValidation-Dta_Z6Hx.js";import"./useSpinButton-B4y-a6cs.js";import"./useLocalizedStringFormatter-ClYonFTS.js";import"./useFormReset-DURLcehp.js";import"./useEvent-BwKzZdM2.js";import"./useTextField-DgN6vDQ1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CALscOJV.js";import"./AlertIcon-DgP01cQO.js";import"./Popover-6gSZV124.js";import"./useOverlayController-5kwf29Lw.js";import"./useStatic-BeisnKXD.js";import"./OverlayContextProvider-DWOAvC95.js";import"./Dialog-4LBd4V1R.js";import"./RSPContexts-DVx2WDHj.js";import"./OverlayArrow-Cl6eJh3Y.js";import"./Collection-SZbXc0LG.js";import"./CollectionBuilder-DEOfwI8d.js";import"./SelectionIndicator-BVYQMpc5.js";import"./Separator-BN8d0XAg.js";import"./SelectionManager-C4F6MNyw.js";import"./useCollator-2w2DhYsq.js";import"./FocusScope-CggPEhUf.js";import"./VisuallyHidden-BQzdTzN8.js";import"./OverlayTrigger-BRKr18-D.js";import"./LoadingSpinner-DowiBEwh.js";import"./browser-Cb_u6_6F.js";import"./EmulatedBoldText-DzMWb8wu.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
