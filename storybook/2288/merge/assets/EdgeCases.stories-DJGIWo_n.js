import{j as r}from"./iframe-CZIIjdGx.js";import{R as l,a as p}from"./Radio-nt9MvLot.js";import{R as n}from"./RadioButton-DZ1TeGwX.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-D4pFyaiE.js";import{T as u}from"./Text-B-NqQsb3.js";import{C as c}from"./Content-U0aMx_lt.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./index-7Gan3Sd3.js";import"./ColumnLayout-Ch70XwSX.js";import"./useFieldComponent-DWG920Yi.js";import"./utils-CzlwFdSi.js";import"./useMakeFocusable-CCnYf6xU.js";import"./RadioGroup-CBxgiyPO.js";import"./FieldError-Cm712Nbp.js";import"./Text-B_tooMjG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Dyc6bd1B.js";import"./useLabel-CmRl_D3U.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./useFormValidation-Bw0zMO4k.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useControlledState-DqlM9bHJ.js";import"./FocusScope-Biunv2Bw.js";import"./context-B5Owy1-_.js";import"./useFormReset-DwvZDjIx.js";import"./usePress-DFDeIEOr.js";import"./useFocusable-deUO30SV.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./Label-BCeZc6nh.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./FieldError-BwbB6Ytj.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";import"./browser-Cl51s5Ql.js";import"./EmulatedBoldText-BBfJQ4d1.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
