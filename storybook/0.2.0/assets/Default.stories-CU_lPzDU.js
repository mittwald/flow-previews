import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{N as i}from"./NumberField-BGVXAM3W.js";import"./index-BZISi7jw.js";import{L as o}from"./Label-CyCuQBvx.js";import{a as C}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{F as O}from"./FieldDescription-B4lTSvYq.js";import{F as v}from"./FieldError-CtSYrYxX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CnD-oO9S.js";import"./index-IBhSrjl6.js";import"./Button-Cr64kAxY.js";import"./IconApp-CvS4gYeI.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./IconWarning-DAd9lBo7.js";import"./Wrap-DQq6jo70.js";import"./Text-DydX6P1D.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-PTaPc_Ci.js";import"./utils-CzVyYWZn.js";import"./LoadingSpinner-DsriZvYV.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Button-DrJb4gk9.js";import"./ProgressBar-CZau9lss.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Group-Df3SyVuJ.js";import"./Input-BYbhpFUc.js";import"./useControlledState-4nfZ-XMX.js";import"./useSpinButton-DuLNe-aw.js";import"./useFormReset-CilIRCFg.js";import"./useEvent-CPQp9FCP.js";import"./useTextField-uM6U_XJE.js";import"./v4-CtRu48qb.js";const Sr={title:"Form Controls/NumberField",component:i,render:e=>r.jsx(i,{onChange:C("onChange"),...e,children:r.jsx(o,{children:"Age"})})},t={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},m={render:e=>r.jsxs(i,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(O,{children:"Enter your age"})]})},p={render:e=>r.jsx(i,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(v,{children:"Age is required"})]})},d={render:e=>r.jsx(i,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})};var l,u,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,b,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
