import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{L as d}from"./Label-Dwg101gb.js";import{a as I}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-DaQNRbMR.js";import{F as O}from"./FieldError-DJt_lBWT.js";import{T as i}from"./TimeField-BhuR3Wqq.js";import{c as l}from"./DateField-Bqfq-ve1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CANyxF-L.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-DIlTCPcl.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./context-b6TG5uw0.js";import"./Label-DsLtIi5U.js";import"./utils-CNUJJGcD.js";import"./Hidden-RoZfe91Z.js";import"./v4-CtRu48qb.js";import"./Text-BFj9Gq9S.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-BJ9sUP_l.js";import"./IconWarning-DxEOF75m.js";import"./FieldError-Dhym38A1.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CXVBffIi.js";import"./useFocus-Ck8e1iB7.js";import"./useLabel-XC8v3O7U.js";import"./Group-ryYih4mY.js";import"./useFocusRing-BmK03SYd.js";import"./Input--iZvazXr.js";import"./usePress-DWaDT6O_.js";import"./FocusScope-BN4baDIG.js";import"./useCollator-DUFyk2vx.js";import"./useFormReset-Tdit5Ane.js";import"./useEvent-Bvgrsh8W.js";import"./useSpinButton-DTPkl6bV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-Ci6RWDlx.js";import"./useControlledState-rjpdN6qd.js";const Mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
