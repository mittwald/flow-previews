import{R as r}from"./index-Cs7sjTYM.js";import{S as m}from"./Slider-BcyX_7LA.js";import{L as s}from"./Label-H6f0-JrX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-C5nr8jLZ.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./index-BU4L-DQy.js";import"./Button-CSV5PcNg.js";import"./IconApp-Cw6LIZ6L.js";import"./IconWarning-CYODic7s.js";import"./Wrap-DQq6jo70.js";import"./Text-BeE63-Dr.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BNegcRvf.js";import"./utils-CSHM5tWr.js";import"./LoadingSpinner-Bx2kpYXf.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Button-CkDWo4mt.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Dtk_6mL9.js";import"./useFocusRing-CRCkdtud.js";import"./usePress-Do5SRlXR.js";import"./Label-CaZe8gQk.js";import"./useNumberFormatter-D1GyhdLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./number-nHrFdSb-.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./useFormReset-DlrFI1sj.js";import"./VisuallyHidden-D4oQIDY4.js";const rr={title:"Form Controls/Slider",component:m,render:e=>r.createElement(m,{...e},r.createElement(s,null,"Amount")),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}}},t={},o={render:e=>r.createElement(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20},r.createElement(s,null,"Storage"))},a={args:{isDisabled:!0}},i={render:e=>r.createElement(m,{...e,defaultValue:20,showInitialMarker:!0},r.createElement(s,null,"Amount"))};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var u,c,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var S,f,g;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,V,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Slider {...props} defaultValue={20} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const er=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,a as Disabled,i as WithInitialMarker,o as WithUnit,er as __namedExportsOrder,rr as default};
