import{j as r}from"./iframe-RErHS549.js";import{L as d}from"./Label-COqzxAxq.js";import{F as $}from"./FieldDescription-Bsl63wIT.js";import{F as v}from"./FieldError-Da2hJYUR.js";import{T as i}from"./TimeField-ykk2_qPN.js";import{M as l}from"./DateField-C7LzpirT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./context-BoCUnuIe.js";import"./Label-BxIDS5PE.js";import"./utils-CdmgfGZ7.js";import"./Hidden-BOL9WLXj.js";import"./Text-CPoMhumh.js";import"./browser-32b-cNga.js";import"./EmulatedBoldText-JQA-sSfV.js";import"./Text-CT26T-mx.js";import"./IconWarning-BaoYyhFJ.js";import"./FieldError-CXwIJwJV.js";import"./filterDOMProps-CghfNOdR.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CN0G9X2_.js";import"./useFocus-JMpVLlR6.js";import"./useLabel-ky1cKMBf.js";import"./Group-Co5LQX_Y.js";import"./useFocusRing-DWSWsOVe.js";import"./usePress-Qq9By8Rc.js";import"./FocusScope-CM6IwZZ2.js";import"./useCollator-BIKtW1yK.js";import"./useFormReset-8mkS99ko.js";import"./useEvent-CfCGwGWG.js";import"./useSpinButton-CJngYXxV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-BX-913aW.js";import"./useControlledState-D306zaQt.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
