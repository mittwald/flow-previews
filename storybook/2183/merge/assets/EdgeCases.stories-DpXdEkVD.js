import{j as r}from"./iframe-BrERPjH0.js";import{R as l,a as p}from"./Radio-DbDn7Afg.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Csfgildu.js";import{T as u}from"./Text-Bge3UWaD.js";import{C as c}from"./Content-CLxF-PAZ.js";import{R as n}from"./RadioButton-Mmy8SdGh.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./index-DzMVKTvo.js";import"./ColumnLayout-BZTMZeP0.js";import"./useFieldComponent-WOZCxk1N.js";import"./utils-DSRl4UW4.js";import"./useMakeFocusable-D20de9J-.js";import"./RadioGroup-CIDDtS4G.js";import"./FieldError-DI8l-yzx.js";import"./Text-CFQd4N__.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CRLN4oBl.js";import"./useLabel-CWOKZ_16.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./useFormValidation-sc5NnAzh.js";import"./useFocus-BqH6bZyL.js";import"./useControlledState-C9HQthZh.js";import"./FocusScope-BjIKDCVD.js";import"./useFocusRing-KYw8u7bF.js";import"./context-DvwVEH9h.js";import"./useFormReset-Bw5L0YJo.js";import"./usePress-CXQYTWPh.js";import"./useFocusable-_eZhQVeM.js";import"./VisuallyHidden-BT85nAIH.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconRadioOn-DXDafKh6.js";import"./Label-CrwXzsx_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./FieldError-H2u6oDij.js";import"./IconDanger-CeY6S6MU.js";import"./browser-YFSmfPOL.js";import"./EmulatedBoldText-ihVL4TkF.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
