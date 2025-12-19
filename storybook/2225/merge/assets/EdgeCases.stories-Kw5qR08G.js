import{j as r}from"./iframe-DyIQYB7R.js";import{R as l,b as p,a as n}from"./RadioButton-rbcJfLlw.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BRyobNHY.js";import{T as u}from"./Text-DP5VQe4y.js";import{C as c}from"./Content-CVTbR1-h.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./index-BAJQpnn3.js";import"./ColumnLayout-H9oEHPqH.js";import"./useFieldComponent-BuMHMJdd.js";import"./utils-Br5k-T_U.js";import"./useMakeFocusable-YWyJR1nk.js";import"./RadioGroup-BGwUO7dw.js";import"./FieldError-CJCkmHNP.js";import"./Text--49tgveg.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Ce0HMGMO.js";import"./useLabel-Cx64g9XI.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./useFormValidation-BzfV6dUL.js";import"./useFocus-MkZ0Yize.js";import"./useControlledState-C9rhpCZz.js";import"./FocusScope-CPYLtjFE.js";import"./useFocusRing-Dsvy8-H7.js";import"./context-DQwa7-Zw.js";import"./useFormReset-DbNMnmkG.js";import"./usePress-DBMxrrfH.js";import"./useFocusable-BzRC0Akk.js";import"./VisuallyHidden-CpJBcPMb.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./Label-Bnl2XRS7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./FieldError-Drb2NmJE.js";import"./browser-Dsy2EDmz.js";import"./EmulatedBoldText-B3WFDqoc.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};
