import{j as r}from"./iframe-D016uj-S.js";import{S as m}from"./Slider-vKFrd_0j.js";import{L as n}from"./Label-CPn02_Ye.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./clsx-B-dksMZM.js";import"./index-BqMc4IgT.js";import"./Button-DbVylex6.js";import"./IconWarning-BQBcHsun.js";import"./remote-CBH6kE0Y.js";import"./Text-BZY8Sc_P.js";import"./browser-DLaO_aqG.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./Text-DsGfukAy.js";import"./utils-DQASSsuC.js";import"./LoadingSpinner-Dcve79PX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./context-CQQzrfiw.js";import"./Button-Cna7ldBx.js";import"./ProgressBar-CXPYtOXa.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DeeX-PEx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVzN9kXH.js";import"./useFocus-tZAxz16O.js";import"./useFocusRing-BdU2-3MK.js";import"./useFocusable-DeuIjFJe.js";import"./useFieldComponent-OnEMgUvv.js";import"./useControlledState-cpMkF7RC.js";import"./useFormReset-BG0U5_Pu.js";import"./VisuallyHidden-D5-LZtaI.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
