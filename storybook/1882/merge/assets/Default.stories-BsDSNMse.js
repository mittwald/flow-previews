import{j as r}from"./iframe-DqL79zQf.js";import{S as s}from"./Slider-endBvbS8.js";import{L as m}from"./Label-BLSzr0Yv.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./clsx-B-dksMZM.js";import"./Button-QUsEiN5S.js";import"./IconWarning-B2WreSxS.js";import"./Text-M86zJQcf.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./Text-zdoGkENQ.js";import"./utils-z68HW5Om.js";import"./LoadingSpinner-BTTfXDBN.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./context-CSgowZ2Z.js";import"./Button-BgVR6Xai.js";import"./ProgressBar-CH989tir.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BjvlKqLd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CO3SG6lx.js";import"./useFocus-BD5ovWzl.js";import"./useFocusRing-CbrFyu86.js";import"./useFocusable-B73WrcgM.js";import"./useControlledState--BvK6IW4.js";import"./useFormReset-CsKPjgKa.js";import"./VisuallyHidden-BQckF0OS.js";const Z={title:"Form Controls/Slider",component:s,render:e=>r.jsx(s,{...e,children:r.jsx(m,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={render:e=>r.jsx(s,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(m,{children:"Storage"})})},a={args:{isDisabled:!0}},i={render:e=>r.jsx(s,{...e,showInitialMarker:!0,children:r.jsx(m,{children:"Amount"})})};var p,n,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
