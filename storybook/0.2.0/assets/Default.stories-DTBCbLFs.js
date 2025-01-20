import{j as r}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{L as d}from"./Label-CysJgzvk.js";import{a as I}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as _}from"./FieldDescription-b8iFIwo0.js";import{F as O}from"./FieldError-emy1jJyU.js";import{T as i}from"./TimeField-DpxSZsqL.js";import{c as l}from"./DateField-D418YgwH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Label-wrbsGWF5.js";import"./utils-DbIpkr2E.js";import"./Hidden-le53pkqW.js";import"./v4-CtRu48qb.js";import"./Text-DWihI4Ms.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-DUOeOfAn.js";import"./IconApp--3KTiVI4.js";import"./IconWarning-FtXT-ZGp.js";import"./FieldError-Di-56-XY.js";import"./useFocusRing-BUEgee7k.js";import"./filterDOMProps-BSfnXAP7.js";import"./Form-D-sIjvit.js";import"./useLabel-ByHVstPj.js";import"./Group-B96B1Y9i.js";import"./Input-Cw-yF1VB.js";import"./usePress-CheaiuQC.js";import"./useControlledState-19OAjgUP.js";import"./FocusScope-CBujmq_y.js";import"./useCollator-rt50tWWG.js";import"./useFormReset-SCbFK273.js";import"./useEvent-C6dKIdOv.js";import"./useSpinButton-Ct1bjW0K.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";const wr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:I("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(_,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(O,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,F,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(T=(F=o.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(G=(v=c.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const Wr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,a as Disabled,p as Granularity,c as MinMaxValue,s as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,Wr as __namedExportsOrder,wr as default};
