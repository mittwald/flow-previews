import{R as e}from"./index-B-o1Wr-g.js";import{L as c}from"./Label-DmbcA-Bx.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as O}from"./FieldDescription-DUHOTkLn.js";import{F as j}from"./FieldError-BglEnUNZ.js";import{T as a}from"./TimeField-BCsgKP0_.js";import{c as d}from"./DateField-B55wiFcA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DWb7RnwM.js";import"./index-ynQ6n1pc.js";import"./flowComponent-D6-TVbjo.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Label-BFvRcNt5.js";import"./utils-CCebJm36.js";import"./Hidden-CRdWNeH8.js";import"./v4-CQkTLCs1.js";import"./Text-B5qFq-QV.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Text-CByKVUtS.js";import"./IconApp-BTi5eST8.js";import"./IconWarning-fFpik5u2.js";import"./FieldError-CjNivrvv.js";import"./useFocusRing-CTDVvBmm.js";import"./filterDOMProps-CeZl_uWj.js";import"./Form-B_VAMaUE.js";import"./useLabel-DrlXsFf-.js";import"./Group-CFRZOSwE.js";import"./Input-IHjXEmTc.js";import"./usePress-C3EQNDer.js";import"./useControlledState-BgxdDqm0.js";import"./FocusScope-Deam_7e8.js";import"./useCollator-DiB6vpBo.js";import"./useFormReset-DMREOE0P.js";import"./useEvent-CmPtILZD.js";import"./useSpinButton-BbqLYcl6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";const Se={title:"Form Controls/TimeField",component:a,render:r=>e.createElement(a,{onChange:_("onChange"),...r},e.createElement(c,null,"Time"))},i={},t={args:{isDisabled:!0}},o={args:{isRequired:!0}},s={render:r=>e.createElement(a,{...r},e.createElement(c,null,"Time"),e.createElement(O,null,"Enter a time"))},m={render:r=>e.createElement(a,{...r,defaultValue:new d(11,45)},e.createElement(c,null,"Time"))},n={render:r=>e.createElement(a,{...r,isInvalid:!0,isRequired:!0},e.createElement(c,null,"Time"),e.createElement(j,null,"Time is required"))},p={args:{granularity:"hour"}},l={args:{minValue:new d(8,0),maxValue:new d(16,0)}};var u,F,T;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,E,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(f=(E=t.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var b,D,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(h=(D=o.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var V,q,L;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...(L=(q=s.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var R,S,x;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,W,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(y=(W=n.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var M,C,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...($=(C=p.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var v,G,I;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const xe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{i as Default,t as Disabled,p as Granularity,l as MinMaxValue,o as Required,m as WithDefaultValue,s as WithFieldDescription,n as WithFieldError,xe as __namedExportsOrder,Se as default};
