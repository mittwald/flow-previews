import{j as r}from"./iframe-B7LyKmrW.js";import{S as s}from"./Slider--44p9dKs.js";import{L as m}from"./Label-GaOPpfpv.js";import"./PropsContextProvider-BHFGowBc.js";import"./mergeRefs-DMoFTSBP.js";import"./index-DRIChXb_.js";import"./clsx-B-dksMZM.js";import"./Button-Ds6YhjxA.js";import"./IconWarning-B2C8hMVq.js";import"./Text-DUoUD__5.js";import"./browser-YA20U_IT.js";import"./EmulatedBoldText-CH7hguL6.js";import"./Text-54Sx_nhu.js";import"./utils-C7pz24DF.js";import"./LoadingSpinner-D8va-Paf.js";import"./useLocalizedStringFormatter-BSmgV4Fs.js";import"./context-Bp1vmlVu.js";import"./Button-CnMvl_pE.js";import"./ProgressBar-D1vTXEVZ.js";import"./Label-DSgSzVuQ.js";import"./Hidden-DplB-rWb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-B_uxGEkZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BUy08s3B.js";import"./useFocus-S4LYa827.js";import"./useFocusRing-DxiExAh_.js";import"./useFocusable-UsZUFP92.js";import"./useControlledState-QzhULpBn.js";import"./useFormReset-Cbj20zLi.js";import"./VisuallyHidden-BpBET9_R.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
