import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-QvHcSlIy.js";import"./index-BdpSHsi2.js";import{L as p}from"./Label-bqUfW7BT.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-dk6DcvhS.js";import{C as o}from"./Checkbox-DOe7YD46.js";import{C as m}from"./CheckboxButton-IXwyFvAt.js";import"./ColumnLayout-ozKDlLt2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DVKy8vv7.js";import"./mergeRefs-C3hk6Bw5.js";import"./iframe-CKDvs4CE.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./FormField.module-B9AzUSUD.js";import"./index-BAMY2Nnw.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./Label-B5BNuFXH.js";import"./utils-k5T1Axi4.js";import"./Hidden-RoZfe91Z.js";import"./v4-CtRu48qb.js";import"./IconWarning-CK356P05.js";import"./FieldError-CWvjII8X.js";import"./Text-CCjUyjXh.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Form-D_RCBvUR.js";import"./useLabel-BTthEqzH.js";import"./useFormValidation-BVpaaUUN.js";import"./useFocus-DtkvuJ2b.js";import"./usePress-D8pXfMRf.js";import"./useFocusRing-CsskK932.js";import"./useToggleState-CJsTx8sI.js";import"./useFormReset-dEmc_A_j.js";import"./useFocusable-BgmoI-LE.js";import"./useControlledState-B-V-WRDl.js";import"./VisuallyHidden-DvRlzb5d.js";const ue={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const he=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,a as CheckboxDisabled,t as CheckboxGroupDisabled,i as Default,c as WithFieldError,he as __namedExportsOrder,ue as default};
