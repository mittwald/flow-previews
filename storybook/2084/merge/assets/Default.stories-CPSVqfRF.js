import{j as r}from"./iframe-CPZmCQj-.js";import{L as d}from"./Label-Cl3ovliO.js";import{F as u}from"./FieldDescription-BFKEApQk.js";import{F as T}from"./useFieldComponent-ZdrCImE8.js";import{T as i}from"./TimeField-GvjNt2Ch.js";import{M as l}from"./DateField-D6cyzSdW.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./Label-DhGaeBi-.js";import"./utils-DbTuSxgD.js";import"./Hidden-klXcLh_8.js";import"./Text-cGw-MBFK.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BHYwQlMQ.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";import"./useMakeFocusable-BIcdpqxH.js";import"./Form-KkxpJ3qz.js";import"./useLabel-DeJHfKxc.js";import"./Group-Csdn_P-J.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocus-DSlim6kP.js";import"./Input-CQkI7-zw.js";import"./usePress-6Qpgo4V0.js";import"./useFormValidation-D952ndYN.js";import"./useControlledState-BjliE2JI.js";import"./FocusScope-W4GOB1Wo.js";import"./useCollator-CE-f4Kw6.js";import"./useFormReset-BZ0LqTvh.js";import"./useEvent-Bk3E68pD.js";import"./useSpinButton-Cv8KhrdW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-hPK6PLie.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
