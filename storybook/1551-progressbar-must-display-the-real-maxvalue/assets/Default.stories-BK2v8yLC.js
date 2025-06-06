import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup--I868G6u.js";import"./index-BdpSHsi2.js";import{L as i}from"./Label-Bf5Mx8QJ.js";import{a as w}from"./index-B-lxVbXh.js";import{F as B}from"./FieldError-DcEGUJC1.js";import{C as r}from"./Checkbox-DTiGkusz.js";import{C as d}from"./CheckboxButton-Co_UgEOL.js";import"./ColumnLayout-C4GPHxXv.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-9qCNROlN.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-C7iDEH5n.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./FormField.module-B9AzUSUD.js";import"./index-BAMY2Nnw.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./Label-C5gSD-Mq.js";import"./utils-q_Aud5Js.js";import"./Hidden-RoZfe91Z.js";import"./v4-CtRu48qb.js";import"./IconWarning-DFoLg5n2.js";import"./FieldError-D2eBwE7I.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./useFormValidation-BP6joqgG.js";import"./useFocus-4XTC7e6o.js";import"./usePress-mDFtgnbt.js";import"./useFocusRing-DY5AGIis.js";import"./useToggleState-C8sObcIl.js";import"./useFormReset-B9LhY6oC.js";import"./useFocusable-BXcKiciC.js";import"./useControlledState-rjpdN6qd.js";import"./VisuallyHidden-D-Ys6Nju.js";const Ce={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:w("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},a={args:{isDisabled:!0}},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(B,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};var m,u,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,b,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,v,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var O,g,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(G=(g=c.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};var L,f,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var R,W,S;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...(S=(W=l.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const ke=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{c as CheckboxButtons,n as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,t as Default,p as WithFieldError,ke as __namedExportsOrder,Ce as default};
