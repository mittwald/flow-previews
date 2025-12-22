import{j as e}from"./iframe-CYPvHnuu.js";import{S as t,a as r}from"./Segment-B8GGGmR1.js";import{L as l}from"./Label-BTRY4Fha.js";import{F as d}from"./FieldError-BvWeuB1p.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./useFieldComponent-K4osF3of.js";import"./utils---ZBHqUT.js";import"./useMakeFocusable-CerEYjjB.js";import"./RadioGroup-B-apbVKc.js";import"./FieldError-DKbYNsKn.js";import"./Text-CELcxyth.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bjo4WKP7.js";import"./useLabel-DsmrWctO.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./SelectionIndicator-CQjOYyqW.js";import"./useFormValidation-BOj1NNIZ.js";import"./useFocus-Besr2u9O.js";import"./useControlledState-CzL0wnxp.js";import"./FocusScope-CPpTYY10.js";import"./useFocusRing-CwF8Yxqy.js";import"./context-Dv0AyQUz.js";import"./useFormReset-DMfMEm_f.js";import"./usePress-BAll9lzw.js";import"./useFocusable-DNqkvuS2.js";import"./VisuallyHidden-DQ4VZa68.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,J as __namedExportsOrder,H as default};
