import{j as r}from"./iframe-DUtcAVii.js";import{S as n}from"./Slider-tcIyJrsK.js";import{L as m}from"./Label-D2FAkV6T.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./clsx-B-dksMZM.js";import"./Button-DULuqu_l.js";import"./IconWarning-BDc9REUs.js";import"./Text-CIiZgPf0.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Text-DD2-gbIJ.js";import"./utils-BJK0bMVs.js";import"./LoadingSpinner-3c39ELf0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./context-DAjKPHt4.js";import"./Button-2XgEXCNC.js";import"./ProgressBar-DzueJvvV.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbIX1hOn.js";import"./useFocus-BBGclxaJ.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./useControlledState-G4tJUSCb.js";import"./useFormReset-CnZg8poR.js";import"./VisuallyHidden-CsqdnZMW.js";const tr={title:"Form Controls/Slider",component:n,render:e=>r.jsx(n,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(n,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},s={args:{isDisabled:!0}},i={render:e=>r.jsx(n,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,f,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,O,V;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const or=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,s as Disabled,o as ReadOnly,i as WithInitialMarker,a as WithUnit,or as __namedExportsOrder,tr as default};
