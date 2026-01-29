import{j as r}from"./iframe-B9oS1eAm.js";import{S as t}from"./Slider-BB1sC_KI.js";import{L as p}from"./Label-IJFVFDuP.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./Button-DYAI_N0q.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Text-D9DZPtYx.js";import"./browser-DuZ3LDHb.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./utils-CkbQ6lDO.js";import"./LoadingSpinner-BCe3g54S.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./context-CSGUwiAp.js";import"./Button-BCaEF3RH.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvAqmGGe.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useFocusable-DLbArD3q.js";import"./useFieldComponent-BBgwgWHq.js";import"./useControlledState-BhPlyXsf.js";import"./useFormReset-CfNbS0Tm.js";import"./VisuallyHidden-D5FMvG_d.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},a={},o={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(p,{children:"Zoom"})})},n={args:{isDisabled:!0}},m={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
