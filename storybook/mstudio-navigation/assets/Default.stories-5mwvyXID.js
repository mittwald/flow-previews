import{C as t}from"./CheckboxGroup-B7z7zqag.js";import{R as e}from"./index-B-o1Wr-g.js";import{L as c}from"./Label-DmbcA-Bx.js";import{a as W}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as L}from"./FormField.module-CDQmloCt.js";import{C as o}from"./Checkbox-JtY6yrhp.js";import{C as p}from"./CheckboxButton-DF1D980f.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./flowComponent-D6-TVbjo.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./ColumnLayout-BuKdk97R.js";import"./deepHas-qlU7dqTi.js";import"./react-children-utilities-D14ImiYi.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Label-BFvRcNt5.js";import"./utils-CCebJm36.js";import"./Hidden-CRdWNeH8.js";import"./v4-CQkTLCs1.js";import"./IconApp-BTi5eST8.js";import"./IconWarning-C5JDBu26.js";import"./FieldError-CjNivrvv.js";import"./useFocusRing-CTDVvBmm.js";import"./Text-CByKVUtS.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-BT50PPhj.js";import"./Form-B_VAMaUE.js";import"./useLabel-DrlXsFf-.js";import"./useControlledState-BgxdDqm0.js";import"./usePress-C3EQNDer.js";import"./useToggleState-93Gd9adu.js";import"./useFormReset-DMREOE0P.js";import"./useFocusable-CjESOWAx.js";import"./VisuallyHidden-lWpahT0S.js";const pe={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},n={render:r=>e.createElement(t,{...r},e.createElement(c,null,"Permissions"),e.createElement(p,{value:"read"},"Read"),e.createElement(p,{value:"write"},"Write"))},m={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(c,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
