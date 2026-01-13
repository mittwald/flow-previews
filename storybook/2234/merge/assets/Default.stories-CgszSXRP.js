import{j as r}from"./iframe-y-Qy_Rwm.js";import{S as m}from"./Slider-D-GvaIF8.js";import{L as n}from"./Label-DwZ1nY2p.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./clsx-B-dksMZM.js";import"./index-DHyBIfcz.js";import"./Button-BD4RfixQ.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./Text-Dc6HCiIC.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./utils-Ek_OXClQ.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./useFieldComponent-BPtwnKvp.js";import"./useControlledState-BivKNDQQ.js";import"./useFormReset-DmoJehYX.js";import"./VisuallyHidden-uuI_aPdk.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
