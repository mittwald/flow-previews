import{j as r}from"./iframe-BfVXcSwu.js";import{R as l,a as p}from"./Radio-hrsfoyBB.js";import{R as n}from"./RadioButton-oz0Dh7rT.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dq8kVRnW.js";import{T as u}from"./Text-DuT5OHtj.js";import{C as c}from"./Content-DYblwsjo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./index-CeMFBQ52.js";import"./ColumnLayout-BSe_43hE.js";import"./useFieldComponent-CiLN9FTD.js";import"./utils-fXq1spu5.js";import"./useMakeFocusable-BvXkep4g.js";import"./RadioGroup-CDn9UQX_.js";import"./FieldError-DwfvyaXU.js";import"./Text-DLMHe2l_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BvL7gPGk.js";import"./useLabel-_iuRLI1y.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./SelectionIndicator-DdESkGsw.js";import"./useFormValidation-BRgTVkeU.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useControlledState-DrmC-rK0.js";import"./FocusScope-DYj4AULV.js";import"./context-BIORzbvt.js";import"./useFormReset-bqmCiwf6.js";import"./usePress-CZJvw_K-.js";import"./useFocusable-Ct-dNppG.js";import"./VisuallyHidden-CW_0epyS.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Label-Bd8l-oGM.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./FieldError-DHMqnFf9.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";import"./browser-6PMbihrp.js";import"./EmulatedBoldText-D7Dqf59X.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
