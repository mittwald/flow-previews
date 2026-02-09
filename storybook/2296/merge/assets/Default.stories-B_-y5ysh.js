import{j as r}from"./iframe-CcNHCKoB.js";import{S as m}from"./Slider-CuA25s_K.js";import{L as n}from"./Label-F2VOWZsZ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./Button-DTuLbClr.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./Text-BmtlE-88.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./utils-NnqZ9ZBK.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./useControlledState-TVt6Qf5c.js";import"./useFormReset-CUbMVBNo.js";import"./VisuallyHidden-FLGfwvrv.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
