import{j as e}from"./iframe-lphi5Fln.js";import{S as t,a as r}from"./Segment-Ei0RlT7q.js";import{L as l}from"./Label-CqftOgdQ.js";import{F as d}from"./FieldError-CHFlSzPg.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./useFieldComponent-6mmayeW0.js";import"./utils-Is-sFETw.js";import"./useMakeFocusable-6V6ke2-z.js";import"./RadioGroup-CyLLADK7.js";import"./FieldError-nA_6I3J3.js";import"./Text-CwPOMTFI.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQ7FIPf4.js";import"./useLabel-B3jPjt5T.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./useFormValidation-fTAeqOxz.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useControlledState-D2ulvinQ.js";import"./FocusScope-DRoVwcjL.js";import"./context-hul-JKEa.js";import"./useFormReset-CSRdRe02.js";import"./usePress-ByR9A8gc.js";import"./useFocusable-CWG73OOy.js";import"./VisuallyHidden-DjAmLvSg.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
