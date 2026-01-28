import{j as r}from"./iframe-DXKyl4qq.js";import{S as m}from"./Slider-D8ePELBa.js";import{L as n}from"./Label-DJy_0fcC.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./clsx-B-dksMZM.js";import"./index-CK0x1Z6h.js";import"./Button-0acoIVQZ.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Text-DlQihciA.js";import"./browser-Q1FjFR8E.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./utils-Cgx1j8_A.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-MFF54RNh.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useFocusable-DAwaDAhU.js";import"./useFieldComponent-DrLbNusb.js";import"./useControlledState-DW1EgN0_.js";import"./useFormReset-Cw-gwOYV.js";import"./VisuallyHidden-XnRwWdWi.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
