import{j as r}from"./iframe-DR0piQh8.js";import{L as d}from"./Label-BflZTkh8.js";import{F as $}from"./FieldDescription-Co8Bhrn3.js";import{F as v}from"./FieldError-BkSA8Wen.js";import{T as i}from"./TimeField-BU_UJ2wF.js";import{L as l}from"./DateField-Drujmogp.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./context-BuOVuQqB.js";import"./Label-DF_i3q4X.js";import"./utils-B_3T_k5x.js";import"./Hidden-Ccv39zY0.js";import"./Text-6uPYoec8.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";import"./Text-Me8NF-Lu.js";import"./IconWarning-BgT_B94B.js";import"./FieldError-DwuKV3Gh.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-B6wqL0ga.js";import"./useFocus-Drlqt-a_.js";import"./useLabel-dFBcJ0PQ.js";import"./Group-C4Z-pBhO.js";import"./useFocusRing-DNATWZb5.js";import"./Input-DGCSbbdR.js";import"./usePress-B4R9EPAI.js";import"./FocusScope-QqKO2Hp7.js";import"./useCollator-M--gojr_.js";import"./useFormReset-DGc_F2ms.js";import"./useEvent-DS0BHrpr.js";import"./useSpinButton-DY0M5fWp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-xlMZvUfa.js";import"./useControlledState-DHSSOs10.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,E,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,V,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var R,_,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(w=(_=n.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var O,W,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var y,C,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,Vr as __namedExportsOrder,Sr as default};
