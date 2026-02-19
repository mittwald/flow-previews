import{j as e}from"./iframe-ByHSJ7Zj.js";import{S as t,a as r}from"./Segment-DxI_5knY.js";import{L as l}from"./Label-tcy2V_mA.js";import{F as d}from"./FieldError-C1ELgHYl.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./useFieldComponent-CBB8cMnJ.js";import"./utils-AuVRPQNE.js";import"./useMakeFocusable-DW7PayyY.js";import"./RadioGroup-DPNxmqhB.js";import"./FieldError-N78nigrI.js";import"./Text-CMdjYF8F.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B6nfDOYR.js";import"./useLabel-DwarV1Dq.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./useFormValidation-BGcU6QC0.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useControlledState-CZXI0X0f.js";import"./FocusScope-CdPzSUjP.js";import"./context-ER57Z7kb.js";import"./useFormReset-BeZmi33v.js";import"./usePress-53w3WrUq.js";import"./useFocusable-CTHcGGNa.js";import"./VisuallyHidden-DjUeNVhy.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
