import{j as r}from"./iframe-BpEavT04.js";import{R as p,b as l,a as n}from"./RadioButton-DeA2YYeE.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cq-TQm-s.js";import{T as u}from"./Text-CcXeyI30.js";import{C as c}from"./Content-BJBM2hDl.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./FieldError-DY8OUBEl.js";import"./IconWarning-vA6HsYJq.js";import"./FieldError-BmEWAGf_.js";import"./utils-CpHgE-S6.js";import"./Text-DWLjOUr2.js";import"./filterDOMProps-i7L6S0l1.js";import"./ColumnLayout-DqbzJnhq.js";import"./FormField.module-B9AzUSUD.js";import"./RadioGroup-B4wToVG_.js";import"./Form-DJ2svD4f.js";import"./useFocus-BaJLfW1J.js";import"./useLabel-6-vYiz3X.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./useFormReset-CovQJR7M.js";import"./usePress-DGfPwR5g.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./FocusScope-CJ6Nm8ct.js";import"./context-1jMNVxHt.js";import"./VisuallyHidden-DD5pbayJ.js";import"./useControlledState-Cjeeyz03.js";import"./Label-CiJybHgW.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";const X={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:o=>r.jsxs(p,{...o,defaultValue:"a","aria-label":"Label",children:[r.jsxs(l,{value:"a",children:[a.long," "]}),r.jsxs(l,{value:"b",children:[a.long," "]}),r.jsx(l,{value:"c",children:a.long})]})},i={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},e))})},m={render:o=>r.jsx(p,{...o,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,e)=>r.jsxs(n,{value:e.toString(),children:["Option ",e+1]},e))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Y=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,Y as __namedExportsOrder,X as default};
