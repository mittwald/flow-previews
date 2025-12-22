import{j as r}from"./iframe-Dq6d4A4K.js";import{R as l,b as p,a as n}from"./RadioButton-DidJxlCD.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BvrU8IL_.js";import{T as u}from"./Text-0vHLnm-v.js";import{C as c}from"./Content-BfGVP9-p.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CtCwQzJi.js";import"./index-Bhk-cyr2.js";import"./index-cJyKvq7H.js";import"./ColumnLayout-DzvwWulC.js";import"./useFieldComponent-lf4P9InL.js";import"./utils-JgkAdQlm.js";import"./useMakeFocusable-meS6aEVL.js";import"./RadioGroup-C83vhs5A.js";import"./FieldError-DP91cGbX.js";import"./Text-BYQ1lWMY.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-q3JpQbyd.js";import"./useLabel-wLk1TVQc.js";import"./Label-D2o2XqmC.js";import"./Hidden-aa2iYn_Y.js";import"./SelectionIndicator-Cx0hTJGG.js";import"./useFormValidation-wNB2SuId.js";import"./useFocus-CdRm64Xm.js";import"./useControlledState-B_V0UpKw.js";import"./FocusScope-Bbcwxc4u.js";import"./useFocusRing-HiCcztDi.js";import"./context-Dane2eIN.js";import"./useFormReset-D6HDlpz3.js";import"./usePress-BTTZyaX9.js";import"./useFocusable-SW4CEV0n.js";import"./VisuallyHidden-DiG4H0lP.js";import"./IconWarning-CufYr70B.js";import"./remote-9zlx4mlg.js";import"./Label-B5IUeoBf.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DsfTy_q5.js";import"./FieldError-3R6U5-ci.js";import"./browser-DRZjKHqy.js";import"./EmulatedBoldText-D7VkYRRX.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongTexts","MultipleRadioButtons","SmallSpace"];export{t as LongTexts,i as MultipleRadioButtons,m as SmallSpace,ar as __namedExportsOrder,er as default};
