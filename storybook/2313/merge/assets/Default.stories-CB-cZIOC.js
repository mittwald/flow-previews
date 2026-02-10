import{j as r}from"./iframe-HxmydubW.js";import{S as m}from"./Slider-MHVPXR8x.js";import{L as n}from"./Label-Jo5QLCir.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DGGyXaO_.js";import"./index-Ck9gKEcY.js";import"./clsx-B-dksMZM.js";import"./index-CEuE-GZL.js";import"./Button-CfZWs4w7.js";import"./IconWarning-C9xwJqAl.js";import"./remote-fubbDoJI.js";import"./Text-CUJOJiDD.js";import"./browser-XpDtWA4a.js";import"./EmulatedBoldText-tUaMuzLe.js";import"./Text-CyO0jXov.js";import"./utils-QtLN3P4K.js";import"./LoadingSpinner-CzIk11gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bu1c0OhT.js";import"./context-CAIZZp13.js";import"./Button-B_Zn8gpO.js";import"./ProgressBar-BLMl0tpz.js";import"./Label-DaNiLy_u.js";import"./Hidden-CAR-DQuE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CkTRhQb0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-yluX3X-J.js";import"./useFocus-AF-IcVAt.js";import"./useFocusRing-CAJt6BJw.js";import"./useFocusable-H6SSWU_B.js";import"./useFieldComponent-Bahj-THY.js";import"./useControlledState-N-j6hnQm.js";import"./useFormReset-C2bi11DR.js";import"./VisuallyHidden-BPW-z4K2.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
