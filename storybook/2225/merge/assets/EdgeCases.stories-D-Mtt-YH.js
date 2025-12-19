import{j as r}from"./iframe-D3NxpU8u.js";import{R as l,b as p,a as n}from"./RadioButton-BQLV8c4G.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-CZSr-mbO.js";import{T as u}from"./Text-D1hVvtRE.js";import{C as c}from"./Content-DEdPzJrK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./index-A0HM7_1k.js";import"./ColumnLayout-BaFneyJX.js";import"./useFieldComponent-BWjf97vE.js";import"./utils-C5WN15Gt.js";import"./useMakeFocusable-s41lVNwz.js";import"./RadioGroup-BVKNpwaT.js";import"./FieldError-C5ECIufL.js";import"./Text-ChwArYoy.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CjVHpqWM.js";import"./useLabel-DrWOXoHd.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./useFormValidation-sS7ClLRw.js";import"./useFocus-C0SaCLF4.js";import"./useControlledState-CQ4qwdX_.js";import"./FocusScope-0a8lKbDZ.js";import"./useFocusRing-EPMGJgfm.js";import"./context-CgVi_M53.js";import"./useFormReset-LpCZRAmu.js";import"./usePress-Byc6DAfn.js";import"./useFocusable-C5GnurYQ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./Label-DxphAsDG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./FieldError-CpaS6eds.js";import"./browser-_fqBbauj.js";import"./EmulatedBoldText-BTtwXUtX.js";const er={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
