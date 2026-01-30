import{j as e}from"./iframe-CGL3Ztd8.js";import{S as t,a as r}from"./Segment-Bj7USftx.js";import{L as l}from"./Label-BdVzzMHl.js";import{F as d}from"./FieldError-Bg6s6kv2.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./clsx-B-dksMZM.js";import"./index-eHspQkB2.js";import"./useFieldComponent-CHIggLRE.js";import"./utils-BPLHaINM.js";import"./useMakeFocusable-Cue-GwYJ.js";import"./RadioGroup-BQDvw_ZI.js";import"./FieldError-CZz7QnF8.js";import"./Text-BKxs7Hdx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ba7VKjcY.js";import"./useLabel-Dh-HsBYa.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./SelectionIndicator-CKCmLDiO.js";import"./useFormValidation-DhAeSygX.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useControlledState-DjoZo3jd.js";import"./FocusScope-CzHXyZUV.js";import"./context-BN4qQIb1.js";import"./useFormReset-C_UBUwcF.js";import"./usePress-BpWTOkQr.js";import"./useFocusable-MZ2jhLFm.js";import"./VisuallyHidden-DvGmoJqV.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
