import{j as r}from"./iframe-1Z6hWL0q.js";import{S as m}from"./Slider-BsNmQdRM.js";import{L as n}from"./Label-BLX0X_A7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./clsx-B-dksMZM.js";import"./index-OoNE8c9e.js";import"./Button-Up8_TRdV.js";import"./IconWarning-CstRa6-6.js";import"./remote-BXzLQ_GS.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./utils-B0Ub4KXD.js";import"./LoadingSpinner-B9ElqUFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./useFieldComponent-DdzfuZRi.js";import"./useControlledState-DfFBi8JJ.js";import"./useFormReset-BI-pxd56.js";import"./VisuallyHidden-CCJLIB7u.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
