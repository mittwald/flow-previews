import{j as r}from"./iframe-CbGYfYhl.js";import{S as s}from"./Slider-BMwuW-xi.js";import{L as m}from"./Label-ChSLebPR.js";import"./PropsContextProvider-jqIHveb4.js";import"./mergeRefs-B7E9CKB8.js";import"./index-DUvIA6jy.js";import"./clsx-B-dksMZM.js";import"./Button-Gcjkh2he.js";import"./IconWarning-DbjMP3z5.js";import"./Text-OS1-aGym.js";import"./browser-CJ8QzV59.js";import"./EmulatedBoldText-CQSaLX8r.js";import"./Text-B56mlhY7.js";import"./utils-Bta_km8V.js";import"./LoadingSpinner-BIdUmOnp.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CO6Ocor8.js";import"./context-DrN7EfSG.js";import"./Button-dGVmYdyu.js";import"./ProgressBar-C2FOdX6j.js";import"./Label-CQ-8Wai_.js";import"./Hidden-CH7YYats.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D6vayTQl.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B6TDm-Ku.js";import"./useFocus-CgyMmhEU.js";import"./useFocusRing-D3ulEQrZ.js";import"./useFocusable-CdHr2TzL.js";import"./useControlledState-Ckf81dN5.js";import"./useFormReset-knQsHZrP.js";import"./VisuallyHidden-BDzAgjFk.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const $=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,a as Disabled,i as WithInitialMarker,o as WithUnit,$ as __namedExportsOrder,Z as default};
