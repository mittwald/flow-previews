import{j as r}from"./iframe-BAg_Vkif.js";import{S as m}from"./Slider-CFSF4P37.js";import{L as n}from"./Label-DDreQZVm.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./Button-CNza9GnT.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./Text-Cv_CDcg6.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./utils-BI8UFEcl.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./useFieldComponent-B6Kjd1ej.js";import"./useControlledState-C63VSZxO.js";import"./useFormReset-cz3XyTOd.js";import"./VisuallyHidden-0Cja9mQD.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
