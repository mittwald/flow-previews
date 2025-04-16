import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-n-xcLTj3.js";import{L as d}from"./Label-DuWaARVY.js";import{a as I}from"./index-B-lxVbXh.js";import{F as _}from"./FieldDescription-DuCTkKO2.js";import{F as O}from"./FieldError-DTHL6QGh.js";import{T as i}from"./TimeField-C-5VZ5p9.js";import{c as l}from"./DateField-C86e5LiD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Label-CnZl9U2I.js";import"./utils-CHEN54dH.js";import"./Hidden-B-9naaqD.js";import"./v4-CtRu48qb.js";import"./Text-CvWN1dQn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Text-DatuNbZl.js";import"./IconWarning-BT9Vk3ZR.js";import"./FieldError-D-X35EJ8.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-ChuGhSFG.js";import"./useLabel-DBnsbNrv.js";import"./Group-xQH-a16K.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocus-XoJeJsyS.js";import"./Input-CzLAkyht.js";import"./usePress-D9kiuk6J.js";import"./FocusScope-VprgOmaE.js";import"./useCollator-DYp7eA3k.js";import"./useFormReset-DmN8pfru.js";import"./useFormValidation-BxWfN6mX.js";import"./useEvent-CaE4O6jv.js";import"./useSpinButton-BScO0Foe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-DfMrZTQF.js";import"./useControlledState-B6lyO5nT.js";const Wr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
