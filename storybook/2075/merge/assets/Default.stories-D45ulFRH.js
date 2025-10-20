import{j as r}from"./iframe-D3XbVUAE.js";import{L as d}from"./Label-BTIrFf4y.js";import{F as $}from"./FieldDescription-CCF4pGSH.js";import{F as v}from"./FieldError-DuGPuZu9.js";import{T as i}from"./TimeField-Dy7iAnET.js";import{M as l}from"./DateField-DMVJjZ2f.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./index-BE_iNncf.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./Label-DVxhCXlj.js";import"./utils-BWY6h_sn.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./browser-DZQtGRWw.js";import"./EmulatedBoldText-C38wPnte.js";import"./Text-D1dMR7Bg.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./filterDOMProps-CghfNOdR.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C7JQv0_C.js";import"./Form-CcsDzmFP.js";import"./Group-BPkRhbu5.js";import"./useFocusRing-C2luJKmh.js";import"./useFocus-DS8-NOtK.js";import"./Input-CNAwbAUs.js";import"./usePress-DzXxx4G-.js";import"./useFormValidation-Co07oj9m.js";import"./useControlledState-Dbx7ZwrT.js";import"./FocusScope-Bgf4u7XC.js";import"./useCollator-zmWlXBku.js";import"./useFormReset-BLKvBmEx.js";import"./useEvent-nRU769M-.js";import"./useSpinButton-Dt02yJhU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-DQzY3hAa.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Rr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,Rr as __namedExportsOrder,qr as default};
