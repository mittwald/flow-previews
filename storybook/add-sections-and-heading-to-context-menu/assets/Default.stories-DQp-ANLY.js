import{N as t}from"./NumberField-BkNz7vk6.js";import{R as e}from"./index-uCp2LrAq.js";import{L as o}from"./Label-BfZsFn3a.js";import{a as O}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as v}from"./FieldDescription-C_JyU3ZG.js";import{F as I}from"./FormField.module-B1Ek3pwS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./Button-COr4qXCu.js";import"./IconApp-DZ6iFK1V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-D0hgC601.js";import"./index-BOkhicXD.js";import"./IconWarning-D5KLWx1O.js";import"./Text-EyCvEgnK.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-DAlZawmB.js";import"./utils-DsDc2z3f.js";import"./LoadingSpinner-CsLReDiT.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./Button-D3-i4KBG.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-R-ZPDh0R.js";import"./useFocusRing-DQ9q31uS.js";import"./usePress-v15KrNwr.js";import"./Form-CP-B8ZEw.js";import"./useLabel-C-G_TB0Q.js";import"./useLabels-CrvI0Xse.js";import"./Input-oGq534xr.js";import"./useFormReset-D51lDO-b.js";import"./useControlledState-B8AA3oOY.js";import"./Label-C3uTUzzd.js";import"./number-nHrFdSb-.js";import"./useNumberFormatter-B6MG36v4.js";import"./useEvent-YC2gB4eD.js";import"./LiveAnnouncer-AIgN_avV.js";import"./v4-CQkTLCs1.js";const De={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(o,null,"Age"))},a={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(o,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(o,null,"Age"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(o,null,"Age"),e.createElement(I,null,"Age is required"))},l={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(o,null,"Storage"))};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Ne=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{a as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,l as WithUnit,Ne as __namedExportsOrder,De as default};
