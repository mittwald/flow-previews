import{j as e}from"./iframe-BV_gLY1W.js";import{S as t,a as r}from"./Segment-B1jo3pfj.js";import{L as l}from"./Label-DSp9Q3qx.js";import{F as d}from"./FieldError-Du2SwoFV.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DjNrJ_Te.js";import"./index-D8dVI0GG.js";import"./clsx-B-dksMZM.js";import"./index-iDKz2btu.js";import"./useFieldComponent-Ciy1vkCA.js";import"./utils-pcZMLEVF.js";import"./useMakeFocusable-D7i_ZYD4.js";import"./RadioGroup-CwGc2zMS.js";import"./FieldError-Q2svFxIr.js";import"./Text-x_iEgbKh.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cc8Ejva8.js";import"./useLabel-BcIwqyBf.js";import"./Label-TEYoBhWb.js";import"./Hidden-DpRhW0r1.js";import"./SelectionIndicator-Bw1WJJhz.js";import"./useFormValidation-Bzs4UsOG.js";import"./useFocus-BhZlDk36.js";import"./useFocusRing-DHBFiW-v.js";import"./useControlledState-D8GCi_t3.js";import"./FocusScope-Cdk-yaL2.js";import"./context-D0kYsfYD.js";import"./useFormReset-Ba41Oqje.js";import"./usePress-Cpaxayx2.js";import"./useFocusable-CF0VfUE0.js";import"./VisuallyHidden-282mV7GD.js";import"./IconWarning-BvnX4fSp.js";import"./remote-DzXnO2Bt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DG58vGXD.js";import"./AlertText-9lAe-Sfe.js";import"./AlertIcon-CdR_G7Yx.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
