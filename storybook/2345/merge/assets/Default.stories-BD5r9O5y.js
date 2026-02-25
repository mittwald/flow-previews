import{j as r}from"./iframe-CAK8FS83.js";import{S as m}from"./Slider-CQvvz7V5.js";import{L as n}from"./Label-B8vv94Ak.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./clsx-B-dksMZM.js";import"./index-CbMMdC0j.js";import"./Button-itgufTCs.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./Text-DLuRhlhH.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./utils-th26LVD6.js";import"./LoadingSpinner-BC7xHqe0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./useFieldComponent-DkAI1nDB.js";import"./useControlledState-ik7lpKJV.js";import"./useFormReset-ClNM6Kah.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
