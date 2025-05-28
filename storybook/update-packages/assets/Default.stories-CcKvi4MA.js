import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{L as d}from"./Label-DOGKOP9z.js";import{a as I}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-B-Bd-DqX.js";import{F as O}from"./FieldError-BliU6s2n.js";import{T as i}from"./TimeField-B40gdfTE.js";import{c as l}from"./DateField-BHmJqakI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9e9kKsf.js";import"./mergeRefs-DiwoqHxs.js";import"./index-Brqd7pHr.js";import"./index-B2KKL2uI.js";import"./useLocalizedStringFormatter-BzGhSkyu.js";import"./Label-B_sU3NXB.js";import"./utils-Bm37ngJk.js";import"./Hidden-DwT0szmK.js";import"./v4-CtRu48qb.js";import"./Text-BsonjX7Q.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-I7rzu-gq.js";import"./IconWarning-CuaYDKOA.js";import"./FieldError-C4lz7LlR.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-BD87mkug.js";import"./useLabel-BQ8zpiVY.js";import"./Group-CdFYj2sc.js";import"./useFocusRing-wzjDdF0K.js";import"./useFocus-C3ExUvEL.js";import"./Input-D0tr6WTW.js";import"./usePress-CC9yd5Fh.js";import"./FocusScope--xlp8sQI.js";import"./useCollator-rVor1fd8.js";import"./useFormReset-gF4HkNmA.js";import"./useFormValidation-yIPL_zyl.js";import"./useEvent-Dw3zA1wO.js";import"./useSpinButton-D2LUhsb6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-DvlyA0EJ.js";import"./useControlledState-YIijONQK.js";const Wr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
