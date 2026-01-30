import{j as r}from"./iframe-K4Kgzs5d.js";import{R as l,a as p}from"./Radio-CsgHfpyx.js";import{R as n}from"./RadioButton-BGCuJ_Te.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CvLTwizG.js";import{T as u}from"./Text-BPEkrilU.js";import{C as c}from"./Content-Bke5eZdg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./ColumnLayout-Q0wEQXCG.js";import"./useFieldComponent-XDoLqUAT.js";import"./utils--XC5cWbY.js";import"./useMakeFocusable-DsE4FH7x.js";import"./RadioGroup-BkAQkVW1.js";import"./FieldError-CDQ9nLxM.js";import"./Text-DhK76AHe.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeqJ_QXS.js";import"./useLabel-IleSnN60.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./SelectionIndicator-LfvmrL3H.js";import"./useFormValidation-QT1HCjbB.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useControlledState-UcCiEhN3.js";import"./FocusScope-A43bauPW.js";import"./context-BHsz5d3m.js";import"./useFormReset-Bu0cPn5B.js";import"./usePress-Bsv_-vru.js";import"./useFocusable-H6UpmrOx.js";import"./VisuallyHidden-DOfAC-AS.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Label-BHhszR2e.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./FieldError-BIdQs2eG.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";import"./browser-9MG5lDdh.js";import"./EmulatedBoldText-CJYMqRLn.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
