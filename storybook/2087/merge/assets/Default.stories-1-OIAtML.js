import{j as r}from"./iframe-DwkHntCQ.js";import{S as m}from"./Slider-DSFw1kAX.js";import{L as p}from"./Label-IsfDEsPh.js";import"./index-nuYtCEEu.js";import"./flowComponent-CDVCCqgo.js";import"./index-90CY5obj.js";import"./clsx-B-dksMZM.js";import"./index-Cx9MYi32.js";import"./Button-DN4_LEM9.js";import"./IconWarning-CscgxAB5.js";import"./Text-DBgNVic9.js";import"./browser-DfU0u7Y9.js";import"./EmulatedBoldText-CNqdjroB.js";import"./Text-BtFh1iC6.js";import"./utils-Di7WFWpe.js";import"./LoadingSpinner-Bd24wSd4.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-ClJgDr8F.js";import"./context-BkqugFd7.js";import"./Button-BrfRNilt.js";import"./ProgressBar-BJChhODk.js";import"./Label-CkXLKyn5.js";import"./Hidden-CTKHA4Af.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DPc8RWv0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BCP8B4jj.js";import"./utils-BgD92WZP.js";import"./useFocus-GoSUCcJ3.js";import"./useFocusWithin-tqcFW1Po.js";import"./useFocusable-Bnl-RQKa.js";import"./useFocusRing-B6zRS2mI.js";import"./useMakeFocusable-e4U3WnWM.js";import"./useFieldComponent-DTLstJQQ.js";import"./react-children-utilities-C8UOdL4T.js";import"./ClearPropsContext-D7-qaIYX.js";import"./useControlledState-DyDKUpf4.js";import"./useFormReset-BUY4HIau.js";import"./VisuallyHidden-CVpyzdGa.js";import"./Label.module-CUYTf9Jc.js";const T={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,X as __namedExportsOrder,T as default};
