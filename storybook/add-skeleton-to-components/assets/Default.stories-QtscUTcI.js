import{N as t}from"./index-BolylQ41.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-4XtzYLd9.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-BdC5sHgR.js";import{F as I}from"./FormField.module-Bq72n6Jn.js";import{L as a}from"./Label-C5BaV3QA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BLFgELHw.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Cc1SKcvR.js";import"./Button-C62AkZmc.js";import"./IconApp-iqYUtoxJ.js";import"./IconWarning-jqA-R3DE.js";import"./Text-Cl0wCOtv.js";import"./index-dhKWstfL.js";import"./Text-C9sPPhMf.js";import"./utils-XD1Mdlza.js";import"./index-DxJw5mhE.js";import"./LoadingSpinner-4VZ_XG4P.js";import"./useLocalizedStringFormatter-CmZ4cjgJ.js";import"./Button-CTl9mfdD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D_aGyKeu.js";import"./usePress-z0VJBnEb.js";import"./Form-GkTCv32T.js";import"./useLabel-BeWO1HNy.js";import"./useLabels-DyJW6laa.js";import"./Input-CGIWYSBs.js";import"./useFormReset-kOKo-itB.js";import"./useControlledState-C0C-dzuH.js";import"./Label-79qIxa_A.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-Bm2TRXxf.js";import"./useEvent-G_vqJ8Z6.js";import"./v4-CQkTLCs1.js";const fe={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"Age"))},o={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(a,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(a,null,"Age"))},l={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(a,null,"Age"),e.createElement(I,null,"Age is required"))},p={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(a,null,"Storage"))};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var q,R,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var y,x,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(C=(x=p.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const De=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{o as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,p as WithUnit,De as __namedExportsOrder,fe as default};
