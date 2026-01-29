import{j as e}from"./iframe-CV15FJMl.js";import{S as t,a as r}from"./Segment-DT468o2K.js";import{L as l}from"./Label-BYiN1vfD.js";import{F as d}from"./FieldError-e14SOUTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./clsx-B-dksMZM.js";import"./index-DgyS9CYh.js";import"./useFieldComponent-4syZJMEs.js";import"./utils-B45PgFGd.js";import"./useMakeFocusable-BV2Jg7A8.js";import"./RadioGroup-CdSWKtav.js";import"./FieldError-CDBleeuN.js";import"./Text-Bk0CAvR5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B5_Ftb3l.js";import"./useLabel-DgTpLYXb.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./SelectionIndicator-C649Jmr0.js";import"./useFormValidation-rdndu8q5.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useControlledState-Br5i43rk.js";import"./FocusScope-Da56m84L.js";import"./context-Is67_JkX.js";import"./useFormReset-DQt01LcM.js";import"./usePress-C9ebI84m.js";import"./useFocusable-DenRoGzb.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
