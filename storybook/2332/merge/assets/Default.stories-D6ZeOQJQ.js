import{j as r}from"./iframe-DG8PGYI2.js";import{S as m}from"./Slider-B7bs1Qox.js";import{L as n}from"./Label-BPpS4vmA.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C4oSbM4F.js";import"./index-CkEHDxga.js";import"./clsx-B-dksMZM.js";import"./index-LR7sdXL2.js";import"./Button-DsdihroW.js";import"./IconWarning-SSUZ9dob.js";import"./remote-DDSPySo3.js";import"./Text-DXfg_t75.js";import"./browser-CdVMgEWJ.js";import"./EmulatedBoldText-BysjcSz3.js";import"./Text-0L-5i7aJ.js";import"./utils-07AIACoX.js";import"./LoadingSpinner-JP8g8ixs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DXFpyvRx.js";import"./context-CRjwjO0_.js";import"./Button-CKW1LLKF.js";import"./ProgressBar-BiJjcsjO.js";import"./Label-2cZ0Lvh6.js";import"./Hidden-DLF1ykG-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D3O2Shqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dy-OAjIk.js";import"./useFocus-gEyTxYiG.js";import"./useFocusRing-CyfWRfC8.js";import"./useFocusable-0ogj4vIM.js";import"./useFieldComponent-CBicToer.js";import"./useControlledState-CbmAXNAC.js";import"./useFormReset-BIdGIAau.js";import"./VisuallyHidden-DKQ2uWX5.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
