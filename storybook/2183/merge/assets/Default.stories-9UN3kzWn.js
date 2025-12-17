import{j as r}from"./iframe-BsZhBXal.js";import{S as m}from"./Slider-0idqVHMD.js";import{L as p}from"./Label-XwOnxXzc.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./clsx-B-dksMZM.js";import"./index-Dw50_Btz.js";import"./Button-Cxmuw7nD.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./utils-D7f3lHNi.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./IconMinus-BLVvvRO8.js";import"./IconPlus-DCRYVjFT.js";import"./useFieldComponent-DadDOWX3.js";import"./useControlledState-Bxg7VuAu.js";import"./useFormReset-4DpQBagB.js";import"./VisuallyHidden-W4tQCM8c.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
