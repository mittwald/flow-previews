import{R as r}from"./index-B-o1Wr-g.js";import{S as m}from"./Slider-9sg1TN0O.js";import{L as s}from"./Label-BFoBZBqy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-SXQnFwcy.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./Button-D-75P3dD.js";import"./IconApp--rto3B0B.js";import"./IconWarning--ZE28x2f.js";import"./Wrap-DQq6jo70.js";import"./Text-CemaETXH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./utils-CCebJm36.js";import"./LoadingSpinner-CHM1vGyh.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-DpaYcQnV.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./useControlledState-BgxdDqm0.js";import"./useFormReset-DMREOE0P.js";import"./VisuallyHidden-lWpahT0S.js";const $={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
