import{j as e}from"./iframe-BKpTcuej.js";import{S as t,a as r}from"./Segment-uzsS8ne2.js";import{L as l}from"./Label-sjxWv79d.js";import{F as d}from"./FieldError-BmJ7-crS.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DoYqiHFv.js";import"./index-Dp43xhBx.js";import"./clsx-B-dksMZM.js";import"./index-DwEhfHus.js";import"./useFieldComponent-AXq55mny.js";import"./utils-BuTqHWUg.js";import"./useMakeFocusable-Cy4wN83A.js";import"./RadioGroup-Z6YPzqOw.js";import"./FieldError-Bf7-_15k.js";import"./Text-_5F14b0c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-fml-60gz.js";import"./useLabel-CLAZgdhb.js";import"./Label--Zf6jHty.js";import"./Hidden-B0ayokwD.js";import"./SelectionIndicator-CKzMTdaQ.js";import"./useFormValidation-6yUCZE8C.js";import"./useFocus-C4QXJ0i2.js";import"./useFocusRing-CL2qG9Ti.js";import"./useControlledState-C61mrJlx.js";import"./FocusScope-CaneGuiO.js";import"./context-Bt___W0l.js";import"./useFormReset-DjxTrJRS.js";import"./usePress-BwvZqs_N.js";import"./useFocusable-8gC31DNg.js";import"./VisuallyHidden-DjSqpFWl.js";import"./IconWarning-8R3XoFcV.js";import"./remote-nPMBb6wO.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BpUbvorC.js";import"./AlertText-NjffNB6y.js";import"./AlertIcon-BxMTL622.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
