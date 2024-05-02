import{C as t}from"./index-C6FTHlPh.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-kone6XRS.js";import{a as W}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as L}from"./FormField.module-B5hG92F8.js";import{C as o}from"./index-gKxiBr8f.js";import{C as m}from"./index-DqNpSm3k.js";import{L as l}from"./Label-BY-lGqJc.js";import"./import-Cu03TQlK.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./real-module-_6R3Ww0Q.js";import"./index-Di8ZIXM2.js";import"./ColumnLayout-D14VktFn.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./v4-CQkTLCs1.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";const V={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(l,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},n={render:r=>e.createElement(t,{...r},e.createElement(l,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},c={render:r=>e.createElement(t,{...r},e.createElement(l,null,"Permissions"),e.createElement(m,{value:"read"},"Read"),e.createElement(m,{value:"write"},"Write"))},i={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(l,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,k,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var v,g,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(R=(g=c.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var f,D,G;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const X=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{c as CheckboxButtons,n as CheckboxDisabled,s as CheckboxGroupDisabled,a as Default,i as WithFieldError,X as __namedExportsOrder,V as default};
