import{R as e}from"./index-Cs7sjTYM.js";import{L as c}from"./Label-hUuz2MFm.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as O}from"./FieldDescription-BpusDlac.js";import{F as j}from"./FormField.module-D7B8ulKH.js";import{T as a}from"./TimeField-4x2UV7zN.js";import{c as d}from"./DateField-BPNKzdTp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-ogV7N3uI.js";import"./index-Cf-03bMR.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Label-C-iBdzH7.js";import"./utils-Cd8r7pc9.js";import"./Hidden-C2kgQquV.js";import"./v4-CQkTLCs1.js";import"./Text-D6T4gxda.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Bnjm0IRl.js";import"./IconApp-C0pIffFx.js";import"./IconWarning-B6tvdphn.js";import"./Form-CDVAwZBo.js";import"./useFocusRing-DdBFev_0.js";import"./useLabel-BA8WH6BO.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-1uS31LKS.js";import"./Input-zQ88cEWx.js";import"./usePress-BiUpVy3m.js";import"./useControlledState-B7K2eYzO.js";import"./FocusScope-DMuRQrVO.js";import"./useCollator-tPR4bsZ_.js";import"./getScrollParent-CcmJp979.js";import"./useFormReset-BmVKDtZT.js";import"./useEvent-BjqsPY1I.js";import"./useSpinButton-1NC2zrVd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";const Se={title:"Form Controls/TimeField",component:a,render:r=>e.createElement(a,{onChange:_("onChange"),...r},e.createElement(c,null,"Time"))},i={},t={args:{isDisabled:!0}},o={args:{isRequired:!0}},s={render:r=>e.createElement(a,{...r},e.createElement(c,null,"Time"),e.createElement(O,null,"Enter a time"))},m={render:r=>e.createElement(a,{...r,defaultValue:new d(11,45)},e.createElement(c,null,"Time"))},n={render:r=>e.createElement(a,{...r,isInvalid:!0,isRequired:!0},e.createElement(c,null,"Time"),e.createElement(j,null,"Time is required"))},p={args:{granularity:"hour"}},l={args:{minValue:new d(8,0),maxValue:new d(16,0)}};var u,F,T;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,E,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
