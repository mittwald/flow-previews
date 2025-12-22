import{j as r}from"./iframe-CYPvHnuu.js";import{S as m}from"./Slider-DxSiPRa8.js";import{L as n}from"./Label-BTRY4Fha.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./Button-DytH811E.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./Text-B7HPZf5X.js";import"./browser-DHkGBw9W.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./utils---ZBHqUT.js";import"./LoadingSpinner-If-eK7wE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./context-Dv0AyQUz.js";import"./Button-BM3lF2Ud.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAll9lzw.js";import"./useFocus-Besr2u9O.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocusable-DNqkvuS2.js";import"./useFieldComponent-K4osF3of.js";import"./useControlledState-CzL0wnxp.js";import"./useFormReset-DMfMEm_f.js";import"./VisuallyHidden-DQ4VZa68.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};const N=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,N as __namedExportsOrder,K as default};
