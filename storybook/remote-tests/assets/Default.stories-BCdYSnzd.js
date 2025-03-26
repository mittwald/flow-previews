import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-BvjQMUfF.js";import"./index-CXcpQZ5J.js";import{L as p}from"./Label-BlFJqu_U.js";import{a as W}from"./index-B-lxVbXh.js";import{F as L}from"./FieldError-B3rmrlTw.js";import{C as o}from"./Checkbox-ChBSBJka.js";import{C as m}from"./CheckboxButton-BknceXUZ.js";import"./ColumnLayout-BhUO9y8z.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./FormField.module-B9AzUSUD.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Label-D7zTyyav.js";import"./utils-D_n-6U4k.js";import"./Hidden-DtYLaSTT.js";import"./v4-CtRu48qb.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./FieldError-BGs8e4N-.js";import"./Text-BUuVncJZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-C2SW_8A9.js";import"./Form-czy9A9fl.js";import"./useLabel-BoT2JKOr.js";import"./useFormValidation-xTAo0ZUA.js";import"./useFocus-DPMzGzIF.js";import"./usePress-DKvzVrwU.js";import"./useFocusRing-C5Ht9MUl.js";import"./useToggleState-BTAejZnG.js";import"./useFormReset-C7M_aUQL.js";import"./useFocusable-C54KMRcY.js";import"./useControlledState-CHe-wEx1.js";import"./VisuallyHidden-nUs_Pnf6.js";const le={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
