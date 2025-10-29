import{j as r}from"./iframe-BQyHcTNh.js";import{S as m}from"./Slider-djmgzwFl.js";import{L as p}from"./Label-JK740Dk1.js";import"./index-nuYtCEEu.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./Button-ieCP1ArV.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./utils-CdCPWCHO.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./useMakeFocusable-QwAUUrkX.js";import"./useFieldComponent-Cyrlnow6.js";import"./ClearPropsContext-CD4xLCoc.js";import"./useControlledState-TEYDAVm8.js";import"./useFormReset-DB-Y7LtK.js";import"./VisuallyHidden-rd1eTAwo.js";import"./Label.module-CUYTf9Jc.js";const N={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const P=["Default","ReadOnly","WithUnit","Disabled","WithInitialMarker"];export{t as Default,i as Disabled,o as ReadOnly,s as WithInitialMarker,a as WithUnit,P as __namedExportsOrder,N as default};
