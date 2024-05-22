import{N as t}from"./NumberField-O-MRuBLU.js";import{R as e}from"./index-uCp2LrAq.js";import{L as a}from"./Label-ClmFLFSU.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-CWUe3Xej.js";import{F as I}from"./FormField.module-CGj0xD-e.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVx7Nq_O.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Button-kgu6ukff.js";import"./IconApp-Bpay03mZ.js";import"./IconWarning-CbiRLlNJ.js";import"./Wrap-DQq6jo70.js";import"./Text-KrSbjq4H.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-CV99Jc8q.js";import"./utils-VMHz66w6.js";import"./LoadingSpinner-InQx5M66.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D3p9ry0o.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-6uy--nFO.js";import"./usePress-DI1g9pTm.js";import"./Form-JBmGvwo6.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Group-BF4qwLGf.js";import"./Input-BRmCCCbY.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-ByvKXg4M.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-DTr98jAo.js";import"./useEvent-BUAZZNDw.js";import"./v4-CQkTLCs1.js";const fe={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(a,null,"Age"))},o={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(a,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(a,null,"Age"))},l={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(a,null,"Age"),e.createElement(I,null,"Age is required"))},p={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(a,null,"Storage"))};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
