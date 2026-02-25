import{j as e}from"./iframe-n3VOiEf5.js";import{S as t,a as r}from"./Segment-BjKczW8y.js";import{L as l}from"./Label-B5oQkcZ-.js";import{F as d}from"./FieldError-DRCS1Gz9.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-xlJ5dlMA.js";import"./index-Bqd_wUB4.js";import"./clsx-B-dksMZM.js";import"./index-CHzAo02W.js";import"./useFieldComponent-6hUMLoYk.js";import"./utils-BTX3Dk-t.js";import"./useMakeFocusable-BO09JXR2.js";import"./RadioGroup-AQiffJoY.js";import"./FieldError-IZ2wmqkG.js";import"./Text-BWj5dCJ1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BfOiuDw8.js";import"./useLabel-DpN8AhZi.js";import"./Label-CZ6Ig0wh.js";import"./Hidden-8NzXPPVn.js";import"./SelectionIndicator-QXVr0AO7.js";import"./useFormValidation-0mLIssn1.js";import"./useFocus-Di5Kz97s.js";import"./useFocusRing-50iWl84k.js";import"./useControlledState-17a16_5D.js";import"./FocusScope-BBR4OeS8.js";import"./context-DhQskmxc.js";import"./useFormReset-C-KjP2af.js";import"./usePress-CVHN3NRW.js";import"./useFocusable-ZTBPsPh1.js";import"./VisuallyHidden-DCK-vxP3.js";import"./IconWarning-BKHoIgIa.js";import"./remote-CWx46e_E.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BFx8pFGn.js";import"./AlertText-BJDrahB4.js";import"./AlertIcon-DtfTxuVy.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
