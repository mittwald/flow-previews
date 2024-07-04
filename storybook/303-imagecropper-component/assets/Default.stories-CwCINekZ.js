import{R as e}from"./index-BwDkhjyp.js";import{S as s}from"./Slider-BQ0LG3BC.js";import{L as m}from"./Label-DqyDhkXf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-pf1ZT_RA.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./Button-CGYujOOx.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./Wrap-DQq6jo70.js";import"./Text-OHQxmlAI.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";import"./utils-_0I8Kdxf.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./Button-j9P20aTv.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Di1f8vLw.js";import"./usePress-CipJ8IEr.js";import"./Label-BbJlieEf.js";import"./useNumberFormatter-zlIxl0ha.js";import"./useControlledState-C0C-dzuH.js";import"./number-nHrFdSb-.js";import"./useLabel-Dy08JOVD.js";import"./useLabels-h5MY4Xo1.js";import"./useFormReset-CqSSSrN8.js";import"./VisuallyHidden-CctDujdB.js";const Y={title:"Form Controls/Slider",component:s,render:r=>e.createElement(s,{...r},e.createElement(m,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(s,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(m,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(s,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(m,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
