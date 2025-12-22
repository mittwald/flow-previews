import{j as r}from"./iframe-DALg75d7.js";import{R as l,b as p,a as n}from"./RadioButton-BCqONoF5.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CgCN1nF2.js";import{T as u}from"./Text-BfSm9wB3.js";import{C as c}from"./Content-DqvNxaOd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./index-BOS789La.js";import"./ColumnLayout-CXNCJzww.js";import"./useFieldComponent-BaBZIB3g.js";import"./utils-CCMGMBS3.js";import"./useMakeFocusable-B3XwzvLG.js";import"./RadioGroup-2GjkvO2V.js";import"./FieldError-B5AAUQ1i.js";import"./Text-CuJqaQ90.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-ChRHrJTG.js";import"./useLabel-C6FFt053.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./useFormValidation-jiwCVXG0.js";import"./useFocus-uyJaeSg2.js";import"./useControlledState-10c65vgi.js";import"./FocusScope-CEIkcXTC.js";import"./useFocusRing-DgbRXdyO.js";import"./context-D-SwIuvT.js";import"./useFormReset-D3blZuYj.js";import"./usePress-BlF5TfdE.js";import"./useFocusable-KXnvIYuK.js";import"./VisuallyHidden-BtdNRxOz.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./Label-CllN_pGF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./FieldError-JMY6vjHT.js";import"./browser-BOjJAEEq.js";import"./EmulatedBoldText-BXgIlIDh.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
