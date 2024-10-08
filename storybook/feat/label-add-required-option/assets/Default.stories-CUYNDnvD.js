import{R as e}from"./index-Cs7sjTYM.js";import{S as m}from"./Slider-BLDoB2b6.js";import{L as s}from"./Label-BIpm9EFM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-8D1yScr8.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./index-BU4L-DQy.js";import"./Button-I8usChom.js";import"./IconApp-C6Ekwtz9.js";import"./IconWarning-BmHOAWu0.js";import"./Wrap-DQq6jo70.js";import"./Text-F433P2hn.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./utils-CgpzwoFP.js";import"./LoadingSpinner-V2DU6wd9.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./Button-inQNMO4w.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-BkYgQ3nW.js";import"./usePress-e9a-mRh7.js";import"./Label-BRZ8BO2K.js";import"./useNumberFormatter-DCS-p0AE.js";import"./useControlledState-B7K2eYzO.js";import"./number-nHrFdSb-.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./useFormReset-DlrFI1sj.js";import"./VisuallyHidden-DH_5EOkC.js";const Z={title:"Form Controls/Slider",component:m,render:r=>e.createElement(m,{...r},e.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:r=>e.createElement(m,{...r,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},e.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:r=>e.createElement(m,{...r,defaultValue:20,showInitialMarker:!0},e.createElement(s,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const $=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,o as Disabled,i as WithInitialMarker,a as WithUnit,$ as __namedExportsOrder,Z as default};
