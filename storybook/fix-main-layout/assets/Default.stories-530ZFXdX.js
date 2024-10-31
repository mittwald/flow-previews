import{C as t}from"./CheckboxGroup-pVGuO2H4.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as c}from"./Label-B7WPDHBg.js";import{a as W}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as L}from"./FormField.module-C5gi7dhZ.js";import{C as o}from"./Checkbox-CHYiqXVA.js";import{C as p}from"./CheckboxButton-C5f5h_rt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-aK1NJH1f.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColumnLayout-BGHswle4.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Label-C-iBdzH7.js";import"./utils-Cd8r7pc9.js";import"./Hidden-C2kgQquV.js";import"./v4-CQkTLCs1.js";import"./IconApp-D6xsfpa6.js";import"./IconWarning-CysTUiwL.js";import"./FieldError-C27s8X8S.js";import"./Text-Bnjm0IRl.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-BseA8goh.js";import"./Form-CN49erGr.js";import"./useFocusRing-CqFdZJbR.js";import"./useLabel-BA8WH6BO.js";import"./useControlledState-B7K2eYzO.js";import"./useToggleState-B7NobPBU.js";import"./useFormReset-BmVKDtZT.js";import"./useFocusable-CKybZYMg.js";import"./usePress-Dcn7RY69.js";import"./VisuallyHidden-BOk7_Rfy.js";const pe={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},n={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(p,{value:"read"},"Read"),e.createElement(p,{value:"write"},"Write"))},m={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,k,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var v,g,R;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...(R=(g=n.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var f,D,G;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const le=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,i as CheckboxDisabled,s as CheckboxGroupDisabled,a as Default,m as WithFieldError,le as __namedExportsOrder,pe as default};
