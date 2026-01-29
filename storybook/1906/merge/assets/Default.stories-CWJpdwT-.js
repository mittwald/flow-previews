import{j as r}from"./iframe-DzPnzOIh.js";import{S as t}from"./Slider-CZcU9Q4Z.js";import{L as p}from"./Label-Caopyz4i.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./Button-B0xxYjKh.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Text-CgXXsRbz.js";import"./browser-DO1on-Lg.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./utils-DdPADezN.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./useFieldComponent-DttoHSbm.js";import"./useControlledState-C5NVaprX.js";import"./useFormReset-D5TocNhH.js";import"./VisuallyHidden-C2tKF7nl.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},a={},o={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(p,{children:"Zoom"})})},n={args:{isDisabled:!0}},m={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
