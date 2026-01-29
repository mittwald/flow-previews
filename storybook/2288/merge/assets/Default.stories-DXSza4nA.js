import{j as r}from"./iframe-Bj8CIgLy.js";import{S as m}from"./Slider-BaIZ_LXN.js";import{L as n}from"./Label-DCfOJgVU.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./Button-b_60CJFp.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Text-BbFFlg8m.js";import"./browser-Rl4DjN4H.js";import"./EmulatedBoldText-CYAzRgIu.js";import"./Text-CVMu3Bei.js";import"./utils-D41FTHpf.js";import"./LoadingSpinner-Bl0_iJOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./Button-Kf97rzrP.js";import"./ProgressBar-CzzSLaP3.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-j5JIlG5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BLrqdZMB.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useFocusable-DNf9Dm0r.js";import"./useFieldComponent-DFS7CEov.js";import"./useControlledState-C0IHmt74.js";import"./useFormReset-DPVe5t_C.js";import"./VisuallyHidden-D10Fyvvv.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
