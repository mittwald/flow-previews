import{j as r}from"./iframe-nUnY8CpM.js";import{S as m}from"./Slider-Bm1q_7Co.js";import{L as p}from"./Label-CarGuai1.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./clsx-B-dksMZM.js";import"./index-D5rarCk0.js";import"./Button-Drav3_ks.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./utils-DtyHAF7C.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./IconMinus-CfFVVBzr.js";import"./IconPlus-BLpLyUlX.js";import"./useFieldComponent-CwsJxGlb.js";import"./useControlledState-CaC4m18c.js";import"./useFormReset-B9MhH15U.js";import"./VisuallyHidden-DJajrHPg.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Y=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,Y as __namedExportsOrder,X as default};
