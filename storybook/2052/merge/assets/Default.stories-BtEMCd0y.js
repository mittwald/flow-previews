import{j as r}from"./iframe-CBVsO-nV.js";import{L as d}from"./Label-nyljzuzS.js";import{F as $}from"./FieldDescription-BsgENOjc.js";import{F as v}from"./useFieldComponent-BL--pJL1.js";import{T as i}from"./TimeField-ntJCRigm.js";import{M as l}from"./DateField-C8xPr5wM.js";import"./index-Cun1SEai.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DToNFNtJ.js";import"./index-7tOde82V.js";import"./index-CObDYv0S.js";import"./useLocalizedStringFormatter-BV-H-cPE.js";import"./context-DPyuhdQa.js";import"./Label-Bbbf1klh.js";import"./utils-BP7SriO_.js";import"./Hidden-CLTlUYi-.js";import"./Text-4FHUoZpl.js";import"./browser-C8nzMZsV.js";import"./EmulatedBoldText-oVXJv8rD.js";import"./Text-GjNUVhom.js";import"./filterDOMProps-CghfNOdR.js";import"./IconWarning-BYVfnYfe.js";import"./react-children-utilities-Da5w6g_X.js";import"./ClearPropsContext-5iY_SzG7.js";import"./useMakeFocusable-D1yavyON.js";import"./Form-CSBASJMX.js";import"./Group-Cz9MSlsI.js";import"./useFocusRing-CMejcKZt.js";import"./useFocus-DaXdFBHM.js";import"./Input-Bo67AZIS.js";import"./usePress-tISAzguc.js";import"./useFormValidation-DWnxi1QZ.js";import"./useControlledState-CX82Bv9G.js";import"./FocusScope-B4rhd8wm.js";import"./useCollator-CcT-BTV3.js";import"./useFormReset-0NTNnrBe.js";import"./useEvent-51-loX5F.js";import"./useSpinButton-Cbqa7wau.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-LbCaewVj.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const _r=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,_r as __namedExportsOrder,Rr as default};
