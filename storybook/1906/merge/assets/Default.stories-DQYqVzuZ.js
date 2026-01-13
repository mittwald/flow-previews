import{j as r}from"./iframe-Cwcli8hM.js";import{S as t}from"./Slider-DM6RSDbJ.js";import{L as p}from"./Label-CdIP0Akw.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./Button-I78ZffkB.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Text-D-waKGHU.js";import"./browser-Dim89v3O.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./utils-C3qjWKVL.js";import"./LoadingSpinner-KOoU2K2x.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./useFieldComponent-DIqLhVln.js";import"./useControlledState-ClHEyKKa.js";import"./useFormReset-BDGa5C7A.js";import"./VisuallyHidden-BpjAuZe7.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},a={},o={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(p,{children:"Zoom"})})},n={args:{isDisabled:!0}},m={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} minValue={20} maxValue={2000} defaultValue={200} step={20}>
      <Label>Storage</Label>
    </Slider>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} unit="×" minValue={1} maxValue={3} defaultValue={2.5} step={0.5}>
      <Label>Zoom</Label>
    </Slider>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Slider {...props} showInitialMarker>
      <Label>Amount</Label>
    </Slider>
}`,...m.parameters?.docs?.source}}};const N=["Default","ReadOnly","WithFormatOptions","WithUnit","Disabled","WithInitialMarker"];export{a as Default,n as Disabled,o as ReadOnly,s as WithFormatOptions,m as WithInitialMarker,i as WithUnit,N as __namedExportsOrder,K as default};
