import{j as r}from"./iframe-BfVXcSwu.js";import{S as m}from"./Slider-D3YT4xqc.js";import{L as n}from"./Label-Bd8l-oGM.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./Button-BWaSf0b-.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Text-DuT5OHtj.js";import"./browser-6PMbihrp.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Text-DLMHe2l_.js";import"./utils-fXq1spu5.js";import"./LoadingSpinner-uBvx8mS0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./context-BIORzbvt.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./useFieldComponent-CiLN9FTD.js";import"./useControlledState-DrmC-rK0.js";import"./useFormReset-bqmCiwf6.js";import"./VisuallyHidden-CW_0epyS.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
