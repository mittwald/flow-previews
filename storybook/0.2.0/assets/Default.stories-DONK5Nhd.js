import{j as e}from"./jsx-runtime-CLpGMVip.js";import{C as s}from"./CheckboxGroup-DoPss796.js";import"./index-Cf9XvIV_.js";import{L as p}from"./Label-DTTE3pGW.js";import{a as W}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as L}from"./FieldError-WMkAMHNQ.js";import{C as o}from"./Checkbox-C9spmk9c.js";import{C as m}from"./CheckboxButton-BcuRYGZc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-BwhkuB3x.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./ColumnLayout-qOL1VpSf.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Label-B3UarT55.js";import"./utils-DjOXyFua.js";import"./Hidden-Cfl4ctnK.js";import"./v4-CtRu48qb.js";import"./IconApp-BvTDg_ym.js";import"./IconWarning-D2hnVGSN.js";import"./FieldError-Fgq_FSbK.js";import"./useFocusRing-DNhlkveR.js";import"./Text-BK3pbL47.js";import"./filterDOMProps-BSfnXAP7.js";import"./RSPContexts-BG_vMng8.js";import"./Form-BPCPwrNr.js";import"./useLabel-ByHVstPj.js";import"./usePress-1yUr5Cwu.js";import"./useToggleState-iYqM2U5k.js";import"./useFormReset-SCbFK273.js";import"./useFocusable-BJtEpXSQ.js";import"./useControlledState-19OAjgUP.js";import"./VisuallyHidden-CvlCL3HN.js";const me={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:W("onChange")},parameters:{controls:{exclude:["onChange"]}},render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},i={},t={args:{isDisabled:!0}},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(o,{value:"write",children:"Write"})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(p,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},c={render:r=>e.jsxs(s,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(p,{children:"Permissions"}),e.jsx(o,{value:"read",children:"Read"}),e.jsx(o,{value:"write",children:"Write"}),e.jsx(L,{children:"Select at least one to continue"})]})};var d,l,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,x,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
