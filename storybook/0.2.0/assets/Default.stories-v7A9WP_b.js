import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./CheckboxGroup-CUCUhAYX.js";import"./index-BZISi7jw.js";import{L as p}from"./Label-tmENthHg.js";import{a as W}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{F as L}from"./FieldError-DN68xrtP.js";import{C as o}from"./Checkbox-Bp5Go4nI.js";import{C as m}from"./CheckboxButton-D0wInAEb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./ColumnLayout-kpzmsF0-.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Label-aZfeS6Au.js";import"./utils-CzVyYWZn.js";import"./Hidden-C5TwESSa.js";import"./v4-CtRu48qb.js";import"./IconApp-Bw6C1rcI.js";import"./IconWarning-CYpqa6CU.js";import"./FieldError-DoW3KOQ8.js";import"./useFocusRing-DzGSygZM.js";import"./Text-PTaPc_Ci.js";import"./filterDOMProps-CeZl_uWj.js";import"./RSPContexts-BEYwq1Zw.js";import"./Form-D162gIjQ.js";import"./useLabel-Hju3pN3c.js";import"./usePress-DZCrAIzv.js";import"./useToggleState-B7W1plhv.js";import"./useFormReset-CilIRCFg.js";import"./useFocusable-CdO2YIL_.js";import"./useControlledState-4nfZ-XMX.js";import"./VisuallyHidden-DJvehTyr.js";const me={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(G=c.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const de=["Default","CheckboxGroupDisabled","CheckboxDisabled","CheckboxButtons","WithFieldError"];export{n as CheckboxButtons,a as CheckboxDisabled,t as CheckboxGroupDisabled,i as Default,c as WithFieldError,de as __namedExportsOrder,me as default};
