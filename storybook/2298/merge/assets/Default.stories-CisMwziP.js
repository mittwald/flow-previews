import{j as r}from"./iframe-Cs0JkT9Q.js";import{S as m}from"./Slider-CKPyVsZE.js";import{L as n}from"./Label-CHxievOH.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./clsx-B-dksMZM.js";import"./index-BDmaB34G.js";import"./Button-BS2N-oft.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Text-l9LtklMs.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./utils-BvIIGzqK.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-y02TS-RC.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./useFieldComponent-BGOnrhQA.js";import"./useControlledState-DrKGwN1m.js";import"./useFormReset-5IC1Q0ld.js";import"./VisuallyHidden-BGmnCuXu.js";import"./Label.module-CUYTf9Jc.js";const K={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(n,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(n,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(n,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
