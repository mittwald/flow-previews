import{j as e}from"./iframe-iY_Mn_oy.js";import{S as t,a as r}from"./Segment-Ban1OSgC.js";import{L as l}from"./Label-3EuxSz5j.js";import{F as d}from"./FieldError-rrdHjYdT.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./useFieldComponent-Cxjop7r-.js";import"./utils-C-pMCGM-.js";import"./useMakeFocusable-Bl79lDJ_.js";import"./RadioGroup-NsDgPRge.js";import"./FieldError-BP_EVNQV.js";import"./Text-CktBEW1F.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-2TpMp3Y3.js";import"./useLabel-8EVB-03H.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./SelectionIndicator-C9Y7msNP.js";import"./useFormValidation-B6OmY3vR.js";import"./useFocus-Nxno6ZgW.js";import"./useControlledState-DUH-ni6I.js";import"./FocusScope-Crvk_gLu.js";import"./useFocusRing-BNNZSKMh.js";import"./context-DIbVk5_z.js";import"./useFormReset-DJj-QXR5.js";import"./usePress-B5dXj1sU.js";import"./useFocusable-Bi19l3La.js";import"./VisuallyHidden-DEFkQEyo.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
