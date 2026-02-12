import{j as r}from"./iframe-BO07bPAa.js";import{S as m}from"./Slider-B-Wdg8iQ.js";import{L as n}from"./Label-D0Lhb5Vq.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BaceyrB2.js";import"./index-CQGDGAsD.js";import"./clsx-B-dksMZM.js";import"./index-C__iODou.js";import"./Button-CCtz8EXc.js";import"./IconWarning-ClLv5I07.js";import"./remote-C9jEPRv0.js";import"./Text-CwdryKSs.js";import"./browser-B0pBncgx.js";import"./EmulatedBoldText-Bl01c38V.js";import"./Text-sIV6FVOB.js";import"./utils-DpF9Snp1.js";import"./LoadingSpinner-BTNHBT1C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CYJTPAtB.js";import"./context-DKHz4OX0.js";import"./Button-CPst5v-a.js";import"./ProgressBar-BUHmhWxP.js";import"./Label-DlbijyYq.js";import"./Hidden-Bl2ixnRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dans5Mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-UbwEnmrk.js";import"./useFocus-ntzScLPi.js";import"./useFocusRing-DXebh_G-.js";import"./useFocusable-C66-pRTt.js";import"./useFieldComponent-B5uAaQ_H.js";import"./useControlledState-DyIed2bM.js";import"./useFormReset-D6_s6z9R.js";import"./VisuallyHidden-DCYSiy07.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
