import{j as e}from"./iframe-BuQIW6_u.js";import{C as s}from"./CheckboxGroup-CeCMcW7J.js";import{L as a}from"./Label-_oW49-Il.js";import{F}from"./FieldError-Jn80i9Ms.js";import{C as r}from"./Checkbox-BM6GyFhJ.js";import{C as u}from"./CheckboxButton-DeKJfsuy.js";import"./ColumnLayout-C6dHIWgJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-tJtUwa6I.js";import"./mergeRefs-CL2E7ORH.js";import"./index-DWIiGEc3.js";import"./FormField.module-CqWyJNQI.js";import"./useLocalizedStringFormatter-DGRnVYdA.js";import"./context-DHpT4jQ7.js";import"./Label-Bj6uOgB2.js";import"./utils-C3-2IFIX.js";import"./Hidden-kXch4Bq4.js";import"./IconWarning-CTHW-5ya.js";import"./FieldError-CwfU_VRl.js";import"./Text-CA4hy8xs.js";import"./filterDOMProps-CghfNOdR.js";import"./RSPContexts-CueUa63T.js";import"./Form-QX_URUcu.js";import"./useFocus-CJRfh2Zc.js";import"./useLabel-V7qiuXiw.js";import"./usePress-BKHC3-jq.js";import"./useFocusRing-DhNL4Zu8.js";import"./useToggleState-BPUo5fOe.js";import"./useFormReset-Cq5VWng9.js";import"./useFocusable-5iT1iM-_.js";import"./useControlledState-DeMfvYEX.js";import"./VisuallyHidden-Db59Lmwd.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,he={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:P("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(u,{value:"read",children:"Read"}),e.jsx(u,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(F,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};var m,h,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,C,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(k=(C=i.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,j,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(O=(j=n.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var g,R,L;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var G,D,S;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var f,W,B;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var E,_,w;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...(w=(_=d.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const xe=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,xe as __namedExportsOrder,he as default};
