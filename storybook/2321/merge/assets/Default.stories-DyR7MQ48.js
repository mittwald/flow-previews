import{j as e}from"./iframe-BYq2oLvG.js";import{S as t,a as r}from"./Segment-Dj7Zwho5.js";import{L as l}from"./Label-xDxAxXdC.js";import{F as d}from"./FieldError-Cq2wz6X1.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./clsx-B-dksMZM.js";import"./index-BCX3_YU5.js";import"./useFieldComponent-C42pk4aC.js";import"./utils-Da-bhZeG.js";import"./useMakeFocusable-Rr4YSJCQ.js";import"./RadioGroup-C8xIUi85.js";import"./FieldError-3pauqY5q.js";import"./Text-BsD4qVoX.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BjhhXbaP.js";import"./useLabel-BBF67Bfk.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./SelectionIndicator-DxCQPmpp.js";import"./useFormValidation-DIPf7gSr.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useControlledState-B-JkoIYX.js";import"./FocusScope-CUVzpEcF.js";import"./context-WfyLsYOo.js";import"./useFormReset-COvJ3vzl.js";import"./usePress-CABccGP2.js";import"./useFocusable-eOfLyRoH.js";import"./VisuallyHidden-4k4K_3kv.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
