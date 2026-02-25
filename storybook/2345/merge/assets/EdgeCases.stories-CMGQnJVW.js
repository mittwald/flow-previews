import{j as r}from"./iframe-Bh3xJiHl.js";import{R as l,a as p}from"./Radio-YagpG-lp.js";import{R as n}from"./RadioButton-DyErG9qZ.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import s from"./Default.stories-BMxotqrj.js";import{T as u}from"./Text-yap4nkEx.js";import{C as c}from"./Content-DW0SliHj.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3sfiT_Y.js";import"./index-BFDJcR6G.js";import"./index-CTdhbmBU.js";import"./ColumnLayout-B2HEqZuj.js";import"./useFieldComponent-DixKAqTB.js";import"./utils-Dfx959rT.js";import"./useMakeFocusable-DtIvTV-O.js";import"./RadioGroup-Cie-trRO.js";import"./FieldError-DSfA25Iv.js";import"./Text-CYmLgYN4.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BYhBcXhc.js";import"./useLabel-CXwac_uq.js";import"./Label-Dluta3ia.js";import"./Hidden-DdbuHEan.js";import"./SelectionIndicator-CiZnwtLL.js";import"./useFormValidation-DFhVz88J.js";import"./useFocus-BHtMPlKM.js";import"./useFocusRing-BHUB4uMx.js";import"./useControlledState-cRERDsL1.js";import"./FocusScope-DSBEK_-_.js";import"./context-BR0BeWgQ.js";import"./useFormReset-CbcSutFk.js";import"./usePress-B8ZJpDXl.js";import"./useFocusable-BqTTqTxS.js";import"./VisuallyHidden-CnocgGJn.js";import"./IconWarning-BO5-ThfV.js";import"./remote-Bp1RK0aJ.js";import"./Label-SNmrw9Fy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C9w1tvwK.js";import"./FieldError-BT5CTe02.js";import"./AlertText-29lF4HJO.js";import"./AlertIcon-BebRztpd.js";import"./browser-8DYgdl68.js";import"./EmulatedBoldText-jamwOsD6.js";const ir={title:"Form Controls/RadioGroup/Edge Cases",...s},t={render:e=>r.jsxs(l,{...e,defaultValue:"a","aria-label":"Label",children:[r.jsxs(p,{value:"a",children:[a.long," "]}),r.jsxs(p,{value:"b",children:[a.long," "]}),r.jsx(p,{value:"c",children:a.long})]})},i={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",l:[1,1,1,1],children:Array(6).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:[r.jsx(u,{children:a.medium}),r.jsx(c,{children:a.medium})]},o))})},m={render:e=>r.jsx(l,{...e,defaultValue:"0","aria-label":"Label",children:Array(3).fill("").map((d,o)=>r.jsxs(n,{value:o.toString(),children:["Option ",o+1]},o))}),parameters:{viewport:{defaultViewport:"mobile1"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
