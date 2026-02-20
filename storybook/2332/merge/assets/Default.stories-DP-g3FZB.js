import{j as e}from"./iframe-BF3zk0it.js";import{S as t,a as r}from"./Segment-D3FN91bk.js";import{L as l}from"./Label-DcRc8bay.js";import{F as d}from"./FieldError-C2kAtlyK.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./useFieldComponent-Z2yLJYUo.js";import"./utils-Ds629Okb.js";import"./useMakeFocusable-CNDpUSUP.js";import"./RadioGroup-CMgaRnEi.js";import"./FieldError-WTvIa9hl.js";import"./Text-CwwNB0nU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-r-oZJvOh.js";import"./useLabel-CnUcYl5P.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./SelectionIndicator-DPkZaIrz.js";import"./useFormValidation-Clvn3NKc.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useControlledState-ChKdFYY_.js";import"./FocusScope-YXqkLzes.js";import"./context-B_W42rBs.js";import"./useFormReset-Dd7cUUSK.js";import"./usePress-DqnzUH3I.js";import"./useFocusable-BWie7cw6.js";import"./VisuallyHidden-P8G91P8h.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
