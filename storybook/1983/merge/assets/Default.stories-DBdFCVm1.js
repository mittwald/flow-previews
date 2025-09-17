import{j as r}from"./iframe-Fj9rH4cM.js";import{L as d}from"./Label-gqfIXoZt.js";import{F as $}from"./FieldDescription-4rZoU9rT.js";import{F as v}from"./FieldError-DmxLphhJ.js";import{T as i}from"./TimeField-DaqN2Fxz.js";import{M as l}from"./DateField-CPAMh8d7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./context-qP4IgOj6.js";import"./Label-BqD1zatE.js";import"./utils-1iPQLSxY.js";import"./Hidden-Duc9NbhT.js";import"./Text-CY4-u4so.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Text-DCFUXQ-H.js";import"./IconWarning-BqHcxRer.js";import"./FieldError-Dx-XJATE.js";import"./filterDOMProps-CghfNOdR.js";import"./FormField.module-CqWyJNQI.js";import"./Form-OtjI-dAW.js";import"./useFocus-7HBUp4O0.js";import"./useLabel-C-3cKpbA.js";import"./Group-DdYjb3kh.js";import"./useFocusRing-CKWUlu0I.js";import"./usePress-CXUdxwPb.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./useFormReset-D9GIYNIc.js";import"./useEvent-UTIdhTs4.js";import"./useSpinButton-B0z9tNmF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-BxVme0AK.js";import"./useControlledState-DkD4o1Gz.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,E,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,L,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var R,_,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(w=(_=n.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var M,O,W;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var y,C,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,Vr as __namedExportsOrder,Sr as default};
