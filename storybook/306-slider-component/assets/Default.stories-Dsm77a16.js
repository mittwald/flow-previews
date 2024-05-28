import{R as e}from"./index-uCp2LrAq.js";import{S as m}from"./Slider-CfeZOPx8.js";import{L as s}from"./Label-BAdgD445.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-B3aOilil.js";import"./PropsContextProvider-v92cY4my.js";import"./index-CFQDndEx.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./Button-RSy4MY88.js";import"./IconApp-DEshkfZj.js";import"./IconWarning-Ba_VjyzM.js";import"./Wrap-DQq6jo70.js";import"./Text-JJiRTb5U.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-Dx1NoUG_.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D4VcI4Uu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DpEA8Hsr.js";import"./usePress-CaJD4Kpr.js";import"./Label-BQk6lJ-q.js";import"./useNumberFormatter-DTr98jAo.js";import"./useControlledState-B8AA3oOY.js";import"./number-nHrFdSb-.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./useFormReset-Bt7ImmB-.js";import"./VisuallyHidden-DWE0U9Im.js";const Y={title:"Form Controls/Slider",component:m,render:r=>e.createElement(m,{...r},e.createElement(s,null,"Amount"))},t={},a={render:r=>e.createElement(m,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(m,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(s,null,"Amount"))};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const Z=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,Z as __namedExportsOrder,Y as default};
