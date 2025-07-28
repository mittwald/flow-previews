import{j as r}from"./iframe-DkoDxfR2.js";import{L as d}from"./Label-XXLO5rpK.js";import{F as $}from"./FieldDescription-BVYKETey.js";import{F as v}from"./FieldError-lU0r29TM.js";import{T as i}from"./TimeField-iEUgf-hD.js";import{M as l}from"./DateField-4C_1qX_p.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DL9J830y.js";import"./mergeRefs-Buk7y6lM.js";import"./index-DkP-SiYJ.js";import"./useLocalizedStringFormatter-DJ33xXvN.js";import"./context-De-s_lIT.js";import"./Label-DRKfcyWW.js";import"./utils-BOrYOV9F.js";import"./Hidden-De8D6e53.js";import"./Text-CnS74kup.js";import"./browser-Bh7wweWi.js";import"./EmulatedBoldText-CUhPQfrL.js";import"./Text-Ctymnv7p.js";import"./IconWarning-Ck0HvR0Q.js";import"./FieldError-X-QluTji.js";import"./filterDOMProps-CghfNOdR.js";import"./FormField.module-B9AzUSUD.js";import"./Form-CnPMOS5f.js";import"./useFocus-Ca2dqt2u.js";import"./useLabel-BuM0FhpV.js";import"./Group-T6PFTdYn.js";import"./useFocusRing-BDB7k6Pq.js";import"./usePress-DxrgSCNh.js";import"./FocusScope-DjWdfa-n.js";import"./useCollator-COoHYzT4.js";import"./useFormReset-BbPVrHjA.js";import"./useEvent-C4SFAJBx.js";import"./useSpinButton-BbfRMZPr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFilter-o-q5WML4.js";import"./useControlledState-JTLXT68E.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:G("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx($,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(v,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};var u,T,F;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
