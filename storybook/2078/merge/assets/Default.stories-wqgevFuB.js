import{j as e}from"./iframe-kP2HEfFS.js";import{S as t,a as r}from"./Segment-BFEZodBY.js";import{L as l}from"./Label-o-9raADe.js";import{F as d}from"./FieldError-CJUuAB6W.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./useFieldComponent-D28HcwQQ.js";import"./utils-C12UPk0k.js";import"./useMakeFocusable-DTcEo_iv.js";import"./RadioGroup-NxAvrsy3.js";import"./FieldError-BL6ZnBFp.js";import"./Text-Bt0sFzeR.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D51h5Mwy.js";import"./useLabel-07phmwB_.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./SelectionIndicator-v5-gN0xn.js";import"./useFormValidation-CKIaBDhF.js";import"./useFocus-C5lTzrJh.js";import"./useControlledState-K2EmMrc1.js";import"./FocusScope-BDiazwAe.js";import"./useFocusRing-CKDLKfs4.js";import"./context-C1J5EAXU.js";import"./useFormReset-BTQYEics.js";import"./usePress-Zu3olfM4.js";import"./useFocusable-B7yvIBUC.js";import"./VisuallyHidden-BxKC931y.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
