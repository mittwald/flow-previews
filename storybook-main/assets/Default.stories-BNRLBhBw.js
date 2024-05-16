import{N as t}from"./index-Bw88hbAw.js";import{R as e}from"./index-uCp2LrAq.js";import"./index-Cmz1vSES.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-BUttKgae.js";import{F as I}from"./FormField.module-s1_K2-y0.js";import{L as o}from"./Label-BSqTcUZR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3iYbsVA.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D0HYlWWA.js";import"./Button-DZIkkxYk.js";import"./IconApp-CwGZLNCA.js";import"./IconWarning-DABzRPnq.js";import"./Wrap-DQq6jo70.js";import"./index-Bei-u9ze.js";import"./Text-9aVSwLyk.js";import"./index-DePfloUh.js";import"./Text-QhWkLhD7.js";import"./utils-CHnd_qWz.js";import"./LoadingSpinner-Dlmb3D8K.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./Button-D-FvJARW.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BGYghl-O.js";import"./usePress-C4eoOWOJ.js";import"./Form-DC_Jaq0Q.js";import"./useLabel-CRisioBB.js";import"./useLabels-7II0TQXO.js";import"./Input-DZsvBgax.js";import"./useFormReset-Co0XpM0Q.js";import"./useControlledState-B8AA3oOY.js";import"./Label-D2L52JVz.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-fk4sjPtJ.js";import"./useEvent-BxbBFNFa.js";import"./v4-CQkTLCs1.js";const Ne={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(o,null,"Age"))},a={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(o,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(o,null,"Age"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(o,null,"Age"),e.createElement(I,null,"Age is required"))},l={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(o,null,"Storage"))};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const he=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{a as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,l as WithUnit,he as __namedExportsOrder,Ne as default};
