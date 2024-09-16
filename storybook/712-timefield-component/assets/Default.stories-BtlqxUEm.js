import{C as t}from"./CheckboxGroup-JveURPip.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as c}from"./Label-H6f0-JrX.js";import{a as W}from"./chunk-454WOBUV-CM0pFb8Z.js";import{F as L}from"./FormField.module-jgORCpta.js";import{C as o}from"./Checkbox-Bepx2ksr.js";import{C as p}from"./CheckboxButton-C4bT3P21.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-C5nr8jLZ.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColumnLayout-C9LwylRg.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Label-CaZe8gQk.js";import"./utils-CSHM5tWr.js";import"./Hidden-BsXGu--s.js";import"./v4-CQkTLCs1.js";import"./IconApp-Cw6LIZ6L.js";import"./IconWarning-CYODic7s.js";import"./Form-DTFy3O7Q.js";import"./useFocusRing-CRCkdtud.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-BNegcRvf.js";import"./RSPContexts-BseA8goh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B7K2eYzO.js";import"./useToggleState-BGO0y5IJ.js";import"./useFormReset-DlrFI1sj.js";import"./useFocusable-Dtk_6mL9.js";import"./usePress-Do5SRlXR.js";import"./VisuallyHidden-D4oQIDY4.js";const pe={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},n={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(p,{value:"read"},"Read"),e.createElement(p,{value:"write"},"Write"))},m={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
