import{j as r}from"./iframe-DSXKf9Qs.js";import{S as m}from"./Slider-DOswgWzm.js";import{L as n}from"./Label-BZGX3mYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./Button-D9RPwGO-.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Text-C7KW9wgf.js";import"./browser-zi1f_NHh.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./utils-BkNrSrSW.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3-3tpV2.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useFocusable-BiabYp81.js";import"./useFieldComponent-CCab4n06.js";import"./useControlledState-C8VBbj0I.js";import"./useFormReset-CY4Zdzy9.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
