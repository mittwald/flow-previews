import{j as r}from"./iframe-DhXHhh1w.js";import{S as m}from"./Slider-CKoTrAVI.js";import{L as n}from"./Label-B97zndYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./Button-DK8hND6e.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./Text-VjJbV_1P.js";import"./browser-DC-Dnn5c.js";import"./EmulatedBoldText-DK8yRX5h.js";import"./Text-BhHd18lu.js";import"./utils--GApMcJ9.js";import"./LoadingSpinner-BQo0GQZs.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./context-C0JBe_V4.js";import"./Button-B72XzUR4.js";import"./ProgressBar-F8Z66Kjl.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B7imI5Js.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuFsm5YE.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useFocusable-DaonITQz.js";import"./useFieldComponent-CXGCADuw.js";import"./useControlledState-BAaAMcGs.js";import"./useFormReset-BhTKQiKR.js";import"./VisuallyHidden-B52Q2-iE.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
