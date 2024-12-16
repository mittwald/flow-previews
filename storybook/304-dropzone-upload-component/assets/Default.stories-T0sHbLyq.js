import{R as r}from"./index-B-o1Wr-g.js";import{S as m}from"./Slider-DSRp5pdv.js";import{L as s}from"./Label-D_lYvbbp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-BM_bsdM-.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Button-lHNUyXCJ.js";import"./IconApp-BsMqgwqQ.js";import"./IconWarning-QGTmOWaT.js";import"./Wrap-DQq6jo70.js";import"./Text-Cj_eL-oH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CiYJIQMS.js";import"./utils-DKtCZAsl.js";import"./LoadingSpinner-BGAqxZwj.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./Button-i9IuKDdG.js";import"./ProgressBar-CBi1pwqX.js";import"./Label-lrV0rU61.js";import"./Hidden-_I_3hSLB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-C4jwYeNR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DeAGt_gp.js";import"./useFocusRing-aZOxpy_h.js";import"./usePress-RNxp3RZQ.js";import"./useControlledState-BgxdDqm0.js";import"./useFormReset-Bzq1iQT5.js";import"./VisuallyHidden-iqNnHKyk.js";const $={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const rr=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,rr as __namedExportsOrder,$ as default};
