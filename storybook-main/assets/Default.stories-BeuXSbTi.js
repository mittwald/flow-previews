import{j as r}from"./iframe-DALqHAyB.js";import{S as m}from"./Slider-1frwapNk.js";import{L as p}from"./Label-DyIG2v27.js";import"./index-nuYtCEEu.js";import"./flowComponent-CvsgRxlP.js";import"./index-B4rQ27h-.js";import"./clsx-B-dksMZM.js";import"./index-CPatoSxs.js";import"./Button-BbfkfOCO.js";import"./IconWarning-CcDUp5xj.js";import"./Text-BxJmp77a.js";import"./browser-pVqjrops.js";import"./EmulatedBoldText-Dxvms5Wy.js";import"./Text-vTixOjUz.js";import"./utils-C0MA_VWy.js";import"./LoadingSpinner-K4oR_LJz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CC_Z0iQM.js";import"./context-aw0dYPtu.js";import"./Button-B6bWdLOu.js";import"./ProgressBar-udFHgrmU.js";import"./Label-D28Pduqa.js";import"./Hidden-SLgE1qP8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-85XHUWXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-RYFgUS1k.js";import"./useFocus-CR3niFsF.js";import"./useFocusRing-BpmoLA66.js";import"./useFocusable-UlymAToY.js";import"./useMakeFocusable-D8hcpFKJ.js";import"./useFieldComponent-CuLkv2Wr.js";import"./react-children-utilities-C1NF1MDP.js";import"./ClearPropsContext-frWmeUQW.js";import"./useControlledState-BAMCZ0BN.js";import"./useFormReset-C8DxwuW7.js";import"./VisuallyHidden-BkwE9NAp.js";import"./Label.module-CUYTf9Jc.js";const P={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Q=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,Q as __namedExportsOrder,P as default};
