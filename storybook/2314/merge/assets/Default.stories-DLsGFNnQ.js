import{j as r}from"./iframe-BnHQGzj-.js";import{N as o}from"./NumberField-C0RZ9uyS.js";import{L as t}from"./Label-u3CIBBS-.js";import{F as c}from"./FieldDescription-yrYvUz27.js";import{F as g}from"./FieldError-hA7hA6sK.js";import{C as x,a as b}from"./ContextualHelpTrigger-C_Zp-5J3.js";import{B as h}from"./Button-kOzdzwoL.js";import{T as F}from"./Text-BWqTdGF3.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BKOZgMTQ.js";import"./flowComponent-B3zgfniW.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./useControlledHostValueProps-C85uCNsj.js";import"./Button-7nIxjvHJ.js";import"./utils-B_drgFmA.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./FieldError-CfhVGgFS.js";import"./Text-CP9lFNhL.js";import"./Form-B5QWBDfx.js";import"./Group-ZIuNhF8O.js";import"./Input-DmDHg40n.js";import"./useControlledState-ARGAgX5I.js";import"./useFormValidation-CJa5Pm36.js";import"./useSpinButton-D1MDpkpn.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./useFormReset-C2cP98Fi.js";import"./useEvent-DbwR8Qxp.js";import"./useTextField-D3uZgsWg.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BSsMj9jl.js";import"./AlertIcon-cpK7-VlX.js";import"./Popover-By64ee4S.js";import"./useOverlayController-nmD6fAp8.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./Dialog-vlYkkLZ8.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./SelectionManager-D547R46g.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./VisuallyHidden-DN_pHWhj.js";import"./OverlayTrigger-DgkWH0DW.js";import"./LoadingSpinner-DoB6VVvS.js";import"./browser-Byd_T3zS.js";import"./EmulatedBoldText-B2gQbs-b.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
