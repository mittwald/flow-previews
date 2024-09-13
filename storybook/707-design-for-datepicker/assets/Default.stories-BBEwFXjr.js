import{R as r}from"./index-Cs7sjTYM.js";import{S as m}from"./Slider-DfsHN9Ev.js";import{L as s}from"./Label-BVlI96CM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-DAlTzncN.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./index-BU4L-DQy.js";import"./Button-DB5iJVv6.js";import"./IconApp-0HsaHm1x.js";import"./IconWarning-CJmku_bU.js";import"./Wrap-DQq6jo70.js";import"./Text-FmX6mEPQ.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./utils-CgpzwoFP.js";import"./LoadingSpinner-D9dE_Tes.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-B_pBO4HW.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DdFCD-YN.js";import"./usePress-C9_maMb0.js";import"./Label-BRZ8BO2K.js";import"./useNumberFormatter-D1GyhdLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./number-nHrFdSb-.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./useFormReset-DlrFI1sj.js";import"./VisuallyHidden-Bx6BLr_2.js";const $={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},a={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},o={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
