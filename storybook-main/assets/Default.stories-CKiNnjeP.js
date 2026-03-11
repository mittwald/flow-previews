import{j as r}from"./iframe-C037GO3p.js";import{S as m}from"./Slider-CidnE8CV.js";import{L as n}from"./Label-B8SETf0h.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./clsx-B-dksMZM.js";import"./index-aVIlTX7l.js";import"./Button-Cf9guGvq.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./Text-1H8qvaGa.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Text-BlWqR5Lx.js";import"./utils-B21QcS96.js";import"./LoadingSpinner-7anO2L1H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DtHLFK3z.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./useFieldComponent-BW6tilSl.js";import"./useControlledState-DIGHyhBs.js";import"./useFormReset-BmsW_IRy.js";import"./VisuallyHidden-DBGkoZNP.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
