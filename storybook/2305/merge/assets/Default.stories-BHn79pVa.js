import{j as e}from"./iframe-nlVW-CPZ.js";import{S as t,a as r}from"./Segment-DswHABF2.js";import{L as l}from"./Label-BuWy1qrT.js";import{F as d}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./useFieldComponent-DOzg870F.js";import"./utils-CyuEFqip.js";import"./useMakeFocusable-CxUrmYH6.js";import"./RadioGroup-D37vSQ07.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./SelectionIndicator-DdhOYUUY.js";import"./useFormValidation-DqSMo-uw.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./FocusScope-DihhZg9P.js";import"./context-CIGB7i0H.js";import"./useFormReset-J8eUPjf8.js";import"./usePress-BSHzPeES.js";import"./useFocusable-DHxyzauV.js";import"./VisuallyHidden-44O2XzGD.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
