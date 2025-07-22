import{j as r}from"./iframe-DR0piQh8.js";import{S as s}from"./Slider-DLDoLX_V.js";import{L as m}from"./Label-BflZTkh8.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./clsx-B-dksMZM.js";import"./Button-YikxumGf.js";import"./IconWarning-BgT_B94B.js";import"./Text-6uPYoec8.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";import"./Text-Me8NF-Lu.js";import"./utils-B_3T_k5x.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./context-BuOVuQqB.js";import"./Button-1sXVFcCN.js";import"./ProgressBar-NTw_CuGV.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-dFBcJ0PQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B4R9EPAI.js";import"./useFocus-Drlqt-a_.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";import"./useControlledState-DHSSOs10.js";import"./useFormReset-DGc_F2ms.js";import"./VisuallyHidden-XA-B9eQQ.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
