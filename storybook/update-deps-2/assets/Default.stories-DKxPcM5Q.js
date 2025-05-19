import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-DN9hvcN1.js";import"./index-CgfFrydU.js";import{L as p}from"./Label-BnZNwGkU.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-Dbc2xQBL.js";import{C as o}from"./Checkbox-CzzEztoA.js";import{C as m}from"./CheckboxButton-CupcYlTF.js";import"./ColumnLayout-aHo_Coxh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./Label-nK1nmjBx.js";import"./utils-D9H5ZYVa.js";import"./Hidden-DwT0szmK.js";import"./v4-CtRu48qb.js";import"./IconWarning-Dhqk9c5Q.js";import"./FieldError-CYJLgZCM.js";import"./Text-RYc5i20l.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-9nj2DFX_.js";import"./Form-BPgN4cN5.js";import"./useLabel-CVdsQLKm.js";import"./useFormValidation-BSu4mMLa.js";import"./useFocus-Dz5Sgz6F.js";import"./usePress--lgM-7rV.js";import"./useFocusRing-VURPolDQ.js";import"./useToggleState-CFxRzXi5.js";import"./useFormReset-wPtuGCA4.js";import"./useFocusable-B6XldfNl.js";import"./useControlledState-YIijONQK.js";import"./VisuallyHidden-CNMq674x.js";const de={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
