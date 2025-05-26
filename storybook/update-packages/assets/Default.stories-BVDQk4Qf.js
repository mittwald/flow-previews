import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-CC9TKZnK.js";import"./index-CgfFrydU.js";import{L as p}from"./Label-B4ewt7OD.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-CQ37RN80.js";import{C as o}from"./Checkbox-XDgLrtTD.js";import{C as m}from"./CheckboxButton-so5HGBMu.js";import"./ColumnLayout-DqbOHPrY.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADM7KP_B.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./Label-B_sU3NXB.js";import"./utils-Bm37ngJk.js";import"./Hidden-DwT0szmK.js";import"./v4-CtRu48qb.js";import"./IconWarning-CNxTpz-G.js";import"./FieldError-C4lz7LlR.js";import"./Text-I7rzu-gq.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-9nj2DFX_.js";import"./Form-BD87mkug.js";import"./useLabel-BQ8zpiVY.js";import"./useFormValidation-yIPL_zyl.js";import"./useFocus-C3ExUvEL.js";import"./usePress-CC9yd5Fh.js";import"./useFocusRing-wzjDdF0K.js";import"./useToggleState-BrsYFbbM.js";import"./useFormReset-gF4HkNmA.js";import"./useFocusable-CzgSXE3t.js";import"./useControlledState-YIijONQK.js";import"./VisuallyHidden-C4REVXC4.js";const de={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
