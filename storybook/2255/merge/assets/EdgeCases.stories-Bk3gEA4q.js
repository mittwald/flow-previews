import{j as r}from"./iframe-DEsugzBP.js";import{R as l,b as p,a as n}from"./RadioButton-C5oxDfAV.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Dnfibu1A.js";import{T as u}from"./Text-CGG2whlc.js";import{C as c}from"./Content-ClOZ25PI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B7M9EemL.js";import"./index-JNFFaqnL.js";import"./index-DvVsbrc7.js";import"./ColumnLayout-kKoMxbwM.js";import"./useFieldComponent-CoV9Rbdv.js";import"./utils-k3goWFVI.js";import"./useMakeFocusable-DseunmT_.js";import"./RadioGroup-M5N_F-HN.js";import"./FieldError-DL7mdN7X.js";import"./Text-CGX30jhe.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BBNX_R9o.js";import"./useLabel-Bn9RRRKS.js";import"./Label-CT9VczkM.js";import"./Hidden-B9rA9ATP.js";import"./SelectionIndicator-BsQYAog2.js";import"./useFormValidation-DCx77s5O.js";import"./useFocus-B3AZuBYY.js";import"./useControlledState-Dcr_irR6.js";import"./FocusScope-BvFRWRMs.js";import"./useFocusRing-DuZx28fv.js";import"./context-BA9NBDMH.js";import"./useFormReset-D1Ly9aDH.js";import"./usePress-CsaWzeZC.js";import"./useFocusable-Bwqhhmq3.js";import"./VisuallyHidden-DVFgokJG.js";import"./IconWarning-qDYXGw-D.js";import"./remote-Bm53ArvY.js";import"./Label-DyIqFkt_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DuBUNj0e.js";import"./FieldError-D0RH6F7V.js";import"./AlertText-B9jVXJTC.js";import"./AlertIcon-CMe_dxq6.js";import"./browser-DSOUTdOR.js";import"./EmulatedBoldText-6jL3QUey.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
