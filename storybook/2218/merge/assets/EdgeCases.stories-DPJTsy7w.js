import{j as r}from"./iframe-BVdPrJ3b.js";import{R as l,b as p,a as n}from"./RadioButton-DaG7JUc4.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-DiDvRTQM.js";import{T as u}from"./Text-nQWL8z2r.js";import{C as c}from"./Content-k2o_zaJ5.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./index-BWMeLKrj.js";import"./ColumnLayout-D3kFN4Gg.js";import"./useFieldComponent-Pua8aj4t.js";import"./utils-BEq1Wr11.js";import"./useMakeFocusable-Du4vyJos.js";import"./RadioGroup-BFuLjZrq.js";import"./FieldError-BhKmMJaW.js";import"./Text-CmXVeCCc.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BeiuGm7T.js";import"./useLabel-CZZK6Myr.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./SelectionIndicator-BRRaId4S.js";import"./useFormValidation-BHFBjW_A.js";import"./useFocus-DKH0A8r5.js";import"./useControlledState-CgIeep-j.js";import"./FocusScope-Bh-KjmdJ.js";import"./useFocusRing-D6WsekYV.js";import"./context-D026yTy_.js";import"./useFormReset-DipgmSs2.js";import"./usePress-DUwPxRbX.js";import"./useFocusable-CP0kX89o.js";import"./VisuallyHidden-BtVtJU_V.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./Label-CzweG7Yl.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CWJICem7.js";import"./FieldError-BeQ9X37c.js";import"./browser-DSBfFWZr.js";import"./EmulatedBoldText-BVln2yP5.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
