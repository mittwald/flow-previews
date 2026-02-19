import{j as e}from"./iframe-B2CTi6cm.js";import{S as t,a as r}from"./Segment-3vhhXyG6.js";import{L as l}from"./Label-DccH0oyj.js";import{F as d}from"./FieldError-Cpb_w0Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./useFieldComponent-DO-gEAYc.js";import"./utils-CFhs-kxq.js";import"./useMakeFocusable-CuEJFFls.js";import"./RadioGroup-CLyZk7Ya.js";import"./FieldError-Cj-zQd3o.js";import"./Text-CtUv1EPC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cx6Bm7Pi.js";import"./useLabel-DatykuNG.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./SelectionIndicator-BHeVA0_4.js";import"./useFormValidation-BDHhHN4L.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useControlledState-D4tpAkeT.js";import"./FocusScope-DAIUMiFj.js";import"./context-DlyTwf6g.js";import"./useFormReset-BMX0RNLQ.js";import"./usePress-CXOW9Qje.js";import"./useFocusable-DeW7JE_I.js";import"./VisuallyHidden-D844FGjJ.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./AlertText-Dh_kjMlW.js";import"./AlertIcon-Bqwt-hqt.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props} defaultValue="admin" containerBreakpointSize="xs">
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member">Member</Segment>
    </SegmentedControl>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member">Member</Segment>
      <Segment value="accountant">Accountant</Segment>
      <FieldError>Select a role to continue</FieldError>
    </SegmentedControl>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props}>
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member" isDisabled>
        Member
      </Segment>
      <Segment value="accountant">Accountant</Segment>
    </SegmentedControl>
}`,...s.parameters?.docs?.source}}};const Q=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,Q as __namedExportsOrder,P as default};
