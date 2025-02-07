import{j as r}from"./jsx-runtime-CLpGMVip.js";import{N as i}from"./NumberField-DIUufEqh.js";import"./index-Cf9XvIV_.js";import{L as o}from"./Label-DTTE3pGW.js";import{a as C}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{F as O}from"./FieldDescription-C-HqeYQE.js";import{F as v}from"./FieldError-WMkAMHNQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./Button-BaNUASa3.js";import"./IconApp-BvTDg_ym.js";import"./flowComponent-BwhkuB3x.js";import"./index-CFEY-m6m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./IconWarning-D2hnVGSN.js";import"./Wrap-DQq6jo70.js";import"./Text-D5rDdv9L.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Text-BK3pbL47.js";import"./utils-DjOXyFua.js";import"./LoadingSpinner-CcwJ4mIx.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Button-8t-PlKI0.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BJtEpXSQ.js";import"./useFocusRing-DNhlkveR.js";import"./usePress-1yUr5Cwu.js";import"./FieldError-Fgq_FSbK.js";import"./Form-BPCPwrNr.js";import"./Group-DUWvKL3o.js";import"./Input-By9TP3lj.js";import"./useControlledState-19OAjgUP.js";import"./useSpinButton-XDoZO9-P.js";import"./useFormReset-SCbFK273.js";import"./useEvent-C6dKIdOv.js";import"./useTextField-CdIauddb.js";import"./v4-CtRu48qb.js";const Sr={title:"Form Controls/NumberField",component:i,render:e=>r.jsx(i,{onChange:C("onChange"),...e,children:r.jsx(o,{children:"Age"})})},t={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},m={render:e=>r.jsxs(i,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(O,{children:"Enter your age"})]})},p={render:e=>r.jsx(i,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(v,{children:"Age is required"})]})},d={render:e=>r.jsx(i,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})};var l,u,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,b,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,D,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var L,V,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(A=(V=p.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,S,q;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var W,R,y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};const qr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit"];export{t as Default,s as Disabled,a as Required,p as WithDefaultValue,m as WithFieldDescription,n as WithFieldError,d as WithUnit,qr as __namedExportsOrder,Sr as default};
