import{N as t}from"./NumberField-BadJhrMD.js";import{R as e}from"./index-Cs7sjTYM.js";import{L as o}from"./Label-LjpPhEpK.js";import{a as O}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{F as v}from"./FieldDescription-Bp9q2b5T.js";import{F as I}from"./FormField.module-Dbf8c6i9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./Button-DXVDIrTY.js";import"./IconApp-BvR14QOm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./IconWarning-CKNdQ7e9.js";import"./Wrap-DQq6jo70.js";import"./Text-U6fXasfV.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dd84vsje.js";import"./utils-BwYH5X3X.js";import"./LoadingSpinner-VvQ8syNA.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./useFocusRing-if03xCoO.js";import"./usePress-1fQJjpyE.js";import"./Form-CqlMkRPm.js";import"./Group-BzjZRzGK.js";import"./Input-8WbdzIVX.js";import"./useControlledState-B7K2eYzO.js";import"./useSpinButton-CRVp-8to.js";import"./useFormReset-B-nkSQHj.js";import"./useEvent-DPeShqXn.js";import"./useTextField-DZljNCaL.js";import"./v4-CQkTLCs1.js";const Ve={title:"Form Controls/NumberField",component:t,render:r=>e.createElement(t,{onChange:O("onChange"),...r},e.createElement(o,null,"Age"))},a={},i={args:{isDisabled:!0}},s={args:{isRequired:!0}},m={render:r=>e.createElement(t,{...r,minValue:5,maxValue:10},e.createElement(o,null,"Age"),e.createElement(v,null,"Enter your age"))},n={render:r=>e.createElement(t,{...r,defaultValue:34},e.createElement(o,null,"Age"))},p={render:r=>e.createElement(t,{...r,isInvalid:!0,isRequired:!0},e.createElement(o,null,"Age"),e.createElement(I,null,"Age is required"))},l={render:r=>e.createElement(t,{...r,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12},e.createElement(o,null,"Storage"))};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,b,F;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const Ae=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{a as Default,i as Disabled,s as Required,n as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,l as WithUnit,Ae as __namedExportsOrder,Ve as default};
