import{j as r}from"./iframe-gtGtPSGX.js";import{R as l,a as p}from"./Radio-BNXoNhJG.js";import{R as n}from"./RadioButton-B_tyyPUT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B6Qa731R.js";import{T as u}from"./Text-QzTdDFQg.js";import{C as c}from"./Content-BghcAC3J.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./index-CkPgzcm3.js";import"./ColumnLayout-QU4_RQ60.js";import"./useFieldComponent-BaX-M8wV.js";import"./utils-1b_KoCGs.js";import"./useMakeFocusable-SxNAN9f1.js";import"./RadioGroup-CWmqPKFV.js";import"./FieldError-DenhE7nb.js";import"./Text-B8kBB-Il.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BRxvySUZ.js";import"./useLabel-BqGs6HWh.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./useFormValidation-BQy4AKy0.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useControlledState-a_M_Sxv2.js";import"./FocusScope-d04sRaMv.js";import"./context-B_6Y7rB4.js";import"./useFormReset-TvJ_gIa-.js";import"./usePress-ub7fcIm5.js";import"./useFocusable-uEYYPBvA.js";import"./VisuallyHidden-D8bGSG_p.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Label-ezDYxAqR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./FieldError-co03Ctd_.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="a" aria-label="Label">
      <Radio value="a">{dummyText.long} </Radio>
      <Radio value="b">{dummyText.long} </Radio>
      <Radio value="c">{dummyText.long}</Radio>
    </RadioGroup>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label" l={[1, 1, 1, 1]}>
      {Array(6).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            <Text>{dummyText.medium}</Text>
            <Content>{dummyText.medium}</Content>
          </RadioButton>)}
    </RadioGroup>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <RadioGroup {...props} defaultValue="0" aria-label="Label">
      {Array(3).fill("").map((value, index) => <RadioButton value={index.toString()} key={index}>
            Option {index + 1}
          </RadioButton>)}
    </RadioGroup>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...m.parameters?.docs?.source}}};const mr=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,mr as __namedExportsOrder,ir as default};
