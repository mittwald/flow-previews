import{R as e}from"./index-uCp2LrAq.js";import{S as s}from"./Slider-BUBhYTac.js";import{L as m}from"./Label-BTedSu1I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-Cll4pGCY.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Button-D6GiwIW_.js";import"./IconApp-DWya8WHB.js";import"./IconWarning-CVIujYNc.js";import"./Wrap-DQq6jo70.js";import"./Text-Dgrf8S-7.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-3FUNhTNc.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-xMX5UQ9s.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./Button-DvIckO9Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-B1CfUGG-.js";import"./usePress-Bc78XfGJ.js";import"./Label-BzjXWGX7.js";import"./useNumberFormatter-D3jgsSBK.js";import"./useControlledState-B8AA3oOY.js";import"./number-nHrFdSb-.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./useFormReset-Bt7ImmB-.js";import"./VisuallyHidden-CVANJuSe.js";const Y={title:"Form Controls/Slider",component:s,render:r=>e.createElement(s,{...r},e.createElement(m,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(s,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(m,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(s,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(m,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
