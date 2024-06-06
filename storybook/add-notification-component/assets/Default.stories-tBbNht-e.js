import{R as e}from"./index-uCp2LrAq.js";import{S as s}from"./Slider-z96CkCqq.js";import{L as m}from"./Label-iTt8mwRi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Ca66243O.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Button-gAEWO2zU.js";import"./IconApp-BaqjkNZn.js";import"./IconWarning-DdgHm-gJ.js";import"./Wrap-DQq6jo70.js";import"./Text-DaXThI_-.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-BN2ufjn_.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D4VcI4Uu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DpEA8Hsr.js";import"./usePress-CaJD4Kpr.js";import"./Label-BQk6lJ-q.js";import"./useNumberFormatter-DTr98jAo.js";import"./useControlledState-B8AA3oOY.js";import"./number-nHrFdSb-.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./useFormReset-Bt7ImmB-.js";import"./VisuallyHidden-DWE0U9Im.js";const Y={title:"Form Controls/Slider",component:s,render:r=>e.createElement(s,{...r},e.createElement(m,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(s,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(m,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(s,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(m,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
