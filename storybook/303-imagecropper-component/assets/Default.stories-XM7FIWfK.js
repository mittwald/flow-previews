import{R as e}from"./index-Cs7sjTYM.js";import{S as s}from"./Slider-Dxo-7LWM.js";import{L as m}from"./Label-BpnA_KhO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BttIposY.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./clsx-B-dksMZM.js";import"./index-BMdlDBjA.js";import"./Button-m5USM9JU.js";import"./IconApp-CyHi4WPz.js";import"./IconWarning-DZJaqlYL.js";import"./Wrap-DQq6jo70.js";import"./Text-BM3moMBE.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dh5WnJTs.js";import"./utils-Cy-A-nlV.js";import"./LoadingSpinner-T2v-ofXf.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./Button-DrQgql3X.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-OFlS-6qe.js";import"./usePress-CTrgc7uI.js";import"./Label-8PgMpAzA.js";import"./useNumberFormatter-CckdFgkV.js";import"./useControlledState-B7K2eYzO.js";import"./number-nHrFdSb-.js";import"./useLabel-B-9ggeSA.js";import"./useLabels-n83dATVM.js";import"./useFormReset-DRCqKyTt.js";import"./VisuallyHidden-D76woJCP.js";const Y={title:"Form Controls/Slider",component:s,render:r=>e.createElement(s,{...r},e.createElement(m,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(s,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(m,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(s,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(m,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const Z=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,Z as __namedExportsOrder,Y as default};
