import{j as r}from"./iframe-ChZoSAk9.js";import{S as m}from"./Slider-pIIqeZl4.js";import{L as p}from"./Label-BtQBKk3e.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./clsx-B-dksMZM.js";import"./index-0x3bxhbi.js";import"./Button-igkSssls.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./Text-DeId_uwd.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./utils-3orXHcy8.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./IconMinus-Bd-huTvL.js";import"./IconPlus-BIH__R1o.js";import"./useFieldComponent-CTbZHLtq.js";import"./useControlledState-CXwLHBKW.js";import"./useFormReset-DlW87ulD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
