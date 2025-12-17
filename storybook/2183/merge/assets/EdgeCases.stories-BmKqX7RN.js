import{j as r}from"./iframe-DCi2GPXy.js";import{R as l,a as p}from"./Radio-BSnc_9J_.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Ckcrew8q.js";import{T as u}from"./Text-DKbhm8jI.js";import{C as c}from"./Content-D7i3lVVV.js";import{R as n}from"./RadioButton-B8RH7U8I.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./ColumnLayout-CClcltuM.js";import"./useFieldComponent-D5bCUPLo.js";import"./utils-vPyJ8qyD.js";import"./useMakeFocusable-BEwhmbVc.js";import"./RadioGroup-CsRvOeBm.js";import"./FieldError-GB-3lq6u.js";import"./Text-X37FrECZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Dfwyevmy.js";import"./useLabel-BQBPJRIA.js";import"./Label-DnXzFWpe.js";import"./Hidden-DFhlcUMl.js";import"./SelectionIndicator-DyawlqQX.js";import"./useFormValidation-DJEczJgL.js";import"./useFocus-BbmRhFNN.js";import"./useControlledState-BQWMCLKx.js";import"./FocusScope-BD5WMWoq.js";import"./useFocusRing-B2V87-QL.js";import"./context-BTmRaMcH.js";import"./useFormReset-C2pwuPUB.js";import"./usePress-CLUDhytQ.js";import"./useFocusable-DMPmR1e2.js";import"./VisuallyHidden-DrUI8NEq.js";import"./IconChevronDown-DONjXQZK.js";import"./remote-BdJtJUco.js";import"./IconRadioOn-B_sKPIP1.js";import"./Label-DgDJIBjn.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./FieldError-CX3tsRfV.js";import"./IconDanger-RXl46e71.js";import"./browser-rXh1EgRD.js";import"./EmulatedBoldText-BEONMvy5.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
