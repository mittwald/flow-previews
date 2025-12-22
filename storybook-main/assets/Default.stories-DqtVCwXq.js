import{j as e}from"./iframe-DALg75d7.js";import{S as t,a as r}from"./Segment-Dv2TMw6j.js";import{L as l}from"./Label-CllN_pGF.js";import{F as d}from"./FieldError-JMY6vjHT.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./useFieldComponent-BaBZIB3g.js";import"./utils-CCMGMBS3.js";import"./useMakeFocusable-B3XwzvLG.js";import"./RadioGroup-2GjkvO2V.js";import"./FieldError-B5AAUQ1i.js";import"./Text-CuJqaQ90.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-ChRHrJTG.js";import"./useLabel-C6FFt053.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./useFormValidation-jiwCVXG0.js";import"./useFocus-uyJaeSg2.js";import"./useControlledState-10c65vgi.js";import"./FocusScope-CEIkcXTC.js";import"./useFocusRing-DgbRXdyO.js";import"./context-D-SwIuvT.js";import"./useFormReset-D3blZuYj.js";import"./usePress-BlF5TfdE.js";import"./useFocusable-KXnvIYuK.js";import"./VisuallyHidden-BtdNRxOz.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
