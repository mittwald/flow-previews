import{j as r}from"./iframe-B_TkxfTi.js";import{S as t}from"./Slider-CvpASKjD.js";import{L as p}from"./Label-B2z_KUki.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./Button-RJdr80c6.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Text-DZTN4U6B.js";import"./browser-CLjLvoWS.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./utils-CEh0pYpN.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./useFieldComponent-C57DTYPz.js";import"./useControlledState-CYdArkzJ.js";import"./useFormReset-BlUfWbi8.js";import"./VisuallyHidden-BGokW8gm.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:t,render:e=>r.jsx(t,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},a={},o={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={render:e=>r.jsx(t,{...e,unit:"×",minValue:1,maxValue:3,defaultValue:2.5,step:.5,children:r.jsx(p,{children:"Zoom"})})},n={args:{isDisabled:!0}},m={render:e=>r.jsx(t,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
