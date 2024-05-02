import{N as t}from"./index-BM__JrXo.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-kone6XRS.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-BtqRf5sT.js";import{F as I}from"./FormField.module-B5hG92F8.js";import{L as a}from"./Label-BY-lGqJc.js";import"./import-Cu03TQlK.js";import"./flowComponent-DnUs06RV.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./real-module-_6R3Ww0Q.js";import"./index-Bvj9sSMo.js";import"./Button-BViRxOm6.js";import"./IconApp-Bwxw5AuI.js";import"./IconWarning-DFvgIVCz.js";import"./Text-DFvNZx2y.js";import"./index-dhKWstfL.js";import"./index-HBuN0i9E.js";import"./LoadingSpinner-D3tEegIC.js";import"./v4-CQkTLCs1.js";const ae={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"Age"))},o={},s={args:{isDisabled:!0}},i={args:{isRequired:!0}},n={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(a,null,"Age"),e.createElement(v,null,"Enter your age"))},l={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(a,null,"Age"))},m={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(a,null,"Age"),e.createElement(I,null,"Age is required"))},u={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(a,null,"Storage"))};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var E,f,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(f=i.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var N,h,L;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(L=(h=n.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var V,A,S;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,R,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var y,x,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(C=(x=u.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const oe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{o as Default,s as Disabled,i as Required,l as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,u as WithUnit,oe as __namedExportsOrder,ae as default};
