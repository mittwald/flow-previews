import{j as r}from"./iframe-DoM-BIwg.js";import{R as l,b as p,a as n}from"./RadioButton-Ce2vJU3h.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CPyJhXis.js";import{T as u}from"./Text-lsEUOuuk.js";import{C as c}from"./Content-CpENL-HX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./ColumnLayout-y6wtjrbv.js";import"./useFieldComponent-CZ4YFclL.js";import"./utils-D5il_mPj.js";import"./useMakeFocusable-D08RBjuo.js";import"./RadioGroup-CTjnsv2x.js";import"./FieldError-CHU7gQK7.js";import"./Text-CiXcXSql.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BRbECj4N.js";import"./useLabel-Cp7FQmHU.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./SelectionIndicator-D4zCj7sf.js";import"./useFormValidation-lvugQbRf.js";import"./useFocus-ClxCJYgX.js";import"./useControlledState--GEywRyg.js";import"./FocusScope-DbX1j6h6.js";import"./useFocusRing-Bar7hbU_.js";import"./context-CSqA08Z3.js";import"./useFormReset-DsbUUfuN.js";import"./usePress-v4r7x8aW.js";import"./useFocusable-Cy5CQHPW.js";import"./VisuallyHidden-GPtOnQVg.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./Label-BFVzgZLR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./FieldError-D1hjQVoV.js";import"./AlertText-DEPqS5ry.js";import"./AlertIcon-Mg7Q3zgv.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};
