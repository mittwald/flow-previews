import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{L as d}from"./Label-BlFJqu_U.js";import{a as I}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-DwkiDR0F.js";import{F as O}from"./FieldError-B3rmrlTw.js";import{T as i}from"./TimeField-Dq-jZ9BC.js";import{c as l}from"./DateField-uvY108CH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Label-D7zTyyav.js";import"./utils-D_n-6U4k.js";import"./Hidden-DtYLaSTT.js";import"./v4-CtRu48qb.js";import"./Text-Dr5MNJ9m.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Wrap-DQq6jo70.js";import"./Text-BUuVncJZ.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./FieldError-BGs8e4N-.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-czy9A9fl.js";import"./useLabel-BoT2JKOr.js";import"./Group-DEpQP6iN.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocus-DPMzGzIF.js";import"./Input-B3uAq9ei.js";import"./usePress-DKvzVrwU.js";import"./FocusScope-ienAdI6u.js";import"./useCollator-BSqHj9jo.js";import"./useFormReset-C7M_aUQL.js";import"./useFormValidation-xTAo0ZUA.js";import"./useEvent-9NPw0H85.js";import"./useSpinButton-B4Y-laSk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-DF5EqP_z.js";import"./useControlledState-CHe-wEx1.js";const Mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(L=m.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var R,w,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(W=(w=p.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var y,M,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...(C=(M=n.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var $,v,G;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(G=(v=c.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const Cr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,a as Disabled,n as Granularity,c as MinMaxValue,s as Required,m as WithDefaultValue,t as WithFieldDescription,p as WithFieldError,Cr as __namedExportsOrder,Mr as default};
