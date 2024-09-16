import{N as t}from"./NumberField-Dg0aCbiy.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as o}from"./Label-H6f0-JrX.js";import{a as O}from"./chunk-454WOBUV-CM0pFb8Z.js";import{F as v}from"./FieldDescription-BbBgdTsH.js";import{F as I}from"./FormField.module-jgORCpta.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./Button-CSV5PcNg.js";import"./IconApp-Cw6LIZ6L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-C5nr8jLZ.js";import"./index-BU4L-DQy.js";import"./IconWarning-CYODic7s.js";import"./Wrap-DQq6jo70.js";import"./Text-BeE63-Dr.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BNegcRvf.js";import"./utils-CSHM5tWr.js";import"./LoadingSpinner-Bx2kpYXf.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-CkDWo4mt.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Dtk_6mL9.js";import"./useFocusRing-CRCkdtud.js";import"./usePress-Do5SRlXR.js";import"./Form-DTFy3O7Q.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Group-Dagm9K6p.js";import"./Input-DMV1KN-k.js";import"./Label-CaZe8gQk.js";import"./useControlledState-B7K2eYzO.js";import"./number-nHrFdSb-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useSpinButton-DksKbOre.js";import"./LiveAnnouncer-AIgN_avV.js";import"./useFormReset-DlrFI1sj.js";import"./useEvent-Be9f7BQw.js";import"./useTextField-4jd-r0Vf.js";import"./useNumberFormatter-D1GyhdLF.js";import"./v4-CQkTLCs1.js";const Se={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(o,null,"Age"))},a={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(o,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(o,null,"Age"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(o,null,"Age"),e.createElement(I,null,"Age is required"))},l={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(o,null,"Storage"))};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const qe=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{a as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,l as WithUnit,qe as __namedExportsOrder,Se as default};
