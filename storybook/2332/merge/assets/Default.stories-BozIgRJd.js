import{j as r}from"./iframe-CDsKaBRg.js";import{S as m}from"./Slider-DUH72LtD.js";import{L as n}from"./Label-D5EyKl2G.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./Button-DrVGXfuQ.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Text-BC05_GH2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./utils-D_LVRUjq.js";import"./LoadingSpinner-COR3vr_l.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./useFieldComponent-CC8SHRwT.js";import"./useControlledState-daUq4f0n.js";import"./useFormReset-CxPQXG_K.js";import"./VisuallyHidden-BzY4kZPn.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
