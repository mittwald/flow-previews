import{j as r}from"./iframe-DewKgIpk.js";import{R as l,a as p}from"./Radio-CmewGKfr.js";import{R as n}from"./RadioButton-Bx1iWIPG.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-B1j2MDld.js";import{T as u}from"./Text-CAhyjFWz.js";import{C as c}from"./Content-DTiR9lwx.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NiBZ5k5C.js";import"./index-BacMtczP.js";import"./index-BPUeLBAn.js";import"./ColumnLayout-Bmc6E69t.js";import"./useFieldComponent-D7thqSXy.js";import"./utils-CUPQPHYu.js";import"./useMakeFocusable-DBTYyoZy.js";import"./RadioGroup-CRfrWrGq.js";import"./FieldError-BKx1r64I.js";import"./Text-CIY7d5XG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CIigNYkb.js";import"./useLabel-D1gJfZCU.js";import"./Label-Bc_6vIfO.js";import"./Hidden-J_iPf4da.js";import"./SelectionIndicator-BpbXr_mp.js";import"./useFormValidation-CdyRJz3a.js";import"./useFocus-ChnOBFmm.js";import"./useFocusRing-DiJDuYpp.js";import"./useControlledState-AVItU9lZ.js";import"./FocusScope-BsYVWh0v.js";import"./context-DymIffM8.js";import"./useFormReset-w2Qnh74g.js";import"./usePress-S1YnS57K.js";import"./useFocusable-DVz_n5zl.js";import"./VisuallyHidden-DNvpUE5M.js";import"./IconWarning-CrJxptLM.js";import"./remote-B1GLKgHd.js";import"./Label-DtIMFOsj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BmOUgtE0.js";import"./FieldError-B3PY7-i2.js";import"./AlertText-BRg5iRF8.js";import"./AlertIcon-Dv2SXDVH.js";import"./browser-D8jMTJt0.js";import"./EmulatedBoldText-DxGIr34d.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
