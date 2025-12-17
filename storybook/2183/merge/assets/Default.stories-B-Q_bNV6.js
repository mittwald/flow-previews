import{j as r}from"./iframe-DnYi-t8H.js";import{S as m}from"./Slider-BPoH1M0J.js";import{L as p}from"./Label-DliS2X1j.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./clsx-B-dksMZM.js";import"./index-B9w1U9jw.js";import"./Button-CGm1W1qT.js";import"./IconApp-C4H0Rmt2.js";import"./remote-BR657ewb.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./Text-Bl1v2nei.js";import"./browser-Cx51Q07l.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./Text-CnHQzzWa.js";import"./utils-DErHybyt.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Button-DvsL5VIA.js";import"./ProgressBar-C0arnLiQ.js";import"./Label-DpP4Z3U4.js";import"./Hidden-D2dwjMI8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CvNtERHu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSFKAxA8.js";import"./useFocus-Cp5_bDzt.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocusable-CJcfCTZ3.js";import"./IconMinus-CT0Ta-Yw.js";import"./IconPlus-Bcop-y2x.js";import"./useFieldComponent-BC1W_qCr.js";import"./useControlledState-CUB7XdW4.js";import"./useFormReset-CY2BFsrw.js";import"./VisuallyHidden-BnpIJKhq.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
