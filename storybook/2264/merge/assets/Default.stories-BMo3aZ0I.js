import{j as r}from"./iframe-CBKKDtut.js";import{S as m}from"./Slider-DqN0MZH1.js";import{L as n}from"./Label-YKVXUmct.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./Button-B9OQWjLR.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Text-DXycmlPy.js";import"./browser-C9q5kf03.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./utils-CzD9rXMA.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./useFieldComponent-377eOR22.js";import"./useControlledState-1Ujh64WW.js";import"./useFormReset-tFiefpak.js";import"./VisuallyHidden-BTRh3ybS.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
