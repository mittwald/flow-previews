import{j as r}from"./iframe-BRGIT6aC.js";import{R as l,a as p}from"./Radio-D3gi0pjV.js";import{R as n}from"./RadioButton-Ke9k9ajZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DYHikkcG.js";import{T as u}from"./Text-RxDad6dn.js";import{C as c}from"./Content-0qRAp0uE.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./ColumnLayout-CZ-n329w.js";import"./useFieldComponent-CMRD4Pyo.js";import"./utils-D-ssFu49.js";import"./useMakeFocusable-cUXh9Ssu.js";import"./RadioGroup-Bxa6CcFt.js";import"./FieldError-f7o5-LTX.js";import"./Text-CBpyQBbE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-97YOGsKi.js";import"./useLabel-CWpJX9lW.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./SelectionIndicator-BbWx7qoh.js";import"./useFormValidation-D-IfNlYy.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useControlledState-C2xaeP2Y.js";import"./FocusScope-D2KgIyLw.js";import"./context-C5al0DRJ.js";import"./useFormReset-CXZmek7W.js";import"./usePress-CGLZGzkl.js";import"./useFocusable-Bmr3Drft.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./Label-DYHgdjdj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./FieldError-BPfKA2u4.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";import"./browser-BYxlW31W.js";import"./EmulatedBoldText-D5rj6KVU.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
