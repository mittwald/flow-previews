import{j as r}from"./iframe-CCgutS5t.js";import{S as m}from"./Slider-pTZ8H6Lb.js";import{L as p}from"./Label-CNIOR_Eh.js";import"./index-nuYtCEEu.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./Button-CB_SQlxf.js";import"./IconWarning-BIjPfZ_7.js";import"./Text-C-3mWHEt.js";import"./browser-Cx9TdPw4.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./utils-N6USVjPQ.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./useMakeFocusable-Cb2U_kBy.js";import"./useFieldComponent-B36i382k.js";import"./react-children-utilities-DK8cwA_F.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./useControlledState-C-pLTCEb.js";import"./useFormReset-C2ixUAq4.js";import"./VisuallyHidden-upAad0zi.js";import"./Label.module-CUYTf9Jc.js";const P={title:"Form Controls/Slider",component:m,render:e=>r.jsx(m,{...e,children:r.jsx(p,{children:"Amount"})}),parameters:{controls:{exclude:["tunnelId","render","showInitialMarker"]}},args:{defaultValue:20}},t={},o={args:{isReadOnly:!0}},a={render:e=>r.jsx(m,{...e,formatOptions:{style:"unit",unit:"gigabyte"},minValue:20,maxValue:2e3,defaultValue:200,step:20,children:r.jsx(p,{children:"Storage"})})},i={args:{isDisabled:!0}},s={render:e=>r.jsx(m,{...e,showInitialMarker:!0,children:r.jsx(p,{children:"Amount"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
