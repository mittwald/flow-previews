import{j as r}from"./iframe-DqAMh1gn.js";import{R as l,b as p,a as n}from"./RadioButton-DWKd1Pj-.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DC7yMY5l.js";import{T as u}from"./Text-1p9r91sB.js";import{C as c}from"./Content-Bf8h4lUz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./ColumnLayout-C13WXOtQ.js";import"./useFieldComponent-CgfE5MLg.js";import"./utils-WhkxUCK6.js";import"./useMakeFocusable-DPrLqbQ7.js";import"./RadioGroup-BcpOF6zD.js";import"./FieldError-Cat2GNj4.js";import"./Text-DmUxfOW-.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-y2x5EeW4.js";import"./useLabel-BKYm2rJO.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./SelectionIndicator-Qt-acHPk.js";import"./useFormValidation-Bmx8yPSj.js";import"./useFocus-Cr8fiyXD.js";import"./useControlledState-ChPR7hzM.js";import"./FocusScope-azgg1m0B.js";import"./useFocusRing-BN14JWVs.js";import"./context-DRhwbml9.js";import"./useFormReset-CllrYVFd.js";import"./usePress-ClkvTl3z.js";import"./useFocusable-DO1mJmot.js";import"./VisuallyHidden-B3gyx1tV.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./Label-CvBjm4aX.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./FieldError-DFC5bA5N.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";const tr={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ir=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ir as __namedExportsOrder,tr as default};
