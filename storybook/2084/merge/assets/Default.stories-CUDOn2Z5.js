import{j as r}from"./iframe-Bju5tM19.js";import{S as m}from"./Slider-ChkmuzoX.js";import{L as p}from"./Label-CEBawMgO.js";import"./index-nuYtCEEu.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./Button-D01G-2Tc.js";import"./IconWarning-EseH3oBy.js";import"./Text-Ctwf1INQ.js";import"./browser-5LoYBPX6.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./utils-CHaPYnRu.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./useMakeFocusable-BXmgj38r.js";import"./useFieldComponent-SvMgnfSt.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";import"./useControlledState-BiPn7KDX.js";import"./useFormReset-CYS5QNbo.js";import"./VisuallyHidden-muGwU-w1.js";import"./Label.module-CUYTf9Jc.js";const P={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
