import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{L as d}from"./Label-Ccht5eDB.js";import{a as I}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-h80YvCXc.js";import{F as O}from"./FieldError-Egs4LnTH.js";import{T as i}from"./TimeField-CHvD2QGV.js";import{c as l}from"./DateField-Cm4kIc1j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./Label-DfZa7xTI.js";import"./utils-Df1au6pS.js";import"./Hidden-DtYLaSTT.js";import"./v4-CtRu48qb.js";import"./Text-ilWQSh2o.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-WoclspSc.js";import"./IconWarning-B9HL9CFH.js";import"./FieldError-Cz4aM9kS.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BxoNbjqJ.js";import"./useLabel-DrVJGper.js";import"./Group-C9SXHWFA.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocus-Beyq6_MT.js";import"./Input-Bw24jdWy.js";import"./usePress-v55RTCzR.js";import"./FocusScope-DN1fuaqe.js";import"./useCollator-gRp1mHBo.js";import"./useFormReset-McAVcQ-S.js";import"./useFormValidation-CX89bhxE.js";import"./useEvent-D5X-zOrV.js";import"./useSpinButton-CLqQ2_N8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-B88cUO9f.js";import"./useControlledState-CHe-wEx1.js";const Wr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,D;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(b=s.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,V,E;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...(E=(V=t.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var q,L,S;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var R,w,W;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(W=(w=n.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var y,M,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var $,v,G;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(G=(v=c.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const yr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,a as Disabled,p as Granularity,c as MinMaxValue,s as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,yr as __namedExportsOrder,Wr as default};
