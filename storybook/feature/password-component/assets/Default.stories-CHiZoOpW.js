import{C as t}from"./CheckboxGroup-DsxtqsCr.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as m}from"./Label-C-aczTYm.js";import{a as W}from"./chunk-454WOBUV-CM0pFb8Z.js";import{F as L}from"./FormField.module-DHQpNdM-.js";import{C as o}from"./Checkbox-CMbc7-ma.js";import{C as p}from"./CheckboxButton-B7B4ZhvK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./flowComponent-BqZrLudx.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ColumnLayout-C9LwylRg.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./Label-D27JuWFB.js";import"./utils-Ca6JWPXc.js";import"./v4-CQkTLCs1.js";import"./IconApp-COwJ0ZRR.js";import"./IconWarning-CBdDJmJC.js";import"./Form-yihfkm38.js";import"./useFocusable-OJvPCLGe.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-DkFxhH4d.js";import"./RSPContexts-BseA8goh.js";import"./filterDOMProps-CeZl_uWj.js";import"./useControlledState-B7K2eYzO.js";import"./useToggleState-aoqtyG8F.js";import"./useFormReset-DlrFI1sj.js";import"./usePress-DiyYDbeg.js";import"./VisuallyHidden-BF1ug10U.js";const ce={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"))},a={},s={args:{isDisabled:!0}},i={render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read",isDisabled:!0},"Read"),e.createElement(o,{value:"write"},"Write"))},n={render:r=>e.createElement(t,{...r},e.createElement(m,null,"Permissions"),e.createElement(p,{value:"read"},"Read"),e.createElement(p,{value:"write"},"Write"))},c={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(m,null,"Permissions"),e.createElement(o,{value:"read"},"Read"),e.createElement(o,{value:"write"},"Write"),e.createElement(L,null,"Select at least one to continue"))};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,C,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(G=(D=c.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const me=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,i as CheckboxDisabled,s as CheckboxGroupDisabled,a as Default,c as WithFieldError,me as __namedExportsOrder,ce as default};
