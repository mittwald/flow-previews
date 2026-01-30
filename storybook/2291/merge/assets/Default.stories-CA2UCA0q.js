import{j as r}from"./iframe-BIoFjWpr.js";import{S as m}from"./Slider-D1ZXizhs.js";import{L as n}from"./Label-D-wfWBos.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./clsx-B-dksMZM.js";import"./index-h2cI_GQ2.js";import"./Button-60lZfz3H.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./Text-Dw86EjFX.js";import"./browser-BAGCYS_p.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./utils-DZ7CVsEQ.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Uox4pFjd.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./useFieldComponent-DpF862rt.js";import"./useControlledState-A9PECuda.js";import"./useFormReset-DTiYdK4X.js";import"./VisuallyHidden-iLNm3MD9.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
