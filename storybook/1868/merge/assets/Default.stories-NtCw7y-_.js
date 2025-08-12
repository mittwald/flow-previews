import{j as r}from"./iframe-CSKx2DB9.js";import{S as s}from"./Slider-DY83CmFj.js";import{L as m}from"./Label-uvRQ_UBY.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./clsx-B-dksMZM.js";import"./Button-CGfBcGjf.js";import"./IconWarning-BzSjyCQK.js";import"./Text-Bmwkohav.js";import"./browser-Dat2Zw9G.js";import"./EmulatedBoldText-BvpVJXGr.js";import"./Text-B7qxA7QU.js";import"./utils-YOZNNe11.js";import"./LoadingSpinner-BollpMOD.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./context-Bn01uWj8.js";import"./Button-B9MrnXzC.js";import"./ProgressBar-YhbO88q7.js";import"./Label-DAbN940v.js";import"./Hidden-DMi08SHV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_rV78s5e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ecHooUdc.js";import"./useFocus-I-Zr9gNg.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocusable-Bvlvgb30.js";import"./useControlledState-C62hAHev.js";import"./useFormReset-BnPXW2IT.js";import"./VisuallyHidden-BzxCqTVo.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,h,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,b,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const $=["Default","WithUnit","Disabled","WithInitialMarker"];export{t as Default,a as Disabled,i as WithInitialMarker,o as WithUnit,$ as __namedExportsOrder,Z as default};
