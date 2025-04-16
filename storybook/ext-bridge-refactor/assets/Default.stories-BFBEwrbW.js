import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-BMGTrS2r.js";import"./index-n-xcLTj3.js";import{L as p}from"./Label-DuWaARVY.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-DTHL6QGh.js";import{C as o}from"./Checkbox-CQwdnBo2.js";import{C as m}from"./CheckboxButton-d8XW0TBt.js";import"./ColumnLayout-C6rBwMDa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7o24Rkki.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Label-CnZl9U2I.js";import"./utils-CHEN54dH.js";import"./Hidden-B-9naaqD.js";import"./v4-CtRu48qb.js";import"./IconWarning-BT9Vk3ZR.js";import"./FieldError-D-X35EJ8.js";import"./Text-DatuNbZl.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-DXggXklQ.js";import"./Form-ChuGhSFG.js";import"./useLabel-DBnsbNrv.js";import"./useFormValidation-BxWfN6mX.js";import"./useFocus-XoJeJsyS.js";import"./usePress-D9kiuk6J.js";import"./useFocusRing-qDa0kwlS.js";import"./useToggleState-Ckq7rO_C.js";import"./useFormReset-DmN8pfru.js";import"./useFocusable-I3Nst49W.js";import"./useControlledState-B6lyO5nT.js";import"./VisuallyHidden-DJ8AgGjM.js";const de={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,k,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var v,g,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,G,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const le=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,a as CheckboxDisabled,t as CheckboxGroupDisabled,i as Default,c as WithFieldError,le as __namedExportsOrder,de as default};
