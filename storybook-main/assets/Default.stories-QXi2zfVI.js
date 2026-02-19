import{j as r}from"./iframe-B2CTi6cm.js";import{S as m}from"./Slider-CwwJM1PD.js";import{L as n}from"./Label-DccH0oyj.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C7mc_ao_.js";import"./index-C6Xw33Ma.js";import"./clsx-B-dksMZM.js";import"./index-DqADrqmd.js";import"./Button-_yLWek3e.js";import"./IconWarning-hrUSNLB1.js";import"./remote-C6QTRNf9.js";import"./Text-4QTNuVgz.js";import"./browser-Cn-sjrEd.js";import"./EmulatedBoldText-B1qN59os.js";import"./Text-CtUv1EPC.js";import"./utils-CFhs-kxq.js";import"./LoadingSpinner-DnfUZyUE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BgUQg2ov.js";import"./context-DlyTwf6g.js";import"./Button-0k2tyOZn.js";import"./ProgressBar-CsEuupc_.js";import"./Label-tk3Z2cvp.js";import"./Hidden-DPfyW1TC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DatykuNG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXOW9Qje.js";import"./useFocus-iUa6wpVM.js";import"./useFocusRing-G6UDZPL7.js";import"./useFocusable-DeW7JE_I.js";import"./useFieldComponent-DO-gEAYc.js";import"./useControlledState-D4tpAkeT.js";import"./useFormReset-BMX0RNLQ.js";import"./VisuallyHidden-D844FGjJ.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
