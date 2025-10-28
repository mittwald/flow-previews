import{j as r}from"./iframe-BvCo0Jms.js";import{R as l,b as p,a as n}from"./RadioButton-CoAFA4qM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-NQ7sLlaI.js";import{T as u}from"./Text-CM7-JVVa.js";import{C as c}from"./Content-Co8CU1F-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./index-DV2r3peR.js";import"./ColumnLayout-Bnxa3LhA.js";import"./useFieldComponent-h58tn8zy.js";import"./utils-Cw2xzcbV.js";import"./Text-BvqGhHlZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DF-Lhcnu.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./useMakeFocusable-I3KvykiR.js";import"./RadioGroup-B4s1SRXY.js";import"./Form-DLKKw6GK.js";import"./useLabel-DLhdFYyT.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./SelectionIndicator-CnEt238s.js";import"./useFormValidation-DFmu6UDs.js";import"./useFocus-C5EW73ar.js";import"./useControlledState-C0Hm7DMH.js";import"./FocusScope-Dcb5J3f3.js";import"./useFocusRing-D8FCXLiH.js";import"./context-EIbK-86q.js";import"./useFormReset-B8Yq5UFv.js";import"./usePress-BZrRujBy.js";import"./useFocusable-BxQ2X-GC.js";import"./VisuallyHidden-ch7dD1y0.js";import"./Label-9SlnZKrY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";const or={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,er as __namedExportsOrder,or as default};
