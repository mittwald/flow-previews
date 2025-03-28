import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-Tc_eKItf.js";import"./index-CtQTiInQ.js";import{L as p}from"./Label-C3GsNgl3.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-snFLArLq.js";import{C as o}from"./Checkbox-CfWVGYh0.js";import{C as m}from"./CheckboxButton-DIwzX5nF.js";import"./ColumnLayout-V6_UbH1_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Label-BZrcB42p.js";import"./utils-D0CTRpvX.js";import"./Hidden-Dd0lSYNZ.js";import"./v4-CtRu48qb.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-ZndYkHab.js";import"./FieldError-DHw7a52T.js";import"./Text-oMr6ueMZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-8O1fXkhd.js";import"./Form-DrDCrztH.js";import"./useLabel-BhTOAlCQ.js";import"./useFormValidation-CI5EZsou.js";import"./useFocus-HZduNndM.js";import"./usePress-CEYeyB88.js";import"./useFocusRing-HsOmCAqc.js";import"./useToggleState-GjA-q7MY.js";import"./useFormReset-Dt6BcYvw.js";import"./useFocusable-43R3EC9q.js";import"./useControlledState-BKUqB07S.js";import"./VisuallyHidden-p5Z0Rn92.js";const le={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const ue=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,a as CheckboxDisabled,t as CheckboxGroupDisabled,i as Default,c as WithFieldError,ue as __namedExportsOrder,le as default};
