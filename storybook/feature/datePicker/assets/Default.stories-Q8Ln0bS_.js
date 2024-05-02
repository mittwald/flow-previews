import{N as t}from"./index-C9S1G6pd.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-BUKT1Mbq.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-EpDxmmnT.js";import{F as I}from"./FormField.module-DvflTJWd.js";import{L as o}from"./Label-Dw5IQixM.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dglj5cqB.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BhwfpT24.js";import"./Button-Vp9K0Jj0.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DZA2CR2B.js";import"./Text-CME0CjX1.js";import"./index-dhKWstfL.js";import"./Text-Ck09bxUA.js";import"./utils-DDqfTkhb.js";import"./index-ClBBAz8G.js";import"./LoadingSpinner-igBsChks.js";import"./useLocalizedStringFormatter-BNfLxuDa.js";import"./Button-DxZy_SLj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-1hkoevAF.js";import"./usePress-CeNy5sqc.js";import"./Form-DmVgoquN.js";import"./useLabel-CGKcXo82.js";import"./useLabels-DNsw1HUe.js";import"./Group-BV_DmQML.js";import"./NumberFormatter-DNR9MAW-.js";import"./Input-KxH1mW2Q.js";import"./Label-C1MFjKOK.js";import"./useControlledState-C0C-dzuH.js";import"./number-nHrFdSb-.js";import"./useFormReset-Dz9no7wq.js";import"./useEvent-CbpoCiOF.js";import"./useTextField-DSnLTMjq.js";import"./useNumberFormatter-BjTpfLvD.js";import"./v4-CQkTLCs1.js";const he={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(o,null,"Age"))},a={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(o,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(o,null,"Age"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(o,null,"Age"),e.createElement(I,null,"Age is required"))},l={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(o,null,"Storage"))};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var E,f,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var N,h,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(L=(h=m.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var V,A,S;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,R,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var y,x,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Le=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{a as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,l as WithUnit,Le as __namedExportsOrder,he as default};
