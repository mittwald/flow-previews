import{j as r}from"./iframe-qMbEE3nZ.js";import{L as d}from"./Label-Qwuh2gM1.js";import{F as $}from"./FieldDescription-UFnh7aPi.js";import{F as v}from"./FieldError-BKpgIzk8.js";import{T as i}from"./TimeField-B4P6tzcM.js";import{M as l}from"./DateField-Bpoqlcbs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./context-DPxByHJI.js";import"./Label-D0MPEMQA.js";import"./utils-BD_t44OF.js";import"./Hidden-D7F7fo4_.js";import"./Text-BBRqDbdK.js";import"./browser-CDpjXLqz.js";import"./EmulatedBoldText-DSEgcFLX.js";import"./Text-cBZJFSe0.js";import"./IconWarning-CQwCi0eF.js";import"./FieldError-BHMg81Vw.js";import"./filterDOMProps-CghfNOdR.js";import"./FormField.module-B9AzUSUD.js";import"./Form-3qXBak_6.js";import"./useFocus-DS8qI1YX.js";import"./useLabel-Cq2dGHOX.js";import"./Group-CL0zaHSQ.js";import"./useFocusRing-lD94xzjb.js";import"./usePress-7HicN3cp.js";import"./FocusScope-phx_Kgk6.js";import"./useCollator-DOCzDbFi.js";import"./useFormReset-D9SBe6RC.js";import"./useEvent-CCJQzPdu.js";import"./useSpinButton-DY5RmE4M.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-D0xdm1_m.js";import"./useControlledState-CNYZu0wD.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,D;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var j,E,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...(S=(E=t.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var V,L,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var R,_,w;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...(w=(_=n.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var M,O,W;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var y,C,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const Vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,Vr as __namedExportsOrder,Sr as default};
