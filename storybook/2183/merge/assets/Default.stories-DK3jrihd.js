import{j as r}from"./iframe-jqgUclr4.js";import{S as m}from"./Slider-BqpbtU-9.js";import{L as p}from"./Label-B_zOvN70.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./clsx-B-dksMZM.js";import"./index-KptOOerd.js";import"./Button-Df2EGOwf.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./Text-B-prTEID.js";import"./browser-EX5vhkWE.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./Text-tTF8cKGK.js";import"./utils-5IALZqjS.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./Label-BRPoLfQP.js";import"./Hidden-DkAwJJ8c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./IconMinus-B0I6QV1Y.js";import"./IconPlus-_L-EdiBf.js";import"./useFieldComponent-C0Pt2yH0.js";import"./useControlledState-Cu6J25_e.js";import"./useFormReset-BuHZrSbJ.js";import"./VisuallyHidden-CdTYKgUx.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
