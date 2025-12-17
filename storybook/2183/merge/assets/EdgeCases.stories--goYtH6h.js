import{j as r}from"./iframe-Be6XOKZ5.js";import{R as l,a as p}from"./Radio-BWTDKE7T.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-C8gjsgni.js";import{T as u}from"./Text-BB90vNXB.js";import{C as c}from"./Content-CfBsS2Yg.js";import{R as n}from"./RadioButton-DB9zfB9t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./ColumnLayout-Y4bcuewQ.js";import"./useFieldComponent-DyzWtSt-.js";import"./utils-DTrZMB6V.js";import"./useMakeFocusable-D9dGwa08.js";import"./RadioGroup-Ct0rLlIq.js";import"./FieldError-eVRm8xCS.js";import"./Text-BTmMxR_a.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C9wSRzl5.js";import"./useLabel-DMWHK1ZY.js";import"./Label-Da4d84kD.js";import"./Hidden-B9nXAMyK.js";import"./SelectionIndicator-CQaSWhBM.js";import"./useFormValidation-DMz_tWT4.js";import"./useFocus-DYvnwNR4.js";import"./useControlledState-D8v_kqVI.js";import"./FocusScope-BGhm_0o7.js";import"./useFocusRing-B31Et6wQ.js";import"./context-Y40TL0Hk.js";import"./useFormReset-Bo-wy8NL.js";import"./usePress-CK7mbUzy.js";import"./useFocusable-DlKb8H3E.js";import"./VisuallyHidden-G45Y0eAf.js";import"./IconApp-BnAy9RaD.js";import"./remote-D-Pq4nVM.js";import"./IconRadioOn-xMmxRxAD.js";import"./Label-BV6L8qwz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./FieldError-nKJnRYyC.js";import"./IconDanger-CuHxVEgS.js";import"./browser-DsJM6Avf.js";import"./EmulatedBoldText-BA4PJkye.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
