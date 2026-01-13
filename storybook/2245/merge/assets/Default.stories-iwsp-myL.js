import{j as r}from"./iframe-DoM-BIwg.js";import{S as m}from"./Slider-C7HxKRb6.js";import{L as n}from"./Label-BFVzgZLR.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./clsx-B-dksMZM.js";import"./index-BXuzzWnK.js";import"./Button-CT5Y8uWS.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./Text-lsEUOuuk.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./utils-D5il_mPj.js";import"./LoadingSpinner-CPr3D27j.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./useFieldComponent-CZ4YFclL.js";import"./useControlledState--GEywRyg.js";import"./useFormReset-DsbUUfuN.js";import"./VisuallyHidden-GPtOnQVg.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
