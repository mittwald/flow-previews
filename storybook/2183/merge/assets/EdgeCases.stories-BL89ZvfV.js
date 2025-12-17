import{j as r}from"./iframe-UtMdsYXa.js";import{R as l,a as p}from"./Radio-DHpiNHSq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BD4vPcq5.js";import{T as u}from"./Text-TG940Z8h.js";import{C as c}from"./Content-CVru0Bfo.js";import{R as n}from"./RadioButton-MSH-Q-d6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./index-BrcrHHEG.js";import"./ColumnLayout-kQW6knRx.js";import"./useFieldComponent-CylG0yj1.js";import"./utils-43m9YPYy.js";import"./useMakeFocusable-DQeutXrF.js";import"./RadioGroup-D99BOkNB.js";import"./FieldError-BkBhZCre.js";import"./Text-3HTz8ZLb.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-47Gl7tXu.js";import"./useLabel-CtsciHmS.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./useFormValidation-BfzGcjKC.js";import"./useFocus-BaPf3vXr.js";import"./useControlledState-DYYNjqGW.js";import"./FocusScope-ZZQ9tzAD.js";import"./useFocusRing-C5G5IFoS.js";import"./context-BpPaGDcf.js";import"./useFormReset-ZjFHD53Q.js";import"./usePress-NZb7prl9.js";import"./useFocusable-DoTzQtzG.js";import"./VisuallyHidden-DNcxVgpY.js";import"./IconChevronDown-DitnVNWB.js";import"./remote-YAokn8An.js";import"./IconRadioOn-CmHJXNMK.js";import"./Label-CXp4zhoD.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./FieldError-BmlJMAuy.js";import"./IconDanger-hxBcn6Cd.js";import"./browser-DFxdAZBn.js";import"./EmulatedBoldText-CWBgkHDb.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
