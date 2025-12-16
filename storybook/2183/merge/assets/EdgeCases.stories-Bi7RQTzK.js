import{j as r}from"./iframe-C3qryY9m.js";import{R as l,a as p}from"./Radio-BFNUHHc9.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CwdSHExV.js";import{T as u}from"./Text-D-8m5QW2.js";import{C as c}from"./Content-tUfsb4VC.js";import{R as n}from"./RadioButton-C9baug7v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./index-BCGSECUV.js";import"./ColumnLayout-BSUl4LKa.js";import"./useFieldComponent-BCb9qeqT.js";import"./utils-DpUn2o29.js";import"./useMakeFocusable-BC3ksk4C.js";import"./RadioGroup-D2WYjJBE.js";import"./FieldError-Bjrpvc0X.js";import"./Text-ugyEWZ3z.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-3X5C6e4Q.js";import"./useLabel-CQT2EQei.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./SelectionIndicator-Cnczr7tl.js";import"./useFormValidation-DvJkknbD.js";import"./useFocus-BlyEGXer.js";import"./useControlledState-D6tzoGpH.js";import"./FocusScope-DBhIZEy-.js";import"./useFocusRing-GVTVCbky.js";import"./context-Dn-XBzeE.js";import"./useFormReset-CU22rOa5.js";import"./usePress-gRpVWz6L.js";import"./useFocusable-B6lNdGau.js";import"./VisuallyHidden-CRCUMBi1.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconRadioOn-Bt3o_cRW.js";import"./Label-C-0JfuKv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./FieldError-2lUipCQG.js";import"./IconDanger-CnINUXvw.js";import"./browser-7Ut6r0Ca.js";import"./EmulatedBoldText-BhqmPl42.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
