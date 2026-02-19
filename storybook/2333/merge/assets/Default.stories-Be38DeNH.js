import{j as e}from"./iframe-DQkRMfo_.js";import{S as t,a as r}from"./Segment-Bf2ObDG9.js";import{L as l}from"./Label-CITwA187.js";import{F as d}from"./FieldError-Bk57uQQs.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-COr712P3.js";import"./index-BIVF9xJy.js";import"./clsx-B-dksMZM.js";import"./index-BmRrr2ih.js";import"./useFieldComponent-DKGKIVkH.js";import"./utils-Bfb5K-41.js";import"./useMakeFocusable-DViAzEe9.js";import"./RadioGroup-DNHibUjJ.js";import"./FieldError-BDV0g7vQ.js";import"./Text-BXxFgtol.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DMHoM5vs.js";import"./useLabel-BKmqgaQh.js";import"./Label-BXbqiwP4.js";import"./Hidden-xLATKa2n.js";import"./SelectionIndicator-D4WNQsp1.js";import"./useFormValidation-Baae3HaH.js";import"./useFocus-BSyQYzHK.js";import"./useFocusRing-CrR0o1Yj.js";import"./useControlledState-CA4wGiI1.js";import"./FocusScope-DAhxUr4_.js";import"./context-XfcuIoVT.js";import"./useFormReset-CbTvEeV3.js";import"./usePress-D8-KGEPi.js";import"./useFocusable-BWtjl4YZ.js";import"./VisuallyHidden-CreEQc-P.js";import"./IconWarning-D2qqMRrO.js";import"./remote-CkmXCgJk.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DNh09jdA.js";import"./AlertText-CwnG_GRo.js";import"./AlertIcon-x4dcgk_u.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
