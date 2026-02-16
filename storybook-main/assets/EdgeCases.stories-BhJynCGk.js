import{j as r}from"./iframe-C5ZTNo7B.js";import{R as l,a as p}from"./Radio-Pw12C0kN.js";import{R as n}from"./RadioButton-CHO8hjJf.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BYtkAmEB.js";import{T as u}from"./Text-vc01bOb1.js";import{C as c}from"./Content-CH2yQGd8.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./index-L0hXSSnD.js";import"./ColumnLayout-1ZzJqkhJ.js";import"./useFieldComponent-hFC9tXxl.js";import"./utils-BuDA3Ujk.js";import"./useMakeFocusable-D4exx3u2.js";import"./RadioGroup-BUb7iHoA.js";import"./FieldError-CU71BOGK.js";import"./Text-DfHOPDAf.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CMpIiu9M.js";import"./useLabel-BfXWSkVN.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./useFormValidation-CtRrQmcu.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./useControlledState-e_mWhKHk.js";import"./FocusScope-PkAgaAiM.js";import"./context-Zfd40gqJ.js";import"./useFormReset-D7awHB0C.js";import"./usePress-ef-k5VSc.js";import"./useFocusable-DlWx3Zdp.js";import"./VisuallyHidden-eGwjz06V.js";import"./IconWarning-Bhk_rtuP.js";import"./remote-DVpXA9eO.js";import"./Label-D_0GeMuu.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./FieldError-BDB9mSsz.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
