import{j as r}from"./iframe-1XlmVqd5.js";import{R as l,a as p}from"./Radio-DcGY2Kym.js";import{R as n}from"./RadioButton-Cn19ZYod.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DVUQbhJj.js";import{T as u}from"./Text-DoMRIGKc.js";import{C as c}from"./Content-DoggiYsd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./ColumnLayout-Mi9R4PCn.js";import"./useFieldComponent--2vv_KDv.js";import"./utils-DcI_f0WL.js";import"./useMakeFocusable-CtWDf-qa.js";import"./RadioGroup-CILEHgVo.js";import"./FieldError-gWTdIqt3.js";import"./Text-DC6xHoyY.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XQS-LbjO.js";import"./useLabel-CWL3lRor.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./SelectionIndicator-qE_U9bCq.js";import"./useFormValidation-BKr0RaqD.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useControlledState-DjEU-0mZ.js";import"./FocusScope-cwCTJx2V.js";import"./context-cVtndIAK.js";import"./useFormReset-DNo3mt-e.js";import"./usePress-CBxBnL8r.js";import"./useFocusable-BsD1LxMy.js";import"./VisuallyHidden-Dm6nphJv.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./Label-DewN6HGl.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./FieldError-D3E1IfUM.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
