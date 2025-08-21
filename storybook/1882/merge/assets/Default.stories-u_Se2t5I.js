import{j as r}from"./iframe-Djw2qN4N.js";import{S as s}from"./Slider-BiQC1YiD.js";import{L as m}from"./Label-DW829cz7.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./clsx-B-dksMZM.js";import"./Button-DbUzlGPh.js";import"./IconWarning-CGeyKArL.js";import"./Text-N2Xlqf-I.js";import"./browser-CF3hFWtX.js";import"./EmulatedBoldText-CB7N4Qe6.js";import"./Text-wW5QNV-A.js";import"./utils-DHksHmrI.js";import"./LoadingSpinner-DRHSwImm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./context-SMG2uflK.js";import"./Button-Cmn8DEd4.js";import"./ProgressBar-jq0-4j1i.js";import"./Label-BqIGEZIR.js";import"./Hidden-CQXH1kLj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cdum_nIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DmhdXdf4.js";import"./useFocus-qvLuoihW.js";import"./useFocusRing-zh24oNHk.js";import"./useFocusable-C2MDV8K7.js";import"./useControlledState-3RrKoOGV.js";import"./useFormReset-Ciz8aHP_.js";import"./VisuallyHidden-DfkyRh3Z.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
