import{j as e}from"./iframe-Bvl8-Rhq.js";import{S as t,a as r}from"./Segment-COPqzc7f.js";import{L as l}from"./Label-BVY1ryMc.js";import{F as d}from"./FieldError-BkA2bgrH.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./clsx-B-dksMZM.js";import"./index-uwiO8q01.js";import"./useFieldComponent-D4BbqCv_.js";import"./utils-D7QihGpD.js";import"./useMakeFocusable-DHL0QPQ5.js";import"./RadioGroup-Cstr-VTt.js";import"./FieldError-Du4MQwEm.js";import"./Text-BaIKemC9.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D70wz7aV.js";import"./useLabel-B5hAF-sV.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./SelectionIndicator-i35HMeKk.js";import"./useFormValidation-Cl3HF3fr.js";import"./useFocus-DXNpHz9A.js";import"./useFocusRing-gQZwig4O.js";import"./useControlledState-B5E2fQyc.js";import"./FocusScope-DRyVjtRp.js";import"./context--xVWQ6Ca.js";import"./useFormReset-C0JkbMmh.js";import"./usePress-C7_C1qgD.js";import"./useFocusable-CNuLnnFg.js";import"./VisuallyHidden-ScIHpAUT.js";import"./IconWarning-_TKsX-mO.js";import"./remote-CTLFAioN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
