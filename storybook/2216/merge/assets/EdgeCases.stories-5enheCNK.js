import{j as r}from"./iframe-CYPvHnuu.js";import{R as l,b as p,a as n}from"./RadioButton-EfoXs4mF.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-Cvj1f_bK.js";import{T as u}from"./Text-B7HPZf5X.js";import{C as c}from"./Content-CEzrJQY2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./index-CuYxJU0p.js";import"./ColumnLayout-BRt211ul.js";import"./useFieldComponent-K4osF3of.js";import"./utils---ZBHqUT.js";import"./useMakeFocusable-CerEYjjB.js";import"./RadioGroup-B-apbVKc.js";import"./FieldError-DKbYNsKn.js";import"./Text-CELcxyth.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bjo4WKP7.js";import"./useLabel-DsmrWctO.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./SelectionIndicator-CQjOYyqW.js";import"./useFormValidation-BOj1NNIZ.js";import"./useFocus-Besr2u9O.js";import"./useControlledState-CzL0wnxp.js";import"./FocusScope-CPpTYY10.js";import"./useFocusRing-CwF8Yxqy.js";import"./context-Dv0AyQUz.js";import"./useFormReset-DMfMEm_f.js";import"./usePress-BAll9lzw.js";import"./useFocusable-DNqkvuS2.js";import"./VisuallyHidden-DQ4VZa68.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./Label-BTRY4Fha.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./FieldError-BvWeuB1p.js";import"./browser-DHkGBw9W.js";import"./EmulatedBoldText-BplpewOf.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
