import{j as r}from"./iframe-C3qryY9m.js";import{S as m}from"./Slider-C9QqtjWd.js";import{L as p}from"./Label-C-0JfuKv.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./clsx-B-dksMZM.js";import"./index-BCGSECUV.js";import"./Button-DjS8Y37J.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./Text-D-8m5QW2.js";import"./browser-7Ut6r0Ca.js";import"./EmulatedBoldText-BhqmPl42.js";import"./Text-ugyEWZ3z.js";import"./utils-DpUn2o29.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./context-Dn-XBzeE.js";import"./Button-DXnGr114.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./IconMinus-Dp0f7OBF.js";import"./IconPlus-BC6KfZ4p.js";import"./useFieldComponent-BCb9qeqT.js";import"./useControlledState-D6tzoGpH.js";import"./useFormReset-CU22rOa5.js";import"./VisuallyHidden-CRCUMBi1.js";import"./Label.module-CUYTf9Jc.js";const X={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
