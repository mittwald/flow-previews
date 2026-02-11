import{j as r}from"./iframe-wn9t8CHT.js";import{R as l,a as p}from"./Radio-B0gAzyT1.js";import{R as n}from"./RadioButton-D5ac3DzF.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-ayoMGbJq.js";import{T as u}from"./Text-vlZ105c0.js";import{C as c}from"./Content-YNJPl9s6.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./index-DGBNuX5e.js";import"./ColumnLayout-BdV07wMC.js";import"./useFieldComponent-CuQvVX64.js";import"./utils-BBqjM3mV.js";import"./useMakeFocusable-DtmUrEx7.js";import"./RadioGroup-BLa8Kveb.js";import"./FieldError-BriaHAsp.js";import"./Text-CigTZLQg.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BpC7EEKj.js";import"./useLabel-CfKSfnQU.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./SelectionIndicator-Drl_jI2J.js";import"./useFormValidation-DyGMCXIt.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./useControlledState-Ckzcuwb2.js";import"./FocusScope-Cff801J_.js";import"./context-DUIKEoYM.js";import"./useFormReset-BfPrTbq9.js";import"./usePress-febwKXtN.js";import"./useFocusable-MJ0CU3Gf.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./IconWarning-B-Wnft1S.js";import"./remote-BKPU2Q50.js";import"./Label-5bTXkWLT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./FieldError-C9AtZQjZ.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";import"./browser-C4GSjbSD.js";import"./EmulatedBoldText-BRurVn-6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
