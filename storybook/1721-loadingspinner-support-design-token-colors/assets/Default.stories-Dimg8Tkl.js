import{j as r}from"./iframe-D5s8HkwO.js";import{L as d}from"./Label-iSiMu1ip.js";import{F as $}from"./FieldDescription-DzlT8Yl_.js";import{F as v}from"./FieldError-DDxFFvpK.js";import{T as i}from"./TimeField-CLEHTiSC.js";import{L as l}from"./DateField-BGtlCp-5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./context-BRoJySMC.js";import"./Label-DFio2qHv.js";import"./utils-CSEH-j9T.js";import"./Hidden-DtltZqKg.js";import"./Text-Cmu5-2wY.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./Text-BD_PegNR.js";import"./IconWarning-BXD0iv1k.js";import"./FieldError-ZxKBib3w.js";import"./filterDOMProps-CeZl_uWj.js";import"./FormField.module-B9AzUSUD.js";import"./Form-DSTVN1kq.js";import"./useFocus-ChgCHlwF.js";import"./useLabel-Bmfvdk3t.js";import"./Group-DmJZ2m4p.js";import"./useFocusRing-0N6EWJVX.js";import"./Input-3Yn7tMQf.js";import"./usePress-CLLKaLvj.js";import"./FocusScope-DbtYTQ61.js";import"./useCollator-Bhx7w4gU.js";import"./useFormReset-CQNUsXCF.js";import"./useEvent-D5-EaqKz.js";import"./useSpinButton-DQWPQMKU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-B3RZVqZB.js";import"./useControlledState-Cw_CbRo5.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
