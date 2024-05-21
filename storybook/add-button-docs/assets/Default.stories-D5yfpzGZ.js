import{C as t}from"./index-IksQhejM.js";import{R as e}from"./index-uCp2LrAq.js";import"./index-kwZulXfd.js";import{a as W}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as L}from"./FormField.module-BhXj9X_0.js";import{C as o}from"./index-DUKxki_P.js";import{C as p}from"./index-BE0O0ITi.js";import{L as m}from"./Label-CWGVqeT4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPbRU2D0.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DZfY3KTC.js";import"./ColumnLayout-B78AueES.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./v4-CQkTLCs1.js";import"./IconApp-BHY5Gtgt.js";import"./IconWarning-VblBin6y.js";import"./Form-DC_Jaq0Q.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./useLabel-CRisioBB.js";import"./useLabels-7II0TQXO.js";import"./Text-QhWkLhD7.js";import"./RSPContexts-CJnKmcd7.js";import"./Label-D2L52JVz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B8AA3oOY.js";import"./useToggleState-BH37kVIL.js";import"./useFormReset-Co0XpM0Q.js";import"./usePress-C4eoOWOJ.js";import"./VisuallyHidden-DMUsmByH.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";const me={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},n={render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(p,{value:"read"},"Read"),e.createElement(p,{value:"write"},"Write"))},c={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(R=(g=n.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var f,D,G;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const pe=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,i as CheckboxDisabled,s as CheckboxGroupDisabled,a as Default,c as WithFieldError,pe as __namedExportsOrder,me as default};
