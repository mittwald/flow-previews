import{j as r}from"./iframe-9LT5pwxo.js";import{S as m}from"./Slider-CWeeLdb_.js";import{L as p}from"./Label-Cy0HO6mF.js";import"./index-nuYtCEEu.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./clsx-B-dksMZM.js";import"./index-B4OxUaac.js";import"./Button-DgX4Ha9j.js";import"./IconWarning-BGmK8I3p.js";import"./Text-FZjxGLxv.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./utils-C12iYS2x.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./useFieldComponent-FBKhS2uw.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";import"./useControlledState-B0dx1ah2.js";import"./useFormReset-DsyYy3rG.js";import"./VisuallyHidden-kbtTP9xl.js";import"./Label.module-CUYTf9Jc.js";const P={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
