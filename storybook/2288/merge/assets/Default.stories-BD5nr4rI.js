import{j as r}from"./iframe-CdVpWnc8.js";import{S as m}from"./Slider-pT02PoAV.js";import{L as n}from"./Label-CQQzXuOB.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./Button-BYd_Eo9F.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./utils-ClIic5nH.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./useFieldComponent-pH8UQhzW.js";import"./useControlledState-B7ztCH5k.js";import"./useFormReset-D5EHipFr.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
