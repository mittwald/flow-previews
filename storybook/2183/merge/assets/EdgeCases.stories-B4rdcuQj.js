import{j as r}from"./iframe-BsCnutBU.js";import{R as l,a as p}from"./Radio-DfgJZKjc.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-FRy3J_ec.js";import{T as u}from"./Text-CNxpKe1i.js";import{C as c}from"./Content-uXst8Kps.js";import{R as n}from"./RadioButton-Dm_hus6u.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./ColumnLayout-CewcDetX.js";import"./useFieldComponent-DKQov8fN.js";import"./utils-Dcbzlj6n.js";import"./useMakeFocusable-CpKqisI1.js";import"./RadioGroup-BvvvRv81.js";import"./FieldError-oQwctYYH.js";import"./Text-BOWjpC0c.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-te5EpUcA.js";import"./useLabel-CiTBxdfM.js";import"./Label-B_59qcJ5.js";import"./Hidden-gYrC-ftW.js";import"./SelectionIndicator-Baq8cblo.js";import"./useFormValidation-hrdfW_GO.js";import"./useFocus-zRbhNQvs.js";import"./useControlledState-CigtIRD8.js";import"./FocusScope-Bn9eK5Im.js";import"./useFocusRing-eAFZ6BYE.js";import"./context-DzQn9XcF.js";import"./useFormReset-DwCUeF5J.js";import"./usePress-CHCx2MC1.js";import"./useFocusable-Czch9xtI.js";import"./VisuallyHidden-xvADZrl6.js";import"./IconChevronDown-C43PU1K-.js";import"./remote-LwvHvQd9.js";import"./IconRadioOn-CzH_OeVl.js";import"./Label-DBiwGOqI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./FieldError-CJPS-seQ.js";import"./IconDanger-d9R36P01.js";import"./browser-b7DWXv2S.js";import"./EmulatedBoldText-DyWG-htd.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
