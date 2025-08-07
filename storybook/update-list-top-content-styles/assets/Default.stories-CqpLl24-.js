import{j as r}from"./iframe-C7QIGs8p.js";import{S as s}from"./Slider-DxEMZxAP.js";import{L as m}from"./Label-Bc44wfjj.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./clsx-B-dksMZM.js";import"./Button-BGr41c7E.js";import"./IconWarning-X_5SFXzD.js";import"./Text-CTrM2jC7.js";import"./browser-C2BAwQT3.js";import"./EmulatedBoldText-_WA-B4P4.js";import"./Text-FQKaNMRy.js";import"./utils-BtsnBH_L.js";import"./LoadingSpinner-Ce2BrOYf.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./context-C2AKAduY.js";import"./Button-B7-ATyHT.js";import"./ProgressBar-IpWCr7qx.js";import"./Label-BSYnHYDD.js";import"./Hidden-DWOQ1i8d.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D-QYQdwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bh987CF2.js";import"./useFocus-ypxUxEvE.js";import"./useFocusRing-DKwzelHt.js";import"./useFocusable-C2Z9oquv.js";import"./useControlledState-KNtUQTSK.js";import"./useFormReset-DrAuwzZe.js";import"./VisuallyHidden-DORJbjtt.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
