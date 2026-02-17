import{j as r}from"./iframe-DwsGXJVG.js";import{S as m}from"./Slider-CKuX5Sst.js";import{L as n}from"./Label-DOR8D5QK.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./Button-CqL_vLUu.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./utils-DRn9wprx.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./useFieldComponent-BobnjoTA.js";import"./useControlledState-CRB4bW25.js";import"./useFormReset-hk4HwqV2.js";import"./VisuallyHidden-Fvx90J8z.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
