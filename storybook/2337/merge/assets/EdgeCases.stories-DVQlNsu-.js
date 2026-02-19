import{j as r}from"./iframe-DepdzLEL.js";import{R as l,a as p}from"./Radio-hHuBwS8p.js";import{R as n}from"./RadioButton-C-JD9I9L.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BocY8NLZ.js";import{T as u}from"./Text-DQklyFH_.js";import{C as c}from"./Content-BP0iCj4e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-fKj6y8ty.js";import"./index-BsHBlgok.js";import"./index-QBVvmMGX.js";import"./ColumnLayout-DNt7vSZN.js";import"./useFieldComponent-PSzBC9V7.js";import"./utils-7tdA0jB4.js";import"./useMakeFocusable-DzEgQ6ky.js";import"./RadioGroup-DZcceV8X.js";import"./FieldError-BblJXfzn.js";import"./Text-CHX4WGB5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_wI2Oz7.js";import"./useLabel-B2Boz_gi.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./SelectionIndicator-D1BAj3_c.js";import"./useFormValidation-C9ltsd1k.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useControlledState-BNsQxzmb.js";import"./FocusScope-C6Ou1N9_.js";import"./context-BDIAQ50e.js";import"./useFormReset-BQp6BNc9.js";import"./usePress-BqHqHS4f.js";import"./useFocusable-Cun53ew4.js";import"./VisuallyHidden-msEuPEko.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./Label-CprHQXm7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./FieldError-BU6iaS9f.js";import"./AlertText-DwAinVf5.js";import"./AlertIcon-CRbLFRY9.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
